variable "instance_type" {
  description = "Type of EC2 instances to use"
  default     = "t2.micro"
}

variable "instance_types" {
  type = map(string)
  default = {
    "dev"  = "t2.micro"
    "prod" = "t2.small"
  }
}

variable "availability_zone" {
  description = ""
  default     = "eu-west-2a"
}
