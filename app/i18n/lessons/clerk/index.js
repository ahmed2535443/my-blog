import lesson01 from "./01-what-is-clerk";
import lesson02 from "./02-setup-with-nextjs";
import lesson03 from "./03-sign-in-sign-up";
import lesson04 from "./04-protecting-routes";
import lesson05 from "./05-user-and-sessions";
import lesson06 from "./06-clerk-final-project";

const clerkLessons = {
  "01-what-is-clerk": lesson01,
  "02-setup-with-nextjs": lesson02,
  "03-sign-in-sign-up": lesson03,
  "04-protecting-routes": lesson04,
  "05-user-and-sessions": lesson05,
  "06-clerk-final-project": lesson06,
};

export function getClerkLessonTranslation(slug, lang) {
  const lesson = clerkLessons[slug];
  if (!lesson) return null;
  return lesson[lang] || lesson.en;
}

export default clerkLessons;
