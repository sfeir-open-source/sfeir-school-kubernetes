<!-- .slide: class="transition-bg-sfeir-3"-->

# Ingress

##==##

<!-- .slide:-->

# Ingress

- Point d’entrée unique du cluster

- HTTP (port 80) et HTTPS (port 443)

- Gestion des certificats SSL

##==##

<!-- .slide:-->

# Ingress

![center h-800](./assets/images/ingress.svg)

##==##

<!-- .slide: class="with-code max-height" -->

# Ingress yaml

```yaml
apiVersion: v1
kind: Ingress
metadata:
  name: nginx
spec:
  rules:
  - host: "institute.sfeir.com"
    http:
          paths:
          - path: /
        pathType: ImplementationSpecific
        backend:
                  service
            name: nginx
            port:
              name: http
```

Notes:
Les règles permettent, avec l’implémentation actuelle, de router le traffic selon :

le hostname (en-tête HTTP “
Host:
”)

le path HTTP (à partir du
/
suivant le nom+port de serveur dans l’url)

##==##

<!-- .slide: class="with-code" -->

# Ingress

```shell
$ kubectl get ingress
NAME      HOSTS     ADDRESS     PORTS     AGE
nginx     *         localhost   80        3m

$ kubectl get ing -o yaml nginx
apiVersion: apps/v1
kind: Ingress
metadata:
  name: nginx
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Ingress

- Implémentation par défaut à base de nginx

- À activer sur minikube (minikube addons enable ingress)

- À déployer manuellement sous Docker-for-Desktop

https://kubernetes.github.io/ingress-nginx/deploy/

##==##

<!-- .slide: data-type-show="hide"-->

# Demo : Ingress

##==##

<!-- .slide:-->

# Récapitulatif

![center h-800](./assets/images/recap-ingress.png)

Notes:
Jusqu’à maintenant avons abordé les principales ressources Kubernetes :

Pod, ReplicaSet,
Deployment, Service et Ingress

Voyons maintenant comment les faire vivre
