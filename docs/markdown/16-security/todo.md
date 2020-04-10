
##==##
<!-- .slide:-->

# Sécurité


##==##
<!-- .slide:-->

# RBAC






Role-based Access Control
Contrôle l’accès à l’api pour les utilisateurs
Gestion des droits par défaut dans kubernetes

Role / ClusterRole
RoleBinding / ClusterRoleBinding






##==##
<!-- .slide: class="with-code"  class="with-code" -->

# RBAC


```
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
  

```

```
...
kind: RoleBinding
subjects:
- kind: User
  name: jane # Name is case sensitive
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader 
  apiGroup: rbac.authorization.k8s.io

```

##==##
<!-- .slide:-->

# RBAC : rôles par défaut


view
edit
admin
cluster-admin


Notes:
view : permet d’avoir une vue readonly sur la plupart des objets d’un namespace, ne permet pas de voir les secrets, ou les objets roles et rolebinding

edit : permet de modifier la plupart des objets, mais pas les objet roles rolebinding

admin : permet d’éditer les objets + les droits sur un namespace mais pas les quotas

cluster-admin : tous les droits


