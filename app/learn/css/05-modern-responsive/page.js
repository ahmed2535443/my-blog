import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const lesson = getLessonBySlug("css", "05-modern-responsive");

export default function ModernResponsive() {
  return (
    <div>
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      {/* ======================================== */}
      {/* Section 1: ما هو */}
      {/* ======================================== */}
      <LessonSection id="what-is" title="ما هو التصميم المتجاوب الحديث؟">
        <p>
          التصميم المتجاوب الحديث (Modern Responsive Design) هو مجموعة من تقنيات
          CSS المتطورة التي تتيح لك بناء مواقع تتكيف تلقائيًا مع أحجام الشاشات
          والأجهزة المختلفة — لكن بطريقة أكثر ذكاءً وamento من الطريقة التقليدية.
        </p>
        <p>
          في الماضي، كنا نعتمد حصريًا على{" "}
          <strong>Media Queries</strong> لمعرفة عرض الشاشة وتعديل التصميم
          بناءً عليه. لكن مع تطور الويب، أصبحت هناك أدوات أقوى وأكثر مرونة:
        </p>

        <CodeBlock language="text" code={`التصميم المتجاوب الحديث = تقنيات متعددة:

1. Media Queries (المحطات الوسائية) — الكلاسيكية لكنها مطورة
2. Container Queries (استعلامات الحاوية) — الثورة الحقيقية!
3. clamp() — حجم خط ومسافات سائلة بدون Media Queries
4. min() و max() — دوال حسابية ذكية
5. Logical Properties (الخصائص المنطقية) — دعم كامل لـ RTL
6. @supports — التحقق من ميزات المتصفح
7. Aspect Ratio — تحديد نسبة العرض إلى الارتفاع
8. استراتيجية نقاط التوقف المبنية على المحتوى`} />

        <p>
          الفكرة الأساسية هي أن التصميم المتجاوب الحديث لا يعتمد فقط على{" "}
          <em>"ما هو حجم الشاشة؟"</em> بل على{" "}
          <em>"ما هو السياق الذي يعرض فيه المحتوى؟"</em> — وهذا الفرق
          يغير كل شيء.
        </p>
      </LessonSection>

      {/* ======================================== */}
      {/* Section 2: لماذا نستخدمه */}
      {/* ======================================== */}
      <LessonSection id="why-use" title="لماذا نستخدمه؟">
        <p>
          التصميم المتجاوب الحديث ليس مجرد "أداة إضافية" — بل هو{" "}
          <strong>ضرورة حتمية</strong> في عالم الويب الحديث. إليك الأسباب:
        </p>

        <h3>1. تنوع الأجهزة بشكل مجنون</h3>
        <p>
          اليوم يتصفح المستخدمون موقعك من هواتف ذكية، وأجهزة لوحيّة، وأجهزة
          كمبيوتر مكتبية، وأجهزة كمبيوتر محمولة، وحتى شاشات تلفزيونية ذكية!
          كل جهاز له حجم شاشة مختلف.
        </p>

        <h3>2. مشكلة Media Queries الكلاسيكية</h3>
        <p>
          مع Media Queries، أنت تستخدم عرض الشاشة كمرجع. لكن ماذا يحدث عندما
          يكون المحتوى داخل حاوية (مثل Sidebar) على شاشة عريضة؟ Media Query لا
          يعرف أن الحاوية صغيرة!
        </p>

        <CodeBlock language="text" code={`المشكلة:

┌──────────────────────────────────────┐
│         شاشة واسعة (1200px)         │
│                                      │
│  ┌─────────┐  ┌──────────────────┐  │
│  │ Sidebar  │  │   المحتوى الرئيسي │  │
│  │ (300px)  │  │                  │  │
│  │          │  │                  │  │
│  │ المحتوى  │  │                  │  │
│  │ هنا صغير │  │                  │  │
│  │ لكن Media│  │                  │  │
│  │ Query    │  │                  │  │
│  │ يقول     │  │                  │  │
│  │ "شاشة   │  │                  │  │
│  │ واسعة!"  │  │                  │  │
│  └─────────┘  └──────────────────┘  │
└──────────────────────────────────────┘

Media Query يرى عرض 1200px → يطبق أنماط الشاشة الكبيرة
لكن Sidebar يحتاج أنماط الشاشة الصغيرة! 💥`} />

        <h3>3. الأداء الأفضل</h3>
        <p>
          Container Queries و <code>clamp()</code> يعملان في مستوى CSS
          مباشرة بدون الحاجة إلى JavaScript أو حسابات معقدة — مما يعني أداء
          أسرع وأكثر كفاءة.
        </p>

        <h3>4. دعم اللغة العربية (RTL)</h3>
        <p>
          الخصائص المنطقية (Logical Properties) تحل مشكلة{" "}
          <code>margin-left</code> و <code>margin-right</code> التي لا تعمل
          بشكل صحيح في التصميم من اليمين إلى اليسار.
        </p>
      </LessonSection>

      {/* ======================================== */}
      {/* Section 3: المشكلة التي يحلها */}
      {/* ======================================== */}
      <LessonSection id="problem" title="المشكلة التي يحلها">
        <p>
          لنأخذ مثالاً عملياً. تخيل أن لديك مكون بطاقة (Card Component) تستخدمه
          في أماكن مختلفة:
        </p>

        <CodeBlock language="text" code={`المكان 1: داخل الصفحة الرئيسية (شاشة كاملة)
┌─────────────────────────────────────┐
│  ┌─────────────────────────────────┐│
│  │  🖼️ صورة كبيرة                  ││
│  │                                 ││
│  │  عنوان البطاقة                   ││
│  │  وصف طويل للبطاقة هنا...        ││
│  │  [زر قراءة المزيد]              ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘

المكان 2: داخل Sidebar (عرض ضيق)
┌────────────┬────────────────────────┐
│            │                        │
│  ┌──────┐ │  المحتوى الرئيسي       │
│  │ 🖼️   │ │                        │
│  │ صورة │ │                        │
│  │ صغيرة│ │                        │
│  ├──────┤ │                        │
│  │ عنوان│ │                        │
│  │ [اقرأ]│ │                        │
│  └──────┘ │                        │
│            │                        │
└────────────┴────────────────────────┘

المشكلة: كيف تجعل المكون يتكيف تلقائيًا
حسب الحاوية التي يقع فيها، وليس حسب الشاشة؟

Media Queries → لا تستطيع حل هذا لأنها ترى عرض الشاشة فقط!
Container Queries → تحل هذه المشكلة ببراعة! ✅`} />

        <h3>مشكلة الخط الثابت</h3>
        <p>
          بدون <code>clamp()</code>، نحتاج إلى كتابة مئات الأسطر في Media
          Queries لتغيير حجم الخط على كل حجم شاشة:
        </p>

        <CodeBlock language="css" code={`/* الطريقة القديمة - كثيرة ومملة! */
body { font-size: 14px; }

@media (min-width: 480px) {
  body { font-size: 15px; }
}

@media (min-width: 768px) {
  body { font-size: 16px; }
}

@media (min-width: 1024px) {
  body { font-size: 17px; }
}

@media (min-width: 1200px) {
  body { font-size: 18px; }
}

/* 5 قواعد فقط لحجم خط واحد! 😤 */`} />

        <h3>مشكلة الاتجاه (LTR / RTL)</h3>
        <p>
          في تصميمات الويب العربية، نحتاج إلى{" "}
          <code>margin-right</code> للهامش الأيمن في LTR و{" "}
          <code>margin-left</code> في RTL. هذا يعني كتابة قواعد مزدوجة لكل
          عنصر:
        </p>

        <CodeBlock language="css" code={`/* الطريقة القديمة - مزدوجة ومؤلمة! */
[dir="ltr"] .sidebar { margin-right: 20px; }
[dir="rtl"] .sidebar { margin-left: 20px; }

/* الطريقة الحديثة - سهلة وواضحة! */
.sidebar { margin-inline-end: 20px; }`} />
      </LessonSection>

      {/* ======================================== */}
      {/* Section 4: شرح بسيط */}
      {/* ======================================== */}
      <LessonSection id="simple-explanation" title="شرح بسيط">
        <p>
          دعنا نشرح كل تقنية بطريقة مبسطة قبل أن ندخل في التفاصيل البرمجية:
        </p>

        <h3>1. Media Queries — "أنت في أي جهاز؟"</h3>
        <p>
          مثل شخص يسألك: "هل أنت على هاتف أم كمبيوتر؟" ثم يغير التصميم
          بناءً على الإجابة. سهلة لكنها{" "}
          <strong>محدودة</strong> لأنها لا تعرف السياق الداخلي.
        </p>

        <h3>2. Container Queries — "أنت في أي مكان داخل الصفحة؟"</h3>
        <p>
          مثل شخص يسألك: "أنت داخل جدول ضيق أم داخل منطقة واسعة؟" ثم يغير
          تصميمك بناءً على حجم المكان الذي أنت فيه. <strong>هذه هي الثورة!</strong>
        </p>

        <h3>3. clamp() — "أعطيني حجمًا مرنًا"</h3>
        <p>
          مثل شخص يقول: "أريد خطًا بحجم 16 بكسل كحد أدنى، و32 بكسل كحد
          أقصى، لكن في الوسط استخدم 2.5% من عرض الشاشة". الحجم يتغير بسلاسة
          بدون قفزات!
        </p>

        <h3>4. Logical Properties — "افهم الاتجاه من السياق"</h3>
        <p>
          مثل شخص لا ي固定的方向 (يمين أو يسار) بل يقول: "ضع الهامش في{" "}
          <em>بداية</em> السطر" — وهذا يعني يمين في LTR ويسار في RTL تلقائيًا!
        </p>

        <h3>5. Aspect Ratio — "حافظ على النسبة"</h3>
        <p>
          مثل شخص يقول: "هذه الصورة يجب أن تحافظ دائمًا على نسبة 16:9 مهما
          تغير حجمها" — بدون الحاجة إلى حيل CSS القديمة مع <code>padding-top</code>.
        </p>
      </LessonSection>

      {/* ======================================== */}
      {/* Section 5: مثال بسيط */}
      {/* ======================================== */}
      <LessonSection id="simple-example" title="مثال بسيط">
        <p>لنبدأ ببعض الأمثلة البسيطة لكل تقنية:</p>

        <h3>1. Media Queries — الصيغة الحديثة</h3>
        <CodeBlock language="css" code={`/* ❌ الطريقة القديمة */
@media (min-width: 768px) and (max-width: 1024px) {
  .container { max-width: 720px; }
}

/* ✅ الطريقة الحديثة - أنظف وأوضح */
@media (width >= 768px) and (width <= 1024px) {
  .container { max-width: 720px; }
}

/* ✅ استخدام الاتجاه الحديث فقط */
@media (width > 768px) {
  .sidebar { display: block; }
}`} />

        <h3>2. Container Queries — الأساسيات</h3>
        <CodeBlock language="css" code={`/* الخطوة 1: تحديد الحاوية */
.card-wrapper {
  container-type: inline-size;  /* تتبّع العرض فقط */
  container-name: card;         /* اسم اختياري */
}

/* الخطوة 2: استعلام بناءً على الحاوية */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}

@container card (max-width: 399px) {
  .card {
    display: flex;
    flex-direction: column;
  }
}`} />

        <h3>3. clamp() — الخط السائل</h3>
        <CodeBlock language="css" code={`/* clamp(الحد الأدنى, القيمة المفضلة, الحد الأقصى) */

/* حجم خط سائل: لا يقل عن 16px ولا يزيد عن 48px */
h1 {
  font-size: clamp(16px, 4vw, 48px);
}

/* مسافة سائلة */
section {
  padding: clamp(1rem, 5vw, 4rem);
}

/* عرض حاوية سائل */
.container {
  width: clamp(300px, 80%, 1200px);
}`} />

        <h3>4. min() و max() — الدوال الحسابية</h3>
        <CodeBlock language="css" code={`/* min() يأخذ القيمة الأصغر */
.container {
  width: min(80%, 800px);  /* الأصغر من 80% و 800px */
}

/* max() يأخذ القيمة الأكبر */
.sidebar {
  width: max(250px, 20%);  /* الأكبر من 250px و 20% */
}

/* دمج min/max مع clamp() */
.text {
  /* هذا مكافئ لـ clamp(1rem, 3vw, 2rem) */
  font-size: max(1rem, min(3vw, 2rem));
}`} />

        <h3>5. Logical Properties</h3>
        <CodeBlock language="css" code={`/* الخصائص الفيزيائية (القديمة) */
.box {
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-left: 3px solid blue;
  text-align: left;
  width: 100px;
  height: 200px;
}

/* الخصائص المنطقية (الحديثة) */
.box {
  margin-inline: 20px;        /* يمين + يسار في LTR */
  padding-block: 10px;        /* أعلى + أسفل */
  border-inline-start: 3px solid blue;  /* بداية السطر */
  text-align: start;          /* بداية النص */
  inline-size: 100px;         /* عرض في اتجاه النص */
  block-size: 200px;          /* ارتفاع في اتجاه الكتلة */
}`} />

        <h3>6. Aspect Ratio</h3>
        <CodeBlock language="css" code={`/* ❌ الطريقة القديمة (HACK) */
.video-wrapper {
  position: relative;
  padding-top: 56.25%;  /* 9/16 = 0.5625 */
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* ✅ الطريقة الحديثة */
.video-wrapper {
  aspect-ratio: 16 / 9;
}

/* مربع مثالي */
.avatar {
  aspect-ratio: 1 / 1;
  border-radius: 50%;
}`} />
      </LessonSection>

      {/* ======================================== */}
      {/* Section 6: مثال عملي */}
      {/* ======================================== */}
      <LessonSection id="practical-example" title="مثال عملي">
        <p>
          لنبناء مثال عملي يجمع كل التقنيات معًا — مكون بطاقة تعليمية
          يستخدم Container Queries و Logical Properties و clamp():
        </p>

        <h3>الهيكل (HTML)</h3>
        <CodeBlock language="html" code={`<div class="page-layout">
  <aside class="sidebar">
    <div class="course-card-wrapper">
      <article class="course-card">
        <div class="card-image">
          <img src="/css-course.jpg" alt="دورة CSS" />
          <span class="badge">جديد</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">التصميم المتجاوب الحديث</h3>
          <p class="card-description">
            تعلم أحدث تقنيات CSS لإنشاء تصاميم تتكيف بذكاء
          </p>
          <div class="card-meta">
            <span class="lessons">12 درس</span>
            <span class="duration">4 ساعات</span>
          </div>
          <button class="card-button">ابدأ التعلم</button>
        </div>
      </article>
    </div>
  </aside>

  <main class="main-content">
    <div class="course-card-wrapper">
      <!-- نفس المكون هنا - لكنه سيبدو مختلفاً! -->
      <article class="course-card">
        <!-- ... نفس المحتوى ... -->
      </article>
    </div>
  </main>
</div>`} />

        <h3>التنسيق (CSS) — باستخدام كل التقنيات الحديثة</h3>
        <CodeBlock language="css" code={`/* ========================================
   المتغيرات والأساسيات
   ======================================== */
:root {
  /* فاصل الخط السائل بدل breakpoint ثابت */
  --space-xs: clamp(0.25rem, 0.5vw, 0.5rem);
  --space-sm: clamp(0.5rem, 1vw, 1rem);
  --space-md: clamp(1rem, 2vw, 2rem);
  --space-lg: clamp(1.5rem, 3vw, 3rem);
  --space-xl: clamp(2rem, 5vw, 4rem);

  /* أحجام الخط السائلة */
  --font-xs: clamp(0.75rem, 1.2vw, 0.875rem);
  --font-sm: clamp(0.875rem, 1.5vw, 1rem);
  --font-base: clamp(1rem, 1.8vw, 1.125rem);
  --font-lg: clamp(1.125rem, 2vw, 1.25rem);
  --font-xl: clamp(1.25rem, 2.5vw, 1.5rem);
  --font-2xl: clamp(1.5rem, 3vw, 2rem);
  --font-3xl: clamp(2rem, 4vw, 3rem);

  /* الألوان */
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-surface: #ffffff;
  --color-surface-soft: #f8fafc;
  --color-text: #1e293b;
  --color-text-muted: #64748b;
  --color-border: #e2e8f0;
  --color-badge: #10b981;
}

/* ========================================
   التنسيق العام — Logical Properties
   ======================================== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Noto Sans Arabic", sans-serif;
  font-size: var(--font-base);
  color: var(--color-text);
  line-height: 1.7;
}

/* ========================================
   تخطيط الصفحة — استخدام inline-size و block-size
   ======================================== */
.page-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  padding: var(--space-md);
  max-width: 1400px;
  margin-inline: auto;
  inline-size: 100%;
}

/* نقطة توقف مبنية على المحتوى، لا على الشاشة */
@media (min-width: 900px) {
  .page-layout {
    grid-template-columns: 300px 1fr;
  }
}

/* ========================================
   الشريط الجانبي
   ======================================== */
.sidebar {
  padding-block: var(--space-sm);
  padding-inline: var(--space-sm);
}

/* ========================================
   المكون الرئيسي: البطاقة التعليمية
   ======================================== */

/* 1. تحديد الحاوية */
.course-card-wrapper {
  container-type: inline-size;
  container-name: course-card;
  padding: var(--space-sm);
}

/* 2. الاستعلام بناءً على الحاوية */
.course-card {
  background: var(--color-surface);
  border-radius: clamp(8px, 1vw, 16px);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: box-shadow 0.3s ease;

  /* الحالة الافتراضية: عمودي (حاوية صغيرة) */
  display: flex;
  flex-direction: column;
}

.course-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* الحاوية الكبيرة: أفقي */
@container course-card (min-width: 500px) {
  .course-card {
    flex-direction: row;
    align-items: stretch;
  }
}

/* الحاوية المتوسطة: عمودي مع تحسينات */
@container course-card (min-width: 350px) and (max-width: 499px) {
  .card-body {
    padding: var(--space-md);
  }
}

/* ========================================
   صورة البطاقة
   ======================================== */
.card-image {
  position: relative;
  overflow: hidden;
}

.card-image img {
  block-size: 100%;
  inline-size: 100%;
  object-fit: cover;

  /* نسبة ثابتة للصورة في الحالة العمودية */
  aspect-ratio: 16 / 9;
}

/* في الحاوية الكبيرة: الصورة بجانب المحتوى */
@container course-card (min-width: 500px) {
  .card-image {
    inline-size: 280px;
    flex-shrink: 0;
  }

  .card-image img {
    aspect-ratio: unset;
  }
}

.badge {
  position: absolute;
  inset-block-start: var(--space-sm);
  inset-inline-end: var(--space-sm);
  background: var(--color-badge);
  color: white;
  padding-block: var(--xs);
  padding-inline: var(--space-sm);
  border-radius: 999px;
  font-size: var(--font-xs);
  font-weight: 600;
}

/* ========================================
   محتوى البطاقة
   ======================================== */
.card-body {
  padding: var(--space-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  flex: 1;
}

.card-title {
  font-size: var(--font-xl);
  font-weight: 700;
  line-height: 1.3;
}

.card-description {
  font-size: var(--font-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}

.card-meta {
  display: flex;
  gap: var(--space-md);
  font-size: var(--font-xs);
  color: var(--color-text-muted);
  margin-block-start: auto;
  padding-block-start: var(--space-sm);
  border-block-start: 1px solid var(--color-border);
}

.card-button {
  background: var(--color-primary);
  color: white;
  border: none;
  padding-block: var(--space-sm);
  padding-inline: var(--space-md);
  border-radius: 8px;
  font-size: var(--font-base);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-block-start: var(--space-xs);

  /* Logical property for RTL support */
  text-align: center;
}

.card-button:hover {
  background: var(--color-primary-hover);
}`} />

        <h3>نتيجة التصميم</h3>
        <CodeBlock language="text" code={`النتيجة النهائية:

في الشريط الجانبي (حاوية صغيرة ~280px):
┌────────────────┐
│ ┌────────────┐ │
│ │   🖼️ صورة   │ │
│ │  16:9      │ │
│ ├────────────┤ │
│ │ عنوان الدرس│ │
│ │ وصف قصير  │ │
│ │ 12 درس    │ │
│ │ [ابدأ]     │ │
│ └────────────┘ │
└────────────────┘

في المحتوى الرئيسي (حاوية كبيرة ~700px):
┌──────────────────────────────────────┐
│ ┌───────────┐ ┌────────────────────┐│
│ │           │ │  عنوان الدرس       ││
│ │   🖼️ صورة  │ │  وصف أطول يمكن    ││
│ │   280px   │ │  أن يتسع هنا...    ││
│ │           │ │                    ││
│ │           │ │  12 درس │ 4 ساعات  ││
│ │           │ │ ────────────────── ││
│ │           │ │  [ابدأ التعلم]     ││
│ └───────────┘ └────────────────────┘│
└──────────────────────────────────────┘

نفس الكود! نفس المكون! لكن يبدو مختلفاً
حسب الحاوية وليس حسب الشاشة! 🎉`} />
      </LessonSection>

      {/* ======================================== */}
      {/* Section 7: ماذا يحدث خلف الكواليس */}
      {/* ======================================== */}
      <LessonSection id="behind-the-scenes" title="ماذا يحدث خلف الكواليس">
        <p>
          دعنا نفهم كيف تعمل هذه التقنيات على مستوى المتصفح:
        </p>

        <h3>كيف تعمل Container Queries؟</h3>
        <CodeBlock language="text" code={`خلف الكواليس:

1. المتصفح يجد عنصرًا عليه container-type
2. يُنشئ "حاوية سياق" (containment context)
3. يبدأ بتتبع أبعاد الحاوية (inline-size / block-size)
4. عند كل تغيير في الحاوية، يتحقق من @container
5. إذا تطابق الشرط → يطبق القواعد الجديدة

ملاحظة مهمة:
container-type: inline-size  → يتتبع العرض فقط
container-type: size          → يتتبع العرض والارتفاع

⚠️ تحذير: استخدام size قد يسبب مشكلة
   "循环依赖" (circular dependency) لأن الحاوية
   تعتمد على محتوياتها والمحتويات تعتمد عليها!

✅ الأفضل دائماً: استخدم inline-size فقط`} />

        <h3>كيف تعمل clamp()؟</h3>
        <CodeBlock language="text" code={`الصيغة: clamp(الحد الأدنى، القيمة المفضلة، الحد الأقصى)

المعادلة الحسابية:

القيمة = max(الحد الأدنى، min(القيمة المفضلة، الحد الأقصى))

مثال: clamp(1rem, 3vw, 2rem) على شاشة 1000px:

1. احسب القيمة المفضلة: 3vw = 3% من 1000px = 30px
2. قارن مع الحد الأقصى: min(30px, 2rem) = min(30px, 32px) = 30px
3. قارن مع الحد الأدنى: max(1rem, 30px) = max(16px, 30px) = 30px
4. النتيجة: 30px ✅

على شاشة 500px:
1. 3vw = 15px
2. min(15px, 32px) = 15px
3. max(16px, 15px) = 16px (الحد الأدنى!)
4. النتيجة: 16px ✅

على شاشة 2000px:
1. 3vw = 60px
2. min(60px, 32px) = 32px (الحد الأقصى!)
3. max(16px, 32px) = 32px
4. النتيجة: 32px ✅`} />

        <h3>كيف تعمل Logical Properties؟</h3>
        <CodeBlock language="text" code={`المتصفح يفهم اتجاه الكتابة (writing-mode):

LTR (من اليسار لليمين):
  inline-start = يسار (left)
  inline-end   = يمين (right)
  block-start  = أعلى (top)
  block-end    = أسفل (bottom)

RTL (من اليمين لليسار):
  inline-start = يمين (right)    ← عكس LTR!
  inline-end   = يسار (left)     ← عكس LTR!
  block-start  = أعلى (top)      ← نفس LTR
  block-end    = أسفل (bottom)   ← نفس LTR

التخطيط (Layout):
  inline-size = عرض (width)  — في اتجاه النص
  block-size  = ارتفاع (height) — عمودي على اتجاه النص

الهامش والحشو:
  margin-inline = margin-left + margin-right (تلقائي)
  margin-block  = margin-top + margin-bottom (تلقائي)
  padding-inline-start = الهامش الداخلي في بداية السطر`} />

        <h3>كيف يعمل @supports؟</h3>
        <CodeBlock language="css" code={`/* التحقق قبل التطبيق — ترقي تدريجي */
@supports (container-type: inline-size) {
  /* المتصفح يدعم Container Queries */
  .card-wrapper {
    container-type: inline-size;
  }
}

/* التحقق مع否定 */
@supports not (container-type: inline-size) {
  /* المتصفح لا يدعم Container Queries
     → نستخدم Media Query كبديل */
  .card-wrapper {
    /* خطط بديلة */
  }
}

/* التحقق من عدة ميزات */
@supports (container-type: inline-size) and
          (aspect-ratio: 16 / 9) {
  /* يدعم كلتا الميزتين */
}`} />
      </LessonSection>

      {/* ======================================== */}
      {/* Section 8: الأخطاء الشائعة */}
      {/* ======================================== */}
      <LessonSection id="common-mistakes" title="الأخطاء الشائعة">
        <p>
          إليك أكثر الأخطاء شيوعاً عند استخدام التصميم المتجاوب الحديث وكيف
          تتجنبها:
        </p>

        <h3>خطأ 1: استخدام container-type: size بدلاً من inline-size</h3>
        <CodeBlock language="css" code={`/* ❌ خطأ شائع */
.card-wrapper {
  container-type: size;
  /* قد يسبب circular dependency! */
  /* الحاوية تنتظر المحتوى والمحتوى ينتظر الحاوية */
}

/* ✅ الصحيح */
.card-wrapper {
  container-type: inline-size;
  /* تتبع العرض فقط — آمن وفعال */
}`} />

        <h3>خطأ 2: نسيان تحديد container-name</h3>
        <CodeBlock language="css" code={`/* ❌ بدون اسم — قد يستعلم من حاوية مختلفة */
.card-wrapper {
  container-type: inline-size;
}

@container (min-width: 500px) {
  /* هذا يستعلم من أقرب حاوية سياق!
     قد يكون حاوية غير متوقعة */
}

/* ✅ مع اسم — واضح ودقيق */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 500px) {
  /* هذا يستعلم تحديداً من .card-wrapper */
}`} />

        <h3>خطأ 3: استخدام clamp() بأرقام خاطئة</h3>
        <CodeBlock language="css" code={`/* ❌ الحد الأدنى أكبر من الحد الأقصى! */
.font {
  font-size: clamp(32px, 3vw, 16px);  /* لا معنى لها */
}

/* ❌ استخدام وحدات مختلفة بشكل غير منطقي */
.font {
  font-size: clamp(1rem, 3vw, 48px);  /* ممكن لكن غير واضح */
}

/* ✅ استخدام وحدات متسقة ومنطقية */
.font {
  font-size: clamp(1rem, 2.5vw, 2rem);  /* كلها rem مع vw */
}`} />

        <h3>خطأ 4: نسيان container-name في الاستعلام</h3>
        <CodeBlock language="css" code={`/* ❌ اسم مختلف — لن يعمل! */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container banner (min-width: 500px) {
  /* "banner" ≠ "card" → لن يتطابق! */
}

/* ✅ الاسم متطابق */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 500px) {
  /* "card" = "card" → يعمل! ✅ */
}`} />

        <h3>خطأ 5: استخدام الخصائص الفيزيائية في RTL</h3>
        <CodeBlock language="css" code={`/* ❌ لا يعمل بشكل صحيح في RTL */
.sidebar {
  margin-left: 20px;    /* في RTL هذا يمين! */
  padding-right: 10px;  /* في RTL هذا يسار! */
  text-align: left;     /* في RTL النص يمين! */
}

/* ✅ يعمل في RTL و LTR */
.sidebar {
  margin-inline-start: 20px;
  padding-inline-end: 10px;
  text-align: start;
}`} />

        <h3>خطأ 6: استخدام نقاط توقف تعتمد على أجهزة محددة</h3>
        <CodeBlock language="css" code={`/* ❌ نقاط توقف محددة بأجهزة */
@media (max-width: 375px) { ... }  /* iPhone SE */
@media (max-width: 414px) { ... }  /* iPhone Plus */
@media (max-width: 768px) { ... }  /* iPad */
@media (max-width: 1024px) { ... } /* iPad Pro */

/* هذه الأجهزة تتغير مع كل سنة! */

/* ✅ نقاط توقف مبنية على المحتوى */
@media (min-width: 600px) { ... }  /* when content needs it */
@media (min-width: 900px) { ... }  /* for layout changes */
@media (min-width: 1200px) { ... } /* for max-width */`} />

        <h3>خطأ 7: إنشاء حلقات لا نهائية</h3>
        <CodeBlock language="css" code={`/* ❌ circular dependency مع Container Queries */
.parent {
  container-type: inline-size;
}

@container (min-width: 500px) {
  .parent {
    /* يغير حجم الحاوية نفسها! */
    width: 600px;  /* ← حلقة لا نهائية! */
  }
}

/* ✅ استعلم من حاوية، غيّر محتوياتها فقط */
.parent {
  container-type: inline-size;
}

@container (min-width: 500px) {
  .child {
    /* غيّر المحتوى فقط، لا الحاوية! */
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}`} />
      </LessonSection>

      {/* ======================================== */}
      {/* Section 9: أفضل الممارسات */}
      {/* ======================================== */}
      <LessonSection id="best-practices" title="أفضل الممارسات">
        <p>
          إليك أفضل الممارسات التي يجب اتباعها عند استخدام تقنيات التصميم
          المتجاوب الحديث:
        </p>

        <h3>1. استخدم clamp() للمسافات والأحجام</h3>
        <CodeBlock language="css" code={`/* ✅ ممارسة ممتازة: متغيرات سائلة */
:root {
  --space-xs: clamp(0.25rem, 0.5vw, 0.5rem);
  --space-sm: clamp(0.5rem, 1vw, 1rem);
  --space-md: clamp(1rem, 2vw, 2rem);
  --space-lg: clamp(1.5rem, 3vw, 3rem);
  --space-xl: clamp(2rem, 5vw, 4rem);

  --font-sm: clamp(0.875rem, 1.5vw, 1rem);
  --font-base: clamp(1rem, 1.8vw, 1.125rem);
  --font-lg: clamp(1.125rem, 2vw, 1.25rem);
  --font-xl: clamp(1.25rem, 2.5vw, 1.5rem);
  --font-2xl: clamp(1.5rem, 3vw, 2rem);
  --font-3xl: clamp(2rem, 4vw, 3rem);
}

/* استخدام سهل ومتكرر */
h1 { font-size: var(--font-3xl); }
h2 { font-size: var(--font-2xl); }
h3 { font-size: var(--font-xl); }
p  { font-size: var(--font-base); }

section {
  padding-block: var(--space-lg);
  padding-inline: var(--space-md);
}`} />

        <h3>2. ابدأ بالmobile أولاً (Mobile First) مع Container Queries</h3>
        <CodeBlock language="css" code={`/* ✅ الحالة الافتراضية: تصميم للحاوية الصغيرة */
.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

/* أضف تعقيداً تدريجياً مع كبر الحاوية */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-md);
  }
}

@container (min-width: 700px) {
  .card {
    grid-template-columns: 200px 1fr auto;
  }
}`} />

        <h3>3. استخدم @supports للترقي التدريجي</h3>
        <CodeBlock language="css" code={`/* ✅ تأكد من دعم المتصفح قبل التطبيق */
@supports (container-type: inline-size) {
  .card-wrapper {
    container-type: inline-size;
    container-name: card;
  }

  @container card (min-width: 400px) {
    .card { display: grid; grid-template-columns: 1fr 1fr; }
  }
}

/* ✅ الخطة البديلة ل المتصفحات القديمة */
@supports not (container-type: inline-size) {
  @media (min-width: 600px) {
    .card { display: grid; grid-template-columns: 1fr 1fr; }
  }
}`} />

        <h3>4. اكتب Logical Properties دائماً</h3>
        <CodeBlock language="css" code={`/* ✅ القاعدة: لا تستخدم margin-left/right أبداً */

/* بدلاً من margin-left / margin-right */
margin-inline-start: 10px;
margin-inline-end: 10px;
margin-inline: 10px;  /* كلاهما */

/* بدلاً من margin-top / margin-bottom */
margin-block-start: 10px;
margin-block-end: 10px;
margin-block: 10px;   /* كلاهما */

/* نفس الشيء لـ padding و border */
padding-inline: 10px;
padding-block: 10px;
border-inline-start: 2px solid blue;
border-block-start: 2px solid blue;

/* بدلاً من width / height */
inline-size: 100px;
block-size: 200px;

/* بدلاً من top / right / bottom / left */
inset-block-start: 10px;   /* top */
inset-inline-end: 10px;    /* right in LTR */
inset-block-end: 10px;     /* bottom */
inset-inline-start: 10px;  /* left in LTR */
inset: 10px;               /* كلها */`} />

        <h3>5. استخدم نسبة العرض إلى الارتفاع</h3>
        <CodeBlock language="css" code={`/* ✅ بدلاً من الـ Hacks القديمة */
.video { aspect-ratio: 16 \/ 9; }
.square { aspect-ratio: 1 \/ 1; }
.portrait { aspect-ratio: 3 \/ 4; }
.wide-banner { aspect-ratio: 21 \/ 9; }

/* مع object-fit للصور */
.card-image {
  aspect-ratio: 16 \/ 9;
  overflow: hidden;
}

.card-image img {
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
}`} />

        <h3>6. استراتيجية نقاط التوقف الذكية</h3>
        <CodeBlock language="css" code={`/* ✅ نقاط توقف مبنية على المحتوى */
/*
  اسأل نفسك: "متى ي breaking المحتوى؟"

  - < 600px: المحتوى يحتاج عمود واحد
  - ≥ 600px: يمكن وضع عمودين جنباً إلى جنب
  - ≥ 900px: يمكن إضافة شريط جانبي
  - ≥ 1200px: يمكن توسيع المحتوى
*/

/* لا تسأل: "متى يكون هذا iPhone؟" ❌ */
/* اسأل: "متى ي breaking هذا التصميم؟" ✅ */`} />
      </LessonSection>

      {/* ======================================== */}
      {/* Section 10: ملخص */}
      {/* ======================================== */}
      <LessonSection id="summary" title="ملخص">
        <p>
          في هذا الدرس تعلمنا عن التصميم المتجاوب الحديث وأهم تقنياته. إليك
          ملخص سريع:
        </p>

        <CodeBlock language="text" code={`التصميم المتجاوب الحديث — ما تعلمناه:

✅ Media Queries — الصيغة الحديثة (width >= 768px)

✅ Container Queries — الثورة الحقيقية!
   → container-type: inline-size
   → @container name (condition) { ... }
   → يستعلم من الحاوية لا الشاشة

✅ clamp() — الخط السائل
   → clamp(حد أدنى، قيمة مفضلة، حد أقصى)
   → بدون Media Queries!

✅ min() و max() — دوال حسابية
   → min(80%, 800px) → الأصغر
   → max(250px, 20%) → الأكبر

✅ Logical Properties — دعم RTL
   → margin-inline-start بدلاً من margin-left
   → inline-size بدلاً من width
   → text-align: start بدلاً من left

✅ @supports — الترقي التدريجي
   → تحقق قبل التطبيق

✅ Aspect Ratio — نسبة العرض إلى الارتفاع
   → aspect-ratio: 16 / 9

✅ استراتيجية ذكية — نقاط توقف مبنية على المحتوى`} />

        <h3>الدورة القادمة</h3>
        <p>
          في الدرس القادم، سنتعمق في <strong>CSS Grid المتقدم</strong> — التخطيط
          الشبكي الذي يغير طريقة بناء صفحات الويب بالكامل!
        </p>
      </LessonSection>

      {/* ======================================== */}
      {/* Quiz 1: Container Queries vs Media Queries */}
      {/* ======================================== */}
      <Quiz
        question="ما هو الفرق الجوهري بين Media Queries و Container Queries؟"
        options={[
          "Media Queries أسرع من Container Queries",
          "Media Queries تستعلم من عرض الشاشة، Container Queries تستعلم من حجم الحاوية",
          "Container Queries تعمل فقط على الهواتف",
          "Media Queries لا تعمل مع RTL"
        ]}
        correctAnswer={1}
        explanation="Media Queries ترى عرض نافذة المتصفح (viewport)، بينما Container Queries ترى حجم الحاوية التي يقع فيها المكون. هذا يسمح للمكون بالتكيّف مع مكانه داخل الصفحة وليس فقط مع حجم الشاشة."
      />
      <Quiz
        question="أي من التالي يُنشئ حاوية سياق بشكل صحيح؟"
        options={[
          "container-type: both;",
          "container-type: size;",
          "container-type: inline-size;",
          "container-context: true;"
        ]}
        correctAnswer={2}
        explanation="container-type: inline-size ينشئ حاوية سياق تتتبع العرض فقط وهو الخيار الأفضل والأكثر أماناً. size يتبع العرض والارتفاع وقد يسبب circular dependency."
      />
      <Quiz
        question="لماذا ننصح باستخدام inline-size بدلاً من size في Container Queries؟"
        options={[
          "لأن size لا يدعمه جميع المتصفحات",
          "لأن inline-size أسرع في الأداء",
          "لأن size قد يسبب circular dependency بين الحاوية والمحتوى",
          "لأن inline-size يعمل مع RTL فقط"
        ]}
        correctAnswer={2}
        explanation="عند استخدام container-type: size، قد يدخل المتصفح في حلقة لا نهائية حيث يعتمد حجم الحاوية على محتوياتها والعكس. inline-size يتتبع العرض فقط وهو أكثر أماناً."
      />
      <Quiz
        question="كيف تكتب استعلام Container يتحقق من اسم محدد؟"
        options={[
          "@container.card (min-width: 400px) { ... }",
          "@container card (min-width: 400px) { ... }",
          "@container-name: card (min-width: 400px) { ... }",
          "@container (name: card, min-width: 400px) { ... }"
        ]}
        correctAnswer={1}
        explanation="الصيغة الصحيحة هي @container [اسم الحاوية] (الشرط) { ... }. الاسم يُحدد في container-name ويُستخدم مباشرة بعد @container."
      />
      <Quiz
        question="متى تستخدم Container Queries بدلاً من Media Queries؟"
        options={[
          "عندما تريد دعم المتصفحات القديمة",
          "عندما يكون المكون مستخدماً في أماكن مختلفة بحجوم مختلفة",
          "عندما تريد تحسين أداء الموقع",
          "عندما تعمل على تصميم لجهاز محدد"
        ]}
        correctAnswer={1}
        explanation="Container Queries مثالية عندما يكون لديك مكون (مثل بطاقة) يُستخدم في أماكن مختلفة (Sidebar، محتوى رئيسي، Modal) وتحتاج أن يتكيّف مع حجم كل مكان."
      />

      {/* ======================================== */}
      {/* Quiz 2: Logical Properties */}
      {/* ======================================== */}
      <Quiz
        question="ما هو المكافئ المنطقي لـ margin-left؟"
        options={[
          "margin-inline-end",
          "margin-inline-start",
          "margin-inline: left",
          "margin-left-inline"
        ]}
        correctAnswer={1}
        explanation={`margin-inline-start هو المكافئ المنطقي لـ margin-left في LTR و margin-right في RTL. "start" تعني بداية السطر وتتغير حسب اتجاه الكتابة.`}
      />
      <Quiz
        question="ما هو المكافئ المنطقي لـ width؟"
        options={[
          "inline-width",
          "logical-width",
          "inline-size",
          "text-width"
        ]}
        correctAnswer={2}
        explanation={`inline-size هو المكافئ المنطقي لـ width. "inline" يشير إلى اتجاه النص (أفقي في LTR/RTL)، و"size" يحل محل "width" في الخصائص المنطقية.`}
      />
      <Quiz
        question="ما الفرق بين margin-inline و margin-inline-start؟"
        options={[
          "margin-inline يضع هامشاً في كل جانب، margin-inline-start في جانب واحد فقط",
          "margin-inline يعمل في LTR فقط",
          "margin-inline-start يضع هامشاً في كل جانب",
          "لا يوجد فرق بينهما"
        ]}
        correctAnswer={0}
        explanation="margin-inline هو اختصار لـ margin-inline-start + margin-inline-end (يمين + يسار). margin-inline-start يضع الهامش في بداية السطر فقط."
      />
      <Quiz
        question="في تصميم RTL، ماذا يحدث عندما تستخدم text-align: start؟"
        options={[
          "النص يظهر دائماً في اليسار",
          "النص يظهر دائماً في اليمين",
          "النص يظهر في بداية السطر: يمين في RTL، يسار في LTR",
          "النص يظهر في منتصف السطر"
        ]}
        correctAnswer={2}
        explanation="text-align: start يضع النص في بداية السطر حسب اتجاه الكتابة. في RTL، بداية السطر هي اليمين. في LTR، بداية السطر هي اليسار. يعمل تلقائياً!"
      />
      <Quiz
        question="أي من التالي يمثل خاصية منطقية صحيحة؟"
        options={[
          "margin-left-inline",
          "padding-right-block",
          "border-inline-start",
          "top-inset-block"
        ]}
        correctAnswer={2}
        explanation="border-inline-start هو الخاصية المنطقية الصحيحة. القاعدة هي: [margin/padding/border]-[direction]-[start/end] أو [margin/padding/border]-[inline/block]-[start/end]."
      />

      {/* ======================================== */}
      {/* Challenge */}
      {/* ======================================== */}
      <Challenge
        title="تحدي: مكون بطاقة متوافق مع RTL"
        description={`أنشئ مكون بطاقة تعليمية يستخدم كل التقنيات الحديثة:

1. استخدم Container Queries لجعل البطاقة تتكيّف مع حجم الحاوية
2. استخدم clamp() لحجم الخط والمسافات
3. استخدم Logical Properties لدعم RTL
4. استخدم aspect-ratio لصورة البطاقة
5. استخدم @supports للترقي التدريجي

المتطلبات:
- البطاقة يجب أن تظهر بشكل عمودي في الحاوية الصغيرة (< 400px)
- البطاقة يجب أن تظهر بشكل أفقي في الحاوية الكبيرة (>= 400px)
- حجم الخط يجب أن يتغير بسلاسة بدون Media Queries
- كل الخصائص يجب أن تعمل مع RTL و LTR
- صورة البطاقة يجب أن تحافظ على نسبة 16:9`}
      >
        <CodeBlock language="css" code={`/* أضف الكود هنا */

/* 1. المتغيرات السائلة */
:root {
  
}

/* 2. الحاوية */
.card-wrapper {
  
}

/* 3. الاستعلام */
@container (min-width: 400px) {
  
}

/* 4. البطاقة */
.card {
  
}

/* 5. الصورة */
.card-image {
  
}`} />
      </Challenge>

      {/* ======================================== */}
      {/* CheatSheet */}
      {/* ======================================== */}
      <CheatSheet title="ملخص سريع: التصميم المتجاوب الحديث">
        <h3>Container Queries</h3>
        <CodeBlock language="css" code={`/* تحديد الحاوية */
.container {
  container-type: inline-size;
  container-name: my-container;
}

/* الاستعلام */
@container my-container (min-width: 500px) {
  .child { /* ... */ }
}

/* شروط شائعة */
@container (min-width: 400px) { /* حاوية كبيرة */ }
@container (max-width: 399px) { /* حاوية صغيرة */ }
@container (min-width: 400px) and (max-width: 799px) { /* متوسطة */ }`} />

        <h3>clamp() — الصيغة</h3>
        <CodeBlock language="css" code={`/* clamp(حد أدنى، قيمة مفضلة، حد أقصى) */
font-size: clamp(1rem, 2.5vw, 2rem);
padding: clamp(1rem, 3vw, 3rem);
width: clamp(300px, 80%, 1200px);

/* المعادلة الحسابية */
/* max(أدنى, min(مفضلة، أقصى)) */

/* متغيرات سائلة جاهزة */
:root {
  --space-xs: clamp(0.25rem, 0.5vw, 0.5rem);
  --space-sm: clamp(0.5rem, 1vw, 1rem);
  --space-md: clamp(1rem, 2vw, 2rem);
  --space-lg: clamp(1.5rem, 3vw, 3rem);
  --space-xl: clamp(2rem, 5vw, 4rem);
}`} />

        <h3>min() و max()</h3>
        <CodeBlock language="css" code={`/* min() — الأصغر من القيمتين */
width: min(80%, 800px);
/* عرض 80% لكن لا يزيد عن 800px */

/* max() — الأكبر من القيمتين */
width: max(300px, 50%);
/* عرض 50% لكن لا يقل عن 300px */

/* دمج مع clamp() */
font-size: max(1rem, min(3vw, 2rem));
/* مكافئ لـ clamp(1rem, 3vw, 2rem) */`} />

        <h3>Logical Properties — المخطط</h3>
        <CodeBlock language="text" code={`/* فيزيائي (قديم)        ←→  منطقي (حديث)         */
width                     ←→  inline-size
height                    ←→  block-size
margin-left               ←→  margin-inline-start
margin-right              ←→  margin-inline-end
margin-top                ←→  margin-block-start
margin-bottom             ←→  margin-block-end
padding-left              ←→  padding-inline-start
padding-right             ←→  padding-inline-end
padding-top               ←→  padding-block-start
padding-bottom            ←→  padding-block-end
border-left               ←→  border-inline-start
border-right              ←→  border-inline-end
top                       ←→  inset-block-start
right                     ←→  inset-inline-end
bottom                    ←→  inset-block-end
left                      ←→  inset-inline-start
text-align: left          ←→  text-align: start
text-align: right         ←→  text-align: end

/* اختصارات */
margin-inline             ←→  margin-left + margin-right
margin-block              ←→  margin-top + margin-bottom
padding-inline            ←→  padding-left + padding-right
padding-block             ←→  padding-top + padding-bottom
inset                     ←→  top + right + bottom + left`} />

        <h3>Media Queries — قديم vs حديث</h3>
        <CodeBlock language="css" code={`/* ❌ القديم */
@media (min-width: 768px) { /* ... */ }
@media (max-width: 767px) { /* ... */ }
@media (min-width: 768px) and (max-width: 1024px) { /* ... */ }
@media screen and (min-width: 768px) { /* ... */ }

/* ✅ الحديث */
@media (width >= 768px) { /* ... */ }
@media (width < 768px) { /* ... */ }
@media (width >= 768px) and (width <= 1024px) { /* ... */ }
@media (min-width: 768px) { /* ... */ }  /* بدون screen and */`} />

        <h3>Aspect Ratio</h3>
        <CodeBlock language="css" code={`/* نسبة العرض إلى الارتفاع */
.video { aspect-ratio: 16 / 9; }
.square { aspect-ratio: 1 / 1; }
.portrait { aspect-ratio: 3 / 4; }
.wide { aspect-ratio: 21 / 9; }

/* مع الصور */
.image {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  inline-size: 100%;
}`} />

        <h3>@supports — الترقي التدريجي</h3>
        <CodeBlock language="css" code={`/* تحقق من دعم الميزة */
@supports (container-type: inline-size) {
  /* يدعم Container Queries */
}

/* تحقق من عدم الدعم */
@supports not (container-type: inline-size) {
  /* لا يدعم → استخدم البديل */
}

/* تحقق من عدة ميزات */
@supports (container-type: inline-size) and
          (aspect-ratio: 16 / 9) {
  /* يدعم كلتاهما */
}`} />
      </CheatSheet>

      {/* ======================================== */}
      {/* Lesson Navigation */}
      {/* ======================================== */}
      <LessonNavigation
        prevLesson={lesson.prevLesson}
        prevStage={lesson.prevLessonStage}
        nextLesson={lesson.nextLesson}
        nextStage={lesson.nextLessonStage}
      />
    </div>
  );
}