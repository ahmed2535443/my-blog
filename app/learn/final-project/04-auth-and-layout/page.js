import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function AuthAndLayoutLesson() {
  const lesson = getLessonBySlug("final-project", "04-auth-and-layout");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* المقدمة */}
        <LessonSection title="مقدمة في المصادقة والتخطيط">
          <p className="text-lg leading-relaxed mb-4">
            في هذا الدرس سنتعلم كيفية إضافة نظام مصادقة آمن باستخدام{" "}
            <strong>Clerk</strong>، وتصميم الهيكل العام للموقع. المصادقة هي أول
            حماية لكل تطبيق ويب احترافي.
          </p>
          <p className="text-lg leading-relaxed">
            سنتعلم أيضًا كيفية إنشاء تخطيط عام يشمل الهيدر والسيديباز والفوتر،
            وكيفية حماية الصفحات الخاصة من الوصول غير المصرح به.
          </p>
        </LessonSection>

        {/* إعداد Clerk */}
        <LessonSection title="إعداد Clerk للمصادقة">
          <p className="text-lg leading-relaxed mb-4">
            Clerk هو خدمة مصادقة سهلة الاستخدام توفر تسجيل الدخول والخروج وحماية
            المسارات دون الحاجة لبناء نظام مصادقة من الصفر.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">الخطوة 1: تثبيت الحزم المطلوبة</h3>
          <CodeBlock
            code={`npm install @clerk/nextjs`}
            language="bash"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">الخطوة 2: إعداد متغيرات البيئة</h3>
          <p className="text-lg leading-relaxed mb-4">
            أنشئ ملف <code>.env.local</code> في جذر المشروع وأضف المفاتيح التالية:
          </p>
          <CodeBlock
            code={`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/`}
            language="bash"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">الخطوة 3: إنشاء ClerkProvider في Layout</h3>
          <p className="text-lg leading-relaxed mb-4">
            نحتاج للفصل بـ ClerkProvider في ملف layout الرئيسي لتغليف جميع
            صفحات التطبيق بدعم المصادقة:
          </p>
          <CodeBlock
            code={`// app/layout.js
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "منصة التعلم البرمجي",
  description: "تعلم البرمجة بطريقة تفاعلية",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="ar" dir="rtl">
        <body className="bg-background text-foreground">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* Middleware لحماية المسارات */}
        <LessonSection title="حماية المسارات باستخدام Middleware">
          <p className="text-lg leading-relaxed mb-4">
            Middleware هو الكود الذي يعمل قبل الوصول لأي صفحة. نستخدمه لحماية
            الصفحات الخاصة ووجّه المستخدمين غير المسجلين لصفحة تسجيل الدخول:
          </p>

          <CodeBlock
            code={`// middleware.ts (في جذر المشروع)
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// تحديد المسارات المحمية
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/admin(.*)",
  "/profile(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // إذا كان المسار محميًا ولم يسجل الدخول
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // تخطي الملفات الثابتة والصور
    "/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};`}
            language="typescript"
          />

          <p className="text-lg leading-relaxed mt-4 mb-4">
            الآن أي مستخدم يحاول الوصول لصفحة <code>/dashboard</code> بدون
            تسجيل دخول سيُوجَه تلقائيًا لصفحة تسجيل الدخول.
          </p>
        </LessonSection>

        {/* صفحات تسجيل الدخول والخروج */}
        <LessonSection title="إنشاء صفحات تسجيل الدخول والتسجيل">
          <p className="text-lg leading-relaxed mb-4">
            Clerk يوفر مكونات جاهزة لصفحات تسجيل الدخول والتسجيل. نحتاج فقط
            لإنشاء الصفحات واستيراد هذه المكونات:
          </p>

          <CodeBlock
            code={`// app/sign-in/[[...sign-in]]/page.js
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

          <CodeBlock
            code={`// app/sign-up/[[...sign-up]]/page.js
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

          <p className="text-lg leading-relaxed mt-4">
            تنسيق المسارات <code>[[...sign-in]]</code> هو مسار متعدد الأقسام
            يسمح لـ Clerk بالتعامل مع مراحل تسجيل الدخول المختلفة.
          </p>
        </LessonSection>

        {/* إضافة UserButton */}
        <LessonSection title="إضافة زر المستخدم في الهيدر">
          <p className="text-lg leading-relaxed mb-4">
            مكون <code>UserButton</code> من Clerk يعرض صورة المستخدم ويحتوي
            على قائمة منسدلة لإدارة الحساب وتسجيل الخروج:
          </p>

          <CodeBlock
            code={`// components/Header.js
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          منصة التعلم
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/courses" className="hover:text-primary">
            الدورات
          </Link>

          {/* يظهر فقط إذا سجل الدخول */}
          <SignedIn>
            <Link href="/dashboard" className="hover:text-primary">
              لوحة التحكم
            </Link>
            <UserButton
              afterSignOutUrl="/"
              userProfileMode="navigation"
              userProfileUrl="/profile"
            />
          </SignedIn>

          {/* يظهر فقط إذا لم يسجل الدخول */}
          <SignedOut>
            <Link
              href="/sign-in"
              className="px-4 py-2 bg-primary text-white rounded-lg"
            >
              تسجيل الدخول
            </Link>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* مكونات التخطيط العام */}
        <LessonSection title="مكونات التخطيط العام">
          <p className="text-lg leading-relaxed mb-4">
            الآن سنقوم بتقسيم الصفحة إلى أقسام رئيسية: هيدر علوي وسيديباز جانبي
            وفوتر سفلي. نستخدم CSS Grid أو Flexbox لتحقيق ذلك:
          </p>

          <CodeBlock
            code={`// app/(main)/layout.js
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* الهيدر العلوي */}
      <Header />

      <div className="flex flex-1">
        {/* السيديباز الجانبي */}
        <Sidebar />

        {/* المحتوى الرئيسي */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>

      {/* الفوتر السفلي */}
      <Footer />
    </div>
  );
}`}
            language="jsx"
          />

          <CodeBlock
            code={`// components/Sidebar.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/dashboard", label: "لوحة التحكم", icon: "📊" },
  { href: "/dashboard/posts", label: "المقالات", icon: "📝" },
  { href: "/dashboard/categories", label: "التصنيفات", icon: "📁" },
  { href: "/dashboard/settings", label: "الإعدادات", icon: "⚙️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-l border-border bg-surface p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={\`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
              \${
                pathname === item.href
                  ? "bg-primary text-white"
                  : "hover:bg-border"
              }\`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}`}
            language="jsx"
          />

          <CodeBlock
            code={`// components/Footer.js
export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-6">
      <div className="max-w-7xl mx-auto px-4 text-center text-muted">
        <p>© 2026 منصة التعلم البرمجي. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* تحسين الكود: التحكم بالأدوار */}
        <LessonSection title="تحسين الكود: التحكم بالصلاحيات حسب الدور">
          <p className="text-lg leading-relaxed mb-4">
            يمكنك إضافة نظام أدوار للمصادقة ليكون بعض الصفحات متاحة فقط
            للمشرفين. نستخدم Clerk مع Supabase لتخزين دور المستخدم:
          </p>

          <CodeBlock
            code={`// lib/roles.js
import { auth } from "@clerk/nextjs/server";
import { createClient } from "@/lib/supabase/server";

export async function getUserRole() {
  const { userId } = await auth();

  if (!userId) return null;

  const supabase = await createClient();
  const { data } = await supabase
    .from("users")
    .select("role")
    .eq("clerk_id", userId)
    .single();

  return data?.role || "user";
}

export async function isAdmin() {
  const role = await getUserRole();
  return role === "admin";
}`}
            language="javascript"
          />

          <CodeBlock
            code={`// middleware.ts - إضافة حماية المسارات الإدارية
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/admin(.*)",
]);

const isAdminRoute = createRouteMatcher([
  "/admin(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  // حماية مسارات الإدارة فقط للمشرفين
  if (isAdminRoute(req)) {
    await auth.protect((auth) => {
      // هنا يمكنك التحقق من دور المستخدم من قاعدة البيانات
      return auth.userId !== null;
    });
  }
});`}
            language="typescript"
          />
        </LessonSection>

        {/* اختبار المعرفة */}
        <LessonSection title="اختبر معرفتك">
          <Quiz
            question="ما هي الدالة المستخدمة لحماية المسارات في Clerk؟"
            options={[
              "protectRoute()",
              "auth.protect()",
              "securePage()",
              "checkAuth()",
            ]}
            correctAnswer={1}
            explanation="دالة auth.protect() هي المستخدمة في Clerk لحماية المسارات ووجّه المستخدم غير المسجل لصفحة تسجيل الدخول."
          />

          <Quiz
            question="أين يتم وضع ClerkProvider ليعمل على جميع الصفحات؟"
            options={[
              "في كل صفحة على حدة",
              "في ملف middleware.ts",
              "في ملف app/layout.js الرئيسي",
              "في ملف next.config.js",
            ]}
            correctAnswer={2}
            explanation="ClerkProvider يجب أن يكون في ملف layout.js الرئيسي ليغطي جميع صفحات التطبيق."
          />
        </LessonSection>

        {/* التحدي */}
        <LessonSection title="تحدي praktis">
          <Challenge title="إضافة صفحة الملف الشخصي">
            <p className="mb-3">
              أنشئ صفحة <code>/profile</code> تعرض معلومات المستخدم الحالي
              باستخدام مكون <code>UserProfile</code> من Clerk:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>أنشئ المجلد <code>app/profile/[[...profile]]</code></li>
              <li>أنشئ ملف <code>page.js</code> يستورد مكون UserProfile</li>
              <li>أضف الصفحة لقائمة المسارات المحمية في middleware.ts</li>
            </ol>
          </Challenge>
        </LessonSection>

        {/* ملخص الأدوات */}
        <LessonSection title="ملخص أدوات المصادقة والتخطيط">
          <CheatSheet title="المصطلحات والأدوات الأساسية">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Clerk:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted">
                  <li>ClerkProvider - مزود السياق العام للمصادقة</li>
                  <li>SignIn / SignUp - صفحات تسجيل الدخول والتسجيل</li>
                  <li>UserButton - زر إدارة الحساب في الهيدر</li>
                  <li>SignedIn / SignedOut - مكونات شروط العرض</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">التخطيط:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted">
                  <li>RootLayout - التخطيط الرئيسي للتطبيق</li>
                  <li>Route Group - تجميع الصفحات بنفس التخطيط</li>
                  <li>Middleware - حماية المسارات قبل الوصول للصفحات</li>
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
