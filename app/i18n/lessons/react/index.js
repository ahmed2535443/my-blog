import translations01 from "./01-introduction-to-react";
import translations02 from "./02-components-and-props";
import translations03 from "./03-state-and-hooks";
import translations04 from "./04-useEffect";
import translations05 from "./05-server-components";
import translations06 from "./06-server-actions";
import translations07 from "./07-custom-hooks";
import translations08 from "./08-context-api";
import translations09 from "./09-react-final-project";

const reactTranslations = {
  "01-introduction-to-react": translations01,
  "02-components-and-props": translations02,
  "03-state-and-hooks": translations03,
  "04-useEffect": translations04,
  "05-server-components": translations05,
  "06-server-actions": translations06,
  "07-custom-hooks": translations07,
  "08-context-api": translations08,
  "09-react-final-project": translations09,
};

export function getReactLessonTranslation(slug, lang) {
  const translations = reactTranslations[slug];
  if (!translations) {
    throw new Error(`React lesson not found: ${slug}`);
  }
  return translations[lang] || translations.en;
}
