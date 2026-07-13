import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function CrudOperationsLesson() {
  const lesson = getLessonBySlug("final-project", "05-crud-operations");

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
        <LessonSection title="مقدمة في عمليات CRUD">
          <p className="text-lg leading-relaxed mb-4">
            CRUD هي اختصار لأربع عمليات أساسية في أي تطبيق ويب:
            <strong> Create </strong> (إنشاء)، <strong>Read</strong> (قراءة)،
            <strong> Update</strong> (تحديث)، <strong>Delete</strong> (حذف).
          </p>
          <p className="text-lg leading-relaxed">
            في هذا الدرس سنقوم بتنفيذ هذه العمليات للمقالات باستخدام{" "}
            <strong>Server Actions</strong> من Next.js مع قاعدة بيانات{" "}
            <strong>Supabase</strong>.
          </p>
        </LessonSection>

        {/* إعداد عميل Supabase */}
        <LessonSection title="إعداد عميل Supabase">
          <p className="text-lg leading-relaxed mb-4">
            نحتاج لإنشاء عميلين منفصلين من Supabase: واحد للخادم وواحد للمتصفح.
            السبب هو أن بعض العمليات تحتاج للوصول المباشر لقاعدة البيانات من
            الخادم:
          </p>

          <CodeBlock
            code={`// lib/supabase/server.js
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: false,
        storage: {
          getItem: (key) => {
            return cookieStore.get(key)?.value ?? null;
          },
          setItem: (key, value) => {
            cookieStore.set(key, value, {
              path: "/",
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "lax",
            });
          },
          removeItem: (key) => {
            cookieStore.delete(key);
          },
        },
      },
    }
  );
}`}
            language="javascript"
          />

          <CodeBlock
            code={`// lib/supabase/client.js
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);`}
            language="javascript"
          />

          <p className="text-lg leading-relaxed mt-4 mb-4">
            ملف <code>server.js</code> يتعامل مع الكوكيز لتخزين جلسة المستخدم،
            بينما ملف <code>client.js</code> يُستخدم في المكونات التفاعلية.
          </p>
        </LessonSection>

        {/* إنشاء مقال - Create */}
        <LessonSection title="إنشاء مقال جديد (Create)">
          <p className="text-lg leading-relaxed mb-4">
            سنستخدم Server Actions لإنشاء مقال جديد. Server Actions هي دوال
            تتم على الخادم ويمكن استدعاؤها مباشرة من المكونات:
          </p>

          <CodeBlock
            code={`// app/dashboard/posts/actions.js
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function createPost(formData) {
  const supabase = await createClient();

  // استخراج البيانات من النموذج
  const title = formData.get("title");
  const content = formData.get("content");
  const categoryId = formData.get("category_id");
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\\u0600-\\u06FF]+/g, "-")
    .replace(/^-|-$/g, "");

  // إدراج المقال في قاعدة البيانات
  const { data, error } = await supabase
    .from("posts")
    .insert([
      {
        title,
        content,
        slug,
        category_id: categoryId || null,
        status: "draft",
      },
    ])
    .select()
    .single();

  if (error) {
    return { error: error.message };
  }

  // إعادة تحديث الصفحة لإظهار المقال الجديد
  revalidatePath("/dashboard/posts");
  redirect(\`/dashboard/posts/\${data.id}\`);
}`}
            language="javascript"
          />

          <CodeBlock
            code={`// app/dashboard/posts/new/page.js
import { createPost } from "../actions";
import { createClient } from "@/lib/supabase/server";

export default async function NewPostPage() {
  // جلب التصنيفات لعرضها في القائمة المنسدلة
  const supabase = await createClient();
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">إنشاء مقال جديد</h1>

      <form action={createPost} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            عنوان المقال
          </label>
          <input
            type="text"
            name="title"
            required
            className="w-full px-4 py-2 border border-border rounded-lg"
            placeholder="أدخل عنوان المقال"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            محتوى المقال
          </label>
          <textarea
            name="content"
            required
            rows={10}
            className="w-full px-4 py-2 border border-border rounded-lg"
            placeholder="اكتب محتوى المقال هنا..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            التصنيف
          </label>
          <select
            name="category_id"
            className="w-full px-4 py-2 border border-border rounded-lg"
          >
            <option value="">اختر تصنيفاً</option>
            {categories?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-white rounded-lg hover:opacity-90"
        >
          إنشاء المقال
        </button>
      </form>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* قراءة المقالات - Read */}
        <LessonSection title="قراءة المقالات (Read)">
          <p className="text-lg leading-relaxed mb-4">
            لجلب المقالات من قاعدة البيانات نستخدم الدالة في صفحة الخادم مباشرة.
           Next.js يدعم التحميل التلقائي عند تغيير البيانات:
          </p>

          <CodeBlock
            code={`// app/dashboard/posts/page.js
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import DeleteButton from "./DeleteButton";

export default async function PostsPage() {
  const supabase = await createClient();

  // جلب جميع المقالات مع اسم التصنيف
  const { data: posts, error } = await supabase
    .from("posts")
    .select(\`
      *,
      categories (name)
    \`)
    .order("created_at", { ascending: false });

  if (error) {
    return <div className="text-danger">حدث خطأ في جلب البيانات</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">المقالات</h1>
        <Link
          href="/dashboard/posts/new"
          className="px-6 py-2 bg-primary text-white rounded-lg"
        >
          إضافة مقال جديد
        </Link>
      </div>

      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-muted text-center py-8">
            لا توجد مقالات بعد. أضف مقالك الأول!
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="border border-border rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-muted text-sm">
                  {post.categories?.name || "بدون تصنيف"} •{" "}
                  {new Date(post.created_at).toLocaleDateString("ar-SA")}
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={\`/dashboard/posts/\${post.id}/edit\`}
                  className="px-4 py-2 bg-secondary text-white rounded-lg"
                >
                  تعديل
                </Link>
                <DeleteButton postId={post.id} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* تحديث المقال - Update */}
        <LessonSection title="تحديث مقال (Update)">
          <p className="text-lg leading-relaxed mb-4">
            لتعديل مقال موجود نستخدم دالة update في Server Action، ونملأ النموذج
            بالبيانات الحالية للمقال:
          </p>

          <CodeBlock
            code={`// app/dashboard/posts/actions.js (إضافة)
export async function updatePost(postId, formData) {
  const supabase = await createClient();

  const title = formData.get("title");
  const content = formData.get("content");
  const categoryId = formData.get("category_id");
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\\u0600-\\u06FF]+/g, "-")
    .replace(/^-|-$/g, "");

  const { error } = await supabase
    .from("posts")
    .update({
      title,
      content,
      slug,
      category_id: categoryId || null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", postId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/dashboard/posts");
  revalidatePath(\`/dashboard/posts/\${postId}\`);
  redirect(\`/dashboard/posts/\${postId}\`);
}`}
            language="javascript"
          />

          <CodeBlock
            code={`// app/dashboard/posts/[id]/edit/page.js
import { updatePost } from "../../actions";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export default async function EditPostPage({ params }) {
  const { id } = await params;
  const supabase = await createClient();

  // جلب بيانات المقال الحالي
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) {
    notFound();
  }

  // جلب التصنيفات
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  // دالة مساعدة لربط المعرّف في Server Action
  async function updatePostWithId(formData) {
    "use server";
    await updatePost(id, formData);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">تعديل المقال</h1>

      <form action={updatePostWithId} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            عنوان المقال
          </label>
          <input
            type="text"
            name="title"
            required
            defaultValue={post.title}
            className="w-full px-4 py-2 border border-border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            محتوى المقال
          </label>
          <textarea
            name="content"
            required
            rows={10}
            defaultValue={post.content}
            className="w-full px-4 py-2 border border-border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            التصنيف
          </label>
          <select
            name="category_id"
            defaultValue={post.category_id || ""}
            className="w-full px-4 py-2 border border-border rounded-lg"
          >
            <option value="">اختر تصنيفاً</option>
            {categories?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-white rounded-lg"
        >
          حفظ التعديلات
        </button>
      </form>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* حذف المقال - Delete */}
        <LessonSection title="حذف مقال (Delete)">
          <p className="text-lg leading-relaxed mb-4">
            لحذف مقال نستخدم Server Action مع مكون تفاعلي يعرض رسالة تأكيد قبل
            الحذف:
          </p>

          <CodeBlock
            code={`// app/dashboard/posts/actions.js (إضافة)
export async function deletePost(postId) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("posts")
    .delete()
    .eq("id", postId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/dashboard/posts");
}`}
            language="javascript"
          />

          <CodeBlock
            code={`// app/dashboard/posts/DeleteButton.js
"use client";

import { useTransition } from "react";
import { deletePost } from "./actions";

export default function DeleteButton({ postId }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    const confirmed = confirm("هل أنت متأكد من حذف هذا المقال؟");
    if (!confirmed) return;

    startTransition(async () => {
      const result = await deletePost(postId);
      if (result?.error) {
        alert("حدث خطأ أثناء الحذف: " + result.error);
      }
    });
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="px-4 py-2 bg-danger text-white rounded-lg disabled:opacity-50"
    >
      {isPending ? "جاري الحذف..." : "حذف"}
    </button>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* تحسين الكود: Optimistic Updates */}
        <LessonSection title="تحسين الكود: التحديثات التفاؤلية">
          <p className="text-lg leading-relaxed mb-4">
            التحديثات التفاؤلية (Optimistic Updates) تعطي المستخدم شعورًا
            بالسرعة بتغيير الواجهة فورًا قبل التأكد من نجاح العملية على الخادم:
          </p>

          <CodeBlock
            code={`// app/dashboard/posts/PostList.js
"use client";

import { useOptimistic } from "react";
import { deletePost } from "./actions";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

export default function PostList({ initialPosts }) {
  // useOptimistic يحتفظ بنسخة مؤقتة من البيانات
  const [optimisticPosts, removeOptimisticPost] = useOptimistic(
    initialPosts,
    (currentPosts, postIdToRemove) => {
      return currentPosts.filter((post) => post.id !== postIdToRemove);
    }
  );

  async function handleDelete(postId) {
    // تحديث الواجهة فورًا
    removeOptimisticPost(postId);

    // ثم حذف من قاعدة البيانات
    const result = await deletePost(postId);
    if (result?.error) {
      // في حالة الخطأ، يمكن إعادة تحميل الصفحة
      window.location.reload();
    }
  }

  return (
    <div className="space-y-4">
      {optimisticPosts.map((post) => (
        <div
          key={post.id}
          className="border border-border rounded-lg p-4 flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-muted text-sm">
              {post.categories?.name || "بدون تصنيف"}
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href={\`/dashboard/posts/\${post.id}/edit\`}
              className="px-4 py-2 bg-secondary text-white rounded-lg"
            >
              تعديل
            </Link>
            <DeleteButton postId={post.id} onDelete={handleDelete} />
          </div>
        </div>
      ))}
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* اختبار المعرفة */}
        <LessonSection title="اختبر معرفتك">
          <Quiz
            question="ما هي Server Actions في Next.js؟"
            options={[
              "دوال تعمل في المتصفح",
              "دوال تتم على الخادم ويمكن استدعاؤها من المكونات",
              "نوع من قواعد البيانات",
              "مكتبة للمصادقة",
            ]}
            correctAnswer={1}
            explanation="Server Actions هي دوال تتم على الخادم يمكن استدعاؤها مباشرة من مكونات React دون الحاجة لبناء API endpoints."
          />

          <Quiz
            question="ما هو الفرق بين createClient للخادم والمتصفح؟"
            options={[
              "لا يوجد فرق",
              "عميل الخادم يتعامل مع الكوكيز لتخزين الجلسة",
              "عميل المتصفح أسرع",
              "عميل الخادم يدعم JavaScript فقط",
            ]}
            correctAnswer={1}
            explanation="عميل الخادم (server.js) يحتاج للتعامل مع الكوكيز لتخزين جلسة المستخدم بشكل آمن، بينما عميل المتصفح (client.js) يعمل بشكل مباشر."
          />

          <Quiz
            question="ما هي التحديثات التفاؤلية (Optimistic Updates)؟"
            options={[
              "تحديث البيانات على الخادم فقط",
              "تغيير الواجهة فورًا قبل التأكد من نجاح العملية",
              "نوع من التخزين المؤقت",
              "تحديث تلقائي كل دقيقة",
            ]}
            correctAnswer={1}
            explanation="التحديثات التفاؤلية تغير الواجهة فورًا لتعطي المستخدم شعورًا بالسرعة، ثم تتحقق من نجاح العملية على الخادم في الخلفية."
          />
        </LessonSection>

        {/* التحدي */}
        <LessonSection title="تحدي praktis">
          <Challenge title="إضافة فلترة المقالات حسب التصنيف">
            <p className="mb-3">
              أضف قائمة منسدلة لفلترة المقالات حسب التصنيف في صفحة لوحة التحكم:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>أنشئ مكون <code>CategoryFilter.js</code> تفاعلي</li>
              <li>استخدم URL params لتخزين التصنيف المحدد</li>
              <li>عدّل استعلام Supabase للفلترة حسب التصنيف</li>
              <li>أضف زر &quot;إظهار الكل&quot; لإزالة الفلتر</li>
            </ol>
          </Challenge>
        </LessonSection>

        {/* ملخص الأدوات */}
        <LessonSection title="ملخص عمليات CRUD">
          <CheatSheet title="العمليات الأساسية مع Supabase">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">العمليات الأساسية:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted">
                  <li><code>.insert([{}])</code> - إنشاء سجل جديد</li>
                  <li><code>.select()</code> - جلب البيانات</li>
                  <li><code>.update({})</code> - تحديث سجل موجود</li>
                  <li><code>.delete()</code> - حذف سجل</li>
                  <li><code>.eq("field", value)</code> - شرط تصفية</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Server Actions:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted">
                  <li>تبدأ بعبارة <code>"use server"</code></li>
                  <li>تتلقى <code>FormData</code> كمعامل</li>
                  <li>تستخدم <code>revalidatePath()</code> لتحديث الكاش</li>
                  <li>تستخدم <code>redirect()</code> للتنقل بعد النجاح</li>
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
