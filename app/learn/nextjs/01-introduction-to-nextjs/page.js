"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/nextjs/01-introduction-to-nextjs";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 2, 2, 1, 2], fr: [1, 2, 2, 1, 2], de: [1, 2, 2, 1, 2], ar: [1, 2, 2, 1, 2] };

const challengeCode = `// app/page.js - بعد التعديل
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>مرحباً من Next.js 16!</h1>
      <p>هذا أول مشروع Next.js لي 🎉</p>
    </main>
  );
}

// شغّل:
// npm run dev
// ثم افتح: http://localhost:3000`;

const cheatSheetData = {
  en: {
    title: "Next.js Cheat Sheet - Lesson 1",
    columns: [
      {
        heading: "Basic Commands:",
        items: [
          '<code className="inline-code">npx create-next-app@latest</code> - Create project',
          '<code className="inline-code">npm run dev</code> - Start dev server',
          '<code className="inline-code">npm run build</code> - Build for production',
          '<code className="inline-code">npm run start</code> - Start production',
        ],
      },
      {
        heading: "Basic app/ Structure:",
        code: `app/
├── layout.js     # Main layout
├── page.js       # Home page /
├── loading.js    # Loading state
├── error.js      # Error handling
└── not-found.js  # 404 page`,
        codeLanguage: "bash",
      },
      {
        heading: "Environment Variables:",
        items: [
          '<code className="inline-code">.env</code> - Public',
          '<code className="inline-code">.env.local</code> - Local (secret)',
          '<code className="inline-code">NEXT_PUBLIC_</code> prefix for Client',
        ],
      },
      {
        heading: "What's New in v16:",
        items: [
          "Turbopack default - 5x faster",
          'Cache Components - "use cache"',
          "React Compiler stable",
          "Proxy instead of Middleware",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Next.js - Leçon 1",
    columns: [
      {
        heading: "Commandes de base:",
        items: [
          '<code className="inline-code">npx create-next-app@latest</code> - Créer un projet',
          '<code className="inline-code">npm run dev</code> - Démarrer le serveur de dev',
          '<code className="inline-code">npm run build</code> - Construire pour la production',
          '<code className="inline-code">npm run start</code> - Démarrer la production',
        ],
      },
      {
        heading: "Structure app/ de base:",
        code: `app/
├── layout.js     # Mise en page principale
├── page.js       # Page d'accueil /
├── loading.js    # État de chargement
├── error.js      # Gestion des erreurs
└── not-found.js  # Page 404`,
        codeLanguage: "bash",
      },
      {
        heading: "Variables d'environnement:",
        items: [
          '<code className="inline-code">.env</code> - Public',
          '<code className="inline-code">.env.local</code> - Local (secret)',
          'Préfixe <code className="inline-code">NEXT_PUBLIC_</code> pour le Client',
        ],
      },
      {
        heading: "Nouveautés de v16:",
        items: [
          "Turbopack par défaut - 5x plus rapide",
          'Cache Components - "use cache"',
          "React Compiler stable",
          "Proxy au lieu de Middleware",
        ],
      },
    ],
  },
  de: {
    title: "Next.js Spickzettel - Lektion 1",
    columns: [
      {
        heading: "Grundbefehle:",
        items: [
          '<code className="inline-code">npx create-next-app@latest</code> - Projekt erstellen',
          '<code className="inline-code">npm run dev</code> - Dev-Server starten',
          '<code className="inline-code">npm run build</code> - Für Produktion bauen',
          '<code className="inline-code">npm run start</code> - Produktion starten',
        ],
      },
      {
        heading: "Grundlegende app/ Struktur:",
        code: `app/
├── layout.js     # Hauptlayout
├── page.js       # Startseite /
├── loading.js    # Ladezustand
├── error.js      # Fehlerbehandlung
└── not-found.js  # 404-Seite`,
        codeLanguage: "bash",
      },
      {
        heading: "Umgebungsvariablen:",
        items: [
          '<code className="inline-code">.env</code> - Öffentlich',
          '<code className="inline-code">.env.local</code> - Lokal (geheim)',
          '<code className="inline-code">NEXT_PUBLIC_</code> Präfix für Client',
        ],
      },
      {
        heading: "Neuigkeiten in v16:",
        items: [
          "Turbopack als Standard - 5x schneller",
          'Cache Components - "use cache"',
          "React Compiler stabil",
          "Proxy statt Middleware",
        ],
      },
    ],
  },
  ar: {
    title: "ملخص مراجعة مقدمة Next.js - الدرس 1",
    columns: [
      {
        heading: "الأوامر الأساسية:",
        items: [
          '<code className="inline-code">npx create-next-app@latest</code> - إنشاء مشروع جديد',
          '<code className="inline-code">npm run dev</code> - تشغيل وضع التطوير',
          '<code className="inline-code">npm run build</code> - بناء نسخة الإنتاج',
          '<code className="inline-code">npm run start</code> - تشغيل الإنتاج',
        ],
      },
      {
        heading: "هيكل app/ الأساسي:",
        code: `app/
├── layout.js     # التخطيط الرئيسي
├── page.js       # الصفحة الرئيسية /
├── loading.js    # حالة التحميل
├── error.js      # معالجة الأخطاء
└── not-found.js  # صفحة 404`,
        codeLanguage: "bash",
      },
      {
        heading: "متغيرات البيئة:",
        items: [
          '<code className="inline-code">.env</code> - عامة',
          '<code className="inline-code">.env.local</code> - محلية (سرية)',
          'بادئة <code className="inline-code">NEXT_PUBLIC_</code> للوصول من المتصفح',
        ],
      },
      {
        heading: "ما الجديد في v16:",
        items: [
          "Turbopack كافتراضي - أسرع 5 مرات",
          'Cache Components - "use cache"',
          "React Compiler مستقر",
          "Proxy بدلاً من Middleware",
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

export default function IntroductionToNextjs() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("nextjs", "01-introduction-to-nextjs");
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
