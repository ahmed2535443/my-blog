import ProblemCard from "@/components/ProblemCard";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function TwoPointersSlidingWindow() {
  const lesson = getLessonBySlug("problem-solving", "04-two-pointers-sliding-window");

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
        {/* مقدمة عن Two Pointers و Sliding Window */}
        {/* ========================================== */}
        <LessonSection title="ما هي تقنيات Two Pointers و Sliding Window؟">
          <p>
            <strong>Two Pointers (مؤشران)</strong> و <strong>Sliding Window (نافذة منزلقة)</strong> هما من أهم تقنيات حل المشاكل في البرمجة التنافسية. تُستخدمان لحل مشاكل المصفوفات والنصوص بكفاءة عالية باستخدام مساحة إضافية O(1) أو O(n).
          </p>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              Two Pointers (مؤشران):
            </p>
            <p>
              نستخدم مؤشرين يتحركان من طرفي المصفوفة أو من جهة واحدة. كل مؤشر يتحقق من عنصر معين ونحركهما حسب الشرط. مناسب للمشاكل التي تحتاج مقارنة عناصر أو البحث عن أزواج.
            </p>
          </div>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              Sliding Window (نافذة منزلقة):
            </p>
            <p>
              نستخدم نافذة بحجم ثابت أو متغير تتحرك عبر المصفوفة أو النص. يتم تحديث النتيجة عند إضافة عنصر جديد وإزالة عنصر قديم. مناسب للمشاكل التي تطلب أطول/أقصر نافذة满足 شرط معين.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* مشاكل Two Pointers - سهل */}
        {/* ========================================== */}
        <LessonSection title="مشاكل Two Pointers - سهل">
          {/* Problem 1: Valid Palindrome */}
          <ProblemCard
            id={1}
            title="Valid Palindrome"
            difficulty="easy"
            category="Two Pointers"
            description="معطى نص s، أعد true إذا كان palindrome (يُقرأ بنفس الطريقة من الأمام والخلف). يُسمح بتجاهل الأحرف غير الأبجدية والأرقام والمسافات."
            examples={[
              { input: 's = "A man, a plan, a canal: Panama"', output: "true" },
              { input: 's = "race a car"', output: "false" },
              { input: 's = " "', output: "true" },
            ]}
            hints={[
              "استخدم مؤشرين، واحد من البداية وواحد من النهاية",
              "تخطَّ الأحرف غير الأبجدية والأرقام",
              "قارن الحرف السفلي مع النظير له من الجهة الأخرى",
            ]}
            solution={`function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function isAlphaNum(c) {
  return (
    (c >= "a" && c <= "z") ||
    (c >= "A" && c <= "Z") ||
    (c >= "0" && c <= "9")
  );
}`}
            solutionApproach="استخدم مؤشرين من الطرفين، تخطَّ غير الأبجدية، قارن الحروف بصغري."
          />

          {/* Problem 2: Merge Sorted Array */}
          <ProblemCard
            id={2}
            title="Merge Sorted Array"
            difficulty="easy"
            category="Two Pointers"
            description="أعد دمج مصفوفتين مرتبتين nums1 و nums2 في مصفوفة واحدة مرتبة داخل nums1. مصفوفة nums1 لها حجم m + n حيث m هو عدد العناصر الأصلية و n عدد عناصر nums2."
            examples={[
              { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]" },
              { input: "nums1 = [1], m = 1, nums2 = [], n = 0", output: "[1]" },
            ]}
            hints={[
              "ابدأ من نهاية المصفوفتين",
              "ضع العنصر الأكبر في المكان الأخير من nums1",
              "إذا انتهت إحدى المصفوفتين، انسخ باقي الأخرى",
            ]}
            solution={`function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}`}
            solutionApproach="ادمج من النهاية باستخدام مؤشرين، ضع العنصر الأكبر في المكان الأخير أولاً."
          />

          {/* Problem 3: Remove Duplicates */}
          <ProblemCard
            id={3}
            title="Remove Duplicates from Sorted Array"
            difficulty="easy"
            category="Two Pointers"
            description="أعد عدد العناصر الفريدة في المصفوفة المرتبة nums. يجب تعديل المصفوفة لتكون العناصر الفريدة في أولية فقط. لا تستخدم مساحة إضافية O(n)."
            examples={[
              { input: "nums = [1,1,2]", output: "2, nums1 = [1,2,_]" },
              { input: "nums = [0,0,1,1,1,2,2,3,3,4]", output: "5, nums1 = [0,1,2,3,4,_]" },
            ]}
            hints={[
              "استخدم مؤشرين:一个是 للقراءة والآخر للكتابة",
              "إذا كان العنصر الحالي مختلف عن السابق، اكتبه",
              "مؤشر الكتابة يتحرك فقط عند إضافة عنصر جديد",
            ]}
            solution={`function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let write = 0;

  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[write]) {
      write++;
      nums[write] = nums[read];
    }
  }

  return write + 1;
}`}
            solutionApproach="مؤشران: read للقراءة و write للكتابة. اكتب فقط العناصر الجديدة."
          />
        </LessonSection>

        {/* ========================================== */}
        {/* مشاكل Two Pointers - متوسط */}
        {/* ========================================== */}
        <LessonSection title="مشاكل Two Pointers - متوسط">
          {/* Problem 4: Two Sum II */}
          <ProblemCard
            id={4}
            title="Two Sum II - Input Array Is Sorted"
            difficulty="medium"
            category="Two Pointers"
            description="أعد فهرسي العنصرين في مصفوفة مرتبة numbers بحيث يكون مجموعهما يساوي target. يجب أن يكون الحل بشكل 1-indexed. لا تستخدم نفس العنصر مرتين."
            examples={[
              { input: "numbers = [2,7,11,15], target = 9", output: "[1,2]" },
              { input: "numbers = [2,3,4], target = 6", output: "[1,3]" },
              { input: "numbers = [-1,0], target = -1", output: "[1,2]" },
            ]}
            hints={[
              "المصفوفة مرتبة، استغل هذا",
              "ابدأ بمؤشر من البداية ومؤشر من النهاية",
              "إذا كان المجموع أقل من target، حرّك المؤشر الأيسر لليمين",
              "إذا كان المجموع أكبر من target، حرّك المؤشر الأيمن لليسار",
            ]}
            solution={`function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}`}
            solutionApproach="مؤشران من الطرفين، حرّك حسب المجموع مقارنة بـ target."
          />

          {/* Problem 5: 3Sum Closest */}
          <ProblemCard
            id={5}
            title="3Sum Closest"
            difficulty="medium"
            category="Two Pointers"
            description="أعد مجموع ثلاثة عناصر في nums يكون أقرب إلى target. يوجد حل واحد فقط للسؤال."
            examples={[
              { input: "nums = [-1,2,1,-4], target = 1", output: "2" },
              { input: "nums = [0,1,2], target = 3", output: "3" },
            ]}
            hints={[
              "رتب المصفوفة أولاً",
              "ثبّت عنصراً واستخدم مؤشرين للباقي",
              "حسّن أقرب مجموع مع كل تكرار",
              "تحرك بالمؤشر بناءً على مقارنة المجموع مع target",
            ]}
            solution={`function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }

  return closest;
}`}
            solutionApproach="رتب ثم ثبّت عنصراً واستخدم مؤشرين. حسّن أقرب مجموع مع كل خطوة."
          />

          {/* Problem 6: Container With Most Water */}
          <ProblemCard
            id={6}
            title="Container With Most Water"
            difficulty="medium"
            category="Two Pointers"
            description="أوجد أكبر مساحة يمكن أن يحتويها الماء مع خطوط ارتفاعات height. المساحة محسوبة كـ min(height[left], height[right]) * (right - left)."
            examples={[
              { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
              { input: "height = [1,1]", output: "1" },
            ]}
            hints={[
              "ابدأ بمؤشر من كل طرف",
              "احسب المساحة الحالية",
              "حرّك المؤشر الذي يملك ارتفاع أقل",
              "لا يمكن تحسين المساحة إلا بزيادة الارتفاع الأصغر",
            ]}
            solution={`function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const currentWater =
      Math.min(height[left], height[right]) * (right - left);
    maxWater = Math.max(maxWater, currentWater);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}`}
            solutionApproach="مؤشران من الطرفين، حرّك المؤشر الأصغر لتحسين المساحة."
          />

          {/* Problem 10: Minimum Size Subarray Sum */}
          <ProblemCard
            id={10}
            title="Minimum Size Subarray Sum"
            difficulty="medium"
            category="Sliding Window"
            description="أوجد أطول نافذة فرعية (subarray) مجموع عناصرها أكبر من أو يساوي target. إذا لم توجد، أعد 0."
            examples={[
              { input: "target = 7, nums = [2,3,1,2,4,3]", output: "2" },
              { input: "target = 4, nums = [1,4,4]", output: "1" },
              { input: "target = 11, nums = [1,1,1,1,1,1,1,1]", output: "0" },
            ]}
            hints={[
              "استخدم نافذة منزلقة (Sliding Window)",
              "وسّع النافذة بإضافة عنصر من اليمين",
              "قلّص النافذة بإزالة عنصر من اليسار",
              "تحديث الأدنى عند كل نافذة صالحة",
            ]}
            solution={`function minSubArrayLen(target, nums) {
  let minLength = Infinity;
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}`}
            solutionApproach="نافذة منزلقة قابلة للتوسيع والتقليص. وسّع بإضافة وقلّص بإزالة."
          />

          {/* Problem 7: Longest Substring Without Repeating Characters */}
          <ProblemCard
            id={7}
            title="Longest Substring Without Repeating Characters"
            difficulty="medium"
            category="Sliding Window"
            description="أوجد طول أطول نص فرعي (substring) لا يحتوي على أحرف متكررة."
            examples={[
              { input: 's = "abcabcbb"', output: "3" },
              { input: 's = "bbbbb"', output: "1" },
              { input: 's = "pwwkew"', output: "3" },
            ]}
            hints={[
              "استخدم نافذة منزلقة مع Set أو Map",
              "أضف الحرف الجديد للنافذة",
              "إذا كان الحرف مكرراً، أزل العناصر من اليسار حتى الإزالة",
              "حدّث أطول طول مع كل خطوة",
            ]}
            solution={`function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}`}
            solutionApproach="نافذة منزلقة مع Set لتتبع الأحرف. أزل عند التكرار وحدّث الأطول."
          />

          {/* Problem 8: Permutation in String */}
          <ProblemCard
            id={8}
            title="Permutation in String"
            difficulty="medium"
            category="Sliding Window"
            description="أعد true إذا كان s2 يحتوي على ترتيب (permutation) لأي نص فرعي بطول s1 في أي مكان منه."
            examples={[
              { input: 's1 = "ab", s2 = "eidbaooo"', output: "true" },
              { input: 's1 = "ab", s2 = "eidboaoo"', output: "false" },
            ]}
            hints={[
              "استخدم نافذة منزلقة بطول s1",
              "قارن تكرار الحروف في كل نافذة مع s1",
              "استخدم مصفوفة تكرار بطول 26 للحرف",
              "حدّث التكرار عند إضافة حرف وإزالة آخر",
            ]}
            solution={`function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    count1[s1.charCodeAt(i) - 97]++;
    count2[s2.charCodeAt(i) - 97]++;
  }

  if (count1.every((c, i) => c === count2[i])) return true;

  for (let i = s1.length; i < s2.length; i++) {
    count2[s2.charCodeAt(i) - 97]++;
    count2[s2.charCodeAt(i - s1.length) - 97]--;

    if (count1.every((c, j) => c === count2[j])) return true;
  }

  return false;
}`}
            solutionApproach="نافذة بطول s1 مع مصفوفة تكرار. قارن التكرارات في كل نافذة."
          />

          {/* Problem 9: Longest Repeating Character Replacement */}
          <ProblemCard
            id={9}
            title="Longest Repeating Character Replacement"
            difficulty="medium"
            category="Sliding Window"
            description="أوجد أطول نص فرعي يحتوي على حرف مكرر واحد فقط يمكن تحقيقه بـ k استبدال حرفي."
            examples={[
              { input: 's = "ABAB", k = 2', output: "4" },
              { input: 's = "AABABBA", k = 1', output: "4" },
            ]}
            hints={[
              "استخدم نافذة منزلقة مع عدّاد تكرار",
              "طول النافذة - أكثر حرف تكرراً = عدد الاستبدالات المطلوبة",
              "إذا كانت الاستبدالات المطلوبة > k، قلّص النافذة",
              "حدّث أطول طول مع كل خطوة صالحة",
            ]}
            solution={`function characterReplacement(s, k) {
  const count = new Array(26).fill(0);
  let left = 0;
  let maxLength = 0;
  let maxCount = 0;

  for (let right = 0; right < s.length; right++) {
    const idx = s.charCodeAt(right) - 65;
    count[idx]++;
    maxCount = Math.max(maxCount, count[idx]);

    while (right - left + 1 - maxCount > k) {
      count[s.charCodeAt(left) - 65]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}`}
            solutionApproach="نافذة منزلقة مع تتبع أكثر حرف تكرراً. طول النافذة - maxCount = الاستبدالات."
          />
        </LessonSection>

        {/* ========================================== */}
        {/* مشاكل Sliding Window - صعب */}
        {/* ========================================== */}
        <LessonSection title="مشاكل Sliding Window - صعب">
          {/* Problem 11: Sliding Window Maximum */}
          <ProblemCard
            id={11}
            title="Sliding Window Maximum"
            difficulty="hard"
            category="Sliding Window"
            description="أعد مصفوفة من الحد الأقصى لكل نافذة بطول k تتحرك عبر المصفوفة nums من اليسار لليمين."
            examples={[
              { input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]" },
              { input: "nums = [1], k = 1", output: "[1]" },
            ]}
            hints={[
              "استخدم Deque (طابور مزدوج الأطراف)",
              "احفظ فقط العناصر المفيدة في الـ Deque",
              "أزل العناصر الأصغر من الخلف عند الإضافة",
              "أزل العناصر الخارجة من النافذة من الأمام",
            ]}
            solution={`function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[deque.length - 1] < nums[i]) {
      deque.pop();
    }
    deque.push(nums[i]);

    if (i >= k && nums[i - k] === deque[0]) {
      deque.shift();
    }

    if (i >= k - 1) {
      result.push(deque[0]);
    }
  }

  return result;
}`}
            solutionApproach="Deque يحتفظ بالعناصر النزولية. أزل الأصغر من الخلف والأقدم من الأمام."
          />

          {/* Problem 12: Minimum Window Substring */}
          <ProblemCard
            id={12}
            title="Minimum Window Substring"
            difficulty="hard"
            category="Sliding Window"
            description="أوجد أقصر نص فرعي في s يحتوي على كل حروف t. إذا لم يوجد، أعد空字符串."
            examples={[
              { input: 's = "ADOBECODEBANC", t = "ABC"', output: "BANC" },
              { input: 's = "a", t = "a"', output: "a" },
              { input: 's = "a", t = "aa"', output: "" },
            ]}
            hints={[
              "استخدم نافذة منزلقة مع عدّاد تكرار",
              "وسّع النافذة حتى تحتوي كل حروف t",
              "قلّص من اليسار للبحث عن أقصر نافذة",
              "استخدم متغير لعدد الحروف المطلوبة التي تم تلبيتها",
            ]}
            solution={`function minWindow(s, t) {
  if (t.length > s.length) return "";

  const map = new Map();
  for (const c of t) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  let required = map.size;
  let left = 0;
  let formed = 0;
  let windowCounts = new Map();
  let minLen = Infinity;
  let minStart = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    windowCounts.set(c, (windowCounts.get(c) || 0) + 1);

    if (map.has(c) && windowCounts.get(c) === map.get(c)) {
      formed++;
    }

    while (formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      const leftChar = s[left];
      windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
      if (map.has(leftChar) && windowCounts.get(leftChar) < map.get(leftChar)) {
        formed--;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}`}
            solutionApproach="نافذة منزلقة مع عدّاد تكرار ومتغير formed لتتبع الحروف المطلوبة."
          />
        </LessonSection>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص Two Pointers & Sliding Window">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>Two Pointers:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>النمط الأساسي</p>
                  <pre className="mt-1 text-xs font-mono" style={{ direction: "ltr", textAlign: "left" }}>{`let left = 0, right = arr.length - 1;
while (left < right) {
  // قارن وحرّك المؤشر
}`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>متى نستخدمه؟</p>
                  <p>المصفوفة مرتبة ونسعى لزوج/ثلاثة عناصر</p>
                  <p>مقارنة عناصر من طرفي المصفوفة</p>
                  <p>التحقق من palindrome</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>Sliding Window:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>النمط الأساسي</p>
                  <pre className="mt-1 text-xs font-mono" style={{ direction: "ltr", textAlign: "left" }}>{`let left = 0;
for (let right = 0; right < n; right++) {
  // أضف элемент[right]
  while (شرط_الťقلیص) {
    // أزل элемент[left]
    left++;
  }
  // حدّث النتيجة
}`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(239, 68, 68, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--muted)" }}>متى نستخدمه؟</p>
                  <p>أطول/أقصر نافذة满足 شرط</p>
                  <p>نافذة بطول ثابت (Fixed Window)</p>
                  <p>تتبع حقول في نافذة منزلقة</p>
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