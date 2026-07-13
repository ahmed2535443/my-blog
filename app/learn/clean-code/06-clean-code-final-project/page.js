"use client";

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function CleanCodeFinalProject() {
  const lesson = getLessonBySlug("clean-code", "06-clean-code-final-project");

  const codeBadCode = `// ❌ كود غير نظيف - نظام إدارة طلاب
function proc(d, t) {
  let r = [];
  for (let i = 0; i < d.length; i++) {
    if (t === "all") {
      r.push(d[i]);
    } else if (t === "passed") {
      if (d[i].s >= 50) {
        r.push(d[i]);
      }
    } else if (t === "failed") {
      if (d[i].s < 50) {
        r.push(d[i]);
      }
    } else if (t === "honors") {
      if (d[i].s >= 90) {
        r.push(d[i]);
      }
    }
  }
  return r;
}

function calc(d) {
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i].s;
  }
  let avg = sum / d.length;
  let status = "";
  if (avg >= 90) {
    status = "ممتاز";
  } else if (avg >= 80) {
    status = "جيد جداً";
  } else if (avg >= 70) {
    status = "جيد";
  } else if (avg >= 60) {
    status = "مقبول";
  } else {
    status = "راسب";
  }
  return { avg: avg, status: status, count: d.length };
}

function rpt(d) {
  let result = [];
  for (let i = 0; i < d.length; i++) {
    result.push(d[i].n + ": " + d[i].s);
  }
  return result.join(", ");
}

// استخدام الكود
let students = [
  { n: "أحمد", s: 95 },
  { n: "سارة", s: 87 },
  { n: "محمد", s: 45 },
  { n: "فاطمة", s: 72 },
  { n: "خالد", s: 38 },
];

let passed = proc(students, "passed");
let stats = calc(passed);
let report = rpt(passed);
console.log(stats);
console.log(report);`;

  const codeStep2 = `// ✅ أسماء واضحة ووصفيه
function filterStudentsByType(students, filterType) {
  let filteredStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (filterType === "all") {
      filteredStudents.push(students[i]);
    } else if (filterType === "passed") {
      if (students[i].score >= PASSING_SCORE) {
        filteredStudents.push(students[i]);
      }
    } else if (filterType === "failed") {
      if (students[i].score < PASSING_SCORE) {
        filteredStudents.push(students[i]);
      }
    } else if (filterType === "honors") {
      if (students[i].score >= HONORS_SCORE) {
        filteredStudents.push(students[i]);
      }
    }
  }
  return filteredStudents;
}

function calculateStatistics(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].score;
  }
  let average = sum / students.length;
  let status = "";
  if (average >= 90) {
    status = "ممتاز";
  } else if (average >= 80) {
    status = "جيد جداً";
  } else if (average >= 70) {
    status = "جيد";
  } else if (average >= 60) {
    status = "مقبول";
  } else {
    status = "راسب";
  }
  return { average: average, status: status, count: students.length };
}

function generateReportTable(students) {
  let html = "<table>";
  html += "<tr><th>الاسم</th><th>الدرجة</th></tr>";
  for (let i = 0; i < students.length; i++) {
    html += "<tr><td>" + students[i].name + "</td><td>" + students[i].score + "</td></tr>";
  }
  html += "</table>";
  return html;
}

// ثوابت بدل الأرقام السحرية
const PASSING_SCORE = 50;
const HONORS_SCORE = 90;

const GRADE_THRESHOLDS = {
  excellent: 90,
  veryGood: 80,
  good: 70,
  passing: 60,
};`;

  const codeStep3 = `// ✅ دالة موحدة للتصفية
function filterStudentsByType(students, filterType) {
  switch (filterType) {
    case "all":
      return students;
    case "passed":
      return students.filter(student => student.score >= PASSING_SCORE);
    case "failed":
      return students.filter(student => student.score < PASSING_SCORE);
    case "honors":
      return students.filter(student => student.score >= HONORS_SCORE);
    default:
      return students;
  }
}

// ✅ دالة موحدة لحساب الإحصائيات
function calculateStatistics(students) {
  const average = calculateAverage(students);
  const status = determineGradeStatus(average);

  return {
    average: average,
    status: status,
    count: students.length,
  };
}

// ✅ دالة مساعدة لحساب المتوسط
function calculateAverage(students) {
  const totalScore = students.reduce((sum, student) => sum + student.score, 0);
  return totalScore / students.length;
}

// ✅ دالة مساعدة لتحديد الحالة
function determineGradeStatus(average) {
  if (average >= GRADE_THRESHOLDS.excellent) return "ممتاز";
  if (average >= GRADE_THRESHOLDS.veryGood) return "جيد جداً";
  if (average >= GRADE_THRESHOLDS.good) return "جيد";
  if (average >= GRADE_THRESHOLDS.passing) return "مقبول";
  return "راسب";
}

// ✅ دالة لإنشاء صف جدول واحد
function createStudentRow(student) {
  return "<tr><td>" + student.name + "</td><td>" + student.score + "</td></tr>";
}

// ✅ دالة لإنشاء جدول التقرير الكامل
function generateReportTable(students) {
  const header = "<tr><th>الاسم</th><th>الدرجة</th></tr>";
  const rows = students.map(createStudentRow).join("");
  return "<table>" + header + rows + "</table>";
}`;

  const codeStep4 = `// ✅ الكود بعد تطبيق DRY
const PASSING_SCORE = 50;
const HONORS_SCORE = 90;
const GRADE_THRESHOLDS = {
  excellent: 90,
  veryGood: 80,
  good: 70,
  passing: 60,
};

function isScoreAboveThreshold(score, threshold) {
  return score >= threshold;
}

function filterStudentsByType(students, filterType) {
  const filterStrategies = {
    all: () => true,
    passed: (student) => isScoreAboveThreshold(student.score, PASSING_SCORE),
    failed: (student) => !isScoreAboveThreshold(student.score, PASSING_SCORE),
    honors: (student) => isScoreAboveThreshold(student.score, HONORS_SCORE),
  };

  const filterFn = filterStrategies[filterType];
  if (!filterFn) return students;

  return students.filter(filterFn);
}

function calculateAverage(students) {
  const totalScore = students.reduce((sum, student) => sum + student.score, 0);
  return totalScore / students.length;
}

function determineGradeStatus(average) {
  for (const [grade, threshold] of Object.entries(GRADE_THRESHOLDS)) {
    if (average >= threshold) {
      return grade === "excellent" ? "ممتاز"
        : grade === "veryGood" ? "جيد جداً"
        : grade === "good" ? "جيد"
        : "مقبول";
    }
  }
  return "راسب";
}

function calculateStatistics(students) {
  const average = calculateAverage(students);
  const status = determineGradeStatus(average);
  return { average, status, count: students.length };
}

function createStudentRow(student) {
  return "<tr><td>" + student.name + "</td><td>" + student.score + "</td></tr>";
}

function generateReportTable(students) {
  const header = "<tr><th>الاسم</th><th>الدرجة</th></tr>";
  const rows = students.map(createStudentRow).join("");
  return "<table>" + header + rows + "</table>";
}

// استخراج التحقق من الاسم المكرر
function hasDuplicateName(students, targetName) {
  return students.some(student => student.name === targetName);
}

// استخراج التحقق من صحة البيانات
function isValidStudent(student) {
  return student.name && typeof student.score === "number";
}

function validateStudents(students) {
  return students.filter(isValidStudent);
}

// استخدام الكود النظيف
const students = [
  { name: "أحمد", score: 95 },
  { name: "سارة", score: 87 },
  { name: "محمد", score: 45 },
  { name: "فاطمة", score: 72 },
  { name: "خالد", score: 38 },
];

const validStudents = validateStudents(students);
const passedStudents = filterStudentsByType(validStudents, "passed");
const statistics = calculateStatistics(passedStudents);
const report = generateReportTable(passedStudents);`;

  const codeStep5 = `// ✅ الكود النظيف النهائي مع التعليقات المفيدة

/**
 * يحدد درجة الطالب بناءً على متوسط درجاته
 * يعتمد على نظام التقدير الجامعي المصري
 * @param {number} average - متوسط درجات الطالب
 * @returns {string} - درجة التقدير
 */
function determineGradeStatus(average) {
  // ترتيب من الأعلى للأقل للحصول على أول تطابق
  if (average >= GRADE_THRESHOLDS.excellent) return "ممتاز";
  if (average >= GRADE_THRESHOLDS.veryGood) return "جيد جداً";
  if (average >= GRADE_THRESHOLDS.good) return "جيد";
  if (average >= GRADE_THRESHOLDS.passing) return "مقبول";
  return "راسب";
}

/**
 * يصفي الطلاب حسب نوع التصفية المطلوب
 * يدعم: all, passed, failed, honors
 * @param {Array} students - قائمة الطلاب
 * @param {string} filterType - نوع التصفية
 * @returns {Array} - قائمة الطلاب المصفاة
 */
function filterStudentsByType(students, filterType) {
  // استخدام Map بدل switch for سهولة الإضافة
  const filterStrategies = {
    all: () => true,
    passed: (student) => student.score >= PASSING_SCORE,
    failed: (student) => student.score < PASSING_SCORE,
    honors: (student) => student.score >= HONORS_SCORE,
  };

  const filterFn = filterStrategies[filterType];
  if (!filterFn) return students;

  return students.filter(filterFn);
}

/**
 * ينشئ تقرير HTML جدولي للطلاب
 * ملاحظة: في تطبيق حقيقي، يجب استخدام مكتبة مثل React
 * بدلاً من بناء HTML يدوياً لتجنب XSS
 * @param {Array} students - قائمة الطلاب
 * @returns {string} - كود HTML للجدول
 */
function generateReportTable(students) {
  const header = "<tr><th>الاسم</th><th>الدرجة</th></tr>";
  const rows = students.map(createStudentRow).join("");
  return "<table>" + header + rows + "</table>";
}`;

  const codeFinal = `// ✅ الكود النظيف النهائي - نظام إدارة طلاب

// === الثوابت ===
const PASSING_SCORE = 50;
const HONORS_SCORE = 90;
const GRADE_THRESHOLDS = {
  excellent: 90,
  veryGood: 80,
  good: 70,
  passing: 60,
};

// === دوال التحقق ===
function isValidStudent(student) {
  return student.name && typeof student.score === "number";
}

function validateStudents(students) {
  return students.filter(isValidStudent);
}

// === دوال التصفية ===
function filterStudentsByType(students, filterType) {
  const filterStrategies = {
    all: () => true,
    passed: (student) => student.score >= PASSING_SCORE,
    failed: (student) => student.score < PASSING_SCORE,
    honors: (student) => student.score >= HONORS_SCORE,
  };

  const filterFn = filterStrategies[filterType];
  return filterFn ? students.filter(filterFn) : students;
}

// === دوال الحساب ===
function calculateAverage(students) {
  const totalScore = students.reduce((sum, s) => sum + s.score, 0);
  return totalScore / students.length;
}

function determineGradeStatus(average) {
  if (average >= GRADE_THRESHOLDS.excellent) return "ممتاز";
  if (average >= GRADE_THRESHOLDS.veryGood) return "جيد جداً";
  if (average >= GRADE_THRESHOLDS.good) return "جيد";
  if (average >= GRADE_THRESHOLDS.passing) return "مقبول";
  return "راسب";
}

function calculateStatistics(students) {
  const average = calculateAverage(students);
  const status = determineGradeStatus(average);
  return { average, status, count: students.length };
}

// === دوال العرض ===
function createStudentRow(student) {
  return "<tr><td>" + student.name + "</td><td>" + student.score + "</td></tr>";
}

function generateReportTable(students) {
  const header = "<tr><th>الاسم</th><th>الدرجة</th></tr>";
  const rows = students.map(createStudentRow).join("");
  return "<table>" + header + rows + "</table>";
}

// === التشغيل ===
const students = [
  { name: "أحمد", score: 95 },
  { name: "سارة", score: 87 },
  { name: "محمد", score: 45 },
  { name: "فاطمة", score: 72 },
  { name: "خالد", score: 38 },
];

const validStudents = validateStudents(students);
const passedStudents = filterStudentsByType(validStudents, "passed");
const statistics = calculateStatistics(passedStudents);
const report = generateReportTable(passedStudents);

console.log("الإحصائيات:", statistics);
console.log("التقرير:", report);`;

  const codeChallenge = `// ❌ كود غير نظيف - نظام حساب الفواتير
function calc(d) {
  let t = 0;
  for (let i = 0; i < d.length; i++) {
    t += d[i].p * d[i].q;
  }
  if (t > 1000) {
    t = t * 0.9;
  } else if (t > 500) {
    t = t * 0.95;
  }
  let tax = t * 0.15;
  return { sub: t, tax: tax, total: t + tax };
}

function fmt(d) {
  let r = "";
  for (let i = 0; i < d.length; i++) {
    r += d[i].n + " x" + d[i].q + " = " + (d[i].p * d[i].q) + "\\n";
  }
  return r;
}

// استخدام
let items = [
  { n: "كتاب", p: 50, q: 3 },
  { n: "قلم", p: 10, q: 10 },
  { n: "دفتر", p: 25, q: 5 },
];
let result = calc(items);
let text = fmt(items);
console.log(text);
console.log(result);`;

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <LessonHeader
          stage={lesson.stage}
          lesson={lesson}
          lessonIndex={lesson.lessonIndex}
          totalLessons={lesson.totalLessons}
        />

        <LessonSection title="نظرة عامة على المشروع">
          <p style={{ color: "var(--foreground)" }}>
            في هذا المشروع النهائي، ستقوم بتطبيق جميع مبادئ Clean Code التي تعلمتها في الدورة السابقة
            على كود حقيقي. ستبدأ بمشروع يحتوي على كود غير نظيف (messy code)، ثم تحلل المشاكل فيه،
            وأخيراً تعيد كتابته بشكل نظيف واحترافي.
          </p>
          <div
            className="p-5 rounded-xl my-4 border"
            style={{ background: "rgba(168, 85, 247, 0.08)", borderColor: "var(--primary)" }}
          >
            <h3 className="font-bold text-lg mb-3" style={{ color: "var(--primary)" }}>
              ما سنفعله في هذا المشروع:
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--foreground)" }}>
              <li>1. تحليل الكود السيئ وتحديد المشاكل</li>
              <li>2. تسمية المتغيرات والدوال بشكل صحيح</li>
              <li>3. تقسيم الدوال الطويلة إلى دوال صغيرة</li>
              <li>4. إزالة التكرار (DRY Principle)</li>
              <li>5. إضافة التعليقات المفيدة</li>
              <li>6. عرض النتيجة النهائية</li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="الخطوة 1: تحليل الكود السيئ">
          <p style={{ color: "var(--foreground)" }}>
            هذا كود مأخوذ من نظام إدارة طلاب. الكود يعمل بشكل صحيح، لكنه يحتوي على مشاكل كثيرة
            تجعله صعب الصيانة والقراءة. دعنا نحلل المشاكل واحدة تلو الأخرى.
          </p>
          <CodeBlock
            language="javascript"
            code={codeBadCode}
          />

          <div
            className="p-5 rounded-xl my-4 border"
            style={{ background: "rgba(239, 68, 68, 0.08)", borderColor: "var(--danger)" }}
          >
            <h3 className="font-bold text-lg mb-3" style={{ color: "var(--danger)" }}>
              المشاكل في الكود أعلاه:
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--foreground)" }}>
              <li><strong>أسماء متغيرات غير واضحة:</strong> d, t, r, s, n - لا تعطي فكرة عن محتواها</li>
              <li><strong>دوال طويلة ومركبة:</strong> دالة calc تفعل 3 أشياء مختلفة في مكان واحد</li>
              <li><strong>تكرار الكود:</strong> شرط if/else for كل نوع تصفية مكرر</li>
              <li><strong>عدم وجود تعليقات:</strong> لا توجد أي تعليقات تشرح الغرض</li>
              <li><strong>استخدام أرقام سحرية:</strong> 50, 90, 80, 70, 60 بدون تسمية</li>
              <li><strong>اختلاط الاهتمامات:</strong> دالة rpt تخلط البيانات مع HTML</li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="الخطوة 2: تسمية المتغيرات والدوال">
          <p style={{ color: "var(--foreground)" }}>
            أول خطوة في تحسين الكود هي تسمية كل شيء بشكل واضح ووصفي. الأسماء الجيدة تغنيك
            عن التعليقات وتجعل الكود يقرأ كقصة.
          </p>
          <CodeBlock
            language="javascript"
            code={codeStep2}
          />
          <div
            className="p-4 rounded-xl my-4"
            style={{ background: "rgba(34, 197, 94, 0.08)" }}
          >
            <h4 className="font-bold mb-2" style={{ color: "var(--accent)" }}>التحسينات:</h4>
            <ul className="text-sm space-y-1" style={{ color: "var(--foreground)" }}>
              <li>• <code>d</code> → <code>students</code>: واضح أنه قائمة طلاب</li>
              <li>• <code>t</code> → <code>filterType</code>: يوضح أنه نوع التصفية</li>
              <li>• <code>r</code> → <code>filteredStudents</code>: النتيجة المصفاة</li>
              <li>• <code>s</code> → <code>score</code>: الدرجة</li>
              <li>• <code>n</code> → <code>name</code>: الاسم</li>
              <li>• <code>proc</code> → <code>filterStudentsByType</code>: وظيفة الدالة واضحة</li>
              <li>• <code>calc</code> → <code>calculateStatistics</code>: يحسب إحصائيات</li>
              <li>• <code>rpt</code> → <code>generateReportTable</code>: يُنشئ جدول تقرير</li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="الخطوة 3: تقسيم الدوال (Extract Functions)">
          <p style={{ color: "var(--foreground)" }}>
            الدالة الطويلة يجب تقسيمها إلى دوال أصغر تفعل شيئاً واحداً فقط. هذا يجعل الكود
            أسهل في القراءة والاختبار وإعادة الاستخدام.
          </p>
          <CodeBlock
            language="javascript"
            code={codeStep3}
          />
        </LessonSection>

        <LessonSection title="الخطوة 4: إزالة التكرار (DRY)">
          <p style={{ color: "var(--foreground)" }}>
            مبدأ DRY (Don&apos;t Repeat Yourself) يقول: أي قطعة معرفة يجب أن يكون لها تمثيل واحد فقط.
            عند إيجاد تكرار في الكود، نستخلصه إلى دالة مشتركة.
          </p>
          <CodeBlock
            language="javascript"
            code={codeStep4}
          />
        </LessonSection>

        <LessonSection title="الخطوة 5: إضافة التعليقات المفيدة">
          <p style={{ color: "var(--foreground)" }}>
            التعليقات الجيدة تشرح <strong>لماذا</strong> وليس <strong>ماذا</strong>. الكود الجيد يشرح
            نفسه، لكن أحياناً نحتاج لتعليق يوضح السبب وراء قرار معماري أو قيد معين.
          </p>
          <CodeBlock
            language="javascript"
            code={codeStep5}
          />
        </LessonSection>

        <LessonSection title="الخطوة 6: النتيجة النهائية">
          <p style={{ color: "var(--foreground)" }}>
            الآن دعنا نرى الكود النظيف الكامل بعد تطبيق جميع المبادئ. الكود الناتج أسهل في القراءة
            والصيانة والاختبار.
          </p>
          <CodeBlock
            language="javascript"
            code={codeFinal}
          />

          <div
            className="p-5 rounded-xl my-4 border"
            style={{ background: "rgba(34, 197, 94, 0.08)", borderColor: "var(--accent)" }}
          >
            <h3 className="font-bold text-lg mb-3" style={{ color: "var(--accent)" }}>
              مقارنة بين الكود القديم والجديد:
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--foreground)" }}>
              <li>• <strong>قابلية القراءة:</strong> الكود يقرأ كقصة بدل ألغاز</li>
              <li>• <strong>قابلية الصيانة:</strong> تغيير درجة النجاح يتطلب تغيير مكان واحد فقط</li>
              <li>• <strong>قابلية الاختبار:</strong> كل دالة يمكن اختبارها بشكل مستقل</li>
              <li>• <strong>إعادة الاستخدام:</strong> الدوال يمكن استخدامها في أجزاء مختلفة من التطبيق</li>
              <li>• <strong>قابلية التوسيع:</strong> إضافة فلتر جديد = إضافة سطر واحد في filterStrategies</li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="اختبار المعرفة">
          <Quiz
            question="أي من الأسماء التالية هي أفضل تسمية لدالة تحسب متوسط درجات الطلاب؟"
            options={["calc", "doStuff", "calculateAverageScore", "func1"]}
            correctAnswer={2}
            explanation="calculateAverageScore هي الأفضل لأنها تصف بوضوح ما تفعله الدالة: تحسب متوسط الدرجات."
          />
          <Quiz
            question="ما مبدأ DRY الذي ناقشناه في هذا الدرس؟"
            options={[
              "Don't Repeat Yourself - لا تكرر نفسك",
              "Do Right Yesterday - افعل الصحيح بالأمس",
              "Don't Rest Yesterday - لا ت أمس",
              "Design Related Yields - التصميم المرتبط بالعائد",
            ]}
            correctAnswer={0}
            explanation="DRY يعني لا تكرر نفسك. أي قطعة معرفة أو منطق يجب أن يكون لها تمثيل واحد فقط في النظام."
          />
          <Quiz
            question="لماذا نحول الأرقام السحرية مثل 50 و 90 إلى ثوابت؟"
            options={[
              "لأن JavaScript لا يدعم الأرقام",
              "لأن الثوابت أسهل في التغيير وتجعل الكود أوضح",
              "لأن الأرقام تسبب أخطاء",
              "لأن الثوابت أسرع في التنفيذ",
            ]}
            correctAnswer={1}
            explanation="الثوابت تجعل الكود أسهل في الصيانة (تغيير مكان واحد فقط) وتجعل الكود أوضح (PASSING_SCORE بدلاً من 50)."
          />
        </LessonSection>

        <LessonSection title="تحدي عملي">
          <Challenge title="إعادة هيكلة نظام حساب الفواتير">
            <p style={{ color: "var(--foreground)" }}>
              الكود التالي يمثل نظام حساب فواتير بسيط لكنه غير نظيف. مهمتك هي تطبيق جميع مبادئ
              Clean Code التي تعلمتها:
            </p>
            <ul className="space-y-1 my-2" style={{ color: "var(--foreground)" }}>
              <li>• سمِ المتغيرات والدوال بشكل وصفي</li>
              <li>• قسّم الدوال الطويلة إلى دوال صغيرة</li>
              <li>• أزل التكرار</li>
              <li>• حوّل الأرقام السحرية إلى ثوابت</li>
              <li>• أضف تعليقات مفيدة حيث يلزم</li>
            </ul>
            <CodeBlock
              language="javascript"
              code={codeChallenge}
            />
          </Challenge>
        </LessonSection>

        <LessonSection title="ملخص المشروع">
          <CheatSheet title="ملخص Clean Code - مرجع سريع">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ color: "var(--foreground)" }}>
              <div>
                <h4 className="font-bold mb-2" style={{ color: "var(--primary)" }}>قواعد التسمية</h4>
                <ul className="text-sm space-y-1">
                  <li>• استخدم أسماء وصفية وواضحة</li>
                  <li>• اجعل الأسماء تقرأ كقصة</li>
                  <li>• تجنب الأسماء المختصرة</li>
                  <li>• استخدم ثوابت للأرقام السحرية</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2" style={{ color: "var(--primary)" }}>قواعد الدوال</h4>
                <ul className="text-sm space-y-1">
                  <li>• كل دالة تفعل شيئاً واحداً فقط</li>
                  <li>• اجعل الدوال صغيرة (أقل من 20 سطر)</li>
                  <li>• استخدم параметры واضحة</li>
                  <li>• قسّم الدوال الطويلة</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2" style={{ color: "var(--primary)" }}>مبادئ التنظيم</h4>
                <ul className="text-sm space-y-1">
                  <li>• DRY: لا تكرر نفسك</li>
                  <li>• KISS: اجعله بسيطاً وحمقاً</li>
                  <li>• Single Responsibility: مسؤولية واحدة</li>
                  <li>• Separation of Concerns: فصل الاهتمامات</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2" style={{ color: "var(--primary)" }}>التعليقات</h4>
                <ul className="text-sm space-y-1">
                  <li>• شرح الـ "لماذا" وليس الـ "ماذا"</li>
                  <li>• لا تعلّق على الكود الواضح</li>
                  <li>• استخدم JSDoc للدوال العامة</li>
                  <li>• حدّث التعليقات مع الكود</li>
                </ul>
              </div>
            </div>
          </CheatSheet>
        </LessonSection>

        <LessonNavigation
          prevLesson={lesson.prevLesson}
          prevStage={lesson.prevLessonStage}
          nextLesson={lesson.nextLesson}
          nextStage={lesson.nextLessonStage}
        />
      </div>
    </div>
  );
}
