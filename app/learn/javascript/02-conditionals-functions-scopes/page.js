// =====================================================
// ملف: page.js (الدرس الثاني: الشروط والدوال والـ Scopes)
// المكان: app/learn/javascript/02-conditionals-functions-scopes/page.js
// الوظيفة: تعليم الشروط الشرطية، الدوال، النطاقات، الأغلاقات، والـ Hoisting
// URL: /learn/javascript/02-conditionals-functions-scopes
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ConditionalsFunctionsScopes() {
  const lessonInfo = getLessonBySlug("javascript", "02-conditionals-functions-scopes");

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
        {/* القسم الأول: ما هو */}
        {/* ========================================== */}
        <LessonSection title="ما هو الشروط والدوال والـ Scopes؟">
          <p>
            في هذا الدرس سنتعلم ثلاثة مفاهيم أساسية في JavaScript هي الأساس لكل برنامج تفاعلي:
          </p>

          <ul>
            <li>
              <strong>الشروط (Conditionals):</strong> تُتيح للكود أن يتخذ قرارات. بدلاً من تنفيذ نفس الكود دائماً، يمكنكบอก JavaScript أن يفعل شيئاً مختلفاً بناءً على شروط معينة.
            </li>
            <li>
              <strong>الدوال (Functions):</strong> حزم من الكود القابلة لإعادة الاستخدام. بدلاً من تكرار نفس الكود مرات عديدة، تكتبه مرة واحدة في دالة وتستدعيها كلما احتجت إليها.
            </li>
            <li>
              <strong>النطاقات (Scopes):</strong> تحديد أين يمكن للمتغيرات والدوال أن تكون مرئية ومتاحة للاستخدام.
            </li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه بسيط:
            </p>
            <p>
              تخيّل أنك مديرة مطعم. <strong>الشروط</strong> مثل قواعد خدمة الزبائن (إذا كان الزبون وحده، اعطِه طاولة صغيرة؛ وإلا أعطِه طاولة كبيرة). <strong>الدوال</strong> مثل إجراءات المطبخ المعيارية (وصفة البيتزا مكتوبة مرة واحدة ويُطبّقها الطباخ كلما طلبها زبون). <strong>النطاقات</strong> مثل Areas of the restaurant: ما يحدث في المطبخ يبقى داخل المطبخ ولا يُسمع في dining area.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: لماذا نستخدمه */}
        {/* ========================================== */}
        <LessonSection title="لماذا نستخدم الشروط والدوال؟">
          <p>بدون الشروط والدوال، الكود سيكون مجرد سلاسل متتالية من التعليمات بدون ذكاء ولا تنظيم. إليك الأسباب الرئيسية:</p>

          <ul>
            <li>
              <strong>اتخاذ قرارات ذكية:</strong> البرنامج يحتاج أن يتفاعل مع مواقف مختلفة. مثلاً: إذا كان المستخدم قد سجّل دخوله، اعرض لوحة التحكم؛ وإلا اعرض صفحة تسجيل الدخول.
            </li>
            <li>
              <strong>إعادة استخدام الكود:</strong> بدلاً من كتابة نفس الكود 10 مرات، تكتب دالة مرة واحدة وتستدعيها 10 مرات. هذا يُوفّر الوقت ويقلل الأخطاء.
            </li>
            <li>
              <strong>تنظيم الكود:</strong> الدوال تقسم البرنامج لأجزاء صغيرة ومنطقية، مما يجعل الكود أسهل في القراءة والصيانة.
            </li>
            <li>
              <strong>قابلية الصيانة:</strong> إذا احتجت لتغيير منطق معين، تغيّره في مكان واحد (الدالة) بدلاً من البحث في عشرات الأماكن.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: المشكلة التي يحلها */}
        {/* ========================================== */}
        <LessonSection title="المشكلة التي يحلها">
          <p>لنرَ مثالاً على مشكلة حقيقية. تخيّل أنك تكتب كود لحساب خصم على منتجات:</p>

          <CodeBlock
            language="javascript"
            code={`// بدون دوال: نفس الكود متكرر!
let price1 = 100;
let discount1 = 0.1;
let finalPrice1 = price1 - (price1 * discount1);
console.log(finalPrice1); // 90

let price2 = 200;
let discount2 = 0.2;
let finalPrice2 = price2 - (price2 * discount2);
console.log(finalPrice2); // 160

let price3 = 50;
let discount3 = 0.05;
let finalPrice3 = price3 - (price3 * discount3);
console.log(finalPrice3); // 47.5`}
          />

          <p>
            الكود أعلاه يعمل، لكنه فيه مشاكل: التكرار، صعوبة التعديل، وخطر الخطأ. إذا أردت تغيير طريقة حساب الخصم، ستحتاج لتعديل <strong>ثلاثة أماكن</strong>!
          </p>

          <p>الحل: استخدام <strong>الدوال</strong>:</p>

          <CodeBlock
            language="javascript"
            code={`// مع الدالة: كود نظيف وقابل لإعادة الاستخدام
function calculateDiscount(price, discount) {
  return price - (price * discount);
}

console.log(calculateDiscount(100, 0.1)); // 90
console.log(calculateDiscount(200, 0.2)); // 160
console.log(calculateDiscount(50, 0.05)); // 47.5`}
          />

          <p>الآن إذا أردت تغيير طريقة الحساب، تُعدّل في <strong>مكان واحد فقط</strong>!</p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: الشرح البسيط */}
        {/* ========================================== */}
        <LessonSection title="شرح بسيط: الشروط الشرطية (Conditionals)">
          <p>
            الشروط الشرطية تُتيح للكود أن ي &quot;يفكر&quot; ويتخذ قرارات. JavaScript يتحقق من شرط: إذا كان <strong>true</strong>، يُنفّذ كود معين؛ وإذا كان <strong>false</strong>، يُنفّذ كوداً آخر أو لا يفعل شيئاً.
          </p>

          <h3 style={{ color: "var(--foreground)", marginTop: "1.5rem" }}>1. الشرط الأساسي: if</h3>
          <p>يُنفّذ الكود داخل الأقواس فقط إذا كان الشرط صحيحاً:</p>

          <CodeBlock
            language="javascript"
            code={`let age = 18;

if (age >= 18) {
  console.log("أنت بالغ ✓");
}`}
          />

          <h3 style={{ color: "var(--foreground)", marginTop: "1.5rem" }}>2. الشرط المزدوج: if / else</h3>
          <p>إذا لم يتحقق الشرط، يُنفّذ الكود الموجود في else:</p>

          <CodeBlock
            language="javascript"
            code={`let temperature = 35;

if (temperature > 30) {
  console.log("الجو حار جداً! ❄️");
} else {
  console.log("الجو معتدل 😊");
}`}
          />

          <h3 style={{ color: "var(--foreground)", marginTop: "1.5rem" }}>3. سلسلة الشروط: if / else if / else</h3>
          <p>يمكنك اختبار شروط متعددة بالتسلسل:</p>

          <CodeBlock
            language="javascript"
            code={`let grade = 85;

if (grade >= 90) {
  console.log("ممتاز! 🌟");
} else if (grade >= 80) {
  console.log("جيد جداً! 👍");
} else if (grade >= 70) {
  console.log("جيد 👌");
} else if (grade >= 60) {
  console.log("مقبول 📝");
} else {
  console.log("راسب 😞");
}
// النتيجة: "جيد جداً! 👍"`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 ملاحظة مهمة:
            </p>
            <p>
              JavaScript يفحص الشروط <strong>من الأعلى إلى الأسفل</strong> ويُنفّذ <strong>أول شرط يتحقق</strong> فقط ثم يتوقف. حتى لو تحقق شرط لاحق أيضاً، لن يُنفّذ.
            </p>
          </div>

          <h3 style={{ color: "var(--foreground)", marginTop: "1.5rem" }}>4. switch / case</h3>
          <p>مفيد عندما تريد مقارنة قيمة واحدة مع احتمالات متعددة:</p>

          <CodeBlock
            language="javascript"
            code={`let day = "الثلاثاء";

switch (day) {
  case "السبت":
    console.log("عطلة نهاية الأسبوع 🎉");
    break;
  case "الأحد":
    console.log("عطلة نهاية الأسبوع 🎉");
    break;
  case "الاثنين":
  case "الثلاثاء":
  case "الأربعاء":
  case "الخميس":
  case "الجمعة":
    console.log("أيام العمل 💼");
    break;
  default:
    console.log("يوم غير معروف ❓");
}
// النتيجة: "أيام العمل 💼"`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "rgba(251, 191, 36, 0.05)", borderColor: "var(--secondary)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              ⚠️ تحذير: لا تنسَ break!
            </p>
            <p>
              إذا نسيت <code>break</code>، JavaScript سيُكمل في جميع الحالات التالية (fall-through) حتى يجد break أو ينتهي الـ switch. هذا غالباً ليس ما تريده.
            </p>
          </div>

          <h3 style={{ color: "var(--foreground)", marginTop: "1.5rem" }}>5. الشرط الثلاثي (Ternary Operator)</h3>
          <p>اختصار مختصر لـ if/else في سطر واحد:</p>

          <CodeBlock
            language="javascript"
            code={`let age = 20;

// الصيغة: شرط ? قيمة_إذا_true : قيمة_إذا_false
let status = age >= 18 ? "بالغ" : "قاصر";
console.log(status); // "بالغ"

// مكافئه مع if/else:
// if (age >= 18) {
//   status = "بالغ";
// } else {
//   status = "قاصر";
// }`}
          />

          <p>مفيد للحالات البسيطة، لكن لا تُفرط في استخدامه. الشروط المعقدة يُفضّل كتابتها باستخدام if/else لوضوح الكود.</p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: مثال بسيط - الدوال */}
        {/* ========================================== */}
        <LessonSection title="مثال بسيط: أنواع الدوال (Functions)">
          <p>
            الدالة هي <strong>حزمة كود</strong> يمكنك استدعاؤها متى شئت. في JavaScript عدة طرق لتعريف الدوال:
          </p>

          <h3 style={{ color: "var(--foreground)" }}>1. Function Declaration (تعريف دالة تقليدي)</h3>
          <p>الطريقة الكلاسيكية والأشهر. هذه الطريقة تدعم <strong>Hoisting</strong> (سنتحدث عنه لاحقاً):</p>

          <CodeBlock
            language="javascript"
            code={`// تعريف الدالة
function greet(name) {
  return "مرحباً يا " + name + "! 👋";
}

// استدعاء الدالة
console.log(greet("أحمد"));    // "مرحباً يا أحمد! 👋"
console.log(greet("سارة"));    // "مرحباً يا سارة! 👋"

// دالة بدون معلمات
function sayHello() {
  console.log("مرحباً بالعالم!");
}
sayHello(); // "مرحباً بالعالم!"

// دالة بقيمة افتراضية (Default Parameter)
function greetDefault(name = "زائر") {
  return "مرحباً يا " + name + "!";
}
console.log(greetDefault());        // "مرحباً يا زائر!"
console.log(greetDefault("ليلى"));  // "مرحباً يا ليلى!"`}
          />

          <h3 style={{ color: "var(--foreground)", marginTop: "1.5rem" }}>2. Function Expression (تعبير دالة)</h3>
          <p>تُعرّف الدالة كقيمة تُخزّن في متغير. هذه الطريقة <strong>لا تدعم</strong> Hoisting:</p>

          <CodeBlock
            language="javascript"
            code={`// الدالة مخزنة في متغير
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3));  // 8
console.log(add(10, 2)); // 12`}
          />

          <h3 style={{ color: "var(--foreground)", marginTop: "1.5rem" }}>3. Arrow Function (دالة سهمية) ⭐ ES6+</h3>
          <p>
            صيغة مختصرة وحديثة. ستحتاجها كثيراً عند تعلم <strong>React</strong> حيث تُستخدم بكثرة في المكونات والأحداث:
          </p>

          <CodeBlock
            language="javascript"
            code={`// الصيغة الكاملة
const multiply = (a, b) => {
  return a * b;
};

// اختصار: إذا كان السطر الواحد فقط، يمكن حذف {} و return
const multiplyShort = (a, b) => a * b;

console.log(multiply(4, 5));       // 20
console.log(multiplyShort(4, 5));  // 20

// دالة بمعلم واحدة: يمكن حذف الأقواس حول المعلمة
const double = x => x * 2;
console.log(double(7)); // 14

// دالة بدون معلمات: يجب كتابة الأقواس الفارغة
const sayHi = () => "مرحباً!";
console.log(sayHi()); // "مرحباً!"`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "rgba(97, 218, 251, 0.05)", borderColor: "#61dafb" }}
          >
            <p className="font-bold mb-2" style={{ color: "#61dafb" }}>
              ⚛️ تحضير لـ React:
            </p>
            <p>
              Arrow Functions تُستخدم بكثرة في React لكتابة المكونات الدالة (Functional Components) والأحداث (Event Handlers). تعودتك عليها الآن ستجعل تعلم React أسهل بكثير.
            </p>
          </div>

          <h3 style={{ color: "var(--foreground)", marginTop: "1.5rem" }}>4. مقارنة سريعة بين الأنواع الثلاثة</h3>

          <CodeBlock
            language="javascript"
            code={`// 1. Function Declaration
function subtract(a, b) {
  return a - b;
}

// 2. Function Expression
const subtractExpr = function(a, b) {
  return a - b;
};

// 3. Arrow Function
const subtractArrow = (a, b) => a - b;

// جميعها تعطي نفس النتيجة:
console.log(subtract(10, 3));       // 7
console.log(subtractExpr(10, 3));   // 7
console.log(subtractArrow(10, 3));  // 7`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: مثال عملي */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: نظام تسجيل دخول">
          <p>
            لنُطبّق ما تعلمناه في مثال واقعي: نظام تسجيل دخول بسيط يجمع بين الشروط والدوال:
          </p>

          <CodeBlock
            language="javascript"
            code={`// ========================================
// مثال عملي: نظام تسجيل دخول بسيط
// ========================================

// --- الدوال ---

function validateEmail(email) {
  // تحقق بسيط: هل يحتوي على @ و .
  return email.includes("@") && email.includes(".");
}

function validatePassword(password) {
  // تحقق: كلمة المرور يجب أن تكون 6 أحرف على الأقل
  return password.length >= 6;
}

function getGreeting(hour) {
  if (hour >= 5 && hour < 12) {
    return "صباح الخير ☀️";
  } else if (hour >= 12 && hour < 17) {
    return "مساء الخير 🌤️";
  } else if (hour >= 17 && hour < 21) {
    return "مساء الخير 🌅";
  } else {
    return "مساء الخير 🌙";
  }
}

function login(username, email, password) {
  // التحقق من جميع الشروط
  if (!username || username.trim() === "") {
    return { success: false, message: "الاسم مطلوب" };
  }

  if (!validateEmail(email)) {
    return { success: false, message: "البريد الإلكتروني غير صحيح" };
  }

  if (!validatePassword(password)) {
    return { success: false, message: "كلمة المرور قصيرة (6 أحرف على الأقل)" };
  }

  // إذا مرّت كل الاختبارات
  const hour = new Date().getHours();
  const greeting = getGreeting(hour);

  return {
    success: true,
    message: greeting + " " + username + "! تم تسجيل الدخول بنجاح",
  };
}

// --- الاختبارات ---

console.log(login("أحمد", "ahmed@email.com", "123456"));
// { success: true, message: "صباح الخير ☀️ أحمد! تم تسجيل الدخول بنجاح" }

console.log(login("", "ahmed@email.com", "123456"));
// { success: false, message: "الاسم مطلوب" }

console.log(login("أحمد", "ahmed-email", "123456"));
// { success: false, message: "البريد الإلكتروني غير صحيح" }

console.log(login("أحمد", "ahmed@email.com", "123"));
// { success: false, message: "كلمة المرور قصيرة (6 أحرف على الأقل)" }`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 ملاحظات على المثال:
            </p>
            <ul>
              <li>استخدمنا <strong>دوال صغيرة متخصصة</strong> (validateEmail, validatePassword) بدلاً من كتابة كل شيء في دالة واحدة كبيرة.</li>
              <li>استخدمنا <strong>الشروط المتعددة</strong> (if/else if/else) في دالة getGreeting.</li>
              <li>الدالة login تُعيد <strong>كائناً (object)</strong> يحتوي على نتيجة التحقق. هذا نمط شائع في JavaScript.</li>
              <li>استخدمنا early return للخروج مبكراً من الدالة عند الخطأ.</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: ماذا يحدث خلف الكواليس */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟ (Scope و Closure و Hoisting)">
          <p>
            هذه الأجزاء الأهم في الدرس. فهمها سيمنعك من أخطاء مربكة في JavaScript.
          </p>

          <h3 style={{ color: "var(--foreground)" }}>1. النطاق (Scope) - أين يمكن رؤية المتغير؟</h3>
          <p>
            <strong>Scope</strong> يحدد أين يمكن الوصول إلى متغير أو دالة. هناك ثلاثة أنواع رئيسية:
          </p>

          <CodeBlock
            language="javascript"
            code={`// --- 1. Global Scope (النطاق العام) ---
let globalVar = "أنا عام - مرئي في كل مكان";

function myFunction() {
  console.log(globalVar); // يعمل ✓ - يمكن الوصول للنطاق العام
}
myFunction();

// --- 2. Function Scope (النطاق الدالي) ---
function myFunction2() {
  let functionVar = "أنا دالي";
  console.log(functionVar); // يعمل ✓ داخل الدالة
}
// console.log(functionVar); // ❌ خطأ! functionVar غير مرئية خارج الدالة

// --- 3. Block Scope (النطاق الكتلي) ---
if (true) {
  let blockLet = "أنا كتلي مع let";
  var blockVar = "أنا عام مع var!";
  const blockConst = "أنا كتلي مع const";
}

// console.log(blockLet);   // ❌ خطأ! blockLet مرئية فقط داخل {}
// console.log(blockConst); // ❌ خطأ! blockConst مرئية فقط داخل {}
console.log(blockVar);      // ✓ يعمل! var تتجاوز حدود الكتلة!`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "rgba(239, 68, 68, 0.05)", borderColor: "var(--danger)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              🔴 الفرق الجوهري بين var و let و const:
            </p>
            <ul>
              <li><code>var</code>: <strong>Function Scope</strong> فقط - تتجاوز حدود الكتل { }!</li>
              <li><code>let</code>: <strong>Block Scope</strong> - محصورة داخل الكتلة {} التي عُرّفت فيها.</li>
              <li><code>const</code>: <strong>Block Scope</strong> أيضاً - مثل let مع عدم السماح بإعادة التعيين.</li>
            </ul>
            <p className="mt-2">
              <strong>القاعدة:</strong> استخدم <code>const</code> دائماً، واستخدم <code>let</code> فقط عند الحاجة لتغيير القيمة، ولا تستخدم <code>var</code> أبداً في الكود الحديث.
            </p>
          </div>

          <h3 style={{ color: "var(--foreground)", marginTop: "1.5rem" }}>2. Lexical Scope (النطاق الطبقي)</h3>
          <p>
            الدالة في JavaScript تتذكر (تُغلّف) المتغيرات من النطاق الذي وُلدت فيه، وليس من مكان استدعائها. هذا يُسمى <strong>Lexical Scope</strong>.
          </p>

          <CodeBlock
            language="javascript"
            code={`let outerVar = "أنا من الخارج";

function outerFunction() {
  let middleVar = "أنا من الوسط";

  function innerFunction() {
    let innerVar = "أنا من الداخل";

    // innerFunction ترى كل المتغيرات: الخاصة بها + الوسط + الخارجي
    console.log(innerVar);  // ✓
    console.log(middleVar); // ✓
    console.log(outerVar);  // ✓
  }

  innerFunction();

  // console.log(innerVar); // ❌ لا ترى متغيرات innerFunction
}

outerFunction();`}
          />

          <h3 style={{ color: "var(--foreground)", marginTop: "1.5rem" }}>3. Closures (الأغلاقات) 🔑</h3>
          <p>
            <strong>Closure</strong> يحدث عندما تحفظ دالة داخلية مرجعًا لمتغيرات في نطاقها الخارجي، حتى بعد أن تنتهي الدالة الخارجية من تنفيذها. ببساطة: الدالة &quot;تُغلّف&quot; المتغيرات معها.
          </p>

          <CodeBlock
            language="javascript"
            code={`// مثال بسيط على Closure
function createCounter() {
  let count = 0; // متغير محلي في الدالة

  // الدالة الداخلية تُغلّف count
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// متغير count لا يمكن الوصول إليه مباشرة:
// console.log(count); // ❌ خطأ!

// لكن الدالة counter لا تزال تتذكره وتُحدّثه
// هذا هو الـ Closure!`}
          />

          <p>مثال عملي آخر على Closure - عداد مخصص:</p>

          <CodeBlock
            language="javascript"
            code={`function createTimer(label) {
  let seconds = 0;
  let intervalId = null;

  return {
    start: function() {
      if (intervalId) return;
      intervalId = setInterval(() => {
        seconds++;
        console.log(label + ": " + seconds + " ثانية");
      }, 1000);
    },
    stop: function() {
      clearInterval(intervalId);
      intervalId = null;
    },
    getSeconds: function() {
      return seconds;
    }
  };
}

const timer = createTimer("الوقت");
timer.start();
// كل ثانية يطبع: "الوقت: 1 ثانية"، "الوقت: 2 ثانية"...

setTimeout(() => {
  timer.stop();
  console.log("الوقت الكلي: " + timer.getSeconds() + " ثانية");
}, 5000);`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "rgba(97, 218, 251, 0.05)", borderColor: "#61dafb" }}
          >
            <p className="font-bold mb-2" style={{ color: "#61dafb" }}>
              ⚛️ لماذا Closures مهمة لـ React؟
            </p>
            <p>
              في React، الـ Hooks مثل <code>useState</code> و <code>useEffect</code> تعتمد بشكل مباشر على مفهوم Closures. كلما كتبت <code>const [count, setCount] = useState(0)</code>، الدالة <code>setCount</code> تحفظ مرجعًا لحالة الـ count بفضل الـ Closure.
            </p>
          </div>

          <h3 style={{ color: "var(--foreground)", marginTop: "1.5rem" }}>4. Hoisting (الرفع) - ما يحدث خلف الكواليس</h3>
          <p>
            <strong>Hoisting</strong> هو سلوك في JavaScript يقوم فيه المُفسِّر (Interpreter) بـ &quot;رفع&quot; تعريفات المتغيرات والدوال إلى أعلى النطاق قبل تنفيذ الكود. لكن السلوك يختلف حسب الكلمة المفتاحية:
          </p>

          <CodeBlock
            language="javascript"
            code={`// --- Hoisting مع Function Declaration ---
console.log(add(2, 3)); // ✓ 5 - تعمل قبل التعريف!
function add(a, b) {
  return a + b;
}

// --- Hoisting مع var ---
console.log(myVar);    // undefined (لا خطأ، لكن القيمة غير معرّفة بعد)
var myVar = 10;
console.log(myVar);    // 10

// ما يحدث خلف الكواليس:
// var myVar;           // يُرفع التعريف
// console.log(myVar);  // undefined
// myVar = 10;          // يُنفّذ التعيين في مكانه الأصلي

// --- لا يوجد Hoisting مع let/const ---
// console.log(myLet);  // ❌ ReferenceError!
let myLet = 20;

// console.log(myConst); // ❌ ReferenceError!
const myConst = 30;

// --- Hoisting مع Function Expression ---
// console.log(multiply(2, 3)); // ❌ TypeError: multiply is not a function
const multiply = function(a, b) {
  return a * b;
};

// --- Hoisting مع Arrow Function ---
// console.log(divide(10, 2)); // ❌ ReferenceError: divide is not defined
const divide = (a, b) => a / b;`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 ملخص Hoisting:
            </p>
            <ul>
              <li><code>function declaration</code>: تُرفع بالكامل (التعريف + المحتوى) - يمكن استدعاؤها قبل تعريفها.</li>
              <li><code>var</code>: يُرفع التعريف فقط (القيمة = undefined) - لا يحدث خطأ لكن القيمة غير محددة.</li>
              <li><code>let / const</code>: لا يُرفعان - محاولة الوصول قبل التعريف تُعطي ReferenceError.</li>
              <li><code>function expression / arrow function</code>: لا تُرفع - يجب تعريفها قبل الاستدعاء.</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul>
            <li>
              <strong>❌ استخدام var بدلاً من let/const:</strong>
              <br />
              <code>var</code> تتخطى حدود الكتل وتسبب أخطاء غير متوقعة. استخدم <code>const</code> دائماً، و <code>let</code> عند الحاجة للتغيير.
            </li>
            <li>
              <strong>❌ نسيان break في switch/case:</strong>
              <br />
              بدون <code>break</code>، الكود يُنفّذ جميع الحالات التالية حتى يجد break أو ينتهي الـ switch.
            </li>
            <li>
              <strong>❌ استخدام === بدلاً من == في المقارنات:</strong>
              <br />
              <code>==</code> تقوم بتحويل الأنواع (Type Coercion) قد تُعطي نتائج غير متوقعة مثل <code>0 == &quot;&quot;</code> تعطي <code>true</code>. استخدم <code>===</code> دائماً.
            </li>
            <li>
              <strong>❌ الاعتماد على Hoisting:</strong>
              <br />
              حتى لو كان الكود يعمل، تعريف الدوال قبل استخدامها يجعل الكود أسهل في القراءة والفهم.
            </li>
            <li>
              <strong>❌ Arrow Function لا تملك own `this`:</strong>
              <br />
              الـ Arrow Functions لا تُنشئ <code>this</code> خاصاً بها (تأخذ this من النطاق الخارجي). هذا مفيد في أغلب الأحيان، لكن قد يسبب أخطاء في بعض الأحيان.
            </li>
            <li>
              <strong>❌ تعريف الدالة داخل حلقة تكرارية (Loop)：</strong>
              <br />
              إذا عرّفت دالة داخل <code>for</code> loop، ستنشأ نسخة جديدة في كل تكرار. استخدم Closure بشكل صحيح أو external function.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li>
              <strong>✅ استخدم const و let بدلاً من var دائماً:</strong>
              <br />
              <code>const</code> كخيار افتتاحي، و <code>let</code> فقط عند الحاجة لتغيير القيمة.
            </li>
            <li>
              <strong>✅ استخدم === بدلاً من ==:</strong>
              <br />
              المقارنة الصارمة (Strict Equality) تمنع أخطاء تحويل الأنواع المفاجئة.
            </li>
            <li>
              <strong>✅ اكتب دوال صغيرة ومتخصصة:</strong>
              <br />
              كل دالة يجب أن تفعل شيئاً واحداً فقط (Single Responsibility Principle).
            </li>
            <li>
              <strong>✅ استخدم Arrow Functions في callbacks:</strong>
              <br />
              في الدوال التي تُمرَّر كمعاملات (مثل .map, .filter, .forEach)، Arrow Functions أقصر وأوضح.
            </li>
            <li>
              <strong>✅ اسمي الدوال بأفعال واضحة:</strong>
              <br />
              مثل <code>calculateTotal</code> و <code>validateEmail</code> و <code>getUserData</code> بدلاً من <code>doStuff</code> أو <code>handleThings</code>.
            </li>
            <li>
              <strong>✅ استخدم Default Parameters:</strong>
              <br />
              بدلاً من التحقق يدوياً من القيم الافتراضية داخل الدالة.
            </li>
            <li>
              <strong>✅ استخدم Early Return لتبسيط الشروط:</strong>
              <br />
              اخرج من الدالة مبكراً عند الخطأ لتجنب التداخل العميق للشروط (Nested if).
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
              <li><strong style={{ color: "var(--primary)" }}>الشروط الشرطية</strong> تُتيح للكود اتخاذ قرارات باستخدام if/else و switch و Ternary Operator.</li>
              <li><strong style={{ color: "var(--primary)" }}>الدوال</strong> تُكرر الكود وتُنظّمه. هناك Function Declaration و Expression و Arrow Functions.</li>
              <li><strong style={{ color: "var(--primary)" }}>Arrow Functions</strong> صيغة حديثة ومختصرة ستحتاجها كثيراً في React.</li>
              <li><strong style={{ color: "var(--primary)" }}>Scope</strong> يحدد أين يمكن رؤية المتغيرات: Global و Function و Block.</li>
              <li><strong style={{ color: "var(--primary)" }}>var vs let vs const</strong>: var Function Scope، let/const Block Scope. استخدم const دائماً.</li>
              <li><strong style={{ color: "var(--primary)" }}>Closure</strong> هو قدرة الدالة على حفظ مرجع للمتغيرات من نطاقها الخارجي.</li>
              <li><strong style={{ color: "var(--primary)" }}>Hoisting</strong>: function declarations تُرفع بالكامل، var تُرفع التعريف فقط (undefined)، let/const لا تُرفع.</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz 1: حول الفروقات في Scope */}
        {/* ========================================== */}
        <Quiz
          question="ماذا سيطبع الكود التالي في console؟"
          options={[
            "4 ثم 4",
            "undefined ثم 4",
            "4 ثم ReferenceError",
            "undefined ثم undefined",
          ]}
          correctAnswer={2}
          explanation={`الكود:
if (true) {
  var x = 4;
  let y = 4;
}
console.log(x); // 4 - var تتخطى حدود الكتلة (Function Scope)
console.log(y); // ReferenceError - let محصورة في الكتلة (Block Scope)

الإجابة الصحيحة هي: 4 ثم ReferenceError. var تتجاوز الكتل بينما let لا تتجاوزها.`}
        />

        <Quiz
          question="أي من العبارات التالية حول var و let صحيحة؟"
          options={[
            "var و let كلاهما Block Scope",
            "var Function Scope و let Block Scope",
            "var Block Scope و let Function Scope",
            "var و let كلاهما Function Scope",
          ]}
          correctAnswer={1}
          explanation="var لها Function Scope (تتجاوز الكتل {}) بينما let لها Block Scope (تبقى محصورة في الكتلة {}). هذا هو السبب في أن we نستخدم const/let بدلاً من var في الكود الحديث."
        />

        {/* ========================================== */}
        {/* Quiz 2: حول سلوك Closures */}
        {/* ========================================== */}
        <Quiz
          question="ماذا سيطبع الكود التالي؟"
          options={[
            "0, 0, 0",
            "1, 2, 3",
            "3, 3, 3",
            "undefined, undefined, undefined",
          ]}
          correctAnswer={1}
          explanation={`الكود:
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

هذا هو الـ Closure! الدالة الداخلية تحفظ مرجع لمتغير count من الدالة الخارجية. كل مرة تستدعيها، يتم تعديل count نفس المتغير. count لا يُعاد تهيئته في كل استدعاء.`}
        />

        {/* ========================================== */}
        {/* التحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: آلة حاسبة بسيطة"
          description={
            <p>
              أنشئ دالة <code>calculator</code> تأخذ ثلاثة معاملات: رقمين وعملية حسابية (+، -، *، /). يجب أن:
              <br />
              1. تستخدم شرط switch/case لاختيار العملية
              2. تتعامل مع حالة القسمة على صفر (إظهار رسالة خطأ)
              3. تُعيد القيمة الناتجة
              <br />
              مثال: <code>calculator(10, 5, &quot;+&quot;</code>) → 15
            </p>
          }
        >
          <CodeBlock
            language="javascript"
            code={`function calculator(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "خطأ: لا يمكن القسمة على صفر!";
      }
      return a / b;
    default:
      return "خطأ: عملية غير معروفة!";
  }
}

// الاختبارات
console.log(calculator(10, 5, "+"));  // 15
console.log(calculator(10, 5, "-"));  // 5
console.log(calculator(10, 5, "*"));  // 50
console.log(calculator(10, 5, "/"));  // 2
console.log(calculator(10, 0, "/"));  // "خطأ: لا يمكن القسمة على صفر!"
console.log(calculator(10, 5, "%"));  // "خطأ: عملية غير معروفة!"`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ورقة الغش: الشروط والدوال والـ Scopes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* أعمدة الشروط */}
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>الشروط الشرطية (Conditionals)</p>
              <CodeBlock
                language="javascript"
                code={`// if / else if / else
if (شرط1) {
  // يُنفّذ إذا شرط1 صحيح
} else if (شرط2) {
  // يُنفّذ إذا شرط2 صحيح
} else {
  // يُنفّذ إذا لا شيء صحيح
}

// switch / case
switch (قيمة) {
  case "حالة1":
    // كود
    break;
  case "حالة2":
    // كود
    break;
  default:
    // كود افتراضي
}

// Ternary Operator
نتيجة = شرط ? "صحيح" : "خطأ";

// مقارنات
===   // صارمة (بدون تحويل أنواع)
!==   // لا يساوي صارم
>  <  >=  <=`}
              />
            </div>

            {/* أعمدة الدوال */}
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>أنواع الدوال (Function Types)</p>
              <CodeBlock
                language="javascript"
                code={`// Function Declaration
function اسم(Parameters) {
  return قيمة;
}

// Function Expression
const اسم = function(p) {
  return قيمة;
};

// Arrow Function (ES6+)
const اسم = (p) => قيمة;

// مثال: Arrow Function مختصرة
const double = x => x * 2;

// Default Parameters
function greet(name = "زائر") {
  return "مرحباً " + name;
}`}
              />
            </div>

            {/* Scope Rules */}
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>قواعد النطاق (Scope Rules)</p>
              <CodeBlock
                language="javascript"
                code={`// var → Function Scope
function test() {
  if (true) {
    var a = 1; // مرئية في كامل الدالة
    let b = 2; // مرئية فقط في {}
  }
  console.log(a); // 1 ✓
  // console.log(b); // ❌ ReferenceError
}

// Hoisting:
funcName(); // ✓ تعمل
function funcName() { }

console.log(x); // undefined
var x = 5;

// console.log(y); // ❌ ReferenceError
let y = 10;`}
              />
            </div>

            {/* Closure */}
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>الأغلاقات (Closures)</p>
              <CodeBlock
                language="javascript"
                code={`// Closure: الدالة تحفظ
// مرجع لمتغيرات النطاق الخارجي
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const fn = outer();
fn(); // 1
fn(); // 2

// استخدام عملي:
function multiplier(factor) {
  return (number) => number * factor;
}
const double = multiplier(2);
double(5);  // 10
double(10); // 20`}
              />
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
