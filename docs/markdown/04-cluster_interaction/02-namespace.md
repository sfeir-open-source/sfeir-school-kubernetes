<!-- .slide: class="transition"-->

# Les namespaces

##==##

<!-- .slide: -->

# Les namespaces > **présentation**

Ils permettent de partager un cluster unique entre plusieurs utilisateurs, équipes ou applications, tout en maintenant une séparation logique.
* Les ressources sont isolées des autres namespaces.
* Les noms des ressources doivent être uniques au sein d'un namespace, mais pas nécessairement entre les namespaces.
* Ils permettent de séparer les applications ou les environnements.
* La gestion des droits peut se faire dans les namespaces au travers des RBAC.

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les namespaces > **exemples**
```bash
# Lister les namespaces
$> kubectl get namespaces
NAME                       STATUS   AGE
default                    Active   350d
kube-system                Active   350d
school                     Active   350d

# Changer de namespace
$> kubectl config set-context --current --namespace=school
Context "kubernetes-admin@kubernetes" modified.

# Afficher toutes les ressources qui sont dépendantes d'un namespace
$> kubectl api-resources --namespaced=true
NAME                               SHORTNAMES                                      APIVERSION                               NAMESPACED   KIND
bindings                                                                           v1                                       true         Binding
configmaps                         cm                                              v1                                       true         ConfigMap
endpoints                          ep                                              v1                                       true         Endpoints
events                             ev                                              v1                                       true         Event
...
```
