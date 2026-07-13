import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function SetupAndStructure() {
  const lesson = getLessonBySlug("final-project", "02-setup-and-structure");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== إنشاء المشروع ==================== */}
        <LessonSection id="create-project" title="إنشاء مشروع Next.js جديد">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الآن سنبدأ بإعداد المشروع فعلياً. سنستخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">create-next-app</code> لإنشاء مشروع Next.js جديد مع جميع الإعدادات اللازمة.
          </p>

          <CodeBlock
            language="bash"
            code={`npx create-next-app@latest my-blog --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            هذا الأمر سينشئ مجلد <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">my-blog</code> يحتوي على:
          </p>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>مشروع Next.js جاهز مع TypeScript</li>
            <li>Tailwind CSS مُعد ومُثبت</li>
            <li>ESLint للتحقق من الكود</li>
            <li>هيكل app/ جاهز للاستخدام</li>
            <li>ملف package.json يحتوي على التبعيات الأساسية</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h4 className="text-blue-800 dark:text-blue-300 font-bold text-lg mb-2">
              شرح الخيارات المستخدمة
            </h4>
            <div className="text-blue-700 dark:text-blue-400 space-y-2 text-sm">
              <p><code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">--typescript</code> لاستخدام TypeScript بدلاً من JavaScript العادي</p>
              <p><code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">--tailwind</code> لتثبيت وإعداد Tailwind CSS تلقائياً</p>
              <p><code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">--eslint</code> لإضافة ESLint للتحقق من الكود</p>
              <p><code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">--app</code> لاستخدام App Router (الطريقة الحديثة)</p>
              <p><code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">--src-dir</code> لوضع الكود في مجلد src/ (اختياري لكنه أفضل)</p>
              <p><code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">--import-alias "@/*"</code> لتسهيل الاستيراد باستخدام @</p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== تثبيت التبعيات ==================== */}
        <LessonSection id="install-dependencies" title="تثبيت التبعيات الإضافية">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            بعد إنشاء المشروع، نحتاج لتثبيت التبعيات الإضافية التي سنستخدمها في مشروع المدونة:
          </p>

          <CodeBlock
            language="bash"
            code={`# Supabase - قاعدة البيانات
npm install @supabase/ssr @supabase/supabase-js

# Clerk - مصادقة المستخدمين
npm install @clerk/nextjs`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            ما الذي يقدمه كل حزمة:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                @supabase/ssr
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                يوفر إعدادات Supabase المخصصة للخادم (Server-Side Rendering). هذا يسمح לנו بالوصول لقاعدة البيانات من الخادم بشكل آمن.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                @supabase/supabase-js
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                العميل الرئيسي للتعامل مع Supabase. يوفر واجهة برمجية لاستعلامات قاعدة البيانات.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                @clerk/nextjs
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                يوفر مكونات وأدوات Clerk المخصصة لـ Next.js. يشمل نماذج تسجيل الدخول، وحماية المسارات، وإدارة المستخدمين.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== هيكل المجلدات ==================== */}
        <LessonSection id="folder-structure" title="إعداد هيكل المجلدات">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            بعد إنشاء المشروع وتثبيت التبعيات، نحتاج لإنشاء المجلدات والملفات الإضافية. دعنا نرى هيكل المشروع النهائي:
          </p>

          <CodeBlock
            language="text"
            code={`my-blog/
├── src/
│   ├── app/
│   │   ├── layout.js                 # التخطيط الرئيسي
│   │   ├── page.js                   # الصفحة الرئيسية
│   │   ├── globals.css               # الأنماط العامة
│   │   ├── blog/
│   │   │   ├── page.js               # قائمة المقالات
│   │   │   └── [slug]/
│   │   │       └── page.js           # تفاصيل المقال
│   │   ├── dashboard/
│   │   │   ├── page.js               # لوحة التحكم
│   │   │   ├── create/
│   │   │   │   └── page.js           # إنشاء مقال جديد
│   │   │   └── edit/
│   │   │       └── [id]/
│   │   │           └── page.js       # تعديل مقال
│   │   └── auth/
│   │       ├── sign-in/
│   │       │   └── page.js           # صفحة تسجيل الدخول
│   │       └── sign-up/
│   │           └── page.js           # صفحة إنشاء حساب
│   ├── components/
│   │   ├── Header.js                 # الشريط العلوي
│   │   ├── Footer.js                 # الشريط السفلي
│   │   ├── PostCard.js               # بطاقة المقال
│   │   ├── PostList.js               # قائمة المقالات
│   │   ├── SearchBar.js              # شريط البحث
│   │   └── CategoryFilter.js         # فلتر التصنيفات
│   ├── lib/
│   │   ├── supabase.js               # إعداد عميل Supabase
│   │   ├── supabase-server.js        # عميل Supabase للخادم
│   │   └── utils.js                  # دوال مساعدة
│   └── middleware.js                  # حماية المسارات
├── public/                            # الملفات العامة (صور، أيقونات)
├── .env.local                        # متغيرات البيئة
├── next.config.js                    # إعدادات Next.js
├── tailwind.config.js                # إعدادات Tailwind
└── package.json                      # التبعيات`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            سنقوم بإنشاء هذه المجلدات والملفات واحدة تلو الأخرى في الدروس القادمة. الآن فقط نريد أن نفهم الهيكل العام.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
            <h4 className="text-yellow-800 dark:text-yellow-300 font-bold text-lg mb-2">
              لماذا نستخدم مجلد src/؟
            </h4>
            <p className="text-yellow-700 dark:text-yellow-400">
              استخدام مجلد <code className="bg-yellow-100 dark:bg-yellow-900/40 px-1 rounded">src/</code> يجعل هيكل المشروع أكثر تنظيماً. جميع ملفات الكود تذهب داخل <code className="bg-yellow-100 dark:bg-yellow-900/40 px-1 rounded">src/</code> بينما الملفات الإعدادية تبقى في الجذر. هذا نمط شائع في المشاريع الكبيرة.
            </p>
          </div>
        </LessonSection>

        {/* ==================== متغيرات البيئة ==================== */}
        <LessonSection id="env-variables" title="إعداد متغيرات البيئة">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            متغيرات البيئة (Environment Variables) تُستخدم لتخزين المعلومات السرية مثل مفاتيح API. هذه الملفات <strong>لا يجب أن تُرفع إلى GitHub</strong> لأنها تحتوي على معلومات حساسة.
          </p>

          <CodeBlock
            language="bash"
            code={`# ملف .env.local - املأ القيم من حساباتك

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
CLERK_SECRET_KEY=your-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            كيف تحصل على هذه المفاتيح:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Supabase Keys
              </h4>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>اذهب إلى dashboard.supabase.com</li>
                <li>اختر مشروعك</li>
                <li>انتقل إلى Settings &gt; API</li>
                <li>انسخ Project URL و anon public key</li>
              </ol>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Clerk Keys
              </h4>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>اذهب إلى dashboard.clerk.com</li>
                <li>اختر مشروعك</li>
                <li>انتقل إلى API Keys</li>
                <li>انسخ Publishable Key و Secret Key</li>
              </ol>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <h4 className="text-red-800 dark:text-red-300 font-bold text-lg mb-2">
              تحذير أمني مهم
            </h4>
            <p className="text-red-700 dark:text-red-400">
              أضف <code className="bg-red-100 dark:bg-red-900/40 px-1 rounded">.env.local</code> إلى ملف <code className="bg-red-100 dark:bg-red-900/40 px-1 rounded">.gitignore</code> لمنع رفعه إلى GitHub. أي شخص يحصل على هذه المفاتيح يمكنه الوصول لبياناتك!
            </p>
          </div>

          <CodeBlock
            language="text"
            code={`# ملف .gitignore - يمنع رفع الملفات الحساسة
.env.local
.env*.local`}
          />
        </LessonSection>

        {/* ==================== هيكل package.json ==================== */}
        <LessonSection id="package-json" title="ملف package.json">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">package.json</code> يحتوي على معلومات المشروع والتبعيات والأوامر المتاحة. بعد تثبيت التبعيات، سيبدو هكذا:
          </p>

          <CodeBlock
            language="json"
            code={`{
  "name": "my-blog",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@supabase/ssr": "^0.5.0",
    "@supabase/supabase-js": "^2.45.0",
    "@clerk/nextjs": "^5.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "16.0.0"
  }
}`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            الأمر المهم هو <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">npm run dev</code> الذي يشغّل خادم التطوير. يمكنك تشغيله بالكتابة في الطرفية:
          </p>

          <CodeBlock
            language="bash"
            code={`npm run dev`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            بعد التشغيل، افتح المتصفح وانتقل إلى <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">http://localhost:3000</code> لرؤية مشروعك.
          </p>
        </LessonSection>

        {/* ==================== تحسين الكود ==================== */}
        <LessonSection id="code-improvement" title="تحسين الكود: هيكل Monorepo للتوسع">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            إذا كنت تخطط لتوسيع مشروعك مستقبلاً (مثل إضافة تطبيق موبايل أو API خارجي)، يمكنك استخدام هيكل <strong>Monorepo</strong>. هذا الهيكل يسمح لك بمشاركة الكود بين مشاريع متعددة.
          </p>

          <CodeBlock
            language="text"
            code={`# هيكل Monorepo
workspace/
├── apps/
│   ├── web/                    # تطبيق Next.js (المدونة)
│   │   ├── app/
│   │   ├── components/
│   │   └── package.json
│   └── mobile/                 # تطبيق React Native (مستقبلاً)
│       ├── src/
│       └── package.json
├── packages/
│   ├── ui/                     # مكونات مشتركة
│   │   ├── Button.js
│   │   ├── Card.js
│   │   └── package.json
│   ├── database/               # إعدادات قاعدة البيانات
│   │   ├── schema.js
│   │   └── package.json
│   └── config/                 # إعدادات مشتركة
│       ├── eslint.js
│       ├── tailwind.js
│       └── package.json
├── package.json                # الإعدادات الرئيسية
└── turbo.json                  # إعدادات Turborepo`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            مكتبات تساعدك في إدارة Monorepo:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li><strong>Turborepo:</strong> أداة سريعة لإدارة المشاريع المتعددة</li>
            <li><strong>pnpm workspaces:</strong> إدارة التبعيات المشتركة</li>
            <li><strong>Nx:</strong> إطار عمل قوي للمشاريع الكبيرة</li>
          </ul>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h4 className="text-green-800 dark:text-green-300 font-bold text-lg mb-2">
              متى تستخدم Monorepo؟
            </h4>
            <p className="text-green-700 dark:text-green-400">
              استخدم Monorepo عندما يكون لديك أكثر من مشروع واحد يشارك الكود相同. للمشاريع الصغيرة (مثل مدونتنا)، الهيكل العادي (Single Repo) يكفي ويبسط الأمور.
            </p>
          </div>
        </LessonSection>

        {/* ==================== تدريب ==================== */}
        <Quiz
          question="ما هو الملف الذي يحتوي على مفاتيح API السرية ويجب ألا يُرفع إلى GitHub؟"
          options={[
            "package.json",
            ".env.local",
            "next.config.js",
            "tailwind.config.js"
          ]}
          correctAnswer={1}
          explanation="ملف .env.local يحتوي على متغيرات البيئة الحساسة مثل مفاتيح API. يجب دائماً إضافته إلى .gitignore لمنع رفعه إلى GitHub."
        />

        <Challenge title="تحدي الإعداد: أعد إنشاء المشروع">
          <p className="mb-4">
            جرّب إنشاء مشروع Next.js جديد بنفسك باستخدام الأوامر التالية:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>شغّل أمر <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">npx create-next-app@latest</code></li>
            <li>ثبّت التبعيات الإضافية (@supabase/ssr, @clerk/nextjs)</li>
            <li>أنشئ مجلد components/ وضغط فيه ملف Header.js بسيط</li>
            <li>أنشئ مجلد lib/ وضغط فيه ملف utils.js بسيط</li>
            <li>شغّل المشروع بـ <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">npm run dev</code> وتأكد أنه يعمل</li>
          </ol>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            إذا واجهتك أي مشكلة، راجع خطوات التثبيت أعلاه أو ابحث عن الحل في Google.
          </p>
        </Challenge>

        <CheatSheet title="ملخص rápido للإعداد">
          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">1. إنشاء المشروع</h4>
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">npx create-next-app@latest my-blog</code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">2. تثبيت التبعيات</h4>
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">npm install @supabase/ssr @clerk/nextjs</code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">3. إعداد .env.local</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">أضف مفاتيح Supabase و Clerk</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">4. تشغيل المشروع</h4>
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">npm run dev</code>
            </div>
          </div>
        </CheatSheet>

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
