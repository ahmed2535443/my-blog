"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/nextjs/08-images-fonts-metadata";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1, 1, 1], fr: [1, 1, 1, 1, 1], de: [1, 1, 1, 1, 1], ar: [1, 1, 1, 1, 1] };

const challengeCode = `// استبدال جميع صور img بمكون next/image
import Image from "next/image";

// صورة محلية
<Image
  src="/images/photo.jpg"
  width={500}
  height={300}
  alt="وصف الصورة"
/>

// صورة في أعلى الصفحة مع priority
<Image
  src="/images/hero.jpg"
  width={1200}
  height={600}
  alt="صورة رئيسية"
  priority
/>

// صورة ملء الحاوية
<div className="relative w-full h-64">
  <Image
    src="/images/cover.jpg"
    alt="غلاف"
    fill
    className="object-cover"
    sizes="100vw"
  />
</div>

// خط من next/font
import { Cairo } from "next/font/google";
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

// Metadata ثابتة
export const metadata = {
  title: "الصفحة الرئيسية - موقعي",
  description: "مرحباً بكم في موقعنا",
  openGraph: {
    title: "موقعي",
    description: "موقع تعليمي",
    images: ["/og-image.jpg"],
  },
};

// Metadata ديناميكية
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}`;

const cheatSheetData = {
  en: {
    title: "Images, Fonts & Metadata Cheat Sheet",
    columns: [
      {
        heading: "next/image - Local:",
        code: `import Image from "next/image";

<Image
  src="/images/photo.jpg"
  width={500}
  height={300}
  alt="Description"
/>`,
        codeLanguage: "jsx",
      },
      {
        heading: "next/image - Remote:",
        code: `// next.config.ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "example.com" }
  ]
}

// In page
<Image
  src="https://example.com/photo.jpg"
  width={500}
  height={300}
  alt="Remote image"
/>`,
        codeLanguage: "jsx",
      },
      {
        heading: "next/font - Google:",
        code: `import { Cairo, Inter } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// In layout
<body className={\`\${cairo.variable} \${inter.variable}\`}>`,
        codeLanguage: "jsx",
      },
      {
        heading: "Metadata:",
        code: `// Static
export const metadata = {
  title: "Page Title",
  description: "Page description",
  openGraph: {
    title: "OG Title",
    description: "OG description",
    images: ["/og-image.jpg"],
  },
};

// Dynamic
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}`,
        codeLanguage: "jsx",
      },
    ],
  },
  fr: {
    title: "Fiche mémo Images, Polices & Métadonnées",
    columns: [
      {
        heading: "next/image - Locale:",
        code: `import Image from "next/image";

<Image
  src="/images/photo.jpg"
  width={500}
  height={300}
  alt="Description"
/>`,
        codeLanguage: "jsx",
      },
      {
        heading: "next/image - Distante:",
        code: `// next.config.ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "example.com" }
  ]
}

// Dans la page
<Image
  src="https://example.com/photo.jpg"
  width={500}
  height={300}
  alt="Image distante"
/>`,
        codeLanguage: "jsx",
      },
      {
        heading: "next/font - Google:",
        code: `import { Cairo, Inter } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Dans le layout
<body className={\`\${cairo.variable} \${inter.variable}\`}>`,
        codeLanguage: "jsx",
      },
      {
        heading: "Métadonnées:",
        code: `// Statiques
export const metadata = {
  title: "Titre de la page",
  description: "Description de la page",
  openGraph: {
    title: "Titre OG",
    description: "Description OG",
    images: ["/og-image.jpg"],
  },
};

// Dynamiques
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}`,
        codeLanguage: "jsx",
      },
    ],
  },
  de: {
    title: "Spickzettel Bilder, Schriften & Metadaten",
    columns: [
      {
        heading: "next/image - Lokal:",
        code: `import Image from "next/image";

<Image
  src="/images/photo.jpg"
  width={500}
  height={300}
  alt="Beschreibung"
/>`,
        codeLanguage: "jsx",
      },
      {
        heading: "next/image - Remote:",
        code: `// next.config.ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "example.com" }
  ]
}

// In der Seite
<Image
  src="https://example.com/photo.jpg"
  width={500}
  height={300}
  alt="Remote-Bild"
/>`,
        codeLanguage: "jsx",
      },
      {
        heading: "next/font - Google:",
        code: `import { Cairo, Inter } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Im Layout
<body className={\`\${cairo.variable} \${inter.variable}\`}>`,
        codeLanguage: "jsx",
      },
      {
        heading: "Metadaten:",
        code: `// Statisch
export const metadata = {
  title: "Seitentitel",
  description: "Seitenbeschreibung",
  openGraph: {
    title: "OG-Titel",
    description: "OG-Beschreibung",
    images: ["/og-image.jpg"],
  },
};

// Dynamisch
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}`,
        codeLanguage: "jsx",
      },
    ],
  },
  ar: {
    title: "ملخص مراجعة الصور والخطوط والبيانات الوصفية",
    columns: [
      {
        heading: "next/image - محلية:",
        code: `import Image from "next/image";

<Image
  src="/images/photo.jpg"
  width={500}
  height={300}
  alt="وصف الصورة"
/>`,
        codeLanguage: "jsx",
      },
      {
        heading: "next/image - عن بُعد:",
        code: `// next.config.ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "example.com" }
  ]
}

// في الصفحة
<Image
  src="https://example.com/photo.jpg"
  width={500}
  height={300}
  alt="صورة عن بُعد"
/>`,
        codeLanguage: "jsx",
      },
      {
        heading: "next/font - من Google:",
        code: `import { Cairo, Inter } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// في التخطيط
<body className={\`\${cairo.variable} \${inter.variable}\`}>`,
        codeLanguage: "jsx",
      },
      {
        heading: "البيانات الوصفية:",
        code: `// ثابتة
export const metadata = {
  title: "عنوان الصفحة",
  description: "وصف الصفحة",
  openGraph: {
    title: "عنوان OG",
    description: "وصف OG",
    images: ["/og-image.jpg"],
  },
};

// ديناميكية
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}`,
        codeLanguage: "jsx",
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

export default function ImagesFontsMetadata() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("nextjs", "08-images-fonts-metadata");
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
        <LessonExtras content={content} />
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
