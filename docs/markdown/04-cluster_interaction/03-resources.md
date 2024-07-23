<!-- .slide: class="transition-bg-sfeir-3"-->

# Les ressources

Notes:
Configuration files - Written in YAML or JSON, these files describe the desired state of your application in terms of Kubernetes API objects. A file can include one or more API object descriptions (manifests). (See the example YAML from the stateless app).

Fichier de configuration : écrit en yaml ou json, ce fichier décrit l’état désiré d’une ressource Kubernetes. Dans un fichier, on peut inclure une ou plusieurs descriptions d’objets

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les ressources > **Création impérative**
Il est possible de créer des ressources Kubernetes avec kubectl. Cette méthode est utile dans des cas spécifiques : tests, dépannage, démonstration.

```bash
# Syntaxe générique de création d'une ressource
$> kubectl create <type-of-object> [<subtype-of-object>] <name-of-object> <properties> 
# Créer un espace de nom
$> kubectl create namespace <my-namespace>
# Créer un pod
$> kubectl run <pod-name> --image=<image>
# Créer le fichier my-pod.yaml, contenant un pod <pod-name> ayant pour image <image>
$> kubectl run <pod-name> --image=<image> --dry-run=client -o yaml > my-pod.yaml
```

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les ressources > Création impérative > **exemple du pod**
```bash
# On créer un pod
kubectl run pod-school -n school --image busybox -- sleep 4800
pod/pod-school created

# On affiche notre pod
❯ k get pod -n school
NAME                     READY   STATUS    RESTARTS   AGE
pod-school               1/1     Running   0          8s
```
Ce qui nous donne
![center h-450](./assets/images/ressources-pod.png)
##==##

<!-- .slide: -->

# Les ressources > **Création déclarative**
Les ressources sont créées à partir de fichier YAML avec les avantages suivants
* Gestion des ressources as code (via GitOPs)
* Permet des déploiements complexes
* Facilite le déploiement dans divers environnements (dev, preprod, prod)
* Facilite les rollback ou les montées de version
* Peut être associé à du déploiement continu (ArgoCD / FluxCD)

##==##

<!-- .slide: class="with-code-bg-dark" -->
# Les ressources > Création déclarative > **Les manifests**
Pour déployer un pod avec la méthode déclarative, il faut écrire ce pod au format YAML.
```YAML
apiVersion: v1
kind: Pod
metadata:
  labels:
    run: pod-school
  name: pod-school
  namespace: school
spec:
  containers:
    image: school:v1.0
    name: pod-school
```

##==##

<!-- .slide: class="with-code-bg-dark" -->
# Les ressources > Création déclarative > **Avec kubectl**
Une fois des manifests en notre posséssion, il est possible d'utiliser kubectl pour les intéragir avec dans notre cluster.

```bash
# Créer ou modifier une ressource
$ kubectl apply -f my-pod.yaml
# Recréer la ressource
$ kubectl replace -f my-pod.yaml
# Afficher les différences entre la ressource déjà présente sur le cluster et celle du manifest
$ kubectl diff -f my-pod.yaml
# Supprimer la ressource
$ kubectl delete -f my-pod.yaml 
```