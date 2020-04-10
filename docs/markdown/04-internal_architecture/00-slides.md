<!-- .slide: data-background="./assets/images/04-internal_architecture/bg_cover.jpg" class="transition blue bg-blue" -->

# Architecture interne


##==##
<!-- .slide: class="full-center"-->

# Master et Nodes


![](./assets/images/04-internal_architecture/master_nodes_1.png)

Notes:
Cluster :

- 1 ou plusieurs masters (recommandé pour la HA - Haute Disponibilité)
- 1 ou plusieurs noeuds (recommandé pour la HA - Haute Disponibilité)

- Les ops passent des commandes au master
- Les clients accèdent aux pods via les noeuds

##==##
<!-- .slide: class="full-center" data-type-show="full"-->

# Master et Nodes

![](./assets/images/04-internal_architecture/master_nodes_2.png)

Notes:
Cluster :

- 1 ou plusieurs masters (recommandé pour la HA - Haute Disponibilité)
- 1 ou plusieurs noeuds (recommandé pour la HA - Haute Disponibilité)

- Les ops passent des commandes au master
- Les clients accèdent aux pods via les noeuds


##==##
<!-- .slide: class="full-center"-->

# ApiServer et etcd

![](./assets/images/04-internal_architecture/apiserver_etcd.png)

Notes:
ApiServer

- Devs ou ops envoient la description de l’état voulu des objets
- Fichiers au format .yaml, transformés en json pour envoi sur l’apiserver
- Objets stockés dans serveur etcd (serveur clé-valeur distribué)


##==##
<!-- .slide: class="full-center"-->

# Kubelet

![](./assets/images/04-internal_architecture/kubelet.png)

Notes:
Kubelet

- Tourne sur les noeuds
- Exécute les pods
- S’enregistre auprès du master via l’apiserver


##==##
<!-- .slide: class="full-center"-->

# Controllers

![](./assets/images/04-internal_architecture/controllers.png)


Notes:
Controllers

- Il y a plusieurs contrôleurs, un par type d’objet Kubernetes
- Ils ont chacun une responsabilité précise
- Ils surveillent constamment la configuration de l’etcd
- Ils réagissent au changement pour atteindre l’état demandé, en mettant à jour la configuration via l’apiserver. Exemple :
    - le Scheduler met à jour la configuration du pod pour lui assigner un noeud
    - le kubelet (lui-aussi un type de contrôleur) exécute le pod demandé puis enregistre son statut dans la configuration


##==##

# Récapitulatif

<br>

- Le Kubelet s’enregistre dans la config
- L’utilisateur envoi l’état voulu sur _etcd_ via l’_apiserver_
- Les contrôleurs et le Kubelet réagissent aux changements d’état pour obtenir et maintenir l’état voulu

##==##
<!-- .slide: class="full-center"-->

# À venir...

![](./assets/images/04-internal_architecture/g3f3310ef84_0_1014.png)

Notes:
Ce qu’on voit dans le chapitre suivant