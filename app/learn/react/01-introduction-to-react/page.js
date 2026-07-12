import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function IntroductionToReact() {
  const lessonInfo = getLessonBySlug("react", "01-introduction-to-react");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        <LessonSection title="ما هو React؟">
          <p>
            React هو مكتبة (Library) JavaScript لبناء واجهات المستخدم التفاعلية.
            تم تطويرها من قبل شركة Meta (Facebook) في عام 2013، وأصبحت الآن واحدة
            من أكثر أدوات تطوير الواجهات استخداماً في العالم.
          </p>
          <p>
            يستخدم React ملايين المطورين حول العالم لبناء تطبيقات الويب
            والموبايل، ومن بين الشركات الكبرى التي تعتمد عليه: Facebook،
            Instagram، Netflix، Airbnb، وDisney+.
          </p>
          <p>
            يعتمد React على مفهوم <strong>المكونات (Components)</strong> الذي
            يسمح لك بتقسيم واجهة المستخدم إلى أجزاء صغيرة ومستقلة يمكن إعادة
            استخدامها في أماكن متعددة.
          </p>
        </LessonSection>

        <LessonSection title="لماذا نستخدم React؟">
          <p>
            بناء واجهات المستخدم المعقدة لم يكن سهلاً قبل ظهور React. كان
            المطورون يواجهون العديد من التحديات عند محاولة إدارة التفاعلية
            والتعقيد في تطبيقاتهم.
          </p>
          <p>
            يحل React هذه المشكلة من خلال هندسة قائمة على المكونات (Component-Based
            Architecture)، حيث يمكنك بناء واجهة المستخدم من قطع صغيرة ومستقلة تُسمى
            المكونات، ويمكن لكل مكون إدارة جزء معين من واجهة المستخدم بشكل
            مستقل.
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>
              <strong>إعادة الاستخدام:</strong> يمكنك استخدام نفس المكون في
              أماكن مختلفة داخل تطبيقك
            </li>
            <li>
              <strong>الصيانة السهلة:</strong> كل مكون مسؤول عن جزء واحد، مما
              يجعل الكود أسهل في الفهم والإصلاح
            </li>
            <li>
              <strong>التطوير المشترك:</strong> يمكن لفريق العمل العمل على
              مكونات مختلفة في نفس الوقت
            </li>
            <li>
              <strong>الأداء العالي:</strong> يستخدم React الـ Virtual DOM
              لتحقيق أداء ممتاز
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="المشكلة التي يحلها React">
          <p>
            قبل ظهور React، كان المطورون يتعاملون مباشرة مع الـ DOM
            (Document Object Model) لتحديث واجهات المستخدم. هذه الطريقة كانت
            بطيئة ومليئة بالأخطاء، خاصة في التطبيقات الكبيرة والمعقدة.
          </p>
          <p>
            كان كل تحديث صغير للواجهة يتطلب البحث عن العنصر الصحيح في الـ DOM
            وتعديله يدوياً، مما كان يسبب مشاكل في الأداء والصيانة.
          </p>
          <p>
            يحل React هذه المشكلة باستخدام <strong>Virtual DOM</strong>، وهو
            نسخة خفيفة من الـ DOM الحقيقي. عندما يحدث تغيير في الحالة (State)،
            يقوم React بإنشاء نسخة جديدة من Virtual DOM، ثم يقارنها بالنسخة
            السابقة، ويقوم بتحديث فقط الأجزاء التي تغيرت في الـ DOM الحقيقي.
          </p>
          <p>
            هذه العملية تُسمى <strong>Reconciliation</strong>، وهي سر أداء React
            العالي. بدلاً من تحديث كل صفحة عند كل تغيير، يقوم React بتحديد
            التغييرات الفعلية وتطبيقها بشكل ذكي وفعال.
          </p>
        </LessonSection>

        <LessonSection title="شرح بسيط">
          <p>
            تخيّل أن React مثل قطع LEGO: أنت تبني هياكل معقدة من قطع صغيرة
            قابلة لإعادة الاستخدام تُسمى <strong>المكونات (Components)</strong>.
            كل قطعة (مكون) لها وظيفة محددة ويمكن دمجها معاً لإنشاء شيء أكبر
            وأ复杂.
          </p>
          <p>
            على سبيل المثال، صفحة ويب قد تتكون من مكون للرأس (Header)، مكون
            للمحتوى الرئيسي (MainContent)، مكون للتنقل (Navigation)، ومكون
            للتذييل (Footer). كل من هذه المكونات مستقلة ويمكن إعادة استخدامها
            في صفحات مختلفة.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-4">
            <p className="text-blue-400 font-bold mb-2">💡 فكر في الأمر هكذا:</p>
            <p>
              المكونات مثل الوظائف (Functions) في البرمجة: تأخذ بيانات كمدخلات
              (Props)، وتقوم بمعالجة، وتعيد JSX كمخرجات تصف ما يجب عرضه على
              الشاشة.
            </p>
          </div>
        </LessonSection>

        <LessonSection title="مثال بسيط">
          <p>
            لنأخذ مثالاً بسيطاً يوضح كيفية استخدام React وـ JSX لعرض رسالة
            ترحيب مخصصة:
          </p>
          <CodeBlock
            code={`const name = "أحمد";

function Greeting() {
  return (
    <h1>مرحباً {name}</h1>
  );
}`}
            language="jsx"
          />
          <p>
            في هذا المثال، نستخدم <strong>JSX</strong> (JavaScript XML)، وهو
            صيغة تشبه HTML لكنها تُكتب داخل JavaScript. يمكنك استخدام أقواس
            الزخرفية <code>{"{}"}</code> لإدراج تعبيرات JavaScript داخل JSX.
          </p>
          <p>
            عند تشغيل هذا الكود، سيقوم React بعرض: <strong>مرحباً أحمد</strong>
          </p>
        </LessonSection>

        <LessonSection title="مثال عملي">
          <p>
            لننشئ مثالاً أكثر واقعية: مكون تطبيق (App) يعرض رسالة ترحيب
            للمستخدم مع معلومات إضافية:
          </p>
          <CodeBlock
            code={`function App() {
  const userName = "سارة";
  const currentDate = new Date().toLocaleDateString("ar-EG");

  return (
    <div className="app">
      <h1>مرحباً {userName}!</h1>
      <p>اليوم هو: {currentDate}</p>
      <p>مرحباً بك في منصة CodeMaster التعليمية</p>
    </div>
  );
}

export default App;`}
            language="jsx"
          />
          <p>
            هذا المكون يجمع بين النصوص الثابتة وتعبيرات JavaScript dinamik untuk
            عرض معلومات متغيرة. لاحظ أننا نستخدم <code>className</code> بدلاً
            من <code>class</code> في JSX، لأن <code>class</code> كلمة محجوزة
            في JavaScript.
          </p>
        </LessonSection>

        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>
            عندما تكتب JSX في React، لا يفهمه المتصفح مباشرة. يحدث تحويل في
            عدة مراحل قبل أن تظهر النتيجة على الشاشة:
          </p>
          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>المرحلة الأولى - JSX:</strong> أنت تكتب الكود بصيغة JSX
              التي تشبه HTML
            </li>
            <li>
              <strong>المرحلة الثانية - React.createElement():</strong> يقوم
              Babel (أداة تحويل) بتحويل JSX إلى استدعاءات{" "}
              <code>React.createElement()</code>
            </li>
            <li>
              <strong>المرحلة الثالثة - Virtual DOM:</strong> ينشئ React شجرة
              Virtual DOM التي تمثل الهيكل الحالي للواجهة
            </li>
            <li>
              <strong>المرحلة الرابعة - Real DOM:</strong> يقوم React بتحويل
              Virtual DOM إلى عناصر حقيقية في الـ DOM وعرضها في المتصفح
            </li>
          </ol>
          <CodeBlock
            code={`// ما تكتبه أنت (JSX):
const element = <h1>مرحباً</h1>;

// ما يتحول إليه خلف الكواليس:
const element = React.createElement("h1", null, "مرحباً");

// النتيجة في الـ DOM الحقيقي:
// <h1>مرحباً</h1>`}
            language="jsx"
          />
          <p>
            هذه العملية تحدث بشكل شفاف، وأنت كمطور لا تحتاج للقلق بشأنها. كل
            ما عليك هو كتابة JSX وسيتولى React الباقي.
          </p>
        </LessonSection>

        <LessonSection title="الأخطاء الشائعة">
          <p>
            هناك بعض الأخطاء الشائعة التي يقع فيها المبتدئون عند العمل مع React
            وـ JSX. تعرّف عليها لتجنبها:
          </p>
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 1: JSX يجب أن يُرجع عنصر واحد فقط
              </p>
              <CodeBlock
                code={`// خطأ: JSX لا يمكن أن يحتوي على عنصران متوازيان
function Wrong() {
  return (
    <h1>مرحباً</h1>
    <p>عالم</p>
  );
}

// صحيح: استخدم عنصر وسيط (Wrapper)
function Correct() {
  return (
    <div>
      <h1>مرحباً</h1>
      <p>عالم</p>
    </div>
  );
}`}
                language="jsx"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 2: استخدام class بدلاً من className
              </p>
              <CodeBlock
                code={`// خطأ: class كلمة محجوزة في JavaScript
<div class="container">...</div>

// صحيح: استخدم className في JSX
<div className="container">...</div>`}
                language="jsx"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 3: نسيان الأقواس الزخرفية للتعبيرات
              </p>
              <CodeBlock
                code={`// خطأ: النص سيظهر كما هو
<h1>مرحباً name</h1>

// صحيح: استخدم الأقواس الزخرفية
<h1>مرحباً {name}</h1>`}
                language="jsx"
              />
            </div>
          </div>
        </LessonSection>

        <LessonSection title="أفضل الممارسات">
          <ul className="list-disc list-inside space-y-3 my-4">
            <li>
              <strong>احتفظ بالمكونات صغيرة:</strong> كل مكون يجب أن يكون
              مسؤولاً عن شيء واحد فقط
            </li>
            <li>
              <strong>ملف واحد لكل مكون:</strong> احفظ كل مكون في ملف مستقل
              لتسهيل التنظيم والصيانة
            </li>
            <li>
              <strong>استخدم أسماء وصفية:</strong> اسمي المكونات بأسماء تصف ما
              تفعله مثل <code>UserProfile</code> و <code>ShoppingCart</code>
            </li>
            <li>
              <strong>استخدم PascalCase:</strong> اسم المكون يبدأ بحرف كبير مثل
              في المثال: <code>MyComponent</code>
            </li>
            <li>
              <strong>لا تستخدم اختصارات غامضة:</strong> اكتب أسماء واضحة
              ومفهومة للكود
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="ملخص">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 my-4">
            <h3 className="text-green-400 font-bold text-lg mb-4">
              🎯 ما تعلمناه في هذا الدرس:
            </h3>
            <ul className="space-y-2">
              <li>
                ✅ React هو مكتبة JavaScript لبناء واجهات المستخدم تم تطويرها
                من Meta
              </li>
              <li>
                ✅ يستخدم React نظام المكونات (Component-Based Architecture)
                لإنشاء واجهات قابلة لإعادة الاستخدام
              </li>
              <li>
                ✅ يستخدم Virtual DOM لتحقيق أداء عالي وتحديثات فعالة
              </li>
              <li>
                ✅ JSX هو صيغة كتابية تشبه HTML تُكتب داخل JavaScript
              </li>
              <li>
                ✅ يتم تحويل JSX إلى React.createElement() ثم إلى Virtual DOM
                ثم إلى Real DOM
              </li>
              <li>
                ✅ يجب استخدام className بدلاً من class في JSX
              </li>
              <li>
                ✅ يجب أن يُرجع JSX عنصر واحد فقط
              </li>
            </ul>
          </div>
        </LessonSection>

        <Quiz
          question="من هو المطور الأصلي لمكتبة React؟"
          options={["Google", "Meta (Facebook)", "Microsoft", "Apple"]}
          correctAnswer={1}
          explanation="تم تطوير React من قبل Meta (المعرفة سابقاً بـ Facebook) في عام 2013."
        />
        <Quiz
          question="ما هو الاسم الصحيح لكتابة class في JSX؟"
          options={["class", "className", "cssClass", "styleClass"]}
          correctAnswer={1}
          explanation="في JSX نستخدم className بدلاً من class لأن class كلمة محجوزة في JavaScript."
        />
        <Quiz
          question="ما هو Virtual DOM؟"
          options={[
            "نسخة من الصفحة الرئيسية",
            "نسخة خفيفة من الـ DOM الحقيقي",
            "أداة لتصميم الواجهات",
            "مكتبة لإدارة الحالة"
          ]}
          correctAnswer={1}
          explanation="Virtual DOM هو نسخة خفيفة من الـ DOM الحقيقي يستخدمه React لتحسين الأداء من خلال مقارنة الحالة القديمة مع الجديدة وتحديث فقط ما تغير."
        />
        <Quiz
          question="كم عدد العناصر التي يمكن أن يُرجعها JSX في المرة الواحدة؟"
          options={[
            "بلا حدود",
            "عنصر واحد فقط",
            "عنصران فقط",
            "ثلاثة عناصر"
          ]}
          correctAnswer={1}
          explanation="يجب أن يُرجع JSX عنصر واحد فقط. يمكنك استخدام عنصر وسيط مثل div أو Fragment لتغليف العناصر المتعددة."
        />
        <Quiz
          question="ما هي الخطوة الأولى في تحويل JSX إلى DOM فعلي؟"
          options={[
            "إضافة العناصر إلى الصفحة",
            "تحويله إلى React.createElement()",
            "إنشاء Virtual DOM",
            "تصدير المكون"
          ]}
          correctAnswer={1}
          explanation="الخطوة الأولى هي تحويل JSX إلى استدعاءات React.createElement() باستخدام Babel، ثم يُنشأ React شجرة Virtual DOM، وأخيراً يتم تحديث Real DOM."
        />

        <Challenge
          title="أنشئ مكونك الأول في React"
          description="أنشئ مكون React بسيط يعرض معلوماتك الشخصية. تأكد من استخدام JSX بشكل صحيح."
          tasks={[
            "أنشئ مكوناً يُسمى MyProfile يعرض اسمك الكامل",
            "أضف عنصر fpar يعرض عمرك باستخدام تعبير JavaScript",
            "أضف فقرة تستخدم className لتخصيص التنسيق",
            "تأكد من أن المكون يُرجع عنصر واحد فقط يحتوي على كل العناصر",
            "اضغط على زر Check للتحقق من صحة الكود"
          ]}
        />

        <CheatSheet
          items={[
            {
              title: "إنشاء مكون بسيط",
              description: "الشكل الأساسي لمكون React وظيفي يُرجع JSX",
              code: `function MyComponent() {
  return <h1>مرحباً من React!</h1>;
}`
            },
            {
              title: "استخدام تعبيرات JavaScript",
              description: "إدراج قيم ديناميكية داخل JSX باستخدام الأقواس الزخرفية",
              code: `const name = "أحمد";
function Greeting() {
  return <h1>مرحباً {name}</h1>;
}`
            },
            {
              title: "تصدير المكون",
              description: "تصدير المكون الافتراضي للاستيراد في ملفات أخرى",
              code: `export default function App() {
  return <div>مرحباً بالعالم</div>;
}`
            },
            {
              title: "JSX هو React.createElement",
              description: "JSX يتحول خلف الكواليس إلى استدعاءات React.createElement",
              code: `// ما تكتبه:
const el = <h1>مرحباً</h1>;
// ما يتحول إليه:
const el = React.createElement("h1", null, "مرحباً");`
            },
            {
              title: "الأخطاء الشائعة",
              description: "الأخطاء الأكثر شيوعاً عند كتابة JSX والأمثلة الصحيحة",
              code: `// ❌ خطأ: استخدام class
<div class="box">
// ✅ صحيح: استخدام className
<div className="box">

// ❌ خطأ: عنصران متوازيان
return (<h1>أ</h1><p>ب</p>);
// ✅ صحيح: تغليف بعنصر وسيط
return (<div><h1>أ</h1><p>ب</p></div>;`
            }
          ]}
        />

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
