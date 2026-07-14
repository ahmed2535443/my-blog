"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/tailwind/03-layout-and-sizing";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1, 1], fr: [1, 1, 1, 1], de: [1, 1, 1, 1] };

const challengeCode = `<nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
  <div className="flex items-center gap-2">
    <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
    <span className="text-xl font-bold">MyCompany</span>
  </div>
  <div className="flex items-center gap-6">
    <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
    <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
    <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
    <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
  </div>
  <div className="flex items-center gap-3">
    <button className="px-4 py-2 text-gray-700">Login</button>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Get Started</button>
  </div>
</nav>`;

const cheatSheetData = {
  en: {
    title: "Tailwind CSS Layout & Sizing",
    columns: [
      { heading: "Spacing:", items: ["p-1 = 0.25rem (4px)", "p-4 = 1rem (16px)", "p-8 = 2rem (32px)", "mx-auto = horizontal center", "gap-4 = 1rem between items"] },
      { heading: "Flexbox:", items: ["flex, flex-col, flex-row", "flex-wrap, flex-nowrap", "justify-start/center/end/between", "items-start/center/end/stretch", "flex-1, flex-auto, flex-none"] },
      { heading: "Grid:", items: ["grid, grid-cols-1/2/3/4", "col-span-2, row-span-2", "gap-4, gap-x-6 gap-y-4", "grid-flow-col/row/dense", "auto-cols-max/min/fr"] },
      { heading: "Sizing:", items: ["w-32/64/96 = fixed width", "w-full/1/2/1/3/2/3 = percentage", "h-32/64, h-full, h-screen", "min-h-screen, max-w-4xl", "size-32 = width + height"] },
      { heading: "Position:", items: ["relative, absolute, fixed, sticky", "top-0, right-0, bottom-0, left-0", "inset-0 = all directions", "z-0, z-10, z-20", "sticky top-0 = sticky header"] },
      { heading: "Responsive:", items: ["flex-col → md:flex-row", "grid-cols-1 → md:grid-cols-2", "p-4 → lg:p-8", "w-full → md:w-1/2", "Mobile-First: base then sm/md/lg/xl"] },
    ],
  },
  fr: {
    title: "Tailwind CSS Mise en page et Dimensionnement",
    columns: [
      { heading: "Espacement:", items: ["p-1 = 0.25rem (4px)", "p-4 = 1rem (16px)", "p-8 = 2rem (32px)", "mx-auto = centre horizontal", "gap-4 = 1rem entre éléments"] },
      { heading: "Flexbox:", items: ["flex, flex-col, flex-row", "flex-wrap, flex-nowrap", "justify-start/center/end/between", "items-start/center/end/stretch", "flex-1, flex-auto, flex-none"] },
      { heading: "Grille:", items: ["grid, grid-cols-1/2/3/4", "col-span-2, row-span-2", "gap-4, gap-x-6 gap-y-4", "grid-flow-col/row/dense", "auto-cols-max/min/fr"] },
      { heading: "Dimensionnement:", items: ["w-32/64/96 = largeur fixe", "w-full/1/2/1/3/2/3 = pourcentage", "h-32/64, h-full, h-screen", "min-h-screen, max-w-4xl", "size-32 = largeur + hauteur"] },
      { heading: "Position:", items: ["relative, absolute, fixed, sticky", "top-0, right-0, bottom-0, left-0", "inset-0 = toutes directions", "z-0, z-10, z-20", "sticky top-0 = en-tête fixe"] },
      { heading: "Responsive:", items: ["flex-col → md:flex-row", "grid-cols-1 → md:grid-cols-2", "p-4 → lg:p-8", "w-full → md:w-1/2", "Mobile-First: base puis sm/md/lg/xl"] },
    ],
  },
  de: {
    title: "Tailwind CSS Layout und Größen",
    columns: [
      { heading: "Abstand:", items: ["p-1 = 0.25rem (4px)", "p-4 = 1rem (16px)", "p-8 = 2rem (32px)", "mx-auto = horizontal zentriert", "gap-4 = 1rem zwischen Elementen"] },
      { heading: "Flexbox:", items: ["flex, flex-col, flex-row", "flex-wrap, flex-nowrap", "justify-start/center/end/between", "items-start/center/end/stretch", "flex-1, flex-auto, flex-none"] },
      { heading: "Raster:", items: ["grid, grid-cols-1/2/3/4", "col-span-2, row-span-2", "gap-4, gap-x-6 gap-y-4", "grid-flow-col/row/dense", "auto-cols-max/min/fr"] },
      { heading: "Größen:", items: ["w-32/64/96 = feste Breite", "w-full/1/2/1/3/2/3 = Prozent", "h-32/64, h-full, h-screen", "min-h-screen, max-w-4xl", "size-32 = Breite + Höhe"] },
      { heading: "Position:", items: ["relative, absolute, fixed, sticky", "top-0, right-0, bottom-0, left-0", "inset-0 = alle Richtungen", "z-0, z-10, z-20", "sticky top-0 = fixer Header"] },
      { heading: "Responsiv:", items: ["flex-col → md:flex-row", "grid-cols-1 → md:grid-cols-2", "p-4 → lg:p-8", "w-full → md:w-1/2", "Mobile-First: Basis dann sm/md/lg/xl"] },
    ],
  },
};

const miniProject = {
  en: { title: "Mini Project: Landing Page Layout", description: "Build a landing page with hero, features grid, and footer using Flex and Grid.", items: ["Hero section with gradient background", "Features grid (1 col mobile, 3 cols desktop)", "Pricing cards section", "Footer with multi-column layout", "All using Tailwind utility classes"], hint: "Use flex-col sm:flex-row for the hero buttons, and grid-cols-1 md:grid-cols-3 for the features grid." },
  fr: { title: "Mini Projet: Page d'Accueil", description: "Construisez une page d'accueil avec héros, grille de fonctionnalités et pied de page.", items: ["Section héros avec arrière-plan dégradé", "Grille de fonctionnalités (1 col mobile, 3 cols bureau)", "Section cartes de tarification", "Pied de page multi-colonnes", "Tout en classes Tailwind"], hint: "Utilisez flex-col sm:flex-row pour les boutons héros, et grid-cols-1 md:grid-cols-3 pour la grille." },
  de: { title: "Mini-Projekt: Landing Page Layout", description: "Erstellen Sie eine Landing Page mit Hero, Features-Grid und Footer.", items: ["Hero-Bereich mit Verlauf-Hintergrund", "Features-Grid (1 Spalte mobil, 3 Spalten Desktop)", "Preiskarten-Bereich", "Footer mit Mehrspalten-Layout", "Alles mit Tailwind Utility-Klassen"], hint: "Verwenden Sie flex-col sm:flex-row für Hero-Buttons und grid-cols-1 md:grid-cols-3 für das Features-Grid." },
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

export default function LayoutAndSizing() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("tailwind", "03-layout-and-sizing");
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
        {content.challenge && (<Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>{challengeCode && <CodeBlock language="html" code={challengeCode} />}</Challenge>)}
        <div className="rounded-xl p-6 my-6 border-2" style={{ background: "var(--surface)", borderColor: "var(--secondary)" }}>
          <div className="flex items-center gap-2 mb-4"><span className="text-xl">🏗️</span><span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>{mp.title}</span></div>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>{mp.description}</p>
          <ul className="mb-4" style={{ color: "var(--foreground)" }}>{mp.items.map((item, i) => (<li key={i} dangerouslySetInnerHTML={{ __html: item }} />))}</ul>
          <p className="text-sm" style={{ color: "var(--muted)" }}>💡 {mp.hint}</p>
        </div>
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "html"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
