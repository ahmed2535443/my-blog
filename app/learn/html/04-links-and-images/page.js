// =====================================================
// ملف: page.js (الدرس الرابع: الروابط والصور)
// المكان: app/learn/html/04-links-and-images/page.js
// الوظيفة: تعريف المبتدئين بالروابط والصور في HTML
// URL: /learn/html/04-links-and-images
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function LinksAndImages() {
  const lessonInfo = getLessonBySlug("html", "04-links-and-images");

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
        {/* القسم الأول: ما هو وسم الرابط (Anchor)؟ */}
        {/* ========================================== */}
        <LessonSection title="ما هو وسم الرابط (Anchor)؟">
          <p>
            الروابط هي واحدة من أهم ميزات الويب. بدون الروابط، كل صفحة ويب ستكون معزولة عن الأخرى. <strong>وسم الرابط (Anchor Tag)</strong> هو الوسم الذي يُحوّل أي عنصر إلى رابط تفاعلي يمكنك النقر عليه للانتقال إلى صفحة أخرى أو موضع آخر في نفس الصفحة.
          </p>

          <p>
            اسم &quot;Anchor&quot; (مرساة) يأتي من فكرة أن الرابط يُثبّت مكاناً معيناً على الإنترنت، مثل المرساة التي تُثبّت السفينة في مكان واحد.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- هذا أبسط رابط في HTML -->
<a href="https://www.google.com">اذهب إلى جوجل</a>

<!-- هذا رابط داخلي (في نفس الموقع) -->
<a href="/about">صفحة عنا</a>

<!-- هذا رابط يستهدف نفس الصفحة -->
<a href="#section-2">انتقل للقسم الثاني</a>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه:
            </p>
            <p>
              تخيّل أنك تكتب رسالة وتحدد فيها كلمة &quot;اضغط هنا&quot; لتُحوّلها إلى رابط يأخذك إلى صفحة أخرى. وسم <code>&lt;a&gt;</code> يفعل هذا بالضبط، لكن بدلاً من &quot;اضغط هنا&quot;، أنت تحدد وجهة الرابط باستخدام سمة <code>href</code>.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: لماذا نستخدم الروابط؟ */}
        {/* ========================================== */}
        <LessonSection title="لماذا نستخدم الروابط؟">
          <p>الروابط تحل مشكلة أساسية في الويب: <strong>كيف ننتقل من صفحة إلى أخرى؟</strong></p>

          <p>بدون الروابط، الويب سيكون مجرد مجموعة من الصفحات المعزولة. الروابط هي التي تُنشئ &quot;الشبكة&quot; (Web) في World Wide Web:</p>

          <ul>
            <li><strong>التنقل بين الصفحات:</strong> الانتقال من الصفحة الرئيسية لصفحة &quot;من نحن&quot; أو &quot;تواصل معنا&quot;</li>
            <li><strong>الانتقال لنفس الصفحة:</strong> التمرير لقسم معين في الصفحة الطويلة (مثل فهرس المحتويات)</li>
            <li><strong>تنزيل الملفات:</strong> رابط لتحميل ملف PDF أو صورة</li>
            <li><strong>فتح بريد إلكتروني:</strong> رابط يفتح برنامج البريد تلقائياً</li>
            <li><strong>الاتصال بهاتف:</strong> رابط يبدأ مكالمة هاتفية</li>
            <li><strong>تحسين SEO:</strong> محركات البحث تتبع الروابط ل discovers صفحات جديدة</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: المشكلة التي يحلها الرابط */}
        {/* ========================================== */}
        <LessonSection title="المشكلة التي يحلها الرابط">
          <p>تخيل أنك في صفحة ويب وتريد الانتقال لصفحة أخرى. بدون وسم الرابط، ما هي الخيارات المتاحة؟</p>

          <ul>
            <li>كتابة عنوان URL كامل في شريط العناوين يدوياً (غير عملي)</li>
            <li>استخدام JavaScript لإعادة التوجيه (معقد وغير موثوق)</li>
            <li>عدم وجود أي طريقة للتنقل (صفحة عالقة)</li>
          </ul>

          <p>
            <strong>وسم <code>&lt;a&gt;</code> يحل هذه المشكلة ببساطة.</strong> يُعطيك عنصراً تفاعلياً يمكنك النقر عليه للانتقال لأي وجهة على الإنترنت. المتصفح يعرف كيف يتعامل معه ويُنفّذ عملية التنقل تلقائياً.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: الشرح البسيط - سمة href وأنواع الروابط */}
        {/* ========================================== */}
        <LessonSection title="سمة href وأنواع الروابط">
          <p>السمة الأساسية في وسم الرابط هي <code>href</code> (اختصار لـ Hypertext REFerence). هذه السمة تُحدد وجهة الرابط. هناك عدة أنواع من الروابط:</p>

          <h3>1. الروابط المطلقة (Absolute Links)</h3>
          <p>رابط كامل يحتوي على البروتوكول والنطاق والمسار. يعمل من أي مكان في العالم:</p>

          <CodeBlock
            language="html"
            code={`<!-- رابط مطلق - يبدأ ببروتوكول HTTP/HTTPS -->
<a href="https://www.google.com">جوجل</a>
<a href="https://www.example.com/about">صفحة عنا في مثال</a>
<a href="https://github.com/user/repo">مستودع على GitHub</a>`}
          />

          <h3>2. الروابط النسبية (Relative Links)</h3>
          <p>رابط يشير إلى ملف في نفس الموقع مقارنة بموقع الملف الحالي:</p>

          <CodeBlock
            language="html"
            code={`<!-- رابط نسبي - في نفس المجلد -->
<a href="about.html">صفحة عنا</a>

<!-- رابط لمجلد فرعي -->
<a href="blog/post-1.html">مقال في المدونة</a>

<!-- رابط للمجلد الأب -->
<a href="../index.html">الصفحة الرئيسية</a>`}
          />

          <h3>3. الروابط الداخلية (Internal Links - Anchors)</h3>
          <p>للانتقال لموضع معين في نفس الصفحة، نستخدم <code>#</code> متبوعاً بـ id العنصر المطلوب:</p>

          <CodeBlock
            language="html"
            code={`<!-- روابط داخلية للانتقال لنفس الصفحة -->
<nav>
    <a href="#about">من نحن</a>
    <a href="#services">خدماتنا</a>
    <a href="#contact">تواصل معنا</a>
</nav>

<!-- أقسام الصفحة -->
<section id="about">
    <h2>من نحن</h2>
    <p>نحن شركة تقنية...</p>
</section>

<section id="services">
    <h2>خدماتنا</h2>
    <p>نقدم خدمات متنوعة...</p>
</section>

<section id="contact">
    <h2>تواصل معنا</h2>
    <p>يمكنك التواصل معنا عبر...</p>
</section>`}
          />

          <h3>4. روابط البريد الإلكتروني (mailto)</h3>
          <p>لإضافة رابط يفتح برنامج البريد الإلكتروني للمستخدم:</p>

          <CodeBlock
            language="html"
            code={`<!-- رابط بريد إلكتروني بسيط -->
<a href="mailto:info@example.com">أرسل لنا بريداً</a>

<!-- رابط بريد مع عنوان وموضوع ونص -->
<a href="mailto:info@example.com?subject=استفسار&body=مرحباً، أريد الاستفسار عن خدماتكم">
    تواصل عبر البريد
</a>`}
          />

          <h3>5. روابط الهاتف (tel)</h3>
          <p>لإضافة رابط يبدأ مكالمة هاتفية (مفيد للهواتف المحمولة):</p>

          <CodeBlock
            language="html"
            code={`<!-- رابط هاتف مباشر -->
<a href="tel:+966501234567">اتصل بنا: 0501234567</a>`}
          />

          <h3>6. روابط التنزيل (Download)</h3>
          <p>لإضافة رابط لتنزيل ملف بدلاً من فتحه:</p>

          <CodeBlock
            language="html"
            code={`<!-- رابط تنزيل ملف -->
<a href="/files/brochure.pdf" download>حمّل البروشور (PDF)</a>

<!-- رابط تنزيل مع تحديد اسم الملف -->
<a href="/files/guide.pdf" download="دليل-المستخدم.pdf">حمّل الدليل</a>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: سمة target */}
        {/* ========================================== */}
        <LessonSection title="سمة target - أين يفتح الرابط؟">
          <p>تسمح سمة <code>target</code> بتحديد كيف وحيث يُفتح الرابط عند النقر عليه:</p>

          <CodeBlock
            language="html"
            code={`<!-- _blank: يفتح في تبويب/نافذة جديدة (الأسهل استخداماً) -->
<a href="https://www.google.com" target="_blank">جوجل (تبويب جديد)</a>

<!-- _self: يفتح في نفس التبويب (السلوك الافتراضي) -->
<a href="/about" target="_self">صفحة عنا (نفس التبويب)</a>

<!-- _parent: يفتح في الـ parent frame (في الإطارات) -->
<a href="/home" target="_parent">الرئيسية (الإطار الأب)</a>

<!-- _top: يفتح في body الكامل للنافذة (يلغي الإطارات) -->
<a href="/home" target="_top">الرئيسية (أعلى النافذة)</a>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              ⚠️ تنبيه أمني مهم:
            </p>
            <p>
              عند استخدام <code>target=&quot;_blank&quot;</code>، الصفحة الجديدة تفتح بنفس سياق (context) الصفحة الأصلية. هذا يُعد ثغرة أمنية تُسمى <strong>Tabnabbing</strong>. الحل هو إضافة <code>rel=&quot;noopener noreferrer&quot;</code> دائماً مع <code>_blank</code>:
            </p>
          </div>

          <CodeBlock
            language="html"
            code={`<!-- الصيغة الصحيحة والآمنة لـ target="_blank" -->
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
    جوجل (آمن وفتح في تبويب جديد)
</a>`}
          />

          <p>معنى <code>rel=&quot;noopener noreferrer&quot;</code>:</p>
          <ul>
            <li><strong>noopener:</strong> يمنع الصفحة الجديدة من الوصول لـ window.opener (الصفحة الأصلية). هذا يحميك من هجمات Tabnabbing.</li>
            <li><strong>noreferrer:</strong> يمنع إرسال معلومات المصدر (referrer) للصفحة المفتوحة. يُحسّن الخصوصية.</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: وسم الصورة (img) */}
        {/* ========================================== */}
        <LessonSection title="وسم الصورة (Image) - essentials">
          <p>
            وسم <code>&lt;img&gt;</code> يُستخدم لعرض الصور في صفحة الويب. هذا وسم <strong>فارغ</strong> (Empty Element) - لا يحتاج وسم إغلاق因为他 المحتوى هو الصورة نفسها.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- الصورة الأساسية - تحتاج على الأقل src و alt -->
<img src="photo.jpg" alt="صورة شخصية" />

<!-- الصورة مع أبعاد -->
<img src="logo.png" alt="شعار الشركة" width="200" height="100" />

<!-- الصورة مع تحميل كسول -->
<img src="large-image.jpg" alt="صورة كبيرة" loading="lazy" width="800" height="600" />`}
          />

          <h3>السمات الأساسية لـ &lt;img&gt;</h3>

          <ul>
            <li><strong><code>src</code> (Source):</strong> مسار الصورة (إلزامي). يمكن أن يكون مساراً نسبياً أو مطلقاً أو URL خارجياً.</li>
            <li><strong><code>alt</code> (Alternative Text):</strong> نص بديل يظهر عندما لا تُحمّل الصورة (إلزامي). مهم جداً للوصولية ومحركات البحث.</li>
            <li><strong><code>width</code>:</strong> عرض الصورة بالبكسل.</li>
            <li><strong><code>height</code>:</strong> ارتفاع الصورة بالبكسل.</li>
            <li><strong><code>loading</code>:</strong> يتحكم في طريقة التحميل. القيمة <code>lazy</code> تُحمّل الصورة فقط عند الاقتراب منها (تحسين الأداء).</li>
          </ul>

          <CodeBlock
            language="html"
            code={`<!-- صورة مع جميع السمات الأساسية -->
<img
    src="https://example.com/photo.jpg"
    alt="صورة بانورامية لجبل الألب"
    width="1200"
    height="800"
    loading="lazy"
/>

<!-- صورة SVG (متجهة) -->
<img src="icon.svg" alt="أيقونة البحث" width="24" height="24" />

<!-- صورة من مسار نسبي -->
<img src="images/profile.jpg" alt="صورة الملف الشخصي" />`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: الصور المتجاوبة */}
        {/* ========================================== */}
        <LessonSection title="الصور المتجاوبة (Responsive Images)">
          <p>
            الصور المتجاوبة هي صور تتكيف مع أحجام الشاشات المختلفة. بدلاً من عرض صورة كبيرة على هاتف صغير (بطيء التحميل) أو صورة صغيرة على شاشة كبيرة (باهتة)، نستخدم سمات HTML لتوفير الصورة المناسبة لكل جهاز.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- السمة srcset: اختيار الصورة المناسبة بناءً على دقة الشاشة -->
<img
    src="photo-medium.jpg"
    srcset="photo-small.jpg 480w, photo-medium.jpg 800w, photo-large.jpg 1200w"
    sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
    alt="صورة بانورامية"
/>

<!-- العنصر picture: صور مختلفة لأجهزة مختلفة -->
<picture>
    <source media="(max-width: 600px)" srcset="mobile.jpg" />
    <source media="(max-width: 1200px)" srcset="tablet.jpg" />
    <img src="desktop.jpg" alt="صورة متجاوبة" />
</picture>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 لماذا هذا مهم؟
            </p>
            <p>
              تحميل صورة كبيرة جداً على هاتف محمول يُبطّئ الصفحة ويستهلك بيانات المستخدم. الصور المتجاوبة تُحسّن أداء الموقع بشكل كبير وتجربة المستخدم على جميع الأجهزة.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: Figure و Figcaption */}
        {/* ========================================== */}
        <LessonSection title="Figure و Figcaption - الصور الدلالية">
          <p>
            عناصر <code>&lt;figure&gt;</code> و <code>&lt;figcation&gt;</code> تُعطي الصورة <strong>دلالة</strong> و <strong>شرح توضيحي</strong>. هذه وسوم مهمة لتحسين إمكانية الوصول (Accessibility) و SEO.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- figure يُغلّف الصورة وشرحها -->
<figure>
    <img src="chart.png" alt="مخطط مبيعات الربع الأول" />
    <figcaption>شكل 1: مخطط يوضح مبيعات الشركة خلال الربع الأول من 2026</figcaption>
</figure>

<!-- مثال مع صورة وشرح طويل -->
<figure class="article-image">
    <img src="mountain.jpg" alt="جبل الإفرست" />
    <figcaption>
        <strong>جبل الإفرست:</strong> أعلى قمة في العالم بارتفاع 8,849 متراً.
        تقع على الحدود بين نيبال والصين.
    </figcaption>
</figure>

<!-- figure يمكن أن يحتوي على أي محتوى مرئي -->
<figure>
    <blockquote>
        <p>البرمجة هي لغة أفكارك.</p>
    </blockquote>
    <figcaption>— مجهول</figcaption>
</figure>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: الصور داخل الروابط */}
        {/* ========================================== */}
        <LessonSection title="الصور داخل الروابط (Linked Images)">
          <p>
            يمكنك جعل الصورة رابطاً تفاعلياً بوضع وسم <code>&lt;a&gt;</code> حول وسم <code>&lt;img&gt;</code>. هذه ممارسة شائعة لـ thumbnails الصور، أيقونات الأدوات، والشعارات.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- صورة كرابط -->
<a href="/products/laptop" target="_blank" rel="noopener noreferrer">
    <img src="laptop-thumb.jpg" alt="صورة اللابتوب - اضغط للمزيد" width="200" height="150" />
</a>

<!-- شعار يُعيدك للرئيسية -->
<a href="/">
    <img src="logo.svg" alt="العودة للصفحة الرئيسية" width="150" height="40" />
</a>

<!-- أيقونات وسائل التواصل كروابط -->
<a href="https://twitter.com/codemaster" target="_blank" rel="noopener noreferrer">
    <img src="icons/twitter.svg" alt="تابعنا على تويتر" width="32" height="32" />
</a>

<a href="https://github.com/codemaster" target="_blank" rel="noopener noreferrer">
    <img src="icons/github.svg" alt="مستودعنا على GitHub" width="32" height="32" />
</a>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              ⚠️ تنبيه للوصولية:
            </p>
            <p>
              عند وضع صورة داخل رابط، تأكد أن نص <code>alt</code> للصورة يُوصِف وجهة الرابط، وليس فقط الصورة. المستخدمون الذين يستخدمون قارئات الشاشة يعتمدون على نص الـ alt لفهم أين سينقرون.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: صور SVG */}
        {/* ========================================== */}
        <LessonSection title="صور SVG - الصور المتجهة">
          <p>
            <strong>SVG</strong> (Scalable Vector Graphics) هو تنسيق رسومات متجهة. الفرق الرئيسي عن الصور النقطية (JPG, PNG) أن SVG لا يُ فقد جودته عند تكبيره أو تصغيره، لأنها مبنية على معادلات رياضية وليس بكسلات.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- استخدام SVG كصورة خارجية -->
<img src="icon.svg" alt="أيقونة" width="48" height="48" />

<!-- استخدام SVG مباشرة في HTML (Inline SVG) -->
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" stroke="#e44d26" stroke-width="4" fill="none" />
    <text x="50" y="55" text-anchor="middle" fill="#e44d26" font-size="16">SVG</text>
</svg>`}
          />

          <h3>متى نستخدم SVG؟</h3>
          <ul>
            <li><strong>الأيقونات والشعارات:</strong> لأنها تحتاج أحجام صغيرة وتبقى حادة عند أي تكبير</li>
            <li><strong>الرسومات البسيطة:</strong> المخططات والأشكال الهندسية</li>
            <li><strong>الصور التي تحتاج تأثيرات:</strong> SVG يدعم CSS و JavaScript مباشرة</li>
            <li><strong>تحسين الأداء:</strong> ملفات SVG عادة أصغر حجماً من PNG أو JPG للرسوم البسيطة</li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 هل تعلم؟
            </p>
            <p>
              شعارات Google و Twitter و YouTube على الإنترنت كلها بصيغة SVG. يمكنك رؤية ذلك بالنقر بزر الفأرة الأيمن على أي شعار واختيار &quot;Inspect&quot;.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: معالجة أخطاء الصور المكسورة */}
        {/* ========================================== */}
        <LessonSection title="معالجة أخطاء الصور المكسورة (Error Handling)">
          <p>
            أحياناً لا تُحمّل الصورة بسبب رابط خاطئ أو ملف غير موجود. المتصفح يعرض أيقونة بديلة بحجم الصورة الأصلية. يمكننا التعامل مع هذا بشكل أفضل:
          </p>

          <CodeBlock
            language="html"
            code={`<!-- استخدام onerror لعرض صورة بديلة -->
<img
    src="profile.jpg"
    alt="صورة المستخدم"
    onerror="this.src='fallback.jpg'"
/>

<!-- أو استخدام صورة بديلة مع alt جيد -->
<img
    src="user-photo.png"
    alt="الصورة غير متوفرة حالياً"
/>

<!-- يمكنك استخدام SVG كصورة افتراضية بديلة -->
<img
    src="avatar.png"
    alt="صورة المستخدم"
    onerror="this.onerror=null; this.src='data:image/svg+xml,...'"
/>`}
          />

          <h3>نصائح لتجنب الصور المكسورة</h3>
          <ul>
            <li>تأكد من صحة مسار الصورة دائماً</li>
            <li>استخدم أسماء ملفات دون مسافات أو أحرف خاصة</li>
            <li>افصل الأسماء بشرطات (dash) أو تسطيحات (underscore)</li>
            <li>تأكد من أن امتداد الملف صحيح (jpg, png, webp, svg)</li>
            <li>استخدم lowercase دائماً في أسماء الملفات</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: مثال عملي - صفحة صور معرض فني */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: معرض فني بسيط">
          <p>لنجمع كل ما تعلمناه في مثال عملي: صفحة معرض فني تحتوي على روابط وصور:</p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>معرض الفن العربي</title>
</head>
<body>

    <!-- شريط التنقل -->
    <header>
        <nav>
            <a href="/">
                <img src="logo.svg" alt="شعار المعرض" width="120" height="40" />
            </a>
            <ul>
                <li><a href="#home" target="_self">الرئيسية</a></li>
                <li><a href="#gallery">المعرض</a></li>
                <li><a href="#about">عن المعرض</a></li>
                <li><a href="#contact">تواصل معنا</a></li>
                <li><a href="tel:+966501234567">اتصل بنا</a></li>
            </ul>
        </nav>
    </header>

    <!-- القسم الرئيسي -->
    <main>
        <section id="home">
            <h1>معرض الفن العربي</h1>
            <p>اكتشف أجمل أعمال الفنانين العرب المعاصرين</p>
        </section>

        <!-- فهرس المحتويات - روابط داخلية -->
        <section id="gallery">
            <h2>المعرض</h2>

            <article>
                <figure>
                    <a href="/art/painting-1">
                        <img
                            src="painting-1.jpg"
                            alt="لوحة بورتريه - للفنان أحمد"
                            width="400"
                            height="300"
                            loading="lazy"
                        />
                    </a>
                    <figcaption>لوحة بورتريه - الفنان: أحمدمحمد (2025)</figcaption>
                </figure>
            </article>

            <article>
                <figure>
                    <a href="/art/painting-2">
                        <img
                            src="painting-2.jpg"
                            alt="لوحة طبيعة صامتة - للفنانة فاطمة"
                            width="400"
                            height="300"
                            loading="lazy"
                        />
                    </a>
                    <figcaption>طبيعة صامتة - الفنانة: فاطمة علي (2026)</figcaption>
                </figure>
            </article>

            <article>
                <figure>
                    <img
                        src="painting-3.jpg"
                        alt="لوحة مفاهيمية - للفنان خالد"
                        width="400"
                        height="300"
                        loading="lazy"
                    />
                    <figcaption>تكوين مفاهيم - الفنان: خالد حسن (2024)</figcaption>
                </figure>
            </article>
        </section>

        <!-- قسم عنا -->
        <section id="about">
            <h2>عن المعرض</h2>
            <p>معرض الفن العربي تأسس عام 2020 بهدف دعم الفنانين العرب.</p>
        </section>

        <!-- قسم التواصل -->
        <section id="contact">
            <h2>تواصل معنا</h2>
            <p>
                البريد: <a href="mailto:info@artgallery.com">info@artgallery.com</a>
            </p>
            <p>
                الهاتف: <a href="tel:+966501234567">0501234567</a>
            </p>
            <p>
                <a href="https://twitter.com/artgallery" target="_blank" rel="noopener noreferrer">
                    تابعنا على تويتر
                </a>
            </p>
        </section>
    </main>

    <footer>
        <p>
            جميع الحقوق محفوظة &copy; 2026 |
            <a href="/privacy">سياسة الخصوصية</a> |
            <a href="/terms">الشروط والأحكام</a>
        </p>
    </footer>

</body>
</html>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث عشر: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>عندما يقرأ المتصفح وسوم الروابط والصور، يحدث التالي:</p>

          <h3>للروابط (<code>&lt;a&gt;</code>):</h3>
          <ul>
            <li>يُحوّل العنصر إلى عنصر تفاعلي يمكن النقر عليه.</li>
            <li>يُطبّق تنسيقات افتراضية: نص أزرق وتحته خط سفلي.</li>
            <li>عند النقر، يقرأ المتصفح قيمة <code>href</code> ويُنفّذ عملية التنقل.</li>
            <li>إذا كان الرابط داخلياً (#)، يمرّر المتصفح للعنصر ذو الـ id المطلوب.</li>
          </ul>

          <h3>للصور (<code>&lt;img&gt;</code>):</h3>
          <ul>
            <li>يبدأ المتصفح بتحميل الصورة من المسار المحدد في <code>src</code>.</li>
            <li>إذا كان هناك <code>width</code> و <code>height</code>، يحجز المتصفح المساحة للصورة مسبقاً (يمنع الاهتزاز/Layout Shift).</li>
            <li>إذا كانت الصورة لا تُحمّل، يعرض المتصفح أيقونة بديلة و يعرض نص <code>alt</code> بجانبها.</li>
            <li>إذا كان <code>loading=&quot;lazy&quot;</code>، يُؤجّل تحميل الصورة حتى يقترب المستخدم منها بالتمرير.</li>
            <li>بعد تحميل الصورة بنجاح، يعرضها المتصفح في موضعها.</li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 هل تعلم؟
            </p>
            <p>
              سمة <code>width</code> و <code>height</code> لا تُغيّر حجم الصورة فعلياً (يُمكنك ذلك بـ CSS)، لكنها تُعطي المتصفح معلومة عن نسبة أبعاد الصورة مسبقاً حتى لا تتحرك باقي عناصر الصفحة عند تحميل الصورة. هذه تُسمى <strong>prevent Layout Shift</strong>.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع عشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul>
            <li>
              <strong>❌ نسيان سمة alt:</strong>
              <br />
              كتابة <code>&lt;img src=&quot;photo.jpg&quot;&gt;</code> بدون <code>alt</code>. هذا خطأ يُضعف الوصولية و SEO. قارئات الشاشة لن تتمكن من وصف الصورة للمستخدمين ذوي الاحتياجات الخاصة.
            </li>
            <li>
              <strong>❌ استخدام <code>target=&quot;_blank&quot;</code> بدون <code>rel=&quot;noopener noreferrer&quot;</code>:</strong>
              <br />
              هذا يترك ثغرة أمنية تُسمى Tabnabbing حيث يمكن للصفحة المفتوحة التلاعب بالصفحة الأصلية.
            </li>
            <li>
              <strong>❌ استخدام نص &quot;اضغط هنا&quot; لنصوص الروابط:</strong>
              <br />
              كتابة <code>&lt;a href=&quot;...&quot;&gt;اضغط هنا&lt;/a&gt;</code> سيء لـ SEO والوصولية. استخدم وصفاً مفيداً مثل <code>&lt;a href=&quot;...&quot;&gt;تحميل التقرير السنوي&lt;/a&gt;</code>.
            </li>
            <li>
              <strong>❌ عدم تحديد أبعاد الصور:</strong>
              <br />
              عدم استخدام <code>width</code> و <code>height</code> يسبب اهتزاز الصفحة (Layout Shift) أثناء تحميل الصور.
            </li>
            <li>
              <strong>❌ استخدام صور كبيرة جداً:</strong>
              <br />
              صورة JPEG بحجم 5 ميغابايل لتعرض كأيقونة 32×32 بكسل. استخدم الصورة المناسبة للحجم المطلوب.
            </li>
            <li>
              <strong>❌ استخدام صور رастر (Bitmap) للأيقونات:</strong>
              <br />
              استخدام PNG أو JPG للأيقونات يُضعف جودة التكبير. استخدم SVG للأيقونات والشعارات.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li><strong>✅ اكتب نص alt وصفي دائماً:</strong> وصف ما في الصورة وليس فقط &quot;صورة&quot;.</li>
            <li><strong>✅ حدد width و height دائماً:</strong> لمنع Layout Shift وتحسين الأداء.</li>
            <li><strong>✅ استخدم loading=&quot;lazy&quot; للصور غير العاجلة:</strong> لتحسين سرعة التحميل الأولي.</li>
            <li><strong>✅ أضف rel=&quot;noopener noreferrer&quot; مع target=&quot;_blank&quot;:</strong> لحماية أمنية.</li>
            <li><strong>✅ استخدم الصيغ المناسبة:</strong> WebP للصور العامة، SVG للأيقونات، PNG للصور التي تحتاج شفافية.</li>
            <li><strong>✅ استخدم figure وfigcaption:</strong> عند عرض صور مع شرح توضيحي.</li>
            <li><strong>✅ اجعل النص التشعبي وصفياً:</strong> بدل &quot;اضغط هنا&quot;، استخدم &quot;اقرأ المزيد عن HTML&quot;.</li>
            <li><strong>✅ استخدم الصور المتجاوبة:</strong> لتحسين العرض على جميع الأجهزة.</li>
          </ul>
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
              <li><strong style={{ color: "var(--primary)" }}>وسم الرابط <code>&lt;a&gt;</code></strong> يُحوّل أي عنصر إلى رابط تفاعلي</li>
              <li>سمة <code>href</code> تُحدد وجهة الرابط (مطلقة، نسبية، داخلية، mailto, tel)</li>
              <li>سمة <code>target=&quot;_blank&quot;</code> تفتح الرابط في تبويب جديد</li>
              <li>أضف <code>rel=&quot;noopener noreferrer&quot;</code> دائماً مع <code>target=&quot;_blank&quot;</code></li>
              <li><strong style={{ color: "var(--primary)" }}>وسم الصورة <code>&lt;img&gt;</code></strong> يعرض الصور - وسم فارغ لا يحتاج إغلاق</li>
              <li>سمة <code>src</code> مسار الصورة و <code>alt</code> النص البديل (إلزاميين)</li>
              <li>استخدم <code>width</code> و <code>height</code> لمنع اهتزاز الصفحة</li>
              <li>استخدم <code>loading=&quot;lazy&quot;</code> لتحسين الأداء</li>
              <li><code>&lt;figure&gt;</code> و <code>&lt;figcation&gt;</code> يُعطيان الصورة دلالة وشرح توضيحي</li>
              <li>SVG ممتاز للأيقونات لأنها تبقى حادة عند أي تكبير</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هي السمة الإلزامية في وسم img؟"
          options={[
            "width و height فقط",
            "src و alt",
            "src فقط",
            "alt و loading",
          ]}
          correctAnswer={1}
          explanation="سمتا src (مسار الصورة) و alt (نص بديل) هما الإلزاميان في وسم img. src يُحدد أين الصورة، و alt يُعطي وصفاً بديلاً عندما لا تُحمّل الصورة أو لقارئات الشاشة."
        />

        <Quiz
          question="لماذا نستخدم rel=&quot;noopener noreferrer&quot; مع target=&quot;_blank&quot;؟"
          options={[
            "لتحسين سرعة التحميل",
            "لجعل الرابط عريضاً",
            "لحماية الصفحة من ثغرة Tabnabbing",
            "لجعل الرابط يفتح في نفس التبويب",
          ]}
          correctAnswer={2}
          explanation="عند استخدام target=&quot;_blank&quot;، الصفحة الجديدة تحصل على مرجع للصفحة الأصلية عبر window.opener. noopener يمنع هذا، و noreferrer يمنع إرسال معلومات المصدر. معاً يحميان من هجمات Tabnabbing."
        />

        <Quiz
          question="ما الفرق بين رابط مطلق ورابط نسبي؟"
          options={[
            "لا يوجد فرق بينهما",
            "المطلق يحتوي بروتوكول كامل (https://...)، النسبي يشير لملف في نفس الموقع",
            "المطلق أسرع من النسبي",
            "النسبي يعمل خارج الموقع والمطلق داخله فقط",
          ]}
          correctAnswer={1}
          explanation="الرابط المطلق يحتوي على البروتوكول والنطاق الكامل (مثل https://example.com/about) ويعمل من أي مكان. الرابط النسبي يشير لملف مقارنة بموقع الملف الحالي (مثل about.html أو ../index.html)."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: صفحة معرض شخصي بالصور"
          description={
            <p>
              أنشئ صفحة HTML تحتوي على معرض صور شخصي تتضمن:
              <br />
              1. شعار في أعلى الصفحة يكون صورة داخل رابط للرئيسية
              <br />
              2. فهرس تنقل بروابط داخلية (<code>#</code>)
              <br />
              3. ثلاثة أقسام، كل قسم يحتوي على صورة مع <code>&lt;figure&gt;</code> و <code>&lt;figcation&gt;</code>
              <br />
              4. صورة خارجية لصفحة أخرى (مثل Wikipedia) تفتح في تبويب جديد مع <code>rel=&quot;noopener noreferrer&quot;</code>
              <br />
              5. رابط بريد إلكتروني ورابط هاتف في قسم التواصل
            </p>
          }
        >
          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>معرضي الشخصي</title>
</head>
<body>
    <header>
        <a href="/">
            <img src="logo.svg" alt="شعار معرضي" width="100" height="40" />
        </a>
        <nav>
            <a href="#travel">رحلاتي</a>
            <a href="#nature">الطبيعة</a>
            <a href="#food">أكلاتي</a>
        </nav>
    </header>

    <main>
        <section id="travel">
            <h2>رحلاتي</h2>
            <figure>
                <img src="travel.jpg" alt="صورة من رحلة استانبول" width="600" height="400" />
                <figcaption>رحلة استانبول - صيف 2025</figcaption>
            </figure>
        </section>

        <section id="nature">
            <h2>الطبيعة</h2>
            <figure>
                <img src="nature.jpg" alt="غروب في الصحراء" width="600" height="400" />
                <figcaption>غروب الصحراء - الربع الخالي</figcaption>
            </figure>
        </section>

        <section id="food">
            <h2>أكلاتي</h2>
            <figure>
                <img src="food.jpg" alt="طعام منزلي" width="600" height="400" />
                <figcaption>وصفة منزلي - مندي الدجاج</figcaption>
            </figure>
        </section>
    </main>

    <footer>
        <p>تواصل: <a href="mailto:me@example.com">أرسل بريد</a> | <a href="tel:+966501234567">اتصل</a></p>
    </footer>
</body>
</html>`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* مشروع مصغر */}
        {/* ========================================== */}
        <div
          className="rounded-xl p-6 my-6 border-2"
          style={{ background: "var(--surface)", borderColor: "var(--secondary)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🏗️</span>
            <span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>
              Mini Project: صفحة مدونة مصغرة
            </span>
          </div>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>
            أنشئ صفحة مدونة بسيطة تتضمن:
          </p>
          <ul className="mb-4" style={{ color: "var(--foreground)" }}>
            <li>تنقل داخلي بين أقسام الصفحة باستخدام روابط <code>#</code></li>
            <li>مقالات مختلفة، كل مقال يحتوي على صورة باستخدام <code>&lt;figure&gt;</code></li>
            <li>روابط خارجية لمصادر إضافية تفتح في تبويبات جديدة</li>
            <li>صورة شعار تربط للرئيسية</li>
            <li>أقسام &quot;تواصل معنا&quot; بريد إلكتروني وهاتف</li>
            <li>استخدم الصيغ المختلفة: مطلقة، نسبية، داخلية، mailto, tel</li>
          </ul>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            💡 تلميح: استخدم <code>&lt;figure&gt;</code> و <code>&lt;figcation&gt;</code> مع كل صورة، ولا تنسَ <code>rel=&quot;noopener noreferrer&quot;</code> مع الروابط الخارجية.
          </p>
        </div>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص الروابط والصور">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>الروابط (Links):</p>
              <CodeBlock
                language="html"
                code={`<!-- رابط بسيط -->
<a href="url">نص الرابط</a>

<!-- رابط في تبويب جديد (آمن) -->
<a href="url" target="_blank"
   rel="noopener noreferrer">جديد</a>

<!-- رابط داخلي -->
<a href="#section">للقسم</a>

<!-- بريد إلكتروني -->
<a href="mailto:user@mail.com">بريد</a>

<!-- هاتف -->
<a href="tel:+966501234567">هاتف</a>

<!-- تنزيل ملف -->
<a href="file.pdf" download>تحميل</a>`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>الصور (Images):</p>
              <CodeBlock
                language="html"
                code={`<!-- صورة أساسية -->
<img src="img.jpg" alt="وصف" />

<!-- صورة بأبعاد -->
<img src="img.jpg" alt="وصف"
     width="400" height="300" />

<!-- صورة كسولة -->
<img src="img.jpg" alt="وصف"
     loading="lazy" />

<!-- صورة SVG -->
<img src="icon.svg" alt="أيقونة" />

<!-- صورة مع شرح -->
<figure>
  <img src="img.jpg" alt="وصف" />
  <figcaption>شرح الصورة</figcaption>
</figure>`}
              />
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
