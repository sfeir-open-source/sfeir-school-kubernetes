<!-- .slide: class="transition"-->

# Les ressources
## ConfigMap & Secrets

<!-- .slide: class="two-column" -->

# Les ressources > **ConfigMap**

**Définition:** Une configMap est une ressource kubernetes servant à stocker des données non confidentielles au format clé / valeur. 
* Elles seront utilisées au travers de variable d'environnement ou de volume. 
* Utiles pour découper les valeurs spécifiques à un environnement.

##--##

<br>

![h-900](./assets/images/configmap.png)

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les ressources > ConfigMap > **Manifest**
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-conf
data:
  nginx.conf: |
    user nginx;
    worker_processes  1;
    events {
      worker_connections  10240;
    }
    http {
      server {
          listen       80;
          server_name  localhost;
          location / {
            root   /usr/share/nginx/html; #Change this line
            index  index.html index.htm;
        }
      }
    }
```

##==##

<!-- .slide: class="with-code-bg-dark two-column" -->

# Les ressources > ConfigMap > **Volumes**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
...
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          volumeMounts:
            - name: nginx-config
              mountPath: /etc/nginx/conf.d/default.conf
              subPath: nginx.conf
      volumes:
        - name: nginx-config
          configMap:
            name: nginx-config
```
##--##

<br><br><br>

* Le volume indique quelle configMap monter en tant que fichier dans le pod (elle doit se trouver dans le même namespace que le déploiement).
* Le volumeMount indique qu'il faut injecter la configMap dans le fichier /etc/nginx/conf.f/nginx.conf.

##==##

<!-- .slide: -->

# Les ressources > **Secrets**

**Définition:** Un secret est une ressource kubernetes servant à stocker des données confidentielles au format clé / valeur. 
* Ils sont utilisés au travers de variables d'environnement ou de volumes. 
* ![sfeir-icons](alert-triangle)<!-- .element: style="--icon-size:48px; --icon-color:red;" --> Ils sont encodés en base64, et non chiffrés
* Par défaut, stocké en clair dans la base etcd

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les ressources > Secrets > **Manifest**
Un secret avec le contenu encodé en base64
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: dotfile-secret
data:
  .secret-file: dmFsdWUtMg0KDQo=
```

Un secret avec du contenu en clair
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: secret-basic-auth
type: kubernetes.io/basic-auth
stringData:
  username: admin # required field for kubernetes.io/basic-auth
  password: t0p-Secret # required field for kubernetes.io/basic-auth
```

##==##

<!-- .slide: class="transition-bg-sfeir-2" -->

# TP : Ressources > **ConfigMap & Secrets**

##==##

<!-- .slide: class="exercice"-->
## LAB
# TP : ConfigMap et Secrets



https://killercoda.com/laurental/scenario/4-configmap-secrets
