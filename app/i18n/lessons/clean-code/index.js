import translations01 from "./01-naming-conventions";
import translations02 from "./02-functions";
import translations03 from "./03-conditionals";
import translations04 from "./04-loops";
import translations05 from "./05-error-handling";
import translations06 from "./06-code-review";
import translations07 from "./07-clean-code-final-project";

const cleanCodeTranslations = {
  "01-naming-conventions": translations01,
  "02-functions": translations02,
  "03-conditionals": translations03,
  "04-loops": translations04,
  "05-error-handling": translations05,
  "06-code-review": translations06,
  "07-clean-code-final-project": translations07,
};

export function getCleanCodeLessonTranslation(slug, lang) {
  const translations = cleanCodeTranslations[slug];
  if (!translations) {
    throw new Error(`Clean Code lesson not found: ${slug}`);
  }
  return translations[lang] || translations.en;
}
