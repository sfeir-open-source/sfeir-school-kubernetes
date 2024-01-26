<!-- .slide: class="transition-bg-sfeir-3"-->

# Manifest

Notes:
Configuration files - Written in YAML or JSON, these files describe the desired state of your application in terms of Kubernetes API objects. A file can include one or more API object descriptions (manifests). (See the example YAML from the stateless app).

Fichier de configuration : écrit en yaml ou json, ce fichier décrit l’état désiré d’une ressource Kubernetes. Dans un fichier, on peut inclure une ou plusieurs descriptions d’objets

##==##

<!-- .slide: class="with-code max-height" -->

# Manifest

```yaml
kind: Pod
apiVersion: v1
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  containers:
    - name: nginx
      image: nginx:alpine
status: ...
```

<!-- .element: class="big-code"-->

Notes:
kind : type de resource que l’on va créé

apiVersion: version de l’api de la ressource que l’on veut créé

metadata: information qui permette d’identifier la resource, name est obligatoire

spec: définit l’état désiré de notre ressource

status : état actuel de la ressource
