"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/tailwind/01-what-is-tailwind";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1, 1], en: [1, 1, 1, 1], fr: [1, 1, 1, 1], de: [1, 1, 1, 1] };

const challengeCode = `function ProfileCard() {
  return (
    <div className="
      flex flex-col md:flex-row items-center gap-6
      bg-white dark:bg-gray-800
      rounded-2xl shadow-lg p-6
      hover:shadow-xl hover:scale-[1.02]
      transition-all duration-300
      max-w-md md:max-w-lg mx-auto
    ">
      <img
        src="/avatar.jpg"
        alt="User"
        className="
          w-24 h-24 rounded-full object-cover
          border-4 border-indigo-500
        "
      />
      <div className="text-center md:text-right">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          Ahmed
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
          Frontend Developer
        </p>
        <button className="
          bg-indigo-600 hover:bg-indigo-700
          text-white font-medium
          px-6 py-2 rounded-full
          transition-colors duration-200
          text-sm
        ">
          Follow
        </button>
      </div>
    </div>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "مرجع سريع لـ Tailwind CSS",
    columns: [
      {
        heading: "التخطيط:",
        items: ["flex, grid, hidden, block, inline-block", "items-center, items-start, items-end", "justify-center, justify-between, justify-start, justify-end", "flex-col, flex-row, flex-wrap", "gap-4, gap-2, gap-8"],
      },
      {
        heading: "التباعد:",
        items: ["p-1 = 0.25rem, p-4 = 1rem, p-8 = 2rem", "px-4 = padding-left & right", "py-4 = padding-top & bottom", "m-4 = margin, mx-auto = center", "mt-4, mb-4, ml-auto, mr-auto"],
      },
      {
        heading: "الألوان:",
        items: ["bg-white, bg-black, bg-gray-100, bg-gray-900", "bg-red-500, bg-blue-500, bg-green-500", "text-white, text-gray-500, text-red-500", "border-gray-200"],
      },
      {
        heading: "الطباعة:",
        items: ["text-xs = 0.75rem, text-sm = 0.875rem", "text-base = 1rem, text-lg = 1.125rem", "text-xl = 1.25rem, text-2xl = 1.5rem", "font-normal = 400, font-bold = 700", "text-center, text-right, text-left"],
      },
      {
        heading: "الحدود وأنصاف الأقطار:",
        items: ["border = 1px, border-2 = 2px", "border-dashed, border-dotted, border-double", "rounded = 0.25rem, rounded-lg = 0.5rem", "rounded-xl = 0.75rem, rounded-full = 9999px"],
      },
      {
        heading: "المتجاوب:",
        items: ["sm: 640px, md: 768px", "lg: 1024px, xl: 1280px", "2xl: 1536px", "نهج الهاتف أولاً"],
      },
    ],
  },
  en: {
    title: "Tailwind CSS - Quick Reference",
    columns: [
      {
        heading: "Layout:",
        items: ["flex, grid, hidden, block, inline-block", "items-center, items-start, items-end", "justify-center, justify-between, justify-start, justify-end", "flex-col, flex-row, flex-wrap", "gap-4, gap-2, gap-8"],
      },
      {
        heading: "Spacing:",
        items: ["p-1 = 0.25rem, p-4 = 1rem, p-8 = 2rem", "px-4 = padding-left & right", "py-4 = padding-top & bottom", "m-4 = margin, mx-auto = center", "mt-4, mb-4, ml-auto, mr-auto"],
      },
      {
        heading: "Colors:",
        items: ["bg-white, bg-black, bg-gray-100, bg-gray-900", "bg-red-500, bg-blue-500, bg-green-500", "text-white, text-gray-500, text-red-500", "border-gray-200"],
      },
      {
        heading: "Typography:",
        items: ["text-xs = 0.75rem, text-sm = 0.875rem", "text-base = 1rem, text-lg = 1.125rem", "text-xl = 1.25rem, text-2xl = 1.5rem", "font-normal = 400, font-bold = 700", "text-center, text-right, text-left"],
      },
      {
        heading: "Borders & Radius:",
        items: ["border = 1px, border-2 = 2px", "border-dashed, border-dotted, border-double", "rounded = 0.25rem, rounded-lg = 0.5rem", "rounded-xl = 0.75rem, rounded-full = 9999px"],
      },
      {
        heading: "Responsive:",
        items: ["sm: 640px, md: 768px", "lg: 1024px, xl: 1280px", "2xl: 1536px", "Mobile-First approach"],
      },
    ],
  },
  fr: {
    title: "Tailwind CSS - Reference Rapide",
    columns: [
      {
        heading: "Mise en page:",
        items: ["flex, grid, hidden, block, inline-block", "items-center, items-start, items-end", "justify-center, justify-between, justify-start, justify-end", "flex-col, flex-row, flex-wrap", "gap-4, gap-2, gap-8"],
      },
      {
        heading: "Espacement:",
        items: ["p-1 = 0.25rem, p-4 = 1rem, p-8 = 2rem", "px-4 = padding-left & right", "py-4 = padding-top & bottom", "m-4 = margin, mx-auto = center", "mt-4, mb-4, ml-auto, mr-auto"],
      },
      {
        heading: "Couleurs:",
        items: ["bg-white, bg-black, bg-gray-100, bg-gray-900", "bg-red-500, bg-blue-500, bg-green-500", "text-white, text-gray-500, text-red-500", "border-gray-200"],
      },
      {
        heading: "Typographie:",
        items: ["text-xs = 0.75rem, text-sm = 0.875rem", "text-base = 1rem, text-lg = 1.125rem", "text-xl = 1.25rem, text-2xl = 1.5rem", "font-normal = 400, font-bold = 700", "text-center, text-right, text-left"],
      },
      {
        heading: "Bornes et Rayon:",
        items: ["border = 1px, border-2 = 2px", "border-dashed, border-dotted, border-double", "rounded = 0.25rem, rounded-lg = 0.5rem", "rounded-xl = 0.75rem, rounded-full = 9999px"],
      },
      {
        heading: "Responsive:",
        items: ["sm: 640px, md: 768px", "lg: 1024px, xl: 1280px", "2xl: 1536px", "Approche Mobile-First"],
      },
    ],
  },
  de: {
    title: "Tailwind CSS - Schnellreferenz",
    columns: [
      {
        heading: "Layout:",
        items: ["flex, grid, hidden, block, inline-block", "items-center, items-start, items-end", "justify-center, justify-between, justify-start, justify-end", "flex-col, flex-row, flex-wrap", "gap-4, gap-2, gap-8"],
      },
      {
        heading: "Abstand:",
        items: ["p-1 = 0.25rem, p-4 = 1rem, p-8 = 2rem", "px-4 = padding-left & right", "py-4 = padding-top & bottom", "m-4 = margin, mx-auto = center", "mt-4, mb-4, ml-auto, mr-auto"],
      },
      {
        heading: "Farben:",
        items: ["bg-white, bg-black, bg-gray-100, bg-gray-900", "bg-red-500, bg-blue-500, bg-green-500", "text-white, text-gray-500, text-red-500", "border-gray-200"],
      },
      {
        heading: "Typografie:",
        items: ["text-xs = 0.75rem, text-sm = 0.875rem", "text-base = 1rem, text-lg = 1.125rem", "text-xl = 1.25rem, text-2xl = 1.5rem", "font-normal = 400, font-bold = 700", "text-center, text-right, text-left"],
      },
      {
        heading: "Rahmen & Radius:",
        items: ["border = 1px, border-2 = 2px", "border-dashed, border-dotted, border-double", "rounded = 0.25rem, rounded-lg = 0.5rem", "rounded-xl = 0.75rem, rounded-full = 9999px"],
      },
      {
        heading: "Responsiv:",
        items: ["sm: 640px, md: 768px", "lg: 1024px, xl: 1280px", "2xl: 1536px", "Mobile-First Ansatz"],
      },
    ],
  },
};

const miniProject = {
  ar: {
    title: "المشروع المصغّر: بطاقة ملف شخصي",
    description: "أنشئ مكون بطاقة ملف شخصي باستخدام Tailwind CSS فقط:",
    items: ["صورة أفاتار دائرية", "اسم المستخدم كعنوان غامق", "نبذة شخصية كنص ثانوي", "زر متابعة بتأثير التمرير", "تخطيط متجاوب (مكدس على الهاتف، أفقي على سطح المكتب)"],
    hint: "استخدم flex-col md:flex-row للتخطيط المتجاوب، و rounded-full للأفاتار الدائري، و transition-colors لتأثيرات التمرير السلسة.",
  },
  en: {
    title: "Mini Project: Profile Card",
    description: "Create a profile card component using Tailwind CSS only:",
    items: ["Circular avatar image", "Username as bold heading", "Bio as secondary text", "Follow button with hover effect", "Responsive layout (stacked on mobile, row on desktop)"],
    hint: "Use flex-col md:flex-row for responsive layout, rounded-full for circular avatar, and transition-colors for smooth hover effects.",
  },
  fr: {
    title: "Mini Projet: Carte de Profil",
    description: "Créez un composant carte de profil en utilisant uniquement Tailwind CSS:",
    items: ["Image d'avatar circulaire", "Nom d'utilisateur en gras", "Bio en texte secondaire", "Bouton Follow avec effet hover", "Mise en page responsive"],
    hint: "Utilisez flex-col md:flex-row pour la mise en page, rounded-full pour l'avatar circulaire, et transition-colors pour les effets hover.",
  },
  de: {
    title: "Mini-Projekt: Profilkarte",
    description: "Erstellen Sie eine Profilkarten-Komponente nur mit Tailwind CSS:",
    items: ["Kreisförmiges Avatar-Bild", "Benutzername als fetten Titel", "Bio als sekundären Text", "Follow-Button mit Hover-Effekt", "Responsive Layout (gestapelt auf Desktop)"],
    hint: "Verwenden Sie flex-col md:flex-row für das Layout, rounded-full für den Avatar, und transition-colors für Hover-Effekte.",
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

export default function WhatIsTailwind() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("tailwind", "01-what-is-tailwind");
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
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🏗️</span>
            <span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>{mp.title}</span>
          </div>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>{mp.description}</p>
          <ul className="mb-4" style={{ color: "var(--foreground)" }}>
            {mp.items.map((item, i) => (<li key={i} dangerouslySetInnerHTML={{ __html: item }} />))}
          </ul>
          <p className="text-sm" style={{ color: "var(--muted)" }}>💡 {mp.hint}</p>
        </div>
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "css"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonExtras content={content} />
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
