import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ProjectPlanning() {
  const lesson = getLessonBySlug("final-project", "01-project-planning");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== مقدمة المشروع ==================== */}
        <LessonSection id="project-overview" title="نظرة عامة على مشروع المدونة">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في هذه المرحلة الأخيرة من المنهج، سنقوم ببناء مشروع حقيقي يجمع كل ما تعلمناه. المشروع هو <strong>مدونة احترافية</strong> كاملة تسمح للمستخدمين بإنشاء المقالات وإدارتها.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            لماذا مدونة؟ لأنها مشروع مثالي لتعلم تطوير الويب لأنه يتضمن:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li> CRUD كاملة: إنشاء وقراءة وتعديل وحذف المقالات</li>
            <li>نظام مصادقة: تسجيل دخول وحسابات المستخدمين</li>
            <li>قاعدة بيانات حقيقية: تخزين البيانات والعلاقات</li>
            <li>تصميم متجاوب: يعمل على جميع الأجهزة</li>
            <li>بحث وتصفية: إيجاد المقالات بسرعة</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h4 className="text-blue-800 dark:text-blue-300 font-bold text-lg mb-2">
              الميزات الأساسية للمدونة
            </h4>
            <ul className="text-blue-700 dark:text-blue-400 space-y-2">
              <li>صفحة رئيسية تعرض جميع المقالات المنشورة</li>
              <li>صفحة تفاصيل كل مقال</li>
              <li>نظام تسجيل دخول وإنشاء حساب</li>
              <li>لوحة تحكم للمستخدمين لإدارة مقالاتهم</li>
              <li>إنشاء وتعديل وحذف المقالات</li>
              <li>نظام تصنيفات لتنظيم المقالات</li>
              <li>البحث في المقالات</li>
              <li>التصميم المتجاوب مع الوضع الداكن</li>
            </ul>
          </div>
        </LessonSection>

        {/* ==================== تحليل المتطلبات ==================== */}
        <LessonSection id="requirements" title="تحليل المتطلبات">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            قبل كتابة أي كود، يجب أن نفهم بدقة ما نحتاجه. تحليل المتطلبات هو أهم خطوة في أي مشروع因为他 يمنعنا من إضافة ميزات غير ضرورية أو نسيان ميزات مهمة.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            المتطلبات الوظيفية (Functional Requirements)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            هذه هي الميزات التي يجب أن يعمل بها التطبيق:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">الميزة</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">الوصف</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">الأولوية</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">عرض المقالات</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">الصفحة الرئيسية تعرض جميع المقالات المنشورة</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><span className="text-red-600 dark:text-red-400 font-bold">عالية</span></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">تفاصيل المقال</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">صفحة مخصصة لكل مقال تحتوي على المحتوى الكامل</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><span className="text-red-600 dark:text-red-400 font-bold">عالية</span></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">المصادقة</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">تسجيل دخول وإنشاء حساب للمستخدمين</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><span className="text-red-600 dark:text-red-400 font-bold">عالية</span></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">إدارة المقالات</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">إنشاء وتعديل وحذف المقالات من لوحة التحكم</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><span className="text-red-600 dark:text-red-400 font-bold">عالية</span></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">التصنيفات</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">تصنيف المقالات في فئات مختلفة</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><span className="text-yellow-600 dark:text-yellow-400 font-bold">متوسطة</span></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">البحث</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">البحث في عناوين ومحتوى المقالات</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><span className="text-yellow-600 dark:text-yellow-400 font-bold">متوسطة</span></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">التعليقات</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">إضافة تعليقات على المقالات</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><span className="text-green-600 dark:text-green-400 font-bold">منخفضة</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            المتطلبات غير الوظيفية (Non-Functional Requirements)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            هذه هي المتطلبات المتعلقة بكيفية عمل التطبيق وليس ماذا يفعل:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>الأداء: الصفحة الرئيسية يجب أن تظهر خلال أقل من 3 ثوانٍ</li>
            <li>الأمان: حماية بيانات المستخدمين مع RLS</li>
            <li>الاستجابة: يعمل بشكل جيد على الهاتف والحاسوب</li>
            <li>قابلية الصيانة: كود نظيف ومنظم يسهل تطويره</li>
            <li>تجربة المستخدم: واجهة سهلة وواضحة</li>
          </ul>
        </LessonSection>

        {/* ==================== حزمة التقنيات ==================== */}
        <LessonSection id="tech-stack" title="حزمة التقنيات (Tech Stack)">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اخترنا مجموعة من التقنيات المتكاملة بشكل جيد لبناء مشروع المدونة. كل أداة تحل مشكلة محددة:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Next.js 16 - إطار عمل React
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                نستخدم Next.js لأنه يوفر التوجيه القائم على الملفات، وتكوينات الخادم، وجلب البيانات من الخادم، وتحسين محركات البحث تلقائياً.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>لماذا Next.js 16؟</strong> يدعم Server Components افتراضياً، ويعمل بشكل أسرع مع Turbopack.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Supabase - Backend كخدمة
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                نستخدم Supabase لقاعدة البيانات PostgreSQL، وتخزين الملفات، والوقت الفعلي. Supabase يوفر واجهة برمجية سهلة للتعامل مع قاعدة البيانات.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>لماذا Supabase؟</strong> مفتوح المصدر، ويدعم RLS للأمان، ويعمل بشكل ممتاز مع Next.js.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Clerk - مصادقة المستخدمين
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                نستخدم Clerk لإدارة حسابات المستخدمين وتسجيل الدخول. Clerk يوفر نماذج جاهزة وخيارات متعددة للمصادقة.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>لماذا Clerk؟</strong> سهل التكامل مع Next.js، ويدعم Google وGitHub login، ويوفر واجهة مستخدم جميلة.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Tailwind CSS - إطار عمل CSS
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                نستخدم Tailwind CSS لتصميم الواجهات بشكل سريع. بدل كتابة CSS مخصص، نستخدم الأدوات الجاهزة.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>لماذا Tailwind؟</strong> يسرّع التصميم بشكل كبير، ويدعم الوضع الداكن، ويعمل بشكل ممتاز مع Next.js.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== هيكل المشروع ==================== */}
        <LessonSection id="project-structure" title="هيكل المشروع">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            قبل البدء بالبرمجة، يجب أن نخطط لهيكل الملفات. هيكل جيد يجعل الكود أسهل في الفهم والصيانة.
          </p>

          <CodeBlock
            language="text"
            code={`my-blog/
├── app/
│   ├── layout.js                 # التخطيط الرئيسي
│   ├── page.js                   # الصفحة الرئيسية
│   ├── globals.css               # الأنماط العامة
│   ├── blog/
│   │   ├── page.js               # قائمة المقالات
│   │   └── [slug]/
│   │       └── page.js           # تفاصيل المقال
│   ├── dashboard/
│   │   ├── page.js               # لوحة التحكم
│   │   ├── create/
│   │   │   └── page.js           # إنشاء مقال جديد
│   │   └── edit/
│   │       └── [id]/
│   │           └── page.js       # تعديل مقال
│   ├── api/
│   │   └── posts/
│   │       └── route.js          # API للمقالات
│   └── auth/
│       ├── sign-in/
│       │   └── page.js           # صفحة تسجيل الدخول
│       └── sign-up/
│           └── page.js           # صفحة إنشاء حساب
├── components/
│   ├── Header.js                 # الشريط العلوي
│   ├── Footer.js                 # الشريط السفلي
│   ├── PostCard.js               # بطاقة المقال
│   ├── PostList.js               # قائمة المقالات
│   ├── SearchBar.js              # شريط البحث
│   ├── CategoryFilter.js         # فلتر التصنيفات
│   └── Pagination.js             # الترقيم
├── lib/
│   ├── supabase.js               # إعداد عميل Supabase
│   └── utils.js                  # دوال مساعدة
├── middleware.js                  # حماية المسارات
├── .env.local                    # متغيرات البيئة
├── next.config.js                # إعدادات Next.js
├── package.json                  # التبعيات
└── tailwind.config.js            # إعدادات Tailwind`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            هذا الهيكل يتبع أفضل الممارسات في Next.js:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li><strong>app/:</strong> يحتوي على جميع الصفحات والمسارات (File-based routing)</li>
            <li><strong>components/:</strong> يحتوي على المكونات القابلة لإعادة الاستخدام</li>
            <li><strong>lib/:</strong> يحتوي على الإعدادات والدوال المساعدة</li>
            <li><strong>middleware.js:</strong> يحمي المسارات المحمية (مثل Dashboard)</li>
          </ul>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h4 className="text-green-800 dark:text-green-300 font-bold text-lg mb-2">
              نصيحة: لماذا هذا الهيكل؟
            </h4>
            <p className="text-green-700 dark:text-green-400">
              هذا الهيكل يجعل الكود أسهل في الفهم لأن كل مجلد له وظيفة محددة. عندما تريد تعديل شيء معين، تعرف مباشرة أين تذهب. هذا هو سر قابلية الصيانة الجيدة.
            </p>
          </div>
        </LessonSection>

        {/* ==================== ملخص التقنيات ==================== */}
        <LessonSection id="summary" title="ملخص التخطيط">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الآن لدينا فهم واضح لما نحتاجه لبناء مشروع المدونة. دعنا نلخص ما تعلمناه:
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h4 className="text-blue-800 dark:text-blue-300 font-bold text-lg mb-3">
              النقاط الرئيسية
            </h4>
            <ul className="text-blue-700 dark:text-blue-400 space-y-2">
              <li>المشروع هو مدونة احترافية تستخدم Next.js + Supabase + Clerk + Tailwind</li>
              <li>نحتاج تحليل المتطلبات قبل البدء بالبرمجة</li>
              <li>هيكل الملفات الجيد يسهّل الصيانة والتطوير</li>
              <li>نبدأ بالمتطلبات الأساسية ثم نضيف الميزات الإضافية تدريجياً</li>
            </ul>
          </div>
        </LessonSection>

        {/* ==================== تدريب ==================== */}
        <Quiz
          question="ما هو السبب الرئيسي لاستخدام Supabase في مشروع المدونة؟"
          options={[
            "لأنه مجاني فقط",
            "لأنه يوفر قاعدة بيانات PostgreSQL مع RLS للأمان",
            "لأنه أسرع من Firebase",
            "لأنه لا يحتاج إنترنت"
          ]}
          correctAnswer={1}
          explanation="Supabase يوفر قاعدة بيانات PostgreSQL حقيقية مع Row Level Security (RLS) الذي يحمي البيانات على مستوى الصفوف. هذا يجعله مثالياً للمشاريع التي تحتاج أماناً قوياً."
        />

        <Challenge title="تحدي التخطيط: خطط لمشروعك الخاص">
          <p className="mb-4">
            قبل أن ننتقل للدرس التالي، خطط لمشروعك الخاص. اختر فكرة وحدد:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>ما هي الفكرة؟ (مثلاً: متجر إلكتروني، تطبيق مهام، منتدى)</li>
            <li>ما هي الميزات الأساسية التي تحتاجها؟</li>
            <li>ما هي حزمة التقنيات المناسبة؟</li>
            <li>ما هي هيكل الملفات المقترح؟</li>
          </ol>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            اكتب إجاباتك على ورقة أو في ملف نصي. سيساعدك هذا في تطوير مهارات التخطيط.
          </p>
        </Challenge>

        <CheatSheet title="ملخص rápido للتخطيط">
          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">1. حدد الفكرة</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">اكتب وصفاً مختصراً لمشروعك</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">2. حلل المتطلبات</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">حدد الميزات الأساسية والإضافية</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">3. اختر التقنيات</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">اختر الأدوات المناسبة لمشروعك</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">4. خطط الهيكل</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">حدد هيكل الملفات والمجلدات</p>
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
