# Helm

## Create service account for tiller 

```shell script
export Namespace=<namespace>
kubectl create serviceaccount "tiller-$Namespace" --namespace $Namespace
kubectl create role "tiller-role-$Namespace" \
    --namespace $Namespace \
    --verb='*' \
    --resource='*.,*.apps,*.batch,*.extensions,*.authorization.k8s.io,*'  -o yaml --dry-run| kubectl apply -f -

kubectl create rolebinding tiller-rolebinding-$Namespace \
    --namespace $Namespace \
    --role=admin \
    --serviceaccount=$Namespace:tiller-$Namespace
```

## Install Tiller

```shell script
export TILLER_NAMESPACE=$Namespace
helm init \
    --history-max 200 \
    --service-account tiller-$Namespace \
    --tiller-namespace $Namespace \
    --override "spec.template.spec.containers[0].command'='{/tiller,--storage=secret}" \
    --upgrade \
    --wait

kubectl get deploy,svc tiller-deploy
helm version
```

## Search and install chart 

```shell script
helm repo update
helm search stable
helm install stable/mariadb --name mariadb
```

## Inspect release 

```shell script
kubectl get all 
helm status mariadb
```