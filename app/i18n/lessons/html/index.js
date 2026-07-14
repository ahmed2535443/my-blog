import lesson01 from "./01-introduction-to-html";
import lesson02 from "./02-elements-and-text";
import lesson03 from "./03-attributes-and-tables";
import lesson04 from "./04-links-and-images";
import lesson05 from "./05-forms";
import lesson06 from "./06-semantic-html";
import lesson07 from "./07-accessibility";
import lesson08 from "./08-html-final-project";

const htmlLessons = {
  "01-introduction-to-html": lesson01,
  "02-elements-and-text": lesson02,
  "03-attributes-and-tables": lesson03,
  "04-links-and-images": lesson04,
  "05-forms": lesson05,
  "06-semantic-html": lesson06,
  "07-accessibility": lesson07,
  "08-html-final-project": lesson08,
};

export function getHtmlLessonTranslation(slug, lang) {
  const lesson = htmlLessons[slug];
  if (!lesson) return null;
  return lesson[lang] || lesson.en;
}

export default htmlLessons;
