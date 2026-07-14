"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/tailwind/04-typography-colors-effects";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 2, 2], fr: [1, 1, 2, 2], de: [1, 1, 2, 2] };

const challengeCode = `<div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white">
  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-24" />
  <div className="px-6 pb-6 -mt-12">
    <img
      className="w-24 h-24 rounded-full border-4 border-white shadow-md"
      src="/avatar.jpg"
      alt="Profile"
    />
    <h3 className="text-xl font-extrabold mt-3 text-gray-900">Ahmed</h3>
    <p className="text-gray-500 text-sm">Frontend Developer</p>
    <div className="flex gap-2 mt-4">
      <button className="flex-1 bg-indigo-500 hover:bg-indigo-700 text-white py-2 rounded-lg transition-colors duration-200 font-medium">Follow</button>
      <button className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg transition-colors duration-200 font-medium">Message</button>
    </div>
  </div>
</div>`;

const cheatSheetData = {
  en: {
    title: "Typography, Colors & Effects Quick Reference",
    columns: [
      { heading: "Typography:", items: ["text-xs ... text-9xl (sizes)", "font-thin ... font-black (weights)", "font-sans | font-serif | font-mono (families)", "leading-none ... leading-loose (heights)", "tracking-tighter ... tracking-widest (spacing)"] },
      { heading: "Colors:", items: ["bg-* | text-* | border-*", "ring-* | placeholder-* | divide-*", "bg-blue-500/75 (75% opacity)", "50 | 100 | 200 ... 900 | 950 (11 shades)"] },
      { heading: "Backgrounds & Borders:", items: ["bg-gradient-to-r/l/t/b/tr/bl/tl/br", "from-* | via-* | to-*", "bg-cover | bg-contain | bg-auto", "border | border-2 | border-4 | border-8", "rounded-none ... rounded-full"] },
      { heading: "Shadows:", items: ["shadow-none | sm | md | lg | xl | 2xl | inner", "[text-shadow:...] (arbitrary values)"] },
      { heading: "Opacity & Blending:", items: ["opacity-0 ... opacity-100", "mix-blend-multiply | screen | overlay", "bg-blend-multiply | screen | overlay"] },
      { heading: "Transitions:", items: ["transition | transition-all | transition-colors", "duration-75 ... duration-1000", "ease-linear | in | out | in-out", "animate-spin | ping | pulse | bounce"] },
    ],
  },
  fr: {
    title: "Typographie, Couleurs et Effets",
    columns: [
      { heading: "Typographie:", items: ["text-xs ... text-9xl (tailles)", "font-thin ... font-black (épaisseurs)", "font-sans | font-serif | font-mono", "leading-none ... leading-loose", "tracking-tighter ... tracking-widest"] },
      { heading: "Couleurs:", items: ["bg-* | text-* | border-*", "ring-* | placeholder-* | divide-*", "bg-blue-500/75 (opacité 75%)", "50 | 100 ... 900 | 950 (11 nuances)"] },
      { heading: "Arrière-plans et Bordures:", items: ["bg-gradient-to-r/l/t/b/tr/bl/tl/br", "from-* | via-* | to-*", "bg-cover | bg-contain | bg-auto", "border | border-2 | border-4 | border-8", "rounded-none ... rounded-full"] },
      { heading: "Ombres:", items: ["shadow-none | sm | md | lg | xl | 2xl | inner", "[text-shadow:...] (valeurs arbitraires)"] },
      { heading: "Opacité et Mélange:", items: ["opacity-0 ... opacity-100", "mix-blend-multiply | screen | overlay", "bg-blend-multiply | screen | overlay"] },
      { heading: "Transitions:", items: ["transition | transition-all | transition-colors", "duration-75 ... duration-1000", "ease-linear | in | out | in-out", "animate-spin | ping | pulse | bounce"] },
    ],
  },
  de: {
    title: "Typografie, Farben und Effekte",
    columns: [
      { heading: "Typografie:", items: ["text-xs ... text-9xl (Größen)", "font-thin ... font-black (Gewichte)", "font-sans | font-serif | font-mono", "leading-none ... leading-loose", "tracking-tighter ... tracking-widest"] },
      { heading: "Farben:", items: ["bg-* | text-* | border-*", "ring-* | placeholder-* | divide-*", "bg-blue-500/75 (75% Deckkraft)", "50 | 100 ... 900 | 950 (11 Schattierungen)"] },
      { heading: "Hintergründe & Ränder:", items: ["bg-gradient-to-r/l/t/b/tr/bl/tl/br", "from-* | via-* | to-*", "bg-cover | bg-contain | bg-auto", "border | border-2 | border-4 | border-8", "rounded-none ... rounded-full"] },
      { heading: "Schatten:", items: ["shadow-none | sm | md | lg | xl | 2xl | inner", "[text-shadow:...] (beliebige Werte)"] },
      { heading: "Deckkraft & Mischung:", items: ["opacity-0 ... opacity-100", "mix-blend-multiply | screen | overlay", "bg-blend-multiply | screen | overlay"] },
      { heading: "Übergänge:", items: ["transition | transition-all | transition-colors", "duration-75 ... duration-1000", "ease-linear | in | out | in-out", "animate-spin | ping | pulse | bounce"] },
    ],
  },
};

const miniProject = {
  en: { title: "Mini Project: Profile Card", description: "Create a profile card with typography, colors, gradients, and shadows.", items: ["Gradient header background", "Circular avatar with border", "Bold name and secondary bio text", "Follow and Message buttons with hover effects", "Card shadow with rounded corners"], hint: "Use bg-gradient-to-r from-indigo-500 to-purple-600 for the header, rounded-full for the avatar, and shadow-xl for the card." },
  fr: { title: "Mini Projet: Carte de Profil", description: "Créez une carte de profil avec typographie, couleurs, dégradés et ombres.", items: ["Arrière-plan en-tête dégradé", "Avatar circulaire avec bordure", "Nom en gras et bio secondaire", "Boutons avec effets hover", "Carte avec ombre et coins arrondis"], hint: "Utilisez bg-gradient-to-r pour l'en-tête, rounded-full pour l'avatar, et shadow-xl pour la carte." },
  de: { title: "Mini-Projekt: Profilkarte", description: "Erstellen Sie eine Profilkarte mit Typografie, Farben, Verläufen und Schatten.", items: ["Verlauf-Hintergrund im Header", "Kreisförmiges Avatar mit Rahmen", "Fetter Name und sekundäre Bio", "Follow- und Message-Buttons mit Hover", "Karte mit Schatten und abgerundeten Ecken"], hint: "Verwenden Sie bg-gradient-to-r für den Header, rounded-full für das Avatar, und shadow-xl für die Karte." },
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

export default function TypographyColorsEffects() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("tailwind", "04-typography-colors-effects");
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
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "css"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
