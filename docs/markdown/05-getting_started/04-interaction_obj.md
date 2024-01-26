<!-- .slide: class="transition-bg-sfeir-3"-->

# Créer et interagir avec des objets Kubernetes

##==##

<!-- .slide: class="with-code" -->

# Mode déclaratif (préféré)

```shell
$ kubectl apply -f my-pod.yaml # Modifier ou mettre à jour l’objet
$ kubectl replace -f my-pod.yaml # Recréer l’objet
$ kubectl diff -f my-pod.yaml # Afficher les différences de l’objet
$ kubectl delete -f my-pod.yaml # Supprimer l’objet
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Mode impératif

```shell
$ kubectl create <type-of-object> [<subtype-of-object>] <name-of-object>
  <properties> # Créer un objet
$ kubectl create namespace <my-namespace> # Créer un espace de nom
$ kubectl run <pod-name> --image=<image> # Créer un pod
$ kubectl run <pod-name> --image=<image> --dry-run=client -oyaml >
  my-pod.yaml
# Générer le yaml du pod sans le créer sur le cluster
```

<!-- .element: class="big-code"-->
