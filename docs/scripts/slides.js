import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

function schoolSlides() {
  const directory = '00-school/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}speaker-btouron.md`, //
    `${directory}speaker-jfurgerot.md`, //
    `${directory}speaker-lalhossri.md`, //
    `${directory}01-intro.md`, //
  ];
}

function dockerReminders() {
  const directory = '01-docker_reminders/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-reminders.md`, //
  ];
}

function kubIntro() {
  const directory = '02-kub_intro/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-introduction.md`, //
  ];
}

function kubCluster() {
  const directory = '03-kub_cluster/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-kub_cluster.md`, //
  ];
}

function clusterInteraction() {
  const directory = '04-cluster_interaction/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-cluster_interaction.md`, //
    `${directory}02-namespace.md`, //
    `${directory}03-resources.md`, //
    `${directory}04-pods.md`, //
    `${directory}05-liveness_readiness.md`, //
  ];
}

function resources() {
  const directory = '05-resources/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-secret_configmap.md`, //
    `${directory}02-service.md`, //
    `${directory}03-replicaset.md`, //
    `${directory}04-deployment.md`, //
    `${directory}05-label_game.md`, //
  ];
}

function upscale() {
  const directory = '07-upscale/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-upscale.md`, //
    `${directory}02-upscale_auto.md`, //
    `${directory}03-ingress.md`, //
  ];
}

function storeData() {
  const directory = '08-store_data/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-store_data.md`, //
  ];
}

function advancedPods() {
  const directory = '09-advanced_pods/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-advanced_pods.md`, //
    `${directory}02-template.md`, //
    `${directory}03-security.md`, //
    `${directory}04-monitoring.md`, //
  ];
}

function installation() {
  const directory = '10-installation/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-installation.md`, //
    `${directory}02-service_mesh.md`, //
    `${directory}03-micro_service.md`, //
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...dockerReminders(), //
    ...kubIntro(), //
    ...kubCluster(), //
    ...clusterInteraction(), //
    ...resources(), //
    ...upscale(), //
    ...storeData(), //
    ...advancedPods(), //
    ...installation(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
