#!/bin/zsh

function createNamespace(){
  namespace="${1}"
  kubectl create namespace ${namespace} --dry-run -o yaml | kubectl apply -f -
}

for i in $toComplete ; do
  createNamespace $i
done

