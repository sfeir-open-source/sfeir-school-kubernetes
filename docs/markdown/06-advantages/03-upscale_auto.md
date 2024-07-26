<!-- .slide:-->

# Les avantages > **Mise à l'échelle automatique**

Kubernetes offre plusieurs mécanismes pour ajuster automatiquement la taille de vos applications en fonction de la charge ou d'autres métriques.
Il existe trois types principaux d'autoscaling dans Kubernetes:
* Horizontal Pod Autoscaler
* Vertical Pod Autoscaler
* Cluster Autoscaler

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les avantages > Mise à l'échelle automatique > **Horizontal Pod Autoscaler**

Natif à Kubernetes, il permet la création d'un nouveau pod quand une métrique **cpu, ram ou custom** dépasse un certain seuil.
```yaml
apiVersion: autoscaling/v2beta1
kind: HorizontalPodAutoscaler
metadata:
  name: school-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: school
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      targetAverageUtilization: 50
```

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les avantages > Mise à l'échelle automatique > **Vertical Pod Autoscaler**

La CRD du [vertical pod autoscaler](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler) n'est pas installée nativement, mais permet de modifier les limites en cpu et ram des déploiements de manière automatique.

```yaml
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: school-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind:       Deployment
    name:       school
  updatePolicy:
    updateMode: "Auto"
```

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les avantages > Mise à l'échelle automatique > **Cluster Autoscaler**

Le cluster autoscaler permet d'augmenter le nombre de nœuds d'un cluster en cas de sur-consommation des ressources de ceux présents. La configuration dépend de l'infrastructure sur laquelle repose Kubernetes.  
Pour plus d'informations:
* https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Autoscaling

##==##

<!-- .slide: class="exercice" -->

## LAB
# TP : Autoscaling

https://killercoda.com/sfeir-killercoda/scenario/7-autoscaling
