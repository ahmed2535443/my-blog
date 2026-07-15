"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/tailwind/06-dashboard-project";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 2], en: [1, 1, 2], fr: [1, 1, 2], de: [1, 1, 2] };

const challengeCode = `function RecentActivity() {
  const activities = [
    { icon: "➕", text: "Ahmed added a new product", time: "5 min ago" },
    { icon: "✏️", text: "Sara edited account settings", time: "1 hour ago" },
    { icon: "📦", text: "Omar completed an order", time: "2 hours ago" },
    { icon: "💬", text: "Fatima left a review", time: "3 hours ago" },
    { icon: "👥", text: "New user registered", time: "5 hours ago" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-5 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Recent Activity</h3>
      </div>
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {activities.map((act, i) => (
          <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <span className="text-xl">{act.icon}</span>
            <div className="flex-1">
              <p className="text-sm text-gray-800 dark:text-gray-200">{act.text}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{act.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "لوحة التحكم Tailwind - مرجع كامل",
    columns: [
      { heading: "التخطيط:", items: ["flex → حاوية flex", "flex-col → تكدس عمودي", "flex-1 → أخذ المساحة المتبقية", "items-center → توسيط عمودي", "justify-between → مسافة بين", "gap-3/gap-4/gap-6 → التباعد"] },
      { heading: "الشبكة:", items: ["grid → حاوية شبكة", "grid-cols-1/2/3/4", "md:grid-cols-2 (لوحي)", "lg:grid-cols-4 (سطح مكتب)", "col-span-2 → امتداد عمودين"] },
      { heading: "المتجاوب:", items: ["sm: 640px", "md: 768px", "lg: 1024px", "xl: 1280px", "2xl: 1536px"] },
      { heading: "الوضع الداكن:", items: ["dark:bg-gray-800", "dark:text-gray-200", "dark:border-gray-700", "dark:hover:bg-gray-700"] },
      { heading: "التمرير والتركيز:", items: ["hover:bg-* / hover:text-*", "hover:shadow-md", "focus:outline-none focus:ring-2", "focus:ring-offset-2", "active:bg-*"] },
      { heading: "الانتقالات:", items: ["transition-all", "transition-colors", "transition-shadow", "duration-200 / duration-300"] },
    ],
  },
  en: {
    title: "Tailwind Dashboard - Complete Reference",
    columns: [
      { heading: "Layout:", items: ["flex → flex container", "flex-col → vertical stack", "flex-1 → take remaining space", "items-center → vertical center", "justify-between → space between", "gap-3/gap-4/gap-6 → spacing"] },
      { heading: "Grid:", items: ["grid → grid container", "grid-cols-1/2/3/4", "md:grid-cols-2 (tablet)", "lg:grid-cols-4 (desktop)", "col-span-2 → span 2 columns"] },
      { heading: "Responsive:", items: ["sm: 640px", "md: 768px", "lg: 1024px", "xl: 1280px", "2xl: 1536px"] },
      { heading: "Dark Mode:", items: ["dark:bg-gray-800", "dark:text-gray-200", "dark:border-gray-700", "dark:hover:bg-gray-700"] },
      { heading: "Hover & Focus:", items: ["hover:bg-* / hover:text-*", "hover:shadow-md", "focus:outline-none focus:ring-2", "focus:ring-offset-2", "active:bg-*"] },
      { heading: "Transitions:", items: ["transition-all", "transition-colors", "transition-shadow", "duration-200 / duration-300"] },
    ],
  },
  fr: {
    title: "Dashboard Tailwind - Référence Complète",
    columns: [
      { heading: "Mise en page:", items: ["flex → conteneur flex", "flex-col → pile verticale", "flex-1 → espace restant", "items-center → centre vertical", "justify-between → espace entre", "gap-3/gap-4/gap-6 → espacement"] },
      { heading: "Grille:", items: ["grid → conteneur grille", "grid-cols-1/2/3/4", "md:grid-cols-2 (tablette)", "lg:grid-cols-4 (bureau)", "col-span-2 → s'étendre sur 2"] },
      { heading: "Responsive:", items: ["sm: 640px", "md: 768px", "lg: 1024px", "xl: 1280px", "2xl: 1536px"] },
      { heading: "Mode Sombre:", items: ["dark:bg-gray-800", "dark:text-gray-200", "dark:border-gray-700", "dark:hover:bg-gray-700"] },
      { heading: "Hover & Focus:", items: ["hover:bg-* / hover:text-*", "hover:shadow-md", "focus:outline-none focus:ring-2", "focus:ring-offset-2", "active:bg-*"] },
      { heading: "Transitions:", items: ["transition-all", "transition-colors", "transition-shadow", "duration-200 / duration-300"] },
    ],
  },
  de: {
    title: "Tailwind Dashboard - Vollständige Referenz",
    columns: [
      { heading: "Layout:", items: ["flex → Flex-Container", "flex-col → vertikaler Stapel", "flex-1 → verbleibender Platz", "items-center → vertikal zentriert", "justify-between → Platz zwischen", "gap-3/gap-4/gap-6 → Abstand"] },
      { heading: "Raster:", items: ["grid → Raster-Container", "grid-cols-1/2/3/4", "md:grid-cols-2 (Tablet)", "lg:grid-cols-4 (Desktop)", "col-span-2 → 2 Spalten"] },
      { heading: "Responsiv:", items: ["sm: 640px", "md: 768px", "lg: 1024px", "xl: 1280px", "2xl: 1536px"] },
      { heading: "Dunkelmodus:", items: ["dark:bg-gray-800", "dark:text-gray-200", "dark:border-gray-700", "dark:hover:bg-gray-700"] },
      { heading: "Hover & Focus:", items: ["hover:bg-* / hover:text-*", "hover:shadow-md", "focus:outline-none focus:ring-2", "focus:ring-offset-2", "active:bg-*"] },
      { heading: "Übergänge:", items: ["transition-all", "transition-colors", "transition-shadow", "duration-200 / duration-300"] },
    ],
  },
};

const miniProject = {
  ar: { title: "مشروع لوحة التحكم مكتمل", description: "لقد أنشأت لوحة تحكم كاملة مع شريط جانبي ورأس وبطاقات إحصائيات وجدول بيانات ووضع داكن.", items: ["شريط جانبي بالتنقل", "رأس ببحث وإشعارات", "بطاقات إحصائيات بتخطيط شبكي", "جدول بيانات بـ overflow-x-auto", "تبديل الوضع الداكن", "كل ذلك باستخدام Tailwind CSS فقط"], hint: "راجع كل مكون وافهم كيف تعمل flex و grid و dark: و hover: و transition معاً." },
  en: { title: "Dashboard Project Complete", description: "You've built a complete dashboard with sidebar, header, stats cards, data table, and dark mode.", items: ["Sidebar with navigation", "Header with search and notifications", "Stats cards with grid layout", "Data table with overflow-x-auto", "Dark mode toggle", "All using Tailwind CSS only"], hint: "Review each component and understand how flex, grid, dark:, hover:, and transition work together." },
  fr: { title: "Projet Dashboard Terminé", description: "Vous avez construit un dashboard complet avec sidebar, en-tête, cartes stats et mode sombre.", items: ["Sidebar avec navigation", "En-tête avec recherche et notifications", "Cartes stats avec grille", "Tableau avec overflow-x-auto", "Basculement mode sombre", "Tout en Tailwind CSS uniquement"], hint: "Revuez chaque composant et comprenez comment flex, grid, dark:, hover:, et transition fonctionnent ensemble." },
  de: { title: "Dashboard-Projekt Abgeschlossen", description: "Sie haben ein vollständiges Dashboard mit Sidebar, Header, Statistik-Karten und Dunkelmodus erstellt.", items: ["Sidebar mit Navigation", "Header mit Suche und Benachrichtigungen", "Statistik-Karten mit Raster", "Datentabelle mit overflow-x-auto", "Dunkelmodus-Umschaltung", "Alles nur mit Tailwind CSS"], hint: "Überprüfen Sie jede Komponente und verstehen Sie, wie flex, grid, dark:, hover: und transition zusammenarbeiten." },
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

export default function DashboardProject() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("tailwind", "06-dashboard-project");
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
        <LessonExtras content={content} />
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
