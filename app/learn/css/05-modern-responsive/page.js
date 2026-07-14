"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/css/05-modern-responsive";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 2, 2, 1, 1, 0, 2, 2], en: [1, 2, 2, 1, 1, 0, 2, 2], fr: [1, 2, 2, 1, 1, 0, 2, 2], de: [1, 2, 2, 1, 1, 0, 2, 2] };

const challengeCode = `.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.card-image {
  aspect-ratio: 16 / 9;
}

:root {
  --space-xs: clamp(0.25rem, 0.5vw, 0.5rem);
  --space-sm: clamp(0.5rem, 1vw, 1rem);
  --space-md: clamp(1rem, 2vw, 2rem);
}`;

const cheatSheetData = {
  ar: {
    title: "مرجع سريع: التصميم المتجاوب الحديث",
    columns: [
      {
        heading: "استعلامات الحاوية:",
        code: `.container {
  container-type: inline-size;
  container-name: my-container;
}

@container my-container (min-width: 500px) {
  .child { /* ... */ }
}`,
        codeLanguage: "css",
      },
      {
        heading: "clamp() - قيم سائلة:",
        code: `/* clamp(min, مفضل, max) */
font-size: clamp(1rem, 2.5vw, 2rem);
padding: clamp(1rem, 3vw, 3rem);
width: clamp(300px, 80%, 1200px);

:root {
  --space-xs: clamp(0.25rem, 0.5vw, 0.5rem);
  --space-sm: clamp(0.5rem, 1vw, 1rem);
  --space-md: clamp(1rem, 2vw, 2rem);
}`,
        codeLanguage: "css",
      },
      {
        heading: "min() و max():",
        code: `/* min() - الأصغر من قيمتين */
width: min(80%, 800px);

/* max() - الأكبر من قيمتين */
width: max(300px, 50%);`,
        codeLanguage: "css",
      },
      {
        heading: "الخصائص المنطقية:",
        items: [
          '<code className="inline-code">width</code> -> <code className="inline-code">inline-size</code>',
          '<code className="inline-code">height</code> -> <code className="inline-code">block-size</code>',
          '<code className="inline-code">margin-left</code> -> <code className="inline-code">margin-inline-start</code>',
          '<code className="inline-code">margin-right</code> -> <code className="inline-code">margin-inline-end</code>',
          '<code className="inline-code">padding-top</code> -> <code className="inline-code">padding-block-start</code>',
          '<code className="inline-code">text-align: left</code> -> <code className="inline-code">text-align: start</code>',
        ],
      },
    ],
  },
  en: {
    title: "Quick Reference: Modern Responsive Design",
    columns: [
      {
        heading: "Container Queries:",
        code: `.container {
  container-type: inline-size;
  container-name: my-container;
}

@container my-container (min-width: 500px) {
  .child { /* ... */ }
}`,
        codeLanguage: "css",
      },
      {
        heading: "clamp() - Fluid Values:",
        code: `/* clamp(min, preferred, max) */
font-size: clamp(1rem, 2.5vw, 2rem);
padding: clamp(1rem, 3vw, 3rem);
width: clamp(300px, 80%, 1200px);

:root {
  --space-xs: clamp(0.25rem, 0.5vw, 0.5rem);
  --space-sm: clamp(0.5rem, 1vw, 1rem);
  --space-md: clamp(1rem, 2vw, 2rem);
}`,
        codeLanguage: "css",
      },
      {
        heading: "min() and max():",
        code: `/* min() - smaller of two values */
width: min(80%, 800px);

/* max() - larger of two values */
width: max(300px, 50%);`,
        codeLanguage: "css",
      },
      {
        heading: "Logical Properties:",
        items: [
          '<code className="inline-code">width</code> -> <code className="inline-code">inline-size</code>',
          '<code className="inline-code">height</code> -> <code className="inline-code">block-size</code>',
          '<code className="inline-code">margin-left</code> -> <code className="inline-code">margin-inline-start</code>',
          '<code className="inline-code">margin-right</code> -> <code className="inline-code">margin-inline-end</code>',
          '<code className="inline-code">padding-top</code> -> <code className="inline-code">padding-block-start</code>',
          '<code className="inline-code">text-align: left</code> -> <code className="inline-code">text-align: start</code>',
        ],
      },
    ],
  },
  fr: {
    title: "Reference rapide: Design Responsive Moderne",
    columns: [
      {
        heading: "Container Queries:",
        code: `.container {
  container-type: inline-size;
  container-name: my-container;
}

@container my-container (min-width: 500px) {
  .child { /* ... */ }
}`,
        codeLanguage: "css",
      },
      {
        heading: "clamp() - Valeurs fluides:",
        code: `font-size: clamp(1rem, 2.5vw, 2rem);
padding: clamp(1rem, 3vw, 3rem);
width: clamp(300px, 80%, 1200px);`,
        codeLanguage: "css",
      },
      {
        heading: "min() et max():",
        code: `width: min(80%, 800px);
width: max(300px, 50%);`,
        codeLanguage: "css",
      },
      {
        heading: "Proprietes logiques:",
        items: [
          '<code className="inline-code">width</code> -> <code className="inline-code">inline-size</code>',
          '<code className="inline-code">margin-left</code> -> <code className="inline-code">margin-inline-start</code>',
          '<code className="inline-code">text-align: left</code> -> <code className="inline-code">text-align: start</code>',
        ],
      },
    ],
  },
  de: {
    title: "Kurzreferenz: Modernes Responsive Design",
    columns: [
      {
        heading: "Container Queries:",
        code: `.container {
  container-type: inline-size;
  container-name: my-container;
}

@container my-container (min-width: 500px) {
  .child { /* ... */ }
}`,
        codeLanguage: "css",
      },
      {
        heading: "clamp() - Flieless Werte:",
        code: `font-size: clamp(1rem, 2.5vw, 2rem);
padding: clamp(1rem, 3vw, 3rem);
width: clamp(300px, 80%, 1200px);`,
        codeLanguage: "css",
      },
      {
        heading: "min() und max():",
        code: `width: min(80%, 800px);
width: max(300px, 50%);`,
        codeLanguage: "css",
      },
      {
        heading: "Logische Eigenschaften:",
        items: [
          '<code className="inline-code">width</code> -> <code className="inline-code">inline-size</code>',
          '<code className="inline-code">margin-left</code> -> <code className="inline-code">margin-inline-start</code>',
          '<code className="inline-code">text-align: left</code> -> <code className="inline-code">text-align: start</code>',
        ],
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

export default function ModernResponsive() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("css", "05-modern-responsive");
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
