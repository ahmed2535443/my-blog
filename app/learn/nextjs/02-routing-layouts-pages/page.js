"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/nextjs/02-routing-layouts-pages";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [2, 1, 1, 1, 2], fr: [2, 1, 1, 1, 2], de: [2, 1, 1, 1, 2], ar: [2, 1, 1, 1, 2] };

const challengeCode = `// app/layout.js - التخطيط الرئيسي
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <header>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">الرئيسية</Link>
            <Link href="/about">من نحن</Link>
            <Link href="/blog">المدونة</Link>
            <Link href="/dashboard">لوحة التحكم</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2026 CodeMaster</footer>
      </body>
    </html>
  );
}

// app/blog/[slug]/page.js - مقال ديناميكي
const posts = [
  { slug: "hello-world", title: "مرحباً بالعالم" },
  { slug: "nextjs-guide", title: "دليل Next.js" },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <h1>المقال غير موجود</h1>;
  return <h1>{post.title}</h1>;
}`;

const cheatSheetData = {
  en: {
    title: "Routing Cheat Sheet - Lesson 2",
    columns: [
      {
        heading: "Route Structure:",
        items: [
          '<code className="inline-code">page.js</code> - Route page',
          '<code className="inline-code">layout.js</code> - Shared layout',
          '<code className="inline-code">[slug]/page.js</code> - Dynamic route',
          '<code className="inline-code">(group)/page.js</code> - Route Group',
          '<code className="inline-code">@slot/page.js</code> - Parallel Route',
        ],
      },
      {
        heading: "Navigation:",
        items: [
          '<code className="inline-code">{"<Link href=\"/about\">"}</code> - Link',
          '<code className="inline-code">router.push()</code> - Programmatic',
          '<code className="inline-code">router.replace()</code> - Replace',
          '<code className="inline-code">router.back()</code> - Go back',
        ],
      },
      {
        heading: "Advanced Concepts:",
        items: [
          '<code className="inline-code">generateStaticParams</code> - Static route generation',
          '<code className="inline-code">params</code> - Object with slug',
          '<code className="inline-code">(.)</code> <code className="inline-code">(..)</code> - Intercepting Routes',
        ],
      },
      {
        heading: "Important Rules:",
        items: [
          "File name must be exactly page.js",
          "params is a Promise - use await",
          "layout.js is always Server Component",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Routage - Leçon 2",
    columns: [
      {
        heading: "Structure des routes:",
        items: [
          '<code className="inline-code">page.js</code> - Page de route',
          '<code className="inline-code">layout.js</code> - Mise en page partagée',
          '<code className="inline-code">[slug]/page.js</code> - Route dynamique',
          '<code className="inline-code">(group)/page.js</code> - Groupe de routes',
          '<code className="inline-code">@slot/page.js</code> - Route parallèle',
        ],
      },
      {
        heading: "Navigation:",
        items: [
          '<code className="inline-code">{"<Link href=\"/about\">"}</code> - Link',
          '<code className="inline-code">router.push()</code> - Programmique',
          '<code className="inline-code">router.replace()</code> - Remplacer',
          '<code className="inline-code">router.back()</code> - Retour',
        ],
      },
      {
        heading: "Concepts avancés:",
        items: [
          '<code className="inline-code">generateStaticParams</code> - Génération de routes statiques',
          '<code className="inline-code">params</code> - Objet avec slug',
          '<code className="inline-code">(.)</code> <code className="inline-code">(..)</code> - Routes interceptées',
        ],
      },
      {
        heading: "Règles importantes:",
        items: [
          "Le nom du fichier doit être exactement page.js",
          "params est une Promise - utilisez await",
          "layout.js est toujours un Server Component",
        ],
      },
    ],
  },
  de: {
    title: "Routing Spickzettel - Lektion 2",
    columns: [
      {
        heading: "Routenstruktur:",
        items: [
          '<code className="inline-code">page.js</code> - Routen-Seite',
          '<code className="inline-code">layout.js</code> - Geteiltes Layout',
          '<code className="inline-code">[slug]/page.js</code> - Dynamische Route',
          '<code className="inline-code">(group)/page.js</code> - Routengruppe',
          '<code className="inline-code">@slot/page.js</code> - Parallele Route',
        ],
      },
      {
        heading: "Navigation:",
        items: [
          '<code className="inline-code">{"<Link href=\"/about\">"}</code> - Link',
          '<code className="inline-code">router.push()</code> - Programmatisch',
          '<code className="inline-code">router.replace()</code> - Ersetzen',
          '<code className="inline-code">router.back()</code> - Zurück',
        ],
      },
      {
        heading: "Fortgeschrittene Konzepte:",
        items: [
          '<code className="inline-code">generateStaticParams</code> - Statische Routengenerierung',
          '<code className="inline-code">params</code> - Objekt mit slug',
          '<code className="inline-code">(.)</code> <code className="inline-code">(..)</code> - Abfangende Routen',
        ],
      },
      {
        heading: "Wichtige Regeln:",
        items: [
          "Dateiname muss genau page.js sein",
          "params ist ein Promise - verwende await",
          "layout.js ist immer Server Component",
        ],
      },
    ],
  },
  ar: {
    title: "ملخص مراجعة التوجيه - الدرس 2",
    columns: [
      {
        heading: "هيكل المسار:",
        items: [
          '<code className="inline-code">page.js</code> - صفحة المسار',
          '<code className="inline-code">layout.js</code> - التخطيط المشترك',
          '<code className="inline-code">[slug]/page.js</code> - مسار ديناميكي',
          '<code className="inline-code">(group)/page.js</code> - مجموعة مسارات',
          '<code className="inline-code">@slot/page.js</code> - مسار متوازي',
        ],
      },
      {
        heading: "التنقل:",
        items: [
          '<code className="inline-code">{"<Link href=\"/about\">"}</code> - رابط التنقل',
          '<code className="inline-code">router.push()</code> - تنقل برمجي',
          '<code className="inline-code">router.replace()</code> - استبدال',
          '<code className="inline-code">router.back()</code> - رجوع',
        ],
      },
      {
        heading: "مفاهيم متقدمة:",
        items: [
          '<code className="inline-code">generateStaticParams</code> - إنشاء مسارات ثابتة',
          '<code className="inline-code">params</code> - كائن يحتوي على slug',
          '<code className="inline-code">(.)</code> <code className="inline-code">(..)</code> - مسارات اعتراضية',
        ],
      },
      {
        heading: "قواعد مهمة:",
        items: [
          "اسم الملف يجب أن يكون بالضبط page.js",
          "params هو Promise - استخدم await",
          "layout.js هو دائماً Server Component",
        ],
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

export default function RoutingLayoutsPages() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("nextjs", "02-routing-layouts-pages");
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
