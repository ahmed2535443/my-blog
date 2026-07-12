// =====================================================
// ملف: page.js (الدرس السادس: أساسيات DOM والأحداث)
// المكان: app/learn/javascript/06-dom-and-events/page.js
// الوظيفة: تعريف المبتدئين بـ DOM والأحداث في JavaScript
// URL: /learn/javascript/06-dom-and-events
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function DOMAndEvents() {
  const lessonInfo = getLessonBySlug("javascript", "06-dom-and-events");

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
        {/* القسم الأول: ما هو DOM */}
        {/* ========================================== */}
        <LessonSection title="ما هو DOM؟">
          <p>
            <strong>DOM</strong> اختصار لـ <strong>Document Object Model</strong> هو واجهة برمجية تمثل محتوى صفحة الويب كشجرة من الكائنات. المتصفح يحوّل HTML إلى شجرة يمكن لـ JavaScript التعامل معها وتعديلها.
          </p>
          <CodeBlock
            language="html"
            code={`<!-- HTML -->
<div><h1>مرحباً</h1><ul><li>عنصر 1</li></ul></div>

<!-- الـ DOM كشجرة:
  document → html → body → div
    ├── h1 → "مرحباً"
    └── ul → li → "عنصر 1"
-->`}
          />
          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه:
            </p>
            <p>
              الـ DOM مثل شجرة عائلية: <code>document</code> هو الجذر، وتحته فروع (عناصر HTML)، وكل فرع يمكن أن يحتوي على فروع أخرى.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: لماذا نستخدمه */}
        {/* ========================================== */}
        <LessonSection title="لماذا نستخدم DOM؟">
          <p>
            بدون DOM، صفحات الويب ستكون ثابتة لا يمكن تغييرها. DOM يسمح بجعل الصفحات <strong>تفاعلية</strong>: تحديث المحتوى وإظهار/إخفاء العناصر وإضافة عناصر جديدة دون إعادة تحميل الصفحة.
          </p>
          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "rgba(247, 223, 30, 0.1)", borderColor: "#f7df1e" }}
          >
            <p className="font-bold mb-2" style={{ color: "#b8960a" }}>
              ⚡ ملاحظة regarding React:
            </p>
            <p>
              في <strong>React</strong> لا نعدّل DOM يدوياً - React يتولى ذلك تلقائياً. لكن فهم DOM يساعدك على فهم ماذا يفعل React خلف الكواليس.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: المشكلة التي يحلها */}
        {/* ========================================== */}
        <LessonSection title="المشكلة التي يحلها DOM">
          <p>
            قبل DOM، كان المتصفح يعرض HTML كنص ثابت فقط. DOM يوفّر <strong>تمثيلاً شجرياً</strong> لكل عنصر وواجهة برمجية للبحث والتعديل والتفاعل معه.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: شرح بسيط */}
        {/* ========================================== */}
        <LessonSection title="شرح بسيط">
          <p>ثلاث طرق رئيسية لاختيار العناصر:</p>
          <CodeBlock
            language="javascript"
            code={`// getElementById: يبحث بالـ id فقط
const title = document.getElementById("title");

// querySelector: أول عنصر يطابق محدد CSS (الأكثر مرونة)
const box = document.querySelector(".my-box");
const first = document.querySelector("ul li:first-child");

// querySelectorAll: جميع العناصر المطابقة
const items = document.querySelectorAll("li");
items.forEach(item => console.log(item.textContent));`}
          />
          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 getElementById vs querySelector:
            </p>
            <p>
              <code>getElementById</code> أسرع لكن تبحث فقط بالـ id. <code>querySelector</code> أكثر مرونة وتدعم أي محدد CSS.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: مثال بسيط */}
        {/* ========================================== */}
        <LessonSection title="مثال بسيط: تعديل العناصر">
          <CodeBlock
            language="javascript"
            code={`const title = document.querySelector("h1");
const msg = document.querySelector(".info");

title.textContent = "مرحباً!";           // تغيير النص
msg.innerHTML = "<strong>جديد</strong>"; // تغيير HTML
title.style.color = "blue";             // تغيير الأسلوب
msg.classList.add("highlight");          // إضافة class
msg.classList.toggle("active");          // تبديل class
title.setAttribute("dir", "rtl");        // تغيير سمة`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: مثال عملي */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: قائمة مهام تفاعلية">
          <CodeBlock
            language="javascript"
            code={`const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");  // إنشاء عنصر
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = " حذف";
  deleteBtn.addEventListener("click", () => li.remove()); // حذف

  li.appendChild(deleteBtn);
  taskList.appendChild(li);  // إضافة للصفحة
  taskInput.value = "";
});

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: الأحداث (Events) */}
        {/* ========================================== */}
        <LessonSection title="الأحداث (Events)">
          <p>الأحداث هي طريقة JavaScript للاستجابة لتفاعلات المستخدم.</p>
          <CodeBlock
            language="javascript"
            code={`const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  console.log(event.target);        // العنصر الذي فعّل الحدث
  console.log(event.currentTarget); // العنصر صاحب المستمع
  event.preventDefault();           // منع السلوك الافتراضي
});`}
          />
          <p>الأحداث الأكثر شيوعاً:</p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li><code>click</code> / <code>dblclick</code> - النقر</li>
            <li><code>input</code> / <code>change</code> - تغيير الحقول</li>
            <li><code>submit</code> - إرسال النموذج</li>
            <li><code>keydown</code> / <code>keyup</code> - المفاتيح</li>
            <li><code>scroll</code> - التمرير</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: Event Delegation */}
        {/* ========================================== */}
        <LessonSection title="Event Delegation - أنمط مهم">
          <p>
            <strong>Event Delegation</strong>: بدلاً من مستمع لكل عنصر، تضيف مستمعاً واحداً للأب وتحقق من <code>event.target</code>.
          </p>
          <CodeBlock
            language="javascript"
            code={`// ❌ مستمع لكل عنصر (بطيء)
document.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", handler);
});

// ✅ مستمع واحد على الأب (ذكي)
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("نقرت على:", e.target.textContent);
  }
});`}
          />
          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "rgba(56, 189, 248, 0.1)", borderColor: "#38bdf8" }}
          >
            <p className="font-bold mb-2" style={{ color: "#38bdf8" }}>
              💡 لماذا مهم؟
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>يعمل مع العناصر المُنشأة ديناميكياً</li>
              <li>موفر للذاكرة: مستمع واحد بدلاً من مئات</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: ماذا يحدث خلف الكواليس */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>عند حدوث حدث، يمر بثلاث مراحل:</p>
          <ol className="list-decimal list-inside space-y-2 my-4">
            <li><strong>Capture:</strong> ينزل من الجذر إلى العنصر الهدف</li>
            <li><strong>Target:</strong> يصل للعنصر ويتم تشغيل المستمع</li>
            <li><strong>Bubble:</strong> يصعد من الهدف إلى الجذر</li>
          </ol>
          <p>
            هذه الآلية تجعل <strong>Event Delegation</strong> ممكنة - الأحداث تنتقل من الأبناء إلى الآباء عبر Bubble Phase.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="font-bold mb-2" style={{ color: "#ef4444" }}>
                ❌ الخلط بين querySelector و querySelectorAll
              </p>
              <CodeBlock
                language="javascript"
                code={`// خطأ: يُرجع عنصراً واحداً فقط
const items = document.querySelector("li");

// صحيح: جلب كل العناصر
const items = document.querySelectorAll("li");`}
              />
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="font-bold mb-2" style={{ color: "#ef4444" }}>
                ❌ استخدام innerHTML مع نصوص المستخدمين
              </p>
              <CodeBlock
                language="javascript"
                code={`// خطأ: يسمح بهجمات XSS
element.innerHTML = userInput;

// صحيح: استخدم textContent
element.textContent = userInput;`}
              />
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="font-bold mb-2" style={{ color: "#ef4444" }}>
                ❌ نسيان removeEventListener
              </p>
              <CodeBlock
                language="javascript"
                code={`const handler = () => console.log("مرحباً");
button.addEventListener("click", handler);
// لإزالته لاحقاً:
button.removeEventListener("click", handler);`}
              />
            </div>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul className="list-disc list-inside space-y-2 my-4">
            <li><strong>فضّل querySelector/All:</strong> أكثر مرونة</li>
            <li><strong>استخدم textContent بدل innerHTML:</strong> لتجنب XSS</li>
            <li><strong>استخدم Event Delegation:</strong> للعناصر الديناميكية</li>
            <li><strong>احذف المستمعات عند الانتهاء:</strong> لتجنب تسرب الذاكرة</li>
            <li><strong>في React لا تعدّل DOM يدوياً:</strong> دع React يتولى ذلك</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>DOM</strong> هو تمثيل شجري لمحتوى الصفحة يمكن لـ JavaScript التعامل معه</li>
              <li><strong>اختيار:</strong> <code>getElementById</code>, <code>querySelector</code>, <code>querySelectorAll</code></li>
              <li><strong>تعديل:</strong> <code>textContent</code>, <code>innerHTML</code>, <code>classList</code>, <code>style</code></li>
              <li><strong>إنشاء/حذف:</strong> <code>createElement</code>, <code>appendChild</code>, <code>remove</code></li>
              <li><strong>الأحداث:</strong> <code>addEventListener</code> للاستجابة لتفاعلات المستخدم</li>
              <li><strong>Event Delegation:</strong> مستمع واحد على الأب يتعامل مع كل الأبناء</li>
              <li><strong>في React:</strong> لا نعدّل DOM مباشرة - React يستخدم Virtual DOM</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz 1 */}
        {/* ========================================== */}
        <Quiz
          question="ما الفرق بين querySelector و getElementById؟"
          options={[
            "لا يوجد فرق",
            "querySelector يبحث فقط بالـ id",
            "getElementById يبحث فقط بالـ id، بينما querySelector يدعم أي محدد CSS",
            "querySelector أسرع دائماً",
          ]}
          correctAnswer={2}
          explanation="getElementById تبحث فقط بالـ id. querySelector تبحث عن أول عنصر يطابق أي محدد CSS. getElementById أسرع لكن querySelector أكثر مرونة."
        />

        {/* ========================================== */}
        {/* Quiz 2 */}
        {/* ========================================== */}
        <Quiz
          question="لماذا نستخدم Event Delegation؟"
          options={[
            "لأنها أسهل سرعة في المعالجة",
            "لأنها تسمح بمعالجة أحداث العناصر الديناميكية وتوفّر الذاكرة",
            "لأنها الطريقة الوحيدة",
            "لأنها تمنع preventDefault",
          ]}
          correctAnswer={1}
          explanation="Event Delegation تستخدم Bubble Phase لالتقاط الأحداث على الأب. تعمل مع العناصر المُنشأة ديناميكياً وتوفّر الذاكرة."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: عداد تفاعلي"
          description={
            <p>
              أنشئ عداداً يحتوي على: عنصر يعرض العدد (ابدأ من 0)، زر +1، زر -1، وزر إعادة تعيين. استخدم <code>querySelector</code> و <code>addEventListener</code>.
            </p>
          }
        >
          <CodeBlock
            language="javascript"
            code={`const countEl = document.getElementById("count");
let count = 0;

document.getElementById("increase").addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countEl.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
});`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص DOM والأحداث">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>اختيار العناصر:</p>
              <CodeBlock
                language="javascript"
                code={`document.getElementById("id")
document.querySelector(".class")
document.querySelectorAll("li")
element.parentElement
element.children`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>الأحداث:</p>
              <CodeBlock
                language="javascript"
                code={`el.addEventListener("click", fn)
el.removeEventListener("click", fn)
"click" "input" "submit" "keydown"
event.target / event.preventDefault()`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>تعديل العناصر:</p>
              <CodeBlock
                language="javascript"
                code={`el.textContent = "جديد"
el.innerHTML = "<b>جديد</b>"
el.style.color = "red"
el.classList.add("a")
el.setAttribute("href", "#")`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>إنشاء وحذف:</p>
              <CodeBlock
                language="javascript"
                code={`document.createElement("div")
parent.appendChild(div)
div.remove()
element.cloneNode(true)`}
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
