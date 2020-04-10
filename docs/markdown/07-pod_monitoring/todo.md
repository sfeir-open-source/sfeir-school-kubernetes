<!-- .slide:-->

# Liveness/Readiness


##==##
<!-- .slide:-->

# Readiness/Liveness


Readiness : Vérifier que le pod est prêt à recevoir du flux


Liveness : Vérifier que le service répond correctement




Notes:
Kubeproxy sortira un pod du flux si le readiness devient ko.



Kubelet va redémarrer le container si le liveness est ko.





##==##
<!-- .slide: class="with-code" -->

# Readiness/Liveness : command



```

    livenessProbe:
      exec:
        command:
        - cat
        - /tmp/healthy
      initialDelaySeconds: 5
      periodSeconds: 5

```

Notes:
Il est possible d’utiliser une commande pour tester l’état du service



##==##
<!-- .slide: class="with-code" -->

# Readiness/Liveness : tcp socket



```
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

##==##
<!-- .slide: class="with-code" -->

# Readiness/Liveness : http


```
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
<!-- .slide:-->

# TP : Readiness/Liveness 


##==##
<!-- .slide:-->

# TP : Readiness/Liveness


Regarder le contenu du pod 
$ cat readiness/healthy-monolith.yaml
$ kubectl create -f readiness/healthy-monolith.yaml
$ kubectl describe pods/healthy-monolith


##==##
<!-- .slide: class="with-code" -->

# TP : Readiness/Liveness


```
$ kubectl describe pods

Comment est configuré la sonde readiness ? 
Comment est configuré la sonde liveness 
à quelle fréquence la surveillance readiness est effectué ? 
à partir de combien de secondes la sonde liveness est effectué ? 


```

Notes:
Comment est configuré la sonde readiness ? httpGet sur /readiness:81 

liveness  sur /healthz:81

la valeur par défaut du readiness : 10 secondes

liveness est effectué à partir de 5 secondes





##==##
<!-- .slide:-->

# TP : Tester les sondes 


$ kubectl get pods healthy-monolith
Noter l’état OK du pod
$ kubectl port-forward healthy-monolith 10081:81
Forcer l’application a passé en état “failed” 
$ curl http://127.0.0.1:10081/readiness/status
Attendre 45 secondes que la sonde en failed 
$ kubectl describe pods healthy-monolith
Vous pouvez noter dans l’historique le moment où le pod est passé en “unhealthy”



##==##
<!-- .slide:-->

# TP : Tester les sondes 



Maintenant nous allons “casser” la sonde liveness
$ curl http://127.0.0.1:10081/healthz/status

$ kubectl get pods 

Que se passe-t-il quand le liveness est ko ? 



Notes:
Que se passe-t-il : dans ce cas le pod est redémarré


