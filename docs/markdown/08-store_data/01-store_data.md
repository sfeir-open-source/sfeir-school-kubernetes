<!-- .slide:-->

# Volumes

- Juste un dossier monté dans un/des containers
- Associé à la vie du Pod, survit au restart des containers
- Nombreuses implémentations :
  - emptyDir
  - hostPath
  - persistentVolumeClaim
  - configMap / secret

##==##

<!-- .slide: class="with-code" -->

# emptyDir

- Volume vide, créé au démarrage d’un pod, supprimé avec la suppression du Pod.

```yaml
volumes:
  - name: cache-volume
    emptyDir: {}
```

<!-- .element: class="big-code" -->

Notes:
Utile pour passer des fichiers d’un container à l’autre ou d’un initContainer à un container.

##==##

<!-- .slide: data-type-show="hide"-->

# gcePersistentDisk

PersistentDisk GCE
Il doit être dans le même projet et la même zone que les VM du cluster
Il n’est pas supprimé à la suppression du pod

##==##

<!-- .slide: data-type-show="hide"-->

# gcePersistentDisk

```yaml
volumes:
  - name: test-volume
    gcePersistentDisk:
    pdName: my-data-disk
    fsType: ext4
```

Notes:
Il s’agit d’un disque compute engine classique.

Il NE peut être monter en écriture que sur UN SEUL node à la fois, mais il peut être monter en lecture sur plusieurs nodes.

##==##

<!-- .slide: class="with-code" -->

# hostPath

- Monte dans le container un dossier du noeud sur lequel le Pod s’exécute

```
volumes:
  - name: test-volume
    hostPath:
      # directory location on host
      path: /data
      # this field is optional
      type: Directory
```

<!-- .element: class="big-code" -->

Notes:
Il s’agit d’un disque monté sur une VM du cluster, mais il faut que le pod tourne sur le noeud où le volume a été créé. Peu recommandé.

##==##

<!-- .slide:-->

# persistentVolume & persistentVolumeClaim

- L’admin crée une ressource PersistentVolume associée à une espace de stockage
- Le pod réclame du disque avec un PersistentVolumeClaim

Notes:
PersistentVolumeClaim fait référence au PersistentVolume créé précédemment

##==##

<!-- .slide: class="with-code max-height" -->

# persistentVolume

```yaml
kind: PersistentVolume
apiVersion: v1
metadata:
  name: task-pv-volume
  labels:
    type: local
spec:
  storageClassName: manual
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: '/mnt/data'
```

Notes:
Ce persistent volume va créé un espace réservé de 10 Go sur l’un des noeuds du cluster.

##==##

<!-- .slide: class="with-code max-height"-->

# persistentVolumeClaim

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
name: task-pv-claim
spec:
storageClassName: manual
accessModes:

- ReadWriteOnce
  resources:
  requests:
  storage: 3Gi
```

##==##

<!-- .slide: class="two-column with-code"-->

# Pod

```yaml
kind: Pod
apiVersion: v1
metadata:
name: task-pv-pod
spec:
volumes:
  - name: task-pv-storage
    persistentVolumeClaim:
    claimName: task-pv-claim
```

<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code" -->

<br>
<br>
<br>

```yaml
containers:
  - name: task-pv-container
    image: nginx
    ports:
  - containerPort: 80
    name: 'http-server'
    volumeMounts:
  - mountPath: '/usr/share/nginx/html'
    name: task-pv-storage
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Volumes

##==##

<!-- .slide: class="exercice"-->

# TP : Volume

## LAB

https://killercoda.com/laurental/scenario/8-volumes
- Objectif : déployer un wordpress + MySql persistant
- Générer un secret avec un mot de passe

`$ kubectl create secret generic mysql --from-literal=password=$(openssl rand -hex 12)`

##==##

<!-- .slide: class="exercice"-->

# TP : Volume

## LAB

- Créer les volumes

`$ kubectl apply -f volume/mysql-volumeclaim.yaml`

`$ kubectl apply -f volume/wordpress-volumeclaim.yaml`

- Créer la base mysql

`$ kubectl apply -f volume/mysql.yaml`

`$ kubectl apply -f volume/mysql-service.yaml`

##==##

<!-- .slide: class="exercice"-->

# TP : Volume

## LAB

- Créer l’instance Wordpress et exposer le service

`$ kubectl apply -f volume/wordpress.yaml`

`$ kubectl apply -f volume/wordpress-service.yaml`

- Accéder à votre wordpress

`$ curl http://$(kubectl get service wordpress -o jsonpath="{.status.loadBalancer.ingress[0].ip}")`

##==##

<!-- .slide: class="exercice"-->

# TP : Volume

## LAB

- Détruire les pods mysql et wordpress

`$ k delete pods -l="app=mysql"`

`$ k delete pods -l="app=wordpress"`

- Que se passe-t-il ? (un peu de patience quand même ;) )

##==##

<!-- .slide:  class="exerice"-->

# TP : Volume Nettoyage

## LAB

`$ kubectl delete service wordpress`

`$ kubectl delete deployment wordpress`

`$ kubectl delete pvc wordpress`

`$ kubectl delete service mysql`

`$ kubectl delete deployment mysql`

`$ kubectl delete pvc mysql`
