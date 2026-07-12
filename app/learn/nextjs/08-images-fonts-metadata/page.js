import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ImagesFontsMetadata() {
  const lessonInfo = getLessonBySlug("nextjs", "08-images-fonts-metadata");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        <LessonSection title="next/image — مكون الصور المحسّن">
          <p>
            مكون <code>next/image</code> هو مكون الصور المدمج في Next.js الذي يوفر تحسيناً تلقائياً
            للصور. يدعم التحميل الكسول (Lazy Loading) التلقائي، تغيير الحجم (Resizing)،
            وتحويل الصيغ إلى WebP أو AVIF لتحسين الأداء بشكل كبير.
          </p>
          <p>
            استخدام الصور العادية عبر علامة <code>&lt;img&gt;</code> يسبب مشاكل كثيرة:
            لا يوجد تحميل كسول، لا يوجد تحسين للحجم، ولا يوجد تحويل للصيغ.
            مكون <code>next/image</code> يحل جميع هذه المشاكل تلقائياً.
          </p>
          <CodeBlock
            code={`// الصورة الطريقة القديمة (لا تستخدمها)
<img src="/photo.jpg" width={500} height={300} alt="صورة" />

// الصورة بطريقة Next.js (الصحيحة)
import Image from "next/image";

<Image
  src="/photo.jpg"
  width={500}
  height={300}
  alt="صورة وصفية"
/>`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="مثال بسيط — استخدام next/image">
          <p>
            لنرَ كيف نستخدم مكون الصور في أبسط صوره:
          </p>
          <CodeBlock
            code={`// app/page.js
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1>مرحباً بكم في موقعي</h1>

      {/* صورة محلية من مجلد public */}
      <Image
        src="/images/hero.jpg"
        width={800}
        height={400}
        alt="صورة رئيسية للصفحة"
      />

      {/* صورة مع خصائص إضافية */}
      <Image
        src="/images/profile.jpg"
        width={200}
        height={200}
        alt="صورة الملف الشخصي"
        className="rounded-full"
        priority
      />
    </div>
  );
}`}
            language="jsx"
          />
          <p>
            لاحظ أننا نحدد <code>width</code> و <code>height</code> بشكل صريح.
            هذه الأبعاد تُستخدم لحساب نسبة العرض إلى الارتفاع لمنع تغير حجم الصفحة (Layout Shift).
          </p>
        </LessonSection>

        <LessonSection title="الصور المحلية مقابل الصور البعيدة (Local vs Remote)">
          <p>
            Next.js يتعامل مع الصور المحلية والبعيدة بشكل مختلف:
          </p>
          <CodeBlock
            code={`// الصور المحلية — مسار نسبي من مجلد public
import Image from "next/image";

<Image
  src="/images/local-photo.jpg"
  width={600}
  height={400}
  alt="صورة محلية"
/>

// الصور البعيدة — تحتاج to remotePatterns في next.config
import Image from "next/image";

<Image
  src="https://example.com/remote-photo.jpg"
  width={600}
  height={400}
  alt="صورة بعيدة"
/>`}
            language="jsx"
          />
          <CodeBlock
            code={`// next.config.ts — السماح بالصور البعيدة
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.example.com", // wildcard للنطاق الفرعي
      },
    ],
  },
};

export default nextConfig;`}
            language="jsx"
          />
          <p>
            إذا حاولت استخدام صورة بعيدة بدون إضافة الـ <code>remotePatterns</code>،
            ستحصل على خطأ في بيئة التطوير.
          </p>
        </LessonSection>

        <LessonSection title="خصائص تحسين الصور (Image Optimization)">
          <p>
            مكون <code>next/image</code> يوفر العديد من الخصائص لتحكم دقيق في تحسين الصور:
          </p>
          <CodeBlock
            code={`import Image from "next/image";

export default function OptimizedImages() {
  return (
    <div>
      {/* 1. التحكم في الجودة */}
      <Image
        src="/images/photo.jpg"
        width={600}
        height={400}
        alt="صورة بجودة مخصصة"
        quality={90} // من 1 إلى 100، الافتراضي 75
      />

      {/* 2. التحميل المبكر للصور المهمة */}
      <Image
        src="/images/above-fold.jpg"
        width={800}
        height={600}
        alt="صورة في أعلى الصفحة"
        priority // يلغي التحميل الكسول
      />

      {/* 3. ملء المساحة المتاحة */}
      <div className="relative w-full h-64">
        <Image
          src="/images/cover.jpg"
          alt="صورة غلاف"
          fill // يملأ المساحة المتاحة
          className="object-cover"
        />
      </div>

      {/* 4. أحجام الاستجابة */}
      <Image
        src="/images/responsive.jpg"
        width={800}
        height={600}
        alt="صورة متجاوبة"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* 5. النص البديل المؤقت */}
      <Image
        src="/images/blur.jpg"
        width={600}
        height={400}
        alt="صورة مع تمويه"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQ..." // base64 مُموَّه
      />
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="next/font — تحميل الخطوط المحسّن">
          <p>
            وحدة <code>next/font</code> توفر تحسيناً ممتازاً لتحميل الخطوط. تقوم بتحميل الخطوط
            في وقت البناء (Build Time) واستضافتها محلياً (Self-hosting)، مما يلغي الاعتماد
            على خوادم Google Fonts مباشرة ويمنع تغير حجم الصفحة (Zero Layout Shift).
          </p>
          <p>
            المميزات الرئيسية:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>تحميل الخطوط في وقت البناء مما يسرّع تحميل الصفحة</li>
            <li>استضافة محلية تمنع الاعتماد على خوادم خارجية</li>
            <li>eliminates layout shift تماماً</li>
            <li>-automatic font size adjustment (CSS size-adjust)</li>
          </ul>
        </LessonSection>

        <LessonSection title="مثال بسيط — استخدام next/font">
          <p>
            إليك كيفية استخدام الخطوط من Google Fonts في Next.js:
          </p>
          <CodeBlock
            code={`// app/layout.js
import { Inter, Cairo } from "next/font/google";

// تحميل خط Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // متغير CSS اختياري
});

// تحميل خط Cairo للعربية
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "موقعي",
  description: "تطبيق Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={\`\${cairo.variable} \${inter.variable} font-cairo\`}>
        {children}
      </body>
    </html>
  );
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// في ملف next.config أو أي مكون
// استخدام متغير الخط في CSS
// tailwind.config.js
const config = {
  theme: {
    extend: {
      fontFamily: {
        cairo: ["var(--font-cairo)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
};

// أو استخدام className مباشرة
<h1 className="font-cairo text-2xl">مرحباً</h1>
<p className="font-inter">Hello World</p>`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="الخطوط المحلية (Local Fonts)">
          <p>
            إذا كنت تريد استخدام خطوط محلية مخزنة في مشروعك بدلاً من Google Fonts:
          </p>
          <CodeBlock
            code={`// app/layout.js
import localFont from "next/font/local";

// تحميل خطوط محلية
const myFont = localFont({
  src: [
    {
      path: "../public/fonts/MyFont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MyFont-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/MyFont-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-my-font",
  display: "swap", // يعرض نص احتياطي أولاً
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={myFont.variable}>
        <main className="font-my-font">{children}</main>
      </body>
    </html>
  );
}`}
            language="jsx"
          />
          <p>
            تحميل الخطوط المحلية مفيد عندما تكون الخطوط خاصة أو غير متاحة على Google Fonts،
            أو عندما تريد التحكم الكامل في ملفات الخطوط.
          </p>
        </LessonSection>

        <LessonSection title="Metadata API — البيانات الوصفية للصفحات">
          <p>
            Next.js يوفر Metadata API لإضافة بيانات وصفية (Metadata) للصفحات مثل العناوين،
            الأوصاف، الصور المعاينة، وأكثر. يمكنك تصدير كائن <code>metadata</code> أو دالة
            <code>generateMetadata</code> من أي ملف <code>page.js</code> أو <code>layout.js</code>.
          </p>
        </LessonSection>

        <LessonSection title="البيانات الوصفية الثابتة (Static Metadata)">
          <p>
            للصفحات التي لا تحتاج إلى بيانات ديناميكية، يمكنك تصدير كائن <code>metadata</code> مباشرة:
          </p>
          <CodeBlock
            code={`// app/page.js — بيانات وصفية ثابتة
export const metadata = {
  title: "الصفحة الرئيسية - موقعي",
  description: "مرحباً بكم في موقعنا التعليمي لتعلم البرمجة",
  keywords: ["برمجة", "تعلم", "Next.js", "React"],
  authors: [{ name: "CodeMaster" }],
  creator: "CodeMaster Team",
  openGraph: {
    title: "الصفحة الرئيسية - موقعي",
    description: "مرحباً بكم في موقعنا التعليمي",
    url: "https://mysite.com",
    siteName: "موقعي",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://mysite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "صورة المعاينة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الصفحة الرئيسية",
    description: "مرحباً بكم في موقعنا",
    images: ["https://mysite.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return <div>الصفحة الرئيسية</div>;
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// app/blog/page.js — بيانات وصفية للصفحة
export const metadata = {
  title: "المقالات - موقعي",
  description: "اقرأ أحدث المقالات والدروس التعليمية",
};

export default function BlogPage() {
  return <div>المقالات</div>;
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="البيانات الوصفية الديناميكية (Dynamic Metadata)">
          <p>
            للصفحات التي تحتاج إلى بيانات وصفية بناءً على المعاملات (Params) أو البيانات
            الديناميكية، يمكنك استخدام دالة <code>generateMetadata</code>:
          </p>
          <CodeBlock
            code={`// app/blog/[slug]/page.js — بيانات وصفية ديناميكية
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "المقال غير موجود",
      description: "لم نتمكن من العثور على هذا المقال",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
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
          <CodeBlock
            code={`// مثال آخر — بيانات وصفية للمنتجات
// app/products/[id]/page.js
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);

  return {
    title: \`\${product.name} - المتجر\`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 600 }],
      type: "website",
    },
  };
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="البيانات الوصفية المبنية على الملفات (File-based Metadata)">
          <p>
            Next.js يدعم إنشاء ملفات بيانات وصفية محددة عبر اتفاقيات الملفات:
          </p>
          <CodeBlock
            code={`// robots.txt — تحديد صفحات الزحف (Crawling)
// app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/admin/",
        disallow: "/private/",
      },
    ],
    sitemap: "https://mysite.com/sitemap.xml",
  };
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// sitemap.xml — خريطة الموقع
// app/sitemap.js
export default async function sitemap() {
  const posts = await getAllPosts();
  const products = await getAllProducts();

  const postUrls = posts.map((post) => ({
    url: \`https://mysite.com/blog/\${post.slug}\`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productUrls = products.map((product) => ({
    url: \`https://mysite.com/products/\${product.id}\`,
    lastModified: product.updatedAt,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  return [
    {
      url: "https://mysite.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...postUrls,
    ...productUrls,
  ];
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// app/icon.js — أيقونة التطبيق الديناميكية
import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "wheat",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        💻
      </div>
    ),
    {
      width: 128,
      height: 128,
    }
  );
}`}
            language="jsx"
          />
          <CodeBlock
            code={`// app/opengraph-image.js — صورة Open Graph مخصصة
import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ fontSize: 64 }}>موقعي التعليمي</h1>
        <p style={{ fontSize: 32 }}>تعلم البرمجة بسهولة</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>
            فهم آلية عمل next/image و next/font خلف الكواليس يساعدنا على كتابة كود أكثر فعالية:
          </p>
          <CodeBlock
            code={`// next/image خلف الكواليس:

// 1. عند الطلب (Request Time)
//    - Next.js يستقبل طلب الصورة

// 2. التحسين (Optimization)
//    - يتحقق من الكاش المحلي أولاً
//    - إذا لم تكن موجودة، يقوم بتحميل الصورة الأصلية
//    - يغير حجمها حسب الأبعاد المطلوبة
//    - يحولها إلى أفضل صيغة (WebP أو AVIF)
//    - يضبط الجودة حسب الطلب

// 3. التخزين المؤقت (Caching)
//    - يخزن الصورة المحسّنة في الكاش
//    - الطلبات التالية تأتي من الكاش مباشرة

// 4. الخدمة (Serving)
//    - يخدم الصورة المحسّنة مع رؤوس Cache المناسبة`}
            language="jsx"
          />
          <CodeBlock
            code={`// next/font خلف الكواليس:

// 1. في وقت البناء (Build Time)
//    - Next.js يحمّل ملفات الخطوط من المصدر (Google Fonts أو ملفات محلية)
//    - يحولها إلى صيغة WOFF2
//    - يحسب subset للحروف المستخدمة فقط

// 2. إنشاء CSS
//    - يولّد CSS مع @font-face declarations
//    - يحسب font metrics لـ size-adjust
//    - ينشئ متغيرات CSS إذا طُلب

// 3. الاستضافة
//    - يستضيف الخطوط محلياً على نفس الخادم
//    - لا حاجة للاتصال بخوادم Google Fonts
//    - headers التخزين المؤقت تُضاف تلقائياً`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="الأخطاء الشائعة">
          <p>
            إليك أكثر الأخطاء شيوعاً عند استخدام الصور والخطوط والبيانات الوصفية:
          </p>
          <CodeBlock
            code={`// ❌ خطأ 1: عدم إضافة نص بديل (alt) للصورة
import Image from "next/image";

<Image src="/photo.jpg" width={500} height={300} />

// ✅ الصحيح:
<Image src="/photo.jpg" width={500} height={300} alt="وصف الصورة" />`}
            language="jsx"
          />
          <CodeBlock
            code={`// ❌ خطأ 2: عدم تكوين remotePatterns للصور البعيدة
// next.config.mjs
const nextConfig = {}; // بدون تكوين

// ✅ الصحيح:
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
};`}
            language="jsx"
          />
          <CodeBlock
            code={`// ❌ خطأ 3: استخدام subset خاطئ للخط
const myFont = Cairo({
  subsets: ["cyrillic"], // خط عربي لا يحتاج到 cyrillic
});

// ✅ الصحيح:
const myFont = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
});`}
            language="jsx"
          />
          <CodeBlock
            code={`// ❌ خطأ 4: استخدام generateMetadata و metadata معاً في نفس الملف
export const metadata = { title: "Static" };

export async function generateMetadata() {
  return { title: "Dynamic" };
}

// ✅ الصحيح: استخدم其中之一
export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return { title: data.title };
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="أفضل الممارسات">
          <p>
            اتبع هذه الممارسات للحصول على أفضل أداء وتجربة مستخدم:
          </p>
          <CodeBlock
            code={`// أفضل الممارسة 1: استخدم next/image دائماً بدلاً من img
// ❌ لا تستخدم
<img src="/photo.jpg" alt="..." />

// ✅ استخدم دائماً
import Image from "next/image";
<Image src="/photo.jpg" width={500} height={300} alt="..." />`}
            language="jsx"
          />
          <CodeBlock
            code={`// أفضل الممارسة 2: أضف priority للصور في أعلى الصفحة
// الصور فوق الطية (Above the Fold) تحتاج priority
<Image
  src="/hero.jpg"
  width={1200}
  height={600}
  alt="صورة رئيسية"
  priority // يلغي التحميل الكسول ويحمّلها مبكراً
/>`}
            language="jsx"
          />
          <CodeBlock
            code={`// أفضل الممارسة 3: استخدم next/font لجميع الخطوط
// ❌ لا تستخدم link في الـ head
<link href="https://fonts.googleapis.com/css2?family=Cairo" rel="stylesheet" />

// ✅ استخدم next/font
import { Cairo } from "next/font/google";
const cairo = Cairo({ subsets: ["arabic", "latin"] });`}
            language="jsx"
          />
          <CodeBlock
            code={`// أفضل الممارسة 4: أضف metadata لكل صفحة
// app/about/page.js
export const metadata = {
  title: "من نحن - موقعي",
  description: "تعرف على فريق العمل والرؤية",
};

// تأكد من أن كل صفحة لها عنوان ووصف مناسب`}
            language="jsx"
          />
          <CodeBlock
            code={`// أفضل الممارسة 5: استخدم fill للصور التي تملأ حاوية
// بدلاً من تحديد أبعاد ثابتة
<div className="relative w-full h-64">
  <Image
    src="/cover.jpg"
    alt="صورة غلاف"
    fill
    className="object-cover"
    sizes="100vw"
  />
</div>`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="ملخص الدرس">
          <p>
            في هذا الدرس تعلمنا كيفية تحسين الصور والخطوط والبيانات الوصفية في Next.js:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><code>next/image</code> — مكون صور محسّن يوفر تحميل كسول، تغيير حجم، وتحويل صيغ</li>
            <li>الصور البعيدة تحتاج إلى تكوين <code>remotePatterns</code> في <code>next.config</code></li>
            <li>خصائص التحسين: <code>quality</code>, <code>priority</code>, <code>fill</code>, <code>sizes</code>, <code>placeholder</code></li>
            <li><code>next/font</code> — تحميل خطوط محسّن مع استضافة محلية و Layout Shift صفري</li>
            <li>الخطوط المحلية عبر <code>next/font/local</code></li>
            <li>Metadata API — تصدير <code>metadata</code> للبيانات الثابتة أو <code>generateMetadata</code> للديناميكية</li>
            <li>ملفات <code>robots.js</code>, <code>sitemap.js</code>, <code>icon.js</code>, <code>opengraph-image.js</code></li>
          </ul>
        </LessonSection>

        <LessonSection title="اختبار المعرفة">
          <Quiz
            question="ما هي الميزة الرئيسية التي يوفرها مكون next/image مقارنة بـ img العادية؟"
            options={[
              "يدعم CSS بشكل أفضل",
              "يقوم بالتحسين التلقائي وتحويل الصيغ وتحميل كسول",
              "أسرع في التحميل دائماً",
              "يدعم المزيد من صيغ الصور"
            ]}
            correctAnswer={1}
            explanation="next/image يوفر تحسيناً تلقائياً يشمل تغيير الحجم، تحويل الصيغ (WebP/AVIF)، التحميل الكسول، ومنع Layout Shift"
          />
          <Quiz
            question="لماذا تحتاج إلى تكوين remotePatterns في next.config لاستخدام صور بعيدة؟"
            options={[
              "لأن Next.js لا يدعم الصور البعيدة بدون تكوين",
              "لأسباب أمنية لمنع استخدام أي نطاق خارجي بشكل عشوائي",
              "لأن الصور البعيدة تحتاج to API key",
              "هذا خيار اختياري وليس إلزامياً"
            ]}
            correctAnswer={1}
            explanation="تكوين remotePatterns هو إجراء أمني يمنع تحميل الصور من أي نطاق خارجي بشكل عشوائي، ويضمن فقط النطاقات الموثوقة"
          />
          <Quiz
            question="ما هي ميزة next/font الرئيسية مقارنة باستخدام link لتحميل الخطوط من Google Fonts؟"
            options={[
              "يدعم المزيد من الخطوط",
              "يحمّل الخطوط في وقت البناء ويستضيفها محلياً مع Layout Shift صفري",
              "أسرع في بيئة التطوير فقط",
              "يدعم فقط خطوط Google Fonts"
            ]}
            correctAnswer={1}
            explanation="next/font يحمّل الخطوط في وقت البناء ويستضيفها محلياً، مما يلغي الاعتماد على خوادم Google و يمنع Layout Shift تماماً"
          />
          <Quiz
            question="ما الفرق بين تصدير metadata و generateMetadata؟"
            options={[
              "metadata للصور و generateMetadata للنصوص",
              "metadata للبيانات الثابتة و generateMetadata للبيانات الديناميكية",
              "metadata في page.js و generateMetadata في layout.js",
              "لا يوجد فرق بينهما"
            ]}
            correctAnswer={1}
            explanation="metadata هو كائن ثابت للبيانات التي لا تتغير، بينما generateMetadata هي دالة async تُستخدم عندما تحتاج إلى جلب بيانات ديناميكية مثل بيانات المقال"
          />
          <Quiz
            question="أي من التالية هو خيار صحيح لإنشاء sitemap.xml في Next.js؟"
            options={[
              "إنشاء ملف sitemap.xml يدوياً في مجلد public",
              "إنشاء ملف app/sitmap.js يصدّر دالة تُرجع مصفوفة الروابط",
              "استخدام مكتبة خارجية فقط",
              "لا يدعم Next.js إنشاء sitemap تلقائياً"
            ]}
            correctAnswer={1}
            explanation="Next.js يدعم اتفاقية ملف sitemap.js في مجلد app التي تصدّر دالة تُرجع مصفوفة بكائنات الروابط مع البيانات الوصفية لكل رابط"
          />
        </LessonSection>

        <LessonSection title="تحدي الدرس — أضف صور وخطوط وبيانات وصفية لصفحة">
          <Challenge
            title="تحدي الصور والخطوط والبيانات الوصفية"
            description="حسّن صفحة في تطبيق Next.js بإضافة صور محسّنة، خطوط محلية، وبيانات وصفية شاملة"
            tasks={[
              "استبدل جميع صور img العادية بمكون next/image مع تحديد الأبعاد والنص البديل",
              "أضف صورة بديلة (hero image) مع خاصية priority لأنها في أعلى الصفحة",
              "أضف خط Cairo أو خط عربي من next/font/google في التخطيط الجذري",
              "أضف metadata ثابتة لكل صفحة رئيسية (الرئيسية، من نحن، المقالات)",
              "أنشئ ملف app/sitemap.js يحتوي على روابط جميع الصفحات",
              "أنشئ ملف app/robots.js يحدد صفحات الزحف المسموح بها",
              "أضف صورة Open Graph مخصصة عبر ملف app/opengraph-image.js"
            ]}
          />
        </LessonSection>

        <LessonSection title="ورقة الغش (CheatSheet)">
          <CheatSheet
            items={[
              {
                title: "next/image — صورة محلية",
                description: "استيراد واستخدام مكون الصور المحسّن لصور محلية",
                code: `import Image from "next/image";

<Image
  src="/images/photo.jpg"
  width={500}
  height={300}
  alt="وصف الصورة"
/>`
              },
              {
                title: "next/image — صورة بعيدة",
                description: "صور من نطاقات خارجية مع تكوين remotePatterns",
                code: `// next.config.ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "example.com" }
  ]
}

// في الصفحة
<Image
  src="https://example.com/photo.jpg"
  width={500}
  height={300}
  alt="صورة بعيدة"
/>`
              },
              {
                title: "next/image — صورة ملء",
                description: "استخدام fill لملء الحاوية المتاحة",
                code: `<div className="relative w-full h-64">
  <Image
    src="/cover.jpg"
    alt="غلاف"
    fill
    className="object-cover"
    sizes="100vw"
  />
</div>`
              },
              {
                title: "next/font — خط من Google",
                description: "تحميل خطوط من Google Fonts بشكل محسّن",
                code: `import { Cairo, Inter } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// في التخطيط
<body className={\`\${cairo.variable} \${inter.variable}\`}>`
              },
              {
                title: "next/font — خط محلي",
                description: "تحميل خطوط من ملفات محلية في المشروع",
                code: `import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/fonts/MyFont.woff2",
  variable: "--font-my-font",
  display: "swap",
});`
              },
              {
                title: "Metadata — ثابتة",
                description: "تصدير كائن metadata للبيانات الوصفية الثابتة",
                code: `export const metadata = {
  title: "عنوان الصفحة",
  description: "وصف الصفحة",
  openGraph: {
    title: "عنوان OG",
    description: "وصف OG",
    images: ["/og-image.jpg"],
  },
};`
              },
              {
                title: "Metadata — ديناميكية",
                description: "دالة generateMetadata للبيانات الوصفية الديناميكية",
                code: `export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}`
              },
              {
                title: "Sitemap",
                description: "ملف sitemap.js لإنشاء خريطة الموقع",
                code: `// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: "https://mysite.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}`
              },
              {
                title: "Robots.txt",
                description: "ملف robots.js لتكوين ملف Robots",
                code: `// app/robots.js
export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/admin/" }
    ],
    sitemap: "https://mysite.com/sitemap.xml",
  };
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
