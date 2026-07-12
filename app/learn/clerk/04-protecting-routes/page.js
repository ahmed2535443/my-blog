import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ProtectingRoutes() {
  const lesson = getLessonBySlug("clerk", "04-protecting-routes");

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
        <LessonSection title="مقدمة في حماية المسارات">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في أي تطبيق ويب، حماية المسارات (Route Protection) هي من أهم الأشياء التي يجب عليك التفكير فيها.
            عندما تبني تطبيقاً تعليمياً، تحتاج إلى التأكد من أن بعض الصفحات متاحة فقط للمستخدمين المسجلين،
            وبعض الصفحات متاحة فقط للمديرين، وبعض الصفحات عامة للجميع.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Clerk يوفر لك عدة طبقات حماية يمكنك استخدامها وفقاً لاحتياجاتك.
            في هذه الدرس، ستتعلم كيف تحما مساراتك باستخدام Middleware، وServer Components، وRoute Handlers، وServer Actions.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            سنتعلم أيضاً كيف تحمي مساراتك حسب الأدوار (Role-based Access Control) لتمكين المديرين من الوصول
            إلى صفحات لا يستطيع الطلاب الوصول إليها.
          </p>
        </LessonSection>

        {/* طبقات الحماية */}
        <LessonSection title="طبقات الحماية - Defense in Depth">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في Clerk، يمكنك حماية تطبيقك على عدة طبقات. هذه الطريقة تسمى "الحماية المتعددة الطبقات"
            (Defense in Depth)، وهي أفضل الممارسات الأمنية لأنها توفر حماية على مستوى متعدد.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-6">
            <h4 className="text-blue-800 dark:text-blue-300 font-bold mb-4">طبقات الحماية من الأعلى للأسفل:</h4>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong className="text-blue-700 dark:text-blue-400">Middleware (الطبقة الأولى):</strong>
                {" "}تفحص كل طلب قبل أن يصل إلى التطبيق. إذا كان المستخدم غير مسجل، يتم توجيهه فوراً إلى صفحة تسجيل الدخول.
              </li>
              <li>
                <strong className="text-blue-700 dark:text-blue-400">Layout (الطبقة الثانية):</strong>
                {" "}تحقق من حالة المستخدم في Layout وتحميه. يمكنها عرض محتوى مختلف حسب حالة تسجيل الدخول.
              </li>
              <li>
                <strong className="text-blue-700 dark:text-blue-400">Page (الطبقة الثالثة):</strong>
                {" "}تحقق من حالة المستخدم في الصفحة نفسها. يمكنك التحقق من الصلاحيات هنا.
              </li>
              <li>
                <strong className="text-blue-700 dark:text-blue-400">Server Action (الطبقة الرابعة):</strong>
                {" "}تحقق من حالة المستخدم في كل Server Action قبل تنفيذ أي عملية.
              </li>
            </ol>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            الفكرة هي أنه حتى إذا فشلت طبقة الحماية الأولى، هناك طبقات أخرى تحمي تطبيقك.
            على سبيل المثال، إذا تم تجاوز Middleware، يمكنك التحقق من الصلاحيات في الصفحة أو في Server Action.
          </p>

          <CodeBlock
            code={`// مثال على الطبقات المتعددة للحماية

// الطبقة 1: Middleware (proxy.ts)
export default clerkMiddleware({
  publicRoutes: ["/", "/api/webhooks"],
});

// الطبقة 2: Layout (dashboard/layout.js)
export default async function DashboardLayout({ children }) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return <div>{children}</div>;
}

// الطبقة 3: Page (dashboard/page.js)
export default async function DashboardPage() {
  const { userId, sessionClaims } = await auth();
  if (!userId) redirect("/sign-in");
  return <div>Welcome to Dashboard</div>;
}

// الطبقة 4: Server Action
async function createTask(formData) {
  "use server";
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  // تنفيذ العملية
}`}
            language="javascript"
          />
        </LessonSection>

        {/* clerkMiddleware في proxy.ts */}
        <LessonSection title="clerkMiddleware في proxy.ts">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في Next.js 16، يتم تعريف Middleware في ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">proxy.ts</code> بدلاً من <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">middleware.ts</code>.
            هذا الملف يحتوي على دالة Clerk Middleware التي تفحص كل طلب قبل أن يصل إلى التطبيق.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الدالة الأساسية هي <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">clerkMiddleware()</code> التي تستخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">createRouteMatcher()</code> لمطابقة المسارات العامة والمحمية.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">مثال كامل على proxy.ts:</h4>

          <CodeBlock
            code={`// proxy.ts - ملف Middleware في Next.js 16
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// تعريف المسارات العامة (لا تتطلب تسجيل دخول)
const publicRoutes = createRouteMatcher([
  "/",                    // الصفحة الرئيسية
  "/sign-in(.*)",         // صفحة تسجيل الدخول
  "/sign-up(.*)",         // صفحة التسجيل
  "/api/webhooks(.*)",    // Webhooks
  "/api/public(.*)",      // API عام
]);

// تعريف المسارات المحمية (تتطلب تسجيل دخول)
const protectedRoutes = createRouteMatcher([
  "/dashboard(.*)",       // لوحة التحكم
  "/profile(.*)",         // الملف الشخصي
  "/settings(.*)",        // الإعدادات
  "/api/private(.*)",     // API خاص
]);

export default clerkMiddleware(async (auth, req) => {
  // إذا كان المسار عاماً، اسمح بالوصول
  if (publicRoutes(req)) {
    return;
  }

  // إذا كان المسار محمياً، تحقق من تسجيل الدخول
  if (protectedRoutes(req)) {
    // إذا لم يكن المستخدم مسجلاً،وجّهه إلى صفحة تسجيل الدخول
    await auth.protect();
  }
});

// إعدادات Clerk Middleware
export const config = {
  // تجاهل المسارات الثابتة والصور والملفات
  matcher: [
    "/((?!_next|[^?]*\\\\.(html|css|js|jpg|jpeg|png|gif|svg|ico)$).*)",
    "/(api|trpc)(.*)",
  ],
};`}
            language="javascript"
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            في المثال أعلاه:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">publicRoutes</code> هو مصفوفة من المسارات التي لا تتطلب تسجيل دخول
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">protectedRoutes</code> هو مصفوفة من المسارات التي تتطلب تسجيل دخول
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth.protect()</code> يتحقق من تسجيل الدخول ويوجه المستخدم إذا لم يكن مسجلاً
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">config.matcher</code> يحدد الملفات التي يجب تجاهلها
            </li>
          </ul>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">إنشاء Route Matcher:</h4>

          <CodeBlock
            code={`// إنشاء Route Matcher باستخدام createRouteMatcher
import { createRouteMatcher } from "@clerk/nextjs/server";

// مسار واحد
const isPublicRoute = createRouteMatcher(["/sign-in(.*)"]);

// مسارات متعددة
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

// مسار API
const isApiRoute = createRouteMatcher(["/api/(.*)"]);

// مسار بمعرف مسار ديناميكي
const isDashboardRoute = createRouteMatcher([
  "/dashboard/:path*",
  "/dashboard/team/:teamId",
]);`}
            language="javascript"
          />

          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 dark:text-yellow-300 text-sm">
              <strong>ملاحظة مهمة:</strong> في Next.js 16، يجب أن يكون ملف Middleware في الجذر (Root) وليس في مجلد <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">app/</code>.
              الملف يسمى <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">proxy.ts</code> وليس <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">middleware.ts</code>.
            </p>
          </div>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">المسارات العامة مقابل المسارات المحمية:</h4>

          <CodeBlock
            code={`// مثال على المسارات العامة والمحمية

const publicRoutes = createRouteMatcher([
  // الصفحة الرئيسية
  "/",

  // صفحات المصادقة (جميع الروابط الفرعية)
  "/sign-in(.*)",
  "/sign-up(.*)",

  // صفحات الاستعادة
  "/forgot-password(.*)",
  "/reset-password(.*)",

  // API عام
  "/api/public/(.*)",
]);

const protectedRoutes = createRouteMatcher([
  // لوحة التحكم
  "/dashboard(.*)",

  // الملف الشخصي
  "/profile(.*)",

  // الإعدادات
  "/settings(.*)",

  // لوحة تحكم المعلم
  "/teacher/(.*)",

  // لوحة تحكم الطالب
  "/student/(.*)",

  // API خاص
  "/api/private/(.*)",
]);`}
            language="javascript"
          />
        </LessonSection>

        {/* حماية المسارات بـ auth.protect() */}
        <LessonSection title="حماية المسارات بـ auth.protect()">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الدالة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth.protect()</code> هي الطريقة الأساسية لحماية المسارات في Clerk Middleware.
            تقوم بالتحقق من تسجيل الدخول وتوجه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن مسجلاً.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الحماية الأساسية:</h4>

          <CodeBlock
            code={`// حماية مسار واحد
export default clerkMiddleware(async (auth, req) => {
  // حماية جميع المسارات المحمية
  await auth.protect();
});

// حماية مسار معين
export default clerkMiddleware(async (auth, req) => {
  // إذا كان المسار "/dashboard" أو أي مسار فرعي
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    await auth.protect();
  }
});`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الحماية حسب الأدوار (Role-based Access):</h4>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            يمكنك حماية مساراتك حسب أدوار المستخدمين باستخدام خيار <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">role</code> في <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth.protect()</code>.
            هذا يسمح لك بتحديد من يمكنه الوصول إلى مسار معين.
          </p>

          <CodeBlock
            code={`// حماية حسب الدور
export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();

  // مسارات المدير فقط
  if (req.nextUrl.pathname.startsWith("/admin")) {
    await auth.protect({ role: "org:admin" });
  }

  // مسارات المعلم فقط
  if (req.nextUrl.pathname.startsWith("/teacher")) {
    await auth.protect({ role: "org:teacher" });
  }

  // مسارات الطالب فقط
  if (req.nextUrl.pathname.startsWith("/student")) {
    await auth.protect({ role: "org:student" });
  }
});`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الحماية حسب الصلاحيات (Permission-based Access):</h4>

          <CodeBlock
            code={`// حماية حسب الصلاحيات
export default clerkMiddleware(async (auth, req) => {
  // حماية مسار إنشاء الدورة
  if (req.nextUrl.pathname.startsWith("/courses/create")) {
    await auth.protect({ permission: "org:course:create" });
  }

  // حماية مسار تعديل الدورة
  if (req.nextUrl.pathname.match(/\\/courses\\/.*\\/edit/)) {
    await auth.protect({ permission: "org:course:update" });
  }

  // حماية مسار حذف الدورة
  if (req.nextUrl.pathname.match(/\\/courses\\/.*\\/delete/)) {
    await auth.protect({ permission: "org:course:delete" });
  }

  // حماية مسار عرض التقارير
  if (req.nextUrl.pathname.startsWith("/reports")) {
    await auth.protect({ permission: "org:report:view" });
  }
});`}
            language="javascript"
          />

          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-4">
            <p className="text-green-800 dark:text-green-300 text-sm">
              <strong>نصيحة:</strong> استخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">role</code> عندما تريد تقييد الوصول بناءً على دور المستخدم،
              و <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">permission</code> عندما تريد تقييد الوصول بناءً على صلاحيات محددة.
            </p>
          </div>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">مثال شامل على proxy.ts مع حماية متعددة:</h4>

          <CodeBlock
            code={`// proxy.ts - مثال شامل
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const publicRoutes = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
]);

const teacherRoutes = createRouteMatcher([
  "/teacher/(.*)",
]);

const studentRoutes = createRouteMatcher([
  "/student/(.*)",
]);

const adminRoutes = createRouteMatcher([
  "/admin/(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // السماح بالمسارات العامة
  if (publicRoutes(req)) return;

  // حماية مسارات المعلم
  if (teacherRoutes(req)) {
    await auth.protect({ role: "org:teacher" });
  }

  // حماية مسارات الطالب
  if (studentRoutes(req)) {
    await auth.protect({ role: "org:student" });
  }

  // حماية مسارات المدير
  if (adminRoutes(req)) {
    await auth.protect({ role: "org:admin" });
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
        </LessonSection>

        {/* حماية في Server Components */}
        <LessonSection title="حماية في Server Components">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            يمكنك حماية الصفحات والمكونات الخادمية باستخدام الدالة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth()</code> في Clerk.
            هذه الدالة تُرجع معلومات المستخدم الحالي، وإذا لم يكن مسجلاً، يمكنك توجيهه إلى صفحة تسجيل الدخول.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">حماية صفحة كاملة:</h4>

          <CodeBlock
            code={`// app/dashboard/page.js
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // الحصول على معلومات المستخدم الحالي
  const { userId } = await auth();

  // إذا لم يكن المستخدم مسجلاً،وجّهه إلى صفحة تسجيل الدخول
  if (!userId) {
    redirect("/sign-in");
  }

  // إذا كان المستخدم مسجلاً،اعرض محتوى الصفحة
  return (
    <div dir="rtl">
      <h1>لوحة التحكم</h1>
      <p>مرحباً بك في لوحة التحكم</p>
      <p>معرف المستخدم: {userId}</p>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">حماية حسب الأدوار في Server Components:</h4>

          <CodeBlock
            code={`// app/admin/page.js
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId, sessionClaims } = await auth();

  // التحقق من تسجيل الدخول
  if (!userId) {
    redirect("/sign-in");
  }

  // التحقق من دور المستخدم
  const userRole = sessionClaims?.metadata?.role || sessionClaims?.role;

  if (userRole !== "admin") {
    redirect("/unauthorized");
  }

  return (
    <div dir="rtl">
      <h1>لوحة تحكم المدير</h1>
      <p>مرحباً أيها المدير: {userId}</p>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">حماية Layout:</h4>

          <CodeBlock
            code={`// app/dashboard/layout.js
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div dir="rtl" className="flex">
      {/* الشريط الجانبي */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <nav>
          <a href="/dashboard">لوحة التحكم</a>
          <a href="/dashboard/courses">الدروس</a>
          <a href="/dashboard/students">الطلاب</a>
        </nav>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}`}
            language="javascript"
          />

          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 dark:text-yellow-300 text-sm">
              <strong>ملاحظة:</strong> تأكد من أن كل ملف Server Component يحتوي على <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">"use server"</code> إذا كنت تستخدم Server Actions في الملف نفسه.
              إذا كنت تستخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth()</code> فقط، لا تحتاج إلى هذه الكلمة المفتاحية.
            </p>
          </div>
        </LessonSection>

        {/* حماية في Route Handlers */}
        <LessonSection title="حماية في Route Handlers">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            عند بناء API Routes في Next.js، تحتاج إلى حماية endpoints الخاصة بك للتأكد من أن المستخدم مسجل الدخول.
            يمكنك استخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth()</code> في Route Handlers للتحقق من حالة المستخدم.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">حماية Route Handler:</h4>

          <CodeBlock
            code={`// app/api/tasks/route.js
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  // التحقق من تسجيل الدخول
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "غير مصرح" },
      { status: 401 }
    );
  }

  // جلب المهام من قاعدة البيانات
  const tasks = await fetchTasksFromDB(userId);

  return NextResponse.json({ tasks });
}

export async function POST(request) {
  // التحقق من تسجيل الدخول
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "غير مصرح" },
      { status: 401 }
    );
  }

  const body = await request.json();

  // إنشاء مهمة جديدة
  const newTask = await createTaskInDB(userId, body);

  return NextResponse.json({ task: newTask }, { status: 201 });
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">حماية Route Handler حسب الأدوار:</h4>

          <CodeBlock
            code={`// app/api/admin/users/route.js
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "غير مصرح" },
      { status: 401 }
    );
  }

  // التحقق من دور المدير
  const userRole = sessionClaims?.metadata?.role || sessionClaims?.role;

  if (userRole !== "admin") {
    return NextResponse.json(
      { error: "غير مصرح - يجب أن تكون مديراً" },
      { status: 403 }
    );
  }

  // جلب جميع المستخدمين
  const users = await fetchAllUsers();

  return NextResponse.json({ users });
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">مثال شامل على Route Handler مع Clerk:</h4>

          <CodeBlock
            code={`// app/api/courses/route.js
import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "يجب تسجيل الدخول" },
      { status: 401 }
    );
  }

  try {
    // جلب الدورات من قاعدة البيانات
    const courses = await prisma.course.findMany({
      where: { userId: userId },
      include: { lessons: true },
    });

    return NextResponse.json({ courses });
  } catch (error) {
    return NextResponse.json(
      { error: "خطأ في جلب البيانات" },
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
    const { title, description, category } = body;

    // التحقق من صحة البيانات
    if (!title || !description) {
      return NextResponse.json(
        { error: "العنوان والوصف مطلوبان" },
        { status: 400 }
      );
    }

    // إنشاء الدورة
    const course = await prisma.course.create({
      data: {
        title,
        description,
        category: category || "عام",
        userId: userId,
      },
    });

    return NextResponse.json({ course }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "خطأ في إنشاء الدورة" },
      { status: 500 }
    );
  }
}`}
            language="javascript"
          />
        </LessonSection>

        {/* حماية في Server Actions */}
        <LessonSection title="حماية في Server Actions">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Server Actions هي طريقة قوية لمعالجة النماذج في Next.js. عند استخدامها مع Clerk، يجب عليك التحقق من حالة المستخدم
            في كل Server Action قبل تنفيذ أي عملية.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">حماية Server Action:</h4>

          <CodeBlock
            code={`// app/actions/tasks.js
"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createTask(formData) {
  // التحقق من تسجيل الدخول
  const { userId } = await auth();

  if (!userId) {
    throw new Error("يجب تسجيل الدخول لإنشاء مهمة");
  }

  const title = formData.get("title");
  const description = formData.get("description");
  const priority = formData.get("priority");

  // التحقق من صحة البيانات
  if (!title) {
    throw new Error("العنوان مطلوب");
  }

  try {
    // إنشاء المهمة في قاعدة البيانات
    await prisma.task.create({
      data: {
        title,
        description: description || "",
        priority: priority || "متوسط",
        userId: userId,
        status: "قيد التنفيذ",
      },
    });

    // إعادة التحقق من المسار
    revalidatePath("/dashboard/tasks");

    return { success: true, message: "تم إنشاء المهمة بنجاح" };
  } catch (error) {
    throw new Error("خطأ في إنشاء المهمة");
  }
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">حماية Server Action حسب الأدوار:</h4>

          <CodeBlock
            code={`// app/actions/admin.js
"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function deleteUser(formData) {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    throw new Error("يجب تسجيل الدخول");
  }

  // التحقق من دور المدير
  const userRole = sessionClaims?.metadata?.role || sessionClaims?.role;

  if (userRole !== "admin") {
    throw new Error("غير مصرح - يجب أن تكون مديراً");
  }

  const targetUserId = formData.get("userId");

  if (!targetUserId) {
    throw new Error("معرف المستخدم مطلوب");
  }

  try {
    // حذف المستخدم
    await prisma.user.delete({
      where: { clerkId: targetUserId },
    });

    revalidatePath("/admin/users");

    return { success: true, message: "تم حذف المستخدم بنجاح" };
  } catch (error) {
    throw new Error("خطأ في حذف المستخدم");
  }
}

export async function assignRole(formData) {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    throw new Error("يجب تسجيل الدخول");
  }

  const userRole = sessionClaims?.metadata?.role || sessionClaims?.role;

  if (userRole !== "admin") {
    throw new Error("غير مصرح - يجب أن تكون مديراً");
  }

  const targetUserId = formData.get("userId");
  const newRole = formData.get("role");

  try {
    // تحديث دور المستخدم باستخدام Clerk Backend API
    await clerkClient.users.updateUser(targetUserId, {
      publicMetadata: { role: newRole },
    });

    revalidatePath("/admin/users");

    return { success: true, message: "تم تحديث الدور بنجاح" };
  } catch (error) {
    throw new Error("خطأ في تحديث الدور");
  }
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">مثال شامل على Server Action مع التحقق من الملكية:</h4>

          <CodeBlock
            code={`// app/actions/ownership.js
"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function updateTask(formData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("يجب تسجيل الدخول");
  }

  const taskId = formData.get("taskId");
  const title = formData.get("title");
  const status = formData.get("status");

  // التحقق من صحة البيانات
  if (!taskId) {
    throw new Error("معرف المهمة مطلوب");
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
    // تحديث المهمة
    await prisma.task.update({
      where: { id: taskId },
      data: {
        ...(title && { title }),
        ...(status && { status }),
      },
    });

    revalidatePath("/dashboard/tasks");

    return { success: true, message: "تم تحديث المهمة بنجاح" };
  } catch (error) {
    throw new Error("خطأ في تحديث المهمة");
  }
}

export async function deleteTask(formData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("يجب تسجيل الدخول");
  }

  const taskId = formData.get("taskId");

  if (!taskId) {
    throw new Error("معرف المهمة مطلوب");
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

    revalidatePath("/dashboard/tasks");

    return { success: true, message: "تم حذف المهمة بنجاح" };
  } catch (error) {
    throw new Error("خطأ في حذف المهمة");
  }
}`}
            language="javascript"
          />
        </LessonSection>

        {/* Quiz */}
        <LessonSection title="اختبر معلوماتك">
          <Quiz
            question="ما هو ملف Middleware في Next.js 16 مع Clerk؟"
            options={[
              "middleware.ts",
              "proxy.ts",
              "auth.ts",
              "clerk.ts"
            ]}
            correctAnswer={1}
            explanation="في Next.js 16، يتم تعريف Middleware في ملف proxy.ts بدلاً من middleware.ts. هذا الملف يحتوي على دالة Clerk Middleware التي تفحص كل طلب قبل أن يصل إلى التطبيق."
          />

          <Quiz
            question="أي من הבאים يُستخدم لحماية مسار حسب الدور في Clerk Middleware؟"
            options={[
              "auth.protect()",
              "auth.protect({ role: 'org:admin' })",
              "auth.checkRole('admin')",
              "auth.guard('admin')"
            ]}
            correctAnswer={1}
            explanation="لحماية مسار حسب الدور، نستخدم auth.protect({ role: 'org:admin' }). هذا يتحقق من أن المستخدم لديه الدور المحدد قبل السماح بالوصول إلى المسار."
          />

          <Quiz
            question="كيف تحما Server Action في Clerk؟"
            options={[
              "باستخدام 'use client' في أعلى الملف",
              "باستخدام auth() للتحقق من حالة المستخدم في بداية الدالة",
              "باستخدام middleware في ملف منفصل",
              "لا حاجة لحماية Server Actions"
            ]}
            correctAnswer={1}
            explanation="لحماية Server Action، نستخدم auth() للتحقق من حالة المستخدم في بداية الدالة. إذا لم يكن المستخدم مسجلاً، ن throw error أو نوجهه إلى صفحة تسجيل الدخول."
          />
        </LessonSection>

        {/* CheatSheet */}
        <CheatSheet title="مرجع أنماط الحماية">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Middleware (proxy.ts):</h4>
              <CodeBlock
                code={`// حماية أساسية
await auth.protect();

// حماية حسب الدور
await auth.protect({ role: "org:admin" });

// حماية حسب الصلاحيات
await auth.protect({ permission: "org:course:create" });`}
                language="javascript"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Server Components:</h4>
              <CodeBlock
                code={`const { userId } = await auth();
if (!userId) redirect("/sign-in");

const { sessionClaims } = await auth();
const role = sessionClaims?.metadata?.role;`}
                language="javascript"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Route Handlers:</h4>
              <CodeBlock
                code={`const { userId } = await auth();
if (!userId) {
  return NextResponse.json(
    { error: "Unauthorized" },
    { status: 401 }
  );
}`}
                language="javascript"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Server Actions:</h4>
              <CodeBlock
                code={`const { userId } = await auth();
if (!userId) {
  throw new Error("Unauthorized");
}`}
                language="javascript"
              />
            </div>
          </div>
        </CheatSheet>

        {/* Challenge */}
        <Challenge title="تحدي: بناء لوحة تحكم محمية بـ Role-based Access">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              قم ببناء لوحة تحكم كاملة تحتوي على:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">proxy.ts</code> يحمي مسارات المدير والمعلم والطالب</li>
              <li>صفحة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">/admin</code> متاحة فقط للمديرين</li>
              <li>صفحة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">/teacher</code> متاحة فقط للمعلمين</li>
              <li>صفحة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">/student</code> متاحة فقط للطلاب</li>
              <li>Server Action لإنشاء مهمة مع التحقق من الملكية</li>
              <li>Route Handler لجلب المهام مع التحقق من الدور</li>
            </ol>

            <CodeBlock
              code={`// الحل المتوقع لـ proxy.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const publicRoutes = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

const adminRoutes = createRouteMatcher(["/admin/(.*)"]);
const teacherRoutes = createRouteMatcher(["/teacher/(.*)"]);
const studentRoutes = createRouteMatcher(["/student/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (publicRoutes(req)) return;

  if (adminRoutes(req)) {
    await auth.protect({ role: "org:admin" });
  }

  if (teacherRoutes(req)) {
    await auth.protect({ role: "org:teacher" });
  }

  if (studentRoutes(req)) {
    await auth.protect({ role: "org:student" });
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

            <CodeBlock
              code={`// الحل المتوقع لـ Server Action
"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createTask(formData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("يجب تسجيل الدخول");
  }

  const title = formData.get("title");
  const description = formData.get("description");

  if (!title) {
    throw new Error("العنوان مطلوب");
  }

  await prisma.task.create({
    data: {
      title,
      description: description || "",
      userId: userId,
      status: "جديد",
    },
  });

  revalidatePath("/dashboard/tasks");

  return { success: true, message: "تم إنشاء المهمة بنجاح" };
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
