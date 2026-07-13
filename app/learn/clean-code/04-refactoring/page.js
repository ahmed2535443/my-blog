import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function RefactoringLesson() {
  const lesson = getLessonBySlug("clean-code", "04-refactoring");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <LessonHeader
          stage={lesson.stage}
          lesson={lesson}
          lessonIndex={lesson.lessonIndex}
          totalLessons={lesson.totalLessons}
        />

        {/* ========================================== */}
        {/* المقدمة: لماذا إعادة الهيكلة؟ */}
        {/* ========================================== */}
        <LessonSection title="لماذا إعادة الهيكلة (Refactoring)؟">
          <p>
            إعادة الهيكلة هي عملية <strong>تحسين بنية الكود</strong> دون تغيير سلوكه الخارجي. الهدف هو جعل الكود أسهل في القراءة والصيانة والتوسع.
          </p>
          <p>
            كثير من المبرمجين يكتبون كوداً يعمل ثم يتركونه. لكن الكود النظيف يتطلب صيانة مستمرة. كما أن الكود الفوضوي يصبح <strong>مكلفاً وخطيراً</strong> مع مرور الوقت.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              تشبيه بسيط:
            </p>
            <p>
              تخيل غرفة مكتظة بالأغراض. إعادة الهيكلة هي مثل تنظيم الغرفة: نفس الأغراض، لكنك تعرف أين كل شيء وتستطيع الوصول إليه بسهولة.
            </p>
          </div>

          <p>
            هناك مبادئ عدة توجّه إعادة الهيكلة. أشهرها <strong>DRY</strong> و <strong>KISS</strong> و一系列 من تقنيات التحسين سن探讨ها في هذا الدرس.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* DRY - لا تكرر نفسك */}
        {/* ========================================== */}
        <LessonSection title="DRY - Don't Repeat Yourself">
          <p>
            مبدأ <strong>DRY</strong> يعني: لا تكرر نفسك. كل جزء من المعرفة يجب أن يكون له تمثيل واحد وواضح في النظام. إذا وجدت نفس المنطق يتكرر في أكثر من مكان، فقدحان وقت استخراجه إلى دالة أو وحدة مشتركة.
          </p>

          <h3 style={{ color: "var(--danger)", marginTop: "1rem" }}>قبل إعادة الهيكلة - كود مكرر:</h3>
          <CodeBlock
            language="javascript"
            code={`function calculateDiscountedPrice(price, discountPercent) {
  const discount = price * discountPercent / 100;
  const finalPrice = price - discount;
  const tax = finalPrice * 0.15;
  return finalPrice + tax;
}

function calculateBulkPrice(price, discountPercent, quantity) {
  const discount = price * discountPercent / 100;
  const finalPrice = price - discount;
  const tax = finalPrice * 0.15;
  return (finalPrice + tax) * quantity;
}

function calculateMembershipPrice(price, discountPercent) {
  const discount = price * discountPercent / 100;
  const finalPrice = price - discount;
  const tax = finalPrice * 0.15;
  return finalPrice + tax;
}`}
          />

          <p>
            لاحظ كيف يُكرر نفس المنطق في كل دالة. هذا يزيد من احتمالية الخطأ ويصعّب التحديث.
          </p>

          <h3 style={{ color: "var(--accent)", marginTop: "1rem" }}>بعد إعادة الهيكلة - استخراج الدالة المشتركة:</h3>
          <CodeBlock
            language="javascript"
            code={`function applyDiscountAndTax(price, discountPercent) {
  const discount = price * discountPercent / 100;
  const finalPrice = price - discount;
  const tax = finalPrice * 0.15;
  return finalPrice + tax;
}

function calculateDiscountedPrice(price, discountPercent) {
  return applyDiscountAndTax(price, discountPercent);
}

function calculateBulkPrice(price, discountPercent, quantity) {
  return applyDiscountAndTax(price, discountPercent) * quantity;
}

function calculateMembershipPrice(price, discountPercent) {
  return applyDiscountAndTax(price, discountPercent);
}`}
          />

          <p>
            الآن المنطق موجود في مكان واحد فقط. إذا احتجنا تغيير نسبة الضريبة، نغيره في دالة واحدة فقط.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              فائد DRY:
            </p>
            <ul>
              <li>تقليل تكرار الكود</li>
              <li>تسهيل الصيانة والتعديل</li>
              <li>تقليل الأخطاء الناتجة عن النسخ واللصق</li>
              <li>تحسين وضوح الكود</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* KISS - أبقها بسيطة */}
        {/* ========================================== */}
        <LessonSection title="KISS - Keep It Simple, Stupid">
          <p>
            مبدأ <strong>KISS</strong> يعني: أبقها بسيطة، غبية. يجب أن يكون الكود بسيطاً ومقروءاً قدر الإمكان. إذا كان من الصعب فهم ما يفعله الكود، فهو يحتاج إلى إعادة هيكلة.
          </p>

          <h3 style={{ color: "var(--danger)", marginTop: "1rem" }}>قبل إعادة الهيكلة - كود معقد:</h3>
          <CodeBlock
            language="javascript"
            code={`function processUserData(user) {
  return user && user.name && user.age && user.email
    ? { name: user.name.trim().toLowerCase(), age: +user.age, email: user.email.trim().toLowerCase(), isValid: user.age >= 18 && user.email.includes("@") }
    : null;
}

function getDiscountedTotal(items) {
  return items.reduce((sum, item) => sum + (item.price * item.qty * (1 - (item.discount || 0) / 100)), 0);
}`}
          />

          <p>
            هذا الكود يعمل، لكنه يصعب قراءته وفهمه. السطر الواحد يحتوي على منطق معقد وصيغة مدمجة.
          </p>

          <h3 style={{ color: "var(--accent)", marginTop: "1rem" }}>بعد إعادة الهيكلة - كود بسيط ومقروء:</h3>
          <CodeBlock
            language="javascript"
            code={`function sanitizeName(name) {
  return name.trim().toLowerCase();
}

function validateEmail(email) {
  return email.includes("@");
}

function processUserData(user) {
  if (!user || !user.name || !user.age || !user.email) {
    return null;
  }

  const name = sanitizeName(user.name);
  const age = Number(user.age);
  const email = user.email.trim().toLowerCase();
  const isValid = age >= 18 && validateEmail(email);

  return { name, age, email, isValid };
}

function calculateItemTotal(item) {
  const discount = (item.discount || 0) / 100;
  return item.price * item.qty * (1 - discount);
}

function getDiscountedTotal(items) {
  return items.reduce((sum, item) => sum + calculateItemTotal(item), 0);
}`}
          />

          <p>
            الآن كل دالة لها وظيفة واحدة واضحة. السطر الواحد لا يتجاوز 80 حرفاً تقريباً. الكود يقرأ كنص عربي.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* Extract Function - استخراج الدالة */}
        {/* ========================================== */}
        <LessonSection title="Extract Function - استخراج الدالة">
          <p>
            عندما تكون الدالة طويلة جداً وتفعل أشياء كثيرة، يجب <strong>تقسيمها إلى دوال أصغر</strong> كل واحدة مسؤولة عن شيء واحد.
          </p>

          <h3 style={{ color: "var(--danger)", marginTop: "1rem" }}>قبل إعادة الهيكلة - دالة طويلة:</h3>
          <CodeBlock
            language="javascript"
            code={`function generateInvoice(order) {
  // حساب المجموع
  let subtotal = 0;
  for (let i = 0; i < order.items.length; i++) {
    subtotal += order.items[i].price * order.items[i].quantity;
  }

  // حساب الخصم
  let discount = 0;
  if (order.couponCode === "SAVE10") {
    discount = subtotal * 0.10;
  } else if (order.couponCode === "SAVE20") {
    discount = subtotal * 0.20;
  }

  // حساب الضريبة
  const taxRate = 0.15;
  const taxableAmount = subtotal - discount;
  const tax = taxableAmount * taxRate;

  // حساب الشحن
  let shipping = 0;
  if (subtotal < 100) {
    shipping = 15;
  } else if (subtotal < 500) {
    shipping = 10;
  }

  // الإجمالي
  const total = taxableAmount + tax + shipping;

  // إنشاء الفاتورة
  return {
    customerName: order.customer.name,
    items: order.items,
    subtotal,
    discount,
    tax,
    shipping,
    total,
    date: new Date().toISOString(),
  };
}`}
          />

          <h3 style={{ color: "var(--accent)", marginTop: "1rem" }}>بعد إعادة الهيكلة - دوال أصغر وواضحة:</h3>
          <CodeBlock
            language="javascript"
            code={`function calculateSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function applyCoupon(subtotal, couponCode) {
  const coupons = { SAVE10: 0.10, SAVE20: 0.20 };
  const rate = coupons[couponCode] || 0;
  return subtotal * rate;
}

function calculateTax(amount, rate = 0.15) {
  return amount * rate;
}

function calculateShipping(subtotal) {
  if (subtotal < 100) return 15;
  if (subtotal < 500) return 10;
  return 0;
}

function generateInvoice(order) {
  const subtotal = calculateSubtotal(order.items);
  const discount = applyCoupon(subtotal, order.couponCode);
  const taxableAmount = subtotal - discount;
  const tax = calculateTax(taxableAmount);
  const shipping = calculateShipping(subtotal);
  const total = taxableAmount + tax + shipping;

  return {
    customerName: order.customer.name,
    items: order.items,
    subtotal,
    discount,
    tax,
    shipping,
    total,
    date: new Date().toISOString(),
  };
}`}
          />

          <p>
            الآن كل دالة مسؤولة عن شيء واحد فقط. يمكن اختبار كل دالة بشكل مستقل. الدالة الرئيسية <code>generateInvoice</code> أصبحت موجزة وواضحة.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* Rename Variable - تسمية المتغيرات */}
        {/* ========================================== */}
        <LessonSection title="Rename Variable - تحسين تسمية المتغيرات">
          <p>
            أسماء المتغيرات الواضحة تجعل الكود أسهل في الفهم. إعادة تسمية المتغيرات من أبسط تقنيات إعادة الهيكلة وأكثرها تأثيراً.
          </p>

          <h3 style={{ color: "var(--danger)", marginTop: "1rem" }}>قبل إعادة الهيكلة - أسماء غامضة:</h3>
          <CodeBlock
            language="javascript"
            code={`function calc(a, b, c) {
  const x = a * b;
  const y = x * c;
  const z = y - y * 0.1;
  return z;
}

const d = calc(100, 5, 2);
console.log(d); // 900`}
          />

          <h3 style={{ color: "var(--accent)", marginTop: "1rem" }}>بعد إعادة الهيكلة - أسماء واضحة ووصفية:</h3>
          <CodeBlock
            language="javascript"
            code={`function calculateFinalPrice(unitPrice, quantity, discountRate) {
  const subtotal = unitPrice * quantity;
  const totalAfterQuantity = subtotal * discountRate;
  const finalPrice = totalAfterQuantity - totalAfterQuantity * 0.1;
  return finalPrice;
}

const orderTotal = calculateFinalPrice(100, 5, 2);
console.log(orderTotal); // 900`}
          />

          <p>
            الآن يمكنك فهم ما يفعله الكود بسرعة فقط من قراءة أسماء الدوال والمتغيرات. لا حاجة لقراءة المنطق الداخلي.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              قواعد لتسمية المتغيرات:
            </p>
            <ul>
              <li>استخدم أسماء تصف ما تحتويه المتغير: <code>userName</code> بدلاً من <code>x</code></li>
              <li>استخدم أسماء الأفعال للدوال: <code>getUser</code> بدلاً من <code>user</code></li>
              <li>تجنب الأحرف المختصرة ما لم تكن شائعة: <code>i</code> في حلقات التكرار مقبول</li>
              <li>استخدم الاتجاه الإنجليزي: المتغيرات بالاسم، الدوال بالفعل</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Replace Conditional with Polymorphism */}
        {/* ========================================== */}
        <LessonSection title="Replace Conditional with Polymorphism">
          <p>
            عندما يكون لديك <code>if/else</code> أو <code>switch</code> طويلة تتحقق من نوع البيانات، يُفضل استبدالها بـ <strong>Polymorphism</strong> (التعددية الشكلية). هذا يجعل الكود أسهل في التوسع والصيانة.
          </p>

          <h3 style={{ color: "var(--danger)", marginTop: "1rem" }}>قبل إعادة الهيكلة - شرطيات كثيرة:</h3>
          <CodeBlock
            language="javascript"
            code={`function calculateArea(shape) {
  if (shape.type === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.type === "rectangle") {
    return shape.width * shape.height;
  } else if (shape.type === "triangle") {
    return 0.5 * shape.base * shape.height;
  } else if (shape.type === "square") {
    return shape.side ** 2;
  }
  return 0;
}

function getShapeDescription(shape) {
  if (shape.type === "circle") {
    return \`دائرة بنصف قطر \${shape.radius}\`;
  } else if (shape.type === "rectangle") {
    return \`مستطيل بأبعاد \${shape.width}x\${shape.height}\`;
  } else if (shape.type === "triangle") {
    return \`مثلث بقاعدة \${shape.base}\`;
  }
  return "شكل غير معروف";
}`}
          />

          <h3 style={{ color: "var(--accent)", marginTop: "1rem" }}>بعد إعادة الهيكلة - استخدام الكائنات:</h3>
          <CodeBlock
            language="javascript"
            code={`const shapeCalculators = {
  circle: (shape) => Math.PI * shape.radius ** 2,
  rectangle: (shape) => shape.width * shape.height,
  triangle: (shape) => 0.5 * shape.base * shape.height,
  square: (shape) => shape.side ** 2,
};

const shapeDescriptions = {
  circle: (shape) => \`دائرة بنصف قطر \${shape.radius}\`,
  rectangle: (shape) => \`مستطيل بأبعاد \${shape.width}x\${shape.height}\`,
  triangle: (shape) => \`مثلث بقاعدة \${shape.base}\`,
};

function calculateArea(shape) {
  const calculator = shapeCalculators[shape.type];
  return calculator ? calculator(shape) : 0;
}

function getShapeDescription(shape) {
  const describe = shapeDescriptions[shape.type];
  return describe ? describe(shape) : "شكل غير معروف";
}`}
          />

          <p>
            الآن لإضافة شكل جديد (مثل Pentagon)، نضيف عنصراً واحداً في الكائن بدلاً من تعديل كل شرطية. الكود أصبح أسهل في التوسع.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              متى تستخدم Polymorphism بدلاً من الشرطيات؟
            </p>
            <ul>
              <li>عندما يكون لديك أكثر من 3-4 حالات في شرطية</li>
              <li>عندما تحتاج لإضافة حالات جديدة بشكل متكرر</li>
              <li>عندما يكون كل فرع من الشرطية يحتوي منطق مختلف ومستقل</li>
              <li>عندما تريد فصل المنطق عن البيانات</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هو المبدأ الذي ينص على عدم تكرار الكود واستخراج المنطق المشترك إلى مكان واحد؟"
          options={[
            "KISS - Keep It Simple, Stupid",
            "DRY - Don't Repeat Yourself",
            "YAGNI - You Aren't Gonna Need It",
            "SOLID - Single Responsibility"
          ]}
          correctAnswer={1}
          explanation="DRY (Don't Repeat Yourself) هو المبدأ الذي ينص على أن كل جزء من المعرفة يجب أن يكون له تمثيل واحد في النظام. عندما تجد الكود يتكرر، يجب استخراجه إلى دالة أو وحدة مشتركة."
        />

        {/* ========================================== */}
        {/* التحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: أعد هيكلة دالة معالجة بيانات المستخدمين"
        >
          <p>
            لديك الدالة التالية التي تحسب متوسط درجات الطلاب. أعد هيكلتها باستخدام تقنيات DRY و Extract Function و Rename Variable:
          </p>
          <CodeBlock
            language="javascript"
            code={`function process(students) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 0 && students[i].grade <= 100) {
      total += students[i].grade;
      count++;
    }
  }
  const avg = total / count;
  let status;
  if (avg >= 90) {
    status = "ممتاز";
  } else if (avg >= 80) {
    status = "جيد جداً";
  } else if (avg >= 70) {
    status = "جيد";
  } else if (avg >= 60) {
    status = "مقبول";
  } else {
    status = "راسب";
  }
  return { average: avg, count: count, status: status };
}`}
          />
          <p style={{ marginTop: "1rem", color: "var(--muted)" }}>
            حاول استخراج دوال منفصلة للتحقق من صحة الدرجة، وحساب المتوسط، وتحديد الحالة.
          </p>
        </Challenge>

        {/* ========================================== */}
        {/* CheatSheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص إعادة الهيكلة - Cheat Sheet">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>المبادئ الأساسية:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>DRY</p>
                  <p>لا تكرر نفسك - استخراج المنطق المشترك</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>KISS</p>
                  <p>أبقها بسيطة - تجنب التعقيد غير الضروري</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>Single Responsibility</p>
                  <p>كل دالة مسؤولة عن شيء واحد فقط</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>تقنيات إعادة الهيكلة:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>Extract Function</p>
                  <p>تقسيم الدوال الطويلة إلى دوال أصغر</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>Rename Variable</p>
                  <p>تحسين أسماء المتغيرات والدوال لتكون وصفية</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>Replace Conditional</p>
                  <p>استبدال الشرطيات بـ Polymorphism أو كائنات</p>
                </div>
              </div>
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* التنقل بين الدروس */}
        {/* ========================================== */}
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
