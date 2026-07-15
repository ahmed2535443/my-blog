"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/react/07-custom-hooks";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 2, 2, 2, 1], en: [1, 2, 2, 2, 1], fr: [1, 2, 2, 2, 1], de: [1, 2, 2, 2, 1] };

const challengeCode = `// useFetch hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error("فشل الجلب");
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// useToggle hook
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(prev => !prev);
  return { value, toggle };
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص الخطافات المخصصة",
    columns: [
      {
        heading: "الهيكل الأساسي:",
        items: [
          "function useCounter(initialValue = 0) {",
          "  const [count, setCount] = useState(initialValue);",
          "  const increment = () => setCount(c => c + 1);",
          "  return { count, increment };",
          "}",
        ],
      },
      {
        heading: "الاستخدام:",
        items: [
          "const { count, increment } = useCounter(0);",
          "يجب أن تبدأ بكلمة 'use'",
          "كل مكون يحصل على نسخته الخاصة",
        ],
      },
    ],
  },
  en: {
    title: "Custom Hooks Cheat Sheet",
    columns: [
      {
        heading: "Basic Structure:",
        items: ['function useCounter(initialValue = 0) {', '  const [count, setCount] = useState(initialValue);', '  const increment = () => setCount(c => c + 1);', '  return { count, increment };', '}'],
      },
      {
        heading: "Usage:",
        items: ['const { count, increment } = useCounter(0);'],
      },
    ],
  },
  fr: {
    title: "Fiche mémo des Custom Hooks",
    columns: [
      {
        heading: "Structure de base:",
        items: ['function useCounter(initialValue = 0) {', '  const [count, setCount] = useState(initialValue);', '  return { count, increment: () => setCount(c => c + 1) };', '}'],
      },
    ],
  },
  de: {
    title: "Custom Hooks Spickzettel",
    columns: [
      {
        heading: "Grundstruktur:",
        items: ['function useCounter(initialValue = 0) {', '  const [count, setCount] = useState(initialValue);', '  return { count, increment: () => setCount(c => c + 1) };', '}'],
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

export default function CustomHooks() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("react", "07-custom-hooks");
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
