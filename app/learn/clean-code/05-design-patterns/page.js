"use client";

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function DesignPatternsLesson() {
  const lesson = getLessonBySlug("clean-code", "05-design-patterns");

  const codeSingleton = `class DatabaseConnection {
  static instance = null;
  constructor() {
    if (DatabaseConnection.instance) return DatabaseConnection.instance;
    this.connection = this.createConnection();
    DatabaseConnection.instance = this;
  }
  createConnection() {
    console.log('تم إنشاء اتصال جديد بقاعدة البيانات');
    return { host: 'localhost', port: 5432 };
  }
  query(sql) {
    console.log('تنفيذ الاستعلام:', sql);
  }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
console.log(db1 === db2); // true`;

  const codeFactory = `class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.permissions = ["read", "write", "delete"];
  }
}

class Student extends User {
  constructor(name) {
    super(name, "student");
    this.permissions = ["read"];
  }
}

class Teacher extends User {
  constructor(name) {
    super(name, "teacher");
    this.permissions = ["read", "write"];
  }
}

class UserFactory {
  static createUser(name, type) {
    switch (type) {
      case "admin":
        return new Admin(name);
      case "student":
        return new Student(name);
      case "teacher":
        return new Teacher(name);
      default:
        throw new Error("نوع المستخدم غير معروف");
    }
  }
}

const admin = UserFactory.createUser("أحمد", "admin");
const student = UserFactory.createUser("سارة", "student");
console.log(admin.permissions); // ["read", "write", "delete"]
console.log(student.permissions); // ["read"]`;

  const codeObserver = `class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event, callback) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(
      (cb) => cb !== callback
    );
  }

  emit(event, data) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach((callback) => callback(data));
  }
}

const emitter = new EventEmitter();

function onUserLogin(user) {
  console.log("تم تسجيل دخول:", user.name);
}

function sendWelcomeEmail(user) {
  console.log("إرسال بريد ترحيبي إلى:", user.email);
}

emitter.on("login", onUserLogin);
emitter.on("login", sendWelcomeEmail);

emitter.emit("login", { name: "محمد", email: "mohamed@example.com" });
// تم تسجيل دخول: محمد
// إرسال بريد ترحيبي إلى: mohamed@example.com`;

  const codeModule = `const Calculator = (function () {
  let result = 0;

  function add(value) {
    result += value;
    return this;
  }

  function subtract(value) {
    result -= value;
    return this;
  }

  function multiply(value) {
    result *= value;
    return this;
  }

  function getResult() {
    return result;
  }

  function reset() {
    result = 0;
    return this;
  }

  return {
    add,
    subtract,
    multiply,
    getResult,
    reset,
  };
})();

Calculator.add(10).multiply(2).subtract(5);
console.log(Calculator.getResult()); // 15
console.log(Calculator.result); // undefined - مخفي داخل الوحدة`;

  const codeStrategy = `const pricingStrategies = {
  regular: (price) => price,
  discount: (price) => price * 0.9,
  vip: (price) => price * 0.75,
  seasonal: (price) => price * 0.5,
};

class ShoppingCart {
  constructor(pricingStrategy = "regular") {
    this.items = [];
    this.pricingStrategy = pricingStrategy;
  }

  addItem(item) {
    this.items.push(item);
  }

  setStrategy(strategy) {
    this.pricingStrategy = strategy;
  }

  calculateTotal() {
    const strategy = pricingStrategies[this.pricingStrategy];
    return this.items.reduce((total, item) => {
      return total + strategy(item.price * item.quantity);
    }, 0);
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "كتاب", price: 50, quantity: 2 });
cart.addItem({ name: "قلم", price: 10, quantity: 5 });

console.log(cart.calculateTotal()); // 150 (بدون خصم)
cart.setStrategy("vip");
console.log(cart.calculateTotal()); // 112.5 (خصم VIP 25%)`;

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <LessonHeader
          stage={lesson.stage}
          lesson={lesson}
          lessonIndex={lesson.lessonIndex}
          totalLessons={lesson.totalLessons}
        />

        <LessonSection title="مقدمة عن أنماط التصميم">
          <p style={{ color: "var(--foreground)" }}>
            أنماط التصميم (Design Patterns) هي حلول مُجربة وموثقة للمشاكل الشائعة في تصميم البرمجيات.
            تُعدّ من أساسيات كتابة كود نظيف وقابل للصيانة، حيث توفر لغة مشتركة بين المطورين
            وتساعد في بناء هياكل مرنة وقابلة للتوسيع.
          </p>
        </LessonSection>

        <LessonSection title="نمط Singleton - النموذج الوحيد">
          <p style={{ color: "var(--foreground)" }}>
            نموذج Singleton يضمن وجود نسخة واحدة فقط من الفئة (Class) في وقت واحد،
            ويُوفّر نقطة وصول عامة له. يُستخدم عندما تحتاج إلى إدارة موارد مشتركة مثل
            اتصال قاعدة البيانات أو إعدادات التطبيق.
          </p>
          <CodeBlock
            language="javascript"
            code={codeSingleton}
          />
        </LessonSection>

        <LessonSection title="نمط Factory - نمط المصنع">
          <p style={{ color: "var(--foreground)" }}>
            نموذج Factory يُوفّر طريقة لإنشاء كائنات دون تحديد الفئة الدقيقة للإنشاء.
            يُفصل عملية الإنشاء من الاستخدام، مما يجعل الكود أكثر مرونة وقابلية للصيانة.
          </p>
          <CodeBlock
            language="javascript"
            code={codeFactory}
          />
        </LessonSection>

        <LessonSection title="نمط Observer - نمط المراقب">
          <p style={{ color: "var(--foreground)" }}>
            نموذج Observer يُنشئ علاقة واحد-إلى-كثير بين الكائنات، حيث يُبلّغ الكائن المُراقب (Subject)
            جميع المراقبين (Observers) عند تغيير حالته. يُستخدم بكثرة في البرمجة المُستندة للأحداث
            (Event-Driven Programming).
          </p>
          <CodeBlock
            language="javascript"
            code={codeObserver}
          />
        </LessonSection>

        <LessonSection title="نمط Module - نمط الوحدة">
          <p style={{ color: "var(--foreground)" }}>
            نموذج Module يُوفر تغليف (Encapsulation) للبيانات والوظائف، حيث يُخفي التفاصيل الداخلية
            ويُ暴露 فقط الواجهة العامة. يُساعد في تنظيم الكود وتجنب التلوث النطاسي (Namespace Pollution).
          </p>
          <CodeBlock
            language="javascript"
            code={codeModule}
          />
        </LessonSection>

        <LessonSection title="نمط Strategy - نمط الاستراتيجية">
          <p style={{ color: "var(--foreground)" }}>
            نموذج Strategy يُعرّف مجموعة من الخوارزميات ويجعلها قابلة للتبديل (Interchangeable).
            يُسمح للكائن بتغيير سلوكه في وقت التشغيل دون تعديل الكود الأصلي. يُستخدم في
            الحسابات المختلفة أو تكتيكات الفرز.
          </p>
          <CodeBlock
            language="javascript"
            code={codeStrategy}
          />
        </LessonSection>

        <LessonSection title="اختبار المعرفة">
          <Quiz
            question="أي من أنماط التصميم التالية يُستخدم لإنشاء كائن واحد فقط في التطبيق؟"
            options={[
              "Factory Pattern",
              "Singleton Pattern",
              "Observer Pattern",
              "Strategy Pattern",
            ]}
            correctAnswer={1}
            explanation="نمط Singleton يضمن وجود نسخة واحدة فقط من الفئة في وقت واحد، ويُستخدم لإدارة الموارد المشتركة."
          />
        </LessonSection>

        <LessonSection title="تحدي عملي">
          <Challenge title="تطبيق نظام إشعارات باستخدام نمط Observer">
            <p style={{ color: "var(--foreground)" }}>
              أنشئ نظام إشعارات يدعم التسجيل في أنواع مختلفة من الإشعارات (بريد إلكتروني، رسالة نصية، إشعار داخل التطبيق).
              يجب أن يدعم النظام:
            </p>
            <ul style={{ color: "var(--foreground)" }}>
              <li>إضافة مُشتركين لأنواع مختلفة من الإشعارات</li>
              <li>إرسال إشعارات فقط للمشتركين في النوع المحدد</li>
              <li>إلغاء الاشتراك من نوع معين</li>
              <li>عرض جميع المشتركين لكل نوع</li>
            </ul>
          </Challenge>
        </LessonSection>

        <LessonSection title="ملخص الأنماط">
          <CheatSheet title="أنماط التصميم - ملخص سريع">
            <div style={{ color: "var(--foreground)" }}>
              <h4 style={{ color: "var(--primary)" }}>Singleton Pattern</h4>
              <p>ينشئ نسخة واحدة فقط من الفئة. يُستخدم للموارد المشتركة.</p>

              <h4 style={{ color: "var(--primary)" }}>Factory Pattern</h4>
              <p>ينشئ كائنات بناءً على المدخلات. يفصل الإنشاء عن الاستخدام.</p>

              <h4 style={{ color: "var(--primary)" }}>Observer Pattern</h4>
              <p>يُبلّغ المراقبين عند تغيير الحالة. يُستخدم في الأحداث.</p>

              <h4 style={{ color: "var(--primary)" }}>Module Pattern</h4>
              <p>يُغلف البيانات والوظائف. يُخفي التفاصيل الداخلية.</p>

              <h4 style={{ color: "var(--primary)" }}>Strategy Pattern</h4>
              <p>يجعل الخوارزميات قابلة للتبديل. يُستخدم في سلوكيات مختلفة.</p>
            </div>
          </CheatSheet>
        </LessonSection>

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
