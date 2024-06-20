<!-- .slide: class="transition-bg-sfeir-3"-->

# Mise à l’échelle automatique

##==##

<!-- .slide:-->

# Horizontal Pod Autoscaler

![center h-800](./assets/images/horizontal-pod-autoscaler.svg)

Notes:
L’
Horizontal Pod Autoscaler
est un Controller Kubernetes responsable de

modifier en temps réel le nombre de replicas
d’un ReplicationController / Deployment

en fonction de la charge CPU
moyenne de l’ensemble de pods de ce RC/Déployment.

https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/

https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/

##==##

<!-- .slide: class="with-code" -->

# Horizontal Pod Autoscaler

- Déclarer un Horizontal Pod scaler en CLI :

`$ kubectl autoscale deployment nginx --cpu-percent=50 --min=1 --max=10`

Notes:
On peut déclarer un horizontal pod autoscaler en cli ou via l’api, exemple via l’api page suivante.

Le HPA va agir sur le deployment pour monter ou descendre le nombre de pod en fonction du pourcentage de cpu consommé.

D’autres métriques peuvent être utilisés. Nativement CPU & RAM
Custom , nombre d'event dans un broker, nombre de requêtes/s

##==##

<!-- .slide: class="with-code" -->

# Horizontal Pod Autoscaler

```yaml
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: helloweb
spec:
  maxReplicas: 10
  minReplicas: 1
  targetCPUUtilizationPercentage: 50
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: helloweb
```

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Autoscaling

##==##

<!-- .slide: class="exercice" -->

# TP : Autoscaling

## LAB

https://killercoda.com/laurental/scenario/7-autoscaling