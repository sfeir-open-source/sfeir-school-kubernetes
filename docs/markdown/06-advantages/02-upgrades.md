<!-- .slide:-->

# Les avantages > **Les mises à jour applicatives**

Il existe plusieurs méthodes de mise à jour des applications dans Kubernetes. L'idée principale est que celle-ci soit la plus fluide possible.
* Rolling update
* Canary deployment
* Blue / Green deployment
* Recreate

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les avantages > Les mises à jour applicatives > **Rolling update**

```yaml
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 25%
      maxSurge: 25%
```

C'est la stratégie de mise à jour par défaut.
1. Un pod avec la nouvelle version est créé.
2. Une fois le pod à l'état **running**, un pod de l'ancienne version est supprimé.
3. Les étapes 1. et 2. sont répétées jusqu'à ce que chaque pod soit dans la nouvelle version.

![sfeir-icons](alert-triangle)<!-- .element: style="--icon-size:48px; --icon-color:red;" --> Les deux versions cohabitent briévement.

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Les avantages > Les mises à jour applicatives > **Recreate**

Stratégie implémentée dans Kubernetes. Utile si les versions ne peuvent cohabiter. Temps d'arrêt entre la suppression et la création.
1. Les pods sont détruits.
2. Les pods sont recréés en nouvelle version.

```yaml
spec:
  strategy:
    type: Recreate
```

##==##

<!-- .slide: class="two-column" -->

# Les avantages > Les mises à jour applicatives > **Blue / Green deployment**

Stratégie non native à Kubernetes. Le principe est de déployer deux versions en parallèle de l'application, mais une seule reçoit le trafic. Pas de temps d'arrêt lors de la bascule de service.
1. Une deuxième version de l'application est lancée.
2. Bascule du trafic vers la version 2.
3. Rebascule le trafic vers la version 1 si nécessaire.

##--##

<br><br><br>

![center h-550](./assets/images/blue-green.png)

##==##

<!-- .slide: class="two-column" -->

# Les avantages > Les mises à jour applicatives > **Canary deployment**

![center h-700](./assets/images/canary.png)

##--##

<br><br>

Stratégie non native à Kubernetes. Le principe est de déployer deux versions en parallèle de l'application. Le trafic est routé par exemple à 10% sur la v2 alors que 90% est encore envoyé vers la v1.
1. Une deuxième version de l'application est lancée.
2. Envoi d'une petite partie du trafic vers la v2.
3. En cas de soucis, on envoie tout le trafic vers la v1, sinon, on bascule progressivement vers la v2.

