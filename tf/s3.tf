
resource "aws_s3_bucket" "hiit-tribe" {
  bucket = "hiit-tribe-${terraform.workspace}"
  acl    = "private"

  tags = {
    Name        = "target-app"
    Environment = "gym"
  }

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "PUT", "POST", "DELETE"]
    allowed_origins = ["*"]
    expose_headers  = ["ETag"]
  }
}
