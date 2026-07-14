"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/react/04-useEffect";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 2, 1, 1], en: [1, 2, 1, 1], fr: [1, 2, 1, 1], de: [1, 2, 1, 1] };

const challengeCode = `function AdvancedTimer() {
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || seconds === 0) return;
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  return (
    <div>
      <h2>الوقت المتبقي: {seconds} ثانية</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "إيقاف" : "تشغيل"}
      </button>
      <button onClick={() => { setSeconds(60); setIsRunning(false); }}>
        إعادة تعيين
      </button>
    </div>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص useEffect",
    columns: [
      {
        heading: "المفاهيم الأساسية:",
        items: [
          "useEffect - لتشغيل التأثيرات الجانبية بعد العرض",
          "مصفوفة التبعيات [] - تتحكم في متى يُنفذ التأثير",
          "مصفوفة فارغة = مرة واحدة فقط",
          "بدون مصفوفة = بعد كل عرض",
        ],
      },
      {
        heading: "الأوامر:",
        items: [
          "useEffect(() => {}, []) - تنفيذ مرة واحدة",
          "useEffect(() => {}, [dep]) - عند تغيير التبعية",
          "return () => {} - دالة التنظيف",
        ],
      },
    ],
  },
  en: {
    title: "useEffect Cheat Sheet",
    columns: [
      {
        heading: "Basic Syntax:",
        items: ['useEffect(() => {}, [])'],
      },
      {
        heading: "With Cleanup:",
        items: ['useEffect(() => { const sub = subscribe(); return () => sub.unsubscribe(); }, [])'],
      },
    ],
  },
  fr: {
    title: "Fiche mémo de useEffect",
    columns: [
      {
        heading: "Syntaxe de base:",
        items: ['useEffect(() => {}, [])'],
      },
    ],
  },
  de: {
    title: "useEffect Spickzettel",
    columns: [
      {
        heading: "Grundsyntax:",
        items: ['useEffect(() => {}, [])'],
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

export default function UseEffectLesson() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("react", "04-useEffect");
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
