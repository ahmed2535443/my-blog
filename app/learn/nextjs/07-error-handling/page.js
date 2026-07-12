import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ErrorHandling() {
  const lessonInfo = getLessonBySlug("nextjs", "07-error-handling");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        <LessonSection title="لماذا معالجة الأخطاء مهمة؟">
          <p>
            في تطبيقات الـ Production، لا يمكننا الاعتماد على أن كل شيء سيعمل بشكل صحيح دائماً.
            قواعد البيانات قد تنفصل، الشبكة قد تقطع، والمستخدمون قد يدخلون روابط خاطئة.
            بدون معالجة مناسبة للأخطاء، سيواجه المستخدم شاشة بيضاء فارغة — وهذا تجربة مستخدم سيئة جداً.
          </p>
          <p>
            Next.js يوفر لنا نظاماً متكاملاً لمعالجة الأخطاء عبر ملفات اتفاقية (File Conventions)
            تتيح لنا التقاط الأخطاء وعرض واجهات مستخدم ودية بدل الشاشات البيضاء.
          </p>
          <p>
            معالجة الأخطاء الجيدة تحقق عدة أهداف:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>تحسين تجربة المستخدم بعرض رسائل واضحة ومفيدة</li>
            <li>تيسير عملية تشخيص الأخطاء عبر التسجيل (Logging)</li>
            <li>منع انهيار التطبيق بالكلي</li>
            <li>توفير آليات استرداد للمستخدم</li>
          </ul>
        </LessonSection>

        <LessonSection title="ملف error.js — حدود الأخطاء (Error Boundaries)">
          <p>
            ملف <code>error.js</code> هو اتفاقية ملفات في Next.js تُستخدم لإنشاء حدود أخطاء (Error Boundaries)
            التي تلتقط الأخطاء في أقسام المسارات الفرعية. عندما يحدث خطأ في صفحة ما،
            يلتقطه <code>error.js</code> ويعرض واجهة بديلة بدلاً من تعطل التطبيق بالكامل.
          </p>
          <p>
            <strong>مهم جداً:</strong> يجب أن يكون ملف <code>error.js</code> مكون عميل (Client Component)
            لأنه يعتمد على حالة الخطأ المحلي.
          </p>
          <CodeBlock
            code={`// app/dashboard/error.js
"use client";

export default function DashboardError({ error, reset }) {
  return (
    <div className="error-container">
      <h2>حدث خطأ غير متوقع!</h2>
      <p>عذراً، واجهنا مشكلة في تحميل لوحة التحكم.</p>
      <p className="error-details">{error.message}</p>
      <button onClick={() => reset()}>
        حاول مرة أخرى
      </button>
    </div>
  );
}`}
            language="jsx"
          />
          <p>
            دالة <code>reset</code> التي يستقبلها المكون تقوم بإعادة محاولة تحميل آخر جزء في الـ Segment
            الذي حدث فيه الخطأ. هذا يعيد تحميل المكون الذي سبب الخطأ.
          </p>
        </LessonSection>

        <LessonSection title="مثال بسيط — صفحة خطأ تفاعلية">
          <p>
            لننشئ صفحة خطأ تفاعلية توفر للمستخدم رسائل واضحة وخيارات استرداد:
          </p>
          <CodeBlock
            code={`// app/blog/error.js
"use client";

import { useEffect } from "react";

export default function BlogError({ error, reset }) {
  useEffect(() => {
    console.error("Blog error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <div className="text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        خطأ في تحميل المقالات
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        نعتذر، حدثت مشكلة أثناء تحميل صفحة المقالات.
        يرجى المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          حاول مرة أخرى
        </button>
        <a
          href="/"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          الصفحة الرئيسية
        </a>
      </div>
    </div>
  );
}`}
            language="jsx"
          />
          <p>
            هذا المكون يعرض أيقونة تحذير، ورسالة خطأ واضحة، وزرين:
            واحد لإعادة المحاولة (يستخدم <code>reset</code>)، وآخر للعودة للصفحة الرئيسية.
          </p>
        </LessonSection>

        <LessonSection title="ملف not-found.js — صفحة 404 المخصصة">
          <p>
            ملف <code>not-found.js</code> هو اتفاقية ملفات تُستخدم لإنشاء صفحة مخصصة
            لعرض رسالة "الصفحة غير موجودة" عندما يحاول المستخدم الوصول إلى مسار غير موجود.
          </p>
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
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى عنوان آخر.
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
          <p>
            يمكنك أيضاً إنشاء صفحات <code>not-found.js</code> خاصة بأقسام معينة داخل المسارات الفرعية:
          </p>
          <CodeBlock
            code={`// app/blog/not-found.js
export default function BlogNotFound() {
  return (
    <div className="p-8 text-center">
      <h2>المقال غير موجود</h2>
      <p>يبدو أن المقال الذي تبحث عنه لم يعد متاحاً.</p>
      <a href="/blog">العودة إلى قائمة المقالات</a>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="دالة notFound() — تفعيل صفحة 404 يدوياً">
          <p>
            يمكنك استدعاء الدالة <code>notFound()</code> من داخل المكونات الخادمية (Server Components)
            أو إجراءات الخادم (Server Actions) لإظهار صفحة الـ 404 المخصصة.
          </p>
          <CodeBlock
            code={`// app/blog/[slug]/page.js
import { notFound } from "next/navigation";

async function getPost(slug) {
  const res = await fetch(\`https://api.example.com/posts/\${slug}\`);
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound(); // يعرض not-found.js
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`}
            language="jsx"
          />
          <p>
            عندما تستدعي <code>notFound()</code>، يتم رمي خطأ داخلي يلتقطه Next.js
            ويعرض أقرب صفحة <code>not-found.js</code> في شجرة المسارات.
          </p>
        </LessonSection>

        <LessonSection title="ملف global-error.js — معالجة أخطاء التخطيط الجذري">
          <p>
            ملف <code>global-error.js</code> يلتقط الأخطاء التي تحدث في ملف <code>layout.js</code> الجذري
            (root layout). هذا الملف يلف التطبيق بالكامل، لذلك لا يمكنه الاعتماد على أي مكونات عادية.
          </p>
          <CodeBlock
            code={`// app/global-error.js
"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            خطأ عام في التطبيق
          </h2>
          <p className="text-gray-600 mb-6">
            حدث خطأ غير متوقع في التطبيق بالكامل.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            إعادة تحميل التطبيق
          </button>
        </div>
      </body>
    </html>
  );
}`}
            language="jsx"
          />
          <p>
            لاحظ أن <code>global-error.js</code> يجب أن يحتوي على علامتي <code>&lt;html&gt;</code> و <code>&lt;body&gt;</code>
            الخاصة به لأنه يحل محل التخطيط الجذري بالكامل عند حدوث الخطأ.
          </p>
        </LessonSection>

        <LessonSection title="نمط معالجة الأخطاء (Error Handling Pattern)">
          <p>
            يتفاعل نظام معالجة الأخطاء في Next.js على شكل طبقات متتالية:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><code>error.js</code> — يلتقط الأخطاء في أقسام المسارات الفرعية (أبناء التخطيط)</li>
            <li><code>global-error.js</code> — يلتقط الأخطاء في التخطيط الجذري (root layout)</li>
            <li><code>not-found.js</code> — يعرض صفحة مخصصة عند عدم العثور على المسار</li>
          </ul>
          <CodeBlock
            code={`// هيكل شجرة الأخطاء:
app/
├── layout.js          ← يلفه global-error.js
├── global-error.js    ← يلتقط أخطاء layout.js الجذري
├── page.js
├── error.js           ← يلتقط أخطاء page.js الرئيسية
├── dashboard/
│   ├── layout.js      ← يلفه error.js الأقرب له
│   ├── page.js
│   ├── error.js       ← يلتقط أخطاء هذا القسم
│   └── settings/
│       ├── page.js
│       └── error.js   ← يلتقط أخطاء settings فقط`}
            language="jsx"
          />
          <p>
            عندما يحدث خطأ، يبحث Next.js عن أقرب <code>error.js</code> في شجرة المسارات
            ويرسمه كواجهة بديلة. إذا لم يجد، ينتقل إلى <code>global-error.js</code>.
          </p>
        </LessonSection>

        <LessonSection title="مثال عملي — تطبيق مدونة مع معالجة أخطاء متكاملة">
          <p>
            لننشئ مثالاً عملياً يجمع كل ما تعلمناه في تطبيق مدونة:
          </p>
          <CodeBlock
            code={`// app/blog/[slug]/page.js
import { notFound } from "next/navigation";

async function getPost(slug) {
  try {
    const res = await fetch(\`https://api.example.com/posts/\${slug}\`, {
      next: { revalidate: 3600 },
    });

    if (res.status === 404) {
      notFound(); // يعرض not-found.js
    }

    if (!res.ok) {
      throw new Error(\`فشل جلب المقال: \${res.status}\`);
    }

    return res.json();
  } catch (error) {
    throw error; // يعرض error.js
  }
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <time className="text-gray-500">{post.date}</time>
      <div className="mt-6 leading-8" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// app/blog/error.js
"use client";

export default function BlogError({ error, reset }) {
  return (
    <div className="text-center p-12">
      <h2 className="text-2xl font-bold mb-4">خطأ في قسم المقالات</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        إعادة المحاولة
      </button>
    </div>
  );
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// app/blog/not-found.js
export default function BlogNotFound() {
  return (
    <div className="text-center p-12">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <h2 className="text-2xl mt-4">المقال غير موجود</h2>
      <p className="text-gray-600 mt-2">
        المقال الذي تبحث عنه ربما حُذف أو لم ينشر بعد.
      </p>
      <a href="/blog" className="text-blue-600 mt-4 inline-block">
        العودة إلى المقالات
      </a>
    </div>
  );
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// app/global-error.js
"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            خطأ حرج في التطبيق
          </h2>
          <p className="mb-6">يرجى إعادة تحميل الصفحة أو المحاولة لاحقاً.</p>
          <button
            onClick={reset}
            className="bg-red-600 text-white px-8 py-3 rounded-lg"
          >
            إعادة التحميل
          </button>
        </div>
      </body>
    </html>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="إعادة التوجيه بعد الخطأ (Redirect after Error)">
          <p>
            أحياناً نريد إعادة توجيه المستخدم إلى صفحة خطأ مخصصة بدلاً من عرض واجهة الخطأ مباشرة.
            يمكننا استخدام دالة <code>redirect()</code> في كتل الـ catch:
          </p>
          <CodeBlock
            code={`// app/dashboard/page.js
import { redirect } from "next/navigation";

async function getDashboardData() {
  try {
    const res = await fetch("https://api.example.com/dashboard");
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch (error) {
    redirect("/error/dashboard");
  }
}

export default async function DashboardPage() {
  const data = await getDashboardData();
  return <div>{/* عرض البيانات */}</div>;
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// app/error/dashboard/page.js
export default function DashboardErrorPage() {
  return (
    <div className="text-center p-12">
      <h2>تعذر تحميل لوحة التحكم</h2>
      <p>يرجى المحاولة مرة أخرى لاحقاً.</p>
      <a href="/dashboard">إعادة المحاولة</a>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>
            فهم آلية عمل معالجة الأخطاء خلف الكواليس يساعدنا على كتابة كود أكثر فعالية:
          </p>
          <CodeBlock
            code={`// تسلسل أحداث معالجة الخطأ:

// 1. يحدث خطأ (مثال: fetch يفشل)
const data = await fetch("https://api.example.com/nonexistent");

// 2. يتم رمي الخطأ في المكون
if (!res.ok) throw new Error("Not Found");

// 3. React يلتقط الخطأ ويبحث عن أقرب Error Boundary
//    (أقرب ملف error.js في شجرة المسارات)

// 4. يتم عرض مكون الخطأ البديل مع:
//    - error: كائن الخطأ الذي تم رميه
//    - reset: دالة لإعادة محاولة تحميل المكون

// 5. إذا لم يُجد error.js، ينتقل إلى global-error.js

// 6. إذا لم يُجد global-error.js، يعرض الخطأ الافتراضي`}
            language="jsx"
          />
          <p>
            في بيئة التطوير (Development)، يعرض Next.js شاشة خطأ تفصيلية مع تتبع المكدّس (Stack Trace).
            في بيئة الإنتاج (Production)، تُعرض واجهة الخطأ المخصصة بدلاً منها.
          </p>
        </LessonSection>

        <LessonSection title="الأخطاء الشائعة في معالجة الأخطاء">
          <p>
            إليك أكثر الأخطاء شيوعاً عند التعامل مع الأخطاء في Next.js:
          </p>
          <CodeBlock
            code={`// ❌ خطأ 1: نسيان "use client" في error.js
// هذا سيسبب خطأ لأن error.js يحتاج到 حالة محلية
export default function Error({ error, reset }) {
  return <div>Error</div>;
}

// ✅ الصحيح:
"use client";
export default function Error({ error, reset }) {
  return <div>Error</div>;
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// ❌ خطأ 2: عدم توفير آلية استرداد
"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <p>حدث خطأ</p>
      {/* لا يوجد زر retry أو رابط للعودة */}
    </div>
  );
}

// ✅ الصحيح:
"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <p>حدث خطأ: {error.message}</p>
      <button onClick={reset}>حاول مرة أخرى</button>
      <a href="/">العودة للرئيسية</a>
    </div>
  );
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// ❌ خطأ 3: القبض على كل الأخطاء بشكل عام
try {
  const data = await fetch(url);
  const json = await data.json();
  // معالجة البيانات
} catch (error) {
  // يقبض على كل أنواع الأخطاء包括 الأخطاء البرمجية
  redirect("/error");
}

// ✅ الصحيح: التعامل مع كل نوع خطأ على حدة
try {
  const res = await fetch(url);
  if (res.status === 404) notFound();
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  const data = await res.json();
} catch (error) {
  if (error.message.includes("404")) notFound();
  throw error; // السماح لـ error.js بالتعامل مع الباقي
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="أفضل الممارسات لمعالجة الأخطاء">
          <p>
            اتبع هذه الممارسات للحصول على معالجة أخطاء فعالة وموثوقة:
          </p>
          <CodeBlock
            code={`// أفضل الممارسة 1: توفير آلية إعادة المحاولة
"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>حدث خطأ</h2>
      <p>{error.message}</p>
      <button onClick={reset}>إعادة المحاولة</button>
    </div>
  );
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// أفضل الممارسة 2: تسجيل الأخطاء للتشخيص
"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // تسجيل الخطأ في خدمة مراقبة
    console.error("Route error:", error);
    // يمكنك إضافة خدمات مثل Sentry هنا
    // Sentry.captureException(error);
  }, [error]);

  return (
    <div>
      <h2>حدث خطأ</h2>
      <p>{error.message}</p>
      <button onClick={reset}>إعادة المحاولة</button>
    </div>
  );
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// أفضل الممارسة 3: التعامل مع كل نوع خطأ بشكل منفصل
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(\`https://api.example.com/data/\${id}\`);

  if (res.status === 404) {
    notFound(); // عرض صفحة not-found.js
  }

  if (res.status === 403) {
    throw new Error("ليس لديك صلاحية للوصول لهذا المورد");
  }

  if (!res.ok) {
    throw new Error("حدث خطأ غير متوقع");
  }

  return res.json();
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="ملخص الدرس">
          <p>
            في هذا الدرس تعلمنا كيفية التعامل مع الأخطاء في Next.js بشكل احترافي:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><code>error.js</code> — يلتقط الأخطاء في أقسام المسارات الفرعية (يجب أن يكون Client Component)</li>
            <li><code>not-found.js</code> — يعرض صفحة مخصصة لحالات عدم العثور على المسار</li>
            <li><code>notFound()</code> — دالة لتفعيل صفحة 404 يدوياً من Server Components</li>
            <li><code>global-error.js</code> — يلتقط الأخطاء في التخطيط الجذري (root layout)</li>
            <li>ندعم المستخدم بآليات إعادة المحاولة والتنقل</li>
            <li>نستخدم <code>redirect()</code> لإعادة توجيه المستخدم عند الحاجة</li>
          </ul>
        </LessonSection>

        <LessonSection title="اختبار المعرفة">
          <Quiz
            question="أي من الملفات التالية يجب أن يحتوي على 'use client' في الأسطر الأولى؟"
            options={["layout.js", "error.js", "page.js", "loading.js"]}
            correctAnswer={1}
            explanation="ملف error.js يجب أن يكون Client Component لأنه يعتمد على حالة الخطأ المحلي ويحتوي على دالة reset()"
          />
          <Quiz
            question="ماذا يحدث عندما تستدعي دالة notFound() من داخل Server Component؟"
            options={[
              "يتم رمي خطأ عام يعرض global-error.js",
              "يتم عرض أقرب صفحة not-found.js في شجرة المسارات",
              "يتم إعادة توجيه المستخدم إلى الصفحة الرئيسية",
              "يتم إظهار شاشة بيضاء"
            ]}
            correctAnswer={1}
            explanation="دالة notFound() ترفع خطأ داخلي يلتقطه Next.js ويعرض أقرب صفحة not-found.js في شجرة المسارات"
          />
          <Quiz
            question="ما الفرق بين error.js و global-error.js؟"
            options={[
              "error.js للخادم و global-error.js للعميل",
              "error.js يلتقط أخطاء المسارات الفرعية و global-error.js يلتقط أخطاء التخطيط الجذري",
              "لا يوجد فرق بينهما",
              "global-error.js يعرض الأخطاء بشكل عام و error.js بشكل خاص"
            ]}
            correctAnswer={1}
            explanation="error.js يلتقط الأخطاء في أبناء التخطيط (المسارات الفرعية)، بينما global-error.js يلتقط الأخطاء في التخطيط الجذري (root layout.js)"
          />
          <Quiz
            question="ما هو البرمج الذي يجب أن يحتويه global-error.js بالمقارنة مع error.js؟"
            options={[
              "لا يوجد فرق في المحتوى",
              "global-error.js يجب أن يحتوي على علامتي html و body خاصة به",
              "global-error.js لا يحتاج to 'use client'",
              "global-error.js يجب أن يكون أطول في المحتوى"
            ]}
            correctAnswer={1}
            explanation="global-error.js يحل محل التخطيط الجذري بالكامل عند حدوث الخطأ، لذلك يجب أن يحتوي على علامتي html و body"
          />
          <Quiz
            question="أي من הבאים هو أفضل ممارسة عند معالجة الأخطاء؟"
            options={[
              "التقاط كل الأخطاء في كتلة catch واحدة كبيرة",
              "إظهار رسالة خطأ تقنية للمستخدم",
              "توفير آلية إعادة المحاولة وتسجيل الأخطاء للتشخيص",
              "إخفاء الأخطاء تماماً عن المستخدم"
            ]}
            correctAnswer={2}
            explanation="أفضل الممارسة هي توفير آلية إعادة المحاولة للمستخدم، وتسجيل الأخطاء للتشخيص، والتعامل مع كل نوع خطأ بشكل منفصل"
          />
        </LessonSection>

        <LessonSection title="تحدي الدرس — أضف معالجة أخطاء لتطبيق متعدد الصفحات">
          <Challenge
            title="تحدي معالجة الأخطاء الشاملة"
            description="أنشئ نظاماً كاملاً لمعالجة الأخطاء في تطبيق Next.js يحتوي على صفحات متعددة"
            tasks={[
              "أنشئ ملف error.js رئيسي يعرض رسالة خطأ ودية مع زر إعادة المحاولة",
              "أنشئ ملف not-found.js مخصص بتصميم جذاب يوضح أن الصفحة غير موجودة",
              "أنشئ ملف global-error.js يحتوي على علامتي html و body",
              "أضف دالة notFound() في صفحة [slug] للتحقق من وجود المقال",
              "أضف صفحة not-found.js فرعية خاصة بقسم المدونة",
              "اختبر أنواع الأخطاء المختلفة وتأكد من عرض الواجهات الصحيحة"
            ]}
          />
        </LessonSection>

        <LessonSection title="ورقة الغش (CheatSheet)">
          <CheatSheet
            items={[
              {
                title: "error.js",
                description: "ملف اتفاقية لالتقاط الأخطاء في المسارات الفرعية",
                code: `"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>خطأ!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>إعادة المحاولة</button>
    </div>
  );
}`
              },
              {
                title: "not-found.js",
                description: "صفحة مخصصة لعرض رسالة 404",
                code: `import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404 - الصفحة غير موجودة</h2>
      <Link href="/">العودة للرئيسية</Link>
    </div>
  );
}`
              },
              {
                title: "global-error.js",
                description: "لتخطيط الجذري، يجب أن يحتوي html و body",
                code: `"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ar">
      <body>
        <h2>خطأ عام</h2>
        <button onClick={reset}>إعادة التحميل</button>
      </body>
    </html>
  );
}`
              },
              {
                title: "notFound()",
                description: "دالة لتفعيل صفحة 404 من Server Components",
                code: `import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const data = await fetchData(params.id);
  if (!data) notFound();
  return <div>{data.title}</div>;
}`
              },
              {
                title: "redirect() بعد الخطأ",
                description: "إعادة توجيه المستخدم في كتل catch",
                code: `import { redirect } from "next/navigation";

async function getData() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    redirect("/error");
  }
}`
              },
              {
                title: "vitally logging الأخطاء",
                description: "تسجيل الأخطاء مع useEffect في error.js",
                code: `"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  );
}`
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
