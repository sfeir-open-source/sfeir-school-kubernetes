// One method per module
function schoolSlides() {
  return ['00-school/00-TITLE.md',
  '00-school/speaker-tproum.md',
  '00-school/speaker-ameausoone.md', 
  '00-school/about.md'];
}

// module 01 - docker slides
function dockerSlides() {
  return ['01-docker_reminders/00-reminders.md'];
}

// slides about 02 - k8s origins module
function kubeOriginsSlides() {
  return [
    '02-k8s_origins/00-origins.md',
    '02-k8s_origins/01-overview.md'
  ];
}



function formation() {
  return [
    //
    ...schoolSlides(), //
    ...dockerSlides(), //
    ...kubeOriginsSlides()
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
