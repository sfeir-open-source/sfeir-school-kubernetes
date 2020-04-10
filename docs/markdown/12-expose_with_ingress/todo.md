# Ingress


##==##
<!-- .slide:-->

Point d’entrée unique du cluster

HTTP (port 80) et HTTPS (port 443)

Gestion des certificats SSL



# Ingress


##==##
<!-- .slide:-->

# Ingress


www.sfeir.com/


lemag.sfeir.com


www.sfeir.com/formation/institute/


     HTTP (80)     HTTPS (443)


##==##
<!-- .slide: class="with-code" -->

```
apiVersion: v1kind: Ingressmetadata:  name: nginxspec:  rules:  - http:      paths:      - path: /
        backend:          serviceName: nginx          servicePort: http

```

# Ingress yaml


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


```
$ kubectl get ingressNAME      HOSTS     ADDRESS     PORTS     AGEnginx     *         localhost   80        3m$ kubectl get ingress -o yaml nginx
apiVersion: extensions/v1beta1kind: Ingress
metadata:
  name: nginx...

```

##==##
<!-- .slide: class="with-code" -->

# Ingress


```
Implémentation par défaut à base de nginx

À activer sur minikube (minikube addons enable ingress)

À déployer manuellement sous Docker-for-Desktop
https://kubernetes.github.io/ingress-nginx/deploy/

```

##==##
<!-- .slide:-->

# Demo : Ingress


##==##
<!-- .slide:-->

# Récapitulatif


![](./images/g3f3310ef84_0_159.png)

Notes:
Jusqu’à maintenant avons abordé les principales ressources Kubernetes :

Pod, ReplicaSet, 
Deployment, Service et Ingress



Voyons maintenant comment les faire vivre



##==##
<!-- .slide:-->

End of Day 1

