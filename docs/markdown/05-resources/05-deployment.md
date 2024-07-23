<!-- .slide: class="transition"-->

# Les ressources
## Les déploiements

##==##

<!-- .slide: class="two-column with-code-bg-dark" -->

# Les ressources > **Deploiements**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx-container
        image: nginx:latest
        ports:
        - containerPort: 80
```
##--##

<br><br>

Les déploiements sont une ressource Kubernetes permettant de gérer le cycle de vie de pods au travers des replicaSets.
* Contiennet un état souhaité d'une application que le controlleur s'assure de maintenir.
* Permet de scaler l'application via le nombre de réplicas.
* Mise à jour progressives (rolling update), et retour arrière possible (rollback).
* Les pods en echecs dans un déploiement sont automatiquement redémarrés.

##==##

<!-- .slide: class="with-code-bg-dark"-->

# Les ressources > Deploiements > **spec**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
```

La première partie d'un déploiement contient l'état souhaité des templates de pods (seconde partie)
* **replica**: Nombre de pods créés qui seront désservis par le service.
* **selector**: Permet d'identifier les pods gérés par le déploiement via les labels.
* **template**: Décrit les pods souhaités du déploiement.

##==##

<!-- .slide: class="with-code-bg-dark"-->

# Les ressources > Deploiements > **template**

La seconde partie d'un déploiement contient la description du pod géré par le déploiement
* **metadata**: Contient les labels, nécessaires à l'association déploiement / pods.
* **containers**: Peut contenir un ou plusieurs conteneurs (initContainer, sidecar).
* **aller plus loin**: Peut avoir des volumes, des healthcheck, de l'affinité, des limites, des variables.

```yaml
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx-container
        image: nginx:latest
        ports:
        - containerPort: 80
```

##==##

<!-- .slide: class="transition-bg-sfeir-2" -->

# TP : Deploiements

##==##

<!-- .slide: class="exercice"-->

## LAB
# TP : Deploiements

https://killercoda.com/laurental/scenario/6-deployment
