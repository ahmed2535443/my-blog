"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/supabase/03-supabase-database";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [0, 2, 1], en: [0, 2, 1], fr: [0], de: [0] };

const challengeCode = `CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

// Add 3 records using Table Editor or:
await supabase.from('posts').insert([
  { title: 'First Post', content: 'Hello World' },
  { title: 'Second Post', content: 'Learning Supabase' },
  { title: 'Third Post', content: 'CRUD is easy' }
]);`;

const cheatSheetData = {
  ar: {
    title: "ملخص مراجعة قواعد البيانات و CRUD",
    columns: [
      {
        heading: "نقاط رئيسية:",
        items: [
          "الجداول: مجموعات بيانات مرتبطة مع صفوف وأعمدة",
          "CRUD: الإنشاء والقراءة والتحديث والحذف",
          ".from('table') — اختيار جدول",
          ".select('*') — اختيار جميع الأعمدة",
          ".eq('col', val') — حيث العمود يساوي القيمة",
          "استخدم دائماً الفلاتر مع update/delete!",
        ],
      },
      {
        heading: "مثال:",
        code: `// Create
await supabase.from('posts').insert({ title: 'Hello' });

// Read
const { data } = await supabase.from('posts').select('*');

// Update
await supabase.from('posts')
  .update({ title: 'Updated' }).eq('id', 1);

// Delete
await supabase.from('posts').delete().eq('id', 1);`,
        codeLanguage: "javascript",
      },
    ],
  },
  fr: {
    title: "Base de données & CRUD Fiche mémo",
    columns: [
      {
        heading: "Points clés:",
        items: [
          "Tables: collections de données liées",
          "CRUD: Create, Read, Update, Delete",
          ".from('table') — sélectionner une table",
          ".select('*') — toutes les colonnes",
        ],
      },
      {
        heading: "Exemple:",
        code: `await supabase.from('posts').insert({ title: 'Bonjour' });
const { data } = await supabase.from('posts').select('*');`,
        codeLanguage: "javascript",
      },
    ],
  },
  de: {
    title: "Datenbank & CRUD Spickzettel",
    columns: [
      {
        heading: "Hauptpunkte:",
        items: [
          "Tabellen: Sammlungen verwandter Daten",
          "CRUD: Create, Read, Update, Delete",
          ".from('table') — Tabelle auswählen",
          ".select('*') — alle Spalten",
        ],
      },
      {
        heading: "Beispiel:",
        code: `await supabase.from('posts').insert({ title: 'Hallo' });
const { data } = await supabase.from('posts').select('*');`,
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
  const lessonInfo = getLessonBySlug("supabase", "03-database-and-crud");
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
        {content.challenge && (<Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>{challengeCode && <CodeBlock language="sql" code={challengeCode} />}</Challenge>)}
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "javascript"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
