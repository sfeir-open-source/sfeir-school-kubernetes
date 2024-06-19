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
- Les tests vont s’effectuer sur l’image docker k8s.gcr.io/hpa-example.
- Cette image contient un apache+php. La home page de cette apache est un script php qui calcule les racines carrées des nombres de 1 à 1 million.
- L’appel à cette page va provoquer une forte consommation CPU.

Notes:
Version
impérative
de la commande
versus
version
déclarative
par fichier yaml.

##==##

<!-- .slide: class="exercice"-->

# TP : Autoscaling

## LAB

- Créer un deployment

`$ kubectl apply -f deployments/hpa-example.yaml`

- Exposer le deployment

`$ kubectl expose deployment/hpa-example --port 80`

- Créer un hpa sur le deployment

`$ kubectl autoscale deployment hpa-example --cpu-percent=50 --min=1 --max=10`

##==##

<!-- .slide: class="exercice with-code"-->

# TP : Autoscaling

## LAB

- Vous lancerez ensuite un Pod interactif pour charger l’Apache :

`$ kubectl run -ti load-generator --image=busybox /bin/sh`

- Dans laquelle vous exécuterez la boucle d’appels :

```shell
$ while true;
do wget -q -O- http://hpa-example;
done
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice"-->

# TP : Autoscaling

## LAB

- Vérifier l’état de l’objet HPA

`$ kubectl get hpa/hpa-example`

- Arrêter la commande wget
- Attendez 5 minutes
- Vérifier à nouveau l’état du HPA
- Que constatez-vous ?
