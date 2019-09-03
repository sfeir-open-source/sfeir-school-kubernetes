// Create a static global ip addresses
//resource "google_compute_global_address" "default" {
//  provider = "google-beta"
//  name = "${var.gke_cluster_name}"
//}

// Create master node
resource "google_container_cluster" "primary" {
  provider = "google-beta"
  name     = "sfeirschool-gke-cluster"
  location = "${var.gcp_zone}"

  # We can't create a cluster with no node pool defined, but we want to only use
  # separately managed node pools. So we create the smallest possible default
  # node pool and immediately delete it.
  remove_default_node_pool = true
  initial_node_count = 1

  master_auth {
    username = ""
    password = ""

    client_certificate_config {
      issue_client_certificate = false
    }
  }
  addons_config{
    istio_config{
      disabled = true
    }
  }
}

// Create workloads node
resource "google_container_node_pool" "nodes" {
  provider = "google-beta"
  name       = "sfeirschool-node-pool"
  location   = "${var.gcp_zone}"
  cluster    = "${google_container_cluster.primary.name}"
  node_count = "${var.node_count}"

  node_config {
    machine_type = "n1-standard-1"

    metadata = {
      disable-legacy-endpoints = "true"
    }

    oauth_scopes = [
      "https://www.googleapis.com/auth/compute",
      "https://www.googleapis.com/auth/devstorage.read_only",
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]
  }
}
