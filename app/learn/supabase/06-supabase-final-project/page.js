"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/supabase/06-supabase-final-project";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1], en: [1, 1, 1], fr: [1], de: [1] };

const challengeCode = `// Add task categories
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  color TEXT DEFAULT '#3B82F6',
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own categories" ON categories
  FOR ALL USING (auth.uid() = user_id);

// Add priority column
ALTER TABLE tasks ADD COLUMN priority TEXT
  DEFAULT 'medium'
  CHECK (priority IN ('low', 'medium', 'high', 'urgent'));`;

const cheatSheetData = {
  ar: {
    title: "ملخص مراجعة Supabase الكامل",
    columns: [
      {
        heading: "نقاط رئيسية:",
        items: [
          "createClient(url, key) — تهيئة العميل",
          ".from('table').select('*') — قراءة البيانات",
          ".insert({}) — إنشاء سجل",
          ".update({}).eq('id', val) — تحديث سجل",
          ".delete().eq('id', val) — حذف سجل",
          "signUp() / signInWithPassword() — المصادقة",
          ".upload('path', file) — رفع ملف",
          "RLS + Policies — الأمان على مستوى الصف",
          ".env.local — تخزين متغيرات البيئة",
        ],
      },
      {
        heading: "مثال:",
        code: `// CRUD
await supabase.from('tasks').insert({ title: 'New' })
const { data } = await supabase.from('tasks').select('*')
await supabase.from('tasks').update({ status: 'done' }).eq('id', id)
await supabase.from('tasks').delete().eq('id', id)

// Auth
await supabase.auth.signInWithPassword({ email, password })
await supabase.auth.signOut()

// Storage
await supabase.storage.from('bucket').upload('path', file)`,
        codeLanguage: "typescript",
      },
    ],
  },
  fr: {
    title: "Supabase Fiche mémo complète",
    columns: [
      {
        heading: "Points clés:",
        items: [
          "createClient(url, key) — initialiser le client",
          ".from('table').select('*') — lire les données",
          ".insert({}) — créer un enregistrement",
          "signUp() — inscrire un utilisateur",
          "RLS + Policies — sécurité au niveau des lignes",
        ],
      },
      {
        heading: "Exemple:",
        code: `await supabase.from('tasks').insert({ title: 'Nouveau' })
const { data } = await supabase.from('tasks').select('*')`,
        codeLanguage: "typescript",
      },
    ],
  },
  de: {
    title: "Supabase Vollständiger Spickzettel",
    columns: [
      {
        heading: "Hauptpunkte:",
        items: [
          "createClient(url, key) — Client initialisieren",
          ".from('table').select('*') — Daten lesen",
          ".insert({}) — Datensatz erstellen",
          "signUp() — Benutzer registrieren",
          "RLS + Policies — zeilenbasierte Sicherheit",
        ],
      },
      {
        heading: "Beispiel:",
        code: `await supabase.from('tasks').insert({ title: 'Neu' })
const { data } = await supabase.from('tasks').select('*')`,
        codeLanguage: "typescript",
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
  const lessonInfo = getLessonBySlug("supabase", "06-supabase-final-project");
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
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "typescript"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
