import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function DashboardAndAdminLesson() {
  const lesson = getLessonBySlug("final-project", "06-dashboard-and-admin");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* مقدمة */}
        <LessonSection title="مقدمة في لوحة التحكم والإدارة">
          <p className="text-lg leading-relaxed mb-4">
            لوحة التحكم هي الواجهة الرئيسية لإدارة المحتوى في أي منصة تعليمية.
            في هذا الدرس سنتعلم كيفية بناء لوحة تحكم شاملة تشمل إدارة
            المقالات والتصنيفات ورفع الصور.
          </p>
          <p className="text-lg leading-relaxed">
            سنقوم أيضًا بتحسين لوحة التحكم بإضافة ترقيم الصفحات لتحسين أداء
            عرض البيانات الكبيرة.
          </p>
        </LessonSection>

        {/* تخطيط صفحة لوحة التحكم */}
        <LessonSection title="تخطيط صفحة لوحة التحكم">
          <p className="text-lg leading-relaxed mb-4">
            نبدأ بإنشاء الصفحة الرئيسية للوحة التحكم التي تعرض إحصائيات سريعة
            وأزرار للوصول السريع للإدارة:
          </p>

          <CodeBlock
            code={`// app/dashboard/page.js
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  // جلب الإحصائيات
  const [
    { count: postsCount },
    { count: categoriesCount },
    { count: usersCount },
  ] = await Promise.all([
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("categories").select("*", { count: "exact", head: true }),
    supabase.from("users").select("*", { count: "exact", head: true }),
  ]);

  // جلب آخر 5 مقالات
  const { data: recentPosts } = await supabase
    .from("posts")
    .select("id, title, created_at, status")
    .order("created_at", { ascending: false })
    .limit(5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">لوحة التحكم</h1>
        <p className="text-muted mt-2">مرحباً بك في لوحة إدارة المنصة</p>
      </div>

      {/* بطاقات الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-border rounded-xl p-6 bg-surface">
          <div className="text-3xl font-bold text-primary">{postsCount}</div>
          <div className="text-muted mt-1">إجمالي المقالات</div>
        </div>
        <div className="border border-border rounded-xl p-6 bg-surface">
          <div className="text-3xl font-bold text-secondary">{categoriesCount}</div>
          <div className="text-muted mt-1">التصنيفات</div>
        </div>
        <div className="border border-border rounded-xl p-6 bg-surface">
          <div className="text-3xl font-bold text-accent">{usersCount}</div>
          <div className="text-muted mt-1">المستخدمون</div>
        </div>
      </div>

      {/* أزرار الوصول السريع */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/dashboard/posts/new"
          className="border border-border rounded-xl p-6 bg-surface hover:border-primary transition-colors"
        >
          <div className="text-xl font-bold mb-2">📝 إنشاء مقال جديد</div>
          <p className="text-muted">أضف محتوى تعليمي جديد للمنصة</p>
        </Link>
        <Link
          href="/dashboard/categories"
          className="border border-border rounded-xl p-6 bg-surface hover:border-primary transition-colors"
        >
          <div className="text-xl font-bold mb-2">📁 إدارة التصنيفات</div>
          <p className="text-muted">أضف أو عدّل تصنيفات المقالات</p>
        </Link>
      </div>

      {/* آخر المقالات */}
      <div className="border border-border rounded-xl bg-surface">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold">آخر المقالات</h2>
        </div>
        <div className="divide-y divide-border">
          {recentPosts?.map((post) => (
            <div key={post.id} className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-muted">
                  {new Date(post.created_at).toLocaleDateString("ar-SA")}
                </p>
              </div>
              <span
                className={\`px-3 py-1 rounded-full text-sm \${
                  post.status === "published"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }\`}
              >
                {post.status === "published" ? "منشور" : "مسودة"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* إدارة المقالات */}
        <LessonSection title="قائمة المقالات مع أزرار التعديل والحذف">
          <p className="text-lg leading-relaxed mb-4">
            صفحة إدارة المقالات تعرض جميع المقالات مع أزرار للتعديل والحذف
            والنشر. نستخدم مكونات تفاعلية للأزرار لتحسين تجربة المستخدم:
          </p>

          <CodeBlock
            code={`// app/dashboard/posts/page.js
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import PostActions from "./PostActions";

export default async function PostsManagementPage() {
  const supabase = await createClient();

  const { data: posts, error } = await supabase
    .from("posts")
    .select(\`
      id,
      title,
      status,
      created_at,
      updated_at,
      categories (name)
    \`)
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="text-center py-12 text-danger">
       حدث خطأ في جلب البيانات
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">إدارة المقالات</h1>
          <p className="text-muted mt-1">إجمالي المقالات: {posts.length}</p>
        </div>
        <Link
          href="/dashboard/posts/new"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90"
        >
          + إضافة مقال جديد
        </Link>
      </div>

      {/* جدول المقالات */}
      <div className="border border-border rounded-xl overflow-hidden bg-surface">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-right p-4 font-medium">العنوان</th>
              <th className="text-right p-4 font-medium">التصنيف</th>
              <th className="text-right p-4 font-medium">الحالة</th>
              <th className="text-right p-4 font-medium">التاريخ</th>
              <th className="text-center p-4 font-medium">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-muted/10">
                <td className="p-4">
                  <Link
                    href={\`/dashboard/posts/\${post.id}/edit\`}
                    className="font-medium hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </td>
                <td className="p-4 text-muted">
                  {post.categories?.name || "بدون تصنيف"}
                </td>
                <td className="p-4">
                  <span
                    className={\`px-3 py-1 rounded-full text-sm \${
                      post.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }\`}
                  >
                    {post.status === "published" ? "منشور" : "مسودة"}
                  </span>
                </td>
                <td className="p-4 text-muted text-sm">
                  {new Date(post.created_at).toLocaleDateString("ar-SA")}
                </td>
                <td className="p-4">
                  <PostActions postId={post.id} status={post.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}`}
            language="jsx"
          />

          <CodeBlock
            code={`// app/dashboard/posts/PostActions.js
"use client";

import Link from "next/link";
import { useTransition } from "react";
import { deletePost, togglePublish } from "./actions";

export default function PostActions({ postId, status }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (!confirm("هل أنت متأكد من حذف هذا المقال؟")) return;
    startTransition(() => deletePost(postId));
  }

  function handleTogglePublish() {
    startTransition(() => togglePublish(postId, status));
  }

  return (
    <div className="flex gap-2 justify-center">
      <Link
        href={\`/dashboard/posts/\${postId}/edit\`}
        className="px-3 py-1 bg-secondary text-white rounded text-sm"
      >
        تعديل
      </Link>
      <button
        onClick={handleTogglePublish}
        disabled={isPending}
        className="px-3 py-1 bg-accent text-white rounded text-sm disabled:opacity-50"
      >
        {status === "published" ? "إخفاء" : "نشر"}
      </button>
      <button
        onClick={handleDelete}
        disabled={isPending}
        className="px-3 py-1 bg-danger text-white rounded text-sm disabled:opacity-50"
      >
        حذف
      </button>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* رفع الصور */}
        <LessonSection title="رفع الصور مع Supabase Storage">
          <p className="text-lg leading-relaxed mb-4">
            Supabase Storage يوفر تخزين الملفات في السحابة. سنقوم بإنشاء نظام
            لرفع صور المقالات مع التحقق من حجم ونوع الملف:
          </p>

          <CodeBlock
            code={`// lib/supabase/storage.js
import { createClient } from "./client";

const BUCKET_NAME = "post-images";

export async function uploadImage(file) {
  const supabase = createClient();

  // التحقق من نوع الملف
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    return { error: "نوع الملف غير مدعوم. يُسمح فقط بـ JPEG و PNG و WebP" };
  }

  // التحقق من حجم الملف (5 ميجابايت كحد أقصى)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    return { error: "حجم الملف يتجاوز 5 ميجابايت" };
  }

  // إنشاء اسم فريد للملف
  const fileExt = file.name.split(".").pop();
  const fileName = \`\${Date.now()}-\${Math.random().toString(36).slice(2)}.\${fileExt}\`;
  const filePath = \`images/\${fileName}\`;

  // رفع الملف
  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file);

  if (error) {
    return { error: error.message };
  }

  // الحصول على رابط الصورة العام
  const { data: urlData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);

  return { url: urlData.publicUrl };
}`}
            language="javascript"
          />

          <CodeBlock
            code={`// components/ImageUpload.js
"use client";

import { useState, useRef } from "react";

export default function ImageUpload({ onUpload, currentImage }) {
  const [preview, setPreview] = useState(currentImage || null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    // عرض معاينة فورية
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);

    // رفع الملف
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.error) {
        setError(result.error);
        setPreview(currentImage);
      } else {
        onUpload(result.url);
      }
    } catch (err) {
      setError("حدث خطأ أثناء رفع الصورة");
      setPreview(currentImage);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div
        className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary transition-colors"
        onClick={() => fileInputRef.current?.click()}
      >
        {preview ? (
          <img
            src={preview}
            alt="معاينة"
            className="max-h-48 mx-auto rounded-lg"
          />
        ) : (
          <div className="text-muted">
            <p className="text-lg">اضغط لاختيار صورة</p>
            <p className="text-sm mt-1">JPEG, PNG, WebP (حد أقصى 5 ميجابايت)</p>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileChange}
        className="hidden"
      />

      {uploading && (
        <p className="text-primary text-center">جاري رفع الصورة...</p>
      )}
      {error && <p className="text-danger text-center">{error}</p>}
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* إدارة التصنيفات */}
        <LessonSection title="إدارة التصنيفات">
          <p className="text-lg leading-relaxed mb-4">
            التصنيفات تساعد في تنظيم المقالات وجعل البحث أسهل. سنقوم بإنشاء
            نظام بسيط لإضافة وتعديل وحذف التصنيفات:
          </p>

          <CodeBlock
            code={`// app/dashboard/categories/page.js
import { createClient } from "@/lib/supabase/server";
import CategoryForm from "./CategoryForm";
import DeleteCategoryButton from "./DeleteCategoryButton";

export default async function CategoriesPage() {
  const supabase = await createClient();

  const { data: categories } = await supabase
    .from("categories")
    .select(\`
      *,
      posts (count)
    \`)
    .order("name");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">إدارة التصنيفات</h1>

      {/* نموذج إضافة تصنيف جديد */}
      <div className="border border-border rounded-xl p-6 bg-surface mb-8">
        <h2 className="text-xl font-bold mb-4">إضافة تصنيف جديد</h2>
        <CategoryForm />
      </div>

      {/* قائمة التصنيفات */}
      <div className="border border-border rounded-xl bg-surface">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold">التصنيفات ({categories?.length || 0})</h2>
        </div>
        <div className="divide-y divide-border">
          {categories?.map((category) => (
            <div key={category.id} className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-muted">
                  {category.posts?.[0]?.count || 0} مقال
                </p>
              </div>
              <div className="flex gap-2">
                <CategoryForm category={category} isEdit />
                <DeleteCategoryButton categoryId={category.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`}
            language="jsx"
          />

          <CodeBlock
            code={`// app/dashboard/categories/CategoryForm.js
"use client";

import { useTransition } from "react";
import { createCategory, updateCategory } from "./actions";

export default function CategoryForm({ category }) {
  const [isPending, startTransition] = useTransition();
  const isEdit = !!category;

  function handleSubmit(formData) {
    startTransition(async () => {
      if (isEdit) {
        await updateCategory(category.id, formData);
      } else {
        await createCategory(formData);
      }
    });
  }

  return (
    <form action={handleSubmit} className="flex gap-4 items-end">
      <div className="flex-1">
        <label className="block text-sm font-medium mb-2">
          اسم التصنيف
        </label>
        <input
          type="text"
          name="name"
          defaultValue={category?.name || ""}
          required
          className="w-full px-4 py-2 border border-border rounded-lg"
          placeholder="مثال: تطوير الويب"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium mb-2">
          الوصف
        </label>
        <input
          type="text"
          name="description"
          defaultValue={category?.description || ""}
          className="w-full px-4 py-2 border border-border rounded-lg"
          placeholder="وصف اختياري للتصنيف"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="px-6 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
      >
        {isPending ? "جاري الحفظ..." : isEdit ? "تحديث" : "إضافة"}
      </button>
    </form>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* تحسين الكود: الترقيم */}
        <LessonSection title="تحسين الكود: إضافة ترقيم الصفحات (Pagination)">
          <p className="text-lg leading-relaxed mb-4">
            عندما يصبح عدد المقالات كبيرًا، لا يجب تحميلها جميعًا دفعة واحدة.
            الترقيم (Pagination) يقسم البيانات إلى صفحات لتحسين الأداء:
          </p>

          <CodeBlock
            code={`// app/dashboard/posts/page.js (النسخة المحسّنة مع ترقيم)
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import PostActions from "./PostActions";
import Pagination from "@/components/Pagination";

const POSTS_PER_PAGE = 10;

export default async function PostsManagementPage({ searchParams }) {
  const supabase = await createClient();
  const params = await searchParams;
  const currentPage = parseInt(params.page) || 1;
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  // جلب المقالات مع الترقيم
  const { data: posts, count: totalCount } = await supabase
    .from("posts")
    .select(\`
      id,
      title,
      status,
      created_at,
      categories (name)
    \`, { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + POSTS_PER_PAGE - 1);

  const totalPages = Math.ceil((totalCount || 0) / POSTS_PER_PAGE);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">إدارة المقالات</h1>
          <p className="text-muted mt-1">
            صفحة {currentPage} من {totalPages} • إجمالي: {totalCount} مقال
          </p>
        </div>
        <Link
          href="/dashboard/posts/new"
          className="px-6 py-3 bg-primary text-white rounded-lg"
        >
          + إضافة مقال جديد
        </Link>
      </div>

      {/* جدول المقالات */}
      <div className="border border-border rounded-xl overflow-hidden bg-surface mb-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-right p-4 font-medium">العنوان</th>
              <th className="text-right p-4 font-medium">التصنيف</th>
              <th className="text-right p-4 font-medium">الحالة</th>
              <th className="text-center p-4 font-medium">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {posts?.map((post) => (
              <tr key={post.id} className="hover:bg-muted/10">
                <td className="p-4 font-medium">{post.title}</td>
                <td className="p-4 text-muted">
                  {post.categories?.name || "بدون تصنيف"}
                </td>
                <td className="p-4">
                  <span
                    className={\`px-3 py-1 rounded-full text-sm \${
                      post.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }\`}
                  >
                    {post.status === "published" ? "منشور" : "مسودة"}
                  </span>
                </td>
                <td className="p-4">
                  <PostActions postId={post.id} status={post.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* مكون الترقيم */}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}`}
            language="jsx"
          />

          <CodeBlock
            code={`// components/Pagination.js
import Link from "next/link";

export default function Pagination({ currentPage, totalPages }) {
  if (totalPages <= 1) return null;

  function getPageNumbers() {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (showEllipsis) {
      // عرض أول صفحة وآخر صفحة وصفحات محيطة بالحالية
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages;
  }

  return (
    <nav className="flex justify-center gap-2">
      {/* زر الصفحة السابقة */}
      {currentPage > 1 && (
        <Link
          href={\`?page=\${currentPage - 1}\`}
          className="px-4 py-2 border border-border rounded-lg hover:bg-surface"
        >
          السابق
        </Link>
      )}

      {/* أرقام الصفحات */}
      {getPageNumbers().map((page, index) => (
        <span key={index}>
          {page === "..." ? (
            <span className="px-4 py-2 text-muted">...</span>
          ) : (
            <Link
              href={\`?page=\${page}\`}
              className={\`px-4 py-2 rounded-lg \${
                currentPage === page
                  ? "bg-primary text-white"
                  : "border border-border hover:bg-surface"
              }\`}
            >
              {page}
            </Link>
          )}
        </span>
      ))}

      {/* زر الصفحة التالية */}
      {currentPage < totalPages && (
        <Link
          href={\`?page=\${currentPage + 1}\`}
          className="px-4 py-2 border border-border rounded-lg hover:bg-surface"
        >
          التالي
        </Link>
      )}
    </nav>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* اختبار المعرفة */}
        <LessonSection title="اختبر معرفتك">
          <Quiz
            question="لماذا نستخدم Promise.all في جلب إحصائيات لوحة التحكم؟"
            options={[
              "لأن JavaScript لا يدعم التوازي",
              "لتشغيل الاستعلامات بشكل متوازٍ وتحسين الأداء",
              "لأن Supabase يتطلب ذلك",
              "لتجنب أخطاء قاعدة البيانات",
            ]}
            correctAnswer={1}
            explanation="Promise.all يسمح بتشغيل عدة استعلامات للقاعدة في نفس الوقت بدلاً من الانتظار التسلسلي، مما يحسن أداء الصفحة بشكل كبير."
          />

          <Quiz
            question="ما هو الترقيم (Pagination) ولماذا نستخدمه؟"
            options={[
              "نوع من التشفير للبيانات",
              "تقسيم البيانات إلى صفحات لتحسين الأداء عند عرض كميات كبيرة",
              "طريقة لتنظيم ملفات المشروع",
              "نظام لإدارة الصلاحيات",
            ]}
            correctAnswer={1}
            explanation="الترقيم يقسم البيانات إلى صفحات أصغر لتجنب تحميل كل البيانات دفعة واحدة، مما يحسن سرعة التحميل وتجربة المستخدم."
          />

          <Quiz
            question="كيف نتحقق من نوع الملف قبل الرفع في Supabase Storage؟"
            options={[
              "لا يمكن التحقق من نوع الملف",
              "باستخدام خاصية file.type ومقارنتها بالأنواع المدعومة",
              "باستخدام مكتبة خارجية فقط",
              "لا يحتاج للتحقق لأنه يتم تلقائيًا",
            ]}
            correctAnswer={1}
            explanation="نستخدم خاصية file.type للملف ومقارنتها بمصفوفة الأنواع المدعومة مثل image/jpeg و image/png قبل الرفع."
          />
        </LessonSection>

        {/* التحدي */}
        <LessonSection title="تحدي praktis">
          <Challenge title="إضافة بحث في لوحة التحكم">
            <p className="mb-3">
              أضف حقل بحث للبحث في عناوين المقالات في لوحة التحكم:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>أنشئ مكون <code>SearchInput.js</code> تفاعلي مع تأخير (debounce)</li>
              <li>أضف معامل <code>search</code> في URL params</li>
              <li>عدّل استعلام Supabase للفلترة حسب العنوان باستخدام <code>.ilike()</code></li>
              <li>أضف زر مسح البحث</li>
            </ol>
          </Challenge>
        </LessonSection>

        {/* ملخص الأدوات */}
        <LessonSection title="ملخص أدوات لوحة التحكم">
          <CheatSheet title="مكونات لوحة التحكم الأساسية">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Supabase Storage:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted">
                  <li><code>.from("bucket").upload(path, file)</code> - رفع ملف</li>
                  <li><code>.getPublicUrl(path)</code> - الحصول على رابط عام</li>
                  <li><code>.from("bucket").remove([path])</code> - حذف ملف</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">الترقيم:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted">
                  <li><code>.range(start, end)</code> - تحديد نطاق السجلات</li>
                  <li><code>{`{ count: "exact" }`}</code> - جلب العدد الإجمالي</li>
                  <li>حساب <code>offset</code> و <code>totalPages</code></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">التحسينات:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted">
                  <li>Promise.all للاستعلامات المتوازية</li>
                  <li>useOptimistic للتحديثات الفورية</li>
                  <li>useTransition لعمليات الخلفية</li>
                </ul>
              </div>
            </div>
          </CheatSheet>
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
