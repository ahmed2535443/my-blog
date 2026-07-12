// =====================================================
// ملف: page.js (الدرس الثالث: المصفوفات والكائنات)
// المكان: app/learn/javascript/03-arrays-and-objects/page.js
// الوظيفة: شرح المصفوفات والكائنات + Destructuring + Spread/Rest + Template Literals
// URL: /learn/javascript/03-arrays-and-objects
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ArraysAndObjects() {
  const lessonInfo = getLessonBySlug("javascript", "03-arrays-and-objects");

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
        <LessonSection title="ما هو المصفوفات والكائنات؟">
          <p>
            في البرمجة، نحتاج دائماً لتخزين مجموعات من البيانات. تخيّل أنك تريد تخزين
            أسماء 10 طلاب - هل ستنشئ 10 متغيرات منفصلة؟ هذا غير عملي!
          </p>

          <p>
            هنا تأتي <strong>المصفوفات (Arrays)</strong> و <strong>الكائنات (Objects)</strong> كحلول
            أساسية لتنظيم البيانات في JavaScript.
          </p>

          <div className="space-y-4 my-6">
            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                المصفوفة (Array) = قائمة مرتبة من العناصر
              </p>
              <p>
                مثل قائمة تسوق: <code>["تفاح"، "موز"، "حليب"]</code>. كل عنصر له
                رقم ترتيبي (index) يبدأ من 0.
              </p>
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
                الكائن (Object) = مجموعة من القيم المسمّاة
              </p>
              <p>
                مثل بطاقة تعريف: فيها اسم، عمر، تخصص. كل قيمة لها{" "}
                <strong>مفتاح (key)</strong> و<strong>قيمة (value)</strong>.
              </p>
            </div>
          </div>

          <p>
            سنتعلم في هذا الدرس أيضاً أدوات ES6+ الحديثة مثل{" "}
            <strong>Destructuring</strong>، و <strong>Spread/Rest</strong>، و{" "}
            <strong>Template Literals</strong> التي تجعل التعامل مع البيانات أسهل بكثير.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: لماذا نستخدمه */}
        {/* ========================================== */}
        <LessonSection title="لماذا نستخدم المصفوفات والكائنات؟">
          <p>
            بدون المصفوفات والكائنات، سنواجه مشاكل كبيرة في تنظيم البيانات. إليك
            الأسباب الرئيسية:
          </p>

          <ul>
            <li>
              <strong>تنظيم البيانات:</strong> بدلاً من تعريف عشرات المتغيرات
              المنفصلة، نجمعها في مكان واحد منظّم.
            </li>
            <li>
              <strong>سهولة التعديل:</strong> يمكنك إضافة أو حذف عناصر بسهولة دون
              تغيير هيكل الكود.
            </li>
            <li>
              <strong>التكرار (Iteration):</strong> يمكنك المرور على جميع العناصر
              بحلقة واحدة بدلاً من كتابة كود لكل عنصر.
            </li>
            <li>
              <strong>تمرير البيانات:</strong> يمكنك إرسال مجموعة بيانات كاملة كمعامل
              واحد للدوال.
            </li>
            <li>
              <strong>تمثيل البيانات الطبيعية:</strong> البيانات في حياتنا الحقيقية
              تأتي على شكل قوائم (مصفوفات) وبطاقات معلومات (كائنات).
            </li>
          </ul>

          <CodeBlock
            language="javascript"
            code={`// بدون مصفوفات - كود مُعقّد وصعب الصيانة
let student1 = "أحمد";
let student2 = "سارة";
let student3 = "محمد";
let student4 = "فاطمة";
let student5 = "خالد";

// مع مصفوفات - كود نظيف ومرتب
let students = ["أحمد", "سارة", "محمد", "فاطمة", "خالد"];`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: المشكلة التي يحلها */}
        {/* ========================================== */}
        <LessonSection title="المشكلة التي يحلها">
          <p>
            تخيّل أنك تبني تطبيق متجر إلكتروني وتحتاج لتخزين منتجات. بدون مصفوفات
            وكائنات، ستحتاج لتعريف متغير لكل خاصية لكل منتج:
          </p>

          <CodeBlock
            language="javascript"
            code={`// هذا الكود مُرعب وصعب الصيانة!
let product1Name = "لابتوب";
let product1Price = 3500;
let product1Category = "إلكترونيات";

let product2Name = "هاتف";
let product2Price = 2000;
let product2Category = "إلكترونيات";
`}
          />

          <p>
            <strong>المصفوفات والكائنات يحلان هذه المشكلة</strong> bằng تمكينك من
            تنظيم البيانات في بنى منطقية سهلة القراءة والتعديل.
          </p>

          <CodeBlock
            language="javascript"
            code={`// مع الكائنات والمصفوفات - كود احترافي
let products = [
  { name: "لابتوب", price: 3500, category: "إلكترونيات" },
  { name: "هاتف", price: 2000, category: "إلكترونيات" },
  { name: "كتاب", price: 50, category: "كتب" }
];`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: شرح بسيط */}
        {/* ========================================== */}
        <LessonSection title="شرح بسيط">
          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            أولاً: المصفوفات (Arrays)
          </h3>
          <p>
            المصفوفة هي <strong>قائمة مرتبة</strong> من العناصر محاطة بأقواس مربعة{" "}
            <code>[]</code>. كل عنصر له <strong>رقم فهرس (index)</strong> يبدأ من 0.
          </p>

          <CodeBlock
            language="javascript"
            code={`// إنشاء مصفوفة
let fruits = ["تفاح", "موز", "برتقال", "عنب"];

//     الفهرس:   0       1       2        3
// العنصر الأول عند الفهرس 0 وليس 1!

console.log(fruits[0]); // "تفاح"
console.log(fruits[2]); // "برتقال"
console.log(fruits.length); // 4 (عدد العناصر)`}
          />

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            ثانياً: الكائنات (Objects)
          </h3>
          <p>
            الكائن هو مجموعة من <strong>القيم المسمّاة</strong> محاطة بأقواس{" "}
            <code>{"{}"}</code>. كل قيمة لها <strong>مفتاح (key)</strong> و<strong>قيمة
            (value)</strong> مفصولان بنقطتين <code>:</code>.
          </p>

          <CodeBlock
            language="javascript"
            code={`// إنشاء كائن
let person = {
  name: "أحمد",
  age: 25,
  city: "القاهرة"
};

// الوصول للقيم
console.log(person.name);  // "أحمد" (نقطة)
console.log(person["age"]); // 25 (أقواس)
console.log(person.city);   // "القاهرة"`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه بسيط:
            </p>
            <p>
              <strong>المصفوفة</strong> مثل قائمة انتظار: كل شخص له رقم ترتيبي
              (الرقم 1، الرقم 2...). <strong>الكائن</strong> مثل بطاقة هوية: كل معلومة لها
              اسم واضح (الاسم، العمر، العنوان...).
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            ثالثاً: الفرق الجوهري
          </h3>
          <ul>
            <li>
              <strong>المصفوفة:</strong> نصل للعناصر بالفهرس الرقمي{" "}
              <code>array[0]</code>
            </li>
            <li>
              <strong>الكائن:</strong> نصل للقيم بالمفتاح النصي <code>object.key</code>{" "}
              أو <code>object["key"]</code>
            </li>
            <li>
              <strong>المصفوفة:</strong> العناصر <strong>مرتبة</strong> وフェهرسها
              ثابت.
            </li>
            <li>
              <strong>الكائن:</strong> القيم <strong>غير مرتبة</strong> - نصل لها بالمفتاح
              فقط.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: مثال بسيط */}
        {/* ========================================== */}
        <LessonSection title="مثال بسيط">
          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            العمليات الأساسية على المصفوفات
          </h3>
          <CodeBlock
            language="javascript"
            code={`// === إنشاء مصفوفة ===
let colors = ["أحمر", "أخضر", "أزرق"];

// === إضافة عنصر في النهاية ===
colors.push("أصفر");
console.log(colors); // ["أحمر", "أخضر", "أزرق", "أصفر"]

// === إضافة عنصر في البداية ===
colors.unshift("أبيض");
console.log(colors); // ["أبيض", "أحمر", "أخضر", "أزرق", "أصفر"]

// === حذف آخر عنصر ===
let last = colors.pop();
console.log(last);  // "أصفر"
console.log(colors); // ["أبيض", "أحمر", "أخضر", "أزرق"]

// === حذف أول عنصر ===
let first = colors.shift();
console.log(first); // "أبيض"
console.log(colors); // ["أحمر", "أخضر", "أزرق"]

// === البحث عن عنصر ===
console.log(colors.indexOf("أخضر")); // 1
console.log(colors.includes("أحمر")); // true
console.log(colors.includes("أصفر")); // false`}
          />

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            عمليات التشذيب والتقشير (splice و slice)
          </h3>
          <CodeBlock
            language="javascript"
            code={`let letters = ["a", "b", "c", "d", "e"];

// splice: يُعدّل المصفوفة الأصلية
// splice(ابدأ من الفهرس, عدد العناصر المحذوفة, عناصر جديدة)
letters.splice(1, 2); // احذف من الفهرس 1 عنصرين
console.log(letters); // ["a", "d", "e"]

letters.splice(1, 0, "x", "y"); // أضف بعد الفهرس 1
console.log(letters); // ["a", "x", "y", "d", "e"]

// slice: لا يُعدّل المصفوفة الأصلية - يُرجع مصفوفة جديدة
let nums = [10, 20, 30, 40, 50];
let sliced = nums.slice(1, 3); // من الفهرس 1 إلى 2 (3 غير مشمولة)
console.log(sliced); // [20, 30]
console.log(nums);   // [10, 20, 30, 40, 50] (الأصلية لم تتغير)`}
          />

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            العمليات الأساسية على الكائنات
          </h3>
          <CodeBlock
            language="javascript"
            code={`// === إنشاء كائن ===
let car = {
  brand: "تويوتا",
  model: "كامري",
  year: 2024
};

// === إضافة خاصية جديدة ===
car.color = "أبيض";
console.log(car); // { brand: "تويوتا", model: "كامري", year: 2024, color: "أبيض" }

// === تعديل قيمة ===
car.year = 2025;

// === حذف خاصية ===
delete car.model;

// === التحقق من وجود خاصية ===
console.log("brand" in car);     // true
console.log("model" in car);     // false

// === الكائنات المتداخلة (Nested Objects) ===
let student = {
  name: "سارة",
  age: 22,
  address: {
    city: "الرياض",
    street: "شارع الملك فهد"
  }
};

console.log(student.address.city); // "الرياض"`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: مثال عملي */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: نظام إدارة مهام">
          <p>
            لنبنِ مثالاً عملياً يجمع المصفوفات والكائنات في نظام إدارة مهام (Todo
            App) بسيط:
          </p>

          <CodeBlock
            language="javascript"
            code={`// ============================================
// نظام إدارة مهام (Todo App) بسيط
// ============================================

// مصفوفة لتخزين كل المهام
let todos = [];

// إضافة مهمة جديدة
function addTodo(title, priority) {
  let newTodo = {
    id: todos.length + 1,
    title: title,
    priority: priority,
    completed: false,
    createdAt: new Date().toLocaleDateString("ar-EG")
  };
  todos.push(newTodo);
  console.log(\`تمت إضافة المهمة: \${title}\`);
}

// عرض جميع المهام
function showTodos() {
  if (todos.length === 0) {
    console.log("لا توجد مهام حالياً");
    return;
  }
  console.log("قائمة المهام:");
  todos.forEach((todo, index) => {
    let status = todo.completed ? "✓" : "✗";
    console.log(\`\${index + 1}. [\${status}] \${todo.title} (الأولوية: \${todo.priority})\`);
  });
}

// إكمال مهمة
function completeTodo(id) {
  let todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = true;
    console.log(\`تم إكمال المهمة: \${todo.title}\`);
  } else {
    console.log("المهمة غير موجودة");
  }
}

// حذف مهمة
function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  console.log("تم حذف المهمة");
}

// === تجربة النظام ===
addTodo("تعلم JavaScript", "مرتفعة");
addTodo("بناء موقع شخصي", "متوسطة");
addTodo("قراءة كتاب", "منخفضة");

showTodos();
// 1. [✗] تعلم JavaScript (الأولوية: مرتفعة)
// 2. [✗] بناء موقع شخصي (الأولوية: متوسطة)
// 3. [✗] قراءة كتاب (الأولوية: منخفضة)

completeTodo(1);
showTodos();
// 1. [✓] تعلم JavaScript (الأولوية: مرتفعة)

deleteTodo(3);
showTodos();
// 1. [✓] تعلم JavaScript (الأولوية: مرتفعة)
// 2. [✗] بناء موقع شخصي (الأولوية: متوسطة)`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 ماذا تعلمنا من هذا المثال؟
            </p>
            <ul>
              <li>كيف نستخدم <strong>كائناً</strong> لتمثيل مهمة واحدة (بها عدة خصائص).</li>
              <li>كيف نستخدم <strong>مصفوفة</strong> لتخزين قائمة المهام.</li>
              <li>كيف نستخدم <strong>الدوال</strong> مع المصفوفات والكائنات.</li>
              <li>استخدام <code>forEach</code> للمرور على العناصر.</li>
              <li>استخدام <code>find</code> و <code>filter</code> للبحث والتصفية.</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: ماذا يحدث خلف الكواليس */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            كيف تعمل المصفوفات في الذاكرة؟
          </h3>
          <p>
            عندما تنشئ مصفوفة في JavaScript، المتصفح (أو محرك Node.js) يقوم بـ:
          </p>
          <ol>
            <li>
              <strong>حجز مساحة في الذاكرة (Memory Allocation):</strong> يُخصّص
              مكاناً في الذاكرة لمخزنة العناصر.
            </li>
            <li>
              <strong>تخزين الفهرسات (Indexing):</strong> كل عنصر له فهرس رقمي
              يمثل موضعه.
            </li>
            <li>
              <strong>المراجع (References):</strong> في الكائنات، المفاتيح تخزّن
              "مراجعاً" للقيم في الذاكرة، وليست القيم نفسها.
            </li>
          </ol>

          <CodeBlock
            language="javascript"
            code={`// ماذا يحدث في الذاكرة؟
let arr = [1, 2, 3];
let obj = { a: 1, b: 2 };

// المصفوفة: عناصر مرتبة بفهرسات
// الذاكرة: [ 1 | 2 | 3 ]
// الفهرس:  [ 0 | 1 | 2 ]

// الكائن: مفاتيح مرتبطة بقيم
// الذاكرة: { "a" → 1, "b" → 2 }

// ⚠️ تحذير: الكائنات والمصفوفات pass-by-reference
let original = { name: "أحمد" };
let copy = original; // copy تشير لنفس الكائن!

copy.name = "محمد";
console.log(original.name); // "محمد" - تغير أيضاً!
// السبب:两者ان يشاركان نفس المرجع في الذاكرة`}
          />

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            الدور الداخلي لـ push و pop
          </h3>
          <CodeBlock
            language="javascript"
            code={`// push(): يضيف عنصراً في نهاية المصفوفة
// الذاكرة: المصفوفة تتوسع إذا امتلأت
let arr = [1, 2, 3];
arr.push(4); // الذاكرة: [1, 2, 3, 4]

// pop(): يُزيل آخر عنصر
// يُرجع العنصر المحذوف
let last = arr.pop(); // last = 4، المصفوفة: [1, 2, 3]

// splice(): أعقد - يُعدّل المصفوفة من أي موضع
// يحذف ويضيف في نفس الوقت
arr.splice(1, 1, 10, 20); // احذف من الفهرس 1 عنصراً واحداً، أضف 10 و 20
// النتيجة: [1, 10, 20, 3]`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 هل تعلم؟
            </p>
            <p>
              المصفوفات في JavaScript ليست عناصر ثنائية (binary arrays) مثل لغات C.
              بل هي <strong>كائنات خاصة</strong> لها خصائص مثل <code>length</code> و
              دوال مثل <code>push</code> و <code>pop</code>. هذا يجعلها مرنّة لكنه قد
              يبطئ الأداء مع المصفوفات الكبيرة جداً.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: التكرار على المصفوفات */}
        {/* ========================================== */}
        <LessonSection title="التكرار على المصفوفات (Array Iteration)">
          <p>
            التكرار يعني المرور على كل عنصر في المصفوفة وإجراء عملية ما عليه. هناك
            عدة طرق:
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            الطريقة الأولى: حلقة for الكلاسيكية
          </h3>
          <CodeBlock
            language="javascript"
            code={`let fruits = ["تفاح", "موز", "برتقال"];

for (let i = 0; i < fruits.length; i++) {
  console.log(\`العنصر \${i}: \${fruits[i]}\`);
}
// العنصر 0: تفاح
// العنصر 1: موز
// العنصر 2: برتقال`}
          />

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            الطريقة الثانية: حلقة for...of
          </h3>
          <CodeBlock
            language="javascript"
            code={`let fruits = ["تفاح", "موز", "برتقال"];

// for...of: يمر على القيم مباشرة (أسهل وأوضح)
for (let fruit of fruits) {
  console.log(fruit);
}
// تفاح
// موز
// برتقال`}
          />

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            الطريقة الثالثة: دالة forEach
          </h3>
          <CodeBlock
            language="javascript"
            code={`let fruits = ["تفاح", "موز", "برتقال"];

// forEach: تأخذ دالة callback تُنفّذ لكل عنصر
fruits.forEach((fruit, index) => {
  console.log(\`\${index + 1}. \${fruit}\`);
});
// 1. تفاح
// 2. موز
// 3. برتقال`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 أيهما نستخدم؟
            </p>
            <p>
              استخدم <strong>for...of</strong> إذا أردت المرور على القيم فقط.
              استخدم <strong>forEach</strong> إذا أردت الوصول للفهرس أيضاً.
              استخدم <strong>for العادية</strong> إذا أردت التحكم الكامل (مثل التخطي
              أو العكس).
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            تكرار الكائنات: for...in
          </h3>
          <CodeBlock
            language="javascript"
            code={`let person = { name: "أحمد", age: 25, city: "القاهرة" };

// for...in: يمر على المفاتيح (keys)
for (let key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}
// name: أحمد
// age: 25
// city: القاهرة`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: Destructuring */}
        {/* ========================================== */}
        <LessonSection title="فك التجميع (Destructuring)">
          <p>
            <strong>Destructuring</strong> هو أحد أهم ميزات ES6. يُمكّنك من استخراج
            قيم من المصفوفات أو الكائنات وتخزينها في متغيرات بسطر واحد بدلاً من
            عدة أسطر.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            1) Destructuring للمصفوفات
          </h3>

          <CodeBlock
            language="javascript"
            code={`// بدون Destructuring
let colors = ["أحمر", "أخضر", "أزرق"];
let first = colors[0];
let second = colors[1];
let third = colors[2];

// مع Destructuring - نفس النتيجة في سطر واحد!
let [red, green, blue] = ["أحمر", "أخضر", "أزرق"];
console.log(red);   // "أحمر"
console.log(green); // "أخضر"
console.log(blue);  // "أزرق"

// تخطي عناصر
let [a, , c] = [10, 20, 30];
console.log(a); // 10
console.log(c); // 30 (تم تخطي العنصر 20)

// القيمة الافتراضية (Default Value)
let [x = 0, y = 0, z = 0] = [5];
console.log(x); // 5
console.log(y); // 0 (لم يُحدد - استخدم الافتراضي)
console.log(z); // 0 (لم يُحدد - استخدم الافتراضي)`}
          />

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            2) Destructuring للكائنات
          </h3>

          <CodeBlock
            language="javascript"
            code={`// بدون Destructuring
let person = { name: "سارة", age: 28, city: "دبي" };
let name = person.name;
let age = person.age;
let city = person.city;

// مع Destructuring
let { name: pName, age: pAge, city: pCity } = person;
console.log(pName); // "سارة"
console.log(pAge);  // 28
console.log(pCity); // "دبي"

// بدون إعادة تسمية - الاسم يكون كما هو في الكائن
let { name, age, city } = person;
console.log(name); // "سارة"

// القيمة الافتراضية
let { name, age, country = "الإمارات" } = person;
console.log(country); // "الإمارات"`}
          />

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            3) Destructuring متداخل (Nested Destructuring)
          </h3>

          <CodeBlock
            language="javascript"
            code={`let user = {
  id: 1,
  name: "خالد",
  address: {
    city: "جدة",
    zip: "21589",
    country: "السعودية"
  },
  hobbies: ["قراءة", "برمجة", "سباحة"]
};

// Destructuring متداخل للكائنات
let {
  name: userName,
  address: { city: userCity, zip: userZip }
} = user;

console.log(userName); // "خالد"
console.log(userCity); // "جدة"
console.log(userZip);  // "21589"

// Destructuring للمصفوفة المتداخلة
let [hobby1, hobby2] = user.hobbies;
console.log(hobby1); // "قراءة"
console.log(hobby2); // "برمجة"`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: Spread و Rest Operators */}
        {/* ========================================== */}
        <LessonSection title="OPERATORS: Spread و Rest">
          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            1) Spread Operator (...)
          </h3>
          <p>
            <strong>Spread</strong> يُوسّع (يُفرّق) مصفوفة أو كائن إلى عناصر
            منفصلة. يُستخدم للنسخ والدمج وإضافة عناصر.
          </p>

          <CodeBlock
            language="javascript"
            code={`// === نسخ مصفوفة (بدون تغيير الأصلية) ===
let original = [1, 2, 3];
let copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] (لم تتغير)
console.log(copy);     // [1, 2, 3, 4]

// === دمج مصفوفتين ===
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// === إضافة عنصر لمصفوفة ===
let nums = [2, 3, 4];
let withOne = [1, ...nums];
console.log(withOne); // [1, 2, 3, 4]

// === نسخ كائن ===
let originalObj = { name: "أحمد", age: 25 };
let copyObj = { ...originalObj };
copyObj.age = 30;
console.log(originalObj.age); // 25 (لم يتغير)
console.log(copyObj.age);     // 30

// === دمج كائنين ===
let defaults = { color: "أزرق", size: "متوسط" };
let userPrefs = { color: "أحمر" };
let final = { ...defaults, ...userPrefs };
console.log(final); // { color: "أحمر", size: "متوسط" }
// ملاحظة: userPrefs تغلب defaults (color تغير)`}
          />

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            2) Rest Parameters (...)
          </h3>
          <p>
            <strong>Rest</strong> يجمع العناصر المتبقية في مصفوفة واحدة. عكس Spread -
            هو يجمع بدلاً من أن يُفرّق.
          </p>

          <CodeBlock
            language="javascript"
            code={`// === Rest في الدوال ===
function sum(...numbers) {
  // numbers هنا مصفوفة تحتوي كل المعاملات
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(10, 20, 30, 40)); // 100

// === Rest مع معامل أولاً ===
function greet(greeting, ...names) {
  names.forEach(name => {
    console.log(\`\${greeting}, \${name}!\`);
  });
}

greet("مرحبا", "أحمد", "سارة", "محمد");
// مرحبا، أحمد!
// مرحبا، سارة!
// مرحبا، محمد!

// === Rest في Destructuring ===
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5] - باقي العناصر في مصفوفة

let { name, age, ...details } = {
  name: "فاطمة",
  age: 22,
  city: "القاهرة",
  job: "مطورة"
};
console.log(name);    // "فاطمة"
console.log(age);     // 22
console.log(details); // { city: "القاهرة", job: "مطورة" }`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 الفرق بين Spread و Rest:
            </p>
            <ul>
              <li>
                <strong>Spread (...) في يمين الإسناد (=):</strong> يُوسّع العناصر.
                مثل <code>let arr = [1, ...other]</code>
              </li>
              <li>
                <strong>Rest (...) في يسار الإسناد (=):</strong> يجمع العناصر.
                مثل <code>let [first, ...rest] = arr</code>
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: Template Literals */}
        {/* ========================================== */}
        <LessonSection title="Template Literals: النصوص القالبية">
          <p>
            <strong>Template Literals</strong> (النقوش القالبية) هي طريقة حديثة لكتابة
            النصوص في JavaScript باستخدام علامات ال backtick <code>`</code> بدلاً من
            علامات الاقتباس.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            1) إدراج التعبيرات (Expression Interpolation)
          </h3>
          <CodeBlock
            language="javascript"
            code={`let name = "أحمد";
let age = 25;

// الطريقة القديمة ( concatenation )
let old = "مرحباً " + name + "، عمرك " + age + " سنة";

// الطريقة الحديثة ( Template Literals )
let modern = \`مرحباً \${name}، عمرك \${age} سنة\`;

console.log(modern); // "مرحباً أحمد، عمرك 25 سنة"

// يمكن وضع أي تعبير JavaScript داخل \${}
let price = 100;
let quantity = 5;
console.log(\`الإجمالي: \${price * quantity} ريال\`); // "الإجمالي: 500 ريال"

let isStudent = true;
console.log(\`الحالة: \${isStudent ? "طالب" : "عميل"}\`); // "الحالة: طالب"`}
          />

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            2) النصوص متعددة الأسطر (Multi-line Strings)
          </h3>
          <CodeBlock
            language="javascript"
            code={`// الطريقة القديمة - استخدام \\n
let oldLine = "السطر الأول\\nالسطر الثاني\\nالسطر الثالث";

// الطريقة الحديثة - سطر جديد ببساطة!
let newLine = \`السطر الأول
السطر الثاني
السطر الثالث\`;

console.log(newLine);
// السطر الأول
// السطر الثاني
// السطر الثالث

// مثال عملي: إنشاء HTML
let userName = "سارة";
let html = \`<div class="card">
  <h2>مرحباً، \${userName}</h2>
  <p>أنت مسجل في المنصة</p>
</div>\`;`}
          />

          <h3 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--primary)" }}>
            3) Tagged Templates (نقوش مُوسمة)
          </h3>
          <CodeBlock
            language="javascript"
            code={`// مثال بسيط لـ Tagged Template
function highlight(strings, ...values) {
  let result = "";
  strings.forEach((str, i) => {
    result += str;
    if (values[i] !== undefined) {
      result += \`<strong>\${values[i]}</strong>\`;
    }
  });
  return result;
}

let name = "أحمد";
let skill = "JavaScript";
let result = highlight\`الطالب \${name} يجيد \${skill}\`;
console.log(result);
// "الطالب <strong>أحمد</strong> يجيد <strong>JavaScript</strong>"`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 متى نستخدم Template Literals؟
            </p>
            <ul>
              <li>عند الحاجة لإدراج متغيرات في النصوص (interpolation).</li>
              <li>عند كتابة نصوص متعددة الأسطر.</li>
              <li>عند بناء HTML ديناميكي.</li>
              <li>عند كتابة رسائل الخطأ أو السجلات (logs).</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul>
            <li>
              <strong>❌ نسيان أن الفهرس يبدأ من 0:</strong>
              <br />
              كتابة <code>fruits[fruits.length]</code> بدلاً من{" "}
              <code>fruits[fruits.length - 1]</code> للحصول على آخر عنصر.
            </li>
            <li>
              <strong>❌ الخلط بين splice و slice:</strong>
              <br />
              <code>splice()</code> يُعدّل المصفوفة الأصلية،{" "}
              <code>slice()</code> يُرجع نسخة جديدة.
            </li>
            <li>
              <strong>❌ نسخ الكائنات بالطريقة الخطأ:</strong>
              <br />
              كتابة <code>let copy = obj</code> لا تُنشئ نسخة جديدة - copy يشير
              لنفس الكائن في الذاكرة. استخدم <code>{"{ ...obj }"}</code> أو{" "}
              <code>Object.assign()</code>.
            </li>
            <li>
              <strong>❌ استخدام for...in على المصفوفات:</strong>
              <br />
              <code>for...in</code> يمر على المفاتيح (strings) وليس القيم.
              استخدم <code>for...of</code> للمصفوفات.
            </li>
            <li>
              <strong>❌ نسيان علامات ال backtick مع Template Literals:</strong>
              <br />
              استخدام علامات اقتباس عادية <code>&apos;&apos;</code> أو{" "}
              <code>&quot;&quot;</code> بدلاً من <code>` `</code>.
            </li>
            <li>
              <strong>❌ استخدام var مع loop:</strong>
              <br />
              استخدام <code>var</code> في حلقات <code>for</code> يسبب مشاكل في
              النطاق (scope). استخدم دائماً <code>let</code>.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li>
              <strong>✅ استخدم const كافتراضي:</strong>
              <br />
              استخدم <code>const</code> للمصفوفات والكائنات إلا إذا كنت ستُعيّنها
              بالكامل لاحقاً.
            </li>
            <li>
              <strong>✅ استخدم Destructuring للاختصار:</strong>
              <br />
              بدلاً من كتابة <code>person.name</code> و <code>person.age</code> مرات
              عديدة، استخدم <code>{"const { name, age } = person"}</code>.
            </li>
            <li>
              <strong>✅ استخدم Spread لنسخ البيانات:</strong>
              <br />
              لا تُعدّل المصفوفات أو الكائنات الأصلية مباشرة. أنشئ نسخة باستخدام{" "}
              <code>[...arr]</code> أو <code>{"{ ...obj }"}</code>.
            </li>
            <li>
              <strong>✅ استخدم Template Literals بدل concatenation:</strong>
              <br />
              أسهل للقراءة وأكثر كفاءة: <code>{`\`Hello \${name}\``}</code> بدلاً
              من <code>&quot;Hello &quot; + name</code>.
            </li>
            <li>
              <strong>✅ استخدم for...of للمصفوفات:</strong>
              <br />
              أسهل وأوضح من الحلقات التقليدية.
            </li>
            <li>
              <strong>✅ اكتب أسماء مفاهيمية:</strong>
              <br />
              اسم المصفوفة يكون جمعاً (مثل <code>students</code>)، واسم الكائن
              يكون مفرد (مثل <code>student</code>).
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li>
                <strong style={{ color: "var(--primary)" }}>المصفوفات (Arrays):</strong>{" "}
                قوائم مرتبة من العناصر، نصل لها بالفهرس الرقمي.
              </li>
              <li>
                <strong style={{ color: "var(--primary)" }}>الكائنات (Objects):</strong>{" "}
                مجموعات من القيم المسمّاة، نصل لها بالمفتاح (key).
              </li>
              <li>
                <strong style={{ color: "var(--secondary)" }}>Destructuring:</strong>{" "}
                فك تجميع القيم من المصفوفات والكائنات في متغيرات بسطر واحد.
              </li>
              <li>
                <strong style={{ color: "var(--secondary)" }}>Spread Operator (...):</strong>{" "}
                نسخ ودمج المصفوفات والكائنات.
              </li>
              <li>
                <strong style={{ color: "var(--secondary)" }}>Rest Parameters (...):</strong>{" "}
                جمع العناصر المتبقية في مصفوفة واحدة.
              </li>
              <li>
                <strong style={{ color: "var(--accent)" }}>Template Literals:</strong>{" "}
                كتابة النصوص مع إدراج تعبيرات باستخدام backtick.
              </li>
              <li>
                <strong style={{ color: "var(--accent)" }}>التكرار:</strong>{" "}
                <code>for...of</code> للمصفوفات، <code>for...in</code> للكائنات.
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz الأول: Destructuring */}
        {/* ========================================== */}
        <Quiz
          question="ما هو ناتج الكود التالي؟"
          options={[
            'name = "أحمد" و age = 25 و city = "القاهرة"',
            'name = { name: "أحمد" } و age = { age: 25 }',
            "خطأ في التنفيذ (Syntax Error)",
            'name = "أحمد" و city = "الرياض"',
          ]}
          correctAnswer={0}
          explanation='باستخدام Destructuring، يتم فك قيم الكائن person إلى المتغيرات المقابلة: name = "أحمد" و age = 25 و city = "القاهرة".'
        />

        <Quiz
          question="ما الفرق بين splice و slice في المصفوفات؟"
          options={[
            "splice يُرجع مصفوفة جديدة، slice يُعدّل الأصلية",
            "splice يُعدّل المصفوفة الأصلية، slice يُرجع نسخة جديدة",
            "كلاهما لا يُعدّل المصفوفة الأصلية",
            "splice يعمل فقط مع الأرقام، slice يعمل مع أي نوع",
          ]}
          correctAnswer={1}
          explanation="splice() يُعدّل المصفوفة الأصلية عن طريق الحذف والإضافة، بينما slice() يُرجع مصفوفة جديدة من العناصر المحددة دون تغيير الأصلية."
        />

        {/* ========================================== */}
        {/* Quiz الثاني: Spread vs Rest */}
        {/* ========================================== */}
        <Quiz
          question="في الكود التالي، ما هو ناتج rest؟"
          options={[
            "rest = [3, 4, 5]",
            "rest = [1, 2, 3, 4, 5]",
            "rest = [1, 2]",
            "rest = 3",
          ]}
          correctAnswer={0}
          explanation='Rest Parameters (...) تجمع العناصر المتبقية في مصفوفة. بعد استخراج first=1 و second=2، تصبح rest = [3, 4, 5].'
        />

        <Quiz
          question="ما هو الفرق الأساسي بين Spread و Rest؟"
          options={[
            "Spread يجمع العناصر، Rest يُوسّعها",
            "Spread يُوسّع العناصر (يفصلها)، Rest يجمع العناصر في مصفوفة واحدة",
            "كلاهما نفس الشيء لكن بأسماء مختلفة",
            "Spread يعمل مع المصفوفات فقط، Rest يعمل مع الكائنات فقط",
          ]}
          correctAnswer={1}
          explanation="Spread (...) يأخذ عناصر من مصفوفة/كائن ويفصلها، بينما Rest (...) يجمع عناصر متعددة في مصفوفة واحدة. Spread يُستخدم في يمين الإسناد (=)، وRest يُستخدم في يساره."
        />

        {/* ========================================== */}
        {/* التحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: نظام طلاب"
          description={
            <p>
              أنشئ نظام بسيط لإدارة طلاب باستخدام المصفوفات والكائنات:
              <br />
              1. أنشئ مصفوفة فيها 3 كائنات طلاب (كل كائن فيه: name, grade, subjects)
              <br />
              2. استخدم Destructuring لاستخراج اسم الطالب الأول ومعدله
              <br />
              3. استخدم Spread لإنشاء نسخة من المصفوفة وإضافة طالب جديد
              <br />
              4. استخدم Template Literals لطباعة معلومات كل طالب بتنسيق جميل
            </p>
          }
        >
          <CodeBlock
            language="javascript"
            code={`// الحل

// 1. إنشاء مصفوفة الطلاب
let students = [
  { name: "أحمد", grade: 90, subjects: ["رياضيات", "فيزياء"] },
  { name: "سارة", grade: 95, subjects: ["أدب", "إنجليزي"] },
  { name: "محمد", grade: 85, subjects: ["كيمياء", "أحياء"] }
];

// 2. Destructuring لاستخراج معلومات الطالب الأول
let { name: firstStudent, grade: firstGrade } = students[0];
console.log(\`الطالب الأول: \${firstStudent}، المعدل: \${firstGrade}\`);

// 3. Spread لإضافة طالب جديد
let newStudent = { name: "فاطمة", grade: 92, subjects: ["تاريخ", "جغرافيا"] };
let allStudents = [...students, newStudent];

// 4. طباعة معلومات كل طالب
allStudents.forEach(student => {
  console.log(\`🎓 \${student.name} | المعدل: \${student.grade} | التخصصات: \${student.subjects.join("، ")}\`);
});

// النتيجة:
// 🎓 أحمد | المعدل: 90 | التخصصات: رياضيات، فيزياء
// 🎓 سارة | المعدل: 95 | التخصصات: أدب، إنجليزي
// 🎓 محمد | المعدل: 85 | التخصصات: كيمياء، أحياء
// 🎓 فاطمة | المعدل: 92 | التخصصات: تاريخ، جغرافيا`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ورقة غش: المصفوفات والكائنات + ES6+">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* أولاً: المصفوفات */}
            <div>
              <p className="font-bold mb-3 text-lg" style={{ color: "var(--primary)" }}>
                المصفوفات (Arrays)
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">let arr = [1, 2, 3]</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>إنشاء مصفوفة</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">arr.push(4)</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>إضافة في النهاية</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">arr.unshift(0)</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>إضافة في البداية</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">arr.pop()</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>حذف آخر عنصر</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">arr.shift()</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>حذف أول عنصر</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">arr.splice(1, 2, &apos;x&apos;)</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>حذف/إضافة من مكان محدد</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">arr.slice(1, 3)</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>استخراج جزء (بدون تغيير الأصلية)</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">arr.indexOf(&apos;x&apos;)</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>إيجاد فهرس عنصر</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">arr.includes(&apos;x&apos;)</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>التحقق من وجود عنصر</p>
                </div>
              </div>
            </div>

            {/* ثانياً: الكائنات */}
            <div>
              <p className="font-bold mb-3 text-lg" style={{ color: "var(--secondary)" }}>
                الكائنات (Objects)
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"let obj = { key: val }"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>إنشاء كائن</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"obj.key"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>الوصول بنقطة</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"obj['key']"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>الوصول بأقواس</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"obj.newKey = val"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>إضافة خاصية</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"delete obj.key"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>حذف خاصية</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"'key' in obj"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>التحقق من وجود خاصية</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"for (let k in obj)"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>تكرار على المفاتيح</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"Object.keys(obj)"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>جميع المفاتيح كمصفوفة</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"Object.values(obj)"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>جميع القيم كمصفوفة</p>
                </div>
              </div>
            </div>

            {/* ثالثاً: Destructuring */}
            <div>
              <p className="font-bold mb-3 text-lg" style={{ color: "var(--accent)" }}>
                Destructuring
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"let [a, b] = [1, 2]"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>فك مصفوفة</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"let [a, , c] = [1, 2, 3]"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>تخطي عنصر</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"let [a = 0] = []"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>قيمة افتراضية</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"let { x, y } = { x: 1, y: 2 }"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>فك كائن</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"let { x: myX } = { x: 1 }"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>إعادة تسمية</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"let { a, b = 10 } = { a: 5 }"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>قيمة افتراضية للكائن</p>
                </div>
              </div>
            </div>

            {/* رابعاً: Spread/Rest و Template Literals */}
            <div>
              <p className="font-bold mb-3 text-lg" style={{ color: "var(--danger)" }}>
                Spread/Rest و Template Literals
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"let c = [...a, ...b]"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>دمج مصفوفتين (Spread)</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"let c = { ...a, ...b }"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>دمج كائنين (Spread)</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"let [a, ...rest] = arr"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Rest في Destructuring</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"function fn(...args)"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Rest في الدوال</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"`Hello ${name}`"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>إدراج متغير</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"`line1\\nline2`"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>نص متعدد الأسطر (backtick)</p>
                </div>
                <div className="p-2 rounded" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <code className="text-xs">{"`${price * qty} EGP`"}</code>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>تعبير داخل Template</p>
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
