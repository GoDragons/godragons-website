

resource "aws_lb" "hiit_tribe_dev" {
  name               = "hiit-tribe-dev"
  internal           = false
  load_balancer_type = "application"
  security_groups    = ["${aws_security_group.allow_all_traffic.id}"]
  subnets            = flatten(["${aws_subnet.eu_west_2a.*.id}", "${aws_subnet.eu_west_2b.*.id}"])


  # enable_deletion_protection = true

  tags = {
    target_app = "hiit-tribe-dev"
  }
}

resource "aws_lb_listener" "hiit_tribe_dev" {
  load_balancer_arn = aws_lb.hiit_tribe_dev.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    target_group_arn = aws_lb_target_group.hiit_tribe_dev.arn
    type             = "forward"
  }
}

resource "aws_lb_target_group" "hiit_tribe_dev" {
  name        = "hiit-tribe-dev"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  depends_on  = [aws_lb.hiit_tribe_dev]
  target_type = "ip"
}
