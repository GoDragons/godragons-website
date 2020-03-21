resource "aws_cognito_identity_pool" "hiit_tribe" {
  identity_pool_name               = "hiit tribe"
  allow_unauthenticated_identities = true
}

resource "aws_cognito_user_pool" "hiit_tribe" {
  name = "hiit tribe"
}