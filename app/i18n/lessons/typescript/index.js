import lesson01 from "./01-introduction-to-typescript";
import lesson02 from "./02-basic-types";
import lesson03 from "./03-interfaces-and-types";
import lesson04 from "./04-functions-and-generics";
import lesson05 from "./05-typescript-react";
import lesson06 from "./06-typescript-final-project";

const typescriptLessons = {
  "01-introduction-to-typescript": lesson01,
  "02-basic-types": lesson02,
  "03-interfaces-and-types": lesson03,
  "04-functions-and-generics": lesson04,
  "05-typescript-react": lesson05,
  "06-typescript-final-project": lesson06,
};

export function getTypeScriptLessonTranslation(slug, lang) {
  const lesson = typescriptLessons[slug];
  if (!lesson) return null;
  return lesson[lang] || lesson.en;
}

export default typescriptLessons;
