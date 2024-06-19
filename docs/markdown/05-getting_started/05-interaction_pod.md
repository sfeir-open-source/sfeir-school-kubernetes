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

- https://killercoda.com/laurental/scenario/2-pod

- Regarder le code pour créer un pod

`$ cat pod/monolith.yaml`

- Créer le pod :

`$ kubectl apply -f pod/monolith.yaml`

Notes:
Création d’un pod simple : on affiche les specs du pod, et on créé le pod avec kubectl.

##==##

<!-- .slide: class="exercice with-code"-->

# TP : Information sur le Pod

## LAB

```shell
$ kubectl get po -owide
$ kubectl describe po <pod-name>
$ kubectl get po <pod-name> -oyaml
```

<!-- .element: class="big-code" -->

- Quelle est l’ip du pod ?
- Sur quel node le pod tourne ?
- Quel container tourne dans le pod ?

##==##

<!-- .slide: class="exercice"-->

# TP : Interagir avec le Pod

## LAB

- Créer un tunnel depuis son poste avec le pod

`$ kubectl port-forward monolith 10080:80`

- Ouvrir une autre fenêtre shell

`$ curl http://127.0.0.1:10080`
`$ curl http://127.0.0.1:10080/secure`
`$ curl -u user http://127.0.0.1:10080/login`

- Le mot de passe est : "password"

`$ curl -H "Authorization: Bearer <token>" http://127.0.0.1:10080/secure`

##==##

<!-- .slide: class="exercice"-->

# TP : Interagir avec le Pod

## LAB

- Voir les logs du pods

`$ kubectl logs monolith`

- Ouvrir un shell dans le pod

`$ kubectl exec monolith -it [-c monolith] -- /bin/sh`

- Lister les process dans le container

`$ ps aux`
