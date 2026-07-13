import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function DatabaseDesign() {
  const lesson = getLessonBySlug("final-project", "03-database-design");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== مقدمة تصميم قاعدة البيانات ==================== */}
        <LessonSection id="intro-db" title="مقدمة في تصميم قاعدة البيانات">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في هذا الدرس سنتعلم كيف نصمم قاعدة البيانات لمدونتنا باستخدام Supabase. تصميم قاعدة البيانات الجيد هو أساس أي تطبيق ناجح.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            قاعدة البيانات هي المكان الذي نخزن فيه جميع البيانات: المقالات، المستخدمين، التصنيفات، التعليقات. يجب أن نخطط لها بعناية لضمان الأداء الجيد وسهولة الاستخدام.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h4 className="text-blue-800 dark:text-blue-300 font-bold text-lg mb-2">
              لماذا التصميم مهم؟
            </h4>
            <ul className="text-blue-700 dark:text-blue-400 space-y-2">
              <li>تصميم جيد = أداء أفضل و查詢 أسرع</li>
              <li>تصميم سيء = تكرار البيانات والأخطاء</li>
              <li>العلاقات الصحيحة تمنع تضارب البيانات</li>
              <li>RLS يحمي البيانات بشرط أن تكون الجداول مصممة بشكل صحيح</li>
            </ul>
          </div>
        </LessonSection>

        {/* ==================== الجداول المطلوبة ==================== */}
        <LessonSection id="required-tables" title="الجداول المطلوبة">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            لمدونتنا، نحتاج إلى 4 جداول رئيسية:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                profiles - ملفات المستخدمين
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                معلومات المستخدمين الإضافية مثل الاسم والصورة. مرتبط بجدول المستخدمين في Clerk.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                categories - التصنيفات
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                فئات المقالات مثل "تقنية"، "تصميم"، "تطوير". تساعد في تنظيم المحتوى.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                posts - المقالات
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                المقالات الرئيسية: العنوان والمحتوى والمؤلف والتصنيف.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                comments - التعليقات
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                تعليقات المستخدمين على المقالات. تفاعل المجتمع.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== إنشاء جدول profiles ==================== */}
        <LessonSection id="profiles-table" title="إنشاء جدول profiles">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            جدول profiles يخزن معلومات المستخدمين الإضافية. نستخدم Clerk للمصادقة، لكن نحتاج جدولاً خاصاً بنا لتخزين معلومات مثل الاسم المخصص والصورة.
          </p>

          <CodeBlock
            language="sql"
            code={`CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            شرح الأعمدة:
          </p>

          <div className="space-y-3 mb-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">id UUID PRIMARY KEY</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                المعرّف الفريد للمستخدم. مرتبط بجدول auth.users في Supabase Auth. عندما يسجل مستخدم جديد، ننشئ له صف تلقائياً في هذا الجدول.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">REFERENCES auth.users(id) ON DELETE CASCADE</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                مفتاح أجنبي يربط الجدول بجدول المستخدمين. <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">ON DELETE CASCADE</code> يعني أنه إذا حُذف المستخدم، يُحذف ملفه الشخصي تلقائياً.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">full_name TEXT</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                الاسم الكامل للمستخدم. اختياري (nullable) لأن المستخدم قد لا يرغب في إدخاله.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">avatar_url TEXT</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                رابط صورة المستخدم. يمكن أن يكون رابطاً خارجياً أو من Supabase Storage.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== إنشاء جدول categories ==================== */}
        <LessonSection id="categories-table" title="إنشاء جدول categories">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            جدول التصنيفات يسمح لنا بتنظيم المقالات في فئات مختلفة. هذا يسهّل البحث والتصفح.
          </p>

          <CodeBlock
            language="sql"
            code={`CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  color TEXT DEFAULT '#6366f1',
  created_at TIMESTAMPTZ DEFAULT NOW()
);`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            ملاحظات مهمة:
          </p>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">UNIQUE</code> على name و slug يضمن عدم تكرار التصنيفات</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">slug</code> يُستخدم في الروابط بدلاً من الاسم العربي</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">color</code> لون مخصص لكل تصنيف لتحسين المظهر</li>
          </ul>

          <CodeBlock
            language="sql"
            code={`-- إدراج بعض التصنيفات الأساسية
INSERT INTO categories (name, slug, description, color) VALUES
('تقنية', 'technology', 'مقالات عن التقنية والبرمجيات', '#3b82f6'),
('تصميم', 'design', 'مقالات عن تصميم واجهات المستخدم', '#ec4899'),
('تطوير', 'development', 'مقالات عن تطوير الويب', '#10b981'),
('مقالات عامة', 'general', 'مقالات متنوعة', '#6b7280');`}
          />
        </LessonSection>

        {/* ==================== إنشاء جدول posts ==================== */}
        <LessonSection id="posts-table" title="إنشاء جدول posts">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            جدول المقالات هو الجدول الرئيسي في مدونتنا. يحتوي على جميع معلومات المقال: العنوان والمحتوى والمؤلف والتصنيف.
          </p>

          <CodeBlock
            language="sql"
            code={`CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT,
  excerpt TEXT,
  cover_image TEXT,
  author_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            شرح الأعمدة الرئيسية:
          </p>

          <div className="space-y-3 mb-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">slug TEXT NOT NULL UNIQUE</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                الرابط المختصر للمقال. مثال: "my-first-post". يُستخدم في URL بدلاً من المعرّف.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">content TEXT</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                المحتوى الكامل للمقال. يمكن أن يكون نصاً عادياً أو HTML أو Markdown.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">excerpt TEXT</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                ملخص مختصر للمقال. يظهر في الصفحة الرئيسية ونتائج البحث.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">author_id UUID REFERENCES profiles(id)</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                معرّف المؤلف. مفتاح أجنبي يربط المقال بالمستخدم الذي كتبه.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">category_id UUID REFERENCES categories(id) ON DELETE SET NULL</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                معرّف التصنيف. <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">ON DELETE SET NULL</code> يعني أنه إذا حُذف التصنيف، يبقى المقال لكن يصبح بدون تصنيف.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">status TEXT CHECK (status IN ('draft', 'published'))</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                حالة المقال: مسودة (draft) أو منشور (published). يسمح للمؤلف بالعمل على المقال قبل نشره.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== إنشاء جدول comments ==================== */}
        <LessonSection id="comments-table" title="إنشاء جدول comments">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            جدول التعليقات يسمح للمستخدمين بالتفاعل مع المقالات. كل تعليق مرتبط بمقال ومستخدم.
          </p>

          <CodeBlock
            language="sql"
            code={`CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  author_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            ميزة مثيرة: التعليقات المتداخلة!
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h4 className="text-green-800 dark:text-green-300 font-bold text-lg mb-2">
              التعليقات المتداخلة (Nested Comments)
            </h4>
            <p className="text-green-700 dark:text-green-400 mb-2">
              الحقل <code className="bg-green-100 dark:bg-green-900/40 px-1 rounded">parent_id</code> يسمح ب oluştur تعليقات متداخلة. إذا كان parent_id فارغاً، thì التعليق في الأعلى. إذا أشر إلى تعليق آخر، thì هو رد عليه.
            </p>
            <div className="bg-green-100 dark:bg-green-900/30 rounded p-3 text-sm font-mono text-green-800 dark:text-green-300">
              <p>تعليق 1 (parent_id = null)</p>
              <p className="mr-4">└── رد 1 (parent_id = id تعليق 1)</p>
              <p className="mr-4">└── رد 2 (parent_id = id تعليق 1)</p>
              <p className="mr-8">└── رد على رد 1 (parent_id = id رد 1)</p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== العلاقات ==================== */}
        <LessonSection id="relationships" title="العلاقات بين الجداول">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            العلاقات هي ما يجعل قاعدة البيانات ذكية. بدلاً من تكرار البيانات في كل مكان، نربط الجداول ببعضها باستخدام المفاتيح الأجنبية (Foreign Keys).
          </p>

          <CodeBlock
            language="text"
            code={`# العلاقات بين جداول المدونة

profiles (1) ──── (∞) posts        # كل مستخدم لديه عدة مقالات
profiles (1) ──── (∞) comments     # كل مستخدم لديه عدة تعليقات
categories (1) ── (∞) posts        # كل تصنيف يحتوي على عدة مقالات
posts (1) ──────── (∞) comments    # كل مقال يحتوي على عدة تعليقات
comments (1) ──── (∞) comments     # كل تعليق يمكن أن يكون له عدة ردود`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            أنواع العلاقات:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">النوع</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">الشرح</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">مثال</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">One-to-Many</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">سجل واحد مرتبط بعدة سجلات</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">مستخدم واحد يكتب عدة مقالات</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">Many-to-One</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">عدة سجلات مرتبطة بسجل واحد</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">عدة مقالات تنتمي لتصنيف واحد</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">Self-Referencing</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">الجدول مرتبط بذاته</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">التعليقات متداخلة (رد على تعليق)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
            <h4 className="text-yellow-800 dark:text-yellow-300 font-bold text-lg mb-2">
              ON DELETE - ماذا يحدث عند الحذف؟
            </h4>
            <div className="text-yellow-700 dark:text-yellow-400 space-y-2 text-sm">
              <p><code className="bg-yellow-100 dark:bg-yellow-900/40 px-1 rounded">CASCADE</code> يحذف السجلات المرتبطة تلقائياً (حذف المستخدم يحذف مقالاته)</p>
              <p><code className="bg-yellow-100 dark:bg-yellow-900/40 px-1 rounded">SET NULL</code> يضع القيمة فارغة (حذف التصنيف يترك المقال بدون تصنيف)</p>
              <p><code className="bg-yellow-100 dark:bg-yellow-900/40 px-1 rounded">RESTRICT</code> يمنع الحذف إذا كانت هناك سجلات مرتبطة</p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== RLS ==================== */}
        <LessonSection id="rls-policies" title="سياسات RLS للأمان">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Row Level Security (RLS) هو نظام الأمان في Supabase الذي يحمي بياناتك على مستوى الصفوف. يجب تفعيله على كل جدول وكتابة سياسات لتحديد من يمكنه الوصول للبيانات.
          </p>

          <CodeBlock
            language="sql"
            code={`-- تفعيل RLS على جميع الجداول
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;`}
          />

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">
            سياسات profiles
          </h3>

          <CodeBlock
            language="sql"
            code={`-- أي شخص يمكنه رؤية الملفات العامة
CREATE POLICY "Public profiles are viewable"
ON profiles FOR SELECT USING (true);

-- المستخدمون يحدّثون ملفهم الشخصي فقط
CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE USING (auth.uid() = id);`}
          />

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">
            سياسات categories
          </h3>

          <CodeBlock
            language="sql"
            code={`-- أي شخص يمكنه رؤية التصنيفات
CREATE POLICY "Categories are viewable"
ON categories FOR SELECT USING (true);`}
          />

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">
            سياسات posts
          </h3>

          <CodeBlock
            language="sql"
            code={`-- أي شخص يرى المنشورات المنشورة
CREATE POLICY "Published posts are viewable"
ON posts FOR SELECT USING (status = 'published');

-- المؤلفون يرون مسوداتهم أيضاً
CREATE POLICY "Authors can view own drafts"
ON posts FOR SELECT USING (auth.uid() = author_id);

-- المستخدمون المسجلون ينشئون منشورات
CREATE POLICY "Authenticated users can create posts"
ON posts FOR INSERT WITH CHECK (auth.uid() = author_id);

-- المؤلفون يعدلون منشوراتهم فقط
CREATE POLICY "Authors can update own posts"
ON posts FOR UPDATE USING (auth.uid() = author_id);

-- المؤلفون يحذفون منشوراتهم فقط
CREATE POLICY "Authors can delete own posts"
ON posts FOR DELETE USING (auth.uid() = author_id);`}
          />

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">
            سياسات comments
          </h3>

          <CodeBlock
            language="sql"
            code={`-- أي شخص يرى التعليقات
CREATE POLICY "Comments are viewable"
ON comments FOR SELECT USING (true);

-- المستخدمون المسجلون ينشئون تعليقات
CREATE POLICY "Authenticated users can create comments"
ON comments FOR INSERT WITH CHECK (auth.uid() = author_id);

-- المؤلفون يعدلون تعليقاتهم فقط
CREATE POLICY "Authors can update own comments"
ON comments FOR UPDATE USING (auth.uid() = author_id);

-- المؤلفون يحذفون تعليقاتهم فقط
CREATE POLICY "Authors can delete own comments"
ON comments FOR DELETE USING (auth.uid() = author_id);`}
          />
        </LessonSection>

        {/* ==================== Views ==================== */}
        <LessonSection id="database-views" title="تحسين الكود: استخدام Views للاستعلامات المعقدة">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Views هي استعلامات SQL محفوظة تبدو كجدول. يمكن استخدامها لتبسيط الاستعلامات المعقدة وتحسين الأداء.
          </p>

          <CodeBlock
            language="sql"
            code={`-- View لعرض المقالات مع معلومات المؤلف والتصنيف
CREATE VIEW post_details AS
SELECT
  posts.id,
  posts.title,
  posts.slug,
  posts.excerpt,
  posts.cover_image,
  posts.status,
  posts.published_at,
  posts.created_at,
  profiles.full_name AS author_name,
  profiles.avatar_url AS author_avatar,
  categories.name AS category_name,
  categories.slug AS category_slug,
  categories.color AS category_color
FROM posts
LEFT JOIN profiles ON posts.author_id = profiles.id
LEFT JOIN categories ON posts.category_id = categories.id;`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            الآن يمكننا استخدام الـ View في الكود بدلاً من كتابة الـ Join في كل مرة:
          </p>

          <CodeBlock
            language="javascript"
            code={`// بدلاً من كتابة JOIN في كل مرة
const { data } = await supabase
  .from('post_details')  // نستخدم الـ View
  .select('*')
  .eq('status', 'published')
  .order('published_at', { ascending: false });`}
          />

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h4 className="text-green-800 dark:text-green-300 font-bold text-lg mb-2">
              مزايا استخدام Views
            </h4>
            <ul className="text-green-700 dark:text-green-400 space-y-2">
              <li>تبسيط الكود: لا حاجة لكتابة JOIN في كل مرة</li>
              <li>تحسين الأداء: PostgreSQL يخزن نتائج الـ View مؤقتاً</li>
              <li>ال bảo mật: يمكنك التحكم في ما يظهر في الـ View</li>
              <li>سهولة الصيانة: إذا تغير بنية الجداول، نعدّل الـ View مرة واحدة فقط</li>
            </ul>
          </div>
        </LessonSection>

        {/* ==================== SQL الكامل ==================== */}
        <LessonSection id="full-schema" title="الكود الكامل لقاعدة البيانات">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            إليك الكود الكامل لإنشاء جميع جداول وسياسات الأمان. يمكنك نسخه ولصقه مباشرة في SQL Editor في Supabase Dashboard:
          </p>

          <CodeBlock
            language="sql"
            code={`-- ==========================================
-- مشروع المدونة - تصميم قاعدة البيانات
-- ==========================================

-- 1. جدول profiles
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. جدول categories
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  color TEXT DEFAULT '#6366f1',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. جدول posts
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT,
  excerpt TEXT,
  cover_image TEXT,
  author_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. جدول comments
CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  author_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- تفعيل RLS
-- ==========================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- ==========================================
-- سياسات الأمان
-- ==========================================

-- profiles
CREATE POLICY "Public profiles are viewable"
ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE USING (auth.uid() = id);

-- categories
CREATE POLICY "Categories are viewable"
ON categories FOR SELECT USING (true);

-- posts
CREATE POLICY "Published posts are viewable"
ON posts FOR SELECT USING (status = 'published');
CREATE POLICY "Authors can view own drafts"
ON posts FOR SELECT USING (auth.uid() = author_id);
CREATE POLICY "Authenticated users can create posts"
ON posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors can update own posts"
ON posts FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Authors can delete own posts"
ON posts FOR DELETE USING (auth.uid() = author_id);

-- comments
CREATE POLICY "Comments are viewable"
ON comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create comments"
ON comments FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors can update own comments"
ON comments FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Authors can delete own comments"
ON comments FOR DELETE USING (auth.uid() = author_id);

-- ==========================================
-- بيانات تجريبية
-- ==========================================
INSERT INTO categories (name, slug, description, color) VALUES
('تقنية', 'technology', 'مقالات عن التقنية والبرمجيات', '#3b82f6'),
('تصميم', 'design', 'مقالات عن تصميم واجهات المستخدم', '#ec4899'),
('تطوير', 'development', 'مقالات عن تطوير الويب', '#10b981'),
('مقالات عامة', 'general', 'مقالات متنوعة', '#6b7280');`}
          />
        </LessonSection>

        {/* ==================== تدريب ==================== */}
        <Quiz
          question="ماذا يحدث عند حذف تصنيف يحتوي على مقالات إذا كان ON DELETE = SET NULL؟"
          options={[
            "يُحذف جميع المقالات المرتبطة بالتصنيف",
            "يمنع الحذف ويظهر خطأ",
            "تبقى المقالات لكن بدون تصنيف",
            "يُنشئ تصنيفاً جديداً تلقائياً"
          ]}
          correctAnswer={2}
          explanation="عند استخدام ON DELETE SET NULL، إذا حُذف التصنيف، تصبح قيمة category_id في المقالات فارغة (NULL). هذا يحافظ على المقالات مع السماح بحذف التصنيف."
        />

        <Challenge title="تحدي التصميم: أضف جدول جديد">
          <p className="mb-4">
            حاول إضافة جدول <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">likes</code> يسمح للمستخدمين بالإعجاب بالمنشورات. يجب أن يحتوي على:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>معرّف فريد (id)</li>
            <li>معرّف المقال (post_id)</li>
            <li>معرّف المستخدم (user_id)</li>
            <li>تاريخ الإعجاب (created_at)</li>
          </ol>
          <p className="mb-2">التعليمات:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
            <li>اكتب أمر CREATE TABLE المناسب</li>
            <li>أضف UNIQUE constraint على (post_id, user_id) لمنع التكرار</li>
            <li>اكتب سياسات RLS المناسبة</li>
          </ul>
        </Challenge>

        <CheatSheet title="ملخص سريع لتصميم قاعدة البيانات">
          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">الجداول الأساسية</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">profiles, categories, posts, comments</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">أنواع العلاقات</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">One-to-Many (الأساسي) و Self-Referencing (للتعليقات المتداخلة)</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">خيارات ON DELETE</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">CASCADE (حذف مرافق)، SET NULL (ترك فارغ)، RESTRICT (منع الحذف)</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">لا تنسَ</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">تفعيل RLS على كل جدول وكتابة السياسات المناسبة</p>
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
