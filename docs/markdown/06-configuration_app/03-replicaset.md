<!-- .slide: class="transition-bg-sfeir-3"-->

# ReplicaSet

##==##

<!-- .slide: class="with-code max-height" -->

# ReplicaSet.yaml

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template: <... pod definition ...>
```

<!-- .element: class="big-code" -->

Notes:
Le ReplicaSet inclut la définition du pod dans la partie
template

Le
selector
permet d’identifier les pods gérés par ce ReplicaSet via des
labels
.

La propriété
replicas
indique le nombre d’instances voulues.

##==##

<!-- .slide: class="with-code" -->

# kubectl get replicaset

```shell
$ kubectl get ReplicaSet
NAME               DESIRED   CURRENT   READY     AGE
nginx-5dbbff858d   1         1         1         14m

$ kubectl get rs -o yaml nginx-5dbbff858d
apiVersion: apps/v1
kind: ReplicaSet
...
```

<!-- .element: class="big-code" -->

Notes:
Le ReplicaSet maintient le nombre demandé de pods
en état de fonctionnement
.

La colonne READY montre les pods qui sont fonctionnels, et pas juste les pods créés
(
par exemple avec des
containers en cours de création ou crashés)

##==##

<!-- .slide: class="with-code" -->

# ReplicaSet status (live)

```yaml
---
status:
  availableReplicas: 1
  fullyLabeledReplicas: 1
  readyReplicas: 1
  replicas: 1
```

<!-- .element: class="big-code" -->

Notes:
On voit le status des replicas
