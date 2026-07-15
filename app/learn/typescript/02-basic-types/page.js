"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/typescript/02-basic-types";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [2, 1, 1], en: [2, 1, 1], fr: [2, 1, 1], de: [2, 1, 1] };

const challengeCode = `// Create variables with different types
let name: string = 'Ahmed';
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ['Ali', 'Sara'];

// Interface
interface User {
  name: string;
  age: number;
  email?: string; // optional
}

const user: User = {
  name: 'Ahmed',
  age: 25
};

// Union type
let id: string | number;
id = '123'; // OK
id = 123;   // OK
// id = true;  // Error!`;

const cheatSheetData = {
  ar: {
    title: "ملخص الأنواع الأساسية",
    columns: [
      {
        heading: "الأنواع الأولية:",
        items: [
          "string — نوع النص",
          "number — نوع رقمي (صحيح، عائم، عشري)",
          "boolean — نوع صحيح/خطأ",
          "null / undefined — غياب القيمة",
        ],
      },
      {
        heading: "صيغة النوع:",
        items: [
          "T[] أو Array<T> — نوع المصفوفة",
          "interface — يُعرّف شكل الكائن",
          "A | B — نوع اتحاد (A أو B)",
          "?: — خاصية اختيارية",
        ],
      },
    ],
  },
  en: {
    title: "Basic Types Cheat Sheet",
    columns: [
      {
        heading: "Primitive Types:",
        items: [
          "string — Text type",
          "number — Numeric type (int, float, decimal)",
          "boolean — True/false type",
          "null / undefined — Absence of value",
        ],
      },
      {
        heading: "Type Syntax:",
        items: [
          "T[] or Array<T> — Array type",
          "interface — Defines object shape",
          "A | B — Union type (A or B)",
          "?: — Optional property",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Types de base",
    columns: [
      {
        heading: "Types primitifs:",
        items: [
          "string — Type texte",
          "number — Type numérique",
          "boolean — Type vrai/faux",
          "null / undefined — Absence de valeur",
        ],
      },
      {
        heading: "Syntaxe de type:",
        items: [
          "T[] ou Array<T> — Type tableau",
          "interface — Définit la forme d'un objet",
          "A | B — Type d'union",
          "?: — Propriété optionnelle",
        ],
      },
    ],
  },
  de: {
    title: "Grundlegende Typen Spickzettel",
    columns: [
      {
        heading: "Primitive Typen:",
        items: [
          "string — Texttyp",
          "number — Numerischer Typ",
          "boolean — Wahr/Falsch-Typ",
          "null / undefined — Fehlender Wert",
        ],
      },
      {
        heading: "Typ-Syntax:",
        items: [
          "T[] oder Array<T> — Array-Typ",
          "interface — Definiert Objektform",
          "A | B — Union-Typ",
          "?: — Optionale Eigenschaft",
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

export default function BasicTypes() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("typescript", "02-basic-types");
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
