import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function WhatIsSupabase() {
  const lesson = getLessonBySlug("supabase", "01-what-is-supabase");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== Section 1: ما هو Supabase؟ ==================== */}
        <LessonSection id="what-is-supabase" title="ما هو Supabase؟">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Supabase هو بديل مفتوح المصدر لـ Firebase، مبني على قاعدة بيانات{" "}
            <strong className="text-blue-600 dark:text-blue-400">PostgreSQL</strong>.
            أسسه Paul Copplestone في عام 2020، ويهدف إلى تزويد المطورين بمنصة
            backend كاملة بدون إغلاق تقني (vendor lock-in).
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            لكن Supabase ليست مجرد قاعدة بيانات — إنها{" "}
            <strong className="text-blue-600 dark:text-blue-400">
              منصة backend متكاملة
            </strong>{" "}
            تشمل قاعدة البيانات، والمصادقة، وتخزين الملفات، والتحديثات الفورية،
            والدوال بدون خادم (serverless functions). كل هذا مدعوم بتقنيات مفتوحة
            المصدر يمكنك الاطلاع على كودها في أي وقت.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">
              مقارنة سريعة: Firebase vs Supabase
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">
                      الميزة
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">
                      Firebase
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">
                      Supabase
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 font-medium">المالك</td>
                    <td className="py-3 px-4">Google (مغلق المصدر)</td>
                    <td className="py-3 px-4">community (مفتوح المصدر)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 font-medium">قاعدة البيانات</td>
                    <td className="py-3 px-4">Firestore (NoSQL)</td>
                    <td className="py-3 px-4">PostgreSQL (SQL)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 font-medium">ملكية البيانات</td>
                    <td className="py-3 px-4">على خوادم Google</td>
                    <td className="py-3 px-4">possess own database instance</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 font-medium">API</td>
                    <td className="py-3 px-4">SDK خاص بـ Firebase</td>
                    <td className="py-3 px-4">PostgREST + REST standard</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">القدرة على التحويل</td>
                    <td className="py-3 px-4">صعب جداً</td>
                    <td className="py-3 px-4">سهل — PostgreSQL قياسي</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            الفارق الجوهري هو أنك مع Supabase تملك بياناتك بشكل حقيقي. قاعدة
            بيانات PostgreSQL قياسية ومعروفة عالمياً،|`
            فإذا قررت الانتقال لأي منصة أخرى في المستقبل، يمكنك تصدير بياناتك
            واستخدامها مباشرة — بدون إعادة بناء كل شيء من الصفر.
          </p>

          <div className="bg-gradient-to-l from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-blue-600 dark:text-blue-400">ملاحظة مهمة:</strong>{" "}
              Supabase ليست &quot;نسخة عربية من Firebase&quot; — إنها منصة عالمية
              تخدم ملايين المطورين حول العالم، ونستخدمها هنا لأنها توفر تجربة
              ممتازة للمطورين العرب الذين يريدون بناء تطبيقات حديثة بأفضل الممارسات.
            </p>
          </div>
        </LessonSection>

        {/* ==================== Section 2: لماذا Postgres وليس NoSQL ==================== */}
        <LessonSection id="why-postgres" title="لماذا PostgreSQL وليس NoSQL؟">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            قد تتساءل لماذا اختارت Supabase PostgreSQL بدلاً من قواعد البيانات
            غير العلائقية (NoSQL) مثل MongoDB أو Firestore. الإجابة تكمن في
            إحصائيات التطوير الحقيقية وأفضل الممارسات في صناعة البرمجيات.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            PostgreSQL هي{" "}
            <strong className="text-blue-600 dark:text-blue-400">
              أكثر قاعدة بيانات محبوبة على مدار 4 سنوات متتالية
            </strong>{" "}
            في استطلاعات Stack Overflow للمطورين. هذا ليس صدفة — PostgreSQL توفر
            مزايا لا يمكن لقاعدة بيانات NoSQL محاكاتها بسهولة.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-green-600 dark:text-green-400 mb-3">
                ✓ مزايا PostgreSQL
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>ACID Compliance — ضمان المعاملات الآمنة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Joins — ربط الجداول بكفاءة عالية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Foreign Keys — سلامة البيانات العلائقية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>م裁员ع الحالة (stored procedures) و الدوال المحفوظة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>فهارس متقدمة وتحسين الاستعلامات</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>JSONB — دعم بيانات JSON داخل SQL</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-red-600 dark:text-red-400 mb-3">
                ✗ تحديات NoSQL
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>لا يوجد joins أصلي — يجب تكرار البيانات</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>صعوبة التحقق من سلامة البيانات (data integrity)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>vendor lock-in — صعوبة التحويل لمنصة أخرى</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>SQL هو معيار عالمي — NoSQL ليس كذلك</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>تتكاليف الاستعلامات المعقدة عند نمو البيانات</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>نقص في الأدوات والمجتمع المقارنة بـ SQL</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800 mb-6">
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-3">
              💡 لماذا هذا مهم لك كمطور؟
            </h4>
            <p className="text-amber-700 dark:text-amber-200 leading-relaxed">
              SQL هو{" "}
              <strong>لغة البيانات الأكثر انتشاراً في العالم</strong>. إذا تعلمت
              SQL مع PostgreSQL، فإن هذه المعرفة قابلة للتطبيق في أي شركة أو
              مشروع في أي مكان في العالم. هذا على عكس لغات NoSQL الخاصة التي
              تختلف من قاعدة بيانات لأخرى.
            </p>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
           最重要的一点 هو أن PostgreSQL{" "}
            <strong className="text-blue-600 dark:text-blue-400">
              لا يوجد فيها vendor lock-in
            </strong>
            . يمكنك استخراج بياناتك من Supabase في أي وقت وتشغيل PostgreSQL
            على خادمك الخاص أو على أي منصة سحابية أخرى. هذا يعني أن Supabase
            هي{" "}
            <strong>منصة تخدمك لا تُسجنك</strong>.
          </p>
        </LessonSection>

        {/* ==================== Section 3: معمارية Supabase ==================== */}
        <LessonSection id="architecture" title="معمارية Supabase">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            فهم معمارية Supabase سيساعدك على استخدام كل مكون بشكل صحيح. إليك
            كيف تتصل جميع المكونات معاً:
          </p>

          <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 mb-6 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono leading-relaxed whitespace-pre">
{`Client App
    ↓
Supabase API Gateway
    ↓
┌─────────────────────────────┐
│ PostgREST → PostgreSQL      │  ← قاعدة البيانات
│ GoTrue → Auth               │  ← المصادقة
│ Realtime → WebSocket        │  ← التحديثات الفورية
│ Storage → S3-compatible     │  ← تخزين الملفات
│ Edge Functions → Deno       │  ← الدوال بدون خادم
└─────────────────────────────┘`}
            </pre>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            كل طلب من تطبيقك يمر عبر{" "}
            <strong className="text-blue-600 dark:text-blue-400">
              Supabase API Gateway
            </strong>
            ，الذي يوجهه إلى المكون المناسب. لن نحتاج إلى إعداد كل مكون يدوياً
            — Supabase يتولى ذلك تلقائياً عند إنشاء المشروع.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                PostgREST
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                أداة مفتوحة المصدر تحوّل قاعدة بيانات PostgreSQL مباشرة إلى{" "}
                <strong>REST API</strong>. أي جدول في قاعدة البيانات يصبح endpoint
                تلقائياً — بدون كتابة أي كود backend تقريباً.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">
                GoTrue
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                خدمة المصادقة المسؤولة عن إدارة المستخدمين وتسجيل الدخول
                بالبريد الإلكتروني أو OAuth أو الروابط السحرية (magic links)
                والمصادقة الثنائية (MFA).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">
                Realtime
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                يسمح بالاشتراك في التغييرات على قاعدة البيانات بشكل فوري عبر{" "}
                <strong>WebSocket</strong>. يمكنك مشاهدة الإضافات والحذف والتعديل
                في الوقت الحقيقي.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-2">
                Storage
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                نظام تخزين ملفات متوافق مع S3 يدعم رفع الملفات وتحميلها مع{" "}
                <strong>CDN</strong> عالمي وتحويل الصور تلقائياً.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">
                Edge Functions
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                دوال بدون خادم (serverless) تعمل على{" "}
                <strong>Deno</strong>، يمكنك كتابة منطق معقد في الخادم ونشره
                في ثوانٍ.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== Section 4: المكونات الخمسة ==================== */}
        <LessonSection id="five-components" title="المكونات الخمسة لـ Supabase">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            تتكون Supabase من خمسة مكونات رئيسية، كل منها يخدم غرضاً محدداً
            لكنها تعمل معاً بشكل متكامل:
          </p>

          <div className="space-y-6 mb-6">
            {/* Component 1: Database */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🗄️</span>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  1. Database (PostgreSQL)
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                قاعدة البيانات العلائقية الكاملة مع دعم الجداول (tables) وال views
                والدوال المحفوظة (stored procedures). كل هذا مع{" "}
                <strong>RLS</strong> (Row Level Security) لتأمين البيانات على
                مستوى الصفوف.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <CodeBlock
                  language="sql"
                  code={`CREATE TABLE todos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  is_complete BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- تفعيل RLS
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

-- سياسة: المستخدم يرى فقط مهامه
CREATE POLICY "Users see own todos"
  ON todos FOR SELECT
  USING (auth.uid() = user_id);`}
                />
              </div>
            </div>

            {/* Component 2: Auth */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🔐</span>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  2. Auth (المصادقة)
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                نظام مصادقة متكامل يدعم تسجيل الدخول بالبريد الإلكتروني وكلمة
                المرور، وحسابات Google وGitHub (OAuth)، والروابط السحرية (magic
                links)، والمصادقة الثنائية (MFA) عبر TOTP.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <CodeBlock
                  language="javascript"
                  code={`// تسجيل مستخدم جديد
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securepassword123'
})

// تسجيل الدخول
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'securepassword123'
})

// تسجيل الدخول عبر Google
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google'
})`}
                />
              </div>
            </div>

            {/* Component 3: Storage */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📁</span>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  3. Storage (التخزين)
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                نظام تخزين ملفات يوفر رفع وتحميل الملفات مع CDN عالمي لتسريع
                التحميل، وتحويل الصور تلقائياً (قص، تغيير الحجم، تحسين
                الجودة).
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <CodeBlock
                  language="javascript"
                  code={`// رفع ملف
const { data, error } = await supabase.storage
  .from('avatars')
  .upload('user-123/photo.jpg', file)

// تحميل رابط الصورة
const { data } = supabase.storage
  .from('avatars')
  .getPublicUrl('user-123/photo.jpg')

// تحويل الصورة تلقائياً
const { data } = supabase.storage
  .from('avatars')
  .getPublicUrl('user-123/photo.jpg', {
    transform: {
      width: 200,
      height: 200,
      resize: 'cover'
    }
  })`}
                />
              </div>
            </div>

            {/* Component 4: Realtime */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚡</span>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  4. Realtime (التحديثات الفورية)
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                يدعم الاشتراك في التغييرات الفورية على قاعدة البيانات عبر
                WebSocket. يمكنك مراقبة الإضافات (INSERT) والتعديلات (UPDATE)
                والحذف (DELETE) على أي جدول. يدعم أيضاً Broadcast و
                Presence للدردشات الجماعية.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <CodeBlock
                  language="javascript"
                  code={`// الاشتراك في التغييرات الفورية
const channel = supabase
  .channel('todos-changes')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'todos' },
    (payload) => {
      console.log('التغيير:', payload)
      console.log('النوع:', payload.eventType)
      console.log('البيانات الجديدة:', payload.new)
      console.log('البيانات القديمة:', payload.old)
    }
  )
  .subscribe()`}
                />
              </div>
            </div>

            {/* Component 5: Edge Functions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🚀</span>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  5. Edge Functions (الدوال بدون خادم)
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                دوال serverless تعمل على{" "}
                <strong>Deno</strong>، يمكنها الوصول لقاعدة البيانات والمصادقة
                مباشرة. مثالية للمعالجة المعقدة مثل إرسال البريد الإلكتروني أو
                معالجة الدفعات أو بناء APIs مخصصة.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <CodeBlock
                  language="typescript"
                  code={`// supabase/functions/hello-world/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!
  )

  const { data, error } = await supabase
    .from('todos')
    .select('*')

  return new Response(
    JSON.stringify({ data }),
    { headers: { "Content-Type": "application/json" } }
  )
})`}
                />
              </div>
            </div>
          </div>
        </LessonSection>

        {/* ==================== Section 5: @supabase/supabase-js v2 ==================== */}
        <LessonSection id="supabase-js" title="@supabase/supabase-js v2">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Supabase توفر مكتبة JavaScript واحدة تسمح لك بالوصول لجميع خدماتها
            عبر واجهة برمجية موحدة. هذه المكتبة هي{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
              @supabase/supabase-js
            </code>{" "}
            الإصدار الثاني.
          </p>

          <div className="bg-gradient-to-l from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 mb-6">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-4">
              مزايا المكتبة:
            </h4>
            <ul className="space-y-2 text-blue-700 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  <strong>مكتبة واحدة</strong> لجميع الخدمات — database, auth,
                  storage, realtime
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  <strong>Query Builder مترابط</strong> — يمكنك بناء الاستعلامات
                  بسلاسة
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  <strong>TypeScript مدمج</strong> — دعم كامل للأنواع البرمجية
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  <strong>أخطاء واضحة</strong> — كائن data و error في كل استجابة
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            لتثبيت المكتبة:
          </p>

          <CodeBlock
            language="bash"
            code={`npm install @supabase/supabase-js @supabase/ssr`}
          />

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 mb-4">
            مثال على بناء استعلام مترابط:
          </p>

          <CodeBlock
            language="javascript"
            code={`// استعلام بسيط — جلب كل المهام
const { data, error } = await supabase
  .from('todos')
  .select('*')

// استعلام مع فلتر — المهام غير المكتملة فقط
const { data, error } = await supabase
  .from('todos')
  .select('id, title, is_complete')
  .eq('is_complete', false)
  .order('created_at', { ascending: false })
  .limit(10)

// إدراج مهمة جديدة
const { data, error } = await supabase
  .from('todos')
  .insert([
    { title: 'تعلم Supabase', is_complete: false }
  ])
  .select()

// تحديث مهمة
const { data, error } = await supabase
  .from('todos')
  .update({ is_complete: true })
  .eq('id', 'todo-uuid-here')

// حذف مهمة
const { data, error } = await supabase
  .from('todos')
  .delete()
  .eq('id', 'todo-uuid-here')`}
          />

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800 mt-6">
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-3">
              💡 نمط التعامل مع الأخطاء
            </h4>
            <p className="text-amber-700 dark:text-amber-200 leading-relaxed mb-4">
              في Supabase، كل استجابة تحتوي على كائني{" "}
              <code className="bg-amber-100 dark:bg-amber-800/50 px-2 py-0.5 rounded text-sm font-mono">
                data
              </code>{" "}
              و{" "}
              <code className="bg-amber-100 dark:bg-amber-800/50 px-2 py-0.5 rounded text-sm font-mono">
                error
              </code>
              . إذا نجح الاستعلام، يكون{" "}
              <code className="bg-amber-100 dark:bg-amber-800/50 px-2 py-0.5 rounded text-sm font-mono">
                error = null
              </code>{" "}
              وإذا فشل، يكون{" "}
              <code className="bg-amber-100 dark:bg-amber-800/50 px-2 py-0.5 rounded text-sm font-mono">
                data = null
              </code>
              .
            </p>
            <CodeBlock
              language="javascript"
              code={`const { data, error } = await supabase
  .from('todos')
  .select('*')

if (error) {
  console.error('خطأ في جلب البيانات:', error.message)
  return
}

console.log('البيانات:', data)`}
            />
          </div>
        </LessonSection>

        {/* ==================== Section 6: متى تستخدم Supabase ==================== */}
        <LessonSection id="when-to-use" title="متى تستخدم Supabase؟">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Supabase منصة ممتازة لكنها ليست الحل السحري لكل مشكلة. إليك
            الحالات التي تلمع فيها Supabase حقاً:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <span className="text-2xl mt-1">🚀</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  المشروع الأولي (MVP) والشركات الناشئة
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  إذا كنت تريد بناء منتج أولي (MVP) بسرعة، Supabase توفر لك
                  backend كامل في دقائق. لا حاجة لبناء خادم أو قاعدة بيانات
                  من الصفر — ركّز على منتجك.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <span className="text-2xl mt-1">⚡</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  التطبيقات التي تحتاج ميزات فورية (Real-time)
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  الدردشات، لوحات协作، أي تطبيق يحتاج تحديثات فورية — Supabase
                  Realtime يوفر ذلك بدون إعداد خادم WebSocket منفصل.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <span className="text-2xl mt-1">🗄️</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  المشاريع التي تحتاج قوة PostgreSQL الكاملة
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  إذا كان مشروعك يحتاج استعلامات معقدة، و Joins، و Foreign
                  Keys، و Stored Procedures — PostgreSQL يوفر كل هذا بشكل
                  أصلي.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <span className="text-2xl mt-1">🔓</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  تجنب vendor lock-in
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  إذا كنت تريد الاحتفاظ بالقدرة على الانتقال لأي منصة أخرى في
                  المستقبل، Supabase (بسبب PostgreSQL القياسي) توفر لك هذه
                  المرونة.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <span className="text-2xl mt-1">🌍</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  المشاريع متعددة اللغات
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  تطبيقات مثل المنصات التعليمية التي تحتاج دعم RTL و LTR معاً —
                  Supabase لا تهتم بلغة الواجهة، فقط البيانات.
                </p>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* ==================== Section 7: ومتى لا تستخدمها؟ ==================== */}
        <LessonSection id="when-not-to-use" title="ومتى لا تستخدم Supabase؟">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            كما ذكرنا، Supabase ليست الحل لكل شيء. إليك الحالات التي قد
            تحتاج فيها التفكير في بدائل أخرى:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800">
              <span className="text-2xl mt-1">📄</span>
              <div>
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                  المواقع الثابتة البسيطة
                </h4>
                <p className="text-red-700 dark:text-red-200 text-sm leading-relaxed">
                  إذا كان موقعك عبارة عن صفحات ثابتة فقط (مثل مدونة بسيطة بدون
                  تعليقات)، استخدم CMS مثل WordPress أو Strapi أو حتى ملفات
                  Markdown.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800">
              <span className="text-2xl mt-1">🔧</span>
              <div>
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                  التطبيقات البسيطة جداً
                </h4>
                <p className="text-red-700 dark:text-red-200 text-sm leading-relaxed">
                  إذا كان تطبيقك لا يحتاج سوى قاعدة بيانات بسيطة بدون مصادقة
                  معقدة أو تحديثات فورية، ربما تكون خدمة قاعدة بيانات مستضافة
                  (مثل PlanetScale أو Neon) كافية.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800">
              <span className="text-2xl mt-1">🏗️</span>
              <div>
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                  المعمارية المعقدة (Microservices)
                </h4>
                <p className="text-red-700 dark:text-red-200 text-sm leading-relaxed">
                  إذا كان فريقك يحتاج معمارية microservices معقدة مع خدمات
                  متعددة مستقلة، ربما تحتاج Kubernetes و Docker و أنظمة
                  رسائل مثل Kafka بدلاً من منصة BaaS.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800">
              <span className="text-2xl mt-1">📊</span>
              <div>
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                  تحليل البيانات الضخمة (Big Data)
                </h4>
                <p className="text-red-700 dark:text-red-200 text-sm leading-relaxed">
                  إذا كان مشروعك يحتاج معالجة ملايين السجلات في الثانية أو
                  تحليلات BI متقدمة، تحتاج أنظمة مخصصة مثل Apache Spark أو
                  ClickHouse.
                </p>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* ==================== Section 8: مثال عملي — أول استعلام ==================== */}
        <LessonSection id="first-query" title="مثال عملي — أول استعلام">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            دعنا نرى كيف تبدو أول استعلام في Supabase. سنقوم بإنشاء عميل
            Supabase واستعلام البيانات من جدول.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            الخطوة 1: إنشاء ملف التكوين
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            أنشئ ملفاً يسمى{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
              lib/supabase.js
            </code>
            :
          </p>

          <CodeBlock
            language="javascript"
            code={`import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3 mt-6">
            الخطوة 2: استخدام العميل لجلب البيانات
          </h4>

          <CodeBlock
            language="javascript"
            code={`import { supabase } from '@/lib/supabase'

async function fetchTodos() {
  const { data, error } = await supabase
    .from('todos')
    .select('*')

  if (error) {
    console.error('خطأ:', error.message)
    return []
  }

  return data
}

// استخدام الدالة
const todos = await fetchTodos()
console.log('المهام:', todos)`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3 mt-6">
            الخطوة 3: استخدام مع React
          </h4>

          <CodeBlock
            language="jsx"
            code={`'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTodos() {
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error) {
        setTodos(data)
      }
      setLoading(false)
    }

    loadTodos()
  }, [])

  if (loading) return <p>جاري التحميل...</p>

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}`}
          />

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800 mt-6">
            <h4 className="font-bold text-green-800 dark:text-green-300 mb-3">
              ✅ ماذا حدث هنا؟
            </h4>
            <ol className="space-y-2 text-green-700 dark:text-green-200 list-decimal list-inside">
              <li>أنشئنا عميل Supabase باستخدام URL و Key من ملف التكوين</li>
              <li>استخدمنا الدالة{" "}
                <code className="bg-green-100 dark:bg-green-800/50 px-1 rounded text-sm">
                  .from(&apos;todos&apos;)
                </code>{" "}
                لتحديد الجدول
              </li>
              <li>استخدمنا{" "}
                <code className="bg-green-100 dark:bg-green-800/50 px-1 rounded text-sm">
                  .select(&apos;*&apos;)
                </code>{" "}
                لجلب كل الأعمدة
              </li>
              <li>النتيجة تأتي في كائن يحتوي على{" "}
                <code className="bg-green-100 dark:bg-green-800/50 px-1 rounded text-sm">
                  data
                </code>{" "}
                و{" "}
                <code className="bg-green-100 dark:bg-green-800/50 px-1 rounded text-sm">
                  error
                </code>
              </li>
            </ol>
          </div>
        </LessonSection>

        {/* ==================== Section 9: ماذا يحدث خلف الكواليس ==================== */}
        <LessonSection id="behind-the-scenes" title="ماذا يحدث خلف الكواليس">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            فهم ما يحدث تحت الغطاء سيمنحك ثقة أكبر في استخدام Supabase. دعنا
            نتتبع ما ي happens عندما تكتب سطراً واحداً من الكود.
          </p>

          <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-white mb-4">السطر:</h4>
            <CodeBlock
              language="javascript"
              code={`const { data, error } = await supabase.from('todos').select('*')`}
            />
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            هذا السطر يمر عبر عدة خطوات:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white">
                  المكتبة تبني طلباً HTTP
                </h5>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">
                    .from(&apos;todos&apos;)
                  </code>{" "}
                  و{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">
                    .select(&apos;*&apos;)
                  </code>{" "}
                  يبنيان URL مثل:
                </p>
                <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm font-mono mt-2 text-blue-600 dark:text-blue-400">
                  GET https://your-project.supabase.co/rest/v1/todos?select=*
                </code>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white">
                  PostgREST يستقبل الطلب
                </h5>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  خدمة PostgREST تعمل على خادم Supabase وتستقبل طلب HTTP
                  الموجه إلى <strong>REST API</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white">
                  PostgREST يحوّل لـ SQL
                </h5>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  يحوّل الطلب تلقائياً إلى استعلام SQL:
                </p>
                <CodeBlock
                  language="sql"
                  code={`SELECT * FROM todos;`}
                />
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white">
                  PostgreSQL ينفذ الاستعلام
                </h5>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  قاعدة البيانات تُرجع النتائج إلى PostgREST.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white">
                  PostgREST يُرجع JSON
                </h5>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  يحوّل النتائج إلى JSON ويرسلها كاستجابة HTTP:
                </p>
                <CodeBlock
                  language="json"
                  code={`[
  {
    "id": "a1b2c3d4-...",
    "title": "تعلم Supabase",
    "is_complete": false,
    "created_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": "e5f6g7h8-...",
    "title": "بناء مشروع حقيقي",
    "is_complete": true,
    "created_at": "2024-01-14T08:15:00Z"
  }
]`}
                />
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                6
              </div>
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white">
                  المكتبة تُرجع البيانات
                </h5>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">
                    @supabase/supabase-js
                  </code>{" "}
                  تحلل JSON وترجعه في كائن{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">
                    data
                  </code>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3">
              💡 النقطة المهمة
            </h4>
            <p className="text-blue-700 dark:text-blue-200 leading-relaxed">
              كل هذا يحدث في ثانية واحدة أو أقل! أنت لا تحتاج إلى كتابة كود
              backend — Supabase يتولى ذلك تلقائياً. هذا هو الجمال في منصة BaaS
              (Backend as a Service): تركز على بناء واجهة المستخدم بينما
              Supabase تدير الخادم وقاعدة البيانات.
            </p>
          </div>
        </LessonSection>

        {/* ==================== Section 10: ملخص + Quiz + Challenge + CheatSheet ==================== */}
        <LessonSection id="summary" title="ملخص الدرس">
          <div className="bg-gradient-to-l from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 mb-8">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-4">
              🎯 ماذا تعلمنا في هذا الدرس؟
            </h4>
            <ul className="space-y-3 text-blue-700 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>
                  Supabase هو بديل مفتوح المصدر لـ Firebase مبني على PostgreSQL
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>
                  PostgreSQL محبوبة لـ 4+ سنوات وتوفر ACID و Joins و
                  Foreign Keys
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>
                  المكونات الخمسة: Database, Auth, Storage, Realtime, Edge
                  Functions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>
                  مكتبة واحدة <code>@supabase/supabase-js</code> تخدم كل شيء
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>
                  الاستعلامات تتحول تلقائياً إلى SQL عبر PostgREST
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>
                  ممتاز للمشاريع الناشئة والتطبيقات الفورية وتجنب
                  vendor lock-in
                </span>
              </li>
            </ul>
          </div>

          {/* ==================== Quiz ==================== */}
          <div className="space-y-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              اختبر فهمك
            </h3>

            <Quiz
              question="ما هي قاعدة البيانات التي بُنيت عليها Supabase؟"
              options={[
                "MongoDB",
                "MySQL",
                "PostgreSQL",
                "SQLite",
              ]}
              correctAnswer={2}
              explanation="Supabase مبنية على PostgreSQL، وهي قاعدة بيانات علائقية مفتوح المصدر تُعتبر الأكثر مبيعاً للمطورين على مدار 4 سنوات متتالية."
            />

            <Quiz
              question="أي من المكونات التالية ليست جزءاً من Supabase؟"
              options={[
                "GoTrue (Auth)",
                "PostgREST (Database)",
                "Docker Hub (Storage)",
                "Edge Functions (Serverless)",
              ]}
              correctAnswer={2}
              explanation="Docker Hub هو خدمة تخزين صور Docker وليست جزءاً من Supabase. المكونات الخمسة هي: Database, Auth (GoTrue), Storage, Realtime, و Edge Functions."
            />

            <Quiz
              question="ماذا يحدث عندما تستدعي supabase.from('todos').select('*')؟"
              options={[
                "تُرسل طلب HTTP GET إلى PostgREST الذي يحوّله إلى SQL",
                "تتصل بـ Firebase مباشرة",
                "تُنشئ اتصال WebSocket مع قاعدة البيانات",
                "تستدعي دالة Edge Function معينة",
              ]}
              correctAnswer={0}
              explanation="الاستدعاء يبني طلباً HTTP GET إلى PostgREST، الذي يحوّله إلى استعلام SQL SELECT ويُرجع النتائج كـ JSON."
            />

            <Quiz
              question="ما هو الفارق الجوهري بين Supabase و Firebase من حيث ملكية البيانات؟"
              options={[
                "Supabase أسرع من Firebase",
                "Firebase مفتوح المصدر و Supabase مغلق",
                "مع Supabase تملك قاعدة بيانات PostgreSQL خاصة بك، مع Firebase البيانات على خوادم Google فقط",
                "Firebase يدعم SQL و Supabase لا يدعمه",
              ]}
              correctAnswer={2}
              explanation={`مع Supabase، لديك قاعدة بيانات PostgreSQL خاصة بك يمكنك تصديرها والانتقال بها لأي منصة أخرى. مع Firebase، بياناتك مقيدة بمنصة Google وصعب الانتقال منها.`}
            />
          </div>

          {/* ==================== Challenge ==================== */}
          <Challenge
            title="تحدي الدرس الأول: أول مشروع Supabase"
            description="الآن حان الوقت للتطبيق العملي! قم بالخطوات التالية:"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <p className="text-gray-700 dark:text-gray-300">
                  اذهب إلى{" "}
                  <a
                    href="https://supabase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    supabase.com
                  </a>{" "}
                  وأنشئ حساباً مجانياً
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <p className="text-gray-700 dark:text-gray-300">
                  أنشئ مشروع جديد واختر اسم فريد وregion قريب من المستخدمين
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <p className="text-gray-700 dark:text-gray-300">
                  افتح SQL Editor من لوحة التحكم وأنشئ جدول todos بالكود الذي
                  تعلمناه
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  4
                </span>
                <p className="text-gray-700 dark:text-gray-300">
                  انسخ URL المشروع و anon key من الإعدادات
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  5
                </span>
                <p className="text-gray-700 dark:text-gray-300">
                  في الـ Dashboard، افتح Table Editor وأضف بعض البيانات
                  يدوياً
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  6
                </span>
                <p className="text-gray-700 dark:text-gray-300">
                  افتح محرر الأكواد (CodeSandbox أو مشروع محلي) وشغّل أول
                  استعلام باستخدام{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">
                    supabase.from(&apos;todos&apos;).select(&apos;*&apos;)
                  </code>
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800 mt-4">
                <p className="text-green-700 dark:text-green-200 text-sm font-medium">
                  💡 نصيحة: تأكد من حفظ URL و anon key في متغيرات البيئة
                  (.env.local) ولا تشاركهما أبداً في كود مفتوح المصدر.
                </p>
              </div>
            </div>
          </Challenge>

          {/* ==================== CheatSheet ==================== */}
          <CheatSheet title="ملخص خدمات Supabase السريع">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <span className="text-xl">🗄️</span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    Database
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    PostgreSQL — جداول, views, RLS, stored procedures
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <span className="text-xl">🔐</span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    Auth
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    Email/Password, OAuth, Magic Links, MFA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <span className="text-xl">📁</span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    Storage
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    رفع/تحميل ملفات, CDN, تحويل الصور
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <span className="text-xl">⚡</span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    Realtime
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    WebSocket — تحديثات فورية, broadcast, presence
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <span className="text-xl">🚀</span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    Edge Functions
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    Deno serverless — منطق معقد في الخادم
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <span className="text-xl">📦</span>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    JS Client
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    <code className="text-xs">@supabase/supabase-js</code> —
                    مكتبة واحدة لكل شيء
                  </p>
                </div>
              </div>
            </div>
          </CheatSheet>
        </LessonSection>

        {/* ==================== Navigation ==================== */}
        <LessonNavigation
          prevLesson={lesson.prevLesson}
          prevStage={lesson.prevLessonStage}
          nextLesson={lesson.nextLesson}
          nextStage={lesson.nextLessonStage}
        />
      </div>
    </div>
  );
}
