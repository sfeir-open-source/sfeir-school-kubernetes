<!-- .slide:-->

# Créer et intéragir avec un pod


##==##
<!-- .slide: class="with-code" -->

# kubectl get pods


```
$ kubectl get podsNAME                     READY     STATUS    RESTARTS   AGEnginx-5dbbff858d-qfb7f   1/1       Running   0          2m
$ kubectl get pod -o yaml nginx-5dbbff858d-qfb7f
apiVersion: v1kind: Pod
metadata:
  name: nginx-5dbbff858d-qfb7f...

```

Notes:
READY : nombre de containers démarrés / nombre total de container

RESTART : si un container n’est pas dans l’état voulu (crash, indisponibilité), le pod peut être redémarré





##==##
<!-- .slide: class="with-code" -->

```
apiVersion: v1kind: Podmetadata:  name: nginx  labels:    app: nginxspec:  containers:  - name: nginx    image: nginx:alpinestatus:  ...

```

# Pod yaml


##==##
<!-- .slide: class="with-code" -->

```
$ kubectl explain podKIND:     PodVERSION:  v1DESCRIPTION:     Pod is a collection of containers that can run on a host. This resource is     created by clients and scheduled onto hosts.FIELDS:   apiVersion	<string>   kind	<string>   metadata	<Object>   spec	<Object>[...]

```

# Pods explained


Notes:
La commande 
explain
 donne tous les détails sur les propriétés de chaque ressources Kubernetes…

… récursivement (slides suivant)



##==##
<!-- .slide: class="with-code" -->

```
$ kubectl explain pod.spec.containers.imageKIND:     PodVERSION:  v1FIELD:    image <string>DESCRIPTION:     Docker image name. More info:     https://kubernetes.io/docs/concepts/containers/images This field is     optional to allow higher level config management to default or override     container images in workload controllers like Deployments and     StatefulSets.

```

# Pods explained… deeper


##==##
<!-- .slide: class="with-code" -->

```
...status:  containerStatuses:  - name: nginx    containerID: docker://8db3af41eb87[...]3d103255    image: nginx:alpine    imageID: docker-pullable://nginx@sha256:1aed1[...]a0a5440    state:      running:        startedAt: 2018-08-13T21:08:10Z  hostIP: 192.168.65.3  podIP: 10.1.0.227

```

# Pod status (live)


Notes:
Une fois le fichier yaml envoyé dans la configuration, les contrôleurs viennent mettre à jour le pod dans la partie status.

On retrouve entre autre l’IP du 
node
 qui l’héberge et l’IP du 
pod
 lui-même.



##==##
<!-- .slide:-->

# TP : Pod


##==##
<!-- .slide:-->

# TP : Pod


Regarder le code pour créer un pod 
$ cat pod/monolith.yaml
Créer le pod : 
$ kubectl create -f  pod/monolith.yaml


Notes:
Création d’un pod simple : on affiche les specs du pod, et on créé le pod avec kubectl.





##==##
<!-- .slide:-->

# TP : Information sur le Pod



$ kubectl get pods 
$ kubectl describe pods <pod-name>
Quelle est l’ip du pod ? 
Sur quel node le pod tourne ?
Quel container tourne dans le pod ?




##==##
<!-- .slide:-->

# TP : Intéragir avec le Pod



Créer un tunnel depuis son poste avec le pod
$ kubectl port-forward monolith 10080:80
Ouvrir une autre fenêtre shell
$ curl http://127.0.0.1:10080
$ curl http://127.0.0.1:10080/secure
$ curl -u user http://127.0.0.1:10080/login
Le mot de passe est : "password"
$ curl -H "Authorization: Bearer <token>" http://127.0.0.1:10080/secure



##==##
<!-- .slide:-->

# TP : Intéragir avec le Pod



Voir les logs du pods
$ kubectl logs monolith
Ouvrir un shell dans le pod 
$ kubectl exec monolith --stdin --tty -c monolith /bin/sh
Lister les process dans le container 
$ ps aux

