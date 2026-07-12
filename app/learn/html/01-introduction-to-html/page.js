// =====================================================
// ملف: page.js (الدرس الأول: مقدمة في HTML)
// المكان: app/learn/html/01-introduction-to-html/page.js
// الوظيفة: تعريف المبتدئين بـ HTML من الصفر
// URL: /learn/html/01-introduction-to-html
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function IntroductionToHtml() {
  // نحصل على معلومات الدرس من ملف المنهج
  const lessonInfo = getLessonBySlug("html", "01-introduction-to-html");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* المحتوى الرئيسي للدرس */}
      <div className="flex-1 min-w-0">
        {/* رأس الدرس */}
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        {/* ========================================== */}
        {/* القسم الأول: ما هو HTML؟ */}
        {/* ========================================== */}
        <LessonSection title="ما هو HTML؟">
          <p>
            <strong>HTML</strong> هو اختصار لـ <strong>HyperText Markup Language</strong>، أي <strong>لغة ترميز النص التشعبي</strong>.
          </p>

          <p>
            دعنا نفكّر في هذا ببساطة: إذا كنت تريد بناء بيت، فأنت تحتاج إلى <strong>هيكل</strong> يُشَكّل أساس البيت (الجدران، الأبواب، النوافذ). بدون هذا الهيكل، لا يمكنك إضافة الأثاث أو الدهانات أو أي تفاصيل أخرى.
          </p>

          <p>
            <strong>HTML هو نفس الشيء لكن لمواقع الويب.</strong> هو الهيكل الأساسي لكل صفحة ويب في العالم. كل شيء تراه في المتصفح - النصوص، الصور، الأزرار، الروابط - كلها مبنية فوق هيكل HTML.
          </p>

          {/* مثال تشبيهي */}
          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه بسيط:
            </p>
            <p>
              تخيّل أنك تكتب رسالة. <strong>HTML</strong> هو الذي يحدد أي جملة هي عنوان، وأي جملة هي فقرة عادية، وأي كلمة هي رابط. HTML يُعطى المتصفح التعليمات حول <strong>بنية</strong> الصفحة، لكنه لا يتحدث عن <strong>شكلها</strong> (هذا دور CSS).
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: لماذا نستخدم HTML؟ */}
        {/* ========================================== */}
        <LessonSection title="لماذا نستخدم HTML؟">
          <p>HTML يحل مشكلة أساسية: <strong>كيف يفهم المتصفح ماذا تريد أن تعرضه لل المستخدم؟</strong></p>

          <p>بدون HTML، المتصفح يرى فقط نصاً عشوائياً بدون أي معنى. HTML يُعطى النص <strong>بنية ودلالة</strong> حتى يعرف المتصفح:</p>

          <ul>
            <li>أي جزء هو <strong>عنوان</strong> (يجب أن يكون كبيراً وعريضاً)</li>
            <li>أي جزء هو <strong>فقرة</strong> (يجب أن تكون منفصلة)</li>
            <li>أي جزء هو <strong>رابط</strong> (يجب أن يُنقر عليه)</li>
            <li>أي جزء هو <strong>صورة</strong> (يجب أن تظهر لا يُقرأ نصاً)</li>
            <li>أي جزء هو <strong>قائمة</strong> (يجب أن تظهر بالترتيب)</li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ✅ حقيقة مهمة:
            </p>
            <p>
              كل صفحة ويب تزورها الآن (جوجل، يوتيوب، فيسبوك، تويتر) مبنية على HTML في أساسها. حتى تطبيقات JavaScript المعقدة تستخدم HTML لبناء الواجهة.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: المشكلة التي يحلها HTML */}
        {/* ========================================== */}
        <LessonSection title="المشكلة التي يحلها HTML">
          <p>تخيل أنك تريد إرسال ملف نصي للمتصفح وتخبره: &quot;هذه صفحة ويب&quot;. ماذا يحدث؟</p>

          <p>المتصفح يرى نصاً عشوائياً ولا يعرف:</p>
          <ul>
            <li>أي جزء هو العنوان الرئيسي؟</li>
            <li>أين تبدأ الفقرة وأين تنتهي؟</li>
            <li>أي كلمة هي رابط يجب النقر عليها؟</li>
            <li>أين يجب أن تظهر الصورة؟</li>
          </ul>

          <p>
            <strong>HTML يحل هذه المشكلة</strong> باستخدام &quot;وسوم&quot; (Tags) بسيطة تُحيط بالنص وتُعطيه معنى. المتصفح يعرف هذه الوسوم ويعامل كل وسم حسب دوره.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: الشرح البسيط للمبتدئين */}
        {/* ========================================== */}
        <LessonSection title="كيف يعمل HTML؟شرح بسيط">
          <p>HTML يعمل بمبدأ بسيط جداً: <strong>وسم افتتاح + محتوى + وسم إغلاق</strong></p>

          <CodeBlock
            language="html"
            code={`<h1>مرحبا بالعالم</h1>`}
          />

          <p>لنفصّل هذا السطر:</p>

          <ul>
            <li><code>&lt;h1&gt;</code> هو <strong>وسم الافتتاح</strong> (Opening Tag) - يقول للمتصفح: &quot;ابدأ هنا عنوان من الدرجة الأولى&quot;</li>
            <li><code>مرحبا بالعالم</code> هو <strong>المحتوى</strong> (Content) - النص الذي سيظهر للمستخدم</li>
            <li><code>&lt;/h1&gt;()</code> هو <strong>وسم الإغلاق</strong> (Closing Tag) - يقول للمتصفح: &quot;انتهى العنوان هنا&quot;</li>
          </ul>

          <p>
            لاحظ أن وسم الإغلاق يحتوي على <code>/</code> قبل اسم الوسم. هذه الطريقة لمعرفة الفرق بين الافتتاح والإغلاق.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه بسيط:
            </p>
            <p>
              الوسم مثل الأقواس: <code>( مرحبا بالعالم )</code>. القوس المفتوح <code>(</code> يبدأ النص، والقوس المغلق <code>)</code> يُنهيه. HTML يستخدم <code>&lt;</code> و <code>&gt;</code> بدلاً من الأقواس العادية.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: مثال بسيط */}
        {/* ========================================== */}
        <LessonSection title="مثال بسيط: أول صفحة HTML">
          <p>إليك أبسط صفحة HTML ممكنة. يمكنك كتابتها في أي ملف بامتداد <code>.html</code> وفتحها في المتصفح:</p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>أول صفحة لي</title>
</head>
<body>
    <h1>مرحباً بالعالم!</h1>
    <p>هذه أول صفحة ويب أكتبها.</p>
</body>
</html>`}
          />

          <p>لنفهم كل سطر:</p>

          <ul>
            <li><code>&lt;!DOCTYPE html&gt;</code>: يخبر المتصفح أن هذا ملف <strong>HTML5</strong> (أحدث إصدار). هذه السطر يجب أن يكون دائماً أول سطر في الملف.</li>
            <li><code>&lt;html lang=&quot;ar&quot; dir=&quot;rtl&quot;&gt;</code>: وسم الجذر الذي يحتوي على كل الصفحة. <code>lang=&quot;ar&quot;</code> يُخبر المتصفح أن اللغة عربية، و <code>dir=&quot;rtl&quot;</code> يُخبره أن الاتجاه من اليمين لليسار.</li>
            <li><code>&lt;head&gt;</code>: يحتوي على <strong>معلومات عن الصفحة</strong> لا تظهر للمستخدم مباشرة (مثل العنوان وال charset).</li>
            <li><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code>: يُحدد ترميز الأحرف - مهم لدعم الحروف العربية بشكل صحيح.</li>
            <li><code>&lt;title&gt;</code>: العنوان الذي يظهر في تبويب المتصفح.</li>
            <li><code>&lt;body&gt;</code>: يحتوي على <strong>كل المحتوى المرئي</strong> للصفحة - كل ما يراه المستخدم.</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: مثال عملي من مشروع حقيقي */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: هيكل صفحة حقيقية">
          <p>لنرَ كيف تبدو صفحة ويب حقيقية في بداية مشروع. هذا مثال يُحاكي هيكل صفحة &quot;من نحن&quot; في موقع بسيط:</p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شركتنا - من نحن</title>
</head>
<body>

    <!-- رأس الصفحة (Header) -->
    <header>
        <h1>شركتنا</h1>
        <nav>
            <a href="/">الرئيسية</a>
            <a href="/about">من نحن</a>
            <a href="/contact">تواصل معنا</a>
        </nav>
    </header>

    <!-- المحتوى الرئيسي -->
    <main>
        <section>
            <h2>مرحباً بكم في شركتنا</h2>
            <p>نحن شركة متخصصة في تطوير مواقع الويب.</p>
            <p>نعمل منذ عام 2020 على تقديم أفضل الحلول التقنية.</p>
        </section>

        <section>
            <h2>خدماتنا</h2>
            <ul>
                <li>تصميم المواقع</li>
                <li>تطوير تطبيقات الويب</li>
                <li>تحسين محركات البحث (SEO)</li>
            </ul>
        </section>
    </main>

    <!-- تذييل الصفحة (Footer) -->
    <footer>
        <p>جميع الحقوق محفوظة &copy; 2026</p>
    </footer>

</body>
</html>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 لاحظ:
            </p>
            <p>
              استخدمنا وسوماً مثل <code>&lt;header&gt;</code> و <code>&lt;nav&gt;</code> و <code>&lt;main&gt;</code> و <code>&lt;section&gt;</code> و <code>&lt;footer&gt;</code>. هذه وسوم <strong>دلالية</strong> (Semantic) سنتعلمها بالتفصيل في درس لاحق. وهي تُعطي المتصفح فهماً أعمق لبنية الصفحة.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>عندما تكتب ملف HTML وتفتحه في المتصفح، يحدث التالي:</p>

          <ol>
            <li><strong>المتصفح يقرأ ملف HTML</strong> سطراً بعد سطر من الأعلى إلى الأسفل.</li>
            <li><strong>يبني &quot;شجرة&quot; (DOM Tree)</strong>: يُحوّل الوسوم إلى بنية شجرية حيث أن كل وسم أصبح &quot;عُقدة&quot; (Node) لها أب وأبناء. مثلاً، <code>&lt;body&gt;</code> هو أب لـ <code>&lt;h1&gt;</code> و <code>&lt;p&gt;</code>.</li>
            <li><strong>يُطبّق التنسيقات</strong>: إذا كان هناك ملف CSS مرتبط، يُضيف الألوان والمساحات والأحجام.</li>
            <li><strong>يُنشئ &quot;شجرة ت-rendering&quot; (Render Tree)</strong>: يجمع HTML + CSS لعمل صورة نهائية.</li>
            <li><strong>يرسم الصفحة (Paint)</strong>: يرسم كل عنصر في موضعه الصحيح على الشاشة.</li>
          </ol>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 هل تعلم؟
            </p>
            <p>
              يمكنك رؤية هذه &quot;الشجرة&quot; بأedic yourself! اضغط <strong>F12</strong> في أي صفحة ويب واذهب لتبويب <strong>Elements</strong> (العناصر). سترى HTML الأصلي وكيف يُحوّله المتصفح إلى بنية شجرية.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة للمبتدئين في HTML">
          <ul>
            <li>
              <strong>❌ نسيان وسم الإغلاق:</strong>
              <br />
              كتابة <code>&lt;p&gt;نص بدون إغلاق</code> بدلاً من <code>&lt;p&gt;نص مع إغلاق&lt;/p&gt;</code>. المتصفح قد يتعامل معه بشكل غير متوقع، أو قد يُغلق التاق تلقائياً في مكان خاطئ.
            </li>
            <li>
              <strong>❌ استخدام علامات الاقتباس الخطأ:</strong>
              <br />
              كتابة <code>lang=&apos;ar&apos;</code> بدل <code>lang=&quot;ar&quot;</code>. في HTML، يُفضّل استخدام علامات الاقتباس المزدوجة دائماً.
            </li>
            <li>
              <strong>❌ عدم استخدام doctype:</strong>
              <br />
              نسيان <code>&lt;!DOCTYPE html&gt;</code> في بداية الملف. بدونه، المتصفح قد يُعامل الصفحة في وضع &quot;التوافق&quot; (Quirks Mode) مما يؤدي لسلوك غير متوقع.
            </li>
            <li>
              <strong>❌ وضع المحتوى في الـ head:</strong>
              <br />
              النصوص والصور والأزرار تُوضع في <code>&lt;body&gt;</code> وليس في <code>&lt;head&gt;</code>. الـ head فقط للمعلومات الوصفية.
            </li>
            <li>
              <strong>❌ تداخل الوسوم بشكل خاطئ:</strong>
              <br />
              كتابة <code>&lt;b&gt;&lt;i&gt;نص&lt;/b&gt;&lt;/i&gt;</code> بدلاً من <code>&lt;b&gt;&lt;i&gt;نص&lt;/i&gt;&lt;/b&gt;</code>. يجب أن يُغلق الوسم الداخلي أولاً.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li>
              <strong>✅ استخدم 항상 &lt;!DOCTYPE html&gt;:</strong>
              <br />
              دُمّن أن تكون أول سطر في الملف.
            </li>
            <li>
              <strong>✅ استخدم الحروف الكبيرة للاختصارات:</strong>
              <br />
              مثل <code>HTML</code> و <code>DOCTYPE</code> و <code>UTF-8</code>虽非 ضرورة لكنها ممارسة مُعتادة.
            </li>
            <li>
              <strong>✅ استخدم علامات الاقتباس المزدوجة للسمات:</strong>
              <br />
              مثل <code>lang=&quot;ar&quot;</code> بدلاً من <code>lang=&apos;ar&apos;</code>.
            </li>
            <li>
              <strong>✅ أغلق جميع الوسوم دائماً:</strong>
              <br />
              حتى الوسوم الفارغة مثل <code>&lt;br&gt;</code> و <code>&lt;img&gt;</code> يُفضل كتابتها <code>&lt;br /&gt;</code> و <code>&lt;img /&gt;</code> في XHTML.
            </li>
            <li>
              <strong>✅ استخدم وسوماً دلالية (Semantic):</strong>
              <br />
              مثل <code>&lt;header&gt;</code> و <code>&lt;nav&gt;</code> و <code>&lt;main&gt;</code> بدلاً من استخدام <code>&lt;div&gt;</code> لكل شيء.
            </li>
            <li>
              <strong>✅ اكتب تعليقات توضيحية:</strong>
              <br />
              استخدم التعليقات لشرح الأجزاء المعقدة: <code>&lt;!-- هذا رأس الصفحة --&gt;</code>
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>HTML</strong> هو لغة ترميز تُعطي المحتوى بنية ودلالة.</li>
              <li>HTML يُستخدم لبناء <strong>هيكل</strong> كل صفحة ويب.</li>
              <li>الوسوم (Tags) تأتي في صيغة <code>&lt;اسم&gt;محتوى&lt;/اسم/&gt;</code></li>
              <li>كل صفحة HTML تبدأ بـ <code>&lt;!DOCTYPE html&gt;</code></li>
              <li>الصفحة لها جزئان رئيسيان: <code>&lt;head&gt;</code> (معلومات) و <code>&lt;body&gt;</code> (محتوى مرئي)</li>
              <li>HTML وحده لا يُعطي تصميم جميلاً - دوره هو <strong>البنية</strong> فقط. التصميم دور CSS.</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هو الدور الرئيسي لـ HTML؟"
          options={[
            "تنسيق الألوان والخطوط في الصفحة",
            "إضافة التفاعل والحسابات للصفحة",
            "إعطاء المحتوى بنية ودلالة",
            "إدارة قاعدة البيانات",
          ]}
          correctAnswer={2}
          explanation="HTML مسؤول عن بنية الصفحة ودلالة محتوياتها (أي تحديد ما هو عنوان، ما هو فقرة، ما هو رابط...). التنسيق دور CSS، والتفاعل دور JavaScript."
        />

        <Quiz
          question="أين يُوضع المحتوى المرئي للصفحة (النصوص والصور والأزرار)؟"
          options={[
            "في &lt;head&gt;",
            "في &lt;body&gt;",
            "في &lt;html&gt;",
            "في &lt;title&gt;",
          ]}
          correctAnswer={1}
          explanation="كل ما يراه المستخدم في الصفحة يُوضع داخل وسم &lt;body&gt;. أما &lt;head&gt; فتحتوي على معلومات وصفية فقط مثل العنوان وال charset."
        />

        <Quiz
          question="ما هو الوسم الذي يخبر المتصفح أن اللغة العربية وأن الاتجاه من اليمين لليسار؟"
          options={[
            '&lt;html lang="ar" dir="rtl"&gt;',
            '&lt;html lang="en" dir="ltr"&gt;',
            '&lt;body lang="ar"&gt;',
            '&lt;meta charset="ar"&gt;',
          ]}
          correctAnswer={0}
          explanation='الوسم &lt;html lang="ar" dir="rtl"&gt; يُخبر المتصفح باللغة (ar = عربية) واتجاه الكتابة (rtl = من اليمين لليسار).'
        />

        {/* ========================================== */}
        {/* القسم الثاني عشر: تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: أول صفحة HTML"
          description={
            <p>
              أنشئ ملف HTML جديد باسم <code>index.html</code> يحتوي على:
              <br />
              1. عنوان رئيسي <code>&lt;h1&gt;</code> باسمك
              <br />
              2. فقرة <code>&lt;p&gt;</code> ت介绍 نفسك
              <br />
              3. قائمة <code>&lt;ul&gt;</code> بثلاثة هوايات لك
            </p>
          }
        >
          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>معرّفي</title>
</head>
<body>
    <h1>مرحباً، أنا أحمد</h1>
    <p>أنا مبتدئ في عالم البرمجة وأتعلم حالياً HTML</p>
    <h2>هواياتي:</h2>
    <ul>
        <li>البرمجة</li>
        <li>القراءة</li>
        <li>الألعاب</li>
    </ul>
</body>
</html>`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* القسم الثالث عشر: Mini Project */}
        {/* ========================================== */}
        <div
          className="rounded-xl p-6 my-6 border-2"
          style={{ background: "var(--surface)", borderColor: "var(--secondary)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🏗️</span>
            <span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>
              Mini Project: بطاقة تعريف شخصية
            </span>
          </div>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>
            أنشئ صفحة HTML تحتوي على بطاقة تعريف شخصية تتضمن:
          </p>
          <ul className="mb-4" style={{ color: "var(--foreground)" }}>
            <li>اسمك كعنوان رئيسي <code>&lt;h1&gt;</code></li>
            <li>وصف مختصر لنفسك في فقرة <code>&lt;p&gt;</code></li>
            <li>قائمة بمهاراتك <code>&lt;ul&gt;</code></li>
            <li>قائمة مرقمة بخبراتك <code>&lt;ol&gt;</code></li>
            <li>رابط لصفحتك أو بريدك الإلكتروني <code>&lt;a&gt;</code></li>
          </ul>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            💡 تلميح: ستحتاج إلى وسوم جديدة لم نتعلمها بعد مثل <code>&lt;a&gt;</code> للروابط. يمكنك البحث عنها في Google أو الانتظار للدرس القادم!
          </p>
        </div>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص HTML - الدرس الأول">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>وسوم أساسية:</p>
              <ul className="text-sm space-y-1">
                <li><code className="inline-code">&lt;!DOCTYPE html&gt;</code> - تحديد نوع المستند</li>
                <li><code className="inline-code">&lt;html&gt;</code> - الجذر</li>
                <li><code className="inline-code">&lt;head&gt;</code> - معلومات الصفحة</li>
                <li><code className="inline-code">&lt;body&gt;</code> - المحتوى المرئي</li>
                <li><code className="inline-code">&lt;title&gt;</code> - عنوان التبويب</li>
                <li><code className="inline-code">&lt;meta&gt;</code> - معلومات وصفية</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>مسودة الصفحة الأساسية:</p>
              <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>عنوان</title>
</head>
<body>
  <!-- المحتوى هنا -->
</body>
</html>`}
              />
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
