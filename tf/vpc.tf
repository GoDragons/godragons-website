resource "aws_vpc" "main" {
  cidr_block                       = "10.0.0.0/16"
  assign_generated_ipv6_cidr_block = true
  enable_dns_hostnames             = true
}

resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
}

resource "aws_instance" "nat" {
  ami                         = "ami-029dbaca987ff4afe"
  availability_zone           = "eu-west-2a"
  instance_type               = "t2.micro"
  vpc_security_group_ids      = ["${aws_security_group.allow_all_traffic.id}"]
  subnet_id                   = aws_subnet.eu_west_2a.id
  associate_public_ip_address = true
  source_dest_check           = false
}

resource "aws_eip" "nat" {
  instance = aws_instance.nat.id
  vpc      = true
}

resource "aws_security_group" "allow_all_traffic" {
  name        = "allow_all_traffic"
  description = "Allow All traffic"
  vpc_id      = aws_vpc.main.id

  ingress {
    # TLS (change to whatever ports you need)
    from_port = 0
    to_port   = 0
    protocol  = "-1"
    # Please restrict your ingress to only necessary IPs and ports.
    # Opening to 0.0.0.0/0 can lead to security vulnerabilities.
    cidr_blocks = ["0.0.0.0/0"] # add a CIDR block here
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_subnet" "eu_west_2a" {
  vpc_id                          = aws_vpc.main.id
  cidr_block                      = "10.0.1.0/24"
  availability_zone               = "eu-west-2a"
  map_public_ip_on_launch         = true
  assign_ipv6_address_on_creation = true
  ipv6_cidr_block                 = "${substr(aws_vpc.main.ipv6_cidr_block, 0, 17)}1::/64"
  # ipv6_cidr_block = "${aws_vpc.main.ipv6_cidr_block}"
}

resource "aws_subnet" "eu_west_2b" {
  vpc_id                          = aws_vpc.main.id
  cidr_block                      = "10.0.2.0/24"
  availability_zone               = "eu-west-2b"
  map_public_ip_on_launch         = true
  assign_ipv6_address_on_creation = true
  ipv6_cidr_block                 = "${substr(aws_vpc.main.ipv6_cidr_block, 0, 17)}2::/64"
  # ipv6_cidr_block = "${aws_vpc.main.ipv6_cidr_block}"
}
# resource "aws_egress_only_internet_gateway" "main" {
#   vpc_id = "${aws_vpc.main.id}"
# }


resource "aws_route_table" "eu_west_2a_route_table" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  route {
    ipv6_cidr_block = "::/0"
    gateway_id      = aws_internet_gateway.main.id
  }
}

resource "aws_route_table" "eu_west_2b_route_table" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  route {
    ipv6_cidr_block = "::/0"
    gateway_id      = aws_internet_gateway.main.id
  }
}

resource "aws_route_table_association" "eu_west_2a" {
  subnet_id      = aws_subnet.eu_west_2a.id
  route_table_id = aws_route_table.eu_west_2a_route_table.id
}

resource "aws_route_table_association" "eu_west_2b" {
  subnet_id      = aws_subnet.eu_west_2b.id
  route_table_id = aws_route_table.eu_west_2b_route_table.id
}
