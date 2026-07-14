"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/supabase/01-what-is-supabase";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [2, 2, 0, 2], fr: [2], de: [2] };

const challengeCode = `// Go to supabase.com and create a free account
// Create a new project with a unique name
// Open SQL Editor and create the todos table
// Copy the Project URL and anon key
// Open Table Editor and add some data manually
// Run your first query:
supabase.from('todos').select('*')`;

const cheatSheetData = {
  en: {
    title: "Supabase Getting Started Cheat Sheet",
    columns: [
      {
        heading: "Key Points:",
        items: [
          "Supabase is an open-source BaaS built on PostgreSQL",
          "Components: Database, Auth, Storage, Realtime, Edge Functions",
          "Single JS client: @supabase/supabase-js",
          "Queries are translated to SQL via PostgREST",
          "Great for MVPs, real-time apps, avoiding vendor lock-in",
        ],
      },
      {
        heading: "Example:",
        code: `// Install
npm install @supabase/supabase-js

// Create client
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(url, key)

// Fetch data
const { data, error } = await supabase
  .from('todos')
  .select('*')`,
        codeLanguage: "javascript",
      },
    ],
  },
  fr: {
    title: "Supabase Fiche mémo",
    columns: [
      {
        heading: "Points clés:",
        items: [
          "Supabase est un BaaS open-source basé sur PostgreSQL",
          "Composants: Database, Auth, Storage, Realtime, Edge Functions",
          "Un seul client JS: @supabase/supabase-js",
          "Les requêtes sont traduites en SQL via PostgREST",
        ],
      },
      {
        heading: "Exemple:",
        code: `npm install @supabase/supabase-js

import { createClient } from '@supabase/supabase-js'
const supabase = createClient(url, key)

const { data, error } = await supabase
  .from('todos')
  .select('*')`,
        codeLanguage: "javascript",
      },
    ],
  },
  de: {
    title: "Supabase Spickzettel",
    columns: [
      {
        heading: "Hauptpunkte:",
        items: [
          "Supabase ist eine Open-Source-BaaS auf PostgreSQL-Basis",
          "Komponenten: Database, Auth, Storage, Realtime, Edge Functions",
          "Einzelner JS-Client: @supabase/supabase-js",
          "Abfragen werden via PostgREST in SQL übersetzt",
        ],
      },
      {
        heading: "Beispiel:",
        code: `npm install @supabase/supabase-js

import { createClient } from '@supabase/supabase-js'
const supabase = createClient(url, key)

const { data, error } = await supabase
  .from('todos')
  .select('*')`,
        codeLanguage: "javascript",
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
  const lessonInfo = getLessonBySlug("supabase", "01-what-is-supabase");
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
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "javascript"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
