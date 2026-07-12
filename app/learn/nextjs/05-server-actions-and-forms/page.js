// =====================================================
// ملف: page.js (الدرس الخامس: تعديل البيانات - Server Actions)
// المكان: app/learn/nextjs/05-server-actions-and-forms/page.js
// الوظيفة: تعليم Server Actions لتعديل البيانات في Next.js 16
// URL: /learn/nextjs/05-server-actions-and-forms
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ServerActionsAndForms() {
  const lessonInfo = getLessonBySlug("nextjs", "05-server-actions-and-forms");

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
        {/* القسم الأول: ما هي Server Actions؟ */}
        {/* ========================================== */}
        <LessonSection title="ما هي Server Actions؟">
          <p>
            <strong>Server Actions</strong> هي الدوال التي تُنفَّذ على الخادم
            وتُستدعى من المكونات العميلية (Client Components). هي الطريقة
            الأساسية لتعديل البيانات في Next.js - سواء بإضافة سجل جديد
            أو تعديله أو حذفه.
          </p>

          <p>
            بدلاً من إنشاء API Routes منفصلة لكل عملية تعديل، يمكنك كتابة
            الدالة مباشرة في ملف المكون واستدعائها من أي Client Component.
            Next.js يتعامل مع الاتصال بالخادم والتحويل تلقائياً.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              لماذا Server Actions بدلاً من API Routes التقليدية؟
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>كود أقل:</strong> لا need لإنشاء وحفظ ملفات API
                منفصلة لكل عملية
              </li>
              <li>
                <strong>أمان أفضل:</strong> الدوال تعمل على الخادم دائماً
                - لا يمكن اختراقها من العميل
              </li>
              <li>
                <strong>تكامل طبيعي:</strong> تعمل مباشرة مع forms و
                event handlers بدون كود وسيط
              </li>
              <li>
                <strong>تحديث تلقائي:</strong> بعد التعديل، يتم تحديث
                البيانات المخزّنة تلقائياً
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: 'use server' Directive */}
        {/* ========================================== */}
        <LessonSection title="'use server' Directive">
          <p>
            لتحويل دالة إلى Server Action، أضف <code>"use server"</code> في
            بداية الدالة. يمكنك وضعها في أعلى ملف (لجعل كل الدوال في الملف
            server actions) أو في بداية دالة محددة:
          </p>

          <CodeBlock
            language="jsx"
            code={`// الطريقة الأولى: في أعلى الملف
// كل الدوال في هذا الملف ستكون server actions

"use server";

export async function addItem(formData) {
  const name = formData.get("name");
  await db.insert({ name });
}

export async function deleteItem(id) {
  await db.delete(id);
}

export async function updateItem(id, data) {
  await db.update(id, data);
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// الطريقة الثانية: لدالة محددة فقط
// الملف ليس server action بالكامل

export async function addItem(formData) {
  "use server";

  const name = formData.get("name");
  await db.insert({ name });
}

// هذه الدالة عادية - تعمل على العميل
function validateName(name) {
  return name && name.length > 0;
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              قواعد مهمة لـ "use server":
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                يجب أن تبدأ الدالة بكلمة <code>"use server"</code> في
                أول سطر أو أول سطر في جسم الدالة
              </li>
              <li>
                الدوال التي تحمل هذه العلامة تُنفَّذ على الخادم فقط
              </li>
              <li>
                لا يمكن استدعاءها مباشرة من Client Component - يجب تمريرها
                كـ prop لدالة أخرى أو استخدامها في form action
              </li>
              <li>
                يجب أن تكون الدالة <code>async</code>
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: مثال بسيط */}
        {/* ========================================== */}
        <LessonSection title="مثال بسيط: إضافة عنصر جديد">
          <CodeBlock
            language="jsx"
            code={`// ملف: app/items/page.js

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Server Action لإضافة عنصر جديد
export async function addItem(formData) {
  const name = formData.get("name");
  const description = formData.get("description");

  // التحقق من صحة البيانات
  if (!name || name.trim() === "") {
    throw new Error("اسم العنصر مطلوب");
  }

  // حفظ البيانات في قاعدة البيانات
  await db.items.create({
    data: { name, description },
  });

  // تحديث الصفحة بعد التعديل
  revalidatePath("/items");

  // إعادة التوجيه للصفحة الرئيسية
  redirect("/items");
}

// الصفحة الرئيسية - عرض النماذج والبيانات
export default async function ItemsPage() {
  const items = await db.items.findMany();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">العناصر</h1>

      {/* نموذج الإضافة */}
      <form action={addItem} className="mb-8 p-4 bg-gray-50 rounded-xl">
        <h2 className="text-lg font-semibold mb-4">إضافة عنصر جديد</h2>
        <input
          type="text"
          name="name"
          placeholder="اسم العنصر"
          className="block w-full p-2 border rounded mb-3"
          required
        />
        <textarea
          name="description"
          placeholder="الوصف"
          className="block w-full p-2 border rounded mb-3"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          إضافة
        </button>
      </form>

      {/* قائمة العناصر */}
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg">
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: النماذج مع Server Actions */}
        {/* ========================================== */}
        <LessonSection title="النماذج (Forms) مع Server Actions">
          <p>
            التكامل بين HTML Forms و Server Actions في Next.js سهل جداً.
            ما عليك سوى تمرير الدالة لـ <code>action</code> الخاص بـ{" "}
            <code>form</code>:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: components/ContactForm.js

"use server";

import { revalidatePath } from "next/cache";

// Server Action لمعالجة نموذج التواصل
export async function handleContact(formData) {
  // استخراج بيانات النموذج
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // التحقق من صحة البيانات على الخادم
  const errors = {};

  if (!name || name.trim().length < 2) {
    errors.name = "الاسم يجب أن يكون حرفين على الأقل";
  }

  if (!email || !email.includes("@")) {
    errors.email = "البريد الإلكتروني غير صحيح";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "الرسالة يجب أن تكون 10 أحرف على الأقل";
  }

  // إذا وجد أخطاء، أرجعها
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // حفظ الرسالة في قاعدة البيانات
  await db.messages.create({
    data: { name, email, message },
  });

  // تحديث الصفحة
  revalidatePath("/contact");

  return { success: true, errors: null };
}

// ملف: app/contact/page.js
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">تواصل معنا</h1>
      <ContactForm />
    </div>
  );
}

// ملف: components/ContactForm.js (النسخة الكاملة مع الحالة)
"use client";

import { useActionState } from "react";
import { handleContact } from "@/app/actions";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    handleContact,
    { success: false, errors: null }
  );

  return (
    <form action={formAction} className="space-y-4">
      {/* رسالة النجاح */}
      {state.success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">الاسم</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 border rounded-lg"
          disabled={isPending}
        />
        {state.errors?.name && (
          <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 border rounded-lg"
          disabled={isPending}
        />
        {state.errors?.email && (
          <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">الرسالة</label>
        <textarea
          name="message"
          rows={5}
          className="w-full p-2 border rounded-lg"
          disabled={isPending}
        />
        {state.errors?.message && (
          <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 bg-blue-500 text-white rounded-lg font-bold
                   hover:bg-blue-600 disabled:opacity-50"
      >
        {isPending ? "جاري الإرسال..." : "إرسال الرسالة"}
      </button>
    </form>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: useActionState Hook */}
        {/* ========================================== */}
        <LessonSection title="useActionState Hook">
          <p>
            <code>useActionState</code> هو hook من React 19 يُستخدم لإدارة
            حالة النماذج مع Server Actions. يُرجع ثلاثة عناصر: الحالة
            الحالية، ودالة الإجراء، وحالة التحميل:
          </p>

          <CodeBlock
            language="jsx"
            code={`// useActionState - الأساس

"use client";

import { useActionState } from "react";

// الدالة الأولى: الحالة الافتراضية
const initialState = {
  message: "",
  success: false,
};

// الدالة الثانية: Server Action
async function previousStateAction(prevState, formData) {
  const name = formData.get("name");

  if (!name) {
    return { message: "الاسم مطلوب", success: false };
  }

  // حفظ البيانات...
  return { message: "تم الحفظ بنجاح!", success: true };
}

function MyForm() {
  // useActionState يُرجع:
  // - state: الحالة الحالية (تبدأ بالـ initialState)
  // - formAction: دالة تُمرر لـ form action
  // - isPending: هل الدالة تعمل حالياً؟
  const [state, formAction, isPending] = useActionState(
    previousStateAction,
    initialState
  );

  return (
    <form action={formAction}>
      <input type="text" name="name" disabled={isPending} />

      {/* عرض رسالة الحالة */}
      {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}

      <button type="submit" disabled={isPending}>
        {isPending ? "جاري الحفظ..." : "حفظ"}
      </button>
    </form>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              كيف يعمل useActionState؟
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                تمرر الدالة (Server Action) والحالة ال初始化ية لـ{" "}
                <code>useActionState</code>
              </li>
              <li>
                عند إرسال النموذج، تُستدعى الدالة مع الحالة السابقة و{" "}
                <code>formData</code>
              </li>
              <li>
                تُرجع الدالة حالة جديدة، و <code>useActionState</code>{" "}
                يُحدّث الـ <code>state</code> بها
              </li>
              <li>
                <code>isPending</code> يصبح <code>true</code> أثناء
                تنفيذ الدالة و <code>false</code> عند الانتهاء
              </li>
            </ol>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: مثال عملي - نموذج اتصال */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: نموذج اتصال كامل مع التحقق">
          <CodeBlock
            language="jsx"
            code={`// ملف: app/actions.js
// جميع Server Actions في ملف منفصل

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// التحقق من صحة البريد الإلكتروني
function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}

// Server Action: إرسال نموذج الاتصال
export async function submitContactForm(prevState, formData) {
  // استخراج البيانات
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const subject = formData.get("subject")?.trim();
  const message = formData.get("message")?.trim();

  // التحقق من كل حقل
  const errors = {};

  if (!name || name.length < 2) {
    errors.name = "الاسم يجب أن يكون حرفين على الأقل";
  }

  if (!email || !validateEmail(email)) {
    errors.email = "أدخل بريداً إلكترونياً صحيحاً";
  }

  if (!subject || subject.length < 3) {
    errors.subject = "الموضوع يجب أن يكون 3 أحرف على الأقل";
  }

  if (!message || message.length < 20) {
    errors.message = "الرسالة يجب أن تكون 20 حرفاً على الأقل";
  }

  // إذا وجد أخطاء
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
      message: "يرجى تصحيح الأخطاء أدناه",
    };
  }

  // حفظ في قاعدة البيانات
  try {
    await db.messages.create({
      data: {
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
      },
    });
  } catch (error) {
    return {
      success: false,
      errors: {},
      message: "حدث خطأ في الحفظ. يرجى المحاولة لاحقاً.",
    };
  }

  // إعادة تحميل الصفحة
  revalidatePath("/contact");

  return {
    success: true,
    errors: {},
    message: "تم إرسال رسالتك بنجاح!",
  };
}

// Server Action: حذف رسالة
export async function deleteMessage(messageId) {
  await db.messages.delete({ where: { id: messageId } });
  revalidatePath("/messages");
  redirect("/messages");
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: Revalidation بعد التعديل */}
        {/* ========================================== */}
        <LessonSection title="Revalidation بعد التعديل">
          <p>
            بعد تعديل البيانات في Server Action، تحتاج إخبار Next.js
            بتحديث البيانات المخزّنة. هذا يُسمى <strong>Revalidation</strong>:
          </p>

          <CodeBlock
            language="jsx"
            code={`import { revalidatePath, revalidateTag } from "next/cache";

// 1. revalidatePath: تحديث مسار محدد
export async function addPost(formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  await db.posts.create({ data: { title, content } });

  // تحديث الصفحة الرئيسية
  revalidatePath("/");

  // أو تحديث مسار معين
  revalidatePath("/blog");

  // أو تحديث مسار ديناميكي
  revalidatePath("/blog/[slug]", "page");
}

// 2. revalidateTag: تحديث كل المسارات التي تستخدم هذا Tag
export async function updateProduct(productId, data) {
  await db.products.update({
    where: { id: productId },
    data,
  });

  // تحديث كل الصفحات التي جلبت بيانات المنتجات بهذا Tag
  revalidateTag("products");
  revalidateTag(\`product-\${productId}\`);
}

// استخدام Tag في fetch
async function getProducts() {
  const res = await fetch("https://api.example.com/products", {
    next: { tags: ["products"] },
  });
  return res.json();
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              متى تستخدم أيهما؟
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code>revalidatePath("/path")</code> - عندما تريد تحديث
                صفحة محددة بعد التعديل
              </li>
              <li>
                <code>revalidateTag("tag")</code> - عندما تريد تحديث
                كل الصفحات التي تستخدم نفس البيانات (أكثر مرونة)
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: Redirect بعد الإرسال */}
        {/* ========================================== */}
        <LessonSection title="Redirect بعد الإرسال">
          <p>
            يمكنك استخدام دالة <code>redirect()</code> لإعادة توجيه
            المستخدم بعد نجاح العملية:
          </p>

          <CodeBlock
            language="jsx"
            code={`import { redirect } from "next/navigation";

// Server Action مع إعادة التوجيه
export async function createProduct(formData) {
  const name = formData.get("name");
  const price = Number(formData.get("price"));

  // التحقق من البيانات
  if (!name || price <= 0) {
    throw new Error("بيانات غير صحيحة");
  }

  // حفظ المنتج
  const product = await db.products.create({
    data: { name, price },
  });

  // إعادة التوجيه لصفحة المنتج الجديد
  redirect(\`/products/\${product.id}\`);
}

// يمكنك أيضاً استخدام redirect في Server Action العادي
export async function deleteProduct(productId) {
  await db.products.delete({ where: { id: productId } });

  // العودة لصفحة المنتجات بعد الحذف
  redirect("/products");
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              ملاحظة مهمة:
            </p>
            <p>
              <code>redirect()</code> يجب أن يكون آخر شيء في الدالة.
              بعد استدعائه، يتم إلقاء خطأ <code>REDIRECT</code> داخلياً
              لإيقاف تنفيذ الكود الباقي.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: Event Handlers */}
        {/* ========================================== */}
        <LessonSection title="استدعاء Server Actions من Event Handlers">
          <p>
            يمكنك أيضاً استدعاء Server Actions من أحداث المستخدم مثل{" "}
            <code>onClick</code> بدلاً من النماذج:
          </p>

          <CodeBlock
            language="jsx"
            code={`// استدعاء Server Action من زر onClick

"use client";

import { useTransition } from "react";
import { toggleLike, addToCart } from "@/app/actions";

function ProductCard({ product }) {
  const [isPending, startTransition] = useTransition();

  async function handleLike() {
    startTransition(async () => {
      await toggleLike(product.id);
    });
  }

  async function handleAddToCart() {
    startTransition(async () => {
      await addToCart(product.id);
    });
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.price} ر.س</p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={handleLike}
          disabled={isPending}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
        >
          {isPending ? "..." : "إعجاب"}
        </button>

        <button
          onClick={handleAddToCart}
          disabled={isPending}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {isPending ? "..." : "أضف للسلة"}
        </button>
      </div>
    </div>
  );
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// يمكنك أيضاً استخدام startTransition مع updater functions

"use client";

import { useTransition } from "react";
import { updateQuantity, removeFromCart } from "@/app/actions";

function CartItem({ item }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-4 p-3 border-b">
      <span className="flex-1">{item.name}</span>

      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            startTransition(async () => {
              await updateQuantity(item.id, item.quantity - 1);
            });
          }}
          disabled={isPending || item.quantity <= 1}
          className="w-8 h-8 rounded bg-gray-200"
        >
          -
        </button>

        <span className="w-8 text-center">{item.quantity}</span>

        <button
          onClick={() => {
            startTransition(async () => {
              await updateQuantity(item.id, item.quantity + 1);
            });
          }}
          disabled={isPending}
          className="w-8 h-8 rounded bg-gray-200"
        >
          +
        </button>
      </div>

      <button
        onClick={() => {
          startTransition(async () => {
            await removeFromCart(item.id);
          });
        }}
        disabled={isPending}
        className="text-red-500"
      >
        حذف
      </button>
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>لنفهم ما يحدث عند إرسال نموذج مع Server Action:</p>

          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>المستخدم يضغط "إرسال":</strong> يتم استدعاء{" "}
              <code>form.action</code> مع بيانات النموذج
            </li>
            <li>
              <strong>Next.js يرسل طلب HTTP POST:</strong> البيانات تُرسل
              كـ <code>FormData</code> إلى الخادم
            </li>
            <li>
              <strong>الخادم يُنفّذ Server Action:</strong> الدالة تُنفَّذ
              على الخادم مع جميع الصلاحيات (قاعدة البيانات، الملفات...)
            </li>
            <li>
              <strong>الخادم يُحدّث التخزين:</strong> إذا استخدمت{" "}
              <code>revalidatePath</code> أو <code>revalidateTag</code>
            </li>
            <li>
              <strong>الخادم يُرسل RSC payload:</strong> React Server
              Component payload يحتوي على المحتوى المحدّث
            </li>
            <li>
              <strong>المتصفح يُحدّث الـ UI:</strong> يتم دمج المحتوى
              الجديد مع الصفحة الحالية تلقائياً
            </li>
          </ol>

          <CodeBlock
            language="jsx"
            code={`// تمثيل لمسار عمل Server Action:

// 1. النموذج في المتصفح
// ┌─────────────────────────┐
// │  <form action={addItem}>│
// │    <input name="name">  │
// │    <button>إرسال</button>│
// │  </form>                │
// └────────────┬────────────┘
//              │
//              ▼
// 2. طلب HTTP POST
// ┌─────────────────────────┐
// │  POST /api/actions      │
// │  Body: FormData         │
// │  { name: "المنتج الجديد" }│
// └────────────┬────────────┘
//              │
//              ▼
// 3. Server Action على الخادم
// ┌─────────────────────────┐
// │  addItem(formData)       │
// │  → db.items.create(...)  │
// │  → revalidatePath("/")  │
// │  → return RSC payload   │
// └────────────┬────────────┘
//              │
//              ▼
// 4. تحديث الـ UI في المتصفح
// ┌─────────────────────────┐
// │  الصفحة تتحدث تلقائياً  │
// │  العنصر الجديد يظهر     │
// │  بدون إعادة تحميل كاملة│
// └─────────────────────────┘`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: الأمان */}
        {/* ========================================== */}
        <LessonSection title="الأمان في Server Actions">
          <p>
            Server Actions في Next.js مصممة بالأمان كأولوية. إليك أهم
            معايير الأمان:
          </p>

          <CodeBlock
            language="jsx"
            code={`// 1. التحقق من صحة البيانات دائماً على الخادم
export async function addItem(formData) {
  const name = formData.get("name");

  // لا تثق بالبيانات القادمة من العميل أبداً
  if (!name || typeof name !== "string" || name.length > 100) {
    return { error: "بيانات غير صحيحة" };
  }

  await db.items.create({ data: { name: name.trim() } });
}

// 2. التحقق من المصادقة والتفويض
export async function deleteItem(itemId) {
  // تحقق من هوية المستخدم
  const session = await getSession();
  if (!session) {
    throw new Error("غير مصرح لك بالحذف");
  }

  // تحقق من صلاحية المستخدم
  const item = await db.items.findUnique({ where: { id: itemId } });
  if (item.userId !== session.userId) {
    throw new Error("ليس لديك صلاحية لحذف هذا العنصر");
  }

  await db.items.delete({ where: { id: itemId } });
  revalidatePath("/items");
}

// 3. CSRF Protection - محمي تلقائياً
// Next.js يتحقق تلقائياً من أن الطلب coming من نفس الموقع
// لا تحتاج لأي إعداد إضافي

// 4. لا تُرجع أخطاء تفصيلية للعميل
export async function addItem(formData) {
  try {
    await db.items.create({ data: formData });
  } catch (error) {
    // لا تُرجع تفاصيل الخطأ الحقيقية
    console.error(error); // سجّل في السيرفر فقط
    return { error: "حدث خطأ غير متوقع. يرجى المحاولة لاحقاً." };
  }
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              قواعد الأمان الذهبية:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>تحقق دائماً على الخادم:</strong> حتى لو تحقق
                من البيانات في العميل، كرر التحقق على الخادم
              </li>
              <li>
                <strong>لا تثق بالمدخلات:</strong> كل بيانات المستخدم
                محتمل أن تكون مسيّرة
              </li>
              <li>
                <strong>تحقق من الصلاحيات:</strong> تأكد من أن المستخدم
                مصرح له بالعملية
              </li>
              <li>
                <strong>لا تُرجع أخطاء تفصيلية:</strong> سجّل الأخطاء
                على الخادم وأظهر رسالة عامة للمستخدم
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul className="space-y-4 my-4">
            <li>
              <strong>❌ نسيان "use server" في أعلى الدالة:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - الدالة ستحاول العمل على العميل
export async function addItem(formData) {
  const name = formData.get("name");
  await db.items.create({ data: { name } }); // خطأ!
}

// ✅ صحيح
export async function addItem(formData) {
  "use server";
  const name = formData.get("name");
  await db.items.create({ data: { name } });
}`}
              />
            </li>

            <li>
              <strong>❌ عدم إعادة التحديث بعد التعديل:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - البيانات لن تتحدث في الواجهة
export async function addProduct(formData) {
  await db.products.create({ data: formData });
  // لا يوجد revalidate - الصفحة ستعرض البيانات القديمة!
}

// ✅ صحيح
export async function addProduct(formData) {
  await db.products.create({ data: formData });
  revalidatePath("/products"); // تحديث الصفحة
}`}
              />
            </li>

            <li>
              <strong>❌ عدم معالجة الأخطاء:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - أي خطأ سيُ crash التطبيق
export async function addItem(formData) {
  const name = formData.get("name");
  await db.items.create({ data: { name } }); // قد يفشل!
}

// ✅ صحيح
export async function addItem(formData) {
  try {
    const name = formData.get("name");
    await db.items.create({ data: { name } });
    revalidatePath("/items");
    return { success: true };
  } catch (error) {
    console.error("خطأ في الإضافة:", error);
    return { success: false, error: "حدث خطأ" };
  }
}`}
              />
            </li>

            <li>
              <strong>❌ تمرير بيانات حساسة من العميل:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - لا تثق بـ userId القادم من العميل
export async function addItem(formData) {
  const userId = formData.get("userId"); // قد يكون مُزوّر!
  await db.items.create({ data: { userId } });
}

// ✅ صحيح - احصل على userId من الجلسة
export async function addItem(formData) {
  const session = await getSession();
  const userId = session.user.id; // من الخادم
  const name = formData.get("name");
  await db.items.create({ data: { name, userId } });
}`}
              />
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul className="space-y-3 my-4">
            <li>
              <strong>✅ تحقق دائماً على الخادم:</strong> حتى لو تحقق
              في العميل، كرر التحقق في Server Action
            </li>
            <li>
              <strong>✅ أظهر حالات التحميل:</strong> استخدم{" "}
              <code>isPending</code> من <code>useTransition</code> أو{" "}
              <code>useActionState</code> لتعطيل الأزرار أثناء التنفيذ
            </li>
            <li>
              <strong>✅ أعد التحديث بعد التعديل:</strong> استخدم{" "}
              <code>revalidatePath</code> أو <code>revalidateTag</code>{" "}
              دائماً بعد تعديل البيانات
            </li>
            <li>
              <strong>✅ معالج الأخطاء بشكل لطيف:</strong> أظهر رسائل
              مفيدة للمستخدم وسجّل الأخطاء التفصيلية على الخادم
            </li>
            <li>
              <strong>✅ فصل المنطق:</strong> ضع Server Actions في ملف
              منفصل (<code>app/actions.js</code>) لتنظيم الكود
            </li>
            <li>
              <strong>✅ استخدم redirect بعد النجاح:</strong> إعادة التوجيه
              تمنع إعادة إرسال النموذج عند تحديث الصفحة
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li>
                <strong style={{ color: "var(--primary)" }}>Server Actions</strong>{" "}
                هي دوال تعمل على الخادم وتُستدعى من العميل لتعديل البيانات
              </li>
              <li>
                أضف <code>"use server"</code> في أعلى الدالة لتحويلها
                إلى Server Action
              </li>
              <li>
                استخدمها مباشرة مع <code>{"<form action={...}>"}</code> أو
                مع <code>onClick</code> عبر <code>startTransition</code>
              </li>
              <li>
                <code>useActionState</code> يُدير حالة النموذج مع{" "}
                <code>isPending</code>
              </li>
              <li>
                استخدم <code>revalidatePath</code> أو{" "}
                <code>revalidateTag</code> بعد كل تعديل للبيانات
              </li>
              <li>
                <code>redirect()</code> يُعيد توجيه المستخدم بعد نجاح
                العملية
              </li>
              <li>
                تحقق دائماً على الخادم وتأكد من صلاحيات المستخدم
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هي الطريقة الصحيحة لتحديد دالة كـ Server Action؟"
          options={[
            'إضافة @server decorator فوق الدالة',
            'إضافة "use server" في أول سطر من جسم الدالة',
            'تسمية الدالة بـ serverAction',
            'تمريرها لدالة runOnServer()',
          ]}
          correctAnswer={1}
          explanation='يجب إضافة "use server" في أول سطر من جسم الدالة أو في أعلى الملف. هذا يُخبر Next.js أن الدالة يجب أن تعمل على الخادم فقط.'
        />

        <Quiz
          question="ماذا يحدث عند استدعاء revalidatePath('/') بعد تعديل البيانات؟"
          options={[
            "يتم حذف جميع البيانات المخزّنة",
            "يتم تحديث الصفحة الرئيسية والبيانات المخزّنة لها",
            "يتم إعادة تشغيل الخادم",
            "يتم توجيه المستخدم للصفحة الرئيسية",
          ]}
          correctAnswer={1}
          explanation="revalidatePath('/') يُخبر Next.js بحذف التخزين المؤقت للصفحة الرئيسية وجلب بيانات جديدة عند الطلب التالي لها."
        />

        <Quiz
          question="ما هو الدور الرئيسي لـ useActionState في React 19؟"
          options={[
            "إنشاء Server Actions جديدة",
            "إدارة حالة النموذج مع Server Actions",
            "التحقق من صحة البيانات",
            "إدارة التخزين المؤقت",
          ]}
          correctAnswer={1}
          explanation="useActionState يُرجع الحالة الحالية ودالة الإجراء وحالة isPending لتمكينك من إدارة تجربة المستخدم مع النماذج."
        />

        <Quiz
          question="ما الفرق بين revalidatePath و revalidateTag؟"
          options={[
            "لا يوجد فرق实质ي بينهما",
            "revalidatePath يُحدّث مساراً محدداً، revalidateTag يُحدّث كل المسارات التي تستخدم Tag معين",
            "revalidatePath أسرع من revalidateTag",
            "revalidateTag يعمل فقط في Client Components",
          ]}
          correctAnswer={1}
          explanation="revalidatePath('/blog') يُحدّث مساراً محدداً. revalidateTag('posts') يُحدّث كل الصفحات التي استخدمت هذا Tag في fetch()"
        />

        <Quiz
          question="لماذا يجب التحقق من البيانات على الخادم حتى لو تحققنا منها في العميل؟"
          options={[
            "لأن العميل أبطأ من الخادم",
            "لأن بيانات العميل يمكن تزويرها - لا تثق أبداً بالمدخلات",
            "لأن Server Actions لا تعمل بدون ذلك",
            "هذا مجرد توصية وليس ضرورياً",
          ]}
          correctAnswer={1}
          explanation="بيانات العميل يمكن تزويرها بأدوات مثل Postman أو curl. التحقق على الخادم ضروري لضمان أمان البيانات وسلامة قاعدة البيانات."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: بناء نموذج CRUD مع التحقق"
          description={
            <div>
              <p className="mb-2">
                بناء تطبيق إدارة مهام (Todo App) كامل مع Server Actions:
              </p>
              <ol className="list-decimal list-inside space-y-1">
                <li>أنشئ Server Action لإضافة مهمة جديدة مع التحقق من العنوان</li>
                <li>أنشئ Server Action لحذف مهمة</li>
                <li>أنشئ Server Action لتغيير حالة المهمة (مكتملة/غير مكتملة)</li>
                <li>أنشئ صفحة تعرض المهام مع نموذج الإضافة</li>
                <li>أضف loading states مع isPending</li>
                <li>أعد التحديث بعد كل تعديل باستخدام revalidatePath</li>
              </ol>
            </div>
          }
        >
          <CodeBlock
            language="jsx"
            code={`// الحل الكامل

// 1. ملف app/actions.js
"use server";

import { revalidatePath } from "next/cache";

export async function addTodo(prevState, formData) {
  const title = formData.get("title")?.trim();

  if (!title || title.length < 2) {
    return { success: false, error: "المهمة يجب أن تكون حرفين على الأقل" };
  }

  await db.todos.create({
    data: { title, completed: false },
  });

  revalidatePath("/todos");
  return { success: true, error: null };
}

export async function deleteTodo(id) {
  await db.todos.delete({ where: { id } });
  revalidatePath("/todos");
}

export async function toggleTodo(id, completed) {
  await db.todos.update({
    where: { id },
    data: { completed: !completed },
  });
  revalidatePath("/todos");
}

// 2. ملف app/todos/page.js
import { Suspense } from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function TodosPage() {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-8">إدارة المهام</h1>
      <TodoForm />
      <Suspense fallback={<p>جاري تحميل المهام...</p>}>
        <TodoList />
      </Suspense>
    </div>
  );
}

// 3. ملف components/TodoForm.js
"use client";

import { useActionState } from "react";
import { addTodo } from "@/app/actions";

export default function TodoForm() {
  const [state, formAction, isPending] = useActionState(addTodo, {
    success: false,
    error: null,
  });

  return (
    <form action={formAction} className="flex gap-2 mb-6">
      <input
        type="text"
        name="title"
        placeholder="مهمة جديدة..."
        className="flex-1 p-2 border rounded"
        disabled={isPending}
      />
      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {isPending ? "..." : "إضافة"}
      </button>
      {state.error && (
        <p className="text-red-500 text-sm w-full">{state.error}</p>
      )}
    </form>
  );
}

// 4. ملف components/TodoList.js
import { db } from "@/lib/database";
import TodoItem from "./TodoItem";

export default async function TodoList() {
  const todos = await db.todos.findMany({
    orderBy: { createdAt: "desc" },
  });

  if (todos.length === 0) {
    return <p className="text-gray-500 text-center">لا توجد مهام بعد</p>;
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

// 5. ملف components/TodoItem.js
"use client";

import { useTransition } from "react";
import { deleteTodo, toggleTodo } from "@/app/actions";

export default function TodoItem({ todo }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          startTransition(() => toggleTodo(todo.id, todo.completed));
        }}
        disabled={isPending}
      />
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.title}
      </span>
      <button
        onClick={() => {
          startTransition(() => deleteTodo(todo.id));
        }}
        disabled={isPending}
        className="mr-auto text-red-500 text-sm"
      >
        حذف
      </button>
    </div>
  );
}`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ورقة غش: Server Actions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                أساسيات Server Actions:
              </p>
              <CodeBlock
                language="jsx"
                code={`// تعريف Server Action
"use server";

export async function addItem(formData) {
  const name = formData.get("name");
  await db.items.create({ data: { name } });
  revalidatePath("/items");
}

// استخدام مع Form
<form action={addItem}>
  <input name="name" />
  <button type="submit">إرسال</button>
</form>

// استخدام مع onClick
"use client";
import { useTransition } from "react";

function Button({ action }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button onClick={() => startTransition(action)}
            disabled={isPending}>
      {isPending ? "..." : "اضغط"}
    </button>
  );
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                useActionState:
              </p>
              <CodeBlock
                language="jsx"
                code={`"use client";
import { useActionState } from "react";

const initialState = { error: null };

async function action(prev, formData) {
  const name = formData.get("name");
  if (!name) return { error: "الاسم مطلوب" };
  // حفظ البيانات...
  return { error: null };
}

function Form() {
  const [state, formAction, isPending] =
    useActionState(action, initialState);

  return (
    <form action={formAction}>
      <input name="name" disabled={isPending} />
      {state.error && <p>{state.error}</p>}
      <button disabled={isPending}>إرسال</button>
    </form>
  );
}`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                Revalidation:
              </p>
              <CodeBlock
                language="jsx"
                code={`import { revalidatePath, revalidateTag }
  from "next/cache";

// تحديث مسار محدد
revalidatePath("/");
revalidatePath("/blog");
revalidatePath("/blog/[slug]", "page");

// تحديث بالـ Tag
revalidateTag("products");
revalidateTag("user-123");`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                Redirect:
              </p>
              <CodeBlock
                language="jsx"
                code={`import { redirect } from "next/navigation";

export async function createItem(formData) {
  await db.items.create({ data: formData });
  redirect("/items"); // آخر سطر!
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                الأمان:
              </p>
              <CodeBlock
                language="jsx"
                code={`// تحقق دائماً على الخادم
export async function addItem(formData) {
  "use server";
  const session = await getSession();
  if (!session) throw new Error("غير مصرح");

  const name = formData.get("name");
  if (!name || typeof name !== "string") {
    return { error: "بيانات غير صحيحة" };
  }

  await db.items.create({
    data: { name, userId: session.user.id }
  });
  revalidatePath("/items");
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                الهيكل المقترح:
              </p>
              <CodeBlock
                language="text"
                code={`app/
  actions.js       ← Server Actions
  layout.js
  page.js
  products/
    page.js
    [id]/
      page.js`}
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
