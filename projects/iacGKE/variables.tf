variable "project" {
    default = "nicoles-test-playground"
}

variable "region" {
  default = "us-east1"
}
variable "zone" {
    default = "us-east1-b"
}

variable "cluster" {
    default = "cicd-cluster"
}

variable "credentials" {
    default = "~/.ssh/cicd_demo_gcp_creds.json"
}

variable "kubernetes_min_ver" {
    default = "latest"
}

variable "kubernetes_max_ver" {
    default = "latest"
}

variable "app_name" {
    default = "cicd-prac-app"
}

variable "machine_type" {
    default = "g1-small"
}
