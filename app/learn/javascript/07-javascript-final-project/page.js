// =====================================================
// ملف: page.js
// المكان: app/learn/javascript/07-javascript-final-project/page.js
// الوظيفة: الدرس الأخير - مشروع JavaScript تطبيقي
//          بناء نظام إدارة طلاب يجمع كل المفاهيم
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

// =====================================================
// 💡 هذه الصفحة مكون خادم (Server Component)
//    نحصل على بيانات الدرس من curriculum
// =====================================================

export default function JavaScriptFinalProject() {
  const lesson = getLessonBySlug("javascript", "07-javascript-final-project");

  if (!lesson) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>
          الدرس غير موجود
        </h1>
      </div>
    );
  }

  const { stage, lessonIndex, totalLessons, prevLesson, prevLessonStage, nextLesson, nextLessonStage } = lesson;

  // =====================================================
  // 📦 بيانات الطلاب الأولية للمشروع
  // =====================================================
  const initialStudentsCode = `// ==========================================
// 📦 بيانات الطلاب الأولية
// مصفوفة من الكائنات - كل كائن يمثل طالبًا
// ==========================================

const students = [
  {
    id: 1,
    name: "أحمد محمد",
    age: 22,
    grades: [85, 92, 78, 90, 88],
    department: "علوم الحاسب",
    status: "نشط",
  },
  {
    id: 2,
    name: "فاطمة العلي",
    age: 21,
    grades: [95, 88, 92, 97, 91],
    department: "هندسة البرمجيات",
    status: "نشط",
  },
  {
    id: 3,
    name: "خالد الشمري",
    age: 23,
    grades: [70, 65, 72, 68, 74],
    department: "علوم الحاسب",
    status: "نشط",
  },
  {
    id: 4,
    name: "نورة السعيد",
    age: 20,
    grades: [60, 55, 58, 62, 57],
    department: "هندسة البرمجيات",
    status: "معلّق",
  },
  {
    id: 5,
    name: "عبدالرحمن الحربي",
    age: 24,
    grades: [98, 95, 92, 99, 96],
    department: "علوم الحاسب",
    status: "نشط",
  },
  {
    id: 6,
    name: "ريم القحطاني",
    age: 22,
    grades: [78, 82, 75, 80, 77],
    department: "هندسة البرمجيات",
    status: "منسحب",
  },
];`;

  // =====================================================
  // 🔧 الخطوة 1: حساب المتوسط
  // =====================================================
  const calculateAverageCode = `// ==========================================
// 🔧 الخطوة 1: دوال حساب المتوسط
// استخدام reduce لجمع الدرجات وقسمتها على عددها
// ==========================================

// دالة Arrow Function بسيطة لحساب متوسط مصفوفة أرقام
const calculateAverage = (grades) => {
  if (grades.length === 0) return 0;

  // reduce: تمر على كل عنصر وتجمعها في النتيجة النهائية
  const sum = grades.reduce((accumulator, grade) => {
    return accumulator + grade;
  }, 0); // القيمة الأولية للـ accumulator = 0

  return sum / grades.length;
};

// اختبار الدالة
console.log(calculateAverage([85, 92, 78, 90, 88]));
// النتيجة: 86.6

console.log(calculateAverage([95, 88, 92, 97, 91]));
// النتيجة: 92.6`;

  // =====================================================
  // 🏷️ الخطوة 2: تسمية المعدل
  // =====================================================
  const getGradeLabelCode = `// ==========================================
// 🏷️ تحديد تسمية المعدل بناءً على الدرجة
// استخدام if/else مع Template Literals
// ==========================================

const getGradeLabel = (average) => {
  if (average >= 90) return "ممتاز";
  if (average >= 80) return "جيد جداً";
  if (average >= 70) return "جيد";
  if (average >= 60) return "مقبول";
  return "راسب";
};

// دالة لإنشاء كائن طالب مُحسّن يحتوي على المتوسط والتسمية
const enrichStudent = (student) => {
  const average = calculateAverage(student.grades);
  const gradeLabel = getGradeLabel(average);

  // نستخدم Spread Operator لإضافة حقول جديدة للكائن
  return {
    ...student,
    average: Math.round(average * 100) / 100, // تقريب لخانتين عشريتين
    gradeLabel,
  };
};

// تطبيق الدالة على جميع الطلاب
const enrichedStudents = students.map(enrichStudent);

console.log(enrichedStudents[0]);
// {
//   id: 1,
//   name: "أحمد محمد",
//   age: 22,
//   grades: [85, 92, 78, 90, 88],
//   department: "علوم الحاسب",
//   status: "نشط",
//   average: 86.6,
//   gradeLabel: "جيد جداً"
// }`;

  // =====================================================
  // 🔍 الخطوة 3: البحث والتصفية
  // =====================================================
  const filteringCode = `// ==========================================
// 🔍 الخطوة 3: البحث والتصفية
// استخدام filter, find, some, every
// ==========================================

// --- filter: استخراج طلاب بحالة معينة ---
const activeStudents = enrichedStudents.filter(
  (student) => student.status === "نشط"
);
console.log(\`الطلاب النشطين: \${activeStudents.length}\`);
// النتيجة: "الطلاب النشطين: 4"

// --- find: إيجاد طالب محدد بالاسم ---
const findStudentByName = (name) => {
  return enrichedStudents.find((student) =>
    student.name.includes(name) // includes تبحث عن جزء من النص
  );
};

console.log(findStudentByName("فاطمة"));
// النتيجة: كائن فاطمة العلي الكامل

// --- filter: الطلاب المتفوقون (معدل > 90) ---
const topStudents = enrichedStudents.filter(
  (student) => student.average > 90
);

console.log("الطلاب المتفوقون:");
topStudents.forEach((student) => {
  console.log(\`  \${student.name}: \${student.average}\`);
});
// النتيجة: فاطمة العلي 92.6، عبدالرحمن الحربي 96.0

// --- every: هل كل طلاب القسم متفوقون؟ ---
const areAllTopInCS = activeStudents
  .filter((s) => s.department === "علوم الحاسب")
  .every((student) => student.average >= 90);
console.log(\`كل طلاب علوم الحاسب متفوقون؟ \${areAllTopInCS}\`);
// النتيجة: false (لأن أحمد 86.6 و خالد 70.2)

// --- some: هل يوجد طالب راسب في القسم؟ ---
const hasFailing = enrichedStudents.some(
  (student) => student.average < 60
);
console.log(\`هل يوجد طالب راسب؟ \${hasFailing}\`);
// النتيجة: false`;

  // =====================================================
  // 📊 الخطوة 4: الإحصائيات
  // =====================================================
  const statisticsCode = `// ==========================================
// 📊 الخطوة 4: حساب الإحصائيات
// استخدام reduce لبناء كائن إحصائيات كامل
// ==========================================

const getStatistics = (studentsList) => {
  // reduce لحساب عدة إحصائيات في مرور واحد
  const stats = studentsList.reduce(
    (acc, student) => {
      // حساب مجموع المعدلات
      acc.totalAverage += student.average;

      // تحديث أعلى معدل
      if (student.average > acc.highest.average) {
        acc.highest = { name: student.name, average: student.average };
      }

      // تحديث أدنى معدل
      if (student.average < acc.lowest.average) {
        acc.lowest = { name: student.name, average: student.average };
      }

      // عدد النشطين والمعلّقين
      if (student.status === "نشط") acc.activeCount++;
      if (student.status === "معلّق") acc.suspendedCount++;

      return acc;
    },
    {
      totalAverage: 0,
      highest: { name: "", average: 0 },
      lowest: { name: "", average: Infinity }, // Infinity أي رقم أقل منها
      activeCount: 0,
      suspendedCount: 0,
      count: studentsList.length,
    }
  );

  // حساب المتوسط العام
  stats.average = Math.round((stats.totalAverage / stats.count) * 100) / 100;

  return stats;
};

const stats = getStatistics(enrichedStudents);

console.log("--- الإحصائيات العامة ---");
console.log(\`عدد الطلاب: \${stats.count}\`);
console.log(\`المعدل العام: \${stats.average}\`);
console.log(\`أعلى معدل: \${stats.highest.name} (\${stats.highest.average})\`);
console.log(\`أدنى معدل: \${stats.lowest.name} (\${stats.lowest.average})\`);
console.log(\`النشطون: \${stats.activeCount}\`);
console.log(\`المعلّقون: \${stats.suspendedCount}\`);`;

  // =====================================================
  // 📋 الخطوة 5: عرض التقارير
  // =====================================================
  const reportsCode = `// ==========================================
// 📋 الخطوة 5: إنشاء التقارير
// استخدام Template Literals لإنشاء نصوص منسقة
// ==========================================

// تقرير مفصل لطالب واحد
const generateStudentReport = (student) => {
  const { name, age, department, grades, average, gradeLabel } = student;

  // Destructuring للحصول على القيم مباشرة

  return \`
╔══════════════════════════════════════╗
║        تقرير الطالب/ة               ║
╠══════════════════════════════════════╣
║ الاسم: \${name}
║ العمر: \${age}
║ القسم: \${department}
║──────────────────────────────────────║
║ الدرجات:
║   الفصل الأول:   \${grades[0]}
║   الفصل الثاني:  \${grades[1]}
║   الفصل الثالث:  \${grades[2]}
║   الفصل الرابع:  \${grades[3]}
║   النهائي:       \${grades[4]}
║──────────────────────────────────────║
║ المتوسط: \${average} - \${gradeLabel}
╚══════════════════════════════════════╝\`;
};

// طباعة تقرير أحمد
console.log(generateStudentReport(enrichedStudents[0]));

// تقرير ملخص لجميع الطلاب
const generateClassReport = (studentsList) => {
  // map لإنشاء صفوف الجدول
  const rows = studentsList.map((student, index) => {
    const { name, department, average, gradeLabel } = student;
    return \`|\${index + 1}|\${name}|\${department}|\${average}|\${gradeLabel}|\`;
  });

  const header = \`|م|الاسم|المعدل|التسمية|
|---|---|---|---|\`;
  const divider = \`|---|---|---|---|---|---|\`;

  return [header, divider, ...rows].join("\\n");
};

console.log(generateClassReport(enrichedStudents));`;

  // =====================================================
  // ➕ إدارة البيانات: إضافة وحذف وتعديل
  // =====================================================
  const dataManagementCode = `// ==========================================
// ➕ إدارة البيانات: إضافة وحذف وتعديل
// استخدام Spread, filter, map
// ==========================================

// --- إضافة طالب جديد (لا نعدّل المصفوفة الأصلية!) ---
const addStudent = (studentsList, newStudent) => {
  // Spread Operator لدمج المصفوفة القديمة مع العنصر الجديد
  return [
    ...studentsList,
    {
      ...newStudent,
      id: studentsList.length + 1, // معرّف تلقائي
    },
  ];
};

const newStudent = {
  name: "سارة الدوسري",
  age: 21,
  grades: [88, 90, 85, 92, 87],
  department: "علوم الحاسب",
  status: "نشط",
};

const updatedStudents = addStudent(enrichedStudents, newStudent);
console.log(\`بعد الإضافة: \${updatedStudents.length} طلاب\`);
// النتيجة: "بعد الإضافة: 7 طلاب"

// --- حذف طالب بالاسم ---
const removeStudent = (studentsList, studentName) => {
  // filter تُرجع مصفوفة جديدة بدون الطالب المحذوف
  return studentsList.filter(
    (student) => student.name !== studentName
  );
};

const studentsAfterDelete = removeStudent(updatedStudents, "ريم القحطاني");
console.log(\`بعد الحذف: \${studentsAfterDelete.length} طلاب\`);
// النتيجة: "بعد الحذف: 6 طلاب"

// --- تحديث درجات طالب ---
const updateStudentGrades = (studentsList, studentName, newGrades) => {
  // map تمر على كل عنصر وتعيد الكائن المعدّل أو الأصلي
  return studentsList.map((student) => {
    if (student.name === studentName) {
      const updatedAverage = calculateAverage(newGrades);
      return {
        ...student,
        grades: newGrades,
        average: Math.round(updatedAverage * 100) / 100,
        gradeLabel: getGradeLabel(updatedAverage),
      };
    }
    return student; // إرجاع الكائن كما هو إذا لم يتطابق الاسم
  });
};

const finalStudents = updateStudentGrades(
  updatedStudents,
  "أحمد محمد",
  [90, 95, 85, 92, 91]
);

console.log(\`معدل أحمد بعد التحديث: \${finalStudents[0].average}\`);
// النتيجة: 90.6`;

  // =====================================================
  // 📦 الخطوة 6: تنظيم الكود كـ Modules
  // =====================================================
  const modulesCode = `// ==========================================
// 📦 الخطوة 6: تنظيم الكود كـ Modules
// في المشاريع الحقيقية نقسم الكود لملفات منفصلة
// ==========================================

// ═══════════════════════════════════════
// 📄 students.js - إدارة بيانات الطلاب
// ═══════════════════════════════════════

// export: تصدير الدوال ليستخدمة في ملفات أخرى
export const createStudent = (name, age, department, grades) => ({
  id: Date.now(), // معرّف فريد
  name,
  age,
  department,
  grades,
  status: "نشط",
});

export const getStudentById = (students, id) =>
  students.find((s) => s.id === id);

export const searchStudents = (students, query) =>
  students.filter((s) =>
    s.name.includes(query) || s.department.includes(query)
  );

// ═══════════════════════════════════════
// 📄 grades.js - حسابات الدرجات
// ═══════════════════════════════════════

export const calculateAverage = (grades) => {
  if (grades.length === 0) return 0;
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
};

export const getGradeLabel = (average) => {
  if (average >= 90) return "ممتاز";
  if (average >= 80) return "جيد جداً";
  if (average >= 70) return "جيد";
  if (average >= 60) return "مقبول";
  return "راسب";
};

// ═══════════════════════════════════════
// 📄 reports.js - إنشاء التقارير
// ═══════════════════════════════════════

export const generateStudentReport = (student) => {
  const { name, department, average, gradeLabel } = student;
  return \`\${name} | \${department} | \${average} | \${gradeLabel}\`;
};

// ═══════════════════════════════════════
// 📄 app.js - التطبيق الرئيسي
// ═══════════════════════════════════════

// import: استيراد الدوال من الملفات الأخرى
// import { createStudent, searchStudents } from './students.js';
// import { calculateAverage, getGradeLabel } from './grades.js';
// import { generateStudentReport } from './reports.js';

// في بيئة النافذة (Browser) نستخدم:
// <script type="module" src="app.js"></script>
// ═══════════════════════════════════════`;

  // =====================================================
  // ⏳ الخطوة 7: المحاكاة غير المتزامنة
  // =====================================================
  const asyncCode = `// ==========================================
// ⏳ الخطوة 7: محاكاة جلب البيانات من الخادم
// استخدام async/await و Promises
// ==========================================

// محاكاة دالة تجلب بيانات من خادم (API)
// في الواقع نستخدم fetch() لكن هنا نحاكيها بـ setTimeout
const fetchStudentsFromAPI = () => {
  return new Promise((resolve) => {
    // محاكاة تأخير الشبكة (2 ثانية)
    setTimeout(() => {
      const apiData = [
        { id: 1, name: "أحمد محمد", grades: [85, 92, 78, 90, 88] },
        { id: 2, name: "فاطمة العلي", grades: [95, 88, 92, 97, 91] },
      ];
      resolve(apiData);
    }, 2000);
  });
};

// محاكاة دالة تجلب طالب واحد
const fetchStudentById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const students = {
        1: { id: 1, name: "أحمد محمد", grades: [85, 92, 78, 90, 88] },
        2: { id: 2, name: "فاطمة العلي", grades: [95, 88, 92, 97, 91] },
      };

      if (students[id]) {
        resolve(students[id]); // نجاح
      } else {
        reject(new Error(\`الطالب رقم \${id} غير موجود\`)); // فشل
      }
    }, 1000);
  });
};

// === استخدام async/await ===

// دالة رئيسية لتشغيل العملية
const main = async () => {
  console.log("⏳ جاري تحميل البيانات...");

  try {
    // await: ينتظر انتهاء العملية ثم يأخذ النتيجة
    const students = await fetchStudentsFromAPI();
    console.log(\`✅ تم تحميل \${students.length} طلاب\`);

    // جلب طالب محدد
    const student = await fetchStudentById(2);
    console.log(\`✅ الطالب: \${student.name}\`);

    // محاكاة خطأ
    const missing = await fetchStudentById(99);
    console.log(missing); // لن يصل هنا

  } catch (error) {
    // catch: يلتقط أي خطأ يحدث أثناء الـ await
    console.log(\`❌ خطأ: \${error.message}\`);
  } finally {
    // finally: تنفيذ دائماً (سواء نجح أو فشل)
    console.log("🏁 انتهت العملية");
  }
};

// تشغيل الدالة
// main();

// ═══════════════════════════════════════
// 💡 مثال عملي أكثر: دالة 처리 بيانات كاملة
// ═══════════════════════════════════════

const processStudentData = async () => {
  try {
    console.log("1️⃣ جاري جلب بيانات الطلاب...");
    const rawStudents = await fetchStudentsFromAPI();

    console.log("2️⃣ جاري حساب المعدلات...");
    // map لتحويل كل طالب إلى كائن مُحسّن
    const processed = rawStudents.map((s) => ({
      ...s,
      average: calculateAverage(s.grades),
      gradeLabel: getGradeLabel(calculateAverage(s.grades)),
    }));

    console.log("3️⃣ جاري حساب الإحصائيات...");
    // reduce لحساب الإحصائيات
    const stats = processed.reduce(
      (acc, s) => ({
        count: acc.count + 1,
        totalAvg: acc.totalAvg + s.average,
        top: s.average > (acc.top?.average || 0) ? s : acc.top,
      }),
      { count: 0, totalAvg: 0, top: null }
    );

    console.log("\\n📊 النتائج:");
    console.log(\`عدد الطلاب: \${stats.count}\`);
    console.log(\`المعدل العام: \${(stats.totalAvg / stats.count).toFixed(2)}\`);
    console.log(\`الأعلى معدلًا: \${stats.top.name} (\${stats.top.average.toFixed(2)})\`);

    return processed;
  } catch (error) {
    console.error("❌ فشلت المعالجة:", error.message);
    return [];
  }
};

// تشغيل المعالجة
// processStudentData();`;

  // =====================================================
  // 🎯 التحديات الإضافية
  // =====================================================

  // =====================================================
  // 📋 ورقة الغش
  // =====================================================

  return (
    <div className="container mx-auto px-4 py-12">
      <LessonHeader
        stage={stage}
        lesson={lesson}
        lessonIndex={lessonIndex}
        totalLessons={totalLessons}
      />

      {/* ==========================================
          القسم 1: مقدمة المشروع
          ========================================== */}
      <LessonSection title="1. مقدمة المشروع">
        <p className="text-lg mb-4" style={{ color: "var(--foreground)" }}>
          مرحباً بك في الدرس الأخير من مرحلة JavaScript + ES6+! في هذا الدرس سنقوم ببناء مشروع عملي يجمع <strong>كل المفاهيم</strong> التي تعلمتها في الدروس السابقة.
        </p>

        <div
          className="p-4 rounded-xl border mb-4"
          style={{ background: "rgba(247, 223, 30, 0.1)", borderColor: "#f7df1e" }}
        >
          <p className="text-sm" style={{ color: "#b8960a" }}>
            <strong>مشروعنا:</strong> نظام إدارة طلاب (Student Management System) يحتوي على بيانات طلاب ومعدلاتهم. سنقوم ببناء دوال لإضافة الطلاب وحساب المتوسط وتصفية وعرض التقارير.
          </p>
        </div>

        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          هذا المشروع مصمم ليكون <strong>جسرًا</strong> بين أساسيات JavaScript ومكتبة React. كل مفهوم ستستخدمه هنا ستجده في React بشكل مباشر:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: "var(--foreground)" }}>
          <li>المصفوفات والكائنات = <strong>Props و State</strong> في React</li>
          <li>الدوال المساعدة = <strong>Custom Hooks</strong></li>
          <li>Transform البيانات = <strong>JSX و Rendering</strong></li>
          <li>async/await = <strong>useEffect و Data Fetching</strong></li>
          <li>Modules = <strong>تقسيم المكونات</strong></li>
        </ul>

        <CodeBlock language="javascript" code={`// ✅ نظرة سريعة على ما سنبنيه:
//
// 1. مصفوفة بيانات طلاب (Data)
// 2. دوال حساب المتوسط (Logic)
// 3. تصفية وبحث (Filtering)
// 4. إحصائيات (Statistics)
// 5. تقارير (Reports)
// 6. إضافة وحذف وتعديل (CRUD)
// 7. محاكاة جلب بيانات (Async)
//
// مجموع: نظام كامل يجمع كل ما تعلمته! 🎉`} />
      </LessonSection>

      {/* ==========================================
          القسم 2: ماذا سنتعلم
          ========================================== */}
      <LessonSection title="2. ماذا سنتعلم">
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          من خلال هذا المشروع ستطبق بشكل عملي على:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            { icon: "📦", title: "هياكل البيانات", desc: "مصفوفات وكائنات (Arrays & Objects)" },
            { icon: "🔧", title: "Arrow Functions", desc: "كتابة دوال مختصرة وفعّالة" },
            { icon: "🎭", title: "Destructuring", desc: "فك البنى بناءً على النمط" },
            { icon: "📦", title: "Spread Operator", desc: "نسخ ودمج المصفوفات والكائنات" },
            { icon: "🗺️", title: "map", desc: "تحويل كل عنصر في مصفوفة" },
            { icon: "🔍", title: "filter", desc: "تصفية العناصر بشرط معين" },
            { icon: "📊", title: "reduce", desc: "تجميع العناصر في قيمة واحدة" },
            { icon: "🔎", title: "find & some & every", desc: "البحث والتحقق الشرطي" },
            { icon: "🧩", title: "Object Methods", desc: "Object.keys, values, entries" },
            { icon: "📝", title: "Template Literals", desc: "إنشاء نصوص ديناميكية" },
            { icon: "📦", title: "Modules", desc: "تقسيم الكود لملفات" },
            { icon: "⏳", title: "async/await", desc: "البرمجة غير المتزامنة" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-lg border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold" style={{ color: "var(--foreground)" }}>{item.title}</p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Quiz
          question="أي من المفاهيم التالية سنستخدمها لحساب متوسط مجموعة درجات في مصفوفة؟"
          options={[
            "map - لتحويل العناصر",
            "filter - لتصفية العناصر",
            "reduce - لتجميع العناصر في قيمة واحدة",
            "find - للبحث عن عنصر محدد",
          ]}
          correctAnswer={2}
          explanation="reduce هي الأنسب لأنها تمر على كل عنصر وتجمعها في قيمة واحدة (المجموع)، ثم نقسم على عدد العناصر للحصول على المتوسط."
        />
      </LessonSection>

      {/* ==========================================
          القسم 3: هيكل المشروع
          ========================================== */}
      <LessonSection title="3. هيكل المشروع">
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          في المشاريع الحقيقية نقسم الكود لملفات منفصلة. لكن لأغراض التعليم سنكتب كل شيء في ملف واحد، ثم نُظهر كيف يمكن تقسيمه.
        </p>

        <CodeBlock language="markdown" code={`📂 student-management-system/
├── 📂 src/
│   ├── 📄 students.js        ← بيانات وعمليات الطلاب
│   ├── 📄 grades.js          ← حسابات الدرجات والمعدلات
│   ├── 📄 reports.js         ← إنشاء التقارير
│   ├── 📄 statistics.js      ← حساب الإحصائيات
│   ├── 📄 async-utils.js     ← دوال المحاكاة غير المتزامنة
│   └── 📄 app.js             ← التطبيق الرئيسي
├── 📄 index.html             ← الصفحة الرئيسية
└── 📄 README.md              ← وثائق المشروع`} />

        <p className="mt-4 mb-4" style={{ color: "var(--foreground)" }}>
          <strong>المبدأ الأساسي:</strong> كل ملف مسؤول عن مهمة واحدة فقط (Single Responsibility Principle). هذا المبدأ ستفعدينه كثيراً في React عند تقسيم المكونات.
        </p>

        <CodeBlock language="javascript" code={`// ==========================================
// 📐 الهيكل العام للمشروع
// ==========================================

// ═══════════════════════════════════════
// المرحلة 1: تعريف البيانات
// ═══════════════════════════════════════
// مصفوفة من الكائنات تمثل بيانات الطلاب

// ═══════════════════════════════════════
// المرحلة 2: دوال المعالجة
// ═══════════════════════════════════════
// حساب المتوسط، تسمية المعدل، إلخ

// ═══════════════════════════════════════
// المرحلة 3: دوال البحث والتصفية
// ═══════════════════════════════════════
// فلترة، بحث، تحقق شرطي

// ═══════════════════════════════════════
// المرحلة 4: الإحصائيات والتقارير
// ═══════════════════════════════════════
// تجميع البيانات وعرضها

// ═══════════════════════════════════════
// المرحلة 5: إدارة البيانات
// ═══════════════════════════════════════
// إضافة وحذف وتعديل (CRUD)

// ═══════════════════════════════════════
// المرحلة 6: المحاكاة غير المتزامنة
// ═══════════════════════════════════════
// محاكاة جلب البيانات من خادم`} />
      </LessonSection>

      {/* ==========================================
          القسم 4: خطوة 1 - إعداد البيانات
          ========================================== */}
      <LessonSection title="4. خطوة 1: إعداد البيانات">
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          الخطوة الأولى هي تحديد شكل البيانات التي سيعمل عليها مشروعنا. نستخدم <strong>مصفوفة من الكائنات</strong>، وهو النمط الأكثر شيوعاً لتمثيل مجموعات من البيانات في JavaScript (ونفس النمط تستخدمه في React مع API).
        </p>

        <CodeBlock language="javascript" code={initialStudentsCode} />

        <div
          className="p-4 rounded-xl border mt-4"
          style={{ background: "rgba(56, 189, 248, 0.1)", borderColor: "var(--primary)" }}
        >
          <p className="text-sm font-bold mb-2" style={{ color: "var(--primary)" }}>
            ملاحظة مهمة:
          </p>
          <p className="text-sm" style={{ color: "var(--foreground)" }}>
            لاحظ أن كل كائن في المصفوفة يحتوي على نفس الهيكل (id, name, age, grades, department, status). هذا النمط يُعرف بـ <strong>"Shape"</strong> وهو ما يُعرّفه TypeScript لاحقاً في تحديد أنواع البيانات.
          </p>
        </div>
      </LessonSection>

      {/* ==========================================
          القسم 5: خطوة 2 - المنطق الأساسي
          ========================================== */}
      <LessonSection title="5. خطوة 2: المنطق الأساسي">
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          الآن نبني الدوال الأساسية للمشروع. نبدأ بحساب المتوسط باستخدام <strong>reduce</strong>، ثم تسمية المعدل، ثم إثراء بيانات الطلاب.
        </p>

        <h3 className="text-2xl font-bold mb-3 mt-8" style={{ color: "var(--foreground)" }}>
          حساب المتوسط بـ reduce
        </h3>
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          دالة <code>reduce</code> هي من أقوى دوال المصفوفات. تأخذ callback وقيمة ابتدائية، ثم تمر على كل عنصر وتجمع النتيجة في المتغير accumulator:
        </p>
        <CodeBlock language="javascript" code={calculateAverageCode} />

        <h3 className="text-2xl font-bold mb-3 mt-8" style={{ color: "var(--foreground)" }}>
          إثراء البيانات بـ map و Spread
        </h3>
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          بعد حساب المتوسط، نستخدم <code>map</code> لإنشاء نسخة مُحسّنة من كل طالب تحتوي على المتوسط وتسمية المعدل. نستخدم <code>Spread Operator</code> لإضافة حقول جديدة دون تعديل الكائن الأصلي:
        </p>
        <CodeBlock language="javascript" code={getGradeLabelCode} />
      </LessonSection>

      {/* ==========================================
          القسم 6: خطوة 3 - الدوال المساعدة
          ========================================== */}
      <LessonSection title="6. خطوة 3: الدوال المساعدة (البحث والتصفية)">
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          الآن نبني الدوال التي تبحث في البيانات وتُصفّيها. هذه الدوال هي أساس عمل أي تطبيق ويب: البحث، الفلترة، والتحقق الشرطي.
        </p>

        <CodeBlock language="javascript" code={filteringCode} />

        <h3 className="text-2xl font-bold mb-3 mt-8" style={{ color: "var(--foreground)" }}>
          الفرق بين المетодات
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-4" style={{ border: "1px solid var(--border)" }}>
            <thead>
              <tr style={{ background: "var(--surface)" }}>
                <th className="p-3 text-right" style={{ color: "var(--foreground)", border: "1px solid var(--border)" }}>المethod</th>
                <th className="p-3 text-right" style={{ color: "var(--foreground)", border: "1px solid var(--border)" }}>الوظيفة</th>
                <th className="p-3 text-right" style={{ color: "var(--foreground)", border: "1px solid var(--border)" }}>الناتج</th>
              </tr>
            </thead>
            <tbody>
              {[
                { method: "filter()", desc: "إرجاع مصفوفة بالعناصر التي تحقق شرطاً", result: "مصفوفة جديدة" },
                { method: "find()", desc: "إرجاع أول عنصر يحقق الشرط", result: "عنصر واحد" },
                { method: "some()", desc: "هل يوجد عنصر واحد على الأقل يحقق الشرط؟", result: "true/false" },
                { method: "every()", desc: "هل كل العناصر تحقق الشرط؟", result: "true/false" },
                { method: "map()", desc: "تحويل كل عنصر لقيمة جديدة", result: "مصفوفة جديدة" },
                { method: "reduce()", desc: "تجميع العناصر في قيمة واحدة", result: "قيمة واحدة" },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="p-3 font-mono text-sm" style={{ color: "var(--primary)", border: "1px solid var(--border)" }}>{row.method}</td>
                  <td className="p-3 text-sm" style={{ color: "var(--foreground)", border: "1px solid var(--border)" }}>{row.desc}</td>
                  <td className="p-3 text-sm" style={{ color: "var(--muted)", border: "1px solid var(--border)" }}>{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LessonSection>

      {/* ==========================================
          القسم 7: خطوة 4 - دمج الكل معاً
          ========================================== */}
      <LessonSection title="7. خطوة 4: دمج الكل معاً (الإحصائيات والتقارير)">
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          الآن نجمع كل الدوال في نظام متكامل: إحصائيات عامة، تقارير مفصلة، وإدارة البيانات (إضافة وحذف وتعديل).
        </p>

        <h3 className="text-2xl font-bold mb-3 mt-8" style={{ color: "var(--foreground)" }}>
          الإحصائيات العامة
        </h3>
        <CodeBlock language="javascript" code={statisticsCode} />

        <h3 className="text-2xl font-bold mb-3 mt-8" style={{ color: "var(--foreground)" }}>
          إنشاء التقارير
        </h3>
        <CodeBlock language="javascript" code={reportsCode} />

        <h3 className="text-2xl font-bold mb-3 mt-8" style={{ color: "var(--foreground)" }}>
          إدارة البيانات (CRUD)
        </h3>
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          العمليات الأساسية على البيانات: <strong>Create</strong> (إضافة)، <strong>Read</strong> (قراءة)، <strong>Update</strong> (تعديل)، <strong>Delete</strong> (حذف). لاحظ أننا لا نعدّل المصفوفة الأصلية أبداً بل نُنشئ نسخاً جديدة - وهذا مبدأ أساسي في React.
        </p>
        <CodeBlock language="javascript" code={dataManagementCode} />
      </LessonSection>

      {/* ==========================================
          القسم 8: دمج الكل معاً - الكود الكامل
          ========================================== */}
      <LessonSection title="8. دمج الكل: الكود الكامل للمشروع">
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          هذا الكود الكامل لمشروع نظام إدارة الطلاب. يمكنك نسخه وتشغيله في محرر JavaScript مباشرة:
        </p>

        <CodeBlock language="javascript" code={`// ==========================================
// 🎓 مشروع نظام إدارة الطلاب - الكود الكامل
// Student Management System - Full Code
// ==========================================

// ═══════════════════════════════════════
// 📦 البيانات الأولية
// ═══════════════════════════════════════

const students = [
  { id: 1, name: "أحمد محمد", age: 22, grades: [85, 92, 78, 90, 88], department: "علوم الحاسب", status: "نشط" },
  { id: 2, name: "فاطمة العلي", age: 21, grades: [95, 88, 92, 97, 91], department: "هندسة البرمجيات", status: "نشط" },
  { id: 3, name: "خالد الشمري", age: 23, grades: [70, 65, 72, 68, 74], department: "علوم الحاسب", status: "نشط" },
  { id: 4, name: "نورة السعيد", age: 20, grades: [60, 55, 58, 62, 57], department: "هندسة البرمجيات", status: "معلّق" },
  { id: 5, name: "عبدالرحمن الحربي", age: 24, grades: [98, 95, 92, 99, 96], department: "علوم الحاسب", status: "نشط" },
  { id: 6, name: "ريم القحطاني", age: 22, grades: [78, 82, 75, 80, 77], department: "هندسة البرمجيات", status: "منسحب" },
];

// ═══════════════════════════════════════
// 🔧 الدوال الأساسية
// ═══════════════════════════════════════

const calculateAverage = (grades) => {
  if (grades.length === 0) return 0;
  return grades.reduce((acc, g) => acc + g, 0) / grades.length;
};

const getGradeLabel = (avg) => {
  if (avg >= 90) return "ممتاز";
  if (avg >= 80) return "جيد جداً";
  if (avg >= 70) return "جيد";
  if (avg >= 60) return "مقبول";
  return "راسب";
};

const enrichStudent = (student) => {
  const avg = calculateAverage(student.grades);
  return {
    ...student,
    average: Math.round(avg * 100) / 100,
    gradeLabel: getGradeLabel(avg),
  };
};

// ═══════════════════════════════════════
// 🔍 البحث والتصفية
// ═══════════════════════════════════════

const getActiveStudents = (list) => list.filter((s) => s.status === "نشط");
const getTopStudents = (list, threshold = 90) => list.filter((s) => s.average > threshold);
const findByName = (list, name) => list.find((s) => s.name.includes(name));
const searchStudents = (list, query) =>
  list.filter((s) => s.name.includes(query) || s.department.includes(query));

// ═══════════════════════════════════════
// 📊 الإحصائيات
// ═══════════════════════════════════════

const getStatistics = (list) => {
  return list.reduce(
    (acc, s) => ({
      count: acc.count + 1,
      totalAvg: acc.totalAvg + s.average,
      highest: s.average > acc.highest.average ? { name: s.name, average: s.average } : acc.highest,
      lowest: s.average < acc.lowest.average ? { name: s.name, average: s.average } : acc.lowest,
      active: s.status === "نشط" ? acc.active + 1 : acc.active,
    }),
    { count: 0, totalAvg: 0, highest: { name: "", average: -Infinity }, lowest: { name: "", average: Infinity }, active: 0 }
  );
};

// ═══════════════════════════════════════
// ➕ إدارة البيانات
// ═══════════════════════════════════════

const addStudent = (list, student) => [...list, { ...student, id: Date.now() }];
const removeStudent = (list, name) => list.filter((s) => s.name !== name);
const updateGrades = (list, name, newGrades) =>
  list.map((s) => s.name === name ? { ...s, grades: newGrades, ...enrichStudent({ ...s, grades: newGrades }) } : s);

// ═══════════════════════════════════════
// 📋 التشغيل
// ═══════════════════════════════════════

const enriched = students.map(enrichStudent);

console.log("═══════════════════════════════");
console.log("  🎓 نظام إدارة الطلاب");
console.log("═══════════════════════════════\\n");

console.log("📋 جميع الطلاب:");
enriched.forEach((s) => {
  console.log(\`  \${s.name} | \${s.department} | \${s.average} | \${s.gradeLabel}\`);
});

const stats = getStatistics(enriched);
console.log(\`\\n📊 الإحصائيات:\`);
console.log(\`  العدد: \${stats.count}\`);
console.log(\`  المتوسط: \${(stats.totalAvg / stats.count).toFixed(2)}\`);
console.log(\`  الأعلى: \${stats.highest.name} (\${stats.highest.average})\`);
console.log(\`  الأدنى: \${stats.lowest.name} (\${stats.lowest.average})\`);
console.log(\`  النشطون: \${stats.active}\`);`} />
      </LessonSection>

      {/* ==========================================
          القسم 9: Modules والبرمجة غير المتزامنة
          ========================================== */}
      <LessonSection title="9. تنظيم الكود كـ Modules + async/await">
        <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
          تقسيم الكود إلى Modules
        </h3>
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          في المشاريع الحقيقية، لا نكتب كل شيء في ملف واحد. نقسم الكود إلى ملفات منفصلة، كل ملف مسؤول عن مهمة محددة. هذا ما يُعرف بـ <strong>Modular Programming</strong> وهو الأساس لعمل كل مشروع React.
        </p>
        <CodeBlock language="javascript" code={modulesCode} />

        <h3 className="text-2xl font-bold mb-3 mt-8" style={{ color: "var(--foreground)" }}>
          المحاكاة غير المتزامنة
        </h3>
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          في التطبيقات الحقيقية، البيانات تأتي من خادم (Server/API) عبر الشبكة. نستخدم <code>async/await</code> مع <code>Promises</code> للتعامل مع هذا التأخير. هذا النمط ستستخدمه بشكل مباشر في React مع <code>useEffect</code>.
        </p>
        <CodeBlock language="javascript" code={asyncCode} />
      </LessonSection>

      {/* ==========================================
          القسم 10: التحديات الإضافية
          ========================================== */}
      <LessonSection title="10. التحديات الإضافية">
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          حان وقت التحدّي! جرّب حل هذه التحديات لتثبيت ما تعلمته. كل تحدّي يضيف ميزة جديدة للمشروع.
        </p>

        <Challenge
          title="التحدي 1: ترتيب الطلاب"
          description="اكتب دالة \`sortByAverage\` تأخذ مصفوفة من الطلاب وترتبهم من الأعلى معدلًا إلى الأدنى."
        >
          <CodeBlock language="javascript" code={`// 💡 تلميح: استخدم .sort() مع دالة مقارنة
// sort تأخذ دالة callback تحدد أي عنصر يأتي قبل الآخر

const sortByAverage = (studentsList) => {
  // أكمل الكود هنا
  // sort() تُعدّل المصفوفة الأصلية
  // لذا استخدم [...studentsList].sort() لعمل نسخة أولاً
};`} />
        </Challenge>

        <Challenge
          title="التحدي 2: تجميع حسب القسم"
          description="اكتب دالة \`groupByDepartment\` تُرجع كائناً كل مفتاح فيه هو اسم القسم، وقيمته مصفوفة طلاب هذا القسم."
        >
          <CodeBlock language="javascript" code={`// 💡 تلميح: استخدم reduce لبناء الكائن

// النتيجة المتوقعة:
// {
//   "علوم الحاسب": [أحمد, خالد, عبدالرحمن],
//   "هندسة البرمجيات": [فاطمة, نورة, ريم]
// }

const groupByDepartment = (studentsList) => {
  // أكمل الكود هنا
};`} />
        </Challenge>

        <Challenge
          title="التحدي 3: تقرير PDF"
          description="اكتب دالة \`exportToCSV\` تحول مصفوفة الطلاب إلى نص بتنسيق CSV (Comma-Separated Values) يمكن فتحه في Excel."
        >
          <CodeBlock language="javascript" code={`// 💡 تلميح: CSV هو نص بسيط كل سطر = صف وكل عمود = 값 مفصولة بفاصلة

// النتيجة المتوقعة:
// "الاسم,المعدل,التسمية,القسم"
// "أحمد محمد,86.6,جيد جداً,علوم الحاسب"
// ...

const exportToCSV = (studentsList) => {
  // أكمل الكود هنا
};`} />
        </Challenge>

        <Challenge
          title="التحدي 4: نظام صحي للدرجات"
          description="اكتب دالة \`validateGrades\` تتحقق من صحة المدرجات: كل درجة يجب أن تكون بين 0 و 100. أعد مصفوفة من الأخطاء إذا وُجدت."
        >
          <CodeBlock language="javascript" code={`// 💡 تلميح: استخدم map لإنشاء مصفوفة أخطاء، ثم filter لإزالة القيم الفارغة

const validateGrades = (studentsList) => {
  // أكمل الكود هنا
  // يجب أن تُرجع مصفوفة مثل:
  // [
  //   { student: "أحمد محمد", gradeIndex: 0, grade: 105, error: "الدرجة أعلى من 100" }
  // ]
};`} />
        </Challenge>

        <Challenge
          title="التحدي 5: البحث المتقدم"
          description="اكتب دالة \`advancedSearch\` تقبل كائناً بمعايير بحث متعددة (الاسم، القسم، الحالة، المعدل الأدنى) وتُرجع الطلاب المطابقين."
        >
          <CodeBlock language="javascript" code={`// 💡 تلميح: استخدم filter مع شروط ديناميكية

const advancedSearch = (studentsList, criteria) => {
  // criteria مثل: { name: "أحمد", department: "علوم", minAverage: 80 }
  // أكمل الكود هنا
};`} />
        </Challenge>
      </LessonSection>

      {/* ==========================================
          القسم 11: ملخص ونصائح
          ========================================== */}
      <LessonSection title="11. ملخص ونصائح للانتقال إلى React">
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          مبروك! لقد أنهيت مشروع JavaScript الأول وجمعت كل المفاهيم الأساسية. إليك ملخصاً شاملاً ونصائح للمرحلة القادمة:
        </p>

        <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
          ملخص المفاهيم المُستخدمة
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-6" style={{ border: "1px solid var(--border)" }}>
            <thead>
              <tr style={{ background: "var(--surface)" }}>
                <th className="p-3 text-right" style={{ color: "var(--foreground)", border: "1px solid var(--border)" }}>المفهوم</th>
                <th className="p-3 text-right" style={{ color: "var(--foreground)", border: "1px solid var(--border)" }}>الاستخدام في المشروع</th>
                <th className="p-3 text-right" style={{ color: "var(--foreground)", border: "1px solid var(--border)" }}>القابلية في React</th>
              </tr>
            </thead>
            <tbody>
              {[
                { concept: "Arrow Functions", usage: "تعريف جميع الدوال", react: "setState, callbacks" },
                { concept: "Destructuring", usage: "فك بيانات الكائنات", react: "Props, useState" },
                { concept: "Spread Operator", usage: "نسخ ودمج البيانات", react: "Updating state" },
                { concept: "map()", usage: "تحويل الطلاب لإصدارات مُحسّنة", react: "Rendering قوائم" },
                { concept: "filter()", usage: "البحث والتصفية", react: "Filtering displayed data" },
                { concept: "reduce()", usage: "حساب المتوسط والإحصائيات", react: "Accumulating state" },
                { concept: "find()", usage: "إيجاد طالب محدد", react: "Looking up data" },
                { concept: "Template Literals", usage: "إنشاء التقارير", react: "Dynamic text in JSX" },
                { concept: "Modules", usage: "تقسيم الكود لملفات", react: "Component files" },
                { concept: "async/await", usage: "محاكاة جلب البيانات", react: "useEffect + API calls" },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="p-3 font-mono text-sm font-bold" style={{ color: "var(--primary)", border: "1px solid var(--border)" }}>{row.concept}</td>
                  <td className="p-3 text-sm" style={{ color: "var(--foreground)", border: "1px solid var(--border)" }}>{row.usage}</td>
                  <td className="p-3 text-sm" style={{ color: "var(--accent)", border: "1px solid var(--border)" }}>{row.react}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
          نصائح ذهبية قبل الانتقال إلى TypeScript ثم React
        </h3>
        <div className="space-y-4 mb-6">
          {[
            {
              tip: "لا تعدّل البيانات الأصلية أبداً",
              desc: "في كل دوالنا أنشأنا نسخاً جديدة بدل تعديل المصفوفة الأصلية. هذا المبدأ (Immutability) هو أساس عمل React مع State.",
            },
            {
              tip: "اكتب دوال صغيرة ومركّزة",
              desc: "كل دالة في مشروعنا تفعل شيئاً واحداً فقط. هذا يجعل الكود أسهل في الاختبار والصيانة، وهو نفس نمط عمل React مع الدوال المساعدة (Hooks).",
            },
            {
              tip: "استخدم map/filter/reduce بدلاً من loops",
              desc: "الدوال الدائرية (map, filter, reduce) أكثر وضوحاً وأماناً من for loops. في React ستحتاجها كثيراً لعرض البيانات.",
            },
            {
              tip: "افصل المنطق عن العرض",
              desc: "في مشروعنا، حسابات المتوسط والإحصائيات منفصلة عن طريقة العرض. في React، هذا يتحول إلى فصل Business Logic عن Component UI.",
            },
            {
              tip: "عتّد على التفكير بـ Components",
              desc: "كل وحدة في مشروعنا (بيانات، حسابات، تقارير) يمكن أن تصبح Component في React. ابدأ بالتفكير بهذه الطريقة.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="font-bold mb-1" style={{ color: "var(--primary)" }}>{i + 1}. {item.tip}</p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="p-4 rounded-xl border"
          style={{ background: "rgba(34, 197, 94, 0.1)", borderColor: "var(--accent)" }}
        >
          <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
            الخطوة القادمة: TypeScript
          </p>
          <p className="text-sm" style={{ color: "var(--foreground)" }}>
            الآن بعد أن أتقنت أساسيات JavaScript، حان وقت إضافة طبقة أمان إضافية مع TypeScript. سنlearn كيف نُعرّف أنواع البيانات وأشكال الكائنات رسمياً، ثم ننتقل إلى React بثقة كاملة.
          </p>
        </div>
      </LessonSection>

      {/* ==========================================
          ورقة الغش
          ========================================== */}
      <CheatSheet title="ورقة غش: ملخص JavaScript + ES6+ الكامل">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* العمود 1: المتغيرات والأنواع */}
          <div>
            <h4 className="font-bold mb-2" style={{ color: "var(--accent)" }}>المتغيرات والأنواع</h4>
            <CodeBlock language="javascript" code={`// المتغيرات
let name = "أحمد";    // متغير قابل للتغيير
const PI = 3.14;      // ثابت

// الأنواع
string  → "نص"
number  → 42, 3.14
boolean → true, false
null    → قيمة فارغة مقصودة
undefined → قيمة غير معرّفة
object  → { key: "value" }
array   → [1, 2, 3]

// التحقق من النوع
typeof "أحمد"   // "string"
typeof 42       // "number"`} />
          </div>

          {/* العمود 2: الدوال */}
          <div>
            <h4 className="font-bold mb-2" style={{ color: "var(--accent)" }}>الدوال</h4>
            <CodeBlock language="javascript" code={`// دالة تقليدية
function greet(name) {
  return \`مرحباً \${name}\`;
}

// Arrow Function
const greet = (name) => \`مرحباً \${name}\`;

// دالة مع قيمة ابتدائية
const add = (a, b = 0) => a + b;

// Callback
const numbers = [1, 2, 3];
numbers.map((n) => n * 2);

// Closure
const counter = () => {
  let count = 0;
  return () => ++count;
};`} />
          </div>

          {/* العمود 3: المصفوفات */}
          <div>
            <h4 className="font-bold mb-2" style={{ color: "var(--accent)" }}>دوال المصفوفات</h4>
            <CodeBlock language="javascript" code={`const arr = [1, 2, 3, 4, 5];

// map → تحويل كل عنصر
arr.map(x => x * 2);        // [2, 4, 6, 8, 10]

// filter → تصفية
arr.filter(x => x > 3);     // [4, 5]

// reduce → تجميع
arr.reduce((a, b) => a + b, 0); // 15

// find → أول مطابق
arr.find(x => x > 3);       // 4

// some → هل يوجد؟
arr.some(x => x > 4);       // true

// every → هل كلها؟
arr.every(x => x > 0);      // true

// forEach → تكرار (بدون إرجاع)
arr.forEach(x => console.log(x));

// includes → يوجد العنصر؟
arr.includes(3);             // true`} />
          </div>

          {/* العمود 4: الكائنات */}
          <div>
            <h4 className="font-bold mb-2" style={{ color: "var(--accent)" }}>الكائنات و ES6+</h4>
            <CodeBlock language="javascript" code={`// Object methods
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj);    // ["a", "b", "c"]
Object.values(obj);  // [1, 2, 3]
Object.entries(obj); // [["a",1],["b",2]]

// Destructuring
const { a, b } = obj;

// Spread
const copy = { ...obj, d: 4 };

// Template Literals
const text = \`القيمة: \${obj.a}\`;

// Optional Chaining
obj?.a?.toString(); // آمن من الأخطاء

// Nullish Coalescing
const val = null ?? "افتراضي"; // "افتراضي"`} />
          </div>

          {/* العمود 5: Async */}
          <div>
            <h4 className="font-bold mb-2" style={{ color: "var(--accent)" }}>async/await و Promises</h4>
            <CodeBlock language="javascript" code={`// Promise
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("تم"), 1000);
  });
};

// async/await
const fetchData = async () => {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// fetch API (في المتصفح)
const getUsers = async () => {
  const res = await fetch("/api/users");
  const data = await res.json();
  return data;
};`} />
          </div>

          {/* العمود 6: Modules */}
          <div>
            <h4 className="font-bold mb-2" style={{ color: "var(--accent)" }}>Modules</h4>
            <CodeBlock language="javascript" code={`// === التصدير (Export) ===

// تصدير مُسمّى
export const add = (a, b) => a + b;
export const PI = 3.14;

// تصدير افتراضي
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// === الاستيراد (Import) ===

// استيراد مُسمّى
import { add, PI } from "./math.js";

// استيراد افتراضي
import User from "./user.js";

// استيراد الكل
import * as Math from "./math.js";
Math.add(1, 2);`} />
          </div>
        </div>
      </CheatSheet>

      {/* ==========================================
          اختبار سريع
          ========================================== */}
      <LessonSection title="اختبار سريع: هل أنت جاهز لـ React؟">
        <Quiz
          question="في React، عندما تريد عرض مصفوفة من العناصر في الواجهة، أي دالة JavaScript ستستخدمها غالباً؟"
          options={[
            "forEach - لأنها تكرر العناصر",
            "map - لأنها تحول كل عنصر لعنصر UI",
            "reduce - لأنها تجمع العناصر",
            "sort - لأنها ترتّب العناصر",
          ]}
          correctAnswer={1}
          explanation="map هي الأداة الأساسية في React لتحويل مصفوفة من البيانات إلى مصفوفة من Components. كل عنصر في المصفوفة يتحول إلى عنصر JSX من خلال map."
        />

        <Quiz
          question="لماذا لا نعدّل المصفوفة الأصلية مباشرة في JavaScript (مثل push أو splice)؟"
          options={[
            "لأنها تسبب خطأ في البرنامج",
            "لأن TypeScript لا يسمح بذلك",
            "لأن React يحتاج البيانات لتكون immutable ليعمل بشكل صحيح",
            "لأن الدالة غير موجودة",
          ]}
          correctAnswer={2}
          explanation="في React، مقارنة State الجديدة بالقديمة لكشف التغييرات تعتمد على أن البيانات immutable. التعديل المباشر يسبب مشاكل في إعادة الرسم (re-render)."
        />

        <Quiz
          question="أي من след الاستخدامات لـ reduce هو الأCorrect لحساب عدد الطلاب النشطين؟"
          options={[
            "students.filter(s => s.status === 'نشط').length",
            "students.reduce((count, s) => s.status === 'نشط' ? count + 1 : count, 0)",
            "students.forEach(s => { if (s.status === 'نشط') count++ })",
            "الخيار 1 و 2 صحيحان",
          ]}
          correctAnswer={3}
          explanation="كلا الطريقتين صحيحتان: filter().length تحول أولاً ثم تحسب الطول، و reduce تحسب مباشرة. لكن reduce أكثر كفاءة لأنها لا تنشئ مصفوفة مؤقتة."
        />
      </LessonSection>

      {/* ==========================================
          التنقل بين الدروس
          ========================================== */}
      <LessonNavigation
        prevLesson={prevLesson}
        prevStage={prevLessonStage}
        nextLesson={nextLesson}
        nextStage={nextLessonStage}
      />
    </div>
  );
}
