<!-- .slide:-->

# Rappels sur Docker
## En quelques points

Docker est une plateforme de conteneurisation qui permet de créer, déployer et exécuter des applications dans des environnements isolés appelés conteneurs.
* **Conteneurs** : Unités légères qui contiennent tout ce dont l'application a besoin pour fonctionner.
* **Isolation** : Chaque conteneur fonctionne de manière isolée.
* **Portabilité** : Les conteneurs peuvent être exécutées sur n'importe quel système compatible, poste de développement, serveur de test ou un environnement de production.

##==##

# Rappels sur Docker
## En quelques points

* **Efficacité** : Utilise moins de ressources qu'une VM, car partage le noyau du système d'exploitation hôte.
* **Rapidité** : Les conteneurs démarrent et s'arrêtent en quelques secondes.
* **Reproductibilité** : Docker garantit que l'application fonctionnera de la même manière dans différents environnements.

##==##

<!-- .slide: class="flex-row" -->
# Rappels sur Docker
## VM vs Containers

![h-600](./assets/images/vms.png)
![h-600](./assets/images/containers.png)

* Une VM nécessite un OS entier, docker utilise le système hôte.
* Réduit les ressources utilisées, et permet un démarrage rapide.
* Les conteneurs sont immuables, contrairement aux VMs.

Notes:
Avantages de Docker :

permet un partage des ressources efficace

plus simple pour gérer des environnements d’exécution variés

Avantages des full VMs :

isolation GARANTIE puisqu’il n’y a aucune communications entre l'hôte et la machine virtuelle

accès au matériel plus simple

##==##

<!-- .slide:-->

# Rappels sur Docker
## Build & push

![h-400](./assets/images/docker.png)
* **Dockerfile** : Contient les instructions pour construire l’image.
* **Image** : Contiennent les fichiers nécessaires à l’exécution l'application : binaires, dépendances, configuration.
* **Registry** : Publique ou privé, permet de récupérer les images à l'aide de la commande pull.

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
