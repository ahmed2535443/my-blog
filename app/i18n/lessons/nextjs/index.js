import lesson01 from "./01-introduction-to-nextjs";
import lesson02 from "./02-routing-layouts-pages";
import lesson03 from "./03-server-and-client-components";
import lesson04 from "./04-data-fetching-and-streaming";
import lesson05 from "./05-server-actions-and-forms";
import lesson06 from "./06-cache-components";
import lesson07 from "./07-error-handling";
import lesson08 from "./08-images-fonts-metadata";
import lesson09 from "./09-route-handlers-and-proxy";
import lesson10 from "./10-nextjs-final-project";

const nextjsLessons = {
  "01-introduction-to-nextjs": lesson01,
  "02-routing-layouts-pages": lesson02,
  "03-server-and-client-components": lesson03,
  "04-data-fetching-and-streaming": lesson04,
  "05-server-actions-and-forms": lesson05,
  "06-cache-components": lesson06,
  "07-error-handling": lesson07,
  "08-images-fonts-metadata": lesson08,
  "09-route-handlers-and-proxy": lesson09,
  "10-nextjs-final-project": lesson10,
};

export function getNextjsLessonTranslation(slug, lang) {
  const lesson = nextjsLessons[slug];
  if (!lesson) return null;
  return lesson[lang] || lesson.en;
}

export default nextjsLessons;
