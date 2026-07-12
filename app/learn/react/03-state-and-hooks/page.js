import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function StateAndHooks() {
  const lessonInfo = getLessonBySlug("react", "03-state-and-hooks");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        <LessonSection title="ما هي الحالة (State)؟">
          <p>
            <strong>State (الحالة)</strong> هي بيانات تتغير بمرور الوقت وتؤثر
            على ما يعرضه المكون على الشاشة. عندما تتغير الحالة، يقوم React
            بإعادة عرض المكون تلقائياً (Re-render) ليعكس التغييرات.
          </p>
          <p>
            يمكنك التفكير في الـ State كـ <strong>ذاكرة للمكون (Memory)</strong>:
            المكون يتذكر أشياء بين عمليات العرض المختلفة. بدون State، سيكون
            المكون ثابتاً (Static) ولا يمكنه الاستجابة للمستخدم أو عرض بيانات
            متغيرة.
          </p>
          <p>
            على سبيل المثال، عداد (Counter) يحتاج أن يتذكر الرقم الحالي. زر
            "إظهار/إخفاء" يحتاج أن يتذكر ما إذا كان العنصر مرئياً أم لا. نموذج
            تسجيل الدخول يحتاج أن يتذكر ما إذا كان المستخدم قد أدخل بياناته
            بالفعل.
          </p>
        </LessonSection>

        <LessonSection title="لماذا نحتاج State؟">
          <p>
            بدون State، لن تتمكن من بناء تطبيقات تفاعلية. تخيّل أن كل شيء
            في واجهة المستخدم كان ثابتاً ولا يتغير أبداً:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>العداد لن يعرض عداً متزايداً عند الضغط على زر</li>
            <li>قائمة المنتجات لن تتغير عند اختيار فئة معينة</li>
            <li>التنقل بين الصفحات لن يعمل</li>
            <li>النماذج لن تحتفظ بالبيانات المدخلة</li>
          </ul>
          <p>
            State هو ما يجعل تطبيقات React <strong>تفاعلية (Interactive)</strong>
            : يتفاعل مع أفعال المستخدم ويعرض نتائج متغيرة وdinamik.
          </p>
        </LessonSection>

        <LessonSection title="المشكلة التي يحلها State">
          <p>
            قبل استخدام State في React، كان المطورون يواجهون مشكلة كبيرة في
            تحديث الـ DOM يدوياً. كانوا يكتبون كوداً طويلاً للبحث عن العناصر
            وتحديثها، وكان هذا يسبب أخطاء كثيرة ويستهلك وقتاً طويلاً.
          </p>
          <p>
            تخيّل أنك تكتب كوداً لكل عنصر في الصفحة: ابحث عن هذا العنصر،
            غيّر نصه، أضف فئة جديدة، أعد تحميل القائمة... هذا كله لكل تغيير
            صغير!
          </p>
          <p>
            يحل State هذه المشكلة: أنت تغيّر فقط قيمة الـ State، ويعمل React
            الباقي تلقائياً. يقوم React بمقارنة الـ Virtual DOM القديم
            بالجديد، ويحدد الفروقات، ويحدّث فقط العناصر التي تغيرت في الصفحة
            الحقيقية.
          </p>
        </LessonSection>

        <LessonSection title="شرح بسيط">
          <p>
            الـ State مثل <strong>ذاكرة المكون (Memory)</strong>: المكون يتذكر
            أشياء بين عمليات العرض المختلفة. كل مرة يُعاد عرض المكون، يقرأ
            الـ State الحالي ويعرضه.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-4">
            <p className="text-blue-400 font-bold mb-2">💡 مثال واقعي:</p>
            <p>
              تخيّل أن لديك صندوق بريد: الصندوق يتذكر الرسائل الجديدة حتى
              تأتي لتفتحه. الـ State مثل هذا الصندوق: المكون يتذكر العدد الحالي
              للعناصر، أو ما إذا كان المستخدم قد سجّل الدخول، أو ما هي
              الصفحة الحالية... إلخ.
            </p>
          </div>
          <p>
            عندما تغير قيمة الـ State، يقوم React بإعادة عرض المكون تلقائياً
            مع القيمة الجديدة، تماماً كما يتذكر صندوق البريد الرسائل الجديدة
            حتى تقرأها.
          </p>
        </LessonSection>

        <LessonSection title="Hook الـ useState">
          <p>
            <code>useState</code> هو أول Hook ستستخدمه في React. Hook هو
            دالة خاصة تبدأ بـ <code>use</code> تسمح لك بـ "تثبيت" ميزات
            حالة (State) في مكون وظيفي.
          </p>
          <p>
            الشكل الأساسي لـ <code>useState</code>:
          </p>
          <CodeBlock
            code={`import { useState } from "react";

// القيمة الأولية للـ State
const [currentState, setStateFunction] = useState(initialValue);`}
            language="jsx"
          />
          <p>
            الدالة <code>useState</code> تُرجع مصفوفة (Array) بها عنصران:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>
              <strong>العنصر الأول:</strong> القيمة الحالية للـ State
              (currentState)
            </li>
            <li>
              <strong>العنصر الثاني:</strong> دالة لتحديث القيمة
              (setStateFunction)
            </li>
          </ul>
          <p>
            نستخدم <strong>Destructuring</strong> لفك المصفوفة وتخزين
            العنصرين في متغيرين منفصلين. اسم المتغير الأول هو القيمة الحالية،
            والثاني هو الدالة المستخدمة لتحديثها.
          </p>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-4">
            <p className="text-yellow-400 font-bold mb-2">
              ⚠️ تنبيه مهم:
            </p>
            <p>
              اسم الدالة updater يبدأ عادة بـ <code>set</code> مثل{" "}
              <code>setCount</code> و <code>setName</code>. هذا تقليد وليس
              قاعدة صارمة، لكنه يجعل الكود أسهل في القراءة والفهم.
            </p>
          </div>
        </LessonSection>

        <LessonSection title="مثال بسيط - عداد (Counter)">
          <p>
            لنرَ مثالاً عملياً على كيفية استخدام <code>useState</code> لإنشاء
            عداد (Counter) بسيط يمكنه زيادة ونقصان العدد:
          </p>
          <CodeBlock
            code={`import { useState } from "react";

function Counter() {
  // إنشاء State بالقيمة الأولية 0
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>العداد: {count}</h2>
      <div className="buttons">
        <button onClick={() => setCount(count - 1)}>
          نقصان (-)
        </button>
        <button onClick={() => setCount(0)}>
          إعادة تعيين
        </button>
        <button onClick={() => setCount(count + 1)}>
          زيادة (+)
        </button>
      </div>
    </div>
  );
}

export default Counter;`}
            language="jsx"
          />
          <p>
            هنا نرى كيف يعمل الـ State:
          </p>
          <ol className="list-decimal list-inside space-y-2 my-4">
            <li>
              نُنشئ State بالقيمة الأولية <code>0</code> باستخدام{" "}
              <code>useState(0)</code>
            </li>
            <li>
              نحصل على <code>count</code> (القيمة الحالية) و{" "}
              <code>setCount</code> (دالة التحديث)
            </li>
            <li>
              عند الضغط على زر "زيادة"، نستدعي{" "}
              <code>setCount(count + 1)</code> لتحديث القيمة
            </li>
            <li>
              يقوم React بإعادة عرض المكون بالقيمة الجديدة تلقائياً
            </li>
          </ol>
        </LessonSection>

        <LessonSection title="مثال عملي - قائمة مهام (To-Do List)">
          <p>
            لننشئ تطبيقاً عملياً أكثر تعقيداً: قائمة مهام (To-Do List) تسمح
            بإضافة مهام جديدة، وتحديد المهام المكتملة، وحذف المهام:
          </p>
          <CodeBlock
            code={`import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "تعلم React", completed: false },
    { id: 2, text: "بناء مشروع", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h2>قائمة المهام</h2>

      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="أضف مهمة جديدة..."
        />
        <button onClick={addTodo}>إضافة</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
              حذف
            </button>
          </li>
        ))}
      </ul>

      <p className="stats">
        المهام المكتملة: {todos.filter((t) => t.completed).length} /{" "}
        {todos.length}
      </p>
    </div>
  );
}

export default TodoApp;`}
            language="jsx"
          />
          <p>
            هذا المثال يوضح عدة مفاهيم مهمة:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>
              استخدام <code>useState</code> مع مصفوفة كقيمة أولية
            </li>
            <li>
              استخدام <code>setTodos</code> مع دالة{" "}
              <code>map</code> و <code>filter</code> لتحديث المصفوفة
            </li>
            <li>
              استخدام Spread Operator <code>[...todos, newTodo]</code> لإضافة
              عنصر جديد دون تغيير المصفوفة الأصلية
            </li>
            <li>
              إدارة 두 قيم State في نفس المكون (المهام وقيمة الإدخال)
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="قواعد Hooks">
          <p>
            هناك قواعد صارمة يجب اتباعها عند استخدام Hooks في React. إذا
            خالفت هذه القواعد، ستحصل على أخطاء غير متوقعة:
          </p>
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ القاعدة 1: لا تستدعي Hooks في حلقات تكرارية أو 조건ات
              </p>
              <CodeBlock
                code={`// خطأ: استخدام Hook داخل حلقة
function Wrong() {
  for (let i = 0; i < 5; i++) {
    const [value, setValue] = useState(0); // ❌
  }
}

// خطأ: استخدام Hook داخل شرط
function Wrong() {
  if (condition) {
    const [value, setValue] = useState(0); // ❌
  }
}`}
                language="jsx"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ القاعدة 2: لا تستدعي Hooks داخل دوال عادية
              </p>
              <CodeBlock
                code={`// خطأ: استخدام Hook داخل دالة داخلية
function Wrong() {
  function handleClick() {
    const [count, setCount] = useState(0); // ❌
  }
}`}
                language="jsx"
              />
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-400 font-bold mb-2">
                ✅ القاعدة 3: استدعي Hooks في أعلى المكون فقط
              </p>
              <CodeBlock
                code={`// صحيح: استخدام Hooks في أعلى المكون
function Correct() {
  const [count, setCount] = useState(0); // ✅
  const [name, setName] = useState(""); // ✅

  return <div>{count} - {name}</div>;
}`}
                language="jsx"
              />
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-400 font-bold mb-2">
                ✅ القاعدة 4: اسم الدالة يبدأ بـ "use"
              </p>
              <CodeBlock
                code={`// صحيح: تسمية Hooks بـ use
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  return { count, setCount };
}`}
                language="jsx"
              />
            </div>
          </div>
        </LessonSection>

        <LessonSection title="State مقابل Props">
          <p>
            هناك سؤال شائع بين المبتدئين: متى نستخدم Props ومتى نستخدم
            State؟ الفرق بسيط لكنه جوهري:
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <h3 className="text-blue-400 font-bold mb-3">📦 Props</h3>
              <ul className="space-y-2 text-sm">
                <li>• تأتي من المكون الأب (من الخارج)</li>
                <li>• للقراءة فقط (Read-Only)</li>
                <li>• لا يمكن للمكون تغييرها</li>
                <li>• مثل معاملات الدوال</li>
                <li>• تُمرر عند استخدام المكون</li>
                <li>• تُستخدم لتمرير البيانات للأسفل</li>
              </ul>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <h3 className="text-purple-400 font-bold mb-3">
                🧠 State (الحالة)
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• داخل المكون نفسه (داخلي)</li>
                <li>• للقراءة والكتابة (Read & Write)</li>
                <li>• يمكن تغييره باستخدام setState</li>
                <li>• مثل متغيرات الدوال</li>
                <li>• يُنشأ داخل المكون</li>
                <li>• يُستخدم لإدارة البيانات المحلية</li>
              </ul>
            </div>
          </div>
          <CodeBlock
            code={`// Props تأتي من الأعلى (الابن يقرأ فقط)
function ChildComponent({ userName }) {
  // userName قادم من الأب - للقراءة فقط
  return <p>مرحباً {userName}</p>;
}

// State داخلي - يمكن تغييره
function Counter() {
  const [count, setCount] = useState(0);
  // count و setCount خاصان بالمكون نفسه

  return (
    <button onClick={() => setCount(count + 1)}>
      العدد: {count}
    </button>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>
            عندما تستدعي دالة updater مثل <code>setCount</code>، يحدث
            سلسلة من الأحداث خلف الكواليس:
          </p>
          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>تحديث الـ State:</strong> تقوم React بجدولة تحديث قيمة
              الـ State بالقيمة الجديدة (قد لا يحدث فوراً!)
            </li>
            <li>
              <strong>جدولة إعادة العرض:</strong> تقرر React إعادة عرض
              المكون及其 الأبناء في دورة تحديث واحدة
            </li>
            <li>
              <strong>إعادة العرض:</strong> يتم استدعاء دالة المكون مرة
              أخرى مع القيمة الجديدة للـ State
            </li>
            <li>
              <strong>مقارنة Virtual DOM:</strong> يقارن React شجرة Virtual
              DOM الجديدة بالقديمة
            </li>
            <li>
              <strong>تحديث Real DOM:</strong> يتم تحديث فقط الأجزاء التي
              تغيرت فعلاً في الصفحة الحقيقية
            </li>
          </ol>
          <CodeBlock
            code={`function Counter() {
  const [count, setCount] = useState(0);

  console.log("تم عرض المكون بالعدد:", count);

  return (
    <div>
      <p>العدد: {count}</p>
      <button onClick={() => {
        setCount(count + 1);
        // ⚠️ count هنا لن يظهر القيمة الجديدة فوراً
        // لأن setState لا يحدث فوراً
        console.log(count); // سيظهر 0 وليس 1!
      }}>
        زيادة
      </button>
    </div>
  );
}`}
            language="jsx"
          />
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-4">
            <p className="text-yellow-400 font-bold mb-2">
              ⚠️ ملاحظة مهمة:
            </p>
            <p>
              الـ State في React لا يتحدث (Mutate) فوراً. عندما تستدعي
              setCount، يحدث التحديث في الدورة التالية (Next Cycle). هذا
              يعني أن القيمة القديمة لا تزال مرئية في نفس الدورة.
            </p>
          </div>
        </LessonSection>

        <LessonSection title="الأخطاء الشائعة">
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 1: التعديل المباشر على الـ State
              </p>
              <CodeBlock
                code={`// خطأ: لا تتحدث على الـ State مباشرة!
function Wrong() {
  const [count, setCount] = useState(0);

  const increment = () => {
    count = count + 1; // ❌ لا تفعل هذا أبداً
  };
}

// صحيح: استخدم الدالة updater
function Correct() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // ✅
  };
}`}
                language="jsx"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 2: استخدام القيمة القديمة بعد set
              </p>
              <CodeBlock
                code={`// خطأ: القيمة لم تتحدث بعد في نفس الدورة
function Wrong() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count); // سيظهر 0 وليس 1!
  };
}`}
                language="jsx"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 3: استدعاء set في وقت العرض
              </p>
              <CodeBlock
                code={`// خطأ: set في وقت العرض بدون شرط
function Wrong() {
  const [count, setCount] = useState(0);

  setCount(count + 1); // ❌ سيسبب حلقة لا نهائية!

  return <p>{count}</p>;
}`}
                language="jsx"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 4: نسيان مفتاح unique في القوائم
              </p>
              <CodeBlock
                code={`// خطأ: استخدام الم index كـ key
{items.map((item, index) => (
  <ListItem key={index} /> // ❌ index كـ key سيسبب مشاكل
))}

// صحيح: استخدام مفتاح فريد من البيانات
{items.map((item) => (
  <ListItem key={item.id} /> // ✅
))}`}
                language="jsx"
              />
            </div>
          </div>
        </LessonSection>

        <LessonSection title="أفضل الممارسات">
          <ul className="list-disc list-inside space-y-3 my-4">
            <li>
              <strong>استخدم الدالة updater للstate القائم على الحالة
              السابقة:</strong> إذا كان التحديث يعتمد على القيمة السابقة، استخدم
              الدالة بدلاً من القيمة مباشرة
            </li>
            <li>
              <strong>احتفظ بالـ State بسيطاً:</strong> لا تضع كائنات كبيرة
              جداً أو مصفوفات طويلة في الـ State. فكّر في تقسيمها إلى State
              متعدد أصغر.
            </li>
            <li>
              <strong>ارفع الحالة للأعلى (Lift State Up):</strong> إذا كان
              مكونان يحتاجان نفس البيانات، ارفع الحالة إلى أبهما المشترك
            </li>
            <li>
              <strong>لا تضع كل شيء في State:</strong> إذا كانت البيانات
              يمكن حسابها من State موجود، لا تخزنها في State منفصل
            </li>
            <li>
              <strong>استخدم القيم الحسابية (Derived State):</strong> القيم
              التي يمكن حسابها من State آخر يجب أن تُحسب داخل المكون بدلاً
              من تخزينها
            </li>
          </ul>
          <CodeBlock
            code={`// مثال على استخدام الدالة updater
function Counter() {
  const [count, setCount] = useState(0);

  // ❌ قد يسبب مشاكل إذا كان التحديث السريع
  const incrementWrong = () => {
    setCount(count + 1);
    setCount(count + 1); // لن يضيف 2، سيضيف فقط 1!
  };

  // ✅ صحيح: استخدام الدالة updater
  const incrementCorrect = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // سيضيف 2!
  };

  return <p>{count}</p>;
}

// مثال على State المُشتق (Derived State)
function UserList({ users }) {
  const [filter, setFilter] = useState("");

  // ❌ لا تخزن هذه في State (يمكن حسابها)
  // const filteredUsers = users.filter(u => u.name.includes(filter));

  // ✅ حسابها داخل المكون
  const filteredUsers = users.filter(user =>
    user.name.includes(filter)
  );

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="ملخص">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 my-4">
            <h3 className="text-green-400 font-bold text-lg mb-4">
              🎯 ما تعلمناه في هذا الدرس:
            </h3>
            <ul className="space-y-2">
              <li>
                ✅ State هو الذاكرة الداخلية للمكون التي تتغير بمرور الوقت
              </li>
              <li>
                ✅ بدون State لن تستطيع بناء تطبيقات تفاعلية
              </li>
              <li>
                ✅ Hook الـ useState يسمح لك بإنشاء State في المكونات
                الوظيفية
              </li>
              <li>
                ✅ useState يُرجع مصفوفة: [قيمة_حالية, دالة_تحديث]
              </li>
              <li>
                ✅ عند استدعاء set، يحدث إعادة عرض تلقائية للمكون
              </li>
              <li>
                ✅ لا تتحدث على الـ State مباشرة، استخدم دائماً الدالة updater
              </li>
              <li>
                ✅ State للقراءة والكتابة، Props للقراءة فقط
              </li>
              <li>
                ✅ استخدم الدالة updater عندما يعتمد التحديث على القيمة السابقة
              </li>
              <li>
                ✅ Hooks يجب أن تستدعى في أعلى المكون فقط، لا في حلقات أو
                شروط
              </li>
            </ul>
          </div>
        </LessonSection>

        <Quiz
          question="ما هو الشكل الصحيح لإنشاء State باستخدام useState؟"
          options={[
            "const state = useState(0)",
            "const [count, setCount] = useState(0)",
            "const { count, setCount } = useState(0)",
            "let count = useState(0)"
          ]}
          correctAnswer={1}
          explanation="useState يُرجع مصفوفة بعنصران، نستخدم Destructuring لفكها إلى متغيرين: القيمة الحالية ودالة التحديث."
        />
        <Quiz
          question="ماذا يحدث عندما تستدعي دالة set في React؟"
          options={[
            "يتحدث الـ State فوراً ويحدث العرض",
            "يتحدث الـ State ويحدث العرض في الدورة التالية",
            "يتحدث الـ State فقط بدون إعادة العرض",
            "يحدث العرض فقط بدون تغيير الـ State"
          ]}
          correctAnswer={1}
          explanation="الـ State لا يتحدث فوراً. يحدث التحديث في الدورة التالية (Next Render Cycle). هذا ما يجعل React فعالاً في الأداء."
        />
        <Quiz
          question="ما هو الفرق بين Props و State؟"
          options={[
            "Props للقراءة والكتابة، State للقراءة فقط",
            "Props من الأب (خارجي)، State داخل المكون (داخلي)",
            "Props للنصوص فقط، State للأرقام فقط",
            "لا يوجد فرق بينهما"
          ]}
          correctAnswer={1}
          explanation="Props تأتي من المكون الأب ولا يمكن تغييرها (للقراءة فقط)، بينما State خاصية داخلية يمكن تغييرها باستخدام الدالة updater."
        />
        <Quiz
          question="أي من הבאים هو استخدام صحيح لـ useState؟"
          options={[
            "داخل حلقة for",
            "داخل شرط if",
            "في أعلى المكون فقط",
            "داخل دالة داخلية"
          ]}
          correctAnswer={2}
          explanation="يجب أن تستدعي Hooks في أعلى المكون فقط، لا في حلقات، شروط، أو دوال داخلية."
        />
        <Quiz
          question="لماذا نستخدم الدالة updater بدلاً من القيمة المباشرة؟"
          options={[
            "لأن React لا يدعم التحديث المباشر",
            "لأنها أسهل في الكتابة",
            "لأنها تضمن التحديث الصحيح عندما يعتمد على الحالة السابقة",
            "لأنها أسرع في الأداء"
          ]}
          correctAnswer={2}
          explanation="الدالة updater تضمن أنك تحصل على أحدث قيمة للـ State حتى عند التحديث المتكرر. القيمة المباشرة قد لا تعكس آخر تغيير."
        />

        <Challenge
          title="أنشئ عداد ذكي مع إخفاء وإظهار"
          description="أنشئ تطبيقاً يجمع بين العداد وإخفاء وإظهار المحتوى باستخدام State."
          tasks={[
            "أنشئ مكون Counter بسيط مع أزرار زيادة ونقصان",
            "أضف زر لإعادة تعيين العداد إلى الصفر",
            "أنشئ مكون Toggle يتحكم في إظهار وإخفاء نص",
            "أضف عداداً آخر يعرض عدد مرات الضغط على زر الإظهار/الإخفاء",
            "تأكد من استخدام useState لكل قيم State المستخدمة"
          ]}
        />

        <CheatSheet
          items={[
            {
              title: "إنشاء State بسيط",
              description: "إنشاء حالة باستخدام Hook الـ useState",
              code: `import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("أحمد");
  const [isVisible, setIsVisible] = useState(true);

  return <div>{count} - {name}</div>;
}`
            },
            {
              title: "تحديث State",
              code: `// القيمة المباشرة (عندما لا تعتمد على الحالة السابقة)
setCount(5);
setName("سارة");

// الدالة updater (عندما يعتمد على الحالة السابقة)
setCount(prev => prev + 1);
setName(prev => prev + " new");

// تحديث مصفوفة
setItems([...items, newItem]); // إضافة
setItems(items.filter(i => i.id !== id)); // حذف
setItems(items.map(i => i.id === id ? {...i, done: true} : i)); // تعديل`
            },
            {
              title: "State مع مصفوفات",
              description: "التعامل مع المصفوفات في الـ State",
              code: `const [items, setItems] = useState([]);

// إضافة عنصر
setItems([...items, newItem]);

// حذف عنصر
setItems(items.filter(item => item.id !== id));

// تحديث عنصر
setItems(items.map(item =>
  item.id === id
    ? { ...item, completed: !item.completed }
    : item
));

// ترتيب
setItems([...items].sort((a, b) => a.name - b.name));`
            },
            {
              title: "State مع كائنات",
              description: "التعامل مع الكائنات في الـ State",
              code: `const [user, setUser] = useState({
  name: "أحمد",
  age: 25,
  email: "ahmed@example.com"
});

// تحديث خاصية واحدة
setUser({ ...user, name: "سارة" });

// تحديث عدة خصائص
setUser({ ...user, name: "سارة", age: 30 });`
            },
            {
              title: "التحقق من القواعد",
              code: `// ✅ صحيح
function Component() {
  const [a, setA] = useState(0);
  const [b, setB] = useState("");
  return <div>{a} {b}</div>;
}

// ❌ خطأ
function Component() {
  if (true) {
    const [a, setA] = useState(0); // ❌
  }
}`
            }
          ]}
        />

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
