"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/typescript/06-typescript-final-project";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1], en: [1, 1, 1], fr: [1, 1, 1], de: [1, 1, 1] };

const challengeCode = `// === 1. نظام التعليقات ===
interface Comment {
  readonly id: string;
  taskId: TaskId;
  authorId: UserId;
  content: string;
  createdAt: Date;
}

// === 2. نظام التصفية المتقدم ===
async function searchTasks(
  criteria: TaskSearchCriteria
): Promise<Task[]> {
  const tasks = await taskRepo.getAll();
  
  return tasks.filter((task) => {
    if (criteria.status && !criteria.status.includes(task.status))
      return false;
    if (criteria.priority && !criteria.priority.includes(task.priority))
      return false;
    if (criteria.assignedTo && task.assignedTo !== criteria.assignedTo)
      return false;
    if (criteria.tags && !criteria.tags.some((t) => task.tags.includes(t)))
      return false;
    if (criteria.query) {
      const q = criteria.query.toLowerCase();
      if (!task.title.toLowerCase().includes(q) &&
          !task.description.toLowerCase().includes(q))
        return false;
    }
    if (criteria.dueBefore && task.dueDate && task.dueDate > criteria.dueBefore)
      return false;
    if (criteria.dueAfter && task.dueDate && task.dueDate < criteria.dueAfter)
      return false;
    return true;
  });
}

// === 3. نظام الترتيب ===
function sortTasks(
  tasks: Task[],
  options: TaskSortOptions
): Task[] {
  return [...tasks].sort((a, b) => {
    const aVal = a[options.field];
    const bVal = b[options.field];
    
    if (aVal < bVal) return options.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return options.direction === "asc" ? 1 : -1;
    return 0;
  });
}

// === 4. إحصائيات الإنتاجية ===
async function getUserProductivity(userId: UserId): Promise<number> {
  const tasks = await taskRepo.getAll();
  const completed = tasks.filter(
    (t) => t.assignedTo === userId && t.status === "done"
  );
  return completed.length;
}

// === 5. نظام الإشعارات ===
type Notification =
  | { type: "email"; to: EmailAddress; subject: string; body: string }
  | { type: "push"; deviceToken: string; title: string; message: string }
  | { type: "in_app"; userId: UserId; message: string; link?: string };

function sendNotification(notification: Notification): void {
  switch (notification.type) {
    case "email":
      console.log(\`📧 إرسال بريد إلى \${notification.to}: \${notification.subject}\`);
      break;
    case "push":
      console.log(\`📱 إشعار push: \${notification.title}\`);
      break;
    case "in_app":
      console.log(\`🔔 إشعار داخل التطبيق: \${notification.message}\`);
      break;
  }
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص المشروع الأخير لـ TypeScript",
    columns: [
      {
        heading: "الدرس 1: مقدمة:",
        items: [
          "TypeScript = JS + Types",
          "مترجم tsc",
          "tsconfig.json",
          "التبنّي التدريجي",
        ],
      },
      {
        heading: "الدرس 2: الأنواع الأساسية:",
        items: [
          "string, number, boolean",
          "any مقابل unknown",
          "اتحاد (|) حرفي",
          "tuple, enum",
        ],
      },
      {
        heading: "الدرس 3: الواجهات:",
        items: [
          "interface مقابل type",
          "extends, readonly",
          "Pick, Omit, Partial",
          "الاتحادات المميزة",
        ],
      },
      {
        heading: "الدرس 4: العامة:",
        items: [
          "<T>(value: T): T",
          "T extends Type",
          "keyof, typeof",
          "حراس النوع",
        ],
      },
      {
        heading: "الدرس 5: React:",
        items: [
          "كتابة أنواع الخصائص",
          "كتابة أنواع الخطافات",
          "معالجي الأحداث",
          "العامة في React",
        ],
      },
      {
        heading: "الدرس 6: المشروع:",
        items: [
          "الأنواع المُعلَّمة",
          "نمط المستودع",
          "الأنواع المُmapped",
          "تطبيق إدارة المهام",
        ],
      },
    ],
  },
  en: {
    title: "TypeScript Final Project Cheat Sheet",
    columns: [
      {
        heading: "Lesson 1: Introduction:",
        items: [
          "TypeScript = JS + Types",
          "tsc compiler",
          "tsconfig.json",
          "Gradual Adoption",
        ],
      },
      {
        heading: "Lesson 2: Basic Types:",
        items: [
          "string, number, boolean",
          "any vs unknown",
          "Union (|) Literal",
          "Tuple, Enum",
        ],
      },
      {
        heading: "Lesson 3: Interfaces:",
        items: [
          "interface vs type",
          "extends, readonly",
          "Pick, Omit, Partial",
          "Discriminated Unions",
        ],
      },
      {
        heading: "Lesson 4: Generics:",
        items: [
          "<T>(value: T): T",
          "T extends Type",
          "keyof, typeof",
          "Type Guards",
        ],
      },
      {
        heading: "Lesson 5: React:",
        items: [
          "Props Typing",
          "Hooks Typing",
          "Event Handlers",
          "Generics in React",
        ],
      },
      {
        heading: "Lesson 6: Project:",
        items: [
          "Branded Types",
          "Repository Pattern",
          "Mapped Types",
          "Task Manager App",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Projet Final TypeScript",
    columns: [
      {
        heading: "Leçon 1: Introduction:",
        items: [
          "TypeScript = JS + Types",
          "Compilateur tsc",
          "tsconfig.json",
          "Adoption progressive",
        ],
      },
      {
        heading: "Leçon 2: Types de base:",
        items: [
          "string, number, boolean",
          "any vs unknown",
          "Union (|) Literal",
          "Tuple, Enum",
        ],
      },
      {
        heading: "Leçon 3: Interfaces:",
        items: [
          "interface vs type",
          "extends, readonly",
          "Pick, Omit, Partial",
          "Discriminated Unions",
        ],
      },
      {
        heading: "Leçon 4: Generics:",
        items: [
          "<T>(value: T): T",
          "T extends Type",
          "keyof, typeof",
          "Type Guards",
        ],
      },
      {
        heading: "Leçon 5: React:",
        items: [
          "Typage des Props",
          "Typage des Hooks",
          "Event Handlers",
          "Generics in React",
        ],
      },
      {
        heading: "Leçon 6: Projet:",
        items: [
          "Branded Types",
          "Repository Pattern",
          "Mapped Types",
          "Application Task Manager",
        ],
      },
    ],
  },
  de: {
    title: "TypeScript Abschlussprojekt Spickzettel",
    columns: [
      {
        heading: "Lektion 1: Einführung:",
        items: [
          "TypeScript = JS + Types",
          "tsc Compiler",
          "tsconfig.json",
          "Gradual Adoption",
        ],
      },
      {
        heading: "Lektion 2: Grundlegende Typen:",
        items: [
          "string, number, boolean",
          "any vs unknown",
          "Union (|) Literal",
          "Tuple, Enum",
        ],
      },
      {
        heading: "Lektion 3: Interfaces:",
        items: [
          "interface vs type",
          "extends, readonly",
          "Pick, Omit, Partial",
          "Discriminated Unions",
        ],
      },
      {
        heading: "Lektion 4: Generics:",
        items: [
          "<T>(value: T): T",
          "T extends Type",
          "keyof, typeof",
          "Type Guards",
        ],
      },
      {
        heading: "Lektion 5: React:",
        items: [
          "Props Typing",
          "Hooks Typing",
          "Event Handlers",
          "Generics in React",
        ],
      },
      {
        heading: "Lektion 6: Projekt:",
        items: [
          "Branded Types",
          "Repository Pattern",
          "Mapped Types",
          "Task Manager App",
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

export default function TypeScriptFinalProject() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("typescript", "06-typescript-final-project");
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cs.columns.map((col, i) => (
              <div key={i}>
                <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{col.heading}</p>
                <ul className="text-xs space-y-1">
                  {col.items.map((item, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
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
