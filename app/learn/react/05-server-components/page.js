import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ServerComponentsLesson() {
  const lessonInfo = getLessonBySlug("react", "05-server-components");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        <LessonSection title="ما هي Server Components؟">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Server Components</strong> (مكونات الخادم) هي مكونات
            تعمل{" "}
            <strong className="text-green-400">فقط على الخادم (Server)</strong>. هذه هي{" "}
            <strong className="text-white">الوضع الافتراضي</strong> في Next.js مع App Router.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Server Components يمكنها:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>الوصول المباشر لقاعدة البيانات</li>
            <li>قراءة ملفات النظام (File System)</li>
            <li>الاتصال بـ APIs الخاصة بالخادم</li>
            <li>استيراد مكتبات الخادم فقط (مثل fs، path)</li>
            <li>الوصول لمتغيرات البيئة السرية (SERVER-side env vars)</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-yellow-400">الأهم:</strong> كود Server Components{" "}
            <strong className="text-white">لا يُرسل للمتصفح أبدًا</strong>. هذا يعني أن
            الكود الخاص بك (بما في ذلك كلمات المرور، مفاتيح API، منطق الأعمال) يبقى على الخادم
            بأمان.
          </p>
          <CodeBlock
            code={`// ✅ Server Component (الوضع الافتراضي في Next.js)
// لا يحتاج لعلامة "use client"
// يمكنه الوصول لقاعدة البيانات مباشرة!

import { db } from '@/lib/database';

async function UserList() {
  // جلب البيانات من قاعدة البيانات مباشرة على الخادم
  const users = await db.user.findMany({
    select: { id: true, name: true, email: true }
  });

  return (
    <div>
      <h2>قائمة المستخدمين ({users.length})</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="ما هي Client Components؟">
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Client Components</strong> (مكونات العميل) هي مكونات
            تعمل{" "}
            <strong className="text-blue-400">
              على الخادم (أول تحميل) AND على المتصفح (بعد التحميل)
            </strong>
            . يجب إضافة{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-green-400">"use client"</code> في
            أعلى الملف.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Client Components يمكنها:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>
              استخدام <code className="bg-gray-800 px-2 py-1 rounded text-green-400">useState</code>{" "}
              و{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">useEffect</code>
            </li>
            <li>التفاعل مع أحداث المستخدم (onClick، onChange، onSubmit)</li>
            <li>استخدام browser APIs (localStorage، window، navigator)</li>
            <li>حالة UI المفاعل (Interactivity)</li>
            <li>
              استخدام hooks مخصصة (<code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                custom hooks
              </code>
              )
            </li>
          </ul>
          <CodeBlock
            code={`"use client"; // ✅ يجب أن يكون في أعلى الملف!

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>العداد: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        زِد العدد
      </button>
    </div>
  );
}

export default Counter;`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="لماذا هذا الفرق مهم؟">
          <p className="text-gray-300 leading-relaxed mb-4">
            الفصل بين Server و Client Components يُحدث ثورة في تطوير تطبيقات الويب من ناحيتين
            رئيسيتين:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <h4 className="text-green-400 font-semibold mb-2">
                ⚡ الأداء (Performance)
              </h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>📦 حزمة JavaScript أصغر (Smaller Bundle)</li>
                <li>🖥️ كود الخادم لا يُرسل للمتصفح</li>
                <li>⚡ تحميل أسرع للصفحات</li>
                <li>🎯 تحميل كود فقط لل components التفاعلية</li>
              </ul>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <h4 className="text-blue-400 font-semibold mb-2">🔒 الأمان (Security)</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>🛡️ المنطق الحساس يبقى على الخادم</li>
                <li>🔐 كلمات المرور لا تظهر في المتصفح</li>
                <li>🗝️ مفاتيح API آمنة</li>
                <li>💻 قاعدة البيانات محمية</li>
              </ul>
            </div>
          </div>

          <CodeBlock
            code={`// ❌ في React التقليدي: كل الكود يذهب للمتصفح
function App() {
  // ⚠️ هذا الكود كله يظهر في المتصفح!
  // حتى كلمات المرور والمنطق الحساس
  const API_KEY = "sk-secret-key-12345";
  
  return (
    <div>
      <ApiKeyDisplay apiKey={API_KEY} />
      <ProductList />
    </div>
  );
}

// ✅ في Next.js مع Server Components:
// - ProductList يعمل على الخادم (لا يظهر في المتصفح)
// - AddToCartButton يعمل على المتصفح (يظهر في المتصفح)
function App() {
  return (
    <div>
      <ProductList /> {/* Server Component - آمن */}
      <AddToCartButton /> {/* Client Component - تفاعلي */}
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="المشكلة التي يحلها">
          <p className="text-gray-300 leading-relaxed mb-4">
            في React التقليدي (قبل Next.js 13)،{" "}
            <strong className="text-white">كل كود React يُرسل للمتصفح</strong>. هذا يسبب
            مشكلتان رئيسيتان:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-4">
            <li>
              <strong className="text-white">حزم JavaScript ضخمة:</strong> كل المكونات، حتى
              تلك التي لا تحتاج تفاعل، تُرسل للمتصفح
            </li>
            <li>
              <strong className="text-white">مشاكل أمنية:</strong> كلمات المرور، مفاتيح API،
              ومنطق الأعمال يظهر في كود المتصفح
            </li>
          </ol>

          <CodeBlock
            code={`// ❌ في React التقليدي - كل شيء في المتصفح
function ProductPage() {
  // ⚠️ هذا الكود كله يظهر في المتصفح!
  const products = await fetch("https://api.store.com/products");
  
  // ⚠️ حتى هذا يظهر في المتصفح
  const discount = calculateDiscount(user会员等级);
  
  return (
    <div>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
      <AddToCartButton discount={discount} />
    </div>
  );
}

// ✅ في Next.js - الفصل الذكي
// Server Component: يجلب البيانات على الخادم
async function ProductPage() {
  const products = await fetch("https://api.store.com/products");
  
  return (
    <div>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
      <AddToCartButton /> {/* Client Component فقط للتفاعل */}
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="شرح بسيط - التشبيه">
          <p className="text-gray-300 leading-relaxed mb-4">
            لفهم الفرق، تخيل مطعمًا:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold mb-3">
                👨‍🍳 Server Component = الطباخ في المطبخ
              </h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>يعمل في المطبخ (الخادم)</li>
                <li>يجهز الوجبة من المكونات الأولية</li>
                <li>يستخدم أدوات المطبخ (قاعدة البيانات)</li>
                <li>لا يتفاعل مع الزبون مباشرة</li>
                <li>تسلم الزبون الطبق الجاهز فقط</li>
              </ul>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <h4 className="text-orange-400 font-semibold mb-3">
                🧑‍🍳 Client Component = النادل الذي ي交互 مع الزبون
              </h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>يتفاعل مع الزبون (المستخدم)</li>
                <li>يأخذ الطلب وينقله للمطبخ</li>
                <li>يعرض القائمة ويشرح الخيارات</li>
                <li>يرد على استفسارات الزبون</li>
                <li>يحتاج لمعلومات عن الزبون (حالة UI)</li>
              </ul>
            </div>
          </div>
          <CodeBlock
            code={`// 👨‍🍳 Server Component = الطباخ (يعمل على الخادم)
async function ProductList() {
  // الطباخ يجهز الوجبة (يجلب البيانات)
  const products = await db.products.findMany();
  
  return (
    <ul>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ul>
  );
  // الزبون (المستخدم) يرى القائمة الجاهزة فقط
}

// 🧑‍🍳 Client Component = النادل (يتفاعل مع الزبون)
"use client";
function AddToCartButton({ productId }) {
  const [isAdding, setIsAdding] = useState(false);
  
  // النادل يتفاعل مع الزبون (المستخدم)
  const handleClick = async () => {
    setIsAdding(true);
    await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ productId })
    });
    setIsAdding(false);
  };

  return (
    <button onClick={handleClick} disabled={isAdding}>
      {isAdding ? "جاري الإضافة..." : "أضف إلى السلة"}
    </button>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="مثال بسيط - المقارنة">
          <p className="text-gray-300 leading-relaxed mb-4">
            لنرَ نفس المكون كـ Server Component و كـ Client Component:
          </p>

          <h4 className="text-white font-semibold mt-6 mb-3">
            كـ Server Component (افتراضي)
          </h4>
          <CodeBlock
            code={`// ✅ Server Component - لا يحتاج "use client"
// يعمل على الخادم فقط - الكود لا يظهر في المتصفح

import { db } from '@/lib/database';

async function UserProfile({ userId }) {
  // جلب البيانات من قاعدة البيانات مباشرة
  const user = await db.user.findUnique({
    where: { id: userId }
  });

  // حسابsomething على الخادم
  const memberSince = new Date(user.createdAt).toLocaleDateString('ar-SA');

  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>البريد: {user.email}</p>
      <p>عضو منذ: {memberSince}</p>
    </div>
  );
}`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">
            كـ Client Component (باستخدام "use client")
          </h4>
          <CodeBlock
            code={`// ⚠️ Client Component - يحتاج "use client"
// يعمل على المتصفح - الكود يظهر في المتصفح

"use client";
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }
    fetchUser();
  }, [userId]);

  if (loading) return <p>جاري التحميل...</p>;

  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>البريد: {user.email}</p>
      <p>عضو منذ: {user.memberSince}</p>
    </div>
  );
}`}
            language="jsx"
          />
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
            <p className="text-gray-300">
              <strong className="text-green-400">الملاحظة:</strong> النسخة كـ Server Component
              أبسط وأسرع، ولا تحتاج لإدارة حالات التحميل!
            </p>
          </div>
        </LessonSection>

        <LessonSection title="مثال عملي - متجر إلكتروني">
          <p className="text-gray-300 leading-relaxed mb-4">
            مثال واقعي يجمع بين Server و Client Components في متجر إلكتروني:
          </p>
          <CodeBlock
            code={`// 📁 app/products/page.js - Server Component
import ProductCard from './ProductCard';
import AddToCartButton from './AddToCartButton';
import { db } from '@/lib/database';

async function ProductsPage() {
  // ✅ جلب البيانات على الخادم
  const products = await db.product.findMany({
    include: { category: true }
  });

  return (
    <div>
      <h1>المنتجات ({products.length})</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4">
            {/* Server Component: عرض المعلومات */}
            <ProductCard product={product} />
            {/* Client Component: التفاعل مع السلة */}
            <AddToCartButton productId={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

// 📁 app/products/ProductCard.js - Server Component
// لا يحتاج "use client" - يعمل فقط على الخادم
function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="price">{product.price} ر.س</span>
      <span className="category">{product.category.name}</span>
    </div>
  );
}

// 📁 app/products/AddToCartButton.js - Client Component
// يحتاج "use client" - يعمل على المتصفح
"use client";
import { useState } from 'react';

function AddToCartButton({ productId }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity })
    });
    setIsAdding(false);
    alert("تمت الإضافة إلى السلة!");
  };

  return (
    <div className="flex items-center gap-2 mt-2">
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-16 px-2 py-1 border rounded"
      />
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isAdding ? "جاري الإضافة..." : "أضف إلى السلة"}
      </button>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="القواعد المهمة">
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">
                القاعدة 1: "use client" يجب أن يكون في أعلى الملف
              </h4>
              <CodeBlock
                code={`// ✅ صحيح
"use client";
import { useState } from 'react';

function Button() {
  // ...
}

// ❌ خطأ - "use client" ليس في أعلى الملف
import { useState } from 'react';
"use client"; // ⚠️ هذا لن يعمل!

function Button() {
  // ...
}`}
                language="jsx"
              />
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">
                القاعدة 2: Server Components يمكنها استيراد Client Components
              </h4>
              <CodeBlock
                code={`// ✅ Server Component يمكنه استيراد Client Component
// app/page.js
import InteractiveButton from './InteractiveButton'; // "use client"

async function ServerComponent() {
  return (
    <div>
      <h1>مرحبًا</h1>
      <InteractiveButton /> {/* ✅ مسموح */}
    </div>
  );
}

// ❌ Client Component لا يمكنه استيراد Server Component
"use client";
import ServerComponent from './ServerComponent'; // ⚠️ خطأ!

function ClientComponent() {
  return (
    <div>
      <ServerComponent /> {/* ❌ هذا لن يعمل! */}
    </div>
  );
}`}
                language="jsx"
              />
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">
                القاعدة 3: Client Components تمرر فقط serializable props
              </h4>
              <CodeBlock
                code={`// ✅ صحيح - Props قابلة للتحويل
<ClientComponent
  userId={123}
  userName="أحمد"
  items={[1, 2, 3]}
  config={{ theme: "dark" }}
/>

// ❌ خطأ - Props غير قابلة للتحويل
<ClientComponent
  user={currentUser}           // ❌ كائن معقد
  onSave={handleSave}          // ❌ دالة
  dbConnection={database}     // ❌ اتصال قاعدة بيانات
/>`}
                language="jsx"
              />
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">
                القاعدة 4: Client Components لا يمكنها استخدام async/await مباشرة
              </h4>
              <CodeBlock
                code={`// ❌ خطأ - Client Component لا يمكنه استخدام async
"use client";
async function UserProfile({ userId }) {
  const user = await fetchUser(userId); // ⚠️ هذا لن يعمل!
  return <div>{user.name}</div>;
}

// ✅ صحيح - استخدم useEffect أو جلب البيانات في Server Component
"use client";
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  return <div>{user?.name}</div>;
}`}
                language="jsx"
              />
            </div>
          </div>
        </LessonSection>

        <LessonSection title="ماذا يحدث خلف الكواليس">
          <p className="text-gray-300 leading-relaxed mb-4">
            كيف يعمل Next.js عند دمج Server و Client Components:
          </p>
          <CodeBlock
            code={`// سلسلة الأحداث عند تحميل الصفحة:
//
// 1️⃣ الخادم (Server) يُصيّر جميع Server Components
//    ↓
// 2️⃣ يُرسل HTML + كود Client Components للمتصفح
//    ↓
// 3️⃣ المتصفح يعرض HTML فورًا (أداء عالي!)
//    ↓
// 4️⃣ JavaScript يُحمّل في الخلفية
//    ↓
// 5️⃣ React يُشبع (Hydrate) Client Components
//    ↓
// 6️⃣ التطبيق يصبح تفاعليًا بالكامل
//
// النتيجة: المستخدم يرى المحتوى فورًا (SSR)
// ثم يصبح التطبيق تفاعليًا (Hydration)`}
            language="javascript"
          />
        </LessonSection>

        <LessonSection title="أمثلة حقيقية من المنصة">
          <p className="text-gray-300 leading-relaxed mb-4">
            في منصتنا التعليمية، نستخدم Server و Client Components معًا:
          </p>
          <CodeBlock
            code={`// 📁 components/CodeBlock.js - Server Component (async)
// يُعالج الكود على الخادم باستخدام shiki
import { codeToHtml } from 'shiki';

async function CodeBlock({ code, language = "jsx" }) {
  // ✅ المعالجة على الخادم - لا تُرسل للمتصفح
  const html = await codeToHtml(code, {
    lang: language,
    theme: 'dark-plus'
  });

  return (
    <div 
      className="rounded-lg overflow-hidden"
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
}

// 📁 components/Quiz.js - Client Component
// يحتاج تفاعل المستخدم مع الخيارات
"use client";
import { useState } from 'react';

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <h3>{questions[currentQuestion].question}</h3>
      {questions[currentQuestion].options.map((option, i) => (
        <button key={i} onClick={() => handleAnswer(i)}>
          {option}
        </button>
      ))}
      <button onClick={() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      }}>
        السؤال التالي
      </button>
    </div>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="الأخطاء الشائعة">
          <h4 className="text-white font-semibold mb-3">
            1. استخدام "use client" في كل مكان
          </h4>
          <CodeBlock
            code={`// ❌ خطأ شائع: إضافة "use client" لكل مكون
"use client";
function Header() { return <header>...</header>; }

"use client";
function Footer() { return <footer>...</footer>; }

"use client";
function ProductCard({ product }) {
  return <div>{product.name}</div>;
}

// ✅ صحيح: ابقَ Server Components كافتراضي
function Header() { return <header>...</header>; } // Server
function Footer() { return <footer>...</footer>; } // Server
function ProductCard({ product }) {
  return <div>{product.name}</div>;
} // Server

// فقط أضف "use client" عند الحاجة للتفاعل
"use client";
function AddToCartButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count+1)}>شراء</button>;
}`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">
            2. محاولة استخدام useState في Server Component
          </h4>
          <CodeBlock
            code={`// ❌ خطأ: Server Component لا يدعم hooks
async function UserList() {
  const [users, setUsers] = useState([]); // ⚠️ خطأ!
  
  useEffect(() => { // ⚠️ خطأ!
    fetchUsers().then(setUsers);
  }, []);

  return <div>{/* ... */}</div>;
}

// ✅ صحيح: Server Component يجلب البيانات مباشرة
async function UserList() {
  const users = await db.user.findMany(); // ✅ مباشر

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">
            3. محاولة استيراد Server Component في Client Component
          </h4>
          <CodeBlock
            code={`// ❌ خطأ: Client Component لا يمكنه استيراد Server Component
"use client";
import ServerComponent from './ServerComponent';

function ClientPage() {
  return <ServerComponent />; // ⚠️ هذا لن يعمل!
}

// ✅ صحيح: Server Component يستورد Client Component
// ServerComponent.js
import ClientComponent from './ClientComponent';

function ServerPage() {
  return <ClientComponent />; // ✅ يعمل
}

// ✅ صحيح: استخدم children لتمرير Server Component
function ClientWrapper({ children }) {
  const [show, setShow] = useState(true);
  return show ? children : null;
}

// الاستخدام
async function Page() {
  return (
    <ClientWrapper>
      <ServerComponent /> {/* ✅ يعمل عبر children */}
    </ClientWrapper>
  );
}`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">
            4. محاولة تمرير functions كـ props
          </h4>
          <CodeBlock
            code={`// ❌ خطأ: لا يمكن تمرير functions من Server إلى Client
// Server Component
async function Page() {
  const handleSave = async (data) => {
    await db.save(data); // ❌ لا يمكن تمرير هذه الدالة
  };

  return <SaveButton onSave={handleSave} />;
}

// Client Component
"use client";
function SaveButton({ onSave }) {
  return <button onClick={onSave}>حفظ</button>; // ❌ onSave غير موجود
}

// ✅ صحيح: استخدم Server Actions أو API Routes
// Server Component
async function Page() {
  return <SaveButton />;
}

// Client Component
"use client";
function SaveButton() {
  const handleSave = async () => {
    // استخدام Server Action
    await saveData(formData);
  };
  return <button onClick={handleSave}>حفظ</button>;
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="أفضل الممارسات">
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>
              <strong className="text-white">ابدأ كـ Server Component دائمًا:</strong> أضف{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">"use client"</code>{" "}
              فقط عند الحاجة للتفاعل
            </li>
            <li>
              <strong className="text-white">احتفظ بـ Client Components صغيرة:</strong> كل
              Client Component يحمل حزمة JS خاصة به
            </li>
            <li>
              <strong className="text-white">افصل التفاعل عن العرض:</strong> اجعل العرض Server
              Component والتفاعل Client Component
            </li>
            <li>
              <strong className="text-white">استخدم Server Actions للتعامل مع النماذج:</strong>{" "}
              بدلاً من API Routes التقليدية
            </li>
            <li>
              <strong className="text-white">مرر فقط serializable data:</strong> لا تمرر
              functions أو objects معقدة
            </li>
            <li>
              <strong className="text-white">افهم Hydration:</strong> Client Components تُشبع
              بعد التحميل، لذا تجنب التأثيرات المرئية أثناء التحميل
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="ملخص">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <ul className="text-gray-300 space-y-3">
              <li>
                ✅ <strong className="text-white">Server Components</strong> تعمل فقط على
                الخادم (الوضع الافتراضي)
              </li>
              <li>
                ✅ <strong className="text-white">Client Components</strong> تعمل على الخادم
                والمتصفح (تحتاج "use client")
              </li>
              <li>
                ✅ <strong className="text-white">Server Components</strong> يمكنها الوصول
                لقاعدة البيانات مباشرة
              </li>
              <li>
                ✅ <strong className="text-white">Client Components</strong> تدعم hooks
                والأحداث التفاعلية
              </li>
              <li>
                ✅ <strong className="text-white">Server Components</strong> يمكنها استيراد
                Client Components
              </li>
              <li>
                ✅ <strong className="text-white">لا العكس</strong> - Client لا يمكنها استيراد
                Server
              </li>
              <li>
                ✅ <strong className="text-white">النتيجة:</strong> أداء أفضل + أمان أعلى +
                تجربة مستخدم أسرع
              </li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="اختبار المعرفة">
          <Quiz
            question="ما هو الوضع الافتراضي للمكونات في Next.js مع App Router؟"
            options={[
              "Client Component",
              "Server Component",
              "Both",
              "يعتمد على حجم المكون",
            ]}
            correctAnswer={1}
            explanation="Server Components هي الوضع الافتراضي في Next.js مع App Router. لا تحتاج لإضافة أي علامة."
          />
          <Quiz
            question="ما الفرق الرئيسي بين Server و Client Components؟"
            options={[
              "Server Components أسرع فقط",
              "Server Components تعمل على الخادم فقط، Client Components تعمل على الخادم والمتصفح",
              "Client Components لا تحتاج JavaScript",
              "Server Components لا تدعم JSX",
            ]}
            correctAnswer={1}
            explanation="Server Components تعمل فقط على الخادم، كودها لا يُرسل للمتصفح. Client Components تعمل على الخادم (أول تحميل) والمتصفح (بعد التحميل)."
          />
          <Quiz
            question="أين يجب وضع علامة 'use client'؟"
            options={[
              "في نهاية الملف",
              "في أي مكان في الملف",
              "في أعلى الملف قبل أي import",
              "في كل مكون فرعي",
            ]}
            correctAnswer={2}
            explanation="يجب وضع 'use client' في أعلى الملف قبل أي import ليعمل بشكل صحيح."
          />
          <Quiz
            question="هل يمكن لـ Client Component استيراد Server Component؟"
            options={[
              "نعم، دائمًا",
              "نعم، فقط مع async/await",
              "لا، هذا غير مدعوم",
              "نعم، إذا كان المكون فارغًا",
            ]}
            correctAnswer={2}
            explanation="لا يمكن لـ Client Component استيراد Server Component مباشرة. ولكن Server Components يمكنها استيراد Client Components."
          />
          <Quiz
            question="لماذا نستخدم Server Components في Next.js؟"
            options={[
              "لتحسين أداء الأمان فقط",
              "لتحسين الأداء (حجم JS أصغر) والأمان (الكود يبقى على الخادم)",
              "لأن React يطلب ذلك",
              "لتجربة مستخدم أفضل فقط",
            ]}
            correctAnswer={1}
            explanation="Server Components تُحسن الأداء (حجم JS أصغر، تحميل أسرع) والأمان (الكود الحساس يبقى على الخادم)."
          />
        </LessonSection>

        <LessonSection title="تحدي عملية">
          <Challenge
            title="تحديد Server vs Client Components"
            description="حلل المكونات التالية وحدد أيها Server و أيها Client"
            tasks={[
              "-analyze: مكون Header يعرض شعار الموقع وروابط التنقل الثابتة (أجب: Server Component)",
              "analyze: مكون SearchBar مع حقل إدخال وقائمة منسدلة (أجب: Client Component)",
              "analyze: مكون ProductList يجلب بيانات من قاعدة البيانات ويعرضها (أجب: Server Component)",
              "analyze: مكون LoginForm مع حقول إدخال وزر تسجيل دخول (أجب: Client Component)",
              "analyze: مكون Footer يعرض معلومات حقوق النشر (أجب: Server Component)",
              "-analyze: مكون ShoppingCart مع أزرار +/- وحساب المجموع (أجب: Client Component)",
              "-analyze: مكون BlogPost يعرض مقالًا من CMS (أجب: Server Component)",
              "-analyze: مكون ThemeToggle للتبديل بين الوضع الداكن والفاتح (أجب: Client Component)",
            ]}
          />
        </LessonSection>

        <LessonSection title="ورقة مرجعية سريعة">
          <CheatSheet
            items={[
              {
                title: "Server Component (افتراضي)",
                description: "يعمل فقط على الخادم، لا يحتاج 'use client'",
                code: `async function ServerComp() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}`,
              },
              {
                title: "Client Component",
                description: "يحتاج 'use client' في أعلى الملف",
                code: `"use client";
import { useState } from 'react';

function ClientComp() {
  const [state, setState] = useState();
  return <button onClick={() => setState(1)}>اضغط</button>;
}`,
              },
              {
                title: "Server يستورد Client",
                description: "Server Components تستورد Client Components",
                code: `import ClientButton from './ClientButton';

async function Page() {
  return <ClientButton />;
}`,
              },
              {
                title: "Client لا تستورد Server",
                description: "لا يمكن لـ Client Component استيراد Server",
                code: `// ❌ هذا لن يعمل!
"use client";
import ServerComp from './ServerComp';

function ClientPage() {
  return <ServerComp />;
}`,
              },
              {
                title: "Server Component مع بيانات",
                description: "جلب البيانات مباشرة على الخادم",
                code: `async function ProductList() {
  const products = await db.products.findMany();
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}`,
              },
              {
                title: "Client Component مع تفاعل",
                description: "استخدام hooks والأحداث",
                code: `"use client";
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}`,
              },
              {
                title: "Server Action مع Client",
                description: "استخدام Server Action من Client Component",
                code: `"use client";
import { submitForm } from './actions';

function Form() {
  return (
    <form action={submitForm}>
      <input name="email" type="email" />
      <button type="submit">إرسال</button>
    </form>
  );
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
