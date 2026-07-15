"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/react/01-introduction-to-react";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1], en: [1, 1, 1], fr: [1, 1, 1], de: [1, 1, 1] };

const challengeCode = `function MyProfile() {
  return (
    <div>
      <h1>أحمد محمد</h1>
      <p>عمري: 25 سنة</p>
      <p className="highlight">مطور مبتدئ في تعلم React</p>
    </div>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص مقدمة React",
    columns: [
      {
        heading: "المفاهيم الأساسية:",
        items: [
          "React - مكتبة JavaScript لبناء واجهات المستخدم",
          "مبني على المكونات - واجهة مستخدم من مكونات صغيرة قابلة لإعادة الاستخدام",
          "صرفي - صف ما تريد، React يتعامل مع DOM",
          "DOM افتراضي - تمثيل في الذاكرة لأداء أفضل",
          "JSX - امتداد صيغة يبدو مثل HTML",
        ],
      },
      {
        heading: "الأمر:",
        items: [
          "1. ثبّت Node.js",
          "2. npx create-react-app my-app",
          "3. cd my-app && npm start",
        ],
      },
    ],
  },
  en: {
    title: "React Introduction Cheat Sheet",
    columns: [
      {
        heading: "Basic Component:",
        items: ['function MyComponent() {', '  return <h1>Hello React!</h1>;', '}'],
      },
      {
        heading: "Using Expressions:",
        items: ['const name = "Ahmed";', 'function Greeting() {', '  return <h1>Hello {name}</h1>;', '}'],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Introduction à React",
    columns: [
      {
        heading: "Composant de base:",
        items: ['function MyComponent() {', '  return <h1>Bonjour React!</h1>;', '}'],
      },
    ],
  },
  de: {
    title: "React Einführung Spickzettel",
    columns: [
      {
        heading: "Grundlegende Komponente:",
        items: ['function MyComponent() {', '  return <h1>Hallo React!</h1>;', '}'],
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

export default function IntroductionToReact() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("react", "01-introduction-to-react");
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
