import projectPlanning from "./01-project-planning";
import setupAndStructure from "./02-setup-and-structure";
import databaseDesign from "./03-database-design";
import authAndLayout from "./04-auth-and-layout";
import crudOperations from "./05-crud-operations";
import dashboardAndAdmin from "./06-dashboard-and-admin";
import searchAndPagination from "./07-search-and-pagination";
import seoAndResponsive from "./08-seo-and-responsive";
import deployment from "./09-deployment";

const finalProjectLessons = {
  "01-project-planning": projectPlanning,
  "02-setup-and-structure": setupAndStructure,
  "03-database-design": databaseDesign,
  "04-auth-and-layout": authAndLayout,
  "05-crud-operations": crudOperations,
  "06-dashboard-and-admin": dashboardAndAdmin,
  "07-search-and-pagination": searchAndPagination,
  "08-seo-and-responsive": seoAndResponsive,
  "09-deployment": deployment,
};

export function getFinalProjectLessonTranslation(slug, lang = "en") {
  const lesson = finalProjectLessons[slug];
  if (!lesson) return null;
  return lesson[lang] || lesson.en;
}

export default finalProjectLessons;
