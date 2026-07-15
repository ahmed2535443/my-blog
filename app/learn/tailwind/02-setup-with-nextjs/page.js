"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/tailwind/02-setup-with-nextjs";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1, 2], en: [1, 1, 1, 2], fr: [1, 1, 1, 2], de: [1, 1, 1, 2] };

const challengeCode = `export default function UserCard() {
  return (
    <div className="mx-auto max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xl font-bold text-white">
          Ahmed
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ahmed</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>
        </div>
      </div>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        A passionate developer learning the latest web technologies.
      </p>
      <button className="w-full rounded-xl bg-cyan-500 px-4 py-2.5 font-medium text-white transition-all hover:bg-cyan-600 hover:shadow-lg active:scale-[0.98]">
        Follow
      </button>
    </div>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "دليل إعداد Tailwind v4",
    columns: [
      { heading: "1. التثبيت:", code: "npm install tailwindcss @tailwindcss/postcss", codeLanguage: "bash" },
      { heading: "2. postcss.config.mjs:", code: `const config = {\n  plugins: {\n    "@tailwindcss/postcss": {},\n  },\n};\nexport default config;`, codeLanguage: "javascript" },
      { heading: "3. globals.css:", code: `@import "tailwindcss";`, codeLanguage: "css" },
      { heading: "4. VS Code:", items: ["Tailwind CSS IntelliSense", "Tailwind CSS Snippets", "Prettier + Tailwind Plugin"] },
    ],
  },
  en: {
    title: "Tailwind v4 Setup Guide",
    columns: [
      { heading: "1. Install:", code: "npm install tailwindcss @tailwindcss/postcss", codeLanguage: "bash" },
      { heading: "2. postcss.config.mjs:", code: `const config = {\n  plugins: {\n    "@tailwindcss/postcss": {},\n  },\n};\nexport default config;`, codeLanguage: "javascript" },
      { heading: "3. globals.css:", code: `@import "tailwindcss";`, codeLanguage: "css" },
      { heading: "4. VS Code:", items: ["Tailwind CSS IntelliSense", "Tailwind CSS Snippets", "Prettier + Tailwind Plugin"] },
    ],
  },
  fr: {
    title: "Guide de Configuration Tailwind v4",
    columns: [
      { heading: "1. Installation:", code: "npm install tailwindcss @tailwindcss/postcss", codeLanguage: "bash" },
      { heading: "2. postcss.config.mjs:", code: `const config = {\n  plugins: {\n    "@tailwindcss/postcss": {},\n  },\n};\nexport default config;`, codeLanguage: "javascript" },
      { heading: "3. globals.css:", code: `@import "tailwindcss";`, codeLanguage: "css" },
      { heading: "4. VS Code:", items: ["Tailwind CSS IntelliSense", "Tailwind CSS Snippets", "Prettier + Tailwind Plugin"] },
    ],
  },
  de: {
    title: "Tailwind v4 Einrichtungsleitfaden",
    columns: [
      { heading: "1. Installation:", code: "npm install tailwindcss @tailwindcss/postcss", codeLanguage: "bash" },
      { heading: "2. postcss.config.mjs:", code: `const config = {\n  plugins: {\n    "@tailwindcss/postcss": {},\n  },\n};\nexport default config;`, codeLanguage: "javascript" },
      { heading: "3. globals.css:", code: `@import "tailwindcss";`, codeLanguage: "css" },
      { heading: "4. VS Code:", items: ["Tailwind CSS IntelliSense", "Tailwind CSS Snippets", "Prettier + Tailwind Plugin"] },
    ],
  },
};

const miniProject = {
  ar: { title: "المشروع المصغّر: Next.js + Tailwind v4", description: "أنشئ مشروع Next.js جديد مع إعداد Tailwind v4 من الصفر.", items: ["إنشاء تطبيق Next.js باستخدام create-next-app", "تثبيت tailwindcss و @tailwindcss/postcss", "إنشاء postcss.config.mjs", "إعداد globals.css باستخدام @import", "بناء مكون UserCard"], hint: "اتبع الدليل خطوة بخطوة أعلاه." },
  en: { title: "Mini Project: Next.js + Tailwind v4", description: "Create a new Next.js project with Tailwind v4 setup from scratch.", items: ["Create Next.js app with create-next-app", "Install tailwindcss and @tailwindcss/postcss", "Create postcss.config.mjs", "Set up globals.css with @import", "Build a UserCard component"], hint: "Follow the step-by-step guide above." },
  fr: { title: "Mini Projet: Next.js + Tailwind v4", description: "Créez un nouveau projet Next.js avec configuration Tailwind v4.", items: ["Créer l'app avec create-next-app", "Installer tailwindcss et @tailwindcss/postcss", "Créer postcss.config.mjs", "Configurer globals.css", "Construire un composant UserCard"], hint: "Suivez le guide étape par étape ci-dessus." },
  de: { title: "Mini-Projekt: Next.js + Tailwind v4", description: "Erstellen Sie ein neues Next.js-Projekt mit Tailwind v4.", items: ["Next.js-App mit create-next-app erstellen", "tailwindcss und @tailwindcss/postcss installieren", "postcss.config.mjs erstellen", "globals.css einrichten", "UserCard-Komponente erstellen"], hint: "Folgen Sie dem Schritt-für-Schritt-Leitfaden oben." },
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

export default function TailwindSetup() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("tailwind", "02-setup-with-nextjs");
  const content = rawTranslations[lang] || rawTranslations.en;
  if (!content) return null;
  const answers = correctAnswers[lang] || correctAnswers.en;
  const cs = cheatSheetData[lang] || cheatSheetData.en;
  const mp = miniProject[lang] || miniProject.en;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader stage={lessonInfo.stage} lesson={lessonInfo} lessonIndex={lessonInfo.lessonIndex} totalLessons={lessonInfo.totalLessons} />
        {content.sections.map((section, i) => (<LessonSection key={i} title={section.title}>{section.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}</LessonSection>))}
        {content.quiz && content.quiz.map((q, i) => (<Quiz key={i} question={q.question} options={q.options} correctAnswer={answers[i]} explanation={q.explanation} />))}
        {content.challenge && (<Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>{challengeCode && <CodeBlock language="jsx" code={challengeCode} />}</Challenge>)}
        <div className="rounded-xl p-6 my-6 border-2" style={{ background: "var(--surface)", borderColor: "var(--secondary)" }}>
          <div className="flex items-center gap-2 mb-4"><span className="text-xl">🏗️</span><span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>{mp.title}</span></div>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>{mp.description}</p>
          <ul className="mb-4" style={{ color: "var(--foreground)" }}>{mp.items.map((item, i) => (<li key={i} dangerouslySetInnerHTML={{ __html: item }} />))}</ul>
          <p className="text-sm" style={{ color: "var(--muted)" }}>💡 {mp.hint}</p>
        </div>
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "bash"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonExtras content={content} />
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
