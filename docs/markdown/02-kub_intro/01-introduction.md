<!-- .slide:-->

## Introduction > **Produit Open-source**
![float-left h-300](./assets/images/K8S-logo.png)
* <https://github.com/kubernetes/kubernetes>

  * **113k+** stars
  * **3.7k+** contributeurs
* Premier projet intégré à la création de la CNCF en Juillet 2015

##==##
## Introduction > **Cloud Native Computing Foundation**
![](./assets/images/cncf-orchestrator.png)
[landscape.cncf.io](https://landscape.cncf.io)

* Fondée en 2015, c'est une organisation à but non lucratif, ayant pour mission de favoriser l'adoption des technologies tournant autour du Cloud.
  * heberge de nombreux projets open source
  * organise des evenements (kubecon)
  * propose des certifications

##==##
## Introduction > **Apercu**
![center h-800](./assets/images/archi-kube.png)

<!-- .element: class="credits" -->

Notes:
Parler à minima des pods pour permettre de répondre à la question du quizz

Kubernetes réecrit en Go par les Googlers

Offert à la Cloud Native Computing Foundation en 2015

Kubernetes n’est qu’un outils parmi tous les outils pouvant vous aider à créer des architectures “
Cloud-Natives
”

La
Fondation Linux
(en anglais
Linux Foundation
) est un
consortium
à but non lucratif fondé le
21

janvier

2007
, a pour mission de protéger et standardiser
Linux
en procurant les ressources et services centralisés, la Linux Foundation regroupe 70 membres.

##==##
## Introduction > **Les versions (semver)**
Pour nommer ses versions, Kubernetes utilise du semantic versioning (x.y.z)
* *x* est le numéro de la version **majeure**
* *y* est l'incrément de la version **mineure**
* *z* est le niveau de **correctif**

Lors de montée de version, l'api de kubernetes est enrichie, et rares sont les endpoints qui sont supprimés. Une montée de version est donc rarement risquée.
* La version 1.32.1 est la dernière en date (14.01.2025)
* Une version mineur sort tous les 4 mois.
* Si une api devient dépréciée, elle est retirée au bout d'un an (soit 4 versions plus tard).

##==##


<!-- .slide: class="two-column" -->
## Introduction > **Kubernetes, pour quoi faire ?**

![w-600](./assets/images/kub-for-what.svg)

##--##

<br><br>

- **Orchestration automatisée** : Peu d'actions manuelles.
- **Haute disponibilité** : Répartition de charge et relance automatique.
- **Scalabilité** : Possibilité de faire du scaling automatique.
- **Portabilité** : Déploiement quasi identique entre on premise et les différents cloud.
- **Gestion déclarative** : Avoir l'ensemble de ses déploiements as code.
- **Écosystème riche** : Énormément d'outils/extensions et communauté active.

Notes:
Orchestration de containers dans un cluster de machines

“barreur d'un navire” en grec

##==##

<!-- .slide: class="exercice" -->
## Quiz

<br>

_Question_ : Lequel de ces runtimes n'est pas supporté dans Kubernetes ?

<br>

1. Containerd
2. Cri-o
3. gvisor
4. runtime java

##==##

<!-- .slide: class="exercice" -->

## Quiz

<br>

_Question_ : Lequel de ces runtimes n'est pas supporté dans Kubernetes ?

<br>

1. Containerd
2. Cri-o
3. gvisor
4. **runtime java**

##==##
<!-- .slide: class="exercice" -->
## Quiz

<br>

_Question_ : Dans quel langage est développé Kubernetes ?

<br>

1. C++
2. Java
3. Golang
4. PHP

##==##

<!-- .slide: class="exercice" -->

## Quiz

<br>

_Question_ : Dans quel langage est développé Kubernetes ?

<br>

1. C++
2. Java
3. **Golang**
4. PHP

##==##
<!-- .slide: class="exercice" -->
## Quiz

<br>

_Question_ : Quel est le rôle principal d'un "Pod" dans Kubernetes ?

<br>

1. Stocker des données persistantes
2. Exécuter un ou plusieurs conteneurs
3. Gérer le réseau du cluster
4. Orchestrer les déploiements

##==##

<!-- .slide: class="exercice" -->

## Quiz

<br>

_Question_ : Quel est le rôle principal d'un "Pod" dans Kubernetes ?

<br>

1. Stocker des données persistantes
2. **Exécuter un ou plusieurs conteneurs**
3. Gérer le réseau du cluster
4. Orchestrer les déploiements

##==##
<!-- .slide: class="exercice" -->
## Quiz

<br>

_Question_ : Quelle commande utiliser pour obtenir des informations sur les pods en cours d'exécution

<br>

1. kubectl get pods
2. kubernetes list pods
3. k8s show pods
4. kube-ctl pods info

##==##

<!-- .slide: class="exercice" -->

## Quiz

<br>

_Question_ : Quelle commande utiliser pour obtenir des informations sur les pods en cours d'exécution

<br>

1. **kubectl get pods**
2. kubernetes list pods
3. k8s show pods
4. kube-ctl pods info
