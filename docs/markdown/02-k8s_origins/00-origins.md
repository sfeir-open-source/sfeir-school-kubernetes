<!-- .slide: class="transition bg-light blue" data-background="./assets/images/k8s/transition_orchetrateur_origin.jpg"-->

# Kubernetes : les origines


##==##
<!-- .slide: class="full-center" "-->

# Google : 15 ans de containers

![h-650](./assets/images/k8s/g3f0c37370d_0_482.png)

Notes:
Google, 15 ans d’expérience sur l’orchestration de containers

Borg = c++, ~2003


##==##

# Cloud Native Computing Foundation


![center h-850](./assets/images/k8s/k8s-cncf.png)

https://github.com/cncf/landscape <!-- .element: class="center" -->


Notes:
Kubernetes réécrit en Go par les Googlers

Offert à la Cloud Native Computing Foundation en 2015

Kubernetes n’est qu’un outils parmi tous les outils pouvant vous aider à créer des architectures “Cloud-Natives”


La Fondation Linux (en anglais "Linux Foundation") est un consortium à but non lucratif fondé le 21 janvier 2007

Elle a pour mission de protéger et standardiser Linux en procurant les ressources et services centralisés

La Linux Foundation regroupe 70 membres

##==##
<!-- .slide: class="two-column-layout"-->

# Kubernetes, pour quoi faire ?

![float-left](./assets/images/k8s/g3f0c37370d_0_502.png)

##--##
<!-- .slide: with-code"-->

<br>
<br>

<ul>
    <li class="fragment">Lancer 5 containers basés sur l’image <code>redis:4.0</code></li>
    <li class="fragment">Mettre en place un load-balancer interne au cluster pour servir ces 5 containers</li>
    <li class="fragment">Lancer 10 containers <code>webapp:1.0</code></li>
    <li class="fragment">Mettre en place un load-balancer public pour permettre d’accéder aux containers de l’extérieur du cluster</li>
    <li class="fragment">Augmenter le nombre de containers webapp pendant les soldes 😉</li>
    <li class="fragment">Continuer à servir les requêtes pendant la mise à jour vers <code>webapp:2.0</code></li>
</ul>


Notes:
Orchestration de containers dans un cluster de machines

“barreur d'un navire” en grec 

##==##

# Mais aussi

<br>
<br>

<ul>
    <li class="fragment">Mise à l’échelle automatique</li>
    <li class="fragment">Déploiement “Blue/green” et “Canary”</li>
    <li class="fragment">Exécution de traitements unitaires ou répétés</li>
    <li class="fragment">Prioriser les tâches en cas de manque de ressources sur le cluster</li>
    <li class="fragment">Exécuter des services qui persistent des données sur disque</li>
    <li class="fragment">Contrôler l’accès aux différentes ressources</li>
    <li class="fragment">S’intégrer avec des services externes (“service catalog”)</li>
    <li class="fragment">Automatiser les tâches complexes (“operators”)</li>
</ul>

Notes:
Orchestration de containers dans un cluster de machines
