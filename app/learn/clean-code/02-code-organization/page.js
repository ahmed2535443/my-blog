// =====================================================
// ملف: page.js (الدرس الثاني: تنظيم الكود)
// المكان: app/learn/clean-code/02-code-organization/page.js
// الوظيفة: تعليم كيفية تنظيم الكود وتقسيم الملفات
// URL: /learn/clean-code/02-code-organization
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function CodeOrganization() {
  const lessonInfo = getLessonBySlug("clean-code", "02-code-organization");

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
        {/* القسم الأول: مقدمة في تنظيم الكود */}
        {/* ========================================== */}
        <LessonSection title="لماذا تنظيم الكود مهم؟">
          <p>
            الكود الذي تكتبه اليوم سيكون غير مقروء بعد شهر، ولن تفهمه إذا لم تنظّمه بشكل صحيح.
            <strong> تنظيم الكود</strong> ليس مجرد ترتيب جميل - إنه ضرورة لـ maintainability وتعاون الفريق.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تخيّل هذا:
            </p>
            <p>
              إذا كان عندك غرفة مليئة بالأدوات مبعثرة على الأرض، تحتاج وقتاً طويلاً لإيجاد ما تحتاجه.
              لكن إذا كان كل صندوق عليه ملصق وكل شيء في مكانه، ستجد ما تريد في ثوانٍ.
              الكود البرمجي تماماً كذلك.
            </p>
          </div>

          <p>
            في هذا الدرس ستتعلم خمسة مبادئ أساسية لتنظيم الكود تجعلها أسهل في القراءة والصيانة والعمل الجماعي.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: فصل المسؤوليات */}
        {/* ========================================== */}
        <LessonSection title="فصل المسؤوليات (Single Responsibility)">
          <p>
            مبدأ <strong>فصل المسؤوليات (SRP)</strong> يعني أن كل وحدة في كودك - سواء كانت دالة أو ملف أو مكون - يجب أن يكون لها <strong>مسؤولية واحدة فقط</strong> وتقوم بها بشكل ممتاز.
          </p>

          <p>
            إذا وجدت نفسك تكتب دالة تفعل أكثر من شيء واحد، فقد تحتاج لتقسيمها. القاعدة البسيطة:
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold" style={{ color: "var(--accent)" }}>
              اسم الدالة يجب أن يبدأ بفعل واحد: getUser، calculateTotal، sendEmail
            </p>
          </div>

          <CodeBlock
            language="javascript"
            code={`// ❌ كود سيء: دالة تفعل أكثر من شيء واحد
function processUserData(user) {
  if (!user.name || !user.email) {
    return "بيانات غير صحيحة";
  }

  const result = db.users.insert(user);

  sendEmail(user.email, "مرحباً بك!", "تم تسجيلك بنجاح");

  log("تم إنشاء مستخدم جديد: " + user.name);

  return result;
}`}
          />

          <CodeBlock
            language="javascript"
            code={`// ✅ كود جيد: كل دالة مسؤولة عن شيء واحد
function validateUser(user) {
  if (!user.name || !user.email) {
    throw new Error("بيانات المستخدم غير مكتملة");
  }
  return true;
}

function saveUser(user) {
  return db.users.insert(user);
}

function sendWelcomeEmail(email, name) {
  sendEmail(email, "مرحباً بك!", \`تم تسجيلك بنجاح يا \${name}\`);
}

function logUserCreated(name) {
  log("تم إنشاء مستخدم جديد: " + name);
}

function registerUser(user) {
  validateUser(user);
  const result = saveUser(user);
  sendWelcomeEmail(user.email, user.name);
  logUserCreated(user.name);
  return result;
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "rgba(34, 197, 94, 0.05)", borderColor: "rgba(34, 197, 94, 0.2)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ✅ الفوائد:
            </p>
            <ul>
              <li>أسهل في الاختبار: كل دالة يمكن اختبارها بشكل مستقل</li>
              <li>أسهل في إعادة الاستخدام: يمكنك استخدام validateUser في أماكن أخرى</li>
              <li>أسهل في فهم الكود: كل دالة تفعل شيئاً واحداً واضحاً</li>
              <li>أسهل في إصلاح الأخطاء: إذا حدث مشكلة في البريد الإلكتروني، تذهب مباشرة لـ sendWelcomeEmail</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: ترتيب الـ imports */}
        {/* ========================================== */}
        <LessonSection title="ترتيب الـ imports">
          <p>
            <strong>ترتيب الـ imports</strong> في أعلى الملف ليس مجرد جمالية - إنه يسهّل على المبرمجين الآخرين أن يفهموا ما يعتمد عليه ملفك بسرعة.
            الطريقة المقبولة ترتيبها في ثلاث مجموعات:
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>الترتيب الصحيح للـ imports:</p>
            <ol>
              <li><strong>1. المكتبات الخارجية</strong> (React، Next.js، أي مكتبة من node_modules)</li>
              <li><strong>2. المكونات والملفات الداخلية</strong> (ملفات المشروع الخاصة بك)</li>
              <li><strong>3. الأدوات المساعدة والثوابت</strong> (Constants، utils، types)</li>
            </ol>
          </div>

          <CodeBlock
            language="javascript"
            code={`// ❌ كود سيء: imports عشوائية بدون ترتيب
import Button from "@/components/Button";
import React, { useState } from "react";
import { formatDate } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import { COLORS } from "@/constants/theme";`}
          />

          <CodeBlock
            language="javascript"
            code={`// ✅ كود جيد: imports مرتبة حسب المجموعة
// 1. المكتبات الخارجية
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// 2. المكونات والملفات الداخلية
import Button from "@/components/Button";
import Modal from "@/components/Modal";

// 3. الأدوات المساعدة والثوابت
import { formatDate } from "@/utils/helpers";
import { COLORS } from "@/constants/theme";`}
          />

          <p>
            يمكنك استخدام أداة مثل <strong>Prettier</strong> و <strong>ESLint plugin import order</strong> لإعادة ترتيب الـ imports تلقائياً عند حفظ الملف.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: تنظيم الملفات */}
        {/* ========================================== */}
        <LessonSection title="تنظيم الملفات وبنية المجلدات">
          <p>
            <strong>تنظيم الملفات</strong> يعني وضع كل ملف في المكان الصحيح داخل المشروع. القاعدة الذهبية:
            <strong> كل شيء مرتبط ببعضه يكون في نفس المجلد</strong>.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>هيكل المجلدات المثالي:</p>
            <pre style={{ fontFamily: "monospace", fontSize: "14px", lineHeight: "1.8", direction: "ltr", textAlign: "left" }}>
{`src/
├── components/          # المكونات المشتركة
│   ├── ui/              # مكونات UI الأساسية
│   │   ├── Button.js
│   │   ├── Modal.js
│   │   └── index.js     # Barrel export
│   └── layout/          # مكونات التخطيط
│       ├── Header.js
│       └── Footer.js
├── features/            # ميزات التطبيق
│   ├── auth/
│   │   ├── LoginPage.js
│   │   ├── useAuth.js
│   │   └── authAPI.js
│   └── dashboard/
│       ├── Dashboard.js
│       └── useDashboard.js
├── utils/               # الدوال المساعدة
│   ├── formatDate.js
│   └── validators.js
├── constants/           # الثوابت
│   └── theme.js
└── hooks/               # الـ Hooks المشتركة
    └── useLocalStorage.js`}
            </pre>
          </div>

          <p>
            مفهوم <strong>Barrel Exports</strong> يعني استخدام ملف <code>index.js</code> في كل مجلد لتصدير كل شيء من ذلك المجلد في مكان واحد:
          </p>

          <CodeBlock
            language="javascript"
            code={`// components/ui/Button.js
export function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

// components/ui/Modal.js
export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return <div className="modal">{children}</div>;
}

// components/ui/index.js (Barrel Export)
export { Button } from "./Button";
export { Modal } from "./Modal";`}
          />

          <CodeBlock
            language="javascript"
            code={`// الآن يمكنك الاستيراد بسهولة
import { Button, Modal } from "@/components/ui";

// بدلاً من:
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: مبدأ أقل معرفة */}
        {/* ========================================== */}
        <LessonSection title="مبدأ أقل معرفة (Principle of Least Knowledge)">
          <p>
            <strong>مبدأ أقل معرفة (Law of Demeter)</strong> يعني أن الكائن لا يجب أن يعرف إلا عن جيرانه المباشرين.
            بمعنى آخر: لا تسلسل طلبات (method chaining) طويل.
          </p>

          <CodeBlock
            language="javascript"
            code={`// ❌ كود سيء: سلسلة طلبات طويلة
function getUserCity(user) {
  return user.getAddress().getCity().getName();
}

// ❌ كود سيء: يعرف أشياء كثيرة غير مباشرة
function getOrderSummary(order) {
  const customerName = order.getCustomer().getProfile().getName();
  const city = order.getCustomer().getAddress().getCity().getName();
  return \`\${customerName} - \${city}\`;
}`}
          />

          <CodeBlock
            language="javascript"
            code={`// ✅ كود جيد: كل طبقة تعرف فقط جارتها المباشرة
function getUserCity(user) {
  const address = user.getAddress();
  return address.getCity();
}

// ✅ كود جيد: نمرر فقط ما نحتاجه
function getOrderSummary(order) {
  const customer = order.getCustomer();
  return customer.getSummary();
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "rgba(251, 191, 36, 0.05)", borderColor: "rgba(251, 191, 36, 0.2)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              ⚠️ لماذا هذا مهم؟
            </p>
            <p>
              إذا قمت بتغيير بنية getAddress() أو getCity()، فجميع الدوال التي تسلسل طلبات ستتكسر.
              لكن إذا كل دالة تعرف فقط جارتها المباشرة، التغييرات ستكون محلية وآمنة.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: تجميع الكود المترابط */}
        {/* ========================================== */}
        <LessonSection title="تجميع الكود المترابط">
          <p>
            <strong>تجميع الكود المترابط</strong> يعني وضع الدوال والأكواد المتشابهة في الاستخدام في مكان واحد.
            لا散布 الدوال المساعدة في أماكن مختلفة من المشروع.
          </p>

          <CodeBlock
            language="javascript"
            code={`// ❌ كود سيء: دوال مساعدة مبعثرة في أماكن مختلفة
// في login.js
function validateEmail(email) {
  return email.includes("@");
}

// في register.js
function checkEmail(email) {
  return email.includes("@");
}

// في profile.js
function isEmailValid(email) {
  return email.includes("@");
}`}
          />

          <CodeBlock
            language="javascript"
            code={`// ✅ كود جيد: جميع دوال التحقق في ملف واحد
// validators.js
export function validateEmail(email) {
  return email.includes("@");
}

export function validatePassword(password) {
  return password.length >= 8;
}

export function validateName(name) {
  return name.trim().length > 0;
}

// login.js
import { validateEmail } from "@/utils/validators";

// register.js
import { validateEmail, validatePassword } from "@/utils/validators";

// profile.js
import { validateEmail, validateName } from "@/utils/validators";`}
          />

          <p>
            المبدأ هو: <strong>لا تتكرر (DRY - Don&apos;t Repeat Yourself)</strong>. إذا وجدت نفسك تنسخ كوداً من مكان لآخر، اجعله دالة في مكان واحد واستخدمه من هناك.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* اختبار المعرفة */}
        {/* ========================================== */}
        <Quiz
          question="إذا كانت دالة `processOrder` تفعل التحقق من الطلب + حفظها في قاعدة البيانات + إرسال بريد إلكتروني، فكيف تقسمها وفقاً لمبدأ فصل المسؤوليات؟"
          options={[
            "تترك الدالة كما هي لأنها تفعل كل شيء مرتبط بالطلب",
            "تقسمها إلى three دوال: validateOrder و saveOrder و sendOrderConfirmation",
            "تصنع three نسخ من الدالة في أماكن مختلفة",
            "تحذف الدالة لأنها معقدة جداً"
          ]}
          correctAnswer={1}
          explanation="وفق لمبدأ فصل المسؤوليات، كل دالة يجب أن تفعل شيئاً واحداً فقط. نقسمها إلى: validateOrder للتحقق، saveOrder للحفظ، sendOrderConfirmation للبريد. ثم نكتب دالة processOrder تستدعي الثلاثة."
        />

        {/* ========================================== */}
        {/* التحدي العملي */}
        {/* ========================================== */}
        <Challenge title="أعد هيكلة الدالة التالية">
          <p style={{ marginBottom: "1rem" }}>
            أمامك الدالة التالية المكتوبة بطريقة غير منظمة. أعد هيكلتها وفقاً لمبادئ التنظيم التي تعلمتها:
          </p>

          <CodeBlock
            language="javascript"
            code={`function handleUserAction(action, userData) {
  if (action === "register") {
    if (!userData.name || !userData.email) {
      return { success: false, error: "بيانات ناقصة" };
    }
    const user = db.users.create(userData);
    sendEmail(userData.email, "مرحباً", "تم التسجيل");
    log("تسجيل مستخدم جديد: " + userData.name);
    return { success: true, user };
  } else if (action === "login") {
    const user = db.users.findByEmail(userData.email);
    if (!user || user.password !== userData.password) {
      return { success: false, error: "بيانات خاطئة" };
    }
    log("دخول مستخدم: " + user.name);
    return { success: true, user };
  }
}`}
          />

          <p style={{ marginTop: "1rem" }}>
            <strong>المتطلبات:</strong>
          </p>
          <ul>
            <li>افصل كل عملية في دالة مستقلة</li>
            <li>اكتب دالة `validateRegisterData` للتحقق من بيانات التسجيل</li>
            <li>اكتب دالة `authenticateUser` للتحقق من بيانات الدخول</li>
            <li>اجعل كل دالة مسؤولة عن شيء واحد فقط</li>
          </ul>
        </Challenge>

        {/* ========================================== */}
        {/* ملخص الدرس */}
        {/* ========================================== */}
        <CheatSheet title="ملخص تنظيم الكود">
          <div className="space-y-4">
            <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
              <p className="font-bold" style={{ color: "var(--primary)" }}>1. فصل المسؤوليات (SRP)</p>
              <p>كل دالة تفعل شيئاً واحداً. لا تكتب دوال تفعل أكثر من شيء واحد.</p>
            </div>

            <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
              <p className="font-bold" style={{ color: "var(--accent)" }}>2. ترتيب الـ imports</p>
              <p>المكتبات الخارجية ← المكونات الداخلية ← الأدوات المساعدة. استخدم Prettier لترتيبها تلقائياً.</p>
            </div>

            <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
              <p className="font-bold" style={{ color: "var(--secondary)" }}>3. تنظيم الملفات</p>
              <p>استخدم barrel exports ورتب الملفات حسب الميزات. كل ميزة في مجلد منفصل.</p>
            </div>

            <div className="p-3 rounded-lg" style={{ background: "rgba(168, 85, 247, 0.05)", border: "1px solid var(--border)" }}>
              <p className="font-bold" style={{ color: "var(--primary)" }}>4. مبدأ أقل معرفة</p>
              <p>لا تسلسل طلبات طويلة. كل دالة تعرف فقط جارتها المباشرة.</p>
            </div>

            <div className="p-3 rounded-lg" style={{ background: "rgba(236, 72, 153, 0.05)", border: "1px solid var(--border)" }}>
              <p className="font-bold" style={{ color: "var(--danger)" }}>5. تجميع الكود المترابط</p>
              <p>اجمع الدوال المتشابهة في ملف واحد. لا تتكرر (DRY).</p>
            </div>

            <div className="p-3 rounded-lg" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <p className="font-bold" style={{ color: "var(--foreground)" }}>🎯 القاعدة الذهبية:</p>
              <p>الكود الجيد هو الكود الذي يمكن لشخص آخر أن يقرأه ويفهمه في أقصر وقت ممكن.</p>
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
