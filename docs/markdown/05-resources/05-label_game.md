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

https://killercoda.com/laurental/scenario/6-deployment

##==##

<!-- .slide: class="exercice"-->

# Architecture de la stack

## LAB

![center h-800](./assets/images/archi-tp-deployment.svg)