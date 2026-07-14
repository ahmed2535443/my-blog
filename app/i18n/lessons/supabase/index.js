import lesson01 from "./01-what-is-supabase";
import lesson02 from "./02-setup-with-nextjs";
import lesson03 from "./03-database-and-crud";
import lesson04 from "./04-row-level-security";
import lesson05 from "./05-storage-and-realtime";
import lesson06 from "./06-supabase-final-project";

const supabaseLessons = {
  "01-what-is-supabase": lesson01,
  "02-setup-with-nextjs": lesson02,
  "03-database-and-crud": lesson03,
  "04-row-level-security": lesson04,
  "05-storage-and-realtime": lesson05,
  "06-supabase-final-project": lesson06,
};

export function getSupabaseLessonTranslation(slug, lang) {
  const lesson = supabaseLessons[slug];
  if (!lesson) return null;
  return lesson[lang] || lesson.en;
}

export default supabaseLessons;
