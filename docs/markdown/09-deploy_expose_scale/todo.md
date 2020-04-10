<!-- .slide:-->

# Service


##==##
<!-- .slide:-->

# Exposer des pods


![](./images/g3f3310ef84_0_277.png)

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


IP interne 10.0.1.8


10.0.0.6


10.0.0.7


Notes:
Un Service de type ClusterIP est accessible depuis une IP interne au cluster.

On l’utilise en général pour la communication inter-pods.



##==##
<!-- .slide:-->

# Service type NodePort


10.0.0.7


10.0.0.6


10.0.0.7


Notes:
Un service du type nodePort est associé à un port identique sur chaque noeud du cluster.

Ce port est accessible depuis l’extérieur du cluster.

Il doit appartenir à la plage de ports 30000 - 32767 (configurable sur le master).

On peut le choisir mais il faut mieux laisser faire Kubernetes, qui gèrera les problèmes de ports occupés.



Inconvénient : il faut donc connaître l’adresse IP d’au moins un noeud du cluster pour accéder au service.



##==##
<!-- .slide:-->

# Service type LoadBalancer


10.0.0.6


10.0.0.7


Notes:
Un Service de type LoadBalancer utilise un équilibreur de charge externe au cluster.

Ce type de Service est utilisé sur les plateformes cloud ainsi que dans Docker-for-Desktop.

L’inconvénient c’est que chaque service aura son propre load balancer avec sa propre IP publique/Internet



##==##
<!-- .slide:-->

# Service type ExternalName


IP interne 10.0.1.8


Notes:
Un Service de type ExternalName fourni un alias DNS de type CNAME.

Il n’est utilisable qu’en interne.



##==##
<!-- .slide:-->

# Service avec Endpoint explicite


IP interne 10.0.1.8


Notes:
En interne, Kubernetes génère une ressource Endpoint pour chaque Pod ciblé par le selecteur.

Il est possible de ne pas renseigner de selecteur et à la place de créer manuellement les ressources Endpoint avec une IP externe au cluster.

C’est la manière de rajouter une abstraction vers un service externe au cluster. Les Pods ne voient que le Service interne.



##==##
<!-- .slide: class="with-code" -->

```
apiVersion: v1kind: Servicemetadata:  name: nginxspec:  selector:    app: nginx  type: NodePort  ports:  - name: http    port: 80    protocol: TCP    targetPort: 80

```

# Service yaml


Notes:
Le 
selector
 permet de cibler les pods par leurs labels.



Il y a plusieurs 
types
 de services qu’on voit tout de suite.



##==##
<!-- .slide: class="with-code" -->

```
$ kubectl apply -f service.yaml

La ligne de commande suivante donne un résultat équivalent au fichier yaml :

$ kubectl expose nginx --port=80 --type=NodePort

```

# Créer un service


##==##
<!-- .slide: class="with-code" -->

# Services


```
$ kubectl get servicesNAME        TYPE       CLUSTER-IP   EXTERNAL-IP PORT(S)       AGEkubernetes  ClusterIP  10.96.0.1    <none>      443/TCP       3dnginx       NodePort   10.97.47.155 <none>      80:31450/TCP  2s$ kubectl get svc -o yaml nginx
apiVersion: v1kind: Service
metadata:
  name: nginx...

```

##==##
<!-- .slide:-->

# Service : DNS interne


Entrée DNS : <service>.<namespace>.svc.cluster.local

Et dans le namespace : <service>


Notes:
Pour chaque service créé, le service est accessible via une entrée DNS : <service>.<namespace>.svc.cluster.local



Et à l’intérieur du namespace, uniquement avec le nom du service



##==##
<!-- .slide:-->

# TP : Service 


##==##
<!-- .slide:-->

# TP  : Créer un service 


Lire le manifest de l’objet service 
$ cat service/monolith.yaml

Créer le service 
$ kubectl create -f service/monolith.yaml



##==##
<!-- .slide:-->

# TP : Interagir avec le service


$ gcloud compute instances list
NAME                                           ZONE            MACHINE_TYPE   PREEMPTIBLE  INTERNAL_IP  EXTERNAL_IP     STATUS
gke-istio-workshop-default-pool-e37360ba-369z  europe-west1-b  n1-standard-1               10.132.0.3   35.205.92.225   RUNNING
gke-istio-workshop-default-pool-e37360ba-3hz4  europe-west1-b  n1-standard-1               10.132.0.2   35.240.127.238  RUNNING
...
Prenez l’une des ips externes et connectez vous-y
$ curl -k https://<EXTERNAL_IP>:31000


Notes:
Le résultat est un échec :  

curl -k https://35.246.130.12:31000

curl: (7) Failed to connect to 35.246.130.12 port 31000: Connection refused



Normal : il n’y a pas de label correspondant !





##==##
<!-- .slide:-->

# TP : Service


Pourquoi la requête ne fonctionne pas ? 
$ kubectl get services monolith

$ kubectl describe services monolith
Combien y a t-il de endpoints au service ? 


Notes:
Le résultat est un échec :  

curl -k https://35.246.130.12:31000

curl: (7) Failed to connect to 35.246.130.12 port 31000: Connection refused



Normal : il n’y a pas de label correspondant !





##==##
<!-- .slide:-->

# TP : Service


Lister les pods par labels
$ kubectl get pods -l "app=monolith"
$ kubectl get pods -l "app=monolith,secure=enabled"
On va labelliser un pod 
$ kubectl label pods secure-monolith “secure=enabled”
Et maintenant ? 
$ kubectl describe services monolith


Notes:
On labellise les pods 

##==##
<!-- .slide:-->

# ReplicaSet


##==##
<!-- .slide: class="with-code" -->

# ReplicaSet.yaml 


```
apiVersion: extensions/v1beta1kind: ReplicaSetmetadata:  name: nginx  labels:    app: nginxspec:  replicas: 1  selector:    matchLabels:      app: nginx  template:    <... pod definition ...>

```

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


```
$ kubectl get ReplicaSetNAME               DESIRED   CURRENT   READY     AGEnginx-5dbbff858d   1         1         1         14m

$ kubectl get rs -o yaml nginx-5dbbff858d
apiVersion: extensions/v1beta1kind: ReplicaSet
...

```

Notes:
Le ReplicaSet maintient le nombre demandé de pods 
en état de fonctionnement
.

La colonne READY montre les pods qui sont fonctionnels, et pas juste les pods créés	(
par exemple avec des 
containers en cours de création ou crashés)



##==##
<!-- .slide: class="with-code" -->

# ReplicaSet status (live)


```
...status:  availableReplicas: 1  fullyLabeledReplicas: 1  readyReplicas: 1  replicas: 1

```

Notes:
On voit le status des replicas 



##==##
<!-- .slide:-->

# Deployment


##==##
<!-- .slide: class="with-code"  class="with-code" -->

```
apiVersion: extensions/v1beta1kind: Deploymentmetadata:  name: nginxspec:  replicas: 1  selector:    matchLabels:      app: nginx  template:
  ...


```

# Deployment.yaml 


```
  ...  template:    metadata:      labels:        app: nginx    spec:      containers:      - name: nginx        image: nginx:alpine

```

Notes:
On retrouve dans le Deployment les specs du Pod et du ReplicaSet



##==##
<!-- .slide: class="with-code" -->

# kubectl get deployment


```
$ kubectl get deploymentNAME      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGEnginx     1         1         1            1           1h
$ kubectl get deploy -o yaml nginx
apiVersion: extensions/v1beta1kind: Deployment
...

```

Notes:
Le Deployment gère des 
Pods
 via un 
ReplicaSet
.

Contrairement au ReplicaSet qui maintient la même configuration de Pod en changeant  juste le nombre de replicats,

le Deployment sait gérer la mise à jour des Pods en “
Rolling upgrade
”



##==##
<!-- .slide: class="with-code" -->

```

$ kubectl scale deployment/nginx --replicas=10 

$ kubectl get all

```

# Mise à l’échelle manuelle


Notes:
La commande 
scale
 permet d’indiquer au ReplicaSet le nombre de réplicas à maintenir.



On scale ici à 10 à instances de pod pour démontrer les 
mises à jours progressives
.



##==##
<!-- .slide:-->

# The Label Game


##==##
<!-- .slide:-->

# Les labels Kubernetes


Pour le fonctionnement interne de Kubernetes
ReplicaSet && Deployments ⇒ Pods
Services ⇒ Pods


##==##
<!-- .slide:-->

# “The label game”


![](./images/g41f33631ff_0_65.png)

Notes:
Jeu : trouver le selecteur permettant d’identifier les pods encadrés



##==##
<!-- .slide:-->

# “The label game”


![](./images/g41f33631ff_0_68.png)

Notes:
selector:

  App: MyApp





##==##
<!-- .slide:-->

# “The label game”


![](./images/g41f33631ff_0_73.png)

Notes:
selector:

  Rôle: Interface




##==##
<!-- .slide:-->

# “The label game”


![](./images/g41f33631ff_0_78.png)

Notes:
selector:

  Phase: Prod




##==##
<!-- .slide:-->

# “The label game”


![](./images/g41f33631ff_0_83.png)

Notes:
selector:

  Phase: test

  Rôle: BE



##==##
<!-- .slide:-->

# TP : Deployment


##==##
<!-- .slide:-->

# TP : Deployment


On va créer une stack complète hello, auth, frontend

Avec deployment et service 



##==##
<!-- .slide:-->

# TP : Deployment


Créer un déploiement : 
$ kubectl create -f deployments/auth.yaml
$ kubectl describe deployments auth

Et créer le service correspondant
$ kubectl create -f deployments/service-auth.yaml


##==##
<!-- .slide:-->

# TP : Deployement Hello


Idem pour le service Hello 
$ kubectl create -f deployments/hello.yaml
$ kubectl describe deployments hello
$ kubectl create -f deployments/service-hello.yaml


##==##
<!-- .slide:-->

# TP : Deployment Frontend


Et pour le service Front 
$ kubectl create configmap nginx-frontend-conf --from-file=configuration/nginx/
$ kubectl create -f deployments/frontend.yaml
$ kubectl create -f deployments/service-frontend.yaml
$ 
Quizz : Comment le frontend a accès au service auth et hello ? 


##==##
<!-- .slide:-->

# TP : C’est les soldes ! 


##==##
<!-- .slide:-->

# TP : Scaling Deployment


On va maintenant augmenter le nombre de pod 

$ kubectl scale deployments hello --replicas=3
$ kubectl describe deployments hello
$ kubectl get pods
$ kubectl get replicasets



Notes:
combien 



##==##
<!-- .slide:-->

# TP : Scaling Frontend



Editer le service frontend pour scaler à 2 replicas
$ vim manifests/app/deployments/frontend.yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: frontend
spec:
  replicas: 2
  … 
$ kubectl apply -f deployments/frontend.yaml



##==##
<!-- .slide:-->

service hello


service auth


##==##
<!-- .slide: class="with-code" -->

```
Versions Kubernetes& apiVersion

```

Notes:
Chaque 
ressources
 Kubernetes a ses propres 
apiVersion

Les 
apiVersion
 évoluent à chaque 
release
 Kubernetes



##==##
<!-- .slide:-->

# Versions des ressources


https://github.com/benjah1/k8s-apiversion-matrix/blob/master/matrix.md


![](./images/g41f33631ff_0_265.png)

Notes:
Jusqu’à maintenant avons abordé les principales ressources Kubernetes :

Pod, ReplicaSet, 
Deployment, Service et Ingress



Voyons maintenant comment les faire vivre


