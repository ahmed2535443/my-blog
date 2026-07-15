"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/nextjs/07-error-handling";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1, 1, 2], fr: [1, 1, 1, 1, 2], de: [1, 1, 1, 1, 2], ar: [1, 1, 1, 1, 2] };

const challengeCode = `// نموذج error.js رئيسي
"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <div className="text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        حدث خطأ غير متوقع
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        نعتذر، واجهنا مشكلة. يرجى المحاولة مرة أخرى.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        حاول مرة أخرى
      </button>
    </div>
  );
}

// نموذج not-found.js مخصص
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-8xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        الصفحة غير موجودة
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        عذراً، الصفحة التي تبحث عنها غير موجودة.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}

// نموذج global-error.js
"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            خطأ عام في التطبيق
          </h2>
          <p className="text-gray-600 mb-6">
            حدث خطأ غير متوقع في التطبيق بالكامل.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            إعادة تحميل التطبيق
          </button>
        </div>
      </body>
    </html>
  );
}`;

const cheatSheetData = {
  en: {
    title: "Error Handling Cheat Sheet",
    columns: [
      {
        heading: "error.js",
        items: [
          "Catches errors in nested route segments",
          "Must be a Client Component",
          "Receives error and reset props",
        ],
        code: `"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Error!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "not-found.js",
        items: [
          "Custom 404 page",
          "Triggered by notFound() function",
        ],
        code: `import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link href="/">Go Home</Link>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "global-error.js",
        items: [
          "Catches root layout errors",
          "Must include html and body tags",
        ],
        code: `"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ar">
      <body>
        <h2>Global Error</h2>
        <button onClick={reset}>Reload</button>
      </body>
    </html>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "notFound() & redirect():",
        code: `import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const data = await fetchData(params.id);
  if (!data) notFound();
  return <div>{data.title}</div>;
}

import { redirect } from "next/navigation";

async function getData() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    redirect("/error");
  }
}`,
        codeLanguage: "jsx",
      },
    ],
  },
  fr: {
    title: "Fiche mémo Gestion des erreurs",
    columns: [
      {
        heading: "error.js",
        items: [
          "Capture les erreurs dans les segments de routes imbriquées",
          "Doit être un Client Component",
          "Reçoit les props error et reset",
        ],
        code: `"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Erreur!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Réessayer</button>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "not-found.js",
        items: [
          "Page 404 personnalisée",
          "Déclenchée par la fonction notFound()",
        ],
        code: `import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404 - Page non trouvée</h2>
      <Link href="/">Retour à l'accueil</Link>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "global-error.js",
        items: [
          "Capture les erreurs du layout racine",
          "Doit inclure les balises html et body",
        ],
        code: `"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ar">
      <body>
        <h2>Erreur globale</h2>
        <button onClick={reset}>Recharger</button>
      </body>
    </html>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "notFound() & redirect():",
        code: `import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const data = await fetchData(params.id);
  if (!data) notFound();
  return <div>{data.title}</div>;
}

import { redirect } from "next/navigation";

async function getData() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    redirect("/error");
  }
}`,
        codeLanguage: "jsx",
      },
    ],
  },
  de: {
    title: "Spickzettel Fehlerbehandlung",
    columns: [
      {
        heading: "error.js",
        items: [
          "Fängt Fehler in verschachtelten Routen-Segmenten ab",
          "Muss ein Client Component sein",
          "Empfängt error und reset Props",
        ],
        code: `"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Fehler!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Erneut versuchen</button>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "not-found.js",
        items: [
          "Benutzerdefinierte 404-Seite",
          "Wird durch notFound() Funktion ausgelöst",
        ],
        code: `import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404 - Seite nicht gefunden</h2>
      <Link href="/">Zur Startseite</Link>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "global-error.js",
        items: [
          "Fängt Root-Layout-Fehler ab",
          "Muss html und body Tags enthalten",
        ],
        code: `"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ar">
      <body>
        <h2>Globaler Fehler</h2>
        <button onClick={reset}>Neu laden</button>
      </body>
    </html>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "notFound() & redirect():",
        code: `import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const data = await fetchData(params.id);
  if (!data) notFound();
  return <div>{data.title}</div>;
}

import { redirect } from "next/navigation";

async function getData() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    redirect("/error");
  }
}`,
        codeLanguage: "jsx",
      },
    ],
  },
  ar: {
    title: "ملخص مراجعة معالجة الأخطاء",
    columns: [
      {
        heading: "error.js",
        items: [
          "يلتقط الأخطاء في أجزاء المسارات المتداخلة",
          "يجب أن يكون مكون عميل",
          "يتلقى خصائص error و reset",
        ],
        code: `"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>خطأ!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>إعادة المحاولة</button>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "not-found.js",
        items: [
          "صفحة 404 مخصصة",
          "تُشغّل بدالة notFound()",
        ],
        code: `import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404 - الصفحة غير موجودة</h2>
      <Link href="/">العودة للرئيسية</Link>
    </div>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "global-error.js",
        items: [
          "يلتقط أخطاء التخطيط الجذري",
          "يجب أن يحتوي على وسوم html و body",
        ],
        code: `"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ar">
      <body>
        <h2>خطأ عام</h2>
        <button onClick={reset}>إعادة التحميل</button>
      </body>
    </html>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "notFound() & redirect():",
        code: `import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const data = await fetchData(params.id);
  if (!data) notFound();
  return <div>{data.title}</div>;
}

import { redirect } from "next/navigation";

async function getData() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    redirect("/error");
  }
}`,
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

export default function ErrorHandling() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("nextjs", "07-error-handling");
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
        <LessonExtras content={content} />
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
