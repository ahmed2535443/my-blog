"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clean-code/04-refactoring";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1], en: [1], fr: [1], de: [1] };

const challengeCode = `function process(students) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 0 && students[i].grade <= 100) {
      total += students[i].grade;
      count++;
    }
  }
  const avg = total / count;
  let status;
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
  return { average: avg, count: count, status: status };
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص إعادة الهيكلة",
    columns: [
      {
        heading: "المبادئ الأساسية:",
        items: [
          '<strong style={{ color: "var(--primary)" }}>DRY</strong> - لا تكرر نفسك - استخرج المنطق المشترك',
          '<strong style={{ color: "var(--accent)" }}>KISS</strong> - أبقه بسيطاً - تجنب التعقيد غير الضروري',
          '<strong style={{ color: "var(--secondary)" }}>المسؤولية الفردية</strong> - كل دالة تفعل شيئاً واحداً فقط',
        ],
      },
      {
        heading: "تقنيات إعادة الهيكلة:",
        items: [
          '<strong style={{ color: "var(--primary)" }}>استخراج الدالة</strong> - قسم الدوال الطويلة إلى أصغر',
          '<strong style={{ color: "var(--accent)" }}>إعادة تسمية المتغير</strong> - حسّن أسماء المتغيرات والدوال',
          '<strong style={{ color: "var(--secondary)" }}>استبدال الشرط</strong> - استبدل الشروط بالتعدد الأشكال أو الكائنات',
        ],
      },
    ],
  },
  en: {
    title: "Refactoring Cheat Sheet",
    columns: [
      {
        heading: "Core principles:",
        items: [
          '<strong style={{ color: "var(--primary)" }}>DRY</strong> - Don\'t repeat yourself - extract shared logic',
          '<strong style={{ color: "var(--accent)" }}>KISS</strong> - Keep it simple - avoid unnecessary complexity',
          '<strong style={{ color: "var(--secondary)" }}>Single Responsibility</strong> - Each function does one thing only',
        ],
      },
      {
        heading: "Refactoring techniques:",
        items: [
          '<strong style={{ color: "var(--primary)" }}>Extract Function</strong> - Split long functions into smaller ones',
          '<strong style={{ color: "var(--accent)" }}>Rename Variable</strong> - Improve variable and function names',
          '<strong style={{ color: "var(--secondary)" }}>Replace Conditional</strong> - Replace conditionals with polymorphism or objects',
        ],
      },
    ],
  },
  fr: {
    title: "Référence de la refactorisation",
    columns: [
      {
        heading: "Principes fondamentaux :",
        items: [
          '<strong style={{ color: "var(--primary)" }}>DRY</strong> - Ne vous répétez pas - extrayez la logique commune',
          '<strong style={{ color: "var(--accent)" }}>KISS</strong> - Gardez-le simple - évitez la complexité inutile',
          '<strong style={{ color: "var(--secondary)" }}>Responsabilité unique</strong> - Chaque fonction ne fait qu\'une chose',
        ],
      },
      {
        heading: "Techniques de refactorisation :",
        items: [
          '<strong style={{ color: "var(--primary)" }}>Extraire une fonction</strong> - Divisez les fonctions longues en plus petites',
          '<strong style={{ color: "var(--accent)" }}>Renommer une variable</strong> - Améliorez les noms de variables et fonctions',
          '<strong style={{ color: "var(--secondary)" }}>Remplacer le conditionnel</strong> - Remplacez les conditionnels par le polymorphisme',
        ],
      },
    ],
  },
  de: {
    title: "Übersicht über die Refaktorisierung",
    columns: [
      {
        heading: "Grundprinzipien:",
        items: [
          '<strong style={{ color: "var(--primary)" }}>DRY</strong> - Wiederholen Sie sich nicht - extrahieren Sie gemeinsame Logik',
          '<strong style={{ color: "var(--accent)" }}>KISS</strong> - Halten Sie es einfach - vermeiden Sie unnötige Komplexität',
          '<strong style={{ color: "var(--secondary)" }}>Verantwortliche Einzelheit</strong> - Jede Funktion tut nur eine Sache',
        ],
      },
      {
        heading: "Refaktorisierungstechniken:",
        items: [
          '<strong style={{ color: "var(--primary)" }}>Funktion extrahieren</strong> - Teilen Sie lange Funktionen in kleinere auf',
          '<strong style={{ color: "var(--accent)" }}>Variable umbenennen</strong> - Verbessern Sie Variablen- und Funktionsnamen',
          '<strong style={{ color: "var(--secondary)" }}>Bedingung ersetzen</strong> - Ersetzen Sie Bedingungen durch Polymorphismus',
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

export default function RefactoringLesson() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clean-code", "04-refactoring");
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
            {cs.columns.map((col, i) => (
              <div key={i}>
                <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{col.heading}</p>
                <ul className="text-sm space-y-1">
                  {col.items.map((item, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
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
