"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/nextjs/04-data-fetching-and-streaming";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 2, 2, 2, 1], fr: [1, 2, 2, 2, 1], de: [1, 2, 2, 2, 1], ar: [1, 2, 2, 2, 1] };

const challengeCode = `// الحل الكامل

// 1. ملف app/dashboard/loading.js
export default function DashboardLoading() {
  return (
    <div className="p-8">
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 bg-gray-200 rounded-xl"></div>
          <div className="h-24 bg-gray-200 rounded-xl"></div>
          <div className="h-24 bg-gray-200 rounded-xl"></div>
        </div>
        <div className="space-y-3">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

// 2. ملف app/dashboard/page.js
import { Suspense } from "react";

async function Stats() {
  const res = await fetch("https://api.example.com/stats", {
    cache: "no-store",
  });
  const stats = await res.json();

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-6 bg-blue-50 rounded-xl">
        <p className="text-sm text-blue-600">المستخدمون</p>
        <p className="text-3xl font-bold">{stats.users}</p>
      </div>
      <div className="p-6 bg-green-50 rounded-xl">
        <p className="text-sm text-green-600">المبيعات</p>
        <p className="text-3xl font-bold">{stats.sales}</p>
      </div>
      <div className="p-6 bg-purple-50 rounded-xl">
        <p className="text-sm text-purple-600">الطلبات</p>
        <p className="text-3xl font-bold">{stats.orders}</p>
      </div>
    </div>
  );
}

async function Activity() {
  const res = await fetch("https://api.example.com/activity", {
    cache: "no-store",
  });
  const activities = await res.json();

  return (
    <div className="space-y-3">
      {activities.map((a) => (
        <div key={a.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <span className="text-2xl">{a.icon}</span>
          <div>
            <p className="font-medium">{a.title}</p>
            <p className="text-sm text-gray-500">{a.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatsSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse p-6 bg-gray-100 rounded-xl">
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
}

function ActivitySkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-14 bg-gray-100 rounded-lg"></div>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">لوحة التحكم</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">الإحصائيات</h2>
        <Suspense fallback={<StatsSkeleton />}>
          <Stats />
        </Suspense>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">آخر النشاطات</h2>
        <Suspense fallback={<ActivitySkeleton />}>
          <Activity />
        </Suspense>
      </section>
    </div>
  );
}`;

const cheatSheetData = {
  en: {
    title: "Data Fetching & Streaming Cheat Sheet",
    columns: [
      {
        heading: "Server Component Fetching:",
        code: `// Simple: async/await directly
async function Page() {
  const res = await fetch("/api/data");
  const data = await res.json();
  return <div>{data.name}</div>;
}

// With caching
const res = await fetch("/api/data", {
  next: { revalidate: 3600 }
});

// Without caching
const res = await fetch("/api/data", {
  cache: "no-store"
});

// With tags
const res = await fetch("/api/data", {
  next: { tags: ["data"] }
});`,
        codeLanguage: "jsx",
      },
      {
        heading: "Parallel Fetching:",
        code: `// Promise.all - fails if one fails
const [a, b] = await Promise.all([
  fetch("/api/a"),
  fetch("/api/b"),
]);

// Promise.allSettled - safer
const results = await Promise.allSettled([
  fetch("/api/a"),
  fetch("/api/b"),
]);`,
        codeLanguage: "jsx",
      },
      {
        heading: "Streaming with Suspense:",
        code: `import { Suspense } from "react";

async function Page() {
  return (
    <div>
      <FastComponent />
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "loading.js:",
        code: `// app/dashboard/loading.js
export default function Loading() {
  return <p>Loading...</p>;
}
// Auto-displayed for each page in dashboard/`,
        codeLanguage: "jsx",
      },
    ],
  },
  fr: {
    title: "Fiche mémo Récupération de données & Streaming",
    columns: [
      {
        heading: "Récupération Server Component:",
        code: `// Simple: async/await directement
async function Page() {
  const res = await fetch("/api/data");
  const data = await res.json();
  return <div>{data.name}</div>;
}

// Avec cache
const res = await fetch("/api/data", {
  next: { revalidate: 3600 }
});

// Sans cache
const res = await fetch("/api/data", {
  cache: "no-store"
});

// Avec tags
const res = await fetch("/api/data", {
  next: { tags: ["data"] }
});`,
        codeLanguage: "jsx",
      },
      {
        heading: "Récupération parallèle:",
        code: `// Promise.all - échoue si un échoue
const [a, b] = await Promise.all([
  fetch("/api/a"),
  fetch("/api/b"),
]);

// Promise.allSettled - plus sûr
const results = await Promise.allSettled([
  fetch("/api/a"),
  fetch("/api/b"),
]);`,
        codeLanguage: "jsx",
      },
      {
        heading: "Streaming avec Suspense:",
        code: `import { Suspense } from "react";

async function Page() {
  return (
    <div>
      <FastComponent />
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "loading.js:",
        code: `// app/dashboard/loading.js
export default function Loading() {
  return <p>Chargement...</p>;
}
// Affiché automatiquement pour chaque page dans dashboard/`,
        codeLanguage: "jsx",
      },
    ],
  },
  de: {
    title: "Spickzettel Datenabruf & Streaming",
    columns: [
      {
        heading: "Server Component Abruf:",
        code: `// Einfach: async/await direkt
async function Page() {
  const res = await fetch("/api/data");
  const data = await res.json();
  return <div>{data.name}</div>;
}

// Mit Cache
const res = await fetch("/api/data", {
  next: { revalidate: 3600 }
});

// Ohne Cache
const res = await fetch("/api/data", {
  cache: "no-store"
});

// Mit Tags
const res = await fetch("/api/data", {
  next: { tags: ["data"] }
});`,
        codeLanguage: "jsx",
      },
      {
        heading: "Paralleler Abruf:",
        code: `// Promise.all - schlägt fehl wenn einer fehlschlägt
const [a, b] = await Promise.all([
  fetch("/api/a"),
  fetch("/api/b"),
]);

// Promise.allSettled - sicherer
const results = await Promise.allSettled([
  fetch("/api/a"),
  fetch("/api/b"),
]);`,
        codeLanguage: "jsx",
      },
      {
        heading: "Streaming mit Suspense:",
        code: `import { Suspense } from "react";

async function Page() {
  return (
    <div>
      <FastComponent />
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "loading.js:",
        code: `// app/dashboard/loading.js
export default function Loading() {
  return <p>Wird geladen...</p>;
}
// Wird automatisch für jede Seite in dashboard/ angezeigt`,
        codeLanguage: "jsx",
      },
    ],
  },
  ar: {
    title: "ملخص مراجعة جلب البيانات والبث",
    columns: [
      {
        heading: "جلب البيانات في Server Component:",
        code: `// بسيط: async/await مباشرة
async function Page() {
  const res = await fetch("/api/data");
  const data = await res.json();
  return <div>{data.name}</div>;
}

// مع التخزين المؤقت
const res = await fetch("/api/data", {
  next: { revalidate: 3600 }
});

// بدون تخزين مؤقت
const res = await fetch("/api/data", {
  cache: "no-store"
});

// مع الوسوم
const res = await fetch("/api/data", {
  next: { tags: ["data"] }
});`,
        codeLanguage: "jsx",
      },
      {
        heading: "الجلب المتوازي:",
        code: `// Promise.all - يفشل إذا فشل أحدهما
const [a, b] = await Promise.all([
  fetch("/api/a"),
  fetch("/api/b"),
]);

// Promise.allSettled - أكثر أماناً
const results = await Promise.allSettled([
  fetch("/api/a"),
  fetch("/api/b"),
]);`,
        codeLanguage: "jsx",
      },
      {
        heading: "البث باستخدام Suspense:",
        code: `import { Suspense } from "react";

async function Page() {
  return (
    <div>
      <FastComponent />
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "loading.js:",
        code: `// app/dashboard/loading.js
export default function Loading() {
  return <p>جاري التحميل...</p>;
}
// يعرض تلقائياً لكل صفحة في dashboard/`,
        codeLanguage: "jsx",
      },
    ],
  },
};

function renderContent(item) {
  if (item.type === "p") return <p dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "li") return <li dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "ol") return <ol dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "callout") return (<div className="p-4 rounded-xl my-4 border" style={{background:"var(--surface)",borderColor:"var(--border)"}}><p className="font-bold mb-2" style={{color:"var(--secondary)"}}>💡 {item.title}:</p><p dangerouslySetInnerHTML={{__html:item.text}}/></div>);
  if (item.type === "callout-accent") return (<div className="p-4 rounded-xl my-4 border" style={{background:"var(--surface)",borderColor:"var(--border)"}}><p className="font-bold mb-2" style={{color:"var(--accent)"}}>✅ {item.title}:</p><p dangerouslySetInnerHTML={{__html:item.text}}/></div>);
  if (item.type === "callout-primary") return (<div className="p-4 rounded-xl my-4 border" style={{background:"var(--surface)",borderColor:"var(--border)"}}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>🔍 {item.title}:</p><p dangerouslySetInnerHTML={{__html:item.text}}/></div>);
  return null;
}

export default function DataFetchingAndStreaming() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("nextjs", "04-data-fetching-and-streaming");
  const content = rawTranslations[lang] || rawTranslations.en;
  if (!content) return null;
  const answers = correctAnswers[lang] || correctAnswers.en;
  const cs = cheatSheetData[lang] || cheatSheetData.en;
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader stage={lessonInfo.stage} lesson={lessonInfo} lessonIndex={lessonInfo.lessonIndex} totalLessons={lessonInfo.totalLessons} />
        {content.sections.map((section, i) => (<LessonSection key={i} title={section.title}>{section.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}</LessonSection>))}
        {content.quiz && content.quiz.map((q, i) => (<Quiz key={i} question={q.question} options={q.options} correctAnswer={answers[i]} explanation={q.explanation} />))}
        {content.challenge && (<Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>{challengeCode && <CodeBlock language="tsx" code={challengeCode} />}</Challenge>)}
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "tsx"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
