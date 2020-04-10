
##==##
<!-- .slide:-->

# Gestion avancée de Pods


##==##
<!-- .slide:-->

# DaemonSet : un Pod par noeud


Agent de monitoring
Relais de logs
Agent de storage (client glusterfs, …)


agent-abcd


agent-efgh


agent-ijkl


Notes:
Un objet DaemonSet va exécuter un pod par node, utilisé surtout pour des tâches d’administration/ monitoring du cluster.



##==##
<!-- .slide:-->

# StatefulSet : un Volume par Pod


Pour les applis qui ont besoin de garder un état
Kube réassocie les Pods aux volumes persistants
Dns : <name>-{0..N-1}.<service>.<ns>.svc.cluster.local


myapp-0


myapp-1


myapp-2


myvol-0


myvol-1


myvol-2


Notes:
Les pods sont numérotés dans l’ordre, et les pods réassignés à ce volumes au redémarrage.

Quelques contraintes : les pods sont démarrés et éteints dans l’ordre de démarrage



##==##
<!-- .slide:-->

Job
Batch lancé une seule fois
Kubernetes ne relance pas les Pods de ce type sauf code retour en erreur
CronJob 
Job déclenché régulièrement selon une expression cron : "*/1 * * * *"


# Jobs


Notes:
Utile pour lancer un batch de façon régulier. 


