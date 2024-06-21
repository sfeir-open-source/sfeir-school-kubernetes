<!-- .slide: class="transition-bg-sfeir-3"-->

# Liveness/Readiness

##==##

<!-- .slide:-->

# Readiness/Liveness

- Readiness :

  - Vérifier que le container est prêt à recevoir du flux

- Liveness :

  - Vérifier que le container répond correctement

- Startup :
  - Vérifier que le container est démarré
  - Désactiver les sondes précédentes en attendant cet état

Notes:
Kubeproxy sortira un pod du flux si le readiness devient ko.

Kubelet va redémarrer le container si le liveness est ko, 
ou si la startup n'est pas OK au bout d'une durée configurée

##==##

<!-- .slide: class="with-code" -->

# Readiness/Liveness : command

```yaml
livenessProbe:
  exec:
    command:
      - cat
      - /tmp/healthy
  initialDelaySeconds: 5
  periodSeconds: 5
```

<!-- .element: class="big-code" -->

Notes:
Il est possible d’utiliser une commande pour tester l’état du service

##==##

<!-- .slide: class="with-code max-height" -->

# Readiness/Liveness : tcp socket

```yaml
readinessProbe:
  tcpSocket:
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
livenessProbe:
  tcpSocket:
    port: 8080
  initialDelaySeconds: 15
  periodSeconds: 20
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code max-height" -->

# Readiness/Liveness : http

```yaml
...
spec:
  containers:
    - readinessProbe:    # accepte des requêtes quand OK
        httpGet:
          path: /readiness
          port: 81
          scheme: HTTP
        initialDelaySeconds: 5
        timeoutSeconds: 1
      livenessProbe:    # redémarre le pod si KO
        httpGet:
          path: /healthz
          port: 81
          scheme: HTTP
        initialDelaySeconds: 5 # Délai avant la première requête
        periodSeconds: 15      # Fréquence des tests
        timeoutSeconds: 5

      ...


```

Notes:
readinessProbe indique à kubelet quand un pod est prêt à servir du traffic

livenessProbe indique si le pod est ok, si nok kubelet redémarre le pod

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Readiness/Liveness

##==##

<!-- .slide: class="exercice"-->

# TP : Readiness/Liveness

## LAB

https://killercoda.com/laurental/scenario/3-readiness