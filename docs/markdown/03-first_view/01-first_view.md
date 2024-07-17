<!-- .slide: class="two-column" -->

# Le cluster Kubernetes
## Vue d'ensemble

![w-800](./assets/images/kube-overview.png)

##--##

<br><br><br>

Un cluster kubernetes est composé à minima d'un control plane, et d'un worker node. Afin de conserver de la haute disponibilité, les workers nodes sont souvent au nombre de trois.
* **Control plane:** Il a pour rôle de maintenir l'état souhaité du cluster, en redémarrant des pods, ou en augmentant le nombre de réplica.
* **Worker node:** Ils ont pour rôle d'héberger les applications et d'être joignables de l'exterieur.

Notes:
Un cluster est un ensemble de machines qui collaborent entre elles.

Sur Kubernetes, on distingue le master des noeuds (nodes).

##==##

<!-- .slide: class="two-column" -->

# Le cluster Kubernetes
## Le control plane

![w-800](./assets/images/kube-control-plane.png)

##--##

<br>

Le control plane a pour but de maintenir l'état désiré du cluster, en étant responsable de l'orchestration. Il posséde les composants suivants :
* **kube-apiserver:**  valide et traite les requetes, gere l'authentification et permet aux nodes de connaitre l'état du cluster.
* **etcd:** base de données de type clef / valeur, stockant l'état du cluster. C'est la source de vérité.
* **kube-scheduler:** quand un pod n'est pas encore lancé, il regarde les ressources des nodes et selectionne meilleur.
* **kube-controller-manager:** gère tous les controllers du cluster.

Notes:
Le master est responsable de d’essentiel de la partie “contrôle” (control plane) du cluster.

Les noeuds (nodes) sont responsables de l’exécution des applications.

Les fonctions de master et de node sont habituellement déployées sur des machines différentes.

En dev ces deux fonctions peuvent être déployées sur une unique machine (ex: Minikube)

##==##

<!-- .slide: class="two-column" -->

# Le cluster Kubernetes
## Le worker node

![w-800](./assets/images/kube-worker-node.png)

##--##

<br>

Le worker node a pour but de permettre aux pods applicatifs d'être démarrés grâce à une communication avec le control plane. Il posséde les composants suivants :
* **kubelet:** agent qui executent les pods en suivant les specs des ressources demandées par l'api server.
* **kube-proxy:** agent de gestion du réseau pour les pods au travers des services. C'est un proxy UDP/TCP
* **container-runtime:** agent responsable du pull des images, de lancer les conteneurs et leur allouer des ressources.

Notes:
Les noeuds exécutent les applications packagées dans des containers regroupés dans des “Pods”.

L’exécution des Pods est gérée par les kubelet.

Kubelet est un process qui pilote le moteur de containeurs
respectant le CRI (Container Runtime Interface)
ex:
(Docker engines, CRI-O, Containerd)

##==##

<!-- .slide:-->

<!-- .slide: class="two-column" -->

# Le cluster Kubernetes
## Les pods

![w-800](./assets/images/kube-pods.png)

##--##

<br><br><br>

C'est la plus petite ressource déployable sur kubernetes, contenant un ou plusieurs conteneurs partageant le réseau et le stockage.
* **réseau:** l'ensemble des conteneurs dans un pod partagent la même adresse IP.
* **cycle de vie:** tous les conteneurs d'un pod sont créés et détruits ensemble.
* **gestion:** généralement, ils sont gérés par des controllers de plus haut niveau (déploiement, statefulset ou daemonset).

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
