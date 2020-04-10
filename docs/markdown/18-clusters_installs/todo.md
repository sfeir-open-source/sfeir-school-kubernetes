
##==##
<!-- .slide:-->

# Méthodes d’installation de clusters


##==##
<!-- .slide:-->

# Installation du k8s : développement 


Docker for (Mac|Windows)
Installation manuelle “k8s the hard way”
Quid du réseau? 
Sécurité first
Kops


Notes:
“The hard way“ : pour les très courageux : comment installer un cluster k8s complémente à la main. (très intéressant pour comprendre k8s mais très peu recommandé)

Docker for (Mac|Windows) : “minikube” intégré dans la version desktop de docker (à activer manuellement)

Kops : cli pour créer un cluster k8s sur des VMs chez des cloud provider AWS, GCE 





##==##
<!-- .slide:-->

# Installation du cluster : production 


On premise 
Kubeadm
Cloud
GKE (Google)
AKS	(Azure)
EKS  (AWS)
OVH
….


Notes:


Kubeadm : la version préconisée aujourd’hui pour une installation on premise

Kubernetes Managé : GCP, Amazon, Azure, mais aussi Digital Ocean, OVH (and counting…)


