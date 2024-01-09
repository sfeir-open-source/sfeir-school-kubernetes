# Helm

## Search and install chart 

```shell script
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm search repo nginx
helm install nginx bitnami/nginx
```

## Inspect release 

```shell script
kubectl get all 
helm status nginx
```