// =====================================================
// ملف: page.js (الدرس الثالث: مكونات الخادم والعميل)
// المكان: app/learn/nextjs/03-server-and-client-components/page.js
// الوظيفة: مراجعة Server vs Client Components في سياق Next.js
// URL: /learn/nextjs/03-server-and-client-components
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ServerAndClientComponents() {
  const lessonInfo = getLessonBySlug("nextjs", "03-server-and-client-components");

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
        {/* القسم الأول: مراجعة سريعة */}
        {/* ========================================== */}
        <LessonSection title="مراجعة سريعة: Server vs Client Components">
          <p>
            في درس React، تعلمت الفرق بين Server Components و Client Components. دعنا نُراجع بسرعة:
          </p>

          <ul>
            <li><strong>Server Components</strong>: تُنفّذ على الخادم فقط. تصل إلى قاعدة البيانات مباشرة، تقرأ الملفات، وتستخدم مفاتيح API بأمان.</li>
            <li><strong>Client Components</strong>: تُنفّذ على الخادم <strong>ثم</strong> على المتصفح. تحتاجها للتفاعل: <code>useState</code>، <code>useEffect</code>، معالجة الأحداث.</li>
          </ul>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تذكير سريع:
            </p>
            <p>
              Server Components <strong>لا تُرسل JavaScript</strong> إلى المتصفح. هذا يعني أحجاماً أصغر وصفحات أسرع.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: في سياق Next.js */}
        {/* ========================================== */}
        <LessonSection title="في سياق Next.js">
          <p>
            في Next.js مع App Router، كل المكونات هي <strong>Server Components بشكل افتراضي</strong>. هذا عكس Pages Router القديم حيث كل شيء كان Client Component.
          </p>

          <p>لتحويل أي مكون إلى Client Component، أضف السطر التالي في أعلى الملف:</p>

          <CodeBlock
            language="jsx"
            code={`"use client";

// الآن هذا المكون هو Client Component
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>العدد: {count}</p>
      <button onClick={() => setCount(count + 1)}>زيادة</button>
    </div>
  );
}`}
          />

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔔 قاعدة ذهبية:
            </p>
            <p>
              لا تُضف <code>"use client"</code> إلا عندما تحتاجه فعلاً. المكونات التي لا تحتاج لتفاعل يجب أن تبقى Server Components.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: متى نستخدم Client Component؟ */}
        {/* ========================================== */}
        <LessonSection title="متى نستخدم Client Component؟">
          <p>استخدم <code>"use client"</code> عندما يحتاج المكون إلى واحد أو أكثر من التالي:</p>

          <ul>
            <li><strong>State وإدارة الحالة</strong>: استخدام <code>useState</code>، <code>useReducer</code>.</li>
            <li><strong>الآثار الجانبية</strong>: استخدام <code>useEffect</code> للاتصال بـ API أو الـ DOM.</li>
            <li><strong>معالجة الأحداث</strong>: <code>onClick</code>، <code>onSubmit</code>، <code>onChange</code>.</li>
            <li><strong>Browser APIs</strong>: <code>localStorage</code>، <code>navigator</code>، <code>window</code>.</li>
            <li><strong>Custom Hooks</strong>: إذا كان الـ hook يستخدم أي شيء مما سبق.</li>
            <li><strong>Context Providers</strong>: مضيفي الـ Context يجب أن يكونوا Client Components.</li>
          </ul>

          <p><strong>مثال: مكون عداد (Client Component)</strong></p>

          <CodeBlock
            language="jsx"
            code={`"use client";

import { useState } from "react";

export default function LikeButton({ postId }) {
  const [likes, setLikes] = useState(0);

  async function handleLike() {
    const res = await fetch("/api/like", {
      method: "POST",
      body: JSON.stringify({ postId }),
    });
    if (res.ok) setLikes(likes + 1);
  }

  return (
    <button onClick={handleLike}>
      ❤️ {likes} إعجاب
    </button>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: متى نستخدم Server Component؟ */}
        {/* ========================================== */}
        <LessonSection title="متى نستخدم Server Component؟">
          <p>استخدم Server Components دائماً إلا إذا كان لديك سبب لاستخدام Client Component. السيناريوهات المثالية:</p>

          <ul>
            <li><strong>جلب البيانات من قاعدة البيانات</strong>: الوصول المباشر لـ DB بدون API.</li>
            <li><strong>قراءة الملفات</strong>: قراءة ملفات JSON أو MDX مباشرة.</li>
            <li><strong>معلومات حساسة</strong>: مفاتيح API، كلمات مرور، بيانات خاصة.</li>
            <li><strong>عرض محتوى ثابت</strong>: نصوص، صور، تخطيطات - أي شيء لا يتفاعل.</li>
            <li><strong>تحسين SEO</strong>: Server Components تُرسل HTML جاهز لمحركات البحث.</li>
          </ul>

          <p><strong>مثال: صفحة منتج (Server Component)</strong></p>

          <CodeBlock
            language="jsx"
            code={`// app/products/[slug]/page.js - Server Component (افتراضي)
import { getProductBySlug } from "@/lib/db";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  // الوصول المباشر لقاعدة البيانات - آمن تماماً
  const product = await getProductBySlug(slug);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>السعر: {product.price} ريال</p>

      {/* هذا المكون client يتفاعل مع المستخدم */}
      <AddToCartButton productId={product.id} />
    </div>
  );
}

// AddToCartButton.js - Client Component للتفاعل
"use client";

export function AddToCartButton({ productId }) {
  function handleAdd() {
    console.log("أضيف المنتج:", productId);
  }

  return <button onClick={handleAdd}>أضف للسلة</button>;
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: Interleaving المكونات */}
        {/* ========================================== */}
        <LessonSection title="Interleaving: مزج Server و Client Components">
          <p>
            <strong>Interleaving</strong> هو قدرة Next.js على مزج Server Components و Client Components في نفس الشجرة.
          </p>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ✅ القاعدة الأساسية:
            </p>
            <p>
              <strong>Server Component</strong> يمكنه <strong>استيراد</strong> Client Component (كطفل أو محتوى).
              <br />
              <strong>Client Component</strong> <strong>لا يمكنه</strong> استيراد Server Component مباشرة.
            </p>
          </div>

          <p><strong>صحيح ✅:</strong></p>

          <CodeBlock
            language="jsx"
            code={`// ✅ ServerComponent.js
// Server Component يمكنه استيراد Client Component
import ClientComponent from "./ClientComponent";

export default function ServerComponent() {
  return (
    <div>
      <h1>مرحباً من الخادم</h1>
      <ClientComponent /> {/* هذا مسموح ✅ */}
    </div>
  );
}`}
          />

          <p><strong>خطأ ❌:</strong></p>

          <CodeBlock
            language="jsx"
            code={`// ❌ ClientComponent.js
"use client";

// Client Component لا يمكنه استيراد Server Component
import ServerComponent from "./ServerComponent"; // خطأ ❌

export default function ClientComponent() {
  return (
    <div>
      <ServerComponent /> {/* هذا سيسبب خطأ */}
    </div>
  );
}`}
          />

          <p><strong>كيف تحل هذه المشكلة؟</strong></p>
          <p>بدلاً من استيراد Server Component مباشرة، مرره كـ <strong>children</strong> (prop):</p>

          <CodeBlock
            language="jsx"
            code={`// الحل: ClientComponent يقبل children
"use client";

export default function ClientComponent({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>تبديل</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

// ServerComponent يمرر Server Child داخل Client
import ClientComponent from "./ClientComponent";
import ServerContent from "./ServerContent";

export default function Page() {
  return (
    <ClientComponent>
      <ServerContent /> {/* هذا مسموح ✅ - يُمرر كـ children */}
    </ClientComponent>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: Pattern شائع */}
        {/* ========================================== */}
        <LessonSection title="Pattern شائع: Server يجلب البيانات، Client يعرض التفاعل">
          <p>
            هذا هو الـ pattern الأكثر شيوعاً واستخداماً في Next.js. الفكرة: <strong>Server Component</strong> يتولى جلب البيانات ومعالجة المنطق الحساس، ثم يمرر النتائج كـ props إلى <strong>Client Component</strong> الذي يتولى التفاعل مع المستخدم.
          </p>

          <CodeBlock
            language="jsx"
            code={`// صفحة المنتجات (Server Component)
// app/products/page.js
import { getProducts } from "@/lib/db";
import ProductCard from "./ProductCard";

export default async function ProductsPage() {
  // جلب البيانات على الخادم - آمن وسريع
  const products = await getProducts();

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// ProductCard (Server Component) - مجرد عرض
export function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price} ريال</p>
      <AddToCartButton productId={product.id} />
    </div>
  );
}

// AddToCartButton (Client Component) - تفاعل المستخدم
"use client";

export function AddToCartButton({ productId }) {
  function handleAdd() {
    alert("أضيف المنتج: " + productId);
  }

  return <button onClick={handleAdd}>أضف للسلة</button>;
}`}
          />

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 لماذا هذا pattern؟
            </p>
            <p>
              Server Component يجلب البيانات مباشرة (بدون API layer) ويُرسل HTML جاهز. Client Component يُضيف التفاعل فقط. النتيجة: صفحة سريعة جداً تظهر فوراً ثم تُصبح تفاعلية.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: مثال عملي */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: ProductPage">
          <p>لنرى مثالاً متكاملاً من الصفحة الرئيسية إلى زر الشراء:</p>

          <CodeBlock
            language="jsx"
            code={`// =============================================
// 1. ProductPage - Server Component (يجلب البيانات)
// app/products/[slug]/page.js
// =============================================
import { getProductBySlug } from "@/lib/db";
import ProductDetails from "./ProductDetails";
import AddToCartButton from "./AddToCartButton";
import RelatedProducts from "./RelatedProducts";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const related = await getRelatedProducts(product.category);

  return (
    <div>
      {/* ProductDetails يمكن أن يكون Server Component */}
      <ProductDetails product={product} />

      {/* AddToCartButton هو Client Component */}
      <AddToCartButton productId={product.id} />

      {/* RelatedProducts يمكنه جلب البيانات أيضاً */}
      <RelatedProducts products={related} />
    </div>
  );
}

// =============================================
// 2. ProductDetails - Server Component (عرض فقط)
// =============================================
export function ProductDetails({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p className="text-2xl font-bold">{product.price} ريال</p>
    </div>
  );
}

// =============================================
// 3. AddToCartButton - Client Component (تفاعل)
// =============================================
"use client";

import { useState } from "react";

export default function AddToCartButton({ productId }) {
  const [added, setAdded] = useState(false);

  async function handleAddToCart() {
    await fetch("/api/cart/add", {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
    setAdded(true);
  }

  return (
    <button
      onClick={handleAddToCart}
      style={{
        background: added ? "green" : "blue",
        color: "white",
        padding: "0.5rem 1rem",
      }}
    >
      {added ? "✓ تمت الإضافة" : "أضف للسلة"}
    </button>
  );
}

// =============================================
// 4. RelatedProducts - Server Component (جلب وعرض)
// =============================================
export function RelatedProducts({ products }) {
  return (
    <div>
      <h2>منتجات مشابهة</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {products.map((p) => (
          <div key={p.id}>{p.name}</div>
        ))}
      </div>
    </div>
  );
}`}
          />

          <p>لاحظ كيف توزعت المسؤوليات:</p>
          <ul>
            <li><strong>ProductPage</strong> (Server): يجلب البيانات وينسق المكونات.</li>
            <li><strong>ProductDetails</strong> (Server): يعرض المعلومات فقط.</li>
            <li><strong>AddToCartButton</strong> (Client): يتفاعل مع المستخدم ويرسل طلبات.</li>
            <li><strong>RelatedProducts</strong> (Server): لا يحتاج لتفاعل.</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: Context Providers */}
        {/* ========================================== */}
        <LessonSection title="Context Providers و use client">
          <p>
            إذا كنت تستخدم React Context (مثل ThemeContext أو AuthContext)، يجب أن يكون الـ Provider ملفوفاً بـ <code>"use client"</code>.
          </p>

          <p>الـ pattern الموصى به: أنشئ ملف <code>providers.js</code> يجمع كل الـ Providers:</p>

          <CodeBlock
            language="jsx"
            code={`// app/providers.js
"use client";

import { createContext, useContext, useState } from "react";

// 1. إنشاء Context
const ThemeContext = createContext();

// 2. Provider (يجب أن يكون "use client")
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Hook لاستخدام الـ Context
export function useTheme() {
  return useContext(ThemeContext);
}

// =============================================
// app/layout.js - استخدام الـ Provider (Server Component)
// =============================================
import { ThemeProvider } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// =============================================
// أي Client Component يمكنه استخدام الـ Context
// =============================================
"use client";
import { useTheme } from "./providers";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      تغيير الثيم: {theme}
    </button>
  );
}`}
          />

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔔 مهم:
            </p>
            <p>
              Providers يجب أن تكون Client Components لأنها تستخدم <code>useState</code> و <code>createContext</code>. لكن <code>layout.js</code> يبقى Server Component ويستورد Provider فقط.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: ماذا يحدث خلف الكواليس */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>عندما يزور مستخدم صفحة تحتوي على Server و Client Components، يحدث التالي:</p>

          <ol>
            <li><strong>الخادم يُنفّذ جميع Server Components</strong>: يجلب البيانات، يقرأ الملفات، وينتج HTML و RSC Payload (JSON خاص بـ Server Components).</li>
            <li><strong>يُرسل HTML + RSC Payload</strong>: المتصفح يستلم HTML جاهز للعرض الفوري.</li>
            <li><strong>الـ Client Components تُهيأ (Hydration)</strong>: Next.js يُحمّل JavaScript الخاص بـ Client Components ويربط الأحداث (onClick، useState...).</li>
            <li><strong>التطبيق يصبح تفاعلياً</strong>: المستخدم يمكنه التفاعل مع المكونات.</li>
          </ol>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 نتيجة هذا:
            </p>
            <p>
              المستخدم يرى الصفحة <strong>فوراً</strong> (HTML جاهز) حتى لو كان الـ JavaScript لا يزال يُحمّل. هذا يُحسّن تجربة المستخدم بشكل كبير.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul>
            <li>
              <strong>❌ إضافة "use client" لكل المكونات:</strong>
              <br />
              كثير من المطورين يضيفون <code>"use client"</code> تلقائياً لكل شيء. هذا يُفقدنا فوائد Server Components ويُزيد حجم JavaScript.
            </li>
            <li>
              <strong>❌ الوصول لـ Browser APIs في Server Components:</strong>
              <br />
              استخدام <code>window</code> أو <code>localStorage</code> في Server Component يُسبب خطأ. هذه الأشياء موجودة فقط في المتصفح.
            </li>
            <li>
              <strong>❌ استيراد Server Component داخل Client Component:</strong>
              <br />
              سيُسبب خطأ. استخدم <code>children</code> أو <code>props</code> لتمرير Server Components إلى Client Components.
            </li>
            <li>
              <strong>❌ نسيان "use client" مع Context:</strong>
              <br />
              Context API يحتاج <code>createContext</code> و <code>useState</code> وكلها Client-side فقط.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li>
              <strong>✅ افترض أن كل مكون هو Server Component:</strong>
              <br />
              ابدأ بدون <code>"use client"</code>. أضفها فقط عندما تحتاجها فعلاً.
            </li>
            <li>
              <strong>✅ اجعل حدود "use client" منخفضة قدر الإمكان:</strong>
              <br />
              بدلاً من جعل صفحة كاملة Client Component، اجعل الأزرار الصغيرة فقط Client Components.
            </li>
            <li>
              <strong>✅ استخدم children لتمرير Server إلى Client:</strong>
              <br />
              إذا احتاج Client Component لعرض محتوى Server، استخدم prop <code>children</code>.
            </li>
            <li>
              <strong>✅ افصل الـ Data Fetching عن الـ Interactivity:</strong>
              <br />
              Server لجلب البيانات، Client للتفاعل. هذا هو أقوى pattern في Next.js.
            </li>
            <li>
              <strong>✅ أنشئ ملف providers.js منفصل:</strong>
              <br />
              جمع كل الـ Context Providers في ملف واحد يُسهّل الصيانة.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <ul className="space-y-3">
              <li>كل المكونات في App Router هي <strong style={{ color: "var(--primary)" }}>Server Components افتراضياً</strong>.</li>
              <li>أضف <code>"use client"</code> فقط عندما تحتاج <strong>useState</strong>، <strong>useEffect</strong>، أو معالجة الأحداث.</li>
              <li><strong>Server Components</strong> مثالية لجلب البيانات والمنطق الحساس.</li>
              <li><strong>Client Components</strong> ضرورية للتفاعل مع المستخدم.</li>
              <li>Server يمكنه استيراد Client. العكس <strong>غير صحيح</strong> - استخدم <code>children</code> بدلاً من ذلك.</li>
              <li>الـ pattern الأقوى: Server يجلب البيانات ← يمررها لـ Client للتفاعل.</li>
              <li>Context Providers يجب أن تكون Client Components.</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث عشر: Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هو النوع الافتراضي للمكونات في Next.js App Router؟"
          options={[
            "Client Component",
            "Server Component",
            "Hybrid Component",
            "Static Component",
          ]}
          correctAnswer={1}
          explanation="في App Router، كل المكونات هي Server Components بشكل افتراضي. تحتاج إلى إضافة 'use client' صراحةً لتحويلها إلى Client Components."
        />

        <Quiz
          question="أي من التالي يتطلب تحويل المكون إلى Client Component؟"
          options={[
            "جلب البيانات من قاعدة البيانات",
            "عرض نص ثابت",
            "استخدام useState",
            "قراءة ملف JSON",
          ]}
          correctAnswer={2}
          explanation="useState هو Hook يعمل فقط في المتصفح (Client-side). لذلك يحتاج إلى 'use client'. الخيارات الأخرى تعمل على الخادم."
        />

        <Quiz
          question="ماذا يحدث إذا حاول Client Component استيراد Server Component مباشرة؟"
          options={[
            "يعمل بشكل طبيعي",
            "سيحدث خطأ - لا يمكن استيراد Server داخل Client",
            "يتحول تلقائياً إلى Client Component",
            "يتحول تلقائياً إلى Server Component",
          ]}
          correctAnswer={1}
          explanation="Client Component لا يمكنه استيراد Server Component. الحل هو تمرير Server Component كـ children أو prop إلى Client Component."
        />

        <Quiz
          question="أي pattern هو الأفضل لبناء صفحات Next.js؟"
          options={[
            "جعل كل الصفحة Client Component واحد كبير",
            "جعل كل الصفحة Server Component واحد كبير",
            "Server يجلب البيانات ← يمررها لـ Client للتفاعل",
            "Client يجلب البيانات و Server يعرضها",
          ]}
          correctAnswer={2}
          explanation="أفضل pattern هو أن Server Component يجلب البيانات (سريع وآمن) ثم يمرر النتائج لـ Client Component صغير للتفاعل."
        />

        <Quiz
          question="لماذا يجب أن يكون Context Provider ملفوفاً بـ 'use client'؟"
          options={[
            "لأنه يستخدم Browser APIs",
            "لأنه يستخدم useState و createContext",
            "لأنه يحتاج لجلب البيانات",
            "لأنه يحتاج لقراءة ملفات",
          ]}
          correctAnswer={1}
          explanation="Context Provider يستخدم createContext و useState (أو useReducer)، وكلها حصرية على Client-side. لذلك يجب إضافة 'use client'."
        />

        {/* ========================================== */}
        {/* القسم الرابع عشر: تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: تحديد نوع كل مكون"
          description={
            <div>
              <p>لديك تطبيق مدونة بالمكونات التالية. حدد أي منها يجب أن يكون Server Component وأيها Client Component:</p>
              <ol className="list-decimal pr-6 space-y-2 mt-2">
                <li><strong>BlogPostPage</strong> - يجلب المقال من قاعدة البيانات ويعرضه.</li>
                <li><strong>PostContent</strong> - يعرض عنوان المقال ومحتواه (نص فقط).</li>
                <li><strong>LikeButton</strong> - زر إعجاب يتغير لونه عند النقر.</li>
                <li><strong>CommentSection</strong> - يعرض التعليقات ويسمح بإضافة تعليق جديد.</li>
                <li><strong>AuthorInfo</strong> - يعرض اسم الكاتب وصورته (بيانات من قاعدة البيانات).</li>
                <li><strong>ShareButtons</strong> - أزرار مشاركة على وسائل التواصل (تنبيه عند النقر).</li>
              </ol>
            </div>
          }
        >
          <CodeBlock
            language="jsx"
            code={`// الإجابة الصحيحة:

// 1. BlogPostPage → Server Component
//    يجلب البيانات من DB - مثالي للخادم
export default async function BlogPostPage({ params }) {
  const post = await db.getPost(params.slug);
  return (
    <div>
      <PostContent post={post} />
      <LikeButton postId={post.id} />
      <CommentSection postId={post.id} />
      <AuthorInfo authorId={post.authorId} />
      <ShareButtons title={post.title} />
    </div>
  );
}

// 2. PostContent → Server Component (عرض فقط)
export function PostContent({ post }) {
  return <article><h1>{post.title}</h1><p>{post.content}</p></article>;
}

// 3. LikeButton → Client Component (useState)
"use client";
export function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>;
}

// 4. CommentSection → Client Component (useState + events)
"use client";
export function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  return <div>...</div>;
}

// 5. AuthorInfo → Server Component (عرض فقط)
export function AuthorInfo({ authorId }) {
  const author = await db.getAuthor(authorId);
  return <div><img src={author.avatar} /><span>{author.name}</span></div>;
}

// 6. ShareButtons → Client Component (onClick)
"use client";
export function ShareButtons({ title }) {
  return <button onClick={() => alert("مشاركة: " + title)}>مشاركة</button>;
}`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* القسم الخامس عشر: Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص Server vs Client Components">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>Server Component ✅</p>
              <ul className="text-sm space-y-1">
                <li>✅ افتراضي (لا يحتاج "use client")</li>
                <li>✅ يصل إلى DB والملفات مباشرة</li>
                <li>✅ مفاتيح API آمنة</li>
                <li>✅ يُحسّن SEO</li>
                <li>✅ لا يُرسل JavaScript إضافي</li>
                <li>❌ لا يمكنه استخدام useState/useEffect</li>
                <li>❌ لا يمكنه التعامل مع الأحداث</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>Client Component 🔵</p>
              <ul className="text-sm space-y-1">
                <li>✅ يتطلب "use client" في أعلى الملف</li>
                <li>✅ يمكنه استخدام useState/useEffect</li>
                <li>✅ يمكنه التعامل مع الأحداث</li>
                <li>✅ يمكنه استخدام Browser APIs</li>
                <li>❌ يزيد حجم JavaScript</li>
                <li>❌ لا يمكنه الوصول المباشر لـ DB</li>
                <li>❌ لا يمكنه استيراد Server Component</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>قواعد Interleaving:</p>
              <ul className="text-sm space-y-1">
                <li>Server → Client: <strong>مسموح ✅</strong></li>
                <li>Client → Server: <strong>ممنوع ❌</strong></li>
                <li>الحل: استخدم <code>children</code> لتمرير Server لـ Client</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>متى تختار Client:</p>
              <ul className="text-sm space-y-1">
                <li>useState, useReducer</li>
                <li>useEffect</li>
                <li>onClick, onSubmit</li>
                <li>localStorage, window</li>
                <li>Context Providers</li>
                <li>Custom Hooks (إذا تستخدم أي مما سبق)</li>
              </ul>
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