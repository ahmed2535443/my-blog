// =====================================================
// ملف: page.js (الدرس الثامن: SEO والتصميم المتجاوب)
// المكان: app/learn/final-project/08-seo-and-responsive/page.js
// الوظيفة: تعليم كيفية تحسين SEO والتصميم المتجاوب في المدونة
// URL: /learn/final-project/08-seo-and-responsive
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function SeoAndResponsive() {
  const lesson = getLessonBySlug("final-project", "08-seo-and-responsive");

  return (
    <div dir="rtl" className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <LessonHeader stage={lesson.stage} lesson={lesson} lessonIndex={lesson.lessonIndex} totalLessons={lesson.totalLessons} />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ========================================== */}
        {/* القسم الأول: مقدمة عن SEO والتصميم المتجاوب */}
        {/* ========================================== */}
        <LessonSection title="مقدمة عن SEO والتصميم المتجاوب">
          <p>
            <strong>SEO</strong> (تحسين محركات البحث) يُساعد مدونتك على الظهور في
            نتائج Google ومحركات البحث الأخرى. أما <strong>التصميم المتجاوب</strong>
            فيُتأكّد من أن المدونة تعمل بشكل ممتاز على جميع الأجهزة من الهاتف
            إلى الحاسوب المكتبي.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              لماذا هذا مهم للمدونة؟
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>SEO:</strong> زيادة الزيارات من محركات البحث مجاناً</li>
              <li><strong>المتجاوب:</strong> أكثر من 60% من زيارات الويب تأتي من الهاتف</li>
              <li><strong>الأداء:</strong> صفحات أسرع = تجربة مستخدم أفضل = ترتيب أعلى</li>
              <li><strong>Open Graph:</strong> مشاركة جميلة على وسائل التواصل الاجتماعي</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: Metadata API في Next.js */}
        {/* ========================================== */}
        <LessonSection title="Metadata API في Next.js">
          <p>
            Next.js يوفر <strong>Metadata API</strong> لإدارة وسوم الـ HTML
            المتعلقة بـ SEO. يمكنك تعريف metadata ثابتة أو ديناميكية لكل صفحة:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: app/layout.js
// Metadata العامة لكل صفحات الموقع

export const metadata = {
  title: {
    default: "مدونتي | مقالات تعليمية عن البرمجة",
    template: "%s | مدونتي",
  },
  description: "مدونة تعليمية تقدم شروحات مبسطة للبرمجة والتطوير",
  keywords: ["برمجة", "تطوير ويب", "React", "Next.js", "تعلم"],
  authors: [{ name: "اسم الكاتب" }],
  creator: "اسم الكاتب",
  publisher: "مدونتي",

  // Open Graph - لل التواصل الاجتماعي
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://myblog.com",
    siteName: "مدونتي",
    title: "مدونتي | مقالات تعليمية عن البرمجة",
    description: "مدونة تعليمية تقدم شروحات مبسطة للبرمجة والتطوير",
    images: [
      {
        url: "https://myblog.com/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "مدونتي",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "مدونتي | مقالات تعليمية عن البرمجة",
    description: "مدونة تعليمية تقدم شروحات مبسطة للبرمجة والتطوير",
    images: ["https://myblog.com/twitter-card.jpg"],
  },

  // الروبوتات
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ربط الموقع بمحركات البحث
  alternates: {
    canonical: "https://myblog.com",
    languages: {
      "ar-SA": "https://myblog.com",
    },
  },
};`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              شرح الوسوم المهمة:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><code>title</code> - عنوان الصفحة في نتائج البحث والمتصفح</li>
              <li><code>description</code> - وصف الصفحة في نتائج البحث</li>
              <li><code>keywords</code> - الكلمات المفتاحية لمحركات البحث</li>
              <li><code>openGraph</code> - كيفية عرض الصفحة عند المشاركة على فيسبوك وتويتر</li>
              <li><code>canonical</code> - يُحدد الرابط الأصلي لمنع المحتوى المكرر</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: Metadata ديناميكية */}
        {/* ========================================== */}
        <LessonSection title="Metadata ديناميكية للمقالات">
          <p>
            لكل مقال metadata خاصة به. نستخدم <code>generateMetadata</code>
            لإنشاء metadata ديناميكية بناءً على بيانات المقال من قاعدة البيانات:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: app/blog/[slug]/page.js
// صفحة عرض مقال محدد مع metadata ديناميكية

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// دالة generateMetadata تُنشأ metadata ديناميكية
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from("posts")
    .select("title, description, image, author:users(name), created_at")
    .eq("slug", slug)
    .single();

  if (!post) {
    return {
      title: "مقال غير موجود",
      description: "المقال الذي تبحث عنه غير موجود",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    title: post.title,
    description: post.description,
    keywords: [post.title, "مقال", "برمجة", "تطوير"],

    openGraph: {
      type: "article",
      locale: "ar_SA",
      url: \`\${siteUrl}/blog/\${slug}\`,
      siteName: "مدونتي",
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image || \`\${siteUrl}/og-default.jpg\`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      authors: [post.author?.name || "مجهول"],
      publishedTime: post.created_at,
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image || \`\${siteUrl}/og-default.jpg\`],
    },

    alternates: {
      canonical: \`\${siteUrl}/blog/\${slug}\`,
    },
  };
}

// صفحة المقال
export default async function BlogPost({ params }) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from("posts")
    .select("*, author:users(name, avatar_url)")
    .eq("slug", slug)
    .single();

  if (!post) {
    return <div className="text-center py-16">المقال غير موجود</div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-xl mb-8" style={{ color: "var(--muted)" }}>
        {post.description}
      </p>
      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>
    </article>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: Open Graph Images الديناميكية */}
        {/* ========================================== */}
        <LessonSection title="Open Graph Images الديناميكية">
          <p>
            يمكنك إنشاء صور Open Graph ديناميكية لكل مقال باستخدام
            Next.js Route Handlers. هذه الصور تظهر عند مشاركة المقال على
            وسائل التواصل الاجتماعي:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: app/api/og/route.js
// إنشاء صورة Open Graph ديناميكية

import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "مدونتي";
  const subtitle = searchParams.get("subtitle") || "مقالات تعليمية";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "12px",
              background: "#fbbf24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
            }}
          >
            📝
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            مدونتي
          </span>
        </div>

        <div
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            textAlign: "center",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// استخدام الصورة في Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  const ogImageUrl = new URL(
    \`\${process.env.NEXT_PUBLIC_SITE_URL}/api/og\`
  );
  ogImageUrl.searchParams.set("title", post.title);
  ogImageUrl.searchParams.set("subtitle", post.description);

  return {
    openGraph: {
      images: [
        {
          url: ogImageUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: التصميم المتجاوب مع Tailwind */}
        {/* ========================================== */}
        <LessonSection title="التصميم المتجاوب مع Tailwind">
          <p>
            Tailwind CSS يجعل التصميم المتجاوب سهلاً باستخدام breakpoints مدمجة.
            المدونة يجب أن تعمل بشكل ممتاز على الشاشات المختلفة:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: components/BlogCard.js
// بطاقة مقال متجاوبة

import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <Link
      href={\`/blog/\${post.slug}\`}
      className="group block rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      {/* صورة المقال */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.image || "/default-post.jpg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* محتوى البطاقة */}
      <div className="p-5">
        {/* التصنيف */}
        {post.category && (
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
            style={{ background: "var(--primary)", color: "var(--background)" }}
          >
            {post.category.name}
          </span>
        )}

        {/* العنوان - حجم أكبر في الموبايل */}
        <h2 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
          {post.title}
        </h2>

        {/* الوصف - إخفاء في الشاشات الصغيرة */}
        <p className="hidden sm:block text-sm mb-4 line-clamp-2" style={{ color: "var(--muted)" }}>
          {post.description}
        </p>

        {/* معلومات الكاتب والتاريخ */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {post.author?.avatar_url && (
              <img
                src={post.author.avatar_url}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <span className="text-sm" style={{ color: "var(--muted)" }}>
              {post.author?.name}
            </span>
          </div>
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            {new Date(post.created_at).toLocaleDateString("ar-SA")}
          </span>
        </div>
      </div>
    </Link>
  );
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// ملف: components/Header.js
// شريط التنقل المتجاوب

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        background: "rgba(var(--background-rgb), 0.8)",
        borderColor: "var(--border)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* الشعار */}
          <Link href="/" className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
            📝 مدونتي
          </Link>

          {/* القائمة الرئيسية - تظهر في الشاشات الكبيرة */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="hover:text-[var(--primary)] transition-colors" style={{ color: "var(--foreground)" }}>
              المقالات
            </Link>
            <Link href="/categories" className="hover:text-[var(--primary)] transition-colors" style={{ color: "var(--foreground)" }}>
              التصنيفات
            </Link>
            <Link href="/about" className="hover:text-[var(--primary)] transition-colors" style={{ color: "var(--foreground)" }}>
              من نحن
            </Link>
          </div>

          {/* زر القائمة في الموبايل */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--foreground)" }}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* القائمة المنسدلة في الموبايل */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="flex flex-col gap-3">
              <Link href="/blog" className="py-2 hover:text-[var(--primary)]" style={{ color: "var(--foreground)" }}>
                المقالات
              </Link>
              <Link href="/categories" className="py-2 hover:text-[var(--primary)]" style={{ color: "var(--foreground)" }}>
                التصنيفات
              </Link>
              <Link href="/about" className="py-2 hover:text-[var(--primary)]" style={{ color: "var(--foreground)" }}>
                من نحن
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              breakpoints في Tailwind:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><code>sm:</code> 640px - هاتف كبير أو أجهزة صغيرة</li>
              <li><code>md:</code> 768px - جهاز لوحي أو شاشة صغيرة</li>
              <li><code>lg:</code> 1024px - حاسوب محمول أو شاشة متوسطة</li>
              <li><code>xl:</code> 1280px - حاسوب مكتبي أو شاشة كبيرة</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: تحسين الصور مع next/image */}
        {/* ========================================== */}
        <LessonSection title="تحسين الصور مع next/image">
          <p>
            مكون <code>next/image</code> في Next.js يوفر تحسينات تلقائية للصور
            مثل التحويل إلى WebP، والتغيير الحجم التلقائي، والتحميل الكسول:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: components/OptimizedImage.js
// مكون صورة محسّن

import Image from "next/image";

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}) {
  return (
    <div className={\`relative overflow-hidden \${className}\`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={!width && !height}
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsM DQ4SEA0OEQ4LCxAWEBETFBUVFQ4PFx8WFBgSFBUU/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQU FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBL/wAARCAAyACgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUGBAf/xAAoEAABAwMDBAICAwAAAAAAAAABAgMEAAURBhIhMUFRYROhFCIycYH/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/EABsRAQEAAgMBAAAAAAAAAAAAAAEAAhEDITES/9oADAMBAAIRAxEAPwD0yCw4/mO1t1xxS1qCEJCQSpRAAAA6kms9cNS2nT8ZuRdJiIrLrqWUKUMkqJAAwP0BSUpSUkk+1FKlJKVAAJO+O45Gc4xUbp7p7Y9HvyJFohKjvyUhC1lwrO0HIGT4yTUqtS1q2t1BkqWlJ6SlR6J5HNSrvo+x6kt7cK6W5qXFbdDyG3RkBYGAf0T4qSdO2hVyNzNuiGcRhUotJ3kYxjdjPHFACrUZtj20OJfZS42oocQoZSpJ6II8UyAAABgAcCq9p/p/Y9IvyJFohKjvyUhC1lwrO0HIGT4yTUK76dter7WYF0jB+MVpWlOcFJBBBH6IFAH/9k="
      />
    </div>
  );
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// استخدام الصورة في صفحة المقال
export default async function BlogPost({ params }) {
  const { slug } = await params;
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {/* الصورة الرئيسية - محمّلة بشكل أولوي */}
      {post.image && (
        <OptimizedImage
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-xl mb-8"
          priority={true}
        />
      )}

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>

      {/* معلومات الكاتب */}
      <div className="flex items-center gap-4 mb-8 pb-8 border-b" style={{ borderColor: "var(--border)" }}>
        <img
          src={post.author?.avatar_url}
          alt={post.author?.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-bold">{post.author?.name}</p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            {new Date(post.created_at).toLocaleDateString("ar-SA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* محتوى المقال */}
      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>
    </article>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: مصفوفة المقالات المتجاوبة */}
        {/* ========================================== */}
        <LessonSection title="مصفوفة المقالات المتجاوبة">
          <p>
            نحتاج تصميم مصفوفة المقالات لتتغير تلقائياً حسب حجم الشاشة:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: components/BlogGrid.js
// مصفوفة مقالات متجاوبة

import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

// breakpoints المستخدمة:
// الشاشات الصغيرة (الموبايل): عمود واحد
// الشاشات المتوسطة (الجوال): عمودان
// الشاشات الكبيرة (الحاسوب): ثلاثة أعمدة`}
          />

          <CodeBlock
            language="jsx"
            code={`// ملف: app/blog/page.js
// صفحة المقالات الرئيسية المتجاوبة

import { createClient } from "@supabase/supabase-js";
import BlogGrid from "@/components/BlogGrid";
import Pagination from "@/components/Pagination";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const query = params.q || "";
  const currentPage = parseInt(params.page || "1");
  const limit = 9;

  const { data: posts, count } = await supabase
    .from("posts")
    .select("*, author:users(name, avatar_url), category:categories(name, slug)")
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .range((currentPage - 1) * limit, currentPage * limit - 1);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">المقالات</h1>
        <p className="text-lg" style={{ color: "var(--muted)" }}>
          {count} مقال متاح للقراءة
        </p>
      </div>

      {/* المصفوفة المتجاوبة */}
      <BlogGrid posts={posts || []} />

      {/* الترقيم */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil((count || 0) / limit)}
      />
    </main>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: تحسينات إضافية للSEO */}
        {/* ========================================== */}
        <LessonSection title="تحسينات إضافية للSEO">
          <p>
            هناكSeveral تحسينات إضافية يمكننا القيام بها لتحسين SEO المدونة:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: app/sitemap.js
// إنشاء sitemap ديناميكي

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // جلب جميع المقالات المنشورة
  const { data: posts } = await supabase
    .from("posts")
    .select("slug, updated_at")
    .eq("status", "published");

  // جلب جميع التصنيفات
  const { data: categories } = await supabase
    .from("categories")
    .select("slug, updated_at");

  const postUrls = (posts || []).map((post) => ({
    url: \`\${baseUrl}/blog/\${post.slug}\`,
    lastModified: post.updated_at,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categoryUrls = (categories || []).map((category) => ({
    url: \`\${baseUrl}/categories/\${category.slug}\`,
    lastModified: category.updated_at,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: \`\${baseUrl}/blog\`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...postUrls,
    ...categoryUrls,
  ];
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// ملف: app/robots.js
// إنشاء ملف robots.txt

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/admin", "/api"],
      },
    ],
    sitemap: \`\${baseUrl}/sitemap.xml\`,
  };
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// ملف: app/layout.js
// إضافة structured data (JSON-LD) للموقع

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "مدونتي",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    description: "مدونة تعليمية تقدم شروحات مبسطة للبرمجة والتطوير",
    publisher: {
      "@type": "Organization",
      name: "مدونتي",
      logo: {
        "@type": "ImageObject",
        url: \`\${process.env.NEXT_PUBLIC_SITE_URL}/logo.png\`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: \`\${process.env.NEXT_PUBLIC_SITE_URL}/blog?q={search_term_string}\`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هو الهدف الرئيسي من استخدام Metadata API في Next.js؟"
          options={[
            "تحسين أداء التطبيق",
            "إدارة وسوم HTML المتعلقة بـ SEO مثل العنوان والوصف و Open Graph",
            "تخزين البيانات مؤقتاً",
            "إدارة حالة التطبيق",
          ]}
          correctAnswer={1}
          explanation="Metadata API يُمكّن من تعريف وسوم HTML المهمة لـ SEO مثل title و description و keywords و Open Graph. هذه الوسوم تُساعد محركات البحث على فهم محتوى الصفحة."
        />

        <Quiz
          question="لماذا نستخدم next/image بدلاً من وسم img العادي؟"
          options={[
            "لأنه يُنشئ صور أكبر حجماً",
            "لأنه يوفر تحسينات تلقائية مثل WebP وتغيير الحجم والتحميل الكسول",
            "لأنه يدعم الصور فقط في المتصفحات الحديثة",
            "لأنه مطلوب من TypeScript",
          ]}
          correctAnswer={1}
          explanation="next/image يوفر تحسينات تلقائية مهمة: التحويل إلى صيغ WebP الأصغر، تغيير الحجم التلقائي، التحميل الكسول (lazy loading)، وتحميل الصور المهمة أولاً (priority)."
        />

        <Quiz
          question="ما هو breakpoints في Tailwind لتصميم الموبايل أولاً؟"
          options={[
            "lg: (1024px)",
            "md: (768px)",
            "sm: (640px)",
            "بدون breakpoints - التصميم افتراضياً للموبايل",
          ]}
          correctAnswer={3}
          explanation="Tailwind يتبع منهجية Mobile First - التصميم الافتراضي يعمل على الموبايل، ثم نضيف breakpoints لتحسين العرض على الشاشات الأكبر."
        />

        <Quiz
          question="ما هو ملف sitemap.xml؟"
          options={[
            "ملف لتخزين البيانات",
            "ملف يسرد جميع صفحات الموقع لمساعد محركات البحث في الفهرسة",
            "ملف لإدارة المستخدمين",
            "ملف للإعدادات العامة",
          ]}
          correctAnswer={1}
          explanation="sitemap.xml يسرد جميع الروابط في الموقع مع معلومات مثل تاريخ آخر تحديث وأهمية الصفحة. يُساعد محركات البحث على اكتشاف جميع صفحات الموقع."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: إضافة صفحة تصنيف مع SEO"
        >
          <p>
            أنشئ صفحة تصنيف تعرض جميع المقالات في تصنيف محدد مع metadata
            ديناميكية وتصميم متجاوب:
          </p>
          <CodeBlock
            language="jsx"
            code={`// الحل: صفحة التصنيف

// ملف: app/categories/[slug]/page.js
import { createClient } from "@supabase/supabase-js";
import BlogGrid from "@/components/BlogGrid";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: category } = await supabase
    .from("categories")
    .select("name, description")
    .eq("slug", slug)
    .single();

  return {
    title: category?.name || "تصنيف",
    description: category?.description || "مقالات هذا التصنيف",
    openGraph: {
      title: \`\${category?.name} | مدونتي\`,
      description: category?.description,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const { data: category } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  const { data: posts } = await supabase
    .from("posts")
    .select("*, author:users(name, avatar_url)")
    .eq("category_id", category?.id)
    .eq("status", "published")
    .order("created_at", { ascending: false });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category?.name,
    description: category?.description,
    url: \`\${process.env.NEXT_PUBLIC_SITE_URL}/categories/\${slug}\`,
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{category?.name}</h1>
        {category?.description && (
          <p className="text-lg" style={{ color: "var(--muted)" }}>
            {category.description}
          </p>
        )}
      </div>

      <BlogGrid posts={posts || []} />
    </main>
  );
}`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* ورقة الغش */}
        {/* ========================================== */}
        <CheatSheet title="ورقة غش: SEO والتصميم المتجاوب">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                Metadata الثابتة:
              </p>
              <CodeBlock
                language="jsx"
                code={`export const metadata = {
  title: "العنوان",
  description: "الوصف",
  openGraph: {
    title: "لل تواصل الاجتماعي",
    images: ["/og-image.jpg"],
  },
};`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                Metadata الديناميكية:
              </p>
              <CodeBlock
                language="jsx"
                code={`export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                sitemap و robots:
              </p>
              <CodeBlock
                language="jsx"
                code={`// app/sitemap.js
export default async function sitemap() {
  return [
    { url: "https://site.com", priority: 1 },
    { url: "https://site.com/blog", priority: 0.9 },
  ];
}

// app/robots.js
export default function robots() {
  return {
    rules: [{ allow: "/" }],
    sitemap: "https://site.com/sitemap.xml",
  };
}`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                التصميم المتجاوب:
              </p>
              <CodeBlock
                language="jsx"
                code={`// Mobile First
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => (
    <div key={item.id}>{item.name}</div>
  ))}
</div>

// إخفاء/إظهار
<p className="hidden sm:block">يظهر فقط في الكبيرة</p>
<nav className="md:flex hidden">قائمة سطح المكتب</nav>
<nav className="md:hidden">قائمة الموبايل</nav>`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                next/image:
              </p>
              <CodeBlock
                language="jsx"
                code={`import Image from "next/image";

<Image
  src="/photo.jpg"
  alt="وصف"
  width={800}
  height={400}
  priority={true}
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur"
  blurDataURL="data:..."
/>`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                JSON-LD:
              </p>
              <CodeBlock
                language="jsx"
                code={`const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "عنوان المقال",
  author: { "@type": "Person", name: "الكاتب" },
};

<script type="application/ld+json"
  dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
/>`}
              />
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* ملخص الدرس */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li>
                <strong style={{ color: "var(--primary)" }}>Metadata API</strong> تُدير وسوم SEO مثل title و description و Open Graph
              </li>
              <li>
                <code style={{ color: "var(--primary)" }}>generateMetadata</code> تُنشئ metadata ديناميكية لكل مقال
              </li>
              <li>
                صور <strong style={{ color: "var(--secondary)" }}>Open Graph</strong> تُحسّن المظهر عند المشاركة على وسائل التواصل
              </li>
              <li>
                التصميم المتجاوب يعتمد على <code style={{ color: "var(--primary)" }}>breakpoints</code> في Tailwind مع منهجية Mobile First
              </li>
              <li>
                <code style={{ color: "var(--primary)" }}>next/image</code> يُحسّن الصور تلقائياً بالحجم والصيغ والتحميل
              </li>
              <li>
                ملفات <code style={{ color: "var(--primary)" }}>sitemap.xml</code> و{" "}
                <code style={{ color: "var(--primary)" }}>robots.txt</code> تُساعد محركات البحث على فهرسة الموقع
              </li>
            </ul>
          </div>
        </LessonSection>
      </div>

      <LessonNavigation
        prevLesson={lesson.prevLesson}
        prevStage={lesson.prevLessonStage}
        nextLesson={lesson.nextLesson}
        nextStage={lesson.nextLessonStage}
      />
    </div>
  );
}
