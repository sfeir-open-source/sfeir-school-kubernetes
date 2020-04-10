<!-- .slide:-->

Day 2


##==##
<!-- .slide:-->

# Stocker des données


##==##
<!-- .slide:-->

emptyDir
gcePersistentDisk
hostPath


Juste un dossier monté dans un/des containers
Associé à la vie du Pod, survit au restart des containers

Nombreuses implémentations :


# Volumes


persistentVolumeClaim
configMap / secret


##==##
<!-- .slide: class="with-code" -->

```
Volume vide, créé au démarrage d’un pod, supprimé avec la suppression du Pod.

volumes:  - name: cache-volume    emptyDir: {}

```

# emptyDir


Notes:
Utile pour passer des fichiers d’un container à l’autre ou d’un initContainer à un container.



##==##
<!-- .slide:-->

PersistentDisk GCE
Il doit être dans le même projet et la même zone que les VM du cluster
Il n’est pas supprimé à la suppression du pod



# gcePersistentDisk


##==##
<!-- .slide:-->

volumes:  - name: test-volume    gcePersistentDisk:      pdName: my-data-disk      fsType: ext4


# gcePersistentDisk


Notes:
Il s’agit d’un disque compute engine classique. 



Il NE peut être monter en écriture que sur UN SEUL node à la fois, mais il peut être monter en lecture sur plusieurs nodes.



##==##
<!-- .slide: class="with-code" -->

```
Monte dans le container un dossier du noeud sur lequel le Pod s’exécute
volumes:  - name: test-volume    hostPath:      # directory location on host      path: /data      # this field is optional      type: Directory


```

# hostPath


Notes:
Il s’agit d’un disque monté sur une VM du cluster, mais il faut que le pod tourne sur le noeud où le volume a été créé. Peu recommandé.



##==##
<!-- .slide:-->

L’admin crée une ressource PersistentVolume associée à une espace de stockage
Le pod réclame du disque avec un PersistentVolumeClaim


# persistentVolume & persistentVolumeClaim


Notes:
PersistentVolumeClaim fait référence au PersistentVolume créé précédemment



##==##
<!-- .slide: class="with-code" -->

```
kind: PersistentVolumeapiVersion: v1metadata:  name: task-pv-volume  labels:    type: localspec:  storageClassName: manual  capacity:    storage: 10Gi  accessModes:    - ReadWriteOnce  hostPath:    path: "/mnt/data"

```

# persistentVolume


Notes:
Ce persistent volume va créé un espace réservé de 10 Go sur l’un des noeuds du cluster. 



##==##
<!-- .slide:-->

kind: PersistentVolumeClaimapiVersion: v1metadata:  name: task-pv-claimspec:  storageClassName: manual  accessModes:    - ReadWriteOnce  resources:    requests:      storage: 3Gi


# persistentVolumeClaim


##==##
<!-- .slide:-->

kind: PodapiVersion: v1metadata:  name: task-pv-podspec:  volumes:    - name: task-pv-storage      persistentVolumeClaim:       claimName: task-pv-claim


# Pod


 containers:    - name: task-pv-container      image: nginx      ports:        - containerPort: 80          name: "http-server"      volumeMounts:        - mountPath: "/usr/share/nginx/html"          name: task-pv-storage


##==##
<!-- .slide:-->

# TP : Volumes


##==##
<!-- .slide:-->

# TP : Volume


Objectif : déployer un wordpress + MySql persistant 
Générer un secret avec un mot de passe 
$ kubectl create secret generic mysql --from-literal=password=$(openssl rand -hex 12)



##==##
<!-- .slide:-->

# TP : Volume


Créer les volumes 
$ kubectl apply -f volume/mysql-volumeclaim.yaml
$ kubectl apply -f volume/wordpress-volumeclaim.yaml
Créer la base mysql
$ kubectl apply -f volume/mysql.yaml
$ kubectl apply -f volume/mysql-service.yaml


##==##
<!-- .slide:-->

# TP : Volume


Créer l’instance Wordpress et exposer le service
$ kubectl apply -f volume/wordpress.yaml
$ kubectl apply -f volume/wordpress-service.yaml
Accéder à votre wordpress
$ kubectl get service wordpress -o jsonpath="{.status.loadBalancer.ingress[0].ip}" 



##==##
<!-- .slide:-->

# TP : Volume


Détruiser les pods mysql et wordpress
$ k delete pods -l="app=mysql"
$ k delete pods -l="app=wordpress"
Que se passe-t-il ? (un peu de patience quand même ;) )


##==##
<!-- .slide:-->

# TP : Volume Nettoyage


$ kubectl delete service wordpress
$ kubectl delete deployment wordpress
$ kubectl delete pvc wordpress
$ kubectl delete service mysql
$ kubectl delete deployment mysql
$ kubectl delete pvc mysql


