
##==##
<!-- .slide:-->

# Architecture micro-service


##==##
<!-- .slide:-->

Base de code : système de contrôle de version
Dépendances : Déclarez explicitement et isolez les dépendances
Configuration : Stockez la configuration dans l’environnement
Services externes : ressources rattachées
Build, release, run : Séparez le build/packaging et d’exécution
Processus : Exécutez l’application comme un ou plusieurs processus sans état


# Les 12 facteurs des applications Cloud


Notes:
I. Base de codeUne base de code suivie avec un système de contrôle de version, plusieurs déploiementsII. DépendancesDéclarez explicitement et isolez les dépendancesIII. ConfigurationStockez la configuration dans l’environnement ===> ConfigMap, Secrets, Consul, …

IV. Services externesTraitez les services externes comme des ressources attachéesV. Build, release, runSéparez strictement les étapes d’assemblage et d’exécutionVI. ProcessusExécutez l’application comme un ou plusieurs processus sans étatVII. Associations de portsExportez les services via des associations de portsVIII. ConcurrenceGrossissez à l’aide du modèle de processusIX. JetableMaximisez la robustesse avec des démarrages rapides et des arrêts gracieuxX. Parité dev/prodGardez le développement, la validation et la production aussi proches que possibleXI. LogsTraitez les logs comme des flux d’évènementsXII. Processus d’administrationLancez les processus d’administration et de maintenance comme des one-off-processes



##==##
<!-- .slide:-->

Associations de ports : Exportez les services via des associations de ports
VIII. Concurrence : Grossissez à l’aide du modèle de processus
IX. Jetable : Maximisez la robustesse avec des démarrages rapides et des arrêts gracieux
X. Parité dev/prod : Gardez le développement, la validation et la production aussi proches que possible
XI. Logs : Traitez les logs comme des flux d’évènements
XII. Processus d’administration : Lancez les processus d’administration et de maintenance comme des one-off-processes



# Les 12 facteurs des applications Cloud


Notes:
I. Base de codeUne base de code suivie avec un système de contrôle de version, plusieurs déploiementsII. DépendancesDéclarez explicitement et isolez les dépendancesIII. ConfigurationStockez la configuration dans l’environnement ===> ConfigMap, Secrets, Consul, …

IV. Services externesTraitez les services externes comme des ressources attachéesV. Build, release, runSéparez strictement les étapes d’assemblage et d’exécutionVI. ProcessusExécutez l’application comme un ou plusieurs processus sans étatVII. Associations de portsExportez les services via des associations de portsVIII. ConcurrenceGrossissez à l’aide du modèle de processusIX. JetableMaximisez la robustesse avec des démarrages rapides et des arrêts gracieuxX. Parité dev/prodGardez le développement, la validation et la production aussi proches que possibleXI. LogsTraitez les logs comme des flux d’évènementsXII. Processus d’administrationLancez les processus d’administration et de maintenance comme des one-off-processes



##==##
<!-- .slide:-->

Creer un conteneur/pod/deploiement pour acceder au service hello-namespaces dans le namespace “tony”
trigger le endpoint /hello/mon-nom sur le port 443


# TP: Namespaces


Notes:
I. Base de codeUne base de code suivie avec un système de contrôle de version, plusieurs déploiementsII. DépendancesDéclarez explicitement et isolez les dépendancesIII. ConfigurationStockez la configuration dans l’environnement ===> ConfigMap, Secrets, Consul, …

IV. Services externesTraitez les services externes comme des ressources attachéesV. Build, release, runSéparez strictement les étapes d’assemblage et d’exécutionVI. ProcessusExécutez l’application comme un ou plusieurs processus sans étatVII. Associations de portsExportez les services via des associations de portsVIII. ConcurrenceGrossissez à l’aide du modèle de processusIX. JetableMaximisez la robustesse avec des démarrages rapides et des arrêts gracieuxX. Parité dev/prodGardez le développement, la validation et la production aussi proches que possibleXI. LogsTraitez les logs comme des flux d’évènementsXII. Processus d’administrationLancez les processus d’administration et de maintenance comme des one-off-processes


