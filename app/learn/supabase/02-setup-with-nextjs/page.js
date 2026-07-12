import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function SupabaseSetup() {
  const lesson = getLessonBySlug("supabase", "02-setup-with-nextjs");
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader stage={lesson.stage} lesson={lesson} lessonIndex={lesson.lessonIndex} totalLessons={lesson.totalLessons} />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* Section 1 */}
        <LessonSection id="why-ssr" title="لماذا @supabase/ssr؟">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في السابق، كان المطورون يستخدمون حزمة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth-helpers-nextjs</code> للتعامل مع المصادقة في تطبيقات Next.js. لكن هذه الحزمة أصبحت <strong className="text-red-600 dark:text-red-400">قديمة ومُهملة (deprecated)</strong> ولا يُنصح باستخدامها في المشاريع الجديدة.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الحزمة الجديدة والرسميّة هي <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">@supabase/ssr</code> وهي الطريقة الصحيحة الوحيدة للتعامل مع Supabase في تطبيقات Next.js App Router.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">المميزات الرئيسية لـ @supabase/ssr</h3>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 mb-4">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✦</span>
                <span><strong>جلسات مبنية على Cookies (Cookie-based sessions):</strong> بدلاً من استخدام <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">localStorage</code> الذي لا يعمل في Server Components، يتم تخزين الجلسات في cookies آمنة.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✦</span>
                <span><strong>تدفق PKCE بشكل افتراضي (PKCE flow by default):</strong> طريقة آمنة للمصادقة تعتمد على تبادل أكواد بين العميل والخادم.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✦</span>
                <span><strong>تعمل مع Server Components وServer Actions وRoute Handlers:</strong> تكامل كامل مع جميع أجزاء Next.js App Router.</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            باختصار، إذا كنت تبدأ مشروع جديد مع Next.js App Router، فأنت تحتاج فقط حزمة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">@supabase/ssr</code> ولا حاجة لأي حزمة أخرى.
          </p>
        </LessonSection>

        {/* Section 2 */}
        <LessonSection id="installation" title="التثبيت">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            للبدء، تحتاج إلى تثبيت حزمتين في مشروعك: حزمة Supabase الأساسية وحزمة SSR المخصصة لـ Next.js.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            قم بتشغيل الأمر التالي في جذر مشروع Next.js الخاص بك:
          </p>

          <CodeBlock language="bash" code={`npm install @supabase/supabase-js @supabase/ssr`} />

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-4">
            <p className="text-amber-800 dark:text-amber-300 text-sm">
              <strong>ملاحظة:</strong> تأكد من أنك تثبّت هذه الحزم في جذر المشروع (المجلد الذي يحتوي على <code className="bg-amber-100 dark:bg-amber-800 px-1 py-0.5 rounded text-xs font-mono">package.json</code>) وليس في مجلد فرعي.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">التحقق من التثبيت</h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            بعد التثبيت، يمكنك التحقق من نجاح العملية بفحص ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">package.json</code> وتأكد أن الحزمتين موجودتان في قسم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">dependencies</code>:
          </p>

          <CodeBlock language="json" code={`{
  "dependencies": {
    "@supabase/supabase-js": "^2.x.x",
    "@supabase/ssr": "^0.x.x",
    "next": "14.x.x",
    "react": "^18.x.x"
  }
}`} />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3 mb-3">
            يمكنك أيضاً تشغيل أمر التحقق من التثبيت:
          </p>

          <CodeBlock language="bash" code={`npm ls @supabase/supabase-js @supabase/ssr`} />

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">ماذا تثبّت؟</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3">الحزمة</th>
                  <th className="px-4 py-3">الوظيفة</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-3 font-mono text-sm">@supabase/supabase-js</td>
                  <td className="px-4 py-3">المكتبة الأساسية للتعامل مع Supabase API</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="px-4 py-3 font-mono text-sm">@supabase/ssr</td>
                  <td className="px-4 py-3">تعليمة مخصصة للتعامل مع Cookies والجلسات في بيئة SSR</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            الحزمة الأولى (<code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">@supabase/supabase-js</code>) هي جوهر التعامل مع Supabase، أما الحزمة الثانية (<code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">@supabase/ssr</code>) فهي توفر طرقاً مخصصة لإنشاء عميل (client) يتعامل مع cookies بدلاً من localStorage.
          </p>
        </LessonSection>

        {/* Section 3 */}
        <LessonSection id="env-variables" title="متغيرات البيئة">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            قبل إنشاء عميل Supabase، تحتاج إلى تكوين متغيرات البيئة التي تحتوي على بيانات الاتصال بمشروعك في Supabase. أنشئ ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">.env.local</code> في جذر مشروعك:
          </p>

          <CodeBlock language="bash" code={`NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key`} />

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">ما هي هذه المتغيرات؟</h3>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">NEXT_PUBLIC_SUPABASE_URL</code>
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                هو رابط مشروعك في Supabase. يمكنك العثور عليه في لوحة التحكم (Dashboard) تحت قسم Settings &gt; API. يبدأ عادة بـ <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">https://xxxxx.supabase.co</code>.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                هو المفتاح العام (anon key) لمشروعك. يمكنك العثور عليه في نفس القسم. هذا المفتاح آمن للعرض في المتصفح لأنه يخضع لسياسات Row Level Security.
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5 mt-4">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">لماذا نستخدم NEXT_PUBLIC؟</h4>
            <p className="text-green-700 dark:text-green-400 text-sm leading-relaxed">
              في Next.js، المتغيرات التي تبدأ بـ <code className="bg-green-100 dark:bg-green-800 px-1 py-0.5 rounded text-xs font-mono">NEXT_PUBLIC_</code> تكون متاحة في كل من الخادم والمتصفح. هذا آمن في حالة Supabase لأن المفتاح العام (anon key) مصمم ليكون مكشوفاً — هو ليس مفتاح الخدمة (service role key) الذي يجب أن يبقى سرياً دائماً.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
            <p className="text-red-700 dark:text-red-400 text-sm">
              <strong>تحذير مهم:</strong> لا تستخدم <code className="bg-red-100 dark:bg-red-800 px-1 py-0.5 rounded text-xs font-mono">SUPABASE_SERVICE_ROLE_KEY</code> في ملف <code className="bg-red-100 dark:bg-red-800 px-1 py-0.5 rounded text-xs font-mono">.env.local</code> مع بادئة <code className="bg-red-100 dark:bg-red-800 px-1 py-0.5 rounded text-xs font-mono">NEXT_PUBLIC_</code>. مفتاح الخدمة يتجاوز جميع سياسات الأمان ويجب أن يُستخدم فقط في الخادم (server-side) في Route Handlers الآمنة.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">كيف تحصل على هذه القيم؟</h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            اتبع الخطوات التالية للحصول على بيانات الاتصال من لوحة تحكم Supabase:
          </p>

          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-indigo-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>الخطوة 1:</strong> افتح لوحة تحكم Supabase على <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">https://supabase.com/dashboard</code> واختر مشروعك.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-indigo-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>الخطوة 2:</strong> اذهب إلى قسم <strong>Settings</strong> ثم <strong>API</strong> في الشريط الجانبي.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-indigo-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>الخطوة 3:</strong> ستجد <strong>Project URL</strong> في أعلى الصفحة — انسخه وضعه في <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">NEXT_PUBLIC_SUPABASE_URL</code>.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-indigo-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>الخطوة 4:</strong> تحت قسم <strong>Project API keys</strong> ستجد مفتاح <strong>anon public</strong> — انسخه وضعه في <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* Section 4 */}
        <LessonSection id="server-client" title="إنشاء Server Client">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Server Client هو العميل الذي نستخدمه في <strong>Server Components</strong> و<strong>Server Actions</strong> و<strong>Route Handlers</strong>. يتعامل مع cookies عبر واجهة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">cookies()</code> من Next.js.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            أنشئ الملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">utils/supabase/server.ts</code> (أو <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">server.js</code> إذا كنت لا تستخدم TypeScript):
          </p>

          <CodeBlock language="typescript" code={`import { createServerClient, type CookieOptions } from '@supabase/ssr'
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
            // The setAll method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // sessions.
          }
        },
      },
    }
  )
}`} />

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">شرح الكود</h3>

          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>السطر 1:</strong> نستورد <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">createServerClient</code> من حزمة <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">@supabase/ssr</code> وهو الدالة التي تنشئ عميل Supabase مخصص للبيئة الخادمية.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>السطر 2:</strong> نستورد <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">cookies()</code> من <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">next/headers</code> وهي الدالة التي تتيح לנו الوصول إلى كاكيز الطلب الحالي.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>الدالة getAll:</strong> تُرجع جميع الكاكيز المخزنة. تُستخدم لقراءة جلسة المستخدم الحالية.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>الدالة setAll:</strong> تُستخدم لتعيين أو تحديث الكاكيز. نضعها في try/catch لأن في بعض الحالات (مثل Server Components المُهيأة مسبقاً) لا يمكن تغيير الكاكيز مباشرة — لكن هذا لا يشكل مشكلة لأن Middleware يتكفل بتحديث الجلسة.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mt-4">
            <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">
              <strong>متى نستخدم Server Client؟</strong> في أي مكان تحتاج فيه للوصول إلى بيانات المستخدم أو قاعدة البيانات من الخادم: Server Components، Server Actions، و Route Handlers.
            </p>
          </div>
        </LessonSection>

        {/* Section 5 */}
        <LessonSection id="browser-client" title="إنشاء Browser Client">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Browser Client هو العميل الذي نستخدمه في <strong>Client Components</strong> فقط. يُستخدم في الحالات التي تحتاج تفاعل مباشر مع المستخدم مثل الاشتراكات الحية (realtime subscriptions) وتقديم النماذج (form submissions).
          </p>

          <p className="text-gray-700 dark:bg-gray-300 leading-relaxed mb-3">
            أنشئ الملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">utils/supabase/client.ts</code> (أو <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">client.js</code>):
          </p>

          <CodeBlock language="typescript" code={`import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}`} />

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">الفرق بين Server Client و Browser Client</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3">الميزة</th>
                  <th className="px-4 py-3">Server Client</th>
                  <th className="px-4 py-3">Browser Client</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-3 font-semibold">البيئة</td>
                  <td className="px-4 py-3">الخادم (Server)</td>
                  <td className="px-4 py-3">المتصفح (Browser)</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-3 font-semibold">التخزين</td>
                  <td className="px-4 py-3">Cookies</td>
                  <td className="px-4 py-3">localStorage + Cookies</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-3 font-semibold">الاستخدام</td>
                  <td className="px-4 py-3">Server Components, Server Actions, Route Handlers</td>
                  <td className="px-4 py-3">Client Components فقط</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="px-4 py-3 font-semibold">الأمان</td>
                  <td className="px-4 py-3">آمن تماماً — لا يصل للمتصفح</td>
                  <td className="px-4 py-3">المفتاح آمن بسبب RLS</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-4">
            <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
              <strong>تذكّر:</strong> لا تستخدم Browser Client في Server Components! إذا حاولت ذلك، ستحصل على خطأ لأن Browser Client يعتمد على <code className="bg-amber-100 dark:bg-amber-800 px-1 py-0.5 rounded text-xs font-mono">localStorage</code> который غير موجود في بيئة الخادم.
            </p>
          </div>
        </LessonSection>

        {/* Section 6 */}
        <LessonSection id="middleware" title="Middleware للحفاظ على الجلسة">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الـ Middleware في Next.js يُشغّل قبل كل طلب (request). نستخدمه مع Supabase لضمان بقاء جلسة المستخدم محدّثة دائماً. بدون الـ Middleware، قد تنتهي صلاحية الجلسة (token expiration) بدون أن تلاحظ.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            أنشئ الملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">middleware.ts</code> في جذر مشروعك (بجوار <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">app/</code>):
          </p>

          <CodeBlock language="typescript" code={`import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  await supabase.auth.getSession()

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}`} />

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">كيف يعمل؟</h3>

          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-green-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>1.</strong> يُنشئ الـ Middleware عميل Supabase يستخدم كاكيز الطلب الحالي للقراءة والكتابة.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-green-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>2.</strong> عند استدعاء <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">getSession()</code>، يتحقق Supabase من صلاحية الـ JWT token. إذا كان قارباً على الانتهاء، يُحدّثه تلقائياً.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-green-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>3.</strong> إذا تم تحديث الـ token، يقوم الـ Middleware بتعيين الكاكيز الجديدة في استجابة الـ Response (supabaseResponse).
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border-r-4 border-green-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>4.</strong> الـ matcher يضمن أن الـ Middleware لا يعمل على الملفات الثابتة (static files) مما يحسّن الأداء.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
            <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
              <strong>بمجرد إضافة الـ Middleware:</strong> كل طلب للموقع سيمر عبره، مما يضمن أن جلسة المستخدم دائماً محدّثة وصالحة. لن تحتاج للقلق بشأن انتهاء صلاحية الجلسة أبداً.
            </p>
          </div>
        </LessonSection>

        {/* Section 7 */}
        <LessonSection id="server-component-usage" title="استخدام في Server Component">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            بعد إعداد كل ما سبق، يمكنك الآن استخدام Supabase مباشرة في Server Components. هذه هي الطريقة الأكثر شيوعاً لجلب البيانات في تطبيقات Next.js.
          </p>

          <CodeBlock language="tsx" code={`import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const { data: posts } = await supabase.from('posts').select('*')

  return (
    <div>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}`} />

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">نقاط مهمة</h3>

          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <span className="text-blue-500 mt-0.5 font-bold">1.</span>
              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  الدالة <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">createClient()</code> هنا هي <strong>async</strong> ويجب استخدام <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">await</code> معها لأنها تحتاج للوصول إلى الكاكيز.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <span className="text-blue-500 mt-0.5 font-bold">2.</span>
              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  جميع استعلامات Supabase هنا تعمل على الخادم مباشرة — لا يتم إرسال أي طلب من المتصفح للخادم الخارجي. هذا يحسّن الأداء والأمان.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <span className="text-blue-500 mt-0.5 font-bold">3.</span>
              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  لن تحتاج لـ <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">useEffect</code> أو أي State Management لجلب البيانات في Server Components.
                </p>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* Section 8 */}
        <LessonSection id="client-component-usage" title="استخدام في Client Component">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في بعض الحالات تحتاج للتعامل مع Supabase من المتصفح مباشرة، مثل الاشتراكات الحية (Realtime) أو معالجة أحداث المستخدم. هنا نستخدم Browser Client.
          </p>

          <CodeBlock language="tsx" code={`'use client'

import { createClient } from '@/utils/supabase/client'

export default function ClientComponent() {
  const supabase = createClient()

  // يمكن استخدام supabase هنا
  // مثال: الاشتراك في تغييرات مباشرة
  // supabase.channel('posts')
  //   .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, (payload) => {
  //     console.log('Change received!', payload)
  //   })
  //   .subscribe()

  return <div>Client Component with Supabase</div>
}`} />

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-4">
            <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
              <strong>لا تنسَ:</strong> لا تحتاج لـ <code className="bg-amber-100 dark:bg-amber-800 px-1 py-0.5 rounded text-xs font-mono">await</code> مع Browser Client لأن الدالة <code className="bg-amber-100 dark:bg-amber-800 px-1 py-0.5 rounded text-xs font-mono">createClient()</code> هنا ليست async.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">متى نستخدم Browser Client؟</h3>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>الاشتراك في التغييرات الحية (Realtime subscriptions)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>تقديم النماذج (Form submissions)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>رفع الملفات (File uploads)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>أي عملية تحتاج تفاعل مباشر مع المستخدم</span>
            </li>
          </ul>
        </LessonSection>

        {/* Section 9 */}
        <LessonSection id="common-mistakes" title="الأخطاء الشائعة">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            إليك أكثر الأخطاء شيوعاً التي يقع فيها المطورون عند إعداد Supabase مع Next.js:
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-5">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                <span className="text-lg">❌</span>
                استخدام Browser Client في بيئة الخادم
              </h4>
              <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed mb-2">
                الخطأ: استخدام <code className="bg-red-100 dark:bg-red-800 px-1 py-0.5 rounded text-xs font-mono">createBrowserClient</code> في Server Component.
              </p>
              <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed">
                الحل: استخدم <code className="bg-red-100 dark:bg-red-800 px-1 py-0.5 rounded text-xs font-mono">createClient</code> من <code className="bg-red-100 dark:bg-red-800 px-1 py-0.5 rounded text-xs font-mono">utils/supabase/server</code> في Server Components.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-5">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                <span className="text-lg">❌</span>
                نسيان إضافة Middleware
              </h4>
              <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed mb-2">
                الخطأ: عدم إنشاء ملف <code className="bg-red-100 dark:bg-red-800 px-1 py-0.5 rounded text-xs font-mono">middleware.ts</code>.
              </p>
              <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed">
                الحل: أضف Middleware كما شرحنا سابقاً. بدونه، ستنتهي صلاحية الجلسة بصمت وستواجه أخطاء غير متوقعة.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-5">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                <span className="text-lg">❌</span>
                استخدام الحزمة القديمة auth-helpers
              </h4>
              <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed mb-2">
                الخطأ: تثبيت واستخدام <code className="bg-red-100 dark:bg-red-800 px-1 py-0.5 rounded text-xs font-mono">@supabase/auth-helpers-nextjs</code>.
              </p>
              <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed">
                الحل: استبدلها بـ <code className="bg-red-100 dark:bg-red-800 px-1 py-0.5 rounded text-xs font-mono">@supabase/ssr</code>. الحزمة القديمة مهملة ولن تتلقى تحديثات.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-5">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                <span className="text-lg">❌</span>
                عدم ضبط الكاكيز بشكل صحيح في Middleware
              </h4>
              <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed mb-2">
                الخطأ: نسيان تحديث الكاكيز في كلا الاتجاهين (request و response) في الـ Middleware.
              </p>
              <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed">
                الحل: انسخ كود الـ Middleware كما هو من هذا الدرس. التحديث في كلا الاتجاهين ضروري لعملية PKCE.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* Section 10 */}
        <LessonSection id="summary" title="ملخص + تقييم">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            تعلّمنا في هذا الدرس كيفية إعداد Supabase بشكل صحيح مع Next.js App Router. إليك ملخص ما تعلّمناه:
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 mb-6">
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>✅ نستخدم حزمة <code className="bg-blue-100 dark:bg-blue-800 px-1 py-0.5 rounded text-xs font-mono">@supabase/ssr</code> بدلاً من auth-helpers القديمة</li>
              <li>✅ نُنشئ Server Client في <code className="bg-blue-100 dark:bg-blue-800 px-1 py-0.5 rounded text-xs font-mono">utils/supabase/server.ts</code> للاستخدام في Server Components</li>
              <li>✅ نُنشئ Browser Client في <code className="bg-blue-100 dark:bg-blue-800 px-1 py-0.5 rounded text-xs font-mono">utils/supabase/client.ts</code> للاستخدام في Client Components</li>
              <li>✅ نُضيف Middleware في جذر المشروع لتحديث الجلسة مع كل طلب</li>
              <li>✅ نستخدم متغيرات البيئة مع بادئة NEXT_PUBLIC لتخزين بيانات الاتصال</li>
            </ul>
          </div>

          {/* Quiz 1 */}
          <Quiz
            question="لماذا نستخدم @supabase/ssr بدلاً من @supabase/auth-helpers-nextjs؟"
            options={[
              "لأنها أسرع في الأداء",
              "لأن auth-helpers أصبحت قديمة ومُهملة (deprecated) و @supabase/ssr هي البديل الرسمي للـ App Router",
              "لأنها أصغر في الحجم",
              "لأنها تدعم TypeScript بشكل أفضل"
            ]}
            correctAnswer={1}
            explanation={`حزمة @supabase/auth-helpers-nextjs أصبحت مُهملة (deprecated) ولم تعد تتلقى تحديثات. حزمة @supabase/ssr هي البديل الرسمي من Supabase لتطبيقات Next.js App Router، وتوفر دعماً أفضل لـ Server Components والجلسات المبنية على Cookies.`}
          />

          {/* Quiz 2 */}
          <Quiz
            question="ما هي الكاكيز التي يجب أن تبدأ بها متغيرات البيئة لتكون متاحة في المتصفح والخادم؟"
            options={[
              "SUPABASE_",
              "NEXT_PUBLIC_",
              "PUBLIC_",
              "BROWSER_"
            ]}
            correctAnswer={1}
            explanation={`في Next.js، المتغيرات التي تبدأ بـ NEXT_PUBLIC_ تتاح في كل من الخادم والمتصفح. هذا ضروري لأن Supabase anon key يجب أن يكون متاحاً في المتصفح (لكنه آمن بسبب Row Level Security).`}
          />

          {/* Quiz 3 */}
          <Quiz
            question="في أي ملف نُنشئ Middleware لتحديث الجلسة؟"
            options={[
              "app/layout.tsx",
              "utils/supabase/middleware.ts",
              "middleware.ts في جذر المشروع",
              "pages/_middleware.ts"
            ]}
            correctAnswer={2}
            explanation={`ملف Middleware يجب أن يكون في جذر المشروع (بجوار مجلد app/) وليس داخل مجلد معين. اسم الملف هو middleware.ts (أو middleware.js) وسيتم تشغيله تلقائياً قبل كل طلب.`}
          />

          {/* Quiz 4 */}
          <Quiz
            question="متى نستخدم Browser Client بدلاً من Server Client؟"
            options={[
              "في جميع حالات جلب البيانات",
              "في Client Components فقط (Realtime, Forms, etc.)",
              "في Route Handlers",
              "في Server Actions"
            ]}
            correctAnswer={1}
            explanation={`Browser Client يُستخدم فقط في Client Components حيث نحتاج للتفاعل المباشر مع المستخدم مثل الاشتراكات الحية (Realtime) ومعالجة النماذج (Forms). في كل الأماكن الأخرى (Server Components, Server Actions, Route Handlers) نستخدم Server Client.`}
          />

          {/* Challenge */}
          <Challenge
            title="تحدي: إعداد Supabase كامل في مشروع Next.js"
            description="أنشئ مشروع Next.js جديد وقم بإعداد Supabase بالكامل مع الكلاينتين (Server و Browser) والـ Middleware."
          >
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">الخطوات المطلوبة:</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>أنشئ مشروع Next.js جديد بـ <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">npx create-next-app@latest</code></li>
                <li>ثبّت الحزم المطلوبة: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">@supabase/supabase-js</code> و <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">@supabase/ssr</code></li>
                <li>أنشئ ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">.env.local</code> بإعدادات مشروعك</li>
                <li>أنشئ Server Client في <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">utils/supabase/server.ts</code></li>
                <li>أنشئ Browser Client في <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">utils/supabase/client.ts</code></li>
                <li>أنشئ Middleware في جذر المشروع</li>
                <li>اختبر في صفحة Server Component تجلب بيانات من جدول في Supabase</li>
              </ol>
            </div>
          </Challenge>

          {/* CheatSheet */}
          <CheatSheet title="ملخص سريع: هيكل الملفات واستخدام كل عميل">
            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">هيكل الملفات</h4>
                <CodeBlock language="text" code={`my-app/
├── .env.local
├── middleware.ts
├── utils/
│   └── supabase/
│       ├── server.ts    ← Server Client
│       └── client.ts    ← Browser Client
├── app/
│   └── page.tsx         ← Server Component (الافتراضي)
└── components/
    └── MyComponent.tsx  ← Client Component ('use client')`} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">متى نستخدم كل عميل؟</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                    <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3">المكان</th>
                        <th className="px-4 py-3">العميل</th>
                        <th className="px-4 py-3">الاستيراد</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <td className="px-4 py-3">Server Component</td>
                        <td className="px-4 py-3">Server Client</td>
                        <td className="px-4 py-3 font-mono text-xs">@/utils/supabase/server</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <td className="px-4 py-3">Server Action</td>
                        <td className="px-4 py-3">Server Client</td>
                        <td className="px-4 py-3 font-mono text-xs">@/utils/supabase/server</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <td className="px-4 py-3">Route Handler</td>
                        <td className="px-4 py-3">Server Client</td>
                        <td className="px-4 py-3 font-mono text-xs">@/utils/supabase/server</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="px-4 py-3">Client Component</td>
                        <td className="px-4 py-3">Browser Client</td>
                        <td className="px-4 py-3 font-mono text-xs">@/utils/supabase/client</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">أوامر سريعة</h4>
                <CodeBlock language="bash" code={`# التثبيت
npm install @supabase/supabase-js @supabase/ssr

# ملفات الإعداد (أنشئها يدوياً)
utils/supabase/server.ts
utils/supabase/client.ts
middleware.ts
.env.local`} />
              </div>
            </div>
          </CheatSheet>

        </LessonSection>

        <LessonNavigation prevLesson={lesson.prevLesson} prevStage={lesson.prevLessonStage} nextLesson={lesson.nextLesson} nextStage={lesson.nextLessonStage} />
      </div>
    </div>
  );
}
