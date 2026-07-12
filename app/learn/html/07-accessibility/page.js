// =====================================================
// ملف: page.js (الدرس السابع: الوصولية - Accessibility / A11y)
// المكان: app/learn/html/07-accessibility/page.js
// الوظيفة: تعريف المبتدئين بأهمية الوصولية وكيفية تحسين صفحاتهم
// URL: /learn/html/07-accessibility
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function Accessibility() {
  const lessonInfo = getLessonBySlug("html", "07-accessibility");

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
        {/* القسم الأول: ما هي الوصولية ولماذا مهمة */}
        {/* ========================================== */}
        <LessonSection title="ما هي الوصولية (Accessibility) ولماذا مهمة؟">
          <p>
            <strong>الوصولية (Accessibility)</strong> أو ما يُعرف اختصاراً بـ <strong>A11y</strong> (عدد الحروف بين A و y هو 11) هي ممارسة تصميم المواقع والتطبيقات بحيث تكون <strong>متاحة للجميع</strong> بغض النظر عن قدراتهم أو إعاقاتهم.
          </p>

          <p>
            الوصولية تضمن أن جميع المستخدمين - بمن فيهم أصحاب الإعاقات - يمكنهم التفاعل مع موقعك واستخدامه بكفاءة. هذا ليس &_quot;رفاهاً&_quot; بل هو <strong>مسؤولية أخلاقية وقانونية</strong> في كثير من الدول.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه بسيط:
            </p>
            <p>
              تخيّل أنك تبني مبنى. هل تكتفي بأدراج فقط؟ لا، تحتاج مصعد و منحدرات للwheelchair وبطاقات برايل. الوصولية هي نفس الشيء لكن لمواقع الويب - جعل&eacute; متاحاً للجميع.
            </p>
          </div>

          <p>
            <strong>الأرقام تتحدث:</strong> حوالي <strong>15-20%</strong> من سكان العالم يعانون من شكل من أشكال الإعاقة. تجاهلهم يعني خسارة فرقة كبيرة من المستخدمين والعملاء المحتملين.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: من يستفيد من الوصولية؟ */}
        {/* ========================================== */}
        <LessonSection title="من يستفيد من الوصولية؟">
          <p>الوصولية ليست للمكفوفين فقط، بل لجميع الفئات:</p>

          <ul>
            <li>
              <strong>المكفوفون وضعاف البصر:</strong> يستخدمون قارئات شاشة (Screen Readers) تقرأ محتوى الصفحة بصوت عالٍ. يحتاجون لـ alt text للصور وعناصر مُعرّفة بشكل صحيح.
            </li>
            <li>
              <strong>ضعاف السمع:</strong> يحتاجون لترجمة نصية (captions) للفيديوهات ونص بديل للمحتوى الصوتي.
            </li>
            <li>
              <strong>أصحاب الإعاقات الحركية:</strong> يستخدمون لوحة مفاتيح أو أجهزة تحكم خاصة للتنقل بدلاً من الماوس. يحتاجون لكل العناصر التفاعلية يمكن الوصول إليها بالضغط على Tab.
            </li>
            <li>
              <strong>ذوي الاضطرابات المعرفية:</strong> يحتاجون لتصميم واضح وبسيط وبنية منطقية للمحتوى.
            </li>
            <li>
              <strong>كبار السن:</strong> قد يعانون من ضعف النظر أو الحركات الدقيقة. يحتاجون لخطوط كبيرة وزر واضحة.
            </li>
            <li>
              <strong>المستخدمون في ظروف غير مثالية:</strong> شاشة صغيرة، إضاءة خافتة، اتصال بطيء. الوصولية تُحسّن التجربة للجميع.
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
              تحسين الوصولية يُفيد <strong>الجميع</strong> وليس أصحاب الإعاقات فقط. مثلاً، النص البديل للصور يُساعد محركات البحث cũng如搜狗和 Google على فهم صورك.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: المشكلة يحلها */}
        {/* ========================================== />
        <LessonSection title="المشكلة التي تحلها الوصولية">
          <p>بدون الوصولية، يحدث التالي:</p>

          <ul>
            <li>المكفوف لا يستطيع قراءة محتوى صفحتك لأن قارئ الشاشة لا يفهم بنيتها.</li>
            <li>صاحب الإعاقة الحركية لا يستطيع النقر على زر صغير أو الوصول لقائمة منسدلة.</li>
            <li>ضعيف السمع لا يستطيع فهم فيديو بدون ترجمة نصية.</li>
            <li>كبير السن يجد صعوبة في قراءة نص صغير أو النقر على روابط قريبة من بعضها.</li>
          </ul>

          <p>
            <strong>الوصولية تحل هذه المشاكل</strong> عبر مجموعة من الممارسات والمعايير التي تضمن أن موقعك يعمل للجميع.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: Semantic HTML وعلاقته بالوصولية */}
        {/* ========================================== */}
        <LessonSection title="Semantic HTML وعلاقته بالوصولية">
          <p>
            في الدرس السابق تعلمنا HTML الدلالي. الآن سنتعلم أن استخدام الوسوم الدلالية <strong>ليس فقط</strong> لتحسين بنية الكود، بل هو <strong>أداة أساسية</strong> للوصولية.
          </p>

          <p>قارئات الشاشة تعتمد بشكل كبير على HTML الدلالي:</p>

          <ul>
            <li>عندما تستخدم <code>&lt;nav&gt;</code>، يُخبر المكفوف: &quot;أنت الآن في قسم التصفح&quot;</li>
            <li>عندما تستخدم <code>&lt;main&gt;</code>، يقول: &quot;跳转 إلى المحتوى الرئيسي&quot;</li>
            <li>عندما تستخدم <code>&lt;article&gt;</code>، يقول: &quot;محتوى مستقل&quot;</li>
            <li>عندما تستخدم <code>&lt;h1&gt;</code> إلى <code>&lt;h6&gt;</code>، يستطيع بناء &quot;جدول محتويات&quot; للصفحة</li>
          </ul>

          <CodeBlock
            language="html"
            code={`<!-- ❌ بدون HTML دلالي - قارئ الشاشة يقرأ كل شيء كنص عادي -->
<div class="header">
  <div class="nav">
    <div><a href="/">الرئيسية</a></div>
  </div>
</div>
<div class="content">
  <div class="title">عنوان المقال</div>
  <div class="text">نص المقال...</div>
</div>

<!-- ✅ مع HTML دلالي - قارئ الشاشة يفهم البنية -->
<header>
  <nav aria-label="التنقل الرئيسي">
    <ul>
      <li><a href="/">الرئيسية</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h2>عنوان المقال</h2>
    <p>نص المقال...</p>
  </article>
</main>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: صور Alt Text */}
        {/* ========================================== */}
        <LessonSection title="صور Alt Text - النص البديل">
          <p>
            سمة <code>alt</code> في وسم <code>&lt;img&gt;</code> هي من أهم عناصر الوصولية. قارئ الشاشة يقرأ هذا النص بدلاً من الصورة.
          </p>

          <h3>قواعد كتابة Alt Text الجيد:</h3>

          <CodeBlock
            language="html"
            code={`<!-- ❌ سيء: نص عام جداً -->
<img src="photo.jpg" alt="صورة" />

<!-- ❌ سيء: نص طويل جداً -->
<img src="photo.jpg" alt="هذه صورة لقطة صغيرة لونها بني وابيض تجلس على سجادة حمراء في غرفة معيشة" />

<!-- ❌ سيء: بدون alt على الإطلاق -->
<img src="photo.jpg" />

<!-- ✅ جيد: وصف مختصر ودقيق -->
<img src="cat.jpg" alt="قطة بنية تجلس على سجادة" />

<!-- ✅ صورة تزيينية (زخرفية) - اترك alt فارغاً -->
<img src="decorative-line.png" alt="" role="presentation" />

<!-- ✅ صورة مع رابط - صف الهدف -->
<a href="/product/123">
  <img src="product.jpg" alt="سماعة بلوتوث لاسلكية" />
  <span>التفاصيل</span>
</a>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              ⚠️ قاعدة مهمة:
            </p>
            <p>
              <strong>لا تبدأ Alt النص بـ &quot;صورة لـ&quot; أو &quot;صورة لـ&quot;</strong>. قارئ الشاشة يعلم أن هذا صورة تلقائياً فيقول &quot;صورة: قطّة بنية&quot;. لا داعي لتكرار هذه المعلومة.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: Labels و Accessibility */}
        {/* ========================================== */}
        <LessonSection title="Labels و الوصولية">
          <p>
            كل حقل إدخال في نموذج يجب أن يكون له <strong>تسمية واضحة</strong> مرتبطة به باستخدام <code>&lt;label&gt;</code>. هذا يُخبر قارئ الشاشة باسم الحقل، ويُتيح للمستخدم النقر على التسمية لتعريض الحقل.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- ❌ سيء: بدون label -->
<div>
  الاسم:
  <input type="text" placeholder="أدخل اسمك" />
</div>

<!-- ❌ سيء: label غير مرتبط -->
<label>البريد الإلكتروني</label>
<input type="email" />

<!-- ✅ جيد: label مرتبط بـ for/id -->
<label for="user-name">الاسم الكامل</label>
<input type="text" id="user-name" name="name"
       placeholder="أدخل اسمك" />

<!-- ✅ أفضل: label يلف الحقل (لا حاجة لـ for/id) -->
<label>
  البريد الإلكتروني
  <input type="email" name="email"
         placeholder="example@email.com" />
</label>

<!-- ✅ حقول النموذج مع aria-required -->
<label for="phone">رقم الهاتف</label>
<input type="tel" id="phone" name="phone"
       aria-required="true"
       aria-describedby="phone-help" />
<span id="phone-help">مثال: 0551234567</span>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 لماذا for/id مهمة؟
            </p>
            <p>
              السمة <code>for</code> في <code>&lt;label&gt;</code> تربط التسمية بالحقل عبر الـ <code>id</code> الخاص به. هذا يتيح: (1) قارئ الشاشة يعرف اسم الحقل، (2) النقر على التسمية يُركّز الحقل تلقائياً.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: Keyboard Navigation و tabindex */}
        {/* ========================================== */}
        <LessonSection title="التنقل بلوحة المفاتيح (Keyboard Navigation)">
          <p>
            بعض المستخدمين لا يستطيعون استخدام الماوس ويعتمدون على لوحة المفاتيح فقط. يجب أن تكون جميع العناصر التفاعلية قابلة للوصول عبر الضغط على مفتاح <strong>Tab</strong>.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- الترتيب الافتراضي للتنقل بـ Tab يตาม ترتيب HTML -->

<!-- tabindex="0" : أضف العنصر لترتيب Tab الافتراضي -->
<button tabindex="0">إرسال</button>

<!-- tabindex="-1" : يمكن الوصول البرمجي فقط (لا يظهر في Tab) -->
<div tabindex="-1" id="error-message" role="alert">
  خطأ في البيانات!
</div>

<!-- tabindex="1" أو أعلى: فرض الترتيب (يُفضل تجنبه!) -->
<!-- ❌ لا تفعل هذا - يكسر تجربة المستخدم -->
<input tabindex="3" type="text" />
<input tabindex="1" type="email" />`}

          />

          <h3>رابط التخطي (Skip Link):</h3>
          <p>
            رابط مخفي يظهر فقط عند الضغط على Tab، ويُتيح للمستخدم تخطي المحتوى والتوجه للمحتوى الرئيسي:
          </p>

          <CodeBlock
            language="html"
            code={`<!-- رابط التخطي - أول عنصر في الصفحة -->
<a href="#main-content" class="skip-link">
  انتقل للمحتوى الرئيسي
</a>

<header>
  <nav>...</nav>
</header>

<!-- المحتوى الرئيسي -->
<main id="main-content" tabindex="-1">
  <h1>عنوان الصفحة</h1>
  <!-- المحتوى هنا -->
</main>`}
          />

          <CodeBlock
            language="css"
            code={`/* تنسيق رابط التخطي - مخفي افتراضياً */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  z-index: 100;
  transition: top 0.3s;
}

/* يظهر عند التركيز بـ Tab */
.skip-link:focus {
  top: 0;
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: Color Contrast */}
        {/* ========================================== */}
        <LessonSection title="التباين اللوني (Color Contrast)">
          <p>
            التباين بين لون النص ولون الخلفية مهم جداً لقراءة المحتوى. المعيار الدولي هو <strong>WCAG</strong> (Web Content Accessibility Guidelines).
          </p>

          <ul>
            <li>
              <strong>المستوى AA (الحد الأدنى):</strong> نسبة تباين 4.5:1 للنص العادي، 3:1 للنص الكبير.
            </li>
            <li>
              <strong>المستوى AAA (الأعلى):</strong> نسبة تباين 7:1 للنص العادي، 4.5:1 للنص الكبير.
            </li>
          </ul>

          <CodeBlock
            language="html"
            code={`<!-- ❌ تباين سيء: نص فاتح على خلفية فاتحة -->
<p style="color: #ccc; background: #fff">نص صعب القراءة</p>

<!-- ❌ تباين سيء: لا تعتمد على اللون فقط -->
<p style="color: red">خطأ!</p>

<!-- ✅ تباين جيد: نص غامق على خلفية فاتحة -->
<p style="color: #1a1a1a; background: #ffffff">نص واضح وسهل القراءة</p>

<!-- ✅ استخدم مؤشرات إضافية غير اللون -->
<p style="color: #d32f2f">
  <strong>خطأ:</strong> البريد الإلكتروني غير صحيح
</p>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 أداة مفيدة:
            </p>
            <p>
              استخدم <strong>WebAIM Contrast Checker</strong> (webaim.org/resources/contrastchecker) للتحقق من نسبة التباين بين أي لونين.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: ARIA */}
        {/* ========================================== */}
        <LessonSection title="مقدمة في ARIA">
          <p>
            <strong>ARIA</strong> اختصار لـ Accessible Rich Internet Applications. هي مجموعة من السمات التي تُحسّن الوصولية للعناصر التي لا توفر HTML الدلالي الكافي.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              ⚠️ القاعدة الذهبية لـ ARIA:
            </p>
            <p>
              <strong>لا تستخدم ARIA إذا أمكن استخدام HTML دلالي!</strong> أولاً حاول استخدام العناصر الدلالية، واستخدم ARIA فقط كحل أخير.
            </p>
          </div>

          <h3>أشهر سمات ARIA:</h3>

          <CodeBlock
            language="html"
            code={`<!-- role: يُعرّف نوع العنصر -->
<div role="alert">حدث خطأ!</div>
<div role="button" tabindex="0">زر مخصص</div>
<div role="navigation">التنقل هنا</div>

<!-- aria-label: يُعطي العنصر اسماً مسموعاً -->
<nav aria-label="التنقل الرئيسي">
  <a href="/">الرئيسية</a>
</nav>
<nav aria-label="روابط التواصل">
  <a href="/twitter">تويتر</a>
</nav>

<!-- aria-describedby: يربط عنصر بوصف إضافي -->
<label for="password">كلمة المرور</label>
<input type="password" id="password"
       aria-describedby="password-req" />
<span id="password-req">
  يجب أن تحتوي على 8 أحرف على الأقل
</span>

<!-- aria-hidden: يُخفي العنصر من قارئ الشاشة -->
<span aria-hidden="true">★★★</span>
<span class="sr-only">3 من 5 نجوم</span>

<!-- aria-live: يُ notifying قارئ الشاشة بالتحديثات -->
<div aria-live="polite" id="search-results">
  5 نتائج
</div>`}
          />

          <h3>الوصول المخفي للمستخدمين (Screen Reader Only):</h3>
          <CodeBlock
            language="css"
            code={`/* هذا الـ class يُخفي العنصر بصرياً لكن قارئ الشاشة يقرأه */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: Role Attribute */}
        {/* ========================================== */}
        <LessonSection title="سمة Role - تحديد الأدوار">
          <p>
            سمة <code>role</code> تُخبر قارئ الشاشة بنوع العنصر ودوره. هذا مفيد خاصة مع العناصر المخصصة (custom elements):
          </p>

          <CodeBlock
            language="html"
            code={`<!-- أدوار البناء (Landmark Roles) -->
<div role="banner">رأس الصفحة (مثل header)</div>
<div role="navigation">التنقل (مثل nav)</div>
<div role="main">المحتوى الرئيسي (مثل main)</div>
<div role="contentinfo">تذييل الصفحة (مثل footer)</div>
<div role="complementary">محتوى جانبي (مثل aside)</div>

<!-- أدوار الأدوات -->
<div role="button" tabindex="0" onkeypress="handleKeyPress(event)">
  زر مخصص
</div>

<div role="tablist">
  <button role="tab" aria-selected="true">تبويب 1</button>
  <button role="tab" aria-selected="false">تبويب 2</button>
</div>
<div role="tabpanel">محتوى التبويب 1</div>

<!-- أدوار الحالة -->
<div role="alert" aria-live="assertive">
  تم حفظ التغييرات بنجاح
</div>

<div role="status" aria-live="polite">
  جاري التحميل...
</div>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: مثال عملي - تحسين وصولية نموذج */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: تحسين وصولية صفحة نموذج">
          <p>لنأخذ نموذج تواصل بسيط ونُحسّن وصوليته:</p>

          <h3>❌ بدون وصولية:</h3>
          <CodeBlock
            language="html"
            code={`<div class="form">
  <div>الاسم:</div>
  <input type="text" />

  <div>البريد:</div>
  <input type="text" />

  <div>الرسالة:</div>
  <textarea></textarea>

  <div class="btn">إرسال</div>
</div>`}
          />

          <h3>✅ مع وصولية محسّنة:</h3>
          <CodeBlock
            language="html"
            code={`<form aria-labelledby="form-title">
  <h2 id="form-title">نموذج التواصل معنا</h2>

  <!-- حقل الاسم -->
  <div>
    <label for="contact-name">
      الاسم الكامل <span aria-hidden="true">*</span>
    </label>
    <input
      type="text"
      id="contact-name"
      name="name"
      aria-required="true"
      aria-invalid="false"
      autocomplete="name"
      placeholder="أدخل اسمك الكامل"
    />
  </div>

  <!-- حقل البريد الإلكتروني -->
  <div>
    <label for="contact-email">
      البريد الإلكتروني <span aria-hidden="true">*</span>
    </label>
    <input
      type="email"
      id="contact-email"
      name="email"
      aria-required="true"
      aria-describedby="email-help"
      autocomplete="email"
      placeholder="example@email.com"
    />
    <span id="email-help">
      لن نُشارك بريدك مع أي طرف ثالث
    </span>
  </div>

  <!-- حقل الهاتف (اختياري) -->
  <div>
    <label for="contact-phone">رقم الهاتف (اختياري)</label>
    <input
      type="tel"
      id="contact-phone"
      name="phone"
      aria-required="false"
      autocomplete="tel"
      placeholder="05XXXXXXXX"
    />
  </div>

  <!-- حقل الرسالة -->
  <div>
    <label for="contact-message">
      رسالتك <span aria-hidden="true">*</span>
    </label>
    <textarea
      id="contact-message"
      name="message"
      aria-required="true"
      aria-describedby="message-help"
      rows="5"
      placeholder="اكتب رسالتك هنا..."
    ></textarea>
    <span id="message-help">
      الحد الأدنى 10 أحرف
    </span>
  </div>

  <!-- زر الإرسال -->
  <button type="submit">
    إرسال الرسالة
  </button>
</form>`}
          />

          <h3>رسائل الخطأ المُحسّنة:</h3>
          <CodeBlock
            language="html"
            code={`<!-- حقل به خطأ -->
<div>
  <label for="email-error">
    البريد الإلكتروني
    <span aria-hidden="true">*</span>
  </label>
  <input
    type="email"
    id="email-error"
    aria-required="true"
    aria-invalid="true"
    aria-describedby="email-error-msg"
  />
  <span id="email-error-msg" role="alert" style="color: red">
    البريد الإلكتروني غير صحيح. تأكد من صيغته.
  </span>
</div>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>كيف تعمل قارئات الشاشة مع صفحتك؟</p>

          <ol>
            <li>
              <strong>بناء شجرة accessibility:</strong> قارئ الشاشة يبني نموذجاً شجرياً من HTML يعتمد على العناصر الدلالية وسمات ARIA.
            </li>
            <li>
              <strong>تسلسل القراءة:</strong> يقرأ المحتوى بالترتيب الذي يظهر في DOM (ليس بالترتيب البصري بالضرورة).
            </li>
            <li>
              <strong>تقديم المعالم (Landmarks):</strong> يستخدم العناصر الدلالية (<code>&lt;header&gt;</code>، <code>&lt;nav&gt;</code>، <code>&lt;main&gt;</code>) لتقديم &quot;خرائط&quot; للمستخدم.
            </li>
            <li>
              <strong>التنقل السريع:</strong> يستطيع المستخدم القفز بين الأقسام مباشرة (مثلاً، الانتقال لـ <code>&lt;main&gt;</code> مباشرة).
            </li>
            <li>
              <strong>قراءة الصور:</strong> يقرأ <code>alt</code> النص بدلاً من الصورة.
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
              يمكنك تجربة كيف يبدو موقعك لقارئ الشاشة بتفعيل <strong>VoiceOver</strong> على Mac (Cmd + F5) أو <strong>Narrator</strong> على Windows (Win + Ctrl + Enter).
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث عشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة في الوصولية">
          <ul>
            <li>
              <strong>❌ نسيان alt للصور:</strong>
              <br />
              كل صورة يجب أن يكون لها سمة <code>alt</code>. حتى لو كانت صورة زخرفية، اكتب <code>alt=&quot;&quot;</code> بدلاً من عدم كتابتها.
            </li>
            <li>
              <strong>❌ استخدام div بدلاً من button:</strong>
              <br />
              كتابة <code>&lt;div onclick=&quot;...&quot;&gt;اضغط هنا&lt;/div&gt;</code> بدلاً من <code>&lt;button&gt;</code>. الـ div لا يمكن الوصول إليه بـ Tab ولا يعرف قارئ الشاشة أنه زر.
            </li>
            <li>
              <strong>❌ نسيان label في النماذج:</strong>
              <br />
              كل حقل إدخال يجب أن يكون له label واضح. بدونه، المستخدم المكفوف لا يعرف ماذا يُطلب منه.
            </li>
            <li>
              <strong>❌ الاعتماد على اللون فقط:</strong>
              <br />
              عدم استخدام مؤشرات بصرية إضافية (أيقونات، نصوص، أشكال) بجانب الألوان. المكفوف لا يستطيع تمييز الألوان.
            </li>
            <li>
              <strong>❌ استخدام tabindex بأرقام موجبة:</strong>
              <br />
              استخدام <code>tabindex=&quot;5&quot;</code> يُغيّر الترتيب الطبيعي للتنقل ويكسر تجربة المستخدم. استخدم 0 أو -1 فقط.
            </li>
            <li>
              <strong>❌ نسيان تسلسل العناوين:</strong>
              <br />
              تخطي درجات العناوين (مثلاً من h1 لـ h3 مباشرة) يكسر جدول المحتويات في قارئ الشاشة.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li>
              <strong>✅ استخدم HTML الدلالي أولاً:</strong>
              العناصر الدلالية توفر الوصولية المجانية. استخدم <code>&lt;button&gt;</code> بدلاً من <code>&lt;div&gt;</code>، و <code>&lt;nav&gt;</code> بدلاً من <code>&lt;div class=&quot;nav&quot;&gt;</code>.
            </li>
            <li>
              <strong>✅ اكتب نصوص بديلة وصفية للصور:</strong>
              اوصف محتوى الصورة وليس شكلها.
            </li>
            <li>
              <strong>✅ اربط كل label بالحقل المقابل:</strong>
              استخدم <code>for</code> و <code>id</code> أو لف الـ label حول الحقل.
            </li>
            <li>
              <strong>✅ تأكد من التنقل بلوحة المفاتيح:</strong>
              جرّب موقعك باستخدام Tab فقط بدون ماوس.
            </li>
            <li>
              <strong>✅ استخدم روابط التخطي (Skip Links):</strong>
              يُتيح للمستخدمين تخطي المحتوى المتكرر.
            </li>
            <li>
              <strong>✅ تحقق من التباين اللوني:</strong>
              استخدم أدوات مثل WebAIM Contrast Checker.
            </li>
            <li>
              <strong>✅ اختبر بأدوات الأتمتة:</strong>
              استخدم axe DevTools أو Lighthouse لفحص الوصولية.
            </li>
            <li>
              <strong>✅ استخدم ARIA بحذر:</strong>
              الأفضل هو HTML الدلالي. ARIA حل أخير.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس عشر: أدوات فحص الوصولية */}
        {/* ========================================== */}
        <LessonSection title="أدوات فحص الوصولية">
          <p>هناك أدوات مجانية تساعدك في فحص وصولية موقعك:</p>

          <ul>
            <li>
              <strong>Chrome DevTools (F12) - تبويب Lighthouse:</strong>
              يفحص الوصولية ويُعطي تقريراً شاملاً مع اقتراحات للتحسين.
            </li>
            <li>
              <strong>axe DevTools (إضافة المتصفح):</strong>
              أداة مجانية لاكتشاف مشاكل الوصولية تلقائياً.
            </li>
            <li>
              <strong>WebAIM WAVE:</strong>
              أداة أونلاين لفحص الوصولية.
            </li>
            <li>
              <strong>VoiceOver (Mac) أو Narrator (Windows):</strong>
              اختبر موقعك بقارئ الشاشة الفعلي.
            </li>
            <li>
              <strong>WebAIM Contrast Checker:</strong>
              تحقق من نسبة التباين اللوني.
            </li>
          </ul>

          <CodeBlock
            language="bash"
            code={`# يمكنك также استخدام ESLint plugin للوصولية
npm install eslint-plugin-jsx-a11y

# في .eslintrc:
{
  "plugins": ["jsx-a11y"],
  "extends": ["plugin:jsx-a11y/recommended"]
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>الوصولية (A11y)</strong> تجعل موقعك متاحاً للجميع بغض النظر عن قدراتهم</li>
              <li>الوصولية تُفيد جميع المستخدمين وليس أصحاب الإعاقات فقط</li>
              <li><strong>HTML الدلالي</strong> هو基石 الأساسية للوصولية</li>
              <li>كل صورة يجب أن يكون لها <code>alt</code> نصي وصفي</li>
              <li>كل حقل نموذج يجب أن يكون له <code>&lt;label&gt;</code> مرتبط</li>
              <li>التنقل بلوحة المفاتيح (Tab) يجب أن يعمل لجميع العناصر</li>
              <li><strong>ARIA</strong> أداة أخير بعد HTML الدلالي</li>
              <li>استخدم <strong>Lighthouse</strong> و <strong>axe DevTools</strong> لفحص الوصولية</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هو النص البديل (Alt Text) ويُستخدم لماذا؟"
          options={[
            "نص يظهر بدل الصورة إذا لم تُحمّل",
            "نص يقرأه قارئ الشاشة بدل الصورة لذوي الإعاقات البصرية",
            "نص يظهر عند مرور الفأرة على الصورة",
            "نص用来 تحسين SEO فقط",
          ]}
          correctAnswer={1}
          explanation="النص البديل (alt text) يُقرأ من قارئ الشاشة لنقل محتوى الصورة للمكفوف. هو أساسي للوصولية، كما يُساعد محركات البحث也在理解 الصور."
        />

        <Quiz
          question="لماذا استخدام &lt;button&gt; أفضل من &lt;div onclick&gt;؟"
          options={[
            "أصغر حجماً في الكود",
            "button يمكن الوصول إليه بـ Tab و يُعامل كعنصر تفاعلي من قارئ الشاشة",
            "button أسرع أداءً",
            "div غير مدعوم في المتصفحات الحديثة",
          ]}
          correctAnswer={1}
          explanation="&lt;button&gt; عنصر تفاعلي يدعم التنقل بلوحة المفاتيح (Tab) ويعمل مع قارئ الشاشة. الـ div لا يدعم أي من هذه الميزات بشكل افتراضي."
        />

        <Quiz
          question="ما هو أفضل استخدام لسمة role في ARIA؟"
          options={[
            "استبدال كل العناصر الدلالية",
            "إضافة وصف إضافي للعنصر فقط عندما لا يوجد HTML دلالي مناسب",
            "تنسيق العناصر بصرياً",
            "إضافة تأثيرات حركية للعناصر",
          ]}
          correctAnswer={1}
          explanation="القاعدة الذهبية: استخدم HTML الدلالي أولاً. ARIA تُستخدم فقط عندما لا يوجد عنصر HTML دلالي مناسب لوصف دور العنصر."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: تحسين وصولية صفحة تسجيل دخول"
          description={
            <p>
              صلّح صفحة تسجيل الدخول التالية لتكون متوافقة مع الوصولية:
              <br />
              1. أضف <code>&lt;label&gt;</code> لكل حقل
              <br />
              2. أضف رابط تخطي (Skip Link)
              <br />
              3. استخدم HTML دلالي للهيكل
              <br />
              4. أضف <code>aria-required</code> للحقول المطلوبة
              <br />
              5. أضف رسالة خطأ بـ <code>role=&quot;alert&quot;</code>
            </p>
          }
        >
          <CodeBlock
            language="html"
            code={`<!-- الحل المتوقع -->
<a href="#login-form" class="skip-link">
  انتقل لنموذج تسجيل الدخول
</a>

<main>
  <article>
    <header>
      <h1>تسجيل الدخول</h1>
    </header>

    <form id="login-form" aria-labelledby="form-title">
      <h2 id="form-title" class="sr-only">
        نموذج تسجيل الدخول
      </h2>

      <div>
        <label for="login-email">
          البريد الإلكتروني
          <span aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          aria-required="true"
          autocomplete="email"
        />
      </div>

      <div>
        <label for="login-password">
          كلمة المرور
          <span aria-hidden="true">*</span>
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          aria-required="true"
          autocomplete="current-password"
        />
      </div>

      <div>
        <input type="checkbox" id="remember" />
        <label for="remember">تذكرني</label>
      </div>

      <button type="submit">تسجيل الدخول</button>

      <!-- رسالة خطأ (تظهر عند الخطأ) -->
      <div role="alert" aria-live="assertive"
           id="error-message" style="color: red">
        البريد أو كلمة المرور غير صحيحة
      </div>
    </form>

    <p>
      ليس لديك حساب؟
      <a href="/register">سجّل الآن</a>
    </p>
  </article>
</main>`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص الوصولية (A11y)">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>أساسيات الوصولية:</p>
              <CodeBlock language="html" code={`<!-- نص بديل للصور -->
<img src="pic.jpg" alt="وصف دقيق" />

<!-- تسمية حقول النموذج -->
<label for="name">الاسم</label>
<input id="name" type="text" />

<!-- رابط التخطي -->
<a href="#main" class="skip-link">
  انتقل للمحتوى
</a>

<!-- نص مخفي لقارئ الشاشة -->
<span class="sr-only">نص فقط لقارئ الشاشة</span>`} />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>التنقل بلوحة المفاتيح:</p>
              <CodeBlock language="html" code={`<!-- tabindex="0": أضف لترتيب Tab -->
<!-- tabindex="-1": وصول برمجي فقط -->
<!-- تجنب tabindex بأرقام موجبة! -->

<!-- العناصر التفاعلية تعمل بـ Tab: -->
<!-- <button>, <a>, <input>,
     <select>, <textarea> -->`} />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>سمات ARIA الشائعة:</p>
              <CodeBlock language="html" code={`role="alert"     — تنبيه عاجل
role="status"    — تحديث غير عاجل
role="button"    — زر مخصص
role="navigation" — قسم تنقل
role="main"      — المحتوى الرئيسي
role="banner"    — رأس الصفحة

aria-label       — اسم مسموع
aria-describedby — وصف إضافي
aria-required    — حقل مطلوب
aria-invalid     — بيانات غير صحيحة
aria-live        — تحديث مباشر
aria-hidden      — مخفي من الشاشة`} />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>أدوات الفحص:</p>
              <CodeBlock language="text" code={`Chrome DevTools → Lighthouse
axe DevTools (إضافة متصفح)
WebAIM WAVE (أونلاين)
VoiceOver / Narrator (قارئ شاشة)
WebAIM Contrast Checker`} />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>قاعدة ARIA الذهبية:</p>
              <CodeBlock language="text" code={`1. استخدم HTML دلالي أولاً
2. لا تكسر ما يعمل في HTML
3. جميع العناصر التفاعلية
   يجب أن تعمل بـ Tab
4. كل صورة لها alt
5. كل حقل له label`} />
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
