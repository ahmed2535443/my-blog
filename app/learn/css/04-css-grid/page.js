import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function CSSGridLesson() {
  const lesson = getLessonBySlug("css", "04-css-grid");

  const quiz1 = {
    question: "ما الفرق بين auto-fit و auto-fill في دالة repeat()؟",
    options: [
      "لا يوجد فرق بينهما، كلاهما متساويان تماماً",
      "auto-fit يُوسّع العناصر لملء المساحة الفارغة، بينما auto-fill يحتفظ بالأعمدة الفارغة",
      "auto-fill أحدث من auto-fit ولا تعمل إلا في المتصفحات الحديثة",
      "auto-fit يعمل فقط مع minmax() بينما auto-fill يعمل مع أي وحدة"
    ],
    correctIndex: 1,
    explanation: "auto-fit يُدمج الخلايا الفارغة ويوسّع العناصر المتاحة لملء المساحة الفارغة. بينما auto-fill يحتفظ بعدد الأعمدة المحددة حتى لو كانت فارغة. الفرق يظهر عندما لا تكفي العناصر لملء جميع الأعمدة: auto-fit ستمد العناصر لتملأ المساحة، بينما auto-fill ستحتفظ بأعمدة فارغة."
  };

  const quiz2 = {
    question: "متى تستخدم CSS Grid بدلاً من Flexbox؟",
    options: [
      "عندما تريد ترتيب العناصر في سطر واحد فقط",
      "عندما تحتاج إلى تخطيط ثنائي البعد ( صفوف وأعمدة معاً) مع تحكم دقيق في الأماكن",
      "عندما تريد فقط إضافة مسافة بين العناصر",
      "Flexbox دائماً أفضل من Grid في كل الحالات"
    ],
    correctIndex: 1,
    explanation: "CSS Grid مصمم للتخطيط ثنائي البعد حيث يمكنك التحكم في الصفوف والأعمدة معاً. Flexbox يعمل بشكل أفضل للتخطيط أحادي البعد (صف أو عمود واحد). إذا كنت تحتاج لترتيب عناصر في صفوف وأعمدة مع تحكم في مكان كل عنصر، Grid هو الأفضل."
  };

  const challenge = {
    title: "تحدي: تخطيط لوحة تحكم (Dashboard) بـ CSS Grid",
    description: "أنشئ لوحة تحكم تحتوي على شريط علوي (header)، شريط جانبي (sidebar)، محتوى رئيسي (main content)، وشريط سفلي (footer). استخدم خصائص CSS Grid لتحقيق هذا التخطيط مع Areas.",
    requirements: [
      "استخدم display: grid على الحاوية الرئيسية",
      "عرّف مناطق باستخدام grid-template-areas",
      "اجعل الشريط الجانبي بعرض ثابت 250px",
      "اجعل المحتوى الرئيسي يملأ المساحة المتاحة",
      "أضف مسافة بين المناطق باستخدام gap",
      "اجعل التصميم متجاوباً باستخدام media query"
    ],
    starterCode: `/* أكمل الكود هنا */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  min-height: 100vh;
  gap: 1rem;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

/* أضف تنسيقات إضافية هنا */`,
    hint: "استخدم padding و background-color لكل منطقة لتوضيح الحدود. لا تنسَ إضافة min-height: 100vh على الحاوية."
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== 1. ما هو CSS Grid ==================== */}
        <LessonSection id="what-is" title="ما هو CSS Grid">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong>CSS Grid Layout</strong> هو نظام تخطيط (layout system) ثنائي البعد في CSS يسمح لك بتنظيم العناصر في صفوف (rows) وأعمدة (columns) في نفس الوقت. يتم تفعيله بإضافة خاصية <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-pink-600 dark:text-pink-400">display: grid</code> على الحاوية.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            على عكس Flexbox الذي يعمل في محور واحد، يوفر Grid تحكماً كاملاً في كلا المحورين (أفقي ورأسي) في آن واحد. هذا يجعله مثالياً لإنشاء تخطيطات معقدة مثل صفحات الويب الكاملة ولوحات التحكم والشبكات المتعددة الأعمدة.
          </p>

          <CodeBlock language="css" code={`.container {
  display: grid;
}`} />

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-blue-800 dark:text-blue-300">
              <strong>ملاحظة مهمة:</strong> عند تطبيق <code>display: grid</code> على حاوية، تصبح العناصر المباشرة أبناء (grid items) تلقائياً. العناصر المتداخلة لن تتأثر إلا إذا عُيّنت كحاوية Grid أيضاً.
            </p>
          </div>
        </LessonSection>

        {/* ==================== 2. لماذا نستخدم CSS Grid ==================== */}
        <LessonSection id="why-use" title="لماذا نستخدم CSS Grid">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            CSS Grid يوفر حلولاً قوية لمشاكل التخطيط التي واجهها المطورون لسنوات:
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>تخطيط ثنائي البعد:</strong> تحكم كامل في الصفوف والأعمدة معاً، وليس صف أو عمود واحد فقط.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>مناطقالمسمّاة (Named Areas):</strong> يمكنك تسمية مناطق التخطيط (مثل header، sidebar، main) وتوظيف العناصر فيها بسهولة.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>الاستجابة بدون Media Queries:</strong> خصائص مثل auto-fit و minmax() تجعل التصميم متجاوباً تلقائياً.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>المحاذاة الدقيقة:</strong> align و justify يعملان على كلا المحورين مع تحكم متقدم في كل عنصر.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>التبسيط:</strong> كود أقل وأكثر وضوحاً مقارنة بالطرق القديمة (float، position، table).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>Subgrid:</strong> إمكانية محاذاة الشبكات المتداخلة مع شبكة الأصل لتنسيق متقدم.</span>
            </li>
          </ul>
        </LessonSection>

        {/* ==================== 3. المشكلة التي يحلها ==================== */}
        <LessonSection id="problem-solved" title="المشكلة التي يحلها">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            قبل ظهور CSS Grid، واجه المطورون مشاكل كبيرة في إنشاء تخطيطات ثنائية البعد:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">المشكلة 1: تخطيط الصفحة الكاملة</h4>
              <p className="text-red-700 dark:text-red-400 mb-2">
                إنشاء تخطيط يحتوي على header و sidebar و main و footer كان يتطلب CSS معقد ومتداخل:
              </p>
              <CodeBlock language="css" code={`.old-layout {
  /* استخدام float + width + margins */
}
.old-layout .sidebar {
  float: right;
  width: 250px;
}
.old-layout .main {
  margin-right: 260px;
  /* يجب حساب العرض يدوياً! */
}`} />
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">المشكلة 2: الشبكات المتعددة الأعمدة</h4>
              <p className="text-red-700 dark:text-red-400">
                إنشاء شبكة بطاقات (cards) بعدد أعمدة متجاوب يتطلب حسابات يدوية مع flex-wrap و widths نسبية، وكانصعب في التحكم.
              </p>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">المشكلة 3: تراكب العناصر (Overlapping)</h4>
              <p className="text-red-700 dark:text-red-400">
                جعل عنصر يتوسط آخر أو يتراكب عليه كان يتطلب position: absolute و حسابات transform معقدة.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            CSS Grid يحل جميع هذه المشاكل بطريقة موحدة وبسيطة.
          </p>
        </LessonSection>

        {/* ==================== 4. شرح بسيط ==================== */}
        <LessonSection id="simple-explanation" title="شرح بسيط">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            تخيّل أن لديك لوحة شطرنج (Grid) فارغة. أنت تحدد عدد الصفوف والأعمدة، ثم تضع القطع في أماكنها المحددة. CSS Grid يعمل بنفس الطريقة:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h4 className="text-purple-800 dark:text-purple-300 font-bold mb-2">الحاوية (Grid Container)</h4>
              <ul className="text-purple-700 dark:text-purple-400 space-y-1 text-sm">
                <li>• كم عدد الأعمدة؟ ← grid-template-columns</li>
                <li>• كم عدد الصفوف؟ ← grid-template-rows</li>
                <li>• ما المسافة بين الخلايا؟ ← gap</li>
                <li>• هل تريد تسمية المناطق؟ ← grid-template-areas</li>
                <li>• كيف تُوزع المساحة الزائدة؟ ← grid-auto-columns / grid-auto-rows</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">العنصر (Grid Item)</h4>
              <ul className="text-green-700 dark:text-green-400 space-y-1 text-sm">
                <li>• أين توضع عمودياً؟ ← grid-column</li>
                <li>• أين توضع أفقياً؟ ← grid-row</li>
                <li>• ما المنطقة المخصصة؟ ← grid-area</li>
                <li>• كم عمود تشغل؟ ← grid-column: span 2</li>
                <li>• كم صف تشغل؟ ← grid-row: span 3</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-300">
              <strong>القاعدة الذهبية:</strong> الخصائص التي تُضاف على الحاوية (container) تتحكم في الشبكة كلها. الخصائص التي تُضاف على العنصر (item) تتحكم في مكان ذلك العنصر فقط.
            </p>
          </div>
        </LessonSection>

        {/* ==================== 5. مثال بسيط ==================== */}
        <LessonSection id="simple-example" title="مثال بسيط">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            لنبدأ بمثال يوضح أساسيات Grid - إنشاء شبكة من 3 أعمدة وصفرين:
          </p>

          <CodeBlock language="html" code={`<div class="grid-container">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
  <div class="item item-4">4</div>
  <div class="item item-5">5</div>
  <div class="item item-6">6</div>
</div>`} />

          <CodeBlock language="css" code={`.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 200px; /* 3 أعمدة */
  grid-template-rows: 100px 150px;          /* صفان */
  gap: 1rem;                                 /* مسافة بين الخلايا */
}

.item {
  background-color: #3b82f6;
  color: white;
  display: grid;
  place-items: center;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: bold;
}`} />

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-800 dark:text-green-300">
              <strong>شرح الكود:</strong> <code>grid-template-columns: 200px 1fr 200px</code> يإنشاء 3 أعمدة: العمود الأول والثالث عرضهما 200px ثابت، والعمود الأوسط (<code>1fr</code>) يأخذ المساحة المتبقية. <code>gap: 1rem</code> يضيف مسافة 1rem بين جميع الخلايا.
            </p>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 mb-4">
            وحدة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-pink-600 dark:text-pink-400">fr</code> (fraction) تمثل كساً من المساحة المتاحة. مثال: <code>1fr 2fr</code> يعني العمود الثاني يأخذ ضعف مساحة الأول.
          </p>

          <CodeBlock language="css" code={`/* أمثلة علىاستخدام fr */
grid-template-columns: 1fr 1fr 1fr;     /* 3 أعمدة متساوية */
grid-template-columns: 1fr 2fr 1fr;     /* الأعمدة: 25% 50% 25% */
grid-template-columns: 200px 1fr;       /* عمود ثابت + عمود مرن */`} />

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 mb-4">
            استخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-pink-600 dark:text-pink-400">repeat()</code> يُبسّط كتابة الأعمدة أو الصفوف المتكررة:
          </p>

          <CodeBlock language="css" code={`/* بدلاً من كتابة الأعمدة يدوياً */
grid-template-columns: 1fr 1fr 1fr 1fr;

/* استخدم repeat() */
grid-template-columns: repeat(4, 1fr);

/* يمكنك mixin الوحدات المختلفة */
grid-template-columns: repeat(3, 200px);
grid-template-columns: repeat(2, 1fr 200px); /* نمط متكرر */`} />
        </LessonSection>

        {/* ==================== 6. مثال عملي ==================== */}
        <LessonSection id="practical-example" title="مثال عملي">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            إليك أمثلة عملية على أنماط شائعة في التصميم باستخدام CSS Grid:
          </p>

          {/* مثال 1: تخطيط الصفحة الكاملة */}
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">النمط 1: تخطيط الصفحة الكاملة بـ Grid Areas</h4>

          <CodeBlock language="jsx" code={`export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="header">الشعار + شريط التنقل</header>
      <aside className="sidebar">القائمة الجانبية</aside>
      <main className="main">المحتوى الرئيسي</main>
      <footer className="footer">التذييل</footer>
    </div>
  );
}`} />

          <CodeBlock language="css" code={`.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  min-height: 100vh;
  gap: 1rem;
}

.header  { grid-area: header; background: #1a1a2e; color: white; padding: 1rem; }
.sidebar { grid-area: sidebar; background: #16213e; color: white; padding: 1rem; }
.main    { grid-area: main; background: #f5f5f5; padding: 2rem; }
.footer  { grid-area: footer; background: #1a1a2e; color: white; text-align: center; padding: 1rem; }`} />

          {/* مثال 2: شبكة بطاقات متجاوبة */}
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">النمط 2: شبكة بطاقات متجاوبة (Responsive Cards)</h4>

          <CodeBlock language="jsx" code={`export default function CardsGrid() {
  const cards = [
    { title: "HTML", desc: "أساسيات الويب" },
    { title: "CSS", desc: "تنسيق الصفحات" },
    { title: "JavaScript", desc: "برمجة الويب" },
    { title: "React", desc: "مكتبة واجهات" },
    { title: "Next.js", desc: "إطار عمل" },
    { title: "Node.js", desc: "تطوير الخادم" },
  ];

  return (
    <div className="cards-grid">
      {cards.map((card, i) => (
        <div key={i} className="card">
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </div>
      ))}
    </div>
  );
}`} />

          <CodeBlock language="css" code={`.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

.card h3 {
  color: #1a1a2e;
  margin-bottom: 0.5rem;
}

.card p {
  color: #6b7280;
}`} />

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-800 dark:text-green-300">
              <strong>السحر هنا:</strong> <code>repeat(auto-fit, minmax(280px, 1fr))</code> يجعل الشبكة متجاوبة تلقائياً! كل بطاقة لا تقل عرضها عن 280px، وتمتد لملء المساحة المتاحة. بدون أي media query!
            </p>
          </div>

          {/* مثال 3: تخطيط Holy Grail */}
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">النمط 3: التخطيط الكلاسيكي (Holy Grail Layout)</h4>

          <CodeBlock language="css" code={`/* Holy Grail Layout الشهير بـ Grid */
.page {
  display: grid;
  grid-template:
    "header  header  header"  auto
    "nav     main    aside"   1fr
    "footer  footer  footer"  auto
    / 200px  1fr     200px;
  min-height: 100vh;
  gap: 1rem;
}

.header { grid-area: header; }
.nav    { grid-area: nav; }
.main   { grid-area: main; }
.aside  { grid-area: aside; }
.footer { grid-area: footer; }

/* استجابة: على الشاشات الصغيرة، الأعمدة الجانبية تختفي */
@media (max-width: 768px) {
  .page {
    grid-template:
      "header" auto
      "nav"    auto
      "main"   1fr
      "aside"  auto
      "footer" auto
      / 1fr;
  }
}`} />

          {/* مثال 4: تخطيط مagazine */}
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">النمط 4: تخطيط مجلة (Magazine Layout)</h4>

          <CodeBlock language="css" code={`/* تخطيط مجلة مع عناصر متداخلة */
.magazine {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(150px, auto);
  gap: 1rem;
  padding: 2rem;
}

.featured {
  grid-column: 1 / 3;     /* يبدأ من العمود 1 لغاية 3 */
  grid-row: 1 / 3;        /* يبدأ من الصف 1 لغاية 3 */
}

.sidebar-ad {
  grid-column: 3 / 5;
  grid-row: 1;
}

.article-1 { grid-column: 1 / 2; grid-row: 3; }
.article-2 { grid-column: 2 / 4; grid-row: 3; }
.article-3 { grid-column: 4 / 5; grid-row: 3; }`} />
        </LessonSection>

        {/* ==================== 7. ماذا يحدث خلف الكواليس ==================== */}
        <LessonSection id="behind-the-scenes" title="ماذا يحدث خلف الكواليس">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            عند تطبيق CSS Grid على حاوية، يقوم المتصفح بالخطوات التالية:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">الخطوة 1: إنشاء الشبكة (Grid Formation)</h4>
              <p className="text-gray-700 dark:text-gray-300">
                يحدد المتصفح خطوط الشبكة (grid lines) بناءً على <code>grid-template-columns</code> و <code>grid-template-rows</code>. كل خلية مساحتها محددة مسبقاً. الخطوط تُرقّم من 1 (للبداية) إلى N+1 (للنهاية).
              </p>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">الخطوة 2: وضع العناصر (Placement)</h4>
              <p className="text-gray-700 dark:text-gray-300">
                يضع المتصفح العناصر في الخلايا المتاحة. إذا حددت مكان العنصر (باستخدام <code>grid-column</code> و <code>grid-row</code>)، يضعه هناك. وإلا، يضعه تلقائياً في الخلايا الفارغة بترتيب تصاعدي (الأول خلية فارغة → العنصر الأول، وهكذا).
              </p>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">الخطوة 3: حساب الأحجام (Sizing)</h4>
              <p className="text-gray-700 dark:text-gray-300">
                يحسب المتصفح أحجام الأعمدة والصفوف. الأعمدة بأحجام ثابتة (px) تأخذ حجمها. الأعمدة بـ <code>fr</code> تتشارك المساحة المتبقية. الأعمدة بـ <code>auto</code> تأخذ حجم المحتوى. ثم يحسب ارتفاعات الصفوف بناءً على أعلى عنصر في كل صف.
              </p>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">الخطوة 4: ملء المساحة الزائدة (Auto Placement)</h4>
              <p className="text-gray-700 dark:text-gray-300">
                إذا لم تُحدد مكان لعنصر، يضعه المتصفح تلقائياً. خاصية <code>grid-auto-flow</code> تتحكم في الاتجاه: <code>row</code> (الافتراضي) يملأ صفوف أولاً، <code>column</code> يملأ أعمدة أولاً، <code>dense</code> يملأ الفراغات المتبقية.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <h4 className="text-yellow-800 dark:text-yellow-300 font-bold mb-2">كيف تعمل وحدة fr؟</h4>
            <p className="text-yellow-700 dark:text-yellow-400">
              وحدة <code>fr</code> لا تمثل نسبة مئوية. بل تمثل "جزءاً" من المساحة المتبقية بعد حساب الأحجام الثابتة. مثال: إذا كان العرض 600px والتعريف <code>200px 1fr 1fr</code>، فإن العمود الأول يأخذ 200px، والباقي (400px) يتوزع بالتساوي بين العمودين الثاني والثالث (200px لكل منهما).
            </p>
          </div>

          <CodeBlock language="css" code={`/* مثال توضيحي لكيف يعمل الـ Grid engine */
.container {
  display: grid;
  width: 800px;
  grid-template-columns: 200px 1fr 2fr;
  grid-template-rows: 100px auto;
  gap: 10px;
}

/*
الحساب:
- العرض المتاح: 800px
- العمود الأول: 200px (ثابت)
- المساحة المتبقية: 800 - 200 - 10(gap) = 590px
- fr الوحدة: 590 / (1+2) = ~196.67px
- العمود الثاني: ~196.67px (1fr)
- العمود الثالث: ~393.33px (2fr)

الارتفاع:
- الصف الأول: 100px (ثابت)
- الصف الثاني: depends on content (auto)
*/}`} />
        </LessonSection>

        {/* ==================== 8. الأخطاء الشائعة ==================== */}
        <LessonSection id="common-mistakes" title="الأخطاء الشائعة">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            إليك الأخطاء الأكثر شيوعاً التي يقع فيها المطورون عند استخدام CSS Grid:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">الخطأ 1: استخدام margin بدل gap</h4>
              <p className="text-red-700 dark:text-red-400 mb-2">
                نفس المشكلة في Flexbox - استخدام margin على العناصر يسبب مسافات غير متساوية في الأطراف.
              </p>
              <CodeBlock language="css" code={`/* ❌ الطريقة الخاطئة */
.grid-item { margin: 10px; }

/* ✅ الطريقة الصحيحة */
.grid-container {
  display: grid;
  gap: 1rem;
}`} />
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">الخطأ 2: استخدام percentages مع grid-template-rows</h4>
              <p className="text-red-700 dark:text-red-400 mb-2">
                النسب المئوية لا تعمل بشكل مباشر مع ارتفاعات صفوف Grid لأن الارتفاع يعتمد على المحتوى. استخدم <code>fr</code> أو <code>minmax()</code> بدلاً منها.
              </p>
              <CodeBlock language="css" code={`/* ❌ لا يعمل كما المتوقع */
.grid {
  grid-template-rows: 20% 80%;
}

/* ✅ الطريقة الصحيحة */
.grid {
  grid-template-rows: 1fr 4fr;
  /* أو */
  grid-template-rows: minmax(100px, 1fr) 3fr;
}`} />
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">الخطأ 3: نسيان grid-auto-rows</h4>
              <p className="text-red-700 dark:text-red-400 mb-2">
                إذا لم تُحدد ارتفاع الصفوف، العناصر قد تظهر بشكل غير متوقع. حدد <code>grid-auto-rows</code> لضمان ارتفاع أدنى مناسب.
              </p>
              <CodeBlock language="css" code={`/* ✅ تأكد من تحديد الارتفاع الأدنى */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  gap: 1rem;
}`} />
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">الخطأ 4: خلط Grid مع Flexbox في الحاوية نفسها</h4>
              <p className="text-red-700 dark:text-red-400 mb-2">
                لا تضع <code>display: grid</code> و <code>display: flex</code> على نفس العنصر. اختر أحدهما. لكن يمكنك استخدام Grid على الحاوية و Flexbox على العناصر الداخلية.
              </p>
              <CodeBlock language="css" code={`/* ❌ خطأ شائع */
.container {
  display: grid;
  display: flex; /* يلغي grid! */
}

/* ✅ صحيح - Grid للخارج، Flex للداخل */
.page     { display: grid; }
.navbar   { display: flex; } /* حاوية فرعية */`} />
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">الخطأ 5: عدم استخدام minmax() مع auto-fit/auto-fill</h4>
              <p className="text-red-700 dark:text-red-400">
                استخدام auto-fit أو auto-fill بدون minmax() لن يعطيك التصميم المتجاوب المتوقع. minmax() يحدد الحد الأدنى والأقصى لكل عمود.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== 9. أفضل الممارسات ==================== */}
        <LessonSection id="best-practices" title="أفضل الممارسات">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اتبع هذه الممارسات للحصول على أفضل نتائج مع CSS Grid:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">1. استخدم grid-template-areas للتخطيط المعقد</h4>
              <p className="text-green-700 dark:text-green-400">
                تسمية المناطق تجعل الكود أسهل في القراءة والصيانة. بدلاً من الأرقام، استخدم أسماء مثل "header" و "sidebar" و "main".
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">2. استخدم repeat(auto-fit, minmax()) للشبكات المتجاوبة</h4>
              <p className="text-green-700 dark:text-green-400">
                هذا النمط يوفر تصمياً متجاوباً تلقائياً بدون media queries. كل عمود يتكيف حسب حجم الشاشة.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">3. فكّر في الأبعاد قبل الخصائص</h4>
              <p className="text-green-700 dark:text-green-400">
                Grid للتبليط ثنائي البعد (صفوف + أعمدة). Flexbox للتبليط أحادي البعد (صف واحد أو عمود واحد). لا تستخدم Grid لتوزيع عناصر في صف واحد فقط.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">4. استخدم minmax() لضمان أحجام مناسبة</h4>
              <p className="text-green-700 dark:text-green-400">
                <code>minmax(200px, 1fr)</code> يضمن أن كل عمود لا يقل عرضه عن 200px ويمتد لملء المساحة المتاحة. هذا يمنع تقلص العناصر بشكل مفرط.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">5. استخدم gap دائماً</h4>
              <p className="text-green-700 dark:text-green-400">
                <code>gap</code> هو الحل الأنظف للمسافات بين العناصر. يعمل مع Grid و Flexbox. لا حاجة لـ margin سالبة أو padding زائدة.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">6. استخدم place-items: center للتوسيط السريع</h4>
              <p className="text-green-700 dark:text-green-400">
                <code>place-items: center</code> على حاوية Grid يُوسيط جميع العناصر أفقياً ورأسياً في سطر واحد فقط. الحل الأسهل للتوسيط.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ==================== 10. ملخص ==================== */}
        <LessonSection id="summary" title="ملخص">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في هذه الدرس تعلّمنا عن CSS Grid و Subgrid. إليك أبرز النقاط:
          </p>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg mb-4">
            <ul className="space-y-2 text-blue-800 dark:text-blue-300">
              <li>✅ <strong>display: grid</strong> يفعّل CSS Grid على الحاوية</li>
              <li>✅ <strong>grid-template-columns/rows</strong> يحددان بنية الشبكة</li>
              <li>✅ <strong>fr</strong> وحدة مرنة تمثل كساً من المساحة المتبقية</li>
              <li>✅ <strong>repeat(auto-fit, minmax())</strong> للتصميم المتجاوب التلقائي</li>
              <li>✅ <strong>grid-template-areas</strong> لتعريف مناطق باسماء واضحة</li>
              <li>✅ <strong>gap</strong> لإضافة مسافات بين العناصر بسهولة</li>
              <li>✅ <strong>grid-column / grid-row</strong> لتحديد مكان كل عنصر بدقة</li>
              <li>✅ <strong>Subgrid</strong> لمحاذاة الشبكات المتداخلة مع الشبكة الأصلية</li>
              <li>✅ Grid للتخطيط ثنائي البعد، Flexbox للتخطيط أحادي البعد</li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            CSS Grid هو أقوى أداة تخطيط في CSS الحديثة. مع الفهم الصحيح لخصائصه، يمكنك إنشاء تخطيطات معقدة بسهولة وwithout hacks. في الدرس التالي، سنتعمق في التصميم المتجاوب الحديث!
          </p>
        </LessonSection>

        {/* ==================== Quiz Section ==================== */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">اختبر معلوماتك</h2>
          <Quiz {...quiz1} />
          <Quiz {...quiz2} />
        </section>

        {/* ==================== Challenge Section ==================== */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">تحدي عملي</h2>
          <Challenge {...challenge} />
        </section>

        {/* ==================== CheatSheet Section ==================== */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">ورقة مرجعية</h2>
          <CheatSheet title="ورقة مرجعية: CSS Grid + Subgrid">
            <div className="space-y-6">
              {/* قسم خصائص الحاوية */}
              <div>
                <h4 className="font-bold text-lg mb-3" style={{ color: "var(--foreground)" }}>خصائص حاوية Grid (Grid Container)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ direction: "ltr" }}>
                    <thead>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <th className="text-left p-2" style={{ color: "var(--muted)" }}>الخاصية</th>
                        <th className="text-left p-2" style={{ color: "var(--muted)" }}>القيم</th>
                        <th className="text-left p-2" style={{ color: "var(--muted)" }}>الوصف</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">display</td>
                        <td className="p-2 font-mono">grid | inline-grid</td>
                        <td className="p-2">يحوّل العنصر إلى حاوية Grid</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">grid-template-columns</td>
                        <td className="p-2 font-mono">[values]</td>
                        <td className="p-2">يحدد عدد وعرض أعمدة الشبكة</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">grid-template-rows</td>
                        <td className="p-2 font-mono">[values]</td>
                        <td className="p-2">يحدد عدد وارتفاع صفوف الشبكة</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">grid-template-areas</td>
                        <td className="p-2 font-mono">&quot;name name&quot;</td>
                        <td className="p-2">يعرف مناطقالمسمّاة في الشبكة</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">gap</td>
                        <td className="p-2 font-mono">&lt;length&gt;</td>
                        <td className="p-2">المسافة بين خلايا الشبكة</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">justify-items</td>
                        <td className="p-2 font-mono">start | end | center | stretch</td>
                        <td className="p-2">محاذاة العناصر أفقياً داخل خلاياها</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">align-items</td>
                        <td className="p-2 font-mono">start | end | center | stretch</td>
                        <td className="p-2">محاذاة العناصر رأسياً داخل خلاياها</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">justify-content</td>
                        <td className="p-2 font-mono">start | end | center | space-between</td>
                        <td className="p-2">توزيع الشبكة نفسها أفقياً</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">align-content</td>
                        <td className="p-2 font-mono">start | end | center | space-between</td>
                        <td className="p-2">توزيع الشبكة نفسها رأسياً</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">grid-auto-flow</td>
                        <td className="p-2 font-mono">row | column | dense</td>
                        <td className="p-2">اتجاه ملء العناصر التلقائي</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">grid-auto-columns</td>
                        <td className="p-2 font-mono">&lt;length&gt;</td>
                        <td className="p-2">حجم الأعمدة التلقائية</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono text-pink-600">grid-auto-rows</td>
                        <td className="p-2 font-mono">&lt;length&gt;</td>
                        <td className="p-2">ارتفاع الصفوف التلقائية</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* قسم خصائص العنصر */}
              <div>
                <h4 className="font-bold text-lg mb-3" style={{ color: "var(--foreground)" }}>خصائص عناصر Grid (Grid Items)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ direction: "ltr" }}>
                    <thead>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <th className="text-left p-2" style={{ color: "var(--muted)" }}>الخاصية</th>
                        <th className="text-left p-2" style={{ color: "var(--muted)" }}>القيم</th>
                        <th className="text-left p-2" style={{ color: "var(--muted)" }}>الوصف</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">grid-column</td>
                        <td className="p-2 font-mono">start / end | span N</td>
                        <td className="p-2">يحدد مكان العنصر أفقياً</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">grid-row</td>
                        <td className="p-2 font-mono">start / end | span N</td>
                        <td className="p-2">يحدد مكان العنصر رأسياً</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">grid-area</td>
                        <td className="p-2 font-mono">name | row-start / col-start</td>
                        <td className="p-2">يحدد مكان العنصر بالاسم أو بالأرقام</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2 font-mono text-pink-600">justify-self</td>
                        <td className="p-2 font-mono">start | end | center | stretch</td>
                        <td className="p-2">محاذاة عنصر واحد أفقياً</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono text-pink-600">align-self</td>
                        <td className="p-2 font-mono">start | end | center | stretch</td>
                        <td className="p-2">محاذاة عنصر واحد رأسياً</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* قسم Grid vs Flexbox */}
              <div>
                <h4 className="font-bold text-lg mb-3" style={{ color: "var(--foreground)" }}>دليل القرار: Grid vs Flexbox</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ direction: "ltr" }}>
                    <thead>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <th className="text-left p-2" style={{ color: "var(--muted)" }}>الحالة</th>
                        <th className="text-left p-2" style={{ color: "var(--muted)" }}>الحل الأفضل</th>
                        <th className="text-left p-2" style={{ color: "var(--muted)" }}>السبب</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2">صف من الأزرار</td>
                        <td className="p-2 font-mono text-blue-500">Flexbox</td>
                        <td className="p-2">تبليط أحادي البعد</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2">شبكة بطاقات</td>
                        <td className="p-2 font-mono text-purple-500">Grid</td>
                        <td className="p-2">تبليط ثنائي البعد</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2">توسيط عنصر</td>
                        <td className="p-2 font-mono text-green-500">كلاهما</td>
                        <td className="p-2">Grid: place-items: center</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2">شريط تنقل</td>
                        <td className="p-2 font-mono text-blue-500">Flexbox</td>
                        <td className="p-2">توزيع أفقي بسيط</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2">لوحة تحكم</td>
                        <td className="p-2 font-mono text-purple-500">Grid</td>
                        <td className="p-2">تخطيط مع مناطقالمسمّاة</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                        <td className="p-2">قائمة جانبية + محتوى</td>
                        <td className="p-2 font-mono text-purple-500">Grid</td>
                        <td className="p-2">أعمدة متفاوتة العرض</td>
                      </tr>
                      <tr>
                        <td className="p-2">تغليف عناصر نصية</td>
                        <td className="p-2 font-mono text-blue-500">Flexbox</td>
                        <td className="p-2">flex-wrap: wrap</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* قسم الأنماط الشائعة */}
              <div>
                <h4 className="font-bold text-lg mb-3" style={{ color: "var(--foreground)" }}>الأنماط الشائعة السريعة</h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg" style={{ background: "var(--background)" }}>
                    <p className="font-mono text-sm mb-1">grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>شبكة بطاقات متجاوبة تلقائياً</p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: "var(--background)" }}>
                    <p className="font-mono text-sm mb-1">display: grid; place-items: center;</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>توسيط كامل في سطر واحد</p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: "var(--background)" }}>
                    <p className="font-mono text-sm mb-1">grid-template-columns: 250px 1fr;</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>شريط جانبي ثابت + محتوى مرن</p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: "var(--background)" }}>
                    <p className="font-mono text-sm mb-1">grid-auto-rows: minmax(100px, auto);</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>ارتفاع أدنى ثابت مع توسع حسب المحتوى</p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: "var(--background)" }}>
                    <p className="font-mono text-sm mb-1">grid-column: span 2;</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>عنصر يشغل عمودين</p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: "var(--background)" }}>
                    <p className="font-mono text-sm mb-1">grid-template-columns: subgrid;</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>شبكة فرعية تتبع خطوط الشبكة الأصلية</p>
                  </div>
                </div>
              </div>

              {/* قسم Subgrid */}
              <div>
                <h4 className="font-bold text-lg mb-3" style={{ color: "var(--foreground)" }}>Subgrid - محاذاة الشبكات المتداخلة</h4>
                <div className="p-3 rounded-lg" style={{ background: "var(--background)" }}>
                  <p className="mb-2">Subgrid يسمح لشبكة فرعية بمتابعة خطوط الشبكة الأصلية بدلاً من تعريف خطوط جديدة.</p>
                  <CodeBlock language="css" code={`.parent-grid {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 1rem;
}

.child-card {
  display: grid;
  /* يتبع أعمدة الأب الثلاثة */
  grid-template-columns: subgrid;
  grid-row: span 1;
}`} />
                  <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>مفيد جداً في البطاقات التي تحتاج لمحتوى محاذاً عبر عدة أعمدة.</p>
                </div>
              </div>
            </div>
          </CheatSheet>
        </section>

        {/* ==================== التنقل بين الدروس ==================== */}
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
