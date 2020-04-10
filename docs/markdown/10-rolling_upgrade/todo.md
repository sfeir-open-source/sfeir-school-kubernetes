<!-- .slide:-->

# Rolling upgrade


##==##
<!-- .slide:-->

# Rolling upgrade 1/4


![](./images/g3f3310ef84_0_1030.png)

Notes:
Etat initial : 4 Pods v1 répartis sur 3 noeuds



On va modifier la configuration du Deployment pour utiliser une autre version du pod (changement d’image docker, de configuration, …)



Le DeploymentController (le A sur le master) va réagir à ce changement de configuration



##==##
<!-- .slide:-->

# Rolling upgrade 2/4


![](./images/g3f3310ef84_0_1035.png)

Notes:
Le DeploymentController va instancier un nouveau Pod “v2” et attendre qu’il soit fonctionnel.

Dès que ce nouveau Pod est prêt, le Service va lui envoyer des requêtes.

L’ancien Pod ne reçoit plus de nouvelles requêtes, il va être arrêté puis supprimé par le DeploymentController.



##==##
<!-- .slide:-->

# Rolling upgrade 3/4


![](./images/g3f3310ef84_0_1040.png)

Notes:
Chaque Pod est ainsi remplacé par la nouvelle version, un par un.



##==##
<!-- .slide:-->

# Rolling upgrade 4/4


![](./images/g3f3310ef84_0_1045.png)

Notes:
À la fin du processus de rolling-upgrade, il ne reste que des pods v2.

Il n’y a pas eu d’interruption de service.



##==##
<!-- .slide: class="with-code" -->

```
Mise à jour progressive (rolling-upgrade) sans interruption de service
Gérée par le Deployment

Remplacer nginx par Apache httpd :

$ kubectl edit deployment nginx --record
“image: nginx:alpine” ⇒ “image: httpd:alpine”


```

# Mise à jour progressive


Notes:
Fonctionnalité native Kubernetes au niveau d’un déploiement.



Regarder la mise à jour dans le visualizer

Vérifier que nginx a bien été remplacé par apache dans le navigateur.




Edition en direct de la spec du Deployment

Sortir de vim avec “:wq”







##==##
<!-- .slide: class="with-code" -->

```
$ kubectl rollout history deployment nginx
REV  CHANGE-CAUSE1    kubectl apply --filename=deployment.yaml2    kubectl edit deployment nginx3    kubectl set image deploy nginx nginx=nginx:stable-alpine

$ kubectl rollout undo deployment --to-revision=1

```

# Annuler une mise à jour progressive


Notes:
Le nombre de révision conservées est contrôle par la propriété 
.spec.revisionHistoryLimit
, 10 par défaut.

Ce sont les ressources “ReplicaSet” qui sont conservés dans etcd, avec 
replicas=0
 pour les anciennes versions.

