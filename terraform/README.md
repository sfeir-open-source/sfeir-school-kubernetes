# Terraform

## Init GKE cluster 

This procedure will provision a lightweight gke cluster for kubernetes sfeirschool.

### Setup tools
 
Install Terraform

```bash
brew install terraform
```

### Setup configuration

Go in "terraform/gke" directory

```bash
cd terraform/gke
```

Setup environment variable : 
* "TF_VAR_sfeirschool_k8s_gcp_projectid" with projectId where create GKE cluster

```bash
echo "export TF_VAR_sfeirschool_k8s_gcp_projectid=awesome-project-id" >> ~/.zshrc
```

Authenticate with gcloud command and setup project Id

```bash
gcloud auth login
gcloud config set project $TF_VAR_sfeirschool_k8s_gcp_projectid
```

Setup service account for terraform in GCP project with owner rights

```bash
gcloud iam service-accounts create k8s-terraform-sa
```

Copy key file of service account in according directory

```bash
mkdir ~/.gcp/
gcloud iam service-accounts keys create ~/.gcp/terraform-sfeirschool-k8s.json --iam-account=k8s-terraform-sa@${TF_VAR_sfeirschool_k8s_gcp_projectid}.iam.gserviceaccount.com
```

### Setup K8s cluster

Launch Terraform to setup cluster.

```bash
terraform init -get=true -upgrade=true
terraform apply
```

### Configure kubectl 

```bash
gcloud container clusters get-credentials sfeirschool-gke-cluster --project $TF_VAR_sfeirschool_k8s_gcp_projectid  --zone=europe-west3-a
```