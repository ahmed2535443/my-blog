import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ModulesAndAsync() {
  const lessonInfo = getLessonBySlug("javascript", "04-modules-and-async");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        {/* ===================================================== */}
        {/* القسم 1: ما هو */}
        {/* ===================================================== */}
        <LessonSection title="ما هو؟">
          <p>
            في هذا الدرس سنتعلم على مجموعتين من أهم المفاهيم في JavaScript الحديث:{" "}
            <strong>الوحدات (Modules)</strong> و<strong>البرمجة غير المتزامنة (Async Programming)</strong>.
            هاتان المفاهيمان هما حجر الأساس في بناء تطبيقات ويب حديثة وفعّالة.
          </p>
          <p>
            <strong>الوحدات (Modules)</strong> هي طريقة لتقسيم الكود البرمجي إلى ملفات صغيرة مستقلة
            يمكن إعادة استخدامها وتنظيمها بشكل منطقي. بدلاً من كتابة كل الكود في ملف واحد ضخم،
            تقوم بتقسيمه إلى وحدات منطقية كل منها مسؤول عن جزء محدد.
          </p>
          <p>
            <strong>البرمجة غير المتزامنة (Async Programming)</strong> هي طريقة لتنفيذ العمليات
            التي تستغرق وقتاً مثل جلب البيانات من الخادم أو قراءة ملفات دون حجب (Blocking) تنفيذ
            باقي الكود. تشمل هذه البرمجة <strong>Promises</strong> و<strong>async/await</strong>
            و<strong>fetch API</strong>.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-4">
            <p className="text-blue-400 font-bold mb-2">💡 لماذا هذا الدرس مهم؟</p>
            <p>
              كل تطبيق ويب حديث يعتمد على Modules لتنظيم الكود و على Async لجلب البيانات
              من الخوادم. بدون فهم هذين المفهومين، ستكون غير قادر على بناء تطبيقات واقعية.
            </p>
          </div>
        </LessonSection>

        {/* ===================================================== */}
        {/* القسم 2: لماذا نستخدمه */}
        {/* ===================================================== */}
        <LessonSection title="لماذا نستخدمه؟">
          <p>
            قبل ES6، كان JavaScript يعاني من مشكلة في تنظيم الكود. لم يكن هناك طريقة
            رسمية لتقسيم الكود إلى ملفات مستقلة، وكان المطورون يعتمدون على أدوات
            مثل CommonJS (Node.js) أو AMD (للمتصفح) كلها بأشكال مختلفة ومعقدة.
          </p>
          <p>
            جاءت <strong>ES Modules</strong> لحل هذه المشكلة بتقديم نظام موحد ومعياري
            لتنظيم الكود. أما <strong>البرمجة غير المتزامنة</strong> فجاءت لحل مشكلة
            حجب تنفيذ الكود عند تنفيذ عمليات بطيئة مثل طلبات الشبكة.
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>
              <strong>تنظيم الكود:</strong> تقسيم الكود إلى ملفات منطقية سهلة الصيانة
            </li>
            <li>
              <strong>إعادة الاستخدام:</strong> تصدير وظائف واستيرادها في أي مكان
            </li>
            <li>
              <strong>عزل النطاق:</strong> كل وحدة لها نطاق (Scope) خاص بها
            </li>
            <li>
              <strong>تحسين الأداء:</strong> التحميل الكسول (Lazy Loading) للملفات
            </li>
            <li>
              <strong>منع حجب الواجهة:</strong> العمليات غير المتزامنة تمنع تجميد الصفحة
            </li>
            <li>
              <strong>تحسين تجربة المستخدم:</strong> الواجهة تبقى مستجابة أثناء انتظار البيانات
            </li>
          </ul>
        </LessonSection>

        {/* ===================================================== */}
        {/* القسم 3: المشكلة التي يحلها */}
        {/* ===================================================== */}
        <LessonSection title="المشكلة التي يحلها">
          <p>
            قبل ظهور ES Modules، كان الكود كله في ملف واحد أو عدة ملفات مترابطة بشكل
            غير منظم. هذا يسبب عدة مشاكل خطيرة:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>
              <strong>تعارض الأسماء:</strong> متغير أو دالة بنفس الاسم في ملفين مختلفين
              قد يسببان تعارضاً
            </li>
            <li>
              <strong>صعوبة الصيانة:</strong> ملف واحد ضخم يحتوي كل الكود يصعب فهمه وتطويره
            </li>
            <li>
              <strong>عدم إمكانية إعادة الاستخدام:</strong> الكود المكتوب في ملف واحد يصعب
              نقله لمشروع آخر
            </li>
            <li>
              <strong>依赖关系 غير واضحة:</strong> من غير الواضح أي ملف يعتمد على أي ملف آخر
            </li>
          </ul>
          <p>
            أما بالنسبة للبرمجة غير المتزامنة، فالمشكلة هي أن بعض العمليات مثل جلب
            بيانات من خادم远方 تستغرق وقتاً طويلاً. بدون Async، سيتجمّد المتصفح
            ويتوقف عن الاستجابة للمستخدم أثناء انتظار نتيجة العملية.
          </p>
          <p>
            تخيّل أنك تفتح صفحة ويب وتبدأ في تحميل بيانات من الخادم. بدون Async،
            لن تتمكن من التمرير أو النقر على أي زر حتى تصل البيانات. هذا تجربة مستخدم
            كارثية!
          </p>
        </LessonSection>

        {/* ===================================================== */}
        {/* القسم 4: شرح بسيط */}
        {/* ===================================================== */}
        <LessonSection title="شرح بسيط">
          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>
            أولاً: الوحدات (Modules)
          </h3>
          <p>
            فكّر في الوحدات como في الكتب: كل فصل في الكتاب يغطي موضوعاً محدداً.
            بدلاً من كتابة كل شيء في صفحة واحدة طويلة، أنت تقسم الكود إلى ملفات صغيرة
            كل منها مسؤول عن شيء واحد.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-4">
            <p className="text-blue-400 font-bold mb-2">💡 تشبيه بسيط:</p>
            <p>
              تخيّل أنك تبني بيتاً: بدلاً من استخدام قطعة خشب واحدة كبيرة لكل شيء،
              أنت تقصّ القطع إلى أحجام مناسبة لكل غرفة. ملف <code>utils.js</code>
              يحتوي أدوات مساعدة، وملف <code>api.js</code> يتعامل مع الخوادم،
              وملف <code>auth.js</code> يدير المصادقة... إلخ.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>
            ثانياً: البرمجة غير المتزامنة (Async)
          </h3>
          <p>
            البرمجة غير المتزامنة تعني أن المتصفح لا يتوقف عن العمل أثناء انتظار
            نتيجة عملية بطيئة. بدلاً من ذلك، يقوم المتصفح بتنفيذ باقي الكود ثم يعود
            لمعالجة النتيجة عندما تصبح جاهزة.
          </p>
          <p>
            <strong>Promises (الوعود)</strong> هي الطريقة الأساسية للتعبير عن عملية
            غير متزامنة. الوعد يمثل قيمة ستكون جاهزة في المستقبل، أو خطأ قد يحدث.
          </p>
          <p>
            <strong>async/await</strong> هو بريدغ مريح (Syntactic Sugar) فوق
            Promises يجعل الكود أبسط وأكثر وضوحاً. بدلاً من استخدام سلسلة من
            <code>.then()</code>، تكتب كوداً يشبه البرمجة المتزامنة.
          </p>
          <p>
            <strong>fetch API</strong> هي الوظيفة المدمجة في المتصفح لجلب البيانات
            من الخوادم. تُرجع Promise تمثل استجابة الطلب.
          </p>
        </LessonSection>

        {/* ===================================================== */}
        {/* القسم 5: مثال بسيط */}
        {/* ===================================================== */}
        <LessonSection title="مثال بسيط">
          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>
            1. تصدير واستيراد وحدات (Modules)
          </h3>
          <p>
            إليك كيف تُنشئ وحدة بسيطة وتستوردها في ملف آخر:
          </p>
          <CodeBlock
            code={`// === ملف: math.js ===
// تصدير دوال للخارج لاستخدامها في ملفات أخرى

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;`}
            language="javascript"
          />
          <CodeBlock
            code={`// === ملف: app.js ===
// استيراد الدوال من ملف math.js

import { add, subtract, PI } from './math.js';

console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6
console.log(PI);              // 3.14159`}
            language="javascript"
          />

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>
            2. Promise بسيط
          </h3>
          <p>
            هذا مثال على إنشاء Promise واستخدامه:
          </p>
          <CodeBlock
            code={`// إنشاء Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("تم بنجاح!");  // عند النجاح
  } else {
    reject("حدث خطأ!");     // عند الفشل
  }
});

// استخدام Promise
myPromise
  .then((message) => {
    console.log(message);  // "تم بنجاح!"
  })
  .catch((error) => {
    console.log(error);    // "حدث خطأ!"
  })
  .finally(() => {
    console.log("انتهى!"); // يعمل دائماً
  });`}
            language="javascript"
          />

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>
            3. async/await البديل الأسهل
          </h3>
          <p>
            نفس المثال السابق باستخدام async/await:
          </p>
          <CodeBlock
            code={`// دالة asynchronous
async function fetchData() {
  try {
    const message = await myPromise;
    console.log(message);  // "تم بنجاح!"
  } catch (error) {
    console.log(error);    // "حدث خطأ!"
  } finally {
    console.log("انتهى!");
  }
}

fetchData();`}
            language="javascript"
          />
        </LessonSection>

        {/* ===================================================== */}
        {/* القسم 6: مثال عملي */}
        {/* ===================================================== */}
        <LessonSection title="مثال عملي">
          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>
            تطبيق عملي: جلب بيانات مستخدمين من API
          </h3>
          <p>
            لنبنى مثالاً واقعياً يجمع كل ما تعلمناه: وحدة منظمة تستخدم async/await
            و fetch API لجلب بيانات وعرضها.
          </p>
          <CodeBlock
            code={`// === ملف: api.js - وحدة التعامل مع الخادم ===

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers() {
  const response = await fetch(\`\${BASE_URL}/users\`);

  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }

  const data = await response.json();
  return data;
}

export async function getUserPosts(userId) {
  const response = await fetch(\`\${BASE_URL}/posts?userId=\${userId}\`);

  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }

  return await response.json();
}

export async function createPost(postData) {
  const response = await fetch(\`\${BASE_URL}/posts\`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }

  return await response.json();
}`}
            language="javascript"
          />
          <CodeBlock
            code={`// === ملف: app.js - البرنامج الرئيسي ===

import { getUsers, getUserPosts, createPost } from './api.js';

// === 1. جلب المستخدمين ===
async function displayUsers() {
  try {
    console.log("جاري تحميل المستخدمين...");
    const users = await getUsers();

    console.log("قائمة المستخدمين:");
    users.forEach((user) => {
      console.log(\`- \${user.name} (\${user.email})\`);
    });
  } catch (error) {
    console.error("فشل في جلب المستخدمين:", error.message);
  }
}

// === 2. جلب منشورات مستخدم معين ===
async function displayUserPosts(userId) {
  try {
    const posts = await getUserPosts(userId);
    console.log(\`عدد المنشورات: \${posts.length}\`);

    posts.slice(0, 3).forEach((post) => {
      console.log(\`  📝 \${post.title}\`);
    });
  } catch (error) {
    console.error("فشل في جلب المنشورات:", error.message);
  }
}

// === 3. إنشاء منشور جديد ===
async function addNewPost() {
  try {
    const newPost = await createPost({
      title: "منشور جديد",
      body: "هذا محتوى المنشور الجديد",
      userId: 1,
    });

    console.log("تم إنشاء المنشور:", newPost);
  } catch (error) {
    console.error("فشل في إنشاء المنشور:", error.message);
  }
}

// === تشغيل البرنامج ===
displayUsers();`}
            language="javascript"
          />

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>
            مثال متقدم: Promise.all و Promise.race
          </h3>
          <p>
            عند التعامل مع عدة عمليات غير متزامنة في نفس الوقت، يمكنك استخدام
            <code>Promise.all</code> لانتظار اكتمال جميعها، أو <code>Promise.race</code>
            لانتظار أسرع واحدة فقط:
          </p>
          <CodeBlock
            code={`// === تشغيل عدة طلبات بالتوازي ===

async function fetchAllData() {
  try {
    // Promise.all: ينتظر اكتمال كل الطلبات
    // يُسرّع الأداء لأن الطلبات تتم بالتوازي
    const [users, posts, todos] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/todos").then(r => r.json()),
    ]);

    console.log(\`المستخدمين: \${users.length}\`);
    console.log(\`المنشورات: \${posts.length}\`);
    console.log(\`المهام: \${todos.length}\`);

  } catch (error) {
    console.error("فشل جلب البيانات:", error.message);
    // إذا فشل طلب واحد فقط، يفشل كل شيء!
  }
}

// === Promise.race: أسرع طلب يفوز ===

async function fetchWithTimeout() {
  const apiCall = fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json());

  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("انتهت المهلة!")), 5000)
  );

  try {
    // whichever resolves/rejects first wins
    const data = await Promise.race([apiCall, timeout]);
    console.log("تم جلب البيانات:", data.length, "مستخدم");
  } catch (error) {
    console.error(error.message); // "انتهت المهلة!" إذا تجاوز 5 ثوانٍ
  }
}

// === Promise.allSettled: يعرف نتيجة كل طلب ===

async function fetchSafe() {
  const results = await Promise.allSettled([
    fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/INVALID").then(r => r.json()),
  ]);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(\`طلب \${index}: نجح - \${result.value.length} عنصر\`);
    } else {
      console.log(\`طلب \${index}: فشل - \${result.reason.message}\`);
    }
  });
}`}
            language="javascript"
          />

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>
            مثال عملي: تحويل JSON
          </h3>
          <CodeBlock
            code={`// === JSON: التحويل بين JSON و JavaScript ===

// JSON.stringify: تحويل كائن JavaScript إلى نص JSON
const user = {
  name: "أحمد",
  age: 25,
  skills: ["JavaScript", "React", "Node.js"],
};

const jsonString = JSON.stringify(user, null, 2);
console.log(jsonString);
// {
//   "name": "أحمد",
//   "age": 25,
//   "skills": ["JavaScript", "React", "Node.js"]
// }

// JSON.parse: تحويل نص JSON إلى كائن JavaScript
const parsed = JSON.parse(jsonString);
console.log(parsed.name);  // "أحمد"
console.log(parsed.skills); // ["JavaScript", "React", "Node.js"]

// === استخدام عملي: حفظ واسترجاع البيانات ===

// حفظ في localStorage
function saveUserData(userData) {
  const json = JSON.stringify(userData);
  localStorage.setItem("user", json);
}

// استرجاع من localStorage
function getUserData() {
  const json = localStorage.getItem("user");
  if (!json) return null;
  return JSON.parse(json);
}`}
            language="javascript"
          />
        </LessonSection>

        {/* ===================================================== */}
        {/* القسم 7: ماذا يحدث خلف الكواليس */}
        {/* ===================================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>
            1. كيف تعمل ES Modules؟
          </h3>
          <p>
            عندما تستخدم <code>import</code> و <code>export</code>، يحدث ما يلي
            خلف الكواليس:
          </p>
          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>مرحلة التحليل (Parsing):</strong> يقوم المتصفح بتحليل كل
              ملف مستورد وتحديد ما يُصدّره (exports) وما يحتاجه (imports)
            </li>
            <li>
              <strong>بناء شجرة الاعتماد (Dependency Graph):</strong> ينشئ المتصفح
              رسمة بيانية توضح كيف تتصل الوحدات ببعضها
            </li>
            <li>
              <strong>التحميل (Fetching):</strong> يحمّل المتصفح فقط الملفات
              المطلوبة من الخادم (قد يكون بعضها محملاً مسبقاً)
            </li>
            <li>
              <strong>التنفيذ (Execution):</strong> يُنفذ المتصفح الكود مرة واحدة
              فقط لكل وحدة، مهما تم استيرادها عدة مرات
            </li>
          </ol>

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>
            2. كيف تعمل Promise و async/await؟
          </h3>
          <p>
            JavaScript هو لغة <strong>مجرد خيط واحد (Single-Threaded)</strong>،
            مما يعني أنه ينفذ كوداً واحداً في كل مرة. لمعالجة العمليات البطيئة
            دون حجب الخيط الرئيسي، يستخدم ما يُسمى <strong>Event Loop</strong>:
          </p>
          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>Call Stack:</strong> المكان الذي يُ تنفيذ فيه الكود حالياً.
              عندما تصل دالة async، يتم إضافتها ثم إخراجها فوراً (لأنها لا تنتظر)
            </li>
            <li>
              <strong>Web APIs:</strong> المتصفح يوفر واجهات برمجية مثل
              <code>setTimeout</code> و <code>fetch</code> تعمل في خيط منفصل
            </li>
            <li>
              <strong>Callback Queue:</strong> عندما تكتمل عملية غير متزامنة
              (مثل استجابة fetch)، يتم وضع الدالة المرتبطة في طابور الانتظار
            </li>
            <li>
              <strong>Event Loop:</strong> يفحص باستمرار ما إذا كان Call Stack فارغاً،
              وإذا كان كذلك، يأخذ الدالة التالية من Callback Queue ويُنفذها
            </li>
          </ol>

          <CodeBlock
            code={`// ماذا يحدث خلف الكواليس مع async/await:

async function main() {
  console.log("1. بدأ");

  // await هنا لا يحجب المتصفح
  // البيانات تُجلب في الخلفية
  const data = await fetch("https://api.example.com/data");

  console.log("2. وصلت البيانات");  // هذا السطر ينتظر

  return data;
}

console.log("3. الكود يستمر");  // هذا يُنفّذ فوراً

// المخرجات بالترتيب:
// "1. بدأ"
// "3. الكود يستمر"       ← يُنفّذ فوراً لأنه async
// "2. وصلت البيانات"     ← بعد اكتمال الطلب`}
            language="javascript"
          />

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>
            3. مثال مُبسّط للـ Event Loop
          </h3>
          <CodeBlock
            code={`// Event Loop بالتفصيل:

console.log("A");                    // Call Stack → تنفيذ فوري

setTimeout(() => {
  console.log("B");                  // Web API → Callback Queue → Call Stack
}, 0);                               // حتى مع 0ms، يذهب للـ Callback Queue

Promise.resolve().then(() => {
  console.log("C");                  // Microtask Queue (أولوية أعلى)
});

console.log("D");                    // Call Stack → تنفيذ فوري

// المخرجات بالترتيب:
// A → D → C → B
// السبب: A و D متزامنان، C في Microtask (أولوية أعلى من Callback Queue),
// B في Callback Queue (ينتظر Event Loop)`}
            language="javascript"
          />
        </LessonSection>

        {/* ===================================================== */}
        {/* القسم 8: الأخطاء الشائعة */}
        {/* ===================================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 1: نسيان await قبل await في async function
              </p>
              <CodeBlock
                code={`// خطأ: نسيت await - ستحصل على Promise بدلاً من البيانات
async function getUser() {
  const response = fetch("https://api.example.com/user");
  console.log(response); // Promise {<pending>} ❌
}

// صحيح: استخدم await
async function getUser() {
  const response = await fetch("https://api.example.com/user");
  const data = await response.json();
  console.log(data);     // الكائن الفعلي ✅
}`}
                language="javascript"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 2: استخدام import في ملف عادي (بدون type="module")
              </p>
              <CodeBlock
                code={`<!-- خطأ: المتصفح لن يفهم import/export -->
<script src="app.js"></script>

<!-- صحيح: أضف type="module" -->
<script type="module" src="app.js"></script>

<!-- أو في Node.js: أضف "type": "module" في package.json -->
{/* "type": "module" */}`}
                language="html"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 3: عدم معالجة أخطاء fetch
              </p>
              <CodeBlock
                code={`// خطأ: fetch لا يُرجع خطأ عند فشل HTTP (مثل 404 أو 500)
async function getData() {
  const response = await fetch("https://api.example.com/data");
  // حتى لو كان الرد 404، لن يُرجع خطأ!
  const data = await response.json(); // قد يسبب خطأ هنا
}

// صحيح: تحقق من status دائماً
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("خطأ في جلب البيانات:", error.message);
    throw error;
  }
}`}
                language="javascript"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 4: استخدام default export بشكل خاطئ
              </p>
              <CodeBlock
                code={`// خطأ: الاسم الذي تستخدمه في import ليس هو الاسم الأصلي
// في export default، الاسم في import هو اختياري

// === ملف: utils.js ===
export default function formatDate(date) {
  return date.toLocaleDateString("ar-EG");
}

// خطأ: لا تستخدم نفس الاسم لأن export default لا يُ fix الاسم
import formatDate from './utils.js';  // هذا يعمل ✅
import myFormat from './utils.js';    // هذا يعمل أيضاً ✅

// التسمية في default export مرنة
// لكن في named export، يجب أن تتطابق الأسماء
export function formatDate(date) { ... }
import { formatDate } from './utils.js';  // صحيح ✅
import { myFormat } from './utils.js';    // خطأ ❌ - الاسم لا يتطابق`}
                language="javascript"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 5: تنفيذ متزامن بالخطأ مع await
              </p>
              <CodeBlock
                code={`// خطأ: الانتظار بشكل متسلسل بدلاً من التوازي
async function loadDashboard() {
  // كل طلب ينتظر سابقه - بطيء!
  const users = await fetch("/api/users").then(r => r.json());
  const posts = await fetch("/api/posts").then(r => r.json());
  const todos = await fetch("/api/todos").then(r => r.json());
  // مجموع الأوقات = وقت كل طلب (sequentially)
}

// صحيح: التوازي مع Promise.all
async function loadDashboard() {
  // كل الطلبات تتم في نفس الوقت - أسرع!
  const [users, posts, todos] = await Promise.all([
    fetch("/api/users").then(r => r.json()),
    fetch("/api/posts").then(r => r.json()),
    fetch("/api/todos").then(r => r.json()),
  ]);
  // مجموع الأوقات = أطول طلب فقط (parallel)
}`}
                language="javascript"
              />
            </div>
          </div>
        </LessonSection>

        {/* ===================================================== */}
        {/* القسم 9: أفضل الممارسات */}
        {/* ===================================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul className="list-disc list-inside space-y-3 my-4">
            <li>
              <strong>استخدم async/await بدلاً من .then():</strong> الكود أسهل
              في القراءة والصيانة، وأسهل في معالجة الأخطاء بـ try/catch
            </li>
            <li>
              <strong>تحقق من response.ok دائماً:</strong> fetch لا يُرجع خطأ
              عند فشل HTTP، لذا تحقق يدوياً من حالة الاستجابة
            </li>
            <li>
              <strong>استخدم Promise.all للتوازي:</strong> عند تنفيذ عدة عمليات
              مستقلة، شغّلها بالتوازي بدلاً من الانتظار بشكل متسلسل
            </li>
            <li>
              <strong>استخدم try/catch مع async/await:</strong> لالتقاط الأخطاء
              بشكل مركزي و干净
            </li>
            <li>
              <strong>قسّم الكود إلى وحدات صغيرة:</strong> كل وحدة مسؤولة عن
              شيء واحد فقط (Single Responsibility Principle)
            </li>
            <li>
              <strong>استخدم named exports أكثر من default:</strong>_named exports_
              تجعل الأسماء واضحة وتسمح بأدوات تطوير أفضل (مثل إعادة تسمية المستوردة)
            </li>
            <li>
              <strong>تجنب الأسماء المختصرة الغامضة:</strong> اكتب أسماء واضحة
              مثل <code>fetchUserData</code> بدلاً من <code>getD</code>
            </li>
            <li>
              <strong>استخدم JSON.stringify مع فاصل للعرض:</strong> عند طباعة
              بيانات JSON، استخدم الفاصل第三个 المعلمة <code>JSON.stringify(obj, null, 2)</code>
            </li>
            <li>
              <strong>لا تتجاهل الأخطاء:</strong> دائماً اكتب معالجة أخطاء
              سواء في .catch() أو try/catch
            </li>
            <li>
              <strong>استخدم dynamic import() للتحميل الكسول:</strong> يمكنك
              تحميل وحدة فقط عند الحاجة إليها باستخدام <code>import(&apos;./module.js&apos;)</code>
            </li>
          </ul>
        </LessonSection>

        {/* ===================================================== */}
        {/* القسم 10: ملخص */}
        {/* ===================================================== */}
        <LessonSection title="ملخص">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 my-4">
            <h3 className="text-green-400 font-bold text-lg mb-4">
              🎯 ما تعلمناه في هذا الدرس:
            </h3>
            <ul className="space-y-2">
              <li>
                ✅ <strong>ES Modules</strong>: نظام موحد لتنظيم الكود باستخدام export/import
              </li>
              <li>
                ✅ <strong>Named Exports</strong>: <code>export function</code> و{" "}
                <code>import {"{ name }"} from</code>
              </li>
              <li>
                ✅ <strong>Default Export</strong>: <code>export default</code> و{" "}
                <code>import Name from</code>
              </li>
              <li>
                ✅ <strong>Promises</strong>: كائن يمثل نتيجة عملية غير متزامنة
                مع <code>.then()</code> و <code>.catch()</code> و <code>.finally()</code>
              </li>
              <li>
                ✅ <strong>Promise.all</strong>: انتظار اكتمال كل الطلبات بالتوازي
              </li>
              <li>
                ✅ <strong>Promise.race</strong>: انتظار أسرع طلب فقط
              </li>
              <li>
                ✅ <strong>Promise.allSettled</strong>: معرفة نتيجة كل طلب بغض النظر عن نجاحه أو فشله
              </li>
              <li>
                ✅ <strong>async/await</strong>: صيغة مريحة للتعامل مع Promises
              </li>
              <li>
                ✅ <strong>try/catch</strong>: معالجة أخطاء في async/await
              </li>
              <li>
                ✅ <strong>fetch API</strong>: جلب البيانات من الخوادم مع GET و POST
              </li>
              <li>
                ✅ <strong>JSON</strong>: تحويل البيانات بين JavaScript و صيغة JSON
                باستخدام <code>JSON.parse()</code> و <code>JSON.stringify()</code>
              </li>
              <li>
                ✅ <strong>Event Loop</strong>: آلية عمل JavaScript غير المتزامنة
                مع Call Stack و Callback Queue و Microtask Queue
              </li>
              <li>
                ✅ <strong>Error Handling</strong>: نمط try/catch مع async/await
                و التحقق من response.ok مع fetch
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ===================================================== */}
        {/* Quiz 1: async/await vs .then() */}
        {/* ===================================================== */}
        <Quiz
          question="ما هو الفرق الرئيسي بين async/await و .then() في معالجة Promises؟"
          options={[
            "async/await أسرع من .then() في التنفيذ",
            "async/await يجعل الكود أشبه بالمتزامن وأسهل في القراءة",
            ".then() لا يمكنه معالجة الأخطاء",
            "async/await لا يحتاج إلى Promise"
          ]}
          correctAnswer={1}
          explanation="async/await هو بريدغ (Syntactic Sugar) فوق Promises يجعل الكود يبدو كأنه متزامن، مما يسهل القراءة والصيانة. لا يوجد فرق في الأداء، فقط في طريقة الكتابة. كلاهما يحتاج Promise و كلاهما يمكنه معالجة الأخطاء."
        />

        {/* ===================================================== */}
        {/* Quiz 2: fetch API */}
        {/* ===================================================== */}
        <Quiz
          question="ماذا يحدث عندما يُرجع الخادم رمز حالة HTTP مثل 404 أو 500 عند استخدام fetch()؟"
          options={[
            "يتم رمي خطأ تلقائياً يمكن التقاطه بـ try/catch",
            "يتم تمرير الكائن المُرجع إلى .catch() مباشرة",
            "يتم إرجاع null بدلاً من بيانات الاستجابة",
            "لا يحدث شيء، يتم اعتبار الطلب ناجحاً ومرجع الاستجابة بشكل طبيعي"
          ]}
          correctAnswer={3}
          explanation="fetch() لا يُرجع خطأ (reject) عند فشل HTTP مثل 404 أو 500. يتم اعتبار الطلب ناجحاً طالما تمت الاتصال بالخادم، ويتم إرجاع كائن Response مع property status. يجب التحقق يدوياً من response.ok أو response.status للتأكد من نجاح الطلب."
        />

        {/* ===================================================== */}
        {/* التحدي */}
        {/* ===================================================== */}
        <Challenge
          title="تحدي: بناء نظام جلب بيانات متكامل"
          description="أنشئ نظام وحدات يجلب بيانات من API ويعالج الأخطاء بشكل صحيح."
        >
          <p className="mb-2" style={{ color: "var(--foreground)" }}>
            المطلوب:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: "var(--foreground)" }}>
            <li>أنشئ وحدة <code>api.js</code> تحتوي دوال لجلب بيانات المستخدمين والمنشورات</li>
            <li>استخدم async/await مع try/catch لمعالجة الأخطاء</li>
            <li>تحقق من response.ok في كل طلب</li>
            <li>أنشئ دالة تستخدم Promise.all لجلب عدة مصادر بالتوازي</li>
            <li>أضف دالة <code>withTimeout</code> تستخدم Promise.race لإضافة مهلة زمنية</li>
            <li>تأكد من أن كل وحدة تُصدّر وظائفها بشكل صحيح</li>
          </ul>
        </Challenge>

        {/* ===================================================== */}
        {/* ورقة الغش */}
        {/* ===================================================== */}
        <CheatSheet title="ورقة غش: Modules و Async في JavaScript">
          <h4 className="font-bold mt-4 mb-2" style={{ color: "var(--accent)" }}>
            📦 Modules Syntax
          </h4>
          <CodeBlock
            code={`// === Named Export ===
export function add(a, b) { return a + b; }
export const PI = 3.14;
export { add, PI };

// === Default Export ===
export default function main() { ... }

// === Named Import ===
import { add, PI } from './math.js';
import { add as mathAdd } from './math.js'; // alias

// === Default Import ===
import main from './app.js';

// === Import All ===
import * as math from './math.js';
math.add(1, 2);

// === Dynamic Import (Lazy Loading) ===
const module = await import('./heavy-module.js');
module.default();`}
            language="javascript"
          />

          <h4 className="font-bold mt-6 mb-2" style={{ color: "var(--accent)" }}>
            🔄 Promises Methods
          </h4>
          <CodeBlock
            code={`// === إنشاء Promise ===
const p = new Promise((resolve, reject) => {
  resolve(value);   // نجاح
  reject(error);    // فشل
});

// === Promise chaining ===
p.then(result => { ... })
 .catch(error => { ... })
 .finally(() => { ... });  // يعمل دائماً

// === Promise.all: كلها تنجح ===
const [a, b] = await Promise.all([p1, p2]);

// === Promise.race: أسرع تنتهي ===
const fastest = await Promise.race([p1, p2]);

// === Promise.allSettled: نتيجة كل واحدة ===
const results = await Promise.allSettled([p1, p2]);
// results[0] = { status: "fulfilled", value: ... }
// results[1] = { status: "rejected", reason: ... }`}
            language="javascript"
          />

          <h4 className="font-bold mt-6 mb-2" style={{ color: "var(--accent)" }}>
            ⚡ async/await Patterns
          </h4>
          <CodeBlock
            code={`// === الأساسي ===
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("انتهى");
  }
}

// === التوازي مع Promise.all ===
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts(),
]);

// === التسلسل ===
const users = await fetchUsers();
const posts = await fetchUserPosts(users[0].id);

// === الحلقة المتكررة مع async ===
const results = await Promise.all(
  ids.map(id => fetchItem(id))
);`}
            language="javascript"
          />

          <h4 className="font-bold mt-6 mb-2" style={{ color: "var(--accent)" }}>
            🌐 fetch API Quick Reference
          </h4>
          <CodeBlock
            code={`// === GET Request ===
const res = await fetch("https://api.example.com/data");
const data = await res.json();

// === POST Request ===
const res = await fetch("https://api.example.com/data", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "أحمد", age: 25 }),
});
const result = await res.json();

// === التحقق من الاستجابة ===
if (!res.ok) {
  throw new Error(\`HTTP \${res.status}\`);
}

// === JSON Methods ===
JSON.stringify(obj);           // obj → string
JSON.stringify(obj, null, 2);  // obj → string مُنسّق
JSON.parse('{"key":"value"}'); // string → obj`}
            language="javascript"
          />
        </CheatSheet>

        {/* ===================================================== */}
        {/* التنقل */}
        {/* ===================================================== */}
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
