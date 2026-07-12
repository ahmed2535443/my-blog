// =====================================================
// ملف: page.js (الدرس الثاني: العناصر والنصوص)
// المكان: app/learn/html/02-elements-and-text/page.js
// الوظيفة: تعريف المبتدئين بوسوم HTML الأساسية والنصوص
// URL: /learn/html/02-elements-and-text
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ElementsAndText() {
  const lessonInfo = getLessonBySlug("html", "02-elements-and-text");

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
        {/* القسم الأول: ما هي العناصر (Elements)؟ */}
        {/* ========================================== */}
        <LessonSection title="ما هي العناصر (Elements)؟">
          <p>
            في الدرس السابق تعلمنا أن HTML يتكون من &quot;وسوم&quot; (Tags). لكن في الواقع، الوسم وحده ليس العنصر. <strong>العنصر (Element)</strong> يتكون من ثلاثة أجزاء:
          </p>

          <ul>
            <li><strong>وسم الافتتاح</strong> (Opening Tag)</li>
            <li><strong>المحتوى</strong> (Content)</li>
            <li><strong>وسم الإغلاق</strong> (Closing Tag)</li>
          </ul>

          <CodeBlock
            language="html"
            code={`<!-- هذا عنصر كامل (Element) -->
<h1>مرحباً بالعالم</h1>

<!-- تفصيل العنصر: -->
<h1>مرحباً بالعالم</h1>
↑         ↑              ↑
وسم افتتاح  محتوى       وسم إغلاق`}
          />

          <p>بعض العناصر <strong>لا تحتوي محتوى</strong> وتُسمى &quot;عناصر فارغة&quot; (Empty Elements) مثل:</p>

          <CodeBlock
            language="html"
            code={`<!-- سطر فارغ (لا وسم إغلاق) -->
<br />

<!-- صورة (لا وسم إغلاق) -->
<img src="photo.jpg" />

<!-- خط فاصل (لا وسم إغلاق) -->
<hr />`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه بسيط:
            </p>
            <p>
              الوسم مثل الأقواس <code>( )</code>، والمحتوى هو ما بداخلها. لكن بعض العناصر مثل <code>&lt;br&gt;</code> و <code>&lt;img&gt;</code> لا تحتاج محتوى بين الأقواس - هي مثل <code>( )</code> فارغة.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: العناصر النصية (Text Elements) */}
        {/* ========================================== */}
        <LessonSection title="العناصر النصية الأساسية">
          <p>هناك وسوم كثيرة للتعامل مع النصوص. إليك أهمها:</p>

          <h3>العناوين (Headings)</h3>
          <p>HTML يوفر 6 درجات للعناوين من <code>&lt;h1&gt;</code> (الأكبر) إلى <code>&lt;h6&gt;</code> (الأصغر):</p>

          <CodeBlock
            language="html"
            code={`<h1>العنوان الرئيسي (h1)</h1>
<h2>عنوان فرعي (h2)</h2>
<h3>عنوان أصغر (h3)</h3>
<h4>عنوان أصغر (h4)</h4>
<h5>عنوان أصغر (h5)</h5>
<h6>عنوان أصغر (h6)</h6>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              ⚠️ قاعدة مهمة:
            </p>
            <p>
              لا تتخطَّ من <code>&lt;h1&gt;</code> مباشرة إلى <code>&lt;h3&gt;</code>! يجب أن تكون العناوين متسلسلة. <code>&lt;h1&gt;</code> ثم <code>&lt;h2&gt;</code> ثم <code>&lt;h3&gt;</code> وهكذا. تخطي درجة هو خطأ شائع.
            </p>
          </div>

          <h3>الفقرات (Paragraphs)</h3>
          <p>لفقرة نصية عادية، نستخدم وسم <code>&lt;p&gt;</code>:</p>

          <CodeBlock
            language="html"
            code={`<p>هذه فقرة أولى. تظهر في سطر منفصل.</p>
<p>هذه فقرة ثانية. تظهر أيضاً في سطر منفصل.</p>`}
          />

          <h3>النص العريض والمائل (Bold & Italic)</h3>

          <CodeBlock
            language="html"
            code={`<!-- نص عريض (Strong - له دلالة أهمية) -->
<strong>هذا نص مهم</strong>

<!-- نص مائل (Emphasis - له دلالة التأكيد) -->
<em>هذا نص بتأثير مائل</em>

<!-- نص عريض بدون دلالة (يُفضل استخدام strong) -->
<b>نص عريض فقط</b>

<!-- نص مائل بدون دلالة (يُفضل استخدام em) -->
<i>نص مائل فقط</i>`}
          />

          <p>
            الفرق بين <code>&lt;strong&gt;</code> و <code>&lt;b&gt;</code>: الأول يدل على <strong>أهمية</strong> النص (ะ.semantic)، بينما الثاني يُعطي فقط <strong>شكل</strong> عريض. يُفضل استخدام <code>&lt;strong&gt;</code> لأسباب تتعلق بالوصولية.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: القوائم (Lists) */}
        {/* ========================================== */}
        <LessonSection title="القوائم (Lists)">
          <p>HTML توفر三种 أنواع من القوائم:</p>

          <h3>1. القائمة غير المرقمة (Unordered List)</h3>
          <p>تستخدم عندما لا يكون ترتيب العناصر مهماً:</p>

          <CodeBlock
            language="html"
            code={`<ul>
    <li>تفاح</li>
    <li>موز</li>
    <li>برتقال</li>
</ul>`}
          />

          <h3>2. القائمة المرقمة (Ordered List)</h3>
          <p>تستخدم عندما يكون الترتيب مهماً:</p>

          <CodeBlock
            language="html"
            code={`<ol>
    <li>الخطوة الأولى: تثبيت Node.js</li>
    <li>الخطوة الثانية: إنشاء مشروع</li>
    <li>الخطوة الثالثة: كتابة الكود</li>
</ol>`}
          />

          <h3>3. قائمة التعريف (Description List)</h3>
          <p>تستخدم لعرض أزواج من المصطلحات والتعريفات:</p>

          <CodeBlock
            language="html"
            code={`<dl>
    <dt>HTML</dt>
    <dd>لغة ترميز النص التشعبي - تُحدد بنية الصفحة</dd>

    <dt>CSS</dt>
    <dd>أوراق الأنماط المتراصة - تُحدد شكل الصفحة</dd>

    <dt>JavaScript</dt>
    <dd>لغة برمجة - تُضيف التفاعل للصفحة</dd>
</dl>`}
          />

          <h3>قوائم متداخلة (Nested Lists)</h3>
          <p>يمكنك وضع قائمة داخل قائمة أخرى:</p>

          <CodeBlock
            language="html"
            code={`<ul>
    <li>ال front-end
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>ال back-end
        <ul>
            <li>Node.js</li>
            <li>Python</li>
        </ul>
    </li>
</ul>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: الفواصل والت_wsوم المفيدة */}
        {/* ========================================== */}
        <LessonSection title="وسوم مفيدة أخرى للنصوص">
          <CodeBlock
            language="html"
            code={`<!-- سطر فارغ (Line Break) -->
نص في سطر<br />
نص في سطر جديد

<!-- خط فاصل (Horizontal Rule) -->
<section>
    <p>المحتوى الأول</p>
</section>
<hr />
<section>
    <p>المحتوى الثاني</p>
</section>

<!-- كود مُضمَّن (Inline Code) -->
<p>استخدم أمر <code>git init</code> لإنشاء مستودع جديد</p>

<!-- اقتباس (Block Quote) -->
<blockquote>
    <p>البرمجة ليست عن الكتابة فقط، بل عن التفكير.</p>
</blockquote>

<!-- كود مُنسَّق (Preformatted Text) -->
<pre>
    هذا نص مُنسَّق
    الفراغات والأسطر
    تظهر كما هي
</pre>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: مثال عملي من مشروع حقيقي */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: صفحة مقال بسيط">
          <p>لنرَ كيف نستخدم كل ما تعلمناه في صفحة مقال حقيقية:</p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>مقدمة في البرمجة - مقال</title>
</head>
<body>
    <article>
        <h1>مقدمة في عالم البرمجة</h1>
        <p>البرمجة هي مهارة أساسية في عصرنا الحالي. في هذا المقال،
           سنتعلم أساسيات عالم البرمجة.</p>

        <h2>لماذا تعلم البرمجة؟</h2>
        <p>تعلم البرمجة يفتح أمامك أبواباً كثيرة:</p>
        <ol>
            <li>فرص عمل عالية الأجر</li>
            <li>إمكانية العمل عن بُعد</li>
            <li>بناء مشاريعك الخاصة</li>
            <li>تطوير مهارات التفكير المنطقي</li>
        </ol>

        <hr />

        <h2>أفضل لغات البرمجة للمبتدئين</h2>
        <ul>
            <li><strong>Python</strong> - سهلة التعلم ومتعددة الاستخدامات</li>
            <li><strong>JavaScript</strong> - لغة الويب الأساسية</li>
            <li><strong>HTML/CSS</strong> - أساسيات تصميم المواقع</li>
        </ul>

        <h2>نصيحتي لك</h2>
        <blockquote>
            <p>لا تحاول تعلم كل شيء في وقت واحد.
               ابدأ بلغة واحدة وأتقنها قبل الانتقال للتالية.</p>
        </blockquote>

        <p>تذكّر: <em>الاستمرارية أهم من الكمال</em>.
           ابدأ اليوم ولا تنتظر الغد!</p>
    </article>
</body>
</html>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>عندما يقرأ المتصفح وسوم النصوص، يحدث التالي:</p>

          <ul>
            <li>يُحوّل <code>&lt;h1&gt;</code> إلى نص بحجم كبير (عادة <strong>32px</strong> أو أكثر) ووزن عريض.</li>
            <li>يُحوّل <code>&lt;p&gt;</code> إلى نص في فقرة منفصلة بهامش سفلي.</li>
            <li>يُحوّل <code>&lt;ul&gt;</code> و <code>&lt;ol&gt;</code> إلى قوائم نقاط أو أرقام تلقائياً.</li>
            <li>يُحوّل <code>&lt;strong&gt;</code> إلى نص <strong>عريض</strong>.</li>
            <li>يُحوّل <code>&lt;code&gt;</code> إلى نص بخط خاص (Monospace) مع خلفية رمادية.</li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 هل تعلم؟
            </p>
            <p>
              المتصفح يُعطي كل وسم <strong>أبعاداً افتراضية</strong> (default styles). مثلاً، <code>&lt;h1&gt;</code> يحصل على <code>font-size: 2em</code> و <code>margin: 0.67em 0</code>. يمكنك رؤية هذه القيم في أدوات المطور (F12).
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul>
            <li>
              <strong>❌ تخطي درجات العناوين:</strong>
              <br />
              استخدام <code>&lt;h1&gt;</code> مباشرة followed by <code>&lt;h3&gt;</code> بدون <code>&lt;h2&gt;</code>. هذا يُضعف بنية الصفحة ويسبب مشاكل في SEO والوصولية.
            </li>
            <li>
              <strong>❌ استخدام العناوين لتنسيق النص فقط:</strong>
              <br />
              استخدام <code>&lt;h3&gt;</code> لأنك تريد نصاً أصغر. العناوين للبنية الدلالية فقط، أما التنسيق فدور CSS.
            </li>
            <li>
              <strong>❌ وضع عناصر داخلية في غير مكانها:</strong>
              <br />
              مثل وضع <code>&lt;p&gt;</code> داخل <code>&lt;p&gt;</code> آخر. هذا غير صحيح في HTML.
            </li>
            <li>
              <strong>❌ استخدام <code>&lt;br&gt;</code> لإنشاء مسافات:</strong>
              <br />
              استخدام <code>&lt;br&gt;&lt;br&gt;&lt;br&gt;</code> لإنشاء مسافة بين الفقرات. استخدم الـ margin في CSS بدلاً من ذلك.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li><strong>✅ استخدم h1 مرة واحدة فقط في الصفحة:</strong> لأنها تمثل العنوان الرئيسي للصفحة.</li>
            <li><strong>✅ استخدم strong و em بدلاً من b و i:</strong> لأنهما يُعطيان معنى دلالياً إضافياً.</li>
            <li><strong>✅ افصل العناصر بمسافة بصرية:</strong> استخدم فارغة بين الكتل المنطقية في ملف HTML لسهولة القراءة.</li>
            <li><strong>✅ استخدم القوائم عند الحاجة:</strong> لا تحول كل مجموعة نقاط إلى فقرات.</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>العنصر (Element)</strong> = وسم افتتاح + محتوى + وسم إغلاق</li>
              <li>العناوين من <code>&lt;h1&gt;</code> إلى <code>&lt;h6&gt;</code> - لا تتخطَّ الدرجات</li>
              <li>الفقرات: <code>&lt;p&gt;</code></li>
              <li>النص العريض: <code>&lt;strong&gt;</code> | المائل: <code>&lt;em&gt;</code></li>
              <li>القوائم: <code>&lt;ul&gt;</code> (غير مرقمة) | <code>&lt;ol&gt;</code> (مرقمة) | <code>&lt;dl&gt;</code> (تعريف)</li>
              <li>العناصر الفارغة: <code>&lt;br&gt;</code> و <code>&lt;hr&gt;</code> و <code>&lt;img&gt;</code> (لا وسم إغلاق)</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="كم عدد درجات العناوين في HTML؟"
          options={["4 درجات", "5 درجات", "6 درجات", "3 درجات"]}
          correctAnswer={2}
          explanation="HTML يوفر 6 درجات للعناوين من h1 (الأكبر) إلى h6 (الأصغر)."
        />

        <Quiz
          question="ما الفرق بين <strong>strong</strong> و <strong>b</strong>؟"
          options={[
            "لا يوجد فرق بينهما",
            "strong للنص العريض، b للنص المائل",
            "strong يدل على الأهمية الدلالية، b يُعطي فقط الشكل العريض",
            "strong يُستخدم في CSS، b يُستخدم في HTML فقط",
          ]}
          correctAnswer={2}
          explanation="strong يدل على أن النص مهم دلالياً (semantic importance)، بينما b يُعطي فقط شكل عريض بدون معنى إضافي. يُفضل استخدام strong لأسباب تتعلق بالوصولية."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: صفحة مقال كاملة"
          description={
            <p>
              أنشئ صفحة HTML تحتوي على مقال كامل يتضمن:
              <br />
              1. عنوان رئيسي <code>&lt;h1&gt;</code>
              <br />
              2. فقرة مقدمة
              <br />
              3. عنوان فرعي <code>&lt;h2&gt;</code> مع فقرة
              <br />
              4. قائمة مرقمة بخطوات
              <br />
              5. قائمة غير مرقمة
              <br />
              6. اقتباس
              <br />
              7. خط فاصل
              <br />
              8. فقرة ختامية بنص عريض ومائل
            </p>
          }
        >
          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>مقال عن البرمجة</title>
</head>
<body>
    <article>
        <h1>كيف تبدأ في تعلم البرمجة</h1>
        <p>البرمجة مهارة قوية يمكنك تعلمها اليوم.</p>

        <h2>خطوات البداية</h2>
        <ol>
            <li>اختر لغة برمجة</li>
            <li>ادرس الأساسيات</li>
            <li>طبّق بمشاريع صغيرة</li>
        </ol>

        <h2>أفضل الموارد المجانية</h2>
        <ul>
            <li>CodeMaster</li>
            <li>MDN Web Docs</li>
            <li>freeCodeCamp</li>
        </ul>

        <hr />

        <blockquote>
            <p>البرمجة ليست صعبة، تحتاج فقط صبراً وممارسة.</p>
        </blockquote>

        <p>تذكّر: <strong><em>ابدأ من الصفر ولا تتوقف عن التعلم</em></strong></p>
    </article>
</body>
</html>`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص العناصر والنصوص">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>عناوين:</p>
              <CodeBlock language="html" code={`<h1>أكبر عنوان</h1>
<h2>عنوان فرعي</h2>
<h3>عنوان أصغر</h3>
<h4>عنوان أصغر</h4>
<h5>عنوان أصغر</h5>
<h6>أصغر عنوان</h6>`} />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>نصوص:</p>
              <CodeBlock language="html" code={`<p>فقرة نصية</p>
<strong>نص عريض (مهم)</strong>
<em>نص مائل (مؤكد)</em>
<code>كود مضمَّن</code>
<blockquote>اقتباس</blockquote>`} />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>قوائم:</p>
              <CodeBlock language="html" code={`<!-- غير مرقمة -->
<ul>
  <li>عنصر 1</li>
  <li>عنصر 2</li>
</ul>

<!-- مرقمة -->
<ol>
  <li>خطوة 1</li>
  <li>خطوة 2</li>
</ol>

<!-- وسوم فارغة -->
<br />  <!-- سطر فارغ -->
<hr />  <!-- خط فاصل -->`} />
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
