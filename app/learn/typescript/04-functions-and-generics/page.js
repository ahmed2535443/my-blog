"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/typescript/04-functions-and-generics";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [0, 1, 0], en: [0, 1, 0], fr: [0, 1, 0], de: [0, 1, 0] };

const challengeCode = `// Generic utility functions
function identity<T>(arg: T): T {
  return arg;
}

function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

function zip<A, B>(a: A[], b: B[]): [A, B][] {
  return a.map((item, i) => [item, b[i]]);
}

// Test with different types
const num = identity<number>(42);
const str = identity<string>('hello');
const firstNum = first([1, 2, 3]);
const pairs = zip(['a', 'b'], [1, 2]);`;

const cheatSheetData = {
  ar: {
    title: "ملخص الدوال والعامة",
    columns: [
      {
        heading: "صيغة الدالة:",
        items: [
          "function name(p: type): type — دالة مكتوبة بنوع",
          "param?: type — معامل اختياري",
          "param = value — قيمة معامل افتراضية",
          "const fn = (p: type): type => — دالة سهمية",
        ],
      },
      {
        heading: "العامة والحراس:",
        items: [
          "<T> — معامل نوع عام",
          "إحلال الدالة — توقيعات متعددة",
          "typeof value === 'string' — حارس نوع",
          "T extends Type — قيد عام",
        ],
      },
    ],
  },
  en: {
    title: "Functions and Generics Cheat Sheet",
    columns: [
      {
        heading: "Function Syntax:",
        items: [
          "function name(p: type): type — Typed function",
          "param?: type — Optional parameter",
          "param = value — Default parameter",
          "const fn = (p: type): type => — Arrow function",
        ],
      },
      {
        heading: "Generics & Guards:",
        items: [
          "<T> — Generic type parameter",
          "function overload — Multiple signatures",
          "typeof value === 'string' — Type guard",
          "T extends Type — Generic constraint",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Fonctions et Generics",
    columns: [
      {
        heading: "Syntaxe de fonction:",
        items: [
          "function name(p: type): type — Fonction typée",
          "param?: type — Paramètre optionnel",
          "param = value — Paramètre par défaut",
          "const fn = (p: type): type => — Fonction fléchée",
        ],
      },
      {
        heading: "Generics et Guards:",
        items: [
          "<T> — Paramètre de type générique",
          "surcharge de fonction — Signatures multiples",
          "typeof value === 'string' — Type guard",
          "T extends Type — Contrainte générique",
        ],
      },
    ],
  },
  de: {
    title: "Funktionen und Generics Spickzettel",
    columns: [
      {
        heading: "Funktionssyntax:",
        items: [
          "function name(p: type): type — Getypte Funktion",
          "param?: type — Optionaler Parameter",
          "param = value — Standardparameter",
          "const fn = (p: type): type => — Arrow Function",
        ],
      },
      {
        heading: "Generics & Guards:",
        items: [
          "<T> — Generischer Typparameter",
          "Funktionsüberladung — Mehrere Signaturen",
          "typeof value === 'string' — Type Guard",
          "T extends Type — Generic Constraint",
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
  if (item.type === "code") {
    return <CodeBlock language="typescript" code={item.text} />;
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
  return null;
}

export default function FunctionsAndGenerics() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("typescript", "04-functions-and-generics");
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
            <CodeBlock language="typescript" code={challengeCode} />
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
