<!-- .slide: class="first-slide"  sfeir-level="1"  sfeir-techno="kub" -->

# Kubernetes, les fondamentaux

##==##

<!-- .slide: class="speaker-slide" -->

# Votre hôte pour la journée

![speaker](./assets/images/julien.png)

![compagny](./assets/images/logo-sfeir.png)

![badge first-badge](./assets/images/certif-cloud-archi.png)

![badge second-badge](./assets/images/certif-cloud-network.png)

![badge third-badge](./assets/images/certif-cloud-sec.png)

<h2> Julien <span>Furgerot</span></h2>

### GCP Trainer

<!-- .element: class="icon-rule icon-first" -->

##==##

<!-- .slide:-->

![center h-800](./assets/images/tour-de-table.png)

##==##

<!-- .slide:-->

# Pré-requis

Pour assister à cette formation, il est nécessaire de connaître et comprendre les notions de base associées aux conteneurs. Vous êtes capable de construire une image (par exemple avec un Dockerfile), lancer un conteneur, l'arrêter, inspecter ses logs.

- Un navigateur
- Un compte GCP

Notes:
Note : ce slide sera à exporter dans un document à part pour les SfeirSchools

Sondage :

qui connaît docker ?

qui connaît un orchestrateur de container ?

qui connaît kubernetes ?

##==##

<!-- .slide: data-type-show="hide"-->

# Self-link

https://bit.ly/sfeir-school-k8s-2024

##==##

<!-- .slide:-->

# Agenda

- Rappel sur Docker
- Kubernetes : les origines
- Premier aperçu
- Architecture interne
- Getting started
- Configuration d’une application
- Mise à l’échelle et mise à jour
- Stocker des données
- Gestion avancée de Pods
- Méthodes d’installation de clusters

##==##

<!-- .slide: class="transition"-->

# Rappels sur Docker

##==##

<!-- .slide:-->

# Qu’est-ce que Docker ?

Docker permet de **packager une application**

<!-- .element: class="center" -->

avec **l’ensemble de ses dépendances**

<!-- .element: class="center" -->

dans une **unité standardisée** pour le déploiement de logiciels :

<!-- .element: class="center" -->

<br>

les **CONTAINERS**

<!-- .element: class="center" -->

<br>
Notes:
Docker en une phrase

##==##

<!-- .slide:-->

# Utilisation de Docker

![center h-800](./assets/images/docker-utilisation.svg)

Notes:
En informatique, le container peut aussi embarquer une grande variété de contenus.

Il s’exécute à l’identique dans plusieurs environnements sans être modifié.

##==##

<!-- .slide: class="flex-row" -->

# VM vs Containers

![h-600](./assets/images/vms.png)
![h-600](./assets/images/containers.png)

Notes:
Avantages de Docker :

permet un partage des ressources efficace

plus simple pour gérer des environnements d’exécution variés

Avantages des full VMs :

isolation GARANTIE puisqu’il n’y a aucune communications entre l'hôte et la machine virtuelle

accès au matériel plus simple

##==##

<!-- .slide:-->

# Rappel sur les containers

![center h-800](./assets/images/docker-recap.png)

Notes:
Le Dockerfile :

contient les instructions pour construire l’image

Les images :

contiennent les fichiers nécessaires à l’exécution de votre application : binaires, dépendances, configuration, …

sont immuable

Les containers :

isolent l’exécution de processus

dans le système de fichier de l’image

au niveau réseau

sont conçus pour être éphémères

La registry :

permet le partage d’images

Docker Hub, Google Container Registry, ...

##==##

<!-- .slide: class="transition"-->

# Kubernetes : les origines

##==##

<!-- .slide:-->

# Google : 20 ans de containers

![h-800 center](./assets/images/google-containers.png)

Notes:
Google, 20 ans d’expérience sur l’orchestration de containers

Borg = c++, ~2003

##==##

<!-- .slide:-->

# Cloud Native Computing Foundation

![center h-800](./assets/images/cloud-native-foundation.svg)

[landscape.cncf.io](landscape.cncf.io)

<!-- .element: class="credits" -->

Notes:
Kubernetes réecrit en Go par les Googlers

Offert à la Cloud Native Computing Foundation en 2015

Kubernetes n’est qu’un outils parmi tous les outils pouvant vous aider à créer des architectures “
Cloud-Natives
”

La
Fondation Linux
(en anglais
Linux Foundation
) est un
consortium
à but non lucratif fondé le
21

janvier

2007
, a pour mission de protéger et standardiser
Linux
en procurant les ressources et services centralisés, la Linux Foundation regroupe 70 membres.

##==##

<!-- .slide: class="two-column" -->

# Kubernetes, pour quoi faire ?

![w-600](./assets/images/g3f0c37370d_0_502.png)

##--##

<br><br>

- Lancer 5 containers basés sur l’image redis:4.0
- Mettre en place un load-balancer interne au cluster pour servir ces 5 containers
- Lancer 10 containers webapp:1.0
- Mettre en place un load-balancer public pour permettre d’accéder aux containers de l’extérieur du cluster
- Augmenter le nombre de containers webapp pendant les soldes 😉
- Continuer à servir les requêtes pendant la mise à jour vers webapp:2.0

Notes:
Orchestration de containers dans un cluster de machines

“barreur d'un navire” en grec

##==##

<!-- .slide: class="with-code" -->

# Mais aussi

- Mise à l’échelle automatique
- Déploiement “Blue/green” et “Canary”
- Exécution de traitements unitaires ou répétés
- Prioriser les tâches en cas de manque de ressources sur le cluster
- Exécuter des services qui persistent des données sur disque
- Contrôler l’accès aux différentes ressources
- Automatiser les tâches complexes (“operators”)

Notes:
Orchestration de containers dans un cluster de machines

##==##

<!-- .slide: data-type-show="hide"-->

# Question 1

texte

choix 1
choix 2
choix 3

##==##

<!-- .slide: data-type-show="hide"-->

# Question 1

texte

choix 1
choix 2
choix 3

##==##

<!-- .slide: data-type-show="hide"-->

# Question 1

Quelle est la différence entre une VM et un container?

Un container fait tourner un nouvel OS, émule du matériel physique tandis qu’une VM partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Une VM fait tourner un nouvel OS, émule du matériel physique tandis qu’un container partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Les deux sont des moyens de virtualisation mais le container peut tourner sur tous les OS contrairement à la VM

##==##

<!-- .slide: data-type-show="hide"-->

# Question 1

Quelle est la différence entre une VM et un container?

Une VM fait tourner un nouvel OS, émule du matériel physique tandis qu’un container partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Un container fait tourner un nouvel OS, émule du matériel physique tandis qu’une VM partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Les deux sont des moyens de virtualisation mais le container peut tourner sur tous les OS contrairement à la VM

##==##

<!-- .slide: class="transition"-->

# Premier aperçu

##==##

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

Kubelet est un process qui pilote l'engine docker pour deployer les resources

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

##==##

<!-- .slide: class="transition"-->

# Architecture interne

##==##

<!-- .slide:-->

# Master et Nodes

![center h-800](./assets/images/master-and-node.svg)

Notes:
Cluster :

1 ou plusieurs masters (
recommandé pour la
HA - Haute Disponibilité)

1 ou plusieurs noeuds (
recommandé pour la
HA - Haute Disponibilité)

Les ops passent des commandes au master

Les clients accèdent aux pods via les noeuds

##==##

<!-- .slide:-->

# ApiServer et etcd

![center h-800](./assets/images/apiserver-etcd.svg)

Notes:
ApiServer

Devs ou ops envoient la description de l’état voulu des objets

Fichiers au format .yaml, transformés en json pour envoi sur l’apiserver

Objets stockés dans serveur etcd (serveur clé-valeur distribué)

##==##

<!-- .slide:-->

# Kubelet

![center h-800](./assets/images/kubelet.svg)

Notes:
Kubelet

Tourne sur les noeuds

Exécute les pods

S’enregistre auprès du master via l’apiserver

##==##

<!-- .slide:-->

# Controllers

![center h-800](./assets/images/controllers-node.svg)

Notes:
Controllers

Il y a plusieurs contrôleurs, un par type d’objet Kubernetes

Ils ont chacun une responsabilité précise

Ils surveillent constamment la configuration de l’etcd

Ils réagissent au changement pour atteindre l’état demandé, en mettant à jour la configuration via l’apiserver. Exemple :

le Scheduler met à jour la configuration du pod pour lui assigner un noeud

le kubelet (lui-aussi un type de contrôleur) exécute le pod demandé puis enregistre son statut dans la configuration

##==##

<!-- .slide: class="two-column" -->

# Récapitulatif

- Le Kubelet s’enregistre dans la config

- L’utilisateur envoi l’état voulu sur etcd via l’apiserver

- Les contrôleurs et le Kubelet réagissent aux changements d’états pour obtenir et maintenir l’état voulu

##--##

![](./assets/images/gb710258689_0_72.png)

##==##

<!-- .slide: data-type-show="hide"-->

# Question 1

Quelle est la différence entre une VM et un container?

Un container fait tourner un nouvel OS, émule du matériel physique tandis qu’une VM partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Une VM fait tourner un nouvel OS, émule du matériel physique tandis qu’un container partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Les deux sont des moyens de virtualisation mais le container peut tourner sur tous les OS contrairement à la VM

##==##

<!-- .slide:-->

# À venir...

![center h-800](./assets/images/a-venir.png)

Notes:
Ce qu’on voit dans le chapitre suivant

##==##

<!-- .slide: data-type-show="hide"-->

# Question 3

Quel est le composant installé sur tous les noeuds interagissant avec l’API Server et gérant les containers créés dans Kubernetes?

Kubelet
Docker
Systemd

##==##

<!-- .slide: data-type-show="hide"-->

# Question 3

Quel est le composant installé sur tous les noeuds interagissant avec l’API Server et gérant les containers créés dans Kubernetes?

Kubelet
Docker
Systemd

##==##

<!-- .slide: data-type-show="hide"-->

# Question 4

Quel est le composant principal recevant toutes les requêtes de configuration et de modification de l’état du cluster?

Kubelet
Kube-api-server
Kube-proxy

##==##

<!-- .slide: data-type-show="hide"-->

# Question 4

Quel est le composant principal recevant toutes les requêtes de configuration et de modification de l’état du cluster?

Kubelet
Kube-api-server
Kube-proxy

##==##

<!-- .slide: data-type-show="hide"-->

# Question 5

Quel est le composant stockant l’état des ressources du cluster?

Controllers
Master
ETCD

##==##

<!-- .slide: data-type-show="hide"-->

# Question 5

Quel est le composant stockant l’état des ressources du cluster?

Controllers
Master
ETCD

##==##

<!-- .slide: data-type-show="hide"-->

# Question 6

Quel est le composant choisissant sur quel noeud se lance les pods?

Kubelet
Scheduler
Kube-proxy

##==##

<!-- .slide: data-type-show="hide"-->

# Question 6

Quel est le composant choisissant sur quel noeud se lance les pods?

Kubelet
Scheduler
Kube-proxy

##==##

<!-- .slide: data-type-show="hide"-->

# Question 7

Quel sont les composants permettant d’atteindre les états voulus des ressources au sein du cluster?

Controllers
Kubelets
Nodes

##==##

<!-- .slide: data-type-show="hide"-->

# Question 7

Quel sont les composants permettant d’atteindre les états voulus des ressources au sein du cluster?

Controllers
Kubelets
Nodes

##==##

<!-- .slide: data-type-show="hide"-->

# Question 8

Quel est le composant permettant le routage réseau au sein du cluster?

Kubelet
Scheduler
Kube-proxy

##==##

<!-- .slide: data-type-show="hide"-->

# Question 8

Quel est le composant permettant le routage réseau au sein du cluster?

Kubelet
Scheduler
Kube-proxy

##==##

<!-- .slide: class="transition"-->

# Getting started

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Création de cluster

## Configuration de kubectl

##==##

<!-- .slide: data-type-show="hide" -->

Google Kubernetes Engine

Démonstration en direct

# Créer un cluster GKE

Notes:
Créer un cluster en 3 clics depuis la Console GCP

Montrer les options disponibles depuis l’interface graphique :

version Kubernetes

taille de VM

type d’OS (COS ou Ubuntu)

activation Stackdriver Monitoring / Logging

…

Note : ne pas démontrer ici les avantages de GKE vs K8S natif

##==##

<!-- .slide:  -->

# kubectl

- Client Kubernetes en ligne de commande
- Astuces :
  - `kubectl version`
  - `kubectl completion -h`
  - `kubectl help <command>`
  - `kubectl explain [--recursive] <resource>`
  - `kubectl <verb> <resource>`

Notes:
Comme Docker, Kubernetes s’utilise en mode client-server.

Le client s’appelle “
kubectl
” et appelle un composant du cluster appellé
apiserver
.

kubectl intègre un mécanisme pour installer l’auto-completion des commandes dans bash et zsh

On a aussi accès à la
doc des commandes
et au
format des ressources
avec les sous-commandes
help
et
explain
.

… détaillé dans la suite

##==##

<!-- .slide:-->

# ~/.kube/config

![center h-800](./assets/images/kube-config.svg)

Notes:
La configuration du client kubectl se fait dans le fichier ~/.kube/config

Ce fichier répertorie les “contextes”, constituées du couple Cluster et User, ainsi que le namespace courant sur ce cluster.

Sur GKE, la partie user est déléguée à un fournisseur d’authentification implémenté par la commande
gcloud
du Cloud SDK.

##==##

<!-- .slide: class="with-code big-code" -->

# Contextes Kubernetes sur GKE

```
gcloud container clusters list

gcloud container clusters get-credentials \
   --zone europe-west1-a <mycluster>
```

<!-- .element: class="big-code" -->

Notes:
La seconde commande permet de créer le contexte kubectl correspondant à une instance GKE.

##==##

<!-- .slide: class="with-code two-column"  -->

# Changer de contexte

```
# Lister les contexts
$ kubectl config get-contexts
# Mettre à jour les contexts
$ kubectl config set-context gke-dev
# Afficher current-context configuration
$ kubectl config view --minify=true
```

```
apiVersion: v1
kind: Config
current-context: gke-context
contexts:
- name: gke-context
  context:
    cluster: gke-cluster
    user: gke-user
clusters:
- name: gke-cluster
  cluster:
    server: https://12.34.56.78
```

##--##

<!-- .slide: class="with-code"  -->

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

```
users:
- name: gke-user
  user:
    auth-provider:
      name: gcp
      config:
        cmd-path: /usr/bin/gcloud
        cmd-args: config config-helper --format=json
        access-token: ya29.GlwXBuG[...]KcYlQ
        [...]
```

Notes:
Exemple de fichier de config de kubectl (~/.kube/config).

On y retrouve les contextes, les clusters, les utilisateurs

On voit aussi l’utilisation de gcloud comme fournisseur d’authentification

##==##

# Aide-mémoire des commandes de kubectl

- https://kubernetes.io/fr/docs/reference/kubectl/cheatsheet/

##==##

<!-- .slide: class="with-code" -->

# Utilitaires autour de kubectl

- https://kubernetes.io/docs/reference/kubectl/quick-reference/#kubectl-autocomplete

```
$ kubectl <TAB>		# auto-complétion
$ k <TAB>				# alias
```

- https://github.com/ahmetb/kubectx

```
$ kubectx gke-dev		# changer de contexte
$ kubens kube-system	# modifier le ns du contexte courant
```

##==##

<!-- .slide: class="with-code" -->

# Utilitaires autour de kubectl

- ~800 kubectl aliases (bash/zsh)
  https://github.com/ahmetb/kubectl-aliases

`$ kgpo		# kubectl get pod`

- Shell prompt
  https://github.com/jonmosco/kube-ps1

  ![](./assets/images/command-minikube.png)

- https://github.com/mfuentesg/ksd

```
$ kubectl get secret <secret name> -o <yaml|json> | ksd
# Décoder les éléments d’un secret en base 64
```

##==##

<!-- .slide:-->

# k9scli.io

![center h-800](./assets/images/k9scli.png)

Notes:
Installer l’extension Chrome suivante pour lire l’asciinema en live dans les slides :

https://chrome.google.com/webstore/detail/google-slides-asciinema/lbaccocfalidoaeacbpabonnljdndmdd

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Namespace

##==##

<!-- .slide:-->

# Namespace

- Espace de nom pour isoler les déploiements
- Peut être utilisé pour séparer les environnements (soft multi-tenant)
- Le nom d’une ressource est unique au sein d’un namespace.
- Par défaut:
  - default
  - kube-system
  - kube-public

Notes:
nom de ressource unique dans un namespace
(mais pas au sein d’un cluster)

default : namespace de travail par défaut

kube-system : namespace pour les déploiements internes au cluster

kube-public : namespace créé par défaut pour les ressources exposés publiquement

##==##

<!-- .slide: class="with-code" -->

# Récupérer les exercices

- Clonez le dépôt github suivant :

`git clone https://github.com/sfeir-open-source/sfeir-school-kubernetes.git`

- et placez-vous dans le dépôt cloné :

`cd sfeir-school-kubernetes/steps`

Notes:
À faire

dans Cloud Shell

OU

sur les machines locales si
git, kubectl et Cloud SDK
installés

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Configurer kubectl

##==##

<!-- .slide: class="exercice"-->

# TP : Configurer kubectl

## LAB

<br>

1. !! Faites une sauvegarde du fichier ~/.kube/config !!

##==##

<!-- .slide: class="exercice with-code" -->

# TP : Configurer kubectl

## LAB

<br>

1. Installer gcloud & kubectl
1. Configurer kubectl

```shell
$ gcloud container clusters get-credentials <cluster> --zone <zone>
$ echo 'source <(kubectl completion bash)' >>~/.bashrc
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice with-code" -->

# TP : Configurer kubectl

## LAB

```shell
$ alias k=”kubectl”
$ kubectl get nodes # Lister les noeuds du cluster
$ kubectl get namespace # Lister les espaces de nom
$ kubectl config set-context --current
    --namespace=<insert-namespace-name-here>
$ kubectl config view --minify=true
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Manifest

Notes:
Configuration files - Written in YAML or JSON, these files describe the desired state of your application in terms of Kubernetes API objects. A file can include one or more API object descriptions (manifests). (See the example YAML from the stateless app).

Fichier de configuration : écrit en yaml ou json, ce fichier décrit l’état désiré d’une ressource Kubernetes. Dans un fichier, on peut inclure une ou plusieurs descriptions d’objets

##==##

<!-- .slide: class="with-code max-height" -->

# Manifest

```yaml
kind: Pod
apiVersion: v1
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  containers:
    - name: nginx
      image: nginx:alpine
status: ...
```

<!-- .element: class="big-code"-->

Notes:
kind : type de resource que l’on va créé

apiVersion: version de l’api de la ressource que l’on veut créé

metadata: information qui permette d’identifier la resource, name est obligatoire

spec: définit l’état désiré de notre ressource

status : état actuel de la ressource

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Créer et interagir avec des objets Kubernetes

##==##

<!-- .slide: class="with-code" -->

# Mode déclaratif (préféré)

```shell
$ kubectl apply -f my-pod.yaml # Modifier ou mettre à jour l’objet
$ kubectl replace -f my-pod.yaml # Recréer l’objet
$ kubectl diff -f my-pod.yaml # Afficher les différences de l’objet
$ kubectl delete -f my-pod.yaml # Supprimer l’objet
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Mode impératif

```shell
$ kubectl create <type-of-object> [<subtype-of-object>] <name-of-object>
  <properties> # Créer un objet
$ kubectl create namespace <my-namespace> # Créer un espace de nom
$ kubectl run <pod-name> --image=<image> # Créer un pod
$ kubectl run <pod-name> --image=<image> --dry-run=client -oyaml >
  my-pod.yaml
# Générer le yaml du pod sans le créer sur le cluster
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Créer et interagir avec un pod

##==##

<!-- .slide: class="with-code max-height" -->

# kubectl get pods

```shell
$ kubectl get pods

NAME                     READY     STATUS    RESTARTS   AGE
nginx-5dbbff858d-qfb7f   1/1       Running   0          2m

$ kubectl get po -oyaml nginx-5dbbff858d-qfb7f
apiVersion: v1
kind: Pod
metadata:
  name: nginx-5dbbff858d-qfb7f
  ...
```

<!-- .element: class="big-code" -->

Notes:
READY : nombre de containers démarrés / nombre total de container

RESTART : si un container n’est pas dans l’état voulu (crash, indisponibilité), le pod peut être redémarré

##==##

<!-- .slide: class="with-code max-height" -->

# Pod yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  containers:
    - name: nginx
      image: nginx:alpine
status: ...
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Pods explained

```shell
$ kubectl explain pod
KIND:     Pod
VERSION:  v1

DESCRIPTION:
     Pod is a collection of containers that can run on a host. This resource is
     created by clients and scheduled onto hosts.

FIELDS:
   apiVersion	<string>
   kind	<string>
   metadata	<Object>
   spec	<Object>
[...]

```

Notes:
La commande
explain
donne tous les détails sur les propriétés de chaque ressources Kubernetes…

… récursivement (slides suivant)

##==##

<!-- .slide: class="with-code" -->

# Pods explained… deeper

```shell
$ kubectl explain pod.spec.containers.image
KIND:     Pod
VERSION:  v1

FIELD:    image <string>

DESCRIPTION:
     Docker image name. More info:
     https://kubernetes.io/docs/concepts/containers/images This field is
     optional to allow higher level config management to default or override
     container images in workload controllers like Deployments and
     StatefulSets.

```

##==##

<!-- .slide: class="with-code" -->

# Pod status (live)

```yaml
---
status:
  containerStatuses:
    - name: nginx
      containerID: docker://8db3af41eb87[...]3d103255
      image: nginx:alpine
      imageID: docker-pullable://nginx@sha256:1aed1[...]a0a5440
      state:
        running:
          startedAt: 2018-08-13T21:08:10Z
  hostIP: 192.168.65.3
  podIP: 10.1.0.227
```

Notes:
Une fois le fichier yaml envoyé dans la configuration, les contrôleurs viennent mettre à jour le pod dans la partie status.

On retrouve entre autre l’IP du
node
qui l’héberge et l’IP du
pod
lui-même.

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Pod

##==##

<!-- .slide: class="exercice"-->

# TP : Pod

## LAB

- Regarder le code pour créer un pod

`$ cat pod/monolith.yaml`

- Créer le pod :

`$ kubectl apply -f pod/monolith.yaml`

Notes:
Création d’un pod simple : on affiche les specs du pod, et on créé le pod avec kubectl.

##==##

<!-- .slide: class="exercice with-code"-->

# TP : Information sur le Pod

## LAB

```shell
$ kubectl get po -owide
$ kubectl describe po <pod-name>
$ kubectl get po <pod-name> -oyaml
```

<!-- .element: class="big-code" -->

- Quelle est l’ip du pod ?
- Sur quel node le pod tourne ?
- Quel container tourne dans le pod ?

##==##

<!-- .slide: class="exercice"-->

# TP : Interagir avec le Pod

## LAB

- Créer un tunnel depuis son poste avec le pod

`$ kubectl port-forward monolith 10080:80`

- Ouvrir une autre fenêtre shell

`$ curl http://127.0.0.1:10080`
`$ curl http://127.0.0.1:10080/secure`
`$ curl -u user http://127.0.0.1:10080/login`

- Le mot de passe est : "password"

`$ curl -H "Authorization: Bearer <token>" http://127.0.0.1:10080/secure`

##==##

<!-- .slide: class="exercice"-->

# TP : Interagir avec le Pod

## LAB

- Voir les logs du pods

`$ kubectl logs monolith`

- Ouvrir un shell dans le pod

`$ kubectl exec monolith -it [-c monolith] -- /bin/sh`

- Lister les process dans le container

`$ ps aux`

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Liveness/Readiness

##==##

<!-- .slide:-->

# Readiness/Liveness

- Readiness :

  - Vérifier que le container est prêt à recevoir du flux

- Liveness :

  - Vérifier que le container répond correctement

- Startup :
  - Vérifier que le container est démarré
  - Désactiver les sondes précédentes en attendant cet état

Notes:
Kubeproxy sortira un pod du flux si le readiness devient ko.

Kubelet va redémarrer le container si le liveness est ko.

##==##

<!-- .slide: class="with-code" -->

# Readiness/Liveness : command

```yaml
livenessProbe:
  exec:
    command:
      - cat
      - /tmp/healthy
  initialDelaySeconds: 5
  periodSeconds: 5
```

<!-- .element: class="big-code" -->

Notes:
Il est possible d’utiliser une commande pour tester l’état du service

##==##

<!-- .slide: class="with-code max-height" -->

# Readiness/Liveness : tcp socket

```yaml
readinessProbe:
  tcpSocket:
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
livenessProbe:
  tcpSocket:
    port: 8080
  initialDelaySeconds: 15
  periodSeconds: 20
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code max-height" -->

# Readiness/Liveness : http

```yaml
...
spec:
  containers:
    - readinessProbe:    # accepte des requêtes quand OK
        httpGet:
          path: /readiness
          port: 81
          scheme: HTTP
        initialDelaySeconds: 5
        timeoutSeconds: 1
      livenessProbe:    # redémarre le pod si KO
        httpGet:
          path: /healthz
          port: 81
          scheme: HTTP
        initialDelaySeconds: 5 # Délai avant la première requête
        periodSeconds: 15      # Fréquence des tests
        timeoutSeconds: 5

      ...


```

Notes:
readinessProbe indique à kubelet quand un pod est prêt à servir du traffic

livenessProbe indique si le pod est ok, si nok kubelet redémarre le pod

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Readiness/Liveness

##==##

<!-- .slide: class="exercice"-->

# TP : Readiness/Liveness

## LAB

- Regarder le contenu du pod
  `$ cat readiness/healthy-monolith.yaml`
  `$ kubectl apply -f readiness/healthy-monolith.yaml`
  `$ kubectl describe pods/healthy-monolith`

##==##

<!-- .slide: class="with-code exercice" -->

# TP : Readiness/Liveness

`$ kubectl describe pods`

- Comment est configurée la sonde readiness ?
- Comment est configurée la sonde liveness
- à quelle fréquence la surveillance readiness est effectuée ?
- à partir de combien de secondes la sonde liveness est effectuée ?

Notes:
Comment est configuré la sonde readiness ? httpGet sur /readiness:81

liveness sur /healthz:81

la valeur par défaut du readiness : 10 secondes

liveness est effectué à partir de 5 secondes

##==##

<!-- .slide: class="exercice"-->

# TP : Tester les sondes

```
$ kubectl get pods healthy-monolith
```

- Noter l’état OK du pod

```
$ kubectl port-forward healthy-monolith 10081:81
```

- Forcer l’application a passé en état “failed”

```
$ curl http://127.0.0.1:10081/readiness/status
```

- Attendre 45 secondes que la sonde en failed

```
$ kubectl describe pods healthy-monolith
```

- Vous pouvez noter dans l’historique le moment où le pod est passé en “unhealthy”

##==##

<!-- .slide: class="exercice with-code"-->

# TP : Tester les sondes

- Maintenant nous allons “casser” la sonde liveness

```shell
$ curl http://127.0.0.1:10081/healthz/status

$ kubectl get pods
```

<!-- .element: class="big-code"-->

- Que se passe-t-il quand le liveness est ko ?

Notes:
Que se passe-t-il : dans ce cas le pod est redémarré

##==##

<!-- .slide: class="transition"-->

# Configuration d’une application

##==##

<!-- .slide:-->

# Configuration

- Configurer l’URI d’une base de données
- Injecter un fichier application-prod.yml
- Spécifier les credentials d’une api

##==##

<!-- .slide: class="with-code" -->

# Variables d’environnement

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: envar-demo
spec:
  containers:
    - name: envar-demo-container
      image: debian
      env:
        - name: DEMO_GREETING
          value: 'Hello from the environment'
        - name: DEMO_FAREWELL
          value: 'Such a sweet sorrow'
```

<!-- .element: class="big-code" -->

Notes:
On peut injecter une variable d’environnement via le champ “env”.

##==##

<!-- .slide: class="with-code"-->

# ConfigMap : création

```shell
$ kubectl create configmap <map-name> <data-source>
$ kubectl create configmap my-app-conf
  --from-file=my-app-conf/configmap/application-dev.properties
$ kubectl create cm my-app-conf
  --from-literal=db-server=mydbserver.mycompany.com
```

<!-- .element: class="big-code" -->

Notes:
Pour injecter un fichier de configuration, on peut injecter un fichier de configuration dans un pod avec un configMap.

On peut créer un fichier de config, depuis :

un fichier ou un répertoire  
--from-file
=

depuis la cli :
--from-literal
=

##==##

<!-- .slide: class="with-code" -->

# ConfigMap: manifests

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-app-config
data:
  application.properties: |
    db-server=mydbserver.dev.mycompany.com
    username=my-rw-dbuser
```

<!-- .element: class="big-code" -->

```shell
$ kubectl apply -f configmap.yml
```

<!-- .element: class="big-code" -->

Notes:
derrière le | on peut mettre n’importe un fichier non structuré yaml

##==##

<!-- .slide: class="with-code two-column max-height" -->

# ConfigMap : utilisation

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: configmap-pod
spec:
  containers:
    - name: test
      image: busybox
      volumeMounts:
        - name: config-vol
          mountPath: /etc/config
```

<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code" -->

<br>
<br>
<br>

```yaml
volumes:
  - name: config-vol
    configMap:
      name: log-config
      items:
        - key: log_level
          path: log_level
```

<!-- .element: class="big-code" -->

Point de montage du fichier : **/etc/config**/_log_level_

##==##

<!-- .slide: class="with-code" -->

# Secret : type

```shell
$ kubectl create secret --help

Available Commands:
  docker-registry Create a secret for use with a Docker registry
  generic         Create a secret from a local file, directory or literal value
  tls             Create a TLS secret
```

<!-- .element: class="big-code" -->

Notes:
On peut créer 3 types de secret :

docker-registry : pour enregistrer les credentials pour pull une image docker depuis une registry privée

generic : équivalent à configmap, permet de stocker des secrets de type clé/valeur

tls : pour stocker un certificat serveur pour exposer un service en https

##==##

<!-- .slide: class="with-code" -->

# Secret : manifest

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  username: YWRtaW4=
  password: MWYyZDFlMmU2N2Rm
```

<!-- .element: class="big-code"  -->

##==##

<!-- .slide: class="with-code"-->

# Secret : création

- Créer un secret depuis un fichier

`$ kubectl create secret generic db-user-pass --from-file=./password.txt`

- Créer un secret depuis une clé/valeur

`$ kubectl create secret generic prod-db-secret --from-literal=username=produser`

- Créer un secret “docker-registry ”

```shell
$ kubectl create secret docker-registry regcred
  --docker-server=<your-registry-server> --docker-username=<your-name>
  --docker-password=<your-pword> --docker-email=<your-email>
```

<!-- .element: class="big-code" -->

Notes:
Un secret va permettre de stocker des informations sensibles, comme des mots de passe, des clés privées.

##==##

<!-- .slide: class="with-code max-height" -->

# Secret : env vars

```yaml
apiVersion: v1
kind: Pod
spec:
  containers:
    - name: envar-demo-container
      image: debian
      env:
        - name: DEMO_GREETING
          valueFrom:
            secretKeyRef:
              name: demo # le nom du secret
              key: password # la clé dans le secret
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code two-column" -->

# Secret : volume

```yaml
kind: Pod
spec:
  containers:
    - name: mypod
      image: redis
      volumeMounts:
        - name: secret-volume
          mountPath: '/etc/foo'
          readOnly: true
```

<!-- .element: class="big-code" -->

##--##
<br>
<br>
<br>
<br>

```yaml
volumes:
  - name: secret-volume
    secret:
      secretName: mysecret
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="transition-bg-sfeir-2" -->

# TP : Configuration

##==##

<!-- .slide: class="exercice"-->

# TP : ConfigMap

## LAB

`$ kubectl create configmap nginx-proxy-conf --from-file=configuration/nginx/proxy.conf`

`$ kubectl describe configmaps nginx-proxy-conf`

##==##

<!-- .slide: class="exercice"-->

# Quizz : ConfigMap

## LAB

- Combien y a t-il d’éléments dans la configmap nginx-proxy-conf ?
- Quel est le nom de ces éléments ?

Notes:
1 element : le fichier proxy.conf

##==##

<!-- .slide: class="exercice"-->

# TP : Secret

## LAB

`$ kubectl create secret generic tls-certs --from-file=configuration/tls/`

`$ kubectl describe secrets tls-certs`

##==##

<!-- .slide: class="exercice"-->

# Quizz : Secret

## LAB

- Combien y a t-il d’éléments dans le Secret tls-cert ?

- Quel est le nom de ces éléments ?

Notes:
Le secret contient 4 elements :
ca-key.pem

ca.pem

cert.pem

key.pem

on peut voir que les secrets ne sont pas affiche dans la console

##==##

<!-- .slide: class="exercice" -->

# TP : Injection de fichiers

## LAB

`$ cat configuration/pod/secure-monolith.yaml`

- Comment le secret est injecté dans le pod ?

- Comment le configmap est injecté dans le pod ?

Notes:
Les secrets sont injectés sous la forme d'un volume

de la meme facon le configMap est injecte sous la forme d'un volume.

##==##

<!-- .slide: class="exercice"-->

# TP : Injection de fichiers

## LAB

- Créer le pod “secure-monolith”

`$ kubectl apply -f configuration/pod/secure-monolith.yaml`

- Exposer le port sur votre poste

`$ kubectl port-forward secure-monolith 10443:443`

- Faites une requête avec curl

`$ curl --cacert configuration/tls/ca.pem https://127.0.0.1:10443`

Notes:
Du coup on a injecté les certificats et la configuration du service nginx, et on arrive bien à faire une requête en https sur notre service.

Préciser : ce n’est pas la bonne méthode pour exposer un service en https sur kubernetes ;))

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Service

##==##

<!-- .slide:-->

# Exposer des pods

![center h-800](./assets/images/expose-pods.png)

Notes:
Les pods sont exposés au sein du cluster via les
Services
.

Les services obtiennent une IP et un nom DNS interne au cluster.

Ils répartissent la charge entre les pods, ciblés par des
labels
.

##==##

<!-- .slide:-->

# Service type ClusterIP

![center h-800](./assets/images/cluster-ip.svg)

Notes:
Un Service de type ClusterIP est accessible depuis une IP interne au cluster.

On l’utilise en général pour la communication inter-pods.

##==##

<!-- .slide:-->

# Service type NodePort

![center h-800](./assets/images/service-type-node.svg)

Notes:
Un service du type nodePort est associé à un port identique sur chaque noeud du cluster.

Ce port est accessible depuis l’extérieur du cluster.

Il doit appartenir à la plage de ports 30000 - 32767 (configurable sur le master).

On peut le choisir mais il faut mieux laisser faire Kubernetes, qui gèrera les problèmes de ports occupés.

Inconvénient : il faut donc connaître l’adresse IP d’au moins un noeud du cluster pour accéder au service.

##==##

<!-- .slide:-->

# Service type LoadBalancer

![center h-800](./assets/images/service-type-loadbalancer.svg)

Notes:
Un Service de type LoadBalancer utilise un équilibreur de charge externe au cluster.

Ce type de Service est utilisé sur les plateformes cloud ainsi que dans Docker-for-Desktop.

L’inconvénient c’est que chaque service aura son propre load balancer avec sa propre IP publique/Internet

##==##

<!-- .slide: data-type-show="hide"-->

# Service type ExternalName

![center h-800](./assets/images/service-type-externalname.svg)

Notes:
Un Service de type ExternalName fourni un alias DNS de type CNAME.

Il n’est utilisable qu’en interne.

##==##

<!-- .slide: data-type-show="hide"-->

# Service avec Endpoint explicite

![center h-800](./assets/images/service-endpoint-explicite.svg)

Notes:
En interne, Kubernetes génère une ressource Endpoint pour chaque Pod ciblé par le sélecteur.

Il est possible de ne pas renseigner de sélecteur et à la place de créer manuellement les ressources Endpoint avec une IP externe au cluster.

C’est la manière de rajouter une abstraction vers un service externe au cluster. Les Pods ne voient que le Service interne.

##==##

<!-- .slide: class="with-code max-height" -->

# Service yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  selector:
    app: nginx
  type: NodePort
  ports:
    - name: http
      port: 80
      protocol: TCP
      targetPort: 80
```

<!-- .element: class="big-code" -->

Notes:
Le
selector
permet de cibler les pods par leurs labels.

Il y a plusieurs
types
de services qu’on voit tout de suite.

##==##

# Créer un service

`$ kubectl apply -f service.yaml`

La ligne de commande suivante donne un résultat équivalent au fichier yaml :

`$ kubectl expose nginx --port=80 --type=NodePort`

##==##

<!-- .slide: class="with-code max-height" -->

# Services

```shell
$ kubectl get services
NAME        TYPE       CLUSTER-IP   EXTERNAL-IP PORT(S)       AGE
kubernetes  ClusterIP  10.96.0.1    <none>      443/TCP       3d
nginx       NodePort   10.97.47.155 <none>      80:31450/TCP  2s

$ kubectl get svc -o yaml nginx
apiVersion: v1
kind: Service
metadata:
  name: nginx
  ...
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide:-->

# Service : DNS interne

- Entrée DNS : <service>.<namespace>.svc.cluster.local

- Et dans le namespace : <service>

Notes:
Pour chaque service créé, le service est accessible via une entrée DNS : <service>.<namespace>.svc.cluster.local

Et à l’intérieur du namespace, uniquement avec le nom du service

##==##

<!-- .slide: data-type-show="hide"-->

# Question 9

Quel est le type de service basique permettant l’exposition de pods dans le cluster ?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: data-type-show="hide"-->

# Question 9

Quel est le type de service basique permettant l’exposition de pods dans le cluster ?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: data-type-show="hide"-->

# Question 10

Quel est le type de service permettant l’exposition à travers le port d’un noeud?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: data-type-show="hide"-->

# Question 10

Quel est le type de service permettant l’exposition à travers le port d’un noeud?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: data-type-show="hide"-->

# Question 11

Quel est le type de service permettant l’exposition à travers un load balancer externe?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: data-type-show="hide"-->

# Question 11

Quel est le type de service permettant l’exposition à travers un load balancer externe?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: class="transition-bg-sfeir-2" -->

# TP : Service

##==##

<!-- .slide: class="exercice"-->

# TP : Créer un service

## LAB

- Lire le manifest de l’objet service

`$ cat service/monolith.yaml`

- Créer le service

`$ kubectl apply -f service/monolith.yaml`

##==##

<!-- .slide: class="exercice" data-type-show="hide" -->

# TP : Interagir avec le service

## LAB

```shell
$ gcloud compute instances list
NAME ZONE MACHINE_TYPE PREEMPTIBLE INTERNAL_IP EXTERNAL_IP STATUS
gke-istio-workshop-default-pool-e37360ba-369z europe-west1-b n1-standard-1 10.132.0.3 35.205.92.225 RUNNING
gke-istio-workshop-default-pool-e37360ba-3hz4 europe-west1-b n1-standard-1 10.132.0.2 35.240.127.238 RUNNING
...
```

Prenez l’une des ips externes et connectez vous-y

`$ curl -k https://<EXTERNAL_IP>:31000`

Notes:
Le résultat est un échec :

curl -k https://35.246.130.12:31000

curl: (7) Failed to connect to 35.246.130.12 port 31000: Connection refused

Normal : il n’y a pas de label correspondant !

##==##

<!-- .slide: class="exercice"-->

# TP : Service

## LAB

- Pourquoi la requête ne fonctionne pas ?

`$ kubectl get svc monolith`

`$ kubectl describe services monolith`

- Combien y a t-il de endpoints au service ?

Notes:
Le résultat est un échec :

curl -k https://35.246.130.12:31000

curl: (7) Failed to connect to 35.246.130.12 port 31000: Connection refused

Normal : il n’y a pas de label correspondant !

##==##

<!-- .slide: class="exercice"-->

# TP : Service

## LAB

- Lister les pods par labels

`$ kubectl get pods -l "app=monolith"`
`$ kubectl get pods -l "app=monolith,secure=enabled"`

- On va labelliser un pod

`$ kubectl label pods secure-monolith secure=enabled`

- Et maintenant ?

`$ kubectl get pods -l "app=monolith,secure=enabled"`

Notes:
On labellise les pods

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# ReplicaSet

##==##

<!-- .slide: class="with-code max-height" -->

# ReplicaSet.yaml

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template: <... pod definition ...>
```

<!-- .element: class="big-code" -->

Notes:
Le ReplicaSet inclut la définition du pod dans la partie
template

Le
selector
permet d’identifier les pods gérés par ce ReplicaSet via des
labels
.

La propriété
replicas
indique le nombre d’instances voulues.

##==##

<!-- .slide: class="with-code" -->

# kubectl get replicaset

```shell
$ kubectl get ReplicaSet
NAME               DESIRED   CURRENT   READY     AGE
nginx-5dbbff858d   1         1         1         14m

$ kubectl get rs -o yaml nginx-5dbbff858d
apiVersion: apps/v1
kind: ReplicaSet
...
```

<!-- .element: class="big-code" -->

Notes:
Le ReplicaSet maintient le nombre demandé de pods
en état de fonctionnement
.

La colonne READY montre les pods qui sont fonctionnels, et pas juste les pods créés
(
par exemple avec des
containers en cours de création ou crashés)

##==##

<!-- .slide: class="with-code" -->

# ReplicaSet status (live)

```yaml
---
status:
  availableReplicas: 1
  fullyLabeledReplicas: 1
  readyReplicas: 1
  replicas: 1
```

<!-- .element: class="big-code" -->

Notes:
On voit le status des replicas

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Deployment

##==##

<!-- .slide: class="with-code max-height two-column" -->

# Deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
```

<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code" -->

<br>
<br>
<br>

```yaml
template:
  metadata:
    labels:
      app: nginx
  spec:
    containers:
      - name: nginx
        image: nginx:alpine
```

<!-- .element: class="big-code" -->

Notes:
On retrouve dans le Deployment les specs du Pod et du ReplicaSet

##==##

<!-- .slide: class="with-code" -->

# kubectl get deployment

```shell
$ kubectl get deployment
NAME      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
nginx     1         1         1            1           1h

$ kubectl get deploy -o yaml nginx
apiVersion: apps/v1
kind: Deployment
```

<!-- .element: class="big-code" -->

Notes:
Le Deployment gère des
Pods
via un
ReplicaSet
.

Contrairement au ReplicaSet qui maintient la même configuration de Pod en changeant juste le nombre de replicats,

le Deployment sait gérer la mise à jour des Pods en “
Rolling upgrade
”

##==##

<!-- .slide: class="with-code" -->

# Mise à l’échelle manuelle

```shell

$ kubectl scale deployment/nginx --replicas=10

$ kubectl get all
```

<!-- .element: class="big-code" -->

Notes:
La commande
scale
permet d’indiquer au ReplicaSet le nombre de réplicas à maintenir.

On scale ici à 10 à instances de pod pour démontrer les
mises à jours progressives
.

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# The Label Game

##==##

<!-- .slide:-->

# Les labels Kubernetes

- Pour le fonctionnement interne de Kubernetes
  - ReplicaSet && Deployments ⇒ Pods
  - Services ⇒ Pods

##==##

<!-- .slide:-->

# “The label game”

![center h-800](./assets/images/label-game.png)

Notes:
Jeu : trouver le sélecteur permettant d’identifier les pods encadrés

##==##

<!-- .slide:-->

# “The label game”

![center h-800](./assets/images/label-game.png)

<div style="border:blue solid 3px; border-radius:100px; position:absolute; width:700px; height: 750px; top:250px; left: 600px;" ></div>

Notes:
selector:

App: MyApp

##==##

<!-- .slide:-->

# “The label game”

![center h-800](./assets/images/label-game.png)

<div style="border:blue solid 3px; border-radius:100px; position:absolute; width:350px; height: 750px; top:250px; left: 600px;" ></div>

Notes:
selector:

Rôle: Interface

##==##

<!-- .slide:-->

# “The label game”

![center h-800](./assets/images/label-game.png)

<div style="border:blue solid 3px; border-radius:100px; position:absolute; width:700px; height: 350px; top:250px; left: 600px;" ></div>

Notes:
selector:

Phase: Prod

##==##

<!-- .slide:-->

# “The label game”

![center h-800](./assets/images/label-game.png)

<div style="border:blue solid 3px; border-radius:100px; position:absolute; width:350px; height: 350px; top:650px; left: 950px;" ></div>

Notes:
selector:

Phase: test

Rôle: BE

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Deployment

##==##

<!-- .slide: class="exercice"-->

# TP : Deployment

## LAB

- On va créer une stack complète hello, auth, frontend

- Avec deployment et service

##==##

<!-- .slide: class="exercice"-->

# Architecture de la stack

## LAB

![center h-800](./assets/images/archi-tp-deployment.svg)

##==##

<!-- .slide: class="exercice"-->

# TP : Deployment

## LAB

- Créer un déploiement :

`$ kubectl apply -f deployments/auth.yaml`

`$ kubectl describe deployments auth`

- Et créer le service correspondant

`$ kubectl apply -f deployments/service-auth.yaml`

##==##

<!-- .slide: class="exercice"-->

# TP : Deployment Hello

## LAB

- Idem pour le service Hello

`$ kubectl apply -f deployments/hello.yaml`

`$ kubectl describe deployments hello`

`$ kubectl apply -f deployments/service-hello.yaml`

##==##

<!-- .slide: class="exercice"-->

# TP : Deployment Frontend

## LAB

- Et pour le service Front

`$ kubectl create configmap nginx-frontend-conf --from-file=configuration/nginx/`

`$ kubectl apply -f deployments/frontend.yaml`

`$ kubectl apply -f deployments/service-frontend.yaml`

- Quizz : Comment le frontend a accès au service auth et hello ?

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : C’est les soldes !

##==##

<!-- .slide: class="exercice"-->

# TP : Scaling Deployment

## LAB

- On va maintenant augmenter le nombre de pod

`$ kubectl scale deployments hello --replicas=3`

`$ kubectl describe deployments hello`

`$ kubectl get pods`

`$ kubectl get replicasets`

Notes:
combien

##==##

<!-- .slide: class="exercice with-code"-->

# TP : Scaling Frontend

## LAB

- Editer le service frontend pour scaler à 2 replicas

`$ vim deployments/frontend.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
name: frontend
spec:
replicas: 2
```

`$ kubectl apply -f deployments/frontend.yaml`

##==##

<!-- .slide: class="transition"-->

# Mise à l’échelle et mise à jour

##==##

<!-- .slide:-->

# Rolling upgrade 1/4

![center h-800](./assets/images/rolling-update-1.png)

Notes:
Etat initial : 4 Pods v1 répartis sur 3 noeuds

On va modifier la configuration du Deployment pour utiliser une autre version du pod (changement d’image docker, de configuration, …)

Le DeploymentController (le A sur le master) va réagir à ce changement de configuration

##==##

<!-- .slide:-->

# Rolling upgrade 2/4

![center h-800](./assets/images/rolling-update-2.png)

Notes:
Le DeploymentController va instancier un nouveau Pod “v2” et attendre qu’il soit fonctionnel.

Dès que ce nouveau Pod est prêt, le Service va lui envoyer des requêtes.

L’ancien Pod ne reçoit plus de nouvelles requêtes, il va être arrêté puis supprimé par le DeploymentController.

##==##

<!-- .slide:-->

# Rolling upgrade 3/4

![center h-800](./assets/images/rolling-update-3.png)

Notes:
Chaque Pod est ainsi remplacé par la nouvelle version, un par un.

##==##

<!-- .slide:-->

# Rolling upgrade 4/4

![center h-800](./assets/images/rolling-update-4.png)

Notes:
À la fin du processus de rolling-upgrade, il ne reste que des pods v2.

Il n’y a pas eu d’interruption de service.

##==##

<!-- .slide: class="with-code" -->

# Mise à jour progressive

- Mise à jour progressive (rolling-upgrade) sans interruption de service
- Gérée par le Deployment

Remplacer nginx par Apache httpd :

```shell
$ kubectl edit deployment nginx --record
“image: nginx:alpine” ⇒ “image: httpd:alpine”
```

<!-- .element: class="big-code" -->

Notes:
Fonctionnalité native Kubernetes au niveau d’un déploiement.

Regarder la mise à jour dans le visualizer

Vérifier que nginx a bien été remplacé par apache dans le navigateur.

Edition en direct de la spec du Deployment

Sortir de vim avec “:wq”

##==##

<!-- .slide: class="with-code" -->

# Annuler une mise à jour progressive

```shell
$ kubectl rollout history deployment nginx
REV  CHANGE-CAUSE
1    kubectl apply --filename=deployment.yaml
2    kubectl edit deployment nginx
3    kubectl set image deploy nginx nginx=nginx:stable-alpine

$ kubectl rollout undo deployment --to-revision=1
```

<!-- .element: class="big-code" -->

Notes:
Le nombre de révision conservées est contrôle par la propriété
.spec.revisionHistoryLimit
, 10 par défaut.

Ce sont les ressources “ReplicaSet” qui sont conservés dans etcd, avec
replicas=0
pour les anciennes versions.

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Mise à l’échelle automatique

##==##

<!-- .slide:-->

# Horizontal Pod Autoscaler

![center h-800](./assets/images/horizontal-pod-autoscaler.svg)

Notes:
L’
Horizontal Pod Autoscaler
est un Controller Kubernetes responsable de

modifier en temps réel le nombre de replicas
d’un ReplicationController / Deployment

en fonction de la charge CPU
moyenne de l’ensemble de pods de ce RC/Déployment.

https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/

https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/

##==##

<!-- .slide: class="with-code" -->

# Horizontal Pod Autoscaler

- Déclarer un Horizontal Pod scaler en CLI :

`$ kubectl autoscale deployment nginx --cpu-percent=50 --min=1 --max=10`

Notes:
On peut déclarer un horizontal pod autoscaler en cli ou via l’api, exemple via l’api page suivante.

Le HPA va agir sur le deployment pour monter ou descendre le nombre de pod en fonction du pourcentage de cpu consommé.

D’autres métriques peuvent être utilisés.

##==##

<!-- .slide: class="with-code" -->

# Horizontal Pod Autoscaler

```yaml
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: helloweb
spec:
  maxReplicas: 10
  minReplicas: 1
  targetCPUUtilizationPercentage: 50
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: helloweb
```

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Autoscaling

##==##

<!-- .slide: class="exercice" -->

# TP : Autoscaling

## LAB

- Les tests vont s’effectuer sur l’image docker k8s.gcr.io/hpa-example.
- Cette image contient un apache+php. La home page de cette apache est un script php qui calcule les racines carrées des nombres de 1 à 1 million.
- L’appel à cette page va provoquer une forte consommation CPU.

Notes:
Version
impérative
de la commande
versus
version
déclarative
par fichier yaml.

##==##

<!-- .slide: class="exercice"-->

# TP : Autoscaling

## LAB

- Créer un deployment

`$ kubectl apply -f deployments/hpa-example.yaml`

- Exposer le deployment

`$ kubectl expose deployment/hpa-example --port 80`

- Créer un hpa sur le deployment

`$ kubectl autoscale deployment hpa-example --cpu-percent=50 --min=1 --max=10`

##==##

<!-- .slide: class="exercice with-code"-->

# TP : Autoscaling

## LAB

- Vous lancerez ensuite un Pod interactif pour charger l’Apache :

`$ kubectl run -ti load-generator --image=busybox /bin/sh`

- Dans laquelle vous exécuterez la boucle d’appels :

```shell
$ while true;
do wget -q -O- http://hpa-example;
done
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice"-->

# TP : Autoscaling

## LAB

- Vérifier l’état de l’objet HPA

`$ kubectl get hpa/hpa-example`

- Arrêter la commande wget
- Attendez 5 minutes
- Vérifier à nouveau l’état du HPA
- Que constatez-vous ?

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Ingress

##==##

<!-- .slide:-->

# Ingress

- Point d’entrée unique du cluster

- HTTP (port 80) et HTTPS (port 443)

- Gestion des certificats SSL

##==##

<!-- .slide:-->

# Ingress

![center h-800](./assets/images/ingress.svg)

##==##

<!-- .slide: class="with-code max-height" -->

# Ingress yaml

```yaml
apiVersion: v1
kind: Ingress
metadata:
  name: nginx
spec:
  rules:
  - host: "institute.sfeir.com"
    http:
          paths:
          - path: /
        pathType: ImplementationSpecific
        backend:
                  service
            name: nginx
            port:
              name: http
```

Notes:
Les règles permettent, avec l’implémentation actuelle, de router le traffic selon :

le hostname (en-tête HTTP “
Host:
”)

le path HTTP (à partir du
/
suivant le nom+port de serveur dans l’url)

##==##

<!-- .slide: class="with-code" -->

# Ingress

```shell
$ kubectl get ingress
NAME      HOSTS     ADDRESS     PORTS     AGE
nginx     *         localhost   80        3m

$ kubectl get ing -o yaml nginx
apiVersion: apps/v1
kind: Ingress
metadata:
  name: nginx
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Ingress

- Implémentation par défaut à base de nginx

- À activer sur minikube (minikube addons enable ingress)

- À déployer manuellement sous Docker-for-Desktop

https://kubernetes.github.io/ingress-nginx/deploy/

##==##

<!-- .slide: data-type-show="hide"-->

# Demo : Ingress

##==##

<!-- .slide:-->

# Récapitulatif

![center h-800](./assets/images/recap-ingress.png)

Notes:
Jusqu’à maintenant avons abordé les principales ressources Kubernetes :

Pod, ReplicaSet,
Deployment, Service et Ingress

Voyons maintenant comment les faire vivre

##==##

<!-- .slide: class="transition"-->

# Stocker des données

##==##

<!-- .slide:-->

# Volumes

- Juste un dossier monté dans un/des containers
- Associé à la vie du Pod, survit au restart des containers
- Nombreuses implémentations :
  - emptyDir
  - hostPath
  - persistentVolumeClaim
  - configMap / secret

##==##

<!-- .slide: class="with-code" -->

# emptyDir

- Volume vide, créé au démarrage d’un pod, supprimé avec la suppression du Pod.

```yaml
volumes:
  - name: cache-volume
    emptyDir: {}
```

<!-- .element: class="big-code" -->

Notes:
Utile pour passer des fichiers d’un container à l’autre ou d’un initContainer à un container.

##==##

<!-- .slide: data-type-show="hide"-->

# gcePersistentDisk

PersistentDisk GCE
Il doit être dans le même projet et la même zone que les VM du cluster
Il n’est pas supprimé à la suppression du pod

##==##

<!-- .slide: data-type-show="hide"-->

# gcePersistentDisk

```yaml
volumes:
  - name: test-volume
    gcePersistentDisk:
    pdName: my-data-disk
    fsType: ext4
```

Notes:
Il s’agit d’un disque compute engine classique.

Il NE peut être monter en écriture que sur UN SEUL node à la fois, mais il peut être monter en lecture sur plusieurs nodes.

##==##

<!-- .slide: class="with-code" -->

# hostPath

- Monte dans le container un dossier du noeud sur lequel le Pod s’exécute

```
volumes:
  - name: test-volume
    hostPath:
      # directory location on host
      path: /data
      # this field is optional
      type: Directory
```

<!-- .element: class="big-code" -->

Notes:
Il s’agit d’un disque monté sur une VM du cluster, mais il faut que le pod tourne sur le noeud où le volume a été créé. Peu recommandé.

##==##

<!-- .slide:-->

# persistentVolume & persistentVolumeClaim

- L’admin crée une ressource PersistentVolume associée à une espace de stockage
- Le pod réclame du disque avec un PersistentVolumeClaim

Notes:
PersistentVolumeClaim fait référence au PersistentVolume créé précédemment

##==##

<!-- .slide: class="with-code max-height" -->

# persistentVolume

```yaml
kind: PersistentVolume
apiVersion: v1
metadata:
  name: task-pv-volume
  labels:
    type: local
spec:
  storageClassName: manual
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: '/mnt/data'
```

Notes:
Ce persistent volume va créé un espace réservé de 10 Go sur l’un des noeuds du cluster.

##==##

<!-- .slide: class="with-code max-height"-->

# persistentVolumeClaim

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
name: task-pv-claim
spec:
storageClassName: manual
accessModes:

- ReadWriteOnce
  resources:
  requests:
  storage: 3Gi
```

##==##

<!-- .slide: class="two-column with-code"-->

# Pod

```yaml
kind: Pod
apiVersion: v1
metadata:
name: task-pv-pod
spec:
volumes:
  - name: task-pv-storage
    persistentVolumeClaim:
    claimName: task-pv-claim
```

<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code" -->

<br>
<br>
<br>

```yaml
containers:
  - name: task-pv-container
    image: nginx
    ports:
  - containerPort: 80
    name: 'http-server'
    volumeMounts:
  - mountPath: '/usr/share/nginx/html'
    name: task-pv-storage
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Volumes

##==##

<!-- .slide: class="exercice"-->

# TP : Volume

## LAB

- Objectif : déployer un wordpress + MySql persistant
- Générer un secret avec un mot de passe

`$ kubectl create secret generic mysql --from-literal=password=$(openssl rand -hex 12)`

##==##

<!-- .slide: class="exercice"-->

# TP : Volume

## LAB

- Créer les volumes

`$ kubectl apply -f volume/mysql-volumeclaim.yaml`

`$ kubectl apply -f volume/wordpress-volumeclaim.yaml`

- Créer la base mysql

`$ kubectl apply -f volume/mysql.yaml`

`$ kubectl apply -f volume/mysql-service.yaml`

##==##

<!-- .slide: class="exercice"-->

# TP : Volume

## LAB

- Créer l’instance Wordpress et exposer le service

`$ kubectl apply -f volume/wordpress.yaml`

`$ kubectl apply -f volume/wordpress-service.yaml`

- Accéder à votre wordpress

`$ curl http://$(kubectl get service wordpress -o jsonpath="{.status.loadBalancer.ingress[0].ip}")`

##==##

<!-- .slide: class="exercice"-->

# TP : Volume

## LAB

- Détruire les pods mysql et wordpress

`$ k delete pods -l="app=mysql"`

`$ k delete pods -l="app=wordpress"`

- Que se passe-t-il ? (un peu de patience quand même ;) )

##==##

<!-- .slide:  class="exerice"-->

# TP : Volume Nettoyage

## LAB

`$ kubectl delete service wordpress`

`$ kubectl delete deployment wordpress`

`$ kubectl delete pvc wordpress`

`$ kubectl delete service mysql`

`$ kubectl delete deployment mysql`

`$ kubectl delete pvc mysql`

##==##

<!-- .slide: class="transition"-->

# Gestion avancée de Pods

##==##

<!-- .slide:-->

# DaemonSet : un Pod par noeud

![center h-500](./assets/images/daemonset.svg)

- Agent de monitoring
- Relais de logs
- Agent de stockage (client glusterfs, …)

Notes:
Un objet DaemonSet va exécuter un pod par node, utilisé surtout pour des tâches d’administration/ monitoring du cluster.

##==##

<!-- .slide:-->

# StatefulSet : un Volume par Pod

![center h-500](./assets/images/statefulset.svg)

- Pour les applis qui ont besoin de garder un état
- Kube réassocie les Pods aux volumes persistants
- Dns : <name>-{0..N-1}.<service>.<ns>.svc.cluster.local

Notes:
Les pods sont numérotés dans l’ordre, et les pods réassignés à ce volumes au redémarrage.

Quelques contraintes : les pods sont démarrés et éteints dans l’ordre de démarrage

##==##

<!-- .slide:-->

# Jobs

- Job

  - Batch lancé une seule fois
  - Kubernetes ne relance pas les Pods de ce type sauf code retour en erreur

- CronJob
  - Job déclenché régulièrement selon une expression cron : `"_/1 _ \* \* \*"`

Notes:
Utile pour lancer un batch de façon régulier.

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Template

##==##

<!-- .slide:-->

# Problème

![center h-800](./assets/images/pb-template.png)

Notes:
Un déploiement peut devenir rapidement très verbeux, très long, difficile à maintenir

##==##

<!-- .slide:-->

# Problèmes

- yaml verbeux
- beaucoup de code en commun entre 2 déploiements
- besoin de déployer un “package”

Notes:
Problème de syntaxe avec le yaml

Il y a généralement entre 2 applications similaires, peu de différence

Plutôt que de déployer un deployment + un service + un configmap + ... , on a besoin de déployer un package complet.

##==##

<!-- .slide: class="with-code" -->

# Template : Helm

- Le plus populaire aujourd’hui
- Templating sur la base du moteur de template go
- Chart
- Repository de chart
- Tiller et état

`$ helm repo update`

`$ helm install mysql bitnami/mysql`

##==##

<!-- .slide: class="with-code max-height" -->

# Helm : chart

```
wordpress/
  Chart.yaml          # A YAML file containing information about the chart
  LICENSE             # OPTIONAL: A plain text file containing the license for the chart
  README.md           # OPTIONAL: A human-readable README file
  requirements.yaml   # OPTIONAL: A YAML file listing dependencies for the chart
  values.yaml         # The default configuration values for this chart
  charts/             # A directory containing any charts upon which this chart depends.
  templates/          # A directory of templates that, when combined with values,
                      # will generate valid Kubernetes manifest files.
  templates/NOTES.txt # OPTIONAL: A plain text file containing short usage notes
```

<!-- .element: class="big-code" -->

Notes:
L’organisation d’un chart helm

##==##

<!-- .slide: class="with-code two-column max-height" -->

# Helm : Template

[deployment.yaml]

```yaml
spec:
  containers:
    - name: deis-database
      image: postgres:{{.Values.dockerTag}}
      imagePullPolicy: { { .Values.pullPolicy } }
      ports:
        - containerPort: 5432
      env:
        - name: DATABASE_STORAGE
          value: { { default "minio" .Values.storage } }
```

##--##

<!-- .slide: class="with-code" -->

<br>
<br>
<br>

[Values.yaml]

```yaml
# The tag for the docker image.
dockerTag: 7.1.2
pullPolicy: Always
# The storage backend, whose default is set to "minio"
# storage:
```

Notes:
Values.yaml

imageRegistry
: The source registry for the Docker image.

dockerTag
: The tag for the docker image.

pullPolicy
: The Kubernetes pull policy.

storage
: The storage backend, whose default is set to
"minio"

##==##

<!-- .slide:-->

# Template : Kustomize

- Challenger
- Plain yaml
- Pas de “templating”
- Mais plutôt du “patch”
- Intégré à kubectl ‘kubectl apply **-k ...**’

##==##

<!-- .slide:-->

# Kustomize

![center h-800](./assets/images/kustomize.png)

Notes:
Un exemple avec kustomize

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Sécurité

##==##

<!-- .slide:-->

# RBAC

- Role-based Access Control
- Contrôle l’accès à l’api pour les utilisateurs
- Gestion des droits par défaut dans kubernetes

- Role / ClusterRole
- RoleBinding / ClusterRoleBinding

##==##

<!-- .slide: class="with-code two-column" -->

# RBAC

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
  - apiGroups: ['']
    resources: ['pods']
    verbs: ['get', 'watch', 'list']
```

##--##

<br>
<br>
<br>

```yaml
---
kind: RoleBinding
subjects:
  - kind: User
    name: jane # Name is case sensitive
    apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

##==##

<!-- .slide:-->

# RBAC : rôles par défaut

- view
- edit
- admin
- cluster-admin

Notes:
view : permet d’avoir une vue readonly sur la plupart des objets d’un namespace, ne permet pas de voir les secrets, ou les objets roles et rolebinding

edit : permet de modifier la plupart des objets, mais pas les objet roles rolebinding

admin : permet d’éditer les objets + les droits sur un namespace mais pas les quotas

cluster-admin : tous les droits

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Monitoring

##==##

<!-- .slide:-->

# Monitoring : Prometheus

- Pull de métriques sur les applications.
- Inverse la logique de monitoring.

Notes:
Traditionnellement, les applications envoient leurs métriques à des systèmes centralisés. Cette façon de faire rend l'application responsable de cet envoi des métriques.
Dans une architecture cloud moderne, la logique est inversée pour faciliter ce monitoring.

Prometheus est un des outils qui implémente cette logique. Il va interroger périodiquement une URL sur vos applications pour lire vos métriques, puis envoyer ces métriques à une base de données spécialisée dans les séries temporelles. Cette base pourra être interrogée pour la surveillance des applications.

##==##

<!-- .slide: class="transition"-->

# Méthodes d’installation de clusters

##==##

<!-- .slide:-->

# Installation k8s : développement

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Rancher Desktop](https://rancherdesktop.io/)
- Installation manuelle [“k8s the hard way”](https://github.com/kelseyhightower/kubernetes-the-hard-way)
  - Quid du réseau?
  - Sécurité first
- [Kind](https://kind.sigs.k8s.io/)
- [Kops](https://github.com/kubernetes/kops)
- [K3s](https://k3s.io/)

Notes:
“The hard way“ : pour les très courageux : comment installer un cluster k8s complémente à la main. (très intéressant pour comprendre k8s mais très peu recommandé)

Docker for (Mac|Windows) : “minikube” intégré dans la version desktop de docker (à activer manuellement)

Kops : cli pour créer un cluster k8s sur des VMs chez des cloud provider AWS, GCE

##==##

<!-- .slide:-->

# Installation du cluster : production

- On premise
  - Kubeadm
- Cloud
  - GKE (Google)
  - AKS (Azure)
  - EKS (AWS)
    $ OVH
  - ….

Notes:

Kubeadm : la version préconisée aujourd’hui pour une installation on premise

Kubernetes Managé : GCP, Amazon, Azure, mais aussi Digital Ocean, OVH (and counting…)

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Service mesh

##==##

<!-- .slide:-->

# Istio

- Routage
- Sécurité
- Observabilité
- En option sur GKE
- CNCF

Notes:
routage : canary release / circuit breaker

sécurité : SSL entre les services, authentification, autorisation

observabilité : remonte des métriques de connexion entre les services

cncf : le projet fait partie comme kubernetes de la cncf

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Architecture micro-service

##==##

<!-- .slide:-->

# Les 12 facteurs des applications Cloud

- Base de code : système de contrôle de version
- Dépendances : Déclarez explicitement et isolez les dépendances
- Configuration : Stockez la configuration dans l’environnement
- Services externes : ressources rattachées
- Build, release, run : Séparez le build/packaging et d’exécution
- Processus : Exécutez l’application comme un ou plusieurs processus sans état

Notes:
I. Base de code
Une base de code suivie avec un système de contrôle de version, plusieurs déploiements
II. Dépendances
Déclarez explicitement et isolez les dépendances
III. Configuration
Stockez la configuration dans l’environnement ===> ConfigMap, Secrets, Consul, …

IV. Services externes
Traitez les services externes comme des ressources attachées
V. Build, release, run
Séparez strictement les étapes d’assemblage et d’exécution
VI. Processus
Exécutez l’application comme un ou plusieurs processus sans état
VII. Associations de ports
Exportez les services via des associations de ports
VIII. Concurrence
Grossissez à l’aide du modèle de processus
IX. Jetable
Maximisez la robustesse avec des démarrages rapides et des arrêts gracieux
X. Parité dev/prod
Gardez le développement, la validation et la production aussi proches que possible
XI. Logs
Traitez les logs comme des flux d’évènements
XII. Processus d’administration
Lancez les processus d’administration et de maintenance comme des one-off-processes

##==##

<!-- .slide:-->

# Les 12 facteurs des applications Cloud

- Associations de ports : Exportez les services via des associations de ports
- VIII. Concurrence : Grossissez à l’aide du modèle de processus
- IX. Jetable : Maximisez la robustesse avec des démarrages rapides et des arrêts gracieux
- X. Parité dev/prod : Gardez le développement, la validation et la production aussi proches que possible
- XI. Logs : Traitez les logs comme des flux d'événements
- XII. Processus d’administration : Lancez les processus d’administration et de maintenance comme des one-off-processes

Notes:
I. Base de code
Une base de code suivie avec un système de contrôle de version, plusieurs déploiements
II. Dépendances
Déclarez explicitement et isolez les dépendances
III. Configuration
Stockez la configuration dans l’environnement ===> ConfigMap, Secrets, Consul, …

IV. Services externes
Traitez les services externes comme des ressources attachées
V. Build, release, run
Séparer strictement les étapes d’assemblage et d’exécution
VI. Processus
Exécutez l’application comme un ou plusieurs processus sans état
VII. Associations de ports
Exportez les services via des associations de ports
VIII. Concurrence
Grossissez à l’aide du modèle de processus
IX. Jetable
Maximisez la robustesse avec des démarrages rapides et des arrêts gracieux
X. Parité dev/prod
Gardez le développement, la validation et la production aussi proches que possible
XI. Logs
Traitez les logs comme des flux d'événements
XII. Processus d’administration
Lancez les processus d’administration et de maintenance comme des one-off-processes
