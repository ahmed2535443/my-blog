import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function SupabaseFinalProject() {
  const lesson = getLessonBySlug("supabase", "06-supabase-final-project");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== Section 1: ما سنبنيه ==================== */}
        <LessonSection id="what-we-will-build" title="ما سنبنيه في هذا المشروع">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            مرحباً بك في الدرس الأخير من مرحلة Supabase! في هذا الدرس سنبني
            معاً <strong className="text-blue-600 dark:text-blue-400">تطبيق مهام كامل</strong>{" "}
            (Task Manager App) يستخدم جميع المكونات التي تعلمناها في الدروس
            السابقة. هذا ليس مجرد نموذج تجريبي بسيط — بل مشروع حقيقي يمكنك
            بناءه وتوسيعه.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            المشروع يجمع كل ما تعلمناه في مرحلة Supabase في مكان واحد. سنستخدم
            قاعدة البيانات، والمصادقة، وتخزين الملفات، والتحديثات الفورية،
            والـ Server Actions — كل ذلك في تطبيق واحد متكامل.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">
              ميزات المشروع
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <span className="text-xl">CRUD</span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    عمليات كاملة
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    إنشاء، قراءة، تحديث، وحذف المهام
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <span className="text-xl">RLS</span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    Row Level Security
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    كل مستخدم يرى مهامه فقط
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <span className="text-xl">File Upload</span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    رفع الملفات
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    إرفاق ملفات بالمهام
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <span className="text-xl">Realtime</span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    تحديثات فورية
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    تحديثات مباشرة عبر WebSocket
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800 mb-6">
            <p className="text-blue-700 dark:text-blue-200 text-sm font-medium">
              ملاحظة: سنستخدم Supabase Auth للمصادقة في هذا المشروع. في مراحل
              لاحقة من المنصة، سننتقل إلى Clerk كمزود للمصادقة، لكن المبادئ
              الأساسية تبقى نفسها.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              التقنيات المستخدمة
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                <strong>Next.js 14+</strong> — App Router, Server Components, Server Actions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <strong>Supabase</strong> — Database, Auth, Storage, Realtime
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full" />
                <strong>TypeScript</strong> — Type safety throughout
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                <strong>Tailwind CSS</strong> — Styling
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ==================== Section 2: هيكل المشروع ==================== */}
        <LessonSection id="project-structure" title="هيكل المشروع">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            قبل أن نبدأ بالبرمجة، دعنا نفهم هيكل الملفات الذي سنعمل عليه.
            المشروع يتبع أفضل ممارسات Next.js App Router مع فصل واضح بين
            Components والـ Server Logic.
          </p>

          <CodeBlock language="text" code={`app/
├── api/
│   └── tasks/
│       ├── route.ts            (GET all tasks, POST new task)
│       └── [id]/
│           └── route.ts        (GET one, PATCH update, DELETE)
├── tasks/
│   └── page.tsx                (Task list page - Server Component)
├── actions/
│   └── tasks.ts                (Server Actions for CRUD)
├── components/
│   ├── TaskList.tsx            (Client: realtime updates)
│   ├── TaskForm.tsx            (Client: create/edit form)
│   ├── TaskCard.tsx            (Client: individual task card)
│   └── FileUpload.tsx          (Client: file upload)
└── utils/
    └── supabase/
        ├── server.ts           (Server Client for Server Components)
        └── client.ts           (Browser Client for Client Components)`} />

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 mb-6">
            لاحظ كيف نفصل بين المكونات. الملفات في{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">
              app/actions/
            </code>{" "}
            تحتوي على Server Actions للتعامل مع التغييرات (mutations)، بينما
            المكونات في{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">
              components/
            </code>{" "}
            تتضمن كل ما يتعلق بالعرض والتفاعل مع المستخدم.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              شرح كل مجلد
            </h4>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <strong className="text-gray-900 dark:text-white">api/tasks/</strong>
                <p className="mr-4 mt-1">
                  Route Handlers للـ CRUD عبر API. يمكن استخدامها كـ REST API
                  إذا أردنا تطبيق موبايل في المستقبل.
                </p>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">tasks/</strong>
                <p className="mr-4 mt-1">
                  صفحة عرض المهام الرئيسية. Server Component يجلب البيانات
                  من Supabase مباشرة.
                </p>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">actions/</strong>
                <p className="mr-4 mt-1">
                  Server Actions للتعامل مع إنشاء وتحديث وحذف المهام.
                  تُستخدم من Client Components.
                </p>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">components/</strong>
                <p className="mr-4 mt-1">
                  مكونات الواجهة. بعضها Server وبعضها Client حسب الحاجة.
                </p>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">utils/supabase/</strong>
                <p className="mr-4 mt-1">
                  عميل Supabase — واحد للخادم (server.ts) وواحد للمتصفح (client.ts).
                </p>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* ==================== Section 3: تصميم قاعدة البيانات ==================== */}
        <LessonSection id="database-design" title="تصميم قاعدة البيانات">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            الخطوة الأولى هي تصميم جدول المهام في Supabase. سنستخدم{" "}
            <strong className="text-blue-600 dark:text-blue-400">PostgreSQL</strong>{" "}
            مع كل الميزات المتاحة: UUID للمعرفات الفريدة، وConstraints للتحقق
            من البيانات، وRLS لعزل المستخدمين.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            إنشاء جدول المهام
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            افتح SQL Editor في لوحة تحكم Supabase وأنشئ الجدول التالي:
          </p>

          <CodeBlock language="sql" code={`CREATE TABLE tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pending'
    CHECK (status IN ('pending', 'in_progress', 'completed')),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  attachment_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);`} />

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mt-6 mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              شرح الأعمدة
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">
                      العمود
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">
                      النوع
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">
                      الشرح
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 font-mono text-xs">id</td>
                    <td className="py-3 px-4">UUID</td>
                    <td className="py-3 px-4">المعرف الفريد — يُولّد تلقائياً</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 font-mono text-xs">title</td>
                    <td className="py-3 px-4">TEXT NOT NULL</td>
                    <td className="py-3 px-4">عنوان المهمة — مطلوب</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 font-mono text-xs">description</td>
                    <td className="py-3 px-4">TEXT</td>
                    <td className="py-3 px-4">وصف المهمة — اختياري</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 font-mono text-xs">status</td>
                    <td className="py-3 px-4">TEXT CHECK</td>
                    <td className="py-3 px-4">الحالة: pending، in_progress، أو completed</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 font-mono text-xs">user_id</td>
                    <td className="py-3 px-4">UUID FK</td>
                    <td className="py-3 px-4">معرف المستخدم — مرجع لجدول auth.users</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 font-mono text-xs">attachment_url</td>
                    <td className="py-3 px-4">TEXT</td>
                    <td className="py-3 px-4">رابط الملف المرفق — اختياري</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 font-mono text-xs">created_at</td>
                    <td className="py-3 px-4">TIMESTAMPTZ</td>
                    <td className="py-3 px-4">تاريخ الإنشاء — يُولّد تلقائياً</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-xs">updated_at</td>
                    <td className="py-3 px-4">TIMESTAMPTZ</td>
                    <td className="py-3 px-4">آخر تحديث</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            تفعيل Row Level Security
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            الآن سنقوم بتفعيل RLS وتعريف سياسات الأمان. هذه الخطوة{" "}
            <strong className="text-red-600 dark:text-red-400">حرجة</strong> — بدونها
            سيكون بإمكان أي مستخدم رؤية وتعديل جميع المهام.
          </p>

          <CodeBlock language="sql" code={`-- تفعيل Row Level Security
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- سياسة القراءة: كل مستخدم يرى مهامه فقط
CREATE POLICY "Users can read own tasks" ON tasks
  FOR SELECT USING (auth.uid() = user_id);

-- سياسة الإنشاء: المستخدم ينشئ مهمة بنفسه
CREATE POLICY "Users can create tasks" ON tasks
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- سياسة التحديث: المستخدم يحدّث مهامه فقط
CREATE POLICY "Users can update own tasks" ON tasks
  FOR UPDATE USING (auth.uid() = user_id);

-- سياسة الحذف: المستخدم يحذف مهامه فقط
CREATE POLICY "Users can delete own tasks" ON tasks
  FOR DELETE USING (auth.uid() = user_id);`} />

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800 mt-6 mb-6">
            <p className="text-yellow-700 dark:text-yellow-200 text-sm font-medium">
              تذكير: الدالة auth.uid() تُرجع معرف المستخدم الحالي من JWT.
              في RLS policies، نستخدمها للمقارنة مع user_id لضمان أن كل مستخدم
              يمكنه الوصول لبياناته فقط.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            إعداد Storage للمرفقات
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            سننشئ Storage bucket خاص بالمرفقات مع سياسات أمان تضمن أن كل
            مستخدم يمكنه الوصول لملفاته فقط.
          </p>

          <CodeBlock language="sql" code={`-- إنشاء bucket للمرفقات (خاصة - ليست عامة)
INSERT INTO storage.buckets (id, name, public)
VALUES ('task-attachments', 'task-attachments', false);

-- سياسة الرفع: المستخدم يرفع في مجلده فقط
CREATE POLICY "Users can upload attachments" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'task-attachments'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- سياسة القراءة: المستخدم يقرأ ملفاته فقط
CREATE POLICY "Users can read own attachments" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'task-attachments'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- سياسة الحذف: المستخدم يحذف ملفاته فقط
CREATE POLICY "Users can delete own attachments" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'task-attachments'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );`} />

          <p className="text-gray-700 dark:text-gray-300 mt-6 mb-4">
            لاحظ كيف نستخدم{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">
              storage.foldername(name)[1]
            </code>{" "}
            للتحقق من أن المجلد الأول يطابق معرف المستخدم. هذا يضمن العزل
            الكامل بين المستخدمين على مستوى التخزين.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            دالة تحديث updated_at تلقائياً
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            سننشئ trigger يُحدّث عمود updated_at تلقائياً عند كل تعديل على
            صف في جدول tasks:
          </p>

          <CodeBlock language="sql" code={`-- الدالة التي تُحدّث updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- الـ Trigger
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON tasks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();`} />

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800 mt-6">
            <p className="text-green-700 dark:text-green-200 text-sm font-medium">
              نجاح: الآن قاعدة بياناتنا جاهزة بالكامل! لدينا جدول tasks مع
              RLS policies، وStorage bucket مع سياسات أمان، وtrigger لتحديث
              timestamps. حان الوقت للانتقال إلى الكود.
            </p>
          </div>
        </LessonSection>

        {/* ==================== Section 4: إعداد عميل Supabase ==================== */}
        <LessonSection id="supabase-client" title="إعداد عميل Supabase">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            تعلمنا في الدروس السابقة كيفية إعداد عميل Supabase في Next.js.
            هنا سننشئ الملفات اللازمة للمشروع.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Server Client
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا العميل يُستخدم في Server Components وServer Actions:
          </p>

          <CodeBlock language="typescript" code={`// utils/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Server Component — cannot set cookies
          }
        },
      },
    }
  )
}`} />

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            Browser Client
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا العميل يُستخدم في Client Components فقط:
          </p>

          <CodeBlock language="typescript" code={`// utils/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}`} />

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            ملف متغيرات البيئة
          </h3>

          <CodeBlock language="text" code={`# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here`} />

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800 mt-6">
            <p className="text-red-700 dark:text-red-200 text-sm font-medium">
              تحذير أمني: لا تشارك anon key في مستودع مفتوح المصدر. رغم أن
              الـ anon key آمن بفضل RLS، إلا أنه من الأفضل إبقائه سرياً.
            </p>
          </div>
        </LessonSection>

        {/* ==================== Section 5: Server Actions للـ CRUD ==================== */}
        <LessonSection id="server-actions" title="Server Actions للعمليات CRUD">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Server Actions هي الطريقة المثالية للتعامل مع التغييرات (mutations)
            في Next.js App Router. بدلاً من إنشاء API endpoints منفصلة، نكتب
            دوال تُشغّل على الخادم وتُستدعى مباشرة من Components.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            إنشاء مهمة جديدة
          </h3>

          <CodeBlock language="typescript" code={`// app/actions/tasks.ts
'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createTask(formData: FormData) {
  const supabase = await createClient()

  const title = formData.get('title') as string
  const description = formData.get('description') as string

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('يجب تسجيل الدخول أولاً')
  }

  const { error } = await supabase.from('tasks').insert({
    title,
    description,
    status: 'pending',
    user_id: user.id,
  })

  if (error) {
    console.error('Error creating task:', error)
    throw new Error('فشل في إنشاء المهمة')
  }

  revalidatePath('/tasks')
}`} />

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mt-6 mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              نقاط مهمة في الكود
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs font-mono">
                    'use server'
                  </code>{" "}
                  في أعلى الملف يُعلّم كل الدوال بأنها Server Actions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs font-mono">
                    revalidatePath('/tasks')
                  </code>{" "}
                  يُعيد تحميل بيانات الصفحة بعد التغيير
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  نتحقق من هوية المستخدم عبر{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs font-mono">
                    supabase.auth.getUser()
                  </code>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  RLS policies ستحمّل تلقائياً — لكن التحقق من المستخدم يعطي
                  خطأ أوضح
                </span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            تحديث حالة المهمة
          </h3>

          <CodeBlock language="typescript" code={`export async function updateTaskStatus(id: string, status: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('tasks')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)

  if (error) {
    console.error('Error updating task:', error)
    throw new Error('فشل في تحديث المهمة')
  }

  revalidatePath('/tasks')
}

export async function updateTaskTitle(id: string, title: string, description: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('tasks')
    .update({ title, description, updated_at: new Date().toISOString() })
    .eq('id', id)

  if (error) {
    console.error('Error updating task:', error)
    throw new Error('فشل في تحديث المهمة')
  }

  revalidatePath('/tasks')
}`} />

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            حذف المهمة
          </h3>

          <CodeBlock language="typescript" code={`export async function deleteTask(id: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting task:', error)
    throw new Error('فشل في حذف المهمة')
  }

  revalidatePath('/tasks')
}`} />

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            جلب جميع المهام
          </h3>

          <CodeBlock language="typescript" code={`export async function getTasks() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching tasks:', error)
    throw new Error('فشل في جلب المهام')
  }

  return data
}`} />

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800 mt-6">
            <p className="text-blue-700 dark:text-blue-200 text-sm font-medium">
              ملاحظة: في هذه الدوال نستخدم Server Client لأنها تُشغّل على
              الخادم. لا يوجد أي كود يذهب للمتصفح من هذه الدوال — هذا يحافظ
              على أمان البيانات.
            </p>
          </div>
        </LessonSection>

        {/* ==================== Section 6: صفحة المهام — Server Component ==================== */}
        <LessonSection id="tasks-page" title="صفحة المهام — Server Component">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            صفحة المهام الرئيسية هي Server Component يجلب البيانات من Supabase
            مباشرة على الخادم. هذا يعني أن البيانات تصل للمستخدم جاهزة ولا
            حاجة لـ loading states معقّدة.
          </p>

          <CodeBlock language="typescript" code={`// app/tasks/page.tsx
import { createClient } from '@/utils/supabase/server'
import TaskList from '@/components/TaskList'
import TaskForm from '@/components/TaskForm'
import Link from 'next/link'

export default async function TasksPage() {
  const supabase = await createClient()

  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-red-600">
          خطأ في تحميل المهام
        </h1>
        <p className="text-gray-600">{error.message}</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          مهامي
        </h1>
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          العودة للرئيسية
        </Link>
      </div>

      <TaskForm />
      <TaskList initialTasks={tasks || []} />
    </div>
  )
}`} />

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mt-6 mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              لماذا Server Component؟
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">+</span>
                <span>جلب البيانات على الخادم أسرع وأكثر أماناً</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">+</span>
                <span>لا حاجة لـ loading states أو useEffect</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">+</span>
                <span>البيانات تصل جاهزة مع أول تحميل للصفحة</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">+</span>
                <span>أفضل لـ SEO لأن المحتوى يظهر في HTML الأولي</span>
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ==================== Section 7: مكون Realtime للتحديثات المباشرة ==================== */}
        <LessonSection id="realtime-component" title="مكون Realtime للتحديثات المباشرة">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            الآن سنبني Component يعرض المهام مع دعم التحديثات الفورية عبر
            Supabase Realtime. عندما يُضيف مستخدم آخر مهمة، ستظهر فوراً
            بدون إعادة تحميل الصفحة.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            مكون TaskList
          </h3>

          <CodeBlock language="typescript" code={`// components/TaskList.tsx
'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { updateTaskStatus, deleteTask } from '@/app/actions/tasks'
import TaskCard from './TaskCard'

export default function TaskList({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')
  const supabase = createClient()

  useEffect(() => {
    const channel = supabase
      .channel('tasks-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'tasks' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setTasks((prev) => [payload.new, ...prev])
          } else if (payload.eventType === 'UPDATE') {
            setTasks((prev) =>
              prev.map((t) => (t.id === payload.new.id ? payload.new : t))
            )
          } else if (payload.eventType === 'DELETE') {
            setTasks((prev) => prev.filter((t) => t.id !== payload.old.id))
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true
    return task.status === filter
  })

  const statusCounts = {
    all: tasks.length,
    pending: tasks.filter((t) => t.status === 'pending').length,
    in_progress: tasks.filter((t) => t.status === 'in_progress').length,
    completed: tasks.filter((t) => t.status === 'completed').length,
  }

  return (
    <div className="mt-6">
      {/* فلتر الحالات */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          { key: 'all', label: 'الكل' },
          { key: 'pending', label: 'قيد الانتظار' },
          { key: 'in_progress', label: 'قيد التنفيذ' },
          { key: 'completed', label: 'مكتملة' },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setFilter(item.key)}
            className={\`px-4 py-2 rounded-lg text-sm font-medium transition-colors \${
              filter === item.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }\`}
          >
            {item.label} ({statusCounts[item.key]})
          </button>
        ))}
      </div>

      {/* قائمة المهام */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <p className="text-lg">لا توجد مهام حالياً</p>
            <p className="text-sm mt-1">ابدأ بإضافة مهمة جديدة!</p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={updateTaskStatus}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  )
}`} />

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mt-6 mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              كيف يعمل Realtime؟
            </h4>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <p>
                  <strong>الاشتراك:</strong> نستخدم{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs font-mono">
                    supabase.channel()
                  </code>{" "}
                  لإنشاء قناة WebSocket
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <p>
                  <strong>الاستماع:</strong> نستخدم{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs font-mono">
                    .on('postgres_changes', ...)
                  </code>{" "}
                  للاستماع لأي تغيير في جدول tasks
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <p>
                  <strong>المعالجة:</strong> عند حدوث تغيير (INSERT, UPDATE, DELETE)،
                  نُحدّث الحالة المحلية باستخدام setTasks
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  4
                </span>
                <p>
                  <strong>التنظيف:</strong> في دالة الإرجاع (cleanup)، نزيل القناة
                  باستخدام removeChannel لتجنب التسريبات الذاكرة
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            مكون TaskCard
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            مكون منفصل لعرض كل مهمة مع أزرار التحديث والحذف:
          </p>

          <CodeBlock language="typescript" code={`// components/TaskCard.tsx
'use client'

import { useState } from 'react'

const statusLabels = {
  pending: { text: 'قيد الانتظار', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
  in_progress: { text: 'قيد التنفيذ', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
  completed: { text: 'مكتملة', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
}

export default function TaskCard({ task, onStatusChange, onDelete }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleStatusChange = async (newStatus) => {
    setIsLoading(true)
    try {
      await onStatusChange(task.id, newStatus)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('هل أنت متأكد من حذف هذه المهمة؟')) return
    setIsLoading(true)
    try {
      await onDelete(task.id)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={\`bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 transition-opacity \${
      isLoading ? 'opacity-50' : ''
    }\`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 dark:text-white truncate">
            {task.title}
          </h3>
          {task.description && (
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-2">
              {task.description}
            </p>
          )}
          <div className="flex items-center gap-2 mt-2">
            <span className={\`px-2 py-1 rounded-full text-xs font-medium \${statusLabels[task.status].color}\`}>
              {statusLabels[task.status].text}
            </span>
            <span className="text-gray-400 text-xs">
              {new Date(task.created_at).toLocaleDateString('ar-SA')}
            </span>
          </div>
        </div>

        <div className="flex gap-1 flex-shrink-0">
          {task.status !== 'completed' && (
            <button
              onClick={() => handleStatusChange('completed')}
              className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors"
              title="تحديد كمكتملة"
            >
              Done
            </button>
          )}
          {task.status === 'pending' && (
            <button
              onClick={() => handleStatusChange('in_progress')}
              className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
              title="بدء التنفيذ"
            >
              Start
            </button>
          )}
          <button
            onClick={handleDelete}
            className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
            title="حذف المهمة"
          >
            Delete
          </button>
        </div>
      </div>

      {task.attachment_url && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <a
            href={task.attachment_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
          >
            عرض المرفق
          </a>
        </div>
      )}
    </div>
  )
}`} />
        </LessonSection>

        {/* ==================== Section 8: نموذج إنشاء المهام ==================== */}
        <LessonSection id="task-form" title="نموذج إنشاء المهام">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            الآن نحتاج نموذج لإنشاء مهام جديدة. نموذجنا يستخدم Server Action
            مباشرة عند الإرسال، مع تجربة مستخدم سلسة.
          </p>

          <CodeBlock language="typescript" code={`// components/TaskForm.tsx
'use client'

import { useRef, useState } from 'react'
import { createTask } from '@/app/actions/tasks'
import FileUpload from './FileUpload'

export default function TaskForm() {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = async (formData) => {
    setIsSubmitting(true)
    try {
      await createTask(formData)
      formRef.current?.reset()
      setShowForm(false)
    } catch (error) {
      alert('حدث خطأ أثناء إنشاء المهمة')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-gray-500 dark:text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-colors"
      >
        + إضافة مهمة جديدة
      </button>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
      <h3 className="font-bold text-gray-900 dark:text-white mb-4">
        مهمة جديدة
      </h3>
      <form ref={formRef} action={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            العنوان *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="أدخل عنوان المهمة..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            الوصف
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="أدخل وصف المهمة (اختياري)..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {isSubmitting ? 'جاري الإنشاء...' : 'إنشاء المهمة'}
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
  )
}`} />

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mt-6 mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              ملاحظات على النموذج
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  نستخدم <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs font-mono">useRef</code> للإشارة
                  إلى النموذج وإعادة تعيينه
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  سمة <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs font-mono">action</code> تُستدعى مع FormData تلقائياً
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  نُظهر النموذج فقط عند النقر على زر الإضافة (toggle pattern)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  حالة <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs font-mono">isSubmitting</code> تمنع الإرسال المتعدد
                </span>
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ==================== Section 9: رفع الملفات المرفقة ==================== */}
        <LessonSection id="file-upload" title="رفع الملفات المرفقة">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            الميزة الأخيرة هي رفع الملفات المرفقة بالمهام. سنستخدم Supabase
            Storage مع سياسات أمان تضمن أن كل مستخدم يمكنه الوصول لملفاته فقط.
          </p>

          <CodeBlock language="typescript" code={`// components/FileUpload.tsx
'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'

export default function FileUpload({ taskId, onUploadComplete }) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(null)
  const supabase = createClient()

  const handleUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // التحقق من حجم الملف (5MB كحد أقصى)
    if (file.size > 5 * 1024 * 1024) {
      alert('حجم الملف يتجاوز 5MB')
      return
    }

    setIsUploading(true)
    setUploadProgress(0)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('يجب تسجيل الدخول')

      // بناء مسار الملف: user_id/task_id/file_name
      const filePath = user.id + '/' + taskId + '/' + file.name

      const { error: uploadError } = await supabase.storage
        .from('task-attachments')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        })

      if (uploadError) throw uploadError

      // الحصول على رابط الملف
      const { data: urlData } = supabase.storage
        .from('task-attachments')
        .getPublicUrl(filePath)

      // تحديث المهمة برابط المرفق
      await supabase
        .from('tasks')
        .update({ attachment_url: urlData.publicUrl })
        .eq('id', taskId)

      setUploadProgress(100)
      if (onUploadComplete) onUploadComplete(urlData.publicUrl)
    } catch (error) {
      console.error('Upload error:', error)
      alert('حدث خطأ أثناء رفع الملف')
    } finally {
      setIsUploading(false)
      setUploadProgress(null)
    }
  }

  return (
    <div className="mt-3">
      <label className="block">
        <span className="sr-only">اختر ملفاً</span>
        <input
          type="file"
          onChange={handleUpload}
          disabled={isUploading}
          className="block w-full text-sm text-gray-500 dark:text-gray-400
            file:ml-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            dark:file:bg-blue-900/30 dark:file:text-blue-300
            hover:file:bg-blue-100 dark:hover:file:bg-blue-900/50
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </label>

      {isUploading && (
        <div className="mt-2">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: uploadProgress + '%' }}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            جاري الرفع...
          </p>
        </div>
      )}
    </div>
  )
}`} />

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mt-6 mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              كيف يعمل رفع الملفات؟
            </h4>
            <ol className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <span>
                  المستخدم يختار ملفاً من جهازه عبر حقل input
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <span>
                  نتحقق من حجم الملف (5MB كحد أقصى)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <span>
                  نبني مسار فريد: user_id / task_id / file_name
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  4
                </span>
                <span>
                  نرفع الملف إلى Storage bucket باستخدام{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs font-mono">
                    supabase.storage.from('task-attachments').upload()
                  </code>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  5
                </span>
                <span>
                  نحصل على رابط الملف عبر{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs font-mono">
                    .getPublicUrl()
                  </code>{" "}
                  ونحدّث المهمة به
                </span>
              </li>
            </ol>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            Route Handlers — API كاملة
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            إذا أردنا توفير API endpoint منفصلة (مثلاً لتطبيق موبايل مستقبلي)،
            يمكننا إنشاء Route Handlers:
          </p>

          <CodeBlock language="typescript" code={`// app/api/tasks/route.ts
import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request) {
  const supabase = await createClient()
  const body = await request.json()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data, error } = await supabase
    .from('tasks')
    .insert({ ...body, user_id: user.id })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}`} />

          <CodeBlock language="typescript" code={`// app/api/tasks/[id]/route.ts
import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const supabase = await createClient()
  const { id } = await params

  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 })
  }

  return NextResponse.json(data)
}

export async function PATCH(request, { params }) {
  const supabase = await createClient()
  const { id } = await params
  const body = await request.json()

  const { data, error } = await supabase
    .from('tasks')
    .update({ ...body, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function DELETE(request, { params }) {
  const supabase = await createClient()
  const { id } = await params

  const { error } = await supabase.from('tasks').delete().eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ message: 'Task deleted' })
}`} />
        </LessonSection>

        {/* ==================== Section 10: إعداد Realtime في Supabase ==================== */}
        <LessonSection id="realtime-setup" title="تفعيل Realtime في Supabase">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            لكي تعمل التحديثات الفورية، يجب تفعيل Realtime على جدول tasks
            في لوحة تحكم Supabase. اتبع الخطوات التالية:
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">
              خطوات التفعيل
            </h4>
            <ol className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <span>افتح لوحة تحكم Supabase واذهب إلى مشروعك</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <span>من القائمة الجانبية، اختر Database ثم Replication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <span>ابحث عن جدول tasks وفعّل Realtime عليه</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  4
                </span>
                <span>تأكد من أن Publication supabase_realtime يشمل هذا الجدول</span>
              </li>
            </ol>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            يمكنك أيضاً تفعيل Realtime عبر SQL:
          </p>

          <CodeBlock language="sql" code={`-- تفعيل Realtime لجدول tasks
ALTER PUBLICATION supabase_realtime ADD TABLE tasks;

-- التحقق من التفعيل
SELECT * FROM pg_publication_tables
WHERE pubname = 'supabase_realtime';`} />

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800 mt-6">
            <p className="text-yellow-700 dark:text-yellow-200 text-sm font-medium">
              تذكير: Realtime في Supabase Free Plan يدعم حتى 200 اتصال
              متزامن و500,000 حدث شهرياً. تأكد من ذلك عند بناء تطبيقات
              كبيرة.
            </p>
          </div>
        </LessonSection>

        {/* ==================== Section 11: تعليقات الكود الكاملة ==================== */}
        <LessonSection id="complete-code" title="كود المشروع الكامل مع شرح">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            لتسهيل الفهم، إليك ملخصاً لكيفية عمل كل جزء من أجزاء المشروع
            معاً. تفاعلية البيانات تبدأ من Server Component وتنتقل عبر
            Client Components مع الحفاظ على أمان البيانات.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            تدفق البيانات في المشروع
          </h3>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    Server Component (TasksPage)
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                    يجلب البيانات من Supabase على الخادم وينقلها إلى
                    Client Components كـ props
                  </p>
                </div>
              </div>

              <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600 mr-4" />

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    Client Component (TaskList)
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                    يستقبل البيانات كـ initial state ويُشترك في Realtime
                    للحصول على التحديثات الفورية
                  </p>
                </div>
              </div>

              <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600 mr-4" />

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    Server Actions (createTask, updateTaskStatus, deleteTask)
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                    تُستدعى من Client Components لتنفيذ التغييرات على الخادم
                  </p>
                </div>
              </div>

              <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600 mr-4" />

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                  4
                </span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    Realtime (postgres_changes)
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                    يُبلّغ Client Components بأي تغيير يحدث في قاعدة البيانات
                    فوراً عبر WebSocket
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            تأمين المشروع
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            أمان المشروع يعتمد على عدة طبقات:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3">الطبقة</th>
                  <th className="px-4 py-3">الآلية</th>
                  <th className="px-4 py-3">الوظيفة</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-3 font-medium">RLS</td>
                  <td className="px-4 py-3">Row Level Security</td>
                  <td className="px-4 py-3">كل مستخدم يرى بياناته فقط على مستوى قاعدة البيانات</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-3 font-medium">Auth Check</td>
                  <td className="px-4 py-3">supabase.auth.getUser()</td>
                  <td className="px-4 py-3">التحقق من هوية المستخدم في Server Actions</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-3 font-medium">Storage Policies</td>
                  <td className="px-4 py-3">storage.objects policies</td>
                  <td className="px-4 py-3">عزل ملفات المستخدمين على مستوى التخزين</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="px-4 py-3 font-medium">Server Actions</td>
                  <td className="px-4 py-3">'use server'</td>
                  <td className="px-4 py-3">الكود يُشغّل على الخادم فقط — لا يصل للمتصفح</td>
                </tr>
              </tbody>
            </table>
          </div>
        </LessonSection>

        {/* ==================== Section 12: ملخص كل ما تعلمناه ==================== */}
        <LessonSection id="summary" title="ملخص كل ما تعلمناه في مرحلة Supabase">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            مبروك! وصلت إلى نهاية مرحلة Supabase. دعنا نلخص كل ما تعلمناه
            خلال هذه الدروس الستة.
          </p>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-xl">1</span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    ما هو Supabase
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    منصة backend مفتوح المصدر مبنية على PostgreSQL تشمل
                    Database, Auth, Storage, Realtime, Edge Functions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-xl">2</span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    الإعداد مع Next.js
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    إنشاء Server Client و Browser Client، إعداد Middleware
                    لتحديث الجلسات، استخدام @supabase/ssr
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-xl">3</span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    المصادقة (Auth)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    تسجيل دخول/خروج، OAuth providers، Magic Links، إدارة
                    المستخدمين عبر Supabase Auth
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-xl">4</span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    التخزين (Storage)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    رفع وتحميل الملفات، buckets خاصة وعامة، سياسات أمان
                    الملفات، تحويل الصور
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-xl">5</span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    التحديثات الفورية (Realtime)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    اشتراكات WebSocket للتحديثات المباشرة، postgres_changes
                    للجدول، Broadcast وPresence
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-xl">6</span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    المشروع التطبيقي
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    بناء تطبيق مهام كامل يجمع كل ما سبق: CRUD, RLS,
                    Storage, Realtime مع Server Components وServer Actions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 mt-6">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <strong className="text-gray-900 dark:text-white">الخطوة التالية:</strong>{" "}
              في المراحل القادمة سننتقل إلى Clerk للمصادقة المتقدمة، وسنعمل
              على ميزات إضافية مثل الدفع (Payments) والذكاء الاصطناعي. لكن
              المبادئ التي تعلمتها هنا مع Supabase ستبقى أساساً قوياً
              لأي مشروع تعليمي.
            </p>
          </div>
        </LessonSection>

        {/* ==================== Section 13: اختبر فهمك ==================== */}
        <LessonSection id="quiz" title="اختبر فهمك">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            اختبر فهمك لما تعلمته
          </h3>

          <Quiz
            question="في مشروع Task Manager، لماذا نستخدم Server Actions بدلاً من Route Handlers العادية؟"
            options={[
              "Server Actions أسرع في الأداء",
              "Server Actions تسمح باستدعاء الدوال مباشرة من Client Components مع الحفاظ على أن الكود يُشغّل على الخادم",
              "Route Handlers لا تدعم Supabase",
              "Server Actions لا تحتاج مصادقة"
            ]}
            correctAnswer={1}
            explanation={`Server Actions تسمح لك بكتابة دوال تُشغّل على الخادم واستدعائها مباشرة من Client Components. هذا يبسط الكود لأنك لا تحتاج لإنشاء endpoints منفصلة ومعالجة requests/responses يدوياً. الكود يبقى آمناً لأنه يُشغّل على الخادم دائماً.`}
          />

          <Quiz
            question="في جدول tasks، ما هو الغرض من ON DELETE CASCADE في تعريف العمود user_id؟"
            options={[
              "يمنع حذف المستخدم",
              "يحذف جميع مهام المستخدم تلقائياً عند حذف حسابه",
              "يُنشئ نسخة احتياطية من المهام قبل الحذف",
              "يرسل إشعاراً للمستخدم قبل الحذف"
            ]}
            correctAnswer={1}
            explanation={`ON DELETE CASCADE يعني أن عند حذف صف من جدول auth.users (أي حذف المستخدم)، سيُحذف تلقائياً جميع الصفوف المرتبطة في جدول tasks التي تحتوي على نفس user_id. هذا يضمن عدم وجود بيانات يتيمة (orphaned data) في قاعدة البيانات.`}
          />

          <Quiz
            question="كيف نضمن في Supabase Storage أن كل مستخدم يمكنه الوصول لملفاته فقط؟"
            options={[
              "بتشفين الملفات قبل الرفع",
              "باستخدام RLS policies على storage.objects مع التحقق من مسار المجلد",
              "بإخفاء روابط الملفات فقط",
              "باستخدام كلمات مرور لكل ملف"
            ]}
            correctAnswer={1}
            explanation={`نستخدم policies على جدول storage.objects تتحقق من أن المجلد الأول في مسار الملف يطابق auth.uid(). هذا يعني كل مستخدم لديه مجلد باسم user_id الخاص به ولا يمكنه الوصول لمجلدات المستخدمين الآخرين.`}
          />
        </LessonSection>

        {/* ==================== Section 14: التحدي ==================== */}
        <LessonSection id="challenge" title="تحدي المشروع النهائي">
          <Challenge
            title="تحدي: توسيع تطبيق المهام"
            description="الآن بعد أن أنشأت تطبيق المهام الأساسي، حان الوقت لتوسيعه بالميزات التالية:"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    فئات المهام (Task Categories)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    أنشئ جدول categories جديد وربطه بجدول tasks. أضف خيار
                    اختيار الفئة عند إنشاء مهمة جديدة.
                  </p>
                  <CodeBlock language="sql" code={`CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  color TEXT DEFAULT '#3B82F6',
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own categories" ON categories
  FOR ALL USING (auth.uid() = user_id);`} />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    مستويات الأولوية (Priority Levels)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    أضف عمود priority إلى جدول tasks مع قيم: low, medium,
                    high, urgent. عرّض الأولوية في واجهة المستخدم بألوان مختلفة.
                  </p>
                  <CodeBlock language="sql" code={`ALTER TABLE tasks ADD COLUMN priority TEXT
  DEFAULT 'medium'
  CHECK (priority IN ('low', 'medium', 'high', 'urgent'));`} />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    وظيفة البحث (Search)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    أضف حقل بحث يُمكّن المستخدم من البحث في عناوين المهام
                    وأوصافها. استخدم Full-Text Search في PostgreSQL للحصول
                    على نتائج أسرع.
                  </p>
                  <CodeBlock language="sql" code={`-- إنشاء tsvector للبحث النصي الكامل
ALTER TABLE tasks ADD COLUMN search_vector
  tsvector GENERATED ALWAYS AS (
    to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, ''))
  ) STORED;

-- إنشاء فهرس للبحث
CREATE INDEX tasks_search_idx ON tasks USING GIN (search_vector);

-- البحث
SELECT * FROM tasks
WHERE search_vector @@ plainto_tsquery('english', 'keyword');`} />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  +
                </span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    تحدي إضافي: تقويم المهام
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    أضف حقل due_date لتحديد موعد إنجاز المهمة، وقم بعرض
                    المهام في تقويم شهري باستخدام مكتبة مثل react-big-calendar.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800 mt-4">
                <p className="text-green-700 dark:text-green-200 text-sm font-medium">
                  نصيحة: ابدأ بالخطأ البسيط (category) ثم أضف الأولوية
                  ثم البحث. لا تحاول بناء كل شيء دفعة واحدة.
                </p>
              </div>
            </div>
          </Challenge>
        </LessonSection>

        {/* ==================== Section 15: CheatSheet ==================== */}
        <LessonSection id="cheatsheet" title="ملخص سريع شامل لـ Supabase">
          <CheatSheet title="مرجع Supabase الكامل — كل ما تعلمته في مرحلة واحدة">
            <div className="space-y-6">

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  تثبيت الإعداد
                </h4>
                <CodeBlock language="bash" code={`npm install @supabase/supabase-js @supabase/ssr`} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  إعداد العميلين
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                    <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3">النوع</th>
                        <th className="px-4 py-3">الاستيراد</th>
                        <th className="px-4 py-3">المكان</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <td className="px-4 py-3 font-medium">Server Client</td>
                        <td className="px-4 py-3 font-mono text-xs">createServerClient</td>
                        <td className="px-4 py-3">Server Components, Server Actions, Route Handlers</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <td className="px-4 py-3 font-medium">Browser Client</td>
                        <td className="px-4 py-3 font-mono text-xs">createBrowserClient</td>
                        <td className="px-4 py-3">Client Components فقط</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  الاستعلامات الأساسية
                </h4>
                <CodeBlock language="typescript" code={`// جلب كل الصفوف
const { data, error } = await supabase.from('table').select('*')

// جلب بشرط
const { data } = await supabase
  .from('tasks')
  .select('*')
  .eq('status', 'pending')
  .order('created_at', { ascending: false })
  .limit(10)

// إدراج
const { data, error } = await supabase
  .from('tasks')
  .insert({ title: 'New Task', user_id: userId })
  .select()
  .single()

// تحديث
const { error } = await supabase
  .from('tasks')
  .update({ status: 'completed' })
  .eq('id', taskId)

// حذف
const { error } = await supabase
  .from('tasks')
  .delete()
  .eq('id', taskId)`} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  المصادقة
                </h4>
                <CodeBlock language="typescript" code={`// تسجيل الدخول
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
})

// تسجيل الخروج
await supabase.auth.signOut()

// جلب المستخدم الحالي
const { data: { user } } = await supabase.auth.getUser()

// OAuth
const { data } = await supabase.auth.signInWithOAuth({
  provider: 'github'
})`} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  التخزين
                </h4>
                <CodeBlock language="typescript" code={`// رفع ملف
const { data, error } = await supabase.storage
  .from('bucket-name')
  .upload('path/file.jpg', file)

// الحصول على رابط عام
const { data } = supabase.storage
  .from('bucket-name')
  .getPublicUrl('path/file.jpg')

// تحميل ملف
const { data, error } = await supabase.storage
  .from('bucket-name')
  .download('path/file.jpg')

// حذف ملف
const { error } = await supabase.storage
  .from('bucket-name')
  .remove(['path/file.jpg'])`} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Realtime
                </h4>
                <CodeBlock language="typescript" code={`// الاشتراك في تغييرات الجدول
const channel = supabase
  .channel('my-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'tasks' },
    (payload) => {
      console.log('Change:', payload.eventType, payload.new)
    }
  )
  .subscribe()

// إزالة القناة
supabase.removeChannel(channel)`} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  RLS Policies — نماذج شائعة
                </h4>
                <CodeBlock language="sql" code={`-- قراءة فقط للمالك
CREATE POLICY "owner_select" ON table_name
  FOR SELECT USING (auth.uid() = user_id)

-- إنشاء مع التحقق من المالك
CREATE POLICY "owner_insert" ON table_name
  FOR INSERT WITH CHECK (auth.uid() = user_id)

-- تحديث للمالك فقط
CREATE POLICY "owner_update" ON table_name
  FOR UPDATE USING (auth.uid() = user_id)

-- حذف للمالك فقط
CREATE POLICY "owner_delete" ON table_name
  FOR DELETE USING (auth.uid() = user_id)

-- للجميع (قراءة عامة)
CREATE POLICY "public_read" ON table_name
  FOR SELECT USING (true)`} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  أوامر SQL المفيدة
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                      تفعيل RLS
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-mono mt-1">
                      ALTER TABLE t ENABLE ROW LEVEL SECURITY
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                      تفعيل Realtime
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-mono mt-1">
                      ALTER PUBLICATION supabase_realtime ADD TABLE t
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                      إنشاء Index
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-mono mt-1">
                      CREATE INDEX idx ON table(column)
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                      Full Text Search
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-mono mt-1">
                      WHERE tsvector @@ plainto_tsquery('en', q)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CheatSheet>
        </LessonSection>

        {/* ==================== Section 16: نصائح للتوسع ==================== */}
        <LessonSection id="next-steps" title="نصائح للتوسع">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            مشروع Task Manager الذي بنيته هو نقطة انطلاق ممتازة. إليك
            بعض الأفكار لتوسيعه وجعله أكثر احترافية.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">
                ميزات مقترحة
              </h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>- إشعارات push للمهام العاجلة</li>
                <li>- صفحات (pagination) للمهام الكثيرة</li>
                <li>- تصدير المهام إلى CSV أو PDF</li>
                <li>- لوحات (boards) بنمط Kanban</li>
                <li>- تعاون الفريق على المهام المشتركة</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">
                تحسينات تقنية
              </h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>- إضافة caching مع React Cache</li>
                <li>- Optimistic updates لتجربة أسرع</li>
                <li>- Error boundaries معينات</li>
                <li>- اختارات آلية (E2E tests)</li>
                <li>- CI/CD pipeline مع GitHub Actions</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <p className="text-purple-700 dark:text-purple-200 text-sm font-medium">
              تذكر: أفضل طريقة للتعلم هي البناء. لا تكتفِ بمتابعة الدرس —
              حوّل هذا المشروع إلى شيء خاص بك وأضف ميزات جديدة كل أسبوع.
            </p>
          </div>
        </LessonSection>

        {/* ==================== Navigation ==================== */}
        <LessonNavigation
          prevLesson={lesson.prevLesson}
          prevStage={lesson.prevLessonStage}
          nextLesson={lesson.nextLesson}
          nextStage={lesson.nextLessonStage}
        />
      </div>
    </div>
  );
}
