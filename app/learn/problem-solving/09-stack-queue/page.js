"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/problem-solving/09-stack-queue";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import CheatSheet from "@/components/CheatSheet";
import ProblemCard from "@/components/ProblemCard";
import { getLessonBySlug } from "@/data/curriculum";

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

export default function StackQueue() {
  const { lang } = useLanguage();
  const lesson = getLessonBySlug("problem-solving", "09-stack-queue");
  const content = rawTranslations ? (rawTranslations[lang] || rawTranslations.en) : null;

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <LessonHeader
          stage={lesson.stage}
          lesson={lesson}
          lessonIndex={lesson.lessonIndex}
          totalLessons={lesson.totalLessons}
        />

        {content && content.sections.map((section, i) => (
          <LessonSection key={i} title={section.title}>
            {section.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
          </LessonSection>
        ))}

        <LessonSection title="مشاكل تطبيقية">
          <ProblemCard
            id={1}
            title="Valid Parentheses"
            difficulty="easy"
            category="Stack"
            description="أكتب دالة تتحقق مما إذا كان النص المكون من الأقواس (){}[] هو نص متوازن (valid). نص الأقواس متوازن إذا:"
            examples={[
              { input: 's = "()"', output: "true" },
              { input: 's = "()[]{}"', output: "true" },
              { input: 's = "(]"', output: "false" },
              { input: 's = "([)]"', output: "false" },
              { input: 's = "{[]}"', output: "true" },
            ]}
            hints={[
              "استخدم Stack لتخزين الأقواس المفتوحة.",
              "عندما تجد قوس مغلق، تحقق أن أعلى عنصر في Stack هو القوس المفتوح المقابل.",
              "إذا انتهى Stack وهو غير فارغ، فالنص غير متوازن.",
            ]}
            solution={`function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}`}
            solutionApproach="الحل باستخدام Stack: نمر على كل حرف في النص. إذا كان قوساً مفتوحاً نضعه في Stack. إذا كان قوساً مغلقاً نتحقق أن أعلى عنصر في Stack هو المقابل له، ثم نزيله. في النهاية، إذا كان Stack فارغاً فالنص متوازن."
          />

          <ProblemCard
            id={2}
            title="Min Stack"
            difficulty="easy"
            category="Stack"
            description="صمم مكدساً (Stack) يدعم العمليات الأساسية (push, pop, top) وعملية إضافية هي getMin() لإرجاع أقل عنصر في المكدس. يجب أن تكون العمليات الثلاث الأساسية جميعها بأقل تعقيد ممكن O(1)."
            examples={[
              { input: "MinStack stack = new MinStack();\nstack.push(-2);\nstack.push(0);\nstack.push(-3);\nstack.getMin();", output: "-3" },
              { input: "stack.pop();\nstack.top();", output: "0" },
              { input: "stack.getMin();", output: "-2" },
            ]}
            hints={[
              "يمكنك استخدام Stack ثانٍ لتخزين أقل عنصر في كل مرحلة.",
              "Stack المساعد يخزن الأقل عند كل إضافة.",
              "الحل الآخر هو استخدام متغير منفصل لتخزين القيمة الأدنى مع كل عنصر.",
            ]}
            solution={`class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop() {
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return val;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}`}
            solutionApproach="الحل باستخدام Stack مزدوج: Stack أساسي لتخزين العناصر، وStack مساعد (minStack) لتخزين أقل عنصر في كل مرحلة. عند الإضافة، نضيف للـ minStack فقط إذا كان العنصر أقل من أو يساوي الأدنى الحالي. هذا يضمن أن getMin() دائماً O(1)."
          />

          <ProblemCard
            id={3}
            title="Implement Queue using Stacks"
            difficulty="easy"
            category="Queue"
            description="قم بتنفيذ طابور (Queue) باستخدام مكدسين (Stacks). يجب أن تدعم الدوال enqueue و dequeue و peek و isEmpty بتعقيد زمني amortized O(1)."
            examples={[
              { input: "MyQueue queue = new MyQueue();\nqueue.enqueue(1);\nqueue.enqueue(2);\nqueue.peek();", output: "1" },
              { input: "queue.dequeue();", output: "1" },
              { input: "queue.isEmpty();", output: "false" },
            ]}
            hints={[
              "استخدم Stack للإدخال (inputStack) وStack آخر للإخراج (outputStack).",
              "عندما يكون outputStack فارغاً، انقل جميع العناصر من inputStack إليه.",
              "هذا يضمن أن عملية dequeue amortized O(1).",
            ]}
            solution={`class MyQueue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  enqueue(x) {
    this.inputStack.push(x);
  }

  dequeue() {
    this.peek();
    return this.outputStack.pop();
  }

  peek() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack[this.outputStack.length - 1];
  }

  isEmpty() {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }
}`}
            solutionApproach="الحل باستخدام Stack مزدوج: Stack للإدخال وآخر للإخراج. عند الطلب، إذا كان Stack الإخراج فارغاً ننقل جميع العناصر من Stack الإدخال إليه. كل عنصر يُنقل مرة واحدة فقط على الأكثر، مما يعطي amortized O(1) لكل عملية."
          />

          <ProblemCard
            id={4}
            title="Daily Temperatures"
            difficulty="medium"
            category="Stack"
            description="معطى مصفوفة من درجات الحرارة اليومية، أرجع مصفوفة حيث answer[i] هو عدد الأيام التي يجب الانتظار للحصول على درجة حرارة أعلى. إذا لم تكن هناك يوم أبعد لهذا، أبقِ answer[i] == 0."
            examples={[
              { input: "temperatures = [73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" },
              { input: "temperatures = [30,40,50,60]", output: "[1,1,1,0]" },
              { input: "temperatures = [30,60,90]", output: "[1,1,0]" },
            ]}
            hints={[
              "استخدم Stack لتخزين الفهارس لدرجات الحرارة التي لم تجد لها يوماً أدفأ بعد.",
              "عندما تجد درجة حرارة أعلى من درجة الحرارة في أعلى Stack، حساب الفرق في الفهارس.",
              "المصفوفة الناتجة تحتوي على عدد الأيام التي يجب الانتظار للحصول على حرارة أعلى.",
            ]}
            solution={`function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
}`}
            solutionApproach="الحل باستخدام Monotonic Stack: نمر على كل درجة حرارة. إذا كانت أعلى من درجة الحرارة في أعلى Stack، نحسب الفرق في الفهارس ونزيل العناصر من Stack. Stack يبقى متوازياً تصاعدياً لدرجات الحرارة."
          />

          <ProblemCard
            id={5}
            title="Generate Parentheses"
            difficulty="medium"
            category="Stack"
            description="أكتب دالة تولّد جميع التركيبات الصحيحة والأقواس المتوازنة من n أزواج من الأقواس."
            examples={[
              { input: "n = 3", output: ['"((()))"', '"(()())"', '"(())()"', '"()(())"', '"()()()"'] },
              { input: "n = 1", output: ['"()"'] },
            ]}
            hints={[
              "استخدم Backtracking لتوليد جميع التركيبات الممكنة.",
              "إذا كان عدد الأقواس المفتوحة أقل من n، يمكنك إضافة قوس مفتوح.",
              "إذا كان عدد الأقواس المفتوحة أكبر من المغلقة، يمكنك إضافة قوس مغلق.",
            ]}
            solution={`function generateParenthesis(n) {
  const result = [];

  function backtrack(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  }

  backtrack('', 0, 0);
  return result;
}`}
            solutionApproach="الحل باستخدام Backtracking مع Stack: نبني النص حرفاً حرفاً. يمكننا إضافة قوس مفتوح فقط إذا كان عدد المفتوحة أقل من n، وإضافة قوس مغلق فقط إذا كان عدد المغلقة أقل من المفتوحة. هذا يضمن أن جميع التركيبات المولدة صحيحة ومتوازنة."
          />

          <ProblemCard
            id={6}
            title="Evaluate Reverse Polish Notation"
            difficulty="medium"
            category="Stack"
            description="أكتب دالة تحسب قيمة تعبير Reverse Polish Notation. عبارة RPN هي تعبير حيث كل عملية تأتي بعد أعدادها."
            examples={[
              { input: 'tokens = ["2","1","+","3","*"]', output: "9  ((2 + 1) * 3 = 9)" },
              { input: 'tokens = ["4","13","5","/","+"]', output: "6  (4 + (13 / 5) = 6)" },
              { input: 'tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', output: "22" },
            ]}
            hints={[
              "استخدم Stack لتخزين الأعداد.",
              "عندما تجد رمزاً عمليات، أخذ آخر رقمين من Stack وقم بالعملية وأعد النتيجة.",
              "في النهاية، سيحتوي Stack على النتيجة النهائية.",
            ]}
            solution={`function evalRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      const b = stack.pop();
      const a = stack.pop();
      switch (token) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(Math.trunc(a / b)); break;
      }
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}`}
            solutionApproach="الحل باستخدام Stack: نمر على كل رمز. إذا كان رقماً نضعه في Stack. إذا كان رمز عمليات نأخذ آخر رقمين من Stack ونقوم بالعملية ثم نضع النتيجة في Stack. في النهاية، النتيجة هي العنصر الوحيد المتبقى في Stack."
          />

          <ProblemCard
            id={7}
            title="Decode String"
            difficulty="medium"
            category="Stack"
            description="أكتب دالة فك تشفير نص مشفر بتنسيق معين: k[encoded_string]، حيث k عدد صحيح يمثل تكرار النص المشفر داخل الأقواس."
            examples={[
              { input: 's = "3[a2[c]]"', output: '"accaccacc"' },
              { input: 's = "2[abc]3[cd]ef"', output: '"abcabccdcdcdef"' },
              { input: 's = "abc3[cd]xyz"', output: '"abccdcdcdxyz"' },
            ]}
            hints={[
              "استخدم Stack واحد أو اثنين: واحد للأعداد وآخر للنصوص.",
              "عندما تجد قوس مغلق ']'، أخرج النص العددين من Stack.",
              "كرر النص عدد المرات المخزنة وأضفه للنص السابق.",
            ]}
            solution={`function decodeString(s) {
  const numStack = [];
  const strStack = [];
  let currentNum = 0;
  let currentStr = '';

  for (const char of s) {
    if (char >= '0' && char <= '9') {
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === '[') {
      numStack.push(currentNum);
      strStack.push(currentStr);
      currentNum = 0;
      currentStr = '';
    } else if (char === ']') {
      const num = numStack.pop();
      const prevStr = strStack.pop();
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
}`}
            solutionApproach="الحل باستخدام Stack مزدوج: Stack للأعداد وآخر للنصوص. عند '[' نحفظ العدد والنص الحالي ونبدأ نصاً جديداً. عند ']' ن取出 العدد والنص المحفوظ ونكرر النص الحالي بعدد المرات ثم ندمجه مع النص السابق."
          />

          <ProblemCard
            id={8}
            title="Largest Rectangle in Histogram"
            difficulty="hard"
            category="Stack"
            description="معطى مصفوفة تمثل ارتفاعات أعمدة في رسم بياني شريطي، أرجع مساحة أكبر مستطيل في الرسم البياني."
            examples={[
              { input: "heights = [2,1,5,6,2,3]", output: "10" },
              { input: "heights = [2,4]", output: "4" },
            ]}
            hints={[
              "استخدم Stack لتخزين الفهارس للأعمدة التي لم تتم معالجتها بعد.",
              "كل عمود يحسب المساحة كحد أدنى ارتفاع مع الأعمدة المجاورة.",
              "عندما تجد عموداً أقل من أعلى Stack، احسب المساحة للعمود الأعلى.",
            ]}
            solution={`function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;
  const extendedHeights = [...heights, 0];

  for (let i = 0; i < extendedHeights.length; i++) {
    while (stack.length > 0 && extendedHeights[i] < extendedHeights[stack[stack.length - 1]]) {
      const height = extendedHeights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }

  return maxArea;
}`}
            solutionApproach="الحل باستخدام Monotonic Stack: نضيف 0 في النهاية لضمان معالجة جميع العناصر. لكل عنصر، إذا كان أقل من أعلى Stack، نحسب المساحة للعمود الأعلى (الارتفاع * العرض). العرض هو الفرق بين الفهرس الحالي وفهرس العنصر السابق في Stack."
          />
        </LessonSection>

        <CheatSheet title="ملخص Stack & Queue">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>Stack (المكدس):</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>المبدأ</p>
                  <p>LIFO — Last In, First Out</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>العمليات</p>
                  <p>push, pop, top, isEmpty — جميعها O(1)</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>الاستخدامات الشائعة</p>
                  <p>الأقواس المتوازنة، DFS، Undo/Redo، Function Calls</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>Queue (الطابور):</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>المبدأ</p>
                  <p>FIFO — First In, First Out</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>العمليات</p>
                  <p>enqueue, dequeue, front, isEmpty — جميعها O(1)</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>الاستخدامات الشائعة</p>
                  <p>BFS، قوائم الانتظار، معالجة الأحداث، جدولة المهام</p>
                </div>
              </div>
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
