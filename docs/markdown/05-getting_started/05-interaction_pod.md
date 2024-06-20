<!-- .slide: class="transition-bg-sfeir-3"-->

# Créer et interagir avec un pod

##==##

<!-- .slide: class="with-code max-height" -->

# kubectl get pods

```shell
$ kubectl get pods

NAME                     READY     STATUS    RESTARTS   AGE
nginx-5dbbff858d-qfb7f   1/1       Running   0          2m

$ kubectl get po -oyaml nginx-5dbbff858d-qfb7f
apiVersion: v1
kind: Pod
metadata:
  name: nginx-5dbbff858d-qfb7f
  ...
```

<!-- .element: class="big-code" -->

Notes:
READY : nombre de containers démarrés / nombre total de container

RESTART : si un container n’est pas dans l’état voulu (crash, indisponibilité), le pod peut être redémarré

##==##

<!-- .slide: class="with-code max-height" -->

# Pod yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  containers:
    - name: nginx
      image: nginx:alpine
status: ...
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Pods explained

```shell
$ kubectl explain pod
KIND:     Pod
VERSION:  v1

DESCRIPTION:
     Pod is a collection of containers that can run on a host. This resource is
     created by clients and scheduled onto hosts.

FIELDS:
   apiVersion	<string>
   kind	<string>
   metadata	<Object>
   spec	<Object>
[...]

```

Notes:
La commande
explain
donne tous les détails sur les propriétés de chaque ressources Kubernetes…

… récursivement (slides suivant)

##==##

<!-- .slide: class="with-code" -->

# Pods explained… deeper

```shell
$ kubectl explain pod.spec.containers.image
KIND:     Pod
VERSION:  v1

FIELD:    image <string>

DESCRIPTION:
     Docker image name. More info:
     https://kubernetes.io/docs/concepts/containers/images This field is
     optional to allow higher level config management to default or override
     container images in workload controllers like Deployments and
     StatefulSets.

```

##==##

<!-- .slide: class="with-code" -->

# Pod status (live)

```yaml
---
status:
  containerStatuses:
    - name: nginx
      containerID: docker://8db3af41eb87[...]3d103255
      image: nginx:alpine
      imageID: docker-pullable://nginx@sha256:1aed1[...]a0a5440
      state:
        running:
          startedAt: 2018-08-13T21:08:10Z
  hostIP: 192.168.65.3
  podIP: 10.1.0.227
```

Notes:
Une fois le fichier yaml envoyé dans la configuration, les contrôleurs viennent mettre à jour le pod dans la partie status.

On retrouve entre autre l’IP du
node
qui l’héberge et l’IP du
pod
lui-même.

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Pod

##==##

<!-- .slide: class="exercice"-->

# TP : Pod

## LAB

https://killercoda.com/laurental/scenario/2-pod