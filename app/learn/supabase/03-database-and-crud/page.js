import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function DatabaseAndCRUD() {
  const lesson = getLessonBySlug("supabase", "03-database-and-crud");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== المقدمة ==================== */}
        <LessonSection id="introduction" title="مقدمة في قواعد البيانات مع Supabase">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في هذا الدرس سنتعلم كيف نتعامل مع قاعدة البيانات في Supabase. سنغطي
            كامل عمليات CRUD: الإدراج (Create)، القراءة (Read)، التحديث (Update)،
            والحذف (Delete). كما سنتعلم الفلترة المتقدمة والترقيم (Pagination).
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Supabase يستخدم <strong>PostgreSQL</strong> كقاعدة بيانات أساسية، ويوفّر
            واجهة برمجية تعتمد على <strong>PostgREST</strong> لتوليد الاستعلامات
            تلقائياً. هذا يعني أنك لا تحتاج لكتابة SQL مباشرة في أغلب الأحيان!
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
            <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">
              ما الذي ستتعلمه في هذا الدرس:
            </p>
            <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
              <li>إنشاء جداول جديدة باستخدام SQL</li>
              <li>استخدام Dashboard لإدارة قاعدة البيانات</li>
              <li>عمليات CRUD الكاملة (INSERT, SELECT, UPDATE, DELETE)</li>
              <li>الفلترة المتقدمة والتسلسلات البريدية</li>
              <li>بناء API Route عملي</li>
            </ul>
          </div>
        </LessonSection>

        {/* ==================== القسم 1: إنشاء جدول جديد ==================== */}
        <LessonSection id="create-table" title="إنشاء جدول جديد">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            أول خطوة هي إنشاء جدول في قاعدة البيانات. في Supabase يمكنك استخدام
            <strong> SQL Editor</strong> الموجودة في Dashboard لكتابة أمر CREATE TABLE
            مباشرة. سننشئ جدول <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">posts</code> كمثال.
          </p>

          <CodeBlock
            language="sql"
            code={`CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  author_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            دعنا نشرح كل جزء من هذا الكود:
          </p>

          <div className="space-y-3 mb-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">UUID</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                نوع بيانات فريد عالمياً. كل صف يحصل على معرّف فريد تلقائياً
                باستخدام <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">gen_random_uuid()</code>.
                هذا أفضل من استخدام SERIAL أو INTEGER لأنه لا يكشف عدد الصفوف.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">TEXT NOT NULL</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                نص لا يمكن أن يكون فارغاً. العنوان مطلوب لكل منشور.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">REFERENCES auth.users(id)</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                مفتاح أجنبي يربط الجدول بجدول المستخدمين في Supabase Auth.
                هذا يضمن أن كل منشور ينتمي لمستخدم موجود.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">TIMESTAMPTZ DEFAULT NOW()</code>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                تاريخ ووقت مع دعم المنطقة الزمنية (Timezone). <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">TIMESTAMPTZ</code>
                هو الأفضل لتخزين التوقيت لأنه يتعامل مع فروق المنطقة الزمنية تلقائياً.
                القيمة الافتراضية هي الوقت الحالي عند الإدراج.
              </p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong>مهم جداً:</strong> يجب تفعيل Row Level Security (RLS) على كل
            جدول لحماية بياناتك. بدون RLS، سيكون بإمكان أي شخص الوصول لبياناتك!
          </p>

          <CodeBlock
            language="sql"
            code={`-- Enable RLS on the posts table
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            بعد تفعيل RLS، تحتاج لإنشاء سياسات (Policies) تحدد من يمكنه القراءة
            والكتابة. على سبيل المثال:
          </p>

          <CodeBlock
            language="sql"
            code={`-- Anyone can read published posts
CREATE POLICY "Public read access" ON posts
  FOR SELECT USING (true);

-- Only authenticated users can insert
CREATE POLICY "Authenticated insert" ON posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Only the author can update their own posts
CREATE POLICY "Author update" ON posts
  FOR UPDATE USING (auth.uid() = author_id);

-- Only the author can delete their own posts
CREATE POLICY "Author delete" ON posts
  FOR DELETE USING (auth.uid() = author_id);`}
          />

          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
            <p className="text-yellow-800 dark:text-yellow-200 font-semibold">
              تحذير: لا تنسَ تفعيل RLS!
            </p>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
              بدون Row Level Security، سيمكن لأي شخص مع رابط المشروع الوصول
              لجميع البيانات في جدولك. تفعيل RLS هو الخطوة الأهم في حماية
              تطبيقك.
            </p>
          </div>
        </LessonSection>

        {/* ==================== القسم 2: قواعد البيانات في Dashboard ==================== */}
        <LessonSection id="dashboard" title="قواعد البيانات في Dashboard">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            يوفر Supabase Dashboard واجهتين رئيسيتين لإدارة قاعدة البيانات:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="text-green-500">📊</span> Table Editor
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                واجهة بصرية تشبه Excel. يمكنك من خلالها عرض البيانات، إضافة صفوف
                جديدة، تعديل القيم، والحذف — كل ذلك بدون كتابة أي كود!
                ممتاز للمبتدئين وللتحقق من البيانات بسرعة.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="text-blue-500">⚡</span> SQL Editor
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                محرر SQL كامل. يمكنك كتابة استعلامات معقدة، إنشاء جداول،
                تعديل الهيكل (Schema)، وإنشاء الدوال. الأداة الأساسية
                للمطورين المتقدمين.
              </p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في Table Editor، يمكنك رؤية جميع جداولك في الشريط الجانبي. عند النقر
            على أي جدول، تظهر جميع صفوفه كجدول. يمكنك:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
            <li>إضافة عمود جديد بالنقر على علامة + بجانب الأعمدة</li>
            <li>تعديل خصائص العمود (النوع، القيمة الافتراضية، المفتاح الرئيسي)</li>
            <li>إضافة بيانات مباشرة بالنقر على زر Insert Row</li>
            <li>تعديل أي خلية بالنقر المزدج عليها</li>
            <li>حذف صفوف بالتحديد ثم الضغط على Delete</li>
            <li>إنشاء علاقات بين الجداول من تبويب Relationships</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في SQL Editor، يمكنك كتابة أي استعلام PostgreSQL صالح. ميزة رائعة
            هي أن Supabase يوفّر استعلامات جاهزة يمكنك تعديلها:
          </p>

          <CodeBlock
            language="sql"
            code={`-- Supabase provides quick templates in SQL Editor
-- Example: Create a new table with RLS
CREATE TABLE todos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  task TEXT NOT NULL,
  is_complete BOOLEAN DEFAULT FALSE,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage their own todos" ON todos
  FOR ALL USING (auth.uid() = user_id);`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            كما يمكنك استخدام <strong>Database</strong> tab في Dashboard لرؤية
            الإحصائيات: حجم قاعدة البيانات، عدد الاتصالات النشطة، استعلامات
            بطيئة، وغيرها.
          </p>
        </LessonSection>

        {/* ==================== القسم 3: الاستعلام - SELECT ==================== */}
        <LessonSection id="select" title="الاستعلام - SELECT">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            عملية القراءة (Read) هي الأساس. في Supabase، نستخدم دالة
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.select()</code>
            على الكائن الناتج من <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.from()</code>.
            هذا يعتمد على <strong>PostgREST</strong> وليس SQL مباشرة!
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            جلب جميع البيانات:
          </h4>
          <CodeBlock
            language="typescript"
            code={`const { data, error } = await supabase
  .from('posts')
  .select('*')`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            هذا يعادل استعلام SQL: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">SELECT * FROM posts</code>.
            ستحصل على مصفوفة (array) من جميع صفوف الجدول.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            جلب أعمدة محددة:
          </h4>
          <CodeBlock
            language="typescript"
            code={`const { data, error } = await supabase
  .from('posts')
  .select('id, title, created_at')`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            بدلاً من <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">*</code>،
            نحدد الأعمدة المطلوبة. هذا يحسّن الأداء لأنه لا يجلب بيانات زائدة.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            جلب مع علاقات (Relations / Joins):
          </h4>
          <CodeBlock
            language="typescript"
            code={`const { data, error } = await supabase
  .from('posts')
  .select('*, author:author_id(name, avatar)')`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            هنا نطلب جميع أعمدة المنشور (<code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">*</code>)
            بالإضافة لاسم وصورة المؤلف. الصيغة
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">author:author_id(name, avatar)</code>
            تعني: اذهب لجدول المستخدمين عبر العمود <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">author_id</code>
            وأحضر فقط <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">name</code> و
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">avatar</code>.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            علاقات متعددة (Nested Relations):
          </h4>
          <CodeBlock
            language="typescript"
            code={`const { data, error } = await supabase
  .from('posts')
  .select('title, content, author:author_id(name, avatar), comments(id, text, user:user_id(name))')`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            يمكنك تضمين علاقات متعددة في استعلام واحد. هنا نجلب المنشور مع
            معلومات المؤلف وجميع التعليقات مع أسماء المعلقين.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            جلب صفاً واحداً:
          </h4>
          <CodeBlock
            language="typescript"
            code={`// جلب صف واحد فقط (يجب أن يوجد)
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('id', 'some-uuid')
  .single()

// جلب صف واحد إن وجد (قد يكون null)
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('id', 'some-uuid')
  .maybeSingle()`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">.single()</code>
            يُرجع صفاً واحداً بدلاً من مصفوفة. إذا لم توجد نتائج، يُرجع خطأ.
            أما <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">.maybeSingle()</code>
            فيُرجع null بدلاً من الخطأ إذا لم توجد نتائج.
          </p>

          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-green-800 dark:text-green-200 font-semibold mb-2">
              ملاحظة مهمة: PostgREST وليس SQL
            </p>
            <p className="text-green-700 dark:text-green-300 text-sm">
              استعلامات Supabase تبدو مشابهة لـ SQL لكنها مختلفة! كلما استخدمت
              <code className="bg-green-100 dark:bg-green-800 px-1 rounded">.from()</code> و
              <code className="bg-green-100 dark:bg-green-800 px-1 rounded">.select()</code>،
              يتم ترجمتها تلقائياً إلى استعلام PostgREST.
              لا يمكنك كتابة SQL حر في سلاسل الاستعلام هذه.
            </p>
          </div>
        </LessonSection>

        {/* ==================== القسم 4: الإدراج - INSERT ==================== */}
        <LessonSection id="insert" title="الإدراج - INSERT">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            عملية الإدراج (Create) تتم باستخدام دالة
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.insert()</code>.
            يمكنك إدراج صف واحد أو عدة صفوف في استعلام واحد.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            إدراج صف واحد:
          </h4>
          <CodeBlock
            language="typescript"
            code={`const { data, error } = await supabase
  .from('posts')
  .insert({ title: 'مرحباً بالعالم', content: 'هذا أول منشور لي' })`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
           .createObject يمثل صفوف الجدول. الأعمدة التي ليس لها قيم ستستخدم
            القيمة الافتراضية (مثل <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">id</code> و
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">created_at</code>).
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            إدراج عدة صفوف:
          </h4>
          <CodeBlock
            language="typescript"
            code={`const { data, error } = await supabase
  .from('posts')
  .insert([
    { title: 'المنشور الأول', content: 'محتوى المنشور الأول' },
    { title: 'المنشور الثاني', content: 'محتوى المنشور الثاني' },
    { title: 'المنشور الثالث', content: 'محتوى المنشور الثالث' },
  ])`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            بمجرد تمرير مصفوفة (array) لدالة
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.insert()</code>،
            سيقوم Supabase بإدراج جميع الصفوف في طلب واحد.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            الإدراج وإرجاع البيانات:
          </h4>
          <CodeBlock
            language="typescript"
            code={`const { data, error } = await supabase
  .from('posts')
  .insert({ title: 'منشور جديد' })
  .select()`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            انتبه! بدون
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.select()</code> في
            النهاية، لن تحصل على البيانات المُدرجة في
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">data</code>.
            أضف
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.select()</code> إذا
            أردت رؤية البيانات بعد الإدراج.
          </p>

          <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
            <p className="text-purple-800 dark:text-purple-200 font-semibold mb-2">
              نصيحة: جلب البيانات المُدرجة
            </p>
            <p className="text-purple-700 dark:text-purple-300 text-sm">
              يمكنك تحديد الأعمدة المُدرجة فقط:
              <code className="bg-purple-100 dark:bg-purple-800 px-1 rounded">.select('id, title, created_at')</code>.
              هذا مفيد عندما تريد الحصول على معرّف الصف الجديد أو
              القيمة المحسوبة.
            </p>
          </div>
        </LessonSection>

        {/* ==================== القسم 5: التحديث - UPDATE ==================== */}
        <LessonSection id="update" title="التحديث - UPDATE">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            عملية التحديث (Update) تتم باستخدام
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.update()</code>
            مع فلتر
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.eq()</code> لتحديد
            أي صف تريد تعديله.
          </p>

          <CodeBlock
            language="typescript"
            code={`const { data, error } = await supabase
  .from('posts')
  .update({ title: 'العنوان المُحدّث' })
  .eq('id', 'some-uuid-here')`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            هنا نحدّث عنوان منشور محدد باستخدام معرّفه الـ UUID.
            الكائن الممرر لـ <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">.update()</code>
            يحتوي على الأعمدة والقيم الجديدة.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            تحديث عدة حقول في نفس الوقت:
          </h4>
          <CodeBlock
            language="typescript"
            code={`const { data, error } = await supabase
  .from('posts')
  .update({ 
    title: 'عنوان جديد',
    content: 'محتوى جديد بالكامل'
  })
  .eq('id', 'some-uuid')`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            التحديث وإرجاع البيانات:
          </h4>
          <CodeBlock
            language="typescript"
            code={`const { data, error } = await supabase
  .from('posts')
  .update({ title: 'عنوان محدث' })
  .eq('id', 'some-uuid')
  .select()`}
          />

          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
            <p className="text-red-800 dark:text-red-200 font-semibold mb-2">
              تحذير خطير: استخدم الفلتر دائماً!
            </p>
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              إذا نسيت استخدام
              <code className="bg-red-100 dark:bg-red-800 px-1 rounded">.eq()</code> أو أي
              فلتر آخر، سيُحدّث Supabase <strong>جميع صفوف الجدول</strong>!
              تأكد دائماً من وجود فلتر قبل
              <code className="bg-red-100 dark:bg-red-800 px-1 rounded">.update()</code> أو
              <code className="bg-red-100 dark:bg-red-800 px-1 rounded">.delete()</code>.
            </p>
          </div>
        </LessonSection>

        {/* ==================== القسم 6: الحذف - DELETE ==================== */}
        <LessonSection id="delete" title="الحذف - DELETE">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            عملية الحذف (Delete) تتم باستخدام
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.delete()</code>
            مع فلتر لتحديد العنصر المطلوب حذفه.
          </p>

          <CodeBlock
            language="typescript"
            code={`const { error } = await supabase
  .from('posts')
  .delete()
  .eq('id', 'some-uuid-here')`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            لاحظ أننا لا نطلب <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">data</code> هنا
            لأن عملية الحذف لا تُرجع بيانات — فقط رسالة خطأ إذا فشلت.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            حذف بناءً على شروط متعددة:
          </h4>
          <CodeBlock
            language="typescript"
            code={`// حذف جميع المنشورات غير المنشورة
const { error } = await supabase
  .from('posts')
  .delete()
  .eq('status', 'draft')

// حذف منشورات مستخدم محدد
const { error } = await supabase
  .from('posts')
  .delete()
  .eq('author_id', 'user-uuid')`}
          />

          <div className="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mt-4">
            <p className="text-orange-800 dark:text-orange-200 font-semibold mb-2">
              نصيحة: الحذف الناعم (Soft Delete)
            </p>
            <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">
              بدلاً من الحذف الفعلي للبيانات، يمكنك استخدام الحذف الناعم بإضافة
              عمود <code className="bg-orange-100 dark:bg-orange-800 px-1 rounded">deleted_at TIMESTAMPTZ</code>.
              عند الحذف، تُضبط هذه القيمة على الوقت الحالي بدلاً من حذف الصف.
              يمكنك لاحقاً فلترة البيانات غير المحذوفة باستخدام
              <code className="bg-orange-100 dark:bg-orange-800 px-1 rounded">.is('deleted_at', null)</code>.
            </p>
          </div>
        </LessonSection>

        {/* ==================== القسم 7: الفلترة المتقدمة ==================== */}
        <LessonSection id="advanced-filtering" title="الفلترة المتقدمة">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Supabase يوفر مجموعة غنية من دوال الفلترة التي يمكنك استخدامها
            مع <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.select()</code>,
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.update()</code>,
            و <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.delete()</code>.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            مقارنات أساسية:
          </h4>
          <CodeBlock
            language="typescript"
            code={`// يساوي
.eq('column', value)

// لا يساوي
.neq('column', value)

// أكبر من
.gt('column', value)

// أصغر من
.lt('column', value)

// أكبر من أو يساوي
.gte('column', value)

// أصغر من أو يساوي
.lte('column', value)`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            أمثلة عملية:
          </p>

          <CodeBlock
            language="typescript"
            code={`// جلب المنشورات التي لها أكثر من 10 تعليقات
const { data, error } = await supabase
  .from('posts')
  .select('*, comments(count)')
  .gt('comments_count', 10)

// جلب المنشورات من آخر أسبوع
const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .gte('created_at', oneWeekAgo)`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            فلترcontains (المحتويات):
          </h4>
          <CodeBlock
            language="typescript"
            code={`// جلب المنشورات التي تحتوي tag محدد
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .contains('tags', ['javascript'])`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            فلتر in (ضمن مجموعة):
          </h4>
          <CodeBlock
            language="typescript"
            code={`// جلب المنشورات التي حالتها published أو draft
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .in('status', ['published', 'draft'])`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            فلتر or (أو المنطقية):
          </h4>
          <CodeBlock
            language="typescript"
            code={`// جلب المنشورات التي عنوانها Hello أو محتواها يحتوي على world
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .or('title.eq.Hello,content.ilike.%world%')`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            لاحظ صيغة فلتر <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">or</code>:
            كل شرط يبدأ باسم العمود، ثم نقطة، ثم نوع الفلتر، ثم القيمة.
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">ilike</code>
            تعني بحث غير حساس لحالة الأحرف مع دعم <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">%</code>
            كعلامة أحرف عامة.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            فلتر is (للقيم المفقودة):
          </h4>
          <CodeBlock
            language="typescript"
            code={`// جلب المنشورات التي لم تُحذف
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .is('deleted_at', null)`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            البحث النصي الكامل (Full Text Search):
          </h4>
          <CodeBlock
            language="typescript"
            code={`// البحث في محتوى المنشورات
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .textSearch('content', 'learning javascript')`}
          />

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-4">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              جدول مرجعي لدوات الفلترة:
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">الفلتر</th>
                    <th className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">الوظيفة</th>
                    <th className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">مثال</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 px-3 font-mono text-purple-600 dark:text-purple-400">.eq()</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">يساوي</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">.eq(&apos;status&apos;, &apos;active&apos;)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 px-3 font-mono text-purple-600 dark:text-purple-400">.neq()</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">لا يساوي</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">.neq(&apos;status&apos;, &apos;deleted&apos;)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 px-3 font-mono text-purple-600 dark:text-purple-400">.gt()</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">أكبر من</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">.gt(&apos;likes&apos;, 10)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 px-3 font-mono text-purple-600 dark:text-purple-400">.lt()</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">أصغر من</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">.lt(&apos;price&apos;, 100)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 px-3 font-mono text-purple-600 dark:text-purple-400">.gte()</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">أكبر أو يساوي</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">.gte(&apos;rating&apos;, 4)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 px-3 font-mono text-purple-600 dark:text-purple-400">.lte()</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">أصغر أو يساوي</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">.lte(&apos;stock&apos;, 5)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 px-3 font-mono text-purple-600 dark:text-purple-400">.in()</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">ضمن مجموعة</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">.in(&apos;status&apos;, [&apos;a&apos;, &apos;b&apos;])</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 px-3 font-mono text-purple-600 dark:text-purple-400">.contains()</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">يحتوي</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">.contains(&apos;tags&apos;, [&apos;js&apos;])</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-mono text-purple-600 dark:text-purple-400">.is()</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">يساوي null</td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">.is(&apos;deleted_at&apos;, null)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </LessonSection>

        {/* ==================== القسم 8: الترتيب والترقيم ==================== */}
        <LessonSection id="ordering-pagination" title="الترتيب والترقيم">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            يمكنك ترتيب النتائج وتقسيمها إلى صفحات باستخدام
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.order()</code> و
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">.range()</code>.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            الترتيب:
          </h4>
          <CodeBlock
            language="typescript"
            code={`// ترتيب تصاعدي (من الأقدم للأحدث)
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: true })

// ترتيب تنازلي (من الأحدث للأقدم)
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })

// ترتيب بعدة أعمدة
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .order('pinned', { ascending: false })
  .order('created_at', { ascending: false })`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            الترقيم (Pagination):
          </h4>
          <CodeBlock
            language="typescript"
            code={`// الصفحة الأولى: أول 10 عناصر
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })
  .range(0, 9)

// الصفحة الثانية: العناصر 11-20
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })
  .range(10, 19)

// الصفحة الثالثة: العناصر 21-30
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })
  .range(20, 29)`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            لاحظ أن <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">range(0, 9)</code>
            تعني الصفوف من 0 إلى 9 (10 صفوف). الفهرسة تبدأ من 0 وليس 1.
            الصيغة العامة: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">range(البداية, النهاية)</code>
            حيث النهاية <strong>شاملة</strong>.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            الترقيم بناءً على الصفحة:
          </h4>
          <CodeBlock
            language="typescript"
            code={`function getPaginationRange(page: number, perPage: number = 10) {
  const from = (page - 1) * perPage
  const to = from + perPage - 1
  return { from, to }
}

// استخدام
const page = 2
const { from, to } = getPaginationRange(page, 10)

const { data, error } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })
  .range(from, to)`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            تحديد عدد النتائج:
          </h4>
          <CodeBlock
            language="typescript"
            code={`// جلب أحدث 5 منشورات فقط
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })
  .limit(5)`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            عدّ النتائج (Count):
          </h4>
          <CodeBlock
            language="typescript"
            code={`// جلب المنشورات مع عدّها
const { data, error, count } = await supabase
  .from('posts')
  .select('*', { count: 'exact', head: false })

// عدّ فقط بدون جلب البيانات
const { count, error } = await supabase
  .from('posts')
  .select('*', { count: 'exact', head: true })`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-3">
            خيار <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">count: &apos;exact&apos;</code>
            يُرجع العدد الفعلي للنتائج. خيار
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">head: true</code>
            يمنع جلب البيانات ويعيد العدد فقط — مفيد لتحسين الأداء.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">
              نصيحة: الترقيم المجمّع (Cursor-based Pagination)
            </p>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              للتطبيقات الكبيرة، الترقيم المجمّع باستخدام مؤشر (cursor) أفضل
              من الترقيم المبني على الصفحة. يمكنك استخدام
              <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">.gt(&apos;id&apos;, &apos;last-id&apos;)</code>
              بدلاً من <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">.range()</code> للحصول
              على أداء أفضل مع مجموعات بيانات ضخمة.
            </p>
          </div>
        </LessonSection>

        {/* ==================== القسم 9: مثال عملي — API Route ==================== */}
        <LessonSection id="practical-example" title="مثال عملي — API Route">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            لن把这些 المفاهيم في مثال عملي. سنقوم بإنشاء API Route في Next.js
            يوفر نقاط نهاية (endpoints) لإدارة المنشورات.
          </p>

          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            ملف الإعداد (Server Client):
          </h4>
          <CodeBlock
            language="typescript"
            code={`// utils/supabase/server.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {}
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {}
        },
      },
    }
  )
}`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3 mt-6">
            نقطة نهاية GET — جلب المنشورات:
          </h4>
          <CodeBlock
            language="typescript"
            code={`// app/api/posts/route.ts
import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const supabase = await createClient()
  
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  
  const from = (page - 1) * limit
  const to = from + limit - 1

  const { data, error, count } = await supabase
    .from('posts')
    .select('*, author:author_id(name, avatar)', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }

  return NextResponse.json({
    data,
    pagination: {
      page,
      limit,
      total: count,
      totalPages: count ? Math.ceil(count / limit) : 0,
    },
  })
}`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3 mt-6">
            نقطة نهاية POST — إنشاء منشور:
          </h4>
          <CodeBlock
            language="typescript"
            code={`// app/api/posts/route.ts (إضافة)
import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const supabase = await createClient()

  // التحقق من هوية المستخدم
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json(
      { error: 'غير مصرح لك بإنشاء منشور' },
      { status: 401 }
    )
  }

  const body = await request.json()

  // التحقق من البيانات المطلوبة
  if (!body.title || body.title.trim() === '') {
    return NextResponse.json(
      { error: 'العنوان مطلوب' },
      { status: 400 }
    )
  }

  const { data, error } = await supabase
    .from('posts')
    .insert({
      title: body.title,
      content: body.content || '',
      author_id: user.id,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }

  return NextResponse.json(data, { status: 201 })
}`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3 mt-6">
            نقطة نهاية PUT — تحديث منشور:
          </h4>
          <CodeBlock
            language="typescript"
            code={`// app/api/posts/[id]/route.ts
import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

type RouteContext = {
  params: Promise<{ id: string }>
}

export async function PUT(request: Request, { params }: RouteContext) {
  const { id } = await params
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json(
      { error: 'غير مصرح لك بتعديل هذا المنشور' },
      { status: 401 }
    )
  }

  const body = await request.json()

  const { data, error } = await supabase
    .from('posts')
    .update({
      title: body.title,
      content: body.content,
    })
    .eq('id', id)
    .eq('author_id', user.id)
    .select()
    .single()

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }

  return NextResponse.json(data)
}`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3 mt-6">
            نقطة نهاية DELETE — حذف منشور:
          </h4>
          <CodeBlock
            language="typescript"
            code={`// app/api/posts/[id]/route.ts (إضافة)
export async function DELETE(request: Request, { params }: RouteContext) {
  const { id } = await params
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json(
      { error: 'غير مصرح لك بحذف هذا المنشور' },
      { status: 401 }
    )
  }

  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id)
    .eq('author_id', user.id)

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }

  return NextResponse.json({ message: 'تم حذف المنشور بنجاح' })
}`}
          />

          <h4 className="font-bold text-gray-900 dark:text-white mb-3 mt-6">
            استخدام في Server Component:
          </h4>
          <CodeBlock
            language="typescript"
            code={`// app/posts/page.tsx
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageParam } = await searchParams
  const supabase = await createClient()
  
  const page = parseInt(pageParam || '1')
  const limit = 10
  const from = (page - 1) * limit
  const to = from + limit - 1

  const { data: posts, count } = await supabase
    .from('posts')
    .select('*, author:author_id(name, avatar)', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  const totalPages = count ? Math.ceil(count / limit) : 0

  return (
    <div dir="rtl" className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">المقالات</h1>
      
      <div className="space-y-6">
        {posts?.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.content}</p>
            <div className="text-sm text-gray-400 mt-4">
              {post.author?.name} — {new Date(post.created_at).toLocaleDateString('ar-SA')}
            </div>
          </article>
        ))}
      </div>

      <nav className="flex justify-center gap-4 mt-8">
        {page > 1 && (
          <Link
            href={\`?page=\${page - 1}\`}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            السابق
          </Link>
        )}
        {page < totalPages && (
          <Link
            href={\`?page=\${page + 1}\`}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            التالي
          </Link>
        )}
      </nav>
    </div>
  )
}`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            هذا المثال يغطي كامل عمليات CRUD مع:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>جلب المنشورات مع الترقيم (Pagination)</li>
            <li>إنشاء منشور جديد مع التحقق من الهوية</li>
            <li>تحديث منشور (فقط للمؤلف)</li>
            <li>حذف منشور (فقط للمؤلف)</li>
            <li>معالجة الأخطاء بشكل مناسب</li>
            <li>استخدام Server Components لعرض البيانات</li>
          </ul>
        </LessonSection>

        {/* ==================== القسم 10: ملخص + Quiz + Challenge + CheatSheet ==================== */}
        <LessonSection id="summary" title="ملخص الدرس">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
              ما تعلمناه في هذا الدرس:
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>إنشاء جداول باستخدام SQL مع فهم أنواع البيانات المختلفة (UUID, TEXT, TIMESTAMPTZ)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>تفعيل Row Level Security (RLS) وكتابة سياسات الحماية</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>استخدام Table Editor و SQL Editor في Dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>قراءة البيانات باستخدام select مع Relations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>إدراج بيانات فردية ومتعددة باستخدام insert</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>تحديث وحذف البيانات مع استخدام الفلاتر الإلزامية</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>الفلترة المتقدمة: eq, neq, gt, lt, in, contains, or, is, textSearch</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>الترقيم باستخدام range و order و limit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>بناء API Route عملي مع معالجة الأخطاء والتحقق من الهوية</span>
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* Quiz */}
        <LessonSection id="quiz" title="اختبر معلوماتك">
          <div className="space-y-8">
            <Quiz
              question="ما نوع البيانات الأفضل لتخزين معرّف فريد لكل صف في جدول PostgreSQL؟"
              options={[
                "INTEGER AUTO_INCREMENT",
                "SERIAL",
                "UUID",
                "VARCHAR(36)",
              ]}
              correctAnswer={2}
              explanation="UUID (Universally Unique Identifier) هو الأفضل لأنه يُولّد معرّفاً فريداً عالمياً لا يكشف عدد الصفوف في الجدول. بينما INTEGER و SERIAL يكشفان العدد، و VARCHAR(36) يحتاج مساحة أكبر."
            />

            <Quiz
              question="ماذا يحدث إذا استخدمت .update() بدون فلتر .eq() في Supabase؟"
              options={[
                "يتم تحديث أول صف فقط",
                "يتم تحديث جميع صفوف الجدول",
                "يتم إلغاء العملية تلقائياً",
                "يظهر خطأ في الكونسول",
              ]}
              correctAnswer={1}
              explanation="بدون فلتر، سيقوم Supabase بتحديث جميع صفوف الجدول! هذا خطأ شائع وخطير. تأكد دائماً من وجود فلتر مثل .eq() قبل استخدام .update() أو .delete()."
            />

            <Quiz
              question="ما الفرق بين .single() و .maybeSingle() في Supabase؟"
              options={[
                "لا يوجد فرق بينهما",
                ".single() يُرجع null إذا لم توجد نتائج",
                ".maybeSingle() يُرجع خطأ إذا لم توجد نتائج",
                ".single() يُرجع خطأ إذا لم توجد نتائج، أما .maybeSingle() فيُرجع null",
              ]}
              correctAnswer={3}
              explanation="single() يُرجع خطأ إذا لم توجد نتائج أو إذا وُجد أكثر من صف. أما maybeSingle() فيُرجع null بدلاً من الخطأ إذا لم توجد نتائج."
            />

            <Quiz
              question="كيف تجلب الصفحة الثانية (20 منشور) مع الترقيم في Supabase؟"
              options={[
                ".range(1, 20)",
                ".range(0, 19)",
                ".range(10, 19)",
                ".range(20, 39)",
              ]}
              correctAnswer={2}
              explanation="الترقيم يبدأ من 0. الصفحة الأولى: range(0, 9) = 10 عناصر. الصفحة الثانية: range(10, 19) = 10 عناصر (من الفهرس 10 إلى 19). النهاية في range شاملة."
            />
          </div>
        </LessonSection>

        {/* Challenge */}
        <LessonSection id="challenge" title="تحدي عملي">
          <Challenge
            title="بناء نظام منشورات كامل"
            description={`قم بالمهام التالية لإنشاء نظام منشورات كامل مع Supabase:

1. أنشئ جدول posts في Supabase SQL Editor بالشكل التالي:
   - id (UUID, مفتاح رئيسي)
   - title (TEXT, مطلوب)
   - content (TEXT)
   - status (TEXT, القيمة الافتراضية: 'draft')
   - author_id (UUID, مفتاح أجنبي لجدول المستخدمين)
   - created_at (TIMESTAMPTZ)
   - updated_at (TIMESTAMPTZ)

2. فعّل RLS وأنشئ سياسات مناسبة:
   - أي شخص يستطيع قراءة المنشورات المنشورة (status = 'published')
   - المستخدمون المسجلون يمكنهم إنشاء منشورات
   - كل مستخدم يتعديل ويحذف منشوراته فقط

3. أنشئ Server Component في Next.js يعرض:
   - قائمة المنشورات مع pagination
   - الترقيم من الأحدث للأقدم
   - معلومات المؤلف (الاسم والصورة)
   - أزرار التالي/السابق

4. أنشئ API Route يدعم:
   - GET: جلب المنشورات مع pagination
   - POST: إنشاء منشور جديد (مصادقة مطلوبة)`}
          >
            <CodeBlock
              language="sql"
              code={`CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  status TEXT DEFAULT 'draft',
  author_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- أكمل السياسات هنا
CREATE POLICY "Public read published" ON posts
  FOR SELECT USING (status = 'published');

-- أضف بقية السياسات...`}
            />
          </Challenge>
        </LessonSection>

        {/* CheatSheet */}
        <LessonSection id="cheatsheet" title="ملخص سريع (CheatSheet)">
          <CheatSheet title="Supabase CRUD — مرجع سريع">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">القراءة (SELECT)</h4>
                <CodeBlock
                  language="typescript"
                  code={`// جميع البيانات
supabase.from('table').select('*')

// أعمدة محددة
supabase.from('table').select('col1, col2')

// مع علاقات
supabase.from('posts').select('*, author:author_id(name)')

// صف واحد
supabase.from('table').select('*').eq('id', uuid).single()

// عدّ النتائج
supabase.from('table').select('*', { count: 'exact', head: true })`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">الإدراج (INSERT)</h4>
                <CodeBlock
                  language="typescript"
                  code={`// صف واحد
supabase.from('table').insert({ col: 'val' })

// عدة صفوف
supabase.from('table').insert([{ col: 'val1' }, { col: 'val2' }])

// إدراج وإرجاع البيانات
supabase.from('table').insert({ col: 'val' }).select()`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">التحديث (UPDATE)</h4>
                <CodeBlock
                  language="typescript"
                  code={`// تحديث مع فلتر (إلزامي!)
supabase.from('table').update({ col: 'new' }).eq('id', uuid)

// تحديث وإرجاع البيانات
supabase.from('table').update({ col: 'new' }).eq('id', uuid).select()`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">الحذف (DELETE)</h4>
                <CodeBlock
                  language="typescript"
                  code={`// حذف مع فلتر (إلزامي!)
supabase.from('table').delete().eq('id', uuid)`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">الفلاتر</h4>
                <CodeBlock
                  language="typescript"
                  code={`// مقارنات
.eq('col', val)       // يساوي
.neq('col', val)      // لا يساوي
.gt('col', val)       // أكبر من
.lt('col', val)       // أصغر من
.gte('col', val)      // أكبر أو يساوي
.lte('col', val)      // أصغر أو يساوي

// مجموعات
.in('col', [val1, val2])           // ضمن مجموعة
.contains('col', [val1])           // يحتوي
.is('col', null)                   // يساوي null

// نصي
.or('col1.eq.val,col2.ilike.%text%')   // أو منطقية
.textSearch('col', 'terms')             // بحث نصي كامل`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">الترتيب والترقيم</h4>
                <CodeBlock
                  language="typescript"
                  code={`// ترتيب
.order('col', { ascending: false })

// ترقيم (pagination)
.range(0, 9)    // الصفحة الأولى (10 عناصر)
.range(10, 19)  // الصفحة الثانية

// حد أقصى
.limit(5)

// نتائج واحدة
.single()       // خطأ إذا 0 أو أكثر من 1
.maybeSingle()  // null إذا 0 نتائج`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">SQL مفيد</h4>
                <CodeBlock
                  language="sql"
                  code={`-- إنشاء جدول
CREATE TABLE name (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  col TYPE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- تفعيل RLS
ALTER TABLE name ENABLE ROW LEVEL SECURITY;

-- سياسة قراءة
CREATE POLICY "name" ON name FOR SELECT USING (condition);

-- سياسة إدراج
CREATE POLICY "name" ON name FOR INSERT WITH CHECK (condition);`}
                />
              </div>
            </div>
          </CheatSheet>
        </LessonSection>

        {/* ==================== التنقل ==================== */}
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
