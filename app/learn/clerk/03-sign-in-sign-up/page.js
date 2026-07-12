import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function SignInSignUp() {
  const lesson = getLessonBySlug("clerk", "03-sign-in-sign-up");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== القسم الأول: مكونات المصادقة ==================== */}
        <LessonSection title="مكونات المصادقة">
          <p className="text-lg leading-relaxed mb-4">
            Clerk يوفّر مكونين أساسيين للمصادقة:
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignIn />"}</code>
            و
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignUp />"}</code>
            . كل منهما يوفر واجهة مستخدم كاملة وجاهزة يمكنك استخدامها مباشرة في مشروعك.
          </p>

          <h3 className="text-xl font-bold mb-3">مكون تسجيل الدخول - SignIn</h3>
          <p className="text-lg leading-relaxed mb-4">
            مكون
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignIn />"}</code>
            يوفر نموذج تسجيل الدخول الكامل الذي يشمل حقول البريد الإلكتروني وكلمة المرور،
            وأزرار تسجيل الدخول بالحسابات الاجتماعية، وروابط نسيت كلمة المرور.
          </p>

          <CodeBlock
            code={`// ملف app/sign-in/[[...sign-in]]/page.js

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignIn />
    </div>
  );
}`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">مكون إنشاء الحساب - SignUp</h3>
          <p className="text-lg leading-relaxed mb-4">
            مكون
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignUp />"}</code>
            يوفر نموذج التسجيل الكامل الذي يشمل حقول الاسم الأول والأخير والبريد الإلكتروني
            وكلمة المرور، وأزرار التسجيل بالحسابات الاجتماعية.
          </p>

          <CodeBlock
            code={`// ملف app/sign-up/[[...sign-up]]/page.js

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignUp />
    </div>
  );
}`}
            language="jsx"
          />

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">فهم المسارات اللامحدودة (Catch-All Routes)</p>
            <p className="text-blue-700 dark:text-blue-300 mb-2">
              الصيغة <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-sm font-mono">{"[[...sign-in]]"}</code> في اسم المجلد ليست عشوائية.
              مزودين المربعات المزدوجين <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-sm font-mono">{"[[]]"}</code> يدل على مسار لامحدود اختياري (Optional Catch-All).
            </p>
            <p className="text-blue-700 dark:text-blue-300">
              هذا يعني أن Clerk يستخدم هذا المسار كنقطة دخول لعدة مسارات فرعية:
            </p>
            <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300 mt-2">
              <li>/sign-in - الصفحة الرئيسية لتسجيل الدخول</li>
              <li>/sign-in/factor-one - خطوة التحقق الأولى</li>
              <li>/sign-in/factor-two - خطوة التحقق الثانية (2FA)</li>
              <li>/sign-in/reset-password - إعادة تعيين كلمة المرور</li>
              <li>/sign-in/verify - التحقق من البريد الإلكتروني</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">خصائص المكونات</h3>
          <p className="text-lg leading-relaxed mb-4">
            كلا المكونين يدعمان خصائص (Props) تخصيصية تسمح لك بالتحكم في سلوكهما.
          </p>

          <CodeBlock
            code={`// خصائص مكون SignIn المتاحة

<SignIn
  // المسار الذي يُوجّه إليه المستخدم بعد تسجيل الدخول الناجح
  afterSignUpUrl="/dashboard"

  // المسار الذي يُوجّه إليه المستخدم بعد تسجيل الدخول
  afterSignInUrl="/dashboard"

  // عنوان URL لإعادة التوجيه عند تسجيل الخروج
  signUpUrl="/sign-up"

  // التحويل التلقائي للتحقق من البريد
  redirectUrl="/"

  // تغيير ترتيب عرض مزودات تسجيل الدخول
  routing="path"

  // تحديد مسار التسجيل
  path="/sign-in"
/>

// خصائص مكون SignUp المتاحة

<SignUp
  // المسار بعد إنشاء الحساب بنجاح
  afterSignUpUrl="/dashboard"

  // مسار تسجيل الدخول كبديل
  signInUrl="/sign-in"

  // عنوان URL لإعادة التوجيه
  redirectUrl="/"

  // تغيير الطريقة البريدية
  emailLinks={true}
/>`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">إنشاء صفحة مخصصة حول مكونات المصادقة</h3>
          <p className="text-lg leading-relaxed mb-4">
            يمكنك وضع مكونات المصادقة داخل تصميم مخصص لتناسب تصميم تطبيقك.
          </p>

          <CodeBlock
            code={`// صفحة تسجيل دخول مخصصة مع تصميم جميل

import { SignIn } from "@clerk/nextjs";

export default function CustomSignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            مرحباً بعودتك
          </h1>
          <p className="text-gray-600">
            سجّل الدخول للوصول إلى حسابك
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <SignIn />
        </div>
        <p className="text-center mt-6 text-gray-500">
          ليس لديك حساب؟{" "}
          <a href="/sign-up" className="text-indigo-600 hover:text-indigo-700 font-semibold">
            أنشئ حسابًا جديدًا
          </a>
        </p>
      </div>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* ==================== القسم الثاني: أزرار تسجيل الدخول ==================== */}
        <LessonSection title="أزرار تسجيل الدخول">
          <p className="text-lg leading-relaxed mb-4">
            بالإضافة إلى مكونات النماذج الكاملة، يوفّر Clerk أيضًا أزرارًا جاهزة يمكنك وضعها
            في أي مكان في واجهة المستخدم. هذه الأزرار يمكنها فتح نموذج تسجيل الدخول كنافذة
            منبثقة (Modal) أو التحويل لصفحة تسجيل الدخول.
          </p>

          <h3 className="text-xl font-bold mb-3">SignInButton و SignUpButton</h3>

          <CodeBlock
            code={`// استخدام SignInButton و SignUpButton

import { SignInButton, SignUpButton } from "@clerk/nextjs";

export function AuthButtons() {
  return (
    <div className="flex gap-4">
      {/* زر تسجيل الدخول - يفتح نموذج منبثق */}
      <SignInButton mode="modal">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          تسجيل الدخول
        </button>
      </SignInButton>

      {/* زر إنشاء الحساب - يفتح نموذج منبثق */}
      <SignUpButton mode="modal">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          إنشاء حساب
        </button>
      </SignUpButton>
    </div>
  );
}`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">الفرق بين Modal و Navigation</h3>
          <p className="text-lg leading-relaxed mb-4">
            يدعم كل من
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">SignInButton</code>
            و
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">SignUpButton</code>
            وضعين رئيسيين:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">{`mode="modal"`}</h4>
              <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300 text-sm">
                <li>يفتح نافذة منبثقة (Dialog/Modal) فوق الصفحة الحالية</li>
                <li>لا يُغيّر المسار في شريط العنوان</li>
                <li>مناسب للتطبيقات التي تريد تجربة سلسة</li>
                <li>لا يحتاج مسارًا مخصصًا لتسجيل الدخول</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">{`mode="navigation"`}</h4>
              <ul className="list-disc list-inside space-y-1 text-purple-700 dark:text-purple-300 text-sm">
                <li>يُحوّل المستخدم إلى صفحة تسجيل الدخول</li>
                <li>يُغيّر المسار في شريط العنوان</li>
                <li>مناسب للمواقع التي تريد صفحة مخصصة</li>
                <li>يحتاج مسار /sign-in مُعدًا مسبقًا</li>
              </ul>
            </div>
          </div>

          <CodeBlock
            code={`// مثال: أزرار بوضعين مختلفين

import { SignInButton, SignUpButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1>شعار الموقع</h1>
      <nav className="flex gap-4">
        {/* وضع Modal - يفتح نافذة منبثقة */}
        <SignInButton mode="modal">
          <button className="text-blue-600 hover:text-blue-800 font-semibold">
            تسجيل الدخول
          </button>
        </SignInButton>

        {/* وضع Navigation - يُحوّل لصفحة كاملة */}
        <SignUpButton mode="navigation">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ابدأ مجانًا
          </button>
        </SignUpButton>
      </nav>
    </header>
  );
}`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">تخصيص الأزرار باستخدام القالب (Render Prop)</h3>
          <p className="text-lg leading-relaxed mb-4">
            يمكنك تخصيص مظهر الأزرار بشكل كامل باستخدام نمط القالب (Render Prop Pattern).
            هذا يسمح لك بتمرير زر مخصص بأي تصميم تريده.
          </p>

          <CodeBlock
            code={`// تخصيص الأزرار بالكامل باستخدام render props

import { SignInButton, SignUpButton } from "@clerk/nextjs";

export function CustomAuthButtons() {
  return (
    <div className="flex gap-4">
      {/* استخدام render prop لتخصيص الزر بالكامل */}
      <SignInButton mode="modal">
        {({ open }) => (
          <button
            onClick={open}
            className="flex items-center gap-2 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all"
          >
            تسجيل الدخول
          </button>
        )}
      </SignInButton>

      <SignUpButton mode="modal">
        {({ open }) => (
          <button
            onClick={open}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            إنشاء حساب جديد
          </button>
        )}
      </SignUpButton>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* ==================== القسم الثالث: التحكم الشرطي بالـ Show ==================== */}
        <LessonSection title="التحكم الشرطي بـ Show">
          <p className="text-lg leading-relaxed mb-4">
            Clerk يوفّر مكون
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<Show />"}</code>
            للتحكم الشرطي في عرض المحتوى بناءً على حالة مصادقة المستخدم. هذا المكون يحل محل
            المكونات القديمة
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignedIn />"}</code>
            و
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignedOut />"}</code>
            .
          </p>

          <CodeBlock
            code={`// استخدام مكون Show للتحكم الشرطي

import { Show, UserButton, SignInButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold">منصتنا التعليمية</h1>

      <div className="flex gap-4 items-center">
        {/* يُعرض فقط عندما يكون المستخدم مسجّل الدخول */}
        <Show when="signed-in">
          <a href="/dashboard" className="text-gray-700 hover:text-gray-900">
            لوحة التحكم
          </a>
          <a href="/courses" className="text-gray-700 hover:text-gray-900">
            الدورات
          </a>
          <UserButton afterSignOutUrl="/" />
        </Show>

        {/* يُعرض فقط عندما يكون المستخدم غير مسجّل الدخول */}
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button className="text-blue-600 hover:text-blue-800 font-semibold">
              تسجيل الدخول
            </button>
          </SignInButton>
        </Show>
      </div>
    </nav>
  );
}`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">التحكم الشرطي المتقدم مع شروط الدور</h3>
          <p className="text-lg leading-relaxed mb-4">
            يمكنك استخدام
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<Show />"}</code>
            مع شروط إضافية مثل التحقق من دور المستخدم أو صلاحياته عبر JWT Templates.
          </p>

          <CodeBlock
            code={`// Show مع شروط متقدمة - التحقق من الأدوار والصلاحيات

import { Show } from "@clerk/nextjs";

export function AdminPanel() {
  return (
    <div>
      {/* عرض المحتوى فقط للمسؤولين */}
      <Show when={({ role }) => role === "admin"}>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2>لوحة التحكم الإدارية</h2>
          <p>مرحباً بك في لوحة الإدارة</p>
        </div>
      </Show>

      {/* عرض المحتوى للمستخدمين العاديين */}
      <Show when={({ role }) => role === "user"}>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2>لوحة التحكم</h2>
          <p>مرحباً بك في لوحتك</p>
        </div>
      </Show>

      {/* عرض محتوى مختلف بناءً على الاشتراك */}
      <Show when={({ plan }) => plan === "pro"}>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2>ميزات Pro</h2>
          <p>استمتع بالميزات المتقدمة</p>
        </div>
      </Show>
    </div>
  );
}`}
            language="jsx"
          />

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">ملاحظة مهمة حول الأدوار</p>
            <p className="text-yellow-700 dark:text-yellow-300">
              للتحكم في الأدوار والصلاحيات مع
              <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded text-sm font-mono">{"<Show />"}</code>
              ، تحتاج لإعداد JWT Templates في Clerk Dashboard. هذا يسمح لك بتضمين معلومات
              الدور في الـ Token المُخزّن في الكوكيز.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">التحكم الشرطي باستخدام useAuth في المكونات</h3>
          <p className="text-lg leading-relaxed mb-4">
            كخيار بديل، يمكنك استخدام hook
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useAuth()</code>
            للتحكم الشرطي في المكونات العميلية (Client Components).
          </p>

          <CodeBlock
            code={`// التحكم الشرطي باستخدام useAuth

"use client";

import { useAuth, useUser } from "@clerk/clerk-react";

export function DashboardContent() {
  const { isSignedIn, userId } = useAuth();
  const { user, isLoaded } = useUser();

  // حالة التحميل
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-500">جاري التحميل...</div>
      </div>
    );
  }

  // حالة عدم تسجيل الدخول
  if (!isSignedIn) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">يجب تسجيل الدخول أولاً</h2>
        <a href="/sign-in" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          تسجيل الدخول
        </a>
      </div>
    );
  }

  // حالة المستخدم المسجّل دخوله
  return (
    <div>
      <h1>مرحباً {user.firstName}!</h1>
      <p>معرف المستخدم: {userId}</p>
      <p>البريد الإلكتروني: {user.emailAddresses[0].emailAddress}</p>
      <img src={user.imageUrl} alt="الصورة" className="w-16 h-16 rounded-full" />
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* ==================== القسم الرابع: تخصيص المظهر ==================== */}
        <LessonSection title="تخصيص المظهر">
          <p className="text-lg leading-relaxed mb-4">
            Clerk يوفّر نظام تخصيص مظهر (Appearance) قوي يمكنك من خلاله تغيير ألوان الخطوط
            والزوايا والظلال في جميع مكونات المصادقة. يمكنك تخصيص المظهر على مستوى ClerkProvider
            أو على مستوى كل مكون على حدة.
          </p>

          <h3 className="text-xl font-bold mb-3">التخصيص على مستوى ClerkProvider</h3>

          <CodeBlock
            code={`// تخصيص المظهر العام لجميع مكونات Clerk

"use client";

import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        // تخصيص العناصر الأساسية
        elements: {
          // حقل الإدخال
          formFieldInput: "border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500",
          // الزر الأساسي
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg",
          // رابط نسيت كلمة المرور
          footerActionLink: "text-blue-600 hover:text-blue-800",
          // حاوية النموذج
          card: "shadow-xl rounded-2xl",
          // رأس الصفحة
          headerTitle: "text-2xl font-bold text-gray-900",
          headerSubtitle: "text-gray-500",
          // صندوق الخطأ
          alertBox: "bg-red-50 border border-red-200 rounded-lg",
          // زر الحساب الاجتماعي
          socialButtonsBlockButton: "border-2 border-gray-300 hover:border-gray-400 rounded-lg",
          // شعار المستخدم
          avatarBox: "w-10 h-10",
        },
        // تخصيص المتغيرات CSS
        variables: {
          colorPrimary: "#2563EB",       // اللون الأساسي
          colorBackground: "#FFFFFF",     // لون الخلفية
          colorText: "#1F2937",          // لون النص
          colorTextSecondary: "#6B7280", // لون النص الثانوي
          borderRadius: "0.75rem",       // نصف قطر الزوايا
          fontFamily: "Inter, sans-serif", // الخط
        },
        // تخطيط عام
        layout: {
          socialButtonsPlacement: "top", // وضع أزرار الحسابات الاجتماعية
          termsPageUrl: "/terms",       // صفحة الشروط
        },
      }}
    >
      <html lang="ar" dir="rtl">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">التخصيص على مستوى المكون</h3>
          <p className="text-lg leading-relaxed mb-4">
            يمكنك أيضًا تخصيص مظهر مكون محدد دون التأثير على الآخرين.
          </p>

          <CodeBlock
            code={`// تخصيص مظهر مكون محدد

import { SignIn, SignUp } from "@clerk/nextjs";

export default function AuthPages() {
  return (
    <div className="flex gap-8 justify-center">
      {/* تخصيص مظهر تسجيل الدخول بلون أخضر */}
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-green-600 hover:bg-green-700",
            card: "shadow-2xl rounded-3xl border-2 border-green-200",
          },
          variables: {
            colorPrimary: "#16A34A",
          },
        }}
      />

      {/* تخصيص مظهر إنشاء الحساب بلون بنفسجي */}
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: "bg-purple-600 hover:bg-purple-700",
            card: "shadow-2xl rounded-3xl border-2 border-purple-200",
          },
          variables: {
            colorPrimary: "#9333EA",
          },
        }}
      />
    </div>
  );
}`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">تخصيص المظهر للوضع الداكن (Dark Mode)</h3>
          <p className="text-lg leading-relaxed mb-4">
            Clerk يدعم الوضع الداكن بشكل أصلي. يمكنك تمرير إعدادات
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">baseTheme</code>
            في Appearance لتخصيص الألوان في الوضع الداكن.
          </p>

          <CodeBlock
            code={`// تخصيص المظهر للوضع الداكن والفاتح

"use client";

import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#3B82F6",
          colorText: "#1F2937",
        },
        elements: {
          formFieldInput: "transition-colors duration-200",
          formButtonPrimary: "transition-all duration-200 hover:shadow-lg",
        },
      }}
    >
      <html lang="ar" dir="rtl" suppressHydrationWarning>
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

// ملاحظة: Clerk يكشف تلقائيًا عن وضع المظهر الداكن
// من إعدادات المتصفح أو من كلاس "dark" على عنصر html`}
            language="jsx"
          />

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
            <p className="text-purple-800 dark:text-purple-200 font-semibold mb-2">نصائح لتخصيص المظهر</p>
            <ul className="list-disc list-inside space-y-1 text-purple-700 dark:text-purple-300">
              <li>ابدأ بالإعدادات الافتراضية ثم عدّل حسب الحاجة</li>
              <li>استخدم Variables لتغيير الألوان الأساسية بسرعة</li>
              <li>استخدم Elements للتحكم الدقيق في كل عنصر</li>
              <li>اختبر المظهر في وضع Light و Dark معًا</li>
              <li>تأكد من أن التباين (Contrast) كافٍ لسهولة القراءة</li>
            </ul>
          </div>
        </LessonSection>

        {/* ==================== القسم الخامس: مزودات الهوية الاجتماعية ==================== */}
        <LessonSection title="مزودات الهوية الاجتماعية">
          <p className="text-lg leading-relaxed mb-4">
            يدعم Clerk أكثر من 20 مزودًا للمصادقة الاجتماعية (OAuth Providers). يمكنك تفعيل
            أي منها من لوحة تحكم Clerk في قسم Configure ثم User and Authentication ثم Social Connections.
          </p>

          <h3 className="text-xl font-bold mb-3">المزودات المدعومة</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">Google</div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">GitHub</div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">Facebook</div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">Twitter/X</div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">Apple</div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">Microsoft</div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">LinkedIn</div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">GitLab</div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">Discord</div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">Twitch</div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">YouTube</div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center text-sm font-medium">Notion</div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">تفعيل المزودات من لوحة التحكم</h3>
          <p className="text-lg leading-relaxed mb-4">
            لتفعيل مزود اجتماعي في Clerk، اتبع الخطوات التالية:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-lg mb-4">
            <li>اذهب إلى لوحة تحكم Clerk على dashboard.clerk.com</li>
            <li>اختر تطبيقك</li>
            <li>انتقل إلى Configure ثم User and Authentication</li>
            <li>اختر Social Connections</li>
            <li>فعّل المزود الذي تريده (مثل Google أو GitHub)</li>
            <li>أدخل بيانات الاعتماد (Client ID و Client Secret) من المزود</li>
            <li>احفظ التغييرات</li>
          </ol>

          <h3 className="text-xl font-bold mb-3 mt-6">استخدام الحسابات الاجتماعية في الكود</h3>
          <p className="text-lg leading-relaxed mb-4">
            بعد تفعيل المزودات من لوحة التحكم، ستظهر تلقائيًا في مكونات تسجيل الدخول. يمكنك
            أيضًا إنشاء أزرار مخصصة للحسابات الاجتماعية باستخدام
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useSignIn</code>
            hook.
          </p>

          <CodeBlock
            code={`// إنشاء أزرار مخصصة للحسابات الاجتماعية

"use client";

import { useSignIn } from "@clerk/clerk-react";

export function OAuthButtons() {
  const { signIn, isLoaded } = useSignIn();

  const handleGoogleSignIn = async () => {
    if (!isLoaded) return;

    // بدء عملية تسجيل الدخول بـ Google
    await signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/dashboard",
    });
  };

  const handleGitHubSignIn = async () => {
    if (!isLoaded) return;

    // بدء عملية تسجيل الدخول بـ GitHub
    await signIn.authenticateWithRedirect({
      strategy: "oauth_github",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/dashboard",
    });
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all"
      >
        تسجيل الدخول بـ Google
      </button>

      <button
        onClick={handleGitHubSignIn}
        className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all"
      >
        تسجيل الدخول بـ GitHub
      </button>
    </div>
  );
}`}
            language="jsx"
          />

          <CodeBlock
            code={`// صفحة SSO Callback مطلوبة للحسابات الاجتماعية

import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SSOCallbackPage() {
  // هذه الصفحة تتعامل مع إعادة التوجيه من مزود الهوية الاجتماعية
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">جاري التحقق من الحساب...</p>
      </div>
      <AuthenticateWithRedirectCallback />
    </div>
  );
}`}
            language="jsx"
          />

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-green-800 dark:text-green-200 font-semibold mb-2">مهم: إنشاء مسار SSO Callback</p>
            <p className="text-green-700 dark:text-green-300">
              عند استخدام الحسابات الاجتماعية مع التحويل (Redirect)، تحتاج لإنشاء مسار
              <code className="bg-green-100 dark:bg-green-800 px-1 rounded text-sm font-mono">/sso-callback</code>
              في مشروعك يحتوي على مكون
              <code className="bg-green-100 dark:bg-green-800 px-1 rounded text-sm font-mono">AuthenticateWithRedirectCallback</code>
              . هذا المكون يتعامل مع إعادة التوجيه من مزود الهوية和社会ية.
            </p>
          </div>
        </LessonSection>

        {/* ==================== القسم السادس: Quiz ==================== */}
        <LessonSection title="اختبر معلوماتك">
          <p className="text-lg leading-relaxed mb-6">
            أجب عن الأسئلة التالية للتأكد من فهمك لمكونات المصادقة في Clerk.
          </p>

          <Quiz
            question={`ما هو الفرق بين mode="modal" و mode="navigation" في SignInButton؟`}
            options={[
              "Modal يفتح صفحة جديدة وNavigation يفتح نافذة منبثقة",
              "Modal يفتح نافذة منبثقة فوق الصفحة الحالية وNavigation يُحوّل لصفحة تسجيل الدخول",
              "Modal للحسابات الاجتماعية فقط وNavigation للبريد الإلكتروني",
              "لا يوجد فرق بينهما"
            ]}
            correctAnswer={1}
            explanation={`mode="modal" يفتح نافذة منبثقة (Dialog) فوق الصفحة الحالية دون تغيير المسار. أما mode="navigation" فيُحوّل المستخدم إلى صفحة تسجيل الدخول ويُغيّر المسار في شريط العنوان. Modal مناسب للتجربة السلسة، وNavigation مناسب للصفحات المخصصة.`}
          />

          <Quiz
            question={`أي من المكونات التالية يُستخدم للتحكم الشرطي في عرض المحتوى بناءً على حالة تسجيل الدخول في إصدارات Clerk الحديثة؟`}
            options={[
              "SignedIn و SignedOut",
              "AuthGate و AuthGuard",
              "Show مع when=\"signed-in\" و when=\"signed-out\"",
              "ConditionalRender و AuthCheck"
            ]}
            correctAnswer={2}
            explanation={`في إصدارات Clerk الحديثة، يُستخدم مكون Show مع الخاصية when للكتابة الشرطية. when="signed-in" لعرض المحتوى عند تسجيل الدخول، و when="signed-out" لعرض المحتوى عند عدم تسجيل الدخول. المكونات القديمة SignedIn و SignedOut لم تعد الطريقة الموصى بها.`}
          />

          <Quiz
            question={`كيف يمكنك تخصيص مظهر مكون SignIn فقط دون التأثير على باقي مكونات Clerk؟`}
            options={[
              "بتعديل ملف CSS العام للمشروع",
              "بتمرير خاصية appearance مباشرة إلى مكون SignIn",
              "باستخدام class name مخصص على مكون SignIn",
              "لا يمكن تخصيص مظهر مكون واحد بشكل منفصل"
            ]}
            correctAnswer={1}
            explanation={`يمكنك تمرير خاصية appearance مباشرة إلى أي مكون Clerk (SignIn, SignUp, UserProfile) لتخصيص مظهره دون التأثير على الآخرين. هذه الخاصية تدعم elements و variables و baseTheme. كما يمكنك التخصيص على مستوى ClerkProvider لتأثير عام على جميع المكونات.`}
          />
        </LessonSection>

        {/* ==================== القسم السابع: CheatSheet ==================== */}
        <CheatSheet title="مرجع مكونات المصادقة - Auth Components Reference">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-lg mb-2">مكونات النماذج</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignIn />"}</code> - نموذج تسجيل الدخول الكامل</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignUp />"}</code> - نموذج إنشاء الحساب الكامل</li>
                <li>المسار المطلوب: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"[[...sign-in]]"}</code> و <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"[[...sign-up]]"}</code></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">الأزرار</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignInButton />"}</code> - زر تسجيل الدخول (يدعم mode="modal" و "navigation")</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignUpButton />"}</code> - زر إنشاء الحساب (يدعم mode="modal" و "navigation")</li>
                <li>يدعمان Render Props Pattern لتخصيص الزر بالكامل</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">التحكم الشرطي</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<Show when=\"signed-in\">"}</code> - يُعرض المحتوى عند تسجيل الدخول</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<Show when=\"signed-out\">"}</code> - يُعرض المحتوى عند عدم تسجيل الدخول</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useAuth()</code> - hook للتحكم الشرطي في Client Components</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useUser()</code> - hook لجلب بيانات المستخدم</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">التخصيص</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">appearance.elements</code> - تخصيص CSS لكل عنصر</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">appearance.variables</code> - تخصيص المتغيرات (ألوان، خطوط، زوايا)</li>
                <li>التخصيص متاح على مستوى ClerkProvider (عام) أو المكون (محدد)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">الحسابات الاجتماعية</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>تُفعّل من Clerk Dashboard في قسم Social Connections</li>
                <li>تظهر تلقائيًا في مكونات SignIn و SignUp</li>
                <li>تتطلب مسار SSO Callback مع <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">AuthenticateWithRedirectCallback</code></li>
                <li>تدعم أكثر من 20 مزود: Google, GitHub, Facebook, Apple, Microsoft, etc.</li>
              </ul>
            </div>
          </div>
        </CheatSheet>

        {/* ==================== القسم الثامن: Challenge ==================== */}
        <Challenge title="تحدي: بناء صفحة هبوط مع نافذة تسجيل الدخول المنبثقة">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              في هذا التحدي، ستبني صفحة هبوط (Landing Page) احترافية تحتوي على زر تسجيل دخول
              يفتح نموذج Clerk كنافذة منبثقة.
            </p>

            <h4 className="font-bold text-lg mt-4">المتطلبات:</h4>
            <ol className="list-decimal list-inside space-y-3">
              <li className="text-lg">
                صفحة هبوط تحتوي على:
                <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                  <li>عنوان رئيسي جذاب ونص ترحيبي</li>
                  <li>قائمة ميزات المشروع (3-4 ميزات)</li>
                  <li>نص دعوة للاشتراك (CTA)</li>
                </ul>
              </li>
              <li className="text-lg">
                شريط علوي (Navbar) يحتوي على:
                <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                  <li>شعار أو اسم المشروع</li>
                  <li>زر تسجيل الدخول بوضع Modal</li>
                  <li>زر إنشاء حساب بوضع Modal</li>
                </ul>
              </li>
              <li className="text-lg">
                عرض محتوى مختلف بناءً على حالة تسجيل الدخول باستخدام
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<Show />"}</code>
              </li>
              <li className="text-lg">
                تخصيص مظهر مكونات Clerk ليتناسب مع تصميم الصفحة
              </li>
            </ol>

            <CodeBlock
              code={`// هيكل صفحة الهبوط المطلوبة

"use client";

import { SignInButton, SignUpButton, UserButton, Show } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* شريط علوي */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">منصتنا</h1>
        <div className="flex gap-4 items-center">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="text-gray-700 hover:text-gray-900 font-semibold">
                تسجيل الدخول
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                ابدأ مجانًا
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <a href="/dashboard" className="text-gray-700 hover:text-gray-900">
              لوحة التحكم
            </a>
            <UserButton afterSignOutUrl="/" />
          </Show>
        </div>
      </nav>

      {/* محتوى الصفحة الرئيسية */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            تعلّم البرمجة بطريقة أسهل
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            منصة تعليمية متكاملة تساعدك على تعلم أحدث التقنيات
          </p>
        </div>
      </main>
    </div>
  );
}`}
              language="jsx"
            />

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-4">
              <p className="text-green-800 dark:text-green-200 font-semibold mb-2">المطلوب للإكمال:</p>
              <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
                <li>صفحة هبوط كاملة بتصميم احترافي</li>
                <li>زر تسجيل دخول يعمل كنافذة منبثقة</li>
                <li>زر إنشاء حساب يعمل كنافذة منبثقة</li>
                <li>محتوى يتغير بناءً على حالة تسجيل الدخول</li>
                <li>مظهر مخصص لمكونات Clerk يتناسب مع التصميم</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200 font-semibold">نصيحة للتحدي المتقدم:</p>
              <p className="text-yellow-700 dark:text-yellow-300">
                حاول إضافة تأثيرات حركية (Animations) لزر تسجيل الدخول عند الفتح والإغلاق.
                يمكنك استخدام مكتبات مثل Framer Motion مع Clerk لتحسين تجربة المستخدم.
                تأكد من اختبار الصفحة على الأجهزة المحمولة أيضًا.
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
