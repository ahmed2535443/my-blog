// =====================================================
// ملف: page.js (الدرس السادس: نظام التخزين - Cache Components)
// المكان: app/learn/nextjs/06-cache-components/page.js
// الوظيفة: تعليم نظام التخزين الجديد في Next.js 16 مع "use cache"
// URL: /learn/nextjs/06-cache-components
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function CacheComponents() {
  const lessonInfo = getLessonBySlug("nextjs", "06-cache-components");

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
        {/* القسم الأول: نظرة عامة */}
        {/* ========================================== */}
        <LessonSection title="نظرة عامة: نظام التخزين في Next.js 16">
          <p>
            Next.js 16 يقدم <strong>نموذج تخزين كلياً جديداً</strong>. إذا
            كنت تعرف نسخة Next.js 14 أو 15، فانتبه: القواعد القديمة لم
            تعد صحيحة. الآن، <strong>لا شيء يُخزّن إلا إذا طلبت ذلك
            صراحةً</strong> باستخدام <code>"use cache"</code>.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              الفكرة الأساسية:
            </p>
            <p>
              في Next.js 16، كل component و كل function يُنفَّذ في كل
              مرة unless تضيف <code>"use cache"</code>. هذا يجعل
              سلوك التطبيق <strong>متوقعاً وواضحاً</strong> - لا
              مفاجآت.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: القديم vs الجديد */}
        {/* ========================================== */}
        <LessonSection title="القديم (v14/v15) vs الجديد (v16)">
          <p>
            النموذج القديم كان مربكاً: بعض الأشياء كانت تُخزّن تلقائياً
            وبعضها لا. Next.js 16 يُبسّط كل شيء:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ❌ القديم (Next.js 14/15): تخزين مخفي وغير متوقع
// fetch() كان يُخزّن تلقائياً أحياناً و لا يُخزّن أحياناً أخرى
// المكونات السيرفرية كانت تُخزّن أحياناً بشكل غير واضح
// المستخدمون كانوا مربكين: "هل هذا مخزّن أم لا؟"

// ✅ الجديد (Next.js 16): واضح وصريح
// لا شيء يُخزّن إلا إذا أضفت "use cache"
// كل شيء قابل للتنبؤ

async function ProductList() {
  // ❌ في v16: هذا يُنفَّذ في كل مرة - لا تخزين
  const products = await fetchProducts();
  return <Products data={products} />;
}

async function CachedProductList() {
  "use cache";
  // ✅ في v16: هذا يُخزّن - يُنفَّذ مرة واحدة فقط
  const products = await fetchProducts();
  return <Products data={products} />;
}`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
                Next.js 14/15 (القديم):
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>fetch() يُخزّن تلقائياً افتراضياً</li>
                <li>Slower data Revalidate() كان حلولاً مرتجلة</li>
                <li>من الصعب معرفة ما إذا كان شيء مخزّناً</li>
                <li>إعادة التخزين كانت غير واضحة</li>
                <li>cache: "force-cache" و "no-store" كانا مربكين</li>
              </ul>
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
                Next.js 16 (الجديد):
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>لا شيء يُخزّن تلقائياً</li>
                <li>"use cache" هو المفتاح الوحيد للتخزين</li>
                <li>واضح: إذا رأيت "use cache" = مخزّن</li>
                <li>cacheLife() و cacheTag() يُديان الصلاحية</li>
                <li>predictable و debuggable</li>
              </ul>
            </div>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: "use cache" Directive */}
        {/* ========================================== */}
        <LessonSection title='"use cache" Directive'>
          <p>
            <code>"use cache"</code> هي العلامة التي تُخبر Next.js
            بتخزين نتيجة الدالة أو المكون. يمكنك وضعها على مستوى
            الملف، أو على مستوى الدالة:
          </p>

          <CodeBlock
            language="jsx"
            code={`// الطريقة الأولى: على مستوى الدالة
async function getProducts() {
  "use cache";

  const products = await db.query("SELECT * FROM products");
  return products;
}

// الطريقة الثانية: على مستوى الملف (يُخزّن كل شيء في الملف)
"use cache";

async function Page() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <div>
      <CategoryList data={categories} />
      <ProductList data={products} />
    </div>
  );
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// مثال عملي: مكون مخزّن بالكامل
"use cache";

import { db } from "@/lib/database";

export default async function ProductCatalog() {
  // هذا الكود يُنفَّذ مرة واحدة فقط (حتىنتهاء cacheLife)
  const products = await db.products.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  const categories = await db.categories.findMany();

  return (
    <div>
      <h1>كتالوج المنتجات</h1>
      <div className="flex gap-4">
        <aside>
          {categories.map((cat) => (
            <CategoryLink key={cat.id} category={cat} />
          ))}
        </aside>
        <main className="flex-1">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      </div>
    </div>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              ماذا يُخزّن "use cache" بالضبط؟
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>القيمة المُرجعة:</strong> يتم تخزين عودية الدالة
                (return value) مع كل المعطيات (arguments)
              </li>
              <li>
                <strong>المعطيات:</strong> إذا تغير أي argument، سيتم
                تنفيذ الدالة من جديد وتخزين النتيجة الجديدة
              </li>
              <li>
                <strong>المستوى:</strong> يمكنك تخزين دالة واحدة أو ملف
                كامل
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: مثال بسيط */}
        {/* ========================================== */}
        <LessonSection title="مثال بسيط: تخزين استعلام قاعدة البيانات">
          <CodeBlock
            language="jsx"
            code={`// ملف: lib/products.js

import { db } from "./database";

// ❌ بدون "use cache" - يُنفَّذ في كل طلب
export async function getProductsUncached() {
  console.log("جلب المنتجات... (في كل مرة!)");
  const products = await db.products.findMany();
  return products;
}

// ✅ مع "use cache" - يُنفَّذ مرة واحدة فقط
export async function getProductsCached() {
  "use cache";

  console.log("جلب المنتجات... (مرة واحدة فقط)");
  const products = await db.products.findMany();
  return products;
}

// ✅ مع تحديد الصلاحية
export async function getProductsTTL() {
  "use cache";
  cacheLife("minutes"); // ينتهي بعد 5 دقائق

  console.log("جلب المنتجات... (كل 5 دقائق)");
  const products = await db.products.findMany();
  return products;
}

// ملف: app/products/page.js
import { getProductsCached } from "@/lib/products";

export default async function ProductsPage() {
  // سيعمل cache: الاستعلام سيُنفَّذ مرة واحدة فقط
  const products = await getProductsCached();

  return (
    <div>
      <h1>المنتجات ({products.length})</h1>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}`}
          />
        </LessonSection>

        {/* =================================--------- */}
        {/* القسم الخامس: cacheLife() */}
        {/* ========================================== */}
        <LessonSection title="cacheLife() - التحكم في مدة التخزين">
          <p>
            <code>cacheLife()</code> تُحدد المدة التي يبقى فيها التخزين
            صالحاً. Next.js 16 يوفر عدة "ملفات تعريف" (profiles)
            جاهزة:
          </p>

          <CodeBlock
            language="jsx"
            code={`import { cacheLife } from "next/cache";

// ملفات التعريف الجاهزة:

// "seconds" - 30 ثانية: مناسب للبيانات شديدة التغير
async function getLivePrices() {
  "use cache";
  cacheLife("seconds");

  return await fetchPrices();
}

// "minutes" - 5 دقائق: مناسب للبيانات المعتادة
async function getRecentOrders() {
  "use cache";
  cacheLife("minutes");

  return await db.orders.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
  });
}

// "hours" - ساعة واحدة: مناسب للبيانات شبه الثابتة
async function getPopularProducts() {
  "use cache";
  cacheLife("hours");

  return await db.products.findMany({
    orderBy: { views: "desc" },
    take: 20,
  });
}

// "days" - يوم واحد: مناسب للبيانات الثابتة
async function getCategories() {
  "use cache";
  cacheLife("days");

  return await db.categories.findMany();
}

// "max" - 30 يوماً: أقصى مدة
async function getStaticContent() {
  "use cache";
  cacheLife("max");

  return await db.pages.findMany();
}

// تحديد مخصص بالثواني
async function getProduct(productId) {
  "use cache";
  cacheLife({ revalidate: 600 }); // 10 دقائق بالثواني

  return await db.products.findUnique({
    where: { id: productId },
  });
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              جدول ملفات التعريف:
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                  <th className="text-right py-2">الملف التعريفي</th>
                  <th className="text-right py-2">المدة</th>
                  <th className="text-right py-2">الاستخدام المناسب</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                  <td className="py-2"><code>"seconds"</code></td>
                  <td className="py-2">30 ثانية</td>
                  <td className="py-2">أسعارライブ، مزامنة فورية</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                  <td className="py-2"><code>"minutes"</code></td>
                  <td className="py-2">5 دقائق</td>
                  <td className="py-2">آخر الطلبات، إحصائيات يومية</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                  <td className="py-2"><code>"hours"</code></td>
                  <td className="py-2">ساعة واحدة</td>
                  <td className="py-2">المنتجات الرائجة، المقالات</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                  <td className="py-2"><code>"days"</code></td>
                  <td className="py-2">يوم واحد</td>
                  <td className="py-2">الأقسام، الإعدادات</td>
                </tr>
                <tr>
                  <td className="py-2"><code>"max"</code></td>
                  <td className="py-2">30 يوماً</td>
                  <td className="py-2">محتوى ثابت جداً</td>
                </tr>
              </tbody>
            </table>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: cacheTag() */}
        {/* ========================================== */}
        <LessonSection title="cacheTag() - وسوم التخزين لإعادة التحديد">
          <p>
            <code>cacheTag()</code> تُعيّن "وسيماً" (tag) لكل مدخل تخزين
            لتمكينك من تحديثه يدوياً من Server Action. هذا يحل مشكلة
            "كيف أحدّث التخزين عندما تتغير البيانات؟":
          </p>

          <CodeBlock
            language="jsx"
            code={`import { cacheTag } from "next/cache";

// تعيين وسوم للبيانات المخزّنة
async function getProducts() {
  "use cache";
  cacheLife("hours");
  cacheTag("products"); // وسيلة للتحديث اليدوي

  const products = await db.products.findMany();
  return products;
}

async function getProductById(id) {
  "use cache";
  cacheLife("minutes");
  cacheTag(\`product-\${id}\`); // وسيلة خاصة بكل منتج

  return await db.products.findUnique({ where: { id } });
}

async function getCategories() {
  "use cache";
  cacheLife("days");
  cacheTag("categories");

  return await db.categories.findMany();
}

// في Server Action: تحديث محدد بالوسوم
export async function updateProduct(productId, data) {
  "use server";

  await db.products.update({
    where: { id: productId },
    data,
  });

  // تحديث التخزين المعني فقط
  cacheTag(\`product-\${productId}\`); // تحديث هذا المنتج
  revalidateTag("products"); // تحديث قائمة المنتجات
}

export async function addCategory(name) {
  "use server";

  await db.categories.create({ data: { name } });
  revalidateTag("categories"); // تحديث الأقسام فقط
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
             为什么要 uses cacheTag مع cacheLife؟
            </p>
            <p>
              <code>cacheLife</code> يُحدد متى ينتهي التخزين تلقائياً
              (الانتهاء بالوقت). <code>cacheTag</code> يُمكنك من
              حذف التخزين يدوياً عند تعديل البيانات (الإنهاء الإرادي).
              استخدام الاثنين معاً يمنحك أفضلتا العالمين.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: التخزين على مستوى المكون */}
        {/* ========================================== */}
        <LessonSection title="التخزين على مستوى المكون">
          <p>
            يمكنك تخزين مكون بأكمله عن طريق إضافة <code>"use cache"</code> في
            أعلى ملف المكون. هذا يعني أن المكون سيتذكّر آخر نتيجة ويعيدها
            مباشرةً بدون إعادة الحساب:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: components/ProductSidebar.js
"use cache";

import { db } from "@/lib/database";

// المكون بأكمله مخزّن
export default async function ProductSidebar() {
  console.log("ProductSidebar: يُنفَّذ مرة واحدة فقط");

  const categories = await db.categories.findMany();
  const topProducts = await db.products.findMany({
    orderBy: { sales: "desc" },
    take: 5,
  });

  return (
    <aside className="w-64 p-4 border-l">
      <h3 className="font-bold mb-4">الأقسام</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <a href={\`/products?category=\${cat.id}\`}>{cat.name}</a>
          </li>
        ))}
      </ul>

      <h3 className="font-bold mt-6 mb-4">الأكثر مبيعاً</h3>
      <ul className="space-y-2">
        {topProducts.map((product) => (
          <li key={product.id}>
            <a href={\`/products/\${product.id}\`}>{product.name}</a>
            <span className="text-sm text-gray-500">{product.sales} مبيعة</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// هذا المكون سيظهر في كل صفحات المتجر
// لكنه سيُنفَّذ مرة واحدة فقط (حتى انتهاء cacheLife)
// ثم يُحدّث تلقائياً أو عند استدعاء revalidateTag`}
          />

          <CodeBlock
            language="jsx"
            code={`// مقارنة: تخزين المكون بالكامل vs تخزين الدالة

// ✅ تخزين المكون بالكامل
"use cache";
export default async function ProductPage({ params }) {
  // كل الكود في المكون مخزّن
  const product = await db.products.findUnique({ where: { id: params.id } });
  const reviews = await db.reviews.findMany({ where: { productId: params.id } });

  return (
    <div>
      <ProductDetails product={product} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

// ✅ تخزين دالة محددة فقط (أكثر مرونة)
async function ProductPage({ params }) {
  // فقط getProducts مخزّن، الكود الباقي يُنفَّذ في كل مرة
  const product = await getProducts(params.id);
  const reviews = await getReviews(params.id); // مخزّن أيضاً

  return (
    <div>
      <ProductDetails product={product} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

async function getProducts(id) {
  "use cache";
  cacheTag(\`product-\${id}\`);
  return await db.products.findUnique({ where: { id } });
}

async function getReviews(productId) {
  "use cache";
  cacheLife("minutes");
  return await db.reviews.findMany({ where: { productId } });
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: التخزين على مستوى الدالة */}
        {/* ========================================== */}
        <LessonSection title="التخزين على مستوى الدالة">
          <p>
            الطريقة الأكثر شيوعاً: تخزين دوال محددة مع التحكم الكامل
            في الصلاحية والوسوم:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: lib/data-fetchers.js

import { cacheLife, cacheTag } from "next/cache";
import { db } from "./database";

// ✅ دالة مخزّنة: منتج واحد
export async function getProduct(id) {
  "use cache";
  cacheLife("minutes");
  cacheTag(\`product-\${id}\`);

  console.log(\`جلب المنتج \${id} من قاعدة البيانات\`);
  return await db.products.findUnique({ where: { id } });
}

// ✅ دالة مخزّنة: قائمة منتجات
export async function getProducts(categoryId) {
  "use cache";
  cacheLife("hours");
  cacheTag("products");

  console.log("جلب قائمة المنتجات من قاعدة البيانات");
  return await db.products.findMany({
    where: categoryId ? { categoryId } : {},
    orderBy: { createdAt: "desc" },
  });
}

// ✅ دالة مخزّنة: إحصائيات
export async function getDashboardStats() {
  "use cache";
  cacheLife("minutes");

  const [totalUsers, totalOrders, totalRevenue] = await Promise.all([
    db.users.count(),
    db.orders.count(),
    db.orders.aggregate({ _sum: { amount: true } }),
  ]);

  return {
    totalUsers,
    totalOrders,
    totalRevenue: totalRevenue._sum.amount || 0,
  };
}

// ❌ دالة غير مخزّنة: بيانات المستخدم الحالي
export async function getCurrentUser(userId) {
  // لا "use cache" - بيانات خاصة بالمستخدم
  return await db.users.findUnique({ where: { id: userId } });
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: الأنواع الثلاثة (variants) */}
        {/* ========================================== */}
        <LessonSection title="ثلاثة أنواع من التخزين">
          <p>
            Next.js 16 يوفر ثلاثة أنواع من التخزين عبر الـ directive:
          </p>

          <CodeBlock
            language="jsx"
            code={`// النوع 1: "use cache" (الافتراضي - في الذاكرة)
// يخزّن في ذاكرة الخادم (in-memory)
// أسرع نوع، يُفقد عند إعادة تشغيل الخادم

async function getProducts() {
  "use cache"; // أو "use cache: memory"

  // مخزّن في RAM الخادم
  return await db.products.findMany();
}

// النوع 2: "use cache: remote"
// يخزّن في تخزين خارجي (مثل Redis أو KV Store)
// يبقى حتى بعد إعادة تشغيل الخادم

async function getProductsRemote() {
  "use cache: remote";

  // مخزّن في KV Store
  return await db.products.findMany();
}

// النوع 3: "use cache: private"
// يخزّن خاصاً لكل طلب (request-scoped)
// كل مستخدم يرى نسخته الخاصة من البيانات

async function getUserDashboard(userId) {
  "use cache: private";

  // كل مستخدم يحصل على cache خاص به
  const orders = await db.orders.findMany({
    where: { userId },
  });
  return orders;
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              متى تستخدم كل نوع؟
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code>"use cache"</code> (memory) - الأفضل للبيانات
                المشتركة التي لا تتغير كثيراً مثل المنتجات والأقسام
              </li>
              <li>
                <code>"use cache: remote"</code> - عندما تحتاج التخزين
                يبقى بين عمليات تشغيل الخادم أو بين خوادم متعددة
              </li>
              <li>
                <code>"use cache: private"</code> - للبيانات الخاصة
                بالمستخدم مثل لوحة التحكم الشخصية أو سلة المشتريات
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: Invalidating Cache */}
        {/* ========================================== */}
        <LessonSection title="إبطال التخزين (Invalidation)">
          <p>
            بعد تعديل البيانات، تحتاج إخبار Next.js بحذف التخزين القديم
            واسترجاع بيانات جديدة. Next.js 16 يوفر عدة طرق:
          </p>

          <CodeBlock
            language="jsx"
            code={`import { revalidateTag, revalidatePath } from "next/cache";
import { cacheTag } from "next/cache";

// الطريقة 1: updateTag() - فقط في Server Actions
// يقرأ الكتابة الحالية (read-your-writes)
export async function updateProduct(productId, data) {
  "use server";

  await db.products.update({
    where: { id: productId },
    data,
  });

  // updateTag: يضمن أن الطلب التالي سيقرأ البيانات الجديدة
  updateTag(\`product-\${productId}\`);
  updateTag("products");
}

// الطريقة 2: revalidateTag() - stale-while-revalidate
// يسمح بعرض البيانات القديمة أثناء جلب الجديدة
export async function deleteProduct(productId) {
  "use server";

  await db.products.delete({ where: { id: productId } });

  // revalidateTag: يسمح بـ stale-while-revalidate
  revalidateTag("products");
  revalidateTag(\`product-\${productId}\`);
}

// الطريقة 3: revalidatePath() - تحديث مسار محدد
export async function addCategory(name) {
  "use server";

  await db.categories.create({ data: { name } });

  revalidatePath("/categories");
  revalidatePath("/");
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// مثال عملي: نظام منتجات كامل مع الإبطال

"use cache";
import { cacheLife, cacheTag } from "next/cache";

export async function getProducts() {
  cacheLife("hours");
  cacheTag("products");
  return await db.products.findMany();
}

export async function getProduct(id) {
  cacheLife("minutes");
  cacheTag(\`product-\${id}\`);
  return await db.products.findUnique({ where: { id } });
}

export async function createProduct(data) {
  "use server";
  const product = await db.products.create({ data });

  // بعد الإنشاء، أحدّث كل التخزين المعني
  revalidateTag("products");
  redirect(\`/products/\${product.id}\`);
}

export async function updateProduct(id, data) {
  "use server";
  await db.products.update({ where: { id }, data });

  // أحدّث هذا المنتج وقائمة المنتجات
  revalidateTag(\`product-\${id}\`);
  revalidateTag("products");
}

export async function deleteProduct(id) {
  "use server";
  await db.products.delete({ where: { id } });

  revalidateTag(\`product-\${id}\`);
  revalidateTag("products");
  redirect("/products");
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              updateTag vs revalidateTag:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code>updateTag()</code> - يضمن أن الطلب التالي سيقرأ
                البيانات الجديدة فوراً (read-your-writes). متوفر فقط
                في Server Actions
              </li>
              <li>
                <code>revalidateTag()</code> - يسمح بعرض البيانات القديمة
                (stale) أثناء جلب الجديدة (stale-while-revalidate).
                أسرع للتجربة لكن قد ترى بيانات قديمة للحظة
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: متى لا نخزّن */}
        {/* ========================================== */}
        <LessonSection title="متى لا نخزّن البيانات؟">
          <p>
            التخزين ليس دائماً الحل الأفضل. تجنب التخزين في هذه
            الحالات:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ❌ لا تخزّن: البيانات الخاصة بالمستخدم
async function getCart(userId) {
  // لا "use cache" - كل مستخدم يرى سلته الخاصة
  return await db.cart.findMany({ where: { userId } });
}

// ❌ لا تخزّن: البيانات اللحظية (real-time)
async function getLiveChatMessages(roomId) {
  // لا "use cache" - الرسائل تتغير باستمرار
  return await db.messages.findMany({
    where: { roomId },
    orderBy: { createdAt: "desc" },
    take: 50,
  });
}

// ❌ لا تخزّن: البيانات التي تتغير بسرعة
async function getStockCount(productId) {
  // لا "use cache" - المخزون يتغير مع كل عملية بيع
  return await db.products.findUnique({
    where: { id: productId },
    select: { stock: true },
  });
}

// ❌ لا تخزّن: الدوال غير المحددة (non-deterministic)
async function getRecommendations(userId) {
  // لا "use cache" - التوصيات تتغير في كل مرة
  const viewed = await getViewedProducts(userId);
  return calculateRecommendations(viewed);
}

// ✅ تخزّن: البيانات المشتركة الثابتة
async function getCategories() {
  "use cache";
  cacheLife("days");
  return await db.categories.findMany();
}

// ✅ تخزّن: البيانات التي تتغير ببطء
async function getPopularProducts() {
  "use cache";
  cacheLife("hours");
  return await db.products.findMany({
    orderBy: { views: "desc" },
    take: 10,
  });
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>لنفهم كيف يعمل نظام التخزين في Next.js 16 خطوة بخطوة:</p>

          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>الطلب الأول:</strong> المستخدم يزور الصفحة. يجد{" "}
              <code>"use cache"</code> في 실행 الدالة لأول مرة.
              يُنفّذ الدالة ويُخزّن النتيجة مع المعطيات والوسوم والصلاحية
            </li>
            <li>
              <strong>الطلبات اللاحقة:</strong> نفس الدالة بنفس المعطيات.
              يتحقق Next.js من التخزين: هل انتهت الصلاحية (cacheLife)؟
              هل يوجد تحديث يدوي (revalidateTag)؟ إذا لا، يُرجع
              النتيجة المخزّنة فوراً
            </li>
            <li>
              <strong>عند انتهاء الصلاحية:</strong> يُنفّذ الدالة من
              جديد ويُحدّث التخزين. المستخدم قد يرى البيانات القديمة
              للحظة (stale-while-revalidate)
            </li>
            <li>
              <strong>عند التعديل (Server Action):</strong> بعد تعديل
              البيانات، تستدعي <code>revalidateTag</code>. الطلب
              التالي سيُنفّذ الدالة من جديد ويُحدّث التخزين
            </li>
          </ol>

          <CodeBlock
            language="jsx"
            code={`// تمثيل لمسار عمل التخزين:

// 1. الطلب الأول (cache miss)
// ┌──────────────────────────────────┐
// │  getProducts()                   │
// │  → "use cache" موجود             │
// │  → لا يوجد cache → نفّذ الدالة  │
// │  → خزّن النتيجة مع المعطيات     │
// │  → أرجع النتيجة                 │
// └──────────────────────────────────┘

// 2. الطلب الثاني (cache hit)
// ┌──────────────────────────────────┐
// │  getProducts()                   │
// │  → "use cache" موجود             │
// │  → يوجد cache → أرجع المخزّن    │
// │  → لا حاجة لتنفيذ الدالة        │
// └──────────────────────────────────┘

// 3. بعد cacheLife (cache expired)
// ┌──────────────────────────────────┐
// │  getProducts()                   │
// │  → "use cache" موجود             │
// │  → انتهت الصلاحية               │
// │  → نفّذ الدالة من جديد          │
// │  → خزّن النتيجة الجديدة         │
// └──────────────────────────────────┘

// 4. بعد revalidateTag (manual invalidation)
// ┌──────────────────────────────────┐
// │  Server Action: deleteProduct()  │
// │  → revalidateTag("products")     │
// │  → الطلب التالي: cache miss     │
// │  → نفّذ الدالة → خزّن جديد     │
// └──────────────────────────────────┘`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث عشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul className="space-y-4 my-4">
            <li>
              <strong>❌ تخزين بيانات المستخدم (user-specific data):</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خطأ شائع - كل المستخدمين سيرون نفس السلة!
async function getCart() {
  "use cache";

  // المستخدمون سيأخذون نفس البيانات!
  return await db.cart.findMany();
}

// ✅ صحيح - استخدم cache: private أو لا تخزّن
async function getCart(userId) {
  "use cache: private";
  return await db.cart.findMany({ where: { userId } });
}`}
              />
            </li>

            <li>
              <strong>❌ نسيان إعادة التخزين بعد التعديل:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خطأ - البيانات لن تتحدث
export async function updateProduct(id, data) {
  "use server";
  await db.products.update({ where: { id }, data });
  // لا يوجد revalidateTag! البيانات ستبقى قديمة
}

// ✅ صحيح
export async function updateProduct(id, data) {
  "use server";
  await db.products.update({ where: { id }, data });
  revalidateTag(\`product-\${id}\`);
  revalidateTag("products");
}`}
              />
            </li>

            <li>
              <strong>❌ تخزين الدوال غير المحددة (non-deterministic):</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خطأ - Math.random() سيعطي نتيجة مختلفة في كل مرة
async function getRandomProducts() {
  "use cache";
  // سيتم تخزين النتيجة الأولى فقط!
  const products = await db.products.findMany();
  return products.sort(() => Math.random() - 0.5).slice(0, 5);
}

// ✅ صحيح - لا تخزّن الدوال غير المحددة
async function getRandomProducts() {
  const products = await db.products.findMany();
  return products.sort(() => Math.random() - 0.5).slice(0, 5);
}`}
              />
            </li>

            <li>
              <strong>❌ استخدام cacheLife خاطئ:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خطأ - cacheLife يجب أن يكون بعد "use cache"
async function getProducts() {
  cacheLife("hours"); // يعمل لكن الترتيب غير مثالي
  "use cache";
  return await db.products.findMany();
}

// ✅ صحيح - "use cache" أولاً ثم cacheLife
async function getProducts() {
  "use cache";
  cacheLife("hours");
  return await db.products.findMany();
}`}
              />
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul className="space-y-3 my-4">
            <li>
              <strong>✅ خزّن البيانات التي تُقرأ بكثرة وتتغير ببطء:</strong>{" "}
              المنتجات، الأقسام، المقالات، الإعدادات هي مرشحين مثاليين
            </li>
            <li>
              <strong>✅ استخدم cacheTag مع cacheLife:</strong>{" "}
              <code>cacheLife</code> للانتهاء التلقائي و{" "}
              <code>cacheTag</code> للإنهاء اليدوي بعد التعديل
            </li>
            <li>
              <strong>✅ اختر ملف التعريف المناسب:</strong>{" "}
              "minutes" للبيانات شبه الحية، "hours" للبيانات شبه الثابتة،
              "days" للبيانات الثابتة
            </li>
            <li>
              <strong>✅ أعد التخزين بعد كل تعديل:</strong>{" "}
              استخدم <code>revalidateTag</code> في كل Server Action
              تُعدّل بيانات
            </li>
            <li>
              <strong>✅ لا تخزّن للبيانات الخاصة بالمستخدم:</strong>{" "}
              استخدم <code>"use cache: private"</code> أو لا تخزّن
            </li>
            <li>
              <strong>✅ رقّب التخزين:</strong> استخدم{" "}
              <code>console.log</code> للتحقق من أن الدالة تُنفَّذ
              بالعدد المتوقع من المرات
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li>
                Next.js 16: <strong style={{ color: "var(--primary)" }}>لا شيء
                يُخزّن تلقائياً</strong> - يجب إضافة <code>"use cache"</code>{" "}
                صراحةً
              </li>
              <li>
                <code>"use cache"</code> يخزّن نتيجة الدالة مع المعطيات
              </li>
              <li>
                <code>cacheLife()</code> يُحدد مدة الصلاحية: seconds, minutes,
                hours, days, max
              </li>
              <li>
                <code>cacheTag()</code> يُعيّن وسماً للإبطال اليدوي
              </li>
              <li>
                ثلاثة أنواع: <code>"use cache"</code> (memory)،{" "}
                <code>"use cache: remote"</code> (KV)،{" "}
                <code>"use cache: private"</code> (per-request)
              </li>
              <li>
                استخدم <code>revalidateTag()</code> أو{" "}
                <code>updateTag()</code> بعد تعديل البيانات
              </li>
              <li>
                لا تخزّن: بيانات المستخدم، البيانات اللحظية، الدوال غير
                المحددة
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هو التغيير الأكبر في نظام التخزين مع Next.js 16؟"
          options={[
            "إضافة cache تلقائي لكل fetch()",
            "لا شيء يُخزّن تلقائياً - يجب إضافة 'use cache' صراحةً",
            "حذف نظام التخزين بالكامل",
            "نقل التخزين إلى العميل",
          ]}
          correctAnswer={1}
          explanation="التغيير الأكبر هو أن Next.js 16 لا يُخزّن أي شيء تلقائياً. يجب عليك إضافة 'use cache' صراحةً لتخزين أي شيء. هذا يجعل السلوك متوقعاً وواضحاً."
        />

        <Quiz
          question="ماذا تفعل cacheLife('hours')؟"
          options={[
            "تخزّن لمدة ساعة ثم تُحذف نهائياً",
            "تخزّن لمدة ساعة ثم تُحدّث تلقائياً عند الطلب التالي",
            "تمنع التخزين تماماً",
            "تحدد الحد الأقصى لحجم التخزين",
          ]}
          correctAnswer={1}
          explanation="cacheLife('hours') تُحدد مدة الصلاحية لساعة واحدة. بعد انتهاء هذه المدة، عند الطلب التالي سيتم تنفيذ الدالة من جديد وتخزين النتيجة الجديدة (stale-while-revalidate)."
        />

        <Quiz
          question="متى تستخدم 'use cache: private' بدلاً من 'use cache' العادي؟"
          options={[
            "عندما تريد أداءً أفضل دائماً",
            "عندما تخزّن بيانات خاصة بكل مستخدم (مثل السلة أو لوحة التحكم)",
            "لكل البيانات بدون استثناء",
            "فقط في Client Components",
          ]}
          correctAnswer={1}
          explanation="'use cache: private' يخزّن خاصاً لكل طلب (request). كل مستخدم يحصل على نسخته الخاصة من التخزين. مفيد للبيانات الشخصية."
        />

        <Quiz
          question="ما الفرق بين revalidateTag و updateTag؟"
          options={[
            "لا يوجد فرق实质ي بينهما",
            "revalidateTag يسمح بـ stale-while-revalidate، updateTag يضمن قراءة جديدة فوراً",
            "updateTag أسرع من revalidateTag",
            "revalidateTag يعمل في العميل فقط",
          ]}
          correctAnswer={1}
          explanation="revalidateTag() يسمح بعرض البيانات القديمة للحظة (stale-while-revalidate). updateTag() يضمن أن الطلب التالي سيقرأ البيانات الجديدة فوراً (read-your-writes). updateTag متاح فقط في Server Actions."
        />

        <Quiz
          question="أي من التالي هو خطأ شائع عند استخدام التخزين في Next.js 16؟"
          options={[
            "استخدام 'use cache' في دالة جلب بيانات",
            "تخزين بيانات المستخدم (user-specific) بدون 'use cache: private'",
            "استخدام cacheTag مع cacheLife",
            "استخدام revalidateTag في Server Action",
          ]}
          correctAnswer={1}
          explanation="تخزين بيانات المستخدم (مثل السلة) بدون 'use cache: private' خطأ شائعecause كل المستخدمين سيأخذون نفس النسخة المخزّنة."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: نظام تخزين لكتالوج منتجات"
          description={
            <div>
              <p className="mb-2">
                بناء نظام تخزين كامل لكتالوج منتجات في متجر إلكتروني:
              </p>
              <ol className="list-decimal list-inside space-y-1">
                <li>أنشئ دالة <code>getProducts</code> مخزّنة لمدة ساعة مع وسيلة "products"</li>
                <li>أنشئ دالة <code>getProduct(id)</code> مخزّنة لمدة 10 دقائق مع وسيلة خاصة بالمنتج</li>
                <li>أنشئ Server Action لإضافة منتج جديد مع revalidateTag</li>
                <li>أنشئ Server Action لحذف منتج مع revalidateTag</li>
                <li>أنشئ صفحة عرض المنتجات تستخدم التخزين</li>
                <li>أضف cacheLife("days") لجلب الأقسام</li>
              </ol>
            </div>
          }
        >
          <CodeBlock
            language="jsx"
            code={`// الحل الكامل

// 1. ملف lib/products.js
import { cacheLife, cacheTag } from "next/cache";
import { db } from "./database";

export async function getProducts(categoryId) {
  "use cache";
  cacheLife("hours");
  cacheTag("products");

  console.log("جلب المنتجات من قاعدة البيانات");
  return await db.products.findMany({
    where: categoryId ? { categoryId } : {},
    orderBy: { createdAt: "desc" },
  });
}

export async function getProduct(id) {
  "use cache";
  cacheLife({ revalidate: 600 }); // 10 دقائق
  cacheTag(\`product-\${id}\`);

  console.log(\`جلب المنتج \${id} من قاعدة البيانات\`);
  return await db.products.findUnique({ where: { id } });
}

export async function getCategories() {
  "use cache";
  cacheLife("days");
  cacheTag("categories");

  return await db.categories.findMany();
}

// 2. ملف app/actions.js
"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(prevState, formData) {
  const name = formData.get("name")?.trim();
  const price = Number(formData.get("price"));
  const categoryId = formData.get("categoryId");

  if (!name || price <= 0) {
    return { error: "بيانات غير صحيحة" };
  }

  await db.products.create({
    data: { name, price, categoryId },
  });

  revalidateTag("products");
  return { error: null };
}

export async function deleteProduct(productId) {
  await db.products.delete({ where: { id: productId } });

  revalidateTag("products");
  revalidateTag(\`product-\${productId}\`);
  redirect("/products");
}

// 3. ملف app/products/page.js
import { Suspense } from "react";
import { getProducts, getCategories } from "@/lib/products";
import ProductForm from "@/components/ProductForm";
import ProductList from "@/components/ProductList";

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">المنتجات ({products.length})</h1>

      <ProductForm categories={categories} />

      <Suspense fallback={<p>جاري تحميل المنتجات...</p>}>
        <ProductList products={products} />
      </Suspense>
    </div>
  );
}

// 4. ملف components/ProductForm.js
"use client";

import { useActionState } from "react";
import { createProduct } from "@/app/actions";

export default function ProductForm({ categories }) {
  const [state, formAction, isPending] = useActionState(createProduct, {
    error: null,
  });

  return (
    <form action={formAction} className="mb-8 p-4 bg-gray-50 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">إضافة منتج جديد</h2>
      <div className="flex gap-4">
        <input name="name" placeholder="اسم المنتج" className="p-2 border rounded" disabled={isPending} />
        <input name="price" type="number" placeholder="السعر" className="p-2 border rounded" disabled={isPending} />
        <select name="categoryId" className="p-2 border rounded" disabled={isPending}>
          <option value="">اختر القسم</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <button type="submit" disabled={isPending} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">
          {isPending ? "..." : "إضافة"}
        </button>
      </div>
      {state.error && <p className="text-red-500 mt-2">{state.error}</p>}
    </form>
  );
}`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ورقة غش: نظام التخزين في Next.js 16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                أساسيات "use cache":
              </p>
              <CodeBlock
                language="jsx"
                code={`// تخزين دالة
async function getData() {
  "use cache";
  cacheLife("hours");
  cacheTag("data");
  return await fetchData();
}

// تخزين ملف كامل
"use cache";

export default async function Page() {
  cacheLife("minutes");
  const data = await fetchData();
  return <div>{data.name}</div>;
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                cacheLife() - ملفات التعريف:
              </p>
              <CodeBlock
                language="jsx"
                code={`cacheLife("seconds"); // 30 ثانية
cacheLife("minutes"); // 5 دقائق
cacheLife("hours");   // ساعة
cacheLife("days");    // يوم
cacheLife("max");     // 30 يوماً

// تحديد مخصص
cacheLife({ revalidate: 600 }); // 10 دقائق`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                الأنواع الثلاثة:
              </p>
              <CodeBlock
                language="jsx"
                code={`// memory (الافتراضي)
"use cache";

// remote (تخزين خارجي)
"use cache: remote";

// private (خاص بكل طلب)
"use cache: private";`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                cacheTag() + الإبطال:
              </p>
              <CodeBlock
                language="jsx"
                code={`// تعيين الوسيم
async function getProducts() {
  "use cache";
  cacheTag("products");
  // ...
}

// الإبطال في Server Action
export async function addProduct(data) {
  "use server";
  await db.products.create({ data });
  revalidateTag("products");
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                revalidation:
              </p>
              <CodeBlock
                language="jsx"
                code={`import {
  revalidateTag,
  revalidatePath,
} from "next/cache";

// تحديث بالوسيم
revalidateTag("products");
revalidateTag(\`product-\${id}\`);

// تحديث بالمسار
revalidatePath("/products");
revalidatePath("/", "layout");`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                متى لا تخزّن:
              </p>
              <CodeBlock
                language="text"
                code={`❌ بيانات المستخدم (user-specific)
❌ البيانات اللحظية (real-time)
❌ البيانات سريعة التغير (frequently changing)
❌ الدوال غير المحددة (non-deterministic)
❌ البيانات الحساسة (sensitive data)`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                الأفضل دائماً:
              </p>
              <CodeBlock
                language="text"
                code={`✅ cacheTag + cacheLife معاً
✅ revalidate بعد كل تعديل
✅ cacheLife مناسب لنوع البيانات
✅ مراقبة التنفيذ بـ console.log
✅ لا تخزّن ما لا يحتاج تخزيناً`}
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
