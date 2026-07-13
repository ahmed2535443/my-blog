// =====================================================
// ملف: page.js (الدرس السابع: البحث والترقيم)
// المكان: app/learn/final-project/07-search-and-pagination/page.js
// الوظيفة: تعليم كيفية إضافة البحث والترقيم في المدونة
// URL: /learn/final-project/07-search-and-pagination
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function SearchAndPagination() {
  const lesson = getLessonBySlug("final-project", "07-search-and-pagination");

  return (
    <div dir="rtl" className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <LessonHeader stage={lesson.stage} lesson={lesson} lessonIndex={lesson.lessonIndex} totalLessons={lesson.totalLessons} />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ========================================== */}
        {/* القسم الأول: مقدمة عن البحث والترقيم */}
        {/* ========================================== */}
        <LessonSection title="مقدمة عن البحث والترقيم">
          <p>
            في أي مدونة احترافية، يحتاج المستخدم إلى <strong>البحث</strong> عن مقالات
            محددة و<strong>تصفح</strong> المقالات بشكل منظم. في هذا الدرس سنتعلم كيفية
            إضافة وظيفة البحث والترقيم (Pagination) إلى مدونتنا باستخدام Supabase و Next.js.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              ماذا سنتعلم؟
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>البحث في قاعدة البيانات باستخدام Supabase</li>
              <li>استخدام URL parameters في Next.js</li>
              <li>تطبيق الترقيم (Pagination) للمقالات</li>
              <li>إنشاء حقل بحث مع Debounce</li>
              <li>تحسين تجربة البحث باقتراحات البحث</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: البحث في Supabase */}
        {/* ========================================== */}
        <LessonSection title="البحث في Supabase">
          <p>
            Supabase يوفر عدة طرق للبحث في البيانات. الأكثر شيوعاً هي استخدام
            دالة <code>ilike</code> للبحث النصي غير الحساس لحالة الأحرف، أو
            دالة <code>textSearch</code> للبحث المتقدم باستخدام Full-Text Search.
          </p>

          <CodeBlock
            language="jsx"
            code={`// إنشاء API route للبحث عن المقالات
// app/api/search/route.js

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "6");
  const offset = (page - 1) * limit;

  // البحث في العنوان والمحتوى والوصف
  const { data: posts, error, count } = await supabase
    .from("posts")
    .select("*", { count: "exact" })
    .or(\`title.ilike.%\${query}%,content.ilike.%\${query}%,description.ilike.%\${query}%\`)
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    posts,
    pagination: {
      total: count,
      page,
      limit,
      totalPages: Math.ceil(count / limit),
    },
  });
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              شرح الكود:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><code>ilike</code> - بحث غير حساس لحالة الأحرف مع نمط Wildcard (%)</li>
              <li><code>or()</code> - البحث في عدة أعمدة في نفس الوقت</li>
              <li><code>count: "exact"</code> - الحصول على العدد الإجمالي للنتائج</li>
              <li><code>range()</code> - تحديد النطاق للترقيم (offset إلى limit - 1)</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: Full-Text Search المتقدم */}
        {/* ========================================== */}
        <LessonSection title="Full-Text Search المتقدم">
          <p>
            للبحث المتقدم والكلمات المركبة، يمكنك استخدام Full-Text Search في PostgreSQL
            الذي يوفره Supabase. هذه الطريقة أسرع وأدق من البحث العادي:
          </p>

          <CodeBlock
            language="sql"
            code={`-- إنشاء عمود tsvector في جدول المقالات
ALTER TABLE posts
ADD COLUMN search_vector tsvector;

-- ملء العمود بالبيانات
UPDATE posts SET search_vector =
  setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
  setweight(to_tsvector('english', coalesce(description, '')), 'B') ||
  setweight(to_tsvector('english', coalesce(content, '')), 'C');

-- إنشاء فهرس للبحث السريع
CREATE INDEX posts_search_idx ON posts USING GIN(search_vector);

-- دالة البحث
CREATE OR REPLACE FUNCTION search_posts(search_query TEXT)
RETURNS TABLE (
  id UUID,
  title TEXT,
  description TEXT,
  slug TEXT,
  created_at TIMESTAMPTZ,
  rank REAL
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    p.id,
    p.title,
    p.description,
    p.slug,
    p.created_at,
    ts_rank_cd(p.search_vector, plainto_tsquery('english', search_query)) AS rank
  FROM posts p
  WHERE p.search_vector @@ plainto_tsquery('english', search_query)
    AND p.status = 'published'
  ORDER BY rank DESC;
END;
$$ LANGUAGE plpgsql;`}
          />

          <CodeBlock
            language="jsx"
            code={`// استخدام الدالة في API route
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "6");

  // استخدام Full-Text Search
  const { data: posts, error } = await supabase
    .rpc("search_posts", { search_query: query })
    .range((page - 1) * limit, page * limit - 1);

  if (error) {
    // fallback إلى البحث العادي إذا فشل Full-Text
    const { data, error: fallbackError } = await supabase
      .from("posts")
      .select("*", { count: "exact" })
      .ilike("title", \`%\${query}%\`)
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .range((page - 1) * limit, page * limit - 1);

    return NextResponse.json({ posts: data });
  }

  return NextResponse.json({ posts });
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: URL-based Search Params */}
        {/* ========================================== */}
        <LessonSection title="استخدام معلمات البحث في URL">
          <p>
            في Next.js، يمكنك استخدام <code>searchParams</code> لقراءة معلمات
            البحث من URL مباشرة. هذا يُمكّن المستخدم من مشاركة روابط البحث
            والعودة لنتائج البحث لاحقاً:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: app/blog/page.js
// الصفحة الرئيسية للمدونة مع البحث والترقيم

import { Suspense } from "react";
import BlogList from "@/components/BlogList";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";

export default async function BlogPage({ searchParams }) {
  // قراءة معلمات البحث من URL
  const params = await searchParams;
  const query = params.q || "";
  const currentPage = parseInt(params.page || "1");
  const limit = 6;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">المقالات</h1>

      {/* حقل البحث */}
      <SearchBar initialQuery={query} />

      {/* قائمة المقالات مع Suspense */}
      <Suspense fallback={<BlogSkeleton />}>
        <BlogList query={query} page={currentPage} limit={limit} />
      </Suspense>

      {/* الترقيم */}
      <Pagination currentPage={currentPage} query={query} />
    </div>
  );
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// ملف: components/SearchBar.js
// حقل البحث مع تحديث URL مباشرة

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export default function SearchBar({ initialQuery }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState(initialQuery);

  function handleSearch(term) {
    setInputValue(term);

    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("q", term);
      params.set("page", "1"); // إعادة تعيين للصفحة الأولى عند البحث
    } else {
      params.delete("q");
      params.delete("page");
    }

    // استخدام startTransition لتحديث URL بدون إعادة تحميل الصفحة
    startTransition(() => {
      router.push(\`/blog?\${params.toString()}\`);
    });
  }

  return (
    <div className="relative mb-8">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="ابحث عن مقال..."
          className="w-full px-4 py-3 pr-12 rounded-xl border text-lg"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
        />
        {/* أيقونة البحث */}
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
          🔍
        </span>

        {/* مؤشر التحميل */}
        {isPending && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            ⏳
          </span>
        )}
      </div>
    </div>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              لماذا نستخدم URL parameters؟
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>يمكن للمستخدم مشاركة رابط البحث مع الآخرين</li>
              <li>زر "رجوع" في المتصفح يعمل بشكل صحيح</li>
              <li>تحسين SEO - محركات البحث يمكنها فهرسة صفحات البحث</li>
              <li>حفظ الحالة تلقائياً عند تحديث الصفحة</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: مكون BlogList */}
        {/* ========================================== */}
        <LessonSection title="مكون قائمة المقالات">
          <p>
            الآن نحتاج إنشاء مكون يجلب ويعرض المقالات بناءً على كلمات البحث
            ورقم الصفحة:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: components/BlogList.js
// مكون لجلب وعرض المقالات

import { createClient } from "@supabase/supabase-js";
import BlogCard from "./BlogCard";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function BlogList({ query, page, limit }) {
  const offset = (page - 1) * limit;

  let supabaseQuery = supabase
    .from("posts")
    .select("*, author:users(name, avatar_url)", { count: "exact" })
    .eq("status", "published")
    .order("created_at", { ascending: false });

  // إضافة شرط البحث إذا وُجدت كلمة بحث
  if (query) {
    supabaseQuery = supabaseQuery.or(
      \`title.ilike.%\${query}%,description.ilike.%\${query}%\`
    );
  }

  // تحديد النطاق للترقيم
  const { data: posts, count, error } = await supabaseQuery.range(
    offset,
    offset + limit - 1
  );

  if (error) {
    throw new Error("فشل في جلب المقالات");
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <span className="text-6xl mb-4 block">📭</span>
        <p className="text-xl" style={{ color: "var(--muted)" }}>
          {query
            ? \`لا توجد نتائج لـ "\${query}"\`
            : "لا توجد مقالات بعد"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: مكون الترقيم */}
        {/* ========================================== */}
        <LessonSection title="مكون الترقيم (Pagination)">
          <p>
            الترقيم يُقسّم المقالات إلى صفحات متعددة. نحتاج إنشاء مكون يعرض
            أرقام الصفحات ويُمكن المستخدم من التنقل بينها:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: components/Pagination.js

import Link from "next/link";

export default async function Pagination({ currentPage, query }) {
  // جلب عدد المقالات الإجمالي
  const { count: totalPosts } = await supabase
    .from("posts")
    .select("*", { count: "exact", head: true })
    .eq("status", "published");

  const totalPages = Math.ceil(totalPosts / 6);

  if (totalPages <= 1) return null;

  // إنشاء مصفوفة أرقام الصفحات
  function getPageNumbers() {
    const pages = [];
    const maxVisible = 5; // الحد الأقصى لعدد الصفحات المعروضة

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  }

  function buildPageUrl(page) {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (page > 1) params.set("page", page.toString());
    return \`/blog?\${params.toString()}\`;
  }

  return (
    <nav className="flex justify-center items-center gap-2 mt-12">
      {/* زر السابق */}
      {currentPage > 1 && (
        <Link
          href={buildPageUrl(currentPage - 1)}
          className="px-4 py-2 rounded-lg border transition-colors hover:border-[var(--primary)]"
          style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
        >
          ← السابق
        </Link>
      )}

      {/* أرقام الصفحات */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={\`dots-\${index}\`} className="px-3 py-2" style={{ color: "var(--muted)" }}>
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={buildPageUrl(page)}
            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all"
            style={{
              background: page === currentPage ? "var(--primary)" : "var(--surface)",
              color: page === currentPage ? "var(--background)" : "var(--foreground)",
              borderColor: page === currentPage ? "var(--primary)" : "var(--border)",
              borderWidth: "1px",
            }}
          >
            {page}
          </Link>
        )
      )}

      {/* زر التالي */}
      {currentPage < totalPages && (
        <Link
          href={buildPageUrl(currentPage + 1)}
          className="px-4 py-2 rounded-lg border transition-colors hover:border-[var(--primary)]"
          style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
        >
          التالي →
        </Link>
      )}
    </nav>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: Debounced Search Input */}
        {/* ========================================== */}
        <LessonSection title="حقل بحث مع Debounce">
          <p>
            الـ <strong>Debounce</strong> تقنية تُؤخّر تنفيذ البحث حتى يتوقف
            المستخدم عن الكتابة لفترة قصيرة. هذا يمنع إجراء طلب بحث في كل
            ضغطة زر ويُحسّن الأداء بشكل كبير:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: hooks/useDebounce.js
// Custom Hook للـ Debounce

import { useState, useEffect } from "react";

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// ملف: components/SearchBarWithDebounce.js
// حقل بحث مع Debounce واقتراحات البحث

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useTransition } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchBarWithDebounce() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [inputValue, setInputValue] = useState(searchParams.get("q") || "");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // تأخير البحث 300 مللي ثانية بعد توقف المستخدم عن الكتابة
  const debouncedQuery = useDebounce(inputValue, 300);

  // تحديث URL عندما يتغير البحث المُؤخّر
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedQuery) {
      params.set("q", debouncedQuery);
      params.set("page", "1");
    } else {
      params.delete("q");
      params.delete("page");
    }

    startTransition(() => {
      router.push(\`/blog?\${params.toString()}\`);
    });
  }, [debouncedQuery]);

  // جلب اقتراحات البحث أثناء الكتابة
  useEffect(() => {
    if (inputValue.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      const res = await fetch(\`/api/suggestions?q=\${inputValue}\`);
      const data = await res.json();
      setSuggestions(data.suggestions || []);
    };

    fetchSuggestions();
  }, [inputValue]);

  return (
    <div className="relative mb-8">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="ابحث عن مقال..."
          className="w-full px-4 py-3 pr-12 rounded-xl border text-lg"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
          🔍
        </span>
        {isPending && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 animate-spin">
            ⏳
          </span>
        )}
      </div>

      {/* اقتراحات البحث */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          className="absolute top-full left-0 right-0 mt-2 rounded-xl border shadow-lg z-50"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                setInputValue(suggestion.title);
                setShowSuggestions(false);
              }}
              className="w-full text-right px-4 py-3 hover:bg-[var(--border)] transition-colors"
              style={{ color: "var(--foreground)" }}
            >
              <span className="mr-2">📄</span>
              {suggestion.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              كيف يعمل الـ Debounce؟
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>المستخدم يكتب حرف "م" → لا شيء يحدث بعد</li>
              <li>بعد 100 مللي ثانية يكتب "مـ" → لا شيء يحدث</li>
              <li>بعد 300 مللي ثانية من آخر ضغطة → يتم تنفيذ البحث</li>
              <li>نتيجة: طلب واحد بدل 5 طلبات للكلمات "م", "مـ", "مقال", "مقالات", "مقال تعليمي"</li>
            </ol>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: تحسين البحث مع اقتراحات */}
        {/* ========================================== */}
        <LessonSection title="تحسين: اقتراحات البحث التلقائية">
          <p>
            يمكننا تحسين تجربة البحث بإضافة اقتراحات تلقائية أثناء الكتابة.
            هذه الميزة تُظهر للمستخدم نتائج سريعة قبل إكمال كتابة كلمات البحث:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: components/SearchWithAutocomplete.js
// حقل بحث مع اقتراحات تلقائية وتصنيفات

"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchWithAutocomplete() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState({ posts: [], tags: [] });
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const debouncedValue = useDebounce(inputValue, 200);

  // جلب الاقتراحات
  useEffect(() => {
    if (debouncedValue.length < 2) {
      setSuggestions({ posts: [], tags: [] });
      return;
    }

    const controller = new AbortController();

    fetch(\`/api/suggestions?q=\${debouncedValue}\`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch(() => {});

    return () => controller.abort();
  }, [debouncedValue]);

  // التنقل بلوحة المفاتيح
  function handleKeyDown(e) {
    const totalItems = suggestions.posts.length + suggestions.tags.length;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % totalItems);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + totalItems) % totalItems);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0) {
        if (selectedIndex < suggestions.posts.length) {
          const post = suggestions.posts[selectedIndex];
          router.push(\`/blog/\${post.slug}\`);
        } else {
          const tag = suggestions.tags[selectedIndex - suggestions.posts.length];
          router.push(\`/blog?tag=\${tag.name}\`);
        }
      } else {
        handleSubmit();
      }
      setIsOpen(false);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  function handleSubmit() {
    if (!inputValue.trim()) return;
    router.push(\`/blog?q=\${inputValue}\`);
    setIsOpen(false);
  }

  function handleSuggestionClick(type, item) {
    if (type === "post") {
      router.push(\`/blog/\${item.slug}\`);
    } else {
      router.push(\`/blog?tag=\${item.name}\`);
    }
    setIsOpen(false);
  }

  return (
    <div ref={containerRef} className="relative mb-8">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsOpen(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="ابحث عن مقال، تصنيف، أو كلمة مفتاحية..."
          className="w-full px-4 py-3 pr-12 pl-12 rounded-xl border text-lg"
          style={{
            background: "var(--surface)",
            borderColor: isOpen ? "var(--primary)" : "var(--border)",
            color: "var(--foreground)",
          }}
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
          🔍
        </span>
        {inputValue && (
          <button
            onClick={() => {
              setInputValue("");
              inputRef.current?.focus();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-xl hover:opacity-70"
          >
            ✕
          </button>
        )}
      </div>

      {/* قائمة الاقتراحات */}
      {isOpen && (suggestions.posts.length > 0 || suggestions.tags.length > 0) && (
        <div
          className="absolute top-full left-0 right-0 mt-2 rounded-xl border shadow-lg overflow-hidden z-50"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          {/* التصنيفات */}
          {suggestions.tags.length > 0 && (
            <div>
              <p className="px-4 py-2 text-sm font-bold" style={{ color: "var(--muted)" }}>
                التصنيفات
              </p>
              {suggestions.tags.map((tag, index) => (
                <button
                  key={tag.id}
                  onClick={() => handleSuggestionClick("tag", tag)}
                  className="w-full text-right px-4 py-2 flex items-center gap-2 transition-colors"
                  style={{
                    background: index === selectedIndex ? "var(--border)" : "transparent",
                    color: "var(--foreground)",
                  }}
                >
                  <span>🏷️</span>
                  <span>{tag.name}</span>
                  <span className="mr-auto text-sm" style={{ color: "var(--muted)" }}>
                    {tag.post_count} مقال
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* المقالات */}
          {suggestions.posts.length > 0 && (
            <div>
              <p className="px-4 py-2 text-sm font-bold" style={{ color: "var(--muted)" }}>
                المقالات
              </p>
              {suggestions.posts.map((post, index) => (
                <button
                  key={post.id}
                  onClick={() => handleSuggestionClick("post", post)}
                  className="w-full text-right px-4 py-3 flex items-center gap-3 transition-colors"
                  style={{
                    background: index + suggestions.tags.length === selectedIndex
                      ? "var(--border)" : "transparent",
                    color: "var(--foreground)",
                  }}
                >
                  <span>📄</span>
                  <div className="text-right">
                    <p className="font-medium">{post.title}</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      {post.description?.substring(0, 60)}...
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* زر البحث الكامل */}
          <div className="border-t" style={{ borderColor: "var(--border)" }}>
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-3 text-center font-bold transition-colors hover:bg-[var(--border)]"
              style={{ color: "var(--primary)" }}
            >
              عرض جميع النتائج لـ &quot;{inputValue}&quot;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: تحسين الأداء مع ISR */}
        {/* ========================================== */}
        <LessonSection title="تحسين الأداء مع ISR">
          <p>
            لتحسين أداء صفحات البحث، يمكننا استخدام <strong>Incremental Static Regeneration</strong>
            لتخزين نتائج البحث مؤقتاً:
          </p>

          <CodeBlock
            language="jsx"
            code={`// تحسين أداء البحث مع ISR
// الصفحات الثابتة تُحدّث كل 60 ثانية

async function getPosts(query, page) {
  const limit = 6;
  const offset = (page - 1) * limit;

  const res = await fetch(
    \`\${process.env.NEXT_PUBLIC_SITE_URL}/api/search?q=\${query}&page=\${page}&limit=\${limit}\`,
    {
      next: { revalidate: 60 }, // تحديث كل دقيقة
    }
  );

  if (!res.ok) throw new Error("فشل جلب البيانات");
  return res.json();
}

// صفحة البحث الرئيسية
export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params.q || "";
  const page = parseInt(params.page || "1");

  if (!query) {
    return (
      <div className="text-center py-16">
        <span className="text-6xl mb-4 block">🔍</span>
        <p className="text-xl" style={{ color: "var(--muted)" }}>
          اكتب كلمة بحث للبدء
        </p>
      </div>
    );
  }

  const { posts, pagination } = await getPosts(query, page);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">
        نتائج البحث لـ &quot;{query}&quot;
      </h1>
      <p className="mb-6" style={{ color: "var(--muted)" }}>
        {pagination.total} نتيجة
      </p>
      {/* عرض النتائج والترقيم */}
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هو الهدف الرئيسي من استخدام Debounce في حقل البحث؟"
          options={[
            "جعل البحث أجمل بصرياً",
            "تأخير طلب البحث حتى يتوقف المستخدم عن الكتابة لتقليل الطلبات",
            "حفظ نتائج البحث في التخزين المؤقت",
            "تشفير بيانات البحث",
          ]}
          correctAnswer={1}
          explanation="الـ Debounce يُؤخّر تنفيذ الدالة حتى يتوقف المستخدم عن الكتابة لفترة محددة (مثلاً 300 مللي ثانية). هذا يمنع إرسال طلب في كل ضغطة زر ويُحسّن الأداء."
        />

        <Quiz
          question="لماذا نستخدم URL parameters للبحث بدلاً من useState فقط؟"
          options={[
            "لأنه أسهل في التنفيذ",
            "لأنه يُحسّن أداء المتصفح فقط",
            "لأنه يُمكّن مشاركة الروابط ويعمل زر الرجوع ويُحسّن SEO",
            "لأنه مطلوب من Next.js",
          ]}
          correctAnswer={2}
          explanation="استخدام URL parameters يجعل روابط البحث قابلة للمشاركة، ويعمل زر الرجوع في المتصفح بشكل صحيح، ويُحسّن SEO لأن محركات البحث يمكنها فهرسة صفحات البحث المختلفة."
        />

        <Quiz
          question="أي دالة Supabase تُستخدم للبحث النصي غير الحساس لحالة الأحرف؟"
          options={[
            "eq()",
            "like()",
            "ilike()",
            "textSearch()",
          ]}
          correctAnswer={2}
          explanation="دالة ilike تُستخدم للبحث باستخدام نمط Wildcard (%) وهي غير حساسة لحالة الأحرف (الكبيرة والصغيرة)."
        />

        <Quiz
          question="في الترقيم، ماذا يفعل range(offset, limit - 1) في Supabase؟"
          options={[
            "يحذف المقالات من قاعدة البيانات",
            "يُحدد نطاق النتائج المعروضة من 시작到最后",
            "يُغيّر ترتيب المقالات",
            "يُنشئ صفحات جديدة",
          ]}
          correctAnswer={1}
          explanation="دالة range تُحدد نطاق النتائج المعروضة. offset هو بداية النطاق و limit - 1 هو نهايته. مثلاً range(0, 5) يُظهر النتائج من 1 إلى 6."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: إضافة فلترة حسب التصنيف"
        >
          <p>
            أضف إمكانية فلترة المقالات حسب التصنيف في صفحة البحث. يجب أن يعمل الفلتر
            مع البحث النصي في نفس الوقت:
          </p>
          <CodeBlock
            language="jsx"
            code={`// الحل: إضافة فلتر التصنيف

// في ملف app/blog/page.js
export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const query = params.q || "";
  const category = params.category || "";
  const currentPage = parseInt(params.page || "1");

  return (
    <div>
      <SearchBar initialQuery={query} />
      <CategoryFilter selectedCategory={category} query={query} />
      <Suspense fallback={<BlogSkeleton />}>
        <BlogList query={query} category={category} page={currentPage} limit={6} />
      </Suspense>
      <Pagination currentPage={currentPage} query={query} category={category} />
    </div>
  );
}

// مكون فلتر التصنيفات
async function CategoryFilter({ selectedCategory, query }) {
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Link
        href={query ? \`/blog?q=\${query}\` : "/blog"}
        className="px-4 py-2 rounded-full text-sm font-medium transition-all"
        style={{
          background: !selectedCategory ? "var(--primary)" : "var(--surface)",
          color: !selectedCategory ? "var(--background)" : "var(--foreground)",
          border: "1px solid var(--border)",
        }}
      >
        الكل
      </Link>
      {categories?.map((cat) => (
        <Link
          key={cat.id}
          href={\`/blog?q=\${query}&category=\${cat.slug}\`}
          className="px-4 py-2 rounded-full text-sm font-medium transition-all"
          style={{
            background: selectedCategory === cat.slug ? "var(--primary)" : "var(--surface)",
            color: selectedCategory === cat.slug ? "var(--background)" : "var(--foreground)",
            border: "1px solid var(--border)",
          }}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* ورقة الغش */}
        {/* ========================================== */}
        <CheatSheet title="ورقة غش: البحث والترقيم">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                البحث في Supabase:
              </p>
              <CodeBlock
                language="jsx"
                code={`// بحث بسيط
const { data } = await supabase
  .from("posts")
  .select("*")
  .ilike("title", \`%\${query}%\`);

// بحث في عدة أعمدة
const { data } = await supabase
  .from("posts")
  .select("*")
  .or(\`title.ilike.%\${query}%,content.ilike.%\${query}%\`);

// Full-Text Search
const { data } = await supabase
  .rpc("search_posts", { search_query: query });`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                Debounce Hook:
              </p>
              <CodeBlock
                language="jsx"
                code={`function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(
      () => setDebounced(value), delay
    );
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                الترقيم:
              </p>
              <CodeBlock
                language="jsx"
                code={`// حساب offset
const offset = (page - 1) * limit;

// جلب صفحة محددة
const { data, count } = await supabase
  .from("posts")
  .select("*", { count: "exact" })
  .range(offset, offset + limit - 1);

// حساب إجمالي الصفحات
const totalPages = Math.ceil(count / limit);`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                URL Parameters:
              </p>
              <CodeBlock
                language="jsx"
                code={`// قراءة searchParams
export default async function Page({ searchParams }) {
  const params = await searchParams;
  const query = params.q || "";
  const page = params.page || 1;
}

// إنشاء رابط بحث
const params = new URLSearchParams();
params.set("q", "كلمة البحث");
params.set("page", "2");
router.push(\`/blog?\${params}\`);`}
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
                استخدم <code style={{ color: "var(--primary)" }}>ilike</code> للبحث البسيط و{" "}
                <code style={{ color: "var(--primary)" }}>Full-Text Search</code> للبحث المتقدم
              </li>
              <li>
                <strong style={{ color: "var(--secondary)" }}>URL Parameters</strong> تجعل روابط البحث قابلة للمشاركة وتعمل مع زر الرجوع
              </li>
              <li>
                الترقيم يتم بحساب <code style={{ color: "var(--primary)" }}>offset</code> و استخدام{" "}
                <code style={{ color: "var(--primary)" }}>range()</code> في Supabase
              </li>
              <li>
                <strong style={{ color: "var(--accent)" }}>Debounce</strong> يُحسّن الأداء بتأخير البحث حتى يتوقف المستخدم عن الكتابة
              </li>
              <li>
                اقتراحات البحث التلقائية تُحسّن تجربة المستخدم بشكل كبير
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
