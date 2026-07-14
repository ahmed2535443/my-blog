import thinkingPatterns from "./01-thinking-patterns";
import arraysStrings from "./02-arrays-strings";
import hashMapSets from "./03-hash-maps-sets";
import twoPointersSlidingWindow from "./04-two-pointers-sliding-window";
import recursionBacktracking from "./05-recursion-backtracking";
import sortingSearching from "./06-sorting-searching";
import treesGraphs from "./07-trees-graphs";
import dynamicProgramming from "./08-dynamic-programming";
import stackQueue from "./09-stack-queue";
import interviewMix from "./10-interview-mix";

const problemSolvingLessons = {
  "01-thinking-patterns": thinkingPatterns,
  "02-arrays-strings": arraysStrings,
  "03-hash-maps-sets": hashMapSets,
  "04-two-pointers-sliding-window": twoPointersSlidingWindow,
  "05-recursion-backtracking": recursionBacktracking,
  "06-sorting-searching": sortingSearching,
  "07-trees-graphs": treesGraphs,
  "08-dynamic-programming": dynamicProgramming,
  "09-stack-queue": stackQueue,
  "10-interview-mix": interviewMix,
};

export function getProblemSolvingLessonTranslation(slug, lang = "en") {
  const lesson = problemSolvingLessons[slug];
  if (!lesson) return null;
  return lesson[lang] || lesson.en;
}

export default problemSolvingLessons;
