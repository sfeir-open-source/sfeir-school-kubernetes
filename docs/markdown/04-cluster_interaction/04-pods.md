<!-- .slide: class="transition-bg-sfeir-3"-->

# Les pods

##==##

<!-- .slide: class="two-column" -->

# Les pods > **Kézaco**

C'est la plus petite ressource d'un cluster Kubernetes. 
* Il contient un ou plusieurs conteneur étroitement liés 
* Les conteneurs partagent la même IP, et le même espace de port
* Ils peuvent communiquer avec la boucle locale
* Ils peuvent partager des volumes

##--##
<br>

![full-center](./assets/images/pods.png)

##==##

<!-- .slide: class="with-code-bg-dark two-column" -->

# Les pods > **YAML**
Voici comment écrire un pod avec les valeurs minimales.
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.14.2
    ports:
    - containerPort: 80
```
##--##
Un exemple plus complet serait
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels: 
    app: nginx
    env: prod
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
  serviceAccountName: my-serviceaccount
  automountServiceAccountToken: false
  containers:
  - name: nginx
    image: nginx:1.14.2
    ports:
    - containerPort: 80
    volumeMounts:
    - mountPath: /cache
      name: cache-volume
  volumes:
  - name: cache-volume
    emptyDir: {}
```
##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Les pods

##==##

<!-- .slide: class="exercice"-->
## LAB
# TP : les Pods



https://killercoda.com/laurental/scenario/2-pod