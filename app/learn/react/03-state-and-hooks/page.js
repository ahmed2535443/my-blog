"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/react/03-state-and-hooks";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1, 2, 2], en: [1, 1, 1, 2, 2], fr: [1, 1, 1, 2, 2], de: [1, 1, 1, 2, 2] };

const challengeCode = `function SmartCounter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [toggleCount, setToggleCount] = useState(0);

  const handleToggle = () => {
    setIsVisible(!isVisible);
    setToggleCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>العداد: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <button onClick={() => setCount(0)}>إعادة تعيين</button>
      <button onClick={handleToggle}>إظهار/إخفاء</button>
      {isVisible && <p>النص مرئي</p>}
      <p>عدد مرات التبديل: {toggleCount}</p>
    </div>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص الحالة والخطافات",
    columns: [
      {
        heading: "المفاهيم الأساسية:",
        items: [
          "الحالة - بيانات تتغير مع الوقت وتؤثر على العرض",
          "useState - خطاف لإدارة الحالة في مكونات الدوال",
          "الخصائص من الأصل (خارجية)، الحالة داخل المكون (داخلية)",
          "الخطافات في المستوى الأعلى فقط",
        ],
      },
      {
        heading: "الأوامر:",
        items: [
          "const [count, setCount] = useState(0)",
          "setCount(count + 1) - تحديث الحالة",
          "setCount(prev => prev + 1) - تحديث بناءً على السابق",
        ],
      },
    ],
  },
  en: {
    title: "State and Hooks Cheat Sheet",
    columns: [
      {
        heading: "Basic useState:",
        items: ['<code>const [count, setCount] = useState(0)</code>'],
      },
      {
        heading: "Update State:",
        code: "// Direct value\nsetCount(5);\n// Updater function\nsetCount(prev => prev + 1);",
      },
    ],
  },
  fr: {
    title: "Fiche mémo State et Hooks",
    columns: [
      {
        heading: "useState de base:",
        items: ['<code>const [count, setCount] = useState(0)</code>'],
      },
    ],
  },
  de: {
    title: "State und Hooks Spickzettel",
    columns: [
      {
        heading: "Grundlegendes useState:",
        items: ['<code>const [count, setCount] = useState(0)</code>'],
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

export default function StateAndHooks() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("react", "03-state-and-hooks");
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
