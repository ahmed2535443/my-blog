"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/problem-solving/02-arrays-strings";
import ProblemCard from "@/components/ProblemCard";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import CheatSheet from "@/components/CheatSheet";
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

export default function ArraysStrings() {
  const { lang } = useLanguage();
  const lesson = getLessonBySlug("problem-solving", "02-arrays-strings");
  const content = rawTranslations ? (rawTranslations[lang] || rawTranslations.en) : null;

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {content && content.sections.map((section, i) => (
          <LessonSection key={i} title={section.title}>
            {section.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
          </LessonSection>
        ))}

        <ProblemCard
          id={1}
          title="Two Sum"
          difficulty="easy"
          category="Arrays"
          description="معطى مصفوفة من الأعداد nums وعدد صحيح target، أرجع فهرسي عنصرَين مجموعهما يساوي target. يمكنك افتراض أن لكل سؤال إجابة واحدة فقط، ولن تستخدم نفس العنصر مرتين. الحل باستخدام Hash Map يحقق تعقيداً خطياً بدلاً من التعقيد المربّع للحل المزدوج."
          examples={[
            { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
            { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
            { input: "nums = [3,3], target = 6", output: "[0,1]" },
          ]}
          hints={[
            "بدلاً من البحث المزدوج O(n²)، استخدم Hash Map للبحث في O(1)",
            "عند كل عنصر، ابحث عن المكمّل (target - num) في الـ Map",
            "خزّن الفهرس والقيمة في الـ Map أثناء المرور على المصفوفة",
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
          id={2}
          title="Best Time to Buy and Sell Stock"
          difficulty="easy"
          category="Arrays"
          description="معطى مصفوفة prices حيث prices[i] سعر السهم في اليوم i. تريد شراء سهم يوماً واحداً وبعده في يوم لاحق لتحقيق أقصى ربح. أرجع أقصى ربح يمكنك تحقيقه. إذا لم تحقق أي ربح، أرجع 0."
          examples={[
            { input: "prices = [7,1,5,3,6,4]", output: "5" },
            { input: "prices = [7,6,4,3,1]", output: "0" },
          ]}
          hints={[
            "تتبع أقل سعر مررت به حتى الآن",
            "عند كل يوم، احسب الربح المحتمل = السعر الحالي - أقل سعر",
            "حدّث أكبر ربح إذا كان الربح المحتمل أعلى",
          ]}
          solution={`function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    const profit = prices[i] - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}`}
          solutionApproach="نمر على المصفوفة مرة واحدة ونحتفظ بأقل سعر (minPrice) وأقصى ربح (maxProfit). عند كل يوم، إذا كان السعر أقل من minPrice نحدّثه. ثم نحسب الربح المحتمل ونحدّث maxProfit إذا كان أعلى. التعقيد: O(n) وقت و O(1) مساحة."
        />

        <ProblemCard
          id={3}
          title="Contains Duplicate"
          difficulty="easy"
          category="Arrays"
          description="معطى مصفوفة nums، أرجع true إذا كان يوجد أي عنصر يظهر مرتين على الأقل في المصفوفة، و false إذا كان جميع العناصر فريدة."
          examples={[
            { input: "nums = [1,2,3,1]", output: "true" },
            { input: "nums = [1,2,3,4]", output: "false" },
            { input: "nums = [1,1,1,3,3,4,3,2,4,2]", output: "true" },
          ]}
          hints={[
            "استخدم Set لإزالة التكرارات وقارن الطول",
            "إذا كان طول Set أقل من طول المصفوفة، يوجد تكرار",
            "يمكنك أيضاً استخدام Set أثناء المرور والتحقق من الوجود",
          ]}
          solution={`function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}`}
          solutionApproach="نمر على المصفوفة ونخزّن كل عنصر في Set. عند كل عنصر جديد، نتحقق أولاً إذا كان موجوداً في الـ Set. إذا كان موجوداً، فالإجابة true. التعقيد: O(n) وقت و O(n) مساحة. الحل البديل: فرز المصفوفة ثم فحص العناصر المتجاورة، لكن التعقيد الأفضل مع Set."
        />

        <ProblemCard
          id={4}
          title="Valid Anagram"
          difficulty="easy"
          category="Strings"
          description="معطى سلسلان s و t، أرجع true إذا كانت s anagram لـ t، و false إذا لم تكن كذلك. Anagram هي كلمة أو عبارة تُشكّل من ترتيب أحرف كلمة أخرى بنفس الأحرف وبنفس العدد."
          examples={[
            { input: 's = "anagram", t = "nagaram"', output: "true" },
            { input: 's = "rat", t = "car"', output: "false" },
          ]}
          hints={[
            "أولاً تحقق من تساوي الطول - إذا مختلفان فالإجابة false",
            "أعدّ تكرارات كل حرف في السلسلة الأولى",
            "قارن العدّات مع السلسلة الثانية",
          ]}
          solution={`function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
    count[t[i]] = (count[t[i]] || 0) - 1;
  }

  for (const char in count) {
    if (count[char] !== 0) return false;
  }

  return true;
}`}
          solutionApproach="نعدّ تكرارات أحرف s بزيادة 1 وتكرارات t بناقصة 1 في نفس Hash Map. إذا كانت s anagram لـ t، فإن جميع القيم في الـ Map ستكون صفر. التعقيد: O(n) وقت و O(1) مساحة (بما أن حروف الأبجدية محدودة بـ 26 حرف)."
        />

        <ProblemCard
          id={5}
          title="Ransom Note"
          difficulty="easy"
          category="Strings"
          description="معطى سلسلتا ransomNote و magazine، أرجع true إذا كان ransomNote يمكن تشكيله من أحرف magazine. كل حرف في magazine يمكن استخدامه مرة واحدة فقط في ransomNote. يمكنك افتراض أن كل الحروفLowerCase."
          examples={[
            { input: 'ransomNote = "a", magazine = "b"', output: "false" },
            { input: 'ransomNote = "aa", magazine = "ab"', output: "false" },
            { input: 'ransomNote = "aa", magazine = "aab"', output: "true" },
          ]}
          hints={[
            "عدّ تكرارات كل حرف في magazine",
            "مر على أحرف ransomNote ونقص من العدّات",
            "إذا نقص أي عدّة عن الصفر، فالإجابة false",
          ]}
          solution={`function canConstruct(ransomNote, magazine) {
  const count = {};

  for (const char of magazine) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of ransomNote) {
    if (!count[char] || count[char] === 0) {
      return false;
    }
    count[char]--;
  }

  return true;
}`}
          solutionApproach="نعدّ تكرارات كل حرف في magazine في Hash Map. ثم نمر على أحرف ransomNote وننقص من العدّات. إذا وجدنا حرف غير موجود أو عدّته صفر، فالإجابة false. التعقيد: O(n + m) حيث n و m طول السلسلتين."
        />

        <ProblemCard
          id={6}
          title="Group Anagrams"
          difficulty="medium"
          category="Strings"
          description="معطى مصفوفة من السلاسل النصية strs، قم بتجميع الـ Anagrams معاً. Anagram هي كلمة يمكن تشكيلها من ترتيب أحرف كلمة أخرى بنفس الأحرف. أرجع المصفوفة المجمّعة."
          examples={[
            { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["tan","ate"],["eat","tea"]]' },
            { input: 'strs = [""]', output: '[[""]]' },
            { input: 'strs = ["a"]', output: '[["a"]]' },
          ]}
          hints={[
            "كل anagram عندما يُرتب يصبح نفس الكلمة",
            "استخدم الكلمة المرتبة كمفتاح في Hash Map",
            "الكلمات ذات المفتاح نفسها تابعة لنفس المجموعة",
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
          solutionApproach="لكل سلسلة، نرتب أحرفها لنحصل على مفتاح فريد. جميع الـ Anagrams ستكون لها نفس المفتاح المرتب. نخزّن كل سلسلة في قائمة مرتبطة بالمفتاح في Hash Map. التعقيد: O(n × k log k) حيث k أطول سلسلة ( بسبب الفرز)."
        />

        <ProblemCard
          id={7}
          title="Longest Substring Without Repeating Characters"
          difficulty="medium"
          category="Strings"
          description="معطى سلسلة s، أرجع طول أطول نص فرعي (substring) بدون تكرار الأحرف. النص الفرعي هو سلسلة متتالية من الأحرف داخل السلسلة الأصلية."
          examples={[
            { input: 's = "abcabcbb"', output: "3" },
            { input: 's = "bbbbb"', output: "1" },
            { input: 's = "pwwkew"', output: "3" },
          ]}
          hints={[
            "استخدم Sliding Window مع Set أو Hash Map",
            "وسّع النافذة لليمين عندما لا يوجد تكرار",
            "قلّص النافذة من اليسار عند وجود تكرار",
          ]}
          solution={`function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}`}
          solutionApproach="نستخدم نافذة منزلقة (Sliding Window) مع مؤشرين left و right. الـ Set يخزّن أحرف النافذة الحالية. عند كل حرف جديد، إذا كان موجوداً نحذف من اليسار حتى يختفي التكرار. نحدّث أطول طول عند كل خطوة. التعقيد: O(n) لأن كل حرف يُضاف ويُحذف مرة واحدة فقط."
        />

        <ProblemCard
          id={8}
          title="3Sum"
          difficulty="medium"
          category="Arrays"
          description="معطى مصفوفة nums من أعداد صحيحة، أرجع جميع المجموعات الثلاثية الفريدة التي مجموعها يساوي 0. لا تُدخل الحلول المتكررة في الإجابة."
          examples={[
            { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
            { input: "nums = [0,1,1]", output: "[]" },
            { input: "nums = [0,0,0]", output: "[[0,0,0]]" },
          ]}
          hints={[
            "رتّب المصفوفة أولاً لتسهيل تجنب التكرارات",
            "لكل عنصر، استخدم Two Pointers للباقي",
            "اقفز فوق العناصر المكررة لتجنب الحلول المكررة",
          ]}
          solution={`function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}`}
          solutionApproach="نرتب المصفوفة أولاً. لكل عنصر nums[i]، نستخدم مؤشرين left و right للبحث عن زوج مجموعهما يساوي -nums[i]. عند إيجاد حل، نقفز فوق العناصر المكررة. التعقيد: O(n²) بسبب الحلقة الخارجية والمؤشرين."
        />

        <ProblemCard
          id={9}
          title="Container With Most Water"
          difficulty="medium"
          category="Arrays"
          description="معطى مصفوفة height حيث height[i] ارتفاع خط على نقطة i، أوجد اثنين من الخطوط مع الأعمدة المائية الحاوية الأكبر مساحة. المنطقة التي تحتويها الحوض تُحسب بـ min(height[i], height[j]) × (j - i)."
          examples={[
            { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
            { input: "height = [1,1]", output: "1" },
          ]}
          hints={[
            "ابدأ بمؤشر في كل طرف من المصفوفة",
            "احسب المساحة وحدّث الحد الأقصى",
            "حرّك المؤشر الذي ارتفاعه أقل لمحاولة إيجاد مساحة أكبر",
          ]}
          solution={`function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    const area = width * h;
    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}`}
          solutionApproach="نستخدم مؤشرين من طرفي المصفوفة. نحسب المساحة عند المؤشرين الحاليين ونحدّث الحد الأقصى. ثم نحرّك المؤشر الذي ارتفاعه أقل، لأن تحريك الأطول لن يزيد المساحة (العرض يتقلص والارتفاع لن يتجاوز الأقصر). التعقيد: O(n) لأن كل خطوة تنقص المؤشرات."
        />

        <ProblemCard
          id={10}
          title="Product of Array Except Self"
          difficulty="medium"
          category="Arrays"
          description="معطى مصفوفة nums، أرجع مصفوفة answer حيث answer[i] هو حاصل ضرب جميع عناصر nums ما عدا nums[i]. يجب حل المسألة بدون استخدام عملية القسمة وبتعقيد O(n)."
          examples={[
            { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
            { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
          ]}
          hints={[
            "أنشئ مصفوفة products من اليسار: كل عنصر = حاصل ضرب العناصر قبله",
            "أنشئ مصفوفة products من اليمين: كل عنصر = حاصل ضرب العناصر بعده",
            "النتيجة النهائية = products اليسار × products اليمين",
          ]}
          solution={`function productExceptSelf(nums) {
  const n = nums.length;
  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);
  const result = new Array(n);

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}`}
          solutionApproach="نُنشئ مصفوفتين: left[i] = حاصل ضرب العناصر لليسار من i، right[i] = حاصل ضرب العناصر لليمين من i. النتيجة = left[i] × right[i]. لا نستخدم القسمة. التعقيد: O(n) و O(n) مساحة. يمكن تحسين المساحة لتكون O(1) باستخدام مصفوفة الإخراج فقط."
        />

        <ProblemCard
          id={11}
          title="Maximum Subarray"
          difficulty="medium"
          category="Arrays"
          description="معطى مصفوفة nums، أوجد أكبر مجموع لمصفوفة فرعية متصلة. المصفوفة الفرعية هي جزء متتالي من المصفوفة الأصلية (تحتوي على عنصر واحد على الأقل)."
          examples={[
            { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
            { input: "nums = [1]", output: "1" },
            { input: "nums = [5,4,-1,7,8]", output: "23" },
          ]}
          hints={[
            "استخدم خوارزمية Kadane الشهيرة",
            "عند كل عنصر، قرر: ابدأ سلسلة جديدة أم تابع الحالية",
            "إذا كان المجموع الحالي أقل من العنصر الحالي، ابدأ من جديد",
          ]}
          solution={`function maxSubArray(nums) {
  let currentMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    globalMax = Math.max(globalMax, currentMax);
  }

  return globalMax;
}`}
          solutionApproach="خوارزمية Kadane: عند كل عنصر، نقرر هل نضيفه للسلسلة الحالية أم نبدأ سلسلة جديدة منه. currentMax = max(العنصر الحالي، العنصر الحالي + currentMax السابق). globalMax = max(globalMax، currentMax). التعقيد: O(n) وقت و O(1) مساحة."
        />

        <ProblemCard
          id={12}
          title="Merge Intervals"
          difficulty="medium"
          category="Arrays"
          description="معطى مصفوفة من الفترات intervals حيث intervals[i] = [start, end]، ادمج جميع الفترات المتعارضة (overlapping) في فترات أقصر وأعد المصفوفة الناتجة."
          examples={[
            { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" },
            { input: "intervals = [[1,4],[4,5]]", output: "[[1,5]]" },
          ]}
          hints={[
            "رتّب الفترات حسب وقت البداية",
            "مر على الفترات وقارنها مع الفترة الحالية",
            "إذا كانت الفترة الحالية تتعارض مع التالية، ادمجهما",
          ]}
          solution={`function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }

  return merged;
}`}
          solutionApproach="نرتب الفترات حسب وقت البداية. نبدأ مع الفترة الأولى كنقطة مرجعية. لكل فترة تالية، إذا كانت تتعارض (بدايتها <= نهاية الفترة الحالية)، ندمجهما بأخذ أقصى نهاية. إذا لم تتعارض، نضيفها كفترة جديدة. التعقيد: O(n log n) بسبب الفرز."
        />

        <ProblemCard
          id={13}
          title="Search in Rotated Sorted Array"
          difficulty="medium"
          category="Arrays"
          description="معطى مصفوفة nums مُرتبة ولكن دُرت (rotated) حول فهرس معين، وعدد صحيح target، أرجع فهرس target في nums أو -1 إذا لم يكن موجوداً. يجب أن يكون تعقيد الحل O(log n)."
          examples={[
            { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
            { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" },
            { input: "nums = [1], target = 0", output: "-1" },
          ]}
          hints={[
            "استخدم البحث الثنائي مع تعديل بسيط",
            "في كل خطوة، حدد أي نصف المصفوفة مُرتب بشكل صحيح",
            "إذا كان الهدف في الجزء المُرتب، ابحث فيه، وإلا ابحث في الجزء الآخر",
          ]}
          solution={`function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}`}
          solutionApproach="بحث ثنائي مع تحديد الجزء المُرتب. عند كل خطوة midpoint، أحد الجزأين مُرتب بالتأكيد. نتحقق هل الهدف في الجزء المُرتب، إذا نعم نبحث فيه، وإلا نبحث في الجزء الآخر. التعقيد: O(log n)."
        />

        <ProblemCard
          id={14}
          title="Minimum Window Substring"
          difficulty="medium"
          category="Strings"
          description="معطى سلسلتان s و t، أرجع أقصر نص فرعي في s يحتوي على جميع أحرف t (بما في ذلك التكرارات). إذا لم يوجد such نص، أرجع السلسلة الفارغة."
          examples={[
            { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' },
            { input: 's = "a", t = "a"', output: '"a"' },
            { input: 's = "a", t = "aa"', output: '""' },
          ]}
          hints={[
            "استخدم نافذة منزلقة مع عدّ تكرارات الأحرف",
            "عندما تحتوي النافذة على جميع أحرف t، حاول تقليصها من اليسار",
            "تتبع عدد الأحرف المطلوبة التي تحققتها",
          ]}
          solution={`function minWindow(s, t) {
  if (!s || !t || s.length < t.length) return "";

  const tCount = {};
  for (const char of t) {
    tCount[char] = (tCount[char] || 0) + 1;
  }

  let required = Object.keys(tCount).length;
  let left = 0;
  let minLen = Infinity;
  let minStart = 0;
  let formed = 0;
  const windowCount = {};

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowCount[char] = (windowCount[char] || 0) + 1;

    if (tCount[char] && windowCount[char] === tCount[char]) {
      formed++;
    }

    while (formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      const leftChar = s[left];
      windowCount[leftChar]--;
      if (tCount[leftChar] && windowCount[leftChar] < tCount[leftChar]) {
        formed--;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}`}
          solutionApproach="نستخدم نافذة منزلقة مع Hash Map لعدّ تكرارات أحرف t. نوسّع النافذة لليمين حتى نحتوي على جميع الأحرف المطلوبة. عند تحقق الشرط، نقلّص النافذة من اليسار لتقليل الطول. نتتبع أقصر نافذة صالحة. التعقيد: O(n + m) حيث n و m طول السلسلتين."
        />

        <ProblemCard
          id={15}
          title="Encode and Decode Strings"
          difficulty="medium"
          category="Strings"
          description="صمم خوارزمية لترميز (encode) مصفوفة من السلاسل إلى سلسلة واحدة، وخوارزمية لفك الترميز (decode) من السلسلة المُرمّزة إلى المصفوفة الأصلية. يجب أن يكون الترميز فعالاً ويدعم أي حروف."
          examples={[
            { input: 'Input: ["lint","code","love","you"]', output: 'encode: "4#lint4#code4#love3#you", decode: ["lint","code","love","you"]' },
            { input: 'Input: ["we","say",":","yes"]', output: 'encode: "2#we3#say1#:3#yes", decode: ["we","say",":","yes"]' },
          ]}
          hints={[
            "استخدم طول كل سلسلة كجزء من الترميز",
            "النمط: الطول + # + السلسلة",
            "فك الترميز: اقرأ الأرقام قبل #، ثم اقرأ ذلك العدد من الأحرف",
          ]}
          solution={`function encode(strs) {
  let encoded = "";
  for (const str of strs) {
    encoded += str.length + "#" + str;
  }
  return encoded;
}

function decode(s) {
  const result = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") {
      j++;
    }
    const len = parseInt(s.substring(i, j));
    result.push(s.substring(j + 1, j + 1 + len));
    i = j + 1 + len;
  }

  return result;
}`}
          solutionApproach="الترميز: لكل سلسلة، نكتب طولها أولاً ثم # ثم السلسلة نفسها. مثال: 'lint' → '4#lint'. فك الترميز: نقرأ الأرقام قبل # لنعرف طول السلسلة، ثم نقرأ ذلك العدد من الأحرف بعد #. التعقيد: O(n) حيث n مجموع طول جميع السلاسل."
        />

        <CheatSheet title="ملخص المصفوفات والنصوص">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>المصفوفات (Arrays):</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>العمليات الأساسية</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`// الوصول
arr[i];              // O(1)
arr.length;          // O(1)

// الإضافة والحذف
arr.push(val);       // O(1)
arr.pop();           // O(1)
arr.unshift(val);    // O(n)
arr.shift();         // O(n)

// الترتيب
arr.sort((a,b) => a - b);  // O(n log n)`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>النمط Two Pointers</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`// من الطرفين
let left = 0, right = arr.length - 1;
while (left < right) {
  // معالجة
  if (condition) left++;
  else right--;
}

// من جهة واحدة
let slow = 0;
for (let fast = 0; fast < n; fast++) {
  if (condition) arr[slow++] = arr[fast];
}`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>Prefix Sum</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`const prefix = [0];
for (let i = 0; i < arr.length; i++) {
  prefix.push(prefix[i] + arr[i]);
}
// مجموع العناصر من i إلى j
const sum = prefix[j+1] - prefix[i];`}</pre>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>النصوص (Strings):</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>العمليات الأساسية</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`// الوصول
str[i];              // O(1)
str.length;          // O(1)

// التحويلات
str.split('');       // string → array
arr.join('');        // array → string
str.substring(i, j); // جزء من السلسلة

// البحث
str.includes('ab');  // true/false
str.indexOf('ab');   // الفهرس أو -1`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>Sliding Window</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`let left = 0;
const window = new Set();

for (let right = 0; right < s.length; right++) {
  // إضافة للنافذة
  window.add(s[right]);

  // تقليص من اليسار
  while (condition) {
    window.delete(s[left]);
    left++;
  }

  // تحديث النتيجة
  maxLen = Math.max(maxLen, right - left + 1);
}`}</pre>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>Kadane's Algorithm</p>
                  <pre className="text-xs font-mono mt-1" style={{ direction: "ltr", textAlign: "left" }}>{`let currentMax = nums[0];
let globalMax = nums[0];

for (let i = 1; i < nums.length; i++) {
  currentMax = Math.max(nums[i], currentMax + nums[i]);
  globalMax = Math.max(globalMax, currentMax);
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>التعقيديات الزمنية المرجعية:</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>الوصول بالفهرس:</strong> O(1)</p>
                <p><strong>البحث الخطي:</strong> O(n)</p>
                <p><strong>البحث الثنائي:</strong> O(log n)</p>
              </div>
              <div>
                <p><strong>الإضافة والنهاية:</strong> O(1)</p>
                <p><strong>الإضافة من المنتصف:</strong> O(n)</p>
                <p><strong>الفرز:</strong> O(n log n)</p>
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
