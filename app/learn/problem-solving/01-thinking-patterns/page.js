"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/problem-solving/01-thinking-patterns";
import ProblemCard from "@/components/ProblemCard";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const code1 = `function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printNumbers(5); // 1, 2, 3, 4, 5`;

const code2 = `function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(findMax([3, 7, 2, 9, 4])); // 9`;

const code3 = `function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hello")); // "olleh"`;

const code4 = `function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("Hello World")); // 3`;

const code5 = `function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}
console.log(isPalindrome("racecar")); // true`;

const code6 = `function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(sumOfDigits(1234)); // 10`;

const code7 = `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120`;

const code8 = `function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(8)); // [0,1,1,2,3,5,8,13]`;

function renderContent(item) {
  if (item.type === "p") return <p dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "li") return <li dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "callout") return (
    <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
      <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>💡 {item.title}:</p>
      <p dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  return null;
}

export default function ThinkingPatterns() {
  const { lang } = useLanguage();
  const lesson = getLessonBySlug("problem-solving", "01-thinking-patterns");
  const content = rawTranslations ? (rawTranslations[lang] || rawTranslations.en) : null;

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader stage={lesson.stage} lesson={lesson} lessonIndex={lesson.lessonIndex} totalLessons={lesson.totalLessons} />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        {content && content.sections.map((section, i) => (
          <LessonSection key={i} title={section.title}>
            {section.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
          </LessonSection>
        ))}

        <LessonSection title="التمارين الأساسية">
          <p style={{ color: "var(--muted)" }}>حل كل مسألة في السطور أولاً، ثم اكتب الكود.</p>

          <ProblemCard
            id={1}
            title="طباعة الأرقام من 1 إلى N"
            difficulty="easy"
            category="Basics"
            description="اكتب دالة تطبع الأرقام من 1 إلى N. مثال: printNumbers(5) تطبع 1 2 3 4 5."
            examples={[{ input: "printNumbers(5)", output: "1 2 3 4 5" }, { input: "printNumbers(3)", output: "1 2 3" }]}
            hints={["استخدم حلقة for تبدأ من 1 وتصل إلى N"]}
            solution={code1}
            solutionApproach="Loop - O(n)"
          />

          <ProblemCard
            id={2}
            title="إيجاد أكبر عنصر في مصفوفة"
            difficulty="easy"
            category="Arrays"
            description="اكتب دالة تُرجع أكبر عنصر في مصفوفة أرقام."
            examples={[{ input: "[3, 7, 2, 9, 4]", output: "9" }, { input: "[1, 5]", output: "5" }]}
            hints={["ابدأ بأول عنصر كأكبر قيمة، ثم قارن مع باقي العناصر"]}
            solution={code2}
            solutionApproach="Linear Scan - O(n)"
          />

          <ProblemCard
            id={3}
            title="قلب النص"
            difficulty="easy"
            category="Strings"
            description="اكتب دالة تُرجع النص معكوس. مثال: reverseString('hello') => 'olleh'."
            examples={[{ input: '"hello"', output: '"olleh"' }, { input: '"abc"', output: '"cba"' }]}
            hints={["ابدأ من آخر عنصر وامشِ إلى الأمام"]}
            solution={code3}
            solutionApproach="Two Pointers (start/end) - O(n)"
          />

          <ProblemCard
            id={4}
            title="عدّ الأحرف العلة (Vowels)"
            difficulty="easy"
            category="Strings"
            description="اكتب دالة تُرجع عدد الأحرف العلة (a, e, i, o, u) في النص."
            examples={[{ input: '"Hello World"', output: "3" }, { input: '"aeiou"', output: "5" }]}
            hints={["استخدم مجموعة الأحرف العلة وتحقق من وجود كل حرف"]}
            solution={code4}
            solutionApproach="Linear Scan - O(n)"
          />

          <ProblemCard
            id={5}
            title="تحقق من النص المتماثل (Palindrome)"
            difficulty="easy"
            category="Strings"
            description="اكتب دالة تتحقق إذا كان النص يُقرأ بنفس الطريقة من اليمين واليسار."
            examples={[{ input: '"racecar"', output: "true" }, { input: '"hello"', output: "false" }]}
            hints={["قلب النص وقارنه بالأصلي، أو استخدم مؤشرين من الطرفين"]}
            solution={code5}
            solutionApproach="Two Pointers - O(n)"
          />

          <ProblemCard
            id={6}
            title="مجموع أرقام العدد"
            difficulty="easy"
            category="Math"
            description="اكتب دالة تُرجع مجموع أرقام العدد. مثال: sumOfDigits(1234) => 10."
            examples={[{ input: "1234", output: "10" }, { input: "999", output: "27" }]}
            hints={["استخدم باقي القسمة %10 لاستخراج كل رقم، ثم اقسم على 10"]}
            solution={code6}
            solutionApproach="Math - O(log n)"
          />

          <ProblemCard
            id={7}
            title="المضروب (Factorial)"
            difficulty="easy"
            category="Recursion"
            description="اكتب دالة تُرجع مضروب العدد n. مثال: factorial(5) = 5*4*3*2*1 = 120."
            examples={[{ input: "5", output: "120" }, { input: "1", output: "1" }]}
            hints={["الحالة الأساسية: factorial(0) = 1. الحالة العودية: n * factorial(n-1)"]}
            solution={code7}
            solutionApproach="Recursion - O(n)"
          />

          <ProblemCard
            id={8}
            title="تسلسل فيبوناتشي"
            difficulty="easy"
            category="Basics"
            description="اكتب دالة تُرجع أول N أعداد في تسلسل فيبوناتشي. كل عدد هو مجموع السابقين."
            examples={[{ input: "8", output: "[0,1,1,2,3,5,8,13]" }, { input: "5", output: "[0,1,1,2,3]" }]}
            hints={["ابدأ بـ [0, 1] ثم أضف المجموع في كل خطوة"]}
            solution={code8}
            solutionApproach="Iterative - O(n)"
          />
        </LessonSection>

        <CheatSheet title="ملخص أنماط التفكير">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg" style={{ background: "var(--surface-alt)" }}>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>🔍 Dry Run</p>
              <p className="text-sm" style={{ color: "var(--foreground)" }}>تتبع الكود يدوياً على ورقة قبل كتابته</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "var(--surface-alt)" }}>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>📝 Pseudocode</p>
              <p className="text-sm" style={{ color: "var(--foreground)" }}>كتابة الخطوات بلغة إنجليزية مبسطة</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "var(--surface-alt)" }}>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>🧩 تفكيك المشكلة</p>
              <p className="text-sm" style={{ color: "var(--foreground)" }}>تقسيمها لأجزاء أصغر قابلة للحل</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "var(--surface-alt)" }}>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>🎯 التعرف على الأنماط</p>
              <p className="text-sm" style={{ color: "var(--foreground)" }}>تحديد نوع المسألة وحلها بالنمط المناسب</p>
            </div>
          </div>
        </CheatSheet>

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
