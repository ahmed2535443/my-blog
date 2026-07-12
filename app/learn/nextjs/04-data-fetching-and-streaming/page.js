// =====================================================
// ملف: page.js (الدرس الرابع: جلب البيانات والـ Streaming)
// المكان: app/learn/nextjs/04-data-fetching-and-streaming/page.js
// الوظيفة: تعليم طرق جلب البيانات في Next.js 16 والـ Streaming
// URL: /learn/nextjs/04-data-fetching-and-streaming
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function DataFetchingAndStreaming() {
  const lessonInfo = getLessonBySlug("nextjs", "04-data-fetching-and-streaming");

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
        {/* القسم الأول: جلب البيانات في Server Components */}
        {/* ========================================== */}
        <LessonSection title="جلب البيانات في Server Components">
          <p>
            أحد أكبر مميزات <strong>Server Components</strong> في Next.js هو
            إمكانية جلب البيانات <strong>مباشرةً داخل المكون</strong> بدون
            الحاجة لأي hooks مثل <code>useEffect</code> أو مكتبات خارجية.
          </p>

          <p>
            في المكونات التقليدية (Client Components)، كنت تحتاج استخدام{" "}
            <code>useEffect</code> مع <code>fetch</code> لإدارة حالة التحميل
            والأخطاء. في Server Components، كل شيء أبسط بكثير: الدالة تصبح{" "}
            <code>async</code> وتستخدم <code>await</code> مباشرة.
          </p>

          <CodeBlock
            language="jsx"
            code={`// ✅ في Server Component - بسيط ومباشر
// لا حاجة لـ useEffect أو useState أو Loading States

async function PostsPage() {
  // جلب البيانات مباشرة - يعمل على الخادم فقط
  const response = await fetch("https://api.example.com/posts");
  const posts = await response.json();

  // استخدام القاعدة مباشرة في JSX
  return (
    <div>
      <h1>المقالات</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              لماذا هذا أفضل؟
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>كود أقل:</strong> لا need لـ useState أو useEffect أو
                처리 الأخطاء يدوياً
              </li>
              <li>
                <strong>أداء أفضل:</strong> البيانات تُجلب على الخادم قبل
                إرسال HTML للمتصفح
              </li>
              <li>
                <strong>أمان:</strong> مفاتيح API وأسرار قاعدة البيانات تبقى
                على الخادم
              </li>
              <li>
                <strong>SEO أفضل:</strong> المحتوى جاهز عند أول طلب
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: مثال بسيط */}
        {/* ========================================== */}
        <LessonSection title="مثال بسيط: جلب قائمة مستخدمين">
          <p>
            لنرَ مثالاً عملياً يوضح كيفية جلب بيانات من API وعرضها في Server
            Component:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: app/users/page.js

// المكون async - يمكنه استخدام await مباشرة
async function UsersPage() {
  // جلب بيانات المستخدمين من API
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <main>
      <h1>قائمة المستخدمين</h1>
      <p>عدد المستخدمين: {users.length}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500">{user.company.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default UsersPage;`}
          />

          <p>
            كما ترى، لا يوجد أي <code>useEffect</code> أو{" "}
            <code>useState</code>. المكون يجلب البيانات ويعرضها مباشرة. إذا
            فشل الاتصال بالـ API، سيُظهر Next.js صفحة الخطأ تلقائياً.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: fetch() المحسّن */}
        {/* ========================================== */}
        <LessonSection title="fetch() المحسّن في Next.js">
          <p>
            Next.js يُحسّن دالة <code>fetch()</code> من JavaScript
            الأساسية بإضافة مميزات التخزين المؤقت (Cache) وإعادة
            التحديث (Revalidation). هذا يعني أن نفس الطلب لن يُكرر
            إلا إذا حدث انتهاء صلاحية التخزين.
          </p>

          <CodeBlock
            language="jsx"
            code={`// الاتجاه الافتراضي في Next.js 16:
// fetch() في Static Components → مخزّن مؤقتاً (cached)
// fetch() في Dynamic Components → لا يُخزّن (no-store)

// 1. الاتجاه الافتراضي: التخزين (للصفحات الساكنة)
async function StaticPage() {
  const data = await fetch("https://api.example.com/products");
  // يتم تخزين النتيجة مؤقتاً تلقائياً
  return <ProductList data={data} />;
}

// 2. تعطيل التخزين: للبيانات الحية
async function LivePrices() {
  const data = await fetch("https://api.example.com/prices", {
    cache: "no-store", // لا تخزين - تحديث في كل مرة
  });
  return <PriceTicker data={data} />;
}

// 3. إعادة التحديث بعد فترة: أفضل منهج متوازن
async function RecentPosts() {
  const data = await fetch("https://api.example.com/posts", {
    next: { revalidate: 3600 }, // تحديث كل ساعة (3600 ثانية)
  });
  return <PostList data={data} />;
}

// 4. التخزين مع Tag لإعادة تحديد محددة
async function FeaturedProducts() {
  const data = await fetch("https://api.example.com/featured", {
    next: { tags: ["products", "featured"] },
  });
  return <FeaturedGrid data={data} />;
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              خيارات cache في fetch():
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code>"force-cache"</code> - افتراضي للمكونات الساكنة:
                يُخزّن النتيجة للأبد حتى ت趯يد التحديث يدوياً
              </li>
              <li>
                <code>"no-store"</code> - لا يُخزّن أبداً: يجلب بيانات
                جديدة في كل طلب
              </li>
              <li>
                <code>next: {"{ revalidate: seconds }"}</code> - يُحدّث
                التخزين بعد عدد ثوانٍ محدد (ISR)
              </li>
              <li>
                <code>next: {"{ tags: [...] }"}</code> - يُعيّن وسوم
                للتخزين لإعادة تحديد محددة لاحقاً
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: Streaming مع Suspense */}
        {/* ========================================== */}
        <LessonSection title="Streaming مع Suspense">
          <p>
            <strong>Streaming</strong> (البث) هو ميزة تسمح لـ Next.js بإرسال
            أجزاء من الصفحة بشكل تدريجي للمتصفح. بدلاً من انتظار جميع
            البيانات قبل عرض أي شيء، يمكنك إظهار المحتوى السريع فوراً
            وتحميل المحتوى البطيء لاحقاً.
          </p>

          <p>
            المفتاح هو استخدام <code>Suspense</code> من React لتحديد
            الأجزاء البطيئة:
          </p>

          <CodeBlock
            language="jsx"
            code={`import { Suspense } from "react";

// مكون تحميل يُعرض أثناء انتظار البيانات البطيئة
function LoadingSpinner() {
  return (
    <div className="animate-pulse p-4">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}

// الصفحة الرئيسية - تجمع بين مكونات سريعة وبطيئة
async function DashboardPage() {
  return (
    <div>
      {/* هذا المكون سريع - يظهر فوراً */}
      <Header />

      {/* هذا المكون بطيئ - يُلف بـ Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <SlowDashboardData />
      </Suspense>

      {/* هذا المكون سريع أيضاً */}
      <Footer />
    </div>
  );
}

// مكون بطيئ: يأخذ وقتاً طويلاً في جلب البيانات
async function SlowDashboardData() {
  // محاكاة تأخير كبير
  const data = await fetch("https://api.example.com/slow-data");
  const result = await data.json();

  return (
    <div>
      <h2>الإحصائيات</h2>
      <StatsGrid data={result} />
    </div>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ما الذي يحدث؟
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>يبدأ الخادم في تجميع الصفحة</li>
              <li>يعرض المكونات السريعة (Header) فوراً</li>
              <li>عندما يصل لـ Suspense، يُرسل fallback (LoadingSpinner)</li>
              <li>يُكمل جلب البيانات من الخادم في الخلفية</li>
              <li>عند انتهاء البيانات، يُرسل المحتوى الحقيقي ويستبدل الـ fallback</li>
            </ol>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: loading.js */}
        {/* ========================================== */}
        <LessonSection title="loading.js - واجهة تحميل تلقائية">
          <p>
            Next.js يوفر ملف <code>loading.js</code> خاصاً لكل مجلد. عندما
            يتنقل المستخدم لصفحة ما، يعرض هذا الملف تلقائياً أثناء تحميل
            محتوى الصفحة. هذا يُحسّن تجربة المستخدم بشكل كبير.
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: app/dashboard/loading.js
// يُعرض تلقائياً أثناء تحميل أي صفحة داخل مجلد dashboard

export default function DashboardLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
      <p className="text-lg text-gray-600">جاري تحميل لوحة التحكم...</p>
    </div>
  );
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// هيكل المجلدات مع loading.js:
// app/
//   dashboard/
//     loading.js     ← يُعرض أثناء تحميل /dashboard
//     page.js        ← صفحة لوحة التحكم
//   blog/
//     loading.js     ← يُعرض أثناء تحميل /blog
//     [slug]/
//       loading.js   ← يُعرض أثناء تحميل مقال محدد
//       page.js
//   layout.js
//   page.js`}
          />

          <p>
            ملف <code>loading.js</code> يعمل كـ <strong>Streaming
            boundary</strong> تلقائي. كل المحتوى داخل الصفحة سيتدفق
            بشكل تدريجي مع عرض الـ loading أولاً.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: مثال عملي - Dashboard */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: Dashboard مع مصادر بيانات متعددة">
          <p>
            لنبنِ Dashboard يستخدم عدة مصادر بيانات: بعضها سريع
            (مخزّن) وبعضها بطييء (يحتاج Streaming):
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: app/dashboard/page.js
import { Suspense } from "react";

// ===== مكونات التحميل =====
function StatsSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse p-6 bg-gray-100 rounded-xl">
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
}

function ActivitySkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-12 bg-gray-100 rounded-lg"></div>
      ))}
    </div>
  );
}

// ===== المكونات الفعلية =====

// مكون سريع: إحصائيات مخزّنة (cache)
async function CachedStats() {
  const res = await fetch("https://api.example.com/stats", {
    next: { revalidate: 300 }, // تحديث كل 5 دقائق
  });
  const stats = await res.json();

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-6 bg-blue-50 rounded-xl">
        <p className="text-sm text-blue-600">إجمالي المستخدمين</p>
        <p className="text-3xl font-bold">{stats.totalUsers}</p>
      </div>
      <div className="p-6 bg-green-50 rounded-xl">
        <p className="text-sm text-green-600">المبيعات اليوم</p>
        <p className="text-3xl font-bold">{stats.todaySales}</p>
      </div>
      <div className="p-6 bg-purple-50 rounded-xl">
        <p className="text-sm text-purple-600">الطلبات المعلقة</p>
        <p className="text-3xl font-bold">{stats.pendingOrders}</p>
      </div>
    </div>
  );
}

// مكون بطيئ: آخر النشاطات (يحتاج Streaming)
async function RecentActivity() {
  const res = await fetch("https://api.example.com/activity", {
    cache: "no-store", // بيانات حية دائماً
  });
  const activities = await res.json();

  return (
    <div className="space-y-3">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <span className="text-2xl">{activity.icon}</span>
          <div>
            <p className="font-medium">{activity.title}</p>
            <p className="text-sm text-gray-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ===== الصفحة الرئيسية =====
export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">لوحة التحكم</h1>

      {/* الإحصائيات: سريعة ومخزّنة - تظهر فوراً */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">الإحصائيات</h2>
        <Suspense fallback={<StatsSkeleton />}>
          <CachedStats />
        </Suspense>
      </section>

      {/* آخر النشاطات: بطيئة - تظهر مع Streaming */}
      <section>
        <h2 className="text-xl font-semibold mb-4">آخر النشاطات</h2>
        <Suspense fallback={<ActivitySkeleton />}>
          <RecentActivity />
        </Suspense>
      </section>
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: جلب بيانات متعددة بالتوازي */}
        {/* ========================================== */}
        <LessonSection title="جلب بيانات متعددة بالتوازي">
          <p>
            عند الحاجة لجلب عدة مصادر بيانات في نفس الوقت، استخدم{" "}
            <code>Promise.all()</code> أو <code>Promise.allSettled()</code>{" "}
            لتنفيذها بالتوازي بدلاً من التسلسل:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ✅ التوازي: جلب كل البيانات في نفس الوقت
async function DashboardPage() {
  // كل هذه الطلبات تتم في نفس الوقت
  const [usersRes, postsRes, commentsRes] = await Promise.all([
    fetch("https://api.example.com/users"),
    fetch("https://api.example.com/posts"),
    fetch("https://api.example.com/comments"),
  ]);

  const users = await usersRes.json();
  const posts = await postsRes.json();
  const comments = await commentsRes.json();

  return (
    <div>
      <UserList users={users} />
      <PostList posts={posts} />
      <CommentList comments={comments} />
    </div>
  );
}

// ❌ التسلسل: انتظار كل طلب على حدة (بطيء)
async function SlowDashboard() {
  const usersRes = await fetch("https://api.example.com/users");
  const users = await usersRes.json();

  const postsRes = await fetch("https://api.example.com/posts");
  const posts = await postsRes.json();

  const commentsRes = await fetch("https://api.example.com/comments");
  const comments = await commentsRes.json();

  // إذا كل طلب يأخذ 1 ثانية، المجموع = 3 ثوانٍ!
  return <Dashboard users={users} posts={posts} comments={comments} />;
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// ✅ Promise.allSettled: أكثر أماناً - لا يفشل إذا فشل طلب واحد
async function DashboardPage() {
  const results = await Promise.allSettled([
    fetch("https://api.example.com/users"),
    fetch("https://api.example.com/posts"),
    fetch("https://api.example.com/notifications"), // قد يفشل
  ]);

  // نتحقق من حالة كل طلب
  const users = results[0].status === "fulfilled"
    ? await results[0].value.json()
    : []; // بيانات افتراضية إذا فشل

  const posts = results[1].status === "fulfilled"
    ? await results[1].value.json()
    : [];

  const notifications = results[2].status === "fulfilled"
    ? await results[2].value.json()
    : [];

  return (
    <div>
      <UserList users={users} />
      <PostList posts={posts} />
      <NotificationList items={notifications} />
    </div>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              متى تستخدم كل واحدة؟
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code>Promise.all()</code> - عندما يكون كل الطلبات
                ضرورية. إذا فشل طلب واحد، يفشل الكل
              </li>
              <li>
                <code>Promise.allSettled()</code> - عندما تريد المتابعة
                حتى لو فشل بعض الطلبات. أكثر مرونة
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: جلب بيانات في Client Components */}
        {/* ========================================== */}
        <LessonSection title="جلب بيانات في Client Components">
          <p>
            أحياناً تحتاج جلب بيانات في Client Component، خاصة إذا كانت
            البيانات مرتبطة بتفاعل المستخدم. في هذه الحالة، يمكنك استخدام{" "}
            <code>use</code> API (React 19) أو مكتبات مثل SWR:
          </p>

          <CodeBlock
            language="jsx"
            code={`// الطريقة الأولى: استخدام use() من React 19
// في Client Component مع مسار Promise من Server

"use client";

import { use, Suspense } from "react";

// الدالة تُنشئ الـ Promise على الخادم
async function fetchUserProfile(userId) {
  const res = await fetch(\`/api/users/\${userId}\`);
  return res.json();
}

// المكون يستخدم use() لقراءة الـ Promise
function UserProfile({ userPromise }) {
  const user = use(userPromise);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// الصفحة: تُنشئ الـ Promise وتُمرره
export default function ProfilePage() {
  const userPromise = fetchUserProfile(1);

  return (
    <Suspense fallback={<p>جاري التحميل...</p>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// الطريقة الثانية: استخدام SWR
// مكتبة شائعة لجلب البيانات في Client Components

"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function UserList() {
  // useSWR يجلب البيانات ويخزنها مؤقتاً ويُحدّثها
  const { data: users, error, isLoading } = useSWR(
    "/api/users",
    fetcher,
    {
      revalidateOnFocus: true,   // تحديث عند العودة للصفحة
      refreshInterval: 30000,    // تحديث كل 30 ثانية
    }
  );

  if (isLoading) return <p>جاري التحميل...</p>;
  if (error) return <p>حدث خطأ في تحميل البيانات</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>
            لنفهم كيف يعمل Streaming في Next.js خطوة بخطوة:
          </p>

          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>يبدأ الخادم في تجميع الصفحة:</strong> يقرأ ملف
              الصفحة ويبدأ في تنفيذ Server Components
            </li>
            <li>
              <strong>يصل لحدود Suspense:</strong> يجد مكوناً محاطاً
              بـ Suspense ويبدأ في جلب بياناته في الخلفية
            </li>
            <li>
              <strong>يُرسل المحتوى الجاهز:</strong> يُرسل HTML
              للمحتوى السريع فوراً (مع الـ fallback للبطيء)
            </li>
            <li>
              <strong>يُكمل في الخلفية:</strong> يستمر الخادم في جلب
              البيانات البطيئة
            </li>
            <li>
              <strong>يُرسل التحديث:</strong> عند انتهاء البيانات، يُرسل
              chunk جديد يستبدل الـ fallback بالمحتوى الحقيقي
            </li>
            <li>
              <strong>يتم التجميع في المتصفح:</strong> يدمج المتصفح
              المحتوى الجديد مع الصفحة الحالية
            </li>
          </ol>

          <CodeBlock
            language="jsx"
            code={`// تمثيل لمسلسلة عمل Streaming:

// 1. الخادم يبدأ تجميع الصفحة
// ┌──────────────────────────────────┐
// │  <html>                         │
// │    <h1>لوحة التحكم</h1>        │  ← يُرسل فوراً
// │    <Stats>...</Stats>           │  ← يُرسل فوراً (مفقّد)
// │    <Activity fallback={...} />  │  ← يُرسل الـ fallback
// │  </html>                        │
// └──────────────────────────────────┘

// 2. بعد جلب البيانات البطيئة
// ┌──────────────────────────────────┐
// │  <div>                          │
// │    <Activity>                   │  ← يُرسل المحتوى الحقيقي
// │      <Item>...</Item>           │
// │      <Item>...</Item>           │
// │    </Activity>                  │
// │  </div>                         │
// └──────────────────────────────────┘

// النتيجة: المستخدم يرى محتوى فوراً بدلاً من شاشة فارغة`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul className="space-y-4 my-4">
            <li>
              <strong>❌ استخدام useEffect لجلب البيانات في Server Component:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - Server Components لا تحتاج useEffect
function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data").then(res => res.json()).then(setData);
  }, []);

  return <div>{data?.name}</div>;
}

// ✅ صحيح - استخدم async/await مباشرة
async function Page() {
  const res = await fetch("/api/data");
  const data = await res.json();

  return <div>{data.name}</div>;
}`}
              />
            </li>

            <li>
              <strong>❌ عدم تغليف المكونات البطيئة بـ Suspense:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - الصفحة ستنتظر كل البيانات قبل العرض
async function Page() {
  const slowData = await fetch("https://slow-api.com/data"); // 5 ثوانٍ!
  const fastData = await fetch("https://fast-api.com/data"); // فوري

  return (
    <div>
      <FastComponent data={fastData} />
      <SlowComponent data={slowData} />
    </div>
  );
}

// ✅ صحيح - استخدم Suspense لفصل البطيء عن السريع
import { Suspense } from "react";

async function Page() {
  const fastData = await fetch("https://fast-api.com/data");

  return (
    <div>
      <FastComponent data={fastData} /> {/* يظهر فوراً */}
      <Suspense fallback={<Loading />}>
        <SlowSection /> {/* يظهر مع التحميل */}
      </Suspense>
    </div>
  );
}`}
              />
            </li>

            <li>
              <strong>❌ عدم معالجة أخطاء fetch:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - لا يوجد معالجة أخطاء
async function Page() {
  const res = await fetch("/api/data");
  const data = await res.json(); // قد يفشل!
  return <div>{data.name}</div>;
}

// ✅ صحيح - تحقق من الاستجابة
async function Page() {
  const res = await fetch("/api/data");

  if (!res.ok) {
    throw new Error(\`خطأ في جلب البيانات: \${res.status}\`);
  }

  const data = await res.json();
  return <div>{data.name}</div>;
}`}
              />
            </li>

            <li>
              <strong>❌ استخدام同一个 fetch مع cache: "no-store" لكل شيء:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - كل شيء بدون تخزين = أبطأ
async function Page() {
  // لا داعي لتعطيل التخزين للبيانات الثابتة
  const categories = await fetch("/api/categories", {
    cache: "no-store"
  });
  const products = await fetch("/api/products", {
    cache: "no-store"
  });
}

// ✅ صحيح - استخدم التخزين بذكاء
async function Page() {
  // البيانات الثابتة: مخزّنة
  const categories = await fetch("/api/categories", {
    next: { revalidate: 86400 } // يوم واحد
  });

  // البيانات الحية: بدون تخزين
  const products = await fetch("/api/products", {
    cache: "no-store"
  });
}`}
              />
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul className="space-y-3 my-4">
            <li>
              <strong>✅ اجلب البيانات في Server Components قدر الإمكان:</strong>{" "}
              هذا يُحسّن الأداء ويُبسط الكود. لا تحتاج useEffect أو
              مكتبات خارجية.
            </li>
            <li>
              <strong>✅ استخدم Suspense للبيانات البطيئة:</strong> فصل
              المكونات السريعة عن البطيئة يُحسّن تجربة المستخدم بشكل كبير.
            </li>
            <li>
              <strong>✅ استخدم التوازي لجلب البيانات المتعددة:</strong>{" "}
              <code>Promise.all()</code> أو <code>Promise.allSettled()</code>{" "}
              أسرع من الانتظار التسلسلي.
            </li>
            <li>
              <strong>✅ حدد cache بذكاء:</strong> استخدم{" "}
              <code>revalidate</code> للبيانات التي تتغير بانتظام، و{" "}
              <code>cache: "no-store"</code> للبيانات الحية فقط.
            </li>
            <li>
              <strong>✅ استخدم loading.js للصفحات الكاملة:</strong> يُحسّن
              تجربة التنقل بين الصفحات.
            </li>
            <li>
              <strong>✅ قدّم بيانات افتراضية:</strong> استخدم{" "}
              <code>Promise.allSettled()</code> عندما قد تفشل بعض الطلبات.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li>
                في <strong style={{ color: "var(--primary)" }}>Server Components</strong>، يمكنك جلب البيانات مباشرة باستخدام{" "}
                <code>async/await</code> بدون useEffect
              </li>
              <li>
                <code>fetch()</code> في Next.js محسّن بـ <strong>Caching</strong>{" "}
                و <strong>Revalidation</strong> تلقائياً
              </li>
              <li>
                <strong style={{ color: "var(--secondary)" }}>Suspense</strong> يُمكّن من Streaming - إرسال المحتوى تدريجياً
              </li>
              <li>
                <code>loading.js</code> يوفر واجهة تحميل تلقائية لكل مسار
              </li>
              <li>
                استخدم <code>Promise.all()</code> للجلب المتوازٍ و{" "}
                <code>Promise.allSettled()</code> للأمان
              </li>
              <li>
                في Client Components، استخدم <code>use()</code> أو{" "}
                <code>SWR</code> لجلب البيانات
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هو الفرق الرئيسي لجلب البيانات في Server Components مقارنة بـ Client Components؟"
          options={[
            "Server Components أبطأ في جلب البيانات",
            "يمكن استخدام async/await مباشرة بدون useEffect أو useState",
            "Server Components لا يمكنها جلب البيانات من API خارجي",
            "لا يوجد فرق实质ي بينهما",
          ]}
          correctAnswer={1}
          explanation="في Server Components، يمكنك استخدام async/await مباشرة لجلب البيانات بدون الحاجة لـ useEffect أو useState. المكون يعمل على الخادم ويمكنه الاتصال بقواعد البيانات مباشرة."
        />

        <Quiz
          question="ما هو الهدف الرئيسي من استخدام <Suspense> مع جلب البيانات؟"
          options={[
            "تحسين أمان التطبيق",
            "جعل الكود أسهل في القراءة",
            "تمكين Streaming لعرض المحتوى تدريجياً",
            "تقليل حجم الـ JavaScript المرسل",
          ]}
          correctAnswer={2}
          explanation="Suspense يُمكّن من Streaming - عرض المكونات السريعة فوراً مع إظهار loading للمكونات البطيئة، ثم استبدالها عند انتهاء البيانات."
        />

        <Quiz
          question="أي خيار من fetch() يُستخدم لتحديث البيانات كل 5 دقائق؟"
          options={[
            'cache: "force-cache"',
            'cache: "no-store"',
            "next: { revalidate: 300 }",
            "next: { tags: [\"data\"] }",
          ]}
          correctAnswer={2}
          explanation="revalidate: 300 يعني 300 ثانية = 5 دقائق. يخزّن النتيجة ويُحدّثها تلقائياً كل 5 دقائق."
        />

        <Quiz
          question="متى يجب استخدام Promise.allSettled بدلاً من Promise.all؟"
          options={[
            "عندما تريد أداءً أسرع دائماً",
            "عندما تكون جميع الطلبات مطلوبة لعمل الصفحة",
            "عندما تريد المتابعة حتى لو فشل بعض الطلبات",
            "لا يوجد فرق实质ي بينهما",
          ]}
          correctAnswer={2}
          explanation="Promise.allSettled لا يفشل إذا فشل أي طلب - يُرجع نتيجة كل طلب (fulfilled أو rejected). مفيد عندما تريد عرض ما تتوفر من بيانات."
        />

        <Quiz
          question="ما هو ملف loading.js في Next.js؟"
          options={[
            "ملف لتحميل مكتبات خارجية",
            "ملف يُعرض تلقائياً أثناء تحميل محتوى الصفحة",
            "ملف لتخزين البيانات مؤقتاً",
            "ملف لإدارة أخطاء API",
          ]}
          correctAnswer={1}
          explanation="loading.js يُعرض تلقائياً كواجهة تحميل أثناء جلب بيانات الصفحة. يعمل كـ Streaming boundary تلقائي لتحسين تجربة المستخدم."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: بناء Dashboard مع Streaming"
          description={
            <div>
              <p className="mb-2">
                بناء لوحة تحكم تستخدم Streaming لعرض البيانات بشكل تدريجي:
              </p>
              <ol className="list-decimal list-inside space-y-1">
                <li>أنشئ صفحة Dashboard مع Header و إحصائيات و نشاطات</li>
                <li>اجلب الإحصائيات من API (بتأخير 1 ثانية) - اجعلها بدون تخزين</li>
                <li>اجلب آخر النشاطات من API آخر (بتأخير 3 ثوانٍ)</li>
                <li>استخدم Suspense مع fallback مناسب لكل قسم</li>
                <li>أنشئ ملف loading.js لمجلد Dashboard</li>
                <li>استخدم Promise.all لجلب البيانات بالتوازي</li>
              </ol>
            </div>
          }
        >
          <CodeBlock
            language="jsx"
            code={`// الحل الكامل

// 1. ملف app/dashboard/loading.js
export default function DashboardLoading() {
  return (
    <div className="p-8">
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 bg-gray-200 rounded-xl"></div>
          <div className="h-24 bg-gray-200 rounded-xl"></div>
          <div className="h-24 bg-gray-200 rounded-xl"></div>
        </div>
        <div className="space-y-3">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

// 2. ملف app/dashboard/page.js
import { Suspense } from "react";

async function Stats() {
  // محاكاة تأخير 1 ثانية
  const res = await fetch("https://api.example.com/stats", {
    cache: "no-store",
  });
  const stats = await res.json();

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-6 bg-blue-50 rounded-xl">
        <p className="text-sm text-blue-600">المستخدمون</p>
        <p className="text-3xl font-bold">{stats.users}</p>
      </div>
      <div className="p-6 bg-green-50 rounded-xl">
        <p className="text-sm text-green-600">المبيعات</p>
        <p className="text-3xl font-bold">{stats.sales}</p>
      </div>
      <div className="p-6 bg-purple-50 rounded-xl">
        <p className="text-sm text-purple-600">الطلبات</p>
        <p className="text-3xl font-bold">{stats.orders}</p>
      </div>
    </div>
  );
}

async function Activity() {
  // محاكاة تأخير 3 ثوانٍ
  const res = await fetch("https://api.example.com/activity", {
    cache: "no-store",
  });
  const activities = await res.json();

  return (
    <div className="space-y-3">
      {activities.map((a) => (
        <div key={a.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <span className="text-2xl">{a.icon}</span>
          <div>
            <p className="font-medium">{a.title}</p>
            <p className="text-sm text-gray-500">{a.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatsSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse p-6 bg-gray-100 rounded-xl">
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
}

function ActivitySkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-14 bg-gray-100 rounded-lg"></div>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">لوحة التحكم</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">الإحصائيات</h2>
        <Suspense fallback={<StatsSkeleton />}>
          <Stats />
        </Suspense>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">آخر النشاطات</h2>
        <Suspense fallback={<ActivitySkeleton />}>
          <Activity />
        </Suspense>
      </section>
    </div>
  );
}`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ورقة غش: جلب البيانات والـ Streaming">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                جلب البيانات في Server Components:
              </p>
              <CodeBlock
                language="jsx"
                code={`// بسيط: async/await مباشرة
async function Page() {
  const res = await fetch("/api/data");
  const data = await res.json();
  return <div>{data.name}</div>;
}

// مع التخزين
const res = await fetch("/api/data", {
  next: { revalidate: 3600 }
});

// بدون تخزين
const res = await fetch("/api/data", {
  cache: "no-store"
});

// مع tags
const res = await fetch("/api/data", {
  next: { tags: ["data"] }
});`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                التوازي:
              </p>
              <CodeBlock
                language="jsx"
                code={`// Promise.all - يفشل إذا فشل طلب واحد
const [a, b] = await Promise.all([
  fetch("/api/a"),
  fetch("/api/b"),
]);

// Promise.allSettled - أكثر أماناً
const results = await Promise.allSettled([
  fetch("/api/a"),
  fetch("/api/b"),
]);`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                Streaming مع Suspense:
              </p>
              <CodeBlock
                language="jsx"
                code={`import { Suspense } from "react";

async function Page() {
  return (
    <div>
      <FastComponent />
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                loading.js:
              </p>
              <CodeBlock
                language="jsx"
                code={`// app/dashboard/loading.js
export default function Loading() {
  return <p>جاري التحميل...</p>;
}
// يُعرض تلقائياً لكل صفحة في dashboard/`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                Client Component Data Fetching:
              </p>
              <CodeBlock
                language="jsx"
                code={`// باستخدام use() من React 19
"use client";
import { use } from "react";

function Comp({ promise }) {
  const data = use(promise);
  return <div>{data.name}</div>;
}

// باستخدام SWR
"use client";
import useSWR from "swr";
const fetcher = (url) =>
  fetch(url).then(r => r.json());

function Comp() {
  const { data } = useSWR("/api", fetcher);
}`}
              />
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* التنقل */}
        {/* ========================================== */}
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
