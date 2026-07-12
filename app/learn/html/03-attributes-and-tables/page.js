// =====================================================
// ملف: page.js (الدرس الثالث: السمات والجداول)
// المكان: app/learn/html/03-attributes-and-tables/page.js
// الوظيفة: تعريف المبتدئين بالسمات والجداول في HTML
// URL: /learn/html/03-attributes-and-tables
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function AttributesAndTables() {
  const lessonInfo = getLessonBySlug("html", "03-attributes-and-tables");

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
        {/* القسم الأول: ما هي السمات (Attributes)؟ */}
        {/* ========================================== */}
        <LessonSection title="ما هي السمات (Attributes)؟">
          <p>
            السمات هي معلومات إضافية نضعها داخل وسم البداية لتغيير سلوك العنصر أو شكله أو لتقديم بيانات وصفية عنه. تأتي دائمًا على شكل <code>اسم=&quot;قيمة&quot;</code>.
          </p>

          <p>
            إذا كان الوسم مثل الاسم (سيارة)، فالسمات هي الصفات (اللون=&quot;أحمر&quot;، الموديل=&quot;2026&quot;).
          </p>

          <CodeBlock
            language="html"
            code={`<!-- هنا href و target و title هي سمات للوسم a -->
<a href="/about" target="_blank" title="اعرف المزيد عنا">صفحة عنا</a>

<!-- سمة id تعطي العنصر معرّفاً فريداً -->
<div id="main-content">المحتوى الرئيسي</div>

<!-- سمة class تُستخدم لتصنيف العناصر -->
<p class="important">نص مهم جداً</p>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه:
            </p>
            <p>
              إذا كان الوسم هو &quot;اسم السيارة&quot; (مثل Toyota)، فالسمات هي &quot;صفات السيارة&quot; (اللون=&quot;أحمر&quot;، שנת الصنع=&quot;2026&quot;). كل سمة تُعطي معلومة إضافية عن العنصر.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: أشهر السمات العامة */}
        {/* ========================================== */}
        <LessonSection title="أشهر السمات العامة">
          <p>هناك سمات يمكن استخدامها مع معظم وسوم HTML:</p>

          <ul>
            <li>
              <strong><code>id</code></strong>: يُعطي معرّفًا فريدًا للعنصر في الصفحة. لا يجب أن يتكرر نفس الـ id في الصفحة الواحدة. يستخدم غالبًا للوصول للعنصر باستخدام JavaScript أو للتنقل الداخلي.
            </li>
            <li>
              <strong><code>class</code></strong>: يُستخدم لتصنيف العناصر. يمكن إعطاء نفس الكلاس لعدة عناصر، ويمكن للعنصر الواحد أن يمتلك عدة كلاسات (مفصولة بمسافة). استخدامه الرئيسي هو مع CSS لتطبيق التنسيقات.
            </li>
            <li>
              <strong><code>style</code></strong>: يُستخدم لإضافة تنسيقات CSS مباشرة على العنصر (Inline CSS). من الأفضل تجنبه واستخدام ملفات CSS خارجية.
            </li>
            <li>
              <strong><code>title</code></strong>: يُظهر نصًا تلميحيًا (Tooltip) عند مرور مؤشر الفأرة فوق العنصر.
            </li>
          </ul>

          <CodeBlock
            language="html"
            code={`<h2 id="main-title" class="heading large-text">العنوان الرئيسي</h2>
<p style="color: blue;" title="هذه فقرة زرقاء">نص أزرق.</p>

<!-- عدة كلاسات على عنصر واحد -->
<span class="highlight bold">نص مهم ومميز</span>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              ⚠️ قاعدة مهمة لـ id vs class:
            </p>
            <p>
              <strong>id فريد</strong> - لا يمكن تكراره في الصفحة. استخدمه لعنصر واحد مميز.<br />
              <strong>class قابل للتكرار</strong> - يمكن استخدامه مع عدة عناصر. استخدمه لتنسيق عدة عناصر بأسلوب واحد.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: مقدمة إلى الجداول */}
        {/* ========================================== */}
        <LessonSection title="مقدمة إلى الجداول (Tables)">
          <p>
            تُستخدم الجداول لعرض البيانات الجدولية (Tabular Data)، مثل جداول الأسعار، إحصائيات، أو أي بيانات تتكون من صفوف وأعمدة.
          </p>

          <p>الوسوم الأساسية لبناء جدول هي:</p>

          <ul>
            <li><code>&lt;table&gt;</code>: الحاوية الرئيسية للجدول.</li>
            <li><code>&lt;tr&gt;</code>: يمثل صفًا في الجدول (Table Row).</li>
            <li><code>&lt;th&gt;</code>: يمثل خلية رأس الجدول (Table Header). النص بداخلها يكون ثقيلًا (bold) ومميزًا.</li>
            <li><code>&lt;td&gt;</code>: يمثل خلية بيانات عادية في الجدول (Table Data).</li>
          </ul>

          <CodeBlock
            language="html"
            code={`<table>
    <tr>
        <th>الاسم</th>
        <th>العمر</th>
    </tr>
    <tr>
        <td>أحمد</td>
        <td>25</td>
    </tr>
    <tr>
        <td>فاطمة</td>
        <td>28</td>
    </tr>
</table>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: مثال عملي: جدول بيانات المستخدمين */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: جدول بيانات المستخدمين">
          <p>
            لنبنِ جدولًا يعرض أسماء المستخدمين وبريدهم الإلكتروني. لاحظ كيف نستخدم <code>&lt;thead&gt;</code> لرأس الجدول و <code>&lt;tbody&gt;</code> لجسم الجدول لتحسين البنية الدلالية.
          </p>

          <CodeBlock
            language="html"
            code={`<table>
  <thead>
    <tr>
      <th scope="col">الاسم</th>
      <th scope="col">البريد الإلكتروني</th>
      <th scope="col">المسمى الوظيفي</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>أحمد محمد</td>
      <td>ahmed@example.com</td>
      <td>مطور واجهات أمامية</td>
    </tr>
    <tr>
      <td>فاطمة علي</td>
      <td>fatima@example.com</td>
      <td>مصممة تجربة مستخدم</td>
    </tr>
    <tr>
      <td>خالد حسن</td>
      <td>khaled@example.com</td>
      <td>مدير مشاريع</td>
    </tr>
  </tbody>
</table>`}
          />

          <p className="mt-4">
            <strong>ملاحظة:</strong> السمة <code>scope=&quot;col&quot;</code> في وسم <code>&lt;th&gt;</code> هي ممارسة ممتازة لتحسين إمكانية الوصول (Accessibility)، حيث تخبر قارئات الشاشة أن هذه الخلية هي رأس للعمود بأكمله.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: جدول م不死 مع thead و tbody و tfoot */}
        {/* ========================================== */}
        <LessonSection title="الجداول المتقدمة: thead, tbody, tfoot">
          <p>يمكنك تقسيم الجدول إلى أجزاء دلالية:</p>

          <CodeBlock
            language="html"
            code={`<table>
  <!-- رأس الجدول -->
  <thead>
    <tr>
      <th>المنتج</th>
      <th>السعر</th>
      <th>الكمية</th>
    </tr>
  </thead>

  <!-- جسم الجدول -->
  <tbody>
    <tr>
      <td>لابتوب</td>
      <td>3500 ر.س</td>
      <td>10</td>
    </tr>
    <tr>
      <td>هاتف</td>
      <td>2000 ر.س</td>
      <td>25</td>
    </tr>
  </tbody>

  <!-- تذييل الجدول -->
  <tfoot>
    <tr>
      <td colspan="2"><strong>المجموع</strong></td>
      <td><strong>35</strong></td>
    </tr>
  </tfoot>
</table>`}
          />

          <p>لاحظ السمة <code>colspan=&quot;2&quot;</code> - هذه السمة تجعل الخلية تمتد عبر 2 أعمدة.</p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>عندما يقرأ المتصفح جدول HTML، يحدث التالي:</p>

          <ul>
            <li>يُنشئ بنية <code>&lt;table&gt;</code> كحاوية رئيسية.</li>
            <li>كل <code>&lt;tr&gt;</code> يُنشئ صفًا أفقيًا.</li>
            <li>كل <code>&lt;th&gt;</code> و <code>&lt;td&gt;</code> يُنشئ خلية داخل الصف.</li>
            <li>يُطبّق تنسيقاتاً افتراضية: <code>&lt;th&gt;</code> يكون عريضاً ومُ centro و <code>&lt;td&gt;</code> يكون عادياً.</li>
            <li>يُضيف حدوداً (Borders) افتراضية للجداول في بعض المتصفحات.</li>
          </ul>

          <p>إذا أردت تجاوز التنسيق الافتراضي، يمكنك استخدام CSS لتنسيق الجدول حسب ذوقك.</p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul>
            <li>
              <strong>❌ استخدام الجداول للتخطيط (Layout):</strong>
              <br />
              في الماضي، كان المطورون يستخدمون الجداول لتقسيم تصميم الصفحة. هذه ممارسة سيئة جدًا وقديمة. استخدم CSS (مثل Flexbox أو Grid) للتخطيط.
            </li>
            <li>
              <strong>❌ نسيان علامات الاقتباس حول قيم السمات:</strong>
              <br />
              كتابة <code>class=heading</code> قد تعمل، لكنها غير صحيحة. دائمًا استخدم علامات الاقتباس: <code>class=&quot;heading&quot;</code>.
            </li>
            <li>
              <strong>❌ استخدام <code>&lt;td&gt;</code> بدلاً من <code>&lt;th&gt;</code> في رأس الجدول:</strong>
              <br />
              هذا يقلل من الدلالة وإمكانية الوصول للجدول.
            </li>
            <li>
              <strong>❌ نسيان tbody و thead:</strong>
              <br />
              استخدام <code>&lt;tr&gt;</code> مباشرة بدون <code>&lt;thead&gt;</code> و <code>&lt;tbody&gt;</code>. هذا يُضعف البنية الدلالية للجدول.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li><strong>✅ استخدم always thead و tbody و tfoot:</strong> لتحسين البنية الدلالية.</li>
            <li><strong>✅ استخدم scope=&quot;col&quot; مع &lt;th&gt;:</strong> لتحسين إمكانية الوصول.</li>
            <li><strong>✅ لا تستخدم الجداول للتخطيط:</strong> استخدم Flexbox أو Grid في CSS.</li>
            <li><strong>✅ استخدم colspan و rowspan عند الحاجة فقط:</strong> وتأكد من أن الجدول لا يصبح معقداً.</li>
            <li><strong>✅ أضف عنواناً للجدول:</strong> باستخدام <code>&lt;caption&gt;</code> لتحسين SEO والوصولية.</li>
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
              <li><strong style={{ color: "var(--primary)" }}>السمات (Attributes)</strong> تُعطي العناصر معلومات إضافية</li>
              <li>أشهر السمات: <code>id</code> (فريد) | <code>class</code> (متكرر) | <code>style</code> | <code>title</code></li>
              <li>الجداول تُستخدم لعرض البيانات الجدولية فقط</li>
              <li>وسوم الجدول: <code>&lt;table&gt;</code> | <code>&lt;tr&gt;</code> | <code>&lt;th&gt;</code> | <code>&lt;td&gt;</code></li>
              <li>استخدم <code>&lt;thead&gt;</code> و <code>&lt;tbody&gt;</code> و <code>&lt;tfoot&gt;</code> لتحسين البنية</li>
              <li>لا تستخدم الجداول للتخطيط - استخدم CSS</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما الفرق بين id و class في HTML؟"
          options={[
            "لا يوجد فرق بينهما",
            "id يُستخدم لعدة عناصر، class لعنصر واحد",
            "id فريد ولا يتكرر، class يمكن تكراره لعدة عناصر",
            "id في CSS فقط، class في HTML فقط",
          ]}
          correctAnswer={2}
          explanation="id يجب أن يكون فريداً في الصفحة (لا يتكرر)، بينما class يمكن استخدامه مع عدة عناصر لإعطاءها نفس التنسيق."
        />

        <Quiz
          question="أي وسم يُستخدم لرأس الجدول؟"
          options={["<td>", "<th>", "<tr>", "<caption>"]}
          correctAnswer={1}
          explanation="&lt;th&gt; يُستخدم لرأس الجدول (Table Header). النص بداخلها يكون عريضاً ومُ centrowاً تلقائياً."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: جدول أفلامك المفضلة"
          description={
            <p>
              قم بإنشاء جدول يعرض 3 من أفلامك المفضلة. يجب أن يحتوي الجدول على 3 أعمدة: &quot;اسم الفيلم&quot;، &quot;سنة الإصدار&quot;، و &quot;تقييمك (من 10)&quot;. استخدم الوسوم الدلالية الصحيحة (<code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>).
            </p>
          }
        >
          <CodeBlock
            language="html"
            code={`<table>
  <thead>
    <tr>
      <th scope="col">اسم الفيلم</th>
      <th scope="col">سنة الإصدار</th>
      <th scope="col">تقييمي</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ال_matrix</td>
      <td>1999</td>
      <td>9</td>
    </tr>
    <tr>
      <td>إنسيبيشن</td>
      <td>2010</td>
      <td>10</td>
    </tr>
    <tr>
      <td>الحارس lone</td>
      <td>2009</td>
      <td>8</td>
    </tr>
  </tbody>
</table>`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص السمات والجداول">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>السمات الأساسية:</p>
              <CodeBlock language="html" code={`<!-- id: فريد في الصفحة -->
<div id="main">...</div>

<!-- class: قابل للتكرار -->
<p class="text">...</p>

<!-- several classes -->
<span class="bold red">...</span>

<!-- title: tooltip -->
<a title="نص تلميحي">...</a>`} />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>الجداول:</p>
              <CodeBlock language="html" code={`<table>
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
</table>`} />
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
