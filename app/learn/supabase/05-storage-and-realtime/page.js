"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/supabase/05-supabase-storage";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [2, 2, 1, 1], en: [2, 2, 1, 1], fr: [1], de: [1] };

const challengeCode = `// Create bucket
const { data, error } = await supabase.storage.createBucket('avatars', {
  public: true,
  allowedMimeTypes: ['image/*'],
  fileSizeLimit: '1MB',
})

// Upload file
const { data, error } = await supabase.storage
  .from('avatars')
  .upload('user-id/profile.jpg', file)

// Get public URL
const { data } = supabase.storage
  .from('avatars')
  .getPublicUrl('user-id/profile.jpg')

// Subscribe to changes
const channel = supabase
  .channel('posts-changes')
  .on('postgres_changes',
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => console.log('Change:', payload)
  )
  .subscribe()`;

const cheatSheetData = {
  ar: {
    title: "ملخص مراجعة التخزين والوقت الفوري",
    columns: [
      {
        heading: "نقاط رئيسية:",
        items: [
          ".from('bucket') — اختيار نبضة التخزين",
          ".upload('path', file') — رفع ملف",
          ".getPublicUrl('path') — جلب رابط الملف",
          "RLS — الأمان على مستوى الصف للتخزين",
          "CREATE POLICY — تحديد قواعد الوصول",
          "Database Changes — الاستماع لتغييرات الجداول",
          "Broadcast — مراسلة فورية بين المستخدمين",
          "Presence — تتبع المستخدمين المتصلين",
        ],
      },
      {
        heading: "Example:",
        code: `// Upload
await supabase.storage
  .from('bucket').upload('path', file)

// Realtime
const channel = supabase.channel('changes')
  .on('postgres_changes',
    { event: '*', table: 'posts' },
    (payload) => console.log(payload)
  )
  .subscribe()`,
        codeLanguage: "typescript",
      },
    ],
  },
  fr: {
    title: "Stockage & Realtime Fiche mémo",
    columns: [
      {
        heading: "Points clés:",
        items: [
          ".upload('path', file) — télécharger un fichier",
          "RLS — sécurité au niveau des lignes",
          "Database Changes — écouter les changements",
          "Broadcast — messagerie instantanée",
        ],
      },
      {
        heading: "Exemple:",
        code: `await supabase.storage.from('bucket').upload('path', file)`,
        codeLanguage: "typescript",
      },
    ],
  },
  de: {
    title: "Speicher & Realtime Spickzettel",
    columns: [
      {
        heading: "Hauptpunkte:",
        items: [
          ".upload('path', file) — Datei hochladen",
          "RLS — zeilenbasierte Sicherheit",
          "Database Changes — Änderungen überwachen",
          "Broadcast — Sofortnachrichten",
        ],
      },
      {
        heading: "Beispiel:",
        code: `await supabase.storage.from('bucket').upload('path', file)`,
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
  const lessonInfo = getLessonBySlug("supabase", "05-storage-and-realtime");
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
        {content.challenge && (<Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>{challengeCode && <CodeBlock language="typescript" code={challengeCode} />}</Challenge>)}
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "typescript"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
