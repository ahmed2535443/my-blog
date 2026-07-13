"use client"

import ProblemCard from "@/components/ProblemCard"
import LessonSection from "@/components/LessonSection"
import LessonHeader from "@/components/LessonHeader"
import LessonNavigation from "@/components/LessonNavigation"
import CheatSheet from "@/components/CheatSheet"
import { getLessonBySlug } from "@/data/curriculum"

export default function HashMapsSets() {
  const lesson = getLessonBySlug("problem-solving", "03-hash-maps-sets")

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        <LessonSection title="مقدمة في Hash Maps و Sets">
          <p>
            في هذا الدرس سنتعرف على أقوى هياكل البيانات استخداماً في حل مشاكل البرمجة التنافسية: <strong>Hash Maps</strong> و <strong>Sets</strong>.
            هذه الهياكل توفر بحثاً وبحثاً وإدراجاً في متوسط تعقيد O(1)، مما يجعلها حلاً مثالياً للعديد من المشاكل التي تبدو معقدة بدونها.
          </p>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              Hash Map في JavaScript:
            </p>
            <p>
              في JavaScript، الـ <code>Object</code> و <code>Map</code> كلاهما يُستخدمان كـ Hash Maps.
              الـ <code>Map</code> يحتوي على مزايا إضافية مثل الحفاظ على ترتيب الإدراج ودعم مفاتيح من أي نوع.
            </p>
          </div>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              Set في JavaScript:
            </p>
            <p>
              الـ <code>Set</code> هو مجموعة من القيم الفريدة (بدون تكرار). يوفر البحث في O(1) أيضاً
              وهو مثالي لإزالة التكرارات والتحقق من الوجود.
            </p>
          </div>
        </LessonSection>

        <LessonSection title="متى نستخدم Hash Map أو Set؟">
          <ul>
            <li><strong>البحث عن زوج من الأعداد:</strong> عندما تحتاج لمعرفة ما إذا كان مجموع عددين يساوي قيمة معينة، استخدم Hash Map لتخزين القيم التي مررت بها.</li>
            <li><strong>إزالة التكرارات:</strong> استخدم Set لتحويل مصفوفة إلى مصفوفة فريدة بكلمة واحدة.</li>
            <li><strong>العدّ (Counting):</strong> Hash Map ممتاز لعدّ تكرارات العناصر مثل الأحرف أو الأرقام.</li>
            <li><strong>التحقق من الوجود:</strong> كلتا الهياكلين يوفران فحص الوجود في O(1) بدلاً من O(n) في المصفوفات.</li>
            <li><strong>المجموعات المتداخلة:</strong> استخدام Set لحساب التقاطع والتجميع بين مجموعتين.</li>
          </ul>
        </LessonSection>

        {/* ==================== المشاكل السهلة ==================== */}

        <ProblemCard
          id={1}
          title="Valid Anagram"
          difficulty="easy"
          category="Hash Maps"
          description="معطى سلسلان s و t، أرجع true إذا كانت s anagram لـ t، و false إذا لم تكن كذلك. Anagram هي كلمة أو عبارة تُشكّل من ترتيب أحرف كلمة أخرى بنفس الأحرف. الحل باستخدام Hash Map يتم بعّد تكرارات كل حرف في كل سلسلة ثم مقارنتهما."
          examples={[
            { input: 's = "anagram", t = "nagaram"', output: "true" },
            { input: 's = "rat", t = "car"', output: "false" },
          ]}
          hints={[
            "أعدّ تكرارات كل حرف في السلسلة الأولى في Hash Map",
            "عِدّ تكرارات السلسلة الثانية وقارنها مع الـ Hash Map",
            "إذا كانت جميع العدّات متساوية، فالإجابة true",
          ]}
          solution={`function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const countMap = {};

  for (const char of s) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  for (const char of t) {
    if (!countMap[char]) return false;
    countMap[char]--;
  }

  return true;
}`}
          solutionApproach="الإنشاء في O(n): نعّد تكرارات أحرف s في Hash Map، ثم ننقص العدّات لكل حرف في t. إذا عاد أي حرف بعدّة صفر أو غير موجود، فالإجابة false."
        />

        <ProblemCard
          id={2}
          title="Intersection of Two Arrays"
          difficulty="easy"
          category="Sets"
          description="معطى مصفوفتان nums1 و nums2، أرجع مصفوفة تحتوي على العناصر المشتركة بين المصفوفتين. كل عنصر في النتيجة يجب أن يظهر مرة واحدة فقط. الحل باستخدام Set يجعل هذا الحل بسيطاً وفعّالاً."
          examples={[
            { input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2]" },
            { input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]", output: "[9,4]" },
          ]}
          hints={[
            "حوّل إحدى المصفوفات إلى Set للبحث السريع",
            "ارجع العناصر الموجودة في المصفوفة الأخرى والـ Set",
            "Set يزيل التكرارات تلقائياً",
          ]}
          solution={`function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const result = [];

  for (const num of nums2) {
    if (set1.has(num)) {
      result.push(num);
      set1.delete(num);
    }
  }

  return result;
}`}
          solutionApproach="نحوّل nums1 إلى Set واحد، ثم نمر على nums2 ونتحقق من وجود كل عنصر في الـ Set. نحذف العنصر من الـ Set بعد إضافته للنتيجة لتجنب التكرار. التعقيد: O(n + m)."
        />

        <ProblemCard
          id={3}
          title="Happy Number"
          difficulty="easy"
          category="Sets"
          description="معطى عدد n، أرجع true إذا كانعداداً سعيداً (Happy Number). عدد سعيد هو عدد يصل إلى 1 عند تكرار عملية جمع مربعات أرقامه. إذا لم يصل إلى 1 ودخل في حلقة متناهية (دورية)، فهو ليس سعيداً. الحل باستخدام Set للكشف عن الدوريات."
          examples={[
            { input: "n = 19", output: "true" },
            { input: "n = 2", output: "false" },
          ]}
          hints={[
            "حوّل كل رقم لمجموع مربعات أرقامه",
            "إذا ظهر نفس الرقم مرتين، فهو في حلقة دائرة - ليس سعيداً",
            "استخدم Set لتخزين الأرقام التي زرناها",
          ]}
          solution={`function isHappy(n) {
  const seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    n = sum;
  }

  return n === 1;
}`}
          solutionApproach="نستخدم Set لتخزين كل رقم نزاره. عند كل خطوة، نحسب مجموع مربعات الأرقام. إذا وصلنا لـ 1 فهو سعيد. إذا ظهر رقم مسبقاً في الـ Set، فنحن في حلقة دائرة وليست سعيدة. التعقيد: O(log n) مساحة ووقت."
        />

        <ProblemCard
          id={4}
          title="Single Number"
          difficulty="easy"
          category="Hash Maps"
          description="معطى مصفوفة nums حيث كل عنصر يظهر مرتين ما عدا عنصر واحد يظهر مرة واحدة فقط. أرجع العنصر الذي يظهر مرة واحدة فقط. الحل باستخدام Hash Map يتضمن عدّ تكرارات كل عنصر والبحث عن العنصر الوحيد الذي عدّته 1."
          examples={[
            { input: "nums = [2,2,1]", output: "1" },
            { input: "nums = [4,1,2,1,2]", output: "4" },
            { input: "nums = [1]", output: "1" },
          ]}
          hints={[
            "أنشئ Hash Map وعدّ تكرارات كل عنصر",
            "ابحث عن العنصر الذي عدّته 1 فقط",
            "طريقة بديلة: XOR - كل عنصر يُلغي نفسه",
          ]}
          solution={`function singleNumber(nums) {
  const countMap = {};

  for (const num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for (const num in countMap) {
    if (countMap[num] === 1) return Number(num);
  }
}`}
          solutionApproach="ن雛ّ تكرارات كل عنصر في Hash Map بمرور واحد على المصفوفة. ثم نبحث عن العنصر الوحيد الذي عدّته 1. التعقيد: O(n) وقت و O(n) مساحة."
        />

        {/* ==================== المشاكل المتوسطة ==================== */}

        <ProblemCard
          id={5}
          title="Two Sum"
          difficulty="medium"
          category="Hash Maps"
          description="معطى مصفوفة من الأعداد nums وعدد صحيح target، أرجع فهرسي عنصرَين مجموعهما يساوي target. يمكنك افتراض أن لكل سؤال إجابة واحدة فقط، ولن تستخدم نفس العنصر مرتين. الحل باستخدام Hash Map يحقق تعقيداً خطياً."
          examples={[
            { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
            { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
            { input: "nums = [3,3], target = 6", output: "[0,1]" },
          ]}
          hints={[
            "بدلاً من البحث المزدوج O(n²)، استخدم Hash Map",
            "عند كل عنصر، ابحث عن المكمّل (target - num) في الـ Map",
            "خزّن الفهرس والقيمة في الـ Map أثناء المرور",
          ]}
          solution={`function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}`}
          solutionApproach="نمر على المصفوفة مرة واحدة. لكل عنصر، نحسب المكمّل (target - num) ونبحث عنه في الـ Map. إذا وجدناه، نرجع فهرسيهما. إذا لم نجده، نخزّن العنصر الحالي مع فهرسه في الـ Map. التعقيد: O(n) وقت و O(n) مساحة."
        />

        <ProblemCard
          id={6}
          title="Group Anagrams"
          difficulty="medium"
          category="Hash Maps"
          description="معطى مصفوفة من السلاسل النصية strs، قم بتجميع الـ Anagrams معاً. Anagram هي كلمة يمكن تشكيلها من ترتيب أحرف كلمة أخرى بنفس الأحرف. أرجع المصفوفة المجمّعة."
          examples={[
            { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["tan","ate"],["eat","tea"]]' },
            { input: 'strs = [""]', output: '[[""]]' },
            { input: 'strs = ["a"]', output: '[["a"]]' },
          ]}
          hints={[
            "كل anagram عندما يُرتب يصبح نفس الكلمة",
            "استخدم الكلمة المرتبة كمفتاح في Hash Map",
            "الكلمات ذات المفتاح نفسه تابعة لنفس المجموعة",
          ]}
          solution={`function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }

  return Array.from(map.values());
}`}
          solutionApproach="لكل سلسلة، نرتب أحرفها لنحصل على مفتاح فريد. جميع الـ Anagrams ستكون لها نفس المفتاح المرتب. نخزّن كل سلسلة في قائمة مرتبطة بالمفتاح في Hash Map. التعقيد: O(n × k log k) حيث k أطول سلسلة."
        />

        <ProblemCard
          id={7}
          title="Top K Frequent Elements"
          difficulty="medium"
          category="Hash Maps"
          description="معطى مصفوفة أعداد nums وعدد صحيح k، أرجع الـ k عناصر الأكثر تكراراً. يمكن إرجاع الإجابة بأي ترتيب. الحل باستخدام Hash Map لعدّ التكرارات ثم ترتيبها."
          examples={[
            { input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" },
            { input: "nums = [1], k = 1", output: "[1]" },
            { input: "nums = [4,1,-1,2,-1,2,3], k = 2", output: "[-1,2]" },
          ]}
          hints={[
            "أنشئ Hash Map وعدّ تكرارات كل عنصر",
            "رتّب العناصر حسب التكرار",
            "أرجع أول k عناصر من الفرز",
          ]}
          solution={`function topKFrequent(nums, k) {
  const freqMap = {};

  for (const num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  return Object.entries(freqMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => Number(num));
}`}
          solutionApproach="أولاً ن雛ّ تكرارات كل عنصر في Hash Map. ثم نحوّل الـ Map لمصفوفة من الأزواج [القيمة، التكرار] ونرتّبها تنازلياً حسب التكرار. نأخذ أول k عناصر. التعقيد: O(n log n) بسبب الفرز."
        />

        <ProblemCard
          id={8}
          title="Fraction to Recurring Decimal"
          difficulty="medium"
          category="Hash Maps"
          description="معطى صاعدين numerator و denominator، أرجع تمثيلهما كرقم عشري كنص. إذا كان العدد كسري، أظهر الجزء الدوري بين قوسين. مثال: 1/3 = 0.(3). الحل باستخدام Hash Map لتخزين مواقع باقي القسمة."
          examples={[
            { input: "numerator = 1, denominator = 2", output: '"0.5"' },
            { input: "numerator = 2, denominator = 1", output: '"2"' },
            { input: "numerator = 2, denominator = 3", output: '"0.(6)"' },
          ]}
          hints={[
            "القسمة المعتادة تعطي الجزء الصحيح وال쩝ور",
            "استخدم Hash Map لتخزين باقي القسمة ومكانها",
            "إذا تكرر باقي القسمة، فهذا يدل على بداية الجزء الدوري",
          ]}
          solution={`function fractionToDecimal(numerator, denominator) {
  if (numerator === 0) return "0";

  const result = [];
  const map = new Map();

  if ((numerator < 0) !== (denominator < 0)) {
    result.push("-");
  }

  let num = Math.abs(numerator);
  const den = Math.abs(denominator);

  result.push(Math.floor(num / den));
  num %= den;

  if (num === 0) return result.join("");

  result.push(".");

  while (num !== 0) {
    if (map.has(num)) {
      const index = map.get(num);
      result.splice(index, 0, "(");
      result.push(")");
      break;
    }

    map.set(num, result.length);
    num *= 10;
    result.push(Math.floor(num / den));
    num %= den;
  }

  return result.join("");
}`}
          solutionApproach="نقوم بالقسمة digit by digit. عند كل باقي قسمة، نخزّنه في Hash Map مع فهرسه الحالي في النتيجة. إذا تكرر باقي القسمة، فهذا يعني أن الأرقام ستبدأ تتكرر - نضع قوسين حول الجزء الدوري. التعقيد: O(n) حيث n عدد خانات الجزء الدوري."
        />

        <ProblemCard
          id={9}
          title="Longest Consecutive Sequence"
          difficulty="medium"
          category="Sets"
          description="معطى مصفوفة غير مُرتبة من الأعداد nums، أرجع طول أطول تسلسل متتالي متصل. المطلوب تعقيد O(n). الحل باستخدام Set يحقق هذا التعقيد."
          examples={[
            { input: "nums = [100,4,200,1,3,2]", output: "4" },
            { input: "nums = [0,3,7,2,5,8,4,6,0,1]", output: "9" },
          ]}
          hints={[
            "حوّل المصفوفة إلى Set للبحث في O(1)",
            "ابدأ من كل عدد وتحقق هل هو بداية تسلسل (لا يوجد num - 1)",
            "اكتب حلقة تتبع الأعداد المتتالية من نقطة البداية",
          ]}
          solution={`function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
}`}
          solutionApproach="نحوّل المصفوفة إلى Set. لكل عنصر، نتحقق هل هو بداية تسلسل (أي لا يوجد num-1 في الـ Set). إذا كان بداية، نتتبع الأعداد التالية +1 ونعدّها. نحتفظ بأطول تسلسل. كل عنصر يزار مرة واحدة فقط → O(n)."
        />

        <ProblemCard
          id={10}
          title="Subarray Sum Equals K"
          difficulty="medium"
          category="Hash Maps"
          description="معطى مصفوفة أعداد nums وعدد صحيح k، أرجع عدد المصفوفات الفرعية المتصلة التي مجموعها يساوي k. الحل باستخدام Hash Map مع Prefix Sums."
          examples={[
            { input: "nums = [1,1,1], k = 2", output: "2" },
            { input: "nums = [1,2,3], k = 3", output: "2" },
            { input: "nums = [1,-1,0], k = 0", output: "3" },
          ]}
          hints={[
            "استخدم Prefix Sum: المجموع التراكمي من البداية لكل عنصر",
            "إذا كان prefixSum[i] - prefixSum[j] = k، فالعنصر من j+1 إلى i مجموعه k",
            "خزّن عدد مرات كل prefixSum في Hash Map",
          ]}
          solution={`function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let prefixSum = 0;
  let count = 0;

  for (const num of nums) {
    prefixSum += num;
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
}`}
          solutionApproach="نحسب Prefix Sum (المجموع التراكمي). في كل خطوة، نتحقق: هل يوجد prefixSum سابق يساوي prefixSum الحالي - k؟ إذا نعم، فهذا يعني أن مجموع المصفوفة الفرعية بينهما يساوي k. نخزّن عدد مرات كل prefixSum في Hash Map. التعقيد: O(n)."
        />

        <ProblemCard
          id={11}
          title="Minimum Index of a Valid Split"
          difficulty="medium"
          category="Hash Maps"
          description="معطى مصفوفة nums، تقسيم صحيح (Valid Split) هو تقسيم المصفوفة إلى مصفوفتين فرعيتين حيث الأكثر تكراراً (dominant element) في كليهما يكون نفس العنصر. أرجع أصغر فهرس يحقّق شرط التقسيم الصحيح. إذا لم يوجد، أرجع -1."
          examples={[
            { input: "nums = [2,3,2,2]", output: "2" },
            { input: "nums = [2,1,1,1,3,4,3,2]", output: "6" },
            { input: "nums = [3,3,3,1,2,1,1,3,1,2]", output: "2" },
          ]}
          hints={[
            "ابحث عن العنصر الأكثر تكراراً في المصفوفة الكاملة",
            "عِدّ تكراراته في الجزء الأيسر والجزء الأيمن عند كل فهرس",
            "الشرط: العنصر الأكثر تكراراً يجب أن يكون هو نفسه الأكثر تكراراً في الجزأين",
          ]}
          solution={`function minimumIndex(nums) {
  const freqMap = {};
  for (const num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  let dominant = null;
  let maxFreq = 0;
  for (const num in freqMap) {
    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
      dominant = Number(num);
    }
  }

  let leftCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === dominant) {
      leftCount++;
    }
    const rightCount = maxFreq - leftCount;
    const leftLen = i + 1;
    const rightLen = nums.length - leftLen;

    if (leftCount * 2 > leftLen && rightCount * 2 > rightLen) {
      return i;
    }
  }

  return -1;
}`}
          solutionApproach="أولاً ن雛ّ تكرارات جميع العناصر لنحدد العنصر الأكثر تكراراً (dominant). ثم نمر على المصفوفة ونعدّ تكرارات العنصر domininant في الجزء الأيسر. الشرط: العدد في الجزء الأيسر يجب أن يتجاوز نصف طوله، والعدد في الجزء الأيمن يتجاوز نصف طوله أيضاً. التعقيد: O(n)."
        />

        <ProblemCard
          id={12}
          title="Find All Anagrams in a String"
          difficulty="medium"
          category="Hash Maps"
          description="معطى سلسلتان s و p، أرجع مصفوفة فهارس البداية لجميع الـ anagrams لـ p في s. يمكنك افتراض أن النتيجة تحتوي فقط على anagrams صالحة. الحل باستخدام Sliding Window مع Hash Map."
          examples={[
            { input: 's = "cbaebabacd", p = "abc"', output: "[0,6]" },
            { input: 's = "abab", p = "ab"', output: "[0,1,2]" },
          ]}
          hints={[
            "أنشئ عدّة تكرارات لأحرف p",
            "استخدم نافذة منزلقة بحجم p على s",
            "قارن عدّات الأحرف داخل النافذة مع عدّات p",
          ]}
          solution={`function findAnagrams(s, p) {
  const result = [];

  if (s.length < p.length) return result;

  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 97]++;
    sCount[s.charCodeAt(i) - 97]++;
  }

  if (arraysEqual(pCount, sCount)) {
    result.push(0);
  }

  for (let i = p.length; i < s.length; i++) {
    sCount[s.charCodeAt(i) - 97]++;
    sCount[s.charCodeAt(i - p.length) - 97]--;

    if (arraysEqual(pCount, sCount)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
}

function arraysEqual(a, b) {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}`}
          solutionApproach="نستخدم مصفوفتين من 26 عنصر (لكل حرف في الإنجليزية) لعدّ التكرارات: واحدة لـ p وواحدة لنافذة حالية على s. النافذة بحجم p تنزلق بخطوة واحدة. عند كل خطوة، نضيف الحرف الجديد ونحذف القديم ونقارن العدّات. التعقيد: O(n)."
        />

        {/* ==================== CheatSheet ==================== */}

        <CheatSheet title="ملخص Hash Maps و Sets">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>Hash Map (Object / Map):</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>الإنشاء والوصول</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`const map = new Map();
map.set("key", "value");
map.get("key");     // "value"
map.has("key");     // true
map.delete("key");`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>العدّ (Counting Pattern)</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`const count = {};
for (const item of arr) {
  count[item] = (count[item] || 0) + 1;
}`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>البحث عن الزوج (Two Sum Pattern)</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`for (const num of nums) {
  const complement = target - num;
  if (map.has(complement)) return [...];
  map.set(num, index);
}`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>التعقيد الزمني</p>
                  <p>البحث / الإدراج / الحذف: O(1) في المتوسط</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>Set:</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>الإنشاء والتعامل</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`const set = new Set([1, 2, 3]);
set.add(4);
set.has(2);       // true
set.delete(1);
set.size;         // 3`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>إزالة التكرارات</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`const unique = [...new Set(array)];
// أو
const unique = Array.from(new Set(array));`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>التحقق من الوجود</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`const set = new Set(nums1);
const intersection = nums2.filter(n => set.has(n));`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>الأنماط الشائعة</p>
                  <p>Longest Consecutive Sequence، Intersection، Duplicate Detection</p>
                </div>
              </div>
            </div>
          </div>
        </CheatSheet>

      </div>
      <LessonNavigation
        prevLesson={lesson.prevLesson}
        prevStage={lesson.prevLessonStage}
        nextLesson={lesson.nextLesson}
        nextStage={lesson.nextLessonStage}
      />
    </div>
  )
}
