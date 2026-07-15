"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/react/09-react-final-project";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1, 2, 1], en: [1, 1, 1, 2, 1], fr: [1, 1, 1, 2, 1], de: [1, 1, 1, 2, 1] };

const challengeCode = `// Enhanced TaskInput with categories and priorities
function TaskInput() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("personal");
  const [priority, setPriority] = useState("medium");
  const { addTask } = useTasks();

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({ text: text.trim(), category, priority });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="مهمة جديدة..." />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="work">عمل</option>
        <option value="personal">شخصي</option>
        <option value="study">دراسة</option>
      </select>
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="high">عالية</option>
        <option value="medium">متوسطة</option>
        <option value="low">منخفضة</option>
      </select>
      <button type="submit">إضافة</button>
    </form>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص المشروع الأخير لـ React",
    columns: [
      {
        heading: "المفاهيم الأساسية:",
        items: [
          "إعداد المشروع - Create React App + ESLint + Prettier",
          "نموذج البيانات - هيكل المهمة وتفضيلات المستخدم",
          "SContext + Reducer - إدارة الحالة العامة",
          "عمليات CRUD - إنشاء وقراءة وتحديث وحذف",
          "النماذج - مكونات محكومة مع التحقق",
        ],
      },
      {
        heading: "الميزات:",
        items: [
          "القوائم - عرض وتصفية وترتيب المهام",
          "التخزين المحلي - حفظ المهام والتفضيلات",
          "تبديل السمة - فاتحة/داكنة مع متغيرات CSS",
        ],
      },
    ],
  },
  en: {
    title: "React Final Project Cheat Sheet",
    columns: [
      {
        heading: "Components & Props:",
        items: ['function Greeting({ name }) {', '  return <p>Hello {name}</p>;', '}'],
      },
      {
        heading: "useState:",
        items: ['const [count, setCount] = useState(0);', 'setCount(count + 1);'],
      },
      {
        heading: "useEffect:",
        items: ['useEffect(() => { fetch(url); }, [url]);', 'return () => cleanup();'],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Projet Final React",
    columns: [
      {
        heading: "Composants & Props:",
        items: ['function Greeting({ name }) {', '  return <p>Bonjour {name}</p>;', '}'],
      },
    ],
  },
  de: {
    title: "React Abschlussprojekt Spickzettel",
    columns: [
      {
        heading: "Komponenten & Props:",
        items: ['function Greeting({ name }) {', '  return <p>Hallo {name}</p>;', '}'],
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

export default function ReactFinalProject() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("react", "09-react-final-project");
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
