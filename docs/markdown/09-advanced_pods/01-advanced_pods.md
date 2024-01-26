<!-- .slide:-->

# DaemonSet : un Pod par noeud

![center h-500](./assets/images/daemonset.svg)

- Agent de monitoring
- Relais de logs
- Agent de stockage (client glusterfs, …)

Notes:
Un objet DaemonSet va exécuter un pod par node, utilisé surtout pour des tâches d’administration/ monitoring du cluster.

##==##

<!-- .slide:-->

# StatefulSet : un Volume par Pod

![center h-500](./assets/images/statefulset.svg)

- Pour les applis qui ont besoin de garder un état
- Kube réassocie les Pods aux volumes persistants
- Dns : <name>-{0..N-1}.<service>.<ns>.svc.cluster.local

Notes:
Les pods sont numérotés dans l’ordre, et les pods réassignés à ce volumes au redémarrage.

Quelques contraintes : les pods sont démarrés et éteints dans l’ordre de démarrage

##==##

<!-- .slide:-->

# Jobs

- Job

  - Batch lancé une seule fois
  - Kubernetes ne relance pas les Pods de ce type sauf code retour en erreur

- CronJob
  - Job déclenché régulièrement selon une expression cron : `"_/1 _ \* \* \*"`

Notes:
Utile pour lancer un batch de façon régulier.
