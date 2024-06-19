<!-- .slide: class="transition-bg-sfeir-3"-->

# Service

##==##

<!-- .slide:-->

# Exposer des pods

![center h-800](./assets/images/expose-pods.png)

Notes:
Les pods sont exposés au sein du cluster via les
Services
.

Les services obtiennent une IP et un nom DNS interne au cluster.

Ils répartissent la charge entre les pods, ciblés par des
labels
.

##==##

<!-- .slide:-->

# Service type ClusterIP

![center h-800](./assets/images/cluster-ip.svg)

Notes:
Un Service de type ClusterIP est accessible depuis une IP interne au cluster.

On l’utilise en général pour la communication inter-pods.

##==##

<!-- .slide:-->

# Service type NodePort

![center h-800](./assets/images/service-type-node.svg)

Notes:
Un service du type nodePort est associé à un port identique sur chaque noeud du cluster.

Ce port est accessible depuis l’extérieur du cluster.

Il doit appartenir à la plage de ports 30000 - 32767 (configurable sur le master).

On peut le choisir mais il faut mieux laisser faire Kubernetes, qui gèrera les problèmes de ports occupés.

Inconvénient : il faut donc connaître l’adresse IP d’au moins un noeud du cluster pour accéder au service.

##==##

<!-- .slide:-->

# Service type LoadBalancer

![center h-800](./assets/images/service-type-loadbalancer.svg)

Notes:
Un Service de type LoadBalancer utilise un équilibreur de charge externe au cluster.

Ce type de Service est utilisé sur les plateformes cloud ainsi que dans Docker-for-Desktop.

L’inconvénient c’est que chaque service aura son propre load balancer avec sa propre IP publique/Internet

##==##

<!-- .slide: data-type-show="hide"-->

# Service type ExternalName

![center h-800](./assets/images/service-type-externalname.svg)

Notes:
Un Service de type ExternalName fourni un alias DNS de type CNAME.

Il n’est utilisable qu’en interne.

##==##

<!-- .slide: data-type-show="hide"-->

# Service avec Endpoint explicite

![center h-800](./assets/images/service-endpoint-explicite.svg)

Notes:
En interne, Kubernetes génère une ressource Endpoint pour chaque Pod ciblé par le sélecteur.

Il est possible de ne pas renseigner de sélecteur et à la place de créer manuellement les ressources Endpoint avec une IP externe au cluster.

C’est la manière de rajouter une abstraction vers un service externe au cluster. Les Pods ne voient que le Service interne.

##==##

<!-- .slide: class="with-code max-height" -->

# Service yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  selector:
    app: nginx
  type: NodePort
  ports:
    - name: http
      port: 80
      protocol: TCP
      targetPort: 80
```

<!-- .element: class="big-code" -->

Notes:
Le
selector
permet de cibler les pods par leurs labels.

Il y a plusieurs
types
de services qu’on voit tout de suite.

##==##

# Créer un service

`$ kubectl apply -f service.yaml`

La ligne de commande suivante donne un résultat équivalent au fichier yaml :

`$ kubectl expose nginx --port=80 --type=NodePort`

##==##

<!-- .slide: class="with-code max-height" -->

# Services

```shell
$ kubectl get services
NAME        TYPE       CLUSTER-IP   EXTERNAL-IP PORT(S)       AGE
kubernetes  ClusterIP  10.96.0.1    <none>      443/TCP       3d
nginx       NodePort   10.97.47.155 <none>      80:31450/TCP  2s

$ kubectl get svc -o yaml nginx
apiVersion: v1
kind: Service
metadata:
  name: nginx
  ...
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide:-->

# Service : DNS interne

- Entrée DNS : <service>.<namespace>.svc.cluster.local

- Et dans le namespace : <service>

Notes:
Pour chaque service créé, le service est accessible via une entrée DNS : <service>.<namespace>.svc.cluster.local

Et à l’intérieur du namespace, uniquement avec le nom du service

##==##

<!-- .slide: data-type-show="hide"-->

# Question 9

Quel est le type de service basique permettant l’exposition de pods dans le cluster ?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: data-type-show="hide"-->

# Question 9

Quel est le type de service basique permettant l’exposition de pods dans le cluster ?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: data-type-show="hide"-->

# Question 10

Quel est le type de service permettant l’exposition à travers le port d’un noeud?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: data-type-show="hide"-->

# Question 10

Quel est le type de service permettant l’exposition à travers le port d’un noeud?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: data-type-show="hide"-->

# Question 11

Quel est le type de service permettant l’exposition à travers un load balancer externe?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: data-type-show="hide"-->

# Question 11

Quel est le type de service permettant l’exposition à travers un load balancer externe?

ClusterIP
NodePort
LoadBalancer

##==##

<!-- .slide: class="transition-bg-sfeir-2" -->

# TP : Service

##==##

<!-- .slide: class="exercice"-->

# TP : Créer un service

## LAB

- https://killercoda.com/laurental/scenario/5-services

- Lire le manifest de l’objet service

`$ cat service/monolith.yaml`

- Créer le service

`$ kubectl apply -f service/monolith.yaml`

##==##

<!-- .slide: class="exercice" data-type-show="hide" -->

# TP : Interagir avec le service

## LAB

```shell
$ gcloud compute instances list
NAME ZONE MACHINE_TYPE PREEMPTIBLE INTERNAL_IP EXTERNAL_IP STATUS
gke-istio-workshop-default-pool-e37360ba-369z europe-west1-b n1-standard-1 10.132.0.3 35.205.92.225 RUNNING
gke-istio-workshop-default-pool-e37360ba-3hz4 europe-west1-b n1-standard-1 10.132.0.2 35.240.127.238 RUNNING
...
```

Prenez l’une des ips externes et connectez vous-y

`$ curl -k https://<EXTERNAL_IP>:31000`

Notes:
Le résultat est un échec :

curl -k https://35.246.130.12:31000

curl: (7) Failed to connect to 35.246.130.12 port 31000: Connection refused

Normal : il n’y a pas de label correspondant !

##==##

<!-- .slide: class="exercice"-->

# TP : Service

## LAB

- Pourquoi la requête ne fonctionne pas ?

`$ kubectl get svc monolith`

`$ kubectl describe services monolith`

- Combien y a t-il de endpoints au service ?

Notes:
Le résultat est un échec :

curl -k https://35.246.130.12:31000

curl: (7) Failed to connect to 35.246.130.12 port 31000: Connection refused

Normal : il n’y a pas de label correspondant !

##==##

<!-- .slide: class="exercice"-->

# TP : Service

## LAB

- Lister les pods par labels

`$ kubectl get pods -l "app=monolith"`
`$ kubectl get pods -l "app=monolith,secure=enabled"`

- On va labelliser un pod

`$ kubectl label pods secure-monolith secure=enabled`

- Et maintenant ?

`$ kubectl get pods -l "app=monolith,secure=enabled"`

Notes:
On labellise les pods
