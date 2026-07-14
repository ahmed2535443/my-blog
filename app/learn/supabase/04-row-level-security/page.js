"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/supabase/04-supabase-authentication";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [3, 1], fr: [2], de: [2] };

const challengeCode = `// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securePassword123'
});

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'securePassword123'
});

// Sign out
await supabase.auth.signOut();

// Get current user
const { data: { user } } = await supabase.auth.getUser();`;

const cheatSheetData = {
  en: {
    title: "Supabase Auth Cheat Sheet",
    columns: [
      {
        heading: "Key Points:",
        items: [
          "signUp({email, password}) — register new user",
          "signInWithPassword({email, password}) — sign in",
          "signInWithOAuth({provider}) — social login",
          "signOut() — sign out current user",
          "getSession() — get current session",
          "getUser() — get current user info",
          "onAuthStateChange() — listen for auth changes",
        ],
      },
      {
        heading: "Example:",
        code: `// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securePassword123'
});

// Sign in with Google
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google'
});`,
        codeLanguage: "javascript",
      },
    ],
  },
  fr: {
    title: "Supabase Auth Fiche mémo",
    columns: [
      {
        heading: "Points clés:",
        items: [
          "signInWithPassword() — se connecter",
          "signInWithOAuth() — connexion sociale",
          "signOut() — se déconnecter",
          "getSession() — obtenir la session",
        ],
      },
      {
        heading: "Exemple:",
        code: `const { data } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'motDePasse123'
});`,
        codeLanguage: "javascript",
      },
    ],
  },
  de: {
    title: "Supabase Auth Spickzettel",
    columns: [
      {
        heading: "Hauptpunkte:",
        items: [
          "signInWithPassword() — anmelden",
          "signInWithOAuth() — soziale Anmeldung",
          "signOut() — abmelden",
          "getSession() — Sitzung abrufen",
        ],
      },
      {
        heading: "Beispiel:",
        code: `const { data } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'sicheresPasswort123'
});`,
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
  const lessonInfo = getLessonBySlug("supabase", "04-row-level-security");
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
        {content.challenge && (<Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>{challengeCode && <CodeBlock language="javascript" code={challengeCode} />}</Challenge>)}
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "javascript"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
