"use client";

import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import CheatSheet from "@/components/CheatSheet";
import ProblemCard from "@/components/ProblemCard";
import { getLessonBySlug } from "@/data/curriculum";

export default function RecursionBacktracking() {
  const lesson = getLessonBySlug("problem-solving", "05-recursion-backtracking");

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
        {/* القسم الأول: ما هو الاستدعاء الذاتي */}
        {/* ========================================== */}
        <LessonSection title="ما هو الاستدعاء الذاتي (Recursion)؟">
          <p>
            <strong>الاستدعاء الذاتي (Recursion)</strong> هو تقنية برمجية حيث تستدعي الدالة نفسها لحل مشكلة أصغر.
            كل استدعاء ذاتي يجب أن يحتوي على <strong>حالة أساسية (Base Case)</strong> توقف التكرار، و<strong>حالة عامة (Recursive Case)</strong>
            تتقدم نحو الحالة الأساسية.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه:
            </p>
            <p>
              تخيل أنك تنظر في مرآة أمام مرآة أخرى - الصورة تتكرر无穷但终有尽头.
              الاستدعاء الذاتي يعمل بنفس الطريقة: الدالة تستدعي نفسها حتى تصل إلى شرط يوقفها.
            </p>
          </div>

          <p>
            كل دالة استدعاء ذاتي يجب أن تحتوي على عنصرَين أساسيَّين:
          </p>
          <ul>
            <li><strong>الحالة الأساسية (Base Case):</strong> الشرط الذي يتوقف عنده الاستدعاء الذاتي ويعيد قيمة مباشرة.</li>
            <li><strong>الحالة العامة (Recursive Case):</strong> الجزء الذي يستدعي الدالة نفسها مع مدخلات أصغر.</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: ما هو Backtracking */}
        {/* ========================================== */}
        <LessonSection title="ما هو Backtracking (العودة الخلفية)؟">
          <p>
            <strong>Backtracking</strong> هو خوارزمية تستخدم الاستدعاء الذاتي لاستكشاف جميع الحلول الممكنة لمشكلة ما.
            تعمل بمنطق "الجرب والخطأ": تقوم باختيار حل جزئي، ثم تتقدم، وإذا وجدت أن هذا المسار لا يؤدي إلى حل صحيح، <strong>تعود خطوة للخلف</strong>
            وتجرب مساراً مختلفاً.
          </p>

          <p>
            Backtracking هي خوارزمية شائعة جداً لحل مشاكل مثل:
          </p>
          <ul>
            <li>مسألة N-Queens</li>
            <li>ملء Sudoku</li>
            <li>البحث في Words</li>
            <li>إيجاد جميع التركيبات والمجموعات</li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ✅ الفرق بين Recursion و Backtracking:
            </p>
            <p>
              كل Backtracking يستخدم Recursion، لكن ليس كل Recursion هو Backtracking.
              الـ Backtracking هو نوع خاص من الاستدعاء الذاتي يركز على استكشاف جميع الحلول الممكنة والعودة عند الفشل.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: المشاكل */}
        {/* ========================================== */}

        <LessonSection title="مشاكل تطبيقية">

          {/* المشكلة 1: Fibonacci */}
          <ProblemCard
            id={1}
            title="Fibonacci"
            difficulty="medium"
            category="Recursion"
            description="مصفوفة Fibonacci هيسلسلة من الأرقام حيث كل رقم هو مجموع الرقمين الذي قبله. اكتب دالة تحسب الرقم الـ n في مسلسلة Fibonacci. مسلسلة Fibonacci تبدأ بـ: 0, 1, 1, 2, 3, 5, 8, 13, ..."
            examples={[
              { input: "n = 2", output: "1" },
              { input: "n = 4", output: "3" },
              { input: "n = 0", output: "0" },
            ]}
            hints={[
              "الحالة الأساسية: إذا كان n = 0 أو n = 1، أعد n مباشرة.",
              "الحالة العامة: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2).",
              "تحذير: الحل العادي بالاستدعاء الذاتي سيكون Time Complexity: O(2^n)، حاول استخدام Memoization.",
            ]}
            solution={`function fibonacci(n) {
  if (n <= 1) return n;

  const memo = new Map();

  function fib(num) {
    if (num <= 1) return num;
    if (memo.has(num)) return memo.get(num);

    const result = fib(num - 1) + fib(num - 2);
    memo.set(num, result);
    return result;
  }

  return fib(n);
}`}
            solutionApproach="الحل: استخدام Memoization لتخزين القيم المحسوبة مسبقاً وتجنب إعادة الحساب. Base Case: n <= 1 → return n. Recursive Case: fib(n) = fib(n-1) + fib(n-2)."
          />

          {/* المشكلة 2: Power of Two */}
          <ProblemCard
            id={2}
            title="Power of Two"
            difficulty="medium"
            category="Recursion"
            description="أكتب دالة تتحقق مما إذا كان الرقم n هو أس من 2. يعني أن n يجب أن يكون صحيحاً موجباً ويمكن كتابته كـ 2^k حيث k عدد صحيح غير سالب."
            examples={[
              { input: "n = 1", output: "true  (1 = 2^0)" },
              { input: "n = 16", output: "true  (16 = 2^4)" },
              { input: "n = 3", output: "false" },
            ]}
            hints={[
              "إذا كان n = 1، فهو true لأن 2^0 = 1.",
              "إذا كان n % 2 !== 0 و n !== 1، فهو false.",
              "استخدم الاستدعاء الذاتي: isPowerOfTwo(n / 2).",
            ]}
            solution={`function isPowerOfTwo(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  if (n % 2 !== 0) return false;

  return isPowerOfTwo(n / 2);
}`}
            solutionApproach="الحل بالاستدعاء الذاتي: Base Case: n === 1 → true, n <= 0 → false, n % 2 !== 0 → false. Recursive Case: isPowerOfTwo(n / 2)."
          />

          {/* المشكلة 3: Subsets */}
          <ProblemCard
            id={3}
            title="Subset"
            difficulty="medium"
            category="Backtracking"
            description="أكتب دالة تُعيد جميع المجموعات الفرعية (Subsets) الممكنة لمصفوفة أعداد فريدة. لا يمكن أن يكون هناك مجموعتان فرعيتان متماثلتان في المخرجات."
            examples={[
              { input: "nums = [1,2,3]", output: "[[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]" },
              { input: "nums = [0]", output: "[[], [0]]" },
            ]}
            hints={[
              "في كل خطوة، لديك خياران: تشمل العنصر الحالي أو لا تشمله.",
              "استخدم Backtracking لاستكشاف كل خيار.",
              "الحالة الأساسية: عندما تصل إلى نهاية المصفوفة، أضف المجموعة الحالية للنتيجة.",
            ]}
            solution={`function subsets(nums) {
  const result = [];

  function backtrack(start, current) {
    result.push([...current]);

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}`}
            solutionApproach="الحل باستخدام Backtracking: نبدأ من كل عنصر ونستكشف إضافته مع جميع العناصر التي تليه. في كل خطوة نضيف المجموعة الحالية للنتيجة ثم نكمل."
          />

          {/* المشكلة 4: Permutations */}
          <ProblemCard
            id={4}
            title="Permutations"
            difficulty="medium"
            category="Backtracking"
            description="أكتب دالة تُعيد جميع الترتيبات الممكنة (Permutations) لمصفوفة أعداد فريدة. يمكن أن تكون النتيجة بأي ترتيب."
            examples={[
              { input: "nums = [1,2,3]", output: "[[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]" },
              { input: "nums = [0,1]", output: "[[0,1], [1,0]]" },
            ]}
            hints={[
              "استخدم Backtracking لاستكشاف جميع الترتيبات.",
              "في كل خطوة، اختر عنصراً من العناصر المتاحة وأضفه للترتيب الحالي.",
              "عندما يحتوي الترتيب الحالي على جميع العناصر، أضفه للنتيجة.",
            ]}
            solution={`function permute(nums) {
  const result = [];

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      backtrack(current, [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
      current.pop();
    }
  }

  backtrack([], nums);
  return result;
}`}
            solutionApproach="الحل باستخدام Backtracking: في كل خطوة نختار عنصراً من العناصر المتبقية ونضيفه للترتيب الحالي، ثم نكمل مع باقي العناصر."
          />

          {/* المشكلة 5: Combination Sum */}
          <ProblemCard
            id={5}
            title="Combinations Sum"
            difficulty="medium"
            category="Backtracking"
            description="أكتب دالة تُعيد جميع التركيبات الفريدة التي مجموعها يساوي target. يمكن استخدام كل عنصر في المصفوفة بشكل غير محدود. لا يمكن أن تكون هناك تركيبتان متماثلتان."
            examples={[
              { input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3], [7]]" },
              { input: "candidates = [2,3,5], target = 8", output: "[[2,2,2,2], [2,3,3], [3,5]]" },
            ]}
            hints={[
              "كل عنصر يمكن استخدامه عدة مرات.",
              "استخدم Backtracking مع حفظ المجموع الحالي.",
              "إذا أصبح المجموع أكبر من target، توقف عن الاستكشاف.",
            ]}
            solution={`function combinationSum(candidates, target) {
  const result = [];

  function backtrack(start, current, sum) {
    if (sum === target) {
      result.push([...current]);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(i, current, sum + candidates[i]);
      current.pop();
    }
  }

  backtrack(0, [], 0);
  return result;
}`}
            solutionApproach="الحل باستخدام Backtracking: نبدأ من كل عنصر ونضيفه للمجموعة الحالية، ثم نتحقق إذا كان المجموع يساوي target أو أكبر منه. يمكننا استخدام نفس العنصر عدة مرات."
          />

          {/* المشكلة 6: N-Queens */}
          <ProblemCard
            id={6}
            title="N-Queens"
            difficulty="hard"
            category="Backtracking"
            description="مسألة N-Queens:ضع N ملكة على لوحة شطرنج N×N بحيث لا تهاجم أي ملكة أخرى ملكة. ملكة تهاجم ملكة أخرى إذا كانت على نفس الصف أو العمود أو نفس القطر. أوجد جميع التوزيعات الصحيحة."
            examples={[
              { input: "n = 4", output: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]" },
              { input: "n = 1", output: "[[\"Q\"]]" },
            ]}
            hints={[
              "استخدم Backtracking لوضع ملكة صف تلو الآخر.",
              "في كل صف، حاول وضع الملكة في كل عمود والتحقق من صحتها.",
              "تأكد أن الملكة الجديدة لا تهاجم أي ملكة تم وضعها مسبقاً.",
            ]}
            solution={`function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));

  function isValid(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(board.map(r => r.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  }

  backtrack(0);
  return result;
}`}
            solutionApproach="الحل باستخدام Backtracking: نضع ملكة صف تلو الآخر. في كل صف نجرب وضع الملكة في كل عمود ونتحقق أنها لا تهاجم أي ملكة في صفوف سابقة."
          />

          {/* المشكلة 7: Sudoku Solver */}
          <ProblemCard
            id={7}
            title="Sudoku Solver"
            difficulty="hard"
            category="Backtracking"
            description="اكتب دالة تحل لغز Sudoku. يتم تمثيل لوحة Sudoku كمصفوفة 9×9 حيث الأرقام الفارغة تمثل بـ '.'."
            examples={[
              { input: "[[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]", output: "تم حل Sudoku بشكل صحيح" },
            ]}
            hints={[
              "ابحث عن خلية فارغة ('.') في اللوحة.",
              "جرب الأرقام من 1 إلى 9 في الخلية الفارغة وتحقق من صحتها.",
              "إذا كان الرقم صالحاً، ضعه في الخلية واستمر في الحل. إذا لم ينجح، أعد الخلية لـ '.'.",
            ]}
            solution={`function solveSudoku(board) {
  function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) return false;
      if (board[i][col] === num) return false;
      const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const boxCol = 3 * Math.floor(col / 3) + (i % 3);
      if (board[boxRow][boxCol] === num) return false;
    }
    return true;
  }

  function backtrack(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === '.') {
          for (let num = 1; num <= 9; num++) {
            const char = num.toString();
            if (isValid(board, row, col, char)) {
              board[row][col] = char;
              if (backtrack(board)) return true;
              board[row][col] = '.';
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  backtrack(board);
  return board;
}`}
            solutionApproach="الحل باستخدام Backtracking: نبحث عن خلية فارغة، نجرب الأرقام من 1 إلى 9، نتحقق من صحتها في السطر والعمود والمربع 3×3، ثم نكمل الحل. إذا فشلنا نعود للخلف."
          />

          {/* المشكلة 8: Word Search */}
          <ProblemCard
            id={8}
            title="Word Search"
            difficulty="hard"
            category="Backtracking"
            description="أgiven a 2D grid of characters and a word, determine if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically). The same cell may not be used more than once."
            examples={[
              { input: "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"", output: "true" },
              { input: "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\"", output: "true" },
            ]}
            hints={[
              "ابحث عن الحرف الأول في اللوحة واستخدم Backtracking.",
            ]}
            solution={`function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function backtrack(r, c, index) {
    if (index === word.length) return true;

    if (r < 0 || r >= rows || c < 0 || c >= cols ||
        board[r][c] !== word[index]) return false;

    const temp = board[r][c];
    board[r][c] = '#';

    const found = backtrack(r + 1, c, index + 1) ||
                  backtrack(r - 1, c, index + 1) ||
                  backtrack(r, c + 1, index + 1) ||
                  backtrack(r, c - 1, index + 1);

    board[r][c] = temp;
    return found;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (backtrack(r, c, 0)) return true;
    }
  }
  return false;
}`}
            solutionApproach="الحل باستخدام Backtracking: نبحث عن الحرف الأول في اللوحة، ثم نتبع المسار في كل الاتجاهات الأربعة، ونتأكد من عدم تكرار نفس الخلية."
          />

          {/* المشكلة 9: Palindrome Partitioning */}
          <ProblemCard
            id={9}
            title="Palindrome Partitioning"
            difficulty="hard"
            category="Backtracking"
            description="أgiven a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s."
            examples={[
              { input: "s = \"aab\"", output: "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]" },
              { input: "s = \"a\"", output: "[[\"a\"]]" },
            ]}
            hints={[
              "استخدم Backtracking لاستكشاف جميع التقسيمات الممكنة.",
              "في كل خطوة، حاول التقسيم عند كل موضع ممكن.",
              "تأكد أن الجزء الحالي هو Palindrome قبل المتابعة.",
            ]}
            solution={`function partition(s) {
  const result = [];

  function isPalindrome(str) {
    let left = 0, right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  function backtrack(start, current) {
    if (start === s.length) {
      result.push([...current]);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      const sub = s.substring(start, end);
      if (isPalindrome(sub)) {
        current.push(sub);
        backtrack(end, current);
        current.pop();
      }
    }
  }

  backtrack(0, []);
  return result;
}`}
            solutionApproach="الحل باستخدام Backtracking: نقسم النص عند كل موضع ونتحقق إذا كان الجزء Palindrome. إذا كان كذلك نتابع التقسيم مع باقي النص."
          />

          {/* المشكلة 10: Letter Combinations of a Phone Number */}
          <ProblemCard
            id={10}
            title="Letter Combinations of a Phone Number"
            difficulty="hard"
            category="Backtracking"
            description="أgiven a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent (like phone keypad mappings)."
            examples={[
              { input: "digits = \"23\"", output: "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]" },
              { input: "digits = \"\"", output: "[]" },
              { input: "digits = \"2\"", output: "[\"a\",\"b\",\"c\"]" },
            ]}
            hints={[
              "أنشئ خريطة لكل رقم بأحرفه المقابلة على لوحة المفاتيح.",
              "استخدم Backtracking لإنشاء جميع التركيبات الممكنة.",
              "في كل خطوة، أضف حرف من الأحرف المقابلة للرقم الحالي.",
            ]}
            solution={`function letterCombinations(digits) {
  if (digits.length === 0) return [];

  const phone = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  };

  const result = [];

  function backtrack(index, current) {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = phone[digits[index]];
    for (const letter of letters) {
      backtrack(index + 1, current + letter);
    }
  }

  backtrack(0, '');
  return result;
}`}
            solutionApproach="الحل باستخدام Backtracking: نخزن أحرف كل رقم في خريطة، ثم نستكشف جميع التركيبات الممكنة ب appending حرف لكل رقم تدريجياً."
          />

        </LessonSection>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص Recursion & Backtracking">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>الاستدعاء الذاتي (Recursion):</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>الحالة الأساسية (Base Case)</p>
                  <p>شرط التوقف - بدونها ستحدث Infinite Loop</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>الحالة العامة (Recursive Case)</p>
                  <p>الاستدعاء الذاتي مع تغيير المدخلات تدريجياً نحو Base Case</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>التحسينات</p>
                  <p>Memoization لتخزين النتائج المحسوبة مسبقاً</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>العودة الخلفية (Backtracking):</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>النمط الأساسي</p>
                  <p>اختر ← استكشف ← أعد الطلب (Backtrack) ← جرب خياراً آخر</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>الخوارزميات الشائعة</p>
                  <p>N-Queens, Sudoku, Permutations, Subsets, Combination Sum</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>التعقيد الزمني</p>
                  <p>غالباً O(2^n) أو O(n!) حسب حجم مساحة البحث</p>
                </div>
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
