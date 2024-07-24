<!-- .slide:-->

# Les volumes > **Définition**

Les volumes permettent aux pods de monter un dossier contenant ou non des données. 
* La durée de vie d'un volume est lié au pod (et non au conteneur), permettant de conserver les données lors d'un redémarrage.
* Plusieurs types de volumes sont supportés:
  * configMap
  * emptyDir
  * hostPath
  * nfs
  * persistentVolumeClaim
  * secret
  * ...

##==##

<!-- .slide: class="two-column with-code-bg-dark" -->

# Les volumes > **utilisation**

Un volume est attaché a un pod, mais monté dans un conteneur.
* **volumeMounts:** Liste des volumes et de leur point de montage (dans les specs conteneur).
* **volumes:** Liste des volumes et de leur type (dans les specs pods).

##--##

<br><br>

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: school
spec:
  containers:
  - name: school
    image: school:v1.0
    volumeMounts:
    - name: mon-volume
      mountPath: /data
  volumes:
  - name: mon-volume
    emptyDir: {}
```
##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les volumes > type > **emptyDir**

Volume vide, créé au démarrage d’un pod, supprimé avec la suppression du Pod.
* Permet le partage de données entre conteneurs d'un même pod.
* Peut servir de cache (tmps).
* N'est pas vidé en cas de crash du conteneur.

```yaml
volumes:
  - name: cache-volume
    emptyDir: {}
# En mémoire : 
volumes:
- name: cache-volume
  emptyDir:
    medium: Memory
```

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les volumes > type > **hostPath**

```yaml
volumes:
- name: host-volume
  hostPath:
    path: /data
    type: Directory
```

Monte ou créer un fichier depuis le système de fichiers du worker node ou tourne le pod. Accède donc aux ressources de celui-ci.
* Les données restent sur l'hôte même après suppression du pod.
* Manque de sécurité (pas d'isolation).
* Non portable entre les noeuds, sauf cas NFS.

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les volumes > type > **PersistentVolumeClaim**

Demande de volume à partir **persistentVolume** (lié à une infrastructure de stockage).
* Les persistentVolume sont généralement créés automatiquement à travers la **storageClass**.
* Les PVC permettent de définir le mode d'accès souhaité (RWO, RWX, ...).
* Définit la quantité de stockage souhaitée.

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mon-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
  storageClassName: standard
```

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quel type de volume Kubernetes est recommandé pour le stockage persistant dans un environnement de production ?
* emptyDir 
* hostPath 
* PersistentVolume (PV) 
* configMap

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quel type de volume Kubernetes est recommandé pour le stockage persistant dans un environnement de production ?
* emptyDir 
* hostPath 
* **PersistentVolume (PV)**
* configMap

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quelle ressource Kubernetes est utilisée pour demander un volume persistant ?
* VolumeRequest
* PersistentVolumeClaim (PVC)
* StorageClass
* VolumeBinding

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quelle ressource Kubernetes est utilisée pour demander un volume persistant ?
* VolumeRequest
* **PersistentVolumeClaim (PVC)**
* StorageClass
* VolumeBinding

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quel type de volume est éphémère et supprimé lorsque le pod est terminé ?
* NFS
* emptyDir
* PersistentVolume
* awsElasticBlockStore



##==##

<!-- .slide: class="exercice" -->
## Quiz

Quel type de volume est éphémère et supprimé lorsque le pod est terminé ?
* NFS
* **emptyDir**
* PersistentVolume
* awsElasticBlockStore

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Volumes

##==##

<!-- .slide: class="exercice"-->

## LAB
# TP : Volume

https://killercoda.com/laurental/scenario/8-volumes
