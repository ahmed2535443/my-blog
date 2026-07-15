"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clean-code/06-clean-code-final-project";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 0, 1], en: [1, 0, 1], fr: [1, 0, 1], de: [1, 0, 1] };

const codeBadCode = `// ❌ Unclean code - Student management system
function proc(d, t) {
  let r = [];
  for (let i = 0; i < d.length; i++) {
    if (t === "all") {
      r.push(d[i]);
    } else if (t === "passed") {
      if (d[i].s >= 50) {
        r.push(d[i]);
      }
    } else if (t === "failed") {
      if (d[i].s < 50) {
        r.push(d[i]);
      }
    } else if (t === "honors") {
      if (d[i].s >= 90) {
        r.push(d[i]);
      }
    }
  }
  return r;
}

function calc(d) {
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i].s;
  }
  let avg = sum / d.length;
  let status = "";
  if (avg >= 90) {
    status = "Excellent";
  } else if (avg >= 80) {
    status = "Very Good";
  } else if (avg >= 70) {
    status = "Good";
  } else if (avg >= 60) {
    status = "Passing";
  } else {
    status = "Failing";
  }
  return { avg: avg, status: status, count: d.length };
}

function rpt(d) {
  let result = [];
  for (let i = 0; i < d.length; i++) {
    result.push(d[i].n + ": " + d[i].s);
  }
  return result.join(", ");
}

// Usage
let students = [
  { n: "Ahmed", s: 95 },
  { n: "Sara", s: 87 },
  { n: "Mohamed", s: 45 },
  { n: "Fatma", s: 72 },
  { n: "Khaled", s: 38 },
];

let passed = proc(students, "passed");
let stats = calc(passed);
let report = rpt(passed);
console.log(stats);
console.log(report);`;

const codeStep2 = `// ✅ Clear descriptive names
function filterStudentsByType(students, filterType) {
  let filteredStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (filterType === "all") {
      filteredStudents.push(students[i]);
    } else if (filterType === "passed") {
      if (students[i].score >= PASSING_SCORE) {
        filteredStudents.push(students[i]);
      }
    } else if (filterType === "failed") {
      if (students[i].score < PASSING_SCORE) {
        filteredStudents.push(students[i]);
      }
    } else if (filterType === "honors") {
      if (students[i].score >= HONORS_SCORE) {
        filteredStudents.push(students[i]);
      }
    }
  }
  return filteredStudents;
}

function calculateStatistics(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].score;
  }
  let average = sum / students.length;
  let status = "";
  if (average >= 90) {
    status = "Excellent";
  } else if (average >= 80) {
    status = "Very Good";
  } else if (average >= 70) {
    status = "Good";
  } else if (average >= 60) {
    status = "Passing";
  } else {
    status = "Failing";
  }
  return { average: average, status: status, count: students.length };
}

function generateReportTable(students) {
  let html = "<table>";
  html += "<tr><th>Name</th><th>Score</th></tr>";
  for (let i = 0; i < students.length; i++) {
    html += "<tr><td>" + students[i].name + "</td><td>" + students[i].score + "</td></tr>";
  }
  html += "</table>";
  return html;
}

// Constants instead of magic numbers
const PASSING_SCORE = 50;
const HONORS_SCORE = 90;

const GRADE_THRESHOLDS = {
  excellent: 90,
  veryGood: 80,
  good: 70,
  passing: 60,
};`;

const codeStep3 = `// ✅ Unified filter function
function filterStudentsByType(students, filterType) {
  switch (filterType) {
    case "all":
      return students;
    case "passed":
      return students.filter(student => student.score >= PASSING_SCORE);
    case "failed":
      return students.filter(student => student.score < PASSING_SCORE);
    case "honors":
      return students.filter(student => student.score >= HONORS_SCORE);
    default:
      return students;
  }
}

// ✅ Unified statistics function
function calculateStatistics(students) {
  const average = calculateAverage(students);
  const status = determineGradeStatus(average);

  return {
    average: average,
    status: status,
    count: students.length,
  };
}

// ✅ Helper function for average
function calculateAverage(students) {
  const totalScore = students.reduce((sum, student) => sum + student.score, 0);
  return totalScore / students.length;
}

// ✅ Helper function for status
function determineGradeStatus(average) {
  if (average >= GRADE_THRESHOLDS.excellent) return "Excellent";
  if (average >= GRADE_THRESHOLDS.veryGood) return "Very Good";
  if (average >= GRADE_THRESHOLDS.good) return "Good";
  if (average >= GRADE_THRESHOLDS.passing) return "Passing";
  return "Failing";
}

// ✅ Function for single table row
function createStudentRow(student) {
  return "<tr><td>" + student.name + "</td><td>" + student.score + "</td></tr>";
}

// ✅ Function for complete report table
function generateReportTable(students) {
  const header = "<tr><th>Name</th><th>Score</th></tr>";
  const rows = students.map(createStudentRow).join("");
  return "<table>" + header + rows + "</table>";
}`;

const codeStep4 = `// ✅ Code after applying DRY
const PASSING_SCORE = 50;
const HONORS_SCORE = 90;
const GRADE_THRESHOLDS = {
  excellent: 90,
  veryGood: 80,
  good: 70,
  passing: 60,
};

function isScoreAboveThreshold(score, threshold) {
  return score >= threshold;
}

function filterStudentsByType(students, filterType) {
  const filterStrategies = {
    all: () => true,
    passed: (student) => isScoreAboveThreshold(student.score, PASSING_SCORE),
    failed: (student) => !isScoreAboveThreshold(student.score, PASSING_SCORE),
    honors: (student) => isScoreAboveThreshold(student.score, HONORS_SCORE),
  };

  const filterFn = filterStrategies[filterType];
  if (!filterFn) return students;

  return students.filter(filterFn);
}

function calculateAverage(students) {
  const totalScore = students.reduce((sum, student) => sum + student.score, 0);
  return totalScore / students.length;
}

function determineGradeStatus(average) {
  for (const [grade, threshold] of Object.entries(GRADE_THRESHOLDS)) {
    if (average >= threshold) {
      return grade === "excellent" ? "Excellent"
        : grade === "veryGood" ? "Very Good"
        : grade === "good" ? "Good"
        : "Passing";
    }
  }
  return "Failing";
}

function calculateStatistics(students) {
  const average = calculateAverage(students);
  const status = determineGradeStatus(average);
  return { average, status, count: students.length };
}

function createStudentRow(student) {
  return "<tr><td>" + student.name + "</td><td>" + student.score + "</td></tr>";
}

function generateReportTable(students) {
  const header = "<tr><th>Name</th><th>Score</th></tr>";
  const rows = students.map(createStudentRow).join("");
  return "<table>" + header + rows + "</table>";
}

// Extract duplicate name check
function hasDuplicateName(students, targetName) {
  return students.some(student => student.name === targetName);
}

// Extract data validation
function isValidStudent(student) {
  return student.name && typeof student.score === "number";
}

function validateStudents(students) {
  return students.filter(isValidStudent);
}`;

const codeStep5 = `// ✅ Clean code with useful comments

/**
 * Determines student grade based on average score
 * Follows the Egyptian university grading system
 * @param {number} average - Student's average score
 * @returns {string} - Grade status
 */
function determineGradeStatus(average) {
  // Sort from highest to lowest for first match
  if (average >= GRADE_THRESHOLDS.excellent) return "Excellent";
  if (average >= GRADE_THRESHOLDS.veryGood) return "Very Good";
  if (average >= GRADE_THRESHOLDS.good) return "Good";
  if (average >= GRADE_THRESHOLDS.passing) return "Passing";
  return "Failing";
}

/**
 * Filters students by the required filter type
 * Supports: all, passed, failed, honors
 * @param {Array} students - List of students
 * @param {string} filterType - Filter type
 * @returns {Array} - Filtered list of students
 */
function filterStudentsByType(students, filterType) {
  // Using Map instead of switch for easy addition
  const filterStrategies = {
    all: () => true,
    passed: (student) => student.score >= PASSING_SCORE,
    failed: (student) => student.score < PASSING_SCORE,
    honors: (student) => student.score >= HONORS_SCORE,
  };

  const filterFn = filterStrategies[filterType];
  if (!filterFn) return students;

  return students.filter(filterFn);
}

/**
 * Creates an HTML table report for students
 * Note: In a real application, use a library like React
 * instead of building HTML manually to prevent XSS
 * @param {Array} students - List of students
 * @returns {string} - HTML table code
 */
function generateReportTable(students) {
  const header = "<tr><th>Name</th><th>Score</th></tr>";
  const rows = students.map(createStudentRow).join("");
  return "<table>" + header + rows + "</table>";
}`;

const codeFinal = `// ✅ Final clean code - Student management system

// === Constants ===
const PASSING_SCORE = 50;
const HONORS_SCORE = 90;
const GRADE_THRESHOLDS = {
  excellent: 90,
  veryGood: 80,
  good: 70,
  passing: 60,
};

// === Validation Functions ===
function isValidStudent(student) {
  return student.name && typeof student.score === "number";
}

function validateStudents(students) {
  return students.filter(isValidStudent);
}

// === Filter Functions ===
function filterStudentsByType(students, filterType) {
  const filterStrategies = {
    all: () => true,
    passed: (student) => student.score >= PASSING_SCORE,
    failed: (student) => student.score < PASSING_SCORE,
    honors: (student) => student.score >= HONORS_SCORE,
  };

  const filterFn = filterStrategies[filterType];
  return filterFn ? students.filter(filterFn) : students;
}

// === Calculation Functions ===
function calculateAverage(students) {
  const totalScore = students.reduce((sum, s) => sum + s.score, 0);
  return totalScore / students.length;
}

function determineGradeStatus(average) {
  if (average >= GRADE_THRESHOLDS.excellent) return "Excellent";
  if (average >= GRADE_THRESHOLDS.veryGood) return "Very Good";
  if (average >= GRADE_THRESHOLDS.good) return "Good";
  if (average >= GRADE_THRESHOLDS.passing) return "Passing";
  return "Failing";
}

function calculateStatistics(students) {
  const average = calculateAverage(students);
  const status = determineGradeStatus(average);
  return { average, status, count: students.length };
}

// === Display Functions ===
function createStudentRow(student) {
  return "<tr><td>" + student.name + "</td><td>" + student.score + "</td></tr>";
}

function generateReportTable(students) {
  const header = "<tr><th>Name</th><th>Score</th></tr>";
  const rows = students.map(createStudentRow).join("");
  return "<table>" + header + rows + "</table>";
}

// === Execution ===
const students = [
  { name: "Ahmed", score: 95 },
  { name: "Sara", score: 87 },
  { name: "Mohamed", score: 45 },
  { name: "Fatma", score: 72 },
  { name: "Khaled", score: 38 },
];

const validStudents = validateStudents(students);
const passedStudents = filterStudentsByType(validStudents, "passed");
const statistics = calculateStatistics(passedStudents);
const report = generateReportTable(passedStudents);

console.log("Statistics:", statistics);
console.log("Report:", report);`;

const codeChallenge = `// ❌ Unclean code - Invoice calculation system
function calc(d) {
  let t = 0;
  for (let i = 0; i < d.length; i++) {
    t += d[i].p * d[i].q;
  }
  if (t > 1000) {
    t = t * 0.9;
  } else if (t > 500) {
    t = t * 0.95;
  }
  let tax = t * 0.15;
  return { sub: t, tax: tax, total: t + tax };
}

function fmt(d) {
  let r = "";
  for (let i = 0; i < d.length; i++) {
    r += d[i].n + " x" + d[i].q + " = " + (d[i].p * d[i].q) + "\\n";
  }
  return r;
}

// Usage
let items = [
  { n: "Book", p: 50, q: 3 },
  { n: "Pen", p: 10, q: 10 },
  { n: "Notebook", p: 25, q: 5 },
];
let result = calc(items);
let text = fmt(items);
console.log(text);
console.log(result);`;

const cheatSheetData = {
  ar: {
    title: "مرجع سريع للكود النظيف",
    columns: [
      {
        heading: "قواعد التسمية:",
        items: [
          "استخدم أسماء وصفية واضحة",
          "اجعل الأسماء تُقرأ كقصة",
          "تجنب الأسماء المختصرة",
          "استخدم الثوابت للأرقام السحرية",
        ],
      },
      {
        heading: "قواعد الدوال:",
        items: [
          "كل دالة تفعل شيئاً واحداً فقط",
          "أبقِ الدوال صغيرة (أقل من 20 سطر)",
          "استخدم معايير واضحة",
          "قسّم الدوال الطويلة",
        ],
      },
      {
        heading: "مبادئ التنظيم:",
        items: [
          "DRY: لا تكرر نفسك",
          "KISS: أبقه بسيطاً",
          "المسؤولية الفردية: مسؤولية واحدة",
          "فصل الاهتمامات: افصل الاهتمامات",
        ],
      },
      {
        heading: "التعليقات:",
        items: [
          "اشرح لماذا وليسماذا",
          "لا تعلق على الكود الواضح",
          "استخدم JSDoc للدوال العامة",
          "حدّث التعليقات مع الكود",
        ],
      },
    ],
  },
  en: {
    title: "Clean Code Quick Reference",
    columns: [
      {
        heading: "Naming rules:",
        items: [
          "Use descriptive, clear names",
          "Make names read like a story",
          "Avoid abbreviated names",
          "Use constants for magic numbers",
        ],
      },
      {
        heading: "Function rules:",
        items: [
          "Each function does one thing only",
          "Keep functions small (under 20 lines)",
          "Use clear parameters",
          "Split long functions",
        ],
      },
      {
        heading: "Organization principles:",
        items: [
          "DRY: Don't repeat yourself",
          "KISS: Keep it simple and stupid",
          "Single Responsibility: one responsibility",
          "Separation of Concerns: separate concerns",
        ],
      },
      {
        heading: "Comments:",
        items: [
          "Explain WHY not WHAT",
          "Don't comment obvious code",
          "Use JSDoc for public functions",
          "Update comments with code",
        ],
      },
    ],
  },
  fr: {
    title: "Référence rapide du Code Propre",
    columns: [
      {
        heading: "Règles de nommage :",
        items: [
          "Utilisez des noms descriptifs et clairs",
          "Faites lire les noms comme une histoire",
          "Évitez les noms abrégés",
          "Utilisez des constantes pour les nombres magiques",
        ],
      },
      {
        heading: "Règles des fonctions :",
        items: [
          "Chaque fonction ne fait qu'une chose",
          "Gardez les fonctions petites (moins de 20 lignes)",
          "Utilisez des paramètres clairs",
          "Divisez les fonctions longues",
        ],
      },
      {
        heading: "Principes d'organisation :",
        items: [
          "DRY : Ne vous répétez pas",
          "KISS : Gardez-le simple",
          "Responsabilité unique : une responsabilité",
          "Séparation des responsabilités : séparez les préoccupations",
        ],
      },
      {
        heading: "Commentaires :",
        items: [
          "Expliquez POURQUOI pas QUOI",
          "Ne commentez pas le code évident",
          "Utilisez JSDoc pour les fonctions publiques",
          "Mettez à jour les commentaires avec le code",
        ],
      },
    ],
  },
  de: {
    title: "Schnellreferenz für Sauber-Code",
    columns: [
      {
        heading: "Benennungsregeln:",
        items: [
          "Verwenden Sie beschreibende, klare Namen",
          "Lassen Sie Namen wie eine Geschichte lesen",
          "Vermeiden Sie abgekürzte Namen",
          "Verwenden Sie Konstanten für Zahlenmagie",
        ],
      },
      {
        heading: "Funktionsregeln:",
        items: [
          "Jede Funktion tut nur eine Sache",
          "Halten Sie Funktionen klein (unter 20 Zeilen)",
          "Verwenden Sie klare Parameter",
          "Teilen Sie lange Funktionen auf",
        ],
      },
      {
        heading: "Organisationsprinzipien:",
        items: [
          "DRY: Wiederholen Sie sich nicht",
          "KISS: Halten Sie es einfach",
          "Verantwortliche Einzelheit: eine Verantwortung",
          "Trennung der Anliegen: trennen Sie Anliegen",
        ],
      },
      {
        heading: "Kommentare:",
        items: [
          "Erklären Sie WARUM nicht WAS",
          "Kommentieren Sie nicht offensichtlichen Code",
          "Verwenden Sie JSDokumentation für öffentliche Funktionen",
          "Aktualisieren Sie Kommentare mit dem Code",
        ],
      },
    ],
  },
};

function renderContent(item) {
  if (item.type === "p") {
    return <p dangerouslySetInnerHTML={{ __html: item.text }} />;
  }
  if (item.type === "li") {
    return <li dangerouslySetInnerHTML={{ __html: item.text }} />;
  }
  if (item.type === "callout") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
          💡 {item.title}:
        </p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  if (item.type === "callout-accent") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
          ✅ {item.title}:
        </p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  if (item.type === "callout-primary") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
          🔍 {item.title}:
        </p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  return null;
}

const stepCodeMap = {
  "Step 1: Analyze the Bad Code": codeBadCode,
  "Step 2: Name Variables and Functions": codeStep2,
  "Step 3: Split Functions (Extract Functions)": codeStep3,
  "Step 4: Remove Duplication (DRY)": codeStep4,
  "Step 5: Add Useful Comments": codeStep5,
  "Step 6: Final Result": codeFinal,
};

export default function CleanCodeFinalProject() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clean-code", "06-clean-code-final-project");
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

        {content.sections.map((section, i) => {
          if (section.title === "Knowledge Test") {
            return content.quiz && content.quiz.map((q, qi) => (
              <Quiz
                key={`quiz-${qi}`}
                question={q.question}
                options={q.options}
                correctAnswer={answers[qi]}
                explanation={q.explanation}
              />
            ));
          }
          if (section.title === "Practical Challenge") {
            return (
              <Challenge key={i} title={content.challenge.title} description={<p>{content.challenge.description}</p>}>
                <CodeBlock language="javascript" code={codeChallenge} />
              </Challenge>
            );
          }
          if (section.title === "Project Summary") {
            return (
              <CheatSheet key={i} title={cs.title}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cs.columns.map((col, ci) => (
                    <div key={ci}>
                      <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{col.heading}</p>
                      <ul className="text-sm space-y-1">
                        {col.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CheatSheet>
            );
          }
          const codeForStep = stepCodeMap[section.title];
          return (
            <LessonSection key={i} title={section.title}>
              {section.content.map((item, j) => (
                <div key={j}>{renderContent(item)}</div>
              ))}
              {codeForStep && <CodeBlock language="javascript" code={codeForStep} />}
            </LessonSection>
          );
        })}

        <LessonExtras content={content} />

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
