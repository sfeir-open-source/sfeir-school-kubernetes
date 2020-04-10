
##==##
<!-- .slide:-->

# Template


##==##
<!-- .slide:-->

# Problème


![](./images/g3404c40d58_0_11.png)

Notes:
Un déploiement peut devenir rapidement très verbeux, très long, difficile à maintenir 



##==##
<!-- .slide:-->

# Problèmes


yaml verbeux
beaucoup de code en commun entre 2 déploiements
besoin de déployer un “package”


Notes:
Problème de syntaxe avec le yaml

Il y a généralement entre 2 applications similaires, peu de différence

Plutôt que de déployer un deployment + un service  + un configmap + ... , on a besoin de déployer un package complet.





##==##
<!-- .slide: class="with-code" -->

# Template : Helm


```
Le plus populaire aujourd’hui
Templating sur la base du moteur de template go
Chart
Repository de chart
Tiller et état
$ helm repo update
$ helm install stable/mysql


```

##==##
<!-- .slide: class="with-code" -->

# Helm : chart


```
wordpress/
  Chart.yaml          # A YAML file containing information about the chart
  LICENSE             # OPTIONAL: A plain text file containing the license for the chart
  README.md           # OPTIONAL: A human-readable README file
  requirements.yaml   # OPTIONAL: A YAML file listing dependencies for the chart
  values.yaml         # The default configuration values for this chart
  charts/             # A directory containing any charts upon which this chart depends.
  templates/          # A directory of templates that, when combined with values,
                      # will generate valid Kubernetes manifest files.
  templates/NOTES.txt # OPTIONAL: A plain text file containing short usage notes

```

Notes:
L’organisation d’un chart helm 



##==##
<!-- .slide: class="with-code"  class="with-code" -->

# Helm : Template


```
[deployment.yaml]
spec:
  containers:
    - name: deis-database
      image: postgres:{{.Values.dockerTag}}
      imagePullPolicy: {{.Values.pullPolicy}}
      ports:
        - containerPort: 5432
      env:
        - name: DATABASE_STORAGE
          value: {{default "minio" .Values.storage}}

```

```
[Values.yaml]

# The tag for the docker image.
dockerTag: 7.1.2
pullPolicy: Always
# The storage backend, whose default is set to "minio"
# storage: 

```

Notes:
Values.yaml

imageRegistry
: The source registry for the Docker image.

dockerTag
: The tag for the docker image.

pullPolicy
: The Kubernetes pull policy.

storage
: The storage backend, whose default is set to 
"minio"





##==##
<!-- .slide:-->

# Template : Kustomize


Challenger
Plain yaml 
Pas de “templating”
Mais plutôt du “patch”
Intégré à kubectl   ‘kubectl apply -k ...’


##==##
<!-- .slide:-->

# Kustomize


![](./images/g3404c40d58_0_23.png)

Notes:
Un exemple avec kustomize 


