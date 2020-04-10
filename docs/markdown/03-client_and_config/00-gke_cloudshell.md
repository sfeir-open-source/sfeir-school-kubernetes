<!-- .slide: data-background="./assets/images/03-client_config/bg_start_config.jpg" class="transition blue bg-white" -->

# Démarrage et configuration

##==##
<!-- .slide: data-type-show="full" class="center"-->

# Créer un cluster GKE

<br>
<br>
<br>

**G**oogle **K**ubernetes **E**ngine

<br>

Démonstration en direct

Notes:
Créer un cluster en 3 clics depuis la Console GCP

Montrer les options disponibles depuis l’interface graphique :
- version Kubernetes
- taille de VM
- type d’OS (COS ou Ubuntu)
- activation Stackdriver Monitoring / Logging
- ...

**Note : ne pas démontrer ici les avantages de GKE vs K8S natif**


##==##
<!-- .slide: data-type-show="full"-->

# Cloud Shell

- Machine Virtuelle (VM) _Compute Engine_ gratuite
- Cloud SDK, docker, kubectl, git, ... pré-installés
- _“Boost mode”_

Notes:
Avantages Cloud Shell :
- Gratuit, accessible depuis un navigateur
- 5Go de stockage persistant dans /home
- Toujours accessible avec un simple navigateur web

- Outils pour GCP et pour docker/kubernetes déjà installés

- Le “Boost mode” permet d’avoir une VM plus performante (n1-standard-1)