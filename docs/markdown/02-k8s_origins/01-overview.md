<!-- .slide: class="transition blue" data-background="./assets/images/k8s/transition-overview.jpg"-->
# Premier aperçu

##==##
<!-- .slide: class="full-center" "-->

# Cluster

![h-900](./assets/images/k8s/g3f3310ef84_0_410.png)

Notes:
Un cluster est un ensemble de machines qui collaborent entre elles.

Sur Kubernetes, on distingue le master des noeuds (nodes).


##==##
<!-- .slide: class="full-center" "-->

# Exécuter des applications

![h-900](./assets/images/k8s/g3f3310ef84_0_411.png)

Notes:
Le master est responsable de d’essentiel de la partie “contrôle” (control plane) du cluster.

Les noeuds (nodes) sont responsables de l’exécution des applications.


Les fonctions de master et de node sont habituellement déployées sur des machines différentes.

En dev ces deux fonctions peuvent être déployées sur une unique machine (ex: Minikube)

##==##
<!-- .slide: class="full-center" "-->

# Node

![h-900](./assets/images/k8s/g3f3310ef84_0_418.png)

Notes:
Les noeuds exécutent les applications packagées dans des containers regroupés dans des “Pods”.
s
L’exécution des Pods est gérée par les kubelet.

Kubelet est un process qui pilote l'engine docker pour deployer les resources


##==##
<!-- .slide: class="full-center" "-->

# Pod

![](./assets/images/k8s/g40daa77750_5_116.png)

Notes:
Pod :

- 1 ou plusieurs containers
    - en général un seul

- partageant :
    - une seule IP
    - un ou plusieurs volumes


##==##
<!-- .slide: class="full-center" "-->

# Patterns

![](./assets/images/k8s/g3f3310ef84_0_993.png)

Notes:

patterns :

- sidecar
    - file-puller + webserver
    - log forwarder

- adapter
    - nginx + php_fpm

- ambassador



##==##
<!-- .slide: class="full-center" "-->

# Orchestrer les pods

![h-600](./assets/images/k8s/g3386b050b1_0_69.png)

Notes:

**Objectif du slide** :
premier aperçu des objets Kubernetes. 

**Ne pas détailler plus que les commentaires ci-dessous !**


On parle d’objets Kubernetes, de resources

Chaque ressource représente une API.


**ReplicaSet** :
- maintient le nombre demandé de pod identiques
- la plupart du temps créé par le Deployment

**Deployment** :
- gère le cycle de vie des pods : versions, mise à jour continue (sans interruption)

**Service** :
- load-balancer interne vers un ensemble de pods
- accessible par IP ou par dns interne

**Ingress** :
- Point d’entrée HTTP(S)
- routage par Path ou par Virtualhost

**Namespace** :
- pour isoler des ressources


On reverra plus en détails ces objets et d’autres : ConfigMap, DaemonSet, Job, ...
