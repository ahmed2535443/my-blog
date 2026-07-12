import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ModernAnimations() {
  const lesson = getLessonBySlug("css", "07-modern-animations");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      {/* ==================== Section 1: ما هو ==================== */}
      <LessonSection id="what-is" title="ما هو">
        <p className="text-lg leading-relaxed mb-4">
          الحركات والتحولات الحديثة (Modern Animations) هي مجموعة من ميزات CSS
          التي تتيح لك إنشاء تحريكات تفاعلية وسلسة دون الاعتماد بشكل كامل على
          JavaScript. تتضمن هذه الميزات{" "}
          <strong>Transitions</strong> و{" "}
          <strong>Animations</strong> و{" "}
          <strong>Scroll-driven Animations</strong> و{" "}
          <strong>@starting-style</strong>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          ببساطة، هذه الأدوات تسمح لك بالتحكم في كيفية انتقال العناصر من
          حالة إلى أخرى - سواء كان ذلك عند تغيير لون الزر عند مرور الماوس، أو
          إنشاء تأثير دوران مستمر، أو حتى ربط الحركة بموضع التمرير في الصفحة.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
          <p className="text-sm">
            <strong>ملاحظة:</strong> CSS Animations و Transitions
            كلاهما يُنتجان نفس النتيجة البصرية (حركة سلسة)، لكنهما يختلفان في
            الطريقة والاستخدام. الفرق الأساسي هو أن Transitions تتحرك بين
            حالتين فقط، بينما Animations يمكن أن تمر بعدة مراحل (keyframes).
          </p>
        </div>
      </LessonSection>

      {/* ==================== Section 2: لماذا نستخدمه ==================== */}
      <LessonSection id="why-use" title="لماذا نستخدمه">
        <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed mb-4">
          <li>
            <strong>تحسين تجربة المستخدم:</strong> الحركات السلسة تجعل
            الواجهة أكثر تفاعلية واحترافية
          </li>
          <li>
            <strong>توجيه انتباه المستخدم:</strong> يمكنك استخدام الحركة
            لجذب الانتباه إلى عناصر مهمة مثل الأزرار أو التنبيهات
          </li>
          <li>
            <strong>تقليل الاعتماد على JavaScript:</strong> كثير من
            التأثيرات البصرية يمكن تحقيقها بالكامل باستخدام CSS فقط، مما يُحسّن
            الأداء
          </li>
          <li>
            <strong>تحسين الأداء:</strong> الحركات في CSS تُعالج من قبل
            GPU في كثير من الحالات، مما يجعلها أسرع من الحلول البرمجية
          </li>
          <li>
            <strong>التوافق مع التمرير:</strong> ميزات Scroll-driven
            Animations الجديدة تسمح بإنشاء تأثيرات بصرية مربطة بموضع التمرير
            دون أي JavaScript
          </li>
          <li>
            <strong>تحسين إمكانية الوصول:</strong> مع{" "}
            <code>prefers-reduced-motion</code> يمكنك احترام تفضيلات المستخدمين
            ذوي الاحتياجات الخاصة
          </li>
        </ul>
      </LessonSection>

      {/* ==================== Section 3: المشكلة التي يحلها ==================== */}
      <LessonSection id="problem-solved" title="المشكلة التي يحلها">
        <p className="text-lg leading-relaxed mb-4">
          بدون الحركات والتحولات، التغييرات في الواجهة تحدث بشكل مفاجئ
          وناعم. هذا يجعل التفاعل يبدو جامداً وغير طبيعي.
        </p>
        <h3 className="text-xl font-semibold mb-3">قبل استخدام الحركات:</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            تغيير لون الزر يحدث في لحظة واحدة دون انتقال سلس
          </li>
          <li>
            إظهار وإخفاء العناصر يبدو مفاجئاً وغير مريح للعين
          </li>
          <li>
            لا توجد طريقة لجذب انتباه المستخدم إلى محتوى جديد
          </li>
          <li>
            عرض محتوى الصفحة يبدو ثابتاً بدون أي حياة أو حركة
          </li>
        </ul>
        <h3 className="text-xl font-semibold mb-3">بعد استخدام الحركات:</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            الانتقال بين الحالات يكون سلساً وطبيعياً
          </li>
          <li>
            يمكن إنشاء تأثيرات تفاعلية معقدة باستخدام CSS فقط
          </li>
          <li>
            يمكن ربط الحركة بموضع التمرير لتحسين تجربة التصفح
          </li>
          <li>
            يمكن احترام تفضيلات المستخدمين لReduce Motion
          </li>
        </ul>
      </LessonSection>

      {/* ==================== Section 4: شرح بسيط ==================== */}
      <LessonSection id="simple-explanation" title="شرح بسيط">
        <h3 className="text-xl font-semibold mb-3">
          Transitions (التحولات)
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          التحول (Transition) يسمح للعنصر بالتحرك بسلاسة من حالة CSS واحدة
          إلى أخرى. مثلاً: عندما يمر الماوس فوق الزر، يتغير لونه بشكل تدريجي
          بدلاً من التغير المفاجئ.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          كل تحول يحتاج أربعة خصائص أساسية:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <code>transition-property</code>: الخاصية CSS التي تريد
            تحريكها
          </li>
          <li>
            <code>transition-duration</code>: مدة الحركة بالثواني أو
           Milis
          </li>
          <li>
            <code>transition-timing-function</code>: نوع التسارع والتباطؤ
          </li>
          <li>
            <code>transition-delay</code>: التأخير قبل بدء الحركة
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 mt-6">
          Animations (التحريكات)
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          التحريك (Animation) أكثر مرونة من التحول. يمكنك تعريف عدة مراحل
          (Keyframes) ويتم التحرك تلقائياً بينها. يمكن أن تكرر الحركة عدة مرات
          أو تستمر إلى الأبد.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">
          Scroll-driven Animations (حركات مربطة بالتمرير)
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          ميزة جديدة تسمح بربط الحركة بموضع التمرير في الصفحة أو حاوية معينة.
          بدلاً من استخدام JavaScript لحساب موضع التمرير، يمكنك استخدام{" "}
          <code>animation-timeline</code> مع قيم{" "}
          <code>scroll()</code> أو <code>view()</code>.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">
          @starting-style (نمط البداية)
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          هذه القاعدة تحدد الأنماط الأولية للعنصر عند إدخاله لأول مرة في
          الصفحة. مفيدة جداً لإنشاء تأثيرات إدخال سلسة بدون ومضة محتوى غير
          مُنسّق.
        </p>
      </LessonSection>

      {/* ==================== Section 5: مثال بسيط ==================== */}
      <LessonSection id="simple-example" title="مثال بسيط">
        <h3 className="text-xl font-semibold mb-3">
          مثال على Transition بسيطة
        </h3>
        <CodeBlock language="css" code={`.button {
  background-color: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  transition-property: background-color, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.button:hover {
  background-color: #1d4ed8;
  transform: scale(1.05);
}`} />

        <h3 className="text-xl font-semibold mb-3 mt-6">
          مثال باستخدام Transition Shorthand
        </h3>
        <CodeBlock language="css" code={`.button {
  background-color: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  /* shorthand: property duration timing-function delay */
  transition: background-color 0.3s ease-in-out 0s,
              transform 0.2s ease-out 0.1s;
}

.button:hover {
  background-color: #1d4ed8;
  transform: scale(1.05);
}`} />

        <h3 className="text-xl font-semibold mb-3 mt-6">
          مثال على Animation باستخدام Keyframes
        </h3>
        <CodeBlock language="css" code={`@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.pulse-button {
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}`} />

        <h3 className="text-xl font-semibold mb-3 mt-6">
          مثال باستخدام Animation Shorthand
        </h3>
        <CodeBlock language="css" code={`.pulse-button {
  /* shorthand: name duration timing-function iteration-count direction fill-mode delay */
  animation: pulse 2s ease-in-out infinite normal forwards 0s;
}`} />
      </LessonSection>

      {/* ==================== Section 6: مثال عملي ==================== */}
      <LessonSection id="practical-example" title="مثال عملي">
        <h3 className="text-xl font-semibold mb-3">
          1. Loading Spinner (مؤشر تحميل دوران)
        </h3>
        <CodeBlock language="css" code={`@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}`} />

        <h3 className="text-xl font-semibold mb-3 mt-6">
          2. Scroll Reveal - ظهور العناصر عند التمرير
        </h3>
        <CodeBlock language="css" code={`.reveal-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideUp linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`} />

        <h3 className="text-xl font-semibold mb-3 mt-6">
          3. Progress Bar - شريط تقدم مربوط بالتمرير
        </h3>
        <CodeBlock language="css" code={`.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  width: 100%;
  transform-origin: left;
  transform: scaleX(0);
  animation: growProgress linear both;
  animation-timeline: scroll(root);
}

@keyframes growProgress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}`} />

        <h3 className="text-xl font-semibold mb-3 mt-6">
          4. Hover Effects with Transform
        </h3>
        <CodeBlock language="css" code={`.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}

.card:hover {
  transform: translateY(-8px) rotate(1deg);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}`} />

        <h3 className="text-xl font-semibold mb-3 mt-6">
          5. @starting-style للإدخال السلس
        </h3>
        <CodeBlock language="css" code={`.dialog {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* الأنماط عند إدخال العنصر لأول مرة */
@starting-style {
  .dialog {
    opacity: 0;
    transform: scale(0.95);
  }
}

/* عند إخفاء العنصر */
.dialog.hidden {
  opacity: 0;
  transform: scale(0.95);
}`} />

        <h3 className="text-xl font-semibold mb-3 mt-6">
          6. احترام تفضيلات المستخدم - prefers-reduced-motion
        </h3>
        <CodeBlock language="css" code={`.animated-element {
  animation: float 3s ease-in-out infinite;
}

/* تعطيل الحركات إذا كان المستخدم يفضل تقليل الحركة */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
  }

  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}`} />
      </LessonSection>

      {/* ==================== Section 7: ماذا يحدث خلف الكواليس ==================== */}
      <LessonSection id="behind-the-scenes" title="ماذا يحدث خلف الكواليس">
        <h3 className="text-xl font-semibold mb-3">
          كيف تعمل Transitions؟
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          عندما تتغير الخاصية CSS على عنصر له transition، يقوم المتصفح
          بالآتي:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>
            يكشف التغيير في الخاصية (مثلاً عند تمرير الماوس فوق الزر)
          </li>
          <li>
            يحسب القيمة الأولية والقيمة النهائية للخاصية
          </li>
          <li>
            يستخدم Timing Function لحساب القيمة في كل إطار (frame) أثناء
            المدة المحددة
          </li>
          <li>
            يطبق القيمة المحسوبة على العنصر في كل إطار
          </li>
          <li>
            يصل إلى القيمة النهائية عند انتهاء المدة
          </li>
        </ol>

        <h3 className="text-xl font-semibold mb-3 mt-6">
          كيف تعمل Animations؟
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          التحريك يعمل بشكل مشابه لكن مع تعقيد إضافي:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>
            يقرأ جميع مراحل Keyframes المعرفة
          </li>
          <li>
            يحسب الوقت الحالي بالنسبة للمدة الإجمالية
          </li>
          <li>
            يحدد بين أي مرحلتين نحن موجودين حالياً
          </li>
          <li>
            يستخدم Timing Function للحساب الدقيق للقيمة الحالية
          </li>
          <li>
            يطبق القيمة ويكرر العملية بناءً على عدد التكرارات
          </li>
        </ol>

        <h3 className="text-xl font-semibold mb-3 mt-6">
          Scroll-driven Animations خلف الكواليس
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          عندما تستخدم <code>animation-timeline: scroll()</code>، يقوم
          المتصفح بربط تقدم الحركة بموضع التمرير بدلاً من الوقت.这意味着:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            عند التمرير 0% من المساحة، تكون الحركة عند 0%
          </li>
          <li>
            عند التمرير 50%، تكون الحركة عند 50%
          </li>
          <li>
            عند التمرير 100%، تكتمل الحركة
          </li>
          <li>
            لا حاجة لأي حسابات JavaScript
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 mt-6">
          will-change والأداء
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          خاصية <code>will-change</code> تخبر المتصفح مسبقاً بأن الخاصية
          ستتغير في المستقبل. هذا يسمح للمتصفح بالتحضير المسبق وتفعيل
          التحسينات مثل GPU Acceleration.
        </p>
        <CodeBlock language="css" code={`.will-animate {
  will-change: transform, opacity;
  /* يخبر المتصفح بأن transform و opacity سيتغيران */
}

/* تحذير: لا تستخدم will-change على كل شيء! */
/* استخدمه فقط على العناصر التي تتحرك فعلاً */`} />
      </LessonSection>

      {/* ==================== Section 8: الأخطاء الشائعة ==================== */}
      <LessonSection id="common-mistakes" title="الأخطاء الشائعة">
        <div className="space-y-6">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
              خطأ 1: استخدام transition على خصائص لا تتحول بشكل سلس
            </h4>
            <p className="mb-2">
              بعض الخصائص مثل <code>display</code> و{" "}
              <code>font-family</code> لا يمكن تحويلها بسلاسة.
            </p>
            <CodeBlock language="css" code={`/* خطأ - display لا يتحول بسلاسة */
.box {
  transition: display 0.3s ease;
}

/* صحيح - استخدم opacity و visibility */
.box {
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.box.hidden {
  opacity: 0;
  visibility: hidden;
}`} />
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
              خطأ 2: نسيان تحديد property في Transition
            </h4>
            <p className="mb-2">
              إذا لم تحدد <code>transition-property</code>، سيتحول{" "}
              <strong>جميع</strong> الخصائص القابلة للتحويل.
            </p>
            <CodeBlock language="css" code={`/* قد يبدو مفاجئاً - جميع الخصائص تتحرك */
.button {
  transition: 0.3s ease;
}

/* أفضل - حدد الخصائص المطلوبة فقط */
.button {
  transition: background-color 0.3s ease,
              transform 0.2s ease;
}`} />
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
              خطأ 3: إنشاء حركات طويلة تسبب إزعاجاً
            </h4>
            <p className="mb-2">
              الحركات الطويلة (أكثر من ثانية واحدة) يمكن أن تكون مُتعبة
              للمستخدم.
            </p>
            <CodeBlock language="css" code={`/* سيء - حركة بطيئة جداً */
.button {
  transition: all 2s ease-in-out;
}

/* جيد - حركة سريعة ومريحة */
.button {
  transition: background-color 0.2s ease-out;
}`} />
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
              خطأ 4: استخدام will-change بشكل مفرط
            </h4>
            <p className="mb-2">
              استخدام <code>will-change</code> على كل عنصر يُضعف الأداء
              بدل تحسينه.
            </p>
            <CodeBlock language="css" code={`/* سيء - لا تفعل هذا! */
* {
  will-change: all;
}

/* جيد - استخدمه فقط عند الحاجة */
.card:hover {
  will-change: transform;
}`} />
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
              خطأ 5: عدم مراعاة prefers-reduced-motion
            </h4>
            <p className="mb-2">
              تجاهل هذا الاستعلام يحرج المستخدمين الذين يعانون من الحساسية
              للحركة أو الاضطرابات vestibular.
            </p>
            <CodeBlock language="css" code={`/* تجاهل خطير لـ prefers-reduced-motion */
/* لا تفعل هذا أبداً! */

/* صحيح - دائماً احترم تفضيلات المستخدم */
@media (prefers-reduced-motion: reduce) {
  .animated {
    animation: none;
    transition: none;
  }
}`} />
          </div>
        </div>
      </LessonSection>

      {/* ==================== Section 9: أفضل الممارسات ==================== */}
      <LessonSection id="best-practices" title="أفضل الممارسات">
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
              1. استخدم الحركات بغرض واضح
            </h4>
            <p>
              كل حركة يجب أن يكون لها سبب - إما لتوجيه انتباه المستخدم، أو
              تحسين الفهم، أو إعطاء تغذية راجعة. تجنب الحركات الزائفة.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
              2. ابقَ الحركات سريعة ومريحة
            </h4>
            <p>
              المدة المثالية للحركات هي بين 150ms و 500ms. الحركات الأبطأ من
              ثانية واحدة تبدو بطيئة، والأسرع من 100ms لا يلاحظها الإنسان.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
              3. حدد الخصائص في transition-property
            </h4>
            <p>
              لا تستخدم <code>transition: all</code> لأنها قد تسبب حركات
              غير مرغوب她在. حدد فقط الخصائص التي تريد تحريكها.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
              4. استخدم Timing Functions المناسبة
            </h4>
            <p>
              <code>ease-out</code> للعناصر التي تظهر،{" "}
              <code>ease-in</code> للعناصر التي تختفي،{" "}
              <code>ease-in-out</code> للحركات المتوازنة.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
              5. احترم prefers-reduced-motion دائماً
            </h4>
            <p>
              هذا ليس اختيارياً. بعض المستخدمين يعانون من حساسية للحركة.
              قدم بديلاً يحتفظ بالوظيفة بدون الحركة.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
              6. استخدم transform و opacity للحركات
            </h4>
            <p>
              هذه الخصائص تُعالج بواسطة GPU مباشرة مما يعطيك أداء أفضل.
              تجنب تحريك <code>top</code>، <code>left</code>،{" "}
              <code>width</code>، و <code>height</code>.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
              7. اختبر الحركات على أجهزة مختلفة
            </h4>
            <p>
              الأداء يختلف بين الأجهزة. اختبر على هاتف محمول وكمبيوتر
              مكتبي للتأكد من أن الحركات سلسة في كل مكان.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
              8. استخدم @starting-style لإدخال العناصر
            </h4>
            <p>
              هذه القاعدة الجديدة توفر طريقة نظيفة لإنشاء تأثيرات إدخال بدون
              ومضة المحتوى غير المُنسّق.
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ==================== Section 10: ملخص ==================== */}
      <LessonSection id="summary" title="ملخص">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <ul className="space-y-3 text-lg">
            <li>
              <strong>Transitions:</strong> تتحرك بين حالتين CSS، مناسبة
              للتفاعلات البسيطة مثل Hover
            </li>
            <li>
              <strong>Animations:</strong> تستخدم Keyframes للتحرك عبر
              عدة مراحل، مناسبة للحركات المعقدة والتكرارية
            </li>
            <li>
              <strong>Timing Functions:</strong> تتحكم في التسارع
              والتباطؤ: ease, linear, ease-in, ease-out, ease-in-out,
              cubic-bezier()
            </li>
            <li>
              <strong>Scroll-driven Animations:</strong> تربط الحركة
              بموضع التمرير باستخدام animation-timeline: scroll() أو
              view()
            </li>
            <li>
              <strong>@starting-style:</strong> تحدد الأنماط الأولية
              للعناصر المُدخلة لتفعيل تأثيرات إدخال سلسة
            </li>
            <li>
              <strong>prefers-reduced-motion:</strong> استعلام وسائط
              يحترم تفضيلات المستخدم لتقليل الحركة
            </li>
            <li>
              <strong>will-change:</strong> تلميح أداء يخبر المتصفح
              بالتحضير للتحرك
            </li>
            <li>
              <strong>Transform:</strong> تحركات translate و rotate
              و scale بدون تأثير على التخطيط
            </li>
            <li>
              <strong>الأداء:</strong> استخدم transform و opacity
              بدلاً من top و left و width
            </li>
          </ul>
        </div>
      </LessonSection>

      {/* ==================== Quiz Section ==================== */}
      <Quiz
        question="ما هو الفرق الأساسي بين Transition و Animation في CSS؟"
        options={[
          "Transition أسرع من Animation",
          "Transition تتحرك بين حالتين فقط، بينما Animation يمكنها تمر بعدة مراحل (keyframes)",
          "Animation لا تحتاج لـ keyframes",
          "Transition تعمل فقط مع Hover"
        ]}
        correctAnswer={1}
        explanation="Transition تتحرك من حالة CSS واحدة إلى حالة أخرى (مثلاً عند Hover)، بينما Animation يمكنها تمر بعدة مراحل معرفة باستخدام @keyframes ويمكنها التكرار التلقائي."
      />
      <Quiz
        question="لماذا يجب استخدام prefers-reduced-motion في مواقع الويب؟"
        options={[
          "لتحسين أداء الموقع",
          "لجعل الموقع يعمل على المتصفحات القديمة",
          "لاحترام تفضيلات المستخدمين الذين يعانون من حساسية للحركة أو اضطرابات vestibular",
          "لإضافة حركات إضافية"
        ]}
        correctAnswer={2}
        explanation="prefers-reduced-motion استعلام وسائط يكشف إذا كان المستخدم يطلب تقليل الحركة. بعض الأشخاص يعانون من حساسية للحركة أو اضطرابات balance، ويجب احترام تفضيلاتهم لتوفير تجربة مستخدم آمنة ومريحة."
      />

      {/* ==================== Challenge Section ==================== */}
      <Challenge
        title="تحدي: إنشاء صفحة معرض صور مع حركات تمرير"
        description="أنشئ صفحة معرض صور تحتوي على التأثيرات التالية: شريط تقدم في أعلى الصفحة يتحرك مع التمرير، بطاقات الصور تظهر بتأثير fade-in و slide-up عند التمرير إليها، عند مرور الماوس على أي بطاقة تتحرك البطاقة للأعلى مع تغيير الظل، مؤشر تحميل دائري يدور بشكل مستمر، جميع الحركات تتوقف عند تفعيل prefers-reduced-motion."
      >
        <CodeBlock language="css" code={`/* ابدأ بإنشاء هيكل الصفحة */
.progress-bar {
  /* أكمل: شريط تقدم مربوط بالتمرير */
}

.gallery-card {
  /* أكمل: بطاقات تظهر عند التمرير */
}

.gallery-card:hover {
  /* أكمل: تأثير hover */
}

.spinner {
  /* أكمل: مؤشر تحميل دوران */
}

@media (prefers-reduced-motion: reduce) {
  /* أكمل: تعطيل الحركات */
}`} />
      </Challenge>

      {/* ==================== CheatSheet Section ==================== */}
      <CheatSheet title="ملخص سريع - الحركات والتحولات الحديثة">
        <h3>Transition Properties - خصائص التحول</h3>
        <CodeBlock language="css" code={`transition-property: background-color, transform;
transition-duration: 0.3s;
transition-timing-function: ease-in-out;
transition-delay: 0s;

/* Shorthand */
transition: background-color 0.3s ease-in-out 0s,
            transform 0.2s ease-out 0.1s;`} />

        <h3>Animation Properties - خصائص التحريك</h3>
        <CodeBlock language="css" code={`@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

animation-name: slideIn;
animation-duration: 0.5s;
animation-timing-function: ease-out;
animation-delay: 0s;
animation-iteration-count: 1;
animation-direction: normal;
animation-fill-mode: forwards;

/* Shorthand */
animation: slideIn 0.5s ease-out 0s 1 normal forwards;`} />

        <h3>Scroll-driven Animations - حركات مربطة بالتمرير</h3>
        <CodeBlock language="css" code={`/* ربط الحركة بالتمرير في الصفحة */
animation-timeline: scroll(root);
animation-timeline: scroll(nearest);

/* ربط الحركة بظهور العنصر */
animation-timeline: view();
animation-range: entry 0% entry 100%;

/* مثال: شريط تقدم */
.progress {
  animation: grow linear both;
  animation-timeline: scroll(root);
}`} />

        <h3>Timing Functions Comparison - مقارنة الدوال</h3>
        <CodeBlock language="css" code={`/* ease - افتراضي، يبدأ ببطء ثم يتسارع ثم يبطئ */
transition-timing-function: ease;

/* linear - سرعة ثابتة */
transition-timing-function: linear;

/* ease-in - يبدأ ببطء (للعناصر التي تختفي) */
transition-timing-function: ease-in;

/* ease-out - ينتهي ببطء (للعناصر التي تظهر) */
transition-timing-function: ease-out;

/* ease-in-out - متوازن */
transition-timing-function: ease-in-out;

/* cubic-bezier - تخصيص كامل */
transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);`} />

        <h3>Performance Tips - نصائح الأداء</h3>
        <CodeBlock language="css" code={`/* استخدم transform و opacity للحركات */
.animated {
  will-change: transform, opacity;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* تجنب تحريك هذه الخصائص */
/* top, left, right, bottom, width, height */

/* احترم تفضيلات المستخدم */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`} />
      </CheatSheet>

      {/* ==================== Lesson Navigation ==================== */}
      <LessonNavigation
        prevLesson={lesson.prevLesson}
        prevStage={lesson.prevLessonStage}
        nextLesson={lesson.nextLesson}
        nextStage={lesson.nextLessonStage}
      />
    </div>
  );
}
