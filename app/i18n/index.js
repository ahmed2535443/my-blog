import ar from "./ar";
import en from "./en";
import fr from "./fr";
import de from "./de";

const translations = { ar, en, fr, de };

export function getTranslation(lang) {
  return translations[lang] || translations.ar;
}

export const supportedLanguages = ["ar", "en", "fr", "de"];

export default translations;
