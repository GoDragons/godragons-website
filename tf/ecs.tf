
data "aws_iam_role" "ecs_task_execution_role" {
  name = "ecs_role"
}

resource "aws_ecs_cluster" "hiit_tribe_dev" {
  name = "hiit_tribe_dev"
}

resource "aws_ecs_service" "hiit_tribe_dev" {
  name            = "hiit_tribe_dev"
  cluster         = aws_ecs_cluster.hiit_tribe_dev.id
  task_definition = "${aws_ecs_task_definition.hiit_tribe_dev.family}:${aws_ecs_task_definition.hiit_tribe_dev.revision}"
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = ["${aws_subnet.eu_west_2a.id}"]
    security_groups  = ["${aws_security_group.allow_all_traffic.id}"]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.hiit_tribe_dev.arn
    container_name   = "web_app"
    container_port   = 3002
  }
}


resource "aws_ecs_task_definition" "hiit_tribe_dev" {
  family                   = "hiit_tribe_dev"
  container_definitions    = file("task-definitions/hiit_tribe_${terraform.workspace}.json")
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = 256
  memory                   = 512
  execution_role_arn       = aws_iam_role.ecs_role.arn
}
