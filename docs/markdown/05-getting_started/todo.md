<!-- .slide:-->

# Getting started


##==##
<!-- .slide:-->

# Namespace


##==##
<!-- .slide:-->

# Namespace


Espace de nom pour isoler les déploiements
Peut être utiliser pour séparer les environnements
Le nom d’une ressource est unique au sein d’un namespace.
Par défaut:
default
kube-system
kube-public


Notes:
nom de ressource unique dans un namespace
 (mais pas au sein d’un cluster)


default : namespace de travail par défaut

kube-system : namespace pour les déploiements internes au cluster

kube-public : namespace créé par défaut pour les ressources exposés publiquement



##==##
<!-- .slide: class="with-code" -->

```
Clonez le dépôt github suivant :
git clone https://github.com/sfeir-open-source/sfeir-school-kubernetes.git

et placez-vous dans le dépôt cloné :
cd sfeir-school-kubernetes/steps

```

# Récupérer les exercices


Notes:
À faire

dans Cloud Shell

OU

sur les machines locales si 
git, kubectl et Cloud SDK
 installés



##==##
<!-- .slide: class="with-code" -->

```
Dans un premier terminal CloudShell, lancez la commande
kubectl proxy --address=0.0.0.0 \					--www=gcp-live-k8s-visualizer -p 8080

Puis ouvrez la preview Web CloudShell         et modifier l’url pour qu’elle termine par /static/ : 

https://8080-dot-<...>-dot-devshell.appspot.com/static/ 

```

# k8s-visualizer by Ray Tsang


![](./images/g3f3310ef84_0_1027.png)

##==##
<!-- .slide:-->

# k8s-visualizer by Ray Tsang


![](./images/g41f33631ff_0_121.png)

Notes:
La première commande lance une interface graphique pour voir en temps réel les pods et les services.



##==##
<!-- .slide: class="with-code" -->

# k8s-visualizer by Ray Tsang


```
La commande est disponible dans k8s-sfeirschool-2018/bin/viz.sh

Retrouvez cette application sur :

https://github.com/saturnism/gcp-live-k8s-visualizer 


```

Notes:
La première commande lance une interface graphique pour voir en temps réel les pods et les services.



##==##
<!-- .slide: class="with-code" -->

```
Dans un second terminal, envoyez à Kubernetes le fichier yaml du Deployment :
$ cd 01-getting-started
$ cat deployment.yaml
$ kubectl apply -f deployment.yaml --record

ℹ La ligne de commande suivante (mode impératif) donne un résultat proche du fichier yaml (mode déclaratif) mais avec moins d’options :
$ kubectl run nginx --image="nginx:alpine" \					  --labels="app=nginx" --record

```

# Premier déploiement


Notes:
Bien qu’on puisse créer un Pod individuellement, on utilise rarement cette possibilité.


En général, on utilise les Deployment pour gérer des pods.




L’option 
--record
 permet de conserver un historique des configurations des Deployment.

À utiliser avec chaque commande qu’on veut enregistrer dans l’historiques.



On préfère le 
mode déclaratif
, par 
fichiers
, qu’on peut versionner dans git,

que le 
mode impératif
 en 
ligne de commande
 qui n’est pas reproductible.



Observons ensuite les ressources créées : pod, replicaset, deployment



##==##
<!-- .slide:-->

# TP : Configurer kubectl


##==##
<!-- .slide:-->

# TP : Configurer kubectl




!! Faites une sauvegarde du fichier ~/.kube/config !!


##==##
<!-- .slide:-->

# TP : Configurer kubectl


Installer gcloud & kubectl
Configurer kubectl
$ wget -qO cred.json bit.ly/2jYVpSI
$ gcloud auth activate-service-account --key-file=cred.json --project=sfeir-builder
$ gcloud config set project sfeir-builder
$ gcloud container clusters get-credentials sfeirschool-gke-cluster --zone europe-west3-a --project sfeir-builder
$ echo 'source <(kubectl completion bash)' >>~/.bashrc


##==##
<!-- .slide:-->

# TP : Configurer kubectl


$ alias k=”kubectl”
$ kubectl get nodes
$ kubectl get namespace
$ kubectl config set-context --current --namespace=<insert-namespace-name-here> 
$ kubectl config view --minify=true




##==##
<!-- .slide:-->

# Manifest


Notes:
Configuration files - Written in YAML or JSON, these files describe the desired state of your application in terms of Kubernetes API objects. A file can include one or more API object descriptions (manifests). (See the example YAML from the stateless app).



Fichier de configuration : écrit en yaml ou json, ce fichier décrit l’état désiré d’une ressource Kubernetes. Dans un fichier, on peut inclure une ou plusieurs descriptions d’objets 



##==##
<!-- .slide: class="with-code" -->

```
kind: PodapiVersion: v1metadata:  name: nginx  labels:    app: nginxspec:  containers:  - name: nginx    image: nginx:alpinestatus:  ...

```

# Manifest


Notes:
kind : type de resource que l’on va créé 

apiVersion: version de l’api de la ressource que l’on veut créé

metadata: information qui permette d’identifier la resource, name est obligatoire 

spec: définit l’état désiré de notre ressource

status : état actuel de la ressource


