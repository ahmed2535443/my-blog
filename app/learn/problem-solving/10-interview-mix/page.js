"use client";

import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import CheatSheet from "@/components/CheatSheet";
import ProblemCard from "@/components/ProblemCard";
import { getLessonBySlug } from "@/data/curriculum";

export default function InterviewMix() {
  const lesson = getLessonBySlug("problem-solving", "10-interview-mix");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <LessonHeader
          stage={lesson.stage}
          lesson={lesson}
          lessonIndex={lesson.lessonIndex}
          totalLessons={lesson.totalLessons}
        />

        {/* ========================================== */}
        {/* القسم الأول: مقدمة */}
        {/* ========================================== */}
        <LessonSection title="مسائل المقابلات الشائعة">
          <p>
            في هذا الدرس الأخير من مسار حل المشاكل، سنتناول <strong>أكثر المسائل شيوعاً في مقابلات البرمجة</strong>.
            هذه المسائل مختارة بعناية لتمثيل مختلف الفئات والصعوبات التي تواجهها في مقابلات الشركات التقنية الكبرى مثل Google و Meta و Amazon و Microsoft.
          </p>

          <p>
            كل مسألة هنا هي من أكثر المسائل المطلوبة في المقابلات التقنية. تأكد من فهم الحلول وال Approaches المختلفة،
            وتدرب على كتابة الكود بدون مراجعات لتحسين مهاراتك في المقابلات.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ✅ لماذا هذه المسائل مهمة؟
            </p>
            <ul>
              <li>تختبر مهاراتك الأساسية في هيكل البيانات والخوارزميات</li>
              <li>تظهر في مقابلات كبرى الشركات التقنية بشكل متكرر</li>
              <li>تغطي مواضيع متنوعة: Arrays, Hash Maps, Two Pointers, Sliding Window, Trees, Graphs, Dynamic Programming, Greedy</li>
              <li>تتعلم كيف تفكر في مشاكل جديدة وتحلها بشكل منهجي</li>
            </ul>
          </div>

          <p>
            تأكد من أنك تحاول حل كل مسألة بنفسك قبل الاطلاع على الحل. حاول تحديد الفئة والصعوبة والخوارزمية المناسبة أولاً.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: مسائل Easy */}
        {/* ========================================== */}
        <LessonSection title="مسائل Easy (سهلة)">

          {/* المشكلة 1: FizzBuzz */}
          <ProblemCard
            id={1}
            title="FizzBuzz"
            difficulty="easy"
            category="Math / String"
            description="اكتب دالة تطبع الأرقام من 1 إلى n. لكن إذا كان الرقم يقبل القسمة على 3 اطبع 'Fizz' بدلاً منه، وإذا كان يقبل القسمة على 5 اطبع 'Buzz'، وإذا كان يقبل القسمة على كليهما اطبع 'FizzBuzz'."
            examples={[
              { input: "n = 5", output: "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]" },
              { input: "n = 15", output: "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]" },
            ]}
            hints={[
              "افحص كل رقم من 1 إلى n.",
              "تحقق أولاً من القسمة على 15 (أي القسمة على 3 و 5 معاً)، ثم 3، ثم 5.",
              "هذه المسألة تختبر فهمك للأساسيات وترتيب الشروط.",
            ]}
            solution={`function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i.toString());
  }
  return result;
}`}
            solutionApproach="نمر على كل رقم من 1 إلى n ونتحقق من الشروط بالترتيب: أولاً القسمة على 15 (3×5)، ثم 3، ثم 5، وإلا نطبع الرقم."
          />

          {/* المشكلة 2: Valid Parentheses */}
          <ProblemCard
            id={2}
            title="Valid Parentheses"
            difficulty="easy"
            category="Stack"
            description="أgiven a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order."
            examples={[
              { input: "s = \"()\"", output: "true" },
              { input: "s = \"()[]{}\"", output: "true" },
              { input: "s = \"(]\"", output: "false" },
            ]}
            hints={[
              "استخدم Stack (مكدس) لتخزين الأقواس المفتوحة.",
              "عندما تجد قوس مغلق، تحقق هل يتطابق مع أعلى عنصر في الـ Stack.",
              "إذا كان الـ Stack فارغاً عند النهاية، فالإدخال صحيح.",
            ]}
            solution={`function isValid(s) {
  const stack = [];
  const map = { ')': '(', ']': '[', '}': '{' };

  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
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
            solutionApproach="نستخدم Stack لتخزين الأقواس المفتوحة. عند كل قوس مغلق نتحقق من تطابقه مع أعلى عنصر في الـ Stack. إذا كان الـ Stack فارغاً في النهاية فالنتيجة صحيحة."
          />

          {/* المشكلة 3: Palindrome Number */}
          <ProblemCard
            id={3}
            title="Palindrome Number"
            difficulty="easy"
            category="Math / Two Pointers"
            description="أ given an integer x, return true if x is a palindrome integer. A palindrome number reads the same backward as forward. For example, 121 is a palindrome while 123 is not."
            examples={[
              { input: "x = 121", output: "true" },
              { input: "x = -121", output: "false" },
              { input: "x = 10", output: "false" },
            ]}
            hints={[
              "الأعداد السالبة ليست أبداً palindromes لأن علامة السالب تظهر في النهاية.",
              "يمكنك تحويل الرقم إلى نص والتحقق من القراءة العكسية.",
              "أو يمكنك قلب الرقم رقمياً ومقارنته بالرقم الأصلي.",
            ]}
            solution={`function isPalindrome(x) {
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;

  let reversed = 0;
  let original = x;

  while (x > reversed) {
    reversed = reversed * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return x === reversed || x === Math.floor(reversed / 10);
}`}
            solutionApproach="نقلب النصف الثاني من الرقم رقمياً ونقارنه بالنصف الأول. نتوقف عندما يكون x <= reversed. الأعداد السالبة و那些 تنتهي بـ 0 ليست palindromes."
          />

        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: مسائل Medium */}
        {/* ========================================== */}
        <LessonSection title="مسائل Medium (متوسطة)">

          {/* المشكلة 4: LRU Cache */}
          <ProblemCard
            id={4}
            title="LRU Cache"
            difficulty="medium"
            category="Hash Map / Linked List"
            description="صمم هيكل بيانات LRU Cache. يجب أن يدعم الـ Cache العمليات التالية: get(key) - يجلب قيمة المفتاح من الـ Cache، وput(key, value) - يضيف أو يحدث المفتاح والقيمة. يجب أن يكون Time Complexity للعمليتين O(1). عندما يمتلئ الـ Cache، يجب حذف العنصر الذي تم استخدامه بالأقدم (Least Recently Used) قبل إضافة عنصر جديد."
            examples={[
              { input: "LRUCache(2)\nput(1,1)\nput(2,2)\nget(1)\\nput(3,3)\nget(2)", output: "1\n-1" },
              { input: "LRUCache(1)\nput(2,1)\nget(2)\nput(3,2)\nget(2)", output: "1\n-1" },
            ]}
            hints={[
              "استخدم Hash Map للوصول السريع O(1) و Linked List للحفاظ على ترتيب الاستخدام.",
              "عند استخدام عنصر، انقله إلى بداية الـ Linked List.",
              "عند الإفراط، احذف العنصر الأخير في الـ Linked List.",
            ]}
            solution={`class LRUNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new LRUNode(0, 0);
    this.tail = new LRUNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _addFront(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this._remove(node);
      this._addFront(node);
      return node.value;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this._remove(this.cache.get(key));
    }
    const node = new LRUNode(key, value);
    this._addFront(node);
    this.cache.set(key, node);

    if (this.cache.size > this.capacity) {
      const lru = this.tail.prev;
      this._remove(lru);
      this.cache.delete(lru.key);
    }
  }
}`}
            solutionApproach="نستخدم Hash Map للوصول السريع O(1) و Doubly Linked List للحفاظ على ترتيب الاستخدام. عند كل عملية get/put ننقل العنصر للبداية. عند الإفراط نحذف آخر عنصر."
          />

          {/* المشكلة 5: Merge Intervals */}
          <ProblemCard
            id={5}
            title="Merge Intervals"
            difficulty="medium"
            category="Array / Sorting"
            description="أ given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input."
            examples={[
              { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" },
              { input: "intervals = [[1,4],[4,5]]", output: "[[1,5]]" },
            ]}
            hints={[
              "افترض أن المدخلات مرتبة حسب نقطة البداية أو ارتيبها أولاً.",
              "قارن نهاية كل فترة مع بداية الفترة التالية.",
              "إذا تداخلتا، ادمجهما عن طريق تحديث النهاية.",
            ]}
            solution={`function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      merged.push(intervals[i]);
    }
  }

  return merged;
}`}
            solutionApproach="نرتيب الفترات حسب نقطة البداية، ثم نمر عليها وندمج كل فترة متداخلة مع سابقتها عن طريق تحديث النهاية."
          />

          {/* المشكلة 6: Product of Array Except Self */}
          <ProblemCard
            id={6}
            title="Product of Array Except Self"
            difficulty="medium"
            category="Array / Prefix"
            description="أ given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation."
            examples={[
              { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
              { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
            ]}
            hints={[
              "احسب حاصل ضرب كل العناصر في اليسار لكل عنصر.",
              "احسب حاصل ضرب كل العناصر في اليمين لكل عنصر.",
              "النتيجة النهائية = حاصل ضرب اليسار × حاصل ضرب اليمين لكل عنصر.",
            ]}
            solution={`function productExceptSelf(nums) {
  const n = nums.length;
  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(left[i] * right[i]);
  }

  return result;
}`}
            solutionApproach="نحسب مصفوفة left حيث left[i] = حاصل ضرب جميع العناصر قبل i، ومصفوفة right حيث right[i] = حاصل ضرب جميع العناصر بعد i. النتيجة = left[i] × right[i]."
          />

          {/* المشكلة 7: Find Duplicate Number */}
          <ProblemCard
            id={7}
            title="Find Duplicate Number"
            difficulty="medium"
            category="Array / Cycle Detection"
            description="أ given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one duplicate number in nums, return this duplicate number. You must solve the problem without modifying the array nums and use only constant extra space."
            examples={[
              { input: "nums = [1,3,4,2,2]", output: "2" },
              { input: "nums = [3,1,3,4,2]", output: "3" },
            ]}
            hints={[
              "هذه المسألة يمكن حلها باستخدام Floyd's Cycle Detection (Tortoise and Hare).",
              "فكر في المصفوفة ك linked list حيث nums[i] هو المؤشر للعنصر التالي.",
              "العنصر المكرر هو نقطة بداية الدورة في الـ linked list.",
            ]}
            solution={`function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) break;
  }

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}`}
            solutionApproach="نستخدم Floyd's Cycle Detection: نحرك مؤشرين slow و fast. يتوقف slow عند 1 خطوة و fast عند خطوتين. عند التقاءهما، نعيد slow للبداية ونحرك两者 بخطوة واحدة حتى يلتقيان - نقطة الالتقاء هي الرقم المكرر."
          />

          {/* المشكلة 8: Rotate Image */}
          <ProblemCard
            id={8}
            title="Rotate Image"
            difficulty="medium"
            category="Matrix / Math"
            description="أ given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly."
            examples={[
              { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" },
              { input: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", output: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]" },
            ]}
            hints={[
              "الطريقة الأولى: اقلب المصفوفة أفقياً ثم عكس كل صف.",
              "الطريقة الثانية: الدوران الطبقي - دوران كل طبقة خارجية.",
              "للدوران 90 درجة clockwise: transpose ثم reverse كل صف.",
            ]}
            solution={`function rotate(matrix) {
  const n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}`}
            solutionApproach="الدوران 90 درجة clockwise = Transpose المصفوفة (تبديل الصفوف بالأعمدة) ثم عكس كل صف. نقوم أولاً بتبديل matrix[i][j] مع matrix[j][i] ثم نعكس كل صف."
          />

          {/* المشكلة 9: Spiral Matrix */}
          <ProblemCard
            id={9}
            title="Spiral Matrix"
            difficulty="medium"
            category="Matrix / Simulation"
            description="أ given an m x n matrix, return all elements of the matrix in spiral order. Spiral order means traversing the matrix in a spiral pattern from the top-left corner."
            examples={[
              { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" },
              { input: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", output: "[1,2,3,4,8,12,11,10,9,5,6,7]" },
            ]}
            hints={[
              "حدد four boundaries: top, bottom, left, right.",
              "امشِ في كل اتجاه ثم قلل Boundary المناسبة.",
              "توقف عندما يصبح top > bottom أو left > right.",
            ]}
            solution={`function spiralOrder(matrix) {
  const result = [];
  if (matrix.length === 0) return result;

  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    top++;

    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
      left++;
    }
  }

  return result;
}`}
            solutionApproach="نحدد four boundaries ونمشي في كل اتجاه: يميناً ثم لأسفل ثم يساراً ثم لأعلى. في كل مرة نقلل Boundary حتى ننتهي من جميع العناصر."
          />

          {/* المشكلة 10: Jump Game */}
          <ProblemCard
            id={10}
            title="Jump Game"
            difficulty="medium"
            category="Array / Greedy"
            description="أ given an integer array nums, you are initially positioned at the first index. Each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise."
            examples={[
              { input: "nums = [2,3,1,1,4]", output: "true" },
              { input: "nums = [3,2,1,0,4]", output: "false" },
            ]}
            hints={[
              "استخدم Greedy: تتبع أبعد موضع يمكنك الوصول إليه.",
              "في كل خطوة، تحقق إذا كان الموضع الحالي يمكنه الوصول إلى النهاية.",
              "إذا وصلت إلى موضع لا يمكنه التقدم أكثر، فالنتيجة false.",
            ]}
            solution={`function canJump(nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
}`}
            solutionApproach="نستخدم Greedy: نتتبع أبعد موضع يمكننا الوصول إليه. في كل خطوة نتحقق إذا كان الموضع الحالي أكبر من maxReach، إذا كان كذلك فلا يمكننا التقدم وإلا نحدّث maxReach."
          />

        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: مسائل Hard */}
        {/* ========================================== */}
        <LessonSection title="مسائل Hard (صعبة)">

          {/* المشكلة 11: Trapping Rain Water */}
          <ProblemCard
            id={11}
            title="Trapping Rain Water"
            difficulty="hard"
            category="Array / Two Pointers"
            description="أ given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining."
            examples={[
              { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
              { input: "height = [4,2,0,3,2,5]", output: "9" },
            ]}
            hints={[
              "الماء المحبوس في كل موضع = min(أعلى عمود لليسار، أعلى عمود لليمين) - ارتفاع الموضع الحالي.",
              "يمكنك حساب أكبر ارتفاع لليسار وليمين لكل موضع.",
              "أو استخدم Two Pointers لتحسين المساحة.",
            ]}
            solution={`function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}`}
            solutionApproach="نستخدم Two Pointers من الطرفين. نتحرك من الجانب الأصغر أولاً لأن الماء المحبوس يعتمد على الطرف الأقصر. نتتبع أعلى ارتفاع لليسار وليمين ونحسب الماء المحبوس في كل موضع."
          />

          {/* المشكلة 12: Word Ladder */}
          <ProblemCard
            id={12}
            title="Word Ladder"
            difficulty="hard"
            category="Graph / BFS"
            description="A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair of words differs by exactly one letter, and every si is in wordList. Note that beginWord does not need to be in wordList. Given beginWord, endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence, or 0 if no such sequence exists."
            examples={[
              { input: "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]", output: "5" },
              { input: "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]", output: "0" },
            ]}
            hints={[
              "هذه المسألة يمكن حلها باستخدام BFS (البحث بالعرض) لإيجاد أقصر مسار.",
              "فكر في الكلمات كـ nodes في Graph، والكلمات التي تختلف بحرف واحد مترابطة.",
              "أفضل طريقة لتحسين الأداء: ابحث عن الأنماط المطابقة بدلاً من التحقق من كل كلمة.",
            ]}
            solution={`function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];
  const visited = new Set([beginWord]);

  while (queue.length > 0) {
    const [word, level] = queue.shift();

    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (newWord === endWord) return level + 1;
        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, level + 1]);
        }
      }
    }
  }

  return 0;
}`}
            solutionApproach="نستخدم BFS لإيجاد أقصر مسار. في كل خطوة نحاول تغيير كل حرف في الكلمة الحالية إلى حرف مختلف ونتحقق إذا كانت الكلمة الجديدة موجودة في القاموس. BFS يضمن إيجاد أقصر مسار."
          />

          {/* المشكلة 13: Meeting Rooms II */}
          <ProblemCard
            id={13}
            title="Meeting Rooms II"
            difficulty="hard"
            category="Array / Heap / Sorting"
            description="أ given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required."
            examples={[
              { input: "intervals = [[0,30],[5,10],[15,20]]", output: "2" },
              { input: "intervals = [[7,10],[2,4]]", output: "1" },
            ]}
            hints={[
              "افترض أن جميع القيود صحيحة وابحث عن الحد الأدنى من القاعات.",
              "افصل نقاط البداية والنهاية ورتّبها.",
              "عند كل نقطة بداية، تحتاج قاعة جديدة. عند نقطة نهاية، تحرر قاعة.",
            ]}
            solution={`function minMeetingRooms(intervals) {
  if (intervals.length === 0) return 0;

  const starts = intervals.map(i => i[0]).sort((a, b) => a - b);
  const ends = intervals.map(i => i[1]).sort((a, b) => a - b);

  let rooms = 0;
  let endPointer = 0;

  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endPointer]) {
      rooms++;
    } else {
      endPointer++;
    }
  }

  return rooms;
}`}
            solutionApproach="نفصل نقاط البداية والنهاية ونرتبها. نمر على نقاط البداية: إذا كانت بداية اجتماع أصغر من نهاية أي اجتماع حالي، نحتاج قاعة جديدة. وإلا نحرر قاعة."
          />

        </LessonSection>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="نصائح للمقابلات التقنية">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>قبل المقابلة:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>راجع الأساسيات</p>
                  <p>Data Structures, Big-O, Common Algorithms - تأكد من فهمك للمفاهيم الأساسية</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>تدرب بانتظام</p>
                  <p>حل 2-3 مسائل يومياً على LeetCode - ركز على Top Interview 150</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>simulated Mock Interviews</p>
                  <p>تدرب في ظروف المقابلة الحقيقية: متحدث بصوت عالٍ، حل تحت ضغط الوقت</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>أثناء المقابلة:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>Clarify the Problem</p>
                  <p>اطرح أسئلة لتوضيح المتطلبات، الأمثلة الحدية، والقيود قبل الحل</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>ابدأ بـ Brute Force</p>
                  <p>اقترح حلاً بسيطاً أولاً ثمحسّنه - هذا يظهر تفكيرك المنهجي</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>تحدث بصوت عالٍ</p>
                  <p>اشرح تفكيرك أثناء الحل - المقابل يريد أن يرى كيف تفكر، ليس فقط النتيجة</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-bold mb-3" style={{ color: "var(--primary)" }}> أنماط التعرف على المسائل:</p>
            <div className="text-sm space-y-2">
              <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                <p className="font-bold" style={{ color: "var(--primary)" }}>بحث في مصفوفة مرتبة</p>
                <p>Two Pointers أو Binary Search</p>
              </div>
              <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                <p className="font-bold" style={{ color: "var(--accent)" }}>إيجاد عناصر فريدة أو عدّها</p>
                <p>Hash Map أو Set</p>
              </div>
              <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                <p className="font-bold" style={{ color: "var(--secondary)" }}>أقصر مسار في Graph</p>
                <p>BFS (بدون أوزان) أو Dijkstra (مع أوزان)</p>
              </div>
              <div className="p-3 rounded-lg" style={{ background: "rgba(168, 85, 247, 0.05)", border: "1px solid var(--border)" }}>
                <p className="font-bold" style={{ color: "#a855f7" }}>مشاكل التحسين (Optimization)</p>
                <p>Dynamic Programming أو Greedy</p>
              </div>
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* التنقل بين الدروس */}
        {/* ========================================== */}
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
