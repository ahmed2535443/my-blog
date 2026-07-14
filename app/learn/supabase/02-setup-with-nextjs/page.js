"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/supabase/02-supabase-installation-setup";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1], fr: [1], de: [1] };

const challengeCode = `npm install @supabase/supabase-js @supabase/ssr

# Create .env.local
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Create utils/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll() { return cookieStore.getAll() }, setAll(cookiesToSet) { try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)) } catch {} } } }
  )
}`;

const cheatSheetData = {
  en: {
    title: "Supabase Setup Cheat Sheet",
    columns: [
      {
        heading: "Key Points:",
        items: [
          "Use @supabase/ssr (not auth-helpers)",
          "Server Client for Server Components/Actions",
          "Browser Client for Client Components",
          "Middleware refreshes sessions",
          "Store keys in .env.local with NEXT_PUBLIC_ prefix",
        ],
      },
      {
        heading: "Example:",
        code: `npm install @supabase/supabase-js @supabase/ssr

# utils/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient(url, key, {
    cookies: {
      getAll() { return cookieStore.getAll() },
      setAll(cookiesToSet) { /* ... */ }
    }
  })
}`,
        codeLanguage: "typescript",
      },
    ],
  },
  fr: {
    title: "Supabase Configuration Fiche mémo",
    columns: [
      {
        heading: "Points clés:",
        items: [
          "Utilisez @supabase/ssr (pas auth-helpers)",
          "Server Client pour Server Components",
          "Browser Client pour Client Components",
          "Le Middleware rafraîchit les sessions",
        ],
      },
      {
        heading: "Exemple:",
        code: `npm install @supabase/supabase-js @supabase/ssr`,
        codeLanguage: "bash",
      },
    ],
  },
  de: {
    title: "Supabase Einrichtung Spickzettel",
    columns: [
      {
        heading: "Hauptpunkte:",
        items: [
          "Verwenden Sie @supabase/ssr (nicht auth-helpers)",
          "Server Client für Server Components",
          "Browser Client für Client Components",
          "Middleware aktualisiert Sitzungen",
        ],
      },
      {
        heading: "Beispiel:",
        code: `npm install @supabase/supabase-js @supabase/ssr`,
        codeLanguage: "bash",
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

export default function LessonComponent() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("supabase", "02-setup-with-nextjs");
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
        {content.challenge && (<Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>{challengeCode && <CodeBlock language="bash" code={challengeCode} />}</Challenge>)}
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "typescript"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
