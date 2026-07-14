import fundamentals from "./01-css-fundamentals";
import modernSelectors from "./02-modern-selectors";
import flexbox from "./03-flexbox";
import grid from "./04-css-grid";
import modernResponsive from "./05-modern-responsive";
import cssVariablesTheming from "./06-css-variables-theming";
import modernAnimations from "./07-modern-animations";
import cssFinalProject from "./08-css-final-project";

const cssLessons = {
  "01-css-fundamentals": fundamentals,
  "02-modern-selectors": modernSelectors,
  "03-flexbox": flexbox,
  "04-css-grid": grid,
  "05-modern-responsive": modernResponsive,
  "06-css-variables-theming": cssVariablesTheming,
  "07-modern-animations": modernAnimations,
  "08-css-final-project": cssFinalProject,
};

export function getCssLessonTranslation(slug, lang = "en") {
  const lesson = cssLessons[slug];
  if (!lesson) return null;
  return lesson[lang] || lesson.en;
}

export default cssLessons;
