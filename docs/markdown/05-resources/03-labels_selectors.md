<!-- .slide: class="transition"-->

# Les ressources
## Les labels

##==##

<!-- .slide: class="two-column" -->

# Les ressources > **Les labels**

Les labels, sous forme de paires clé-valeur, sont attachés aux ressources Kubernetes. Cela permet
* De catégoriser les ressources
* De filter pour des ensembles de ressources
* D'associer des ressources (pod avec déploiement, service avec déploiement) 

##--##

<br><br><br>
![](./assets/images/labels.png)

##==##

<!-- .slide: -->

# Les ressources > Les labels > **Bonnes pratiques**

La bonne pratique pour créer un label est d'utiliser : **\<prefix\>/\<nom\>**. Prenons l'exemple d'une application découpée en microservices avec un front, un back et une base de données. Un bon usage de labels serait :
* label pour l'app, le tier et le role
* un prefix pour la compagnie

![center h-500](./assets/images/labels-effectivly.png)

##==##


<!-- .slide: -->

# Les ressources > Les labels > **Affichage**

Avec kubeclt, il est possible d'afficher les labels
* kubectl get pods --show-labels
* Filtrage du résultat possible avec les opérateurs in, notin et exists

![center h-600](./assets/images/labels-filter.png)