<!-- .slide: class="transition-bg-sfeir-3"-->

# The Label Game

##==##

<!-- .slide:-->

# Les labels Kubernetes

- Pour le fonctionnement interne de Kubernetes
  - ReplicaSet && Deployments ⇒ Pods
  - Services ⇒ Pods
- Recommandations de nommage
  - app.kubernetes.io/name: mysql
  - app.kubernetes.io/component: database
  - app.kubernetes.io/part-of: wordpress

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

- https://killercoda.com/laurental/scenario/6-deployment

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
