
variable "sfeirschool_k8s_gcp_projectid" {
  type = "string"
}

variable "gcp_zone"{
  default="europe-west3-a"
}

provider "google-beta" {
  project = "${var.sfeirschool_k8s_gcp_projectid}"
  // Frankfurt
  region = "${var.gcp_zone}"
  credentials = "${file("~/.gcp/terraform-sfeirschool-k8s.json")}"
}

