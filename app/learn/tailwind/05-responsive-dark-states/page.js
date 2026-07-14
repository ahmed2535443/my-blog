"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/tailwind/05-responsive-dark-states";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1, 1], en: [1, 1, 1, 1], fr: [1, 1, 1, 1], de: [1, 1, 1, 1] };

const challengeCode = `function BlogPage() {
  const posts = [
    { id: 1, title: "Intro to Tailwind", excerpt: "Learn Tailwind CSS basics", image: "/post1.jpg", date: "Jan 15", tag: "Tailwind" },
    { id: 2, title: "Responsive Design", excerpt: "Build for all devices", image: "/post2.jpg", date: "Jan 12", tag: "CSS" },
    { id: 3, title: "Dark Mode in React", excerpt: "Implement dark mode", image: "/post3.jpg", date: "Jan 10", tag: "React" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">MyBlog</span>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">Articles</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">About</a>
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">Menu</button>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a key={post.id} href="#" className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] focus-visible:ring-4 focus-visible:ring-indigo-300 focus-visible:outline-none">
              <div className="overflow-hidden h-48">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 mb-3 inline-block">{post.tag}</span>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{post.excerpt}</p>
                <span className="text-xs text-gray-500 dark:text-gray-500">{post.date}</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "مرجع سريع للمتجاوب والوضع الداكن والحالات",
    columns: [
      { heading: "نقاط التوقف:", items: ["sm: 640px (هاتف كبير)", "md: 768px (جهاز لوحي)", "lg: 1024px (حاسوب)", "xl: 1280px (سطح مكتب)", "2xl: 1536px (شاشة كبيرة)"] },
      { heading: "الحالات التفاعلية:", items: ["hover: تمرير الماوس", "focus: عند التركيز (ماوس+لوحة مفاتيح)", "focus-visible: لوحة المفاتيح فقط ✅", "active: أثناء الضغط", "disabled: العنصر معطّل", "first/last, odd/even: في المصفوفات"] },
      { heading: "الوضع الداكن:", items: ["dark:bg-gray-900 (خلفية داكنة)", "dark:text-white (نص فاتح)", "dark:border-gray-700 (حدود فاتحة)", "dark:hover:bg-gray-800 (تمرير داكن)", "التفعيل: أضف فئة dark إلى html"] },
      { heading: "group و peer:", items: ["group → أضف للأصل", "group-hover: أنماط الأبناء عند تمرير الأصل", "peer → أضف للشقيق", "peer-focus: أنماط الإخوة عند التركيز", "peer-checked: أنماط عند التحديد"] },
      { heading: "التصنيفات الافتراضية:", items: ["placeholder:text-gray-400", "selection:bg-indigo-200", "file:bg-indigo-50", "marker:text-indigo-600", "before/after بقيم عشوائية"] },
      { heading: "نمط الألوان:", items: ["bg-white / dark:bg-gray-900 (الصفحة)", "bg-gray-50 / dark:bg-gray-800 (البطاقات)", "text-gray-900 / dark:text-white (الأساسي)", "text-gray-600 / dark:text-gray-400 (الثانوي)", "transition-all duration-300"] },
    ],
  },
  en: {
    title: "Responsive, Dark Mode & States Quick Reference",
    columns: [
      { heading: "Breakpoints:", items: ["sm: 640px (large phone)", "md: 768px (tablet)", "lg: 1024px (laptop)", "xl: 1280px (desktop)", "2xl: 1536px (large screen)"] },
      { heading: "Interactive States:", items: ["hover: mouse over", "focus: on focus (mouse+keyboard)", "focus-visible: keyboard only ✅", "active: while pressing", "disabled: element disabled", "first/last, odd/even: in arrays"] },
      { heading: "Dark Mode:", items: ["dark:bg-gray-900 (dark bg)", "dark:text-white (light text)", "dark:border-gray-700 (light borders)", "dark:hover:bg-gray-800 (dark hover)", "Activate: add class dark to html"] },
      { heading: "group & peer:", items: ["group → add to parent", "group-hover: child styles on parent hover", "peer → add to sibling", "peer-focus: style siblings on focus", "peer-checked: style on checked"] },
      { heading: "Pseudo-Classes:", items: ["placeholder:text-gray-400", "selection:bg-indigo-200", "file:bg-indigo-50", "marker:text-indigo-600", "before/after with arbitrary values"] },
      { heading: "Color Pattern:", items: ["bg-white / dark:bg-gray-900 (page)", "bg-gray-50 / dark:bg-gray-800 (cards)", "text-gray-900 / dark:text-white (primary)", "text-gray-600 / dark:text-gray-400 (secondary)", "transition-all duration-300"] },
    ],
  },
  fr: {
    title: "Responsive, Mode Sombre et États",
    columns: [
      { heading: "Points d'arrêt:", items: ["sm: 640px (grand téléphone)", "md: 768px (tablette)", "lg: 1024px (ordinateur)", "xl: 1280px (bureau)", "2xl: 1536px (grand écran)"] },
      { heading: "États interactifs:", items: ["hover: survol souris", "focus: au focus (souris+clavier)", "focus-visible: clavier seulement ✅", "active: pendant l'appui", "disabled: élément désactivé", "first/last, odd/even: dans les tableaux"] },
      { heading: "Mode Sombre:", items: ["dark:bg-gray-900", "dark:text-white", "dark:border-gray-700", "dark:hover:bg-gray-800", "Activer: ajouter dark à html"] },
      { heading: "group & peer:", items: ["group → ajouter au parent", "group-hover: styles enfants", "peer → ajouter au frère", "peer-focus: styles frères", "peer-checked: styles sur coché"] },
      { heading: "Pseudo-Classes:", items: ["placeholder:text-gray-400", "selection:bg-indigo-200", "file:bg-indigo-50", "marker:text-indigo-600", "before/after avec valeurs arbitraires"] },
      { heading: "Modèle Couleur:", items: ["bg-white / dark:bg-gray-900 (page)", "bg-gray-50 / dark:bg-gray-800 (cartes)", "text-gray-900 / dark:text-white (primaire)", "text-gray-600 / dark:text-gray-400 (secondaire)", "transition-all duration-300"] },
    ],
  },
  de: {
    title: "Responsiv, Dunkelmodus & Zustände",
    columns: [
      { heading: "Breakpoints:", items: ["sm: 640px (großes Handy)", "md: 768px (Tablet)", "lg: 1024px (Laptop)", "xl: 1280px (Desktop)", "2xl: 1536px (großer Bildschirm)"] },
      { heading: "Interaktive Zustände:", items: ["hover: Maus darüber", "focus: beim Fokus (Maus+Tastatur)", "focus-visible: nur Tastatur ✅", "active: beim Drücken", "disabled: Element deaktiviert", "first/last, odd/even: in Arrays"] },
      { heading: "Dunkelmodus:", items: ["dark:bg-gray-900", "dark:text-white", "dark:border-gray-700", "dark:hover:bg-gray-800", "Aktivieren: dark zu html hinzufügen"] },
      { heading: "group & peer:", items: ["group → zum Elternteil", "group-hover: Kindstile bei Eltern-Hover", "peer → zum Geschwister", "peer-focus: Geschwisterstile", "peer-checked: Stil bei Aktivierung"] },
      { heading: "Pseudo-Klassen:", items: ["placeholder:text-gray-400", "selection:bg-indigo-200", "file:bg-indigo-50", "marker:text-indigo-600", "before/after mit beliebigen Werten"] },
      { heading: "Farbmuster:", items: ["bg-white / dark:bg-gray-900 (Seite)", "bg-gray-50 / dark:bg-gray-800 (Karten)", "text-gray-900 / dark:text-white (primär)", "text-gray-600 / dark:text-gray-400 (sekundär)", "transition-all duration-300"] },
    ],
  },
};

const miniProject = {
  ar: { title: "المشروع المصغّر: صفحة مدونة", description: "أنشئ صفحة مدونة متجاوبة مع الوضع الداكن وتأثيرات التمرير والحالات التفاعلية.", items: ["شبكة متجاوبة (عمود واحد على الهاتف، 2 md، 3 lg)", "دعم تبديل الوضع الداكن", "group-hover على البطاقات (تكبير الصورة، تغيير لون النص)", "focus-visible على الروابط", "انتقالات سلسة على جميع التغييرات", "شريط تنقل متجاوب"], hint: "استخدم group على عناصر البطاقة، و group-hover:scale-110 على الصور، و dark: لفئات الوضع الداكن." },
  en: { title: "Mini Project: Blog Page", description: "Build a responsive blog page with dark mode, group hover effects, and interactive states.", items: ["Responsive grid (1 col mobile, 2 md, 3 lg)", "Dark mode toggle support", "group-hover on cards (image zoom, text color)", "focus-visible on links", "Smooth transitions on all changes", "Responsive navigation bar"], hint: "Use group on card elements, group-hover:scale-110 on images, and dark: prefix for dark mode classes." },
  fr: { title: "Mini Projet: Page Blog", description: "Construisez une page blog responsive avec mode sombre et effets hover.", items: ["Grille responsive (1 col mobile, 2 md, 3 lg)", "Support du mode sombre", "group-hover sur cartes (zoom image)", "focus-visible sur liens", "Transitions fluides", "Barre de navigation responsive"], hint: "Utilisez group sur les cartes, group-hover:scale-110 sur images, et dark: pour le mode sombre." },
  de: { title: "Mini-Projekt: Blog-Seite", description: "Erstellen Sie eine responsive Blog-Seite mit Dunkelmodus und Hover-Effekten.", items: ["Responsives Raster (1 Spalte mobil, 2 md, 3 lg)", "Dunkelmodus-Unterstützung", "group-hover auf Karten (Bild-Zoom)", "focus-visible auf Links", "Sanfte Übergänge", "Responsive Navigationsleiste"], hint: "Verwenden Sie group auf Karten, group-hover:scale-110 auf Bildern, und dark: für den Dunkelmodus." },
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

export default function ResponsiveDarkStates() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("tailwind", "05-responsive-dark-states");
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
