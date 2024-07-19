<!-- .slide: class="transition-bg-sfeir-3"-->

# Deployment

##==##

<!-- .slide: class="with-code max-height two-column" -->

# Deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
```

<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code" -->

<br>
<br>
<br>

```yaml
template:
  metadata:
    labels:
      app: nginx
  spec:
    containers:
      - name: nginx
        image: nginx:alpine
```

<!-- .element: class="big-code" -->

Notes:
On retrouve dans le Deployment les specs du Pod et du ReplicaSet

##==##

<!-- .slide: class="with-code" -->

# kubectl get deployment

```shell
$ kubectl get deployment
NAME      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
nginx     1         1         1            1           1h

$ kubectl get deploy -o yaml nginx
apiVersion: apps/v1
kind: Deployment
```

<!-- .element: class="big-code" -->

Notes:
Le Deployment gère des
Pods
via un
ReplicaSet
.

Contrairement au ReplicaSet qui maintient la même configuration de Pod en changeant juste le nombre de replicats,

le Deployment sait gérer la mise à jour des Pods en “
Rolling upgrade
”

##==##

<!-- .slide: class="with-code" -->

# Mise à l’échelle manuelle

```shell

$ kubectl scale deployment/nginx --replicas=10

$ kubectl get all
```

<!-- .element: class="big-code" -->

Notes:
La commande
scale
permet d’indiquer au ReplicaSet le nombre de réplicas à maintenir.

On scale ici à 10 à instances de pod pour démontrer les
mises à jours progressives
.
