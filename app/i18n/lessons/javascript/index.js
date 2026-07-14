import lesson01 from "./01-introduction-to-js";
import lesson02 from "./02-conditionals-functions-scopes";
import lesson03 from "./03-arrays-and-objects";
import lesson04 from "./04-modules-and-async";
import lesson05 from "./05-array-and-object-methods";
import lesson06 from "./06-dom-and-events";
import lesson07 from "./07-javascript-final-project";

const jsLessons = {
  "01-introduction-to-js": lesson01,
  "02-conditionals-functions-scopes": lesson02,
  "03-arrays-and-objects": lesson03,
  "04-modules-and-async": lesson04,
  "05-array-and-object-methods": lesson05,
  "06-dom-and-events": lesson06,
  "07-javascript-final-project": lesson07,
};

export function getJsLessonTranslation(slug, lang) {
  const lesson = jsLessons[slug];
  if (!lesson) return null;
  return lesson[lang] || lesson.en;
}

export default jsLessons;
