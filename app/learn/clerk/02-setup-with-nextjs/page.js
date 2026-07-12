import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function SetupWithNextjs() {
  const lesson = getLessonBySlug("clerk", "02-setup-with-nextjs");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== القسم الأول: التثبيت ==================== */}
        <LessonSection title="التثبيت">
          <p className="text-lg leading-relaxed mb-4">
            أول خطوة لدمج Clerk مع مشروع Next.js هي تثبيت الحزمة اللازمة. Clerk يوفّر حزمة
            مخصصة لـ Next.js تتكامل بشكل أصلي مع App Router و Server Components.
          </p>

          <h3 className="text-xl font-bold mb-3">التثبيت اليدوي</h3>
          <p className="text-lg leading-relaxed mb-4">
            الطريقة الأساسية هي استخدام npm لتثبيت حزمة
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">@clerk/nextjs</code>
          </p>

          <CodeBlock
            code={`# تثبيت الحزمة الرئيسية لـ Clerk مع Next.js
npm install @clerk/nextjs`}
            language="bash"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">التثبيت عبر Clerk CLI</h3>
          <p className="text-lg leading-relaxed mb-4">
            Clerk يوفّر أيضًا أداة سطر أوامر (CLI) تسهّل عملية الإعداد الأولي. يمكنك تثبيتها
            عالميًا واستخدامها لإعداد المشروع تلقائيًا.
          </p>

          <CodeBlock
            code={`# تثبيت Clerk CLI عالميًا
npm install -g clerk

# إعداد المشروع تلقائيًا
# هذا الأمر يُنشئ الملفات الأساسية ويضبط الإعدادات
clerk init`}
            language="bash"
          />

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">ماذا يفعل clerk init؟</p>
            <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
              <li>يُنشئ ملف <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-sm font-mono">.env.local</code> بالمتغيرات اللازمة</li>
              <li>يُنشئ ملف <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-sm font-mono">proxy.ts</code> (أو middleware.ts) مع إعدادات Clerk</li>
              <li>يُنشئ مسارات تسجيل الدخول والخروج</li>
              <li>يُضيف ClerkProvider إلى ملف التخطيط الجذري</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-4">
            سنستخدم الطريقة اليدوية في هذا الدرس حتى تفهم كل خطوة وماذا تفعل بالضبط. هذا
            مهم لفهم المعمارية الكاملة لـ Clerk في مشروعك.
          </p>
        </LessonSection>

        {/* ==================== القسم الثاني: متغيرات البيئة ==================== */}
        <LessonSection title="متغيرات البيئة">
          <p className="text-lg leading-relaxed mb-4">
            Clerk يعتمد على مفتاحين أساسيين للعمل. يجب تخزينهما في ملف
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">.env.local</code>
            في جذر المشروع. لا تُ commit هذه الملفات إلى مستودع Git أبدًا.
          </p>

          <CodeBlock
            code={`# ملف .env.local في جذر مشروع Next.js

# المفتاح العام (يبدأ بـ pk_) - آمن للعميل
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here

# المفتاح السري (يبدأ بـ sk_) - فقط على الخادم
CLERK_SECRET_KEY=sk_test_your_key_here

# روابط إعادة التوجيه (اختيارية)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard`}
            language="bash"
          />

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
            <p className="text-red-800 dark:text-red-200 font-semibold mb-2">تحذير أمني مهم!</p>
            <p className="text-red-700 dark:text-red-300">
              المفتاح السري (CLERK_SECRET_KEY) يجب أن يبقى مخفيًا ولا يُستخدم أبدًا في الكود
              الذي يعمل على العميل (Client). البادئة NEXT_PUBLIC_ في المفتاح العام تجعله متاحًا
              في المتصفح، لكن هذا آمن لأن Clerk مصمم ليعمل بهذه الطريقة.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">شرح كل متغير</h3>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-right">المتغير</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-right">النوع</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-right">الوصف</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">مطلوب</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">المفتاح العام للتعرف على مشروعك</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">CLERK_SECRET_KEY</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">مطلوب</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">المفتاح السري للاتصال بالخادم</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">NEXT_PUBLIC_CLERK_SIGN_IN_URL</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">اختياري</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">مسار صفحة تسجيل الدخول</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">NEXT_PUBLIC_CLERK_SIGN_UP_URL</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">اختياري</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">مسار صفحة إنشاء الحساب</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">اختياري</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">الصفحة بعد تسجيل الدخول</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">اختياري</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">الصفحة بعد إنشاء الحساب</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-4">
            يمكنك الحصول على هذه المفاتيح من لوحة تحكم Clerk في قسم API Keys. انسخهما وضعهما
            في ملف
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">.env.local</code>
            في جذر مشروعك.
          </p>
        </LessonSection>

        {/* ==================== القسم الثالث: ClerkProvider في Root Layout ==================== */}
        <LessonSection title="ClerkProvider في Root Layout">
          <p className="text-lg leading-relaxed mb-4">
            لكي يعمل Clerk في جميع صفحات التطبيق، يجب أن يُلفّ التطبيق بالكامل بـ
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">ClerkProvider</code>
            . هذا المكون يوفّر سياق (Context) المصادقة لكل المكونات الفرعية.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            في Next.js App Router، يتم وضع
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">ClerkProvider</code>
            في ملف التخطيط الجذري
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">app/layout.tsx</code>
            أو
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">app/layout.js</code>
            .
          </p>

          <CodeBlock
            code={`// ملف app/layout.js - التخطيط الجذري للمشروع

import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "منصتنا التعليمية",
  description: "منصة تعليمية متكاملة",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="ar" dir="rtl">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}`}
            language="jsx"
          />

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
            <p className="text-green-800 dark:text-green-200 font-semibold mb-2">ملاحظة مهمة</p>
            <p className="text-green-700 dark:text-green-300">
              في الإصدارات الحديثة من Clerk مع Next.js، لا تحتاج لتمرير
              <code className="bg-green-100 dark:bg-green-800 px-1 rounded text-sm font-mono">publishableKey</code>
              يدويًا إلى
              <code className="bg-green-100 dark:bg-green-800 px-1 rounded text-sm font-mono">ClerkProvider</code>
              . يقوم Clerk تلقائيًا بقراءة المفتاح من متغير البيئة
              <code className="bg-green-100 dark:bg-green-800 px-1 rounded text-sm font-mono">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code>
              .
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">إذا كنت تستخدم TypeScript</h3>
          <p className="text-lg leading-relaxed mb-4">
            إذا كان مشروعك يستخدم TypeScript، قد تحتاج لتثبيت حزمة الأنواع الإضافية:
          </p>

          <CodeBlock
            code={`// ملف app/layout.tsx - النسخة TypeScript

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "منصتنا التعليمية",
  description: "منصة تعليمية متكاملة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="ar" dir="rtl">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}`}
            language="tsx"
          />

          <p className="text-lg leading-relaxed mb-4">
            لاحظ أن
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<ClerkProvider />"}</code>
            يلفّ cả عنصر
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<html>"}</code>
            وليس فقط
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<body>"}</code>
            . هذا يضمن أن سياق المصادقة متاح لكل أجزاء التطبيق بما في ذلك Server Components.
          </p>
        </LessonSection>

        {/* ==================== القسم الرابع: إعداد proxy.ts ==================== */}
        <LessonSection title="إعداد proxy.ts (Next.js 16)">
          <p className="text-lg leading-relaxed mb-4">
            في Next.js 16، تم استبدال ملف
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">middleware.ts</code>
            بملف
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">proxy.ts</code>
            للتعامل مع طلبات الوسيط (Middleware). Clerk يدعم هذا النمط الجديد بشكل أصلي.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            ملف proxy.ts هو المسؤول عن حماية المسارات (Routes) وتوجيه المستخدمين غير المسجلين
            إلى صفحة تسجيل الدخول.
          </p>

          <CodeBlock
            code={`// ملف proxy.ts في جذر المشروع (Next.js 16)
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// تعريف المسارات المحمية (تحتاج تسجيل دخول)
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/profile(.*)",
  "/settings(.*)",
  "/admin(.*)",
]);

// تعريف المسارات العامة (لا تحتاج تسجيل دخول)
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/about(.*)",
  "/contact(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // إذا كان المسار محميًا والمستخدم غير مسجّل الدخول
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  // تطبيق الوسيط على مسارات محددة
  matcher: [
    // استبعاد الملفات الثابتة والصور
    "/((?!_next|[^?]*\\\\.(html|css|js|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // تطبيق على جميع المسارات API والـ tRPC
    "/(api|trpc)(.*)",
  ],
};`}
            language="javascript"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">شرح الإعدادات</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-bold mb-2">clerkMiddleware()</h4>
              <p className="text-gray-700 dark:text-gray-300">
                هذه الدالة هي جوهر الإعداد. تأخذ callback تحتوي على
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-sm font-mono">auth</code>
                (لمعلومات المصادقة)
                و
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-sm font-mono">req</code>
                (الطلب). تُطبّق على كل طلب يدخل التطبيق.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-bold mb-2">createRouteMatcher()</h4>
              <p className="text-gray-700 dark:text-gray-300">
                دالة مساعدة لإنشاء مطابق للمسارات (Route Matcher). تأخذ مصفوفة من أنماط المسارات
                وتُرجع دالة تتحقق مما إذا كان الطلب الحالي يطابق أحد هذه المسارات.
                الأنماط تدعم wildcard patterns مثل <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-sm font-mono">{"/(.*?)"}</code> .
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-bold mb-2">auth.protect()</h4>
              <p className="text-gray-700 dark:text-gray-300">
                دالة تُستخدم لحماية مسار معين. إذا لم يكن المستخدم مسجّل الدخول، سيتم توجيهه
                تلقائيًا إلى صفحة تسجيل الدخول. يمكنك تمرير خيارات لتخصيص السلوك.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">الفرق بين proxy.ts و middleware.ts</h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">ملاحظة حول Next.js 16</p>
            <ul className="list-disc list-inside space-y-2 text-yellow-700 dark:text-yellow-300">
              <li>
                <strong>middleware.ts:</strong> الملف التقليدي الذي يعمل على كل طلب قبل الوصول للمسار.
                في Next.js 15 وأقدم.
              </li>
              <li>
                <strong>proxy.ts:</strong> الملف الجديد في Next.js 16来做同样的工作 but with improved performance and clearer separation.
                Clerk يدعم both versions.
              </li>
              <li>
                إذا كنت تبدأ مشروعًا جديدًا بـ Next.js 16، استخدم
                <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded text-sm font-mono">proxy.ts</code>
                .
              </li>
              <li>
                إذا كنت ترقّي مشروعًا موجودًا، يمكنك الاستمرار مع
                <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded text-sm font-mono">middleware.ts</code>
                حتى تنتقل لاحقًا.
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ==================== القسم الخامس: إنشاء مسارات تسجيل الدخول ==================== */}
        <LessonSection title="إنشاء مسارات تسجيل الدخول">
          <p className="text-lg leading-relaxed mb-4">
            لكي يعمل Clerk بشكل صحيح، تحتاج لإنشاء مسارات (Routes) لتسجيل الدخول وإنشاء الحساب.
            Clerk يستخدم نظام المسارات اللامحدودة (Catch-All Routes) لدعم جميع حالات المصادقة.
          </p>

          <h3 className="text-xl font-bold mb-3">مسار تسجيل الدخول</h3>

          <CodeBlock
            code={`// ملف app/sign-in/[[...sign-in]]/page.js
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn />
    </div>
  );
}`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">مسار إنشاء الحساب</h3>

          <CodeBlock
            code={`// ملف app/sign-up/[[...sign-up]]/page.js
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp />
    </div>
  );
}`}
            language="jsx"
          />

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mb-6">
            <p className="text-purple-800 dark:text-purple-200 font-semibold mb-2">لماذا المسارات اللامحدودة (Catch-All Routes)؟</p>
            <p className="text-purple-700 dark:text-purple-300">
              الصيغة <code className="bg-purple-100 dark:bg-purple-800 px-1 rounded text-sm font-mono">{"[[...sign-in]]"}</code> تعني مسارًا لامحدودًا اختياريًا.
              هذا يسمح لـ Clerk بإدارة مسارات فرعية متعددة داخل مسار تسجيل الدخول، مثل
              تسجيل الدخول بالبريد، تسجيل الدخول بالحسابات الاجتماعية، إعادة تعيين كلمة المرور،
              والتحقق من البريد الإلكتروني. بدون هذا النمط، لن تعمل بعض الميزات بشكل صحيح.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">هيكل الملفات الناتج</h3>
          <p className="text-lg leading-relaxed mb-4">
            بعد إعداد كل شيء، يجب أن يبدو هيكل مشروعك كالتالي:
          </p>

          <CodeBlock
            code={`my-project/
├── app/
│   ├── layout.js            # ClerkProvider هنا
│   ├── page.js              # الصفحة الرئيسية
│   ├── sign-in/
│   │   └── [...[sign-in]]/
│   │       └── page.js      # مسار تسجيل الدخول
│   ├── sign-up/
│   │   └── [[...sign-up]]/
│   │       └── page.js      # مسار إنشاء الحساب
│   └── dashboard/
│       └── page.js          # صفحة محمية
├── proxy.ts                 # Clerk Middleware
├── .env.local               # متغيرات البيئة
├── next.config.js
├── package.json
└── tsconfig.json`}
            language="text"
          />
        </LessonSection>

        {/* ==================== القسم السادس: Clerk CLI ==================== */}
        <LessonSection title="Clerk CLI - أدوات سطر الأوامر">
          <p className="text-lg leading-relaxed mb-4">
            Clerk يوفّر مجموعة من أدوات سطر الأوامر (CLI) تسهّل عملية التطوير والإدارة.
            إليك أهم الأوامر المتاحة.
          </p>

          <CodeBlock
            code={`# clerk init - إعداد أولي للمشروع
# يُنشئ الملفات الأساسية ويضبط الإعدادات
clerk init

# clerk doctor - تشخيص مشاكل الإعداد
# يتحقق من صحة الإعداد ويقترح الحلول
clerk doctor

# clerk env pull - سحب متغيرات البيئة من Clerk
# يجلب المفاتيح من لوحة التحكم ويضعها في .env.local
clerk env pull

# clerk env push - رفع متغيرات بيئة محلية إلى Clerk
# يرفع المتغيرات من .env.local إلى Clerk
clerk env push

# clerk instance create - إنشاء نسخة جديدة
# يُنشئ نسخة جديدة من التطبيق في Clerk
clerk instance create`}
            language="bash"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">شرح الأوامر بالتفصيل</h3>

          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-bold mb-2">
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">clerk init</code>
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                يُشغّل معالج الإعداد الأولي. يسألك عن نوع المشروع، ويربطه بتطبيق في Clerk Dashboard،
                وينشئ الملفات اللازمة. مفيد جدًا عند بدء مشروع جديد.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-bold mb-2">
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">clerk doctor</code>
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                أداة تشخيصية تتحقق من إعدادات مشروعك. تفحص متغيرات البيئة، وملف الوسيط،
                ومسارات التسجيل، وتُبلّغ عن أي مشاكل مع اقتراح حلول.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-bold mb-2">
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">clerk env pull</code>
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                يجلب متغيرات البيئة من لوحة تحكم Clerk ويضعها في ملف
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-sm font-mono">.env.local</code>
                . مفيد عند العمل على جهاز جديد أو في فريق عمل.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== القسم السابع: مشاكل شائعة وحلولها ==================== */}
        <LessonSection title="مشاكل شائعة وحلولها">
          <p className="text-lg leading-relaxed mb-4">
            أثناء إعداد Clerk مع Next.js، قد تواجه بعض المشاكل الشائعة. إليك أكثرها شيوعًا
            وكيفية حلها.
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">المشكلة 1: ClerkProvider is not wrapping the application</h4>
              <p className="text-red-700 dark:text-red-300 mb-2">
                خطأ شائع يحدث عندما لا يكون ClerkProvider يلفّ التطبيق بالكامل في ملف
                <code className="bg-red-100 dark:bg-red-800 px-1 rounded text-sm font-mono">layout.js</code>
                .
              </p>
              <p className="text-red-700 dark:text-red-300">
                <strong>الحل:</strong> تأكد من أن ClerkProvider يلفّ عنصر
                <code className="bg-red-100 dark:bg-red-800 px-1 rounded text-sm font-mono">{"<html>"}</code>
                وليس فقط
                <code className="bg-red-100 dark:bg-red-800 px-1 rounded text-sm font-mono">{"<body>"}</code>
                .
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">المشكلة 2: Publishable Key is missing</h4>
              <p className="text-red-700 dark:text-red-300 mb-2">
                يحدث هذا الخطأ عندما لا يجد Clerk مفتاح
                <code className="bg-red-100 dark:bg-red-800 px-1 rounded text-sm font-mono">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code>
                في ملف البيئة.
              </p>
              <p className="text-red-700 dark:text-red-300">
                <strong>الحل:</strong> تأكد من أن ملف
                <code className="bg-red-100 dark:bg-red-800 px-1 rounded text-sm font-mono">.env.local</code>
                موجود في جذر المشروع (وليس في مجلد فرعي) وأن المفتاح يبدأ بـ
                <code className="bg-red-100 dark:bg-red-800 px-1 rounded text-sm font-mono">pk_</code>
                .
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">المشكلة 3: middleware.ts يتعارض مع proxy.ts</h4>
              <p className="text-red-700 dark:text-red-300 mb-2">
                في Next.js 16، إذا كان كلا الملفين موجودين (middleware.ts و proxy.ts)، قد يحدث تعارض.
              </p>
              <p className="text-red-700 dark:text-red-300">
                <strong>الحل:</strong> احذف ملف
                <code className="bg-red-100 dark:bg-red-800 px-1 rounded text-sm font-mono">middleware.ts</code>
                واستخدم
                <code className="bg-red-100 dark:bg-red-800 px-1 rounded text-sm font-mono">proxy.ts</code>
                فقط في Next.js 16.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">المشكلة 4: الخطأ في مسار Catch-All Route</h4>
              <p className="text-red-700 dark:text-red-300 mb-2">
                إذا كان اسم المجلد
                <code className="bg-red-100 dark:bg-red-800 px-1 rounded text-sm font-mono">[...sign-in]</code>
                بدلاً من
                <code className="bg-red-100 dark:bg-red-800 px-1 rounded text-sm font-mono">[[...sign-in]]</code>
                (بدون مربعات مزدوجة)، لن تعمل بعض المسارات الفرعية لـ Clerk.
              </p>
              <p className="text-red-700 dark:text-red-300">
                <strong>الحل:</strong> تأكد من استخدام المربعات المزدوجة
                <code className="bg-red-100 dark:bg-red-800 px-1 rounded text-sm font-mono">[[...sign-in]]</code>
                .
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">فحص إعداد Clerk بشكل يدوي</h3>
          <p className="text-lg leading-relaxed mb-4">
            يمكنك استخدام هذا الكود للتحقق من أن Clerk يعمل بشكل صحيح في مشروعك:
          </p>

          <CodeBlock
            code={`// ملف app/test-clerk/page.js
// صفحة اختبار للتأكد من أن Clerk يعمل بشكل صحيح

import { auth, currentUser } from "@clerk/nextjs/server";

export default async function TestClerkPage() {
  const { userId, sessionId, sessionClaims } = await auth();
  const user = await currentUser();

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">فحص إعداد Clerk</h1>

      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="font-bold">حالة المصادقة</h2>
          <p>الحالة: {userId ? "مسجّل الدخول" : "غير مسجّل الدخول"}</p>
        </div>

        {userId && (
          <div className="p-4 bg-green-100 rounded-lg">
            <h2 className="font-bold">معلومات الجلسة</h2>
            <p>معرف المستخدم: {userId}</p>
            <p>معرف الجلسة: {sessionId}</p>
          </div>
        )}

        {user && (
          <div className="p-4 bg-blue-100 rounded-lg">
            <h2 className="font-bold">بيانات المستخدم</h2>
            <p>الاسم: {user.firstName} {user.lastName}</p>
            <p>البريد: {user.emailAddresses[0].emailAddress}</p>
            <img src={user.imageUrl} alt="الصورة" className="w-16 h-16 rounded-full mt-2" />
          </div>
        )}
      </div>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* ==================== القسم الثامن: Quiz ==================== */}
        <LessonSection title="اختبر معلوماتك">
          <p className="text-lg leading-relaxed mb-6">
            أجب عن الأسئلة التالية للتأكد من أنك قمت بإعداد Clerk بشكل صحيح.
          </p>

          <Quiz
            question={`أي من متغيرات البيئة التالية هو المفتاح الذي يبدأ بـ pk_ ولا يجب مشاركته أبدًا؟`}
            options={[
              "CLERK_SECRET_KEY",
              "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
              "NEXT_PUBLIC_CLERK_SIGN_IN_URL",
              "CLERK_API_KEY"
            ]}
            correctAnswer={1}
            explanation={`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY هو المفتاح العام الذي يبدأ بـ pk_. على الرغم من أنه آمن للاستخدام في العميل (المتصفح)، إلا أنه يُعرّف هوية مشروعك لدى Clerk. أما CLERK_SECRET_KEY فهو المفتاح السري الذي لا يجب مشاركته أبدًا ولا يجب استخدامه في الكود العميلي.`}
          />

          <Quiz
            question={`في Next.js 16، ما هو الملف الجديد الذي يحل محل middleware.ts ل处理 طلبات الوسيط؟`}
            options={[
              "server.ts",
              "proxy.ts",
              "routes.ts",
              "handler.ts"
            ]}
            correctAnswer={1}
            explanation={`في Next.js 16، يُستخدم ملف proxy.ts ل处理 طلبات الوسيط بدلاً من middleware.ts. Clerk يدعم proxy.ts بشكل أصلي عبر clerkMiddleware(). الملف يوضع في جذر المشروع ويعمل على كل طلب قبل الوصول للمسار.`}
          />

          <Quiz
            question={`لماذا تُستخدم المسارات اللامحدودة (Catch-All Routes) مثل [[...sign-in]] لمسارات Clerk؟`}
            options={[
              "لتحسين أداء الموقع",
              "لدعم مسارات فرعية متعددة داخل مسار التسجيل",
              "لإضافة SEO أفضل",
              "لتقليل حجم المشروع"
            ]}
            correctAnswer={1}
            explanation={`المسارات اللامحدودة Catch-All Routes تسمح لـ Clerk بإدارة مسارات فرعية متعددة داخل مسار واحد. على سبيل المثال، مسار /sign-in قد يحتوي على /sign-in/password, /sign-in/social, /sign-in/verify等等。 بدون هذا النمط، لن تعمل هذه المسارات الفرعية.`}
          />
        </LessonSection>

        {/* ==================== القسم الثامن: CheatSheet ==================== */}
        <CheatSheet title="قائمة الإعداد - Setup Checklist">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-lg mb-3">خطوات الإعداد بالترتيب</h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>تثبيت الحزمة:</strong>{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">npm install @clerk/nextjs</code>
                </li>
                <li>
                  <strong>إعداد متغيرات البيئة:</strong> إنشاء ملف
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">.env.local</code>
                  مع المفتاحين
                </li>
                <li>
                  <strong>إضافة ClerkProvider:</strong> لف التطبيق في
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">app/layout.js</code>
                </li>
                <li>
                  <strong>إعداد proxy.ts:</strong> إنشاء ملف الوسيط لحماية المسارات
                </li>
                <li>
                  <strong>إنشاء مسارات التسجيل:</strong>
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">sign-in</code>
                  و
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">sign-up</code>
                </li>
                <li>
                  <strong>التحقق:</strong> تشغيل
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">clerk doctor</code>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">الأوامر الأساسية</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">npm install @clerk/nextjs</code> - تثبيت الحزمة</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">clerk init</code> - إعداد أولي</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">clerk doctor</code> - تشخيص المشاكل</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">clerk env pull</code> - سحب متغيرات البيئة</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">الملفات المطلوبة</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">.env.local</code> - متغيرات البيئة (المفاتيح)</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">proxy.ts</code> - ملف الوسيط (حماية المسارات)</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">app/layout.js</code> - ClerkProvider</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">app/sign-in/[[...sign-in]]/page.js</code> - مسار تسجيل الدخول</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">app/sign-up/[[...sign-up]]/page.js</code> - مسار إنشاء الحساب</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">المسارات الافتراضية في Clerk</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">/sign-in</code> - تسجيل الدخول</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">/sign-up</code> - إنشاء حساب</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">/user-profile</code> - الملف الشخصي</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">/organization-profile</code> - ملف المنظمة</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">نصائح مهمة</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>لا تُ commit ملف .env.local إلى Git أبدًا</li>
                <li>استخدم clerk init للإعداد السريع في المشاريع الجديدة</li>
                <li>rod clerk doctor قبل نشر التطبيق للتأكد من صحة الإعداد</li>
                <li>تأكد من تثبيت الحزمة الصحيحة: @clerk/nextjs (وليس clerk)</li>
              </ul>
            </div>
          </div>
        </CheatSheet>

        {/* ==================== القسم التاسع: Challenge ==================== */}
        <Challenge title="تحدي: إنشاء مشروع Next.js جديد ودمج Clerk">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              في هذا التحدي، ستنشئ مشروع Next.js جديدًا وتدمج Clerk به من الصفر. هذا سيعطيك
              خبرة عملية في كل خطوات الإعداد.
            </p>

            <h4 className="font-bold text-lg mt-4">الخطوات المطلوبة:</h4>
            <ol className="list-decimal list-inside space-y-3">
              <li className="text-lg">
                أنشئ مشروع Next.js جديد:
                <CodeBlock
                  code={`npx create-next-app@latest my-clerk-project
# اختر: JavaScript, App Router, src directory: No`}
                  language="bash"
                />
              </li>
              <li className="text-lg">
                ثبّت Clerk:
                <CodeBlock
                  code={`cd my-clerk-project
npm install @clerk/nextjs`}
                  language="bash"
                />
              </li>
              <li className="text-lg">
                أنشئ ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">.env.local</code> وأضف مفاتيح Clerk
              </li>
              <li className="text-lg">
                أضف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">ClerkProvider</code> إلى ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">app/layout.js</code>
              </li>
              <li className="text-lg">
                أنشئ ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">proxy.ts</code> لإعداد الوسيط
              </li>
              <li className="text-lg">
                أنشئ مسار تسجيل الدخول في <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">app/sign-in/[[...sign-in]]/page.js</code>
              </li>
              <li className="text-lg">
                أنشئ مسار إنشاء حساب في <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">app/sign-up/[[...sign-up]]/page.js</code>
              </li>
              <li className="text-lg">
                شغّل المشروع واختبر تسجيل الدخول:
                <CodeBlock
                  code={`npm run dev`}
                  language="bash"
                />
              </li>
            </ol>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-4">
              <p className="text-green-800 dark:text-green-200 font-semibold mb-2">المطلوب للإكمال:</p>
              <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
                <li>مشروع Next.js جديد يعمل بشكل صحيح</li>
                <li>Clerk مدمج بالكامل مع ClerkProvider و proxy.ts</li>
                <li>صفحة تسجيل دخول تعمل عند الوصول إلى /sign-in</li>
                <li>صفحة إنشاء حساب تعمل عند الوصول إلى /sign-up</li>
                <li>إمكانية تسجيل الدخول بإحدى الطرق المتاحة</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200 font-semibold">نصيحة:</p>
              <p className="text-yellow-700 dark:text-yellow-300">
                إذا واجهت مشاكل، شغّل <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded text-sm font-mono">clerk doctor</code> في الطرفية. سيُخبرك إذا كان هناك أي خطأ في الإعداد.
                تأكد أيضًا من أن متغيرات البيئة صحيحة وأن ClerkProvider يلفّ التطبيق بالكامل.
              </p>
            </div>
          </div>
        </Challenge>

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
