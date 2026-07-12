import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ModernSelectors() {
  const lesson = getLessonBySlug("css", "02-modern-selectors");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ===== Section 1: ما هو ===== */}
        <LessonSection title="ما هو">
          <p className="text-lg leading-relaxed mb-4">
            <strong>المحددات الحديثة (Modern Selectors)</strong> في CSS هي مجموعة من الأدوات التي تتيح لك تحديد العناصر بطرق أكثر ذكاءً ومرونة. بدلاً من الاعتماد فقط على الفئات (Classes) والمعرّفات (IDs)، يمكنك الآن استخدام محددات متقدمة تصل إلى آباء العناصر، وتجمع بين عدة محددات دفعة واحدة، وتتحكم في التنافسية (Specificity) بذكاء.
          </p>
          <p className="mb-4">
            كما أن <strong>CSS Nesting</strong> (التداخل الأصلي) أصبح متاحًا الآن في جميع المتصفحات الحديثة دون الحاجة إلى preprocessors مثل Sass، مما يجعل الكود أكثر تنظيمًا وقابلية للصيانة.
          </p>
          <p className="mb-4">
            في هذا الدرس، ستتعلم:
          </p>
          <ul className="space-y-2 list-disc list-inside mb-4">
            <li>مراجعة سريعة للمحددات الأساسية وال Combinators</li>
            <li>Pseudo-classes و Pseudo-elements المتقدمة</li>
            <li>المحددات الحديثة: <code>:has()</code>، <code>:is()</code>، <code>:where()</code></li>
            <li>CSS Nesting - التداخل الأصلي بدون Sass</li>
            <li><code>@layer</code> - التحكم في ترتيب التنافسية</li>
            <li><code>@scope</code> - تضييق نطاق الأنماط</li>
          </ul>
        </LessonSection>

        {/* ===== Section 2: لماذا نستخدمه ===== */}
        <LessonSection title="لماذا نستخدمه">
          <p className="mb-4">المحددات الحديثة تحل عدة مشاكل حقيقية واجهها المطورون لسنوات:</p>

          <h3 className="text-xl font-bold mb-3">1. تقليل تكرار الكود</h3>
          <p className="mb-3">بدلاً من تكرار نفس التنسيق لعدة محددات، يمكنك استخدام <code>:is()</code> لتجميعها:</p>
          <CodeBlock
            code={`/* قبل: تكرار ممل */
.card h1, .card h2, .card h3 {
  color: var(--heading-color);
  margin-bottom: 0.5rem;
}

/* بعد: مختصر وأنيق */
.card :is(h1, h2, h3) {
  color: var(--heading-color);
  margin-bottom: 0.5rem;
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">2. الوصول إلى العناصر الأب</h3>
          <p className="mb-3">لأول مرة، يمكنك تنسيق العنصر الأب بناءً على محتواه باستخدام <code>:has()</code>:</p>
          <CodeBlock
            code={`/* البطاقة التي تحتوي على صورة تحصل على تنسيق مختلف */
.card:has(img) {
  grid-template-columns: 200px 1fr;
}

/* النموذج الذي يحتوي على حقول غير صالحة */
form:has(:invalid) {
  border-color: red;
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">3. التحكم في التنافسية</h3>
          <p className="mb-3">أدوات مثل <code>:where()</code> و <code>@layer</code> تعطيك تحكمًا دقيقًا بتأثير التنافسية:</p>
          <CodeBlock
            code={`/* :where() لها تنافسية صفر - ممتازة لإعادة التعيين */
:where(h1, h2, h3) {
  margin: 0;
  /* لن تتفوق على أي قاعدة أخرى */}

/* @layer يتحكم بترتيب الوراثة */
@layer base, components, utilities;`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">4. تنظيم الكود مع CSS Nesting</h3>
          <p className="mb-3">بدون Sass، يمكنك الآن تداخل قواعد CSS داخل بعضها البعض:</p>
          <CodeBlock
            code={`/* الكود变得更加 منظّم */
.card {
  background: white;
  border-radius: 8px;

  & h2 {
    color: navy;
  }

  & p {
    color: gray;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 3: المشكلة التي يحلها ===== */}
        <LessonSection title="المشكلة التي يحلها">
          <p className="mb-4">لنرَ مشكلة حقيقية واجهت المطورون قبل ظهور المحددات الحديثة:</p>

          <h3 className="text-xl font-bold mb-3">المشكلة الأولى: تنسيق الأب بناءً على الابن</h3>
          <CodeBlock
            code={`<!-- البطاقة التي تحتوي على صورة تريد عرضها بشكل أفقي -->
<!-- البطاقة بدون صورة تريد عرضها عمودياً -->

<!-- بدون :has() كان عليك إضافة فئة يدوياً -->
<div class="card card--with-image">
  <img src="photo.jpg" alt="صورة">
  <div class="card-content">
    <h2>عنوان البطاقة</h2>
    <p>وصف البطاقة</p>
  </div>
</div>

<div class="card">
  <div class="card-content">
    <h2>عنوان بدون صورة</h2>
    <p>بطاقة نصية فقط</p>
  </div>
</div>`}
            language="html"
          />
          <CodeBlock
            code={`/* بدون :has() - عليك إدارة فئات يدوياً */
.card--with-image {
  display: grid;
  grid-template-columns: 200px 1fr;
}

/* مع :has() - CSS يكتشف التلقائي! */
.card:has(img) {
  display: grid;
  grid-template-columns: 200px 1fr;
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">المشكلة الثانية: تكرار المحددات</h3>
          <CodeBlock
            code={`/* قبل: تكرار طويل وممل */
.nav a:hover,
.nav a:focus,
.nav a:active {
  color: var(--accent);
}

.footer a:hover,
.footer a:focus,
.footer a:active {
  color: var(--accent);
}

/* بعد مع :is() - نظيف ومختصر */
:is(.nav, .footer) a:is(:hover, :focus, :active) {
  color: var(--accent);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">المشكلة الثالثة: صعوبة إعادة التعيين</h3>
          <CodeBlock
            code={`/* قبل: إعادة التعيين تتفوق على أنماطك! */
/* هذه القاعدة لها تنافسية عالية وتتداخل مع عملك */
h1, h2, h3, p {
  margin: 0;
  padding: 0;
  /* تنافسية عالية = صعوبة في التعديل لاحقاً */}

/* بعد مع @layer - التحكم في الترتيب */
@layer reset, base, components;

@layer reset {
  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
}

@layer components {
  .card h2 {
    margin-bottom: 1rem; /* تتبع الأفضلية */
  }
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 4: شرح بسيط ===== */}
        <LessonSection title="شرح بسيط">
          <p className="mb-4">لندخل في شرح تفصيلي لكل أداة مع مفاهيم أساسية سريعة:</p>

          <h3 className="text-xl font-bold mb-3">أولاً: مراجعة المحددات الأساسية</h3>

          <h4 className="font-bold mb-2">محددات العناصر (Element Selectors)</h4>
          <CodeBlock
            code={`/* تحديد وسم مباشرة */
p { color: black; }
h1 { font-size: 2rem; }
div { display: block; }`}
            language="css"
          />

          <h4 className="font-bold mb-2 mt-4">محددات الفئات (Class Selectors)</h4>
          <CodeBlock
            code={`/* تحديد عنصر بفئته */
.btn { padding: 0.5rem 1rem; }
.card { background: white; }

/* فئات متعددة */
.btn-primary { background: blue; }`}
            language="css"
          />

          <h4 className="font-bold mb-2 mt-4">محددات المعرّف (ID Selectors)</h4>
          <CodeBlock
            code={`/* تحديد عنصر بمعرّفه الفريد */
#header { position: fixed; }
#main-content { max-width: 1200px; }`}
            language="css"
          />

          <h4 className="font-bold mb-2 mt-4">محددات السمات (Attribute Selectors)</h4>
          <CodeBlock
            code={`/* تحديد حسب نوع السمة */
input[type="text"] { border: 1px solid #ccc; }
input[type="email"] { border: 1px solid blue; }

/* تحديد حسب وجود السمة */
a[target] { color: red; }

/* تحديد حسب قيمة جزئية */
a[href*="example"] { color: green; }
a[href^="https"] { color: teal; }
a[href$=".pdf"] { color: orange; }

/* تحديد حسب كلمة في السمة */
[class*="btn"] { cursor: pointer; }`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">ثانياً: الـ Combinators (المؤلفات)</h3>
          <p className="mb-3">المؤلفات تربط بين المحددات لتحديد العلاقات بين العناصر:</p>

          <CodeBlock
            code={`/* 1. الابن المباشر (Child >) */
/* يحدد الأبناء المباشرين فقط */
.nav > li { display: inline-block; }
/* li ابن مباشر لـ .nav */

/* 2. النسل (Descendant - مسافة) */
/* يحدد كل الأبناء بغض النظر عن العمق */
.nav a { color: blue; }
/* كل a داخل .nav حتى لو كان متعدد التداخل */

/* 3. الأibling المجاور (Adjacent +) */
/* العنصر المجاور التالي مباشرة */
h2 + p { margin-top: 0; }
/* الفقرة المجاورة مباشرة بعد h2 */

/* 4. الأibling العام (~) */
/* كل الإخوة التاليين */
h2 ~ p { color: gray; }
/* كل فقرات comes after h2 */`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">ثالثاً: Pseudo-classes المتقدمة</h3>
          <p className="mb-3">الكلاسات الزائفة تحدد حالة عنصر معينة:</p>

          <CodeBlock
            code={`/* حالات التفاعل */
.button:hover { background: darkblue; }
.input:focus { border-color: blue; outline: none; }
.button:active { transform: scale(0.98); }

/* تحديد الأبناء بالترتيب */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(2n) { background: #f5f5f5; } /* الأزواج */
li:nth-child(2n+1) { background: #fff; }   /* الفردي */
li:nth-child(3) { color: red; }            /* الثالث تحديداً */

/* حالات خاصة */
input:disabled { opacity: 0.5; }
input:checked + label { color: green; }
.empty { display: none; } /* عنصر فارغ */

/* :not() - الاستثناء */
:not(.hidden) { display: block; }
li:not(:last-child) { border-bottom: 1px solid #eee; }`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">رابعاً: Pseudo-elements</h3>
          <p className="mb-3">العناصر الزائفة تنشئ عناصر وهمية داخل العنصر الأصلي:</p>

          <CodeBlock
            code={`/* ::before و ::after */
.quote::before {
  content: "\\201C"; /* علامة اقتباس مفتوحة */
  font-size: 3rem;
  color: var(--primary);
}

.link::after {
  content: " \\2197"; /* سهم للخارج */
}

/* ::first-line و ::first-letter */
p::first-line {
  font-weight: bold;
}

.drop-cap::first-letter {
  font-size: 3rem;
  float: left;
  line-height: 1;
}

/* ::placeholder */
input::placeholder {
  color: #999;
  font-style: italic;
}

/* ::marker - تنسيق نقاط القوائم */
li::marker {
  color: var(--primary);
  font-size: 1.2em;
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 5: مثال بسيط ===== */}
        <LessonSection title="مثال بسيط">
          <p className="mb-4">لنرَ مثالاً يجمع المحددات الحديثة في سيناريو واقعي - بطاقة منتج متقدمة:</p>

          <CodeBlock
            code={`<div class="product-list">
  <div class="product-card">
    <img src="laptop.jpg" alt="لابتوب">
    <h3>لابتوب Dell</h3>
    <p class="price">$999</p>
    <p class="description">لابتوب قوي للمحترفين</p>
    <button class="btn btn-primary">أضف للسلة</button>
  </div>

  <div class="product-card">
    <h3>سماعة بلوتوث</h3>
    <p class="price">$49</p>
    <p class="description">سماعة لاسلكية عالية الجودة</p>
    <button class="btn btn-primary">أضف للسلة</button>
  </div>

  <div class="product-card featured">
    <img src="phone.jpg" alt="هاتف">
    <h3>هاتف iPhone</h3>
    <p class="price">$1299</p>
    <p class="description">أحدث هاتف من Apple</p>
    <button class="btn btn-primary">أضف للسلة</button>
  </div>
</div>`}
            language="html"
          />

          <CodeBlock
            code={`/* Product List with Modern Selectors */

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

/* البطاقة التي تحتوي على صورة: تصميم أفقي */
.product-card:has(img) {
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: auto auto auto;
}

.product-card:has(img) img {
  grid-row: 1 / -1;
  width: 120px;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
}

/* البطاقة بدون صورة: تصميم عمودي */
.product-card:not(:has(img)) {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

/* الأسعار: تنسيق مختلف حسب القيمة */
.price {
  font-size: 1.25rem;
  font-weight: bold;
}

.price:not(:has(~ .price)) {
  /* آخر سعر في الصفحة */
  color: var(--accent);
}

/* الأزرار بجميع حالاتها */
.btn:is(:hover, :focus) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* البطاقة المميزة */
.product-card.featured {
  border: 2px solid var(--primary);
}

.product-card.featured::after {
  content: "مميز";
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: var(--primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

/* جميع البطاقات: تأثير عند مرور الماوس */
.product-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:is(:hover) {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 6: مثال عملي ===== */}
        <LessonSection title="مثال عملي">
          <p className="mb-4">تطبيق شامل يجمع كل المحددات الحديثة في نظام تسجيل دخول احترافي:</p>

          <CodeBlock
            code={`<div class="auth-container">
  <form class="login-form" novalidate>
    <h2>تسجيل الدخول</h2>
    <p class="subtitle">مرحباً بعودتك!</p>

    <div class="form-group">
      <label for="email">البريد الإلكتروني</label>
      <input type="email" id="email" placeholder="example@email.com" required>
      <span class="error-msg">البريد الإلكتروني غير صالح</span>
    </div>

    <div class="form-group">
      <label for="password">كلمة المرور</label>
      <input type="password" id="password" placeholder="••••••••" required>
      <span class="error-msg">كلمة المرور قصيرة جداً</span>
    </div>

    <div class="form-options">
      <label class="checkbox-label">
        <input type="checkbox" id="remember">
        <span>تذكرني</span>
      </label>
      <a href="#" class="forgot-link">نسيت كلمة المرور؟</a>
    </div>

    <button type="submit" class="btn-submit" disabled>دخول</button>
  </form>

  <div class="social-login">
    <p class="divider"><span>أو سجّل دخول بـ</span></p>
    <div class="social-buttons">
      <button class="social-btn google">Google</button>
      <button class="social-btn github">GitHub</button>
    </div>
  </div>
</div>`}
            language="html"
          />

          <CodeBlock
            code={`/* ==============================
   CSS Nesting + Modern Selectors
   Login Form System
   ============================== */

/* Base Layer */
@layer base {
  :root {
    --primary: #2563eb;
    --primary-hover: #1d4ed8;
    --danger: #ef4444;
    --success: #10b981;
    --gray-100: #f3f4f6;
    --gray-300: #d1d5db;
    --gray-500: #6b7280;
    --gray-700: #374151;
    --gray-900: #111827;
    --radius: 8px;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
    background: var(--gray-100);
    color: var(--gray-900);
  }
}

/* Components Layer */
@layer components {
  .auth-container {
    max-width: 420px;
    margin: 4rem auto;
    background: white;
    border-radius: 16px;
    box-shadow: var(--shadow);
    overflow: hidden;
  }

  /* CSS Nesting - التداخل الأصلي */
  .login-form {
    padding: 2.5rem;

    & h2 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }

    & .subtitle {
      color: var(--gray-500);
      margin-bottom: 2rem;
    }

    /* Form Groups - Modern Selectors */
    & .form-group {
      margin-bottom: 1.25rem;
      position: relative;

      & label {
        display: block;
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--gray-700);
      }

      & input {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 2px solid var(--gray-300);
        border-radius: var(--radius);
        font-size: 1rem;
        transition: border-color 0.2s;

        /* Pseudo-elements */
        &::placeholder {
          color: var(--gray-500);
        }

        /* Focus state */
        &:focus {
          outline: none;
          border-color: var(--primary);
        }

        /* Invalid state - when user interacts */
        &:user-invalid {
          border-color: var(--danger);
        }

        /* Disabled state */
        &:disabled {
          background: var(--gray-100);
          cursor: not-allowed;
        }
      }

      /* Error message - hidden by default */
      & .error-msg {
        display: none;
        color: var(--danger);
        font-size: 0.75rem;
        margin-top: 0.25rem;
      }

      /* Show error when input is invalid */
      &:has(input:user-invalid) {
        & .error-msg {
          display: block;
        }
      }
    }

    /* Form Options Row */
    & .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    /* Checkbox Label */
    & .checkbox-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      font-size: 0.875rem;

      /* :has() - style based on checkbox state */
      &:has(input:checked) span {
        color: var(--primary);
        font-weight: 600;
      }

      & input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: var(--primary);
      }
    }

    /* Submit Button */
    & .btn-submit {
      width: 100%;
      padding: 0.875rem;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: var(--radius);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;

      &:hover:not(:disabled) {
        background: var(--primary-hover);
      }

      &:active:not(:disabled) {
        transform: scale(0.98);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  /* Divider with text */
  & .divider {
    text-align: center;
    position: relative;
    margin: 1.5rem 0;
    color: var(--gray-500);
    font-size: 0.875rem;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: calc(50% - 60px);
      height: 1px;
      background: var(--gray-300);
    }

    &::before { right: 0; }
    &::after { left: 0; }

    & span {
      background: white;
      padding: 0 0.5rem;
      position: relative;
      z-index: 1;
    }
  }

  /* Social Buttons */
  & .social-buttons {
    display: flex;
    gap: 0.75rem;

    & .social-btn {
      flex: 1;
      padding: 0.75rem;
      border: 2px solid var(--gray-300);
      border-radius: var(--radius);
      background: white;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;

      /* Attribute selector */
      &[class*="google"]:hover {
        border-color: #ea4335;
        color: #ea4335;
      }

      &[class*="github"]:hover {
        border-color: #333;
        color: #333;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 7: ماذا يحدث خلف الكواليس ===== */}
        <LessonSection title="ماذا يحدث خلف الكواليس">
          <p className="mb-4">فهم كيفية عمل المحددات الحديثة في المتصفح يساعدك على كتابة كود أكثر كفاءة:</p>

          <h3 className="text-xl font-bold mb-3">1. كيف يعمل :has() ؟</h3>
          <p className="mb-3">
            المحدد <code>:has()</code> يسمى أحيانًا "الparent selector" لأنه يسمح بتنسيق العنصر الأب بناءً على أبنائه. تقنيًا، المتصفح يفحص العناصر الأبناء أولاً ثم ينتقل للأعلى (Upward) لتحديد ما إذا كان الأب يطابق الشرط.
          </p>
          <CodeBlock
            code={`/* المتصفح يقوم بما يلي:
   1. يفحص كل div في الصفحة
   2. لكل div، يتحقق: هل يحتوي على عنصر img؟
   3. إذا نعم → يطبق التنسيق على الـ div نفسه
   
   ⚠️ ملاحظة: :has() قد يكون أبطأ قليلاً من المحددات
   العادية لأن المتصفح يفحص الأبناء أولاً */}

.card:has(img) {
  display: grid;
}
/* المتصفح: يبحث عن .card تحتوي على img
   ثم يطبق display: grid على .card نفسها */`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">2. كيف تعمل :is() و :where() ؟</h3>
          <p className="mb-3">كلاهما يعملان كـ "مُجمّع محددات" - يأخذان قائمة محددات ويطبقان التنسيق على كل منها:</p>
          <CodeBlock
            code={`/* :is() تأخذ تنافسية أعلى من محدداتها الداخلية */
:is(h1, h2, h3) {
  font-size: 1.5rem;
}
/* تُترجم إلى:
   h1 { font-size: 1.5rem; }  (0-0-1)
   h2 { font-size: 1.5rem; }  (0-0-1)
   h3 { font-size: 1.5rem; }  (0-0-1)
   
   + تنافسية أقصى من المحددات الداخلية */

/* :where() لها تنافسية صفراً دائماً */
:where(h1, h2, h3) {
  margin: 0;
}
/* تُترجم إلى:
   h1 { margin: 0; }  (0-0-0) ← تنافسية صفر!
   h2 { margin: 0; }  (0-0-0)
   h3 { margin: 0; }  (0-0-0)
   
   → سهل جدًا الكتابة فوقها */`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">3. كيف يعمل CSS Nesting ؟</h3>
          <CodeBlock
            code={`/* الكود المكتوب: */
.card {
  background: white;

  & h2 {
    color: navy;
  }
}

/* يُترجم من المتصفح إلى: */
.card {
  background: white;
}

.card h2 {
  color: navy;
}

/* النقطة & تمثل المحدد الأصل (.card) */`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">4. كيف يعمل @layer ؟</h3>
          <CodeBlock
            code={`/* @layer يُنشئ "طبقات" للقواعد */
@layer reset, base, components, utilities;

/* كل طبقة لها تنافسية موحدة */
/* ترتيب الوراثة يعتمد على ترتيب الإعلان */

@layer reset {
  * { margin: 0; }    /* تنافسية منخفضة */
}

@layer components {
  .card h2 {
    margin-bottom: 1rem;  /* يتفوق على reset */
  }
}

@layer utilities {
  .mt-4 { margin-top: 1rem; }  /* يتفوق على كل ما قبله */
}

/* القواعد خارج @layer لها أعلى تنافسية */`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">5. how does @scope work?</h3>
          <p className="mb-3"><code>@scope</code> يُنشئ نطاقًا محدودًا للقواعد:</p>
          <CodeBlock
            code={`/* @scope يحدد نطاق القاعدة */
@scope (.card) to (.card-footer) {
  p {
    color: var(--gray-700);
    line-height: 1.6;
  }
  
  /* هذه القاعدة لا تؤثر على p خارج .card
     ولا على p داخل .card-footer */}

/* النتيجة:
   ✅ .card > p →受影响
   ✅ .card > div > p →受影响
   ❌ .card-footer > p → لا يتأثر
   ❌ .other-section > p → لا يتأثر */`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 8: الأخطاء الشائعة ===== */}
        <LessonSection title="الأخطاء الشائعة">

          <h3 className="text-xl font-bold mb-3">1. إساءة استخدام :has() مع selectors معقدة</h3>
          <CodeBlock
            code={`/* ❌ خطأ: تسلسل selector معقد جداً */
.page .content .card:has(.badge.active .icon) {
  /* هذا معقد ويبطئ المتصفح */
}

/* ✅ صحيح: اجعله بسيطاً */
.card:has(.badge.active) {
  /* أبسط وأسرع */}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">2. اختلاط :is() مع :where()</h3>
          <CodeBlock
            code={`/* ❌ خطأ: استخدام :where() حيث تحتاج تنافسية */
:where(.btn-primary) {
  background: blue;
  /* تنافسية صفر = أي قاعدة أخرى تتفوق! */}

/* ✅ صحيح: استخدم :is() عند الحاجة للتنافسية */
:is(.btn-primary) {
  background: blue;
  /* تنافسية عالية = تتفوق */}

/* ✅ صحيح: استخدم :where() لإعادة التعيين */
:where(h1, h2, h3) {
  margin: 0;  /* سهل الكتابة فوقها */}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">3. نسيان فاصلة البين بين المحددات في :is()</h3>
          <CodeBlock
            code={`/* ❌ خطأ: نسيان الفاصلة */
:is(h1 h2 h3) {
  font-size: 1.5rem;
}
/* هذا يبحث عن h3 داخل h2 داخل h1! */

/* ✅ صحيح: فاصلة بين كل محدد */
:is(h1, h2, h3) {
  font-size: 1.5rem;
}
/* يطبق على h1 أو h2 أو h3 */`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">4. استخدام Nesting بشكل مفرط (Deep Nesting)</h3>
          <CodeBlock
            code={`/* ❌ خطأ: nesting عميق جداً - كود صعب القراءة */
.page {
  & .sidebar {
    & .widget {
      & .title {
        & span {
          color: red;
          /* 5 مستويات! */}}}}}

/* ✅ صحيح: حد أقصى 2-3 مستويات */
.page .sidebar {
  & .widget .title span {
    color: red;
    /* أبسط وأوضح */}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">5. عدم فهم ترتيب @layer</h3>
          <CodeBlock
            code={`/* ❌ خطأ: الترتيب العكسي */
@layer components, reset;
/* reset الآن تتفوق على components! */

/* ✅ صحيح: الطلب من الأقل إلى الأعلى */
@layer reset, base, components, utilities;
/* reset ← base ← components ← utilities */`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">6. استخدام :has() مع ::before/::after</h3>
          <CodeBlock
            code={`/* ❌ خطأ: محاولة الوصول لـ ::before في :has() */
.card:has(::before) {
  /* لا يعمل! ::before ليس عنصر DOM */}

/* ✅ صحيح: استخدم سمة أخرى أو فئة */
.card:has(.badge) {
  /* افحص عنصر DOM حقيقي */}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">7. إهمال تنسيق nth-child() الصحيح</h3>
          <CodeBlock
            code={`/* ❌ خطأ: فهم خاطئ لـ nth-child */
li:nth-child(2) { color: red; }
/* هذا يُطبّق على العنصر الثاني فقط */

/* ❌ خطأ آخر: كتابة nth-child مع class */
li:nth-child(.active) { color: red; }
/* لا تعمل! nth-child لا يقبل selector */

/* ✅ صحيح: استخدم :nth-of-type أو :has() */
li:nth-of-type(2) { color: red; }
/* العنصر الثاني من نوع li */`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 9: أفضل الممارسات ===== */}
        <LessonSection title="أفضل الممارسات">

          <h3 className="text-xl font-bold mb-3">1. استخدم @layer لتنظيم التنافسية</h3>
          <CodeBlock
            code={`/* قم بتعريف الطبقات في بداية الملف */
@layer reset, base, components, utilities;

@layer reset {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }
}

@layer base {
  body {
    font-family: system-ui, sans-serif;
    line-height: 1.6;
  }
}

@layer components {
  .card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
  }
}

@layer utilities {
  .hidden { display: none; }
  .sr-only { position: absolute; clip: rect(0, 0, 0, 0); }
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">2. استخدم :where() لإعادة التعيين</h3>
          <CodeBlock
            code={`/* :where() = تنافسية صفر = سهل الكتابة فوقها */
:where(h1, h2, h3, h4, h5, h6) {
  line-height: 1.2;
  font-weight: 700;
}

:where(ul, ol) {
  list-style: none;
}

:where(a) {
  text-decoration: none;
  color: inherit;
}

/* الآن يمكنك بسهولة تجاوز هذه القواعد */`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">3. اكتب Nesting بشكل مسطح قدر الإمكان</h3>
          <CodeBlock
            code={`/* ✅ أفضل الممارسات لـ Nesting */
.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;

  /* أبناء مباشرون */
  & h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  & p {
    color: var(--gray-600);
  }

  /* الأحداث - level واحد */
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:has(img) {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">4. اختر :is() أو :where() بوعي</h3>
          <CodeBlock
            code={`/* استخدم :is() عندما تحتاج تنافسية */
:is(h1, h2, h3) {
  color: var(--heading-color);
  /* تنافسية عالية = يتفوق */

  /* Nesting داخل :is() */
  & a {
    color: inherit;
  }
}

/* استخدم :where() عندما لا تحتاج تنافسية */
:where(.card, .modal, .dropdown) {
  background: white;
  border-radius: 8px;
  /* تنافسية صفر = سهل الكتابة فوقها */}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">5. استخدم :has() لتحسين تجربة المستخدم</h3>
          <CodeBlock
            code={`/* ✅ أمثلة عملية على :has() */

/* نموذج فيه حقول مطلوبة */
form:has(:invalid) .btn-submit {
  opacity: 0.5;
  pointer-events: none;
}

/* قائمة بها عناصر فارغة */
.list:has(.empty) {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

/* صفحة فيها محتوى مخفي */
.page:has(.sidebar.hidden) {
  grid-template-columns: 1fr;
}

/* حقل م focuses فيه المستخدم */
.form-group:has(input:focus) {
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">6. استخدم @scope لتضييق النطاق</h3>
          <CodeBlock
            code={`/* @scope يمنع تسرب الأنماط */
@scope (.card) to (.card-footer) {
  p {
    color: var(--gray-700);
  }

  /* هذه الأنماط فقط داخل النطاق */
  & h2 {
    color: var(--heading);
  }
}

/* النطاق الآمن: لا يؤثر على عناصر خارج المحدد */`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">7. تجنب استخدام !important مع :has()</h3>
          <CodeBlock
            code={`/* ❌ تجنب هذا */
.card:has(.featured) .title {
  color: red !important;
  /* !important + :has() = كارثة صيانة */}

/* ✅ أفضل: استخدم @layer أو تنافسية محددة */
@layer components {
  .card:has(.featured) .title {
    color: red;
  }
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Quiz 1: about :has() ===== */}
        <LessonSection title="اختبار سريع 1">
          <Quiz
            question="ما هي الاستخدام الصحيح لمحدد :has() في CSS؟"
            options={[
              "ليختار العناصر التي تحتوي على نص معين",
              "ليتنسيق العنصر الأب بناءً على محتواه أو أبنائه",
              "ليحذف عناصر من DOM",
              "لإضافة JavaScript event listeners",
            ]}
            correctAnswer={1}
            explanation="محدد :has() يُعرف بـ parent selector لأنه يسمح بتنسيق العنصر الأب بناءً على شروط تتعلق بأبنائه. مثلاً: .card:has(img) يُنسّق البطاقة التي تحتوي على صورة."
          />

          <div className="mt-8">
            <Quiz
              question="ما الفرق بين :is() و :where() في CSS؟"
              options={[
                ":is() أسرع أداءً من :where()",
                ":where() لها تنافسية (Specificity) صفراً بينما :is() تأخذ التنافسية الأعلى من محدداتها الداخلية",
                ":is() تعمل فقط مع Pseudo-classes",
                "لا يوجد فرق بينهما",
              ]}
              correctAnswer={1}
              explanation="الفرق الجوهري هو في التنافسية: :where() لها تنافسية صفر دائماً مما يجعلها ممتازة لإعادة التعيين (Reset) لأنك تستطيع بسهولة الكتابة فوقها. أما :is() فتأخذ التنافسية الأعلى من محدداتها الداخلية."
            />
          </div>
        </LessonSection>

        {/* ===== Quiz 2: about @layer ===== */}
        <LessonSection title="اختبار سريع 2">
          <Quiz
            question="في الكود التالي، أي قاعدة ستتفوق؟ @layer base { .card { color: red; } } @layer components { .card { color: blue; } }"
            options={[
              "color: red لأن base معرفة أولاً",
              "color: blue لأن components معرفة ثانياً في التسلسل الهرمي",
              "لا يمكن التنبؤ - يعتمد على المتصفح",
              "color: red لأن base تحتوي على تنافسية أعلى",
            ]}
            correctAnswer={1}
            explanation="في @layer، الترتيب يعتمد على مكان الإعلان. القاعدة المعرفة ثانياً (components) تتفوق على القاعدة المعرفة أولاً (base). هذا يشبه الترتيب من الأقل إلى الأعلى."
          />

          <div className="mt-8">
            <Quiz
              question="ما الهدف الرئيسي من استخدام @layer في CSS؟"
              options={[
                "تحسين أداء تحميل الصفحة",
                "إضافة حركات للعناصر",
                "التحكم في ترتيب التنافسية وتنظيم القواعد في طبقات",
                "إنشاء responsive design",
              ]}
              correctAnswer={2}
              explanation="@layer يُنشئ طبقات من القواعد CSS مع ترتيب تنافسية واضح. هذا يحل مشكلة صراع التنافسية بين المكتبات المختلفة ويجعل الكود أكثر تنظيمًا."
            />
          </div>
        </LessonSection>

        {/* ===== CheatSheet ===== */}
        <LessonSection title="ملخص مرجعي سريع">
          <CheatSheet title="ورقة غش: المحددات الحديثة + CSS Nesting">
            <div className="space-y-6">
              {/* Selectors Cheat Sheet */}
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "var(--primary)" }}>
                  المحددات الأساسية
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr style={{ borderBottom: "2px solid var(--border)" }}>
                        <th className="p-2 text-right">المحدد</th>
                        <th className="p-2 text-right">الصيغة</th>
                        <th className="p-2 text-right">الاستخدام</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-2 font-mono">Element</td>
                        <td className="p-2 font-mono">p {"{ }"}</td>
                        <td className="p-2">تحديد وسم محدد</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-2 font-mono">Class</td>
                        <td className="p-2 font-mono">.btn {"{ }"}</td>
                        <td className="p-2">تحديد بفئة</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-2 font-mono">ID</td>
                        <td className="p-2 font-mono">#header {"{ }"}</td>
                        <td className="p-2">تحديد بمعرّف فريد</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-2 font-mono">Attribute</td>
                        <td className="p-2 font-mono">[type="text"]</td>
                        <td className="p-2">تحديد حسب السمة</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-2 font-mono">Attribute Contains</td>
                        <td className="p-2 font-mono">[class*="btn"]</td>
                        <td className="p-2">قيمة تحتوي نص</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-2 font-mono">Attribute Starts</td>
                        <td className="p-2 font-mono">[href^="https"]</td>
                        <td className="p-2">تبدأ بقيمة</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono">Attribute Ends</td>
                        <td className="p-2 font-mono">[href$=".pdf"]</td>
                        <td className="p-2">تنتهي بقيمة</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Combinators */}
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "var(--primary)" }}>
                  الـ Combinators
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr style={{ borderBottom: "2px solid var(--border)" }}>
                        <th className="p-2 text-right">المؤلفة</th>
                        <th className="p-2 text-right">الصيغة</th>
                        <th className="p-2 text-right">المعنى</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-2 font-mono">Child {'>'}</td>
                        <td className="p-2 font-mono">.nav {'>'} li</td>
                        <td className="p-2">ابن مباشر</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-2 font-mono">Descendant (مسافة)</td>
                        <td className="p-2 font-mono">.nav a</td>
                        <td className="p-2">أي نسل (كل الأبناء)</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-2 font-mono">Adjacent +</td>
                        <td className="p-2 font-mono">h2 + p</td>
                        <td className="p-2">الibling المجاور التالي</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono">General ~</td>
                        <td className="p-2 font-mono">h2 ~ p</td>
                        <td className="p-2">كل الإخوة التالية</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pseudo-classes */}
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "var(--primary)" }}>
                  Pseudo-classes
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg p-3" style={{ background: "var(--background)" }}>
                    <p className="font-bold mb-1">التفاعل</p>
                    <code className="text-sm block">:hover, :focus, :active</code>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: "var(--background)" }}>
                    <p className="font-bold mb-1">الأبناء</p>
                    <code className="text-sm block">:first-child, :last-child</code>
                    <code className="text-sm block">:nth-child(n), :nth-of-type(n)</code>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: "var(--background)" }}>
                    <p className="font-bold mb-1">الحالة</p>
                    <code className="text-sm block">:checked, :disabled, :empty</code>
                    <code className="text-sm block">:required, :optional</code>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: "var(--background)" }}>
                    <p className="font-bold mb-1">الاستثناء</p>
                    <code className="text-sm block">:not(selector)</code>
                    <code className="text-sm block">:has(selector) 🆕</code>
                  </div>
                </div>
              </div>

              {/* Pseudo-elements */}
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "var(--primary)" }}>
                  Pseudo-elements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg p-3" style={{ background: "var(--background)" }}>
                    <code className="text-sm block mb-1">::before, ::after</code>
                    <p className="text-xs">إنشاء عناصر وهمية (تحتاج content)</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: "var(--background)" }}>
                    <code className="text-sm block mb-1">::first-line, ::first-letter</code>
                    <p className="text-xs">تنسيق أول سطر أو حرف</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: "var(--background)" }}>
                    <code className="text-sm block mb-1">::placeholder</code>
                    <p className="text-xs">تنسيق نص الإرشاد في الحقول</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: "var(--background)" }}>
                    <code className="text-sm block mb-1">::marker</code>
                    <p className="text-xs">تنسيق نقطة القوائم المرتبة</p>
                  </div>
                </div>
              </div>

              {/* Modern Selectors */}
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "var(--primary)" }}>
                  المحددات الحديثة
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr style={{ borderBottom: "2px solid var(--border)" }}>
                        <th className="p-2 text-right">المحدد</th>
                        <th className="p-2 text-right">الاستخدام</th>
                        <th className="p-2 text-right">التنافسية</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-2 font-mono">:has()</td>
                        <td className="p-2">تنسيق الأب بناءً على الابن</td>
                        <td className="p-2">تعتمد على المحددات الداخلية</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-2 font-mono">:is()</td>
                        <td className="p-2">تجميع محددات لتقليل التكرار</td>
                        <td className="p-2">أعلى تنافسية من المحددات الداخلية</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono">:where()</td>
                        <td className="p-2">مطابقة مع تنافسية صفراً</td>
                        <td className="p-2">صفر دائماً ✨</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CSS Nesting */}
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "var(--primary)" }}>
                  CSS Nesting (التداخل الأصلي)
                </h4>
                <div className="overflow-x-auto rounded-lg p-4" style={{ background: "var(--background)" }}>
                  <pre className="font-mono text-sm leading-relaxed" dir="ltr">
{`.parent {
  /* خصائص الأب */

  & .child {        /* النسل */
    color: red;
  }

  &:hover {         /*seudo-class */
    background: gray;
  }

  &::before {       /* Pseudo-element */
    content: "";
  }

  &.active {        /* فئة إضافية */
    color: blue;
  }

  @media (max-width: 768px) {  /* media query */
    font-size: 14px;
  }
}`}
                  </pre>
                </div>
              </div>

              {/* @layer */}
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "var(--primary)" }}>
                  @layer (طبقات التدريع)
                </h4>
                <div className="overflow-x-auto rounded-lg p-4" style={{ background: "var(--background)" }}>
                  <pre className="font-mono text-sm leading-relaxed" dir="ltr">
{`/* 1. تعريف ترتيب الطبقات */
@layer reset, base, components, utilities;

/* 2. تعريف كل طبقة */
@layer reset {
  * { margin: 0; }
}

@layer base {
  body { font-family: system-ui; }
}

@layer components {
  .card { padding: 1rem; }
}

@layer utilities {
  .hidden { display: none; }
}

/* القواعد خارج @layer = أعلى تنافسية */`}
                  </pre>
                </div>
              </div>
            </div>
          </CheatSheet>
        </LessonSection>

        {/* ===== Challenge ===== */}
        <LessonSection title="تحدي العملية">
          <Challenge
            title="نظام نماذج تدريجي"
            description="أنشئ نموذج تواصل احترافي يستخدم المحددات الحديثة:"
          >
            <div className="space-y-3 text-sm" style={{ color: "var(--foreground)" }}>
              <p><strong>المتطلبات:</strong></p>
              <ul className="space-y-2 list-disc list-inside">
                <li>استخدم <code>:has()</code> لتغيير لون حدود النموذج عندما يكون فيه حقل غير صالح</li>
                <li>استخدم <code>:is()</code> لتنسيق جميع حقول الإدخال (text, email, tel) بأسلوب واحد</li>
                <li>استخدم <code>:where()</code> لإعادة تعيين تنسيقات النماذج الأساسية (margin, padding)</li>
                <li>استخدم CSS Nesting لتنظيم الكود بدلاً من تكرار أسماء الفئات</li>
                <li>استخدم <code>::placeholder</code> لتنسيق نص الإرشاد في جميع الحقول</li>
                <li>استخدم Pseudo-elements مثل <code>::before</code> لعرض علامة <code>{"*"}</code> بجانب الحقول المطلوبة</li>
                <li>استخدم <code>:not(:placeholder-shown)</code> لإخفاء علامة النجمة عندما يبدأ المستخدم الكتابة</li>
              </ul>
              <ChallengeCode />
            </div>
          </Challenge>
        </LessonSection>

        {/* ===== ملخص (Summary) ===== */}
        <LessonSection title="ملخص">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <p><code>:has()</code> هو Parent Selector - يُنسّق الأب بناءً على أبنائه لأول مرة في CSS.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <p><code>:is()</code> تُجمّع المحددات وتقلل التكرار، وتأخذ التنافسية الأعلى من محدداتها الداخلية.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <p><code>:where()</code> مثل <code>:is()</code> لكن بتنافسية صفراً - ممتازة لإعادة التعيين.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <p>CSS Nesting يُنظّم الكود باستخدام <code>&</code> للإشارة للمحدد الأصل - لا حاجة لـ Sass!</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
              <p><code>@layer</code> يتحكم في ترتيب التنافسية بين الطبقات المختلفة من القواعد.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
              <p><code>@scope</code> يضيّق نطاق القواعد CSS لمنع تسرب التنسيق إلى عناصر غير مرتبطة.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">7</span>
              <p>المحددات الحديثة + Nesting تجعل CSS أكثر قوة وتنظيماً من أي وقت مضى!</p>
            </div>
          </div>
        </LessonSection>

        {/* ===== Navigation ===== */}
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

function ChallengeCode() {
  return (
    <CodeBlock
      code={`<!-- بنية HTML للتحدي -->
<form class="contact-form">
  <div class="form-group">
    <label for="name">الاسم الكامل *</label>
    <input type="text" id="name" placeholder="أدخل اسمك" required>
  </div>

  <div class="form-group">
    <label for="email">البريد الإلكتروني *</label>
    <input type="email" id="email" placeholder="example@email.com" required>
  </div>

  <div class="form-group">
    <label for="phone">رقم الهاتف</label>
    <input type="tel" id="phone" placeholder="+966 5XX XXX XXXX">
  </div>

  <div class="form-group">
    <label for="message">الرسالة *</label>
    <textarea id="message" placeholder="اكتب رسالتك هنا..." required></textarea>
  </div>

  <button type="submit" class="submit-btn">إرسال</button>
</form>`}
      language="html"
    />
  );
}