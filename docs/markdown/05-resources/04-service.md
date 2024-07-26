<!-- .slide: class="transition"-->

# Les ressources
## Les services

##==##

<!-- .slide:-->

# Les ressources > **Services**

![center h-900](./assets/images/services.png)

##==##

<!-- .slide:-->

# Les ressources > Services > **définition**
**Définition:** C'est une ressource qui permet d'accéder à un ensemble de pods, via un "label selector", et qui donne un nom DNS et une IP à cet ensemble.
* Permet à une ressource d'être accessible depuis l'exterieur.
* Fait le lien avec les services à l'aide de label selector.
* Agit comme un reverse proxy (port d'entrée vers port du conteneur).
* Peut être de plusieurs types:
  * ClusterIP
  * NodePort
  * LoadBalancer

##==##

<!-- .slide: class="two-column with-code-bg-dark" -->

# Les ressources > Services > **NodePort**

![center h-800](./assets/images/NodePort.png)

##--##

Permet d'exposer une application à l'exterieur en ouvrant un port spécifique sur **tous** les nœuds du cluster
* Les ports sont compris entre 30000-32767.
* Le trafic qui arrive sur ce port est automatiquement routé vers ce service.
* L'application est accessible via : **<IP_du_nœeud:port>**.
* ![sfeir-icons](alert-triangle)<!-- .element: style="--icon-size:48px; --icon-color:red;" --> Il ne peut y avoir qu'un service par port !

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service
spec:
  type: NodePort
  ports:
    - port: 80
      targetPort: 8080
      nodePort: 30007
  selector:
    app: mon-app
```

##==##

<!-- .slide: class="two-column with-code-bg-dark" -->

# Les ressources > Services > **LoadBalancer**

Permet d'exposer une application en lui attribuant une adress IP externe au travers d'un LoadBalancer.
* Une adresse IP dédiée par application.
* Entraine des coûts sur le cloud.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service
spec:
  type: LoadBalancer
  ports:
    - port: 80
      targetPort: 8080
  selector:
    app: mon-app
```

##--##

<br><br>

![center h-800](./assets/images/service-loadbalancer.png)

##==##

<!-- .slide: class="two-column with-code-bg-dark" -->

# Les ressources > Services > **ClusterIP**

<br><br>  

![center](./assets/images/service-clusterip.png)

##--##

Permet d'exposer une application seulement à l'intérieur du cluster.
* Est accessible via le DNS **\<nom-service\>.\<namespace\>.svc.cluster.local**.
* Peut être couplé à un ingress pour être accessible via un FQDN.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service
spec:
  type: ClusterIP  # Peut être omis car c'est le type par défaut
  ports:
    - port: 80
      targetPort: 8080
  selector:
    app: mon-app
```
##==##

<!-- .slide: class="exercice" -->
## Quiz

Quel type de service est le plus approprié pour une base de données interne qui ne devrait pas être accessible de l'extérieur du cluster ?
* LoadBalancer
* ClusterIP
* ExternalService
* NodePort

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quel type de service est le plus approprié pour une base de données interne qui ne devrait pas être accessible de l'extérieur du cluster ?
* LoadBalancer
* **ClusterIP**
* ExternalService
* NodePort

##==##

<!-- .slide: class="exercice" -->
## Quiz

Vrai ou Faux : Un service LoadBalancer crée automatiquement une entrée dans le DNS externe.
* Vrai
* Faux

##==##

<!-- .slide: class="exercice" -->
## Quiz

Vrai ou Faux : Un service LoadBalancer crée automatiquement une entrée dans le DNS externe.
* Vrai
* **Faux**

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quelle est la plage de ports par défaut pour les services NodePort ?
* 1-65535
* 1024-29999
* 30000-32767

##==##

<!-- .slide: class="exercice" -->
## Quiz

Quelle est la plage de ports par défaut pour les services NodePort ?
* 1-65535
* 1024-29999
* **30000-32767**

##==##

<!-- .slide: class="transition-bg-sfeir-2" -->

# TP : Service

##==##

<!-- .slide: class="exercice"-->
## LAB
# TP : Créer un service

https://killercoda.com/sfeir-killercoda/scenario/5-services
