// One method per module
function schoolSlides() {
  return ['00-school/00-TITLE.md',
  '00-school/speaker-tproum.md',
  '00-school/speaker-ameausoone.md', 
  '00-school/about.md'];
}

function formation() {
  return [
    //
    ...schoolSlides() //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
