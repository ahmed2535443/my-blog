"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/typescript/03-interfaces-and-types";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1], en: [1, 1, 1], fr: [1, 1, 1], de: [1, 1, 1] };

const challengeCode = `// Build a type system for a blog
interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  tags: string[];
  createdAt: Date;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface Comment {
  id: string;
  postId: string;
  author: User;
  content: string;
}

// Use extends for inheritance
interface AdminUser extends User {
  role: 'admin';
  permissions: string[];
}

// Use intersection types
type PostWithComments = Post & {
  comments: Comment[];
};`;

const cheatSheetData = {
  ar: {
    title: "ملخص الواجهات والأنواع",
    columns: [
      {
        heading: "مميزات الواجهة:",
        items: [
          "interface — يُعرّف شكل الكائن",
          "readonly — الخاصية غير قابلة للتغيير",
          "?: — خاصية اختيارية",
          "extends — الوراثة من واجهة أخرى",
        ],
      },
      {
        heading: "أسماء الأنواع البديلة:",
        items: [
          "type — أكثر مرونة من interface",
          "A & B — تقاطع (يجمع الأنواع)",
          "A | B — اتحاد (A أو B)",
          "type Point = { x: number; y: number }",
        ],
      },
    ],
  },
  en: {
    title: "Interfaces and Types Cheat Sheet",
    columns: [
      {
        heading: "Interface Features:",
        items: [
          "interface — Defines object shape",
          "readonly — Property cannot be changed",
          "?: — Optional property",
          "extends — Inherit from another interface",
        ],
      },
      {
        heading: "Type Aliases:",
        items: [
          "type — More flexible than interface",
          "A & B — Intersection (combines types)",
          "A | B — Union (A or B)",
          "type Point = { x: number; y: number }",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Interfaces et Types",
    columns: [
      {
        heading: "Fonctionnalités d'interface:",
        items: [
          "interface — Définit la forme d'un objet",
          "readonly — Propriété non modifiable",
          "?: — Propriété optionnelle",
          "extends — Hériter d'une autre interface",
        ],
      },
      {
        heading: "Alias de type:",
        items: [
          "type — Plus flexible que interface",
          "A & B — Intersection (combine les types)",
          "A | B — Union (A ou B)",
          "type Point = { x: number; y: number }",
        ],
      },
    ],
  },
  de: {
    title: "Interfaces und Typen Spickzettel",
    columns: [
      {
        heading: "Interface-Funktionen:",
        items: [
          "interface — Definiert Objektform",
          "readonly — Eigenschaft unveränderlich",
          "?: — Optionale Eigenschaft",
          "extends — Von anderem Interface erben",
        ],
      },
      {
        heading: "Type Aliases:",
        items: [
          "type — Flexibler als interface",
          "A & B — Intersection (kombiniert Typen)",
          "A | B — Union (A oder B)",
          "type Point = { x: number; y: number }",
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

export default function InterfacesAndTypes() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("typescript", "03-interfaces-and-types");
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
