"use client"

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function CommentsAndDocs() {
  const lesson = getLessonBySlug("clean-code", "03-comments-and-docs");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <LessonSection title="لماذا التعليقات مهمة؟">
          <p>
            التعليقات الجيدة هي مثل <strong>خرائط الطريق</strong> في الكود - تساعد المطورين على فهم
            <strong> لماذا</strong> تم كتابة الكود هكذا، وليس <strong>ماذا</strong> يفعل الكود.
            الكود الواضح لا يحتاج تعليقات تشرح ماذا يفعل، بل يحتاج تعليقات تشرح السبب وراء القرارات البرمجية.
          </p>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 القاعدة الذهبية:
            </p>
            <p>
              <strong>لا تشرح WHAT، بل اشرح WHY.</strong>
              الكود الجيد يشرح نفسه - التعليقات الجيدة تشرح السبب.
            </p>
          </div>
        </LessonSection>

        <LessonSection title="التعليقات الجيدة vs السيئة">
          <p>
            هناك فرق كبير بين التعليقات المفيدة والتعليقات المزعجة. التعليقات الجيدة تضيف قيمة،
            بينما السيئة تزيد من فوضى الكود.
          </p>

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>❌ تعليقات سيئة - تشرح WHAT:</h3>
          <CodeBlock
            language="javascript"
            code={`// ❌ سيء: تعليق يشرح ماذا يفعل الكود (واضح بدون تعليق)
function calculateDiscount(price, discountRate) {
  // خصم النسبة من السعر
  return price - (price * discountRate);
}

// ❌ سيء: تعليق مكرر لا يضيف شيئاً
const users = []; // مصفوفة المستخدمين

// ❌ سيء: تعليق قديم لم يحدث مع الكود
// سيتم إرسال الإيميل
function sendNotification(user) {
  sendPushNotification(user); // تم تغييره للإشعارات الفورية
}`}
          />

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>✅ تعليقات جيدة - تشرح WHY:</h3>
          <CodeBlock
            language="javascript"
            code={`// ✅ جيد: يشرح السبب وراء قرار برمجي
function calculateDiscount(price, discountRate) {
  // لا نسمح بخصم أكثر من 50% لحماية هامش الربح
  const maxDiscount = 0.5;
  const safeRate = Math.min(discountRate, maxDiscount);
  return price - (price * safeRate);
}

// ✅ جيد: يشرح قيداً غير واضح
function processOrder(order) {
  // يجب انتظار 30 ثانية بين الطلبات
  // لل prevent rate limiting من Stripe API
  await delay(30000);
  return stripe.charges.create(order);
}

// ✅ جيد: يحذر من مشكلة معروفة
function parseDate(dateString) {
  // تحذير: استخدام Date.parse مباشرة يختلف بين المتصفحات
  // نستخدم date-fns لضمان التوافق
  return parse(dateString, "yyyy-MM-dd", new Date());
}`}
          />

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>❌ تعليقات يجب حذفها:</h3>
          <CodeBlock
            language="javascript"
            code={`// ❌ التعليقات المعلّقة (Dead comments) - كود قديم لا داعي له
// function oldProcess() { ... }

// ❌ التعليقات الواضحة تماماً
if (isLoggedIn) {
  // تسجيل دخول المستخدم
  loginUser();
}

// ❌ التعليقات السلبية أو الساخرة
// هذا الكود كابوس، لا تلمسه!
function legacyFunction() {
  // لا أحد يفهم هذا الكود حتى أنا
  return complexCalculation();
}`}
          />
        </LessonSection>

        <LessonSection title="تعليقات TODO و FIXME">
          <p>
            تعليقات <code>TODO</code> و <code>FIXME</code> هي أدوات مفيدة لتتبع المهام المعلقة.
            لكن يجب استخدامها باعتدال وبنقاط واضحة.
          </p>

          <CodeBlock
            language="javascript"
            code={`// ✅ TODO: يحدد ما يجب فعله ولماذا
// TODO: إضافة دعم RTL بعد إطلاق النسخة العربية
function formatDate(date, locale) {
  return new Intl.DateTimeFormat(locale).format(date);
}

// ✅ FIXME: يحدد مشكلة معروفة تحتاج حل
// FIXME: هذا الحل مؤقت - يجب التعامل مع timezone بشكل صحيح
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

// ❌ لا تترك TODO قديمة بدون تاريخ أو مسؤول
// TODO: إضافة ميزة (منذ 3 سنوات!)

// ✅ جيد: أضف اسمك والتاريخ
// TODO(أحمد): إضافة pagination - 2024-01-15
function fetchAllUsers() {
  return db.users.findMany();
}`}
          />

          <div className="p-4 rounded-xl my-4 border" style={{ background: "rgba(234, 179, 8, 0.08)", borderColor: "#eab308" }}>
            <p className="font-bold mb-2" style={{ color: "#ca8a04" }}>
              ⚠️ نصيحة:
            </p>
            <p>
              استخدم أدوات مثل <code>eslint-plugin-no-todo</code> لتحديد عدد TODO المسموح به في كل ملف.
              إذا كان هناك أكثر من 3 TODO في ملف واحد، فقد تحتاج لإعادة تقييم الأولويات.
            </p>
          </div>
        </LessonSection>

        <LessonSection title="توثيق الدوال باستخدام JSDoc">
          <p>
            <strong>JSDoc</strong> هو معيار لتوثيق الدوال في JavaScript. يساعد المطورين على فهم
            كيفية استخدام الدالة دون قراءة الكود الداخلي.
          </p>

          <CodeBlock
            language="javascript"
            code={`/**
 * حساب خصم على سعر المنتج
 * @param {number} price - السعر الأصلي للمنتج
 * @param {number} discountRate - نسبة الخصم (0 إلى 1)
 * @returns {number} السعر بعد الخصم
 * @throws {Error} إذا كانت النسبة سالبة أو أكبر من 1
 * @example
 * calculateDiscount(100, 0.2) // يرجع 80
 * calculateDiscount(500, 0.1) // يرجع 450
 */
function calculateDiscount(price, discountRate) {
  if (discountRate < 0 || discountRate > 1) {
    throw new Error("نسبة الخصم يجب أن تكون بين 0 و 1");
  }
  return price - (price * discountRate);
}

/**
 * جلب بيانات المستخدم من قاعدة البيانات
 * @param {string} userId - معرف المستخدم الفريد
 * @param {Object} options - خيارات إضافية
 * @param {boolean} [options.includeProfile=true] - هل يتم تضمين الملف الشخصي
 * @param {boolean} [options.includeOrders=false] - هل يتم تضمين الطلبات
 * @returns {Promise<Object|null>} بيانات المستخدم أو null إذا لم يُوجد
 * @async
 */
async function getUserById(userId, options = {}) {
  const { includeProfile = true, includeOrders = false } = options;
  const user = await db.users.findById(userId);
  if (!user) return null;

  if (includeProfile) user.profile = await db.profiles.findByUser(userId);
  if (includeOrders) user.orders = await db.orders.findByUser(userId);

  return user;
}`}
          />

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 متى تكتب JSDoc؟
            </p>
            <ul className="mt-2 space-y-1">
              <li>• الدوال العامة (Public API) التي يستخدمها مطورون آخرون</li>
              <li>• الدوال المعقدة التي تتطلب شرحاً لمعايير الاستخدام</li>
              <li>• الدوال التي تتفاعل مع قواعد البيانات أو APIs خارجية</li>
              <li>• لا تكتب JSDoc للدوال البسيطة الواضحة</li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="الكود الوثائقي ذاتي (Self-Documenting Code)">
          <p>
            أفضل تعليق هو <strong>الكود الذي يشرح نفسه</strong>. يمكن تحقيق ذلك عبر تسمية
            المتغيرات والدوال بشكل وصفي، واستخدام الدوال الصغيرة البسيطة.
          </p>

          <CodeBlock
            language="javascript"
            code={`// ❌ سيء: كود يعتمد على التعليقات لفهمه
// حساب العمر
function calc(a, b) {
  // b هو تاريخ الميلاد
  // a هو الوقت الحالي
  // نحسب الفرق بالسنوات
  return Math.floor((a - b) / (365.25 * 24 * 60 * 60 * 1000));
}

// ✅ جيد: الكود وثائقي ذاتي - لا يحتاج تعليقات
function calculateAgeInYears(currentDate, birthDate) {
  const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
  const ageInMs = currentDate.getTime() - birthDate.getTime();
  return Math.floor(ageInMs / millisecondsPerYear);
}

// ❌ سيء: منطق معقد يحتاج شرحاً
function process(d) {
  // إذا كان العميل VIP وكان المشتريات > 10000
  if (d.t === "v" && d.p > 10000) {
    // خصم 15%
    d.tot = d.tot * 0.85;
  }
  return d;
}

// ✅ جيد: أسماء واضحة تغني عن التعليقات
function applyCustomerDiscount(order) {
  const isVIPCustomer = order.customerType === "vip";
  const hasLargePurchase = order.totalPurchase > 10000;
  const vipDiscount = 0.15;

  if (isVIPCustomer && hasLargePurchase) {
    order.total = order.total * (1 - vipDiscount);
  }

  return order;
}`}
          />
        </LessonSection>

        <LessonSection title="توثيق ملف README">
          <p>
            ملف <code>README.md</code> هو البوابة الأولى لأي مشروع. يخبر المطورين الجدد
            بكيفية بدء العمل على المشروع وفهمه.
          </p>

          <CodeBlock
            language="markdown"
            code={`# اسم المشروع

وصف مختصر للمشروع في جملة واحدة.

## المميزات

- ميزة أولى
- ميزة ثانية
- ميزة ثالثة

## التثبيت

\`\`\`bash
git clone https://github.com/user/project.git
cd project
npm install
\`\`\`

## الاستخدام

\`\`\`javascript
import { myFunction } from "my-library";

const result = myFunction("مرحباً");
console.log(result);
\`\`\`

## الإعدادات البيئية

أنشئ ملف \`.env.local\`:

\`\`\`
DATABASE_URL=your_database_url
API_KEY=your_api_key
\`\`\`

## الاختبارات

\`\`\`bash
npm test
\`\`\`

## المساهمة

يرجى قراءة \`CONTRIBUTING.md\` قبل الإرسال.

## الترخيص

MIT License - راجع ملف \`LICENSE\` للتفاصيل.`}
          />

          <div className="p-4 rounded-xl my-4 border" style={{ background: "rgba(34, 197, 94, 0.08)", borderColor: "#22c55e" }}>
            <p className="font-bold mb-2" style={{ color: "#16a34a" }}>
              ✅ ما يجب أن يحتويه README:
            </p>
            <ul className="mt-2 space-y-1">
              <li>• وصف واضح وقصير للمشروع</li>
              <li>• خطوات التثبيت والاستخدام</li>
              <li>• أمثلة على الاستخدام</li>
              <li>• الإعدادات المطلوبة (environment variables)</li>
              <li>• كيفية تشغيل الاختبارات</li>
              <li>• كيفية المساهمة</li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="أفضل الممارسات للتعليقات">
          <ul>
            <li><strong>✅ حافظ على التعليقات محدّثة:</strong> تعليق قديم أسوأ من لا تعليق - يضلل المطورين.</li>
            <li><strong>✅ لا تعلّق على الكود الواضح:</strong> إذا كان الكود يحتاج تعليقاً، راجع تسمية المتغيرات والدوال أولاً.</li>
            <li><strong>✅ استخدم التعليقات لتفسير WHY فقط:</strong> الكود الواضح يشرح WHAT بنفسه.</li>
            <li><strong>✅ احذف التعليقات المعلّقة (Dead comments):</strong> الكود القديم لا داعي له في التعليقات.</li>
            <li><strong>✅ استخدم JSDoc للدوال العامة:</strong> يسهل على المطورين فهم كيفية استخدام الدوال.</li>
            <li><strong>✅ استخدم TODO و FIXME بمسؤولية:</strong> أضف اسمك والتاريخ واسم المهمة.</li>
            <li><strong>✅ وثّق القرارات المعمارية:</strong> اشرح لماذا اخترت حلولاً معينة بدلاً من أخرى.</li>
          </ul>
        </LessonSection>

        <LessonSection title="ملخص الدرس">
          <div className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>القاعدة الذهبية:</strong> لا تشرح WHAT، بل اشرح WHY.</li>
              <li>التعليقات الجيدة تشرح <strong>السبب وراء القرارات البرمجية</strong>، لا ماذا يفعل الكود.</li>
              <li>تعليقات <code>TODO</code> و <code>FIXME</code> مفيدة لكن يجب استخدامها باعتدال.</li>
              <li><strong>JSDoc</strong> يوثّق الدوال العامة بشكل احترافي يسهّل على الآخرين استخدامها.</li>
              <li>أفضل تعليق هو <strong>الكود الذي يشرح نفسه</strong> عبر تسمية واضحة ودوال بسيطة.</li>
              <li>ملف <code>README.md</code> هو البوابة الأولى للمشروع ويجب أن يكون شاملاً.</li>
              <li><strong>احذف التعليقات القديمة</strong> وحافظ على تحديث التعليقات الحالية.</li>
            </ul>
          </div>
        </LessonSection>

        <Quiz
          question="ما هي القاعدة الذهبية للتعليقات في Clean Code؟"
          options={[
            "اكتب تعليقاً لكل سطر كود",
            "اشرح WHAT وليس WHY",
            "اشرح WHY وليس WHAT",
            "لا تكتب أي تعليقات أبداً"
          ]}
          correctAnswer={2}
          explanation="القاعدة الذهبية هي: لا تشرح WHAT (ماذا يفعل الكود)، بل اشرح WHY (لماذا اخترت هذا التصميم أو القرار البرمجي). الكود الواضح يشرح نفسه - التعليقات الجيدة تشرح السبب."
        />

        <Challenge
          title="تحدي: تحسين التعليقات"
          description={
            <p>
              لديك الكود التالي المليء بالتعليقات السيئة. مهمتك:
              <br />
              1. احذف التعليقات الواضحة والمتكررة
              <br />
              2. أعد تسمية المتغيرات والدوال لتكون وصفية
              <br />
              3. أضف تعليقات WHY فقط حيث يلزم
              <br />
              4. أضف JSDoc للدوال العامة
            </p>
          }
        >
          <CodeBlock
            language="javascript"
            code={`// ❌ الكود قبل التحسين:

// دالة لحساب السعر
function calc(p, q) {
  // السعر مضروب بالكمية
  return p * q;
}

// التحقق من صلاحية العميل
function check(u) {
  // إذا كان المستخدم عمره أكبر من 18
  if (u.age > 18) {
    return true;
  }
  return false;
}

// ✅ الكود بعد التحسين:

/**
 * حساب إجمالي سعر الطلب
 * @param {number} unitPrice - سعر الوحدة الواحدة
 * @param {number} quantity - الكمية المطلوبة
 * @returns {number} الإجمالي قبل الضريبة
 */
function calculateOrderTotal(unitPrice, quantity) {
  return unitPrice * quantity;
}

/**
 * التحقق من أهلية العميل للشراء
 * يجب أن يكون عمر العميل 18 سنة أو أكثر حسب النظام
 * @param {Object} customer - بيانات العميل
 * @param {number} customer.age - عمر العميل بالسنوات
 * @returns {boolean} true إذا كان مؤهلاً
 */
function isCustomerEligible(customer) {
  const minimumAge = 18;
  return customer.age >= minimumAge;
}`}
          />
        </Challenge>

        <CheatSheet title="ملخص التعليقات والتوثيق - Cheat Sheet">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>أنواع التعليقات:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(168, 85, 247, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#a855f7" }}>تعليقات WHY ✅</p>
                  <p>تشرح السبب وراء القرار البرمجي</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(168, 85, 247, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#a855f7" }}>TODO / FIXME</p>
                  <p>تتبع المهام المعلقة والمشاكل المعروفة</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(168, 85, 247, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#a855f7" }}>JSDoc</p>
                  <p>توثيق الدوال العامة بالتفاصيل</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(239, 68, 68, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#ef4444" }}>تعليقات WHAT ❌</p>
                  <p>تشرح ماذا يفعل الكود الواضح</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary" }}>قواعد التعليقات:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#22c55e" }}>الكود الوثائقي</p>
                  <p>أسم واضحة تغني عن التعليقات</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#22c55e" }}>حدّث أو احذف</p>
                  <p>التعليقات القديمة أسوأ من لا تعليق</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#22c55e" }}>TODO مسؤول</p>
                  <p>أضف اسمك والتاريخ والسبب</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(59, 130, 246, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#3b82f6" }}>README شامل</p>
                  <p>التثبيت وال_usage والإعدادات والمساهمة</p>
                </div>
              </div>
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
