"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/nextjs/03-server-and-client-components";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 2, 1, 2, 1], fr: [1, 2, 1, 2, 1], de: [1, 2, 1, 2, 1], ar: [1, 2, 1, 2, 1] };

const challengeCode = `// الإجابة الصحيحة:

// 1. BlogPostPage → Server Component
//    يجلب البيانات من DB - مثالي للخادم
export default async function BlogPostPage({ params }) {
  const post = await db.getPost(params.slug);
  return (
    <div>
      <PostContent post={post} />
      <LikeButton postId={post.id} />
      <CommentSection postId={post.id} />
      <AuthorInfo authorId={post.authorId} />
      <ShareButtons title={post.title} />
    </div>
  );
}

// 2. PostContent → Server Component (عرض فقط)
export function PostContent({ post }) {
  return <article><h1>{post.title}</h1><p>{post.content}</p></article>;
}

// 3. LikeButton → Client Component (useState)
"use client";
export function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>;
}

// 4. CommentSection → Client Component (useState + events)
"use client";
export function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  return <div>...</div>;
}

// 5. AuthorInfo → Server Component (عرض فقط)
export function AuthorInfo({ authorId }) {
  const author = await db.getAuthor(authorId);
  return <div><img src={author.avatar} /><span>{author.name}</span></div>;
}

// 6. ShareButtons → Client Component (onClick)
"use client";
export function ShareButtons({ title }) {
  return <button onClick={() => alert("مشاركة: " + title)}>مشاركة</button>;
}`;

const cheatSheetData = {
  en: {
    title: "Server vs Client Components Cheat Sheet",
    columns: [
      {
        heading: "Server Component ✅",
        items: [
          "✅ Default (no 'use client' needed)",
          "✅ Accesses DB and files directly",
          "✅ API keys are safe",
          "✅ Improves SEO",
          "✅ No extra JavaScript sent",
          "❌ Cannot use useState/useEffect",
          "❌ Cannot handle events",
        ],
      },
      {
        heading: "Client Component 🔵",
        items: [
          '✅ Requires "use client" at top',
          "✅ Can use useState/useEffect",
          "✅ Can handle events",
          "✅ Can use Browser APIs",
          "❌ Increases JavaScript size",
          "❌ Cannot access DB directly",
          "❌ Cannot import Server Component",
        ],
      },
      {
        heading: "Interleaving Rules:",
        items: [
          "Server → Client: <strong>Allowed ✅</strong>",
          "Client → Server: <strong>Forbidden ❌</strong>",
          'Solution: use <code>children</code> to pass Server to Client',
        ],
      },
      {
        heading: "When to choose Client:",
        items: [
          "useState, useReducer",
          "useEffect",
          "onClick, onSubmit",
          "localStorage, window",
          "Context Providers",
          "Custom Hooks (if using any above)",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Server vs Client Components",
    columns: [
      {
        heading: "Server Component ✅",
        items: [
          "✅ Par défaut (pas de 'use client' nécessaire)",
          "✅ Accède directement à la DB et aux fichiers",
          "✅ Clés API en sécurité",
          "✅ Améliore le SEO",
          "✅ Aucun JavaScript supplémentaire envoyé",
          "❌ Ne peut pas utiliser useState/useEffect",
          "❌ Ne peut pas gérer les événements",
        ],
      },
      {
        heading: "Client Component 🔵",
        items: [
          '✅ Nécessite "use client" en haut',
          "✅ Peut utiliser useState/useEffect",
          "✅ Peut gérer les événements",
          "✅ Peut utiliser les APIs du navigateur",
          "❌ Augmente la taille du JavaScript",
          "❌ Ne peut pas accéder à la DB directement",
          "❌ Ne peut pas importer un Server Component",
        ],
      },
      {
        heading: "Règles d'Interleaving:",
        items: [
          "Server → Client: <strong>Autorisé ✅</strong>",
          "Client → Server: <strong>Interdit ❌</strong>",
          'Solution: utilisez <code>children</code> pour passer Server à Client',
        ],
      },
      {
        heading: "Quand choisir Client:",
        items: [
          "useState, useReducer",
          "useEffect",
          "onClick, onSubmit",
          "localStorage, window",
          "Context Providers",
          "Custom Hooks (si utilisant un des ci-dessus)",
        ],
      },
    ],
  },
  de: {
    title: "Server vs Client Components Spickzettel",
    columns: [
      {
        heading: "Server Component ✅",
        items: [
          "✅ Standard (kein 'use client' nötig)",
          "✅ Greift direkt auf DB und Dateien zu",
          "✅ API-Schlüssel sind sicher",
          "✅ Verbessert SEO",
          "✅ Kein zusätzliches JavaScript gesendet",
          "❌ Kann useState/useEffect nicht verwenden",
          "❌ Kann Ereignisse nicht verarbeiten",
        ],
      },
      {
        heading: "Client Component 🔵",
        items: [
          '✅ Benötigt "use client" oben',
          "✅ Kann useState/useEffect verwenden",
          "✅ Kann Ereignisse verarbeiten",
          "✅ Kann Browser-APIs verwenden",
          "❌ Erhöht die JavaScript-Größe",
          "❌ Kann nicht direkt auf DB zugreifen",
          "❌ Kann Server Component nicht importieren",
        ],
      },
      {
        heading: "Interleaving-Regeln:",
        items: [
          "Server → Client: <strong>Erlaubt ✅</strong>",
          "Client → Server: <strong>Verboten ❌</strong>",
          'Lösung: verwende <code>children</code> um Server an Client weiterzugeben',
        ],
      },
      {
        heading: "Wann Client wählen:",
        items: [
          "useState, useReducer",
          "useEffect",
          "onClick, onSubmit",
          "localStorage, window",
          "Context Providers",
          "Custom Hooks (wenn eines der obigen verwendet wird)",
        ],
      },
    ],
  },
  ar: {
    title: "ملخص مراجعة مكونات الخادم مقابل العميل",
    columns: [
      {
        heading: "مكون الخادم ✅",
        items: [
          "✅ الافتراضي (لا يحتاج 'use client')",
          "✅ يصل إلى قاعدة البيانات والملفات مباشرة",
          "✅ مفاتيح API آمنة",
          "✅ يحسّن محركات البحث",
          "✅ لا يُرسل JavaScript إضافي",
          "❌ لا يمكنه استخدام useState/useEffect",
          "❌ لا يمكنه معالجة الأحداث",
        ],
      },
      {
        heading: "مكون العميل 🔵",
        items: [
          '✅ يحتاج "use client" في الأعلى',
          "✅ يمكنه استخدام useState/useEffect",
          "✅ يمكنه معالجة الأحداث",
          "✅ يمكنه استخدام واجهات برمجة المتصفح",
          "❌ يزيد حجم JavaScript",
          "❌ لا يصل إلى قاعدة البيانات مباشرة",
          "❌ لا يمكنه استيراد Server Component",
        ],
      },
      {
        heading: "قواعد التناوب:",
        items: [
          "الخادم → العميل: <strong>مسموح ✅</strong>",
          "العميل → الخادم: <strong>محظور ❌</strong>",
          'الحل: استخدم <code>children</code> لتمرير محتوى الخادم إلى العميل',
        ],
      },
      {
        heading: "متى تختار مكون العميل:",
        items: [
          "useState, useReducer",
          "useEffect",
          "onClick, onSubmit",
          "localStorage, window",
          "مقدمات السياق",
          "Hooks مخصصة (إذا كنت تستخدم أي مما سبق)",
        ],
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

export default function ServerAndClientComponents() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("nextjs", "03-server-and-client-components");
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
        {content.challenge && (<Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>{challengeCode && <CodeBlock language="tsx" code={challengeCode} />}</Challenge>)}
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "tsx"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
