<!-- .slide:-->

# Architecture interne


##==##
<!-- .slide:-->

# Master et Nodes


devs, ops


clients


master(s)


![](./images/g41ceea32d2_1_122.png)

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

# Master et Nodes


devs, ops


clients


master(s)


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

devs, ops
kubectl


master(s)


# ApiServer et etcd


Valide


Stocke


Notes:
ApiServer

Devs ou ops envoient la description de l’état voulu des objets

Fichiers au format .yaml, transformés en json pour envoi sur l’apiserver

Objets stockés dans serveur etcd (serveur clé-valeur distribué)





##==##
<!-- .slide:-->

master(s)


# Kubelet


nodes


Notes:
Kubelet

Tourne sur les noeuds

Exécute les pods

S’enregistre auprès du master via l’apiserver





##==##
<!-- .slide:-->

master(s)


# Controllers


nodes


Notes:
Controllers

Il y a plusieurs contrôleurs, un par type d’objet Kubernetes

Ils ont chacun une responsabilité précise

Ils surveillent constamment la configuration de l’etcd

Ils réagissent au changement pour atteindre l’état demandé, en mettant à jour la configuration via l’apiserver. Exemple :

le Scheduler met à jour la configuration du pod pour lui assigner un noeud

le kubelet (lui-aussi un type de contrôleur) exécute le pod demandé puis enregistre son statut dans la configuration







##==##
<!-- .slide:-->

# Récapitulatif


Le Kubelet s’enregistre dans la config
L’utilisateur envoi l’état voulu sur etcd via l’apiserver
Les contrôleurs et le Kubelet réagissent aux changement d’état pour obtenir et maintenir l’état voulu


##==##
<!-- .slide:-->

# À venir...


![](./images/g3f3310ef84_0_1014.png)

Notes:
Ce qu’on voit dans le chapitre suivant


