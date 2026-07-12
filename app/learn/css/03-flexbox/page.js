import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function FlexboxLesson() {
  const lesson = getLessonBySlug("css", "03-flexbox");

  const quiz1 = {
    question: "في Flexbox، أي المحاور يتحكم فيها justify-content؟",
    options: [
      "المحور الرأسي (vertical axis) فقط",
      "المحور الأفقي (horizontal axis) فقط",
      "المحور الرئيسي (main axis) - سواء أفقي أو رأسي حسب flex-direction",
      "كلا المحورين في نفس الوقت"
    ],
    correctIndex: 2,
    explanation: "justify-content يتحكم في توزيع العناصر على المحور الرئيسي (main axis). هذا المحور يعتمد على اتجاه flex-direction: إذا كان row فالمحور الرئيسي أفقي، وإذا كان column فالمحور الرئيسي رأسي."
  };

  const quiz2 = {
    question: "ما الفرق بين flex: 1 و flex-grow: 1؟",
    options: [
      "لا يوجد فرق، كلاهما متساويان تماماً",
      "flex: 1 يساوي flex-grow: 1 + flex-shrink: 1 + flex-basis: 0%",
      "flex: 1 يساوي flex-grow: 1 + flex-shrink: 0 + flex-basis: auto",
      "flex-grow: 1 يشمل flex-shrink أيضاً"
    ],
    correctIndex: 1,
    explanation: "flex هو اختصار (shorthand) لثلاث خصائص: flex-grow و flex-shrink و flex-basis. flex: 1 يعني flex-grow: 1 و flex-shrink: 1 و flex-basis: 0%. أما flex-grow: 1 فقط فلن يغير قيمتي flex-shrink و flex-basis."
  };

  const challenge = {
    title: "تحدي: شريط تنقل متكامل بـ Flexbox",
    description: "أنشئ شريط تنقل (navbar) يحتوي على شعار على اليسار، روابط في الوسط، وزر تسجيل دخول على اليمين. استخدم خصائص Flexbox لتحقيق هذا التخطيط.",
    requirements: [
      "استخدم display: flex على الحاوية الرئيسية",
      "ضع الشعار على اليسار والزر على اليمين والروابط في الوسط",
      "أضف مسافة بين العناصر باستخدام gap",
      "اجعل الروابط متناسقة الارتفاع مع الشعار والزر",
      "أضف flex-wrap: wrap لجعل التصميم متجاوباً على الشاشات الصغيرة"
    ],
    starterCode: `/* أكمل الكود هنا */
.navbar {
  /* أضف خصائص Flexbox */

}

.navbar .logo {
  /* تنسيق الشعار */

}

.navbar .nav-links {
  /* تنسيق الروابط */

}

.navbar .login-btn {
  /* تنسيق زر تسجيل الدخول */

}`,
    hint: "思考: flex-direction: row هو الافتراضي. استخدم justify-content: space-between أو space-around لتوزيع العناصر. align-items: center لمحاذاة العناصر رأسياً."
  };

  const cheatSheet = {
    title: "ورقة مرجعية: Flexbox + place-items",
    sections: [
      {
        title: "خصائص حاوية Flexbox (Flex Container)",
        items: [
          { property: "display: flex", value: " activates Flexbox", description: "يحوّل العنصر إلى حاوية Flexbox" },
          { property: "flex-direction", value: "row | row-reverse | column | column-reverse", description: "يحدد اتجاه المحور الرئيسي" },
          { property: "flex-wrap", value: "nowrap | wrap | wrap-reverse", description: "يتحكم في التفاف العناصر" },
          { property: "justify-content", value: "flex-start | flex-end | center | space-between | space-around | space-evenly", description: "توزيع العناصر على المحور الرئيسي" },
          { property: "align-items", value: "flex-start | flex-end | center | stretch | baseline", description: "محاذاة العناصر على المحور المتقاطع" },
          { property: "align-content", value: "flex-start | flex-end | center | stretch | space-between | space-around", description: "توزيع الفراغات بين الأسطر المتعددة" },
          { property: "gap", value: "<length>", description: "المسافة بين العناصر (بديل أفضل من margin)" }
        ]
      },
      {
        title: "خصائص عناصر Flexbox (Flex Items)",
        items: [
          { property: "flex-grow", value: "0 (افتراضي) | <number>", description: "قدرة العنصر على النمو مقارنة بالعناصر الأخرى" },
          { property: "flex-shrink", value: "1 (افتراضي) | <number>", description: "قدرة العنصر على التقلص عند عدم وجود مساحة كافية" },
          { property: "flex-basis", value: "auto | <length>", description: "الحجم الأساسي للعنصر قبل تطبيق flex-grow/flex-shrink" },
          { property: "flex", value: "shorthand: grow shrink basis", description: "اختصار لخصائص flex-grow و flex-shrink و flex-basis" },
          { property: "align-self", value: "auto | flex-start | flex-end | center | stretch", description: "تجاوز align-items لعنصر واحد" },
          { property: "order", value: "0 (افتراضي) | <integer>", description: "تغيير ترتيب العناصر بدون تعديل HTML" }
        ]
      },
      {
        title: "أنماط شائعة سريعة",
        items: [
          { property: "التوسيط الكامل", value: "display: flex; justify-content: center; align-items: center;", description: "توسيط أفقي ورأسي" },
          { property: "التوسط المبسط", value: "display: grid; place-items: center;", description: "الحل الحديث بسطر واحد" },
          { property: "شريط التنقل", value: "display: flex; justify-content: space-between; align-items: center;", description: "توزيع العناصر مع مسافات متساوية" },
          { property: "أعمدة متساوية الارتفاع", value: "display: flex; align-items: stretch;", description: "تمديد العناصر لملء المساحة المتاحة" },
          { property: "تغليف المحتوى", value: "display: flex; flex-wrap: wrap; gap: 1rem;", description: "تفاف العناصر مع مسافة ثابتة" }
        ]
      },
      {
        title: "الطريقة القديمة مقابل Flexbox",
        items: [
          { property: "توسيط أفقي", value: "القديم: margin: 0 auto; width: fit-content;", description: "Flexbox: justify-content: center;" },
          { property: "توسيط رأسي", value: "القديم: position: absolute; top: 50%; transform: translateY(-50%);", description: "Flexbox: align-items: center;" },
          { property: "توسيط كامل", value: "القديم: position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);", description: "place-items: center;" },
          { property: "أعمدة متساوية", value: "القديم: display: table-cell; vertical-align: middle;", description: "Flexbox: display: flex; align-items: stretch;" },
          { property: "التوافقي", value: "القديم: float: left; overflow: hidden;", description: "Flexbox: display: flex; flex-wrap: wrap;" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* 1. ما هو Flexbox */}
        <LessonSection id="what-is" title="ما هو Flexbox">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong>Flexbox</strong> (اختصار لـ Flexible Box Layout) هو نظام تخطيط (layout) في CSS صُمم لتسهيل ترتيب العناصر داخل حاوية واحدة، سواء بشكل أفقي أو رأسي، مع التعامل الذكي مع المساحات المتاحة والفراغات.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            يتم تفعيل Flexbox بإضافة خاصية <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-pink-600 dark:text-pink-400">display: flex</code> على الحاوية (container). أي عناصر أبناء (children) داخل هذه الحاوية ستصبح تلقائياً عناصر Flex (flex items).
          </p>

          <CodeBlock language="css" code={`.container {
  display: flex;
}`} />

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-blue-800 dark:text-blue-300">
              <strong>ملاحظة مهمة:</strong> Flexbox يعمل في محورين: المحور الرئيسي (main axis) والمحور المتقاطع (cross axis). اتجاه المحور الرئيسي يعتمد على قيمة <code>flex-direction</code>.
            </p>
          </div>
        </LessonSection>

        {/* 2. لماذا نستخدم Flexbox */}
        <LessonSection id="why-use" title="لماذا نستخدم Flexbox">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            قبل Flexbox، كان ترتيب العناصر في صفحة ويب يعتمد على تقنيات قديمة و معقدة. إليك الأسباب الرئيسية لاستخدام Flexbox:
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>التوسيط السهل:</strong> توسيط عنصر أفقياً ورأسياً في سطر واحد بدلاً من استخدام position و transform.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>توزيع مرن:</strong> توزيع المساحات بين العناصر بسهولة مع justify-content.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>أعمدة متساوية الارتفاع:</strong> إنشاء أعمدة بنفس الارتفاع تلقائياً مع align-items: stretch.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>ترتيب مرن:</strong> تغيير ترتيب العناصر باستخدام خاصية order دون تعديل HTML.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>الاستجابة:</strong> تكييف التصميم مع أحجام الشاشات المختلفة باستخدام flex-wrap.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>تبسيط الكود:</strong> كود CSS أقل وأكثر وضوحاً مقارنة بالطرق القديمة.</span>
            </li>
          </ul>
        </LessonSection>

        {/* 3. المشكلة التي يحلها */}
        <LessonSection id="problem-solved" title="المشكلة التي يحلها">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            قبل ظهور Flexbox، واجه المطورون مشاكل عديدة في تخطيط صفحات الويب:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">المشكلة 1: التوسيط الصعب</h4>
              <p className="text-red-700 dark:text-red-400">
                توسيط عنصر أفقياً ورأسياً في الحاوية كان يتطلب هذا الكود المعقد:
              </p>
              <CodeBlock language="css" code={`.old-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`} />
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">المشكلة 2: الأعمدة المتساوية</h4>
              <p className="text-red-700 dark:text-red-400">
                إنشاء أعمدة بنفس الارتفاع كان يتطلب display: table أو حسابات يدوية معقدة.
              </p>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">المشكلة 3: العناصر العائمة (Floats)</h4>
              <p className="text-red-700 dark:text-red-400">
                استخدام float: left كان يسبب مشاكل في تدفق المحتوى وتداخل النصوص و缺失 clearfix.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Flexbox يحل جميع هذه المشاكل بطريقة بسيطة ومتناسقة.
          </p>
        </LessonSection>

        {/* 4. شرح بسيط */}
        <LessonSection id="simple-explanation" title="شرح بسيط">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            تخيّل أن لديك صندوقاً (الحاوية) بداخله عدة كرات (العناصر). Flexbox يسمح لك بتحكم كامل في كيفية توزيع هذه الكرات داخل الصندوق:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h4 className="text-purple-800 dark:text-purple-300 font-bold mb-2">الحاوية (Container)</h4>
              <ul className="text-purple-700 dark:text-purple-400 space-y-1 text-sm">
                <li>• اتجاه الكرات: أفقي أم رأسي؟ ← flex-direction</li>
                <li>• هل يمكن للكرات الالتفاف؟ ← flex-wrap</li>
                <li>• كيف توزع المساحات الفارغة؟ ← justify-content</li>
                <li>• كيف تُحاذي الكرات رأسياً؟ ← align-items</li>
                <li>• ما المسافة بين الكرات؟ ← gap</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">العنصر (Item)</h4>
              <ul className="text-green-700 dark:text-green-400 space-y-1 text-sm">
                <li>• كم تنمو مقارنة بالآخرين؟ ← flex-grow</li>
                <li>• كم تتقلص عند عدم مساحة؟ ← flex-shrink</li>
                <li>• ما حجمك الأساسي؟ ← flex-basis</li>
                <li>• هل تختلف عن باقي العناصر؟ ← align-self</li>
                <li>• ما ترتيبك؟ ← order</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            الخلاصة: الخصائص التي تُضاف على الحاوية تتحكم في سلوك جميع العناصر الأبناء بشكل جماعي. الخصائص التي تُضاف على عنصر معين تتحكم في سلوك ذلك العنصر فقط.
          </p>
        </LessonSection>

        {/* 5. مثال بسيط */}
        <LessonSection id="simple-example" title="مثال بسيط">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            لنبدأ بمثال بسيط يوضح التوسيط الكامل لعنصر في وسط الشاشة:
          </p>

          <CodeBlock language="jsx" code={`// المكون (Component)
export default function CenterExample() {
  return (
    <div className="center-box">
      <p>أنا في وسط الشاشة!</p>
    </div>
  );
}`} />

          <CodeBlock language="css" code={`.center-box {
  display: flex;
  justify-content: center; /* توسيط أفقي */
  align-items: center;     /* توسيط رأسي */
  height: 300px;
  background-color: #f0f0f0;
  border-radius: 12px;
}`} />

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            أو باستخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-pink-600 dark:text-pink-400">place-items: center</code> (الحل الحديث):
          </p>

          <CodeBlock language="css" code={`.center-box-modern {
  display: grid;
  place-items: center; /* سطر واحد فقط! */
  height: 300px;
  background-color: #f0f0f0;
  border-radius: 12px;
}`} />

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-800 dark:text-green-300">
              <strong>الفرق:</strong> place-items: center يعمل مع CSS Grid ويحقق التوسيط الكامل في سطر واحد فقط، بينما Flexbox يتطلب خاصيتين (justify-content و align-items).
            </p>
          </div>
        </LessonSection>

        {/* 6. مثال عملي */}
        <LessonSection id="practical-example" title="مثال عملي">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            إليك أمثلة عملية على أنماط شائعة في التصميم:
          </p>

          {/* مثال 1: شريط تنقل */}
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">النمط 1: شريط تنقل (Navbar)</h4>

          <CodeBlock language="jsx" code={`export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">تعليمي</div>
      <ul className="nav-links">
        <li><a href="/">الرئيسية</a></li>
        <li><a href="/courses">الدروس</a></li>
        <li><a href="/about">من نحن</a></li>
      </ul>
      <button className="login-btn">تسجيل الدخول</button>
    </nav>
  );
}`} />

          <CodeBlock language="css" code={`.navbar {
  display: flex;
  justify-content: space-between; /* توزيع المساحة بالتساوي */
  align-items: center;            /* محاذاة رأسية */
  padding: 1rem 2rem;
  background-color: #1a1a2e;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #60a5fa;
}

.login-btn {
  padding: 0.5rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}`} />

          {/* مثال 2: تخطيط البطاقات */}
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">النمط 2: تخطيط البطاقات (Card Layout)</h4>

          <CodeBlock language="jsx" code={`export default function CardsLayout() {
  return (
    <div className="cards-container">
      <div className="card">
        <h3>دورة HTML</h3>
        <p>تعلم أساسيات بناء صفحات الويب</p>
        <a href="/learn/html">ابدأ الآن</a>
      </div>
      <div className="card">
        <h3>دورة CSS</h3>
        <p>styling وتصميم واجهات جميلة</p>
        <a href="/learn/css">ابدأ الآن</a>
      </div>
      <div className="card">
        <h3>دورة JavaScript</h3>
        <p>برمجة تفاعلية للويب</p>
        <a href="/learn/js">ابدأ الآن</a>
      </div>
    </div>
  );
}`} />

          <CodeBlock language="css" code={`.cards-container {
  display: flex;
  flex-wrap: wrap;       /* السماح بالتفاف على الشاشات الصغيرة */
  gap: 1.5rem;           /* مسافة ثابتة بين البطاقات */
  justify-content: center;
  padding: 2rem;
}

.card {
  flex: 1 1 300px;       /* flex: grow shrink basis */
  /* العنصر ينمو ويتقلص، الحد الأدنى 300px */
  padding: 1.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card h3 {
  color: #1a1a2e;
}

.card p {
  color: #6b7280;
  flex-grow: 1;  /* يملأ المساحة المتاحة */
}

.card a {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  text-align: center;
}`} />

          {/* مثال 3: الشريط الجانبي والمحتوى */}
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">النمط 3: الشريط الجانبي + المحتوى</h4>

          <CodeBlock language="jsx" code={`export default function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav>
          <a href="/dashboard">الرئيسية</a>
          <a href="/dashboard/settings">الإعدادات</a>
          <a href="/dashboard/profile">الملف الشخصي</a>
        </nav>
      </aside>
      <main className="content">
        <h1>مرحباً بك في لوحة التحكم</h1>
        <p>هنا المحتوى الرئيسي</p>
      </main>
    </div>
  );
}`} />

          <CodeBlock language="css" code={`.dashboard {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #1a1a2e;
  color: white;
  padding: 2rem;
  flex-shrink: 0; /* لا يتقلص أبداً */
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar a {
  color: white;
  text-decoration: none;
  padding: 0.75rem;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.sidebar a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.content {
  flex-grow: 1; /* يملأ المساحة المتاحة */
  padding: 2rem;
  background-color: #f5f5f5;
}`} />

          {/* مثال 4: التذييل الثابت */}
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">النمط 4: التذييل الثابت في أسفل الصفحة (Sticky Footer)</h4>

          <CodeBlock language="jsx" code={`export default function StickyFooterLayout({ children }) {
  return (
    <div className="page-wrapper">
      <header className="header">
        <h1>شعار الموقع</h1>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>© 2024 منصة تعليمي - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}`} />

          <CodeBlock language="css" code={`.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  padding: 1rem 2rem;
  background-color: #1a1a2e;
  color: white;
}

.main-content {
  flex-grow: 1; /* يملأ المساحة المتاحة */
  padding: 2rem;
}

.footer {
  padding: 1rem 2rem;
  background-color: #1a1a2e;
  color: white;
  text-align: center;
}`} />

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            التمييز هنا هو <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-pink-600 dark:text-pink-400">flex-grow: 1</code> على المحتوى الرئيسي، مما يجعله يمتد لملء المساحة المتاحة ويضمن أن التذييل يبقى دائماً في الأسفل.
          </p>
        </LessonSection>

        {/* 7. ماذا يحدث خلف الكواليس */}
        <LessonSection id="behind-the-scenes" title="ماذا يحدث خلف الكواليس">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            عند تطبيق Flexbox على حاوية، يحدث ما يلي في محرك المتصفح:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">الخطوة 1: تحديد المحاور</h4>
              <p className="text-gray-700 dark:text-gray-300">
                يحدد المتصفح المحور الرئيسي (main axis) بناءً على flex-direction. القيمة الافتراضية هي row (أفقي من اليسار لليمين). المحور المتقاطع (cross axis) يكون عمودياً.
              </p>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">الخطوة 2: حساب المساحات</h4>
              <p className="text-gray-700 dark:text-gray-300">
                يحسب المتصفح المساحة المتاحة للحاوية، ثم يخصم مساحات الحشو (padding) والحدود (border). المساحة المتبقية هي التي تتوزع على العناصر.
              </p>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">الخطوة 3: توزيع المساحة مع flex-grow و flex-shrink</h4>
              <p className="text-gray-700 dark:text-gray-300">
                إذا كانت هناك مساحة زائدة، ي distributesها المتصفح للعناصر بناءً على flex-grow. إذا كانت المساحة غير كافية، يقلص العناصر بناءً على flex-shrink. flex-basis هو الحجم الأساسي الذي يبدأ منه كل عنصر.
              </p>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">الخطوة 4: المحاذاة مع align-items</h4>
              <p className="text-gray-700 dark:text-gray-300">
                بعد توزيع المساحات على المحور الرئيسي، يحاذي العناصر على المحور المتقاطع. القيمة الافتراضية هي stretch (تمديد العناصر لملء المساحة).
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <h4 className="text-yellow-800 dark:text-yellow-300 font-bold mb-2">كيف يعمل flex: 1 ؟</h4>
            <p className="text-yellow-700 dark:text-yellow-400">
              flex: 1 يعني flex-grow: 1 و flex-shrink: 1 و flex-basis: 0%. هذا يعني أن جميع العناصر ستبدأ من صفر وتمتد بالتساوي للملء المساحة المتاحة. إذا أردت أن تحافظ على حجم العناصر الأصلي، استخدم flex: 1 1 auto بدلاً من ذلك.
            </p>
          </div>

          <CodeBlock language="css" code={`/* مثال توضيحي */
.container {
  display: flex;
  width: 600px;
}

.item-a {
  flex: 1;  /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
}

.item-b {
  flex: 2;  /* flex-grow: 2, flex-shrink: 1, flex-basis: 0% */
}

.item-c {
  flex: 1;  /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
}

/*
النتيجة:
- item-a: 150px (600 / 4 * 1)
- item-b: 300px (600 / 4 * 2)
- item-c: 150px (600 / 4 * 1)
*/}`} />
        </LessonSection>

        {/* 8. الأخطاء الشائعة */}
        <LessonSection id="common-mistakes" title="الأخطاء الشائعة">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            إليك الأخطاء الأكثر شيوعاً التي يقع فيها المطورون عند استخدام Flexbox:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">الخطأ 1: نسيان flex-wrap</h4>
              <p className="text-red-700 dark:text-red-400 mb-2">
                بدون flex-wrap: wrap، العناصر لن تتفاف على الشاشات الصغيرة وستظهر أفقياً مع التمرير.
              </p>
              <CodeBlock language="css" code={`.cards-container {
  display: flex;
  flex-wrap: wrap; /* أضف هذا! */
  gap: 1rem;
}`} />
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">الخطأ 2: استخدام margin بدل gap</h4>
              <p className="text-red-700 dark:text-red-400 mb-2">
                استخدام margin على العناصر يسبب مسافات غير متساوية (أول وآخر عنصر). gap هو الحل الأفضل.
              </p>
              <CodeBlock language="css" code={`/* ❌ الطريقة الخاطئة */
.item { margin-right: 1rem; }

/* ✅ الطريقة الصحيحة */
.container {
  display: flex;
  gap: 1rem;
}`} />
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">الخطأ 3: خلط بين justify-content و align-items</h4>
              <p className="text-red-700 dark:text-red-400 mb-2">
                justify-content يتحكم في المحور الرئيسي (main axis)، و align-items يتحكم في المحور المتقاطع (cross axis). إذا غيّرت flex-direction إلى column، يتنعكس الدور.
              </p>
              <CodeBlock language="css" code={`/* flex-direction: row (الافتراضي) */
.container {
  justify-content: center; /* أفقي */
  align-items: center;     /* رأسي */
}

/* flex-direction: column */
.container {
  flex-direction: column;
  justify-content: center; /* رأسي الآن! */
  align-items: center;     /* أفقي الآن! */
}`} />
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">الخطأ 4: نسيان flex-basis</h4>
              <p className="text-red-700 dark:text-red-400 mb-2">
                استخدام flex-grow و flex-shrink بدون flex-basis قد يسبب نتائج غير متوقعة. flex-basis يحدد الحجم الأساسي للعنصر قبل تطبيق النمو والتقلص.
              </p>
              <CodeBlock language="css" code={`/* ❌ قد يسبب نتائج غير متوقعة */
.item { flex-grow: 1; }

/* ✅ أفضل */
.item { flex: 1; } /* أو flex: 1 1 0% */`} />
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">الخطأ 5: استخدام position لتوسيط العناصر</h4>
              <p className="text-red-700 dark:text-red-400 mb-2">
                الطريقة القديمة باستخدام position و transform لا تزال تعمل لكنها معقدة و脆弱ة. Flexbox أو place-items حل أبسط وأقوى.
              </p>
              <CodeBlock language="css" code={`/* ❌ الطريقة القديمة والمعقدة */
.old-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* ✅ الطريقة الحديثة */
.new-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ✅ الأحدث */
.modern-center {
  display: grid;
  place-items: center;
}`} />
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-red-800 dark:text-red-300 font-bold mb-2">الخطأ 6: استخدام display: inline-flex بلا داعي</h4>
              <p className="text-red-700 dark:text-red-400">
                display: inline-flex يجعل الحاوية تتبع تدفق النص، لكنه نادراً ما يكون ضرورياً. في معظم الأحيان، display: flex كافٍ.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* 9. أفضل الممارسات */}
        <LessonSection id="best-practices" title="أفضل الممارسات">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اتبع هذه الممارسات للحصول على أفضل نتائج مع Flexbox:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">1. استخدم flex اختصار دائماً</h4>
              <p className="text-green-700 dark:text-green-400">
                بدلاً من كتابة flex-grow و flex-shrink و flex-basis بشكل منفصل، استخدم flex: 1 أو flex: 1 1 auto. هذا يجعل الكود أقصر وأوضح.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">2. استخدم gap بدل margin</h4>
              <p className="text-green-700 dark:text-green-400">
                gap أسهل في الإدارة وأكثر موثوقية من margin. لا تحتاج للتفكير في أول وآخر عنصر أو إزالة الزوايا الزائدة.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">3. فكّر في المحاور أولاً</h4>
              <p className="text-green-700 dark:text-green-400">
                قبل كتابة أي كود، حدد: ما هو المحور الرئيسي؟ ما المحور المتقاطع؟ هذا يمنع الخلط بين justify-content و align-items.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">4. ضع flex-wrap: wrap للتصميم المتجاوب</h4>
              <p className="text-green-700 dark:text-green-400">
                إذا كان عدد العناصر غير ثابت، أضف flex-wrap: wrap دائماً لضمان ظهور العناصر بشكل صحيح على الشاشات الصغيرة.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">5. استخدم place-items: center للتوسيط</h4>
              <p className="text-green-700 dark:text-green-400">
                إذا كان التصميم مناسباً لـ CSS Grid، place-items: center هو الحل الأسهل للتوسيط الكامل. سطر واحد فقط بدلاً من خاصيتين.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="text-green-800 dark:text-green-300 font-bold mb-2">6. لا تُفرّط في التداخل (Nesting)</h4>
              <p className="text-green-700 dark:text-green-400">
                Flexbox متداخل قد يصبح صعباً في التعامل. حاول الحفاظ على عدد أقل من المستويات، واستخدم grid حيثما كان ذلك مناسباً.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* 10. ملخص */}
        <LessonSection id="summary" title="ملخص">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في هذه الدرس تعلّمنا عن Flexbox وكيف يُبسّط تخطيط صفحات الويب. إليك أبرز النقاط:
          </p>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg mb-4">
            <ul className="space-y-2 text-blue-800 dark:text-blue-300">
              <li>✅ <strong>display: flex</strong> يفعّل Flexbox على الحاوية</li>
              <li>✅ <strong>justify-content</strong> يتحكم في المحور الرئيسي</li>
              <li>✅ <strong>align-items</strong> يتحكم في المحور المتقاطع</li>
              <li>✅ <strong>flex: 1</strong> اختصار مفيد لـ flex-grow و flex-shrink و flex-basis</li>
              <li>✅ <strong>gap</strong> أفضل من margin لإضافة مسافات بين العناصر</li>
              <li>✅ <strong>flex-wrap: wrap</strong> ضروري للتصميم المتجاوب</li>
              <li>✅ <strong>place-items: center</strong> حل حديث ومبسط للتوسيط الكامل</li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Flexbox أداة أساسية في صندوق أدوات أي مطور ويب. مع الفهم الصحيح للمحاور والخصائص، يمكنك إنشاء تخطيطات معقدة بسهولة. في الدرس التالي، سنتعمق في CSS Grid!
          </p>
        </LessonSection>

        {/* Quiz */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">اختبر معلوماتك</h2>
          <Quiz {...quiz1} />
          <Quiz {...quiz2} />
        </section>

        {/* Challenge */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">تحدي عملي</h2>
          <Challenge {...challenge} />
        </section>

        {/* CheatSheet */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">ورقة مرجعية</h2>
          <CheatSheet {...cheatSheet} />
        </section>

        {/* التنقل بين الدروس */}
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