<!-- .slide:-->

# Google : 20 ans de containers

![h-800 center](./assets/images/google-containers.png)

Notes:
Google, 20 ans d’expérience sur l’orchestration de containers

Borg = c++, ~2003

##==##

<!-- .slide:-->

# Cloud Native Computing Foundation

![center h-800](./assets/images/cloud-native-foundation.svg)

[landscape.cncf.io](landscape.cncf.io)

<!-- .element: class="credits" -->

Notes:
Kubernetes réecrit en Go par les Googlers

Offert à la Cloud Native Computing Foundation en 2015

Kubernetes n’est qu’un outils parmi tous les outils pouvant vous aider à créer des architectures “
Cloud-Natives
”

La
Fondation Linux
(en anglais
Linux Foundation
) est un
consortium
à but non lucratif fondé le
21

janvier

2007
, a pour mission de protéger et standardiser
Linux
en procurant les ressources et services centralisés, la Linux Foundation regroupe 70 membres.

##==##

<!-- .slide: class="two-column" -->

# Kubernetes, pour quoi faire ?

![w-600](./assets/images/kub-for-what.svg)

##--##

<br><br>

- Lancer 5 containers basés sur l’image redis:4.0
- Mettre en place un load-balancer interne au cluster pour servir ces 5 containers
- Lancer 10 containers webapp:1.0
- Mettre en place un load-balancer public pour permettre d’accéder aux containers de l’extérieur du cluster
- Augmenter le nombre de containers webapp pendant les soldes 😉
- Continuer à servir les requêtes pendant la mise à jour vers webapp:2.0

Notes:
Orchestration de containers dans un cluster de machines

“barreur d'un navire” en grec

##==##

<!-- .slide: class="with-code" -->

# Mais aussi

- Mise à l’échelle automatique
- Déploiement “Blue/green” et “Canary”
- Exécution de traitements unitaires ou répétés
- Prioriser les tâches en cas de manque de ressources sur le cluster
- Exécuter des services qui persistent des données sur disque
- Contrôler l’accès aux différentes ressources
- Automatiser les tâches complexes (“operators”)

Notes:
Orchestration de containers dans un cluster de machines

##==##

<!-- .slide: data-type-show="hide"-->

# Question 1

texte

choix 1
choix 2
choix 3

##==##

<!-- .slide: data-type-show="hide"-->

# Question 1

texte

choix 1
choix 2
choix 3

##==##

<!-- .slide: data-type-show="hide"-->

# Question 1

Quelle est la différence entre une VM et un container?

Un container fait tourner un nouvel OS, émule du matériel physique tandis qu’une VM partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Une VM fait tourner un nouvel OS, émule du matériel physique tandis qu’un container partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Les deux sont des moyens de virtualisation mais le container peut tourner sur tous les OS contrairement à la VM

##==##

<!-- .slide: data-type-show="hide"-->

# Question 1

Quelle est la différence entre une VM et un container?

Une VM fait tourner un nouvel OS, émule du matériel physique tandis qu’un container partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Un container fait tourner un nouvel OS, émule du matériel physique tandis qu’une VM partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Les deux sont des moyens de virtualisation mais le container peut tourner sur tous les OS contrairement à la VM
