<!-- .slide:-->

# Et après ? > **Les autres ressources**

Tout au long de cette formation, nous avons parcourus un ensemble de ressources Kubernetes. Pour aller plus loin, il est possible de regarder
* **statefulSet :** gère un ensemble de pod en garantissant l'unicité du nom et du stockage associé (utile pour les bdd par exemple)
* **daemonSet :** force les pods créés à être répartis sur tous les noeuds du cluster (utile pour les agents de log, monitoring, ...)
* **jobs :** permet de lancer une action ponctuelle (préparer une database, ...), peut être en mode cron (sauvegarde)
* **storageClass :** gère les différents types de stockage