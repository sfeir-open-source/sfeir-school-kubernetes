<!-- .slide: data-background="./assets/images/01-docker/shipping-containers.jpg" class="transition blue bg-white" -->
# Rappels sur Docker


##==##
<!-- .slide: class="center"-->
# Qu’est-ce que Docker ?

<br>

Docker permet de **packager une application** <br>
avec **l’ensemble de ses dépendances** <br>
dans une **unité standardisée** pour le déploiement de logiciels :


Les **CONTAINERS**

Notes:
Docker en une phrase

##==##

# Utilisation de Docker

![h-750](./assets/images/01-docker/docker-containers.png) <!-- .element: class="center" -->

Notes:
En informatique, le container peut aussi embarquer une grande variété de contenus.

Il s’exécute à l’identique dans plusieurs environnements sans être modifié.

##==##
<!-- .slide: class="two-column-layout"-->
# VM vs Containers

##--##
<br>

![w-800 float-left](./assets/images/g41f33631ff_0_169.png)

##--##
<br>

![w-800 float-right](./assets/images/g41f33631ff_0_170.png)

Notes:
Avantages de Docker :
 - permet un partage des ressources efficace
 - plus de simple pour gérer des environnements d’exécution variés


Avantages des full VMs :
 - isolation GARANTIE puisqu’il n’y a aucune communications entre l'hôte et la machine virtuelle
 - accès au matériel plus simple


##==##


# Rappel sur les containers

![center h-850](./assets/images/g3f0c37370d_0_342.png)

Notes:

- Le Dockerfile :
contient les instructions pour construire l’image

- Les images :
    - contiennent les fichiers nécessaires à l’exécution de votre application
        - binaires, 
        - dépendances, 
        - configuration, 
        - ...
    - sont immuables


- Les containers :
    - isolent l’exécution de processus dans le système de fichier de l’image
    - au niveau réseau sont conçus pour être éphémères

- La registry :
    - permet le partage d’images
    - Docker Hub, Google Container Registry, ...

##==##
<!-- .slide: class="transition" data-background="#FFFFFF"-->

# Plus de détails ?

Notes:
Proposer d’aller plus loin sur Docker avec des extraits de la Sfeir School Docker en 1h/1h30

http://bit.ly/2nUh7Wg
