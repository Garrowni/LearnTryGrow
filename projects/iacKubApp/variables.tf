variable "cluster" {
    default = "cicd-cluster"
}
variable "app" {
    type = string
    description = "Name of application"
    default = "cicd-prac-app"
}
variable "zone" {
    default = "us-east1-b"
}
variable "docker-image" {
    type = string
    description = "name of docker iamge to deploy"
    default = "ngarrow/iacprac:latest"
}