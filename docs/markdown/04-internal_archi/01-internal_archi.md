<!-- .slide:-->

# Master et Nodes

![center h-800](./assets/images/master-and-node.svg)

Notes:
Cluster :

1 ou plusieurs masters (
recommandé pour la
HA - Haute Disponibilité)

1 ou plusieurs noeuds (
recommandé pour la
HA - Haute Disponibilité)

Les ops passent des commandes au master

Les clients accèdent aux pods via les noeuds

##==##

<!-- .slide:-->

# ApiServer et etcd

![center h-800](./assets/images/apiserver-etcd.svg)

Notes:
ApiServer

Devs ou ops envoient la description de l’état voulu des objets

Fichiers au format .yaml, transformés en json pour envoi sur l’apiserver

Objets stockés dans serveur etcd (serveur clé-valeur distribué)

##==##

<!-- .slide:-->

# Kubelet

![center h-800](./assets/images/kubelet.svg)

Notes:
Kubelet

Tourne sur les noeuds

Exécute les pods

S’enregistre auprès du master via l’apiserver

##==##

<!-- .slide:-->

# Controllers

![center h-800](./assets/images/controllers-node.svg)

Notes:
Controllers

Il y a plusieurs contrôleurs, un par type d’objet Kubernetes

Ils ont chacun une responsabilité précise

Ils surveillent constamment la configuration de l’etcd

Ils réagissent au changement pour atteindre l’état demandé, en mettant à jour la configuration via l’apiserver. Exemple :

le Scheduler met à jour la configuration du pod pour lui assigner un noeud

le kubelet (lui-aussi un type de contrôleur) exécute le pod demandé puis enregistre son statut dans la configuration

##==##

<!-- .slide: class="two-column" -->

# Récapitulatif

- Le Kubelet s’enregistre dans la config

- L’utilisateur envoi l’état voulu sur etcd via l’apiserver

- Les contrôleurs et le Kubelet réagissent aux changements d’états pour obtenir et maintenir l’état voulu

##--##

![](./assets/images/gb710258689_0_72.png)

##==##

<!-- .slide: data-type-show="hide"-->

# Question 1

Quelle est la différence entre une VM et un container?

Un container fait tourner un nouvel OS, émule du matériel physique tandis qu’une VM partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Une VM fait tourner un nouvel OS, émule du matériel physique tandis qu’un container partage les mêmes OS et noyau que son hôte et réalise une virtualisation au niveau système
Les deux sont des moyens de virtualisation mais le container peut tourner sur tous les OS contrairement à la VM

##==##

<!-- .slide:-->

# À venir...

![center h-800](./assets/images/a-venir.png)

Notes:
Ce qu’on voit dans le chapitre suivant

##==##

<!-- .slide: data-type-show="hide"-->

# Question 3

Quel est le composant installé sur tous les noeuds interagissant avec l’API Server et gérant les containers créés dans Kubernetes?

Kubelet
Docker
Systemd

##==##

<!-- .slide: data-type-show="hide"-->

# Question 3

Quel est le composant installé sur tous les noeuds interagissant avec l’API Server et gérant les containers créés dans Kubernetes?

Kubelet
Docker
Systemd

##==##

<!-- .slide: data-type-show="hide"-->

# Question 4

Quel est le composant principal recevant toutes les requêtes de configuration et de modification de l’état du cluster?

Kubelet
Kube-api-server
Kube-proxy

##==##

<!-- .slide: data-type-show="hide"-->

# Question 4

Quel est le composant principal recevant toutes les requêtes de configuration et de modification de l’état du cluster?

Kubelet
Kube-api-server
Kube-proxy

##==##

<!-- .slide: data-type-show="hide"-->

# Question 5

Quel est le composant stockant l’état des ressources du cluster?

Controllers
Master
ETCD

##==##

<!-- .slide: data-type-show="hide"-->

# Question 5

Quel est le composant stockant l’état des ressources du cluster?

Controllers
Master
ETCD

##==##

<!-- .slide: data-type-show="hide"-->

# Question 6

Quel est le composant choisissant sur quel noeud se lance les pods?

Kubelet
Scheduler
Kube-proxy

##==##

<!-- .slide: data-type-show="hide"-->

# Question 6

Quel est le composant choisissant sur quel noeud se lance les pods?

Kubelet
Scheduler
Kube-proxy

##==##

<!-- .slide: data-type-show="hide"-->

# Question 7

Quel sont les composants permettant d’atteindre les états voulus des ressources au sein du cluster?

Controllers
Kubelets
Nodes

##==##

<!-- .slide: data-type-show="hide"-->

# Question 7

Quel sont les composants permettant d’atteindre les états voulus des ressources au sein du cluster?

Controllers
Kubelets
Nodes

##==##

<!-- .slide: data-type-show="hide"-->

# Question 8

Quel est le composant permettant le routage réseau au sein du cluster?

Kubelet
Scheduler
Kube-proxy

##==##

<!-- .slide: data-type-show="hide"-->

# Question 8

Quel est le composant permettant le routage réseau au sein du cluster?

Kubelet
Scheduler
Kube-proxy
