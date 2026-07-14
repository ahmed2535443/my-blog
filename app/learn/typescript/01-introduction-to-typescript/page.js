"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/typescript/01-introduction-to-typescript";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1], en: [1, 1], fr: [1, 1], de: [1, 1] };

const challengeCode = `function greet(name: string, age: number): string {
  return \`مرحباً \${name}، عمرك \${age} سنة\`;
}

// ✅ استخدام صحيح:
console.log(greet("أحمد", 25));
// "مرحباً أحمد، عمرك 25 سنة"

// ❌ أخطاء نوعية:
// greet(123, "أحمد");  // ❌ name يجب أن يكون string
// greet("أحمد", "25"); // ❌ age يجب أن يكون number
// greet("أحمد");       // ❌ missing parameter age`;

const cheatSheetData = {
  ar: {
    title: "ملخص مقدمة TypeScript",
    columns: [
      {
        heading: "المفاهيم الأساسية:",
        items: [
          "نظام الأنواع — يضيف معلومات النوع إلى الكود قبل التجميع",
          "tsc (المترجم) — يُترجم .ts إلى .js ويتحقق من الأنواع",
          "التبنّي التدريجي — يمكن تحويل JavaScript إلى TypeScript تدريجياً",
        ],
      },
      {
        heading: "الأوامر الأساسية:",
        items: [
          "npm install -g typescript — تثبيت TypeScript عالمياً",
          "tsc --init — إنشاء tsconfig.json",
          "tsc file.ts — ترجمة ملف TypeScript",
        ],
      },
    ],
  },
  en: {
    title: "TypeScript Introduction Cheat Sheet",
    columns: [
      {
        heading: "Basic Concepts:",
        items: [
          "Type System — Adds type information to code before compilation",
          "tsc (Compiler) — Compiles .ts to .js and checks types",
          "Gradual Adoption — Can convert JavaScript to TypeScript gradually",
        ],
      },
      {
        heading: "Basic Commands:",
        items: [
          "npm install -g typescript — Install TypeScript globally",
          "tsc --init — Create tsconfig.json",
          "tsc file.ts — Compile TypeScript file",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Introduction à TypeScript",
    columns: [
      {
        heading: "Concepts de base:",
        items: [
          "Type System — Ajoute des informations de type au code avant la compilation",
          "tsc (Compiler) — Compile .ts en .js et vérifie les types",
          "Gradual Adoption — Peut convertir JavaScript en TypeScript progressivement",
        ],
      },
      {
        heading: "Commandes de base:",
        items: [
          "npm install -g typescript — Installer TypeScript globalement",
          "tsc --init — Créer tsconfig.json",
          "tsc file.ts — Compiler un fichier TypeScript",
        ],
      },
    ],
  },
  de: {
    title: "TypeScript Einführung Spickzettel",
    columns: [
      {
        heading: "Grundkonzepte:",
        items: [
          "Type System — Fügt Typinformationen zum Code vor der Kompilierung hinzu",
          "tsc (Compiler) — Kompiliert .ts zu .js und prüft Typen",
          "Gradual Adoption — Kann JavaScript schrittweise in TypeScript umwandeln",
        ],
      },
      {
        heading: "Grundbefehle:",
        items: [
          "npm install -g typescript — TypeScript global installieren",
          "tsc --init — tsconfig.json erstellen",
          "tsc file.ts — TypeScript-Datei kompilieren",
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

export default function IntroductionToTypeScript() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("typescript", "01-introduction-to-typescript");
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
