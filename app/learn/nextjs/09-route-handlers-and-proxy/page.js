import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function RouteHandlersAndProxy() {
  const lessonInfo = getLessonBySlug("nextjs", "09-route-handlers-and-proxy");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        {/* ========================================== */}
        {/* القسم الأول: ما هي Route Handlers؟ */}
        {/* ========================================== */}
        <LessonSection title="ما هي Route Handlers؟">
          <p>
            <strong>Route Handlers</strong> هي الطريقة لإنشاء نقاط نهاية API (API Endpoints) داخل تطبيقات Next.js باستخدام App Router.
            بدلاً من استخدام ملف <code>pages/api/</code> القديم، يمكنك الآن إنشاء ملف <code>route.js</code> أو <code>route.ts</code>
            داخل أي مجلد في شجرة التطبيق.
          </p>
          <p>
            عند وضع ملف <code>route.js</code> في مجلد معين، يصبح هذا المجلد نقطة نهاية API. على سبيل المثال:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><code>app/api/users/route.js</code> — يُعالج طلبات <code>/api/users</code></li>
            <li><code>app/api/posts/route.js</code> — يُعالج طلبات <code>/api/posts</code></li>
            <li><code>app/api/comments/route.js</code> — يُعالج طلبات <code>/api/comments</code></li>
          </ul>
          <p>
            Route Handlers تعمل فقط على الخادم (Server-side) — لا يتم تحميل أي JavaScript منها إلى العميل.
            هذا يعني يمكنك بحرية استخدام قواعد البيانات والمتغيرات البيئة الحساسة بدون قلق.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: مثال بسيط */}
        {/* ========================================== */}
        <LessonSection title="مثال بسيط — أول API Endpoint">
          <p>
            لنبدأ بإنشاء نقطة نهاية بسيطة تُرجع قائمة مستخدمين بصيغة JSON:
          </p>
          <CodeBlock
            code={`// app/api/users/route.js

const users = [
  { id: 1, name: "أحمد محمد", email: "ahmed@example.com" },
  { id: 2, name: "فاطمة علي", email: "fatima@example.com" },
  { id: 3, name: "خالد العمري", email: "khaled@example.com" },
];

export async function GET() {
  return Response.json(users);
}`}
            language="jsx"
          />
          <p>
            عند تشغيل التطبيق والذهاب إلى <code>http://localhost:3000/api/users</code>، ستحصل على قائمة المستخدمين كـ JSON.
          </p>
          <p>
            المفتاح هنا هو تصدير دالة <code>GET</code> — اسم الدالة يطابق اسم الطريقة HTTP. عندما يرسل المتصفح طلب GET،
            يتم استدعاء هذه الدالة تلقائياً.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: طرق HTTP */}
        {/* ========================================== */}
        <LessonSection title="طرق HTTP المتعددة (HTTP Methods)">
          <p>
            يمكنك التعامل مع جميع طرق HTTP عن طريق تصدير دوال بنفس الأسماء. كل طريقة تتم معالجتها بشكل مستقل:
          </p>
          <CodeBlock
            code={`// app/api/products/route.js

// جلب كل المنتجات
export async function GET(request) {
  const products = await db.products.findMany();
  return Response.json(products);
}

// إنشاء منتج جديد
export async function POST(request) {
  const body = await request.json();
  const newProduct = await db.products.create({ data: body });
  return Response.json(newProduct, { status: 201 });
}

// تحديث منتج بالكامل
export async function PUT(request) {
  const body = await request.json();
  const { id, ...data } = body;
  const updated = await db.products.update({ where: { id }, data });
  return Response.json(updated);
}

// تحديث جزئي لمنتج
export async function PATCH(request) {
  const body = await request.json();
  const { id, ...data } = body;
  const patched = await db.products.update({ where: { id }, data });
  return Response.json(patched);
}

// حذف منتج
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  await db.products.delete({ where: { id } });
  return Response.json({ message: "تم الحذف بنجاح" });
}`}
            language="jsx"
          />
          <p>
            يمكنك تصدير عدة دوال في نفس الملف — كل واحدة تتم معالجة عند استخدام الطريقة المقابلة.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: Request Objects */}
        {/* ========================================== */}
        <LessonSection title="كائن الطلب (Request Objects)">
          <p>
            كل دالة تستقبل كائن طلب (Request) يمكنك استخدامه للوصول إلى البيانات المختلفة:
          </p>
          <CodeBlock
            code={`// app/api/endpoint/route.js

export async function GET(request) {
  // 1. قراءة searchParams (الاستعلام)
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "10";

  // 2. قراءة Headers
  const authToken = request.headers.get("authorization");

  // 3. قراءة Body (في POST/PUT/PATCH)
  // ملاحظة: request.json() متاح فقط في الطلبات التي لها body
  // const body = await request.json();

  // 4. قراءة Cookies
  const cookieHeader = request.headers.get("cookie");

  return Response.json({ page, limit, hasToken: !!authToken });
}`}
            language="jsx"
          />
          <p>
            يمكنك أيضاً استخدام <code>NextRequest</code> من <code>next/server</code> للحصول على ميزات إضافية مثل
            الوصول المباشر للـ cookies والـ headers بشكل أكثر راحة:
          </p>
          <CodeBlock
            code={`import { NextRequest } from "next/server";

export async function GET(request) {
  // استخدام NextRequest للوصول السهل
  const token = request.cookies.get("auth-token");
  const lang = request.nextUrl.searchParams.get("lang");
  const userAgent = request.headers.get("user-agent");

  return Response.json({
    token: token?.value,
    lang,
    userAgent,
  });
}`}
            language="jsx"
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: Response Objects */}
        {/* ========================================== */}
        <LessonSection title="كائن الاستجابة (Response Objects)">
          <p>
            يمكنك إرجاع أنواع مختلفة من الاستجابات من Route Handlers:
          </p>
          <CodeBlock
            code={`// 1. استجابة JSON (الأشهر)
export async function GET() {
  return Response.json({ message: "مرحباً" });
}

// 2. استجابة نص عادي (Text)
export async function GET() {
  return new Response("مرحباً بالعالم", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}

// 3. استجابة HTML
export async function GET() {
  return new Response("<h1>مرحباً</h1><p>هذا HTML</p>", {
    headers: { "Content-Type": "text/html" },
  });
}

// 4. استجابة مع headers إضافية
export async function GET() {
  return Response.json(
    { data: "بيانات" },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=600",
        "X-Custom-Header": "my-value",
      },
    }
  );
}

// 5. استجابة تدفقية (Stream)
export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode("بيانات مباشرة\\n"));
      controller.close();
    },
  });
  return new Response(stream, {
    headers: { "Content-Type": "text/event-stream" },
  });
}`}
            language="jsx"
          />
          <p>
            الأشهر هو استخدام <code>Response.json()</code> الذي يُرجع استجابة JSON مع headers مناسبة تلقائياً.
            يمكنك أيضاً استخدام <code>NextResponse</code> من <code>next/server</code> لمزيد من المرونة:
          </p>
          <CodeBlock
            code={`import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { users: [] },
    { status: 200 }
  );
}`}
            language="jsx"
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: Dynamic Route Handlers */}
        {/* ========================================== */}
        <LessonSection title="مسارات API الديناميكية (Dynamic Route Handlers)">
          <p>
            تماماً كالصفحات العادية، يمكنك إنشاء مسارات API ديناميكية باستخدام الأقواس المربعة:
          </p>
          <CodeBlock
            code={`// app/api/users/[id]/route.js

export async function GET(request, { params }) {
  const { id } = await params;
  const user = await db.users.findUnique({ where: { id } });

  if (!user) {
    return Response.json(
      { error: "المستخدم غير موجود" },
      { status: 404 }
    );
  }

  return Response.json(user);
}`}
            language="jsx"
          />
          <p>
            ملاحظة مهمة في Next.js 16: يجب استخدام <code>await params</code> لأن params أصبحت Promise في الإصدارات الحديثة.
          </p>
          <CodeBlock
            code={`// app/api/posts/[slug]/route.js

export async function GET(request, { params }) {
  const { slug } = await params;

  const post = await db.posts.findUnique({ where: { slug } });

  if (!post) {
    return Response.json({ error: "المقال غير موجود" }, { status: 404 });
  }

  return Response.json(post);
}

export async function DELETE(request, { params }) {
  const { slug } = await params;

  await db.posts.delete({ where: { slug } });

  return Response.json({ message: "تم حذف المقال بنجاح" });
}`}
            language="jsx"
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: مثال عملي CRUD */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي — API كامل للمستخدمين (CRUD)">
          <p>
            لننشئ API متكاملاً لإدارة المستخدمين يدعم جميع عمليات CRUD:
          </p>
          <CodeBlock
            code={`// app/api/users/route.js
import { NextResponse } from "next/server";

// محاكاة قاعدة بيانات
const users = [
  { id: "1", name: "أحمد", email: "ahmed@example.com", role: "admin" },
  { id: "2", name: "فاطمة", email: "fatima@example.com", role: "user" },
  { id: "3", name: "خالد", email: "khaled@example.com", role: "user" },
];

// GET /api/users — جلب كل المستخدمين
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const role = searchParams.get("role");
  const search = searchParams.get("search");

  let filteredUsers = [...users];

  // تصفية حسب الدور
  if (role) {
    filteredUsers = filteredUsers.filter((u) => u.role === role);
  }

  // بحث بالاسم
  if (search) {
    filteredUsers = filteredUsers.filter((u) =>
      u.name.includes(search)
    );
  }

  return NextResponse.json({
    success: true,
    count: filteredUsers.length,
    data: filteredUsers,
  });
}

// POST /api/users — إنشاء مستخدم جديد
export async function POST(request) {
  try {
    const body = await request.json();

    // التحقق من البيانات
    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, error: "الاسم والبريد مطلوبان" },
        { status: 400 }
      );
    }

    // التحقق من عدم تكرار البريد
    const exists = users.find((u) => u.email === body.email);
    if (exists) {
      return NextResponse.json(
        { success: false, error: "البريد الإلكتروني مسجل مسبقاً" },
        { status: 409 }
      );
    }

    const newUser = {
      id: String(users.length + 1),
      name: body.name,
      email: body.email,
      role: body.role || "user",
    };

    users.push(newUser);

    return NextResponse.json(
      { success: true, data: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "بيانات غير صحيحة" },
      { status: 400 }
    );
  }
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// app/api/users/[id]/route.js
import { NextResponse } from "next/server";

// محاكاة قاعدة بيانات
let users = [
  { id: "1", name: "أحمد", email: "ahmed@example.com", role: "admin" },
  { id: "2", name: "فاطمة", email: "fatima@example.com", role: "user" },
];

// GET /api/users/:id — جلب مستخدم واحد
export async function GET(request, { params }) {
  const { id } = await params;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return NextResponse.json(
      { success: false, error: "المستخدم غير موجود" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: user });
}

// PUT /api/users/:id — تحديث مستخدم
export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return NextResponse.json(
      { success: false, error: "المستخدم غير موجود" },
      { status: 404 }
    );
  }

  users[index] = { ...users[index], ...body, id };

  return NextResponse.json({ success: true, data: users[index] });
}

// DELETE /api/users/:id — حذف مستخدم
export async function DELETE(request, { params }) {
  const { id } = await params;
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return NextResponse.json(
      { success: false, error: "المستخدم غير موجود" },
      { status: 404 }
    );
  }

  users.splice(index, 1);

  return NextResponse.json({
    success: true,
    message: "تم حذف المستخدم بنجاح",
  });
}`}
            language="jsx"
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: proxy.ts (المتغير الجديد) */}
        {/* ========================================== */}
        <LessonSection title="proxy.ts — البديل الجديد لـ Middleware">
          <p>
            في Next.js 16، أصبح <code>proxy.ts</code> هو البديل الرسمي لـ <code>middleware.ts</code>.
            Proxy يسمح لك بتنفيذ منطق على مستوى الطلب (Request-level logic) قبل وصوله إلى الصفحة أو Route Handler.
          </p>
          <p>
            التغيير الجوهري هو أنك تُصدّر دالة اسمها <code>proxy</code> بدلاً من <code>middleware</code>:
          </p>
          <CodeBlock
            code={`// proxy.ts (في جذر المشروع)
import { NextResponse } from "next/server";

export function proxy(request) {
  // هذا الكود يعمل على كل طلب قبل الوصول للصفحة
  console.log("طلب جديد:", request.nextUrl.pathname);

  // إعادة توجيه من المسار القديم للجديد
  if (request.nextUrl.pathname === "/old-page") {
    return NextResponse.redirect(new URL("/new-page", request.url));
  }

  // السماح بالمرور
  return NextResponse.next();
}`}
            language="jsx"
          />
          <p>
            <strong>مهم:</strong> إذا كان ملف <code>middleware.ts</code> موجوداً في مشروعك، يجب تسميته
            <code>proxy.ts</code> في Next.js 16. ملف middleware ما زال يعمل للتوافق، لكن proxy هو المستقبل.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: حالات استخدام Proxy */}
        {/* ========================================== */}
        <LessonSection title="حالات استخدام Proxy">
          <p>
            Proxy مفيد في عدة سيناريوهات شائعة في التطبيقات الحقيقية:
          </p>
          <CodeBlock
            code={`// proxy.ts

import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // ============================================
  // 1. إعادة التوجيه (Redirects)
  // ============================================
  if (pathname === "/blog") {
    return NextResponse.redirect(new URL("/posts", request.url));
  }

  // ============================================
  // 2. إعادة كتابة المسارات (Rewrites)
  // ============================================
  // يظهر للمستخدم /marketing لكن المحتوى من /en/marketing
  if (pathname.startsWith("/marketing")) {
    return NextResponse.rewrite(new URL(\`/en\${pathname}\`, request.url));
  }

  // ============================================
  // 3. فحص المصادقة (Authentication)
  // ============================================
  if (pathname.startsWith("/dashboard")) {
    const token = request.cookies.get("auth-token");

    if (!token) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
  }

  // ============================================
  // 4. تجربة A/B Testing
  // ============================================
  if (pathname === "/") {
    const bucket = request.cookies.get("ab-bucket")?.value;
    if (!bucket) {
      const response = NextResponse.next();
      // تعيين المستخدم لـ bucket عشوائي
      const newBucket = Math.random() > 0.5 ? "A" : "B";
      response.cookies.set("ab-bucket", newBucket, { maxAge: 86400 });
      return response;
    }
  }

  // ============================================
  // 5. تحديد الموقع الجغرافي (Geolocation)
  // ============================================
  const country = request.geo?.country || "Unknown";
  const response = NextResponse.next();
  response.headers.set("x-user-country", country);

  return response;
}`}
            language="jsx"
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: مثال Proxy عملي */}
        {/* ========================================== */}
        <LessonSection title="مثال Proxy عملي — إعادة توجيه وحماية">
          <p>
            لننشئ proxy يعيد توجيه المسارات القديمة ويحمي صفحات لوحة التحكم:
          </p>
          <CodeBlock
            code={`// proxy.ts

import { NextResponse } from "next/server";

// خريطة المسارات القديمة إلى الجديدة
const redirectMap = {
  "/old-about": "/about",
  "/old-contact": "/contact",
  "/old-pricing": "/pricing",
  "/old-blog": "/blog",
};

// المسارات المحمية التي تتطلب مصادقة
const protectedPaths = ["/dashboard", "/settings", "/admin"];

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // ============================================
  // إعادة توجيه المسارات القديمة
  // ============================================
  if (redirectMap[pathname]) {
    const newPath = redirectMap[pathname];
    return NextResponse.redirect(new URL(newPath, request.url), {
      status: 301, // إعادة توجيه دائمة (SEO-friendly)
    });
  }

  // ============================================
  // حماية المسارات المحمية
  // ============================================
  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (isProtected) {
    // فحص وجود token المصادقة
    const token = request.cookies.get("auth-token");

    if (!token) {
      // حفظ المسار الأصلي لإعادة التوجيه بعد تسجيل الدخول
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // فحص دور المستخدم للمسارات الإدارية
    if (pathname.startsWith("/admin")) {
      const userRole = request.cookies.get("user-role")?.value;
      if (userRole !== "admin") {
        return NextResponse.redirect(
          new URL("/unauthorized", request.url)
        );
      }
    }
  }

  // ============================================
  // إضافة Headers مفيدة
  // ============================================
  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);
  response.headers.set("x-request-time", Date.now().toString());

  return response;
}`}
            language="jsx"
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: Proxy Config */}
        {/* ========================================== */}
        <LessonSection title="إعدادات Proxy — Matcher">
          <p>
            يمكنك التحكم في أي المسارات يعمل عليها Proxy باستخدام <code>config</code> مع <code>matcher</code>:
          </p>
          <CodeBlock
            code={`// proxy.ts

import { NextResponse } from "next/server";

export function proxy(request) {
  // هذا الكود يعمل فقط على المسارات المطابقة
  const token = request.cookies.get("auth-token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// تحديد المسارات التي يعمل عليها proxy
export const config = {
  matcher: [
    // مطابقة دقيقة
    "/dashboard/:path*",
    "/settings/:path*",

    // استثناء مسارات معينة
    "/api/:path*",

    // مطابقة بنمط Regex
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};`}
            language="jsx"
          />
          <p>
            الـ <code>:path*</code> يعني "طابق أي شيء بعد هذا المسار". مثلاً <code>/dashboard/:path*</code> يطابق
            <code>/dashboard</code> و <code>/dashboard/settings</code> و <code>/dashboard/analytics/weekly</code>.
          </p>
          <p>
            النمط السلبي <code>(?!_next/static...)</code> يعني "لا تطابق هذه المسارات" — مفيد لاستثناء ملفات Static.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: ماذا يحدث خلف الكواليس */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>
            فهم تسلسل الأحداث عند وصول طلب يساعدك على كتابة كود أكثر فعالية:
          </p>
          <CodeBlock
            code={`// تسلسل أحداث الطلب في Next.js 16:

// 1. المستخدم يرسل طلب (Navigate أو API call)
//    مثال: يزور /dashboard

// 2. proxy.ts يعمل أولاً (إذا كان الملف موجوداً)
//    - يفحص المسار
//    - يتحقق من المصادقة
//    - يعيد التوجيه أو يعدل الطلب إذا لزم الأمر
//    - إذا أعاد التوجيه → الطلب ينتهي هنا

// 3. Next.js يبحث عن الصفحة أو Route Handler المناسبة
//    - يتحقق من وجود layout.js
//    - يتحقق من وجود page.js
//    - يتحقق من وجود loading.js

// 4. إذا كان هناك loading.js → يعرضه فوراً (Streaming)

// 5. يُنفذ الكود في page.js (Server Component)
//    - يجلب البيانات
//    - يبني JSX
//    - يُرسل HTML للمتصفح

// 6. إذا حدث خطأ → يبحث عن error.js الأقرب

// =====================================================
// للطلبات API (/api/users):
// =====================================================

// 1. proxy.ts يعمل (إذا كان مطابقاً لـ matcher)
// 2. Next.js يبحث عن route.js في المسار المطلوب
// 3. يتم استدعاء الدالة المقابلة (GET/POST/...)
// 4. يتم إرجاع الاستجابة

// شكل بصري:
// Request → proxy.ts → Route Handler → Response
// Request → proxy.ts → page.js → HTML Response`}
            language="jsx"
          />
          <p>
            هذه الطبقات المتتالية تسمى <strong>Middleware Pipeline</strong>. كل طبقة يمكنها التعديل على الطلب أو إيقافه أو السماح له بالمرور.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث عشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <p>
            إليك أكثر الأخطاء شيوعاً عند العمل مع Route Handlers و Proxy في Next.js 16:
          </p>
          <CodeBlock
            code={`// ❌ خطأ 1: استخدام middleware.ts في Next.js 16
// middleware.ts → يعمل لكنه deprecated
export function middleware(request) {
  return NextResponse.next();
}

// ✅ الصحيح: استخدام proxy.ts
// proxy.ts
export function proxy(request) {
  return NextResponse.next();
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// ❌ خطأ 2: عدم إرجاع Response object
// هذا لن يعمل بشكل صحيح
export async function GET() {
  const data = { name: "أحمد" };
  console.log(data); // فقط log بدون return!
}

// ✅ الصحيح: إرجاع Response دائماً
export async function GET() {
  const data = { name: "أحمد" };
  return Response.json(data);
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// ❌ خطأ 3: استخدام اسم خاطئ للدالة في proxy
export function middleware(request) {
  return NextResponse.next();
}
// في Next.js 16 هذا deprecated!

// ✅ الصحيح:
export function proxy(request) {
  return NextResponse.next();
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// ❌ خطأ 4: نسيان await لـ params في Dynamic Routes
export async function GET(request, { params }) {
  const { id } = params; // ❌ params هو Promise في v16!
  return Response.json({ id });
}

// ✅ الصحيح:
export async function GET(request, { params }) {
  const { id } = await params; // ✅ يجب استخدام await
  return Response.json({ id });
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// ❌ خطأ 5: وضع Route Handler في مجلد مع page.js
// app/dashboard/page.js  ← صفحة
// app/dashboard/route.js ← API
// ❌ لا يمكن وضع两者 معاً في نفس المجلد!

// ✅ الصحيح: استخدم مجلد فرعي
// app/dashboard/page.js       ← الصفحة
// app/dashboard/api/route.js  ← الـ API`}
            language="jsx"
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <p>
            اتبع هذه الممارسات لبناء API endpoints و proxy فعالين وآمنين:
          </p>
          <CodeBlock
            code={`// أفضل الممارسة 1: استخدم Route Handlers للـ API endpoints
// و proxy للمنطق على مستوى الطلب

// Route Handler — معالجة بيانات
// app/api/users/route.js
export async function GET() {
  const users = await db.users.findMany();
  return Response.json(users);
}

// Proxy — منطق على مستوى الطلب
// proxy.ts
export function proxy(request) {
  // إعادة توجيه، فحص مصادقة، تعديل headers
  return NextResponse.next();
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// أفضل الممارسة 2: تعامل مع الأخطاء بشكل منهجي
export async function POST(request) {
  try {
    const body = await request.json();

    // التحقق من البيانات
    if (!body.name) {
      return Response.json(
        { error: "الاسم مطلوب" },
        { status: 400 }
      );
    }

    const result = await db.users.create({ data: body });
    return Response.json(result, { status: 201 });
  } catch (error) {
    if (error.message.includes("validation")) {
      return Response.json(
        { error: "بيانات غير صحيحة" },
        { status: 400 }
      );
    }
    return Response.json(
      { error: "خطأ داخلي في الخادم" },
      { status: 500 }
    );
  }
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// أفضل الممارسة 3: اجعل proxy خفيف وسريع
// ❌ لا تفعل عمليات ثقيلة في proxy
export function proxy(request) {
  // لا تجلب قواعد بيانات هنا!
  const user = await db.users.find(...); // ❌ بطيء!
  return NextResponse.next();
}

// ✅ افعل فقط العمليات الخفيفة
export function proxy(request) {
  const token = request.cookies.get("auth-token"); // ✅ سريع
  if (!token) return NextResponse.redirect(...);
  return NextResponse.next();
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// أفضل الممارسة 4: استخدم Status Codes المناسبة
// 200 — نجاح
return Response.json(data);

// 201 — إنشاء
return Response.json(newItem, { status: 201 });

// 400 — طلب خاطئ (المستخدم أخطأ)
return Response.json({ error: "بيانات مفقودة" }, { status: 400 });

// 401 — غير مصرح (يحتاج تسجيل دخول)
return Response.json({ error: "غير مصرح" }, { status: 401 });

// 403 — ممنوع (ليس له صلاحية)
return Response.json({ error: "ممنوع" }, { status: 403 });

// 404 — غير موجود
return Response.json({ error: "غير موجود" }, { status: 404 });

// 500 — خطأ في الخادم
return Response.json({ error: "خطأ داخلي" }, { status: 500 });`}
            language="jsx"
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس عشر: ملخص الدرس */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <p>
            في هذا الدرس تعلمنا كيف نبني APIs قوية ونتحكم في طلبات المستخدمين في Next.js 16:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Route Handlers</strong> — ملفات <code>route.js</code> لإنشاء endpoints API في أي مجلد</li>
            <li><strong>طرق HTTP</strong> — تصدير دوال GET/POST/PUT/PATCH/DELETE لمعالجة الطلبات المختلفة</li>
            <li><strong>Request Objects</strong> — قراءة params، body، headers، searchParams، cookies</li>
            <li><strong>Response Objects</strong> — إرجاع JSON، text، HTML، أو streams</li>
            <li><strong>Dynamic Routes</strong> — استخدام <code>[id]/route.js</code> مع <code>await params</code></li>
            <li><strong>proxy.ts</strong> — البديل الجديد لـ middleware.ts في Next.js 16</li>
            <li><strong>Proxy Use Cases</strong> — إعادة التوجيه، المصادقة، A/B Testing، الجغرافيا</li>
            <li><strong>Matcher Config</strong> — تحديد المسارات التي يعمل عليها Proxy</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس عشر: اختبار المعرفة */}
        {/* ========================================== */}
        <LessonSection title="اختبار المعرفة">
          <Quiz
            question="أين يجب وضع ملف route.js لإنشاء API endpoint يُعالج طلبات /api/products؟"
            options={[
              "app/products/route.js",
              "app/api/products/route.js",
              "pages/api/products.js",
              "lib/products/route.js"
            ]}
            correctAnswer={1}
            explanation="ملف route.js يجب أن يكون في app/api/products/route.js ليقوم بإنشاء endpoint /api/products"
          />
          <Quiz
            question="ما اسم الدالة الذي يجب تصديرها في proxy.ts لإنشاء proxy في Next.js 16؟"
            options={[
              "middleware",
              "handler",
              "proxy",
              "server"
            ]}
            correctAnswer={2}
            explanation="في Next.js 16، يجب تصدير دالة اسمها proxy بدلاً من middleware التي أصبحت deprecated"
          />
          <Quiz
            question="كيف تقرأ parameter ديناميكي من Dynamic Route Handler في Next.js 16؟"
            options={[
              "const { id } = params;",
              "const { id } = await params;",
              "const id = request.params.id;",
              "const id = req.query.id;"
            ]}
            correctAnswer={1}
            explanation="في Next.js 16، params هو Promise يجب فك تجميعه باستخدام await: const { id } = await params"
          />
          <Quiz
            question="ما الذي يحدث عندما يستدعي proxy إعادة توجيه (redirect)؟"
            options={[
              "الصفحة تُحمَّل أولاً ثم تتم إعادة التوجيه",
              "الطلب ينتهي عند proxy ولا يصل إلى الصفحة",
              "يتم عرض شاشة تحميل أثناء إعادة التوجيه",
              "يتم تنفيذ page.js ثم إعادة التوجيه"
            ]}
            correctAnswer={1}
            explanation="عندما يعيد proxy توجيه الطلب، ينتهي التسلسل هنا ولا يصل الطلب إلى الصفحة أو Route Handler"
          />
          <Quiz
            question="أي من下面 يمثل أفضل ممارسة عند استخدام proxy؟"
            options={[
              "جلب البيانات من قاعدة البيانات داخل proxy",
              "تنفيذ كل منطق التطبيق في proxy",
              "إبقاء proxy خفيفاً مع عمليات مثل فحص cookies و headers فقط",
              "استخدام proxy لتخزين بيانات المستخدم"
            ]}
            correctAnswer={2}
            explanation="proxy يجب أن يكون خفيفاً وسريعاً. العمليات الثقيلة مثل جلب البيانات يجب أن تكون في Route Handlers أو Server Components"
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع عشر: التحدي */}
        {/* ========================================== */}
        <LessonSection title="تحدي الدرس — بناء CRUD API محمي بـ Proxy">
          <Challenge
            title="تحدي Route Handlers والـ Proxy"
            description="أنشئ نظاماً متكاملاً يتضمن API endpoints مع حماية عبر proxy"
            tasks={[
              "أنشئ Route Handler في app/api/todos/route.js يدعم GET (جلب كل المهام) و POST (إضافة مهمة جديدة)",
              "أنشئ Route Handler في app/api/todos/[id]/route.js يدعم GET (جلب مهمة واحدة) و PUT (تحديث) و DELETE (حذف)",
              "أنشئ proxy.ts يحمي مسار /dashboard — إذا لم يكن هناك cookie اسمه auth-token يتم إعادة التوجيه لـ /login",
              "أضف matcher في proxy ليتم تطبيقه فقط على المسارات التي تبدأ بـ /dashboard و /api",
              "أضف معالجة أخطاء مناسبة مع Status Codes مختلفة (400, 401, 404, 500)",
              "اختبر جميع endpoints باستخدام أداة مثل Postman أو curl"
            ]}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن عشر: ورقة الغش */}
        {/* ========================================== */}
        <LessonSection title="ورقة الغش (CheatSheet)">
          <CheatSheet
            items={[
              {
                title: "GET Route Handler",
                description: "لجلب البيانات من API",
                code: `export async function GET(request) {
  const data = await fetchData();
  return Response.json(data);
}`
              },
              {
                title: "POST Route Handler",
                description: "لإنشاء بيانات جديدة",
                code: `export async function POST(request) {
  const body = await request.json();
  const result = await createItem(body);
  return Response.json(result, { status: 201 });
}`
              },
              {
                title: "Dynamic Route Handler",
                description: "للتعامل مع مسارات ديناميكية مثل [id]",
                code: `export async function GET(request, { params }) {
  const { id } = await params;
  const item = await getItem(id);
  return Response.json(item);
}`
              },
              {
                title: "Proxy",
                description: "البديل الجديد لـ middleware في Next.js 16",
                code: `import { NextResponse } from "next/server";

export function proxy(request) {
  if (!request.cookies.get("token")) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};`
              },
              {
                title: "استجابة JSON",
                description: "إرجاع بيانات JSON مع status code",
                code: `// نجاح
return Response.json({ data: "..." });

// خطأ
return Response.json(
  { error: "..." },
  { status: 400 }
);`
              },
              {
                title: "قراءة Headers و Cookies",
                description: "الوصول إلى معلومات الطلب",
                code: `export async function GET(request) {
  const auth = request.headers.get("authorization");
  const token = request.cookies.get("auth-token");
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  return Response.json({ auth, token: token?.value, page });
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
