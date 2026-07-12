import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function UseEffectLesson() {
  const lessonInfo = getLessonBySlug("react", "04-useEffect");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        <LessonSection title="ما هو useEffect؟">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            الـ <code className="bg-gray-800 px-2 py-1 rounded text-green-400">useEffect</code> هو{" "}
            <strong className="text-white">Hook</strong> في React يُستخدم لتنفيذ{" "}
            <strong className="text-white">الأثر الجانبي (Side Effects)</strong> في المكونات. يُعتبر
            من أهم الـ Hooks وأكثرها استخدامًا في تطبيقات React الحديثة.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            الأثر الجانبي يعني أي عملية تتفاعل مع شيء خارج مكونات React، مثل:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>
              جلب البيانات من APIs (<code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                fetch
              </code>
              )
            </li>
            <li>
              الاشتراكات في الخدمات (<code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                subscriptions
              </code>
              )
            </li>
            <li>التحكم في عنصر DOM مباشرة</li>
            <li>
              المؤقتات والمؤثرات الصوتية (<code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                timers
              </code>
              )
            </li>
            <li>تغيير عنوان الصفحة أو وصفها</li>
            <li>
              التخزين المحلي (<code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                localStorage
              </code>
              )
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="لماذا نحتاج useEffect؟">
          <p className="text-gray-300 leading-relaxed mb-4">
            المكونات في React تحتاج للتفاعل مع أشياء خارج نظام React. على سبيل المثال، عند فتح
            صفحة في المتصفح، قد تحتاج لجلب بيانات من خادم (Server)، أو تشغيل مؤقت (Timer)، أو
            الاستماع لأحداث المستخدم.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            بدون <code className="bg-gray-800 px-2 py-1 rounded text-green-400">useEffect</code>،
            لن يكون لدينا طريقة نظيفة لتنفيذ هذه العمليات داخل المكونات الوظيفية (Functional
            Components).之前的 كان المطورون يلجأون لاستخدام Class Components أو الحلول البديلة غير
            الفعالة.
          </p>
          <CodeBlock
            code={`// بدون useEffect - لا يمكننا تنفيذ أثر جانبي بعد التصيير
function UserProfile({ userId }) {
  // ❌ هذا لن يعمل - لا يمكننا جلب البيانات هنا مباشرة
  // const data = fetch(\`/api/users/\${userId}\`);
  
  return <div>{/* عرض البيانات */}</div>;
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="المشكلة التي يحلها">
          <p className="text-gray-300 leading-relaxed mb-4">
            قبل ظهور useEffect، كان هناك مشكلتان رئيسيتان:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-4">
            <li>
              <strong className="text-white">لا يمكن تنفيذ أثر جانبي في المكونات الوظيفية:</strong>{" "}
              كان الحل الوحيد هو استخدام Class Components مع{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">
                componentDidMount
              </code>{" "}
              و{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">
                componentDidUpdate
              </code>
            </li>
            <li>
              <strong className="text-white">مشاكل التنظيف:</strong> عند إنشاء اشتراكات أو
              مؤقتات، لا توجد طريقة موحدة لتنظيفها عند إزالة المكون، مما يؤدي لتسريب الذاكرة
            </li>
          </ol>
          <CodeBlock
            code={`// في Class Components - الطريقة القديمة
class UserProfile extends React.Component {
  componentDidMount() {
    // جلب البيانات عند تحميل المكون
    fetch(\`/api/users/\${this.props.userId}\`)
      .then(res => res.json())
      .then(data => this.setState({ user: data }));
  }

  componentWillUnmount() {
    // تنظيف عند إزالة المكون
    clearInterval(this.interval);
  }

  render() {
    return <div>{/* عرض البيانات */}</div>;
  }
}

// مع useEffect - الطريقة الحديثة 👇
function UserProfile({ userId }) {
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));

    return () => clearInterval(interval); // التنظيف
  }, [userId]);
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="شرح بسيط - كيف يعمل useEffect">
          <p className="text-gray-300 leading-relaxed mb-4">
            تخيل أنك ترسل رسالة لـ React:{" "}
            <strong className="text-white">
              "بعد أن تُحدّث واجهة المستخدم (UI)، قم بهذه أيضًا"
            </strong>
            .
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            الـ useEffect يعمل بعد أن يُصيّر React المكون على الشاشة (After Paint). لا يُوقف عملية
            التصيير ولا يُبطئها. يعمل في الخلفية بشكل غير متزامن.
          </p>
          <CodeBlock
            code={`// التوقيت: ماذا يحدث؟
function Welcome() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // ✅ يُنفذ بعد أن يظهر المكون على الشاشة
    console.log("المكون ظهر على الشاشة!");
    
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // ✅ يُنفذ عند إزالة المكون من الشاشة
    return () => clearInterval(timer);
  }, []); // [] = يُنفذ مرة واحدة فقط

  return <div>{time.toLocaleTimeString()}</div>;
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="الصيغة الأساسية">
          <CodeBlock
            code={`import { useEffect } from 'react';

// الصيغة الأساسية
useEffect(() => {
  // الكود الذي يُنفذ بعد التصيير
  console.log("تم التصيير!");

  // دالة التنظيف (اختيارية)
  return () => {
    console.log("تنظيف!");
  };
}, [依赖]); // مصفوفة التبعيات (اختيارية)`}
            language="javascript"
          />
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mt-4">
            <h4 className="text-white font-semibold mb-2">المعاملات الثلاثة:</h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                <strong className="text-green-400">1. الدالة الأولى:</strong> الكود الذي يُنفذ
                (مع دالة التنظيف اختياريًا)
              </li>
              <li>
                <strong className="text-green-400">2. مصفوفة التبعيات (Dependency Array):</strong>{" "}
                تحدد متى يُعاد تنفيذ الـ Effect
              </li>
              <li>
                <strong className="text-green-400">3. دالة التنظيف (Cleanup):</strong> تُنفذ عند
                إزالة المكون أو قبل إعادة تنفيذ الـ Effect
              </li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="مثال بسيط - مؤقت (Timer)">
          <p className="text-gray-300 leading-relaxed mb-4">
            مثال عملي على استخدام useEffect لإنشاء مؤقت يبدأ عند تحميل المكون ويتوقف عند إزالتها:
          </p>
          <CodeBlock
            code={`"use client";
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    // إنشاء المؤقت
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // دالة التنظيف - تُنفذ عند إزالة المكون أو قبل إعادة التشغيل
    return () => {
      clearInterval(intervalId);
      console.log("تم تنظيف المؤقت!");
    };
  }, [isRunning]); // يُعاد تنفيذها عند تغيير isRunning

  return (
    <div>
      <h2>الوقت: {seconds} ثانية</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "إيقاف" : "تشغيل"}
      </button>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="مثال عملي - بحث مع debounce">
          <p className="text-gray-300 leading-relaxed mb-4">
            مثال واقعي: حقل بحث يجلب النتائج من الخادم مع{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-green-400">debounce</code> لتقليل
            طلبات الشبكة:
          </p>
          <CodeBlock
            code={`"use client";
import { useState, useEffect } from 'react';

function SearchInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // إذا كان البحث فارغًا، لا تجلب بيانات
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // إنشاء AbortController لإلغاء الطلبات السابقة
    const controller = new AbortController();

    // دالة البحث
    async function searchProducts() {
      setLoading(true);
      try {
        const response = await fetch(
          \`/api/products?search=\${encodeURIComponent(query)}\`,
          { signal: controller.signal }
        );
        const data = await response.json();
        setResults(data.products);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("خطأ في البحث:", error);
        }
      } finally {
        setLoading(false);
      }
    }

    // Debounce: انتظر 300ms بعد آخر كتابة
    const debounceTimer = setTimeout(searchProducts, 300);

    // التنظيف: إلغاء الطلب السابق وإيقاف المؤقت
    return () => {
      clearTimeout(debounceTimer);
      controller.abort();
    };
  }, [query]); // يُعاد تنفيذها عند تغيير query

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ابحث عن منتج..."
      />
      {loading && <p>جاري البحث...</p>}
      <ul>
        {results.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="مصفوفة التبعيات (Dependency Array)">
          <p className="text-gray-300 leading-relaxed mb-4">
            مصفوفة التبعيات تتحكم في{" "}
            <strong className="text-white">متى يُعاد تنفيذ الـ Effect</strong>. هناك ثلاثة
            سيناريوهات:
          </p>

          <h4 className="text-white font-semibold mt-6 mb-3">
            1. مصفوفة فارغة <code className="bg-gray-800 px-2 py-1 rounded text-green-400">[]</code>{" "}
            - مرة واحدة فقط
          </h4>
          <CodeBlock
            code={`useEffect(() => {
  console.log("يُنفذ مرة واحدة فقط عند تحميل المكون");
  // مثلاً: جلب البيانات الأولية
}, []); // ✅ مصفوفة فارغة = مرة واحدة`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">
            2. مصفوفة بقيم{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-green-400">[value]</code> - عند
            تغيير القيمة
          </h4>
          <CodeBlock
            code={`const [userId, setUserId] = useState(1);

useEffect(() => {
  console.log(\`يُنفذ عند تغيير userId إلى \${userId}\`);
  fetchUser(userId);
}, [userId]); // ✅ يُعاد تنفيذها عند تغيير userId`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">
            3. بدون مصفوفة - بعد كل تصيير
          </h4>
          <CodeBlock
            code={`useEffect(() => {
  // ⚠️ يُنفذ بعد كل تصيير - نادرًا ما نحتاج هذا
  console.log("تم التصيير!");
}); // ❌ بدون مصفوفة = بعد كل مرة`}
            language="jsx"
          />

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
            <h4 className="text-yellow-400 font-semibold mb-2">⚠️ تحذير مهم:</h4>
            <p className="text-gray-300">
              عدم إضافة متغيرات مستخدمة داخل الـ Effect إلى مصفوفة التبعيات يُسبب أخطاء صعبة
              الاكتشاف. استخدم{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                react-hooks/exhaustive-deps
              </code>{" "}
              lint rule للكشف المبكر عن هذه الأخطاء.
            </p>
          </div>
        </LessonSection>

        <LessonSection title="دالة التنظيف (Cleanup Function)">
          <p className="text-gray-300 leading-relaxed mb-4">
            دالة التنظيف تُ executes في{" "}
            <strong className="text-white">موقفين</strong>:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4">
            <li>
              <strong className="text-white">عند إزالة المكون من الشاشة</strong> (Unmount)
            </li>
            <li>
              <strong className="text-white">قبل إعادة تنفيذ الـ Effect</strong> عند تغيير
              القيم في مصفوفة التبعيات
            </li>
          </ol>

          <CodeBlock
            code={`"use client";
import { useEffect } from 'react';

function WindowSize() {
  useEffect(() => {
    // إضافة مستمع للحدث
    function handleResize() {
      console.log(\`الحجم: \${window.innerWidth}x\${window.innerHeight}\`);
    }

    window.addEventListener("resize", handleResize);
    console.log("تم إضافة مستمع الحجم");

    // ✅ التنظيف: إزالة المستمع عند إزالة المكون
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("تم إزالة مستمع الحجم");
    };
  }, []); // [] = مرة واحدة

  return <div>غيّر حجم النافذة وشاهد النتيجة في Console</div>;
}`}
            language="jsx"
          />

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-4">
            <h4 className="text-red-400 font-semibold mb-2">⚠️ لماذا التنظيف مهم؟</h4>
            <p className="text-gray-300">
              بدون تنظيف، ستتجمع الذاكرة (Memory Leak) مع كل إعادة تصيير. على سبيل المثال، إذا
              أضفت مستمع حدث في كل تصيير دون إزالة السابقة، سيعمل عشرات أو مئات المستمعين في نفس
              الوقت، مما يبطئ التطبيق وقد يُسبب انهياره.
            </p>
          </div>
        </LessonSection>

        <LessonSection title="⚠️ ملاحظة مهمة عن Next.js">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-4">
            <h4 className="text-blue-400 font-semibold mb-3">
              🚀 في Next.js مع App Router، جلب البيانات يتم بطريقة مختلفة!
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              في Next.js 13+ مع App Router،{" "}
              <strong className="text-white">Server Components</strong> هي الطريقة الأساسية
              لجلب البيانات. لا تحتاج لاستخدام useEffect لجلب البيانات في المكونات التي تعمل
              على الخادم.
            </p>
            <CodeBlock
              code={`// ✅ الطريقة الصحيحة في Next.js - Server Component
async function ProductList() {
  // جلب البيانات مباشرة على الخادم!
  const products = await db.products.findMany();

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

// ❌ الطريقة القديمة - غير ضرورية في Server Components
function ProductListOld() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}`}
              language="jsx"
            />
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong className="text-white">متى تستخدم useEffect في Next.js؟</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
              <li>عند الحاجة للتفاعل مع APIs في المتصفح (مثل localStorage)</li>
              <li>عند الحاجة لأحداث المستخدم (مثل scroll، resize)</li>
              <li>عند استخدام{" "}
                <code className="bg-gray-800 px-2 py-1 rounded text-green-400">"use client"</code>{" "}
                والمكون يحتاج لجلب بيانات بعد التحميل
              </li>
              <li>للمؤقتات والمؤثرات الصوتية</li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="ماذا يحدث خلف الكواليس">
          <p className="text-gray-300 leading-relaxed mb-4">
            فهم آلية عمل useEffect يساعدك على كتابة كود أفضل وتجنب الأخطاء:
          </p>
          <CodeBlock
            code={`// التسلسل الزمني لتنفيذ useEffect
//
// 1️⃣ React يُصيّر المكون (Render)
//    ↓
// 2️⃣ المتصفح يُظهر التغييرات على الشاشة (Paint)
//    ↓
// 3️⃣ React يفحص مصفوفة التبعيات
//    ↓
//    ├── إذا كانت المصفوفة فارغة ([]): يُنفذ الـ Effect مرة واحدة
//    ├── إذا تغيرت القيم: يُنفذ التنظيف القديم ← ثم الـ Effect الجديد
//    └── إذا لم تتغير القيم: لا يُنفذ شيئًا
//    ↓
// 4️⃣ عند إزالة المكون (Unmount): يُنفذ التنظيف

// مثال توضيحي
function Example({ count }) {
  useEffect(() => {
    console.log(\`تم التصيير بالعدد: \${count}\`);

    return () => {
      console.log(\`تنظيف للعدد: \${count}\`);
    };
  }, [count]);

  return <div>{count}</div>;
}

// عند count = 1: "تم التصيير بالعدد: 1"
// عند count = 2: "تنظيف للعدد: 1" ← "تم التصيير بالعدد: 2"
// عند إزالة المكون: "تنظيف للعدد: 2"`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="الأخطاء الشائعة">
          <h4 className="text-white font-semibold mb-3">1. نسيان مصفوفة التبعيات</h4>
          <CodeBlock
            code={`// ❌ خطأ: لا توجد مصفوفة تبعيات
useEffect(() => {
  fetchData(userId);
});

// ✅ صحيح: مصفوفة تبعيات تحتوي على userId
useEffect(() => {
  fetchData(userId);
}, [userId]);`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">2. نسيان دالة التنظيف</h4>
          <CodeBlock
            code={`// ❌ خطأ: لا توجد دالة تنظيف - تسريب ذاكرة!
useEffect(() => {
  const interval = setInterval(() => {
    console.log("كل ثانية");
  }, 1000);
  // ❌ نسينا clearInterval
}, []);

// ✅ صحيح: تنظيف المؤقت
useEffect(() => {
  const interval = setInterval(() => {
    console.log("كل ثانية");
  }, 1000);

  return () => clearInterval(interval); // ✅ التنظيف
}, []);`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">3. الحلقة اللانهائية (Infinite Loop)</h4>
          <CodeBlock
            code={`// ❌ خطأ: تغيير الحالة داخل useEffect بدون تبعيات
function Component() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); // ⚠️ هذا يُسبب إعادة تصيير
    // مما يُسبب إعادة تنفيذ useEffect
    // مما يُسبب إعادة تصيير... حلقة لا نهائية!
  }, [count]); // ❌ تبعيات تحتوي على count
}

// ✅ صحيح: استخدام useCallback أو تجنب التحديثات غير الضرورية
function Component() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/data");
      const result = await response.json();
      setData(result); // ✅ هذا آمن لأنه يُحدّث حالة مختلفة
    }
    fetchData();
  }, []); // ✅ فارغة = مرة واحدة
}`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">4. استخدام useEffect لكل شيء</h4>
          <CodeBlock
            code={`// ❌ خطأ: استخدام useEffect لحساب القيمة المُ derivada
function Component({ items }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(items.reduce((sum, item) => sum + item.price, 0));
  }, [items]); // ❌ غير ضروري!
}

// ✅ صحيح: استخدم useMemo للحسابات
function Component({ items }) {
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]); // ✅ أفضل أداء
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="أفضل الممارسات">
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>
              <strong className="text-white">استخدم Server Components في Next.js لجلب البيانات:</strong>{" "}
              useEffect هو البديل للعمليات العميلية فقط
            </li>
            <li>
              <strong className="text-white">استخدم AbortController:</strong> لإلغاء الطلبات
              غير المكتملة
            </li>
            <li>
              <strong className="text-white">افصل الـ Effects:</strong> كل Effect يجب أن يفعل
              شيئًا واحدًا فقط
            </li>
            <li>
              <strong className="text-white">اكتب دالة التنظيف دائمًا:</strong> حتى لو كانت
              فارغة، تذكرها ك Habit
            </li>
            <li>
              <strong className="text-white">استخدم lint rules:</strong>{" "}
              react-hooks/exhaustive-deps يكشف الأخطاء المبكرة
            </li>
            <li>
              <strong className="text-white">لا تستخدم useEffect للحسابات:</strong> استخدم{" "}
              useMemo بدلاً منه
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="ملخص">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <ul className="text-gray-300 space-y-3">
              <li>
                ✅ <strong className="text-white">useEffect</strong> يُنفذ الأثر الجانبي بعد
                التصيير
              </li>
              <li>
                ✅ <strong className="text-white">مصفوفة التبعيات</strong> تتحكم في توقيت التنفيذ
              </li>
              <li>
                ✅ <strong className="text-white">دالة التنظيف</strong> تمنع تسريب الذاكرة
              </li>
              <li>
                ✅ <strong className="text-white">في Next.js</strong>، استخدم Server Components
                لجلب البيانات
              </li>
              <li>
                ✅ <strong className="text-white">useEffect</strong> للعمليات العميلية فقط
              </li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="اختبار المعرفة">
          <Quiz
            question="متى يُنفذ الـ useEffect في دورة حياة المكون؟"
            options={[
              "قبل التصيير",
              "أثناء التصيير",
              "بعد التصيير والظهور على الشاشة",
              "قبل ظهور المكون على الشاشة",
            ]}
            correctAnswer={2}
            explanation="يُنفذ الـ useEffect بعد أن يُصيّر React المكون ويظهره على الشاشة (After Paint)."
          />
          <Quiz
            question="ما الذي تفعله المصفوفة الفارغة [] في useEffect؟"
            options={[
              "تُوقف الـ Effect عن العمل",
              "تُ execute الـ Effect بعد كل تصيير",
              "تُ execute الـ Effect مرة واحدة فقط عند التحميل",
              "تُمرر القيم إلى الـ Effect",
            ]}
            correctAnswer={2}
            explanation="المصفوفة الفارغة [] تعني أن الـ Effect لا يعتمد على أي متغير، لذا يُنفذ مرة واحدة فقط عند تحميل المكون."
          />
          <Quiz
            question="لماذا نحتاج لدالة التنظيف في useEffect؟"
            options={[
              "لتحسين أداء المكون",
              "لمنع تسريب الذاكرة وإلغاء الاشتراكات غير الضرورية",
              "لإعادة تشغيل الـ Effect",
              "لحفظ بيانات المستخدم",
            ]}
            correctAnswer={1}
            explanation="دالة التنظيف تمنع تسريب الذاكرة وتُلغي المؤقتات والاشتراكات عند إزالة المكون أو قبل إعادة تنفيذ الـ Effect."
          />
          <Quiz
            question="في Next.js مع App Router، ما هي الطريقة الأساسية لجلب البيانات؟"
            options={[
              "useEffect مع fetch",
              "useCallback مع fetch",
              "Server Components",
              "componentDidMount",
            ]}
            correctAnswer={2}
            explanation="في Next.js مع App Router، Server Components هي الطريقة الأساسية لجلب البيانات مباشرة على الخادم."
          />
          <Quiz
            question="أي من التالي يُسبب حلقة لا نهائية (Infinite Loop)؟"
            options={[
              "useEffect(() => {}, [])",
              "useEffect(() => { setState(newState) }, [state])",
              "useEffect(() => {}, [value])",
              "useEffect(() => { return () => {} }, [])",
            ]}
            correctAnswer={1}
            explanation="إذا غيّر الـ Effect حالة تعتمد على نفسها، سيُسبب إعادة تصيير لا نهائية. الحل هو فصل الاهتمامات."
          />
        </LessonSection>

        <LessonSection title="تحدي عملية">
          <Challenge
            title="بناء مؤقت متقدم + جلب بيانات"
            description="أنشئ تطبيق مؤقت يدعم العد التنازلي مع جلب بيانات من API"
            tasks={[
              "أنشئ مكون Timer مع عد تنازلي من 60 ثانية",
              "أضف أزرار: تشغيل، إيقاف، إعادة تعيين",
              "استخدم useEffect لإنشاء المؤقت مع التنظيف",
              "أنشئ مكون UserList يجلب بيانات من JSONPlaceholder API",
              "أضف حقل بحث يُصفّي المستخدمين مع debounce",
              "تأكد من استخدام دالة التنظيف لإلغاء الطلبات غير المكتملة",
            ]}
          />
        </LessonSection>

        <LessonSection title="ورقة مرجعية سريعة">
          <CheatSheet
            items={[
              {
                title: "الصيغة الأساسية",
                description: "تنفيذ أثر جانبي بعد التصيير",
                code: `useEffect(() => {
  // الكود هنا
  return () => {
    // التنظيف هنا
  };
}, [deps]);`,
              },
              {
                title: "مرة واحدة فقط",
                description: "يُنفذ عند تحميل المكون فقط",
                code: `useEffect(() => {
  console.log("مرحبًا!");
}, []);`,
              },
              {
                title: "عند تغيير قيمة",
                description: "يُعاد تنفيذها عند تغيير القيمة",
                code: `useEffect(() => {
  fetchUser(userId);
}, [userId]);`,
              },
              {
                title: "مع مؤقت",
                description: "إنشاء مؤقت مع تنظيف",
                code: `useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  return () => clearInterval(id);
}, []);`,
              },
              {
                title: "مع حدث",
                description: "إضافة وإزالة مستمع أحداث",
                code: `useEffect(() => {
  const handler = (e) => console.log(e);
  window.addEventListener("resize", handler);
  return () => {
    window.removeEventListener("resize", handler);
  };
}, []);`,
              },
              {
                title: "مع AbortController",
                description: "إلغاء الطلبات غير المكتملة",
                code: `useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal });
  return () => controller.abort();
}, [url]);`,
              },
              {
                title: "في Next.js",
                description: "Server Components لجلب البيانات",
                code: `// Server Component
async function Page() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}`,
              },
            ]}
          />
        </LessonSection>
      </div>

      <LessonNavigation
        prevLesson={lessonInfo.prevLesson}
        prevStage={lessonInfo.prevLessonStage}
        nextLesson={lessonInfo.nextLesson}
        nextStage={lessonInfo.nextLessonStage}
      />
    </div>
  );
}
