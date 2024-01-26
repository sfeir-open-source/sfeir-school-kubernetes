<!-- .slide:-->

# Configuration

- Configurer l’URI d’une base de données
- Injecter un fichier application-prod.yml
- Spécifier les credentials d’une api

##==##

<!-- .slide: class="with-code" -->

# Variables d’environnement

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: envar-demo
spec:
  containers:
    - name: envar-demo-container
      image: debian
      env:
        - name: DEMO_GREETING
          value: 'Hello from the environment'
        - name: DEMO_FAREWELL
          value: 'Such a sweet sorrow'
```

<!-- .element: class="big-code" -->

Notes:
On peut injecter une variable d’environnement via le champ “env”.

##==##

<!-- .slide: class="with-code"-->

# ConfigMap : création

```shell
$ kubectl create configmap <map-name> <data-source>
$ kubectl create configmap my-app-conf
  --from-file=my-app-conf/configmap/application-dev.properties
$ kubectl create cm my-app-conf
  --from-literal=db-server=mydbserver.mycompany.com
```

<!-- .element: class="big-code" -->

Notes:
Pour injecter un fichier de configuration, on peut injecter un fichier de configuration dans un pod avec un configMap.

On peut créer un fichier de config, depuis :

un fichier ou un répertoire  
--from-file
=

depuis la cli :
--from-literal
=

##==##

<!-- .slide: class="with-code" -->

# ConfigMap: manifests

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-app-config
data:
  application.properties: |
    db-server=mydbserver.dev.mycompany.com
    username=my-rw-dbuser
```

<!-- .element: class="big-code" -->

```shell
$ kubectl apply -f configmap.yml
```

<!-- .element: class="big-code" -->

Notes:
derrière le | on peut mettre n’importe un fichier non structuré yaml

##==##

<!-- .slide: class="with-code two-column max-height" -->

# ConfigMap : utilisation

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: configmap-pod
spec:
  containers:
    - name: test
      image: busybox
      volumeMounts:
        - name: config-vol
          mountPath: /etc/config
```

<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code" -->

<br>
<br>
<br>

```yaml
volumes:
  - name: config-vol
    configMap:
      name: log-config
      items:
        - key: log_level
          path: log_level
```

<!-- .element: class="big-code" -->

Point de montage du fichier : **/etc/config**/_log_level_

##==##

<!-- .slide: class="with-code" -->

# Secret : type

```shell
$ kubectl create secret --help

Available Commands:
  docker-registry Create a secret for use with a Docker registry
  generic         Create a secret from a local file, directory or literal value
  tls             Create a TLS secret
```

<!-- .element: class="big-code" -->

Notes:
On peut créer 3 types de secret :

docker-registry : pour enregistrer les credentials pour pull une image docker depuis une registry privée

generic : équivalent à configmap, permet de stocker des secrets de type clé/valeur

tls : pour stocker un certificat serveur pour exposer un service en https

##==##

<!-- .slide: class="with-code" -->

# Secret : manifest

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  username: YWRtaW4=
  password: MWYyZDFlMmU2N2Rm
```

<!-- .element: class="big-code"  -->

##==##

<!-- .slide: class="with-code"-->

# Secret : création

- Créer un secret depuis un fichier

`$ kubectl create secret generic db-user-pass --from-file=./password.txt`

- Créer un secret depuis une clé/valeur

`$ kubectl create secret generic prod-db-secret --from-literal=username=produser`

- Créer un secret “docker-registry ”

```shell
$ kubectl create secret docker-registry regcred
  --docker-server=<your-registry-server> --docker-username=<your-name>
  --docker-password=<your-pword> --docker-email=<your-email>
```

<!-- .element: class="big-code" -->

Notes:
Un secret va permettre de stocker des informations sensibles, comme des mots de passe, des clés privées.

##==##

<!-- .slide: class="with-code max-height" -->

# Secret : env vars

```yaml
apiVersion: v1
kind: Pod
spec:
  containers:
    - name: envar-demo-container
      image: debian
      env:
        - name: DEMO_GREETING
          valueFrom:
            secretKeyRef:
              name: demo # le nom du secret
              key: password # la clé dans le secret
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code two-column" -->

# Secret : volume

```yaml
kind: Pod
spec:
  containers:
    - name: mypod
      image: redis
      volumeMounts:
        - name: secret-volume
          mountPath: '/etc/foo'
          readOnly: true
```

<!-- .element: class="big-code" -->

##--##
<br>
<br>
<br>
<br>

```yaml
volumes:
  - name: secret-volume
    secret:
      secretName: mysecret
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="transition-bg-sfeir-2" -->

# TP : Configuration

##==##

<!-- .slide: class="exercice"-->

# TP : ConfigMap

## LAB

`$ kubectl create configmap nginx-proxy-conf --from-file=configuration/nginx/proxy.conf`

`$ kubectl describe configmaps nginx-proxy-conf`

##==##

<!-- .slide: class="exercice"-->

# Quizz : ConfigMap

## LAB

- Combien y a t-il d’éléments dans la configmap nginx-proxy-conf ?
- Quel est le nom de ces éléments ?

Notes:
1 element : le fichier proxy.conf

##==##

<!-- .slide: class="exercice"-->

# TP : Secret

## LAB

`$ kubectl create secret generic tls-certs --from-file=configuration/tls/`

`$ kubectl describe secrets tls-certs`

##==##

<!-- .slide: class="exercice"-->

# Quizz : Secret

## LAB

- Combien y a t-il d’éléments dans le Secret tls-cert ?

- Quel est le nom de ces éléments ?

Notes:
Le secret contient 4 elements :
ca-key.pem

ca.pem

cert.pem

key.pem

on peut voir que les secrets ne sont pas affiche dans la console

##==##

<!-- .slide: class="exercice" -->

# TP : Injection de fichiers

## LAB

`$ cat configuration/pod/secure-monolith.yaml`

- Comment le secret est injecté dans le pod ?

- Comment le configmap est injecté dans le pod ?

Notes:
Les secrets sont injectés sous la forme d'un volume

de la meme facon le configMap est injecte sous la forme d'un volume.

##==##

<!-- .slide: class="exercice"-->

# TP : Injection de fichiers

## LAB

- Créer le pod “secure-monolith”

`$ kubectl apply -f configuration/pod/secure-monolith.yaml`

- Exposer le port sur votre poste

`$ kubectl port-forward secure-monolith 10443:443`

- Faites une requête avec curl

`$ curl --cacert configuration/tls/ca.pem https://127.0.0.1:10443`

Notes:
Du coup on a injecté les certificats et la configuration du service nginx, et on arrive bien à faire une requête en https sur notre service.

Préciser : ce n’est pas la bonne méthode pour exposer un service en https sur kubernetes ;))
