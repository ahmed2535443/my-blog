"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/css/06-css-variables-theming";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1], fr: [1, 1], de: [1, 1] };

const challengeCode = `/* CSS Variables Theming Challenge */

/* 1. Design Tokens */
:root {
  --color-primary: #2563eb;
  --bg-page: #ffffff;
  --text-primary: #111827;
  --surface: #f9fafb;
  color-scheme: light dark;
}

/* 2. Dark Theme */
[data-theme="dark"] {
  --bg-page: #0f172a;
  --text-primary: #e5e7eb;
  --surface: #1e293b;
}

/* 3. Color Mixing */
--primary-100: color-mix(in oklch, var(--color-primary) 20%, white);
--primary-900: color-mix(in oklch, var(--color-primary) 80%, black);

/* 4. light-dark() */
.card {
  background: light-dark(#ffffff, #1e293b);
  color: light-dark(#111827, #e5e7eb);
}

/* 5. System preference respect */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --bg-page: #0f172a;
    --text-primary: #e5e7eb;
  }
}`;

const cheatSheetData = {
  en: {
    title: "Cheat Sheet - CSS Variables + Theming",
    columns: [
      {
        heading: "Defining & Using Variables:",
        code: `/* Define */
:root {
  --color-primary: #2563eb;
  --spacing-md: 1rem;
}

/* Use */
.element {
  color: var(--color-primary);
  padding: var(--spacing-md);
}

/* With fallback */
.element {
  color: var(--color-primary, #3b82f6);
}`,
        codeLanguage: "css",
      },
      {
        heading: "color-mix() - Mix Colors:",
        code: `--primary-100: color-mix(in oklch, var(--primary) 20%, white);
--primary-500: var(--primary);
--primary-900: color-mix(in oklch, var(--primary) 80%, black);

/* Mix two colors */
half-blue: color-mix(in oklch, blue 50%, red);`,
        codeLanguage: "css",
      },
      {
        heading: "light-dark() - Auto Colors:",
        code: `body { color-scheme: light dark; }

.card {
  background: light-dark(#ffffff, #1e293b);
  color: light-dark(#111827, #e5e7eb);
  border: 1px solid light-dark(#e5e7eb, #334151);
}`,
        codeLanguage: "css",
      },
      {
        heading: "Theme Switching Pattern:",
        code: `:root, [data-theme="light"] {
  color-scheme: light;
  --bg: #ffffff;
  --text: #111827;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg: #0f172a;
  --text: #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    color-scheme: dark;
  }
}`,
        codeLanguage: "css",
      },
    ],
  },
  fr: {
    title: "Fiche memo - Variables CSS + Theming",
    columns: [
      {
        heading: "Definition et utilisation:",
        code: `:root {
  --color-primary: #2563eb;
}

.element {
  color: var(--color-primary, #3b82f6);
}`,
        codeLanguage: "css",
      },
      {
        heading: "color-mix() - Melanger:",
        code: `--primary-100: color-mix(in oklch, var(--primary) 20%, white);
--primary-900: color-mix(in oklch, var(--primary) 80%, black);`,
        codeLanguage: "css",
      },
      {
        heading: "light-dark():",
        code: `body { color-scheme: light dark; }
.card {
  background: light-dark(#ffffff, #1e293b);
}`,
        codeLanguage: "css",
      },
      {
        heading: "Pattern de theme:",
        code: `:root, [data-theme="light"] { --bg: #ffffff; }
[data-theme="dark"] { --bg: #0f172a; }`,
        codeLanguage: "css",
      },
    ],
  },
  de: {
    title: "Spickzettel - CSS-Variablen + Theming",
    columns: [
      {
        heading: "Definition und Nutzung:",
        code: `:root {
  --color-primary: #2563eb;
}

.element {
  color: var(--color-primary, #3b82f6);
}`,
        codeLanguage: "css",
      },
      {
        heading: "color-mix() - Mischen:",
        code: `--primary-100: color-mix(in oklch, var(--primary) 20%, white);
--primary-900: color-mix(in oklch, var(--primary) 80%, black);`,
        codeLanguage: "css",
      },
      {
        heading: "light-dark():",
        code: `body { color-scheme: light dark; }
.card {
  background: light-dark(#ffffff, #1e293b);
}`,
        codeLanguage: "css",
      },
      {
        heading: "Theme-Muster:",
        code: `:root, [data-theme="light"] { --bg: #ffffff; }
[data-theme="dark"] { --bg: #0f172a; }`,
        codeLanguage: "css",
      },
    ],
  },
};

function renderContent(item) {
  if (item.type === "p") return <p dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "li") return <li dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "ol") return <ol dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "callout") return (
    <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
      <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>💡 {item.title}:</p>
      <p dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  if (item.type === "callout-accent") return (
    <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
      <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>✅ {item.title}:</p>
      <p dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  if (item.type === "callout-primary") return (
    <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
      <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>🔍 {item.title}:</p>
      <p dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  return null;
}

export default function CSSVariablesTheming() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("css", "06-css-variables-theming");
  const content = rawTranslations[lang] || rawTranslations.en;
  if (!content) return null;
  const answers = correctAnswers[lang] || correctAnswers.en;
  const cs = cheatSheetData[lang] || cheatSheetData.en;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader stage={lessonInfo.stage} lesson={lessonInfo} lessonIndex={lessonInfo.lessonIndex} totalLessons={lessonInfo.totalLessons} />
        {content.sections.map((section, i) => (
          <LessonSection key={i} title={section.title}>
            {section.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
          </LessonSection>
        ))}
        {content.quiz && content.quiz.map((q, i) => (
          <Quiz key={i} question={q.question} options={q.options} correctAnswer={answers[i]} explanation={q.explanation} />
        ))}
        {content.challenge && (
          <Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>
            <CodeBlock language="css" code={challengeCode} />
          </Challenge>
        )}
        <CheatSheet title={cs.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.columns.map((col, i) => (
              <div key={i}>
                <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{col.heading}</p>
                {col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>}
                {col.code && <CodeBlock language={col.codeLanguage || "css"} code={col.code} />}
              </div>
            ))}
          </div>
        </CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
