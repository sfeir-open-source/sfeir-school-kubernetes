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

Docker Hub, Google Container Registry, Gitlab, You Own registry ...
