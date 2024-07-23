<!-- .slide: class="transition"-->

# Les ressources
## Ingress

##==##

<!-- .slide:-->

# Les ressources > **Ingress**

![center h-900](./assets/images/resource-ing.png)

##==##

<!-- .slide: class="two-column with-code-bg-dark" -->

# Les ressources > Ingress > **Définition**

**Définition:** Ressource Kubernetes gérant l'accès externe aux services via HTTP/HTTPS. Ils agissent comme un point d'entrée pour le trafic réseau, offrant des fonctionnalités de routage.
* **Routage:** diriger le trafic vers différents services basés sur l'URL ou le nom d'hôte.
* **SSL/TLS:** Gère la terminaison SSL/TLS pour sécuriser les connexions.
* **Name-based virtual hosting:** Permet d'héberger plusieurs domaines sur une seule adresse IP.
* **Controller:** Nécessite un Ingress Controller (comme Nginx, Traefik, HAProxy) pour fonctionner.

##==##

<!-- .slide: class="two-column with-code-bg-dark" -->

# Les ressources > Ingress > **Exemple**

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: school-ingress
spec:
  tls:
  - hosts:
      - school.mydomain.com
    secretName: school-tls
  rules:
  - host: school.mydomain.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: school-svc
            port:
              number: 80
```

##--##

<br><br>

Voici une ressource ingress qui expose l'application school au travers de l'url https://school.mydomain.com
* **tls:** Utilise le certificat présent dans le secret school-tls pour exposer l'application en HTTPS.
* **host:** FQDN attendu pour rediriger le trafic vers le service assoicié.
* **path:** Permet de gérer les sous chemins (/api redirigé vers le microservice api).
* **backend:** Spécifie le service vers lequel rediriger le trafic.
