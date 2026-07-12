import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function NextjsFinalProject() {
  const lessonInfo = getLessonBySlug("nextjs", "10-nextjs-final-project");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        {/* ========================================== */}
        {/* القسم الأول: ملخص شامل لمرحلة Next.js */}
        {/* ========================================== */}
        <LessonSection title="ملخص شامل لمرحلة Next.js">
          <p>
            مبروك! وصلت إلى الدرس الأخير من مرحلة Next.js. قبل أن نبدأ المشروع التطبيقي،
            دعنا نلخص بسرعة كل ما تعلمناه في الـ 9 دروس السابقة:
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>الدرس 1: مقدمة في Next.js والإعداد</h4>
              <p className="text-sm" style={{ color: "var(--muted)" }}>ما هو Next.js، إنشاء مشروع، هيكل الملفات، Turbopack، متغيرات البيئة</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>الدرس 2: التوجيه — الصفحات والتخطيطات</h4>
              <p className="text-sm" style={{ color: "var(--muted)" }}>File-based routing، layouts، dynamic routes، route groups، Link</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>الدرس 3: مكونات الخادم والعميل</h4>
              <p className="text-sm" style={{ color: "var(--muted)" }}>Server Components vs Client Components، متى نستخدم كل نوع</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>الدرس 4: جلب البيانات والـ Streaming</h4>
              <p className="text-sm" style={{ color: "var(--muted)" }}>جلب البيانات في Server Components، Suspense، loading.js</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>الدرس 5: Server Actions والنماذج</h4>
              <p className="text-sm" style={{ color: "var(--muted)" }}>Server Functions، جمع البيانات من النماذج، useActionState، revalidation</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>الدرس 6: نظام التخزين (Cache Components)</h4>
              <p className="text-sm" style={{ color: "var(--muted)" }}>use cache directive، cacheLife، cacheTag، استراتيجيات التخزين</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>الدرس 7: معالجة الأخطاء</h4>
              <p className="text-sm" style={{ color: "var(--muted)" }}>error.js، not-found.js، global-error.js، Error Boundaries</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>الدرس 8: الصور والخطوط والبيانات الوصفية</h4>
              <p className="text-sm" style={{ color: "var(--muted)" }}>next/image، next/font، Metadata API، SEO</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>الدرس 9: مسارات API والـ Proxy</h4>
              <p className="text-sm" style={{ color: "var(--muted)" }}>Route Handlers، proxy.ts، إعادة التوجيه، فحص المصادقة</p>
            </div>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: Cheat Sheet شامل */}
        {/* ========================================== */}
        <LessonSection title="Cheat Sheet شامل لـ Next.js 16">
          <p>
            هذا ملخص سريع لكل المفاهيم والsyntax التي تعلمتها في هذه المرحلة — احتفظ به كمرجع سريع:
          </p>
          <CheatSheet
            title="Cheat Sheet كامل — Next.js 16"
            items={[
              {
                title: "التوجيه (Routing)",
                description: "إنشاء صفحات ومسارات في App Router",
                code: `// صفحة رئيسية
app/page.js          → /

// صفحة فرعية
app/about/page.js    → /about

// مسار ديناميكي
app/blog/[slug]/page.js → /blog/my-post

// تخطيط مشترك
app/layout.js        → يلف كل الصفحات

// صفحة تحميل
app/loading.js       → يظهر أثناء تحميل الصفحة`
              },
              {
                title: "Server Components vs Client Components",
                description: "متى نستخدم كل نوع من المكونات",
                code: `// Server Component (الافتراضي)
// يعمل على الخادم فقط — يمكنه جلب بيانات مباشرة
async function ServerComponent() {
  const data = await fetch("https://api.example.com/data");
  return <div>{/* عرض البيانات */}</div>;
}

// Client Component — يعمل على العميل
"use client";
import { useState } from "react";
function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}`
              },
              {
                title: "جلب البيانات (Data Fetching)",
                description: "جلب البيانات في Server Components",
                code: `// في Server Component مباشرة
async function Page() {
  const res = await fetch("https://api.example.com/posts", {
    next: { revalidate: 3600 }, // ISR: إعادة التحقق كل ساعة
  });
  const posts = await res.json();
  return <PostList posts={posts} />;
}

// مع Streaming و Suspense
import { Suspense } from "react";
async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SlowComponent />
    </Suspense>
  );
}`
              },
              {
                title: "Server Actions",
                description: "تعديل البيانات من النماذج",
                code: `// تعريف Server Action
"use server";
async function addPost(formData) {
  const title = formData.get("title");
  await db.posts.create({ data: { title } });
  revalidatePath("/posts");
}

// استخدامه في النموذج
<form action={addPost}>
  <input name="title" />
  <button type="submit">إضافة</button>
</form>`
              },
              {
                title: "Cache Components",
                description: "التخزين المؤقت في Next.js 16",
                code: `// استخدام use cache directive
"use cache";
async function ExpensiveComponent() {
  const data = await fetchExpensiveData();
  return <div>{data}</div>;
}

// مع cacheLife
"use cache: 1 hour";

// مع cacheTag للمصادرة
"use cache";
async function TaggedComponent() {
  "use cache";
  // cacheTag("posts");
  const posts = await getPosts();
  return <PostList posts={posts} />;
}`
              },
              {
                title: "معالجة الأخطاء",
                description: "ملفات الأخطاء في App Router",
                code: `// error.js — حدود أخطاء للمسارات الفرعية
"use client";
export default function Error({ error, reset }) {
  return <button onClick={reset}>حاول مرة أخرى</button>;
}

// not-found.js — صفحة 404 مخصصة
export default function NotFound() {
  return <div>الصفحة غير موجودة</div>;
}

// global-error.js — أخطاء التخطيط الجذري
"use client";
export default function GlobalError({ error, reset }) {
  return <html><body><button onClick={reset}>إعادة</button></body></html>;
}`
              },
              {
                title: "الصور والخطوط والبيانات الوصفية",
                description: "تحسين الأداء والـ SEO",
                code: `// صورة محسّنة
import Image from "next/image";
<Image src="/photo.jpg" alt="وصف" width={800} height={600} />

// خط مخصص
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Metadata
export const metadata = {
  title: "عنوان الصفحة",
  description: "وصف الصفحة",
  openGraph: { title: "...", images: ["/og.jpg"] },
};`
              },
              {
                title: "Route Handlers و Proxy",
                description: "إنشاء APIs والتحكم بالطلبات",
                code: `// Route Handler
export async function GET(request) {
  return Response.json({ data: "..." });
}

export async function POST(request) {
  const body = await request.json();
  return Response.json(result, { status: 201 });
}

// proxy.ts (بديل middleware)
export function proxy(request) {
  if (!request.cookies.get("token")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}`
              }
            ]}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: مشروع تطبيق مدونة */}
        {/* ========================================== */}
        <LessonSection title="مشروع: تطبيق مدونة (Blog App)">
          <p>
            الآن سنستخدم كل ما تعلمناه لبناء تطبيق مدونة كامل. هذا المشروع سيجمع بين جميع المفاهيم:
            Routing، Server/Client Components، Data Fetching، Server Actions، Cache، Error Handling، SEO، و Route Handlers.
          </p>

          {/* هيكل المشروع */}
          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--primary)" }}>هيكل المشروع (Project Structure)</h3>
          <p>
            أولاً، لنرَ هيكل الملفات الكامل للمشروع:
          </p>
          <CodeBlock
            code={`my-blog-app/
├── app/
│   ├── layout.js              ← التخطيط الجذري (الشريط العلوي + التذييل)
│   ├── page.js                ← الصفحة الرئيسية (المقالات المميزة)
│   ├── loading.js             ← شاشة تحميل عامة
│   ├── error.js               ← صفحة خطأ عامة
│   ├── not-found.js           ← صفحة 404
│   ├── globals.css            ← التنسيقات العامة
│   │
│   ├── blog/
│   │   ├── layout.js          ← تخطيط قسم المدونة
│   │   ├── page.js            ← صفحة جميع المقالات
│   │   ├── loading.js         ← تحميل المقالات
│   │   ├── error.js           ← أخطاء قسم المدونة
│   │   ├── [slug]/
│   │   │   └── page.js        ← صفحة المقال الفردي
│   │   └── category/
│   │       └── [name]/
│   │           └── page.js    ← مقالات حسب التصنيف
│   │
│   ├── api/
│   │   └── comments/
│   │       └── route.js       ← API لإضافة التعليقات
│   │
│   └── admin/
│       └── page.js            ← لوحة التحكم (محمية)
│
├── components/
│   ├── Navbar.js              ← شريط التنقل
│   ├── Footer.js              ← التذييل
│   ├── PostCard.js            ← بطاقة المقال
│   ├── CommentForm.js         ← نموذج التعليق (Client Component)
│   └── SearchBar.js           ← شريط البحث (Client Component)
│
├── lib/
│   ├── posts.js               ← دوال جلب المقالات
│   └── comments.js            ← دوال التعليقات
│
├── proxy.ts                   ← Proxy للمصادقة
├── next.config.mjs
└── package.json`}
            language="bash"
          />
        </LessonSection>

        {/* الصفحة الرئيسية */}
        <LessonSection title="الصفحة الرئيسية (Home Page)">
          <p>
            الصفحة الرئيسية هي Server Component تجلب المقالات المميزة و تعرضها بتصميم جذاب:
          </p>
          <CodeBlock
            code={`// app/page.js
import Link from "next/link";
import PostCard from "@/components/PostCard";

async function getFeaturedPosts() {
  const res = await fetch("https://api.example.com/posts?featured=true", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export const metadata = {
  title: "مدونتي | أحدث المقالات",
  description: "مدونة متخصصة في البرمجة وتطوير الويب",
  openGraph: {
    title: "مدونتي",
    description: "أحدث المقالات في البرمجة وتطوير الويب",
    type: "website",
  },
};

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* قسم البطل (Hero Section) */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
          مرحباً بك في مدونتي
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          مقالات ودروس في البرمجة وتطوير الويب
        </p>
      </section>

      {/* المقالات المميزة */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            المقالات المميزة
          </h2>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            عرض الكل ←
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {featuredPosts.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            لا توجد مقالات مميزة حالياً
          </p>
        )}
      </section>
    </main>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* صفحة المقال */}
        <LessonSection title="صفحة المقال (Post Page)">
          <p>
            صفحة المقال الفردي تستخدم Dynamic Route و Metadata ديناميكي لتحسين SEO لكل مقال:
          </p>
          <CodeBlock
            code={`// app/blog/[slug]/page.js
import { notFound } from "next/navigation";
import { Suspense } from "react";
import CommentForm from "@/components/CommentForm";

async function getPost(slug) {
  const res = await fetch(\`https://api.example.com/posts/\${slug}\`, {
    next: { revalidate: 3600 },
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("فشل جلب المقال");
  }

  return res.json();
}

async function getComments(postId) {
  const res = await fetch(\`https://api.example.com/posts/\${postId}/comments\`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return [];
  return res.json();
}

// Metadata ديناميكي لكل مقال
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const comments = await getComments(post.id);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* رأس المقال */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/blog" className="hover:text-blue-600">المدونة</Link>
          <span>/</span>
          <Link
            href={\`/blog/category/\${post.category}\`}
            className="hover:text-blue-600"
          >
            {post.category}
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-gray-500">
          <span>{post.author.name}</span>
          <span>•</span>
          <time>{new Date(post.publishedAt).toLocaleDateString("ar-SA")}</time>
          <span>•</span>
          <span>{post.readTime} دقيقة قراءة</span>
        </div>
      </header>

      {/* صورة الغلاف */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-auto"
        />
      </div>

      {/* محتوى المقال */}
      <div
        className="prose prose-lg prose-gray max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* قسم التعليقات */}
      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">التعليقات ({comments.length})</h2>

        {comments.map((comment) => (
          <div key={comment.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">{comment.author}</p>
            <p className="text-gray-600 mt-1">{comment.content}</p>
          </div>
        ))}

        <Suspense fallback={<p>جاري تحميل نموذج التعليق...</p>}>
          <CommentForm postId={post.id} />
        </Suspense>
      </section>
    </article>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* صفحة التصنيف */}
        <LessonSection title="صفحة التصنيف (Category Page)">
          <p>
            صفحة تعرض المقالات المفلترة حسب التصنيف:
          </p>
          <CodeBlock
            code={`// app/blog/category/[name]/page.js
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";

async function getPostsByCategory(categoryName) {
  const res = await fetch(
    \`https://api.example.com/posts?category=\${categoryName}\`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return [];
  return res.json();
}

export async function generateMetadata({ params }) {
  const { name } = await params;
  const displayName = decodeURIComponent(name);

  return {
    title: \`تصنيف: \${displayName} | مدونتي\`,
    description: \`جميع المقالات في تصنيف \${displayName}\`,
  };
}

export default async function CategoryPage({ params }) {
  const { name } = await params;
  const displayName = decodeURIComponent(name);
  const posts = await getPostsByCategory(name);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900">
        تصنيف: {displayName}
      </h1>
      <p className="text-gray-500 mb-8">{posts.length} مقال</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          لا توجد مقالات في هذا التصنيف
        </p>
      )}
    </main>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* إضافة تعليق */}
        <LessonSection title="إضافة تعليق — Server Action مع التحقق">
          <p>
            نموذج التعليق يستخدم Server Action مع التحقق من صحة البيانات:
          </p>
          <CodeBlock
            code={`// lib/comments.js
"use server";

import { revalidatePath } from "next/cache";

export async function addComment(postId, prevState, formData) {
  const author = formData.get("author")?.toString().trim();
  const content = formData.get("content")?.toString().trim();

  // التحقق من صحة البيانات
  const errors = {};

  if (!author || author.length < 2) {
    errors.author = "الاسم يجب أن يكون حرفين على الأقل";
  }

  if (!content || content.length < 10) {
    errors.content = "التعليق يجب أن يكون 10 أحرف على الأقل";
  }

  if (content && content.length > 500) {
    errors.content = "التعليق لا يمكن أن يتجاوز 500 حرف";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    await fetch(\`https://api.example.com/posts/\${postId}/comments\`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, content }),
    });

    revalidatePath(\`/blog/*\`);

    return { success: true, errors: null };
  } catch (error) {
    return { success: false, errors: { general: "حدث خطأ أثناء إضافة التعليق" } };
  }
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// components/CommentForm.js
"use client";

import { useActionState } from "react";
import { addComment } from "@/lib/comments";

export default function CommentForm({ postId }) {
  const [state, formAction, isPending] = useActionState(
    (prevState, formData) => addComment(postId, prevState, formData),
    { success: false, errors: null }
  );

  return (
    <form action={formAction} className="mt-6 p-6 bg-gray-50 rounded-xl">
      <h3 className="text-lg font-bold mb-4">أضف تعليقاً</h3>

      {state.success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          تم إضافة تعليقك بنجاح!
        </div>
      )}

      {state.errors?.general && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {state.errors.general}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">الاسم</label>
        <input
          name="author"
          className="w-full px-4 py-2 border rounded-lg"
          disabled={isPending}
        />
        {state.errors?.author && (
          <p className="text-red-500 text-sm mt-1">{state.errors.author}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">التعليق</label>
        <textarea
          name="content"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg"
          disabled={isPending}
        />
        {state.errors?.content && (
          <p className="text-red-500 text-sm mt-1">{state.errors.content}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? "جاري الإرسال..." : "إرسال التعليق"}
      </button>
    </form>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* معالجة الأخطاء */}
        <LessonSection title="معالجة الأخطاء في المدونة">
          <p>
            نضيف ملفات معالجة أخطاء خاصة بقسم المدونة:
          </p>
          <CodeBlock
            code={`// app/blog/error.js
"use client";

export default function BlogError({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <div className="text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        خطأ في تحميل المقالات
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        نعتذر، حدثت مشكلة أثناء تحميل صفحة المقالات.
        يرجى المحاولة مرة أخرى.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        حاول مرة أخرى
      </button>
    </div>
  );
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// app/blog/not-found.js
import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        الصفحة غير موجودة
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        يبدو أن الصفحة التي تبحث عنها غير موجودة.
      </p>
      <Link
        href="/blog"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        العودة إلى المدونة
      </Link>
    </div>
  );
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-8xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        الصفحة غير موجودة
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* SEO */}
        <LessonSection title="تحسين SEO — Metadata كامل">
          <p>
            إعداد Metadata في التخطيط الجذري لتطبيقه على كل الصفحات مع إمكانية التخصيص:
          </p>
          <CodeBlock
            code={`// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "arabic"] });

export const metadata = {
  title: {
    default: "مدونتي | مقالات في البرمجة",
    template: "%s | مدونتي",
  },
  description: "مدونة متخصصة في البرمجة وتطوير الويب والتقنيات الحديثة",
  keywords: ["برمجة", "تطوير ويب", "React", "Next.js", "مدونة"],
  authors: [{ name: "أحمد" }],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "مدونتي",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// app/blog/[slug]/page.js
// Metadata ديناميكي لكل مقال
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "المقال غير موجود" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: \`https://myblog.com/blog/\${post.slug}\`,
      siteName: "مدونتي",
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}`}
            language="jsx"
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: مقارنة المبتدئ vs المحترف */}
        {/* ========================================== */}
        <LessonSection title="مقارنة: كود المبتدئ vs المحترف">
          <p>
            لنرَ الفرق الواضح بين كود المبتدئ وكود المحترف لنفس الميزة:
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--danger)" }}>كود المبتدئ ❌</h3>
          <CodeBlock
            code={`// ❌ المبتدئ: جلب بيانات مع useEffect (Client Component بالكامل)
"use client";

import { useState, useEffect } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch("https://api.example.com/posts");
        if (!res.ok) throw new Error("فشل الجلب");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>خطأ: {error}</div>;

  return (
    <div>
      <h1>المقالات</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--accent)" }}>كود المحترف ✅</h3>
          <CodeBlock
            code={`// ✅ المحترف: Server Component مع Cache و Streaming و Metadata

// app/blog/page.js (Server Component — بدون "use client")
import { Suspense } from "react";
import PostCard from "@/components/PostCard";
import SearchBar from "@/components/SearchBar";

async function getPosts() {
  const res = await fetch("https://api.example.com/posts", {
    next: {
      revalidate: 3600,    // ISR: إعادة التحقق كل ساعة
      tags: ["posts"],      // cacheTag للمصادرة
    },
  });

  if (!res.ok) throw new Error("فشل جلب المقالات");
  return res.json();
}

export const metadata = {
  title: "المقالات | مدونتي",
  description: "جميع المقالات في مدونتي",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-8">المقالات</h1>

      {/* بحث تفاعلي — Client Component عازل */}
      <Suspense fallback={<div>جاري التحميل...</div>}>
        <SearchBar />
      </Suspense>

      {/* شبكة المقالات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}`}
            language="jsx"
          />

          <div className="mt-6 p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h4 className="font-bold mb-2" style={{ color: "var(--primary)" }}>الفرق الجوهري:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>المبتدئ:</strong> كل شيء Client Component — لا SEO، لا caching، لا streaming</li>
              <li><strong>المحترف:</strong> Server Component مع cache و streaming و metadata و error handling</li>
              <li><strong>المبتدئ:</strong> كود أكبر وأعقد مع useState و useEffect</li>
              <li><strong>المحترف:</strong> كود أبسط وأنظف مع async/await مباشرة</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: أسئلة مقابلات شائعة */}
        {/* ========================================== */}
        <LessonSection title="أسئلة مقابلات Next.js شائعة">
          <p>
            هذه الأسئلة تُطرح كثيراً في مقابلات العمل المتعلقة بـ Next.js. حاول الإجابة عليها قبل قراءة الحلول:
          </p>

          <div className="space-y-6 mt-4">
            <div className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold text-lg mb-3" style={{ color: "var(--primary)" }}>1. ما الفرق بين SSR و SSG و ISR؟</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>SSR (Server-Side Rendering):</strong> الصفحة تُبنى على الخادم في كل طلب. مناسب للمحتوى الذي يتغير باستمرار (بيانات المستخدم).</li>
                <li><strong>SSG (Static Site Generation):</strong> الصفحة تُبنى مرة واحدة عند البناء وتُخزّن كملف HTML ثابت. أسرع ما يمكن — مناسب للمحتوى الثابت (صفحات التسويق).</li>
                <li><strong>ISR (Incremental Static Revalidation):</strong> الصفحة تُبنى كـ static ثم تُحدّث تلقائياً بعد فترة محددة. يجمع بين سرعة SSG ومرونة SSR.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold text-lg mb-3" style={{ color: "var(--primary)" }}>2. ما هي Server Components ولماذا نستخدمها؟</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>مكونات تعمل فقط على الخادم ولا يتم تحميل JavaScript منها في المتصفح.</li>
                <li><strong>المزايا:</strong> يمكنها الوصول المباشر لقاعدة البيانات، أسرع تحميل (أحجام أقل للمتصفح)، أمان أفضل (البيانات الحساسة لا تصل للعميل).</li>
                <li><strong>متى نستخدمها:</strong> أي مكون لا يحتاج تفاعلية (useState, useEffect, events). الافتراضي في Next.js.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold text-lg mb-3" style={{ color: "var(--primary)" }}>3. كيف يعمل نظام التخزين في Next.js 16؟</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>use cache directive:</strong> تخزين مؤقت على مستوى المكون بالكامل.</li>
                <li><strong>cacheLife:</strong> التحكم في مدة صلاحية التخزين (ساعة، يوم، أسبوع...).</li>
                <li><strong>cacheTag:</strong> تسمية التخزين للمصادرة (revalidation) بشكل انتقائي.</li>
                <li><strong>fetch caching:</strong> التخزين على مستوى fetch call باستخدام options مثل <code>next: {`{ revalidate }`}</code>.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold text-lg mb-3" style={{ color: "var(--primary)" }}>4. ما الفرق بين proxy.ts و Route Handlers؟</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>proxy.ts:</strong> يعمل على كل طلب قبل الوصول للصفحة/الـ API. مناسب لإعادة التوجيه، فحص المصادقة، تعديل Headers.</li>
                <li><strong>Route Handlers:</strong> نقاط نهاية API محددة (مثل /api/users). مناسبة لجمع البيانات وتعديلها وإرجاعها كـ JSON.</li>
                <li>Proxy = منطق على مستوى الطلب العام. Route Handler = API endpoint محدد.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold text-lg mb-3" style={{ color: "var(--primary)" }}>5. كيف تحسّن أداء تطبيق Next.js؟</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>استخدم <strong>Server Components</strong> بدلاً من Client Components قدر الإمكان.</li>
                <li>استخدم <strong>next/image</strong> لتحسين الصور (Lazy loading + WebP).</li>
                <li>فعّل <strong>ISR أو Cache</strong> للبيانات التي لا تتغير بسرعة.</li>
                <li>استخدم <strong>Suspense و loading.js</strong> لـ Streaming.</li>
                <li>قلل حجم JavaScript مع <strong>Dynamic Imports</strong> باستخدام <code>next/dynamic</code>.</li>
                <li>استخدم <strong>Turbopack</strong> (الافتراضي في v16) لتسريع التطوير.</li>
                <li>حسّن <strong>Metadata</strong> للـ SEO.</li>
              </ul>
            </div>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: نصائح للمشروع النهائي */}
        {/* ========================================== */}
        <LessonSection title="نصائح للانتقال للمشروع النهائي">
          <p>
            الآن بعد أن أكملت مرحلة Next.js، أنت مستعد للمشروع النهائي. هذه نصائح حول كيف تطبق كل مفهوم في مشروع Blog مع Supabase و Clerk:
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>1. التوجيه (Routing)</h4>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>استخدم File-based routing لبناء صفحات المدونة. كل صفحة لها route خاص بها: /blog، /blog/[slug]، /dashboard، إلخ.</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>2. التخطيطات (Layouts)</h4>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>layout.js الجذري للشريط العلوي والتذييل. layout.js خاص بـ /blog للقائمة الجانبية أو فلتر التصنيفات.</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>3. Server Components</h4>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>كل صفحة عرض المقالات = Server Component يجلب من Supabase مباشرة. استخدم Client Components فقط للتفاعلية (نماذج، بحث، أزرار).</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>4. جلب البيانات</h4>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>استخدم fetch مع ISR للحصول على أداء static مع تحديثات دورية. استخدم cacheTag للمصادرة عند نشر مقال جديد.</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>5. Server Actions</h4>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>إضافة تعليقات، إعجاب بالمقالات، نشر مقال جديد — كلها Server Actions مع revalidation.</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>6. المصادقة (Clerk)</h4>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}> Clerk يوفر مكونات React جاهزة و ClerkMiddleware/Proxy لحماية المسارات. استخدم useUser() و useAuth() للحصول على بيانات المستخدم.</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h4 className="font-bold" style={{ color: "var(--primary)" }}>7. قاعدة البيانات (Supabase)</h4>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>استخدم Supabase Client في Server Components للقراءة، و Server Actions للتعديل. حمّل العميل باستخدام cookies().</p>
            </div>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: اختبار المعرفة */}
        {/* ========================================== */}
        <LessonSection title="اختبار المعرفة — مراجعة شاملة">
          <Quiz
            question="في Next.js 16، ما الافتراضي لجلب البيانات في Server Component؟"
            options={[
              "useEffect مع fetch",
              "fetch مباشرة مع async/await",
              "getServerSideProps",
              "getStaticProps"
            ]}
            correctAnswer={1}
            explanation="في Server Components، يمكنك استخدام fetch مباشرة مع async/await — لا حاجة لـ useEffect أو الدوال القديمة."
          />
          <Quiz
            question="ما هو الملف الذي يستخدمه Next.js 16 لمعالجة الطلبات على مستوى التطبيق (بديل middleware)؟"
            options={[
              "middleware.ts",
              "proxy.ts",
              "server.ts",
              "handler.ts"
            ]}
            correctAnswer={1}
            explanation="proxy.ts هو البديل الجديد لـ middleware.ts في Next.js 16. يُصدّر دالة proxy بدلاً من middleware."
          />
          <Quiz
            question="عندما تريد تخزين نتيجة استدعاء fetch لمدة ساعة في Next.js 16، ماذا تستخدم؟"
            options={[
              'localStorage.setItem("cache", data)',
              'next: { revalidate: 3600 } في خيارات fetch',
              'useCache("1 hour")',
              'cache.set("key", value)'
            ]}
            correctAnswer={1}
            explanation="في خيارات fetch، تستخدم next: { revalidate: 3600 } لتفعيل ISR مع إعادة تحقق كل 3600 ثانية (ساعة)."
          />
          <Quiz
            question="ما الميزة التي تجعل Server Components أفضل من Client Components لعرض المقالات؟"
            options={[
              "أبسط في الكتابة فقط",
              "يمكنها جلب البيانات مباشرة وتخزين HTML على الخادم مع حجم JS أقل للمتصفح",
              "تتطلب React Compiler",
              "تعمل فقط في بيئة الإنتاج"
            ]}
            correctAnswer={1}
            explanation="Server Components تجلب البيانات على الخادم مباشرة، لا تحتاج JS للمتصفح (حجم أقل)، و HTML جاهز لتحسين SEO."
          />
          <Quiz
            question="في مشروع المدونة، أين يجب وضع الكود الذي يتحقق من تسجيل الدخول قبل عرض لوحة التحكم؟"
            options={[
              "في كل صفحة admin بشكل منفصل",
              "في layout.js الخاص بـ admin",
              "في proxy.ts مع matcher لـ /admin",
              "في globals.css"
            ]}
            correctAnswer={2}
            explanation="proxy.ts هو المكان المناسب لفحص المصادقة على مستوى الطلب. يمكنك استخدام matcher لتطبيقه فقط على مسارات /admin."
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: التحدي النهائي */}
        {/* ========================================== */}
        <LessonSection title="تحدي الدرس — توسيع تطبيق المدونة">
          <Challenge
            title="تحدي توسيع المدونة"
            description="قم بتقديم تطبيق المدونة بإضافة ميزات إضافية"
            tasks={[
              "أضف صفحة تصنيف في /blog/category/[name] تعرض المقالات المفلترة",
              "أضف شريط بحث Client Component يفلتر المقالات حسب العنوان",
              "أضف ترقيم صفحات (Pagination) لقائمة المقالات",
              "أضف Route Handler في /api/views/[slug] لعد مشاهدات كل مقال",
              "أضف proxy.ts يحمي مسار /admin ويعيد التوجيه غير المسجلين لـ /login",
              "أضف error.js و not-found.js خاصين بقسم المدونة",
              "حسّن Metadata لكل صفحة بمحتوى فريد و Open Graph images",
              "اختبر جميع الصفحات وتأكد من عمل التخزين والتحديثات"
            ]}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: ورقة الغش النهائية */}
        {/* ========================================== */}
        <LessonSection title="ورقة الغش النهائية — ملخص كل مراحل Next.js">
          <CheatSheet
            title="Next.js 16 — Cheat Sheet كامل"
            items={[
              {
                title: "إنشاء مشروع جديد",
                description: "أوامر البدء السريع",
                code: `npx create-next-app@latest my-app
cd my-app
npm run dev`
              },
              {
                title: "التوجيه الأساسي",
                description: "إنشاء صفحات ومسارات ديناميكية",
                code: `app/page.js                    → /
app/about/page.js              → /about
app/blog/[slug]/page.js        → /blog/:slug
app/(auth)/login/page.js       → /login (بدون prefix)`
              },
              {
                title: "التخطيطات (Layouts)",
                description: "تخطيط مشترك يلف عدة صفحات",
                code: `// app/layout.js — يلف كل الصفحات
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}`
              },
              {
                title: "Server Components",
                description: "المكونات الافتراضية — تعمل على الخادم",
                code: `// بدون "use client" = Server Component
async function MyComponent() {
  const data = await fetch("https://api.example.com/data");
  const json = await data.json();
  return <div>{json.title}</div>;
}`
              },
              {
                title: "Client Components",
                description: "للتفاعلية — تحتاج 'use client'",
                code: `"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}`
              },
              {
                title: "جلب البيانات و ISR",
                description: "جلب مع تخزين مؤقت",
                code: `const res = await fetch(url, {
  next: {
    revalidate: 3600,   // ISR: تحديث كل ساعة
    tags: ["posts"],    // cacheTag للمصادرة
  },
});`
              },
              {
                title: "Server Actions",
                description: "تعديل البيانات من النماذج",
                code: `"use server";
async function addItem(prevState, formData) {
  const name = formData.get("name");
  await db.items.create({ data: { name } });
  revalidatePath("/items");
  return { success: true };
}`
              },
              {
                title: "use cache",
                description: "تخزين مؤقت للمكونات في Next.js 16",
                code: `"use cache";
async function ExpensiveComponent() {
  const data = await expensiveOperation();
  return <div>{data}</div>;
}
// cacheLife("1 hour");
// cacheTag("data");`
              },
              {
                title: "معالجة الأخطاء",
                description: "ملفات error.js و not-found.js",
                code: `// error.js (يجب أن يكون Client)
"use client";
export default function Error({ error, reset }) {
  return <button onClick={reset}>إعادة المحاولة</button>;
}

// not-found.js
export default function NotFound() {
  return <div>404 - غير موجود</div>;
}`
              },
              {
                title: "الصور والخطوط",
                description: "تحسين الأداء مع next/image و next/font",
                code: `import Image from "next/image";
<Image src="/photo.jpg" alt="..." width={800} height={600} />

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });`
              },
              {
                title: "Metadata API",
                description: "تحسين SEO لكل صفحة",
                code: `export const metadata = {
  title: "عنوان الصفحة",
  description: "وصف الصفحة",
  openGraph: { title: "...", images: ["/og.jpg"] },
};

// أو ديناميكي
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post.title };
}`
              },
              {
                title: "Route Handlers",
                description: "إنشاء API endpoints",
                code: `// app/api/items/route.js
export async function GET() {
  return Response.json(items);
}
export async function POST(request) {
  const body = await request.json();
  return Response.json(newItem, { status: 201 });
}`
              },
              {
                title: "proxy.ts",
                description: "التحكم بالطلبات (بديل middleware)",
                code: `import { NextResponse } from "next/server";
export function proxy(request) {
  const token = request.cookies.get("token");
  if (!token) return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}
export const config = { matcher: ["/dashboard/:path*"] };`
              }
            ]}
          />
        </LessonSection>

        <LessonNavigation
          prevLesson={lessonInfo.prevLesson}
          prevStage={lessonInfo.prevLessonStage}
          nextLesson={lessonInfo.nextLesson}
          nextStage={lessonInfo.nextLessonStage}
        />
      </div>
    </div>
  );
}
