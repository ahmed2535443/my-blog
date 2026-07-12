import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function RowLevelSecurity() {
  const lesson = getLessonBySlug("supabase", "04-row-level-security");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* Section 1: لماذا RLS هو أهم شيء في Supabase */}
        <LessonSection id="why-rls" title="لماذا RLS هو أهم شيء في Supabase">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            إذا كنت تعتقد أن Amplitude Auth أو Firebase Security Rules هي القوة الخارقة لحماية بياناتك، فاستعد لصدمة حقيقية. في عالم Supabase، القاعدة الأولى والأهم هي: <strong className="text-red-600 dark:text-red-400">بياناتك مكشوفة تماماً إذا لم تستخدم RLS</strong>.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Supabase يقوم بشيء مختلف جذرياً عن الأطر التقليدية. بدلاً من كتابة API endpoints تحكم من يمكنه الوصول إلى أي بيانات، Supabase يعرض قاعدة البيانات PostgreSQL مباشرة عبر PostgREST. هذا يعني أن أي شخص يملك <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">anon key</code> — وهو مفتاح عام تماماً — يمكنه استعلام قاعدة البيانات مباشرة.
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <h4 className="text-red-800 dark:text-red-300 font-bold text-lg mb-2">
              ⚠️ تحذير خطير
            </h4>
            <p className="text-red-700 dark:text-red-400">
              مفتاح <code className="bg-red-100 dark:bg-red-900/40 px-2 py-1 rounded text-sm font-mono">anon key</code> هو مفتاح عام يُستخدم في كل طلبات العميل. هذا المفتاح موجود في كود JavaScript الخاص بك على المتصفح. أي شخص يمكنه فتح Console المتصفح ورؤية هذا المفتاح واستخدامه للوصول إلى قاعدة بياناتك مباشرة.
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا يختلف جذرياً عن الأطر التقليدية مثل Express.js أو Django، حيث أنت تكتب server-side code يتحكم في كل endpoint. في Supabase، أنت تعتمد على <strong>Row Level Security</strong> كطبقة الأمان الوحيدة التي تحمي بياناتك.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h4 className="text-blue-800 dark:text-blue-300 font-bold text-lg mb-2">
              💡 ما هو RLS؟
            </h4>
            <p className="text-blue-700 dark:text-blue-400">
              Row Level Security (RLS) هو ميزة أمان مدمجة في PostgreSQL تسمح لك بتحديد أي صفوف يمكن للمستخدم قراءتها أو تعديلها أو حذفها. كل policy تُعرَّف كشرط يُضاف تلقائياً إلى كل استعلام يتم تنفيذه على الجدول.
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            لنفهم هذا بمثال عملي. تخيّل أن لديك جدول <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">posts</code> يحتوي على منشورات المستخدمين. بدون RLS، أي شخص يعرف المفتاح العام يمكنه كتابة هذا الاستعلام:
          </p>

          <CodeBlock
            language="javascript"
            code={`// أي شخص يمكنه تشغيل هذا الكود في المتصفح
const { data } = await supabase
  .from('posts')
  .select('*'); // يحصل على كل المنشورات包括 الخاصية!`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا يعني أن كل المنشورات، بما فيها那些 الخاصة بالمستخدمين الآخرين، ستظهر لجميع المستخدمين. مع RLS، يمكنك التأكد من أن كل مستخدم لا يرى إلا المنشورات التي يملك حق الوصول إليها.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            الفكرة الأساسية هي أن Supabase يوفر لك ميزة PostgreSQL القوية وهي RLS، وأنت تستخدمها لبناء طبقة الأمان الخاصة بك. هذا نموذج مختلف تماماً عن البناء التقليدي، لكنه أكثر مرونة وقوة عندما يُستخدم بشكل صحيح.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            في هذا الدرس، سنتعلم كيف تعمل RLS، وكيف تنشئ policies تحمي بياناتك، وكيف تتعامل مع Clerk كمزوّد مصادقة خارجي، وأخطاء شائعة يجب تجنبها. هذا الدرس هو أساس كل شيء في Supabase — إذا لم تفهم RLS بشكل صحيح، فبياناتك في خطر.
          </p>
        </LessonSection>

        {/* Section 2: كيف يعمل RLS */}
        <LessonSection id="how-rls-works" title="كيف يعمل RLS">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            RLS هو ميزة أمان مدمجة في PostgreSQL نفسها، وليس اختراعاً من Supabase. هذا يعني أنه مدعوم بشكل أصلي في قاعدة البيانات ويعمل بكفاءة عالية. لنفهم كيف يعمل من الداخل.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            آلية عمل RLS
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            عندما تفعّل RLS على جدول، PostgreSQL يضيف شرطاً تلقائياً إلى كل استعلام يتم تنفيذه على ذلك الجدول. هذا الشرط هو WHERE clause يُضاف إلى نهاية الاستعلام. إذا لم يحقق المستخدم أي policy، فإن الاستعلام لا يُرجع أي صفوف.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            لنأخذ مثالاً. تخيّل أن لديك هذا الاستعلام:
          </p>

          <CodeBlock
            language="sql"
            code={`SELECT * FROM posts WHERE status = 'published';`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            عندما يكون RLS مفعّلاً، PostgreSQL يحوّل هذا الاستعلام إلى شكل يشبه:
          </p>

          <CodeBlock
            language="sql"
            code={`SELECT * FROM posts
WHERE status = 'published'
AND (polisy_condition_1 OR policy_condition_2 OR ...);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            الشروط المضافة هي النتاج المنطقي (OR) لجميع Policies التي يحق للمستخدم تنفيذها على ذلك الجدول.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            شروط Policies
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            كل policy يمكن أن تحتوي على شرطين رئيسيين:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">
                USING clause
              </h4>
              <p className="text-green-700 dark:text-green-400 text-sm">
                يحدد أي صفوف يمكن للمستخدم <strong>قراءتها</strong>. يُستخدم مع SELECT و UPDATE و DELETE. يُفحص قبل تنفيذ العملية.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h4 className="text-purple-800 dark:text-purple-300 font-bold mb-2">
                WITH CHECK clause
              </h4>
              <p className="text-purple-700 dark:text-purple-400 text-sm">
                يحدد القيم المسموح بها عند <strong>الإدخال أو التعديل</strong>. يُفحص بعد تنفيذ العملية للتأكد من أن البيانات المُدخلة تحقق الشرط.
              </p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            لنفهم الفرق بين الشرطين بمثال:
          </p>

          <CodeBlock
            language="sql"
            code={`CREATE POLICY "Users can update own posts"
ON posts FOR UPDATE
USING (auth.uid() = author_id)      -- يمكنه تعديل المنشورات التي كتبها فقط
WITH CHECK (auth.uid() = author_id); -- البيانات الجديدة يجب أن تبقى مملوكة له`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            الشرط الأول (USING) يتحقق من أن المستخدم يملك المنشور قبل التعديل. الشرط الثاني (WITH CHECK) يتحقق من أن البيانات الجديدة لا تنقل المنشور لمستخدم آخر.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            أنواع العمليات المدعومة
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            RLS يدعم جميع عمليات PostgreSQL الأساسية:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">العملية</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">USING</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">WITH CHECK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">SELECT</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">نعم</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">لا</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">INSERT</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">لا</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">نعم</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">UPDATE</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">نعم</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">نعم</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">DELETE</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">نعم</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">لا</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
            <h4 className="text-yellow-800 dark:text-yellow-300 font-bold text-lg mb-2">
              💡 ملاحظة مهمة
              </h4>
            <p className="text-yellow-700 dark:text-yellow-400">
              يمكنك استخدام <code className="bg-yellow-100 dark:bg-yellow-900/40 px-2 py-1 rounded text-sm font-mono">FOR ALL</code> لإنشاء policy واحدة تغطي جميع العمليات. في هذه الحالة، يمكنك استخدام USING للقراءة والتعديل والحذف، وWITH CHECK للإدخال والتعديل.
            </p>
          </div>

          <CodeBlock
            language="sql"
            code={`-- Policy واحدة تغطي كل العمليات
CREATE POLICY "Owner full access"
ON posts FOR ALL
USING (auth.uid() = author_id)
WITH CHECK (auth.uid() = author_id);`}
          />

          <p className="text-gray-700 dark:text-gray-300">
            هذا النهج أبسط وأكثر كفاءة عندما يكون شرط واحد كافياً لجميع العمليات. ومع ذلك، قد تحتاج إلى policies منفصلة عندما تكون الشروط مختلفة لكل عملية.
          </p>
        </LessonSection>

        {/* Section 3: تفعيل RLS */}
        <LessonSection id="enable-rls" title="تفعيل RLS">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            تفعيل RLS على جدول هو الخطوة الأولى والأكثر أهمية. بدون هذا، بياناتك مكشوفة تماماً. لحسن الحظ، الأمر بسيط جداً.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            أمر التفعيل
          </h3>

          <CodeBlock
            language="sql"
            code={`ALTER TABLE posts ENABLE ROW LEVEL SECURITY;`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا الأمر يفعّل RLS على جدول <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">posts</code>. بمجرد التفعيل، PostgreSQL سيبدأ في تطبيق شروط Policies على كل استعلام.
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <h4 className="text-red-800 dark:text-red-300 font-bold text-lg mb-2">
              ⚠️ تحذير مهم: RLS بدون Policies = حظر كامل
            </h4>
            <p className="text-red-700 dark:text-red-400 mb-2">
              عندما تفعّل RLS على جدول <strong>بدون إنشاء أي policy</strong>، PostgreSQL يتبع القاعدة الآمنة: <strong>رفض جميع العمليات</strong>. هذا يعني:
            </p>
            <ul className="list-disc list-inside text-red-700 dark:text-red-400 space-y-1">
              <li>لا يمكن لأحد قراءة أي صفوف</li>
              <li>لا يمكن لأحد إدخال أي صفوف جديدة</li>
              <li>لا يمكن لأحد تعديل أي صفوف</li>
              <li>لا يمكن لأحد حذف أي صفوف</li>
            </ul>
            <p className="text-red-700 dark:text-red-400 mt-2">
              هذا سلوك آمن بشكل عام، لكنه سيكسر تطبيقك حتى تكتب policies. تأكد دائماً من إنشاء policies قبل تفعيل RLS في بيئة الإنتاج.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            التحقق من حالة RLS
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            يمكنك التحقق من حالة RLS على أي جدول باستخدام هذا الاستعلام:
          </p>

          <CodeBlock
            language="sql"
            code={`SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE tablename = 'posts';`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            النتيجة ستظهر <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">rowsecurity = true</code> إذا كان RLS مفعّلاً.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            عرض Policies الحالية
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            لرؤية جميع Policies المعرّفة على جدول معين:
          </p>

          <CodeBlock
            language="sql"
            code={`SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE tablename = 'posts';`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا الاستعلام يعرض جميع Policies مع التفاصيل: اسم الـ Policy، نوع العملية (cmd)، شرط USING (qual)، وشرط WITH CHECK (with_check).
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            الت_misc
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            يمكنك أيضاً استخدام Supabase Dashboard للتحقق من حالة RLS:
          </p>

          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
            <li>انتقل إلى Database في Dashboard</li>
            <li>اختر الجدول الذي تريد فحصه</li>
            <li>تحقق من قسم Security Policies</li>
            <li>تأكد من أن RLS مفعّل وان Policies صحيحة</li>
          </ol>

          <p className="text-gray-700 dark:text-gray-300">
            الت_misc هو أداة مفيدة للتأكد من أن policies تعمل كما هو متوقع. يمكنك اختبارها بتمرير different auth.uid values والتحقق من النتائج.
          </p>
        </LessonSection>

        {/* Section 4: إنشاء أول Policy */}
        <LessonSection id="first-policy" title="إنشاء أول Policy">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            الآن سنlearn كيف نكتب policies تحمي بياناتنا. سنبدأ بجدول posts وننشئ policies لكل عملية CRUD الأساسية.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Policy للقراءة (SELECT)
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
           _POLICY الأول يسمح لأي شخص قراءة المنشورات المنشورة. هذاPolicy يسمح للجميع بقراءة المنشورات التي حالتها "published":
          </p>

          <CodeBlock
            language="sql"
            code={`CREATE POLICY "Anyone can read published posts"
ON posts FOR SELECT
USING (status = 'published');`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هنا نستخدم USING لأننا نريد تحديد أي صفوف يمكن قراءتها. الشرط <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">status = 'published'</code> يعني أن أي صفوف فيها status يساوي published ستظهر لجميع المستخدمين.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Policy للإدخال (INSERT)
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
           Policy الثاني يسمح للمستخدمين المسجلين بإنشاء منشورات جديدة. سنستخدم WITH CHECK للتأكد من أن المنشور الجديد يخص المستخدم الحالي:
          </p>

          <CodeBlock
            language="sql"
            code={`CREATE POLICY "Users can create own posts"
ON posts FOR INSERT
WITH CHECK (auth.uid() = author_id);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هنا نستخدم WITH CHECK لأننا نريد التحقق من القيم الجديدة. <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth.uid()</code> يُرجع معرّف المستخدم الحالي، ونقارنه بـ <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">author_id</code> في المنشور الجديد.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Policy للتعديل (UPDATE)
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
           Policy الثالث يسمح للمستخدمين بتعديل منشوراتهم الخاصة فقط. نستخدم الشرطين USING و WITH CHECK:
          </p>

          <CodeBlock
            language="sql"
            code={`CREATE POLICY "Users can update own posts"
ON posts FOR UPDATE
USING (auth.uid() = author_id)
WITH CHECK (auth.uid() = author_id);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            الشرط USING يتحقق من أن المستخدم يملك المنشور قبل التعديل. شرط WITH CHECK يتحقق من أن البيانات الجديدة لا تنقل المنشور لمستخدم آخر. هذا يمنع المستخدمين من نقل ملكية منشورات الآخرين.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Policy للحذف (DELETE)
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
           Policy الرابعة تسمح للمستخدمين بحذف منشوراتهم الخاصة فقط. نستخدم USING فقط لأن الحذف لا يحتاج إلى WITH CHECK:
          </p>

          <CodeBlock
            language="sql"
            code={`CREATE POLICY "Users can delete own posts"
ON posts FOR DELETE
USING (auth.uid() = author_id);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            شرط USING يتحقق من أن المستخدم يملك المنشور قبل الحذف. هذا يمنع المستخدمين من حذف منشورات الآخرين.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            تجميع كل شيء معاً
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            إليك الكود الكامل لإنشاء جميع Policies لجدول posts:
          </p>

          <CodeBlock
            language="sql"
            code={`-- إنشاء الجدول
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- تفعيل RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Policy للقراءة: أي شخص يرى المنشورات المنشورة
CREATE POLICY "Anyone can read published posts"
ON posts FOR SELECT
USING (status = 'published');

-- Policy للإدخال: المستخدمون ينشئون منشوراتهم فقط
CREATE POLICY "Users can create own posts"
ON posts FOR INSERT
WITH CHECK (auth.uid() = author_id);

-- Policy للتعديل: المستخدمون يعدلون منشوراتهم فقط
CREATE POLICY "Users can update own posts"
ON posts FOR UPDATE
USING (auth.uid() = author_id)
WITH CHECK (auth.uid() = author_id);

-- Policy للحذف: المستخدمون يحذفون منشوراتهم فقط
CREATE POLICY "Users can delete own posts"
ON posts FOR DELETE
USING (auth.uid() = author_id);`}
          />

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h4 className="text-green-800 dark:text-green-300 font-bold text-lg mb-2">
              ✅ ملخص Policies
            </h4>
            <ul className="text-green-700 dark:text-green-400 space-y-2">
              <li>• <strong>SELECT:</strong> أي شخص يرى المنشورات المنشورة فقط</li>
              <li>• <strong>INSERT:</strong> المستخدم ينشئ منشورات بـ author_id يساوي auth.uid() الخاص به</li>
              <li>• <strong>UPDATE:</strong> المستخدم يعدل منشوراته فقط ولا يغير author_id</li>
              <li>• <strong>DELETE:</strong> المستخدم يحذف منشوراته فقط</li>
            </ul>
          </div>
        </LessonSection>

        {/* Section 5: العمل مع Clerk كمزوّد مصادقة خارجي */}
        <LessonSection id="clerk-auth" title="العمل مع Clerk كمزوّد مصادقة خارجي">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            إذا كنت تستخدم Clerk بدلاً من Supabase Auth، فستحتاج إلى تعديل بعض التفاصيل في policies. Clerk يوفر JWT يحتوي على معرّف المستخدم في حقل <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">sub</code>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            كيف يعمل Clerk مع Supabase
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            عند استخدام Clerk مع Supabase، عليك تمرير JWT الخاص بـ Clerk إلى عميل Supabase. هذا JWT يحتوي على معرّف المستخدم في حقل <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">sub</code>. في RLS policies، يمكنك استخراج معرّف المستخدم من هذا JWT.
          </p>

          <CodeBlock
            language="javascript"
            code={`import { createClient } from '@supabase/supabase-js';
import { useAuth } from '@clerk/nextjs';

// داخل component
const { getToken } = useAuth();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    global: {
      headers: {
        Authorization: \`Bearer \${await getToken({ template: 'supabase' })}\`
      }
    }
  }
);`}
          />

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            كتابة Policies مع Clerk
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            بدلاً من استخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth.uid()</code>، نستخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">current_setting</code> لاستخراج معرّف المستخدم من JWT:
          </p>

          <CodeBlock
            language="sql"
            code={`-- مع Clerk، نستخرج معرّف المستخدم من JWT
CREATE POLICY "Users can read own data"
ON posts FOR SELECT
USING (
  author_id = (current_setting('request.jwt.claims', true)::json ->> 'sub')
);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هنا نستخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">current_setting('request.jwt.claims', true)</code> للحصول على JWT، ثم نحوله إلى JSON ونستخرج حقل <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">sub</code>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            استخدام auth.jwt()
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Supabase يوفر وظيفة مساعدة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth.jwt()</code> تجعل الأمر أبسط:
          </p>

          <CodeBlock
            language="sql"
            code={`-- استخدام auth.jwt() المختصر
CREATE POLICY "Users can read own data"
ON posts FOR SELECT
USING (author_id = (auth.jwt() ->> 'sub'));`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا الكود أقصر وأوضح. وظيفة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth.jwt()</code> تُرجع JWT الحالي كـ JSON، ونستخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"->>"}</code> لاستخراج حقل <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">sub</code> كنص.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            مثال كامل مع Clerk
          </h3>

          <CodeBlock
            language="sql"
            code={`-- مع Clerk، نستخدم auth.jwt() لاستخراج معرّف المستخدم
CREATE POLICY "Anyone can read published posts"
ON posts FOR SELECT
USING (status = 'published');

CREATE POLICY "Users can create own posts"
ON posts FOR INSERT
WITH CHECK (auth.jwt() ->> 'sub' = author_id);

CREATE POLICY "Users can update own posts"
ON posts FOR UPDATE
USING (auth.jwt() ->> 'sub' = author_id)
WITH CHECK (auth.jwt() ->> 'sub' = author_id);

CREATE POLICY "Users can delete own posts"
ON posts FOR DELETE
USING (auth.jwt() ->> 'sub' = author_id);`}
          />

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
            <h4 className="text-yellow-800 dark:text-yellow-300 font-bold text-lg mb-2">
              💡 ملاحظة مهمة
            </h4>
            <p className="text-yellow-700 dark:text-yellow-400">
              عند استخدام Clerk مع Supabase، تأكد من أن JWT يحتوي على حقل <code className="bg-yellow-100 dark:bg-yellow-900/40 px-2 py-1 rounded text-sm font-mono">sub</code> يحتوي على معرّف المستخدم. Clerk يفعل ذلك بشكل افتراضي، لكن تأكد من إعدادات JWT template في Clerk Dashboard.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            مقارنة بين Supabase Auth و Clerk
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">الميزة</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">Supabase Auth</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">Clerk</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">الحصول على user ID</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">auth.uid()</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">auth.jwt() -&gt;&gt; 'sub'</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">الإعداد</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">مدمج في Supabase</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">خدمة خارجية</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">التكامل</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">أسهل</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">يحتاج إعداد إضافي</td>
                </tr>
              </tbody>
            </table>
          </div>
        </LessonSection>

        {/* Section 6: أنماط شائعة للسياسات */}
        <LessonSection id="common-patterns" title="أنماط شائعة للسياسات">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            هناك عدة أنماط شائعة لكتابة Policies. كل نمط يناسب حالة استخدام مختلفة. لنلخص أهمها.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            النمط الأول: قراءة عامة، كتابة خاصة
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا النمط يسمح لأي شخص قراءة البيانات، لكن يسمح للمستخدمين المسجلين فقط بالتعديل. مناسب للمدونات والمقالات العامة:
          </p>

          <CodeBlock
            language="sql"
            code={`-- أي شخص يمكنه قراءة المنشورات
CREATE POLICY "Public read" ON posts
FOR SELECT USING (true);

-- فقط المستخدمون المسجلون يمكنهم الإدراج
CREATE POLICY "Auth insert" ON posts
FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هنا نستخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">USING (true)</code> للقراءة، مما يعني أن الشرط دائماً صائب. للإدخال، نتحقق من أن المستخدم مسجل الدخول باستخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">auth.uid() IS NOT NULL</code>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            النمط الثاني: الوصول الكامل للمالك
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا النمط يسمح للمستخدم بتحكم كامل في بياناته الخاصة فقط. مناسب للملفات الشخصية والبيانات الخاصة:
          </p>

          <CodeBlock
            language="sql"
            code={`-- المالك فقط يمكنه الوصول الكامل لبياناته
CREATE POLICY "Owner full access" ON posts
FOR ALL USING (auth.uid() = user_id);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هنا نستخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">FOR ALL</code> لتغطية جميع العمليات بشريطة واحدة. هذا النمط أبسط وأكثر كفاءة.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            النمط الثالث: الوصول المستند للأدوار
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا النمط يسمح للمديرين بالتحكم الكامل، بينما يسمح للمستخدمين العاديين بالوصول المحدود. مناسب للتطبيقات التي تحتوي على أدوار مختلفة:
          </p>

          <CodeBlock
            language="sql"
            code={`-- المدير فقط يمكنه الوصول الكامل
CREATE POLICY "Admin full access" ON posts
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM users
    WHERE id = auth.uid() AND role = 'admin'
  )
);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هنا نستخدم EXISTS للتحقق من أن المستخدم الحالي له دور "admin" في جدول users. هذا النمط يتطلب جدول users يحتوي على حقل role.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            النمط الرابع: الوصول المحدد حسب الحالة
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا النمط يسمح بالوصول بناءً على حالة البيانات. مناسب للتطبيقات التي تحتوي على حالات مختلفة مثل "draft" و "published":
          </p>

          <CodeBlock
            language="sql"
            code={`-- المنشورات المنشورة مرئية للجميع
CREATE POLICY "Published posts visible" ON posts
FOR SELECT USING (status = 'published');

-- المسودات مرئية للمالك فقط
CREATE POLICY "Drafts visible to owner" ON posts
FOR SELECT USING (status = 'draft' AND auth.uid() = author_id);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هنا لدينا policyان للقراءة: واحد للمنشورات المنشورة (للجميع) وآخر للمسودات (للمالك فقط). PostgreSQL يجمع بين Policy باستخدام OR.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            النمط الخامس: الوصول المحدد حسب المجموعة
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا النمط يسمح بالوصول بناءً على عضوية المستخدم في مجموعة. مناسب للتطبيقات التي تحتوي على مجموعات أو فرق:
          </p>

          <CodeBlock
            language="sql"
            code={`-- أعضاء المجموعة فقط يمكنهم الوصول
CREATE POLICY "Group members access" ON posts
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM group_members
    WHERE group_id = posts.group_id
    AND user_id = auth.uid()
  )
);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هنا نتحقق من أن المستخدم الحالي عضو في نفس المجموعة التي ينتمي إليها المنشور. هذا النمط يتطلب جدول group_members يربط المستخدمين بالمجموعات.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            النمط السادس: الوصول المحدد حسب الوقت
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا النمط يسمح بالوصول بناءً على الوقت. مناسب للتطبيقات التي تحتوي على محتوى مؤقت أو عروض محدودة:
          </p>

          <CodeBlock
            language="sql"
            code={`-- المحتوى المنشور فقط بعد تاريخ النشر
CREATE POLICY "Published after date" ON posts
FOR SELECT USING (
  status = 'published'
  AND published_at <= NOW()
);`}
          />

          <p className="text-gray-700 dark:text-gray-300">
            هنا نتحقق من أن المنشور منشور وأن تاريخ النشر قد مر. هذا النمط مفيد للمحتوى المجدول الذي يُنشر في وقت محدد.
          </p>
        </LessonSection>

        {/* Section 7: RLS مع Foreign Keys */}
        <LessonSection id="rls-foreign-keys" title="RLS مع Foreign Keys">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            عند استخدام Foreign Keys مع RLS، قد تواجه بعض التحديات. إذا كان لديك جدول posts يحتوي على author_id يشير إلى جدول users، فهل يمكن للمستخدم رؤية تفاصيل المؤلف؟ الإجابة تعتمد على policies في كلا الجدولين.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            مشكلة الـ Joins مع RLS
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            تخيّل أن لديك هذا الاستعلام:
          </p>

          <CodeBlock
            language="sql"
            code={`SELECT posts.*, users.name, users.avatar
FROM posts
JOIN users ON posts.author_id = users.id;`}
          />

          <p className="text-gray-700 dark:bg-gray-800 mb-4">
            مع RLS، إذا لم يكن هناك policy على جدول users يسمح بالقراءة، فإن الـ join سيُرجع null لحقوق المستخدم. هذا يعني أنك لن ترى اسم المؤلف أو صورته.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            حل المشكلة: policies على كلا الجدولين
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            لحل هذه المشكلة، نحتاج إلى إنشاء policies على جدول users أيضاً. إليك مثال:
          </p>

          <CodeBlock
            language="sql"
            code={`-- Policy للملفات العامة: أي شخص يمكنه رؤية الاسم والصورة
CREATE POLICY "Public profiles" ON users
FOR SELECT USING (true);

-- Policy للبيانات الخاصة: فقط المالك يمكنه رؤية البريد الإلكتروني
CREATE POLICY "Private data" ON users
FOR SELECT USING (auth.uid() = id);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هنا لدينا policyان للقراءة: واحد للبيانات العامة (للجميع) وآخر للبيانات الخاصة (للمالك فقط). هذا يسمح بالوصول المحدد حسب نوع البيانات.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            استخدام Views لتحديد الوصول
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            بدلاً من إنشاء policies معقدة، يمكنك استخدام Views لتحديد البيانات المتاحة:
          </p>

          <CodeBlock
            language="sql"
            code={`-- View للملفات العامة
CREATE VIEW public_profiles AS
SELECT id, name, avatar
FROM users;

-- Policy على View
CREATE POLICY "Public profiles" ON public_profiles
FOR SELECT USING (true);`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا النهج يسمح لك بتحكم أدق في البيانات المتاحة. يمكنك إنشاء views مختلفة لمستويات وصول مختلفة.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            مثال عملي: نظام المدونة
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            لننظر إلى مثال عملي يجمع بين Foreign Keys و RLS:
          </p>

          <CodeBlock
            language="sql"
            code={`-- جدول المستخدمين
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  avatar TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- جدول المنشورات
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT,
  author_id UUID REFERENCES users(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- تفعيل RLS على كلا الجدولين
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Policies للمستخدمين
CREATE POLICY "Public user profiles" ON users
FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON users
FOR UPDATE USING (auth.uid() = id);

-- Policies للمنشورات
CREATE POLICY "Published posts visible" ON posts
FOR SELECT USING (status = 'published');

CREATE POLICY "Drafts visible to owner" ON posts
FOR SELECT USING (status = 'draft' AND auth.uid() = author_id);

CREATE POLICY "Users can create posts" ON posts
FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update own posts" ON posts
FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Users can delete own posts" ON posts
FOR DELETE USING (auth.uid() = author_id);`}
          />

          <p className="text-gray-700 dark:text-gray-300">
            هذا النظام يسمح للجميع برؤية المنشورات المنشورة وملفات المستخدمين العامة، بينما يسمح للمستخدمين فقط برؤية مسوداتهم وتعديل بياناتهم الخاصة.
          </p>
        </LessonSection>

        {/* Section 8: اختبار وDebugging */}
        <LessonSection id="testing-debugging" title="اختبار وDebugging">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            اختبار RLS هو خطوة أساسية للتأكد من أن policies تعمل بشكل صحيح. هناك عدة طرق لاختبار وتصحيح مشاكل RLS.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            طريقة 1: استخدام SQL Editor مع أدوار مختلفة
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            يمكنك استخدام SQL Editor في Supabase Dashboard لاختبار policies بأدوار مختلفة:
          </p>

          <CodeBlock
            language="sql"
            code={`-- محاكاة مستخدم محدد
SET ROLE authenticated;

-- الآن حاول قراءة البيانات
SELECT * FROM posts;

-- العودة للدور الأصلي
RESET ROLE;`}
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا يسمح لك بتجربة policies كأنك مستخدم مختلف. تأكد من تجربة جميع السيناريوهات.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            طريقة 2: استخدام Supabase Client مع Different Auth
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            يمكنك إنشاء عملاء Supabase مختلفة بمفاتيح مختلفة لاختبار policies:
          </p>

          <CodeBlock
            language="javascript"
            code={`// عميل بالـ anon key (مستخدم غير مسجل)
const anonClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// عميل بـ service_role key (يتجاوز RLS)
const serviceClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// اختبار مع anon key
const { data: anonData } = await anonClient
  .from('posts')
  .select('*');

// اختبار مع service_role key
const { data: serviceData } = await serviceClient
  .from('posts')
  .select('*');`}
          />

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            طريقة 3: استخدام Supabase Dashboard Security Advisor
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Supabase Dashboard يحتوي على أداة Security Advisor تساعدك في اكتشاف مشاكل الأمان:
          </p>

          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
            <li>انتقل إلى Database في Dashboard</li>
            <li>اختر Security Advisor</li>
            <li>شغّل الفحص</li>
            <li>راجع التحذيرات والأخطاء</li>
          </ol>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            مشاكل شائعة وحلولها
          </h3>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                مشكلة: "new row violates row-level security policy"
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                هذا الخطأ يعني أن المستخدم يحاول إدخال صف جديد لا يحقق شرط WITH CHECK.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>الحل:</strong> تأكد من أن شرط WITH_CHECK في policy الإدخال يتطابق مع البيانات المُدخلة.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                مشكلة: لا توجد بيانات تُرجع
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                هذا يعني أن RLS مفعّل لكن لا توجد policy تسمح بالقراءة.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>الحل:</strong> أنشئ policy للقراءة تسمح للمستخدمين برؤية البيانات المطلوبة.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                مشكلة: بيانات Null في الـ Joins
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                هذا يحدث عندما لا يوجد policy على الجدول المنضم إليه.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>الحل:</strong> أنشئ policy للقراءة على الجدول المنضم إليه.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            نصائح للاختبار
          </h3>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
            <li>اختبر مع مستخدمين مختلفين (مجهول، مسجل، مدير)</li>
            <li>اختبر جميع العمليات (CRUD)</li>
            <li>تأكد من أن service_role key يتجاوز RLS</li>
            <li>استخدم logs لمتابعة الاستعلامات</li>
            <li>اختبر مع بيانات مختلفة (حالة مختلفة، مستخدمين مختلفين)</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300">
            الاختبار الشامل هو مفتاح بناء نظام آمن. لا تكتفِ باختبار السيناريو الإيجابي، بل اختبار أيضاً السيناريوهات السلبية للتأكد من أن policies تمنع الوصول غير المصرح به.
          </p>
        </LessonSection>

        {/* Section 9: الأخطاء الشائعة */}
        <LessonSection id="common-mistakes" title="الأخطاء الشائعة">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            هناك أخطاء شائعة يجب تجنبها عند العمل مع RLS. هذه الأخطاء قد تؤدي إلى تسريب البيانات أو عدم عمل التطبيق بشكل صحيح.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            الخطأ 1: إنشاء جدول بدون تفعيل RLS
          </h3>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <h4 className="text-red-800 dark:text-red-300 font-bold text-lg mb-2">
              ❌ خطأ خطير
            </h4>
            <p className="text-red-700 dark:text-red-400 mb-2">
              إنشاء جدول بدون تفعيل RLS يعني أن البيانات مكشوفة تماماً لأي شخص يعرف المفتاح العام.
            </p>
            <CodeBlock
              language="sql"
              code={`-- خطأ: جدول بدون RLS
CREATE TABLE posts (
  id UUID PRIMARY KEY,
  title TEXT,
  author_id UUID
);
-- البيانات مكشوفة!`}
            />
            <p className="text-red-700 dark:text-red-400 mt-2">
              <strong>الحل:</strong> فعّل RLS دائماً بعد إنشاء الجدول:
            </p>
            <CodeBlock
              language="sql"
              code={`-- صحيح: جدول مع RLS
CREATE TABLE posts (
  id UUID PRIMARY KEY,
  title TEXT,
  author_id UUID
);
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;`}
            />
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            الخطأ 2: نسيان WITH CHECK على INSERT/UPDATE
          </h3>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
            <h4 className="text-yellow-800 dark:text-yellow-300 font-bold text-lg mb-2">
              ⚠️ تحذير
            </h4>
            <p className="text-yellow-700 dark:text-yellow-400 mb-2">
              نسيان WITH CHECK يعني أن المستخدمين يمكنهم إدخال أي قيم حتى إذا كانت غير مسموحة.
            </p>
            <CodeBlock
              language="sql"
              code={`-- خطأ: بدون WITH CHECK
CREATE POLICY "Users can insert" ON posts
FOR INSERT WITH CHECK (true); -- أي شخص يمكنه إدخال أي شيء!

-- صحيح: مع WITH CHECK
CREATE POLICY "Users can insert" ON posts
FOR INSERT WITH CHECK (auth.uid() = author_id);`}
            />
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            الخطأ 3: سياسات متساهلة جداً
          </h3>

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-6">
            <h4 className="text-orange-800 dark:text-orange-300 font-bold text-lg mb-2">
              ⚠️ تحذير
            </h4>
            <p className="text-orange-700 dark:text-orange-400 mb-2">
              استخدام USING (true) على كل شيء يعني أن RLS لا يحمي شيئاً.
            </p>
            <CodeBlock
              language="sql"
            code={`-- خطأ: سياسات متساهلة جداً
CREATE POLICY "Anyone can do anything" ON posts
FOR ALL USING (true); -- RLS لا يحمي شيئاً!

-- صحيح: سياسات محددة
CREATE POLICY "Public read" ON posts
FOR SELECT USING (status = 'published');

CREATE POLICY "Owner write" ON posts
FOR ALL USING (auth.uid() = author_id);`}
            />
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            الخطأ 4: الاختبار فقط مع service_role key
          </h3>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h4 className="text-blue-800 dark:text-blue-300 font-bold text-lg mb-2">
              💡 معلومة مهمة
            </h4>
            <p className="text-blue-700 dark:text-blue-400 mb-2">
              مفتاح service_role يتجاوز RLS دائماً. إذا اختبرت فقط مع هذا المفتاح، فلن تكتشف مشاكل الأمان.
            </p>
            <CodeBlock
              language="javascript"
              code={`// service_role key يتجاوز RLS دائماً
const serviceClient = createClient(
  url,
  serviceRoleKey // هذا المفتاح يتجاوز RLS!
);

// هذا سيعمل دائماً حتى بدون policies
const { data } = await serviceClient
  .from('posts')
  .select('*');`}
            />
            <p className="text-blue-700 dark:text-blue-400 mt-2">
              <strong>الحل:</strong> اختبر دائماً مع anon key أو مفاتيح المستخدمين الحقيقيين.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            الخطأ 5: عدم اختبار كمستخدمين مختلفين
          </h3>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
            <h4 className="text-purple-800 dark:text-purple-300 font-bold text-lg mb-2">
              ⚠️ تحذير
            </h4>
            <p className="text-purple-700 dark:text-purple-400 mb-2">
              الاختبار بمستخدم واحد فقط لا يكشف كل المشاكل. تأكد من اختبار مع مستخدمين مختلفين (مجهول، مسجل، مدير).
            </p>
            <CodeBlock
              language="sql"
              code={`-- اختبار كمستخدم مجهول
SET ROLE anon;
SELECT * FROM posts; -- ماذا يحدث؟

-- اختبار كمستخدم مسجل
SET ROLE authenticated;
SELECT * FROM posts; -- ماذا يحدث؟

-- العودة للدور الأصلي
RESET ROLE;`}
            />
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            قائمة مراجعة الأمان
          </h3>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="text-green-800 dark:text-green-300 font-bold text-lg mb-4">
              ✅ تحقق من الأمان قبل النشر
            </h4>
            <ul className="text-green-700 dark:text-green-400 space-y-3">
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>RLS مفعّل على جميع الجداول الحساسة</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>olicies تسمح فقط بالوصول الضروري</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span> policies تستخدم auth.uid() أو auth.jwt()</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span> policies للقراءة والإدراج والتعديل والحذف</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span> policies للجداول المنضم إليها (joins)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span> policies مع service_role key</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span> policies مع anon key</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>التحقق من Security Advisor في Dashboard</span>
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* Section 10: ملخص + Quiz + Challenge + CheatSheet */}
        <LessonSection id="summary" title="ملخص + اختبار + تحدٍّ + مرجع سريع">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            ملخص الدرس
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            في هذا الدرس، تعلمنا أن RLS هو حجر الأساس لأمان تطبيقات Supabase. Supabase يعرض PostgreSQL مباشرة عبر PostgREST، مما يعني أن المفتاح العام مكشوف. RLS هو الحل الوحيد لحماية بياناتك.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            تعلمنا كيف يعمل RLS كميزة PostgreSQL أصلية، وكيف نفعّله، وكيف ننشئ policies للقراءة والإدراج والتعديل والحذف. تعلمنا أيضاً كيف نتعامل مع Clerk كمزوّد مصادقة خارجي، وأنماط شائعة للسياسات، وكيف نتعامل مع Foreign Keys، وأساليب الاختبار وتصحيح الأخطاء.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            الأهم من كل شيء هو أن RLS ليس اختيارياً — إنه ضرورة. بدونه، بياناتك مكشوفة تماماً. تأكد دائماً من تفعيل RLS على جميع الجداول الحساسة وكتابة policies مناسبة قبل نشر تطبيقك.
          </p>

          {/* Quiz */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              اختبر معلوماتك
            </h3>

            <Quiz
              question="ماذا يحدث عندما تفعّل RLS على جدول بدون إنشاء أي policy؟"
              options={[
                "يمكن لأي شخص قراءة البيانات",
                "لا يمكن لأحد قراءة أو تعديل أي صفوف",
                "يمكن فقط للمستخدمين المسجلين قراءة البيانات",
                "يتم حذف جميع البيانات"
              ]}
              correctAnswer={1}
              explanation="عند تفعيل RLS بدون policies، PostgreSQL يتبع القاعدة الآمنة: رفض جميع العمليات. لا يمكن لأحد قراءة أو تعديل أو حذف أي صفوف. هذا السلوك الآمن يمنع تسريب البيانات."
            />

            <Quiz
              question="ما هو الفرق بين USING و WITH CHECK في policy؟"
              options={[
                "USING للقراءة، WITH CHECK للكتابة",
                "USING لحذف الصفوف، WITH CHECK لإدراج صفوف جديدة",
                "USING لتحديد أي صفوف يمكن رؤيتها، WITH CHECK لتحديد القيم المسموح بها عند الإدراج أو التعديل",
                "لا يوجد فرق بينهما"
              ]}
              correctAnswer={2}
              explanation="USING يحدد أي صفوف يمكن للمستخدم رؤيتها (يُستخدم مع SELECT و UPDATE و DELETE). WITH CHECK يحدد القيم المسموح بها عند الإدراج أو التعديل (يُستخدم مع INSERT و UPDATE)."
            />

            <Quiz
              question="عند استخدام Clerk مع Supabase، كيف تحصل على معرّف المستخدم في policy؟"
              options={[
                "auth.uid()",
                "current_setting('request.jwt.claims')::json ->> 'sub'",
                "auth.jwt() ->> 'sub'",
                "الخيارات 2 و 3 صحيحتان"
              ]}
              correctAnswer={3}
              explanation="عند استخدام Clerk، يمكنك استخدام current_setting('request.jwt.claims')::json ->> 'sub' أو auth.jwt() ->> 'sub' لاستخراج معرّف المستخدم من JWT."
            />

            <Quiz
              question="لماذا يجب عليك اختبار policies مع anon key وليس فقط مع service_role key؟"
              options={[
                "لأن service_role key أبطأ",
                "لأن service_role key يتجاوز RLS دائماً",
                "لأن anon key أسرع",
                "لأن service_role key غير متاح"
              ]}
              correctAnswer={1}
              explanation="service_role key يتجاوز RLS دائماً. إذا اختبرت فقط مع هذا المفتاح، فلن تكتشف مشاكل الأمان لأن الاستعلامات ستعمل دائماً بغض النظر عن policies."
            />
          </div>

          {/* Challenge */}
          <Challenge
            title="تحدي: إنشاء نظام RLS كامل"
            description="أنشئ جدول posts مع policies كاملة للقراءة والإدراج والتعديل والحذف، ثم اختبرها بشكل صحيح."
          >
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                المطلوب:
              </p>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>إنشاء جدول posts مع الحقول: id, title, content, author_id, status, created_at</li>
                <li>تفعيل RLS على الجدول</li>
                <li>إنشاء policy للقراءة: المنشورات المنشورة مرئية للجميع، المسودات مرئية للمالك فقط</li>
                <li>إنشاء policy للإدراج: المستخدمون ينشئون منشورات بـ author_id يساوي auth.uid() الخاص بهم</li>
                <li>إنشاء policy للتعديل: المستخدمون يعدلون منشوراتهم فقط</li>
                <li>إنشاء policy للحذف: المستخدمون يحذفون منشوراتهم فقط</li>
                <li>اختبار policies مع مستخدمين مختلفين</li>
              </ol>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  معايير التقييم:
                </h4>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li>• RLS مفعّل على الجدول</li>
                  <li>• policies صحيحة لجميع العمليات</li>
                  <li>• policies تستخدم auth.uid() بشكل صحيح</li>
                  <li>• الاختبار يشمل مستخدمين مختلفين</li>
                  <li>• لا توجد أخطاء أمنية</li>
                </ul>
              </div>
            </div>
          </Challenge>

          {/* CheatSheet */}
          <CheatSheet title="مرجع سريع لـ RLS">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  تفعيل RLS
                </h4>
                <CodeBlock
                  language="sql"
                  code={`ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Policy للقراءة (SELECT)
                </h4>
                <CodeBlock
                  language="sql"
                  code={`CREATE POLICY "policy_name" ON table_name
FOR SELECT USING (condition);`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Policy للإدراج (INSERT)
                </h4>
                <CodeBlock
                  language="sql"
                  code={`CREATE POLICY "policy_name" ON table_name
FOR INSERT WITH CHECK (condition);`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Policy للتعديل (UPDATE)
                </h4>
                <CodeBlock
                  language="sql"
                  code={`CREATE POLICY "policy_name" ON table_name
FOR UPDATE
USING (condition)
WITH CHECK (condition);`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Policy للحذف (DELETE)
                </h4>
                <CodeBlock
                  language="sql"
                  code={`CREATE POLICY "policy_name" ON table_name
FOR DELETE USING (condition);`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Policy شاملة (كل العمليات)
                </h4>
                <CodeBlock
                  language="sql"
                  code={`CREATE POLICY "policy_name" ON table_name
FOR ALL
USING (condition)
WITH CHECK (condition);`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  الوصول للمالك فقط (Supabase Auth)
                </h4>
                <CodeBlock
                  language="sql"
                  code={`CREATE POLICY "Owner access" ON table_name
FOR ALL USING (auth.uid() = user_id);`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  الوصول للمالك فقط (Clerk)
                </h4>
                <CodeBlock
                  language="sql"
                  code={`CREATE POLICY "Owner access" ON table_name
FOR ALL USING (auth.jwt() ->> 'sub' = user_id);`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  قراءة عامة، كتابة مسجلة
                </h4>
                <CodeBlock
                  language="sql"
                  code={`CREATE POLICY "Public read" ON table_name
FOR SELECT USING (true);

CREATE POLICY "Auth write" ON table_name
FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  وصول المستخدمين فقط لبياناتهم
                </h4>
                <CodeBlock
                  language="sql"
                  code={`CREATE POLICY "User read own" ON table_name
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "User insert own" ON table_name
FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "User update own" ON table_name
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "User delete own" ON table_name
FOR DELETE USING (auth.uid() = user_id);`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  فحص RLS
                </h4>
                <CodeBlock
                  language="sql"
                  code={`-- التحقق من حالة RLS
SELECT tablename, rowsecurity
FROM pg_tables
WHERE tablename = 'your_table';

-- عرض Policies
SELECT * FROM pg_policies
WHERE tablename = 'your_table';`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  اختبار مع أدوار مختلفة
                </h4>
                <CodeBlock
                  language="sql"
                  code={`-- محاكاة مستخدم
SET ROLE authenticated;
SELECT * FROM your_table;

-- العودة للدور الأصلي
RESET ROLE;`}
                />
              </div>
            </div>
          </CheatSheet>
        </LessonSection>

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
