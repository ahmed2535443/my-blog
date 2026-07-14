"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/problem-solving/08-dynamic-programming";
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

export default function DynamicProgrammingPage() {
  const { lang } = useLanguage();
  const lesson = getLessonBySlug("problem-solving", "08-dynamic-programming");
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

        <ProblemCard
          id={1}
          title="Climbing Stairs"
          difficulty="medium"
          category="Dynamic Programming"
          description="أنت تصعد سلماً يحتوي على n درجة. في كل مرة يمكنك التقدم بدفعة واحدة أو اثنتين. كم من الطرق المختلفة يمكنك بها الصعود للدرجة الأخيرة؟"
          examples={[
            { input: "n = 2", output: "2" },
            { input: "n = 3", output: "3" },
          ]}
          hints={[
            "هذه المشكلة مشابهة لمتتالية فيبوناتشي",
            "dp[i] يمثل عدد الطرق للوصول للدرجة i",
            "dp[1] = 1, dp[2] = 2, dp[i] = dp[i-1] + dp[i-2]",
          ]}
          solution={`function climbStairs(n) {
  if (n <= 2) return n;
  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}`}
          solutionApproach="نستخدم مصفوفة dp حيث dp[i] يمثل عدد الطرق للوصول للدرجة i. القيمة الحالية هي مجموع القيمتين السابقتين لأنك تأتي إما من درجة واحدة تحت أو درجتين تحت."
        />

        <ProblemCard
          id={2}
          title="House Robber"
          difficulty="medium"
          category="Dynamic Programming"
          description="أنت لص يخطط للسطو على بيوت مجاورة. كل بيت يحتوي على مبلغ مالي معين، لكن إذا سرقت بيتين متجاورين فسيتم إخطار الشرطة. ما هو الحد الأقصى للمبلغ الذي يمكنك سرقته؟"
          examples={[
            { input: "nums = [1,2,3,1]", output: "4" },
            { input: "nums = [2,7,9,3,1]", output: "12" },
          ]}
          hints={[
            "لا يمكنك سرقة بيتين متجاورتين",
            "dp[i] يمثل الحد الأقصى للمبلغ حتى العنصر i",
            "dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
          ]}
          solution={`function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
}`}
          solutionApproach="dp[i] يمثل الحد الأقصى للمبلغ عند الوصول للبيت i. عند كل بيت، لدينا خياران: إما سرقته (نضيف قيمته مع dp[i-2]) أو عدم سرقته (نحتفظ بـ dp[i-1]). نأخذ المجموع الأكبر."
        />

        <ProblemCard
          id={3}
          title="Coin Change"
          difficulty="medium"
          category="Dynamic Programming"
          description="أعطى مجموعة من العملات بـ различных القيم وقيمة مستهدفة، اكتب دالة تحدد الحد الأدنى لعدد العملات المطلوبة للوصول للقيمة المستهدفة. يمكنك استخدام كل عملة بلا حدود."
          examples={[
            { input: "coins = [1,5,10,25], amount = 30", output: "2" },
            { input: "coins = [2], amount = 3", output: "-1" },
          ]}
          hints={[
            "ابدأ بحل مشاكل أصغر (قيم أقل)",
            "dp[i] يمثل الحد الأدنى لعدد العملات للوصول للقيمة i",
            "dp[i] = min(dp[i - coin] + 1) لكل coin <= i",
          ]}
          solution={`function coinChange(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i && dp[i - coin] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`}
          solutionApproach="نملأ مصفوفة dp من القيمة 0 إلى amount. لكل قيمة i، نتحقق من جميع العملات. إذا كانت العملة أقل من أو تساوي i، فإن dp[i] = min(dp[i], dp[i - coin] + 1). نستخدم Infinity كبديل لـ -1 أثناء الحساب."
        />

        <ProblemCard
          id={4}
          title="Longest Increasing Subsequence"
          difficulty="medium"
          category="Dynamic Programming"
          description="أعطى مصفوفة أرقام، اكتب دالة تحدد أطول متتالية متصاعدة (غير متتالية بالضرورة) في المصفوفة."
          examples={[
            { input: "nums = [10,9,2,5,3,7,101,18]", output: "4" },
            { input: "nums = [0,1,0,3,2,3]", output: "4" },
          ]}
          hints={[
            "dp[i] يمثل أطول متتالية متصاعدة تنتهي عند الفهرس i",
            "لكل عنصر، تحقق من جميع العناصر السابقة",
            "dp[i] = max(dp[j] + 1) لكل j < i و nums[j] < nums[i]",
          ]}
          solution={`function lengthOfLIS(nums) {
  let n = nums.length;
  let dp = new Array(n).fill(1);
  let maxLen = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }
  return maxLen;
}`}
          solutionApproach="dp[i] يمثل أطول متتالية متصاعدة تنتهي عند الفهرس i. لكل عنصر nums[i]، نتحقق من جميع العناصر nums[j] حيث j < i. إذا كان nums[j] < nums[i]، يمكننا إضافة nums[i] للمتتالية التي تنتهي عند j."
        />

        <ProblemCard
          id={5}
          title="Word Break"
          difficulty="medium"
          category="Dynamic Programming"
          description="أعطى سلسلة نصية s وقائمة من الكلمات dictionary، حدد ما إذا كان يمكن تقسيم s إلى مجموعة من الكلمات الموجودة في القاموس. يمكن استخدام كل كلمة عدة مرات."
          examples={[
            { input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" },
            { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: "false" },
          ]}
          hints={[
            "dp[i] يمثل ما إذا كان يمكن تقسيم السلاسلة حتى الفهرس i",
            "تحقق من كل كلمة في القاموس إذا كانت تطابق الجزء الأخير",
            "dp[i] = true إذا وجدنا j حيث dp[j] = true و s[j:i] في القاموس",
          ]}
          solution={`function wordBreak(s, wordDict) {
  let n = s.length;
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  let wordSet = new Set(wordDict);
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}`}
          solutionApproach="dp[i] يمثل ما إذا كان يمكن تقسيم السلسلة s[0:i] إلى كلمات في القاموس. نبدأ من البداية ونتحقق من كل نقطة التقسيم الممكنة. إذا كان dp[j] = true وكان الجزء s[j:i] موجوداً في القاموس، فإن dp[i] = true."
        />

        <ProblemCard
          id={6}
          title="Edit Distance"
          difficulty="hard"
          category="Dynamic Programming"
          description="أعطى كلمتان word1 و word2، اكتب دالة تحدد الحد الأدنى لعدد العمليات المطلوبة لتحويل word1 إلى word2. العمليات المسموح بها: إدراج حرف، حذف حرف، أو استبدال حرف."
          examples={[
            { input: 'word1 = "horse", word2 = "ros"', output: "3" },
            { input: 'word1 = "intention", word2 = "execution"', output: "5" },
          ]}
          hints={[
            "dp[i][j] يمثل الحد الأدنى لعمليات التحويل لـ word1[0:i] إلى word2[0:j]",
            "إذا كانت الأحرف متطابقة، dp[i][j] = dp[i-1][j-1]",
            "إلا، dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])",
          ]}
          solution={`function minDistance(word1, word2) {
  let m = word1.length;
  let n = word2.length;
  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],
          dp[i][j - 1],
          dp[i - 1][j - 1]
        );
      }
    }
  }
  return dp[m][n];
}`}
          solutionApproach="نستخدم جدول dp ثنائي الأبعاد. dp[i][j] يمثل الحد الأدنى لعمليات التحويل من word1[0:i] إلى word2[0:j]. إذا كانت الأحرف متطابقة، لا نحتاج عملية. وإلا، نأخذ الأقل من: الحذف، الإدراج، أو الاستبدال."
        />

        <ProblemCard
          id={7}
          title="Burst Balloons"
          difficulty="hard"
          category="Dynamic Programming"
          description="أنت تلعب لعبة فقاعات. لديك n فقاعة مرقمة من 1 إلى n. عند فقاعة الفقاعة i، ستفقد nums[i-1] * nums[i] * nums[i+1] نقطة. إذا انفجرت الفقاعة على الحافة، تُعامل nums[-1] و nums[n] كـ 1. احسب الحد الأقصى للنقاط."
          examples={[
            { input: "nums = [3,1,5,8]", output: "167" },
            { input: "nums = [1,5]", output: "10" },
          ]}
          hints={[
            "فكر في الفقاعة الأخيرة التي تنفجر بدلاً من الأولى",
            "dp[i][j] يمثل الحد الأقصى للنقاط من فقاعة الفقاعات من i إلى j",
            "dp[i][j] = max(dp[i][k-1] + dp[k+1][j] + nums[i-1]*nums[k]*nums[j+1])",
          ]}
          solution={`function maxCoins(nums) {
  let n = nums.length;
  let newNums = [1, ...nums, 1];
  let dp = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0));
  for (let len = 1; len <= n; len++) {
    for (let i = 1; i <= n - len + 1; i++) {
      let j = i + len - 1;
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k - 1] + dp[k + 1][j] + newNums[i - 1] * newNums[k] * newNums[j + 1]
        );
      }
    }
  }
  return dp[1][n];
}`}
          solutionApproach="نستخدم مصفوفة موسعة بـ 1 في الطرفين. dp[i][j] يمثل الحد الأقصى للنقاط من فقاعة الفقاعات من i إلى j. نختار فقاعة k كآخر فقاعة تنفجر في النطاق [i,j]، ونحسب النقاط بناءً على ذلك."
        />

        <ProblemCard
          id={8}
          title="Regular Expression Matching"
          difficulty="hard"
          category="Dynamic Programming"
          description="تنفيذ تطابق regex يدعم '.' و '*'. '.' يطابق أي حرف واحد، و '*' يطابق صفر أو أكثر من الحرف السابق له. التطابق يجب أن يغطي السلسلة كاملة."
          examples={[
            { input: 's = "aa", p = "a"', output: "false" },
            { input: 's = "aa", p = "a*"', output: "true" },
            { input: 's = "ab", p = ".*"', output: "true" },
          ]}
          hints={[
            "dp[i][j] يمثل ما إذا كان s[0:i] يطابق p[0:j]",
            "إذا كان الحرف الحالي في p ليس '*', تحقق من التطابق العادي",
            "إذا كان '*', لديك خياران: تجاهله (dp[i][j-2]) أو استخدامه (dp[i-1][j] إذا تطابق الحرف)",
          ]}
          solution={`function isMatch(s, p) {
  let m = s.length;
  let n = p.length;
  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2];
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2];
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return dp[m][n];
}`}
          solutionApproach="نستخدم جدول dp ثنائي الأبعاد. dp[i][j] يمثل ما إذا كان s[0:i] يطابق p[0:j]. عند '.', نتحقق من التطابق مع أي حرف. عند '*'، نتحقق إما من تجاهله أو استخدامه مع الحرف السابق."
        />

        <ProblemCard
          id={9}
          title="Longest Valid Parentheses"
          difficulty="hard"
          category="Dynamic Programming"
          description="أعطى سلسلة تحتوي فقط على الأقواس '(' و ')', أوجد أطول أقواس صحيحة متتالية في السلسلة."
          examples={[
            { input: 's = "(()"', output: "2" },
            { input: 's = ")()())"', output: "4" },
          ]}
          hints={[
            "dp[i] يمثل أطول أقواس صحيحة تنتهي عند الفهرس i",
            "إذا كان s[i] = ')', ابحث عن القوس المتناظر",
            "dp[i] = dp[i-1] + 2 + dp[i - dp[i-1] - 2]",
          ]}
          solution={`function longestValidParentheses(s) {
  let n = s.length;
  let dp = new Array(n).fill(0);
  let maxLen = 0;
  for (let i = 1; i < n; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (dp[i - 1] > 0) {
        let matchIndex = i - dp[i - 1] - 1;
        if (matchIndex >= 0 && s[matchIndex] === '(') {
          dp[i] = dp[i - 1] + 2 + (matchIndex >= 1 ? dp[matchIndex - 1] : 0);
        }
      }
      maxLen = Math.max(maxLen, dp[i]);
    }
  }
  return maxLen;
}`}
          solutionApproach="dp[i] يمثل أطول أقواس صحيحة تنتهي عند الفهرس i. إذا وجدنا '()' مباشرة، نضيف 2. إذا وجدنا ')' بعد سلسلة صحيحة، نبحث عن القوس المتناظر ونضيف الطول مع القوائم الفرعية المجاورة."
        />

        <ProblemCard
          id={10}
          title="Best Time to Buy and Sell Stock IV"
          difficulty="hard"
          category="Dynamic Programming"
          description="أعطى مصفوفة prices حيث prices[i] سعر السهم في اليوم i، وأقصى عدد k من المعاملات المسموح بها، احدد الحد الأقصى للربح الذي يمكنك تحقيقه. يجب أن تبيع قبل أن تشتري مرة أخرى."
          examples={[
            { input: "k = 2, prices = [3,2,6,5,0,3]", output: "7" },
            { input: "k = 2, prices = [2,4,1]", output: "2" },
          ]}
          hints={[
            "dp[i][j][0] يمثل الحد الأقصى للربح في اليوم i مع j معاملة وبدون أسهم",
            "dp[i][j][1] يمثل الحد الأقصى للربح في اليوم i مع j معاملة ومع أسهم",
            "dp[i][j][0] = max(dp[i-1][j][0], dp[i-1][j][1] + prices[i])",
            "dp[i][j][1] = max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i])",
          ]}
          solution={`function maxProfit(k, prices) {
  let n = prices.length;
  if (k >= Math.floor(n / 2)) {
    let profit = 0;
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
      }
    }
    return profit;
  }
  let dp = Array.from({ length: n }, () =>
    Array.from({ length: k + 1 }, () => [0, 0])
  );
  for (let j = 1; j <= k; j++) {
    dp[0][j][0] = 0;
    dp[0][j][1] = -prices[0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
    }
  }
  return dp[n - 1][k][0];
}`}
          solutionApproach="نستخدم جدول dp ثلاثي الأبعاد: اليوم، عدد المعاملات، وحالة الملكية. dp[i][j][0] هو الحد الأقصى للربح بدون أسهم، و dp[i][j][1] هو الحد الأقصى للربح مع أسهم. إذا كان k كبيراً بما يكفي، نحولها لمشكلة بدون حد لعدد المعاملات."
        />

        <CheatSheet
          title="ملخص تقنيات Dynamic Programming"
          items={[
            {
              title: "أنماط التفكير",
              content: "1. تحديد الحالة (State): ما الذي تمثله كل خانة في dp\n2. معادلة الانتقال (Transition): كيف ننتقل من حالة لأخرى\n3. الحالة الأولية (Base Case): القيم الأولية لـ dp\n4. اتجاه الملء (Order): ترتيب ملء الجدول",
            },
            {
              title: "أنواع المسائل",
              content: "• مسار في الشبكة (Grid Problems)\n• مشاكل الأقواس (Parentheses Problems)\n• مشاكل السلسلة (String DP)\n• مشاكل الفئات (Knapsack Problems)\n• مشاكل المتتاليات (Subsequence Problems)",
            },
            {
              title: "تحسينات",
              content: "• تحسين المساحة: استخدام مصفوفة بدل جدول\n• Binary Search + DP\n• Divide and Conquer + DP\n• مسار الحل (Path Reconstruction)",
            },
            {
              title: "التحقق من صحة الحل",
              content: "• تأكد من تعريف الحالة بوضوح\n• تحقق من الحالة الأولية\n• تحقق من معادلة الانتقال\n• تأكد من ترتيب الملء الصحيح",
            },
          ]}
        />

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
