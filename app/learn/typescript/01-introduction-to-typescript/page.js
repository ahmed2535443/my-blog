"use client"

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function IntroductionToTypeScript() {
  const lesson = getLessonBySlug("typescript", "01-introduction-to-typescript");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <LessonSection title="ما هو TypeScript؟">
          <p>
            <strong>TypeScript</strong> هي لغة برمجة مبنية فوق JavaScript، طورتها شركة <strong>Microsoft</strong> عام 2012.
            هي ببساطة <strong>JavaScript + نظام أنواع (Type System)</strong>.
          </p>

          <p>
            تخيّل أنك تبني منزلاً. JavaScript هي الخشب والطوب - كل شيء مادي. لكن <strong>TypeScript هو المخطط الهندسي</strong> -
            قبل أن تضع أي لبنة، يخبرك المخطط أين تضعها بالضبط، ويمنعك من تركيب النوافذ في السقف!
          </p>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه بسيط:
            </p>
            <p>
              JavaScript مثل سيارة بدون لوحة قيادة - تشتغل لكنك لا تعرف سرعتك ولا كمية البنزين.
              TypeScript يضيف لوحة القيادة! يخبرك أين المشكلة <strong>قبل</strong> أن تتعطل.
            </p>
          </div>

          <p>
            الأهم: TypeScript لا يُشغَّل مباشرة في المتصفح أو Node.js. بل يُترجم (Compile) إلى JavaScript عادي عبر
            <strong>tsc (TypeScript Compiler)</strong>. الكود النهائي هو <strong>JavaScript نقي</strong> - لا قيود في التنفيذ!
          </p>
        </LessonSection>

        <LessonSection title="المشكلة التي يحلها TypeScript">
          <p>JavaScript لغة <strong>ديناميكية (Dynamic)</strong> - هذا يعني أن المتغير يمكن أن يغير نوعه في أي وقت. هذا يجعلها مرنة لكنها تؤدي لأخطاء صامتة (Silent Bugs).</p>

          <h3 style={{ color: "var(--primary)", marginTop: "1rem" }}>المشكلة في JavaScript العادي:</h3>
          <CodeBlock
            language="javascript"
            code={`// === مشاكل JavaScript الصامتة ===

function calculatePrice(product, quantity) {
  return product.price * quantity;
}

// ✅ الاستخدام الصحيح:
calculatePrice({ price: 100 }, 3);  // 300

// ❌ المشكلة: JavaScript لن يشتكي!
calculatePrice("موز", "أحمر");       // NaN - بدون تحذير!
calculatePrice(null, undefined);     // NaN - بدون تحذير!

// === مشكلة أكبر: الوصول لخصائص غير موجودة ===
const user = { name: "أحمد" };
console.log(user.email.toUpperCase());
// ❌ TypeError: Cannot read properties of undefined
// هذا الخطأ يظهر فقط في تشغيل التطبيق - بعد أن يصل المستخدم له`}
          />

          <p>نفس الكود <strong>مع TypeScript</strong>:</p>
          <CodeBlock
            language="typescript"
            code={`// === TypeScript يمنع الأخطاء قبل التشغيل ===

function calculatePrice(product: { price: number }, quantity: number): number {
  return product.price * quantity;
}

// ✅ صحيح:
calculatePrice({ price: 100 }, 3);  // 300

// ❌ خطأ في وقت الترجمة - لن يصل للمستخدم:
calculatePrice("موز", "أحمر");  // ❌ Argument of type 'string' is not assignable
calculatePrice(null, undefined); // ❌ Argument of type 'null' is not assignable`}
          />
        </LessonSection>

        <LessonSection title="كيف يعمل TypeScript؟">
          <p>سير عمل TypeScript بسيط:</p>

          <div className="p-5 rounded-xl my-4 border" style={{ background: "rgba(49, 120, 198, 0.08)", borderColor: "#3178c6" }}>
            <p className="font-bold text-lg mb-3" style={{ color: "#3178c6" }}>سلسلة تحويل TypeScript → JavaScript</p>
            <div className="flex flex-col space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">1</span>
                <span>أنت تكتب كود بـ <strong>.ts</strong> (TypeScript) مع أنواع ومميزات إضافية</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">2</span>
                <span>مترجم TypeScript (<code>tsc</code>) يحلل الكود ويتحقق من الأنواع</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">3</span>
                <span>إذا وجد أخطاء، يخبرك بها <strong>قبل</strong> أن ينتج الـ JavaScript</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">4</span>
                <span>بعد التصحيح، ينتج <code>tsc</code> ملف <strong>.js</strong> نظيف بدون أنواع!</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">5</span>
                <span>المتصفح أو Node.js يشغّل الـ JavaScript الناتج بشكل طبيعي</span>
              </div>
            </div>
          </div>

          <CodeBlock
            language="bash"
            code={`# الخطوة 1: تثبيت TypeScript
npm install -g typescript

# الخطوة 2: إنشاء ملف TypeScript
touch hello.ts

# الخطوة 3: ترجمة TypeScript إلى JavaScript
tsc hello.ts

# النتيجة: ينتج ملف hello.js!`}
          />

          <p>ملف <code>tsconfig.json</code> هو ملف الإعدادات (Configuration File) الذي يتحكم في سلوك المترجم:</p>

          <CodeBlock
            language="json"
            code={`{
  "compilerOptions": {
    "target": "ES2022",         // إصدار JavaScript الهدف
    "module": "ESNext",         // نظام الـ Modules
    "strict": true,             // وضع التحقق الصارم
    "outDir": "./dist",         // مجلد الإخراج
    "rootDir": "./src",         // مجلد المصدر
    "esModuleInterop": true,    // توافقية ES Modules
    "skipLibCheck": true        // تخطي فحص المكتبات
  },
  "include": ["src/**/*.ts"],   // الملفات المشمولة
  "exclude": ["node_modules"]   // الملفات المستثناة
}`}
          />
        </LessonSection>

        <LessonSection title="فوائد TypeScript">
          <div className="space-y-4">
            <div className="p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <p className="font-bold mb-1" style={{ color: "var(--secondary)" }}>✅ اكتشاف الأخطاء مبكراً</p>
              <p>الأخطاء تكتشف في وقت الترجمة (Compile Time) بدلاً من وقت التشغيل (Runtime) - أي قبل أن يراها المستخدم.</p>
            </div>
            <div className="p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <p className="font-bold mb-1" style={{ color: "var(--secondary)" }}>✅ توثيق ذاتي (Self-documenting)</p>
              <p>الأنواع نفسها توثّق الكود. <code>function greet(name: string): string</code> يخبرك بالضبط ماذا يدخل وماذا يخرج.</p>
            </div>
            <div className="p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <p className="font-bold mb-1" style={{ color: "var(--secondary)" }}>✅ IntelliSense أفضل</p>
              <p>VS Code وغيره من المحررات يفهم TypeScript ويعطيك اقتراحات دقيقة أثناء الكتابة.</p>
            </div>
            <div className="p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <p className="font-bold mb-1" style={{ color: "var(--secondary)" }}>✅ إعادة هيكلة آمنة (Refactoring)</p>
              <p>تغيير اسم متغير أو إعادة هيكلة دالة - TypeScript يضمن أن كل شيء متصل بشكل صحيح.</p>
            </div>
            <div className="p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <p className="font-bold mb-1" style={{ color: "var(--secondary)" }}>✅ تبني تدريجي (Gradual Adoption)</p>
              <p>يمكنك تحويل ملف .js إلى .ts تدريجياً. TypeScript يفهم JavaScript العادي أيضاً!</p>
            </div>
          </div>
        </LessonSection>

        <LessonSection title="الأخطاء الشائعة للمبتدئين في TypeScript">
          <ul>
            <li><strong>❌ تجاهل الأنواع واستخدام any بكثرة:</strong> <code>any</code> يلغي فائدة TypeScript بالكامل. استخدمه فقط كحل مؤقت.</li>
            <li><strong>❌ عدم فهم الفرق بين type و interface:</strong> كليهما متشابهان لكن لكل منهما حالات استخدامه. سنفصل ذلك لاحقاً.</li>
            <li><strong>❌ الخلط بين compile time و runtime:</strong> الأنواع موجودة فقط وقت الترجمة - لا تصل لـ JavaScript النهائي.</li>
            <li><strong>❌ تجاهل tsconfig.json:</strong> tsconfig.json ضروري لإعدادات صارمة تمنع أخطاء شائعة.</li>
            <li><strong>❌ إضافة أنواع معقدة جداً بدون داعي:</strong> لا تجعل الأنواع أكثر تعقيداً من اللازم - التوازن مهم.</li>
          </ul>
        </LessonSection>

        <LessonSection title="أفضل الممارسات">
          <ul>
            <li><strong>✅ استخدم strict: true في tsconfig.json:</strong> هذا يفعل كل خيارات التحقق الصارم ويمنع أخطاء JavaScript الشائعة.</li>
            <li><strong>✅ جنّب any قدر الإمكان:</strong> استخدم unknown بدلاً منه إذا كنت لا تعرف النوع مسبقاً.</li>
            <li><strong>✅ اكتب الأنواع للدوال أولاً:</strong> type parameters أولاً ثم الراجع (Return Type).</li>
            <li><strong>✅ استخدم Type Inference:</strong> لا تحتاج دائماً لكتابة النوع - TypeScript يستنتجه.</li>
            <li><strong>✅ أضف TypeScript للمشاريع القديمة تدريجياً:</strong> ابدأ بملف ثم وسّع.</li>
          </ul>
        </LessonSection>

        <LessonSection title="ملخص الدرس">
          <div className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>TypeScript</strong> هو JavaScript + نظام أنواع - يمنع الأخطاء قبل التشغيل.</li>
              <li>طورته <strong>Microsoft</strong> عام 2012 وهو مفتوح المصدر.</li>
              <li>يترجم (Compile) إلى JavaScript عبر <code>tsc</code> - المتصفح يشغّل JS العادي.</li>
              <li>فوائده: اكتشاف أخطاء مبكراً، توثيق ذاتي، IntelliSense أفضل، Refactoring آمن.</li>
              <li>ملف <code>tsconfig.json</code> يتحكم في إعدادات المترجم.</li>
              <li>يمكن تبنيه تدريجياً - .js إلى .ts خطوة بخطوة.</li>
              <li><strong>أهم قاعدة:</strong> الأنواع موجودة فقط وقت الترجمة - لا توجد في JavaScript النهائي!</li>
            </ul>
          </div>
        </LessonSection>

        <Quiz
          question="ما هو الفرق الرئيسي بين JavaScript و TypeScript؟"
          options={[
            "TypeScript أسرع في التنفيذ من JavaScript",
            "TypeScript هي نفس JavaScript لكن مع نظام أنواع يُضاف ويكشف الأخطاء وقت الترجمة",
            "JavaScript و TypeScript لا يمكن استخدامهما معاً",
            "TypeScript يعمل فقط مع React"
          ]}
          correctAnswer={1}
          explanation="TypeScript يبني فوق JavaScript بإضافة نظام أنواع (Type System). الكود يُترجم إلى JavaScript العادي قبل التشغيل. كل كود JavaScript صحيح هو كود TypeScript صحيح."
        />

        <Quiz
          question="ماذا يعني أن TypeScript 'يُترجم' (Compile)؟"
          options={[
            "TypeScript يُشغَّل مباشرة في المتصفح",
            "مترجم TypeScript (tsc) يحوّل كود .ts إلى كود .js يمكن تشغيله في المتصفح",
            "تحتاج لبرنامج خاص لتشغيل TypeScript",
            "TypeScript لا يحتاج للترجمة"
          ]}
          correctAnswer={1}
          explanation="tsc يقرأ كود TypeScript، ويتحقق من الأنواع، ويُنتج كود JavaScript نظيف بدون أنواع، يمكن تشغيله في أي بيئة JavaScript."
        />

        <Challenge
          title="تحدي: أول خطوة مع TypeScript"
          description={
            <p>
              اكتب دالة TypeScript بسيطة:
              <br />
              1. أنشئ دالة <code>greet</code> تستقبل <code>name: string</code> و <code>age: number</code>
              <br />
              2. الدالة ترجع نصاً مثل <code>{`"مرحباً {name}، عمرك {age} سنة"`}</code>
              <br />
              3. أضف نوع الراجع (Return Type)
              <br />
              4. جرّب تمرير أنواع خاطئة وشاهد أخطاء TypeScript
            </p>
          }
        >
          <CodeBlock
            language="typescript"
            code={`function greet(name: string, age: number): string {
  return \`مرحباً \${name}، عمرك \${age} سنة\`;
}

// ✅ استخدام صحيح:
console.log(greet("أحمد", 25));
// "مرحباً أحمد، عمرك 25 سنة"

// ❌ أخطاء نوعية:
// greet(123, "أحمد");  // ❌ name يجب أن يكون string
// greet("أحمد", "25"); // ❌ age يجب أن يكون number
// greet("أحمد");       // ❌ missing parameter age`}
          />
        </Challenge>

        <CheatSheet title="ملخص TypeScript - الدرس الأول">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>مفاهيم أساسية:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(49, 120, 198, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#3178c6" }}>Type System</p>
                  <p>نظام أنواع يضيف معلومات نوعية لل code قبل الترجمة</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(49, 120, 198, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#3178c6" }}>tsc (Compiler)</p>
                  <p>يترجم .ts إلى .js ويتحقق من الأنواع</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(49, 120, 198, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#3178c6" }}>Gradual Adoption</p>
                  <p>يمكن تحويل JavaScript إلى TypeScript تدريجياً</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>أوامر أساسية:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(49, 120, 198, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#3178c6" }}>npm install -g typescript</p>
                  <p>تثبيت TypeScript عالمياً</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(49, 120, 198, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#3178c6" }}>tsc --init</p>
                  <p>إنشاء ملف tsconfig.json</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(49, 120, 198, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "#3178c6" }}>tsc file.ts</p>
                  <p>ترجمة ملف TypeScript</p>
                </div>
              </div>
            </div>
          </div>
        </CheatSheet>

      </div>
      <LessonNavigation
        prevLesson={lesson.prevLesson}
        prevStage={lesson.prevLessonStage}
        nextLesson={lesson.nextLesson}
        nextStage={lesson.nextLessonStage}
      />
    </div>
  );
}