<!-- .slide:-->

# Cluster

![center h-800](./assets/images/cluster.png)

Notes:
Un cluster est un ensemble de machines qui collaborent entre elles.

Sur Kubernetes, on distingue le master des noeuds (nodes).

##==##

<!-- .slide: -->

# Exécuter des applications

![center h-800](./assets/images/cluster-2.png)

Notes:
Le master est responsable de d’essentiel de la partie “contrôle” (control plane) du cluster.

Les noeuds (nodes) sont responsables de l’exécution des applications.

Les fonctions de master et de node sont habituellement déployées sur des machines différentes.

En dev ces deux fonctions peuvent être déployées sur une unique machine (ex: Minikube)

##==##

<!-- .slide:-->

# Node

![center h-800](./assets/images/cluster-node.png)

Notes:
Les noeuds exécutent les applications packagées dans des containers regroupés dans des “Pods”.

L’exécution des Pods est gérée par les kubelet.

Kubelet est un process qui pilote le moteur de containeurs
respectant le CRI (Container Runtime Interface)
ex:
(Docker engines, CRI-O, Containerd)

##==##

<!-- .slide:-->

# Pod

![center-h-600](./assets/images/cluster-pod.png)

Notes:
Pod :

1 ou plusieurs containers

en général un seul

partageant :

une seule IP

un ou plusieurs volumes

##==##

<!-- .slide:-->

# Patterns

![center h-700](./assets/images/patterns.png)

Notes:
patterns :

sidecar

file-puller + webserver

log forwarder

adapter

nginx + php_fpm

ambassador

##==##

<!-- .slide:-->

# Orchestrer les pods

![center h-800](./assets/images/orchestration-pod.png)

Notes:
Objectif du slide :
premier aperçu des objets Kubernetes.
Ne pas détailler plus que les commentaires ci-dessous !

On parle d’objets Kubernetes, de
ressources
.

Chaque ressource représente une API.

ReplicaSet :

maintient le nombre demandé de pod identiques

la plupart du temps créé par le Deployment

Deployment :

gère le cycle de vie des pods : versions, mise à jour continue (sans interruption)

Service :

load-balancer interne vers un ensemble de pods

accessible par IP ou par dns interne

Ingress :

Point d’entrée HTTP(S)

routage par Path ou par Virtualhost

Namespace :

pour isoler des ressources

On reverra plus en détails ces objets et d’autres : ConfigMap, DaemonSet, Job, ...

##==##

<!-- .slide: data-type-show="hide"-->

# Question 2

Quelles sont les deux types de machines que l’on trouve dans un cluster Kubernetes

Master et node
Deployment et pod
Kubelet et container

##==##

<!-- .slide: data-type-show="hide"-->

# Question 2

Quelles sont les deux types de machines que l’on trouve dans un cluster Kubernetes

Master et node
Deployment et pod
Kubelet et container
