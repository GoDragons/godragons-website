resource "aws_ecr_repository" "hiit_tribe" {
  name = "hiit-tribe"
}

resource "aws_ecr_lifecycle_policy" "hiit_tribe" {
  repository = aws_ecr_repository.hiit_tribe.name

  policy = <<EOF
{
    "rules": [
      {
        "rulePriority": 1,
        "description": "Expire untagged images",
        "selection": {
          "tagStatus": "untagged",
          "countType": "imageCountMoreThan",
          "countNumber": 1
        },
        "action": {
          "type": "expire"
        }
      }
    ]
}
EOF
}
