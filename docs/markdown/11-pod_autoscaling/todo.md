<!-- .slide:-->

# Mise à l’échelle automatique


##==##
<!-- .slide:-->

# Horizontal Pod Autoscaler


AverageCPU Usage %


![](./images/g3f3310ef84_0_1082.png)

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

```

Déclarer un Horizontal Pod scaler en CLI :
$ kubectl autoscale deployment nginx \
    --cpu-percent=50 --min=1 --max=10



```

# Horizontal Pod Autoscaler


Notes:
On peut déclarer un horizontal pod autoscaler en cli ou via l’api, exemple via l’api page suivante. 

Le HPA va agir sur le deployment pour monter ou descendre le nombre de pod en fonction du pourcentage de cpu consommé. 



D’autres métriques peuvent être utilisés. 



##==##
<!-- .slide: class="with-code" -->

# Horizontal Pod Autoscaler



```
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: helloweb
spec:
  maxReplicas: 10
  minReplicas: 1
  targetCPUUtilizationPercentage: 50
  scaleTargetRef:
    apiVersion: extensions/v1beta1
    kind: Deployment
    name: helloweb

```

##==##
<!-- .slide:-->

# TP : Autoscaling


##==##
<!-- .slide:-->

Les tests vont s’effectuer sur l’image docker k8s.gcr.io/hpa-example.
Cette image contient un apache+php. La home page de cette apache est un script php qui calcule les racines carrées des nombres de 1 à 1 million.
L’appel à cette page va provoquer une forte consommation CPU.




# TP : Autoscaling


Notes:
Version 
impérative
 de la commande 
versus
 version 
déclarative
 par fichier yaml.



##==##
<!-- .slide:-->

# TP : Autoscaling


Créer un deployment 
$ kubectl create -f deployments/hpa-example.yaml
Exposer le deployment 
$ kubectl expose deployment/hpa-example --port 80
Créer un hpa sur le deployment
$ kubectl autoscale deployment hpa-example --cpu-percent=50 --min=1 --max=10


##==##
<!-- .slide:-->

Vous lancerez ensuite un Pod interactif pour charger l’Apache :
$ kubectl run -ti load-generator --image=busybox /bin/sh
Dans laquelle vous exécuterez la boucle d’appels :
$ while true;
do wget -q -O- http://hpa-example;
done


# TP : Autoscaling



##==##
<!-- .slide:-->

# TP : Autoscaling


Vérifier l’état de l’objet HPA
$ kubectl get hpa/hpa-example 
Arrêter la commande wget 
Attendez 5 minutes
Vérifier à nouveau l’état du HPA 
Que constatez-vous ? 
