import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function NamingConventions() {
  const lesson = getLessonBySlug("clean-code", "01-naming-conventions");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <LessonHeader
          stage={lesson.stage}
          lesson={lesson}
          lessonIndex={lesson.lessonIndex}
          totalLessons={lesson.totalLessons}
        />

        <LessonSection title="مقدمة">
          <p>
            التسمية الواضحة والمتسقة هي واحدة من أهم عناصر الكود النظيف (Clean Code). الكود الذي تقرأه مرات أكثر مما تكتبه، لذا فإن الأسماء الجيدة توفر وقتك وجهدك وتجعل الكود سهلاً للصيانة والفهم.
          </p>
          <p>
            في هذا الدرس، سنتعلم أفضل الممارسات لسماء المتغيرات والدوال والثوابت والملفات، وسنرى كيف يمكن للأسماء السيئة أن تُحوّل كوداً بسيطاً إلى كابوس.
          </p>
        </LessonSection>

        <LessonSection title="المتغيرات (Variables)">
          <p>
            المتغيرات هي أوعية تخزين تحمل البيانات. القاعدة الذهبية هي: <strong>سمِّ متغيرك بما يصف محتواه بدقة</strong>.
          </p>

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>قاعدة camelCase</h3>
          <p>
            في JavaScript، نستخدم <code>camelCase</code> لكتابة أسماء المتغيرات: الكلمة الأولى صغيرة، والكلمات التالية تبدأ بحرف كبير.
          </p>

          <CodeBlock
            language="javascript"
            code={`// ❌ أسماء سيئة
let x = 25;
let data = "أحمد";
let temp = true;
let arr = [1, 2, 3];

// ✅ أسماء جيدة
let userAge = 25;
let userName = "أحمد";
let isActive = true;
let scores = [1, 2, 3];`}
          />

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>تجنب الأحرف المفردة</h3>
          <p>
            استخدام حرف واحد فقط مثل <code>x</code> أو <code>y</code> يجعل الكود صعباً الفهم. استخدم أسماء وصفية حتى في الحلقات التكرارية.
          </p>

          <CodeBlock
            language="javascript"
            code={`// ❌ سيء - لا فائدة من هذه الأسماء
for (let i = 0; i < users.length; i++) {
  if (users[i].a) {
    users[i].b = users[i].c + 1;
  }
}

// ✅ ممتاز - الكود يروي قصة
for (let index = 0; index < users.length; index++) {
  if (users[index].isActive) {
    users[index].age = users[index].age + 1;
  }
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 استثناء: الحلقات التكرارية
            </p>
            <p>
              استخدام <code>i</code> و <code>j</code> و <code>k</code> في الحلقات التكرارية مقبول في JavaScript، لكن احرص على أن يكون للحلقة معنى واضح من السياق المحيط.
            </p>
          </div>
        </LessonSection>

        <LessonSection title="الدوال (Functions)">
          <p>
            الدوال Performing إجراءات أو إجراء حسابات. القاعدة هنا: <strong>ابدأ اسم الدالة بفعل (Verb)</strong> يصف ما تفعله.
          </p>

          <CodeBlock
            language="javascript"
            code={`// ❌ أسماء سيئة
function data() { /* ... */ }
function user() { /* ... */ }
function calc(a, b) { /* ... */ }
function handleStuff() { /* ... */ }

// ✅ أسماء جيدة - كل دالة تبدأ بفعل
function getUserData() { /* ... */ }
function createNewUser() { /* ... */ }
function calculateTotal(price, tax) { /* ... */ }
function processFormSubmission() { /* ... */ }`}
          />

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>أفعال مقترحة للدوال</h3>
          <ul>
            <li><code>get</code> / <code>fetch</code> / <code>retrieve</code> - للحصول على بيانات</li>
            <li><code>create</code> / <code>add</code> / <code>insert</code> - لإنشاء عنصر جديد</li>
            <li><code>update</code> / <code>modify</code> / <code>change</code> - لتعديل بيانات</li>
            <li><code>delete</code> / <code>remove</code> / <code>destroy</code> - لحذف عنصر</li>
            <li><code>validate</code> / <code>check</code> / <code>verify</code> - للتحقق من شرط</li>
            <li><code>calculate</code> / <code>compute</code> - لإجراء حسابات</li>
            <li><code>render</code> / <code>display</code> / <code>show</code> - لعرض واجهة</li>
          </ul>
        </LessonSection>

        <LessonSection title="الفئات (Classes)">
          <p>
            الفئات تمثل "قوالب" لإنشاء كائنات. نستخدم <strong>PascalCase</strong> (الكلمة الأولى تبدأ بحرف كبير) والأسماء تكون <strong>اسم существي (Noun)</strong>.
          </p>

          <CodeBlock
            language="javascript"
            code={`// ❌ أسماء سيئة
class user_data { /* ... */ }
class doCalculation { /* ... */ }
class manage { /* ... */ }

// ✅ أسماء جيدة - PascalCase + اسم существي
class UserData { /* ... */ }
class ShoppingCart { /* ... */ }
class PaymentProcessor { /* ... */ }`}
          />
        </LessonSection>

        <LessonSection title="الثوابت (Constants)">
          <p>
            الثوابت هي قيم لا تتغير. نستخدم <strong>UPPER_SNAKE_CASE</strong> (حروف كبيرة مع شرطة سفلية) لتمييزها بوضوح عن المتغيرات العادية.
          </p>

          <CodeBlock
            language="javascript"
            code={`// ❌ سيء - يبدو كمتغير عادي
const maxRetryCount = 3;
const apiUrl = "https://api.example.com";
const taxRate = 0.15;

// ✅ ممتاز - UPPER_SNAKE_CASE للثوابت
const MAX_RETRY_COUNT = 3;
const API_URL = "https://api.example.com";
const TAX_RATE = 0.15;

// الاستثناء: الثوابت المحلية الدوال لا تحتاج UPPER_CASE
function calculateTotal(price) {
  const localTaxRate = 0.15; // ثابت محلي - camelCase مقبول
  return price * (1 + localTaxRate);
}`}
          />
        </LessonSection>

        <LessonSection title="الملفات (Files)">
          <p>
            تسمية الملفات جزء أساسي من تنظيم المشروع. هناك نهجان رئيسيان مقبولان في مجتمع JavaScript:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>kebab-case (الشائعة)</p>
              <div className="text-sm space-y-1">
                <p><code>user-profile.js</code></p>
                <p><code>shopping-cart.js</code></p>
                <p><code>payment-processor.js</code></p>
              </div>
            </div>
            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>camelCase (البديل)</p>
              <div className="text-sm space-y-1">
                <p><code>userProfile.js</code></p>
                <p><code>shoppingCart.js</code></p>
                <p><code>paymentProcessor.js</code></p>
              </div>
            </div>
          </div>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 نصيحة مهمة
            </p>
            <p>
              اختر نمطاً واحداً و التزم به في جميع مشروعك. معظم مكتبات JavaScript تستخدم <code>kebab-case</code> (مثل <code>react-router-dom</code>)، لذلك هو الخيار الأضمن للمشاريع الكبيرة.
            </p>
          </div>
        </LessonSection>

        <LessonSection title="الأسماء السيئة vs الجيدة">
          <p>
            لنرَ بعض الأمثلة الواقعية على الأسماء السيئة وكيف يمكن تحسينها:
          </p>

          <CodeBlock
            language="javascript"
            code={`// ❌ أمثلة على أسماء سيئة
function process(d) {
  let x = d.filter(i => i.s === "a");
  let y = x.map(i => ({...i, s: i.s.toUpperCase()}));
  let z = y.reduce((a, b) => a + b.p, 0);
  return { data: y, total: z };
}

// ✅ نفس الكود بأسماء جيدة
function processActiveProducts(products) {
  const activeProducts = products.filter(
    product => product.status === "active"
  );
  const updatedProducts = activeProducts.map(product => ({
    ...product,
    status: product.status.toUpperCase()
  }));
  const totalPrice = updatedProducts.reduce(
    (sum, product) => sum + product.price, 0
  );
  return { products: updatedProducts, total: totalPrice };
}`}
          />

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>القواعد الذهبية للتسمية</h3>
          <ul>
            <li><strong>لا تختصر الأسماء:</strong> <code>btn</code> بدلاً من <code>button</code> أو <code>usr</code> بدلاً من <code>user</code></li>
            <li><strong>استخدم كلمات كاملة:</strong> <code>first</code> و <code>second</code> بدلاً من <code>f</code> و <code>s</code></li>
            <li><strong>لا تستخدم علامات الأرقام:</strong> <code>data1</code> و <code>data2</code> بدلاً من <code>userData</code> و <code>productData</code></li>
            <li><strong>استخدم مصطلحات متسقة:</strong> لا تخلط بين <code>get</code> و <code>fetch</code> و <code>retrieve</code> لنفس المفهوم</li>
            <li><strong>اجعل الاسم يصف المحتوى:</strong> <code>isValid</code> بدلاً من <code>check</code> أو <code>flag</code></li>
          </ul>
        </LessonSection>

        <Quiz
          question="أي من الأسماء التالية هو الاسم الصحيح لدالة تتحقق من صحة البريد الإلكتروني؟"
          options={[
            "email",
            "check",
            "validateEmail",
            "emailValidator",
          ]}
          correctAnswer={2}
          explanation="الدالة تبدأ بفعل (validate) وتنهي بالموضوع (Email). هذا النمط يجعل الكود واضحاً ومتسقاً."
        />

        <Challenge
          title="تحدي: حسّن أسماء الكود التالي"
          description={
            <p>
              أعد كتابة الكود التالي بأسماء أفضل ووضوحية أعلى. اجعل الكود قابل للقراءة والفهم:
            </p>
          }
        >
          <CodeBlock
            language="javascript"
            code={`// ❌ الكود الأصلي بأسماء سيئة
function fn(d, n) {
  let r = d.filter(x => x.a > n);
  let s = r.map(x => x.n);
  return s;
}

// ✅ الحل المحسّن
function getAdultNames(people, minAge) {
  const adults = people.filter(
    person => person.age > minAge
  );
  const names = adults.map(
    person => person.name
  );
  return names;
}`}
          />
        </Challenge>

        <CheatSheet title="ملخص اتفاقيات التسمية">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>النمط المتبع لكل عنصر:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>المتغيرات camelCase</p>
                  <p><code>userName</code>, <code>isActive</code>, <code>maxRetryCount</code></p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>الدوال camelCase + فعل</p>
                  <p><code>getUserData()</code>, <code>calculateTotal()</code></p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>الفئات PascalCase</p>
                  <p><code>ShoppingCart</code>, <code>PaymentProcessor</code></p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(239, 68, 68, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--danger)" }}>الثوابت UPPER_SNAKE_CASE</p>
                  <p><code>MAX_RETRY_COUNT</code>, <code>API_URL</code></p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>قواعد ذهبية:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>لا تختصر</p>
                  <p><code>button</code> وليس <code>btn</code></p>
                  <p><code>user</code> وليس <code>usr</code></p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>استخدم أفعالاً للدوال</p>
                  <p><code>get</code>, <code>create</code>, <code>validate</code></p>
                  <p><code>calculate</code>, <code>render</code></p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>الاسم يصف المحتوى</p>
                  <p><code>isValid</code> وليس <code>check</code></p>
                  <p><code>userAge</code> وليس <code>x</code></p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(239, 68, 68, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--danger)" }}>التConsistency مهم</p>
                  <p>التزم بنمط واحد في كل مشروعك</p>
                  <p>لا تخلط بين <code>get</code> و <code>fetch</code></p>
                </div>
              </div>
            </div>
          </div>
        </CheatSheet>

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
