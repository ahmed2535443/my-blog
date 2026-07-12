// =====================================================
// ملف: page.js (الدرس السادس: HTML الدلالي - Semantic HTML)
// المكان: app/learn/html/06-semantic-html/page.js
// الوظيفة: تعريف المبتدئين بأهمية HTML الدلالي والعناصر الدلالية
// URL: /learn/html/06-semantic-html
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function SemanticHtml() {
  const lessonInfo = getLessonBySlug("html", "06-semantic-html");

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
        {/* القسم الأول: ما هو HTML الدلالي؟ */}
        {/* ========================================== */}
        <LessonSection title="ما هو HTML الدلالي (Semantic HTML)؟">
          <p>
            <strong>HTML الدلالي (Semantic HTML)</strong> هو استخدام وسوم HTML التي تحمل <strong>معنى دلالياً</strong> لمحتواها، بدلاً من استخدام وسوم عامة مثل <code>&lt;div&gt;</code> و <code>&lt;span&gt;</code> لكل شيء.
          </p>

          <p>
            كلمة &quot;دلالية&quot; (Semantic) تعني &quot;ذات معنى&quot;. حين نستخدم وسم مثل <code>&lt;header&gt;</code>، نُخبر المتصفح (والمحررات، ومحركات البحث، وقارئات الشاشة) أن هذا المحتوى هو <strong>رأس الصفحة</strong>. هذا أوضح بكثير من استخدام <code>&lt;div class=&quot;header&quot;&gt;</code>.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه بسيط:
            </p>
            <p>
              تخيّل أنك تكتب رسالة لشخص أعمى. هل تقول له &quot;افتح الصندوق رقم 5&quot; أم تقول &quot;افتح صندوق البريد&quot;؟ الثانية أوضح لأنها تحمل <strong>معنى</strong>. HTML الدلالي يفعل نفس الشيء - يُعطي كل قسم في صفحتك <strong>اسماً دلالياً</strong>.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: لماذا نستخدم HTML الدلالي؟ */}
        {/* ========================================== */}
        <LessonSection title="لماذا نستخدم HTML الدلالي؟">
          <p>HTML الدلالي مهم لعدة أسباب جوهرية:</p>

          <ul>
            <li>
              <strong>تحسين الوصولية (Accessibility):</strong> قارئات الشاشة (Screen Readers) تستخدم العناصر الدلالية لفهم بنية الصفحة ونقلها للمكفوفين بشكل صحيح.
            </li>
            <li>
              <strong>تحسين محركات البحث (SEO):</strong> محركات البحث مثل Google تفضل المواقع ذات HTML الدلالي لأنها تفهم المحتوى بشكل أفضل. هذا يُحسّن ترتيب موقعك في نتائج البحث.
            </li>
            <li>
              <strong>سهولة القراءة والصيانة:</strong> الكود الدلالي أسهل في القراءة والفهم للمطورين الآخرين (ولك أنت في المستقبل). بدلاً من البحث عن <code>&lt;div class=&quot;main-content-area&quot;&gt;</code>، تجد <code>&lt;main&gt;</code> مباشرة.
            </li>
            <li>
              <strong>التوافق مع الأجهزة المختلفة:</strong> الأجهزة الذكية والمتصفحات الجديدة تفهم HTML الدلالي وتعامل معه بشكل أفضل.
            </li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ✅ حقيقة مهمة:
            </p>
            <p>
              وسوم مثل <code>&lt;header&gt;</code> و <code>&lt;main&gt;</code> و <code>&lt;footer&gt;</code> مدعومة في جميع المتصفحات الحديثة. استخدامها لا يُكلفك شيئاً لكنه يُعطيك فوائد كثيرة.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: المشكلة يحلها HTML الدلالي */}
        {/* ========================================== */}
        <LessonSection title="المشكلة التي يحلها HTML الدلالي">
          <p>لنرى الفرق بين الكود غير الدلالي والكود الدلالي:</p>

          <h3>❌ بدون HTML الدلالي (Generic):</h3>
          <CodeBlock
            language="html"
            code={`<div class="header">
  <div class="logo">شركتنا</div>
  <div class="nav">
    <div class="nav-item"><a href="/">الرئيسية</a></div>
    <div class="nav-item"><a href="/about">من نحن</a></div>
  </div>
</div>

<div class="main-content">
  <div class="article">
    <div class="title">عنوان المقال</div>
    <div class="text">نص المقال هنا...</div>
  </div>
  <div class="sidebar">
    <div class="widget">محتوى جانبي</div>
  </div>
</div>

<div class="footer">
  <div class="copyright">جميع الحقوق محفوظة</div>
</div>`}
          />

          <h3>✅ مع HTML الدلالي (Semantic):</h3>
          <CodeBlock
            language="html"
            code={`<header>
  <h1>شركتنا</h1>
  <nav>
    <ul>
      <li><a href="/">الرئيسية</a></li>
      <li><a href="/about">من نحن</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h2>عنوان المقال</h2>
    <p>نص المقال هنا...</p>
  </article>
  <aside>
    <p>محتوى جانبي</p>
  </aside>
</main>

<footer>
  <p>جميع الحقوق محفوظة</p>
</footer>`}
          />

          <p>
            الكود الثاني أوضح بكثير! كل وسم يخبرك فوراً بدوره. قارئ الشاشة يستطيع الآن أن يقول &quot;الآن أنت في قسم التصفح&quot; بدلاً من &quot;أنت في div رقم 3&quot;.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: شرح بسيط - العناصر الدلالية للهيكل العام */}
        {/* ========================================== */}
        <LessonSection title="العناصر الدلالية للهيكل العام">
          <p>HTML5 يوفر عدة وسوم دلالية لبناء هيكل الصفحة:</p>

          <ul>
            <li>
              <strong><code>&lt;header&gt;</code>:</strong> رأس الصفحة أو القسم. يحتوي عادة على الشعار والعنوان والتنقل.
            </li>
            <li>
              <strong><code>&lt;nav&gt;</code>:</strong> قسم التصفح (Navigation). يحتوي على الروابط الرئيسية للتنقل بين صفحات الموقع.
            </li>
            <li>
              <strong><code>&lt;main&gt;</code>:</strong> المحتوى الرئيسي للصفحة. يجب أن يكون واحداً فقط في الصفحة ويحتوي على الجوهر الحقيقي للمحتوى.
            </li>
            <li>
              <strong><code>&lt;section&gt;</code>:</strong> قسم منطقي في الصفحة. يُستخدم لتجميع المحتوى المترابط تحت عنوان مشترك.
            </li>
            <li>
              <strong><code>&lt;article&gt;</code>:</strong> مقال أو محتوى مستقل يمكن إعادة استخدامه في مكان آخر (مثل مقالة في مدونة أو تغريدة).
            </li>
            <li>
              <strong><code>&lt;aside&gt;</code>:</strong> محتوى جانبي غير مرتبط بالمحتوى الرئيسي (مثل الشريط الجانبي أو الإعلانات).
            </li>
            <li>
              <strong><code>&lt;footer&gt;</code>:</strong> تذييل الصفحة أو القسم. يحتوي على معلومات حقوق النشر والروابط_secondary.
            </li>
          </ul>

          <CodeBlock
            language="html"
            code={`<!-- هيكل الصفحة الدلالي الأساسي -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>صفحة بـ HTML دلالي</title>
</head>
<body>

  <header>
    <h1>موقعي</h1>
    <nav>
      <a href="/">الرئيسية</a>
      <a href="/about">من نحن</a>
      <a href="/contact">تواصل</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>مرحباً بكم</h2>
      <p>هذا المحتوى الرئيسي للصفحة.</p>
    </section>

    <section>
      <h2>آخر الأخبار</h2>
      <article>
        <h3>خبر أول</h3>
        <p>تفاصيل الخبر الأول هنا...</p>
      </article>
      <article>
        <h3>خبر ثاني</h3>
        <p>تفاصيل الخبر الثاني هنا...</p>
      </article>
    </section>

    <aside>
      <h3>روابط مفيدة</h3>
      <ul>
        <li><a href="#">رابط 1</a></li>
        <li><a href="#">رابط 2</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 جميع الحقوق محفوظة</p>
  </footer>

</body>
</html>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: العناصر الدلالية للنصوص */}
        {/* ========================================== */}
        <LessonSection title="العناصر الدلالية للنصوص">
          <p>هناك وسوم دلالية إضافية لتنسيق النصوص وتنظيمها:</p>

          <h3>الصور والرسوم (Figure & Figcaption)</h3>
          <CodeBlock
            language="html"
            code={`<!-- figure يُستخدم لتغليف الصور أو المحتوى المرئي مع تسميته -->
<figure>
  <img src="diagram.jpg" alt="رسم توضيحي لهيكل HTML" />
  <figcaption>شكل 1: هيكل صفحة HTML الدلالي</figcaption>
</figure>`}
          />

          <h3>الاقتباسات (Blockquote & Cite)</h3>
          <CodeBlock
            language="html"
            code={`<!-- blockquote للاقتباس الطويل -->
<blockquote cite="https://example.com/source">
  <p>البرمجة هي فن تنظيم التعقيد وإدارة التعقيد.</p>
</blockquote>

<!-- cite للاختصار أو مصدر الاقتباس -->
<p><cite>- تيم بيرنرز لي</cite>، مبتكر لغة HTML</p>`}
          />

          <h3>النص المميز والوقت (Mark & Time)</h3>
          <CodeBlock
            language="html"
            code={`<!-- mark لتمييز نص باللون الأصفر -->
<p>افتح الملف ثم ابحث عن كلمة <mark>IMPORTANT</mark> في السطر الخامس.</p>

<!-- time لتمييز التواريخ والأوقات -->
<p>نُشر المقال في <time dateTime="2026-07-12">12 يوليو 2026</time></p>
<p>المحاضرة تبدأ في <time dateTime="14:30">الساعة 2:30 مساءً</time></p>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 لماذا <code>dateTime</code> مهمة؟
            </p>
            <p>
              السمة <code>dateTime</code> تُعطي التاريخ بصيغة موحدة (ISO 8601) يفهمها المتصفح ومحركات البحث. حتى لو كتبت &quot;بكرة&quot; في النص، يمكنك وضع التاريخ الحقيقي في <code>dateTime</code>.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: العناصر الدلالية للقوائم والجداول */}
        {/* ========================================== */}
        <LessonSection title="العناصر الدلالية للقوائم والجداول">
          <h3>القوائم التفصيلية (Details & Summary)</h3>
          <p>
            وسم <code>&lt;details&gt;</code> يُنشئ قائمة قابلة للتوسيع (Accordion) بدون الحاجة لـ JavaScript:
          </p>

          <CodeBlock
            language="html"
            code={`<!-- قائمة قابلة للتوسيع -->
<details>
  <summary>كيف أسجل في المنصة؟</summary>
  <p>1. اضغط على زر التسجيل</p>
  <p>2. أدخل بياناتك</p>
  <p>3. أكمل عملية التسجيل</p>
</details>

<!-- details مفتوح افتراضياً -->
<details open>
  <summary>الشروط والأحكام</summary>
  <p>يجب على المستخدم الالتزام بالشروط التالية...</p>
</details>`}
          />

          <h3>عناصر الجدول الدلالية (thead, tbody, tfoot, caption)</h3>
          <CodeBlock
            language="html"
            code={`<table>
  <!-- عنوان الجدول -->
  <caption>جدول رواتب الموظفين</caption>

  <!-- رأس الجدول -->
  <thead>
    <tr>
      <th scope="col">الاسم</th>
      <th scope="col">الوظيفة</th>
      <th scope="col">الراتب</th>
    </tr>
  </thead>

  <!-- جسم الجدول -->
  <tbody>
    <tr>
      <td>أحمد محمد</td>
      <td>مطور</td>
      <td>8000 ر.س</td>
    </tr>
    <tr>
      <td>سارة علي</td>
      <td>مصممة</td>
      <td>7500 ر.س</td>
    </tr>
  </tbody>

  <!-- تذييل الجدول -->
  <tfoot>
    <tr>
      <td colspan="2"><strong>المتوسط</strong></td>
      <td><strong>7750 ر.س</strong></td>
    </tr>
  </tfoot>
</table>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: مثال عملي - صفحة مقال كاملة */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: صفحة مقال كاملة بالعناصر الدلالية">
          <p>لنرَ كيف تبدو صفحة مقال حقيقية تستخدم HTML الدلالي بالكامل:</p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مقدمة في البرمجة - مقال</title>
</head>
<body>

  <!-- رأس الصفحة -->
  <header>
    <div class="logo">
      <h1>مدونة البرمجة</h1>
    </div>
    <nav aria-label="التنقل الرئيسي">
      <ul>
        <li><a href="/" aria-current="page">الرئيسية</a></li>
        <li><a href="/articles">المقالات</a></li>
        <li><a href="/tutorials">الدروس</a></li>
        <li><a href="/about">من نحن</a></li>
      </ul>
    </nav>
  </header>

  <!-- المحتوى الرئيسي -->
  <main>
    <article>
      <header>
        <h2>مقدمة في عالم البرمجة</h2>
        <p>
          كتبه: <span>أحمد محمد</span> |
          <time dateTime="2026-07-12">12 يوليو 2026</time>
        </p>
        <p>
          التصنيفات:
          <span>برمجة</span>، <span>مبتدئين</span>
        </p>
      </header>

      <section>
        <h3>ما هي البرمجة؟</h3>
        <p>
          البرمجة هي عملية كتابة تعليمات
          للحاسوب لتنفيذ مهام محددة. تُعتبر
          <mark>البرمجة المهارة الأكثر طلباً</mark>
          في القرن الحادي والعشرين.
        </p>

        <figure>
          <img src="programming.jpg"
               alt="صورة لشرائح كود على شاشة حاسوب" />
          <figcaption>
            شكل 1: بيئة تطوير متكاملة (IDE)
          </figcaption>
        </figure>
      </section>

      <section>
        <h3>لماذا تعلم البرمجة؟</h3>
        <ol>
          <li>فرص عمل عالية الأجر</li>
          <li>إمكانية العمل عن بُعد</li>
          <li>بناء مشاريعك الخاصة</li>
          <li>تطوير مهارات التفكير المنطقي</li>
        </ol>
      </section>

      <section>
        <h3>أفضل لغات البرمجة للمبتدئين</h3>

        <figure>
          <table>
            <caption>مقارنة سريعة بين لغات البرمجة</caption>
            <thead>
              <tr>
                <th scope="col">اللغة</th>
                <th scope="col">الصعوبة</th>
                <th scope="col">المجال</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Python</td>
                <td>سهلة</td>
                <td>متعددة</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>متوسطة</td>
                <td>الويب</td>
              </tr>
              <tr>
                <td>Java</td>
                <td>متوسطة-صعبة</td>
                <td>التطبيقات</td>
              </tr>
            </tbody>
          </table>
        </figure>
      </section>

      <section>
        <h3>نصيحتي لك</h3>
        <blockquote cite="https://example.com/advice">
          <p>
            لا تحاول تعلم كل شيء في وقت واحد.
            ابدأ بلغة واحدة وأتقنها قبل
            الانتقال للتالية.
          </p>
        </blockquote>
        <p>
          <cite>- أحمد المطور</cite>
        </p>
      </section>

      <aside>
        <h3>مقالات ذات صلة</h3>
        <ul>
          <li><a href="#">كيف تختار لغة البرمجة</a></li>
          <li><a href="#">أفضل موارد تعلم البرمجة</a></li>
          <li><a href="#">نصائح للمبرمج المبتدئ</a></li>
        </ul>
      </aside>

      <footer>
        <p>
          آخر تحديث: <time dateTime="2026-07-12">12 يوليو 2026</time>
        </p>
        <details>
          <summary>الشروط والأحكام</summary>
          <p>يُسمح بإعادة نشر المقال مع ذكر المصدر.</p>
        </details>
      </footer>
    </article>
  </main>

  <!-- تذييل الصفحة -->
  <footer>
    <p>&copy; 2026 مدونة البرمجة. جميع الحقوق محفوظة.</p>
    <nav aria-label="روابط التذييل">
      <a href="/privacy">سياسة الخصوصية</a>
      <a href="/terms">الشروط</a>
      <a href="/contact">تواصل معنا</a>
    </nav>
  </footer>

</body>
</html>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: مقارنة div-based vs semantic layout */}
        {/* ========================================== */}
        <LessonSection title="مقارنة: div-based layout vs semantic layout">
          <p>لنقارن بين الطريقتين بشكل مباشر في سيناريو واقعي:</p>

          <h3>❌ الطريقة القديمة (div-based):</h3>
          <CodeBlock
            language="html"
            code={`<div class="page">
  <div class="header">
    <div class="logo">الموقع</div>
    <div class="menu">
      <div class="menu-item"><a href="#">الرئيسية</a></div>
      <div class="menu-item"><a href="#">من نحن</a></div>
    </div>
  </div>
  <div class="content-wrapper">
    <div class="main-column">
      <div class="post">
        <div class="post-title">عنوان المقال</div>
        <div class="post-body">محتوى المقال...</div>
      </div>
    </div>
    <div class="side-column">
      <div class="widget">
        <div class="widget-title">الأكثر قراءة</div>
        <div class="widget-content">...</div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="footer-text">حقوق النشر</div>
  </div>
</div>`}
          />

          <h3>✅ الطريقة الحديثة (semantic):</h3>
          <CodeBlock
            language="html"
            code={`<body>
  <header>
    <h1>الموقع</h1>
    <nav>
      <ul>
        <li><a href="#">الرئيسية</a></li>
        <li><a href="#">من نحن</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h2>عنوان المقال</h2>
      <p>محتوى المقال...</p>
    </article>
    <aside>
      <section>
        <h3>الأكثر قراءة</h3>
        <ul>...</ul>
      </section>
    </aside>
  </main>
  <footer>
    <p>حقوق النشر</p>
  </footer>
</body>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ✅ الفروقات الجوهرية:
            </p>
            <ul>
              <li>الكود الدلالي <strong>أقصر</strong> (لا حاجة لتعريف أسماء كلاسات معقدة)</li>
              <li>الكود الدلالي <strong>واضح المعنى</strong> (كل وسم يشرح دوره)</li>
              <li>الكود الدلالي <strong>متوافق مع الوصولية</strong> (قارئات الشاشة تفهمه)</li>
              <li>الكود الدلالي <strong>أفضل لـ SEO</strong> (محركات البحث تفهمه)</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>عندما يقرأ المتصفح العناصر الدلالية، يحدث التالي:</p>

          <ol>
            <li>
              <strong>بناء DOM شجري دلالي:</strong> المتصفح يبني شجرة DOM حيث لكل عنصر دور واضح. مثلاً، يعلم أن <code>&lt;nav&gt;</code> يحتوي على روابط تصفح.
            </li>
            <li>
              <strong>تحسين عرض المحتوى:</strong> بعض المتصفحات تُعطي تنسيقاتاً افتراضية مختلفة للوسوم الدلالية. مثلاً، <code>&lt;main&gt;</code> قد يحصل على margin إضافي.
            </li>
            <li>
              <strong>تحسين الوصولية:</strong> قارئات الشاشة تستطيع الآن تقديم &quot;قائمة عناصر الصفحة&quot; للمستخدم المكفوف. يمكنه القول &quot;في 3 أقسام، وتنقل، ومقال رئيسي&quot;.
            </li>
            <li>
              <strong>تحسين SEO:</strong> م crawlers جوجل تفهم المحتوى المهم من الفرعي. المحتوى داخل <code>&lt;article&gt;</code> يُعامل كمحتوى رئيسي.
            </li>
          </ol>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 هل تعلم؟
            </p>
            <p>
              يمكنك اختبار كيف يفهم المتصفح صفحتك باستخدام أداة <strong>Lighthouse</strong> في Chrome DevTools (F12 ثم تبويب Lighthouse). ستحصل على درجة &quot;Best Practices&quot; أعلى مع HTML الدلالي.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul>
            <li>
              <strong>❌ استخدام div لكل شيء:</strong>
              <br />
              استخدام <code>&lt;div&gt;</code> و <code>&lt;span&gt;</code> لكل عنصر في الصفحة. هذه أقدم عادة سيئة في HTML. استخدم العناصر الدلالية كلما أمكن.
            </li>
            <li>
              <strong>❌ استخدام العناصر الدلالية بشكل خاطئ:</strong>
              <br />
              استخدام <code>&lt;header&gt;</code> في منتصف الصفحة كحاوية عامة، أو استخدام <code>&lt;article&gt;</code> لقسم غير مستقل. تأكد أنك تفهم معنى كل وسم قبل استخدامه.
            </li>
            <li>
              <strong>❌ تجاهل النسخة الاحتياطية (fallback):</strong>
              <br />
              بعض المتصفحات القديمة لا تدعم العناصر الدلالية. لكن في 2026، هذا لم يعد مشكلة كبيرة. المتصفحات الحديثة كلها تدعمها.
            </li>
            <li>
              <strong>❌ استخدام عناصر دلالية للتنسيق فقط:</strong>
              <br />
              استخدام <code>&lt;small&gt;</code> لأنك تريد نصاً أصغر. استخدم العناصر الدلالية لمعناها، وللتنسيق استخدم CSS.
            </li>
            <li>
              <strong>❌ نسيان تغليف المحتوى داخل main:</strong>
              <br />
              عدم استخدام <code>&lt;main&gt;</code> للمحتوى الرئيسي. يجب أن يكون لكل صفحة قسم <code>&lt;main&gt;</code> واحد فقط.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li>
              <strong>✅ استخدم main مرة واحدة فقط في الصفحة:</strong>
              يجب أن يكون لكل صفحة قسم <code>&lt;main&gt;</code> واحد فقط يحتوي على المحتوى الرئيسي.
            </li>
            <li>
              <strong>✅ استخدم nav للتنقل الأساسي فقط:</strong>
              لا تضع كل مجموعة روابط في <code>&lt;nav&gt;</code>. احتفظ به للتنقل الرئيسي والثانوي فقط.
            </li>
            <li>
              <strong>✅ اجعل article مستقلاً بذاته:</strong>
              المحتوى داخل <code>&lt;article&gt;</code> يجب أن يكون قابلاً للنشر بشكل مستقل في مكان آخر.
            </li>
            <li>
              <strong>✅ استخدم section مع عنوان:</strong>
              كل <code>&lt;section&gt;</code> يجب أن يكون له عنوان (<code>&lt;h2&gt;</code> أو <code>&lt;h3&gt;</code>). إذا لم يكن لديك عنوان، فربما تحتاج <code>&lt;div&gt;</code> بدلاً منه.
            </li>
            <li>
              <strong>✅ استخدم aside للمحتوى الفرعي فقط:</strong>
              المحتوى داخل <code>&lt;aside&gt;</code> يجب أن يكون مرتبطاً بالمحتوى المحيط لكنه غير أساسي.
            </li>
            <li>
              <strong>✅ استخدم figure و figcaption مع الصور ذات المعنى:</strong>
              لا تستخدم <code>&lt;figure&gt;</code> مع كل صورة. احتفظ به للصور التي لها تعليق توضيحي.
            </li>
            <li>
              <strong>✅ استخدم time مع dateTime دائماً:</strong>
              اكتب التاريخ بصيغة ISO في <code>dateTime</code> وصيغة مقروءة بين العلامتين.
            </li>
            <li>
              <strong>✅ استخدم details و summary لتحسين تجربة المستخدم:</strong>
              ممتاز للأسئلة الشائعة والتعليمات القابلة للتوسيع.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>HTML الدلالي</strong> هو استخدام وسوم ذات معنى بدلاً من div و span لكل شيء</li>
              <li>العناصر الدلالية تُحسن <strong>الوصولية</strong> و <strong>SEO</strong> و <strong>سهولة القراءة</strong></li>
              <li>عناصر الهيكل: <code>&lt;header&gt;</code> | <code>&lt;nav&gt;</code> | <code>&lt;main&gt;</code> | <code>&lt;section&gt;</code> | <code>&lt;article&gt;</code> | <code>&lt;aside&gt;</code> | <code>&lt;footer&gt;</code></li>
              <li>عناصر النص: <code>&lt;figure&gt;</code> | <code>&lt;figcaption&gt;</code> | <code>&lt;blockquote&gt;</code> | <code>&lt;cite&gt;</code> | <code>&lt;time&gt;</code> | <code>&lt;mark&gt;</code></li>
              <li>عناصر القوائم: <code>&lt;details&gt;</code> و <code>&lt;summary&gt;</code> للقوائم القابلة للتوسيع</li>
              <li>عناصر الجداول: <code>&lt;caption&gt;</code> | <code>&lt;thead&gt;</code> | <code>&lt;tbody&gt;</code> | <code>&lt;tfoot&gt;</code></li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هو الدور الرئيسي لـ &lt;main&gt; في الصفحة؟"
          options={[
            "يحتوي على كل محتوى الصفحة",
            "يحتوي على المحتوى الرئيسي المستقل للصفحة",
            "يحتوي على الروابط والتنقل",
            "يحتوي على تذييل الصفحة",
          ]}
          correctAnswer={1}
          explanation="&lt;main&gt; يجب أن يحتوي على المحتوى الرئيسي للصفحة فقط، ويجب أن يكون واحداً فقط في الصفحة. الروابط في &lt;nav&gt; والتذييل في &lt;footer&gt;."
        />

        <Quiz
          question="ما الفرق بين &lt;div&gt; و &lt;section&gt;؟"
          options={[
            "لا يوجد فرق بينهما",
            "div للتنسيق، section للبنية",
            "div عنصر عام بدون معنى، section قسم منطقي له عنوان",
            "div في HTML4، section في HTML5",
          ]}
          correctAnswer={2}
          explanation="div هو عنصر عام (generic) بدون أي معنى دلالي. section يمثل قسماً منطقياً في المحتوى ويجب أن يكون له عادة عنوان."
        />

        <Quiz
          question="أي من التالي هو استخدام صحيح لـ &lt;article&gt;؟"
          options={[
            "حاوية عامة لمحتوى الصفحة",
            "محتوى مستقل يمكن نشره في مكان آخر",
            "قسم من فقرات بدون عنوان",
            "شريط جانبي للإعلانات",
          ]}
          correctAnswer={1}
          explanation="&lt;article&gt; يُستخدم للمحتوى المستقل الذي يمكن إعادة استخدامه مثل مقال مدونة أو تغريدة أو موضوع منتدى."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: حوّل كود div إلى HTML دلالي"
          description={
            <p>
              خذ الكود التالي المكتوب بـ div فقط وحوّله إلى HTML دلالي باستخدام العناصر الصحيحة:
              <br />
              1. حدد رأس الصفحة واجعله <code>&lt;header&gt;</code>
              <br />
              2. حوّل قائمة الروابط إلى <code>&lt;nav&gt;</code>
              <br />
              3. اجعل المحتوى الرئيسي داخل <code>&lt;main&gt;</code>
              <br />
              4. حوّل المقال إلى <code>&lt;article&gt;</code>
              <br />
              5. اجعل الشريط الجانبي <code>&lt;aside&gt;</code>
              <br />
              6. حوّل التذييل إلى <code>&lt;footer&gt;</code>
            </p>
          }
        >
          <CodeBlock
            language="html"
            code={`<!-- الحل المتوقع -->
<header>
  <h1>موقعي</h1>
  <nav>
    <ul>
      <li><a href="/">الرئيسية</a></li>
      <li><a href="/blog">المدونة</a></li>
      <li><a href="/contact">تواصل</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h2>عنوان المقال</h2>
    <p>محتوى المقال هنا...</p>
    <section>
      <h3>القسم الأول</h3>
      <p>تفاصيل إضافية...</p>
    </section>
  </article>

  <aside>
    <h3>مقالات ذات صلة</h3>
    <ul>
      <li><a href="#">مقال 1</a></li>
      <li><a href="#">مقال 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2026 جميع الحقوق محفوظة</p>
</footer>`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص HTML الدلالي">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>عناصر الهيكل العام:</p>
              <CodeBlock language="html" code={`<header>  — رأس الصفحة/القسم
<nav>     — التصفح والروابط
<main>    — المحتوى الرئيسي
<section> — قسم منطقي بالعنوان
<article> — محتوى مستقل
<aside>   — محتوى جانبي
<footer>  — تذييل الصفحة/القسم`} />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>عناصر النصوص الدلالية:</p>
              <CodeBlock language="html" code={`<figure>      — تغليف صورة/محتوى
<figcaption>  — تعليق التغليف
<blockquote>  — اقتباس طويل
<cite>        — مصدر الاقتباس
<mark>        — نص مميز (أصفر)
<time>        — تواريخ وأوقات`} />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>عناصر القوائم التفصيلية:</p>
              <CodeBlock language="html" code={`<!-- قائمة قابلة للتوسيع -->
<details>
  <summary>اضغط للتوسيع</summary>
  <p>المحتوى المخفي هنا...</p>
</details>`} />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>عناصر الجداول الدلالية:</p>
              <CodeBlock language="html" code={`<caption>  — عنوان الجدول
<thead>    — رأس الجدول
<tbody>    — جسم الجدول
<tfoot>    — تذييل الجدول
<th scope="col"> — رأس عمود`} />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>هيكل الصفحة الأساسي:</p>
              <CodeBlock language="html" code={`<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <article>...</article>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>`} />
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* التنقل */}
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
