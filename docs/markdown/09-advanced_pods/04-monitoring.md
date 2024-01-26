<!-- .slide: class="transition-bg-sfeir-3"-->

# Monitoring

##==##

<!-- .slide:-->

# Monitoring : Prometheus

- Pull de métriques sur les applications.
- Inverse la logique de monitoring.

Notes:
Traditionnellement, les applications envoient leurs métriques à des systèmes centralisés. Cette façon de faire rend l'application responsable de cet envoi des métriques.
Dans une architecture cloud moderne, la logique est inversée pour faciliter ce monitoring.

Prometheus est un des outils qui implémente cette logique. Il va interroger périodiquement une URL sur vos applications pour lire vos métriques, puis envoyer ces métriques à une base de données spécialisée dans les séries temporelles. Cette base pourra être interrogée pour la surveillance des applications.
