// =====================================================
// ملف: page.js (الدرس الثاني: التوجيه: الصفحات والتخطيطات)
// المكان: app/learn/nextjs/02-routing-layouts-pages/page.js
// الوظيفة: شرح نظام التوجيه في Next.js App Router
// URL: /learn/nextjs/02-routing-layouts-pages
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function RoutingLayoutsPages() {
  const lessonInfo = getLessonBySlug("nextjs", "02-routing-layouts-pages");

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
        {/* القسم الأول: File-based Routing */}
        {/* ========================================== */}
        <LessonSection title="File-based Routing (التوجيه بالملفات)">
          <p>
            في Next.js، <strong>التوجيه (Routing)</strong> يتم تلقائياً بناءً على هيكل الملفات والمجلدات. ليس هناك حاجة لكتابة ملف config خاص بالروابط - كل مجلد داخل <code>app/</code> يمثل قطعة (segment) من الرابط.
          </p>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 القاعدة الأساسية:
            </p>
            <p>
              <code>app/**page.js</code> = الملف الذي يُحدد واجهة المسار. المسار يُشتق من مسار المجلد بالنسبة لـ <code>app/</code>.
            </p>
          </div>

          <p><strong>أمثلة على التوجيه التلقائي:</strong></p>
          <ul>
            <li><code>app/page.js</code> → <code>/</code> (الصفحة الرئيسية)</li>
            <li><code>app/about/page.js</code> → <code>/about</code></li>
            <li><code>app/blog/page.js</code> → <code>/blog</code></li>
            <li><code>app/dashboard/settings/page.js</code> → <code>/dashboard/settings</code></li>
          </ul>

          <p><strong>مثال على هيكل ملفات:</strong></p>

          <CodeBlock
            language="bash"
            code={`app/
├── page.js                # /
├── about/
│   └── page.js            # /about
├── blog/
│   └── page.js            # /blog
├── dashboard/
│   ├── page.js            # /dashboard
│   └── settings/
│       └── page.js        # /dashboard/settings
└── contact/
    └── page.js            # /contact`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: Pages */}
        {/* ========================================== */}
        <LessonSection title="الصفحات (Pages)">
          <p>
            <strong>page.js</strong> هو الملف الذي يُحدد واجهة المستخدم (UI) لكل مسار. كل مجلد يحتوي على <code>page.js</code> يصبح مساراً قابلاً للزيارة.
          </p>

          <p>مثال بسيط لصفحة "من نحن":</p>

          <CodeBlock
            language="jsx"
            code={`// app/about/page.js
export default function AboutPage() {
  return (
    <div>
      <h1>من نحن</h1>
      <p>نحن فريق CodeMaster، نقدم تعليماً مجانياً في البرمجة.</p>
    </div>
  );
}

// يمكن زيارة الصفحة على: /about`}
          />

          <p>ملف <code>page.js</code> يمكن أن يكون:</p>
          <ul>
            <li><strong>Server Component</strong> (افتراضي): مناسب لجلد البيانات والعرض.</li>
            <li><strong>Client Component</strong>: إذا احتاج إلى تفاعل (useState, useEffect).</li>
          </ul>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔔 مهم:
            </p>
            <p>
              اسم الملف يجب أن يكون <code>page.js</code> بالضبط (أو <code>page.tsx</code> مع TypeScript). أي اسم آخر لن يعمل.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: Layouts */}
        {/* ========================================== */}
        <LessonSection title="التخطيطات (Layouts)">
          <p>
            <strong>layout.js</strong> هو ملف يُعرّف تخطيطاً يُشارك بين عدة صفحات. الفرق بينه وبين page.js أن layout يُغلّف الصفحات الفرعية ويَبقى ثابتاً عند التنقل بينها.
          </p>

          <p><strong>مثال على layout رئيسي:</strong></p>

          <CodeBlock
            language="jsx"
            code={`// app/layout.js - التخطيط الرئيسي للتطبيق
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {/* شريط التنقل - يظهر في كل الصفحات */}
        <nav>
          <Link href="/">الرئيسية</Link>
          <Link href="/about">من نحن</Link>
          <Link href="/blog">المدونة</Link>
        </nav>

        {/* محتوى الصفحة الحالية */}
        <main>{children}</main>

        {/* تذييل الصفحة - يظهر في كل الصفحات */}
        <footer>© 2026 CodeMaster</footer>
      </body>
    </html>
  );
}`}
          />

          <p><strong>ميزات الـ Layout:</strong></p>
          <ul>
            <li><strong>مشارك</strong>: يُغلّف كل الصفحات الفرعية.</li>
            <li><strong>ثابت</strong>: لا يُعاد تحميله عند التنقل بين الصفحات (يحافظ على الـ state).</li>
            <li><strong>متدرج</strong>: يمكن تداخل layouts (مثلاً: dashboard له layout خاص به).</li>
            <li><strong>Server Component</strong>: الـ layout دائماً هو Server Component (لا يمكن إضافة "use client").</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: Nested Routes */}
        {/* ========================================== */}
        <LessonSection title="المسارات المتداخلة (Nested Routes)">
          <p>
            لإنشاء مسارات متداخلة، ببساطة أنشئ مجلدات داخل مجلدات. كلما تعمقت في المجلدات، كلما زاد طول المسار.
          </p>

          <p><strong>مثال:</strong></p>

          <CodeBlock
            language="bash"
            code={`app/
├── dashboard/
│   ├── page.js            # /dashboard
│   ├── analytics/
│   │   └── page.js        # /dashboard/analytics
│   └── settings/
│       ├── page.js        # /dashboard/settings
│       └── profile/
│           └── page.js    # /dashboard/settings/profile`}
          />

          <p>كل مجلد يمكن أن يحتوي على <code>layout.js</code> خاص به. مثلاً، <code>app/dashboard/layout.js</code> سيُغلّف كل صفحات الـ dashboard:</p>

          <CodeBlock
            language="jsx"
            code={`// app/dashboard/layout.js
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      {/* شريط جانبي خاص بلوحة التحكم */}
      <aside style={{ width: "250px", background: "#f5f5f5" }}>
        <nav>
          <Link href="/dashboard">الملخص</Link>
          <Link href="/dashboard/analytics">التحليلات</Link>
          <Link href="/dashboard/settings">الإعدادات</Link>
        </nav>
      </aside>

      {/* محتوى الصفحة الحالية */}
      <section style={{ flex: 1 }}>{children}</section>
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: Dynamic Routes */}
        {/* ========================================== */}
        <LessonSection title="المسارات الديناميكية (Dynamic Routes)">
          <p>
            عندما لا تعرف اسم المسار مسبقاً (مثلاً: معرف مقال في مدونة)، تستخدم <strong>المسارات الديناميكية</strong> مع الأقواس المربعة <code>[slug]</code>.
          </p>

          <p><strong>مثال: مدونة بمقالات ديناميكية</strong></p>

          <CodeBlock
            language="bash"
            code={`app/
├── blog/
│   ├── page.js            # /blog (قائمة المقالات)
│   └── [slug]/
│       └── page.js        # /blog/hello-world, /blog/my-post`}
          />

          <p>صفحة المقال تستقبل <code>params</code> كممتلك (prop) يحتوي على الـ slug:</p>

          <CodeBlock
            language="jsx"
            code={`// app/blog/[slug]/page.js
export default async function BlogPost({ params }) {
  // params.slug يحتوي على قيمة المسار الديناميكي
  const slug = (await params).slug;

  // جلب المقال من قاعدة البيانات بناءً على slug
  const post = await getPostBySlug(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

// /blog/hello-world → params.slug = "hello-world"
// /blog/my-first-post → params.slug = "my-first-post"`}
          />

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 ملاحظة:
            </p>
            <p>
              في Next.js 16، الـ <code>params</code> هو Promise ويجب استخدام <code>await</code> للوصول لقيمته. هذا تغيير عن الإصدارات السابقة.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: Route Groups */}
        {/* ========================================== */}
        <LessonSection title="مجموعات المسارات (Route Groups)">
          <p>
            أحياناً تريد تجميع صفحات معاً في هيكل الملفات لكن <strong>بدون تغيير المسار</strong>. هنا يأتي دور <strong>Route Groups</strong> باستخدام أقواس دائرية <code>()</code>.
          </p>

          <CodeBlock
            language="bash"
            code={`app/
├── (marketing)/
│   ├── page.js            # / (الصفحة الرئيسية)
│   ├── about/
│   │   └── page.js        # /about
│   └── contact/
│       └── page.js        # /contact
├── (dashboard)/
│   ├── layout.js          # تخطيط خاص بلوحة التحكم
│   ├── dashboard/
│   │   └── page.js        # /dashboard
│   └── settings/
│       └── page.js        # /settings`}
          />

          <p>فوائد Route Groups:</p>
          <ul>
            <li><strong>تنظيم أفضل</strong>: فصل صفحات التسويق عن لوحة التحكم.</li>
            <li><strong>Layouts مختلفة</strong>: كل مجموعة يمكن أن يكون لها layout مختلف.</li>
            <li><strong>لا تأثير على المسار</strong>: <code>(marketing)</code> لا يظهر في الرابط.</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: Parallel Routes */}
        {/* ========================================== */}
        <LessonSection title="المسارات المتوازية (Parallel Routes)">
          <p>
            <strong>Parallel Routes</strong> تسمح بعرض عدة صفحات في نفس الوقت على الشاشة. تُعرف باستخدام <code>@</code> قبل اسم المجلد (Slots).
          </p>

          <CodeBlock
            language="bash"
            code={`app/
├── layout.js              # يحتوي على children و @team و @analytics
├── page.js                # / (المحتوى الرئيسي)
├── @team/
│   └── page.js            # /team (يُعرض في slot @team)
└── @analytics/
    └── page.js            # /analytics (يُعرض في slot @analytics)`}
          />

          <p>الـ layout يستقبل كل slot كممتلك مستقل:</p>

          <CodeBlock
            language="jsx"
            code={`// app/layout.js مع Parallel Routes
export default function RootLayout({ children, team, analytics }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <div>{children}</div>    {/* المحتوى الرئيسي */}
          <div>{team}</div>        {/* @team slot */}
          <div>{analytics}</div>   {/* @analytics slot */}
        </div>
      </body>
    </html>
  );
}`}
          />

          <p>مفيد جداً في: لوحات التحكم، الـ modals، و dashboards المعقدة.</p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: Intercepting Routes */}
        {/* ========================================== */}
        <LessonSection title="اعتراض المسارات (Intercepting Routes)">
          <p>
            <strong>Intercepting Routes</strong> تسمح لك باعتراض مسار وعرضه في سياق مختلف (مثل فتح صورة في modal من معرض الصور).
          </p>

          <p>تُعرف باستخدام <code>(.)</code> و <code>(..)</code> و <code>(...)</code>:</p>

          <CodeBlock
            language="bash"
            code={`app/
├── feed/
│   ├── page.js            # /feed (قائمة المنشورات)
│   └── (..)photo/
│       └── [id]/
│           └── page.js    # يُعترض /photo/123 ويُعرض في feed كـ modal
└── photo/
    └── [id]/
        └── page.js        # /photo/123 (الصفحة العادية)`}
          />

          <p>أنماط الاعتراض:</p>
          <ul>
            <li><code>(.)</code> - يعترض مساراً من نفس المستوى.</li>
            <li><code>(..)</code> - يعترض مساراً من مستوى أعلى.</li>
            <li><code>(..)(..)</code> - يعترض مساراً من مستويين أعلى.</li>
            <li><code>(...)</code> - يعترض مساراً من الجذر (app).</li>
          </ul>

          <p>مثالي لـ:</p>
          <ul>
            <li>فتح صورة في modal عند النقر عليها من معرض.</li>
            <li>فتح تفاصيل منتج في نافذة منبثقة.</li>
            <li>نماذج تسجيل الدخول المضمنة.</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: Link Component */}
        {/* ========================================== */}
        <LessonSection title="مكون Link للتنقل">
          <p>
            <strong>&lt;Link&gt;</strong> هو مكون Next.js للتنقل بين الصفحات. وهو أفضل من <code>&lt;a&gt;</code> العادي لأنه:
          </p>
          <ul>
            <li><strong>Prefetching</strong>: يسبق تحميل الصفحات المرتبطة في الخلفية.</li>
            <li><strong>Client-side Navigation</strong>: التنقل بدون إعادة تحميل الصفحة.</li>
            <li><strong>Scrolling</strong>: يتعامل مع التمرير التلقائي.</li>
          </ul>

          <CodeBlock
            language="jsx"
            code={`// استخدامات مكون Link
import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      {/* رابط بسيط */}
      <Link href="/about">من نحن</Link>

      {/* رابط مع query parameters */}
      <Link href={{ pathname: "/blog", query: { page: 1 } }}>
        المدونة - الصفحة 1
      </Link>

      {/* رابط مع استبدال التاريخ (بدلاً من إضافة) */}
      <Link href="/dashboard" replace>
        لوحة التحكم
      </Link>

      {/* رابط مع تمرير للعنصر */}
      <Link href="/#section-2" scroll={false}>
        اذهب للقسم 2 (بدون تمرير)
      </Link>
    </nav>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: useRouter Hook */}
        {/* ========================================== */}
        <LessonSection title="useRouter للتنقل البرمجي">
          <p>
            إذا كنت بحاجة للتنقل برمجياً (بعد حدث معين)، استخدم <strong>useRouter</strong> من <code>next/navigation</code>.
          </p>

          <p>ملاحظة: <code>useRouter</code> هو React Hook يعمل فقط في Client Components:</p>

          <CodeBlock
            language="jsx"
            code={`"use client";

import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  function handleLogin() {
    // تنفيذ تسجيل الدخول...
    const success = true;

    if (success) {
      router.push("/dashboard");     // اذهب للوحة التحكم
    } else {
      router.replace("/login");      // استبدل الصفحة الحالية (لا يمكن الرجوع)
    }
  }

  return (
    <button onClick={handleLogin}>
      تسجيل الدخول
    </button>
  );
}`}
          />

          <p><strong>دوال useRouter المهمة:</strong></p>
          <ul>
            <li><code>router.push(path)</code> - يضيف مساراً جديداً في تاريخ التصفح.</li>
            <li><code>router.replace(path)</code> - يستبدل المسار الحالي (لا يمكن الرجوع له).</li>
            <li><code>router.back()</code> - يعود للصفحة السابقة.</li>
            <li><code>router.forward()</code> - يتقدم للصفحة التالية.</li>
            <li><code>router.refresh()</code> - يُعيد تحميل الصفحة الحالية خادماً.</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: generateStaticParams */}
        {/* ========================================== */}
        <LessonSection title="توليد المسارات الثابتة (generateStaticParams)">
          <p>
            عندما تستخدم Dynamic Routes، يمكنك توليد جميع المسارات الممكنة مسبقاً في وقت البناء (Build Time) باستخدام <strong>generateStaticParams</strong>. هذا يُسرّع الموقع بشكل كبير.
          </p>

          <CodeBlock
            language="jsx"
            code={`// app/blog/[slug]/page.js

// تُولّد كل المسارات الممكنة في وقت البناء
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// هذا يُنشئ صفحات HTML ثابتة:
// /blog/hello-world
// /blog/nextjs-guide
// /blog/react-tips
// ... إلخ

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`}
          />

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 متى تستخدمه؟
            </p>
            <p>
              إذا كان موقعك يحتوي على 100 مقالة، <code>generateStaticParams</code> يُنشئ 100 صفحة HTML ثابتة مسبقاً. الزوار يحصلون على أسرع تحميل ممكن.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: ماذا يحدث خلف الكواليس */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>عندما تبني مشروع Next.js، يحدث التالي في نظام التوجيه:</p>

          <ol>
            <li><strong>قراءة هيكل الملفات</strong>: Next.js يفحص مجلد <code>app/</code> ويبني شجرة المسارات (Route Tree).</li>
            <li><strong>تحديد layouts</strong>: يربط كل مسار مع أقرب layout له (من الأعلى للأسفل).</li>
            <li><strong>تقسيم الأكواد (Code Splitting)</strong>: كل مسار يحصل على حزمة JavaScript خاصة به (لتحميل أسرع).</li>
            <li><strong>توليد الصفحات</strong>: الصفحات الثابتة تُنشأ HTML مسبقاً، والديناميكية تُنشأ عند الطلب.</li>
            <li><strong>بناء شجرة الـ component</strong>: Next.js يصنع شجرة من layouts المتداخلة ليقدمها للمستخدم.</li>
          </ol>

          <p>النتيجة: موقع سريع، محسن لـ SEO، مع تجربة تنقل سلسة.</p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث عشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul>
            <li>
              <strong>❌ نسيان ملف page.js:</strong>
              <br />
              إنشاء مجلد <code>app/about/</code> بدون <code>page.js</code>. المتصفح سيرى خطأ 404 لأن Next.js لا يعرف ماذا يعرض.
            </li>
            <li>
              <strong>❌ استخدام اسم ملف خاطئ للمسارات الديناميكية:</strong>
              <br />
              استخدام <code>[slug].js</code> بدلاً من <code>[slug]/page.js</code>. في App Router، الملف يجب أن يكون داخل مجلد.
            </li>
            <li>
              <strong>❌ عدم استخدام Link للتنقل الداخلي:</strong>
              <br />
              استخدام <code>&lt;a href="/about"&gt;</code> بدلاً من <code>&lt;Link href="/about"&gt;</code>. الـ Link يُحسّن الأداء مع prefetching.
            </li>
            <li>
              <strong>❌ محاولة استخدام useRouter في Server Component:</strong>
              <br />
              <code>useRouter</code> يعمل فقط في Client Components. أضف <code>"use client"</code> إذا كنت بحاجة إليه.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li>
              <strong>✅ استخدم layouts للمشاركة:</strong>
              <br />
              أي عنصر متكرر (شريط تنقل، تذييل) ضعه في <code>layout.js</code> بدلاً من تكراره في كل صفحة.
            </li>
            <li>
              <strong>✅ استخدم Route Groups للتنظيم:</strong>
              <br />
              مجموعة المسارات تساعدك في فصل أقسام الموقع (مثل: <code>(marketing)</code> و <code>(dashboard)</code>) بدون تغيير المسار.
            </li>
            <li>
              <strong>✅ استخدم generateStaticParams:</strong>
              <br />
              للمواقع ذات المحتوى الثابت (مدونات، متاجر)، هذا يُحسّن الأداء بشكل كبير.
            </li>
            <li>
              <strong>✅ احتفظ بالملفات الخاصة خارج app/:</strong>
              <br />
              الملفات المساعدة والمكونات ضعها في مجلد منفصل مثل <code>components/</code> أو <code>lib/</code>.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>File-based Routing</strong>: المسارات تُحدد بهيكل الملفات في <code>app/</code>.</li>
              <li><strong>page.js</strong> هو ملف الصفحة، <strong>layout.js</strong> هو ملف التخطيط المشترك.</li>
              <li>المسارات الديناميكية: <code>[slug]</code> للمسارات غير المعروفة مسبقاً.</li>
              <li><strong>Route Groups</strong> <code>()</code> للتنظيم بدون تغيير المسار.</li>
              <li><strong>Parallel Routes</strong> <code>@</code> لعرض صفحات متعددة معاً.</li>
              <li><strong>Intercepting Routes</strong> <code>(.)</code> لاعتراض وعرض مسار في سياق مختلف.</li>
              <li>استخدم <strong>Link</strong> للتنقل و <strong>useRouter</strong> للتنقل البرمجي.</li>
              <li><strong>generateStaticParams</strong> يُولّد صفحات ثابتة في وقت البناء.</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس عشر: Quiz */}
        {/* ========================================== */}
        <Quiz
          question="كيف تحدد المسار /about في App Router؟"
          options={[
            "app/page.js → /about",
            "app/about.js → /about",
            "app/about/page.js → /about",
            "app/about/index.js → /about",
          ]}
          correctAnswer={2}
          explanation="في App Router، كل مجلد داخل app/ يمثل قطعة من المسار. الملف page.js داخل المجلد هو الذي يُعرّف واجهة المستخدم."
        />

        <Quiz
          question="ما الفرق الرئيسي بين layout.js و page.js؟"
          options={[
            "layout.js يُستخدم فقط للـ API، و page.js للصفحات",
            "layout.js يُشارك بين الصفحات ويَبقى ثابتاً، page.js يُحدد محتوى الصفحة",
            "layout.js يعمل فقط في الإنتاج، page.js في التطوير",
            "لا فرق بينهما، يمكن استخدام أي منهما",
          ]}
          correctAnswer={1}
          explanation="layout.js يُغلّف الصفحات الفرعية ويَبقى ثابتاً عند التنقل (يحافظ على الـ state). page.js يُحدد المحتوى الخاص بكل مسار."
        />

        <Quiz
          question="كيف تنشئ مساراً ديناميكياً لصفحة مقال في مدونة؟"
          options={[
            "app/blog/page/[slug].js",
            "app/blog/[slug]/page.js",
            "app/blog/dynamic/slug.js",
            "app/blog/page.js مع useParams",
          ]}
          correctAnswer={1}
          explanation="المسارات الديناميكية تُنشأ باستخدام الأقواس المربعة [slug] كاسم مجلد، مع page.js داخله."
        />

        <Quiz
          question="ما فائدة Route Groups باستخدام الأقواس الدائرية ()؟"
          options={[
            "تحسين سرعة التحميل",
            "تنظيم الملفات بدون تغيير المسار",
            "إنشاء مسارات ديناميكية",
            "إضافة layout تلقائي",
          ]}
          correctAnswer={1}
          explanation="Route Groups تسمح بتنظيم الملفات في مجموعات منطقية (مثل (marketing) و (dashboard)) بدون إضافة هذه المجموعات إلى المسار."
        />

        <Quiz
          question="أي مكون تختار للتنقل بين الصفحات مع تحسين الأداء؟"
          options={[
            "<a> العادي",
            "<button مع window.location>",
            "<Link> من next/link",
            "<Router> المخصص",
          ]}
          correctAnswer={2}
          explanation="مكون Link من next/link يُوفّر Client-side Navigation مع Prefetching تلقائي، مما يُحسّن أداء التنقل بين الصفحات."
        />

        {/* ========================================== */}
        {/* القسم السابع عشر: تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: بناء موقع متعدد الصفحات مع Layout"
          description={
            <div>
              <p>أنشئ هيكل الملفات التالي في مشروع Next.js:</p>
              <CodeBlock
                language="bash"
                code={`app/
├── layout.js              # تخطيط رئيسي: شريط تنقل + تذييل
├── page.js                # / الصفحة الرئيسية
├── about/
│   └── page.js            # /about - من نحن
├── blog/
│   ├── page.js            # /blog - قائمة المقالات
│   └── [slug]/
│       └── page.js        # /blog/:slug - مقال منفرد
└── (dashboard)/
    └── dashboard/
        ├── layout.js      # تخطيط جانبي خاص
        └── page.js        # /dashboard`}
              />
              <p className="mt-2">المتطلبات:</p>
              <ol className="list-decimal pr-6 space-y-1">
                <li>الـ layout الرئيسي يحتوي على شريط تنقل وتذييل.</li>
                <li>صفحة /blog تعرض قائمة افتراضية بالمقالات.</li>
                <li>صفحة المقال تستخدم <code>[slug]</code> وتعرض اسم المقال.</li>
                <li>استخدم <code>generateStaticParams</code> للمقالات.</li>
              </ol>
            </div>
          }
        >
          <CodeBlock
            language="jsx"
            code={`// app/layout.js - التخطيط الرئيسي
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <header>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">الرئيسية</Link>
            <Link href="/about">من نحن</Link>
            <Link href="/blog">المدونة</Link>
            <Link href="/dashboard">لوحة التحكم</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2026 CodeMaster</footer>
      </body>
    </html>
  );
}

// app/blog/[slug]/page.js - مقال ديناميكي
const posts = [
  { slug: "hello-world", title: "مرحباً بالعالم" },
  { slug: "nextjs-guide", title: "دليل Next.js" },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <h1>المقال غير موجود</h1>;
  return <h1>{post.title}</h1>;
}`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* القسم الثامن عشر: Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص التوجيه - الدرس الثاني">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>هيكل المسارات:</p>
              <ul className="text-sm space-y-1">
                <li><code className="inline-code">page.js</code> - صفحة المسار</li>
                <li><code className="inline-code">layout.js</code> - تخطيط مشترك</li>
                <li><code className="inline-code">[slug]/page.js</code> - مسار ديناميكي</li>
                <li><code className="inline-code">(group)/page.js</code> - Route Group</li>
                <li><code className="inline-code">@slot/page.js</code> - Parallel Route</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>التنقل:</p>
              <ul className="text-sm space-y-1">
                <li><code className="inline-code">{"<Link href=\"/about\">"}</code> - Link</li>
                <li><code className="inline-code">router.push()</code> - برمجي</li>
                <li><code className="inline-code">router.replace()</code> - استبدال</li>
                <li><code className="inline-code">router.back()</code> - رجوع</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>مفاهيم متقدمة:</p>
              <ul className="text-sm space-y-1">
                <li><code className="inline-code">generateStaticParams</code> - توليد مسارات ثابتة</li>
                <li><code className="inline-code">params</code> - كائن يحتوي على slug</li>
                <li><code className="inline-code">(.)</code> <code className="inline-code">(..)</code> - Intercepting Routes</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>قواعد مهمة:</p>
              <ul className="text-sm space-y-1">
                <li>اسم الملف يجب أن يكون <code>page.js</code> بالضبط</li>
                <li>params هو Promise - استخدم await</li>
                <li>layout.js دائماً Server Component</li>
              </ul>
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* التنقل بين الدروس */}
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