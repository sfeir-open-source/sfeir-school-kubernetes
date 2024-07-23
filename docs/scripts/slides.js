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
  ];
}

function resources() {
  const directory = '05-resources/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-pods.md`, //
    `${directory}02-secret_configmap.md`, //
    `${directory}03-labels_selectors.md`, //
    `${directory}04-service.md`, //
    `${directory}05-deployment.md`, //
    `${directory}06-ingress.md`, //
    `${directory}07-all_together.md`, //
  ];
}

function advantages() {
  const directory = '06-advantages/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-liveness_readiness.md`, //
    `${directory}02-upgrades.md`, //
    `${directory}03-upscale_auto.md`, //
  ];
}

function storeData() {
  const directory = '07-store_data/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-store_data.md`, //
  ];
}

function after() {
  const directory = '08-after/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-other_resources.md`, //
    `${directory}02-certifications.md`, //
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
    ...advantages(), //
    ...storeData(), //
    ...after(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
