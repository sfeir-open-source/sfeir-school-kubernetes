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

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...dockerSlides() //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
