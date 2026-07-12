import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ClerkFinalProject() {
  const lesson = getLessonBySlug("clerk", "06-clerk-final-project");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* مقدمة المشروع */}
        <LessonSection title="مقدمة المشروع">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في هذا الدرس الأخير من مرحلة Clerk، سنبني معاً مشروع تطبيقي كامل: تطبيق إدارة المهام (Task Management App).
            هذا المشروع سيجمع كل ما تعلمناه في الدروس السابقة في تطبيق واقعي واحد.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            المشروع sẽ يحتوي على تسجيل الدخول والخروج، حماية المسارات، إدارة المستخدم والجلسات،
            إنشاء وتعديل وحذف المهام، لوحة تحكم محمية، ودعم الأدوار (مدير، معلم، طالب).
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-6">
            <h4 className="text-blue-800 dark:text-blue-300 font-bold mb-4">ما ستتعلمه في هذا الدرس:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>هيكل مشروع Next.js 16 كامل مع Clerk</li>
              <li>إعداد Clerk مع proxy.ts و ClerkProvider</li>
              <li>صفحات تسجيل الدخول والتسجيل</li>
              <li>صفحة هبوط عامة مع زر تسجيل الدخول</li>
              <li>لوحة تحكم محمية للمستخدمين المسجلين</li>
              <li>إنشاء المهام مع Server Actions</li>
              <li>تعديل وحذف المهام مع التحقق من الملكية</li>
              <li>ملف شخصي للمستخدم مع UserButton</li>
              <li>حماية المسارات حسب الأدوار</li>
              <li>Quiz تقييمي شامل</li>
            </ul>
          </div>
        </LessonSection>

        {/* هيكل المشروع */}
        <LessonSection title="هيكل المشروع">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            قبل البدء في الكتابة، دعنا ننظر إلى هيكل المشروع الكامل. هذا الهيكل يمثل أفضل الممارسات في بناء تطبيقات Next.js 16 مع Clerk.
          </p>

          <CodeBlock
            code={`task-manager/
├── app/
│   ├── layout.js                  # Layout الجذري مع ClerkProvider
│   ├── page.js                    # الصفحة الرئيسية (عامة)
│   ├── sign-in/
│   │   └── [[...sign-in]]/
│   │       └── page.js            # صفحة تسجيل الدخول
│   ├── sign-up/
│   │   └── [[...sign-up]]/
│   │       └── page.js            # صفحة التسجيل
│   ├── dashboard/
│   │   ├── layout.js              # Layout لوحة التحكم (محمية)
│   │   ├── page.js                # لوحة التحكم الرئيسية
│   │   └── tasks/
│   │       ├── page.js            # عرض جميع المهام
│   │       ├── new/
│   │       │   └── page.js        # إنشاء مهمة جديدة
│   │       └── [taskId]/
│   │           └── page.js        # تعديل مهمة
│   ├── profile/
│   │   └── page.js                # صفحة الملف الشخصي
│   ├── admin/
│   │   ├── layout.js              # Layout لوحة المدير (محمية)
│   │   └── page.js                # لوحة تحكم المدير
│   └── api/
│       └── tasks/
│           ├── route.js           # API المهام
│           └── [taskId]/
│               └── route.js       # API مهمة محددة
├── components/
│   ├── Header.js                  # الشريط العلوي مع UserButton
│   ├── TaskCard.js                # بطاقة المهمة
│   ├── TaskForm.js                # نموذج إنشاء/تعديل المهمة
│   └── RoleBadge.js               # شارة الدور
├── lib/
│   └── prisma.js                  # إعداد Prisma Client
├── prisma/
│   └── schema.prisma              # نموذج قاعدة البيانات
├── proxy.ts                       # Clerk Middleware
├── .env.local                     # متغيرات البيئة
├── package.json
└── tailwind.config.js`}
            language="text"
          />
        </LessonSection>

        {/* إعداد Clerk */}
        <LessonSection title="إعداد Clerk">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الخطوة الأولى هي إعداد Clerk في مشروعك. سنحتاج إلى تثبيت الحزمة، وإعداد متغيرات البيئة، وتكوين Middleware.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">1. تثبيت Clerk:</h4>

          <CodeBlock
            code={`# تثبيت حزمة Clerk مع Next.js
npm install @clerk/nextjs`}
            language="bash"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">2. متغيرات البيئة (.env.local):</h4>

          <CodeBlock
            code={`# .env.local
# Clerk Publishing Key
NEXT_PUBLIC_CLERK_PUBLISHABLE=pk_test_your_publishable_key_here

# Clerk Secret Key
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Clerk Webhook Secret (اختياري)
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Clerk paths
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database URL
DATABASE_URL="postgresql://user:password@localhost:5432/taskmanager"`}
            language="bash"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">3. إعداد proxy.ts:</h4>

          <CodeBlock
            code={`// proxy.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// المسارات العامة (لا تتطلب تسجيل دخول)
const publicRoutes = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
  "/api/public(.*)",
]);

// المسارات المحمية للمديرين فقط
const adminRoutes = createRouteMatcher([
  "/admin/(.*)",
  "/api/admin/(.*)",
]);

// المسارات المحمية لجميع المستخدمين المسجلين
const protectedRoutes = createRouteMatcher([
  "/dashboard(.*)",
  "/profile(.*)",
  "/api/tasks(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // السماح بالمسارات العامة
  if (publicRoutes(req)) return;

  // حماية مسارات المدير
  if (adminRoutes(req)) {
    await auth.protect({ role: "org:admin" });
  }

  // حماية المسارات المحمية الأخرى
  if (protectedRoutes(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\\\.(html|css|js|jpg|jpeg|png|gif|svg|ico)$).*)",
    "/(api|trpc)(.*)",
  ],
};`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">4. ClerkProvider في Layout الجذري:</h4>

          <CodeBlock
            code={`// app/layout.js
import { ClerkProvider } from "@clerk/nextjs";
import { ar } from "@clerk/localizations";
import "./globals.css";

export const metadata = {
  title: "تطبيق إدارة المهام",
  description: "تطبيق إدارة مهام مع Clerk و Next.js 16",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={ar}>
      <html lang="ar" dir="rtl">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}`}
            language="javascript"
          />

          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-4">
            <p className="text-green-800 dark:text-green-300 text-sm">
              <strong>ملاحظة:</strong> لاحظ استخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<ClerkProvider localization={ar}>"}]</code> لدعم اللغة العربية.
              هذا يجعل واجهة Clerk بالكامل بالعربية.
            </p>
          </div>
        </LessonSection>

        {/* صفحات تسجيل الدخول */}
        <LessonSection title="صفحات تسجيل الدخول">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Clerk يوفر مكونات جاهزة لتسجيل الدخول والتسجيل. نحتاج إلى إنشاء صفحات لكل منهما باستخدام Dynamic Route Segments.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">صفحة تسجيل الدخول:</h4>

          <CodeBlock
            code={`// app/sign-in/[[...sign-in]]/page.js
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          تسجيل الدخول
        </h1>
        <SignIn
          routing="path"
          path="/sign-in"
          appearance={{
            elements: {
              card: "shadow-lg rounded-xl",
              headerTitle: "text-2xl font-bold",
              headerSubtitle: "text-gray-500",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
              footerActionLink: "text-blue-600 hover:text-blue-700",
            },
          }}
        />
      </div>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">صفحة التسجيل:</h4>

          <CodeBlock
            code={`// app/sign-up/[[...sign-up]]/page.js
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          إنشاء حساب جديد
        </h1>
        <SignUp
          routing="path"
          path="/sign-up"
          appearance={{
            elements: {
              card: "shadow-lg rounded-xl",
              headerTitle: "text-2xl font-bold",
              headerSubtitle: "text-gray-500",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
              footerActionLink: "text-blue-600 hover:text-blue-700",
            },
          }}
        />
      </div>
    </div>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* الصفحة الرئيسية */}
        <LessonSection title="الصفحة الرئيسية (عامة)">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الصفحة الرئيسية ستكون عامة (لا تتطلب تسجيل دخول). سنبني صفحة هبوط بسيطة مع زر تسجيل الدخول وتسجيل.
          </p>

          <CodeBlock
            code={`// app/page.js
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* الشريط العلوي */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-blue-600">مهماتي</h1>
        <div className="flex gap-3">
          <SignInButton mode="modal">
            <button className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium">
              تسجيل الدخول
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              إنشاء حساب
            </button>
          </SignUpButton>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            نظّم مهامك بسهولة
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            تطبيق إدارة مهام بسيط وقوي يساعدك على تنظيم حياتك اليومية
            وزيادة إنتاجيتك
          </p>
          <SignUpButton mode="modal">
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-xl hover:bg-blue-700 shadow-lg">
              ابدأ الآن مجاناً
            </button>
          </SignUpButton>
        </div>

        {/* المميزات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-2">إدارة المهام</h3>
            <p className="text-gray-600">
              أنشئ ونظّم مهامك بسهولة مع تحديد الأولوية والمواعيد النهائية
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">协作 مع الفريق</h3>
            <p className="text-gray-600">
              شارك المهام مع فريقك وتتبع التقدم معًا
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">تتبع الإنتاجية</h3>
            <p className="text-gray-600">
              راقب تقدمك وشاهد إحصائيات إنتاجيتك
            </p>
          </div>
        </div>
      </main>

      {/* التذييل */}
      <footer className="bg-gray-900 text-white p-8 text-center">
        <p>تطبيق إدارة المهام - مشروع Clerk تعليمي</p>
      </footer>
    </div>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* المكونات المشتركة */}
        <LessonSection title="المكونات المشتركة">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            قبل بناء الصفحات، سنحتاج إلى إنشاء بعض المكونات المشتركة التي سنستخدمها في أجزاء مختلفة من التطبيق.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">مكون Header:</h4>

          <CodeBlock
            code={`// components/Header.js
"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function Header() {
  const { user, isLoaded } = useUser();

  const userRole = user?.publicMetadata?.role;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold text-blue-600">
          مهماتي
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            لوحة التحكم
          </Link>

          <Link
            href="/dashboard/tasks/new"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            مهمة جديدة
          </Link>

          {userRole === "admin" && (
            <Link
              href="/admin"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              لوحة المدير
            </Link>
          )}

          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          />
        </nav>
      </div>
    </header>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">مكون TaskCard:</h4>

          <CodeBlock
            code={`// components/TaskCard.js
"use client";

import Link from "next/link";

export default function TaskCard({ task, onDelete }) {
  const priorityColors = {
    عالية: "bg-red-100 text-red-800",
    متوسطة: "bg-yellow-100 text-yellow-800",
    منخفضة: "bg-green-100 text-green-800",
  };

  const statusColors = {
    جديد: "bg-blue-100 text-blue-800",
    "قيد التنفيذ": "bg-orange-100 text-orange-800",
    مكتمل: "bg-green-100 text-green-800",
    ملغي: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{task.title}</h3>
        <div className="flex gap-2">
          <span className={priorityColors[task.priority] || "bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"}>
            {task.priority}
          </span>
          <span className={statusColors[task.status] || "bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"}>
            {task.status}
          </span>
        </div>
      </div>

      {task.description && (
        <p className="text-gray-600 text-sm mb-3">{task.description}</p>
      )}

      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">
          {new Date(task.createdAt).toLocaleDateString("ar-SA")}
        </span>

        <div className="flex gap-2">
          <Link
            href={"/dashboard/tasks/" + task.id}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            تعديل
          </Link>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">مكون TaskForm:</h4>

          <CodeBlock
            code={`// components/TaskForm.js
"use client";

import { useState } from "react";

export default function TaskForm({ onSubmit, initialData, buttonText }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [priority, setPriority] = useState(initialData?.priority || "متوسطة");
  const [status, setStatus] = useState(initialData?.status || "جديد");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await onSubmit({ title, description, priority, status });
    } catch (error) {
      console.error("خطأ:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          عنوان المهمة *
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="أدخل عنوان المهمة"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          الوصف
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="أدخل وصف المهمة"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            الأولوية
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="عالية">عالية</option>
            <option value="متوسطة">متوسطة</option>
            <option value="منخفضة">منخفضة</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            الحالة
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="جديد">جديد</option>
            <option value="قيد التنفيذ">قيد التنفيذ</option>
            <option value="مكتمل">مكتمل</option>
            <option value="ملغي">ملغي</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 font-medium"
      >
        {isLoading ? "جاري الحفظ..." : buttonText || "حفظ"}
      </button>
    </form>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">مكون RoleBadge:</h4>

          <CodeBlock
            code={`// components/RoleBadge.js
export default function RoleBadge({ role }) {
  const roleConfig = {
    admin: {
      label: "مدير",
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
    teacher: {
      label: "معلم",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    student: {
      label: "طالب",
      color: "bg-green-100 text-green-800 border-green-200",
    },
  };

  const config = roleConfig[role] || {
    label: role || "مستخدم",
    color: "bg-gray-100 text-gray-800 border-gray-200",
  };

  return (
    <span className={config.color + " px-3 py-1 rounded-full text-sm font-medium border"}>
      {config.label}
    </span>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* نموذج قاعدة البيانات */}
        <LessonSection title="نموذج قاعدة البيانات">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            سنستخدم Prisma كORM لقاعدة البيانات. النموذج يحتوي على جدول للمهام مرتبط ب المستخدم.
          </p>

          <CodeBlock
            code={`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Task {
  id          String   @id @default(cuid())
  title       String
  description String?
  priority    String   @default("متوسطة")
  status      String   @default("جديد")
  userId      String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([userId])
  @@index([status])
}`}
            language="text"
          />

          <CodeBlock
            code={`// lib/prisma.js
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;`}
            language="javascript"
          />
        </LessonSection>

        {/* لوحة التحميل المحمية */}
        <LessonSection title="لوحة التحميل (محمية)">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            لوحة التحميل ستكون محمية بـ Middleware و Layout. سنقوم بإنشاء Layout يتحقق من تسجيل الدخول،
            وصفحة رئيسية تعرض جميع مهام المستخدم.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Layout لوحة التحكم:</h4>

          <CodeBlock
            code={`// app/dashboard/layout.js
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "@/components/Header";

export default async function DashboardLayout({ children }) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">صفحة لوحة التحكم الرئيسية:</h4>

          <CodeBlock
            code={`// app/dashboard/page.js
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import RoleBadge from "@/components/RoleBadge";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();

  // جلب مهام المستخدم
  const tasks = await prisma.task.findMany({
    where: { userId: userId },
    orderBy: { createdAt: "desc" },
  });

  // حساب الإحصائيات
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "مكتمل").length;
  const pendingTasks = tasks.filter((t) => t.status === "جديد" || t.status === "قيد التنفيذ").length;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">لوحة التحكم</h1>

      {/* معلومات المستخدم */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center gap-4">
          <img
            src={user?.imageUrl}
            alt={user?.fullName}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">{user?.fullName}</h2>
            <p className="text-gray-500">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
            <RoleBadge role={user?.publicMetadata?.role} />
          </div>
        </div>
      </div>

      {/* الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-3xl font-bold text-blue-600">{totalTasks}</p>
          <p className="text-gray-500">إجمالي المهام</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-3xl font-bold text-green-600">{completedTasks}</p>
          <p className="text-gray-500">مهام مكتملة</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-3xl font-bold text-orange-600">{pendingTasks}</p>
          <p className="text-gray-500">مهام معلقة</p>
        </div>
      </div>

      {/* رابط إنشاء مهمة جديدة */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">مهامي</h2>
        <Link
          href="/dashboard/tasks/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + مهمة جديدة
        </Link>
      </div>

      {/* قائمة المهام */}
      {tasks.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-500 text-lg mb-4">لا توجد مهام بعد</p>
          <Link
            href="/dashboard/tasks/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            أنشئ مهمتك الأولى
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* إنشاء المهام */}
        <LessonSection title="إنشاء المهام">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            سنقوم بإنشاء Server Action لإنشاء المهام، وصفحة جديدة لعرض النموذج.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Server Action لإنشاء المهمة:</h4>

          <CodeBlock
            code={`// app/actions/tasks.js
"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function createTask(formData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("يجب تسجيل الدخول لإنشاء مهمة");
  }

  const title = formData.get("title");
  const description = formData.get("description");
  const priority = formData.get("priority");

  if (!title || title.trim() === "") {
    throw new Error("العنوان مطلوب");
  }

  try {
    await prisma.task.create({
      data: {
        title: title.trim(),
        description: description?.trim() || "",
        priority: priority || "متوسطة",
        status: "جديد",
        userId: userId,
      },
    });

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/tasks");

    return { success: true, message: "تم إنشاء المهمة بنجاح" };
  } catch (error) {
    console.error("خطأ في إنشاء المهمة:", error);
    throw new Error("خطأ في إنشاء المهمة");
  }
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">صفحة إنشاء مهمة جديدة:</h4>

          <CodeBlock
            code={`// app/dashboard/tasks/new/page.js
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NewTaskForm from "./NewTaskForm";

export default async function NewTaskPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">إنشاء مهمة جديدة</h1>
      <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
        <NewTaskForm />
      </div>
    </div>
  );
}`}
            language="javascript"
          />

          <CodeBlock
            code={`// app/dashboard/tasks/new/NewTaskForm.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTask } from "@/app/actions/tasks";

export default function NewTaskForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("متوسطة");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("priority", priority);

      const result = await createTask(formData);

      if (result.success) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError(err.message || "خطأ في إنشاء المهمة");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-800 p-3 rounded-lg">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          عنوان المهمة *
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder="أدخل عنوان المهمة"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          الوصف
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder="أدخل وصف المهمة"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          الأولوية
        </label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        >
          <option value="عالية">عالية</option>
          <option value="متوسطة">متوسطة</option>
          <option value="منخفضة">منخفضة</option>
        </select>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isLoading ? "جاري الإنشاء..." : "إنشاء المهمة"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300"
        >
          إلغاء
        </button>
      </div>
    </form>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* تعديل وحذف المهام */}
        <LessonSection title="تعديل وحذف المهام">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            سنقوم بإنشاء Server Actions لتعديل وحذف المهام مع التحقق من الملكية. هذا يعني أنه لا يمكن لأحد تعديل أو حذف مهمة لا تملكها.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Server Actions للتعديل والحذف:</h4>

          <CodeBlock
            code={`// app/actions/tasks.js (إضافة)
"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateTask(taskId, formData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("يجب تسجيل الدخول");
  }

  // التحقق من ملكية المهمة
  const existingTask = await prisma.task.findUnique({
    where: { id: taskId },
    select: { userId: true },
  });

  if (!existingTask) {
    throw new Error("المهمة غير موجودة");
  }

  if (existingTask.userId !== userId) {
    throw new Error("غير مصرح - هذه المهمة ليست ملكك");
  }

  const title = formData.get("title");
  const description = formData.get("description");
  const priority = formData.get("priority");
  const status = formData.get("status");

  try {
    await prisma.task.update({
      where: { id: taskId },
      data: {
        ...(title && { title: title.trim() }),
        ...(description !== undefined && { description: description.trim() }),
        ...(priority && { priority }),
        ...(status && { status }),
      },
    });

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/tasks");
    revalidatePath("/dashboard/tasks/" + taskId);

    return { success: true, message: "تم تحديث المهمة بنجاح" };
  } catch (error) {
    console.error("خطأ في تحديث المهمة:", error);
    throw new Error("خطأ في تحديث المهمة");
  }
}

export async function deleteTask(taskId) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("يجب تسجيل الدخول");
  }

  // التحقق من ملكية المهمة
  const existingTask = await prisma.task.findUnique({
    where: { id: taskId },
    select: { userId: true },
  });

  if (!existingTask) {
    throw new Error("المهمة غير موجودة");
  }

  if (existingTask.userId !== userId) {
    throw new Error("غير مصرح - هذه المهمة ليست ملكك");
  }

  try {
    await prisma.task.delete({
      where: { id: taskId },
    });

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/tasks");

    return { success: true, message: "تم حذف المهمة بنجاح" };
  } catch (error) {
    console.error("خطأ في حذف المهمة:", error);
    throw new Error("خطأ في حذف المهمة");
  }
}

export async function toggleTaskStatus(taskId, currentStatus) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("يجب تسجيل الدخول");
  }

  const existingTask = await prisma.task.findUnique({
    where: { id: taskId },
    select: { userId: true, status: true },
  });

  if (!existingTask) {
    throw new Error("المهمة غير موجودة");
  }

  if (existingTask.userId !== userId) {
    throw new Error("غير مصرح");
  }

  const newStatus = currentStatus === "مكتمل" ? "جديد" : "مكتمل";

  try {
    await prisma.task.update({
      where: { id: taskId },
      data: { status: newStatus },
    });

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/tasks");

    return { success: true, message: "تم تحديث الحالة بنجاح" };
  } catch (error) {
    throw new Error("خطأ في تحديث الحالة");
  }
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">صفحة تعديل المهمة:</h4>

          <CodeBlock
            code={`// app/dashboard/tasks/[taskId]/page.js
import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EditTaskForm from "./EditTaskForm";

export default async function EditTaskPage({ params }) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { taskId } = await params;

  // جلب المهمة والتحقق من الملكية
  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task) {
    notFound();
  }

  if (task.userId !== userId) {
    redirect("/dashboard");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">تعديل المهمة</h1>
      <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
        <EditTaskForm task={task} />
      </div>
    </div>
  );
}`}
            language="javascript"
          />

          <CodeBlock
            code={`// app/dashboard/tasks/[taskId]/EditTaskForm.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateTask, deleteTask } from "@/app/actions/tasks";

export default function EditTaskForm({ task }) {
  const router = useRouter();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("priority", priority);
      formData.append("status", status);

      const result = await updateTask(task.id, formData);

      if (result.success) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError(err.message || "خطأ في تحديث المهمة");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("هل أنت متأكد من حذف هذه المهمة؟")) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await deleteTask(task.id);

      if (result.success) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError(err.message || "خطأ في حذف المهمة");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-800 p-3 rounded-lg">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          عنوان المهمة *
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          الوصف
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            الأولوية
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="عالية">عالية</option>
            <option value="متوسطة">متوسطة</option>
            <option value="منخفضة">منخفضة</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            الحالة
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="جديد">جديد</option>
            <option value="قيد التنفيذ">قيد التنفيذ</option>
            <option value="مكتمل">مكتمل</option>
            <option value="ملغي">ملغي</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isLoading ? "جاري الحفظ..." : "حفظ التغييرات"}
        </button>
        <button
          type="button"
          onClick={handleDelete}
          disabled={isLoading}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 disabled:bg-red-400"
        >
          حذف
        </button>
      </div>
    </form>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* الملف الشخصي */}
        <LessonSection title="الملف الشخصي">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            صفحة الملف الشخصي ستعرض معلومات المستخدم باستخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<UserProfile />"}</code> من Clerk.
          </p>

          <CodeBlock
            code={`// app/profile/page.js
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserProfile } from "@clerk/nextjs";
import Header from "@/components/Header";

export default async function ProfilePage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">الملف الشخصي</h1>
        <UserProfile
          routing="path"
          path="/profile"
          appearance={{
            elements: {
              card: "shadow-lg rounded-xl",
              headerTitle: "text-2xl font-bold",
              headerSubtitle: "text-gray-500",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
              formButtonReset: "text-red-600 hover:text-red-700",
            },
          }}
        />
      </main>
    </div>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* حماية حسب الأدوار */}
        <LessonSection title="حماية حسب الأدوار">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            سنقوم بإنشاء لوحة تحكم خاصة بالمديرين فقط. هذه اللوحة ستعرض جميع المستخدمين وتمكن المدير من تعديل أدوارهم.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Layout لوحة المدير:</h4>

          <CodeBlock
            code={`// app/admin/layout.js
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "@/components/Header";

export default async function AdminLayout({ children }) {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const userRole = sessionClaims?.metadata?.role || sessionClaims?.role;

  if (userRole !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
          <h2 className="text-purple-800 font-bold">لوحة تحكم المدير</h2>
          <p className="text-purple-600 text-sm">
            هذه الصفحة متاحة فقط للمديرين
          </p>
        </div>
        {children}
      </main>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">صفحة لوحة المدير:</h4>

          <CodeBlock
            code={`// app/admin/page.js
import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AdminUserList from "./AdminUserList";

export default async function AdminPage() {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const userRole = sessionClaims?.metadata?.role || sessionClaims?.role;

  if (userRole !== "admin") {
    redirect("/dashboard");
  }

  // جلب جميع المستخدمين
  const client = await clerkClient();
  const usersResponse = await client.users.getUserList();

  const users = usersResponse.data.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.primaryEmailAddress?.emailAddress,
    imageUrl: user.imageUrl,
    role: user.publicMetadata?.role || "student",
    createdAt: user.createdAt,
  }));

  // جلب إحصائيات المهام
  const taskStats = await prisma.task.groupBy({
    by: ["status"],
    _count: true,
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">لوحة تحكم المدير</h1>

      {/* الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-3xl font-bold text-blue-600">{users.length}</p>
          <p className="text-gray-500">إجمالي المستخدمين</p>
        </div>
        {taskStats.map((stat) => (
          <div key={stat.status} className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-3xl font-bold text-green-600">{stat._count}</p>
            <p className="text-gray-500">{stat.status}</p>
          </div>
        ))}
      </div>

      {/* قائمة المستخدمين */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">المستخدمون</h2>
        <AdminUserList users={users} />
      </div>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">مكون قائمة المستخدمين:</h4>

          <CodeBlock
            code={`// app/admin/AdminUserList.js
"use client";

import { useState } from "react";
import RoleBadge from "@/components/RoleBadge";

export default function AdminUserList({ users }) {
  const [updatingUser, setUpdatingUser] = useState(null);

  const handleRoleChange = async (userId, newRole) => {
    setUpdatingUser(userId);

    try {
      const response = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetUserId: userId, role: newRole }),
      });

      if (response.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error("خطأ في تحديث الدور:", error);
    } finally {
      setUpdatingUser(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-right">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-sm font-medium text-gray-500">المستخدم</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-500">البريد الإلكتروني</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-500">الدور</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-500">تاريخ الإنشاء</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-500">الإجراءات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <img
                    src={user.imageUrl}
                    alt={user.firstName}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium">
                    {user.firstName} {user.lastName}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-500">{user.email}</td>
              <td className="px-4 py-3">
                <RoleBadge role={user.role} />
              </td>
              <td className="px-4 py-3 text-gray-500 text-sm">
                {new Date(user.createdAt).toLocaleDateString("ar-SA")}
              </td>
              <td className="px-4 py-3">
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  disabled={updatingUser === user.id}
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value="student">طالب</option>
                  <option value="teacher">معلم</option>
                  <option value="admin">مدير</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">API Route للمدير:</h4>

          <CodeBlock
            code={`// app/api/admin/users/route.js
import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(request) {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "غير مصرح" },
      { status: 401 }
    );
  }

  const userRole = sessionClaims?.metadata?.role || sessionClaims?.role;

  if (userRole !== "admin") {
    return NextResponse.json(
      { error: "غير مصرح - يجب أن تكون مديراً" },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const { targetUserId, role } = body;

    if (!targetUserId || !role) {
      return NextResponse.json(
        { error: "بيانات ناقصة" },
        { status: 400 }
      );
    }

    const client = await clerkClient();

    const updatedUser = await client.users.updateUser(targetUserId, {
      publicMetadata: { role },
    });

    return NextResponse.json({
      success: true,
      user: {
        id: updatedUser.id,
        role: updatedUser.publicMetadata?.role,
      },
    });
  } catch (error) {
    console.error("خطأ في تحديث المستخدم:", error);
    return NextResponse.json(
      { error: "خطأ في تحديث المستخدم" },
      { status: 500 }
    );
  }
}`}
            language="javascript"
          />
        </LessonSection>

        {/* API Routes للمهام */}
        <LessonSection title="API Routes للمهام">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            بالإضافة إلى Server Actions، سنقوم بإنشاء Route Handlers لواجهة برمجية RESTful للمهام.
          </p>

          <CodeBlock
            code={`// app/api/tasks/route.js
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "يجب تسجيل الدخول" },
      { status: 401 }
    );
  }

  try {
    const tasks = await prisma.task.findMany({
      where: { userId: userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ tasks });
  } catch (error) {
    return NextResponse.json(
      { error: "خطأ في جلب المهام" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "يجب تسجيل الدخول" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { title, description, priority } = body;

    if (!title || title.trim() === "") {
      return NextResponse.json(
        { error: "العنوان مطلوب" },
        { status: 400 }
      );
    }

    const task = await prisma.task.create({
      data: {
        title: title.trim(),
        description: description?.trim() || "",
        priority: priority || "متوسطة",
        status: "جديد",
        userId: userId,
      },
    });

    return NextResponse.json({ task }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "خطأ في إنشاء المهمة" },
      { status: 500 }
    );
  }
}`}
            language="javascript"
          />

          <CodeBlock
            code={`// app/api/tasks/[taskId]/route.js
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request, { params }) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "يجب تسجيل الدخول" },
      { status: 401 }
    );
  }

  const { taskId } = await params;

  try {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      return NextResponse.json(
        { error: "المهمة غير موجودة" },
        { status: 404 }
      );
    }

    if (task.userId !== userId) {
      return NextResponse.json(
        { error: "غير مصرح" },
        { status: 403 }
      );
    }

    return NextResponse.json({ task });
  } catch (error) {
    return NextResponse.json(
      { error: "خطأ في جلب المهمة" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "يجب تسجيل الدخول" },
      { status: 401 }
    );
  }

  const { taskId } = await params;

  try {
    const existingTask = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!existingTask) {
      return NextResponse.json(
        { error: "المهمة غير موجودة" },
        { status: 404 }
      );
    }

    if (existingTask.userId !== userId) {
      return NextResponse.json(
        { error: "غير مصرح" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { title, description, priority, status } = body;

    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: {
        ...(title && { title: title.trim() }),
        ...(description !== undefined && { description: description.trim() }),
        ...(priority && { priority }),
        ...(status && { status }),
      },
    });

    return NextResponse.json({ task: updatedTask });
  } catch (error) {
    return NextResponse.json(
      { error: "خطأ في تحديث المهمة" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "يجب تسجيل الدخول" },
      { status: 401 }
    );
  }

  const { taskId } = await params;

  try {
    const existingTask = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!existingTask) {
      return NextResponse.json(
        { error: "المهمة غير موجودة" },
        { status: 404 }
      );
    }

    if (existingTask.userId !== userId) {
      return NextResponse.json(
        { error: "غير مصرح" },
        { status: 403 }
      );
    }

    await prisma.task.delete({
      where: { id: taskId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "خطأ في حذف المهمة" },
      { status: 500 }
    );
  }
}`}
            language="javascript"
          />
        </LessonSection>

        {/* ملخص المشروع */}
        <LessonSection title="ملخص المشروع">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            تهانينا! لقد أنشأت تطبيق إدارة مهام كامل مع Clerk و Next.js 16. دعنا نلخص ما تعلمناه وبنيناه:
          </p>

          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-6 mb-6">
            <h4 className="text-green-800 dark:text-green-300 font-bold mb-4">ما أنجزناه:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>إعداد Clerk مع proxy.ts و ClerkProvider</li>
              <li>صفحات تسجيل الدخول والتسجيل بدعم اللغة العربية</li>
              <li>صفحة هبوط عامة مع أزرار تسجيل الدخول والتسجيل</li>
              <li>لوحة تحكم محمية تعرض مهام المستخدم</li>
              <li>إنشاء المهام مع Server Actions</li>
              <li>تعديل وحذف المهام مع التحقق من الملكية</li>
              <li>صفحة ملف شخصي باستخدام UserProfile</li>
              <li>لوحة تحكم المدير مع إدارة الأدوار</li>
              <li>API Routes للمهام مع الحماية</li>
              <li>حماية المسارات حسب الأدوار</li>
            </ul>
          </div>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">هيكل الملفات النهائي:</h4>

          <CodeBlock
            code={`task-manager/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── sign-in/[[...sign-in]]/page.js
│   ├── sign-up/[[...sign-up]]/page.js
│   ├── dashboard/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── tasks/
│   │       ├── new/page.js
│   │       │   └── NewTaskForm.js
│   │       └── [taskId]/
│   │           ├── page.js
│   │           └── EditTaskForm.js
│   ├── profile/page.js
│   ├── admin/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── AdminUserList.js
│   ├── actions/tasks.js
│   └── api/
│       ├── tasks/route.js
│       ├── tasks/[taskId]/route.js
│       └── admin/users/route.js
├── components/
│   ├── Header.js
│   ├── TaskCard.js
│   ├── TaskForm.js
│   └── RoleBadge.js
├── lib/prisma.js
├── prisma/schema.prisma
├── proxy.ts
├── .env.local
└── package.json`}
            language="text"
          />
        </LessonSection>

        {/* Quiz */}
        <LessonSection title="اختبر معلوماتك - Quiz نهائي">
          <Quiz
            question="في أي ملف يتم تعريف Clerk Middleware في Next.js 16؟"
            options={[
              "middleware.ts",
              "proxy.ts",
              "clerk.ts",
              "auth.ts"
            ]}
            correctAnswer={1}
            explanation="في Next.js 16، يتم تعريف Clerk Middleware في ملف proxy.ts بدلاً من middleware.ts. هذا الملف يحتوي على دالة clerkMiddleware() التي تفحص كل طلب."
          />

          <Quiz
            question="كيف تحمي مسار خاص بالمديرين فقط في Clerk؟"
            options={[
              "auth.protect()",
              "auth.protect({ role: 'admin' })",
              "auth.protect({ role: 'org:admin' })",
              "auth.guard('admin')"
            ]}
            correctAnswer={2}
            explanation="لحماية مسار خاص بالمديرين، نستخدم auth.protect({ role: 'org:admin' }). صيغة الدور تبدأ بـ 'org:' متبوعة بالدور."
          />

          <Quiz
            question="ما الدالة التي تُستخدم للحصول على المستخدم الحالي في Server Components؟"
            options={[
              "useUser()",
              "currentUser()",
              "getUser()",
              "fetchUser()"
            ]}
            correctAnswer={1}
            explanation="currentUser() هي الدالة التي تُستخدم في Server Components للحصول على الكائن الكامل للمستخدم الحالي. لا تستخدم useUser() في Server Components لأنها Hook خاص بـ Client Components."
          />

          <Quiz
            question="كيف تتحقق من ملكية المهمة قبل تعديلها في Server Action؟"
            options={[
              "لا حاجة للتحقق",
              "باستخدام auth() للحصول على userId ومقارنته بـ task.userId",
              "باستخدام middleware فقط",
              "باستخدام Clerk Dashboard"
            ]}
            correctAnswer={1}
            explanation="نستخدم auth() للحصول على userId الخاص بالمستخدم الحالي، ثم نقارنه بـ userId الخاص بالمهمة في قاعدة البيانات. إذا كانا مختلفين، نرفض العملية."
          />

          <Quiz
            question="ما الفرق بين publicMetadata و privateMetadata في Clerk؟"
            options={[
              "لا يوجد فرق",
              "publicMetadata يمكن للعميل الوصول إليها و privateMetadata لا يمكن",
              "privateMetadata يمكن للعميل الوصول إليها و publicMetadata لا يمكن",
              "كلتاهما خاصة بالخادم"
            ]}
            correctAnswer={1}
            explanation="publicMetadata يمكن للعميل (Client) الوصول إليها عبر useUser()، بينما privateMetadata لا يمكن إلا للخادم الوصول إليها عبر currentUser() أو clerkClient(). هذا لأسباب أمنية."
          />
        </LessonSection>

        {/* CheatSheet */}
        <CheatSheet title="مرجع Clerk الشامل">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">1. الإعداد:</h4>
              <CodeBlock
                code={`// تثبيت
npm install @clerk/nextjs

// .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard`}
                language="bash"
              />
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">2. ClerkProvider:</h4>
              <CodeBlock
                code={`import { ClerkProvider } from "@clerk/nextjs";
import { ar } from "@clerk/localizations";

<ClerkProvider localization={ar}>
  {children}
</ClerkProvider>`}
                language="jsx"
              />
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">3. Middleware (proxy.ts):</h4>
              <CodeBlock
                code={`import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const publicRoutes = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (publicRoutes(req)) return;
  await auth.protect();
});`}
                language="javascript"
              />
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">4. Server-side Auth:</h4>
              <CodeBlock
                code={`// auth() - للحصول على userId و sessionClaims
const { userId, sessionClaims } = await auth();

// currentUser() - للكائن الكامل للمستخدم
const user = await currentUser();

// clerkClient() - للوصول إلى Backend API
const client = await clerkClient();
const users = await client.users.getUserList();`}
                language="javascript"
              />
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">5. Client-side Hooks:</h4>
              <CodeBlock
                code={`// useUser() - معلومات المستخدم
const { user, isLoaded, isSignedIn } = useUser();

// useAuth() - معلومات المصادقة
const { userId, sessionId, getToken, signOut, has } = useAuth();

// useSession() - معلومات الجلسة
const { session } = useSession();

// useSessionList() - جميع الجلسات
const { sessions } = useSessionList();`}
                language="javascript"
              />
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">6. المكونات:</h4>
              <CodeBlock
                code={`// أزرار المصادقة
<SignInButton mode="modal" />
<SignUpButton mode="modal" />

// زر المستخدم
<UserButton afterSignOutUrl="/" />

// صفحة الملف الشخصي
<UserProfile routing="path" path="/profile" />`}
                language="jsx"
              />
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">7. الحماية:</h4>
              <CodeBlock
                code={`// في Middleware
await auth.protect();
await auth.protect({ role: "org:admin" });
await auth.protect({ permission: "org:course:create" });

// في Server Components
const { userId } = await auth();
if (!userId) redirect("/sign-in");

// في Route Handlers
const { userId } = await auth();
if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

// في Server Actions
const { userId } = await auth();
if (!userId) throw new Error("Unauthorized");`}
                language="javascript"
              />
            </div>
          </div>
        </CheatSheet>

        {/* Challenge */}
        <Challenge title="تحدي: توسيع المشروع بدعم Organization">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              قم بتوسيع مشروع إدارة المهام بإضافة دعم Organization (المنظمات). هذا التحدي يتطلب:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>تفعيل Clerk Organizations في لوحة التحكم</li>
              <li>إضافة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<OrganizationSwitcher />"}</code> في Header للتبديل بين المنظمات</li>
              <li>ربط المهام بالمنظمة باستخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">orgId</code></li>
              <li>عرض مهام المنظمة فقط في لوحة التحكم</li>
              <li>إضافة صفحة إدارة المنظمة مع الأعضاء والأدوار</li>
              <li>حماية مسارات المنظمة باستخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth.protect({"{"} organization: true {"}"})</code></li>
            </ol>

            <CodeBlock
              code={`// مثال على OrganizationSwitcher
"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold">مهماتي</h1>

      <OrganizationSwitcher
        afterCreateOrganizationUrl="/dashboard"
        afterSelectOrganizationUrl="/dashboard"
        afterSwitchOrganizationUrl="/dashboard"
        appearance={{
          elements: {
            organizationSwitcherTrigger: "border border-gray-300 rounded-lg px-3 py-2",
          },
        }}
      />
    </header>
  );
}`}
              language="javascript"
            />

            <CodeBlock
              code={`// مثال على ربط المهمة بالمنظمة
export async function createTask(formData) {
  const { userId, orgId } = await auth();

  if (!userId) {
    throw new Error("يجب تسجيل الدخول");
  }

  const title = formData.get("title");

  await prisma.task.create({
    data: {
      title: title,
      userId: userId,
      orgId: orgId || null, // ربط بالمنظمة إذا وُجدت
    },
  });

  revalidatePath("/dashboard");
  return { success: true };
}`}
              language="javascript"
            />

            <CodeBlock
              code={`// مثال على جلب مهام المنظمة
export default async function DashboardPage() {
  const { userId, orgId } = await auth();

  // إذا كان هناك orgId، اعرض مهام المنظمة
  // وإلا، اعرض مهام المستخدم فقط
  const whereClause = orgId
    ? { orgId: orgId }
    : { userId: userId };

  const tasks = await prisma.task.findMany({
    where: whereClause,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1>
        {orgId ? "مهام المنظمة" : "مهامي"}
      </h1>
      {/* عرض المهام */}
    </div>
  );
}`}
              language="javascript"
            />
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
