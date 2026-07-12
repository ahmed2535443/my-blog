import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ArrayAndObjectMethods() {
  const lessonInfo = getLessonBySlug("javascript", "05-array-and-object-methods");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        {/* ============================================ */}
        {/* القسم 1: ما هو                               */}
        {/* ============================================ */}
        <LessonSection title={"\u0645\u0627 \u0647\u0648 (What is it)\u061f"}>
          <p>
            <strong>{`\u062f\u0648\u0627\u0644 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062a \u0648\u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0627\u0644\u062d\u062f\u064a\u062b\u0629 (Modern Array & Object Methods)`}</strong> {`\u0647\u064a \u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u062f\u0648\u0627\u0644 \u0627\u0644\u0645\u062f\u0645\u062c\u0629 \u0641\u064a JavaScript \u062a\u0633\u0647\u0651\u0644 \u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062a (Arrays) \u0648\u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a (Objects) \u0637\u0631\u064a\u0642\u0629 \u0625\u0639\u0644\u0627\u0646\u064a\u0629 (Declarative) \u0648\u0646\u0638\u064a\u0641\u0629.`}
          </p>
          <p>
            {`\u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u0643\u062a\u0627\u0628\u0629 \u062d\u0644\u0642\u0627\u062a \u062a\u0643\u0631\u064a\u0631\u064a\u0629 (Loops) \u0637\u0648\u064a\u0644\u0629 \u0648\u0645\u062a\u0643\u0631\u0631\u0629\u060c \u062a\u0648\u0641\u0631 \u0644\u0643 \u0647\u0630\u0647 \u0627\u0644\u062f\u0648\u0627\u0644 \u0637\u0631\u0642\u0627\u064b \u0645\u062e\u062a\u0635\u0631\u0629 \u0648\u0645\u0642\u0631\u0648\u0621\u0629 \u0644\u0640: \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u060c \u062a\u0635\u0641\u064a\u0629 \u0627\u0644\u0639\u0646\u0627\u0635\u0631\u060c \u062a\u062c\u0645\u064a\u0639 \u0627\u0644\u0646\u062a\u0627\u0626\u062c\u060c \u0648\u0627\u0644\u0628\u062d\u062b \u0639\u0646 \u0639\u0646\u0627\u0635\u0631 \u0645\u062d\u062f\u062f\u0629.`}
          </p>
          <p>
            {`\u062a\u0634\u0645\u0644 \u0647\u0630\u0647 \u0627\u0644\u062f\u0648\u0627\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062a: `}<code>map()</code>{`\u060c `}<code>filter()</code>{`\u060c `}<code>reduce()</code>{`\u060c `}<code>find()</code>{`\u060c `}<code>findIndex()</code>{`\u060c `}<code>every()</code>{`\u060c `}<code>some()</code>{`. \u0648\u0639\u0644\u0649 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a: `}<code>Object.keys()</code>{`\u060c `}<code>Object.values()</code>{`\u060c `}<code>Object.entries()</code>{`. \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062d\u062f\u064a\u062b\u0629 \u0645\u062b\u0644 `}<strong>Optional Chaining</strong>{` (?.) \u0648`}<strong>Nullish Coalescing</strong>{` (??).`}
          </p>
        </LessonSection>

        {/* ============================================ */}
        {/* القسم 2: لماذا نستخدمه                        */}
        {/* ============================================ */}
        <LessonSection title={"\u0644\u0645\u0627\u0630\u0627 \u0646\u0633\u062a\u062e\u062f\u0645\u0647 (Why we use it)\u061f"}>
          <p>
            {`\u0647\u0630\u0647 \u0627\u0644\u062f\u0648\u0627\u0644 \u0647\u064a \u0627\u0644\u0623\u0633\u0627\u0633 \u0644\u0644\u0639\u0645\u0644 \u0641\u064a \u062a\u0637\u0628\u064a\u0642\u0627\u062a React \u0627\u0644\u062d\u062f\u064a\u062b\u0629. \u0625\u0644\u064a\u0643 \u0627\u0644\u0623\u0633\u0628\u0627\u0628 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629:`}
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>
              <strong>{`القراءة والفهم:`}</strong> {`الكود المكتوب باستخدا `}<code>map</code>{` و `}<code>filter</code>{` أسهل في القراءة من الحلقات التكرارية التقليدية`}
            </li>
            <li>
              <strong>{`البرمجة الوظيفية:`}</strong> {`هذه الدوال لا تعديل المصفوفة الأصلية (Non-Mutating)، مما يمنع الأخطاء غير المتوقعة`}
            </li>
            <li>
              <strong>{`التجزئة والربط (Chaining):`}</strong> {`يمكنك ربط عدة دوال معاً في سلسلة واحده لمعالجة البيانات خطوة بخطوة`}
            </li>
            <li>
              <strong>{`ضرورية لـ React:`}</strong> {`استخدام `}<code>map</code>{` لعرض القوائم و`}<code>filter</code>{` للتصفية هو النمط الأساسي في React`}
            </li>
            <li>
              <strong>{`توفير الوقت:`}</strong> {`دالة مختصرة لمهام معقدة مثل التجميع والبحث`}
            </li>
          </ul>
        </LessonSection>

        {/* ============================================ */}
        {/* القسم 3: المشكلة التي يحلها                    */}
        {/* ============================================ */}
        <LessonSection title={"\u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0627\u0644\u062a\u064a \u064a\u062d\u0644\u0647\u0627 (Problem it solves)"}>
          <p>
            {`\u062a\u062e\u064a\u0651\u0644 \u0623\u0646 \u0644\u062f\u064a\u0643 \u0645\u0635\u0641\u0648\u0641\u0629 \u0645\u0646 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u062a\u0631\u064a\u062f \u062a\u062d\u0648\u064a\u0644\u0647\u0627 \u0625\u0644\u0649 \u0645\u0635\u0641\u0648\u0641\u0629 \u0623\u062e\u0631\u0649 \u0645\u0646 \u0639\u0646\u0627\u0635\u0631 JSX \u0644\u0639\u0631\u0636\u0647\u0627 \u0641\u064a React. \u0628\u062f\u0648\u0646 \u0647\u0630\u0647 \u0627\u0644\u062f\u0648\u0627\u0644\u060c \u0633\u062a\u062d\u062a\u0627\u062c \u0644\u0643\u062a\u0627\u0628\u0629 \u0643\u0648\u062f \u0637\u0648\u064a\u0644 \u0648\u0645\u062a\u0643\u0631\u0631:`}
          </p>
          <CodeBlock
            code={`// ❌ الطريقة القديمة: حلقة تكرارية تقليدية
const users = ["أحمد", "سارة", "محمد", "فاطمة"];
const elements = [];

for (let i = 0; i < users.length; i++) {
  elements.push(<li key={i}>{users[i]}</li>);
}

// بعد ذلك تمرر elements للعرض`}
            language="javascript"
          />
          <p>{`\u0647\u0630\u0627 \u0627\u0644\u0643\u0648\u062f \u064a\u0639\u0645\u0644\u060c \u0644\u0643\u0646\u0647 \u064a\u0639\u0627\u0646\u064a \u0645\u0646 \u0639\u062f\u0629 \u0645\u0634\u0627\u0643\u0644:`}</p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>{`\u0645\u062a\u063a\u064a\u064a\u0631 \u062e\u0627\u0631\u062c\u064a (`}<code>elements</code>{`) \u064a\u062d\u062a\u0627\u062c \u062a\u0647\u064a\u0626\u062a\u0647 \u0645\u0633\u0628\u0642\u0627\u064b`}</li>
            <li>{`\u0625\u062f\u0627\u0631\u0629 \u0641\u0647\u0631\u0633 \u0627\u0644\u062d\u0644\u0642\u0629 \u064a\u062f\u0648\u064a\u0627\u064b (`}<code>i</code>{`)`}</li>
            <li>{`\u0627\u0644\u0643\u0648\u062f \u064a\u0635\u0641 "كيف" \u062a\u0639\u0645\u0644 \u0628\u062f\u0644\u0627\u064b \u0645\u0646 "ماذا" \u062a\u0631\u064a\u062f`}</li>
            <li>{`\u0633\u0647\u0644 \u0646\u0633\u064a\u0627\u0646 \u0634\u0631\u0648\u0637 \u0627\u0644\u062d\u062f\u0648\u062f \u0623\u0648 \u0627\u0631\u062a\u0643\u0627\u0628 \u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u0641\u0647\u0631\u0633\u0629`}</li>
          </ul>
          <CodeBlock
            code={`// ✅ الطريقة الحديثة: استخدام map()
const users = ["أحمد", "سارة", "محمد", "فاطمة"];
const elements = users.map((user) => <li key={user}>{user}</li>);`}
            language="javascript"
          />
          <p>{`\u0627\u0644\u0643\u0648\u062f \u0623\u0642\u0635\u0631\u060c \u0623\u0646\u0638\u0641\u060c \u0648\u064a\u0635\u0641 \u0628\u0648\u0636\u062d \u0645\u0627 \u062a\u0631\u064a\u062f\u0647: "حول كل مستخدم إلى عنصر li".`}</p>
        </LessonSection>

        {/* ============================================ */}
        {/* القسم 4: شرح بسيط                             */}
        {/* ============================================ */}
        <LessonSection title={"\u0634\u0631\u062d \u0628\u0633\u064a\u0637 (Simple explanation)"}>
          <p>{`\u062a\u062e\u064a\u0651\u0644 \u0623\u0646 \u0644\u062f\u064a\u0643 \u062e\u0637 \u0625\u0646\u062a\u0627\u062c \u0641\u064a \u0645\u0635\u0646\u0639. \u0643\u0644 \u062f\u0627\u0644\u0629 \u0647\u064a \u0645\u062d\u0637\u0629 \u0645\u062e\u062a\u0644\u0641\u0629 \u0639\u0644\u0649 \u062e\u0637 \u0627\u0644\u0625\u0646\u062a\u0627\u062c:`}</p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>
              <code>map()</code> = <strong>{`\u0645\u062d\u0637\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644:`}</strong> {`\u062a\u0623\u062e\u0630 \u0643\u0644 \u0642\u0637\u0639\u0629 \u0648\u062a\u062d\u0648\u0644\u0647\u0627 \u0644\u0634\u0643\u0644 \u062c\u062f\u064a\u062f`}
            </li>
            <li>
              <code>filter()</code> = <strong>{`\u0645\u062d\u0637\u0629 \u0627\u0644\u0641\u0631\u0632:`}</strong> {`\u062a\u0645\u0631\u0631 \u0641\u0642\u0637 \u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u062a\u064a \u062a\u0633\u062a\u0648\u0641\u064a \u0634\u0631\u0637\u0627\u064b`}
            </li>
            <li>
              <code>reduce()</code> = <strong>{`\u0645\u062d\u0637\u0629 \u0627\u0644\u062a\u062c\u0645\u064a\u0639:`}</strong> {`\u062a\u062c\u0645\u0639 \u0643\u0644 \u0627\u0644\u0642\u0637\u0639 \u0641\u064a \u0646\u0627\u062a\u062c \u0648\u0627\u062d\u062f`}
            </li>
            <li>
              <code>find()</code> = <strong>{`\u0645\u062d\u0637\u0629 \u0627\u0644\u0628\u062d\u062b:`}</strong> {`\u062a\u062c\u062f \u0627\u0644\u0642\u0637\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0627\u0644\u062a\u064a \u062a\u0637\u0627\u0628\u0642 \u0634\u0631\u0637\u0627\u064b`}
            </li>
            <li>
              <code>every()</code> / <code>some()</code> = <strong>{`\u0645\u062d\u0637\u0629 \u0627\u0644\u062a\u062d\u0642\u0642:`}</strong> {`\u062a\u0633\u0623\u0644 "هل كل القطع/أي قطعة تستوفي الشرط؟"`}
            </li>
          </ul>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-4">
            <p className="text-blue-400 font-bold mb-2">{`\u{1F4A1} \u0627\u0644\u0645\u0641\u062A\u0627\u062D:`}</p>
            <p>
              {`\u0643\u0644 \u0647\u0630\u0647 \u0627\u0644\u062f\u0648\u0627\u0644 \u0644\u0627 \u062a\u0639\u062f\u0651\u0644 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629. `}<code>map()</code>{` \u062a\u0639\u064a\u062f \u0645\u0635\u0641\u0648\u0641\u0629 \u062c\u062f\u064a\u062f\u0629\u060c `}<code>filter()</code>{` \u062a\u0639\u064a\u062f \u0645\u0635\u0641\u0648\u0641\u0629 \u0623\u0642\u0635\u0631\u060c \u0648 `}<code>reduce()</code>{` \u062a\u0639\u064a\u062f \u0642\u064a\u0645\u0629 \u0648\u0627\u062d\u062f\u0629. \u0647\u0630\u0627 \u064a\u0645\u0646\u0639 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0648\u064a\u062c\u0639\u0644 \u0627\u0644\u0643\u0648\u062f \u0623\u0643\u062b\u0631 \u062a\u0648\u0642\u0639\u0627\u064b.`}
            </p>
          </div>
        </LessonSection>

        {/* ============================================ */}
        {/* القسم 5: مثال بسيط                            */}
        {/* ============================================ */}
        <LessonSection title={"\u0645\u062b\u0627\u0644 \u0628\u0633\u064a\u0637 (Simple example)"}>
          <p>{`\u0644\u0646\u0631\u062e \u0623\u0645\u062b\u0644\u0629 \u0633\u0631\u064a\u0639\u0629 \u0639\u0644\u0649 \u0643\u0644 \u062f\u0627\u0644\u0629 \u0631\u0626\u064a\u0633\u064a\u0629:`}</p>

          <CodeBlock
            code={`// بيانات أولية
const numbers = [1, 2, 3, 4, 5];
const names = ["أحمد", "سارة", "محمد", "فاطمة", "خالد"];

// ============================================
// 1. map() - تحويل كل عنصر لشكل جديد
// ============================================
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const greetings = names.map((name) => "مرحباً " + name);
console.log(greetings);
// ["مرحباً أحمد", "مرحباً سارة", ...]`}
            language="javascript"
          />

          <CodeBlock
            code={`// ============================================
// 2. filter() - تصفية العناصر حسب شرط
// ============================================
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]

const longNames = names.filter((name) => name.length > 4);
console.log(longNames); // ["سارة", "محمد", "فاطمة"]`}
            language="javascript"
          />

          <CodeBlock
            code={`// ============================================
// 3. find() - إيجاد أول عنصر يطابق الشرط
// ============================================
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 2

const sara = names.find((name) => name === "سارة");
console.log(sara); // "سارة"`}
            language="javascript"
          />

          <CodeBlock
            code={`// ============================================
// 4. every() و some() - اختبار شروط
// ============================================
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // true

const hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative); // false`}
            language="javascript"
          />
        </LessonSection>

        {/* ============================================ */}
        {/* القسم 6: مثال عملي                            */}
        {/* ============================================ */}
        <LessonSection title={"\u0645\u062b\u0627\u0644 \u0639\u0645\u0644\u064a (Practical example)"}>
          <p>{`\u0644\u0646\u0633\u062a\u0642\u0631\u0628 \u0642\u0648\u064a\u0629 \u0627\u0644\u062f\u0648\u0627\u0644 \u0627\u0644\u062a\u064a \u0631\u0633\u0627\u0644\u062a\u0646\u0627 \u0645\u0639\u0627 \u0628\u0640 React \u0641\u064a \u0645\u0634\u0631\u0648\u0639 \u062d\u0642\u064a\u0642\u064a:`}</p>

          <CodeBlock
            code={`// بيانات متجر إلكتروني
const products = [
  { id: 1, name: "لابتوب",      price: 3500, category: "إلكترونيات", inStock: true  },
  { id: 2, name: "هاتف",        price: 2000, category: "إلكترونيات", inStock: false },
  { id: 3, name: "كتاب",        price: 50,   category: "كتب",        inStock: true  },
  { id: 4, name: "سماعات",      price: 300,  category: "إلكترونيات", inStock: true  },
  { id: 5, name: "قلم",         price: 10,   category: "كتب",        inStock: true  },
];

// ✅ 1. تصفية المنتجات المتوفرة فقط
const available = products.filter((p) => p.inStock);
// [{id:1, ...}, {id:3, ...}, {id:4, ...}, {id:5, ...}]

// ✅ 2. تحويل المتوفرة لعناصر React (الأكثر استخداماً في React!)
const productCards = available.map((product) => (
  <div key={product.id} className="product-card">
    <h3>{product.name}</h3>
    <p>السعر: {product.price} ر.س</p>
  </div>
));

// ✅ 3. ربط filter مع map (Chaining)
const cheapElectronics = products
  .filter((p) => p.category === "إلكترونيات")
  .filter((p) => p.price < 1000)
  .map((p) => p.name);
// ["سماعات"]

// ✅ 4. reduce() - حساب إجمالي سعر المنتجات المتوفرة
const totalRevenue = products
  .filter((p) => p.inStock)
  .reduce((total, product) => total + product.price, 0);
// 3500 + 50 + 300 + 10 = 3860`}
            language="javascript"
          />

          <p>{`\u0644\u0646\u062d\u0646 \u0646\u0631\u0621 \u0645\u062b\u0627\u0644 `}<strong>reduce()</strong>{` \u0627\u0644\u062a\u064a \u0647\u064a \u0627\u0644\u0623\u0639\u0636\u0649 \u0639\u0646\u0627\u0648\u0631 \u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0642\u064a\u0645\u0629 \u0648\u0627\u062d\u062f\u0629:`}</p>

          <CodeBlock
            code={`// ============================================
// reduce() - شرح مفصل
// ============================================
const numbers = [10, 20, 30, 40, 50];

// الجملة: number + accumulator = النتيجة الجديدة
// الخطوة 1: accumulator = 0,  number = 10  → 10
// الخطوة 2: accumulator = 10, number = 20  → 30
// الخطوة 3: accumulator = 30, number = 30  → 60
// الخطوة 4: accumulator = 60, number = 40  → 100
// الخطوة 5: accumulator = 100, number = 50 → 150

const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0); // 0 هي القيمة الأولية للـ accumulator

console.log(sum); // 150

// ============================================
// reduce() - تجميع حسب فئة (Grouping)
// ============================================
const students = [
  { name: "أحمد",  grade: "ممتاز" },
  { name: "سارة",  grade: "جيد جداً" },
  { name: "محمد",  grade: "ممتاز" },
  { name: "فاطمة", grade: "جيد جداً" },
  { name: "خالد",  grade: "مقبول" },
];

const grouped = students.reduce((groups, student) => {
  const key = student.grade;
  if (!groups[key]) {
    groups[key] = [];
  }
  groups[key].push(student.name);
  return groups;
}, {});

console.log(grouped);
// {
//   "ممتاز": ["أحمد", "محمد"],
//   "جيد جداً": ["سارة", "فاطمة"],
//   "مقبول": ["خالد"]
// }`}
            language="javascript"
          />

          <p>{`\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0639\u0646 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0648Optional Chaining:`}</p>

          <CodeBlock
            code={`// ============================================
// Object.keys / Object.values / Object.entries
// ============================================
const user = {
  name: "أحمد",
  age: 28,
  email: "ahmed@example.com"
};

const keys   = Object.keys(user);
// ["name", "age", "email"]

const values = Object.values(user);
// ["أحمد", 28, "ahmed@example.com"]

const entries = Object.entries(user);
// [["name", "أحمد"], ["age", 28], ["email", "ahmed@example.com"]]

// تحويل الكائن إلى مصفوفة ثم استخدام map
const labels = Object.entries(user).map(([key, value]) => {
  return key + ": " + value;
});
// ["name: أحمد", "age: 28", "email: ahmed@example.com"]`}
            language="javascript"
          />

          <CodeBlock
            code={`// ============================================
// Optional Chaining (?.) و Nullish Coalescing (??)
// ============================================
const company = {
  name: "أكاديمية البرمجة",
  address: {
    city: "الرياض"
    // لا يوجد street
  }
};

// ❌ الطريقة القديمة: تحقق متعدد من القيم null/undefined
const street1 = company.address && company.address.street
  ? company.address.street
  : "غير محدد";

// ✅ الطريقة الحديثة: Optional Chaining + Nullish Coalescing
const street2 = company.address?.street ?? "غير محدد";
console.log(street2); // "غير محدد"

// مثال آخر: الوصول العميق للكائنات
const user2 = {
  profile: {
    name: "سارة",
    address: null
  }
};

console.log(user2.profile?.name);            // "سارة"
console.log(user2.profile?.address?.city);    // undefined (لا يحدث خطأ!)
console.log(user2.settings?.theme ?? "فاتح"); // "فاتح" (قيمة افتراضية)`}
            language="javascript"
          />

          <p>{`\u0645\u062b\u0627\u0644 \u0639\u0645\u0644\u064a \u0634\u0627\u0645\u0644: تصفية وتحويل البيانات في مكون React:`}</p>

          <CodeBlock
            code={`// مكون React يستخدم الدوال الحديثة
function StudentList({ students }) {
  const passedStudents = students
    .filter((s) => s.score >= 60)
    .sort((a, b) => b.score - a.score)
    .map((student) => (
      <div key={student.id} className="student-card">
        <h3>{student.name}</h3>
        <p>الدرجة: {student.score}</p>
        <span>{student.score >= 90 ? "ممتاز" : "جيد"}</span>
      </div>
    ));

  return (
    <div>
      <h2>الطلاب الناجحون ({passedStudents.length})</h2>
      {passedStudents.length > 0 ? passedStudents : <p>لا يوجد طلاب</p>}
    </div>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* ============================================ */}
        {/* القسم 7: ماذا يحدث خلف الكواليس                */}
        {/* ============================================ */}
        <LessonSection title={"\u0645\u0627\u0630\u0627 \u064a\u062d\u062f\u062b \u062e\u0644\u0641 \u0627\u0644\u0643\u0648\u0627\u0644\u064a\u0633 (What happens behind the scenes)"}>
          <p>{`\u0645\u0639 \u0643\u0644 \u062f\u0627\u0644\u0629 \u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u062f\u0648\u0627\u0644\u060c \u062a\u0645\u062c\u0631\u064d JavaScript \u0628\u062a\u0634\u063a\u064a\u0644 \u0628\u0637\u0628\u064a\u0639\u0629 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629. \u0647\u0630\u0627 \u0647\u0648 \u0627\u0644\u0633\u0631 \u0627\u0644\u062e\u0627\u0635 \u0628\u0627\u0644\u0623\u062f\u0627\u0621 \u0627\u0644\u062f\u0648\u0627\u0644:`}</p>

          <CodeBlock
            code={`const numbers = [1, 2, 3];

// map() تنشئ مصفوفة جديدة بالطول نفسه
// كل عنصر يمر بالدالة ونتيجة الدالة تصبح العنصر الجديد
const result = numbers.map((n) => n * 2);

// ما يحدث خلف الكواليس (تقريبياً):
// 1. يتم إنشاء مصفوفة فارغة جديدة []
// 2. للعنصر الأول: map تستدعي الدالة(1) → تحصل على 2 → تضيفه للمصفوفة الجديدة
// 3. للعنصر الثاني: map تستدعي الدالة(2) → تحصل على 4 → تضيفه للمصفوفة الجديدة
// 4. للعنصر الثالث: map تستدعي الدالة(3) → تحصل على 6 → تضيفه للمصفوفة الجديدة
// 5. map تُرجع المصفوفة الجديدة [2, 4, 6]

console.log(result);   // [2, 4, 6]
console.log(numbers);  // [1, 2, 3] ← الأصلية لم تتغير!`}
            language="javascript"
          />

          <CodeBlock
            code={`// reduce() تمر على كل عنصر وتبني قيمة واحدة تدريجياً
const nums = [10, 20, 30];

const total = nums.reduce((acc, curr, index) => {
  console.log("الخطوة " + index + ": acc=" + acc + ", curr=" + curr);
  return acc + curr;
}, 0);

// ما يظهر في console:
// الخطوة 0: acc=0,  curr=10  → return 10
// الخطوة 1: acc=10, curr=20  → return 30
// الخطوة 2: acc=30, curr=30  → return 60

console.log(total); // 60`}
            language="javascript"
          />

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-4">
            <p className="text-yellow-400 font-bold mb-2">{`\u26A0\uFE0F \u0645\u0644\u0627\u062D\u0638\u0629 \u0645\u0647\u0645\u0629:`}</p>
            <p>
              {`\u0628\u0639\u0636 \u0627\u0644\u062f\u0648\u0627\u0644 \u062A\u0639\u0643\u0633 \u0645\u0635\u0641\u0648\u0641\u0629 \u062C\u062F\u064A\u062F\u0629. \u0647\u0630\u0627 \u064A\u064F\u0639\u062A\u0628\u0631 \u0645\u0633\u0627\u0626\u0637\u0629 \u0627\u0644\u0623\u062F\u0627\u0648\u064A (Memory) \u062E\u0627\u0635\u0629. \u0625\u0630\u0627 \u0643\u0627\u0646\u062A \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u0643\u0628\u064A\u0631\u0629 \u062C\u062F\u064B\u0627\u060c \u0641\u064A \u062C\u062F\u0648\u0644 \u0627\u0644\u0623\u062F\u0627\u0648\u064A \u0645\u0645\u0643\u0646 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0623\u062F\u0627\u0648\u064A \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629. \u0644\u0643\u0646 \u0641\u064A \u0627\u0644\u0645\u0639\u0627\u0645\u0644 \u0627\u0644\u0639\u0627\u062F\u064A\u0629\u060c \u0647\u0630\u0647 \u0639\u0627\u062F\u0629 \u0623\u0643\u062B\u0631 \u0623\u0645\u0627\u0646\u0627\u064B \u0645\u0646 \u0627\u0644\u062D\u0644\u0642\u0629 \u0627\u0644\u062A\u0643\u0631\u0627\u0631\u064A\u0629 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0644\u0648\u062D\u0642\u0629 \u062A\u0643\u0631\u0627\u0631\u064A\u0629.`}
            </p>
          </div>
        </LessonSection>

        {/* ============================================ */}
        {/* القسم 8: الأخطاء الشائعة                      */}
        {/* ============================================ */}
        <LessonSection title={"\u0627\u0644\u0623\u062E\u0637\u0627\u0621 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 (Common mistakes)"}>
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">{`\u274C \u0627\u0644\u062E\u0637\u0623 1: استخدام map() فقط للعرض (دون استخدام النتيجة)`}</p>
              <CodeBlock
                code={`// ❌ خطأ: map() بدون استخدام المصفوفة الناتجة
function BadComponent({ items }) {
  items.map((item) => {
    console.log(item.name); // يطبع فقط، لا يُرجع شيئاً!
    // لم تُستخدم النتيجة
  });
  return <div>...</div>;
}

// ✅ صحيح
function GoodComponent({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`}
                language="javascript"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">{`\u274C \u0627\u0644\u062E\u0637\u0623 2: استخدام filter() ثم map() بدلاً من find() عند البحث عن عنصر واحد`}</p>
              <CodeBlock
                code={`const users = [
  { id: 1, name: "أحمد" },
  { id: 2, name: "سارة" },
];

// ❌ غير فعال: ينشئ مصفوفة ثم يأخذ العنصر الأول
const sara = users.filter((u) => u.name === "سارة")[0];

// ✅ صحيح: find() تُرجع العنصر مباشرة
const sara2 = users.find((u) => u.name === "سارة");`}
                language="javascript"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">{`\u274C \u0627\u0644\u062E\u0637\u0623 3: نسيان قيمة البداية (Initial Value) في reduce()`}</p>
              <CodeBlock
                code={`const numbers = [1, 2, 3];

// ❌ خطأ: بدون قيمة ابتدائية - إذا كانت المصفوفة فارغة يظهر خطأ!
const sum1 = numbers.reduce((acc, curr) => acc + curr);

// ✅ صحيح: دائماً حدد القيمة الابتدائية
const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum2); // 6`}
                language="javascript"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">{`\u274C \u0627\u0644\u062E\u0637\u0623 4: محاولة التعديل على المصفوفة الأصلية داخل map/filter`}</p>
              <CodeBlock
                code={`const numbers = [1, 2, 3, 4, 5];

// ❌ خطأ: محاولة تعديل المصفوفة الأصلية
numbers.filter((n) => {
  numbers.push(100); // لا تفعل هذا! سيسبب حلقة لا نهائية
  return n > 2;
});

// ❌ خطأ آخر: استخدام splice داخل map
numbers.map((n) => {
  if (n === 3) {
    numbers.splice(numbers.indexOf(n), 1); // لا تُعدّل الأصلية
  }
  return n;
});

// ✅ صحيح: هذه الدوال تُرجع مصفوفة جديدة دائماً
const filtered = numbers.filter((n) => n > 2);
// numbers لا تزال [1, 2, 3, 4, 5]`}
                language="javascript"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">{`\u274C \u0627\u0644\u062E\u0637\u0623 5: نسيان الـ Key في عناصر React`}</p>
              <CodeBlock
                code={`// ❌ خطأ: استخدام index كـ key
{items.map((item, index) => (
  <ListItem key={index} item={item} />
))}

// ✅ صحيح: استخدام مفتاح فريد من البيانات
{items.map((item) => (
  <ListItem key={item.id} item={item} />
))}`}
                language="javascript"
              />
            </div>
          </div>
        </LessonSection>

        {/* ============================================ */}
        {/* القسم 9: أفضل الممارسات                      */}
        {/* ============================================ */}
        <LessonSection title={"\u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0628\u0627\u0631\u0633\u0627\u062A (Best practices)"}>
          <ul className="list-disc list-inside space-y-3 my-4">
            <li>
              <strong>{`\u0627\u0633\u062A\u062E\u062F\u0645 `}<code>map()</code>{` \u0644\u0639\u0631\u0636 \u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0641\u064A React:`}</strong> {`\u0647\u0630\u0627 \u0647\u0648 \u0627\u0644\u0646\u0645\u0637\u062c \u0627\u0644\u0623\u0633\u0627\u0633\u064a. \u0627\u0633\u062A\u062E\u062F\u0645 `}<code>key</code>{` \u0641\u0631\u064A\u062F\u0627\u064B \u0645\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A (\u062F\u0648\u0646 `}<code>index</code>{` \u0625\u0630\u0627 \u0643\u0627\u0646\u062A \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u062B\u0627\u0628\u062A\u0629).`}
            </li>
            <li>
              <strong>{`\u0627\u0633\u062A\u062E\u062F\u0645 `}<code>find()</code>{` \u0628\u062F\u0644\u0627\u064b \u0645\u0646 `}<code>filter()[0]</code>{`:`}</strong> {`\u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0628\u062D\u062B \u0639\u0646 \u0639\u0646\u0635\u0631 \u0648\u0627\u062D\u062F \u0641\u0642\u0637\u060c `}<code>find()</code>{` \u0623\u0633\u0631\u0639 \u0648\u0623\u0643\u0641\u0624 \u0645\u0646 \u0627\u0644\u0623\u062F\u0627\u0648\u064A.`}
            </li>
            <li>
              <strong>{`\u0631\u0628\u0637 \u0627\u0644\u062f\u0648\u0627\u0644 (Chaining):`}</strong> {`\u064A\u0645\u0643\u0646\u0643 \u0631\u0628\u0637 `}<code>filter()</code>{` \u0645\u0639 `}<code>map()</code>{` \u0641\u064A \u0633\u0644\u0633\u0644\u0629 \u0648\u0627\u062D\u062F\u0629. \u0644\u0643\u0646 \u062A\u0646\u0628\u064A\u0647 \u0625\u0630\u0627 \u0643\u0627\u0646\u062A \u0627\u0644\u0633\u0644\u0633\u0644\u0629 \u0637\u0648\u064A\u0644\u0629 \u062C\u062F\u064B\u0627\u060c \u0641\u0627\u0643\u0633\u0631 \u0628\u062A\u0642\u0633\u064A\u0645 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629.`}
            </li>
            <li>
              <strong>{`\u0627\u0633\u062A\u062E\u062F\u0645 `}<code>reduce()</code>{` \u0644\u0644\u062A\u062C\u0645\u064A\u0639 \u0648\u0627\u0644\u062A\u0635\u0641\u064A\u0629:`}</strong> {`\u0647\u0630\u0647 \u0627\u0644\u062F\u0627\u0644\u0629 \u0642\u0648\u064A\u0629 \u0628\u064A\u0646\u0647\u0627 \u062A\u062C\u0645\u064A\u0639 \u0628\u0639\u0636 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0641\u064A \u0642\u064A\u0645\u0629 \u0648\u0627\u062D\u062F\u0629. \u0627\u0644\u062F\u064A\u0645\u0627\u0645\u0627\u062A \u0627\u0644\u0628\u062F\u064A\u0644\u0629: `}<code>reduce()</code>{` \u0645\u0639 `}<code>map()</code>{` \u0645\u0639 `}<code>filter()</code>{`.`}
            </li>
            <li>
              <strong>{`\u0627\u0633\u062A\u062E\u062F\u0645 `}<code>Object.entries()</code>{` \u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062A \u0625\u0644\u0649 \u0645\u0635\u0641\u0648\u0641\u0627\u062A:`}</strong> {`\u0628\u0639\u0636 `}<code>Object.keys()</code>{` \u0648 `}<code>Object.values()</code>{`.`}
            </li>
            <li>
              <strong>{`\u0627\u0633\u062A\u062E\u062F\u0645 `}<code>?. </code>{` \u0627\u0644\u0628\u0637\u0644 \u0627\u0644\u062E\u0627\u0635 Optional Chaining:`}</strong> {`\u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u062E\u0635\u0627\u0626\u0635 \u0645\u0639\u0642\u062F\u0629 \u0628\u062F\u0648\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 `}<code>if</code>{` \u0645\u0637\u0648\u064A\u0644\u0629.`}
            </li>
            <li>
              <strong>{`\u0627\u0633\u062A\u062E\u062F\u0645 `}<code>??</code>{` \u0628\u062F\u0644\u0627\u064b \u0645\u0646 `}<code>||</code>{` \u0644\u0644\u0642\u064A\u0645\u0627\u0621 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629:`}</strong> {`\u0644\u0623\u0646 `}<code>||</code>{` \u062A\u062A\u062D\u0643\u0645 0 \u0648 "" \u0643\u0642\u064A\u0645\u0629 \u062E\u0627\u0637\u0626\u0629\u060c \u0628\u064A\u0646\u0645\u0627 `}<code>??</code>{` \u062A\u062A\u062D\u0643\u0645 \u0641\u0642\u0637 0 \u0648 "" \u0648 \u062A\u0633\u062A\u062E\u062F\u0645 \u0641\u0642\u0637 `}<code>null</code>{` \u0648 `}<code>undefined</code>{` \u0641\u0642\u0637.`}
            </li>
          </ul>

          <CodeBlock
            code={`// ✅ مثال: أفضل الممارسات مجتمعة
function UserDashboard({ users }) {
  // 1. filter + map مع chaining
  const activeAdmins = users
    .filter((user) => user.isActive)
    .filter((user) => user.role === "admin")
    .map((user) => (
      <AdminCard
        key={user.id}        // ✅ key من البيانات الحقيقية
        name={user.name}
        email={user.email}
      />
    ));

  // 2. reduce() لحساب الإحصائيات
  const stats = users.reduce((acc, user) => {
    acc.total += 1;
    if (user.isActive) acc.active += 1;
    return acc;
  }, { total: 0, active: 0 });

  // 3. Object.entries() + map لعرض خصائص المستخدم الأول
  const firstUser = users[0];
  const userFields = firstUser
    ? Object.entries(firstUser).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {String(value)}
        </div>
      ))
    : null;

  // 4. Optional Chaining + Nullish Coalescing
  const displayName = firstUser?.name ?? "مستخدم غير معروف";

  return (
    <div>
      <h1>لوحة التحكم - {displayName}</h1>
      <p>إجمالي المستخدمين: {stats.total}</p>
      <p>المستخدمين النشطين: {stats.active}</p>
      {activeAdmins.length > 0 ? activeAdmins : <p>لا يوجد مشرفين نشطين</p>}
      {userFields}
    </div>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* ============================================ */}
        {/* القسم 10: ملخص                               */}
        {/* ============================================ */}
        <LessonSection title={"\u0645\u0644\u062E\u0635 (Summary)"}>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 my-4">
            <h3 className="text-green-400 font-bold text-lg mb-4">{`\u{1F3AF} \u0645\u0627 \u062A\u0639\u0644\u0645\u0646\u0627\u0647 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u062F\u0631\u0633:`}</h3>
            <ul className="space-y-2">
              <li>{`\u2705 \u0627\u0644\u062F\u0648\u0627\u0644 \u0627\u0644\u062D\u062F\u064A\u062B\u0629 \u062A\u062C\u0639\u0644 \u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A \u0648\u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062A \u0623\u0643\u062B\u0631 \u0633\u0647\u0644\u0627\u064b \u0645\u0646 \u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0627\u0644\u062A\u0643\u0631\u0627\u0631\u064A\u0629`}</li>
              <li>{`\u2705 \u0627\u0633\u062A\u062E\u062F\u0645 `}<code>map()</code>{` \u0644\u062A\u062D\u0648\u064A\u0644 \u0643\u0644 \u0639\u0646\u0635\u0631 \u0644\u0634\u0643\u0644 \u062C\u062F\u064A\u062F \u0648\u0625\u0631\u062C\u0627\u0639 \u0645\u0635\u0641\u0648\u0641\u0629 \u062C\u062F\u064A\u062F\u0629`}</li>
              <li>{`\u2705 \u0627\u0633\u062A\u062E\u062F\u0645 `}<code>filter()</code>{` \u0644\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u062D\u0633\u0628 \u0634\u0631\u0637 \u0645\u0639\u064A\u0646`}</li>
              <li>{`\u2705 \u0627\u0633\u062A\u062E\u062F\u0645 `}<code>reduce()</code>{` \u0644\u062A\u062C\u0645\u064A\u0639 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0641\u064A \u0642\u064A\u0645\u0629 \u0648\u0627\u062D\u062F\u0629 \u0623\u0648 \u062A\u062C\u0645\u064A\u0639\u0647\u0627 (\u062A\u0635\u0641\u064A\u0629 / \u062A\u0645\u062E\u0631\u064A\u062C) \u062D\u0633\u0628 \u0641\u064A \u062C\u0645\u0639 \u0641\u0626\u0629 \u0623\u0648 \u062E\u0627\u0635\u0629`}</li>
              <li>{`\u2705 \u0627\u0633\u062A\u062E\u062F\u0645 `}<code>find()</code>{` \u0644\u0625\u062C\u0627\u062F\u0629 \u0623\u0648\u0644 \u0639\u0646\u0635\u0631 \u064A\u0637\u0627\u0628\u0642 \u0634\u0631\u0637\u0627\u064b`}</li>
              <li>{`\u2705 \u0627\u0633\u062A\u062E\u062F\u0645 `}<code>every()</code>{` \u0644\u0644\u062A\u0623\u0643\u064A\u062F \u0623\u0646 \u0643\u0644 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u062A\u0633\u062A\u0648\u0641\u064A \u0627\u0644\u0634\u0631\u0637\u060c \u0648 `}<code>some()</code>{` \u0644\u0644\u062A\u0623\u0643\u064A\u062F \u0623\u0646 \u0639\u0646\u0635\u0631 \u0648\u0627\u062D\u062F \u062A\u0633\u062A\u0648\u0641\u064A\u0647`}</li>
              <li>{`\u2705 \u0627\u0633\u062A\u062E\u062F\u0645 `}<code>Object.keys()</code>{` / `}<code>Object.values()</code>{` / `}<code>Object.entries()</code>{` \u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062A \u0625\u0644\u0649 \u0645\u0635\u0641\u0648\u0641\u0627\u062A \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639\u0647\u0627`}</li>
              <li>{`\u2705 Optional Chaining (?.) \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u062E\u0635\u0627\u0626\u0635 \u0645\u0639\u0642\u062F\u0629 \u0628\u062F\u0648\u0646 \u0623\u062E\u0637\u0627\u0621`}</li>
              <li>{`\u2705 Nullish Coalescing (??) \u064A\u0645\u0646\u062D \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 \u0644\u0642\u064A\u0645\u0629 null \u0648 undefined \u0641\u0642\u0637`}</li>
              <li>{`\u2705 \u0627\u0644\u0631\u0628\u0637 (Chaining) \u064A\u062D\u0648\u0644 \u0639\u062F\u0629 \u0623\u0648 \u0623\u0643\u062B\u0631 \u0645\u0646 \u062F\u0648\u0627\u0644 \u0625\u0644\u0649 \u0633\u0644\u0633\u0644\u0629 \u0648\u0627\u062D\u062F\u0629`}</li>
            </ul>
          </div>
        </LessonSection>

        {/* ============================================ */}
        {/* Quiz 1: map vs forEach                        */}
        {/* ============================================ */}
        <Quiz
          question="ما هو الفرق الجوهري بين map() و forEach()؟"
          options={[
            "map() أسرع من forEach() في الأداء",
            "map() تُرجع مصفوفة جديدة، بينما forEach() لا تُرجع شيئاً (undefined)",
            "forEach() لا تمر على جميع العناصر، بينما map() تمر على الكل",
            "map() لا يمكن استخدامها داخل React، بينما forEach() يمكنها"
          ]}
          correctAnswer={1}
          explanation="map() تُنشئ مصفوفة جديدة تحتوي نتائج الدالة لكل عنصر، بينما forEach() تنفذ الدالة لكل عنصر بدون إرجاع قيمة (تُرجع undefined). في React، نستخدم map() لتحويل البيانات لعناصر JSX."
        />

        {/* ============================================ */}
        {/* Quiz 2: reduce accumulator                    */}
        {/* ============================================ */}
        <Quiz
          question="ما القيمة النهائية لـ reduce() في هذا الكود؟\nconst arr = [2, 4, 6];\nconst result = arr.reduce((acc, val) => acc + val, 10);"
          options={[
            "12",
            "16",
            "22",
            "10"
          ]}
          correctAnswer={2}
          explanation="القيمة الابتدائية للـ accumulator هي 10. الخطوة الأولى: 10 + 2 = 12. الخطوة الثانية: 12 + 4 = 16. الخطوة الثالثة: 16 + 6 = 22. النتيجة النهائية = 22."
        />

        {/* ============================================ */}
        {/* التحدي                                       */}
        {/* ============================================ */}
        <Challenge
          title={"\u062A\u062D\u062F\u064A: \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u062A\u062C\u0631 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"}
          description={`\u062A\u0633\u062D\u0628 \u0623\u0646 \u062A\u0633\u062A\u062E\u062F\u0645 \u062C\u0645\u064A\u0639 \u0627\u0644\u062F\u0648\u0627\u0644 \u0627\u0644\u062A\u064A \u062A\u0639\u0644\u0645\u062A\u0647\u0627 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u062F\u0631\u0633 \u0644\u0625\u0646\u062C\u0627\u062D \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0645\u062A\u062C\u0631 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A:`}>
          <CodeBlock
            code={`// بيانات المنتجات
const products = [
  { id: 1, name: "لابتوب",    price: 3500, category: "إلكترونيات", rating: 4.5 },
  { id: 2, name: "هاتف",      price: 2000, category: "إلكترونيات", rating: 4.8 },
  { id: 3, name: "كتاب JS",   price: 80,   category: "كتب",        rating: 4.2 },
  { id: 4, name: "سماعات",    price: 300,  category: "إلكترونيات", rating: 3.9 },
  { id: 5, name: "قلم",       price: 15,   category: "كتب",        rating: 4.0 },
  { id: 6, name: "تابلت",     price: 1500, category: "إلكترونيات", rating: 4.3 },
];

// المطلوب:
// 1. حساب متوسط سعر المنتجات من فئة "إلكترونيات" باستخدام reduce()
// 2. تجميع المنتجات حسب الفئة (Object key) باستخدام reduce()
// 3. إيجاد أول منتج تقييمه أكبر من 4.5 باستخدام find()
// 4. التحقق هل جميع المنتجات تقييمها أكبر من 3.0 باستخدام every()
// 5. تحويل المنتجات التي سعرها أقل من 500 لمصفوفة أسماء باستخدام filter() ثم map()`}
            language="javascript"
          />
        </Challenge>

        {/* ============================================ */}
        {/* ورقة الغش                                    */}
        {/* ============================================ */}
        <CheatSheet title={"\u0648\u0631\u0642\u0629 \u0627\u0644\u063A\u0634 - \u0645\u0644\u062E\u0635 \u0633\u0631\u064A\u0639"}>
          <p className="mb-4 font-bold">{`\u062C\u062F\u0648\u0644 \u0645\u0642\u0627\u0631\u0646\u0629 \u062F\u0648\u0627\u0644 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A:`}</p>
          <table className="w-full border-collapse text-sm my-4" style={{ direction: "ltr", textAlign: "left" }}>
            <thead>
              <tr style={{ background: "rgba(56, 189, 248, 0.1)" }}>
                <th className="p-2 border" style={{ borderColor: "var(--border)" }}>Method</th>
                <th className="p-2 border" style={{ borderColor: "var(--border)" }}>Input</th>
                <th className="p-2 border" style={{ borderColor: "var(--border)" }}>Output</th>
                <th className="p-2 border" style={{ borderColor: "var(--border)" }}>Mutates?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["map()",     "Array",         "New Array (same length)",  "No"],
                ["filter()",  "Array",         "New Array (subset)",       "No"],
                ["reduce()",  "Array",         "Single value",            "No"],
                ["find()",    "Array",         "Element or undefined",    "No"],
                ["findIndex()","Array",        "Number (index) or -1",    "No"],
                ["every()",   "Array",         "Boolean (true/false)",    "No"],
                ["some()",    "Array",         "Boolean (true/false)",    "No"],
                ["forEach()", "Array",         "undefined",               "No"],
              ].map(([method, input, output, mutates], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.03)" }}>
                  <td className="p-2 border font-mono" style={{ borderColor: "var(--border)" }}>{method}</td>
                  <td className="p-2 border" style={{ borderColor: "var(--border)" }}>{input}</td>
                  <td className="p-2 border" style={{ borderColor: "var(--border)" }}>{output}</td>
                  <td className="p-2 border" style={{ borderColor: "var(--border)", color: "var(--accent)" }}>{mutates}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mb-4 font-bold mt-6">{`\u062F\u0648\u0627\u0644 Object:`}</p>
          <CodeBlock
            code={`Object.keys(obj)    → ["key1", "key2"]          // المفاتيح فقط
Object.values(obj)  → ["value1", "value2"]      // القيم فقط
Object.entries(obj) → [["key1","val1"], ...]     // أزواج مفتاح-قيمة`}
            language="javascript"
          />

          <p className="mb-4 font-bold mt-6">{`\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062C\u062F\u064A\u062F\u0629:`}</p>
          <CodeBlock
            code={`obj?.prop              // Optional Chaining - يرجع undefined بدلاً من خطأ
obj?.nested?.deep     // وصول عميق آمن
obj?.method?.()       // استدعاء دالة آمن

value ?? "default"    // Nullish Coalescing - يستخدم "default" فقط إذا value === null أو undefined
                      // (لا يستبدل 0 أو "" أو false)`}
            language="javascript"
          />
        </CheatSheet>

        {/* ============================================ */}
        {/* التنقل بين الدروس                             */}
        {/* ============================================ */}
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