<!-- .slide: -->

# Interaction avec un cluster > **kubectl**

Client Kubernetes en ligne de commande écrit en go et interagissant avec l'api Kubernetes.
* Utilise par défaut le fichier `~/.kube/config` pour se connecter au cluster.
* Un fichier peut contenir plusieurs clusters, découpé en contextes.
  * Un contexte est un ensemble contenant cluster + utilisateur.

![center h-600](./assets/images/kubectl-config.png)

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

<!-- .slide: class="with-code-bg-dark" -->
# Interaction avec un cluster > kubectl > **commandes courantes**
```BASH
# lister les pods
$> kubectl get pods -n kube-system
NAME                                        READY   STATUS    RESTARTS        AGE
etcd-prod-k8s-cplane01                      1/1     Running   16 (10h ago)    335d
kube-apiserver-prod-k8s-cplane01            1/1     Running   16 (10h ago)    175d
...

# décrire un objet
$> kubectl describe pod etcd-prod-k8s-cplane01 -n kube-system
Name:                 etcd-prod-k8s-cplane01
Namespace:            kube-system
...

# créer un objet (méthode impérative)
$> kubectl create deployment sfeir-school --image busybox --replicas 1 -n school
deployment.apps/sfeir-school created

# rentrer dans un pod
$> kubectl exec -n school -it school -- bash
/ $ whoami
school
```

##==##

<!-- .slide: class="with-code-bg-dark" -->
# Interaction avec un cluster > kubectl > **commandes complexes**
```BASH
# Patcher un pod en changeant son image
$> kubectl patch pod school -p '{"spec":{"containers":[{"name":"school-kubernetes","image":"school:v2.O"}]}}'

# Lister toutes les images de tous les pods du cluster
$> kubectl get pods -A -o=custom-columns='IMAGES:spec.containers[*].image'
registry.k8s.io/coredns/coredns:v1.10.1
registry.k8s.io/etcd:3.5.9-0
registry.k8s.io/kube-apiserver:v1.28.0
registry.k8s.io/kube-controller-manager:v1.28.0
registry.k8s.io/kube-proxy:v1.28.0
registry.k8s.io/kube-scheduler:v1.28.0
...

# Afficher tous les nodes qui ne sont pas des control planes
$> kubectl get node --selector='!node-role.kubernetes.io/control-plane'
NAME                STATUS   ROLES    AGE    VERSION
prod-k8s-worker01   Ready    <none>   430d   v1.28.0
prod-k8s-worker02   Ready    <none>   233d   v1.28.0
```

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Interaction avec un cluster > kubectl > **Aide-mémoire**

Chacune des commandes kubeclt possède une aide accessible à l'aide du -h. Voici un exemple lors de la création d'un secret
```bash
kubectl create secret generic -h
Create a secret based on a file, directory, or specified literal value...

Examples:
  # Create a new secret named my-secret with keys for each file in folder bar
  kubectl create secret generic my-secret --from-file=path/to/bar

  # Create a new secret named my-secret with key1=supersecret and key2=topsecret
  kubectl create secret generic my-secret --from-literal=key1=supersecret --from-literal=key2=topsecret

  # Create a new secret named my-secret from env files
  kubectl create secret generic my-secret --from-env-file=path/to/foo.env --from-env-file=path/to/bar.env
```
<br>

De plus il existe une page dédiée à kubectl sur le site officiel de kubernetes
* https://kubernetes.io/fr/docs/reference/kubectl/cheatsheet/

##==##

<!-- .slide:-->

# Interaction avec un cluster > kubectl > **k9s, l'UI de kubectl**

Interface utilisateur en mode terminal permettant de gérer les clusters kubernetes.
* Visualisation en temps réel des ressources du cluster.
* Navigation rapide entre différents types de ressources.
* Gestion des pods, déploiements, services, etc…
* Visualisation des logs et exécution de commandes dans les pods.

![center h-500](./assets/images/k9scli.png)
  [k9scli.io](https://k9scli.io/)

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quelle commande kubectl utiliseriez-vous pour obtenir une liste de tous les pods dans le namespace actuel ?
* kubectl list pods
* kubectl get pods
* kubectl show pods
* kubectl describe pods

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quelle commande kubectl utiliseriez-vous pour obtenir une liste de tous les pods dans le namespace actuel ?
* kubectl list pods
* **kubectl get pods**
* kubectl show pods
* kubectl describe pods

##==##

<!-- .slide: class="exercice" -->
## Quiz

Comment exécuteriez-vous une commande shell dans un pod spécifique nommé "my-pod" ?
* kubectl run my-pod
* kubectl shell my-pod
* kubectl exec -it my-pod -- /bin/bash
* kubectl enter my-pod

##==##

<!-- .slide: class="exercice" -->
## Quiz

Comment exécuteriez-vous une commande shell dans un pod spécifique nommé "my-pod" ?
* kubectl run my-pod
* kubectl shell my-pod
* **kubectl exec -it my-pod -- /bin/bash**
* kubectl enter my-pod

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quelle option de kubectl vous permet d'appliquer un fichier de configuration YAML à votre cluster ?
* kubectl create -f config.yaml
* kubectl apply -f config.yaml
* kubectl update -f config.yaml
* kubectl configure -f config.yaml

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quelle option de kubectl vous permet d'appliquer un fichier de configuration YAML à votre cluster ?
* kubectl create -f config.yaml
* **kubectl apply -f config.yaml**
* kubectl update -f config.yaml
* kubectl configure -f config.yaml

##==##

<!-- .slide: class="exercice" -->
## Quiz

Comment obtenez-vous des informations détaillées sur un service nommé "my-service" ?
* kubectl info my-service
* kubectl get my-service
* kubectl describe service my-service
* kubectl details my-service

##==##

<!-- .slide: class="exercice" -->
## Quiz

Comment obtenez-vous des informations détaillées sur un service nommé "my-service" ?
* kubectl info my-service
* kubectl get my-service
* **kubectl describe service my-service**
* kubectl details my-service

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Kubectl

##==##

<!-- .slide: class="exercice"-->
## LAB
# TP : Kubectl

https://killercoda.com/laurental/scenario/1-kubectl

