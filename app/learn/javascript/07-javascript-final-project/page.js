"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/javascript/07-javascript-final-project";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [2], fr: [2], de: [2] };

const challengeCode = `// تحدي 1: ترتيب الطلاب
const sortByAverage = (studentsList) => {
  return [...studentsList].sort((a, b) => b.average - a.average);
};

// تحدي 2: تجميع حسب القسم
const groupByDepartment = (studentsList) => {
  return studentsList.reduce((groups, student) => {
    const key = student.department;
    if (!groups[key]) groups[key] = [];
    groups[key].push(student);
    return groups;
  }, {});
};

// تحدي 3: تصدير CSV
const exportToCSV = (studentsList) => {
  const header = "الاسم,المعدل,التسمية,القسم";
  const rows = studentsList.map(s =>
    \`\${s.name},\${s.average},\${s.gradeLabel},\${s.department}\`
  );
  return [header, ...rows].join("\\n");
};

// تحدي 4: التحقق من الدرجات
const validateGrades = (studentsList) => {
  return studentsList.flatMap((student, si) =>
    student.grades
      .map((grade, gi) => ({ student: student.name, gradeIndex: gi, grade }))
      .filter(g => g.grade < 0 || g.grade > 100)
      .map(g => ({ ...g, error: g.grade > 100 ? "الدرجة أعلى من 100" : "الدرجة أقل من 0" }))
  );
};

// تحدي 5: البحث المتقدم
const advancedSearch = (studentsList, criteria) => {
  return studentsList.filter(s => {
    if (criteria.name && !s.name.includes(criteria.name)) return false;
    if (criteria.department && !s.department.includes(criteria.department)) return false;
    if (criteria.status && s.status !== criteria.status) return false;
    if (criteria.minAverage && s.average < criteria.minAverage) return false;
    return true;
  });
};`;

const cheatSheetData = {
  en: {
    title: "Student Management System - Complete Reference",
    items: [
      { label: "Data Enrichment", description: "calculateAverage(grades) using reduce | getGradeLabel(average) using if/else | enrichStudent(student) using spread" },
      { label: "Search and Filter", description: "getActiveStudents() using filter | getTopStudents() using filter | findByName() using find | searchStudents() using filter with includes" },
      { label: "Statistics", description: "getStatistics() using reduce to build complete stats object with count, average, highest, lowest, active" },
      { label: "Data Management", description: "addStudent() using spread | removeStudent() using filter | updateGrades() using map with spread" },
      { label: "Async Patterns", description: "fetchStudentsFromAPI() using Promise | async/await with try/catch/finally | processStudentData() combining map, reduce, async" },
    ],
  },
  fr: {
    title: "Système de Gestion d'Étudiants - Référence Complète",
    items: [
      { label: "Enrichissement", description: "calculateAverage(grades) avec reduce | getGradeLabel(average) avec if/else | enrichStudent(student) avec spread" },
      { label: "Recherche et Filtrage", description: "getActiveStudents() avec filter | getTopStudents() avec filter | findByName() avec find | searchStudents() avec filter" },
      { label: "Statistiques", description: "getStatistics() avec reduce pour construire l'objet complet" },
      { label: "Gestion des Données", description: "addStudent() avec spread | removeStudent() avec filter | updateGrades() avec map" },
      { label: "Patterns Async", description: "fetchStudentsFromAPI() avec Promise | async/await avec try/catch/finally" },
    ],
  },
  de: {
    title: "Schülerverwaltungssystem - Vollständige Referenz",
    items: [
      { label: "Datenanreicherung", description: "calculateAverage(grades) mit reduce | getGradeLabel(average) mit if/else | enrichStudent(student) mit spread" },
      { label: "Suche und Filterung", description: "getActiveStudents() mit filter | getTopStudents() mit filter | findByName() mit find | searchStudents() mit filter" },
      { label: "Statistiken", description: "getStatistics() mit reduce zum Erstellen des vollständigen Stats-Objekts" },
      { label: "Datenverwaltung", description: "addStudent() mit spread | removeStudent() mit filter | updateGrades() mit map" },
      { label: "Async-Muster", description: "fetchStudentsFromAPI() mit Promise | async/await mit try/catch/finally" },
    ],
  },
};

function renderContent(item) {
  if (item.type === "p") return <p dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "li") return <li dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "ol") return <ol dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "callout") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>💡 {item.title}:</p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  if (item.type === "callout-accent") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>✅ {item.title}:</p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  if (item.type === "callout-primary") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>🔍 {item.title}:</p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  return null;
}

export default function JavaScriptFinalProject() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("javascript", "07-javascript-final-project");
  const content = rawTranslations[lang] || rawTranslations.en;

  if (!content) return null;

  const answers = correctAnswers[lang] || correctAnswers.en;
  const cs = cheatSheetData[lang] || cheatSheetData.en;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        {content.sections.map((section, i) => (
          <LessonSection key={i} title={section.title}>
            {section.content.map((item, j) => (
              <div key={j}>{renderContent(item)}</div>
            ))}
          </LessonSection>
        ))}

        {content.quiz && content.quiz.map((q, i) => (
          <Quiz
            key={i}
            question={q.question}
            options={q.options}
            correctAnswer={answers[i]}
            explanation={q.explanation}
          />
        ))}

        {content.challenge && (
          <Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>
            <CodeBlock language="javascript" code={challengeCode} />
          </Challenge>
        )}

        <CheatSheet title={cs.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.items.map((item, i) => (
              <div key={i}>
                <p className="font-bold" style={{ color: "var(--primary)" }}>{item.label}</p>
                <p className="text-sm" style={{ color: "var(--foreground)" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </CheatSheet>

        <LessonNavigation
          prevLesson={lessonInfo.prevLesson}
          prevStage={lessonInfo.prevLessonStage}
          nextLesson={lessonInfo.nextLesson}
          nextStage={lessonInfo.nextLessonStage}
        />
      </div>
    </div>
  );
}
