"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/nextjs/10-nextjs-final-project";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1, 1, 2], fr: [1, 1, 1, 1, 2], de: [1, 1, 1, 1, 2], ar: [1, 1, 1, 1, 2] };

const challengeCode = `// صفحة تصنيف في /blog/category/[name]
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";

async function getPostsByCategory(categoryName) {
  const res = await fetch(
    \`https://api.example.com/posts?category=\${categoryName}\`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function CategoryPage({ params }) {
  const { name } = await params;
  const displayName = decodeURIComponent(name);
  const posts = await getPostsByCategory(name);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900">
        تصنيف: {displayName}
      </h1>
      <p className="text-gray-500 mb-8">{posts.length} مقال</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

// Route Handler لإضافة تعليق
// app/api/comments/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { postId, author, content } = body;

    if (!author || author.length < 2) {
      return NextResponse.json(
        { success: false, error: "الاسم مطلوب" },
        { status: 400 }
      );
    }

    if (!content || content.length < 10) {
      return NextResponse.json(
        { success: false, error: "التعليق قصير جداً" },
        { status: 400 }
      );
    }

    // حفظ التعليق في قاعدة البيانات
    const comment = await db.comments.create({
      data: { postId, author, content },
    });

    return NextResponse.json({ success: true, data: comment }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "خطأ داخلي" },
      { status: 500 }
    );
  }
}`;

const cheatSheetData = {
  en: {
    title: "Next.js 16 - Complete Cheat Sheet",
    columns: [
      {
        heading: "Quick Start:",
        code: `npx create-next-app@latest my-app
cd my-app
npm run dev`,
        codeLanguage: "bash",
      },
      {
        heading: "Basic Routing:",
        code: `app/page.js                    → /
app/about/page.js              → /about
app/blog/[slug]/page.js        → /blog/:slug
app/(auth)/login/page.js       → /login`,
        codeLanguage: "bash",
      },
      {
        heading: "Layouts:",
        code: `// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Server Components:",
        code: `// No "use client" = Server Component
async function MyComponent() {
  const data = await fetch("https://api.example.com/data");
  const json = await data.json();
  return <div>{json.title}</div>;
}`,
        codeLanguage: "jsx",
      },
    ],
  },
  fr: {
    title: "Next.js 16 - Fiche mémo complète",
    columns: [
      {
        heading: "Démarrage rapide:",
        code: `npx create-next-app@latest my-app
cd my-app
npm run dev`,
        codeLanguage: "bash",
      },
      {
        heading: "Routage de base:",
        code: `app/page.js                    → /
app/about/page.js              → /about
app/blog/[slug]/page.js        → /blog/:slug
app/(auth)/login/page.js       → /login`,
        codeLanguage: "bash",
      },
      {
        heading: "Mises en page:",
        code: `// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Server Components:",
        code: `// Pas de "use client" = Server Component
async function MyComponent() {
  const data = await fetch("https://api.example.com/data");
  const json = await data.json();
  return <div>{json.title}</div>;
}`,
        codeLanguage: "jsx",
      },
    ],
  },
  de: {
    title: "Next.js 16 - Vollständiger Spickzettel",
    columns: [
      {
        heading: "Schnellstart:",
        code: `npx create-next-app@latest my-app
cd my-app
npm run dev`,
        codeLanguage: "bash",
      },
      {
        heading: "Basis-Routing:",
        code: `app/page.js                    → /
app/about/page.js              → /about
app/blog/[slug]/page.js        → /blog/:slug
app/(auth)/login/page.js       → /login`,
        codeLanguage: "bash",
      },
      {
        heading: "Layouts:",
        code: `// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Server Components:",
        code: `// Kein "use client" = Server Component
async function MyComponent() {
  const data = await fetch("https://api.example.com/data");
  const json = await data.json();
  return <div>{json.title}</div>;
}`,
        codeLanguage: "jsx",
      },
    ],
  },
  ar: {
    title: "Next.js 16 - ملخص مراجعة شامل",
    columns: [
      {
        heading: "البدء السريع:",
        code: `npx create-next-app@latest my-app
cd my-app
npm run dev`,
        codeLanguage: "bash",
      },
      {
        heading: "التوجيه الأساسي:",
        code: `app/page.js                    → /
app/about/page.js              → /about
app/blog/[slug]/page.js        → /blog/:slug
app/(auth)/login/page.js       → /login`,
        codeLanguage: "bash",
      },
      {
        heading: "التخطيطات:",
        code: `// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "مكونات الخادم:",
        code: `// بدون "use client" = Server Component
async function MyComponent() {
  const data = await fetch("https://api.example.com/data");
  const json = await data.json();
  return <div>{json.title}</div>;
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

export default function NextjsFinalProject() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("nextjs", "10-nextjs-final-project");
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
