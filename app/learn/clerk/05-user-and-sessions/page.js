import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function UserAndSessions() {
  const lesson = getLessonBySlug("clerk", "05-user-and-sessions");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* مقدمة */}
        <LessonSection title="مقدمة في إدارة المستخدم والجلسة">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            إدارة المستخدم (User Management) والجلسات (Sessions) من أهم الأجزاء في أي تطبيق ويب.
            Clerk يوفر لك مجموعة من المكونات والـ Hooks التي تسهّل عليك إدارة المستخدمين وجلساتهم.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في هذه الدرس، ستتعلم كيف تستخدم مكونات Clerk الجاهزة مثل <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<UserButton />"}</code> و <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<UserProfile />"}</code>،
            وكيف تستخدم الـ Hooks مثل <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useUser()</code> و <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useAuth()</code> في Client Components.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            ستتعلم أيضاً كيف تستخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">currentUser()</code> في Server Components و <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">clerkClient()</code> للوصول إلى Backend API.
          </p>
        </LessonSection>

        {/* مكون UserButton */}
        <LessonSection title="مكون UserButton">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            مكون <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<UserButton />"}</code> هو زر يعرض صورة المستخدم ويحتوي على قائمة منسدلة لإدارة الحساب.
            عندما ينقر المستخدم على الصورة، تظهر خيارات مثل الملف الشخصي، تغيير كلمة المرور، وتسجيل الخروج.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الاستخدام الأساسي:</h4>

          <CodeBlock
            code={`// components/Header.js
"use client";

import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1>منصتي التعليمية</h1>

      {/* زر المستخدم */}
      <UserButton />
    </header>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">خصائص UserButton المتقدمة:</h4>

          <CodeBlock
            code={`// مثال مع الخصائص المتقدمة
"use client";

import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1>منصتي التعليمية</h1>

      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: "w-10 h-10 rounded-full",
            userButtonPopoverCard: "shadow-lg",
          },
        }}
        userProfileMode="modal"
        routing="path"
        userProfileUrl="/profile"
      />
    </header>
  );
}`}
            language="javascript"
          />

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-6">
            <h4 className="text-blue-800 dark:text-blue-300 font-bold mb-4">خصائص UserButton الأساسية:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">afterSignOutUrl</code>: المسار الذي يوجه إليه المستخدم بعد تسجيل الخروج
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">appearance</code>: تخصيص مظهر المكون
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">userProfileMode</code>: وضع عرض الملف الشخصي (modal أو navigation)
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">routing</code>: نظام التوجيه (path أو hash)
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">userProfileUrl</code>: رابط صفحة الملف الشخصي
              </li>
            </ul>
          </div>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">دعم الجلسات المتعددة (Multi-session):</h4>

          <CodeBlock
            code={`// مثال مع دعم الجلسات المتعددة
"use client";

import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1>منصتي التعليمية</h1>

      <UserButton
        afterSignOutUrl="/"
        // دعم الجلسات المتعددة
        multiSessionAllowed={true}
        // ترتيب عرض الحسابات
        userSwitcherAllowed={true}
        // إظهار خيار تسجيل الخروج من جميع الحسابات
        showSignOutAllButton={true}
      />
    </header>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">تخصيص قائمة المستخدم:</h4>

          <CodeBlock
            code={`// تخصيص عناصر القائمة المنسدلة
"use client";

import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1>منصتي التعليمية</h1>

      <UserButton
        afterSignOutUrl="/"
        // تخصيص العناصر
        appearance={{
          elements: {
            // صندوق الصورة
            avatarBox: "w-12 h-12 rounded-full border-2 border-blue-500",
            // البطاقة
            userButtonPopoverCard: "bg-white shadow-xl rounded-lg",
            // روابط القائمة
            userButtonPopoverActionButton: "hover:bg-gray-100 rounded-md",
            // نصوص القائمة
            userButtonPopoverActionButtonText: "text-gray-700 font-medium",
            // أيقونات القائمة
            userButtonPopoverActionButtonIcon: "text-gray-500",
            // فاصل القائمة
            userButtonPopoverFooter: "border-t border-gray-200",
          },
        }}
      />
    </header>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* مكون UserProfile */}
        <LessonSection title="مكون UserProfile">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            مكون <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<UserProfile />"}</code> هو صفحة كاملة لإدارة الملف الشخصي.
            يوفر للمستخدم خيارات مثل تغيير الصورة، تعديل الاسم، تغيير كلمة المرور، وإدارة عناوين البريد الإلكتروني.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الاستخدام الأساسي:</h4>

          <CodeBlock
            code={`// app/profile/page.js
"use client";

import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">الملف الشخصي</h1>
        <UserProfile />
      </div>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">خصائص UserProfile المتقدمة:</h4>

          <CodeBlock
            code={`// مثال مع الخصائص المتقدمة
"use client";

import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">الملف الشخصي</h1>

        <UserProfile
          routing="path"
          path="/profile"
          appearance={{
            elements: {
              card: "shadow-lg rounded-xl",
              headerTitle: "text-2xl font-bold",
              headerSubtitle: "text-gray-500",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
              formButtonReset: "text-red-600 hover:text-red-700",
            },
          }}
          // تخصيص العناصر التي تظهر
          labelVariant: "floating",
          // إظهار قسم تغيير كلمة المرور
          passwordSettings={{
            showPasswordFields: true,
          }}
        />
      </div>
    </div>
  );
}`}
            language="javascript"
          />

          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-4">
            <p className="text-green-800 dark:text-green-300 text-sm">
              <strong>ملاحظة:</strong> مكون <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<UserProfile />"}</code> هو Client Component،
              لذا يجب أن يكون في ملف يحتوي على <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">"use client"</code>.
              يمكنك وضعه في صفحة منفصلة أو في نموذج منبثق (Modal).
            </p>
          </div>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">استخدام UserProfile كـ Modal:</h4>

          <CodeBlock
            code={`// مثال على استخدام UserProfile كـ Modal
"use client";

import { useState } from "react";
import { UserProfile } from "@clerk/nextjs";

export default function ProfileModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* زر فتح Modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        إدارة الحساب
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">الملف الشخصي</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                إغلاق
              </button>
            </div>
            <UserProfile routing="modal" />
          </div>
        </div>
      )}
    </div>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* hook useUser */}
        <LessonSection title="hook useUser في Client Components">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useUser()</code> هو Hook يُستخدم في Client Components للحصول على معلومات المستخدم الحالي.
            يُرجع كائن يحتوي على three خصائص أساسية: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">user</code> و <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">isLoaded</code> و <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">isSignedIn</code>.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الاستخدام الأساسي:</h4>

          <CodeBlock
            code={`// components/UserInfo.js
"use client";

import { useUser } from "@clerk/nextjs";

export default function UserInfo() {
  const { user, isLoaded, isSignedIn } = useUser();

  // التحقق من تحميل البيانات
  if (!isLoaded) {
    return <div>جاري التحميل...</div>;
  }

  // التحقق من تسجيل الدخول
  if (!isSignedIn) {
    return <div>لم تسجل الدخول بعد</div>;
  }

  return (
    <div dir="rtl" className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">معلومات المستخدم</h2>
      <p>الاسم: {user.fullName}</p>
      <p>البريد الإلكتروني: {user.primaryEmailAddress?.emailAddress}</p>
      <p>الصورة: {user.imageUrl ? "نعم" : "لا"}</p>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">خصائص user المتاحة:</h4>

          <CodeBlock
            code={`// عرض جميع خصائص المستخدم
"use client";

import { useUser } from "@clerk/nextjs";

export default function UserProperties() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div>جاري التحميل...</div>;

  return (
    <div dir="rtl" className="p-4">
      {/* الخصائص الأساسية */}
      <p>المعرف: {user.id}</p>
      <p>الاسم الأول: {user.firstName}</p>
      <p>الاسم الأخير: {user.lastName}</p>
      <p>الاسم الكامل: {user.fullName}</p>
      <p>البريد الإلكتروني: {user.primaryEmailAddress?.emailAddress}</p>
      <p>رقم الهاتف: {user.primaryPhoneNumber?.phoneNumber}</p>
      <p>تاريخ الإنشاء: {user.createdAt?.toLocaleDateString("ar-SA")}</p>
      <p>آخر تحديث: {user.updatedAt?.toLocaleDateString("ar-SA")}</p>

      {/* خصائص مخصصة */}
      <p>البيانات العامة: {JSON.stringify(user.publicMetadata)}</p>
      <p>البيانات الخاصة: {JSON.stringify(user.privateMetadata)}</p>

      {/* الصورة */}
      {user.imageUrl && (
        <img
          src={user.imageUrl}
          alt={user.fullName}
          className="w-16 h-16 rounded-full mt-2"
        />
      )}
    </div>
  );
}`}
            language="javascript"
          />

          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 dark:text-yellow-300 text-sm">
              <strong>تنبيه أمني:</strong> لا تمرر بيانات <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">privateMetadata</code> إلى Client Components.
              هذه البيانات تحتوي على معلومات حساسة ويجب أن تبقى على الخادم فقط. استخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">currentUser()</code> في Server Components للوصول إليها.
            </p>
          </div>
        </LessonSection>

        {/* hook useAuth */}
        <LessonSection title="hook useAuth">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useAuth()</code> هو Hook يُستخدم في Client Components للحصول على معلومات المصادقة.
            يُرجع معلومات مختلفة عن <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useUser()</code>، مثل <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">userId</code> و <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">sessionId</code> و <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">getToken</code>.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الاستخدام الأساسي:</h4>

          <CodeBlock
            code={`// components/AuthInfo.js
"use client";

import { useAuth } from "@clerk/nextjs";

export default function AuthInfo() {
  const {
    userId,
    sessionId,
    isLoaded,
    isSignedIn,
    getToken,
    signOut,
    has,
  } = useAuth();

  if (!isLoaded) {
    return <div>جاري التحميل...</div>;
  }

  if (!isSignedIn) {
    return <div>لم تسجل الدخول بعد</div>;
  }

  return (
    <div dir="rtl" className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">معلومات المصادقة</h2>
      <p>معرف المستخدم: {userId}</p>
      <p>معرف الجلسة: {sessionId}</p>
      <p>حالة التسجيل: {isSignedIn ? "مسجل" : "غير مسجل"}</p>

      <button
        onClick={() => signOut()}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        تسجيل الخروج
      </button>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">استخدام getToken للحصول على رمز الوصول:</h4>

          <CodeBlock
            code={`// مثال على استخدام getToken
"use client";

import { useAuth } from "@clerk/nextjs";

export default function TokenExample() {
  const { getToken, isLoaded } = useAuth();

  if (!isLoaded) return <div>جاري التحميل...</div>;

  const fetchProtectedData = async () => {
    try {
      // الحصول على رمز الوصول
      const token = await getToken();

      // استخدام الرمز في طلب API
      const response = await fetch("/api/protected-data", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const data = await response.json();
      console.log("البيانات:", data);
    } catch (error) {
      console.error("خطأ في جلب البيانات:", error);
    }
  };

  return (
    <button
      onClick={fetchProtectedData}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
    >
      جلب بيانات محمية
    </button>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">استخدام has للتحقق من الصلاحيات:</h4>

          <CodeBlock
            code={`// مثال على استخدام has للتحقق من الصلاحيات
"use client";

import { useAuth } from "@clerk/nextjs";

export default function PermissionCheck() {
  const { has, isLoaded } = useAuth();

  if (!isLoaded) return <div>جاري التحميل...</div>;

  // التحقق من الصلاحيات
  const canCreateCourse = has({ permission: "org:course:create" });
  const canDeleteCourse = has({ permission: "org:course:delete" });
  const canViewReports = has({ permission: "org:report:view" });
  const isAdmin = has({ role: "org:admin" });

  return (
    <div dir="rtl" className="p-4">
      <h2 className="text-xl font-bold mb-4">الصلاحيات</h2>

      {isAdmin && (
        <div className="p-2 bg-purple-100 text-purple-800 rounded mb-2">
          أنت مدير
        </div>
      )}

      {canCreateCourse && (
        <div className="p-2 bg-green-100 text-green-800 rounded mb-2">
          يمكنك إنشاء دورات
        </div>
      )}

      {canDeleteCourse && (
        <div className="p-2 bg-red-100 text-red-800 rounded mb-2">
          يمكنك حذف دورات
        </div>
      )}

      {canViewReports && (
        <div className="p-2 bg-blue-100 text-blue-800 rounded mb-2">
          يمكنك عرض التقارير
        </div>
      )}
    </div>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* currentUser() في Server Components */}
        <LessonSection title="currentUser() في Server Components">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الدالة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">currentUser()</code> تُستخدم في Server Components للحصول على الكائن الكامل للمستخدم الحالي.
            هذه الدالة تُرجع جميع بيانات المستخدم بما في ذلك <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">privateMetadata</code>.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الاستخدام الأساسي:</h4>

          <CodeBlock
            code={`// app/dashboard/page.js
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  // الحصول على المستخدم الحالي
  const user = await currentUser();

  if (!user) {
    return <div>يجب تسجيل الدخول</div>;
  }

  return (
    <div dir="rtl" className="p-6">
      <h1 className="text-2xl font-bold mb-4">لوحة التحكم</h1>

      <div className="bg-white p-4 rounded-lg shadow">
        <img
          src={user.imageUrl}
          alt={user.fullName}
          className="w-20 h-20 rounded-full mb-4"
        />
        <p className="text-lg font-semibold">{user.fullName}</p>
        <p className="text-gray-500">
          {user.primaryEmailAddress?.emailAddress}
        </p>
        <p className="text-sm text-gray-400 mt-2">
          عضو منذ: {user.createdAt?.toLocaleDateString("ar-SA")}
        </p>
      </div>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الوصول إلى البيانات الخاصة (privateMetadata):</h4>

          <CodeBlock
            code={`// مثال على الوصول إلى privateMetadata
import { currentUser } from "@clerk/nextjs/server";

export default async function AdminDashboard() {
  const user = await currentUser();

  if (!user) {
    return <div>يجب تسجيل الدخول</div>;
  }

  // الوصول إلى البيانات الخاصة
  const userRole = user.privateMetadata?.role;
  const subscription = user.privateMetadata?.subscription;
  const lastLogin = user.privateMetadata?.lastLogin;

  // الوصول إلى البيانات العامة
  const department = user.publicMetadata?.department;
  const preferredLanguage = user.publicMetadata?.preferredLanguage;

  return (
    <div dir="rtl" className="p-6">
      <h1 className="text-2xl font-bold mb-4">لوحة تحكم المدير</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">معلومات المستخدم</h3>
          <p>الاسم: {user.fullName}</p>
          <p>الدور: {userRole || "غير محدد"}</p>
          <p>القسم: {department || "غير محدد"}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">معلومات الاشتراك</h3>
          <p>النوع: {subscription || "مجاني"}</p>
          <p>آخر دخول: {lastLogin || "غير معروف"}</p>
          <p>اللغة المفضلة: {preferredLanguage || "العربية"}</p>
        </div>
      </div>
    </div>
  );
}`}
            language="javascript"
          />

          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-4">
            <p className="text-red-800 dark:text-red-300 text-sm">
              <strong>تحذير أمني مهم:</strong> لا تمرر كائن المستخدم الكامل إلى Client Components!
              الكائن يحتوي على <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">privateMetadata</code> الذي قد يحتوي على معلومات حساسة مثل كلمات المرور المشفرة أو رموز API.
              استخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">currentUser()</code> فقط في Server Components، واستخرج البيانات التي تحتاجها فقط.
            </p>
          </div>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">مقارنة بين currentUser() و useUser():</h4>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white mb-2">currentUser():</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>تُستخدم في Server Components فقط</li>
                  <li>تُرجع الكائن الكامل للمستخدم</li>
                  <li>تتضمن privateMetadata</li>
                  <li>تُستخدم مع async/await</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white mb-2">useUser():</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>تُستخدم في Client Components فقط</li>
                  <li>تُرجع user, isLoaded, isSignedIn</li>
                  <li>لا تتضمن privateMetadata</li>
                  <li>تُستخدم مع React Hooks</li>
                </ul>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* clerkClient() للوصول للـ Backend API */}
        <LessonSection title="clerkClient() للوصول للـ Backend API">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">clerkClient()</code> هو عميل يسمح لك بالوصول المباشر إلى Clerk Backend API.
            يمكنك استخدامه لجلب بيانات المستخدمين، تحديثهم، حذفهم، وإدارة الجلسات.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الحصول على المستخدمين:</h4>

          <CodeBlock
            code={`// app/api/users/route.js
import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // الحصول على جميع المستخدمين
    const client = await clerkClient();
    const users = await client.users.getUserList();

    return NextResponse.json({ users: users.data });
  } catch (error) {
    return NextResponse.json(
      { error: "خطأ في جلب المستخدمين" },
      { status: 500 }
    );
  }
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الحصول على مستخدم محدد:</h4>

          <CodeBlock
            code={`// مثال على جلب مستخدم محدد
import { clerkClient } from "@clerk/nextjs/server";

export async function getUser(userId) {
  try {
    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.primaryEmailAddress?.emailAddress,
      imageUrl: user.imageUrl,
      createdAt: user.createdAt,
    };
  } catch (error) {
    console.error("خطأ في جلب المستخدم:", error);
    return null;
  }
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">تحديث مستخدم:</h4>

          <CodeBlock
            code={`// مثال على تحديث مستخدم
import { clerkClient } from "@clerk/nextjs/server";

export async function updateUserRole(userId, newRole) {
  try {
    const client = await clerkClient();

    // تحديث الدور في البيانات العامة
    const updatedUser = await client.users.updateUser(userId, {
      publicMetadata: {
        role: newRole,
      },
    });

    return { success: true, user: updatedUser };
  } catch (error) {
    console.error("خطأ في تحديث المستخدم:", error);
    return { success: false, error: error.message };
  }
}

export async function updateUserProfile(userId, profileData) {
  try {
    const client = await clerkClient();

    const updatedUser = await client.users.updateUser(userId, {
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      publicMetadata: {
        department: profileData.department,
        preferredLanguage: profileData.preferredLanguage,
      },
    });

    return { success: true, user: updatedUser };
  } catch (error) {
    console.error("خطأ في تحديث الملف الشخصي:", error);
    return { success: false, error: error.message };
  }
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">حذف مستخدم:</h4>

          <CodeBlock
            code={`// مثال على حذف مستخدم
import { clerkClient } from "@clerk/nextjs/server";

export async function deleteUser(userId) {
  try {
    const client = await clerkClient();
    await client.users.deleteUser(userId);

    return { success: true, message: "تم حذف المستخدم بنجاح" };
  } catch (error) {
    console.error("خطأ في حذف المستخدم:", error);
    return { success: false, error: error.message };
  }
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">مثال شامل على استخدام clerkClient:</h4>

          <CodeBlock
            code={`// app/api/admin/users/route.js
import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "غير مصرح" },
      { status: 401 }
    );
  }

  const userRole = sessionClaims?.metadata?.role || sessionClaims?.role;

  if (userRole !== "admin") {
    return NextResponse.json(
      { error: "غير مصرح - يجب أن تكون مديراً" },
      { status: 403 }
    );
  }

  try {
    const client = await clerkClient();

    // جلب جميع المستخدمين
    const usersResponse = await client.users.getUserList();

    // تصفية البيانات (لا ترسل privateMetadata)
    const users = usersResponse.data.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.primaryEmailAddress?.emailAddress,
      imageUrl: user.imageUrl,
      role: user.publicMetadata?.role || "student",
      createdAt: user.createdAt,
    }));

    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json(
      { error: "خطأ في جلب المستخدمين" },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "غير مصرح" },
      { status: 401 }
    );
  }

  const userRole = sessionClaims?.metadata?.role || sessionClaims?.role;

  if (userRole !== "admin") {
    return NextResponse.json(
      { error: "غير مصرح" },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const { targetUserId, role } = body;

    const client = await clerkClient();

    const updatedUser = await client.users.updateUser(targetUserId, {
      publicMetadata: { role },
    });

    return NextResponse.json({
      user: {
        id: updatedUser.id,
        role: updatedUser.publicMetadata?.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "خطأ في تحديث المستخدم" },
      { status: 500 }
    );
  }
}`}
            language="javascript"
          />
        </LessonSection>

        {/* إدارة الجلسات */}
        <LessonSection title="إدارة الجلسات">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Clerk يوفر لك أدوات لإدارة جلسات المستخدمين. يمكنك استخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useSession()</code> للحصول على معلومات الجلسة الحالية،
            و <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useSessionList()</code> لعرض جميع الجلسات النشطة.
          </p>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الجلسة الحالية:</h4>

          <CodeBlock
            code={`// مثال على استخدام useSession
"use client";

import { useSession } from "@clerk/nextjs";

export default function SessionInfo() {
  const { session, isLoaded } = useSession();

  if (!isLoaded) return <div>جاري التحميل...</div>;

  return (
    <div dir="rtl" className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">معلومات الجلسة</h2>
      <p>معرف الجلسة: {session?.id}</p>
      <p>تاريخ الإنشاء: {session?.createdAt?.toLocaleDateString("ar-SA")}</p>
      <p>آخر نشاط: {session?.lastActiveAt?.toLocaleDateString("ar-SA")}</p>
      <p>صالحة حتى: {session?.expireAt?.toLocaleDateString("ar-SA")}</p>

      <div className="mt-4">
        <h3 className="font-bold mb-2">معلومات المستخدم في الجلسة:</h3>
        <p>الاسم: {session?.user?.fullName}</p>
        <p>البريد: {session?.user?.primaryEmailAddress?.emailAddress}</p>
      </div>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">عرض جميع الجلسات:</h4>

          <CodeBlock
            code={`// مثال على استخدام useSessionList
"use client";

import { useSessionList } from "@clerk/nextjs";

export default function SessionList() {
  const { sessions, isLoaded } = useSessionList();

  if (!isLoaded) return <div>جاري التحميل...</div>;

  return (
    <div dir="rtl" className="p-4">
      <h2 className="text-xl font-bold mb-4">الجلسات النشطة</h2>

      <div className="space-y-3">
        {sessions?.map((session) => (
          <div
            key={session.id}
            className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">
                  {session.user?.fullName || "مستخدم"}
                </p>
                <p className="text-sm text-gray-500">
                  {session.user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400">
                  آخر نشاط: {session.lastActiveAt?.toLocaleDateString("ar-SA")}
                </p>
                {session.current && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    الجلسة الحالية
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`}
            language="javascript"
          />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">الجلسات المتعددة (Multi-session):</h4>

          <CodeBlock
            code={`// مثال على الجلسات المتعددة
"use client";

import { useSessionList, useSession, useUser } from "@clerk/nextjs";

export default function MultiSession() {
  const { sessions, isLoaded } = useSessionList();
  const { session: currentSession } = useSession();
  const { user } = useUser();

  if (!isLoaded) return <div>جاري التحميل...</div>;

  return (
    <div dir="rtl" className="p-4">
      <h2 className="text-xl font-bold mb-4">الحسابات المتعددة</h2>

      {/* الحساب الحالي */}
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <h3 className="font-bold text-blue-800 mb-2">الحساب الحالي</h3>
        <div className="flex items-center gap-3">
          <img
            src={user?.imageUrl}
            alt={user?.fullName}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{user?.fullName}</p>
            <p className="text-sm text-gray-500">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>
      </div>

      {/* الحسابات الأخرى */}
      <h3 className="font-bold mb-2">حسابات أخرى</h3>
      <div className="space-y-2">
        {sessions?.filter((s) => s.id !== currentSession?.id).map((session) => (
          <div
            key={session.id}
            className="bg-white p-3 rounded-lg shadow flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <img
                src={session.user?.imageUrl}
                alt={session.user?.fullName}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">
                  {session.user?.fullName}
                </p>
                <p className="text-xs text-gray-500">
                  {session.user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>
            <button
              onClick={() => session.switch()}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              التبديل
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`}
            language="javascript"
          />
        </LessonSection>

        {/* Quiz */}
        <LessonSection title="اختبر معلوماتك">
          <Quiz
            question="ما هي الخصائص التي يُرجعها useUser() في Client Components؟"
            options={[
              "userId, sessionId, getToken",
              "user, isLoaded, isSignedIn",
              "session, user, token",
              "auth, user, permissions"
            ]}
            correctAnswer={1}
            explanation="useUser() يُرجع three خصائص: user (كائن المستخدم الكامل)، isLoaded (هل تم تحميل البيانات)، isSignedIn (هل المستخدم مسجل الدخول)."
          />

          <Quiz
            question="ما الفرق بين currentUser() و useUser()؟"
            options={[
              "لا يوجد فرق بينهما",
              "currentUser() تُستخدم في Server Components وuseUser() في Client Components",
              "useUser() تتضمن privateMetadata وcurrentUser() لا تتضمنها",
              "currentUser() أسرع من useUser()"
            ]}
            correctAnswer={1}
            explanation="currentUser() تُستخدم في Server Components وtُرجع الكائن الكامل بما في ذلك privateMetadata. useUser() تُستخدم في Client Components ولا تتضمن privateMetadata لأسباب أمنية."
          />

          <Quiz
            question="كيف تحصل على جميع الجلسات النشطة لمستخدم؟"
            options={[
              "useSession()",
              "useSessionList()",
              "useAuth()",
              "currentUser()"
            ]}
            correctAnswer={1}
            explanation="useSessionList() يُرجع مصفوفة من جميع الجلسات النشطة ل المستخدم. يمكنك استخدامها لعرض جميع الحسابات المتعددة والتبديل بينها."
          />
        </LessonSection>

        {/* CheatSheet */}
        <CheatSheet title="مرجع إدارة المستخدم والجلسات">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">المكونات:</h4>
              <CodeBlock
                code={`// زر المستخدم
<UserButton afterSignOutUrl="/" />

// صفحة الملف الشخصي
<UserProfile routing="path" path="/profile" />

// الملف الشخصي كـ Modal
<UserProfile routing="modal" />`}
                language="javascript"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Hooks (Client Components):</h4>
              <CodeBlock
                code={`// معلومات المستخدم
const { user, isLoaded, isSignedIn } = useUser();

// معلومات المصادقة
const { userId, sessionId, getToken, signOut, has } = useAuth();

// الجلسة الحالية
const { session } = useSession();

// جميع الجلسات
const { sessions } = useSessionList();`}
                language="javascript"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Server-side:</h4>
              <CodeBlock
                code={`// المستخدم الحالي (Server Components)
const user = await currentUser();

// Clerk Client API
const client = await clerkClient();
const users = await client.users.getUserList();
const user = await client.users.getUser(userId);
await client.users.updateUser(userId, { publicMetadata: {} });
await client.users.deleteUser(userId);`}
                language="javascript"
              />
            </div>
          </div>
        </CheatSheet>

        {/* Challenge */}
        <Challenge title="تحدي: بناء صفحة ملف شخصي مع إدارة الجلسات">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              قم ببناء صفحة ملف شخصي كاملة تحتوي على:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>صفحة ملف شخصي تستخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">{"<UserProfile />"}</code> مع تخصيص المظهر</li>
              <li>عرض معلومات المستخدم باستخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useUser()</code></li>
              <li>قائمة بالجلسات النشطة باستخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useSessionList()</code></li>
              <li>زر تسجيل الخروج باستخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">useAuth().signOut</code></li>
              <li>عرض الصلاحيات باستخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">has()</code></li>
            </ol>

            <CodeBlock
              code={`// الحل المتوقع
"use client";

import { useUser, useAuth, useSessionList } from "@clerk/nextjs";
import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const { has, signOut } = useAuth();
  const { sessions } = useSessionList();

  if (!isLoaded) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">الملف الشخصي</h1>

        {/* معلومات المستخدم */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex items-center gap-4">
            <img
              src={user?.imageUrl}
              alt={user?.fullName}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{user?.fullName}</h2>
              <p className="text-gray-500">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        </div>

        {/* الصلاحيات */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="font-bold mb-3">الصلاحيات</h3>
          <div className="flex gap-2">
            {has({ role: "org:admin" }) && (
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                مدير
              </span>
            )}
            {has({ role: "org:teacher" }) && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                معلم
              </span>
            )}
            {has({ role: "org:student" }) && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                طالب
              </span>
            )}
          </div>
        </div>

        {/* الجلسات */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="font-bold mb-3">الجلسات النشطة</h3>
          <div className="space-y-2">
            {sessions?.map((session) => (
              <div
                key={session.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">
                    {session.user?.fullName}
                  </p>
                  <p className="text-sm text-gray-500">
                    آخر نشاط: {session.lastActiveAt?.toLocaleDateString("ar-SA")}
                  </p>
                </div>
                {session.current && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    حالية
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* زر تسجيل الخروج */}
        <button
          onClick={() => signOut()}
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}`}
              language="javascript"
            />
          </div>
        </Challenge>

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
