// =====================================================
// ملف: page.js (الدرس التاسع: النشر النهائي)
// المكان: app/learn/final-project/09-deployment/page.js
// الوظيفة: تعليم كيفية نشر المشروع النهائي على Vercel
// URL: /learn/final-project/09-deployment
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function Deployment() {
  const lesson = getLessonBySlug("final-project", "09-deployment");

  return (
    <div dir="rtl" className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <LessonHeader stage={lesson.stage} lesson={lesson} lessonIndex={lesson.lessonIndex} totalLessons={lesson.totalLessons} />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ========================================== */}
        {/* القسم الأول: مقدمة عن النشر */}
        {/* ========================================== */}
        <LessonSection title="مقدمة عن النشر النهائي">
          <p>
            بعد بناء المدونة واختبارها محلياً، حان وقت <strong>النشر</strong> على
            الإنترنت ليستطيع الجميع الوصول إليها. في هذا الدرس سنتعلم كيفية
            نشر المشروع على <strong>Vercel</strong> بأفضل إعدادات الأداء والأمان.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              ماذا سنتعلم؟
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>نشر المشروع على Vercel خطوة بخطوة</li>
              <li>إعداد متغيرات البيئة في الإنتاج</li>
              <li>إعداد Supabase للإنتاج</li>
              <li>تخصيص النطاق (Domain) الخاص</li>
              <li>نصائح تحسين الأداء للنشر</li>
              <li>إعداد CI/CD مع GitHub Actions</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: التجهيز للنشر */}
        {/* ========================================== */}
        <LessonSection title="التجهيز للنشر">
          <p>
            قبل النشر، نحتاج التأكد من أن المشروع جاهز. إليك الخطوات
            المهمة التي يجب القيام بها:
          </p>

          <CodeBlock
            language="jsx"
            code={`// 1. تحديث package.json بإعدادات الإنتاج
// تأكد من أن السكريبتات جاهزة

{
  "name": "my-blog",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}

// 2. تشغيل الاختبارات والتحقق من الكود
npm run lint
npm run type-check
npm run build

// 3. التأكد من أن .gitignore يحتوي على الملفات الصحيحة
// node_modules/
// .next/
// .env.local
// .env*.local`}
          />

          <CodeBlock
            language="jsx"
            code={`// ملف: next.config.js
// إعدادات Next.js للإنتاج

/** @type {import('next').NextConfig} */
const nextConfig = {
  // تحسين الصور من مصادر خارجية
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "**.supabase.in",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    // تحسين صيغ الصور
    formats: ["image/avif", "image/webp"],
  },

  // تحسين الأداء
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // تعطيل source maps في الإنتاج لتقليل الحجم
  productionBrowserSourceMaps: false,

  // تحسين حزم الـ JavaScript
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/dist/esm/icons/{{kebabCase member}}",
    },
  },
};

module.exports = nextConfig;`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: النشر على Vercel */}
        {/* ========================================== */}
        <LessonSection title="النشر على Vercel خطوة بخطوة">
          <p>
            Vercel هو أفضل منصة لنشر تطبيقات Next.js. يوفر نشر تلقائي
            من GitHub مع إعدادات محسّنة:
          </p>

          <div className="space-y-4 my-6">
            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: "var(--primary)", color: "var(--background)" }}>1</span>
                <h3 className="font-bold" style={{ color: "var(--foreground)" }}>إعداد المشروع على GitHub</h3>
              </div>
              <p style={{ color: "var(--muted)" }}>
                تأكد من أن المشروع محفوظ على GitHub ومعرف repository URL.
              </p>
              <CodeBlock
                language="bash"
                code={`# إنشاء مستودع جديد على GitHub
git init
git add .
git commit -m "Initialize blog project"
git branch -M main
git remote add origin https://github.com/username/my-blog.git
git push -u origin main`}
              />
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: "var(--primary)", color: "var(--background)" }}>2</span>
                <h3 className="font-bold" style={{ color: "var(--foreground)" }}>إنشاء حساب Vercel</h3>
              </div>
              <p style={{ color: "var(--muted)" }}>
                أنشئ حساباً على vercel.com واستخدم تسجيل الدخول بـ GitHub.
              </p>
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: "var(--primary)", color: "var(--background)" }}>3</span>
                <h3 className="font-bold" style={{ color: "var(--foreground)" }}>استيراد المشروع</h3>
              </div>
              <p style={{ color: "var(--muted)" }}>
                اضغط "Add New..." ثم "Project" واختر مستودع GitHub الخاص بك.
              </p>
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: "var(--primary)", color: "var(--background)" }}>4</span>
                <h3 className="font-bold" style={{ color: "var(--foreground)" }}>إعداد متغيرات البيئة</h3>
              </div>
              <p style={{ color: "var(--muted)" }}>
                أضف متغيرات البيئة في إعدادات المشروع على Vercel.
              </p>
              <CodeBlock
                language="bash"
                code={`# متغيرات البيئة المطلوبة على Vercel
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
CLERK_SECRET_KEY=your-clerk-secret
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable`}
              />
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: "var(--primary)", color: "var(--background)" }}>5</span>
                <h3 className="font-bold" style={{ color: "var(--foreground)" }}>النشر التلقائي</h3>
              </div>
              <p style={{ color: "var(--muted)" }}>
                بعد الضغط "Deploy"، سيقوم Vercel ببناء ونشر المشروع تلقائياً.
                كل دفع جديد على GitHub سيُنشئ نسخة جديدة.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: متغيرات البيئة */}
        {/* ========================================== */}
        <LessonSection title="إدارة متغيرات البيئة">
          <p>
            متغيرات البيئة (Environment Variables) تُستخدم لتخزين
            القيم الحساسة مثل مفاتيح API. يجب ألا تُحفظ في Git:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: .env.local
// متغيرات البيئة المحلية (لا تُرفع إلى Git)

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xyzproject.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIs...

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# الموقع
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics (اختياري)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`}
          />

          <CodeBlock
            language="jsx"
            code={`// ملف: .gitignore
// تأكد من وجود هذه السطور لمنع رفع الملفات الحساسة

# dependencies
node_modules/
.pnp
.pnp.js

# testing
coverage/

# next.js
.next/
out/

# production
build/

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts`}
          />

          <CodeBlock
            language="jsx"
            code={`// كيفية استخدام متغيرات البيئة في الكود

import { createClient } from "@supabase/supabase-js";

// متغيرات البيئة التي تبدأ بـ NEXT_PUBLIC_ متاحة في العميل والخادم
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// متغيرات البيئة بدون NEXT_PUBLIC_ متاحة في الخادم فقط
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// تحقق من وجود المتغيرات
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// للتحقق من صحة متغيرات البيئة في runtime
export function validateEnv() {
  const required = [
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "NEXT_PUBLIC_SITE_URL",
  ];

  const missing = required.filter(
    (key) => !process.env[key]
  );

  if (missing.length > 0) {
    console.error("Missing environment variables:", missing);
    throw new Error(\`Missing env vars: \${missing.join(", ")}\`);
  }
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              تحذير أمني مهم:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>لا تشارك</strong> مفاتيح API مع أي شخص</li>
              <li><strong>لا ترفع</strong> ملف .env.local إلى Git</li>
              <li>استخدم <code>SUPABASE_SERVICE_ROLE_KEY</code> في الخادم فقط</li>
              <li>استخدم <code>NEXT_PUBLIC_</code> فقط للمتغيرات الآمنة للعميل</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: إعداد Supabase للإنتاج */}
        {/* ========================================== */}
        <LessonSection title="إعداد Supabase للإنتاج">
          <p>
            قبل النشر، نحتاج إعداد 프وект Supabase للإنتاج مع إعدادات
            الأمان الصحيحة:
          </p>

          <CodeBlock
            language="jsx"
            code={`// 1. إنشاء مشروع Supabase جديد للإنتاج
// اذهب إلى app.supabase.com وأنشئ مشروع جديد

// 2. إعداد RLS (Row Level Security)
// تأكد من تفعيل RLS على جميع الجداول

// مثال: سياسة للقراءة العامة للمقالات المنشورة
CREATE POLICY "Posts are viewable by everyone"
ON posts FOR SELECT
USING (status = 'published');

// مثال: سياسة للكتابة للمستخدمين المصرح لهم
CREATE POLICY "Only authors can insert posts"
ON posts FOR INSERT
WITH CHECK (auth.uid() = author_id);

// مثال: سياسة للتعديل للمؤلفين فقط
CREATE POLICY "Authors can update their own posts"
ON posts FOR UPDATE
USING (auth.uid() = author_id);

// مثال: سياسة للحذف للمشرفين فقط
CREATE POLICY "Only admins can delete posts"
ON posts FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.role = 'admin'
  )
);`}
          />

          <CodeBlock
            language="jsx"
            code={`// 3. إعداد Storage للصور
// إنشاء bucket للصور مع سياسات أمان

-- إنشاء bucket للصور
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true);

-- سياسة للقراءة العامة
CREATE POLICY "Images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'images');

-- سياسة للرفع للمستخدمين المسجلين فقط
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'images'
  AND auth.role() = 'authenticated'
);

-- سياسة للحذف للمؤلفين فقط
CREATE POLICY "Users can delete their own images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'images'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- 4. إعداد Real-time للتحديثات المباشرة
-- تفعيل Realtime على جدول المقالات
ALTER PUBLICATION supabase_realtime ADD TABLE posts;`}
          />

          <CodeBlock
            language="jsx"
            code={`// 5. إنشاء database functions للبحث
// دالة البحث المحسّنة

CREATE OR REPLACE FUNCTION search_posts(
  search_query TEXT,
  page_number INT DEFAULT 1,
  page_size INT DEFAULT 6
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  slug TEXT,
  description TEXT,
  image TEXT,
  created_at TIMESTAMPTZ,
  author_name TEXT,
  total_count BIGINT
) AS $$
DECLARE
  offset_value INT;
BEGIN
  offset_value := (page_number - 1) * page_size;

  RETURN QUERY
  WITH filtered_posts AS (
    SELECT
      p.id,
      p.title,
      p.slug,
      p.description,
      p.image,
      p.created_at,
      u.name AS author_name,
      COUNT(*) OVER() AS total_count
    FROM posts p
    LEFT JOIN users u ON p.author_id = u.id
    WHERE p.status = 'published'
      AND (
        p.title ILIKE '%' || search_query || '%'
        OR p.description ILIKE '%' || search_query || '%'
        OR p.content ILIKE '%' || search_query || '%'
      )
    ORDER BY p.created_at DESC
    LIMIT page_size
    OFFSET offset_value
  )
  SELECT * FROM filtered_posts;
END;
$$ LANGUAGE plpgsql;`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: تخصيص النطاق */}
        {/* ========================================== */}
        <LessonSection title="تخصيص النطاق (Custom Domain)">
          <p>
            بعد النشر الناجح، يمكنك ربط نطاق خاص بموقعك. إليك الخطوات:
          </p>

          <div className="space-y-4 my-6">
            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <h3 className="font-bold mb-2" style={{ color: "var(--primary)" }}>الخطوة 1: شراء النطاق</h3>
              <p style={{ color: "var(--muted)" }}>
                يمكنك شراء نطاق من مزودين مثل Namecheap أو GoDaddy أو Google Domains.
              </p>
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <h3 className="font-bold mb-2" style={{ color: "var(--primary)" }}>الخطوة 2: إضافة النطاق في Vercel</h3>
              <p style={{ color: "var(--muted)" }}>
                اذهب لإعدادات المشروع في Vercel → Domains → أضف النطاق.
              </p>
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <h3 className="font-bold mb-2" style={{ color: "var(--primary)" }}>الخطوة 3: تحديث DNS Records</h3>
              <CodeBlock
                language="bash"
                code={`# أضف هذه السجلات في DNS provider الخاص بك

# للنطاق الرئيسي (example.com)
Type: A
Name: @
Value: 76.76.21.21

# للنطاق الفرعي (www.example.com)
Type: CNAME
Name: www
Value: cname.vercel-dns.com

# أو استخدم NS records إذا كنت تستخدم Vercel DNS
Type: NS
Name: @
Value: ns1.vercel-dns.com
ns2.vercel-dns.com`}
              />
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <h3 className="font-bold mb-2" style={{ color: "var(--primary)" }}>الخطوة 4: إعداد SSL تلقائي</h3>
              <p style={{ color: "var(--muted)" }}>
                Vercel يوفر شهادات SSL مجانية تلقائياً. بعد تأكيد DNS، سيحصل الموقع
                على https تلقائياً خلال دقائق.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: vercel.json */}
        {/* ========================================== */}
        <LessonSection title="ملف vercel.json للإعدادات المتقدمة">
          <p>
            ملف <code>vercel.json</code> يُستخدم لتخصيص سلوك النشر
            وإعدادات إعادة التوجيه وتحسينات الأداء:
          </p>

          <CodeBlock
            language="json"
            code={`{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",

  "buildCommand": "npm run build",
  "outputDirectory": ".next",

  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    },
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-store, max-age=0"
        }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],

  "rewrites": [
    {
      "source": "/blog/:slug",
      "destination": "/blog/:slug"
    },
    {
      "source": "/categories/:slug",
      "destination": "/categories/:slug"
    }
  ],

  "redirects": [
    {
      "source": "/old-blog/:slug",
      "destination": "/blog/:slug",
      "permanent": true
    },
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ],

  "crons": [
    {
      "path": "/api/cron/revalidate",
      "schedule": "0 */6 * * *"
    }
  ]
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              شرح الإعدادات المهمة:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>headers:</strong> إضافة رؤوس أمنية لحماية الموقع</li>
              <li><strong>rewrites:</strong> إعادة كتابة الروابط بدون إعادة توجيه</li>
              <li><strong>redirects:</strong> إعادة توجيه الروابط القديمة</li>
              <li><strong>crons:</strong> مهام مجدولة مثل إعادة تخزين الصفحات</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: نصائح تحسين الأداء */}
        {/* ========================================== */}
        <LessonSection title="نصائح تحسين الأداء للنشر">
          <p>
            قبل النشر النهائي، تأكد من تطبيق هذه النصائح لتحسين أداء الموقع:
          </p>

          <CodeBlock
            language="jsx"
            code={`// 1. تحليل حزم الـ JavaScript
// شغل الأمر التالي لتحليل الحزم
// npx @next/bundle-analyzer

// ملف: next.config.js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  // ... باقي الإعدادات
});

// 2. تحسين التحميل الكسول للمكونات
import dynamic from "next/dynamic";

// تحميل مكون ثقيل فقط عند الحاجة
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>جاري التحميل...</p>,
  ssr: false, // لا يعمل على الخادم
});

// 3. تحسين cache لجلب البيانات
async function getPosts() {
  const res = await fetch("https://api.example.com/posts", {
    next: { revalidate: 3600 }, // تحديث كل ساعة
  });
  return res.json();
}

// 4. استخدام font محلي بدلاً من Google Fonts
// ملف: app/layout.js
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
});

export default function Layout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>{children}</body>
    </html>
  );
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// 5. تحسين الصور
// استخدم Always prefers WebP/AVIF
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="صورة رئيسية"
  width={1200}
  height={630}
  priority={true} // للصور العلوية فقط
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/..."
/>

// 6. تقليل bundle size
// استخدم dynamic imports للكتابة
import dynamic from "next/dynamic";

const MarkdownEditor = dynamic(
  () => import("@/components/MarkdownEditor"),
  { ssr: false }
);

// 7. تفعيل Compression
// Vercel يفعل هذا تلقائياً، لكن يمكنك التأكد
// من خلال headers في vercel.json
{
  "headers": [{
    "source": "/(.*)",
    "headers": [{
      "key": "Content-Encoding",
      "value": "gzip"
    }]
  }]
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "rgba(34, 197, 94, 0.1)", borderColor: "var(--accent)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              قائمة التحقق النهائية قبل النشر:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>✅ تشغيل <code>npm run build</code> بنجاح</li>
              <li>✅ عدم وجود أخطاء TypeScript</li>
              <li>✅ اختبار الموقع محلياً بشكل كامل</li>
              <li>✅ التأكد من أن جميع الصور تعمل</li>
              <li>✅ التأكد من أن البحث والترقيم يعملان</li>
              <li>✅ التأكد من أن المصادقة تعمل</li>
              <li>✅ إعداد متغيرات البيئة على Vercel</li>
              <li>✅ اختبار على أجهزة مختلفة</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: CI/CD مع GitHub Actions */}
        {/* ========================================== */}
        <LessonSection title="تحسين: إعداد CI/CD مع GitHub Actions">
          <p>
            يمكننا إعداد خط أنابيب مستمر (CI/CD) باستخدام GitHub Actions
            لاختبار ونشر الكود تلقائياً عند كل دفع:
          </p>

          <CodeBlock
            language="yaml"
            code={`# ملف: .github/workflows/deploy.yml
# إعداد CI/CD مع GitHub Actions

name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  VERCEL_ORG_ID: \${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: \${{ secrets.VERCEL_PROJECT_ID }}

jobs:
  test:
    name: Test
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Type check
        run: npm run type-check

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SUPABASE_URL: \${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: \${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
          NEXT_PUBLIC_SITE_URL: \${{ secrets.NEXT_PUBLIC_SITE_URL }}

  deploy:
    name: Deploy
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install Vercel CLI
        run: npm install --global vercel

      - name: Pull Vercel Environment
        run: vercel pull --yes --environment=production --token=\${{ secrets.VERCEL_TOKEN }}

      - name: Build Project
        run: vercel build --prod --token=\${{ secrets.VERCEL_TOKEN }}

      - name: Deploy to Production
        id: deploy
        run: vercel deploy --prebuilt --prod --token=\${{ secrets.VERCEL_TOKEN }}

      - name: Output URL
        run: echo "Deployed to \${{ steps.deploy.outputs.url }}"`}

          />

          <CodeBlock
            language="bash"
            code={`# لإعداد GitHub Actions، تحتاج إضافة these secrets في GitHub:
# Settings → Secrets and variables → Actions

# المفاتيح المطلوبة:
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
VERCEL_TOKEN=your_vercel_token

# متغيرات البيئة للتطبيق:
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# للحصول على these tokens:
# 1. Vercel Token: vercel.com/account/tokens
# 2. Org ID: vercel.com/dashboard → Settings → General
# 3. Project ID: vercel.com/dashboard → your-project → Settings`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* العاشر: مراقبة التطبيق بعد النشر */}
        {/* ========================================== */}
        <LessonSection title="مراقبة التطبيق بعد النشر">
          <p>
            بعد النشر، تحتاج مراقبة أداء الموقع واكتشاف أي مشاكل:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: app/api/health/route.js
// نقطة فحص صحة التطبيق

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const healthCheck = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    services: {},
  };

  // فحص Supabase
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    const { error } = await supabase.from("posts").select("id").limit(1);
    healthCheck.services.supabase = error ? "unhealthy" : "healthy";
  } catch (error) {
    healthCheck.services.supabase = "unhealthy";
    healthCheck.status = "degraded";
  }

  // فحص وقت الاستجابة
  healthCheck.responseTime = Date.now();

  const statusCode = healthCheck.status === "healthy" ? 200 : 503;

  return NextResponse.json(healthCheck, { status: statusCode });
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              أدوات المراقبة الموصى بها:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Vercel Analytics:</strong> مراقبة أداء الموقع وزواره</li>
              <li><strong>Vercel Speed Insights:</strong> قياس سرعة التحميل الفعلية</li>
              <li><strong>Sentry:</strong> مراقبة الأخطاء في الوقت الفعلي</li>
              <li><strong>Google Search Console:</strong> مراقبة أداء SEO</li>
              <li><strong>Uptime Robot:</strong> مراقبة توفر الموقع 24/7</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="لماذا نستخدم متغيرات البيئة (Environment Variables) في الإنتاج؟"
          options={[
            "لتحسين أداء التطبيق",
            "لتخزين القيم الحساسة مثل مفاتيح API بعيداً عن الكود المصدري",
            "لجعل الكود أسهل في القراءة",
            "لإضافة ميزات جديدة",
          ]}
          correctAnswer={1}
          explanation="متغيرات البيئة تُحافظ على أمان التطبيق بتخزين المفاتيح والقيم الحساسة في مكان آمن بعيداً عن الكود المصدري. هذا يمنع تسريب المفاتيح عند مشاركة الكود."
        />

        <Quiz
          question="ما هو ملف vercel.json ويُستخدم لأي شيء؟"
          options={[
            "ملف لإعدادات قاعدة البيانات",
            "ملف لتخصيص سلوك النشر وإعدادات الأمان والأداء على Vercel",
            "ملف لإعدادات React",
            "ملف لتخزين البيانات",
          ]}
          correctAnswer={1}
          explanation="vercel.json يُستخدم لتخصيص إعدادات النشر على Vercel مثل headers الأمان، إعادة التوجيه، المهام المجدولة (crons)، وتحسينات الأداء."
        />

        <Quiz
          question="كيف تحمي متغيرات البيئة الحساسة في GitHub؟"
          options={[
            "بحفظها في ملف README.md",
            "باستخدام GitHub Secrets في إعدادات المستودع",
            "برفع ملف .env.local إلى Git",
            "ب كتابتها في الكود مباشرة",
          ]}
          correctAnswer={1}
          explanation="GitHub Secrets تُستخدم لتخزين القيم الحساسة بشكل آمن. يمكن الوصول إليها في GitHub Actions لكنها لن تظهر في الكود المصدري أو السجلات."
        />

        <Quiz
          question="ما هو الهدف من CI/CD في 프로ジェкт؟"
          options={[
            "تحسين تصميم الموقع",
            "اختبار ونشر الكود تلقائياً عند كل دفع لضمان الجودة",
            "تقليل حجم المشروع",
            "إدارة قاعدة البيانات",
          ]}
          correctAnswer={1}
          explanation="CI/CD (التكامل والنشر المستمر) يضمن أن كل تغيير يمر بنفس الاختبارات وينشر بشكل تلقائي، مما يقلل الأخطاء ويوسرّع عملية التطوير."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: إعداد خط أنابيب النشر الكامل"
        >
          <p>
            أكمل إعداد خط أنابيب النشر الكامل مع كل ما يلي:
          </p>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>ملف vercel.json مع Headers أمنية وإعادة توجيه</li>
            <li>ملف .github/workflows/deploy.yml مع اختبارات ونشر</li>
            <li>نقطة فحص صحة /api/health</li>
            <li>إعداد متغيرات البيئة على Vercel</li>
          </ol>
          <CodeBlock
            language="jsx"
            code={`// الحل الكامل

// 1. vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ],
  "redirects": [
    { "source": "/old-blog/:slug", "destination": "/blog/:slug", "permanent": true }
  ]
}

// 2. .github/workflows/deploy.yml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
jobs:
  test-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npx vercel deploy --prod --token=\${{ secrets.VERCEL_TOKEN }}

// 3. app/api/health/route.js
import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ status: "ok", time: new Date().toISOString() });
}

// 4. الإعدادات على Vercel Dashboard:
// Settings → Environment Variables → أضف كل المتغيرات`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* ورقة الغش */}
        {/* ========================================== */}
        <CheatSheet title="ورقة غش: النشر النهائي">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                خطوات النشر على Vercel:
              </p>
              <CodeBlock
                language="bash"
                code={`# 1. تثبيت Vercel CLI
npm install -g vercel

# 2. تسجيل الدخول
vercel login

# 3. النشر المحلي
vercel

# 4. النشر للإنتاج
vercel --prod

# 5. التحقق من المشروع
vercel ls`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                متغيرات البيئة:
              </p>
              <CodeBlock
                language="bash"
                code={`# في .env.local
NEXT_PUBLIC_SUPABASE_URL=url
NEXT_PUBLIC_SUPABASE_ANON_KEY=key
SUPABASE_SERVICE_ROLE_KEY=key
NEXT_PUBLIC_SITE_URL=url

# في Vercel Dashboard
Settings → Environment Variables`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                vercel.json الأساسي:
              </p>
              <CodeBlock
                language="json"
                code={`{
  "headers": [{
    "source": "/(.*)",
    "headers": [
      {"key": "X-Content-Type-Options", "value": "nosniff"},
      {"key": "X-Frame-Options", "value": "DENY"}
    ]
  }],
  "redirects": [{
    "source": "/old/:path",
    "destination": "/new/:path",
    "permanent": true
  }]
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                نصائح الأداء:
              </p>
              <CodeBlock
                language="jsx"
                code={`// تحسين الصور
<Image priority={true} sizes="..." />

// تحسين الخطوط
const font = Cairo({ subsets: ["arabic"] });

// تحسين cache
fetch(url, {
  next: { revalidate: 3600 }
});

// dynamic imports
const Comp = dynamic(() => import("./Comp"), {
  ssr: false
});`}
              />
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* ملخص الدرس */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li>
                <strong style={{ color: "var(--primary)" }}>Vercel</strong> هو أفضل منصة لنشر تطبيقات Next.js مع نشر تلقائي
              </li>
              <li>
                <strong style={{ color: "var(--secondary)" }}>متغيرات البيئة</strong> تُحافظ على أمان المفاتيح والقيم الحساسة
              </li>
              <li>
                <strong style={{ color: "var(--accent)" }}>Supabase للإنتاج</strong> يحتاج إعداد RLS وStorage وSecurity بشكل صحيح
              </li>
              <li>
                <code style={{ color: "var(--primary)" }}>vercel.json</code> يُخصص Headers الأمنية وإعادة التوجيه والمهام المجدولة
              </li>
              <li>
                تحسينات <strong style={{ color: "var(--primary)" }}>الأداء</strong>: تحسين الصور والخطوط وcache و dynamic imports
              </li>
              <li>
                <strong style={{ color: "var(--secondary)" }}>CI/CD</strong> مع GitHub Actions يضمن اختبار ونشر الكود تلقائياً
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* رسالة النهاية */}
        {/* ========================================== */}
        <div
          className="p-8 rounded-xl border-2 text-center"
          style={{ background: "var(--surface)", borderColor: "var(--accent)" }}
        >
          <span className="text-6xl block mb-4">🎉</span>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            مبروك! أكملت المشروع النهائي
          </h2>
          <p className="text-lg mb-6" style={{ color: "var(--muted)" }}>
            الآن لديك مدونة احترافية كاملة جاهزة للنشر. يمكنك مشاركتها
            مع العالم والبدء في كتابة مقالاتك الأولى!
          </p>
          <div
            className="p-4 rounded-xl"
            style={{ background: "var(--background)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              ما الذي تعلمته في هذا المشروع:
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {["التخطيط", "الإعداد", "قاعدة البيانات", "المصادقة", "CRUD", "لوحة التحكم", "البحث", "SEO", "النشر"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ background: "var(--primary)", color: "var(--background)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
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
