resource "aws_db_subnet_group" "hiit_tribe" {
  name       = "hiit_tribe"
  subnet_ids = ["${aws_subnet.eu_west_2a.id}", "${aws_subnet.eu_west_2b.id}"]
}

resource "aws_db_instance" "hiit-tribe" {
  allocated_storage       = 20
  storage_type            = "gp2"
  engine                  = "postgres"
  engine_version          = "10.6"
  instance_class          = "db.t2.micro"
  name                    = "hiit_tribe"
  port                    = 5432
  username                = "postgres"
  password                = "jhskdghfkjdshsadfgeuwyjsg21das1"
  publicly_accessible     = true
  vpc_security_group_ids  = ["${aws_security_group.allow_all_traffic.id}"]
  db_subnet_group_name    = aws_db_subnet_group.hiit_tribe.id
}