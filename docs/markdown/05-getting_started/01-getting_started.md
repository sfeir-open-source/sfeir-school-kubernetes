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
