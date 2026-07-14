"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/react/05-server-components";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 2, 1, 1], en: [1, 1, 2, 1, 1], fr: [1, 1, 2, 1, 1], de: [1, 1, 2, 1, 1] };

const challengeCode = `// Server Component
async function ProductList() {
  const products = await db.products.findMany();
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

// Client Component
"use client";
function AddToCartButton({ productId }) {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <button onClick={() => setIsAdding(true)}>
      {isAdding ? "جاري الإضافة..." : "أضف إلى السلة"}
    </button>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص مكونات الخادم",
    columns: [
      {
        heading: "مكون الخادم:",
        items: [
          "// الافتراضي في مجلد app/",
          "async function ServerComponent() {",
          "  const data = await fetchData();",
          "  return <div>{data.title}</div>;",
          "}",
        ],
      },
      {
        heading: "مكون العميل:",
        items: [
          '"use client";',
          'import { useState } from "react";',
          "function ClientComponent() {",
          "  const [count, setCount] = useState(0);",
          "}",
        ],
      },
    ],
  },
  en: {
    title: "Server Components Cheat Sheet",
    columns: [
      {
        heading: "Server Component:",
        items: ['// Default in app/ directory', 'async function ServerComponent() {', '  const data = await fetchData();', '  return <div>{data.title}</div>;', '}'],
      },
      {
        heading: "Client Component:",
        items: ['"use client";', 'import { useState } from "react";', 'function ClientComponent() {', '  const [count, setCount] = useState(0);', '}'],
      },
    ],
  },
  fr: {
    title: "Fiche mémo des Server Components",
    columns: [
      {
        heading: "Server Component:",
        items: ['async function ServerComponent() {', '  const data = await fetchData();', '  return <div>{data.title}</div>;', '}'],
      },
    ],
  },
  de: {
    title: "Server Components Spickzettel",
    columns: [
      {
        heading: "Server Component:",
        items: ['async function ServerComponent() {', '  const data = await fetchData();', '  return <div>{data.title}</div>;', '}'],
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
  return null;
}

export default function ServerComponentsLesson() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("react", "05-server-components");
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
            <CodeBlock language="jsx" code={challengeCode} />
          </Challenge>
        )}

        <CheatSheet title={cs.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.columns.map((col, i) => (
              <div key={i}>
                <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{col.heading}</p>
                {col.items && (
                  <ul className="text-sm space-y-1">
                    {col.items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}
                {col.code && <CodeBlock language={col.codeLanguage || "jsx"} code={col.code} />}
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
