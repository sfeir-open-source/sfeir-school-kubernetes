<!-- .slide: class="transition-bg-sfeir-3"-->

# Les avantages > **Readiness, Liveness et Startup Probes**

##==##

<!-- .slide: -->

# Les avantages > Readiness, Liveness et Startup Probes > **Readiness**

La readiness probe permet à Kubernetes de déterminer si un pod est prêt à recevoir du traffic au travers d'un service ou non. Cela peut être une probe HTTP, TCP ou encore une commande de type linux.

![center h-600](./assets/images/readiness.png)

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les avantages > Readiness, Liveness et Startup Probes > **Readiness**

Voici comment écrire une readiness HTTP avec /health en endpoint

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-school
spec:
  containers:
  - name: pod-school
    image: school:v1.0
    readinessProbe:
      httpGet:
        path: /healthz
        port: 8080
      initialDelaySeconds: 10
      periodSeconds: 5
```

##==##

<!-- .slide: -->

# Les avantages > Readiness, Liveness et Startup Probes > **Liveness**

La liveness probe permet à Kubernetes de déterminer si un pod est fonctionnel ou non et redémarre celui-ci lorsque nécessaire. Cela peut être une probe HTTP, TCP ou encore une commande de type linux.

![center h-600](./assets/images/liveness.png)

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les avantages > Readiness, Liveness et Startup Probes > **Liveness**

Voici comment écrire une liveness executant une commande linux

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-school
spec:
  containers:
  - name: pod-school
    image: school:v1.0
    livenessProbe:
      exec:
        command:
          - cat
          - /tmp/healthy
      initialDelaySeconds: 15
      periodSeconds: 10
      failureThreshold: 3
```

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les avantages > Readiness, Liveness et Startup Probes > **Startup probe**

La startup probe permet à Kubernetes d'attendre qu'une application démarre avant de lancer la readiness et la liveless. C'est un cas utile pour les applications longues à démarrer. Si elle échoue, le pod est redémarré.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-school
spec:
  containers:
  - name: pod-school
    image: school:v1.0
    startupProbe:
      httpGet:
        path: /healthz
        port: 8080
      failureThreshold: 30
      periodSeconds: 10
```

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Readiness/Liveness

##==##

<!-- .slide: class="exercice"-->

## LAB
# TP : Readiness/Liveness

https://killercoda.com/sfeir-killercoda/scenario/3-readiness
