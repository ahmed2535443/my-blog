// =====================================================
// ملف: page.js (الدرس الأول: مقدمة في JavaScript)
// المكان: app/learn/javascript/01-introduction-to-js/page.js
// الوظيفة: تعريف المبتدئين بـ JavaScript من الصفر
// URL: /learn/javascript/01-introduction-to-js
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function IntroductionToJS() {
  const lessonInfo = getLessonBySlug("javascript", "01-introduction-to-js");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        {/* ========================================== */}
        {/* القسم الأول: ما هو JavaScript */}
        {/* ========================================== */}
        <LessonSection title="ما هو JavaScript؟">
          <p>
            <strong>JavaScript</strong> هي لغة برمجة عالية المستوى تُستخدم لتطوير مواقع الويب وتطبيقات الويب والخوادم والمزيد.
          </p>

          <p>
            إذا كانت <strong>HTML</strong> هي هيكل الصفحة و <strong>CSS</strong> هو التصميم والشكل، فإن <strong>JavaScript</strong> هو الدماغ الذي يجعل الصفحة <strong>تفاعلية وحيوية</strong>.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه بسيط:
            </p>
            <p>
              تخيّل أنك تبني روبوت: <strong>HTML</strong> هو الهيكل المادي (العظام)، <strong>CSS</strong> هو المظهر الخارجي (الجلد والملابس)، و <strong>JavaScript</strong> هو الدماغ والأوتاماتيك الذي يجعل الروبوت يتحرك ويتفاعل مع بيئته.
            </p>
          </div>

          <p>
            JavaScript وُلدت في عام <strong>1995</strong> على يد المبرمج <strong>Brendan Eich</strong> في شركة Netscape في أقل من 10 أيام! كانت تُسمى في البداية <strong>Mocha</strong> ثم <strong>LiveScript</strong> ثم <strong>JavaScript</strong>. رغم اسمها، إلا أنها لا علاقة لها بـ Java تماماً - التسمية كانت تسويقية في الأساس.
          </p>

          <p>
            اليوم، JavaScript هي <strong>أكثر لغات البرمجة استخداماً في العالم</strong>. كل صفحة ويب تزورها في المتصفح تستخدم JavaScript بشكل ما. ومنصات مثل <strong>Node.js</strong> جعلت من الممكن استخدام JavaScript في الخوادم وتطبيقات سطح المكتب والهواتف الذكية أيضاً.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: لماذا نستخدم JavaScript */}
        {/* ========================================== */}
        <LessonSection title="لماذا نستخدم JavaScript؟">
          <p>JavaScript تحل مشكلة أساسية: <strong>كيف نجعل صفحات الويب تفاعلية وديناميكية؟</strong></p>

          <ul>
            <li><strong>تفاعلية فورية:</strong> يمكنها التعامل مع أحداث المستخدم مثل النقرات والكتابة وتحريك الماوس دون إعادة تحميل الصفحة.</li>
            <li><strong>تحديث المحتوى ديناميكياً:</strong> يمكنك إضافة أو حذف أو تعديل عناصر الصفحة مباشرة من الكود.</li>
            <li><strong>التحقق من البيانات:</strong> التحقق من صحة بيانات النماذج قبل إرسالها للخادم.</li>
            <li><strong>الرسوميات والتأثيرات:</strong> إنشاء رسوميات متحركة وتأثيرات بصرية متقدمة.</li>
            <li><strong>التواصل مع الخادم:</strong> إرسال واستقبال البيانات من الخادم دون إعادة تحميل الصفحة (AJAX / Fetch).</li>
            <li><strong>متعددة المنصات:</strong> مع أدوات مثل React Native يمكن استخدام JavaScript لبناء تطبيقات للهواتف.</li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ✅ حقيقة مهمة:
            </p>
            <p>
              جميع تطبيقات الويب الحديثة مثل Gmail وGoogle Maps وFacebook وYouTube تستخدم JavaScript بشكل مكثف لتقديم تجربة مستخدم سلسة وتفاعلية.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: المشكلة التي يحلها JavaScript */}
        {/* ========================================== */}
        <LessonSection title="المشكلة التي يحلها JavaScript">
          <p>بدون JavaScript، صفحات الويب تكون <strong>ثابتة (Static)</strong> - أي لا يمكنها التفاعل مع المستخدم. كل تغيير يتطلب إعادة تحميل الصفحة بالكامل.</p>

          <p>تخيل هذه المشاكل بدون JavaScript:</p>
          <ul>
            <li>لا يمكنك التحقق من صحة البريد الإلكتروني في نموذج التسجيل قبل إرساله</li>
            <li>لا يمكنك إضافة منتجات لسلة التسوق بدون إعادة تحميل الصفحة</li>
            <li>لا يمكنك رؤية تعليقات جديدة بدون تحديث الصفحة يدوياً</li>
            <li>لا يمكنك تحميل محتوى جديد بشكل تدريجي (Infinite Scroll)</li>
            <li>لا يمكنك تشغيل ألعاب أو تطبيقات تفاعلية في المتصفح</li>
          </ul>

          <p>
            <strong>JavaScript تحل هذه المشاكل</strong> بتقديم آلية للتفاعل المباشر مع المستخدم وتحديث الصفحة بشكل ذكي دون إعادة التحميل.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: شرح بسيط - المتغيرات وأنواع البيانات */}
        {/* ========================================== */}
        <LessonSection title="شرح بسيط: المتغيرات وأنواع البيانات">
          <p>
            في البرمجة، نحتاج إلى <strong>تخزين البيانات</strong> واستخدامها. المتغيرات (Variables) هي أوعية تخزين تحمل قيماً يمكن استخدامها لاحقاً.
          </p>

          <p>
            في JavaScript، هناك ثلاث طرق لإنشاء متغيرات:
          </p>

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>1. var - الطريقة القديمة</h3>
          <p>
            الكلمة المحجوزة <code>var</code> كانت الطريقة الوحيدة لإنشاء متغيرات في JavaScript القديم (قبل ES6). لها نطاق (Scope) وظيفي (Function Scope) مما يعني أنها متاحة داخل الدالة فقط.
          </p>

          <CodeBlock
            language="javascript"
            code={`var name = "أحمد";
var age = 25;
var isStudent = true;

console.log(name); // "أحمد"
console.log(age);  // 25`}

          />

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>2. let - المتغير القابل للتغيير (ES6+)</h3>
          <p>
            الكلمة المحجوزة <code>let</code> أُضيفت في ES6 لإنشاء متغير يمكن تغيير قيمته. لها نطاق كتلي (Block Scope) أي أنها متاحة فقط داخل الأقواس <code>{'{}'}</code> التي أُنشئت فيها.
          </p>

          <CodeBlock
            language="javascript"
            code={`let score = 0;
score = 10;       // صحيح - يمكن تغيير القيمة
score = score + 5; // صحيح - 15

let message = "مرحبا";
message = "أهلاً";  // صحيح - يمكن تغيير النص`}

          />

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>3. const - الثابت (ES6+)</h3>
          <p>
            الكلمة المحجوزة <code>const</code> تُستخدم لإنشاء قيمة <strong>ثابتة</strong> لا يمكن تغييرها بعد التعيين. إذا حاولت تغييرها، ستحصل على خطأ.
          </p>

          <CodeBlock
            language="javascript"
            code={`const PI = 3.14159;
const MAX_USERS = 100;

// PI = 3.14;  // ❌ خطأ! Cannot reassign constant variable

// لكن يمكن تغيير محتوى الكائنات (المصفوفات والكائنات):
const colors = ["أحمر", "أزرق"];
colors.push("أخضر"); // صحيح - تغيير المحتوى وليس المرجع

const user = { name: "أحمد" };
user.name = "محمد"; // صحيح - تغيير خاصية الكائن`}

          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 متى نستخدم ماذا؟
            </p>
            <p>
              <strong>const</strong> كخيار افتراضي - استخدمه دائماً إلا إذا كنت تحتاج لتغيير القيمة لاحقاً.<br />
              <strong>let</strong> عندما تحتاج لتغيير قيمة المتغير (مثل العدادات، أو القيم المؤقتة).<br />
              <strong>var</strong> تجنبه في الكود الحديث - فقط استخدمه إذا كنت تكتب كوداً قديماً أو تفهم الفرق جيداً.
            </p>
          </div>

          <h3 style={{ color: "var(--primary)", marginTop: "1.5rem" }}>أنواع البيانات (Data Types)</h3>
          <p>
            JavaScript لها أنواع بيانات متنوعة. إليك أشهرها:
          </p>

          <CodeBlock
            language="javascript"
            code={`// === Types primitives ===

// String - نص
let name = "أحمد";
let greeting = 'مرحبا';
let template = \`الاسم: \${name}\`; // Template Literal

// Number - رقم (صحيح أو عشري أو سالب)
let age = 25;
let price = 99.99;
let negative = -10;

// Boolean - منطقي (صحيح أو خاطئ)
let isActive = true;
let isLoggedIn = false;

// null - قيمة فارغة (محددة عمداً)
let selectedItem = null;

// undefined - قيمة غير محددة
let pendingData;

// === Types non-primitive ===

// Object - كائن (مجموعة من القيم)
let user = {
  name: "أحمد",
  age: 25,
  email: "ahmed@example.com"
};

// Array - مصفوفة (قائمة من القيم)
let fruits = ["تفاح", "موز", "برتقال"];

// Symbol - رمز فريد (نادر الاستخدام)
let id = Symbol("id");

// BigInt - رقم صحيح كبير جداً
let bigNumber = 9007199254740991n;`}

          />

          <p>
            يمكنك معرفة نوع أي قيمة باستخدام الدالة <code>typeof</code>:
          </p>

          <CodeBlock
            language="javascript"
            code={`console.log(typeof "مرحبا");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" ← خطأ معروف في JS!
console.log(typeof [1,2,3]);     // "object"
console.log(typeof {name: "أحمد"}); // "object"`}

          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: مثال بسيط - العمليات */}
        {/* ========================================== */}

        <LessonSection title="مثال بسيط: العمليات في JavaScript">
          <p>
            العمليات (Operators) هي رموز تُستخدم لإجراء حسابات ومقارنات وعمليات منطقية على القيم.
          </p>

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>العمليات الحسابية (Arithmetic Operators)</h3>

          <CodeBlock
            language="javascript"
            code={`let a = 10;
let b = 3;

console.log(a + b);   // 13  ← الجمع
console.log(a - b);   // 7   ← الطرح
console.log(a * b);   // 30  ← الضرب
console.log(a / b);   // 3.333... ← القسمة
console.log(a % b);   // 1   ← باقي القسمة (Modulo)
console.log(a ** b);  // 1000 ← الأس (10³)`}

          />

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>عمليات المقارنة (Comparison Operators)</h3>
          <p>
            تُستخدم للمقارنة بين قيمتين وتعيد <code>true</code> أو <code>false</code>:
          </p>

          <CodeBlock
            language="javascript"
            code={`// == مقارنة القيمة فقط (بدون مراعاة النوع)
console.log(5 == "5");    // true  ← تحويل نوع تلقائي!
console.log(0 == false);  // true

// === مقارنة القيمة والنوع معاً (الأفضل استخدامها دائماً)
console.log(5 === "5");   // false ← النوعان مختلفان
console.log(5 === 5);     // true
console.log(0 === false); // false ← عدد مقابل boolean

// != و !==
console.log(5 != "5");    // false
console.log(5 !== "5");   // true

// أكبر من / أصغر من
console.log(10 > 5);      // true
console.log(3 < 1);       // false
console.log(10 >= 10);    // true`}

          />

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>العمليات المنطقية (Logical Operators)</h3>

          <CodeBlock
            language="javascript"
            code={`let age = 25;
let hasID = true;

// && (AND) - كلا الشرطين يجب أن يكونا صحيحاً
console.log(age >= 18 && hasID);  // true

// || (OR) - أي شرط واحد يكفي
let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday); // true

// ! (NOT) - عكس القيمة
let isLoggedIn = true;
console.log(!isLoggedIn);  // false
console.log(!false);       // true`}

          />

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>عمليات التعيين (Assignment Operators)</h3>

          <CodeBlock
            language="javascript"
            code={`let x = 10;     // تعيين عادي
x += 5;        // x = x + 5 → 15
x -= 3;        // x = x - 3 → 12
x *= 2;        // x = x * 2 → 24
x /= 4;        // x = x / 4 → 6
x %= 4;        // x = x % 4 → 2`}

          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: مثال عملي - أول تفاعل مع الصفحة */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: أول تفاعل مع الصفحة">
          <p>
            لنرَ كيف يُمكن لـ JavaScript التفاعل مع الصفحة وعرض محتوى ديناميكي:
          </p>

          <CodeBlock
            language="javascript"
            code={`// إنشاء متغيرات وعرضها
let userName = "أحمد";
let userAge = 25;
let isStudent = true;

// ملخص المستخدم
let summary = \`المستخدم: \${userName}، العمر: \${userAge}\`;
console.log(summary);

// حساب بسيط
let price = 100;
let discount = 15;
let finalPrice = price - (price * discount / 100);
console.log(\`السعر الأصلي: \${price}\`);
console.log(\`الخصم: \${discount}%\`);
console.log(\`السعر النهائي: \${finalPrice}\`);

// التحقق من العمر
if (userAge >= 18) {
  console.log(\`\${userName} بالغ ✓\`);
} else {
  console.log(\`\${userName} قاصر ✗\`);
}`}

          />

          <p>
            يمكن لـ JavaScript التعامل مع عناصر الصفحة (DOM):
          </p>

          <CodeBlock
            language="javascript"
            code={`// البحث عن عنصر في الصفحة
let title = document.querySelector("h1");

// تغيير نص العنوان
title.textContent = "مرحباً بالعالم!";

// تغيير لون العنوان
title.style.color = "blue";

// إضافة عنصر جديد للصفحة
let newParagraph = document.createElement("p");
newParagraph.textContent = "تم إضافته بواسطة JavaScript!";
document.body.appendChild(newParagraph);

// التعامل مع النقرات
let button = document.querySelector("button");
button.addEventListener("click", function() {
  alert("تم النقر على الزر!");
});`}

          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: ماذا يحدث خلف الكواليس */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>عندما تكتب كود JavaScript وتعمله في المتصفح، يحدث التالي:</p>

          <ol>
            <li><strong>التحليل (Parsing):</strong> يقرأ المتصفح الكود ويُحوّله إلى بنية بيانات شجرية تسمى <strong>AST (Abstract Syntax Tree)</strong>.</li>
            <li><strong>الترجمة (Compilation):</strong> يُحوّل المتصفح (مثل V8 في Chrome) الكود إلى <strong>Bytecode</strong> أو كود آلي مُ optimised.</li>
            <li><strong>التنفيذ (Execution):</strong> يُشغّل الـ <strong>JavaScript Engine</strong> الكود سطراً بعد سطر من الأعلى إلى الأسفل.</li>
            <li><strong>Call Stack:</strong> يتتبع الدوال المُستدعة ويعود لها عند الانتهاء.</li>
            <li><strong>Web APIs:</strong> واجهات برمجية خاصة بالمتصفح مثل <code>setTimeout</code> و <code>DOM</code> تعمل بمعزل عن الـ Engine.</li>
            <li><strong>Task Queue:</strong> الأحداث غير المتزامنة (مثل النقرات) تنتظر في طابور حتى ينتهي الكود الحالي.</li>
          </ol>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 هل تعلم؟
            </p>
            <p>
              JavaScript في المتصفح هو <strong>أحادي الخيط (Single-threaded)</strong> - هذا يعني أنه يُنفّذ كوداً واحداً في كل مرة. لكنه مع ذلك يمكنه التعامل مع آلاف الأحداث في الثانية بفضل نظام الأحداث (Event Loop) الذي يُدير الأولويات بذكاء.
            </p>
          </div>

          <CodeBlock
            language="javascript"
            code={`// مثال على تنفيذ الكود وترتيبه
console.log("1. أول سطر");

setTimeout(function() {
  console.log("2. هذا يظهر أخيراً (بعد التأخير)");
}, 0); // حتى مع تأخير 0 مللي ثانية!

console.log("3. ثالث سطر");

// النتيجة في Console:
// "1. أول سطر"
// "3. ثالث سطر"
// "2. هذا يظهر أخيراً (بعد التأخير)"
// السبب: setTimeout يضع الدالة في Task Queue`}

          />

          <p>
            أما في بيئة <strong>Node.js</strong> (خارج المتصفح)، فإن JavaScript يعمل على محرك V8 نفسه لكن بدون متصفح - مما يتيح استخدامه لبناء خوادم وتطبيقات سطح المكتب.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة للمبتدئين في JavaScript">
          <ul>
            <li>
              <strong>❌ استخدام var بدلاً من let/const:</strong>
              <br />
              <code>var</code> لها سلوك غير متوقع بسبب Function Scope. مثال: متغير for loop بـ var سيكون متاحاً خارج الحلقة بشكل غير متوقع.
            </li>
            <li>
              <strong>❌ استخدام == بدلاً من ===:</strong>
              <br />
              <code>==</code> تقوم بتحويل النوع تلقائياً مما يسبب مفاجآت مثل <code>0 == false</code> و <code>null == undefined</code>. استخدم <code>===</code> دائماً.
            </li>
            <li>
              <strong>❌ نسيان const و let:</strong>
              <br />
              كتابة متغيرات بدون كلمة محجوزة يُنشئها كـ Global Variable، وهو سلوك خطير很难 اكتشافه.
            </li>
            <li>
              <strong>❌ تغيير قيمة const:</strong>
              <br />
              <code>const x = 5; x = 10;</code> سيعطيك خطأ: "Assignment to constant variable". تذكر: const تمنع إعادة التعيين فقط، ليست التعديل في الكائنات.
            </li>
            <li>
              <strong>❌ الخلط بين typeof null:</strong>
              <br />
              <code>typeof null</code> يُعيد "object" وهو خطأ تاريخي في JavaScript. لا تستخدم typeof للتحقق من null - استخدم <code>=== null</code> مباشرة.
            </li>
            <li>
              <strong>❌ استخدام الأسماء المحجوزة كأسماء متغيرات:</strong>
              <br />
              كلمات مثل <code>let</code> و <code>class</code> و <code>function</code> هي أسماء محجوزة ولا يمكن استخدامها كأسماء متغيرات.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li>
              <strong>✅ استخدم const بشكل افتراضي، ثم let عند الحاجة:</strong>
              <br />
              هذا يجعل الكود أكثر أماناً وواضحاً. تجنب var في الكود الحديث.
            </li>
            <li>
              <strong>✅ استخدم === بدلاً من ==:</strong>
              <br />
              المقارنة الصارمة تمنع الأخطاء الناتجة عن تحويل النوع التلقائي.
            </li>
            <li>
              <strong>✅ استخدم أسماء متغيرات واضحة ووصفية:</strong>
              <br />
              <code>let userName</code> بدلاً من <code>let x</code>. الكود الجيد يُقرأ كنص.
            </li>
            <li>
              <strong>✅ استخدم Template Literals لدمج النصوص:</strong>
              <br />
              <code>{`\`مرحبا {name}\``}</code> بدلاً من <code>&quot;مرحبا &quot; + name</code>. أكثر نظافة ووضوحاً.
            </li>
            <li>
              <strong>✅ استخدم console.log للتشخيص:</strong>
              <br />
              أداة ممتازة لفهم ما يحدث في الكود. استخدمها بكثرة أثناء التعلم.
            </li>
            <li>
              <strong>✅ اكتب كوداً بسيطاً ومقروءاً:</strong>
              <br />
              الكود الجيد هو الذي يفهمه مبرمج آخر (أو أنت بعد شهر!). استخدم مسافات وصياغة واضحة.
            </li>
            <li>
              <strong>✅ تعلّم قواعد اللغة جيداً قبل الانتقال للأطر:</strong>
              <br />
              فهم JavaScript الأساسي جيداً يجعل تعلم React أو Vue أو أي إطار آخر أسهل بكثير.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>JavaScript</strong> هي لغة برمجة تُضيف التفاعل والديناميكية لصفحات الويب.</li>
              <li>ثلاث طرق لإنشاء متغيرات: <code>var</code> (قديم)، <code>let</code> (قابل للتغيير)، <code>const</code> (ثابت).</li>
              <li>أنواع البيانات الأساسية: <strong>string</strong> (نص)، <strong>number</strong> (رقم)، <strong>boolean</strong> (منطقي)، <strong>null</strong>، <strong>undefined</strong>.</li>
              <li>أنواع البيانات المعقدة: <strong>object</strong> (كائن) و <strong>array</strong> (مصفوفة).</li>
              <li>العمليات الحسابية: <code>+ - * / % **</code></li>
              <li>عمليات المقارنة: استخدم <code>===</code> و <code>!==</code> دائماً بدلاً من <code>==</code> و <code>!=</code>.</li>
              <li>العمليات المنطقية: <code>&&</code> (و)، <code>||</code> (أو)، <code>!</code> (ليس).</li>
              <li>الكود في المتصفح يُنفذ بواسطة <strong>JavaScript Engine</strong> (مثل V8 في Chrome).</li>
              <li>استخدم <code>console.log()</code> لطباعة القيم وفهم سلوك الكود.</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz 1: var vs let vs const */}
        {/* ========================================== */}
        <Quiz
          question="ما هو الفرق الرئيسي بين var و let و const؟"
          options={[
            "var و let متماثلان، وconst للنصوص فقط",
            "var لها Function Scope، let و const لهما Block Scope. const تمنع إعادة التعيين",
            "let و var متساويان، وconst لا يمكن استخدامها إطلاقاً",
            "لا يوجد فرق بينها - كلها تفعل الشيء نفسه",
          ]}
          correctAnswer={1}
          explanation="var لها Function Scope (متاحة داخل الدالة بأكملها)، بينما let و const لهما Block Scope (متاحة داخل الأقواس {} فقط). الفرق بين let و const هو أن const تمنع إعادة تعيين القيمة بعد التعيين الأول."
        />

        {/* ========================================== */}
        {/* Quiz 2: أنواع البيانات */}
        {/* ========================================== */}
        <Quiz
          question="ما هو نوع البيانات الناتج من: typeof null ؟"
          options={[
            '"null"',
            '"undefined"',
            '"object"',
            '"boolean"',
          ]}
          correctAnswer={2}
          explanation="هذا خطأ تاريخي معروف في JavaScript! typeof null يُعيد 'object' بدلاً من 'null'. هذا السلوك موجود منذ بداية اللغة ولم يتم إصلاحه ل避免 كسر الكود القديم."
        />

        {/* ========================================== */}
        {/* التحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: أنشئ حاسبة بسيطة"
          description={
            <p>
              أنشئ ملف JavaScript جديد يحتوي على:
              <br />
              1. متغيرات لتخزين اسم المستخدم وعمارته باستخدام <code>const</code>
              <br />
              2. مصفوفة (array) تحتوي على 3 هوايات للمستخدم
              <br />
              3. كائن (object) يمثل المستخدم بخصائص: name و age و hobbies
              <br />
              4. استخدم console.log لطباعة معلومات المستخدم
              <br />
              5. استخدم console.log لطباعة نوع كل متغير باستخدام typeof
            </p>
          }
        >
          <CodeBlock
            language="javascript"
            code={`// بيانات المستخدم
const userName = "أحمد";
const userAge = 25;

// الهوايات
const hobbies = ["البرمجة", "القراءة", "الألعاب"];

// كائن المستخدم
const user = {
  name: userName,
  age: userAge,
  hobbies: hobbies
};

// طباعة المعلومات
console.log("معلومات المستخدم:");
console.log("الاسم:", user.name);
console.log("العمر:", user.age);
console.log("الهوايات:", user.hobbies.join("، "));

// فحص الأنواع
console.log("\\n--- أنواع البيانات ---");
console.log("typeof userName:", typeof userName);
console.log("typeof userAge:", typeof userAge);
console.log("typeof hobbies:", typeof hobbies);
console.log("typeof user:", typeof user);`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص JavaScript - الدرس الأول">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* مقارنة المتغيرات */}
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>مقارنة المتغيرات:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>var</p>
                  <p>Nested: Function Scope</p>
                  <p>Reassignment: ✅</p>
                  <p>Hoisting: ✅ (قيمة undefined)</p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>الاستخدام: تجنبه في الكود الحديث</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>let</p>
                  <p>Nested: Block Scope</p>
                  <p>Reassignment: ✅</p>
                  <p>Hoisting: ✅ (Temporal Dead Zone)</p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>الاستخدام: قيم تتغير (عدادات، حقول)</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>const</p>
                  <p>Nested: Block Scope</p>
                  <p>Reassignment: ❌</p>
                  <p>Hoisting: ✅ (Temporal Dead Zone)</p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>الاستخدام: القيمة الافتراضية</p>
                </div>
              </div>
            </div>

            {/* العمليات الشائعة */}
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>العمليات الشائعة:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>العمليات الحسابية</p>
                  <p><code>+</code> جمع | <code>-</code> طرح | <code>*</code> ضرب</p>
                  <p><code>/</code> قسمة | <code>%</code> باقي | <code>**</code> أس</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>عمليات المقارنة</p>
                  <p><code>===</code> يساويStrict | <code>!==</code> لا يساويStrict</p>
                  <p><code>==</code> يساوي | <code>!=</code> لا يساوي</p>
                  <p><code>&gt;</code> أكبر | <code>&lt;</code> أصغر</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>العمليات المنطقية والتعيين</p>
                  <p><code>&&</code> و (AND) | <code>||</code> أو (OR) | <code>!</code> ليس (NOT)</p>
                  <p><code>=</code> تعيين | <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code></p>
                </div>
              </div>
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* التنقل بين الدروس */}
        {/* ========================================== */}
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
