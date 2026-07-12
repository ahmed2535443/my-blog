import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function WhatIsClerk() {
  const lesson = getLessonBySlug("clerk", "01-what-is-clerk");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== القسم الأول: ما هو Clerk؟ ==================== */}
        <LessonSection title="ما هو Clerk؟">
          <p className="text-lg leading-relaxed mb-4">
            Clerk هو حل متكامل للمصادقة والتفويض (Authentication & Authorization) يعمل بنموذج
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">SaaS</code>
            أي الخدمة كنوع من השירות. بدلاً من بناء نظام مصادقة كامل من الصفر، يوفر لك Clerk كل ما تحتاجه
            لإدارة المستخدمين وجلساتهم وصلاحياتهم.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            أسس Clerk كل من
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">Colin Sidoti</code>
            و
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">Braden Sidoti</code>
            بهدف تبسيط عملية المصادقة للمطورين. بدلاً من قضاء أسابيع في بناء وصيانة أنظمة تسجيل الدخول والخروج،
            يمكنك الآن دمج Clerk في مشروعك في دقائق معدودة.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">لماذا يُعتبر Clerk حلاً متكاملاً؟</p>
            <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
              <li>يوفّر واجهات مستخدم جاهزة (UI Components) لتسجيل الدخول والخروج</li>
              <li>يدعم أنواع متعددة من المصادقة: البريد الإلكتروني، كلمات المرور، الرسائل النصية، والحسابات الاجتماعية</li>
              <li>يدير جلسات المستخدمين تلقائيًا مع JWT Tokens</li>
              <li>يدعم المنظمات (Organizations) والteams متعددة المستخدمين</li>
              <li>يتكامل بشكل أصلي مع Next.js وReact وأطر العمل الأخرى</li>
              <li>يوفّر API للخادم (Server) وواجهات hooks للعميل (Client)</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-4">
            باختصار، Clerk يأخذ عبء بناء نظام المصادقة الكامل من على كتفك، فيمكنك التركيز على بناء
            الميزات الرئيسية لتطبيقك بدلاً من إعادة اختراع العجلة.
          </p>

          <CodeBlock
            code={`// مثال بسيط: كيفية استخدام Clerk في مشروع Next.js
// أولاً: استيراد المكونات من Clerk
import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

// في الخادم: جلب بيانات المستخدم الحالي
export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div>
      <h1>مرحباً {user.firstName}</h1>
      <p>البريد الإلكتروني: {user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}`}
            language="jsx"
          />

          <p className="text-lg leading-relaxed mt-4">
            كما ترى في المثال أعلاه، Clerk يوفّر واجهة بسيطة وواضحة. في الخادم، نستخدم الدالة
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">currentUser()</code>
            لجلب بيانات المستخدم المسجل دخوله. وفي الواجهة الأمامية، نستخدم مكونات مثل
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignIn />"}</code>
            لعرض نماذج تسجيل الدخول.
          </p>
        </LessonSection>

        {/* ==================== القسم الثاني: لماذا Clerk بدلاً من الحلول الأخرى ==================== */}
        <LessonSection title="لماذا Clerk بدلاً من الحلول الأخرى؟">
          <p className="text-lg leading-relaxed mb-6">
            هناك العديد من حلول المصادقة المتاحة للمطورين. دعنا نقارن Clerk بأكثر الحلول شيوعًا
            لمساعدتك في اتخاذ القرار الصحيح لمشروعك.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-right">الميزة</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-right">Clerk</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-right">NextAuth.js</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-right">Firebase Auth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">سهولة الاستخدام</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">ممتازة جدًا</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">متوسطة</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">جيدة</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">واجهات مستخدم جاهزة</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">نعم (متكاملة)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">لا (تحتاج بناء)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">لا (تحتاج بناء)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">إدارة الجلسات</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">تلقائية بالكامل</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">تلقائية</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">تلقائية</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">حسابات اجتماعية</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">+20 مزود</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">+50 مزود</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">+10 مزود</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">دعم المنظمات</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">مدمج</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">غير متوفر</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">غير متوفر</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">التكلفة</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">مجاني حتى 10K مستخدم</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">مجاني (مفتوح المصدر)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">مجاني حتى حد معين</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">التوافق مع Next.js</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">ممتاز (مخصص)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">ممتاز (أصلي)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">جيد</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">التحكم الشرطي (Conditional)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">{"<Show />"} مكونات</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">useSession hook</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">onAuthStateChanged</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">متى تختار Clerk؟</h3>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            <li>عندما تريد نظام مصادقة سريع وسهل الإعداد بدون تعقيدات</li>
            <li>عندما تحتاج واجهات مستخدم جاهزة واحترافية لتسجيل الدخول</li>
            <li>عندما تعمل على تطبيق SaaS يحتاج دعم المنظمات والأدوار</li>
            <li>عندما تريد التكامل الأصلي مع Next.js/App Router</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">متى تختار NextAuth.js؟</h3>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            <li>عندما تريد حلاً مفتوح المصدر بالكامل</li>
            <li>عندما تحتاج التحكم الكامل في عملية المصادقة</li>
            <li>عندما تريد تجنب الاعتماد على خدمة خارجية (SaaS)</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">متى تختار Firebase Auth؟</h3>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            <li>عندما تستخدم بالفعل منصة Firebase لمشروعك</li>
            <li>عندما تحتاج التكامل مع Firestore وخدمات Google الأخرى</li>
            <li>عندما تبني تطبيقًا خلّيALLYًا على بنية Google Cloud</li>
          </ul>
        </LessonSection>

        {/* ==================== القسم الثالث: معمارية Clerk ==================== */}
        <LessonSection title="معمارية Clerk">
          <p className="text-lg leading-relaxed mb-4">
            لفهم كيفية عمل Clerk بشكل عميق، يجب أن تعرف المعمارية الأساسية التي يعتمد عليها النظام.
            Clerk يتكون من ثلاثة طبقات رئيسية تعمل معًا بشكل سلس.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-6 font-mono text-sm">
            <div className="text-center space-y-2">
              <div className="bg-blue-200 dark:bg-blue-800 rounded p-3 inline-block">
                Clerk Frontend API (Backend Service)
              </div>
              <div className="text-gray-500">{"<====>"} communicates via HTTPS {"<====>"}</div>
              <div className="flex justify-center gap-4">
                <div className="bg-green-200 dark:bg-green-800 rounded p-3">
                  Clerk SDK<br />(@clerk/nextjs)
                </div>
                <div className="bg-purple-200 dark:bg-purple-800 rounded p-3">
                  Your Next.js Server<br />(API Routes + Pages)
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3">الطبقة الأولى: Clerk SDK</h3>
          <p className="text-lg leading-relaxed mb-4">
            Clerk SDK هو الحزمة التي تثبّتها في مشروعك. بالنسبة لـ Next.js، الحزمة هي
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">@clerk/nextjs</code>
            . توفر هذه الحزمة المكونات (Components)، والـ Hooks، والدوال المساعدة (Server Helpers)
            التي تحتاجها للتكامل مع Clerk.
          </p>

          <CodeBlock
            code={`// الحزمة الرئيسية لـ Clerk في Next.js
// تثبيتها عبر npm:
// npm install @clerk/nextjs

// الاستيراد الأساسي في ملفات المشروع:
import { ClerkProvider, SignIn, SignUp } from "@clerk/nextjs";
import { useUser, useAuth } from "@clerk/clerk-react";
import { auth, currentUser } from "@clerk/nextjs/server";`}
            language="javascript"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">الطبقة الثانية: Clerk Frontend API</h3>
          <p className="text-lg leading-relaxed mb-4">
            هذه هي الخدمة السحابية التي ي HOSTها Clerk على خوادمه. تقوم بمعالجة جميع عمليات المصادقة
            وإدارة المستخدمين والجلسات. عندما يسجل مستخدم الدخول، يقوم الـ SDK بالتواصل مع هذه الخدمة
            عبر HTTPS لتأكيد هوية المستخدم.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">الطبقة الثالثة: خادمك (Your Server)</h3>
          <p className="text-lg leading-relaxed mb-4">
            خادمك (تطبيق Next.js) يتواصل مع Clerk SDK للتحقق من هوية المستخدمين وجلب بياناتهم.
            يستخدم Clerk نظام JWT Tokens لإدارة الجلسات بشكل فعال وآمن.
          </p>

          <CodeBlock
            code={`// كيف يعمل تدفق المصادقة في Clerk:

// 1. المستخدم يزور صفحة محمية في تطبيقك
// 2. Clerk Middleware يتحقق من وجود جلسة صالحة (JWT Token)

// في ملف proxy.ts (Next.js 16) أو middleware.ts:
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // إذا كان المستخدم مسجّل الدخول والمسار محمي
  if (isProtectedRoute(req)) {
    await auth.protect(); // يُوجّه لصفحة تسجيل الدخول
  }
});

// 3. إذا كان المستخدم مسجّل الدخول، يتم تمرير بيانات المستخدم
// 4. إذا لم يكن مسجّل الدخول، يُوجّه لصفحة تسجيل الدخول`}
            language="javascript"
          />

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">ملاحظة مهمة حول JWT Tokens</p>
            <p className="text-yellow-700 dark:text-yellow-300">
              Clerk يستخدم JWT (JSON Web Tokens) لإدارة الجلسات. الـ Token هو نص مشفر يحتوي على معلومات
              المستخدم وصلاحياته. يتم إنشاؤه عند تسجيل الدخول ويُتحقق منه في كل طلب. الـ Token يُخزّن
              في الكوكيز (Cookies) بشكل آمن.
            </p>
          </div>
        </LessonSection>

        {/* ==================== القسم الرابع: ما يوفره Clerk ==================== */}
        <LessonSection title="ما يوفره Clerk؟">
          <p className="text-lg leading-relaxed mb-4">
            Clerk يوفّر مجموعة شاملة من الأدوات والمكونات التي تغطي جميع احتياجات المصادقة.
            إليك نظرة تفصيلية على كل ما يوفّره Clerk.
          </p>

          <h3 className="text-xl font-bold mb-3">المكونات الجاهزة (Components)</h3>
          <p className="text-lg leading-relaxed mb-4">
            Clerk يوفّر مكونات React جاهزة يمكنك استخدامها مباشرة في تطبيقك. هذه المكونات تحتوي
            على جميع النماذج والوظائف اللازمة لإدارة حسابات المستخدمين.
          </p>

          <CodeBlock
            code={`// المكونات الأساسية في Clerk:

// 1. مكون تسجيل الدخول - يوفر نموذج تسجيل الدخول الكامل
import { SignIn } from "@clerk/nextjs";

// يستخدم مع مسار catch-all:
// app/sign-in/[[...sign-in]]/page.js
export default function SignInPage() {
  return <SignIn />;
}

// 2. مكون إنشاء الحساب - يوفر نموذج التسجيل الكامل
import { SignUp } from "@clerk/nextjs";

// يستخدم مع مسار catch-all:
// app/sign-up/[[...sign-up]]/page.js
export default function SignUpPage() {
  return <SignUp />;
}

// 3. زر المستخدم - يعرض صورة المستخدم وقائمة منسدلة
import { UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header>
      <nav>
        <UserButton afterSignOutUrl="/" />
      </nav>
    </header>
  );
}

// 4. ملف المستخدم - صفحة كاملة لإدارة الملف الشخصي
import { UserProfile } from "@clerk/nextjs";

// يستخدم مع مسار catch-all:
// app/user-profile/[[...user-profile]]/page.js
export default function UserProfilePage() {
  return <UserProfile />;
}

// 5. مفتاح تبديل المنظمة - للتطبيقات متعددة المستخدمين
import { OrganizationSwitcher } from "@clerk/nextjs";

export function Sidebar() {
  return (
    <aside>
      <OrganizationSwitcher />
    </aside>
  );
}`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">الـ Hooks (الخطافات)</h3>
          <p className="text-lg leading-relaxed mb-4">
            Clerk يوفّر hooks خاصة يمكنك استخدامها في مكونات React للوصول إلى بيانات المستخدم
            ومعلومات المصادقة.
          </p>

          <CodeBlock
            code={`// Hooks الأساسية في Clerk:

"use client"; // مطلوب لأنها hooks

import { useUser, useAuth } from "@clerk/clerk-react";

// 1. useUser - يوفر بيانات المستخدم الحالي
export function UserProfile() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>جاري التحميل...</div>;
  }

  if (!isSignedIn) {
    return <div>لم تسجل الدخول بعد</div>;
  }

  return (
    <div>
      <img src={user.imageUrl} alt="صورة المستخدم" />
      <h2>{user.firstName} {user.lastName}</h2>
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}

// 2. useUser - يوفر معلومات المصادقة الأساسية
export function AuthInfo() {
  const { isSignedIn, sessionId, userId, signOut } = useAuth();

  return (
    <div>
      {isSignedIn ? (
        <div>
          <p>معرف المستخدم: {userId}</p>
          <p>معرف الجلسة: {sessionId}</p>
          <button onClick={signOut}>تسجيل الخروج</button>
        </div>
      ) : (
        <p>غير مسجّل الدخول</p>
      )}
    </div>
  );
}`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">الدوال المساعدة للخادم (Server Helpers)</h3>
          <p className="text-lg leading-relaxed mb-4">
            في الخادم (Server Components وServer Actions)، يوفّر Clerk دوالًا مساعدة لجلب بيانات
            المستخدم والتحقق من الهوية.
          </p>

          <CodeBlock
            code={`// الدوال المساعدة للخادم في Clerk:

// 1. auth() - يوفر معلومات المصادقة الحالية
import { auth } from "@clerk/nextjs/server";

export default async function ServerComponent() {
  const { userId, sessionId, sessionClaims } = await auth();

  if (!userId) {
    return <div>غير مصرح</div>;
  }

  return (
    <div>
      <p>معرف المستخدم: {userId}</p>
      <p>البريد: {sessionClaims.email}</p>
    </div>
  );
}

// 2. currentUser() - يجلب كائن المستخدم الكامل من Clerk API
import { currentUser } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const user = await currentUser();

  if (!user) {
    return <div>لم يتم العثور على المستخدم</div>;
  }

  return (
    <div>
      <h1>الملف الشخصي</h1>
      <p>الاسم: {user.firstName} {user.lastName}</p>
      <p>البريد: {user.emailAddresses[0].emailAddress}</p>
      <p>تاريخ الإنشاء: {user.createdAt.toLocaleDateString("ar-SA")}</p>
      <img src={user.imageUrl} alt="الصورة" width={100} height={100} />
    </div>
  );
}

// ملاحظة: auth() أخف وزنًا因为它只 returns the session data
// بينما currentUser() يجلب البيانات الكاملة من Clerk API`}
            language="jsx"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">ملخص سريع لكل ما يوفّره Clerk</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">المكونات (Components)</h4>
              <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300 text-sm">
                <li>SignIn - تسجيل الدخول</li>
                <li>SignUp - إنشاء حساب</li>
                <li>UserButton - زر المستخدم</li>
                <li>UserProfile - الملف الشخصي</li>
                <li>OrganizationSwitcher - تبديل المنظمة</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">الخطافات (Hooks)</h4>
              <ul className="list-disc list-inside space-y-1 text-purple-700 dark:text-purple-300 text-sm">
                <li>useUser - بيانات المستخدم</li>
                <li>useAuth - معلومات المصادقة</li>
                <li>useSession - بيانات الجلسة</li>
                <li>useOrganization - بيانات المنظمة</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">دوال الخادم (Server)</h4>
              <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                <li>auth() - معلومات المصادقة</li>
                <li>currentUser() - بيانات المستخدم</li>
                <li>clerkMiddleware() - الوسيط</li>
              </ul>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">أدوات أخرى</h4>
              <ul className="list-disc list-inside space-y-1 text-orange-700 dark:text-orange-300 text-sm">
                <li>Webhooks - أحداث المستخدمين</li>
                <li>JWT Templates - قوالب الرموز</li>
                <li>Organizations - المنظمات</li>
                <li>Email & SMS - الإشعارات</li>
              </ul>
            </div>
          </div>
        </LessonSection>

        {/* ==================== القسم الخامس: Quiz ==================== */}
        <LessonSection title="اختبر معلوماتك">
          <p className="text-lg leading-relaxed mb-6">
            أجب عن الأسئلة التالية للتأكد من فهمك للمفاهيم الأساسية لـ Clerk.
          </p>

          <Quiz
            question={`ما هو الدور الرئيسي لـ Clerk في تطبيق Next.js؟`}
            options={[
              "إدارة قاعدة البيانات",
              "توفير حل متكامل للمصادقة والتفويض",
              "إدارة الحالة (State Management)",
              "بناء واجهات المستخدم"
            ]}
            correctAnswer={1}
            explanation={`Clerk هو حل SaaS متكامل للمصادقة والتفويض. يوفّر واجهات مستخدم جاهزة، إدارة جلسات، دعم حسابات اجتماعية، و APIs للخادم والعميل. لا علاقة له بإدارة قاعدة البيانات أو الحالة أو بناء الواجهات بشكل عام.`}
          />

          <Quiz
            question={`أي من الدوال التالية تُستخدم في الخادم (Server Components) لجلب بيانات المستخدم الكاملة؟`}
            options={[
              "useUser()",
              "useAuth()",
              "currentUser()",
              "getUser()"
            ]}
            correctAnswer={2}
            explanation={`الدالة currentUser() هي التي تُستخدم في الخادم لجلب كائن المستخدم الكامل من Clerk API. أما useUser() و useAuth() فهما hooks تُستخدم في المكونات العميلية (Client Components). الدالة getUser() غير موجودة في Clerk.`}
          />

          <Quiz
            question={`ما هو المكون الذي يُستخدم لإنشاء مسار تسجيل الدخول مع المسار اللامحدود (catch-all route)؟`}
            options={[
              "<AuthForm />",
              "<SignIn />",
              "<LoginForm />",
              "<ClerkAuth />"
            ]}
            correctAnswer={1}
            explanation={`المكون SignIn هو المكون الرئيسي لتسجيل الدخول في Clerk. يُوضع في مسار لامحدود مثل app/sign-in/[[...sign-in]]/page.js لدعم جميع حالات تسجيل الدخول البريد الإلكتروني، كلمات المرور، الرسائل النصية، والحسابات الاجتماعية.`}
          />
        </LessonSection>

        {/* ==================== القسم السادس: CheatSheet ==================== */}
        <CheatSheet title="ملخص مفاهيم Clerk الأساسية">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-lg mb-2">تعريف Clerk</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Clerk هو حل SaaS (الخدمة كنوع من الخدمات) للمصادقة والتفويض. يوفّر واجهات مستخدم جاهزة،
                إدارة جلسات، و APIs متكاملة مع Next.js و React.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">المكونات الرئيسية</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignIn />"}</code> - نموذج تسجيل الدخول الكامل</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<SignUp />"}</code> - نموذج إنشاء الحساب الكامل</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<UserButton />"}</code> - زر وصورة المستخدم مع قائمة منسدلة</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<UserProfile />"}</code> - صفحة إدارة الملف الشخصي</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<OrganizationSwitcher />"}</code> - مفتاح تبديل المنظمة</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">الدوال والـ Hooks</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useUser()</code> - hook يوفر بيانات المستخدم في العميل</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useAuth()</code> - hook يوفر معلومات المصادقة في العميل</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth()</code> - دالة للخادم تُرجع معلومات المصادقة</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">currentUser()</code> - دالة للخادم تجلب بيانات المستخدم الكاملة</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">الملفات الأساسية</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">proxy.ts</code> - ملف الوسيط (Middleware) في Next.js 16</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">.env.local</code> - ملف متغيرات البيئة (المفاتيح)</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">layout.tsx</code> - ملف التخطيط الجذري مع ClerkProvider</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">المسارات الافتراضية</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">/sign-in</code> - مسار تسجيل الدخول</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">/sign-up</code> - مسار إنشاء الحساب</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">/user-profile</code> - مسار الملف الشخصي</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">مفتاح المقارنة السريعة</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Clerk = أسهل حل + واجهات جاهزة + دعم المنظمات
                <br />
                NextAuth.js = مفتوح المصدر + تحكم كامل
                <br />
                Firebase Auth = مناسب لمشاريع Firebase
              </p>
            </div>
          </div>
        </CheatSheet>

        {/* ==================== القسم السابع: مقارنة تفصيلية مع NextAuth.js ==================== */}
        <LessonSection title="مقارنة تفصيلية: Clerk مقابل NextAuth.js">
          <p className="text-lg leading-relaxed mb-4">
            لتفهم بشكل أفضل متى تختار Clerk بدلاً من NextAuth.js (الذي يُعرف الآن بـ Auth.js)،
            دعنا ن examined كل منهما من حيث المعمارية وتجربة المطور والميزات.
          </p>

          <h3 className="text-xl font-bold mb-3">NextAuth.js - نظرة عامة</h3>
          <p className="text-lg leading-relaxed mb-4">
            NextAuth.js هو حل مفتوح المصدر للمصادقة يعمل بشكل أصلي مع Next.js. يُشغّل على خادمك
            (Server) ويوفّر API endpoints للمصادقة. يمكنك تثبيته على خادمك بالكامل والتحكم الكامل
            في جميع الجوانب.
          </p>

          <CodeBlock
            code={`// مثال: إعداد NextAuth.js (للمقارنة فقط)

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  // تحتاج لبناء session مخصص
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
});`}
            language="javascript"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">الفرق الجوهري بينهما</h3>
          <p className="text-lg leading-relaxed mb-4">
            الفرق الجوهري هو أن NextAuth.js حل مفتوح المصدر يعمل على خادمك، بينما Clerk هو
            خدمة SaaS مُدارة بالكامل. هذا يعني أن Clerk يتولى إدارة الخوادم والأمان والتحديثات
            بدلاً منك.
          </p>

          <CodeBlock
            code={`// مثال: كيفية استخدام Clerk في كود الصفحة
// (مقارنة بـ NextAuth.js)

// في Clerk - بسيط ومباشر:
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();
  // user يحتوي على جميع البيانات مباشرة
  return <div>مرحباً {user.firstName}</div>;
}

// في NextAuth.js - تحتاج لإعداد إضافي:
// import { auth } from "@/auth";
// export default async function Page() {
//   const session = await auth();
//   // session قد لا يحتوي على كل البيانات
//   // تحتاج callbacks مخصصة لجلب بعض البيانات
//   return <div>مرحباً {session?.user?.name}</div>;
// }`}
            language="jsx"
          />

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mt-4">
            <p className="text-orange-800 dark:text-orange-200 font-semibold mb-2">الخلاصة</p>
            <p className="text-orange-700 dark:text-orange-300">
              اختر Clerk إذا كنت تريد حلاً سهلاً ومتكاملاً لا يحتاج لإعداد معقد. اختر NextAuth.js
              إذا كنت تريد تحكمًا كاملًا وتعمل على خادم خاص أو تفضل الحلول مفتوحة المصدر.
              كلاهما خياران ممتازان يعتمدان على احتياجات مشروعك.
            </p>
          </div>
        </LessonSection>

        {/* ==================== القسم الثامن: خطط تسعير Clerk ==================== */}
        <LessonSection title="خطط تسعير Clerk">
          <p className="text-lg leading-relaxed mb-4">
            Clerk يوفّر خطة مجانية سخية تكفي لمعظم المشاريع الناشئة. إليك نظرة على الخطط
            المتاحة لمساعدتك في التخطيط.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <h4 className="font-bold text-lg mb-2">Free</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">$0</p>
              <p className="text-gray-500 text-sm mb-4">شهريًا</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>حتى 10,000 مستخدم نشط شهريًا (MAU)</li>
                <li>جميع ميزات المصادقة الأساسية</li>
                <li>حسابات اجتماعية غير محدودة</li>
                <li> Organisation (منظمة واحدة)</li>
                <li>دعم عبر البريد الإلكتروني</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-lg p-5">
              <h4 className="font-bold text-lg mb-2">Pro</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">$25</p>
              <p className="text-gray-500 text-sm mb-4">شهريًا</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>حتى 10,000 مستخدم نشط شهريًا</li>
                <li>جميع ميزات Free</li>
                <li>منظمات غير محدودة</li>
                <li>Admin Portal</li>
                <li>دعم أولوي</li>
                <li>Custom branding</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <h4 className="font-bold text-lg mb-2">Enterprise</h4>
              <p className="text-3xl font-bold text-gray-600 mb-2">مخصص</p>
              <p className="text-gray-500 text-sm mb-4">للهيئات الكبيرة</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>مستخدمون غير محدودون</li>
                <li>جميع ميزات Pro</li>
                <li>SLA مخصص</li>
                <li>دعم مخصص</li>
                <li>SAML SSO</li>
                <li>Audit Logs</li>
              </ul>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            للطلاب والمطورين الناشئين، الخطة المجانية كافية تمامًا. يمكنك البدء بها الآن
            والترقية لاحقًا عندما ينمو مشروعك ويحتاج إلى ميزات إضافية.
          </p>
        </LessonSection>

        {/* ==================== القسم التاسع: Challenge ==================== */}
        <Challenge title="تحدي: إنشاء حساب Clerk واستكشاف لوحة التحكم">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              في هذا التحدي، ستصنع حساب Clerk مجاني و تستكشف لوحة التحكم لتتعرف على الميزات المتاحة.
            </p>

            <h4 className="font-bold text-lg mt-4">الخطوات المطلوبة:</h4>
            <ol className="list-decimal list-inside space-y-3">
              <li className="text-lg">
                اذهب إلى الموقع الرسمي لـ Clerk على
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">clerk.com</code>
                وأنشئ حسابًا مجانيًا جديدًا.
              </li>
              <li className="text-lg">
                بعد التسجيل، أنشئ تطبيقًا جديدًا (Create Application) واختر Next.js كإطار عمل.
              </li>
              <li className="text-lg">
                استكشف لوحة التحكم (Dashboard) وتعرف على الأقسام الرئيسية:
                <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                  <li>Users - قائمة المستخدمين</li>
                  <li>Sessions - الجلسات النشطة</li>
                  <li>Organizations - المنظمات</li>
                  <li>Configure - إعدادات التطبيق</li>
                  <li>Webhooks - أحداث النظام</li>
                </ul>
              </li>
              <li className="text-lg">
                في قسم Configure، استكشف إعدادات تسجيل الدخول (Email, Password, Social Providers).
              </li>
              <li className="text-lg">
                استكشف قسم Appearance لتخصيص مظهر مكونات Clerk.
              </li>
            </ol>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-4">
              <p className="text-green-800 dark:text-green-200 font-semibold mb-2">المطلوب للإكمال:</p>
              <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
                <li>إنشاء حساب Clerk مجاني</li>
                <li>إنشاء تطبيق جديد في لوحة التحكم</li>
                <li>نسخ مفاتيح API (Publishable Key و Secret Key)</li>
                <li>تفعيل مزود اجتماعي واحد على الأقل (Google أو GitHub)</li>
                <li>التقاط لقطة شاشة للوحة التحكم بعد الإعداد</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200 font-semibold">نصيحة:</p>
              <p className="text-yellow-700 dark:text-yellow-300">
                لا تقلق بشأن إعداد المشروع في Next.js الآن. سنقوم بذلك بالتفصيل في الدرس التالي.
                التركيز الآن على استكشاف لوحة التحكم وفهم ما يوفّره Clerk.
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
