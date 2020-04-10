// One method per module
function schoolSlides() {
  return ['00-school/00-TITLE.md',
  '00-school/speaker-tproum.md',
  '00-school/speaker-ameausoone.md', 
  '00-school/about.md'];
}

// module 01 - docker slides
function dockerSlides() {
  return ['01-docker_reminders/00-reminders.md'
  ];
}

// declare slides MD for module 04 - internal architecture 
function internalArchitectureSlides() {
  return ['04-internal_architecture/...'];
}

// declare slides MD for module 05 - getting started 
function gettingStartedSlides() {
  return ['05-getting_started/...'];
}

// declare slides MD for module 06 - interact with pods 
function interactWithPodsSlides() {
  return ['06-interact_with_pods/...'];
}

// declare slides MD for module 07 - pod monitoring 
function podMonitoringSlides() {
  return ['07-pod_monitoring/...'];
}

// declare slides MD for module 08 - applications configuration 
function applicationsConfigurationSlides() {
  return ['08-applications_configuration/...'];
}

// declare slides MD for module 09 - deploy, expose, manually scale pod
function deployExposeScaleSlides() {
  return ['09-expose_pod/...'];
}

// declare slides MD for module 10 - rolling upgrade 
function rollingUpgradeSlides() {
  return ['10-rolling_upgrade/...'];
}

// declare slides MD for module 11 - pod auto-scaling 
function podAutoscalingSlides() {
  return ['11-pod_autoscaling/...'];
}

// declare slides MD for module 12 - expose with ingress 
function exposeWithIngressSlides() {
  return ['12-expose_with_ingress/...'];
}

// declare slides MD for module 13 - volumes 
function volumesSlides() {
  return ['13-volumes/...'];
}

// declare slides MD for module 14 - advanced management 
function advancedManagementSlides() {
  return ['14-advanced_management/...'];
}

// declare slides MD for module 15 - templating 
function templatingSlides() {
  return ['15-templating/...'];
}

// declare slides MD for module 16 - security 
function securitySlides() {
  return ['16-security/...'];
}

// declare slides MD for module 17 - monitoring 
function monitoringSlides() {
  return ['17-monitoring/...'];
}

// declare slides MD for module 18 - clusters installs 
function clustersInstallsSlides() {
  return ['18-clusters_installs/...'];
}

// declare slides MD for module 19 - service mesh 
function serviceMeshSlides() {
  return ['19-service_mesh/...'];
}

// declare slides MD for module 20 - micro service design 
function microServiceDesignSlides() {
  return ['20-micro_service_design/...'];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...dockerSlides(), //
    //...internalArchitectureSlides(), //
    //...gettingStartedSlides(), //
    //...interactWithPodsSlides(), //
    //...podMonitoringSlides(), //
    //...applicationsConfigurationSlides(), //
    //...deployExposeScaleSlides(), //
    //...rollingUpgradeSlides(), //
    //...podAutoscalingSlides(), //
    //...exposeWithIngressSlides(), //
    //...volumesSlides(), //
    //...advancedManagementSlides(), //
    //...templatingSlides(), //
    //...securitySlides(), //
    //...monitoringSlides(), //
    //...clustersInstallsSlides(), //
    //...serviceMeshSlides(), //
    //...microServiceDesignSlides(), //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
