import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ServerActionsLesson() {
  const lessonInfo = getLessonBySlug("react", "06-server-actions");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        <LessonSection title="ما هي Server Actions؟">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Server Actions</strong> هي دوال تعمل على{" "}
            <strong className="text-white">الخادم (Server)</strong> ويمكن استدعاؤها مباشرة من{" "}
            <strong className="text-white">المكونات العميلية (Client Components)</strong>. تُعتبر
            الطريقة العصرية للتعامل مع إرسال النماذج في Next.js.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            بدلاً من إنشاء API Routes منفصلة ثم استخدام fetch لإرسال البيانات إليها، يمكنك الآن
            كتابة دالة تعمل على الخادم واستدعاؤها مباشرة من العميل.
          </p>
          <CodeBlock
            code={`// ❌ الطريقة القديمة: API Route + fetch
// app/api/contact/route.js
export async function POST(request) {
  const data = await request.json();
  await db.messages.create({ data });
  return Response.json({ success: true });
}

// في المكون
async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
}

// ✅ الطريقة الحديثة: Server Action
// app/actions.js
"use server";
export async function submitContact(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  await db.messages.create({ data: { name, email } });
  return { success: true };
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="لماذا نستخدمها؟">
          <p className="text-gray-300 leading-relaxed mb-4">
            Server Actions تحل العديد من المشاكل التي واجهها المطورون:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>
              <strong className="text-white">تبسيط الكود:</strong> لا حاجة لإنشاء API Routes
              منفصلة لكل عملية
            </li>
            <li>
              <strong className="text-white">أمان أفضل:</strong> المنطق يبقى على الخادم
              بالكامل
            </li>
            <li>
              <strong className="text-white">تحسين الأداء:</strong> يمكن للخادم التعامل مع
              العملية مباشرة دون وسطاء
            </li>
            <li>
              <strong className="text-white">تجربة مطور أفضل:</strong> كود أقل، منطق أكثر
            </li>
            <li>
              <strong className="text-white">دعم أصلي:</strong> مدمج في Next.js无需 مكتبات
              خارجية
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="المشكلة التي يحلها">
          <p className="text-gray-300 leading-relaxed mb-4">
            قبل Server Actions، كان التعامل مع النماذج يتطلب خطوات كثيرة:
          </p>
          <CodeBlock
            code={`// ❌ الطريقة القديمة - كود كثيرة ومعقد
// 1. إنشاء API Route
// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, "الاسم مطلوب"),
  email: z.string().email("البريد غير صحيح"),
  message: z.string().min(10, "الرسالة قصيرة جداً"),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const validatedData = schema.parse(body);
    
    await db.messages.create({ data: validatedData });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.errors },
      { status: 400 }
    );
  }
}

// 2. في المكون - كود كثيرة للتعامل مع الحالة
"use client";
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", message: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error);
      }
      
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* حقول النموذج */}
      <button disabled={loading}>
        {loading ? "جاري الإرسال..." : "إرسال"}
      </button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">تم الإرسال!</p>}
    </form>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="شرح بسيط - التشبيه">
          <p className="text-gray-300 leading-relaxed mb-4">
            تخيل أن Server Actions مثل خط هاتف مباشر بين نموذجك والخادم:
          </p>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4">
            <ul className="text-gray-300 space-y-3">
              <li>
                <strong className="text-white">بدون Server Actions:</strong> النموذج ←
                وسيط (API Route) ← الخادم. مثل الاتصال بالسفارة عبر الوكيل.
              </li>
              <li>
                <strong className="text-white">مع Server Actions:</strong> النموذج ← الخادم
                مباشرة. مثل الاتصال بالسفارة مباشرة على الهاتف.
              </li>
            </ul>
          </div>
          <CodeBlock
            code={`// تشبيه بسيط
//
// ❌ بدون Server Actions (الطريقة القديمة):
// المستخدم ← API Route (الوسيط) ← الخادم
//
// ✅ مع Server Actions (الطريقة الحديثة):
// المستخدم ← الخادم مباشرة (خط مباشر!)

// Server Action - خط مباشر للخادم
"use server";
export async function saveProduct(formData) {
  "use server"; // العلامة السحرية!
  
  const name = formData.get("name");
  const price = formData.get("price");
  
  // حفظ مباشر في قاعدة البيانات
  await db.products.create({
    data: { name, price: parseFloat(price) }
  });
  
  return { success: true, message: "تم الحفظ!" };
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="مثال بسيط - نموذج اسم">
          <p className="text-gray-300 leading-relaxed mb-4">
            مثال أبسط لفهم كيفية عمل Server Actions:
          </p>
          <CodeBlock
            code={`// 📁 app/actions.js
"use server";

export async function saveName(formData) {
  // استخراج البيانات من FormData
  const name = formData.get("name");
  
  // حفظ في قاعدة البيانات (أو أي معالجة أخرى)
  console.log("تم حفظ الاسم:", name);
  
  return { 
    success: true, 
    message: \`مرحبًا \${name}! تم حفظ اسمك.\` 
  };
}

// 📁 app/page.js
import { saveName } from './actions';

function NameForm() {
  return (
    <form action={saveName}>
      <label htmlFor="name">الاسم:</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        required 
      />
      <button type="submit">حفظ</button>
    </form>
  );
}

export default NameForm;`}
            language="jsx"
          />
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
            <p className="text-gray-300">
              <strong className="text-green-400">ملاحظة:</strong> انتبه أننا لم نستخدم{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">"use client"</code>!
              المكون يبقى Server Component ويتعامل مع النموذج عبر Server Action.
            </p>
          </div>
        </LessonSection>

        <LessonSection title="مثال عملي - نموذج اتصال كامل">
          <p className="text-gray-300 leading-relaxed mb-4">
            نموذج اتصال كامل مع التحقق من صحة البيانات والرسائل التوضيحية:
          </p>
          <CodeBlock
            code={`// 📁 app/actions.js
"use server";

export async function submitContactForm(prevState, formData) {
  // استخراج البيانات
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // التحقق من صحة البيانات
  const errors = {};
  
  if (!name || name.trim().length < 2) {
    errors.name = "الاسم يجب أن يكون على الأقل حرفين";
  }
  
  if (!email || !email.includes("@")) {
    errors.email = "البريد الإلكتروني غير صحيح";
  }
  
  if (!message || message.trim().length < 10) {
    errors.message = "الرسالة يجب أن تكون على الأقل 10 أحرف";
  }

  // إذاوجدت أخطاء، أرجعها
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // حفظ في قاعدة البيانات
  try {
    await db.messages.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: new Date()
      }
    });

    return { 
      success: true, 
      message: "تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا." 
    };
  } catch (error) {
    return { 
      success: false, 
      message: "حدث خطأ أثناء الإرسال. حاول مرة أخرى." 
    };
  }
}

// 📁 app/contact/page.js
"use client";
import { useActionState } from 'react';
import { submitContactForm } from '../actions';

function ContactPage() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm, 
    { success: false, errors: {} }
  );

  return (
    <div className="max-w-md mx-auto">
      <h1>تواصل معنا</h1>
      
      {state.success && (
        <div className="bg-green-100 p-4 rounded">
          {state.message}
        </div>
      )}
      
      {!state.success && state.message && (
        <div className="bg-red-100 p-4 rounded">
          {state.message}
        </div>
      )}
      
      <form action={formAction}>
        <div className="mb-4">
          <label htmlFor="name">الاسم</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded"
          />
          {state.errors?.name && (
            <p className="text-red-500 text-sm">{state.errors.name}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded"
          />
          {state.errors?.email && (
            <p className="text-red-500 text-sm">{state.errors.email}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="message">الرسالة</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-2 border rounded"
          />
          {state.errors?.message && (
            <p className="text-red-500 text-sm">{state.errors.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isPending ? "جاري الإرسال..." : "إرسال الرسالة"}
        </button>
      </form>
    </div>
  );
}

export default ContactPage;`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="useActionState - Hook إدارة حالة النموذج">
          <p className="text-gray-300 leading-relaxed mb-4">
            <code className="bg-gray-800 px-2 py-1 rounded text-green-400">useActionState</code> هو
            الـ Hook الجديد من React لإدارة حالة النموذج مع Server Actions. يُحل محل{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">useFormState</code>{" "}
            القديم.
          </p>

          <h4 className="text-white font-semibold mt-6 mb-3">الصيغة الأساسية:</h4>
          <CodeBlock
            code={`import { useActionState } from 'react';

// الصيغة
const [state, formAction, isPending] = useActionState(
  action,      // Server Action
  initialState, // الحالة الأولية
  permalink?    // رابط اختياري (نادرًا ما نستخدمه)
);

// state: الحالة الحالية (التي يُعيدها الـ Action)
// formAction: دالة تُمرر لـ <form action={...}>
// isPending: هل العملية جارية؟`}
            language="javascript"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">مثال بسيط:</h4>
          <CodeBlock
            code={`// Server Action
"use server";
export async function addToCart(prevState, formData) {
  const productId = formData.get("productId");
  const quantity = parseInt(formData.get("quantity"));
  
  try {
    await db.cart.addItem({ productId, quantity });
    return { 
      success: true, 
      message: "تمت الإضافة إلى السلة!",
      cartCount: await db.cart.getCount()
    };
  } catch (error) {
    return { 
      success: false, 
      message: "حدث خطأ. حاول مرة أخرى." 
    };
  }
}

// Client Component
"use client";
import { useActionState } from 'react';
import { addToCart } from './actions';

function AddToCartButton({ productId }) {
  const [state, formAction, isPending] = useActionState(
    addToCart,
    { success: false, message: "" }
  );

  return (
    <form action={formAction}>
      <input type="hidden" name="productId" value={productId} />
      <input type="number" name="quantity" defaultValue={1} min={1} />
      
      <button type="submit" disabled={isPending}>
        {isPending ? "جاري الإضافة..." : "أضف إلى السلة"}
      </button>
      
      {state.message && (
        <p className={state.success ? "text-green-500" : "text-red-500"}>
          {state.message}
        </p>
      )}
    </form>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="FormData - التعامل مع بيانات النموذج">
          <p className="text-gray-300 leading-relaxed mb-4">
            React يتعامل مع بيانات النموذج بشكل طبيعي عبر{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-green-400">FormData</code>. يمكنك
            استخدام جميع أنواع الحقول:
          </p>
          <CodeBlock
            code={`// Server Action مع جميع أنواع الحقول
"use server";
export async function processForm(formData) {
  // نص عادي
  const name = formData.get("name");
  
  // بريد إلكتروني
  const email = formData.get("email");
  
  // كلمة مرور
  const password = formData.get("password");
  
  // رقم
  const age = formData.get("age");
  
  // نص طويل
  const bio = formData.get("bio");
  
  // قائمة منسدلة
  const country = formData.get("country");
  
  // checkboxes
  const interests = formData.getAll("interests"); // مصفوفة
  
  // ملف
  const avatar = formData.get("avatar");
  
  // تاريخ
  const birthDate = formData.get("birthDate");

  // معالجة الملف
  if (avatar && avatar.size > 0) {
    const bytes = await avatar.arrayBuffer();
    const buffer = Buffer.from(bytes);
    // حفظ الملف...
  }

  return { success: true };
}

// 📁 النموذج في المكون
function RegistrationForm() {
  return (
    <form action={processForm}>
      <input type="text" name="name" placeholder="الاسم" />
      <input type="email" name="email" placeholder="البريد" />
      <input type="password" name="password" placeholder="كلمة المرور" />
      <input type="number" name="age" placeholder="العمر" />
      <textarea name="bio" placeholder="نبذة عنك" />
      
      <select name="country">
        <option value="sa">السعودية</option>
        <option value="eg">مصر</option>
        <option value="ae">الإمارات</option>
      </select>
      
      <div>
        <label>
          <input type="checkbox" name="interests" value="programming" />
          البرمجة
        </label>
        <label>
          <input type="checkbox" name="interests" value="design" />
          التصميم
        </label>
      </div>
      
      <input type="file" name="avatar" />
      <input type="date" name="birthDate" />
      
      <button type="submit">تسجيل</button>
    </form>
  );
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="التحقق من صحة البيانات">
          <p className="text-gray-300 leading-relaxed mb-4">
            التحقق من صحة البيانات يجب أن يكون على الخادم لضمان الأمان. يمكنك استخدام مكتبات مثل{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-green-400">zod</code> للتحقق:
          </p>
          <CodeBlock
            code={`// 📁 app/actions.js
"use server";
import { z } from 'zod';

// تعريف مخطط التحقق
const userSchema = z.object({
  name: z
    .string()
    .min(2, "الاسم قصير جداً")
    .max(50, "الاسم طويل جداً"),
  email: z
    .string()
    .email("البريد الإلكتروني غير صحيح"),
  password: z
    .string()
    .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
    .regex(/[A-Z]/, "كلمة المرور يجب أن تحتوي على حرف كبير")
    .regex(/[0-9]/, "كلمة المرور يجب أن تحتوي على رقم"),
  age: z
    .number()
    .min(18, "يجب أن يكون عمرك 18 سنة على الأقل")
    .max(120, "العمر غير صحيح"),
});

export async function registerUser(prevState, formData) {
  try {
    // استخراج البيانات
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      age: parseInt(formData.get("age")),
    };

    // التحقق من الصحة
    const validatedData = userSchema.parse(rawData);
    
    // إذا نجح التحقق، أكمل المعالجة
    const user = await db.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: await hash(validatedData.password),
        age: validatedData.age,
      }
    });

    return { 
      success: true, 
      message: "تم التسجيل بنجاح!",
      userId: user.id 
    };

  } catch (error) {
    // إذا كان خطأ تحقق من Zod
    if (error instanceof z.ZodError) {
      const errors = {};
      error.errors.forEach(err => {
        errors[err.path[0]] = err.message;
      });
      return { success: false, errors };
    }

    // خطأ عام
    return { 
      success: false, 
      message: "حدث خطأ أثناء التسجيل" 
    };
  }
}`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">التحقق بدون Zod (يدوي):</h4>
          <CodeBlock
            code={`// تحقق يدوي بدون مكتبات خارجية
"use server";
export async function validateContact(prevState, formData) {
  const errors = {};

  // التحقق من الاسم
  const name = formData.get("name");
  if (!name || name.trim().length < 2) {
    errors.name = "الاسم يجب أن يكون حرفين على الأقل";
  }

  // التحقق من البريد الإلكتروني
  const email = formData.get("email");
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "البريد الإلكتروني غير صحيح";
  }

  // التحقق من رقم الهاتف
  const phone = formData.get("phone");
  const phoneRegex = /^\\+?[0-9]{10,15}$/;
  if (phone && !phoneRegex.test(phone)) {
    errors.phone = "رقم الهاتف غير صحيح";
  }

  // التحقق من الرسالة
  const message = formData.get("message");
  if (!message || message.trim().length < 10) {
    errors.message = "الرسالة يجب أن تكون 10 أحرف على الأقل";
  }

  // إذاوجدت أخطاء
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // حفظ البيانات
  await db.messages.create({
    data: {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      message: message.trim(),
    }
  });

  return { 
    success: true, 
    message: "تم إرسال رسالتك بنجاح!" 
  };
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="ماذا يحدث خلف الكواليس">
          <p className="text-gray-300 leading-relaxed mb-4">
            فهم سلسلة الأحداث عند استخدام Server Actions:
          </p>
          <CodeBlock
            code={`// سلسلة الأحداث عند إرسال النموذج:
//
// 1️⃣ المستخدم يضغط زر الإرسال
//    ↓
// 2️⃣ المتصفح يجمع بيانات النموذج في FormData
//    ↓
// 3️⃣ Next.js يرسل طلب HTTP للخادم
//    ↓
// 4️⃣ الخادم يشغّل Server Action
//    ↓
// 5️⃣ الـ Action يعالج البيانات
//    ↓
// 6️⃣ يُرجع نتيجة (نجاح/فشل)
//    ↓
// 7️⃣ واجهة المستخدم تتحدث تلقائيًا
//
// النتيجة: المستخدم لا يرى إعادة تحميل الصفحة!
// كل شيء يحدث في الخلفية بسلاسة.`}
            language="javascript"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">مثال توضيحي:</h4>
          <CodeBlock
            code={`// Server Action
"use server";
export async function likePost(prevState, formData) {
  const postId = formData.get("postId");
  
  // 1. الخادم يستقبل الطلب
  console.log("تم استقبال طلب إعجاب للمنشور:", postId);
  
  // 2. المعالجة على الخادم
  const post = await db.post.update({
    where: { id: postId },
    data: { likes: { increment: 1 } }
  });
  
  // 3. إرجاع النتيجة
  console.log("تم تحديث الإعجابات إلى:", post.likes);
  return { 
    success: true, 
    likes: post.likes 
  };
  
  // 4. الواجهة تتحدث تلقائيًا
  // because useActionState يُحدّث state
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="الأخطاء الشائعة">
          <h4 className="text-white font-semibold mb-3">
            1. نسيان "use server" في الـ Action
          </h4>
          <CodeBlock
            code={`// ❌ خطأ: نسيان "use server"
export async function saveData(formData) {
  // ⚠️ هذا لن يعمل كـ Server Action!
  // سيتم تنفيذه على المتصفح!
  await db.save(formData);
}

// ✅ صحيح
"use server";
export async function saveData(formData) {
  await db.save(formData);
}`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">
            2. محاولة استخدام Server Action في Server Component مباشرة
          </h4>
          <CodeBlock
            code={`// ❌ خطأ: Server Component لا يمكنه استخدام useActionState
async function MyForm() {
  // ⚠️ Server Components لا تدعم useActionState
  const [state, formAction] = useActionState(saveData, {});
  
  return <form action={formAction}>...</form>;
}

// ✅ صحيح: استخدم Client Component للنموذج
"use client";
import { useActionState } from 'react';

function MyForm() {
  const [state, formAction] = useActionState(saveData, {});
  
  return <form action={formAction}>...</form>;
}

// ✅ صحيح: Server Component يستورد Client Component
import MyForm from './MyForm';

async function Page() {
  return (
    <div>
      <h1>صفحة النموذج</h1>
      <MyForm />
    </div>
  );
}`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">
            3. عدم معالجة الأخطاء
          </h4>
          <CodeBlock
            code={`// ❌ خطأ: لا توجد معالجة أخطاء
"use server";
export async function riskyAction(formData) {
  // ⚠️ إذا فشلت العملية، لن يعرف المستخدم!
  await db.dangerousOperation();
  return { success: true };
}

// ✅ صحيح: معالجة شاملة للأخطاء
"use server";
export async function safeAction(formData) {
  try {
    await db.dangerousOperation();
    return { success: true, message: "تمت العملية بنجاح" };
  } catch (error) {
    console.error("خطأ في العملية:", error);
    return { 
      success: false, 
      message: "حدث خطأ. يرجى المحاولة مرة أخرى." 
    };
  }
}`}
            language="jsx"
          />

          <h4 className="text-white font-semibold mt-6 mb-3">
            4. إرجاع objects غير قابلة للتحويل
          </h4>
          <CodeBlock
            code={`// ❌ خطأ: إرجاع دالة أو Date object
"use server";
export async function getData() {
  return {
    date: new Date(), // ❌ Date object غير قابل للتحويل
    save: () => {},   // ❌ الدالة غير قابلة للتحويل
  };
}

// ✅ صحيح: إرجاع بيانات قابلة للتحويل
"use server";
export async function getData() {
  return {
    date: new Date().toISOString(), // ✅ String
    count: 42,                       // ✅ Number
    items: ["a", "b", "c"],         // ✅ Array
    nested: { key: "value" },       // ✅ Object بسيط
  };
}`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="أفضل الممارسات">
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>
              <strong className="text-white">تحقق دائمًا على الخادم:</strong> لا تعتمد على
              التحقق من جانب العميل فقط
            </li>
            <li>
              <strong className="text-white">اعرض حالات التحميل:</strong> استخدم{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">isPending</code> لإظهار
              أن العملية جارية
            </li>
            <li>
              <strong className="text-white">عالج الأخطاء بذكاء:</strong> أظهر رسائل مفيدة
              للمستخدم
            </li>
            <li>
              <strong className="text-white">استخدم Server Actions للعمليات البسيطة:</strong>{" "}
              للعمليات المعقدة، استخدم API Routes
            </li>
            <li>
              <strong className="text-white">افصل الاهتمامات:</strong> كل Server Action
              يفعل شيئًا واحدًا فقط
            </li>
            <li>
              <strong className="text-white">استخدم FormData:</strong> الطريقة الطبيعية
              لجمع بيانات النموذج
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="ملخص">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <ul className="text-gray-300 space-y-3">
              <li>
                ✅ <strong className="text-white">Server Actions</strong> تُبسّط التعامل
                مع النماذج في Next.js
              </li>
              <li>
                ✅ <strong className="text-white">useActionState</strong> يُدير حالة النموذج
                مع Server Actions
              </li>
              <li>
                ✅ <strong className="text-white">FormData</strong> الطريقة الطبيعية لجمع
                بيانات النموذج
              </li>
              <li>
                ✅ <strong className="text-white">تحقق على الخادم</strong> دائمًا لأمان
                البيانات
              </li>
              <li>
                ✅ <strong className="text-white">"use server"</strong> يجب أن تكون في أعلى
                ملف الـ Action
              </li>
              <li>
                ✅ <strong className="text-white">لا تحتاج API Routes</strong> للعمليات
                البسيطة
              </li>
              <li>
                ✅ <strong className="text-white">معالجة الأخطاء</strong> تُحسّن تجربة
                المستخدم
              </li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="اختبار المعرفة">
          <Quiz
            question="ما هي Server Action في Next.js؟"
            options={[
              "دالة تعمل فقط على المتصفح",
              "دالة تعمل على الخادم ويمكن استدعاؤها من العميل",
              "نوع من API Routes",
              "مكتبة خارجية يجب تثبيتها",
            ]}
            correctAnswer={1}
            explanation="Server Action هي دالة تعمل على الخادم ويمكن استدعاؤها مباشرة من المكونات العميلية."
          />
          <Quiz
            question="ما الذي يجب وضعه في أعلى ملف Server Action؟"
            options={[
              '"use client"',
              '"use server"',
              '"use action"',
              '"use api"',
            ]}
            correctAnswer={1}
            explanation='يجب وضع "use server" في أعلى ملف الـ Server Action ليعمل بشكل صحيح.'
          />
          <Quiz
            question="أين يجب أن يكون التحقق من صحة البيانات في Server Actions؟"
            options={[
              "على المتصفح فقط",
              "على الخادم فقط",
              "على المتصفح والخادم معًا",
              "لا حاجة للتحقق",
            ]}
            correctAnswer={2}
            explanation="يجب التحقق على الخادم دائمًا للأمان، مع التحقق على المتصفح لتحسين تجربة المستخدم."
          />
          <Quiz
            question="ما هو useActionState؟"
            options={[
              "Hook لجلب البيانات",
              "Hook لإدارة حالة النموذج مع Server Actions",
              "Hook للمؤقتات",
              "Hook للمصادقة",
            ]}
            correctAnswer={1}
            explanation="useActionState هو Hook من React لإدارة حالة النموذج عند استخدام Server Actions."
          />
          <Quiz
            question="ما الفرق بين Server Actions و API Routes؟"
            options={[
              "لا يوجد فرق",
              "Server Actions أبسط للعمليات البسيطة، API Routes للعمليات المعقدة",
              "API Routes أحدث من Server Actions",
              "Server Actions تعمل فقط مع GET",
            ]}
            correctAnswer={1}
            explanation="Server Actions أبسط وأكثر مباشرة للعمليات البسيطة. API Routes مطلوبة للعمليات المعقدة أو عند الحاجة للتحكم الكامل."
          />
        </LessonSection>

        <LessonSection title="تحدي عملية">
          <Challenge
            title="بناء نموذج اتصال كامل"
            description="أنشئ نموذج اتصال احترافي مع Server Actions والتحقق من صحة البيانات"
            tasks={[
              "أنشئ Server Action لمعالجة بيانات النموذج",
              "أضف التحقق من: الاسم (حرفان على الأقل)، البريد الإلكتروني (صيغة صحيحة)، الرسالة (10 أحرف على الأقل)",
              "استخدم useActionState لإدارة حالة النموذج",
              "اعرض رسائل خطأ واضحة لكل حقل",
              "أضف حالة تحميل أثناء الإرسال (isPending)",
              "أظهر رسالة نجاح بعد الإرسال",
              "أضف حقل اختياري للهاتف مع تحقق من الصيغة",
              "تأكد من أن كل شيء يعمل بدون إعادة تحميل الصفحة",
            ]}
          />
        </LessonSection>

        <LessonSection title="ورقة مرجعية سريعة">
          <CheatSheet
            items={[
              {
                title: "Server Action básica",
                description: "الصيغة الأساسية لـ Server Action",
                code: `"use server";
export async function myAction(formData) {
  const value = formData.get("fieldName");
  // المعالجة هنا
  return { success: true };
}`,
              },
              {
                title: "useActionState",
                description: "إدارة حالة النموذج مع Server Action",
                code: `"use client";
import { useActionState } from 'react';

function MyForm() {
  const [state, formAction, isPending] = useActionState(
    myAction,
    { success: false }
  );
  return <form action={formAction}>...</form>;
}`,
              },
              {
                title: "التحقق بـ Zod",
                description: "التحقق من صحة البيانات",
                code: `import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

const result = schema.safeParse(data);
if (!result.success) {
  // معالجة الأخطاء
}`,
              },
              {
                title: "التحقق اليدوي",
                description: "بدون مكتبات خارجية",
                code: `"use server";
export async function validate(prevState, formData) {
  const errors = {};
  const name = formData.get("name");
  
  if (!name || name.length < 2) {
    errors.name = "الاسم قصير جداً";
  }
  
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }
  return { success: true };
}`,
              },
              {
                title: "حالة التحميل",
                description: "إظهار حالة التحميل",
                code: `"use client";
import { useActionState } from 'react';

function Form() {
  const [state, formAction, isPending] = useActionState(
    myAction, {}
  );
  
  return (
    <form action={formAction}>
      <button disabled={isPending}>
        {isPending ? "جاري..." : "إرسال"}
      </button>
    </form>
  );
}`,
              },
              {
                title: "رسائل النجاح والخطأ",
                description: "عرض رسائل للمستخدم",
                code: `// في Server Action
return { 
  success: true, 
  message: "تم بنجاح!" 
};

// في المكون
{state.message && (
  <div className={state.success ? "success" : "error"}>
    {state.message}
  </div>
)}`,
              },
              {
                title: "FormData متعدد",
                description: "التعامل مع جميع أنواع الحقول",
                code: `"use server";
export async function processForm(formData) {
  const text = formData.get("name");
  const file = formData.get("avatar");
  const checks = formData.getAll("interests");
  
  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    // معالجة الملف
  }
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
