<!-- .slide: class="transition-bg-sfeir-3"-->

# Namespace

##==##

<!-- .slide:-->

# Namespace

- Espace de nom pour isoler les ressources
- Peut être utilisé pour séparer les environnements (soft multi-tenant)
- Le nom d’une ressource est unique au sein d’un namespace.
- Par défaut:
  - default
  - kube-system
  - kube-public

Notes:
nom de ressource unique dans un namespace
(mais pas au sein d’un cluster)

default : namespace de travail par défaut

kube-system : namespace pour les déploiements internes au cluster

kube-public : namespace créé par défaut pour les ressources exposés publiquement

##==##

<!-- .slide: class="transition-bg-sfeir-2"-->

# TP : Configurer kubectl

##==##

<!-- .slide: class="exercice"-->

# TP : Configurer kubectl

## LAB

https://killercoda.com/laurental/scenario/1-kubectl