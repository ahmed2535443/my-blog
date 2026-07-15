"use client";

import InterviewQuestions from "@/components/InterviewQuestions";
import TrickCard from "@/components/TrickCard";
import LibraryCard from "@/components/LibraryCard";

export default function LessonExtras({ content }) {
  if (!content) return null;

  return (
    <>
      {content.interviewQuestions && content.interviewQuestions.length > 0 && (
        <InterviewQuestions questions={content.interviewQuestions} />
      )}
      {content.tricks && content.tricks.length > 0 && (
        <TrickCard tricks={content.tricks} />
      )}
      {content.libraries && content.libraries.length > 0 && (
        <LibraryCard libraries={content.libraries} />
      )}
    </>
  );
}
