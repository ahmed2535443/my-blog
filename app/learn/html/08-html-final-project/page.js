// =====================================================
// ملف: page.js (الدرس الثامن: مشروع HTML تطبيقي)
// المكان: app/learn/html/08-html-final-project/page.js
// الوظيفة: ملخص شامل لمرحلة HTML وبناء مشروع تطبيقي كامل
// URL: /learn/html/08-html-final-project
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function HtmlFinalProject() {
  const lessonInfo = getLessonBySlug("html", "08-html-final-project");

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
        {/* القسم الأول: ملخص ما تعلمناه في مرحلة HTML */}
        {/* ========================================== */}
        <LessonSection title="ملخص كل ما تعلمناه في مرحلة HTML">
          <p>
            مبارك! وصلت للدرس الأخير في مرحلة HTML. لنلخص كل ما تعلمته في هذه المرحلة:
          </p>

          <ul>
            <li>
              <strong>الدرس 1 - مقدمة في HTML:</strong> تعلمنا ما هو HTML ولماذا نحتاجه، وكيف يعمل المتصفح مع HTML، وأول صفحة HTML.
            </li>
            <li>
              <strong>الدرس 2 - العناصر والنصوص:</strong> تعلمنا أنواع العناصر، والعناوين، والفقرات، والقوائم، والنص العريض والمائل.
            </li>
            <li>
              <strong>الدرس 3 - السمات والجداول:</strong> تعلمنا السمات (id, class, style)، وبناء الجداول مع thead و tbody و tfoot.
            </li>
            <li>
              <strong>الدرس 4 - الروابط والصور:</strong> تعلمنا إنشاء الروابط، وtypes of links، وإضافة الصور مع النص البديل.
            </li>
            <li>
              <strong>الدرس 5 - النماذج (Forms):</strong> تعلمنا بناء النماذج التفاعلية، وأنواع الحقول، والتحقق من البيانات.
            </li>
            <li>
              <strong>الدرس 6 - HTML الدلالي:</strong> تعلمنا أهمية العناصر الدلالية وكيف تُحسّن بنية صفحتك.
            </li>
            <li>
              <strong>الدرس 7 - الوصولية (A11y):</strong> تعلمنا كيف تجعل موقعك متاحاً للجميع باستخدام ARIA والممارسات الصحيحة.
            </li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ✅ أنت الآن تملك مهارات أساسية في:
            </p>
            <p>
              كتابة HTML نظيف ودلالية، بناء هيكل صفحات ويب، إنشاء نماذج تفاعلية، تحسين الوصولية، وفهم كيفية عمل المتصفح مع الكود الخاص بك.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: Cheat Sheet شامل لكل وسوم HTML */}
        {/* ========================================== */}
        <LessonSection title="Cheat Sheet شامل لكل وسوم HTML الأساسية">
          <p>إليك ملخص مرجعي سريع لأهم وسوم HTML التي تعلمتها:</p>

          <CodeBlock
            language="html"
            code={`<!-- ===== هيكل الصفحة الأساسي ===== -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>عنوان الصفحة</title>
</head>
<body>

  <!-- ===== العناوين ===== -->
  <h1>العنوان الرئيسي (مرة واحدة فقط)</h1>
  <h2>عنوان فرعي</h2>
  <h3>عنوان أصغر</h3>

  <!-- ===== النصوص ===== -->
  <p>فقرة نصية</p>
  <strong>نص عريض (مهم دلالياً)</strong>
  <em>نص مائل (مؤكد دلالياً)</em>
  <mark>نص مميز (أصفر)</mark>
  <small>نص أصغر</small>
  <del>نص محذوف</del>
  <ins>نص مُضاف</ins>
  <sub>نص سفلي (H₂O)</sub>
  <sup>نص علوي (x²)</sup>

  <!-- ===== الروابط ===== -->
  <a href="https://example.com">رابط خارجي</a>
  <a href="/about">رابط داخلي</a>
  <a href="#section-id">رابط داخلي (مزرية)</a>
  <a href="mailto:info@example.com">بريد إلكتروني</a>
  <a href="tel:+966551234567">اتصال هاتفي</a>
  <a href="file.pdf" download>تحميل ملف</a>
  <a href="https://example.com" target="_blank"
     rel="noopener noreferrer">
    رابط في تبويب جديد
  </a>

  <!-- ===== الصور ===== -->
  <img src="photo.jpg" alt="وصف الصورة"
       width="800" height="600" loading="lazy" />

  <!-- ===== القوائم ===== -->
  <ul>
    <li>عنصر غير مرقّم</li>
  </ul>
  <ol>
    <li>عنصر مرقّم</li>
  </ol>
  <dl>
    <dt>مصطلح</dt>
    <dd>تعريف المصطلح</dd>
  </dl>

  <!-- ===== الجداول ===== -->
  <table>
    <caption>عنوان الجدول</caption>
    <thead>
      <tr>
        <th scope="col">العمود</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>البيانات</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>التذييل</td>
      </tr>
    </tfoot>
  </table>

  <!-- ===== النماذج ===== -->
  <form action="/submit" method="POST">
    <label for="name">الاسم</label>
    <input type="text" id="name" name="name"
           required aria-required="true" />

    <label for="email">البريد</label>
    <input type="email" id="email" name="email" required />

    <label for="msg">الرسالة</label>
    <textarea id="msg" name="message" rows="5"></textarea>

    <select name="category">
      <option value="">اختر...</option>
      <option value="tech">تقنية</option>
    </select>

    <input type="checkbox" id="agree" />
    <label for="agree">أوافق على الشروط</label>

    <button type="submit">إرسال</button>
  </form>

  <!-- ===== العناصر الدلالية ===== -->
  <header>رأس الصفحة</header>
  <nav aria-label="التنقل">الروابط</nav>
  <main>المحتوى الرئيسي</main>
  <section>قسم منطقي</section>
  <article>مقال مستقل</article>
  <aside>محتوى جانبي</aside>
  <footer>تذييل الصفحة</footer>

  <!-- ===== عناصر إضافية ===== -->
  <figure>
    <img src="chart.jpg" alt="رسم بياني" />
    <figcaption>شكل 1: إحصائيات</figcaption>
  </figure>

  <blockquote cite="https://source.com">
    <p>اقتباس طويل</p>
  </blockquote>

  <cite>مصدر الاقتباس</cite>

  <time dateTime="2026-07-12">12 يوليو 2026</time>

  <details>
    <summary>اضغط للتفاصيل</summary>
    <p>المحتوى المخفي</p>
  </details>

  <pre><code>كود مُنسَّق</code></pre>

</body>
</html>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: مشروع تطبيقي - صفحة "من نحن" */}
        {/* ========================================== */}
        <LessonSection title="مشروع تطبيقي: صفحة &quot;من نحن&quot; لشركة">
          <p>
            الآن سنطبق كل ما تعلمناه في بناء صفحة <strong>&quot;من نحن&quot;</strong> كاملة لشركة تقنية. سنستخدم HTML الدلالي والوصولية وأفضل الممارسات.
          </p>

          <h3>الخطوة 1: هيكل الصفحة الأساسي</h3>
          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <meta name="description"
        content="تعرّف على شركة تقنية - رؤيتنا ورسالتنا وفريق العمل">
  <title>من نحن - شركة تقنية</title>
</head>
<body>

  <!-- رابط التخطي للوصولية -->
  <a href="#main-content" class="skip-link">
    انتقل للمحتوى الرئيسي
  </a>

  <!-- سيتم بناء باقي الصفحة في الخطوات التالية -->

</body>
</html>`}
          />

          <h3>الخطوة 2: رأس الصفحة مع الشعار والتنقل</h3>
          <CodeBlock
            language="html"
            code={`  <header>
    <div class="header-container">
      <!-- الشعار -->
      <a href="/" class="logo" aria-label="العودة للرئيسية">
        <img src="logo.png" alt="شعار شركة تقنية" width="40" height="40" />
        <span>شركة تقنية</span>
      </a>

      <!-- قائمة التنقل -->
      <nav aria-label="التنقل الرئيسي">
        <button class="menu-toggle"
                aria-expanded="false"
                aria-controls="main-menu">
          <span class="sr-only">فتح القائمة</span>
          ☰
        </button>
        <ul id="main-menu" role="menubar">
          <li role="none">
            <a href="/" role="menuitem">الرئيسية</a>
          </li>
          <li role="none">
            <a href="/about" role="menuitem"
               aria-current="page">من نحن</a>
          </li>
          <li role="none">
            <a href="/services" role="menuitem">خدماتنا</a>
          </li>
          <li role="none">
            <a href="/team" role="menuitem">فريق العمل</a>
          </li>
          <li role="none">
            <a href="/contact" role="menuitem">تواصل معنا</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>`}
          />

          <h3>الخطوة 3: قسم البطل (Hero Section)</h3>
          <CodeBlock
            language="html"
            code={`  <main id="main-content" tabindex="-1">
    <!-- قسم البطل -->
    <section class="hero" aria-labelledby="hero-title">
      <h1 id="hero-title">نُبني المستقبل الرقمي</h1>
      <p class="hero-subtitle">
        نحن فريق من المطورين والمصممين المتحمسين
        لتحويل أفكارك إلى واقع رقمي مُبهر.
      </p>
      <div class="hero-actions">
        <a href="/contact" class="btn btn-primary">
          ابدأ مشروعك الآن
        </a>
        <a href="/services" class="btn btn-secondary">
          اكتشف خدماتنا
        </a>
      </div>
      <!-- صورة البطل -->
      <figure class="hero-image">
        <img
          src="hero-illustration.jpg"
          alt="رسم توضيحي لفريق عمل يُطور تطبيق ويب"
          width="600"
          height="400"
          loading="eager"
        />
      </figure>
    </section>`}
          />

          <h3>الخطوة 4: قسم الخدمات</h3>
          <CodeBlock
            language="html"
            code={`    <!-- قسم الخدمات -->
    <section class="services" aria-labelledby="services-title">
      <h2 id="services-title">خدماتنا</h2>
      <p>نقدم مجموعة شاملة من الخدمات الرقمية لتلبية احتياجات عملك</p>

      <div class="services-grid">
        <!-- خدمة 1 -->
        <article class="service-card">
          <figure>
            <img
              src="web-design-icon.png"
              alt=""
              aria-hidden="true"
              width="64"
              height="64"
            />
          </figure>
          <h3>تصميم المواقع</h3>
          <p>
            نصمم مواقع ويب عصرية وجذابة
            تجربة مستخدم مميزة وتعكس هوية علامتك التجارية.
          </p>
          <a href="/services/web-design"
             aria-label="اعرف المزيد عن تصميم المواقع">
            اعرف المزيد ←
          </a>
        </article>

        <!-- خدمة 2 -->
        <article class="service-card">
          <figure>
            <img
              src="mobile-dev-icon.png"
              alt=""
              aria-hidden="true"
              width="64"
              height="64"
            />
          </figure>
          <h3>تطوير التطبيقات</h3>
          <p>
            نطوّر تطبيقات موبايل لنظامي
            Android و iOS بأحدث التقنيات.
          </p>
          <a href="/services/mobile"
             aria-label="اعرف المزيد عن تطوير التطبيقات">
            اعرف المزيد ←
          </a>
        </article>

        <!-- خدمة 3 -->
        <article class="service-card">
          <figure>
            <img
              src="seo-icon.png"
              alt=""
              aria-hidden="true"
              width="64"
              height="64"
            />
          </figure>
          <h3>تحسين محركات البحث</h3>
          <p>
            نُحسّن ترتيب موقعك في محركات البحث
            لزيادة الزيارات والعملاء المحتملين.
          </p>
          <a href="/services/seo"
             aria-label="اعرف المزيد عن تحسين محركات البحث">
            اعرف المزيد ←
          </a>
        </article>
      </div>
    </section>`}
          />

          <h3>الخطوة 5: قسم فريق العمل</h3>
          <CodeBlock
            language="html"
            code={`    <!-- قسم فريق العمل -->
    <section class="team" aria-labelledby="team-title">
      <h2 id="team-title">فريق العمل</h2>
      <p>meet the talented people behind our success</p>

      <div class="team-grid">
        <!-- عضو 1 -->
        <article class="team-member">
          <figure>
            <img
              src="ahmed.jpg"
              alt="صورة أحمد المدير التقني"
              width="200"
              height="200"
              loading="lazy"
            />
          </figure>
          <h3>أحمد محمد</h3>
          <p class="role">المدير التقني</p>
          <p class="bio">
            مطور واجهات أمامية بخبرة 8 سنوات في تقنيات الويب الحديثة.
          </p>
          <ul class="social-links" aria-label="حسابات أحمد">
            <li>
              <a href="https://twitter.com/ahmed"
                 aria-label="حساب أحمد على تويتر">
                تويتر
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/ahmed"
                 aria-label="حساب أحمد على لينكدإن">
                لينكدإن
              </a>
            </li>
          </ul>
        </article>

        <!-- عضو 2 -->
        <article class="team-member">
          <figure>
            <img
              src="sara.jpg"
              alt="صورة سارة المصممة الرئيسية"
              width="200"
              height="200"
              loading="lazy"
            />
          </figure>
          <h3>سارة علي</h3>
          <p class="role">المصممة الرئيسية</p>
          <p class="bio">
            مصممة تجربة مستخدم بعيون حادة للتفاصيل وإبداع لا حدود له.
          </p>
          <ul class="social-links" aria-label="حسابات سارة">
            <li>
              <a href="https://twitter.com/sara"
                 aria-label="حساب سارة على تويتر">
                تويتر
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/sara"
                 aria-label="حساب سارة على Dribbble">
                Dribbble
              </a>
            </li>
          </ul>
        </article>

        <!-- عضو 3 -->
        <article class="team-member">
          <figure>
            <img
              src="khaled.jpg"
              alt="صورة خالد مدير المشاريع"
              width="200"
              height="200"
              loading="lazy"
            />
          </figure>
          <h3>خالد حسن</h3>
          <p class="role">مدير المشاريع</p>
          <p class="bio">
            خبير في إدارة المشاريع البرمجية وتنسيق الفرق لتحقيق النتائج.
          </p>
          <ul class="social-links" aria-label="حسابات خالد">
            <li>
              <a href="https://twitter.com/khaled"
                 aria-label="حساب خالد على تويتر">
                تويتر
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/khaled"
                 aria-label="حساب خالد على لينكدإن">
                لينكدإن
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>`}
          />

          <h3>الخطوة 6: نموذج التواصل</h3>
          <CodeBlock
            language="html"
            code={`    <!-- نموذج التواصل -->
    <section class="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">تواصل معنا</h2>
      <p>لديك مشروع أو سؤال؟ لا تتردد في التواصل معنا</p>

      <form aria-labelledby="contact-title" action="/api/contact"
            method="POST">

        <div class="form-row">
          <!-- حقل الاسم -->
          <div class="form-group">
            <label for="contact-name">
              الاسم الكامل
              <span aria-hidden="true" class="required">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              aria-required="true"
              autocomplete="name"
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          <!-- حقل البريد الإلكتروني -->
          <div class="form-group">
            <label for="contact-email">
              البريد الإلكتروني
              <span aria-hidden="true" class="required">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              aria-required="true"
              aria-describedby="email-help"
              autocomplete="email"
              placeholder="example@email.com"
            />
            <span id="email-help" class="help-text">
              لن نُشارك بريدك مع أي طرف ثالث
            </span>
          </div>
        </div>

        <!-- حقل الموضوع -->
        <div class="form-group">
          <label for="contact-subject">الموضوع</label>
          <select id="contact-subject" name="subject">
            <option value="">اختر الموضوع...</option>
            <option value="project">استشارة مشروع</option>
            <option value="job">فرصة عمل</option>
            <option value="collaboration">شراكة</option>
            <option value="other">أخرى</option>
          </select>
        </div>

        <!-- حقل الرسالة -->
        <div class="form-group">
          <label for="contact-message">
            رسالتك
            <span aria-hidden="true" class="required">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="6"
            required
            aria-required="true"
            aria-describedby="message-help"
            placeholder="اكتب رسالتك هنا..."
          ></textarea>
          <span id="message-help" class="help-text">
            الحد الأدنى 20 حرف
          </span>
        </div>

        <!-- زر الإرسال -->
        <button type="submit" class="btn btn-primary">
          إرسال الرسالة
        </button>
      </form>
    </section>
  </main>`}
          />

          <h3>الخطوة 7: تذييل الصفحة</h3>
          <CodeBlock
            language="html"
            code={`  <!-- تذييل الصفحة -->
  <footer>
    <div class="footer-container">
      <!-- معلومات الشركة -->
      <div class="footer-section">
        <h3>شركة تقنية</h3>
        <p>
          نُبني المستقبل الرقمي بأفكار إبداعية
          وتقنيات حديثة منذ عام 2020.
        </p>
      </div>

      <!-- روابط سريعة -->
      <div class="footer-section">
        <h3>روابط سريعة</h3>
        <nav aria-label="روابط التذييل">
          <ul>
            <li><a href="/privacy">سياسة الخصوصية</a></li>
            <li><a href="/terms">الشروط والأحكام</a></li>
            <li><a href="/sitemap">خريطة الموقع</a></li>
          </ul>
        </nav>
      </div>

      <!-- معلومات التواصل -->
      <div class="footer-section">
        <h3>تواصل معنا</h3>
        <address>
          <p>
            البريد الإلكتروني:
            <a href="mailto:info@techcompany.com">
              info@techcompany.com
            </a>
          </p>
          <p>
            الهاتف:
            <a href="tel:+966551234567">
              055-123-4567
            </a>
          </p>
        </address>
        <ul class="social-links" aria-label="حساباتنا على التواصل الاجتماعي">
          <li>
            <a href="https://twitter.com/techcompany"
               aria-label="تابعنا على تويتر">
              تويتر
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/company/techcompany"
               aria-label="تابعنا على لينكدإن">
              لينكدإن
            </a>
          </li>
          <li>
            <a href="https://instagram.com/techcompany"
               aria-label="تابعنا على انستقرام">
              انستقرام
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- أسفل التذييل -->
    <div class="footer-bottom">
      <p>
        &copy; <time dateTime="2026">2026</time>
        شركة تقنية. جميع الحقوق محفوظة.
      </p>
    </div>
  </footer>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: أسئلة مقابلات شائعة عن HTML */}
        {/* ========================================== */}
        <LessonSection title="أسئلة مقابلات شائعة عن HTML">
          <p>إليك بعض الأسئلة الشائعة في مقابلات العمل المتعلقة بـ HTML:</p>

          <ul>
            <li>
              <strong>س: ما الفرق بين HTML و HTML5؟</strong>
              <br />
              ج: HTML5 هو الإصدار الأخير من HTML ويحتوي على وسوم دلالية جديدة (مثل <code>&lt;article&gt;</code> و <code>&lt;section&gt;</code>)، ودعم أفضل للوسائط المتعددة، وتحسينات في الوصولية والأداء.
            </li>
            <li>
              <strong>س: ما الفرق بين div و span؟</strong>
              <br />
              ج: <code>&lt;div&gt;</code> عنصر كتلي (block) يبدأ في سطر جديد، بينما <code>&lt;span&gt;</code> عنصر مضمن (inline) لا يكسر السطر. كلاهما عام (generic) بدون معنى دلالي.
            </li>
            <li>
              <strong>س: ما الفرق بين class و id؟</strong>
              <br />
              ج: <code>id</code> فريد في الصفحة ولا يتكرر، بينما <code>class</code> يمكن تكراره لعدة عناصر. الـ id له أولوية أعلى في CSS ويُستخدم للوصول البرمجي.
            </li>
            <li>
              <strong>س: لماذا نستخدم meta viewport؟</strong>
              <br />
              ج: لجعل الموقع متجاوباً مع الأجهزة المحمولة. يُخبر المتصفح بضبط عرض الصفحة على عرض الجهاز.
            </li>
            <li>
              <strong>س: ما هي العناصر الدلالية ولماذا نستخدمها؟</strong>
              <br />
              ج: وسوم تحمل معنى دلالي مثل <code>&lt;header&gt;</code> و <code>&lt;nav&gt;</code>. تُحسن الوصولية و SEO وسهولة صيانة الكود.
            </li>
            <li>
              <strong>س: ما هو doctype ولماذا نحتاجه؟</strong>
              <br />
              ج: <code>&lt;!DOCTYPE html&gt;</code> يُخبر المتصفح أن الصفحة مكتوبة بـ HTML5. بدونه، قد يعمل المتصفح في وضع التوافق (Quirks Mode).
            </li>
            <li>
              <strong>س: كيف تُحسّن وصولية موقعك؟</strong>
              <br />
              ج: استخدام HTML الدلالي، إضافة alt للصور، ربط labels بالحقول، ضمان التنقل بلوحة المفاتيح، استخدام ARIA عند الحاجة.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: مقارنة كود المبتدئ وكود المحترف */}
        {/* ========================================== */}
        <LessonSection title="مقارنة: كود المبتدئ vs كود المحترف">
          <p>لنرَ الفرق بين كود مبتدئ ومحترف لنفس المحتوى:</p>

          <h3>❌ كود المبتدئ:</h3>
          <CodeBlock
            language="html"
            code={`<html>
<body>
  <div class="top">
    <div class="logo">شركتنا</div>
    <div class="links">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </div>
  </div>
  <div class="content">
    <div class="big-title">مرحبا بكم</div>
    <div class="text">نحن شركة...</div>
    <br /><br /><br />
    <div class="box">
      <div class="box-title">خدمة 1</div>
      <div class="box-text">وصف الخدمة</div>
    </div>
    <br />
    <input type="text" placeholder="اسمك" />
    <input type="email" placeholder="بريدك" />
    <div onclick="submit()">إرسال</div>
  </div>
  <div class="bottom">
    <div>حقوق النشر 2026</div>
  </div>
</body>
</html>`}
          />

          <h3>✅ كود المحترف:</h3>
          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <meta name="description"
        content="شركتنا - خدماتنا وفريق العمل">
  <title>شركتنا - الصفحة الرئيسية</title>
</head>
<body>
  <a href="#main" class="skip-link">跳转 للمحتوى</a>

  <header>
    <a href="/" aria-label="الرئيسية">
      <img src="logo.png" alt="شعار الشركة" width="40"
           height="40" />
    </a>
    <nav aria-label="التنقل الرئيسي">
      <ul>
        <li><a href="/" aria-current="page">الرئيسية</a></li>
        <li><a href="/about">من نحن</a></li>
      </ul>
    </nav>
  </header>

  <main id="main" tabindex="-1">
    <section aria-labelledby="welcome-title">
      <h1 id="welcome-title">مرحباً بكم</h1>
      <p>نحن شركة متخصصة في الحلول الرقمية.</p>
    </section>

    <section aria-labelledby="services-title">
      <h2 id="services-title">خدماتنا</h2>
      <article class="service-card">
        <h3>خدمة التصميم</h3>
        <p>وصف تفصيلي للخدمة هنا.</p>
        <a href="/services/design"
           aria-label="اعرف المزيد عن خدمة التصميم">
          اعرف المزيد
        </a>
      </article>
    </section>

    <section aria-labelledby="contact-title">
      <h2 id="contact-title">تواصل معنا</h2>
      <form aria-labelledby="contact-title">
        <label for="name">الاسم</label>
        <input type="text" id="name" name="name"
               required autocomplete="name" />
        <label for="email">البريد الإلكتروني</label>
        <input type="email" id="email" name="email"
               required autocomplete="email" />
        <button type="submit">إرسال</button>
      </form>
    </section>
  </main>

  <footer>
    <p>
      &copy; <time dateTime="2026">2026</time>
      جميع الحقوق محفوظة
    </p>
  </footer>
</body>
</html>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ✅ الفروقات الرئيسية:
            </p>
            <ul>
              <li>DOCTYPE و meta viewport و charset</li>
              <li>HTML دلالي بدلاً من div لكل شيء</li>
              <li>alt text وصفية للصور</li>
              <li>labels مرتبطة بالحقول</li>
              <li>لا استخدام br لإنشاء مسافات</li>
              <li>button بدلاً من div with onclick</li>
              <li>رابط تخطي للوصولية</li>
              <li>aria labels و semantic landmarks</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: نصائح للانتقال لمرحلة CSS */}
        {/* ========================================== */}
        <LessonSection title="نصائح للانتقال لمرحلة CSS">
          <p>
            الآن بعد أن أتقنت HTML، أنت جاهز للانتقال لمرحلة <strong>CSS</strong> لتصفح صفحاتك. إليك نصائح للانتقال السلس:
          </p>

          <ul>
            <li>
              <strong>✅ فكّر في HTML كهيكل:</strong>
              HTML يُعطيك البنية والدلالة. CSS يُعطيك الشكل والتصميم. لا تخلط بينهما.
            </li>
            <li>
              <strong>✅ ابدأ بالهيكل أولاً:</strong>
              اكتب HTML أولاً وتأكد من صحته قبل إضافة أي CSS.
            </li>
            <li>
              <strong>✅ لا تستخدم inline styles:</strong>
              تجنب استخدام <code>style=&quot;...&quot;</code> في HTML. استخدم ملفات CSS خارجية.
            </li>
            <li>
              <strong>✅ افهم نموذج الصندوق (Box Model):</strong>
              كل عنصر HTML هو صندوق يحتوي على محتوى + حشوة + حد + هامش.
            </li>
            <li>
              <strong>✅ تعرّف على Flexbox و Grid:</strong>
              هما الأداتان الأساسيتان للتخطيط في CSS الحديث.
            </li>
            <li>
              <strong>✅ ابدأ بالتصميم المتجاوب:</strong>
              تعلم كيف تجعل موقعك يعمل على جميع أحجام الشاشات من البداية.
            </li>
            <li>
              <strong>✅ تدرب على مشاريع صغيرة:</strong>
              حوّل صفحات HTML التي أنشأتها إلى صفحات مُنسّقة بـ CSS.
            </li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تلميح:
            </p>
            <p>
              في مرحلة CSS سنتعلم كيف نُنسّق كل العناصر HTML التي تعلمناها. ستتحول صفحاتك من صفحات نصية بسيطة إلى مواقع ويب احترافية وجذابة!
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟ - ملخص شامل">
          <p>خلال مرحلة HTML، تعلمنا ما يحدث في الخلفية عند تحميل صفحة ويب:</p>

          <ol>
            <li>
              <strong>طلب الصفحة:</strong> يُرسل المتصفح طلباً للخادم (Server) للحصول على ملف HTML.
            </li>
            <li>
              <strong>تحليل HTML (Parsing):</strong> يقرأ المتصفح ملف HTML سطراً بعد سطر ويُحوّله إلى بنية شجرية (DOM Tree).
            </li>
            <li>
              <strong>بناء Accessibility Tree:</strong> يبني المتصفح أيضاً شجرة وصولية منفصلة لقارئات الشاشة.
            </li>
            <li>
              <strong>تطبيق CSS (إن وُجد):</strong> يجمع المتصفح HTML مع CSS لبناء Render Tree.
            </li>
            <li>
              <strong>التخطيط (Layout):</strong> يحسب المتصفح موضع وأبعاد كل عنصر.
            </li>
            <li>
              <strong>الرسم (Paint):</strong> يرسم المتصفح كل عنصر على الشاشة.
            </li>
          </ol>

          <CodeBlock
            language="text"
            code={`طلب الصفحة ← استلام HTML ← تحليل HTML
    ↓
بناء DOM Tree ← بناء Accessibility Tree
    ↓
تحميل CSS (إن وُجد) ← بناء CSSOM
    ↓
دمج DOM + CSSOM = Render Tree
    ↓
حساب التخطيط (Layout/Reflow)
    ↓
الرسم على الشاشة (Paint/Repaint)
    ↓
الصفحة جاهزة للمستخدم! 🎉`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص مرحلة HTML">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>HTML</strong> هو الأساس الذي تُبنى عليه كل صفحات الويب</li>
              <li>تعلمنا كتابة وسوم HTML الصحيحة مع السمات والقيم</li>
              <li>تعلمنا إنشاء روابط وصور ونماذج تفاعلية</li>
              <li>تعلمنا أهمية HTML الدلالي لتحسين بنية الصفحة</li>
              <li>تعلمنا أساسيات الوصولية (A11y) لجعل الموقع متاحاً للجميع</li>
              <li>بنينا مثالاً عملياً كاملاً لصفحة &quot;من نحن&quot; احترافية</li>
              <li>أنت الآن جاهز للانتقال لمرحلة <strong style={{ color: "var(--secondary)" }}>CSS</strong> لتنسيق وتصميم صفحاتك!</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="أي من التالي يمثل كود HTML صحيح ومحترف؟"
          options={[
            "<html><body><div>نص</div></body></html>",
            "<!DOCTYPE html><html lang='ar'><body><p>نص</p></body></html>",
            "<!DOCTYPE html><html lang=\"ar\" dir=\"rtl\"><head><meta charset=\"UTF-8\"></head><body><p>نص</p></body></html>",
            "<div>نص</div>",
          ]}
          correctAnswer={2}
          explanation="الخيار الثالث هو الأكمل والأصح: يحتوي على DOCTYPE و lang و dir و charset و head و body."
        />

        <Quiz
          question="لماذا نستخدم alt في الصور؟"
          options={[
            "لتحسين سرعة تحميل الصورة",
            "لتحسين لون الصورة",
            "لتقديم نص بديل للمكفوف ولتحسين SEO",
            "لإضافة تأثيرات بصرية على الصورة",
          ]}
          correctAnswer={2}
          explanation="alt text يُقرأ من قارئ الشاشة للمكفوف، ويُساعد محركات البحث على فهم محتوى الصورة، ويظهر إذا فشل تحميل الصورة."
        />

        <Quiz
          question="ما هو الخطوة التالية بعد إتقان HTML؟"
          options={[
            "تعلم Python",
            "تعلم CSS لتنسيق وتصميم الصفحات",
            "تعلم قواعد البيانات",
            "البدء بالنشر مباشرة",
          ]}
          correctAnswer={1}
          explanation="CSS هو الخطوة التالية الطبيعية. HTML يُعطيك البنية والدلالة، وCSS يُعطيك الشكل والتصميم. معاً يُنشئان صفحة ويب متكاملة."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="التحدي النهائي: أنشئ صفحة HTML كاملة من الصفر"
          description={
            <p>
              أنشئ صفحة &quot;الأسئلة الشائعة&quot; (FAQ) لمشروعك الشخصي باستخدام كل ما تعلمته. يجب أن تتضمن:
              <br />
              1. هيكل الصفحة الكامل (<code>&lt;!DOCTYPE&gt;</code>، <code>&lt;html&gt;</code>، <code>&lt;head&gt;</code>، <code>&lt;body&gt;</code>)
              <br />
              2. رأس الصفحة مع شعار وتنقل دلالية
              <br />
              3. عنوان رئيسي وعناوين فرعية متسلسلة
              <br />
              4. عناصر <code>&lt;details&gt;</code> و <code>&lt;summary&gt;</code> للأسئلة
              <br />
              5. صورة مع alt نصي
              <br />
              6. نموذج تواصل بـ labels مرتبطين
              <br />
              7. تذييل الصفحة بمعلومات حقوق النشر
              <br />
              8. اتصل بالوصولية (skip link، aria labels)
            </p>
          }
        >
          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>الأسئلة الشائعة</title>
</head>
<body>
  <a href="#main" class="skip-link">跳转 للمحتوى</a>

  <header>
    <nav aria-label="التنقل الرئيسي">
      <ul>
        <li><a href="/">الرئيسية</a></li>
        <li><a href="/faq" aria-current="page">الأسئلة الشائعة</a></li>
        <li><a href="/contact">تواصل</a></li>
      </ul>
    </nav>
  </header>

  <main id="main" tabindex="-1">
    <h1>الأسئلة الشائعة</h1>

    <figure>
      <img src="faq.jpg" alt="شخص يقرأ كتاباً" />
      <figcaption>إجابات على أسئلتكم الشائعة</figcaption>
    </figure>

    <details>
      <summary>كيف أسجل في المنصة؟</summary>
      <p>1. اضغط على زر التسجيل
      2. أدخل بياناتك
      3. أكمل</p>
    </details>

    <details>
      <summary>هل الخدمة مجانية؟</summary>
      <p>نعم، نوفر خطة مجانية مع ميزات أساسية.</p>
    </details>

    <section aria-labelledby="ask-title">
      <h2 id="ask-title">لم تجد إجابتك؟</h2>
      <form>
        <label for="q-name">الاسم</label>
        <input type="text" id="q-name" required />
        <label for="q-email">البريد</label>
        <input type="email" id="q-email" required />
        <label for="q-msg">سؤالك</label>
        <textarea id="q-msg" rows="4" required></textarea>
        <button type="submit">إرسال</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; <time dateTime="2026">2026</time> جميع الحقوق محفوظة</p>
  </footer>
</body>
</html>`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet شامل لمرحلة HTML */}
        {/* ========================================== */}
        <CheatSheet title="Cheat Sheet شامل لمرحلة HTML">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>هيكل الصفحة:</p>
              <CodeBlock language="html" code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>العنوان</title>
</head>
<body>
  <!-- المحتوى -->
</body>
</html>`} />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>العناصر الدلالية:</p>
              <CodeBlock language="html" code={`<header>   <nav>     <main>
<section>  <article> <aside>
<footer>   <figure>  <figcaption>
<blockquote>  <cite>  <time>`} />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>النماذج:</p>
              <CodeBlock language="html" code={`<form>
  <label for="x">الاسم</label>
  <input type="text" id="x" required>
  <textarea></textarea>
  <select>
    <option>...</option>
  </select>
  <button type="submit">إرسال</button>
</form>`} />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>الروابط والصور:</p>
              <CodeBlock language="html" code={`<!-- روابط -->
<a href="url">نص</a>
<a href="url" target="_blank"
   rel="noopener noreferrer">جديد</a>
<a href="mailto:x@x.com">بريد</a>

<!-- صور -->
<img src="pic.jpg" alt="وصف"
     loading="lazy" />`} />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>الوصولية:</p>
              <CodeBlock language="html" code={`aria-label="اسم مسموع"
aria-required="true"
aria-describedby="id"
aria-invalid="true"
aria-current="page"
role="alert" role="button"
class="skip-link" sr-only`} />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>نصائح المحترفين:</p>
              <CodeBlock language="text" code={`1. HTML أولاً، CSS ثانياً
2. استخدم semantic HTML دائماً
3. alt لكل صورة
4. label لكل حقل
5. Skip link للوصولية
6. لا br للمسافات
7. لا div لكل شيء
8. اختبر بـ Tab و Screen Reader`} />
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* رسالة تهنئة */}
        {/* ========================================== */}
        <div
          className="rounded-xl p-6 my-6 border-2 text-center"
          style={{ background: "var(--surface)", borderColor: "var(--accent)" }}
        >
          <span className="text-4xl block mb-4">🎉</span>
          <h2
            className="text-2xl font-bold mb-3"
            style={{ color: "var(--accent)" }}
          >
            مبروك! أكملت مرحلة HTML
          </h2>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>
            أنت الآن تملك الأساس القوي لبناء أي صفحة ويب. الخطوة التالية هي تعلم <strong>CSS</strong> لتصفح صفحاتك وجعلها جميلة واحترافية.
          </p>
          <p style={{ color: "var(--muted)" }}>
            استمر في التدرب على المشاريع الصغيرة ولا تتوقف عن التعلم!
          </p>
        </div>

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
