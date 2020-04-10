<!-- .slide: class="with-code" -->

# kubectl

- Client Kubernetes en ligne de commande

<br>
<br>

- Astuces :
 - `kubectl version --short`
 - `kubectl completion -h`
 - `kubectl help <command>`
 - `kubectl explain [--recursive] <resource>`
 - `kubectl <verb> <resource>`


Notes:
Comme _Docker_, _Kubernetes_ s’utilise en mode _client-server_.

Le client s’appelle "**kubectl**" et appelle un composant du cluster appellé **apiserver**

**kubectl** intègre un mécanisme pour installer l’**auto-completion** des commandes dans bash et zsh

On a aussi accès à la doc des commandes 
et au format des ressources avec les sous-commandes **help** et **explain** 

...détaillé dans la suite


##==##
<!-- .slide: class="full-center"-->

# ~/.kube/config

![](./assets/images/03-client_config/kubeconfig.png)


Notes:
La configuration du client kubectl se fait dans le fichier _~/.kube/config_

Ce fichier répertorie les “contextes”, constituées du couple _Cluster_ et _User_, ainsi que le namespace courant sur ce cluster.

Sur GKE, la partie user est déléguée à un fournisseur d’authentification implémenté par la commande **gcloud** du Cloud SDK.

##==##
<!-- .slide: class="with-code" data-type-show="full"-->

# Contextes Kubernetes sur GKE

<br>
<br>

```bash
gcloud container clusters list
```
<!-- .element: class="big-code"-->

<br>


```bash
gcloud container clusters get-credentials \
    --zone europe-west1-a <mycluster>
```
<!-- .element: class="big-code"-->


Notes:
La seconde commande permet de créer le contexte kubectl correspondant à une instance GKE.

##==##
<!-- .slide: class="two-column-layout with-code"-->
# Changer de contexte


<div class="flex-row" style="align-items: start; justify-content: center;">

<div style="width:100%;" >

``` 
$ kubectl config get-contexts           #List contexts
$ kubectl config set-context gke-dev    #Update contexts
$ kubectl config view --minify=true     #Show current-context configuration
```
<!-- .element: style="font-size: 0.85em;" -->

</div>

<div style="width:46%;">

```yaml
apiVersion: v1
kind: Config
current-context: gke-context
contexts:
- name: gke-context
  context: 
    cluster: gke-cluster
    user: gke-user
clusters:
- name: gke-cluster
  cluster:
    server: https://12.34.56.78
```
<!-- .element: style="font-size: 0.8em; line-height:1.2em;" class="fragment fade-up"-->

</div>

<div style="width:49%;">

```yaml
users:
- name: gke-user
  user:
    auth-provider:
        name: gcp
        config:
            cmd-path: /usr/bin/gcloud
            cmd-args: config config-helper --format=json
            access-token: ya29.GlwXBuG[...]KcYlQ
[...]



```
<!-- .element: style="font-size:0.8em;  line-height:1.2em;" class="fragment fade-up"-->

</div>
</div>


Notes:
Exemple de fichier de config de kubectl (~/.kube/config).

On y retrouve les contextes, les clusters, les utilisateurs

On voit aussi l’utilisation de gcloud comme fournisseur d’authentification


##==##
<!-- .slide: class="with-code" -->

# Utilitaires autour de kubectl


<br>

- https://kubernetes.io/docs/tasks/tools/install-kubectl/#optional-kubectl-configurations

```
$ kubectl <TAB>     # autocompletion
```
<!-- .element: class="big-code"-->

<br>
<br>

- https://github.com/ahmetb/kubectx

```bash
$ kubectx gke-dev       # changer de contexte
$ kubens kube-system    # modifier le ns du contexte courant
```
<!-- .element: class="big-code"-->

##==##
<!-- .slide: class="with-code"  data-type-show="full"-->

# Utilitaires autour de kubectl

<br>

- ~800 kubectl aliases (bash/zsh): https://github.com/ahmetb/kubectl-aliases

```bash
$ kgpo      # kubectl get pod
```
<!-- .element: class="big-code"-->

<br>
<br>

- https://github.com/jonmosco/kube-ps1 : ![](./assets/images/03-client_config/g41f33631ff_0_58.png)
