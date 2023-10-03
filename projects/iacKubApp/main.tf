terraform {
    required_providers {
        kubernetes = {
            source = "hashicorp/kubernetes" # https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs
            version = "1.13.3"
        }
    }
    backend "remote" {
        organization = "garrowTF"
        workspaces{
            name = "iac_kuberenetes_app"
        }
    }
}