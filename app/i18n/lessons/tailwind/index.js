import lesson01 from "./01-what-is-tailwind";
import lesson02 from "./02-setup-with-nextjs";
import lesson03 from "./03-layout-and-sizing";
import lesson04 from "./04-typography-colors-effects";
import lesson05 from "./05-responsive-dark-states";
import lesson06 from "./06-dashboard-project";

const tailwindLessons = {
  "01-what-is-tailwind": lesson01,
  "02-setup-with-nextjs": lesson02,
  "03-layout-and-sizing": lesson03,
  "04-typography-colors-effects": lesson04,
  "05-responsive-dark-states": lesson05,
  "06-dashboard-project": lesson06,
};

export function getTailwindLessonTranslation(slug, lang) {
  const lesson = tailwindLessons[slug];
  if (!lesson) return null;
  return lesson[lang] || lesson.en;
}

export default tailwindLessons;
