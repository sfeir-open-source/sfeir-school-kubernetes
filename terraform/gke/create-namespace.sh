#!/bin/zsh

function createNamespace(){
  namespace="namespace-${1}"
  kubectl create namespace ${namespace} --dry-run -o yaml | kubectl apply -f -
}

