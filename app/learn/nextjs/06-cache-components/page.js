"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/nextjs/06-cache-components";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1, 1, 1], fr: [1, 1, 1, 1, 1], de: [1, 1, 1, 1, 1] };

const challengeCode = `// الحل الكامل

// 1. ملف lib/products.js
import { cacheLife, cacheTag } from "next/cache";
import { db } from "./database";

export async function getProducts(categoryId) {
  "use cache";
  cacheLife("hours");
  cacheTag("products");

  console.log("جلب المنتجات من قاعدة البيانات");
  return await db.products.findMany({
    where: categoryId ? { categoryId } : {},
    orderBy: { createdAt: "desc" },
  });
}

export async function getProduct(id) {
  "use cache";
  cacheLife({ revalidate: 600 }); // 10 دقائق
  cacheTag(\`product-\${id}\`);

  console.log(\`جلب المنتج \${id} من قاعدة البيانات\`);
  return await db.products.findUnique({ where: { id } });
}

export async function getCategories() {
  "use cache";
  cacheLife("days");
  cacheTag("categories");

  return await db.categories.findMany();
}

// 2. ملف app/actions.js
"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(prevState, formData) {
  const name = formData.get("name")?.trim();
  const price = Number(formData.get("price"));
  const categoryId = formData.get("categoryId");

  if (!name || price <= 0) {
    return { error: "بيانات غير صحيحة" };
  }

  await db.products.create({
    data: { name, price, categoryId },
  });

  revalidateTag("products");
  return { error: null };
}

export async function deleteProduct(productId) {
  await db.products.delete({ where: { id: productId } });

  revalidateTag("products");
  revalidateTag(\`product-\${productId}\`);
  redirect("/products");
}

// 3. ملف app/products/page.js
import { Suspense } from "react";
import { getProducts, getCategories } from "@/lib/products";
import ProductForm from "@/components/ProductForm";
import ProductList from "@/components/ProductList";

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">المنتجات ({products.length})</h1>

      <ProductForm categories={categories} />

      <Suspense fallback={<p>جاري تحميل المنتجات...</p>}>
        <ProductList products={products} />
      </Suspense>
    </div>
  );
}`;

const cheatSheetData = {
  en: {
    title: "Cache Components Cheat Sheet",
    columns: [
      {
        heading: '"use cache" Directive:',
        code: `// Function-level caching
async function getProducts() {
  "use cache";
  cacheLife("hours");
  cacheTag("products");
  return await db.products.findMany();
}

// File-level caching
"use cache";
async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "cacheLife Profiles:",
        items: [
          '<code className="inline-code">"seconds"</code> - 30 seconds (live data)',
          '<code className="inline-code">"minutes"</code> - 5 minutes (normal data)',
          '<code className="inline-code">"hours"</code> - 1 hour (semi-static)',
          '<code className="inline-code">"days"</code> - 1 day (static data)',
          '<code className="inline-code">"max"</code> - 30 days (very static)',
        ],
      },
      {
        heading: "Cache Types:",
        items: [
          '<code className="inline-code">"use cache"</code> - In-memory (fastest)',
          '<code className="inline-code">"use cache: remote"</code> - External (Redis)',
          '<code className="inline-code">"use cache: private"</code> - Per-request (user-specific)',
        ],
      },
      {
        heading: "Invalidation:",
        code: `import { revalidateTag, updateTag }
  from "next/cache";

// Stale-while-revalidate
revalidateTag("products");

// Read-your-writes (Server Actions only)
updateTag("products");`,
        codeLanguage: "jsx",
      },
    ],
  },
  fr: {
    title: "Fiche mémo Cache Components",
    columns: [
      {
        heading: 'Directive "use cache":',
        code: `// Cache au niveau fonction
async function getProducts() {
  "use cache";
  cacheLife("hours");
  cacheTag("products");
  return await db.products.findMany();
}

// Cache au niveau fichier
"use cache";
async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Profils cacheLife:",
        items: [
          '<code className="inline-code">"seconds"</code> - 30 secondes (données live)',
          '<code className="inline-code">"minutes"</code> - 5 minutes (données normales)',
          '<code className="inline-code">"hours"</code> - 1 heure (semi-statique)',
          '<code className="inline-code">"days"</code> - 1 jour (données statiques)',
          '<code className="inline-code">"max"</code> - 30 jours (très statique)',
        ],
      },
      {
        heading: "Types de cache:",
        items: [
          '<code className="inline-code">"use cache"</code> - En mémoire (le plus rapide)',
          '<code className="inline-code">"use cache: remote"</code> - Externe (Redis)',
          '<code className="inline-code">"use cache: private"</code> - Par requête (spécifique à l\'utilisateur)',
        ],
      },
      {
        heading: "Invalidation:",
        code: `import { revalidateTag, updateTag }
  from "next/cache";

revalidateTag("products");
updateTag("products");`,
        codeLanguage: "jsx",
      },
    ],
  },
  de: {
    title: "Cache Components Spickzettel",
    columns: [
      {
        heading: '"use cache" Direktive:',
        code: `// Function-Level Caching
async function getProducts() {
  "use cache";
  cacheLife("hours");
  cacheTag("products");
  return await db.products.findMany();
}

// File-Level Caching
"use cache";
async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "cacheLife Profile:",
        items: [
          '<code className="inline-code">"seconds"</code> - 30 Sekunden (Live-Daten)',
          '<code className="inline-code">"minutes"</code> - 5 Minuten (normale Daten)',
          '<code className="inline-code">"hours"</code> - 1 Stunde (halb-statisch)',
          '<code className="inline-code">"days"</code> - 1 Tag (statische Daten)',
          '<code className="inline-code">"max"</code> - 30 Tage (sehr statisch)',
        ],
      },
      {
        heading: "Cache-Typen:",
        items: [
          '<code className="inline-code">"use cache"</code> - Im Speicher (schnellste)',
          '<code className="inline-code">"use cache: remote"</code> - Extern (Redis)',
          '<code className="inline-code">"use cache: private"</code> - Pro-Anfrage (benutzerspezifisch)',
        ],
      },
      {
        heading: "Invalidierung:",
        code: `import { revalidateTag, updateTag }
  from "next/cache";

revalidateTag("products");
updateTag("products");`,
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

export default function CacheComponents() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("nextjs", "06-cache-components");
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
