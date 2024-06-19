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

function kubOrigins() {
  const directory = '02-kub_origins/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-origins.md`, //
  ];
}

function firstView() {
  const directory = '03-first_view/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-first_view.md`, //
  ];
}

function internalArchitecture() {
  const directory = '04-internal_archi/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-internal_archi.md`, //
  ];
}

function gettingStarted() {
  const directory = '05-getting_started/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-getting_started.md`, //
    `${directory}02-namespace.md`, //
    `${directory}03-manifest.md`, //
    `${directory}04-interaction_obj.md`, //
    `${directory}05-interaction_pod.md`, //
    `${directory}06-liveness_readiness.md`, //
  ];
}

function configurationApp() {
  const directory = '06-configuration_app/';
  return [
    //
    `${directory}00-TITLE.md`, //
    `${directory}01-configuration_app.md`, //
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
    ...kubOrigins(), //
    ...firstView(), //
    ...internalArchitecture(), //
    ...gettingStarted(), //
    ...configurationApp(), //
    ...upscale(), //
    ...storeData(), //
    ...advancedPods(), //
    ...installation(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
