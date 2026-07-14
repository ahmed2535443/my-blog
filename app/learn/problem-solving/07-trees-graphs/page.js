"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/problem-solving/07-trees-graphs";
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

export default function TreesGraphs() {
  const { lang } = useLanguage();
  const lesson = getLessonBySlug("problem-solving", "07-trees-graphs");
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

        <LessonSection title="مشاكل سهلة (Easy)">
          <ProblemCard
            id={1}
            title="Maximum Depth of Binary Tree"
            difficulty="easy"
            category="Trees"
            description="أكتب دالة تُعيد العمق الأقصى للشجرة الثنائية. العمق الأقصى هو عدد العقد في أطول مسار من الجذر إلى الورقة."
            examples={[
              { input: "root = [3,9,20,null,null,15,7]", output: "3" },
              { input: "root = [1,null,2]", output: "2" },
            ]}
            hints={[
              "استخدم DFS بشكل استدعاء ذاتي.",
              "الحالة الأساسية: إذا كان العقدة null، أعد 0.",
              "العمق = max(عمق اليسار, عمق اليمين) + 1.",
            ]}
            solution={`function maxDepth(root) {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}`}
            solutionApproach="الحل باستخدام DFS استدعاء ذاتي: Base Case: إذا كانت العقدة null → أعد 0. Recursive Case: العمق = max(عمق اليسار, عمق اليمين) + 1."
          />

          <ProblemCard
            id={2}
            title="Same Tree"
            difficulty="easy"
            category="Trees"
            description="أكتب دالة تتحقق مما إذا كان شجرتان متماثلتين. شجرتان متماثلتان إذا كانا لهما نفس البنية ونفس القيم في العقد المقابلة."
            examples={[
              { input: "p = [1,2,3], q = [1,2,3]", output: "true" },
              { input: "p = [1,2], q = [1,null,2]", output: "false" },
            ]}
            hints={[
              "قارن العقد الحالية أولاً.",
              "إذا كانت إحداهما null والأخرى لا، فالنتيجة false.",
              "استدعاء ذاتي على الأبناء اليسار واليمين.",
            ]}
            solution={`function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return p.val === q.val &&
         isSameTree(p.left, q.left) &&
         isSameTree(p.right, q.right);
}`}
            solutionApproach="الحل باستخدام DFS: Base Case: كلاهما null → true، أحدهما null → false. Recursive Case: قارن القيمة الحالية ثم استدعِ بشكل استدعاء ذاتي على الأبناء."
          />

          <ProblemCard
            id={3}
            title="Invert Binary Tree"
            difficulty="easy"
            category="Trees"
            description="أكتب دالة تقلّب الشجرة ثنائية (تعكسها أفقياً). أي أن كل عقدة تبدل أبنائها اليسار واليمين."
            examples={[
              { input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" },
              { input: "root = [2,1,3]", output: "[2,3,1]" },
            ]}
            hints={[
              "استخدم DFS أو BFS لزيارة كل عقدة.",
              "في كل عقدة،بدل مكان الابن الأيسر مع الأيمن.",
              "الحالة الأساسية: إذا كانت العقدة null، لا تفعل شيئاً.",
            ]}
            solution={`function invertTree(root) {
  if (!root) return null;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}`}
            solutionApproach="الحل باستخدام DFS: Base Case: إذا كانت العقدة null → لا تفعل شيئاً. Recursive Case: بدّل الابن الأيسر مع الأيمن ثم استدعِ بشكل استدعاء ذاتي."
          />

          <ProblemCard
            id={4}
            title="Subtree of Another Tree"
            difficulty="easy"
            category="Trees"
            description="أكتب دالة تتحقق مما إذا كان subRoot هو شجرة فرعية من شجرة root الرئيسية. شجرة فرعية تعني أن شجرة فرعية تبدأ من عقدة ما في الشجرة الرئيسية وتحتوي على جميع الأبناء."
            examples={[
              { input: "root = [3,4,5,1,2], subRoot = [4,1,2]", output: "true" },
              { input: "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]", output: "false" },
            ]}
            hints={[
              "استخدم الدالة المساعدة sameTree للتحقق إذا كانت شجرتان متماثلتان.",
              "مر على كل عقدة في root وتحقق إذا كانت الشجرة الفرعية تبدأ منها.",
              "إذا وجدت تطابقاً مع أي عقدة، أعد true.",
            ]}
            solution={`function isSubtree(root, subRoot) {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return p.val === q.val &&
         isSameTree(p.left, q.left) &&
         isSameTree(p.right, q.right);
}`}
            solutionApproach="الحل باستخدام DFS: نتحقق لكل عقدة في root إذا كانت الشجرة الفرعية تبدأ منها باستخدام isSameTree. إذا لم نجد، نتابع البحث في الأبناء."
          />
        </LessonSection>

        <LessonSection title="مشاكل متوسطة (Medium)">
          <ProblemCard
            id={5}
            title="Binary Tree Level Order Traversal"
            difficulty="medium"
            category="Trees"
            description="أكتب دالة تُعيد ترتيب العرض المستوي للشجرة الثنائية (BFS). يجب أن تكون النتيجة متتالية من المجموعات، كل مجموعة تحتوي على عقد نفس المستوى."
            examples={[
              { input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" },
              { input: "root = [1]", output: "[[1]]" },
            ]}
            hints={[
              "استخدم BFS مع Queue.",
              "في كل مستوى، أدخل جميع العقد في نفس المستوى في مصفوفة.",
              "بعد الانتهاء من مستوى، أضف المصفوفة للنتيجة.",
            ]}
            solution={`function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
}`}
            solutionApproach="الحل باستخدام BFS: نستخدم Queue لتخزين العقد. في كل مستوى، نأخذ حجم الـ Queue الحالي ونعالج كل العقد في هذا المستوى."
          />

          <ProblemCard
            id={6}
            title="Validate Binary Search Tree"
            difficulty="medium"
            category="Trees"
            description="أكتب دالة تتحقق مما إذا كانت الشجرة الثنائية هي شجرة بحثية ثنائية (BST) صالحة. في BST صالح، كل العقد في اليسار أصغر من الأب، وكل العقد في اليمين أكبر."
            examples={[
              { input: "root = [2,1,3]", output: "true" },
              { input: "root = [5,1,4,null,null,3,6]", output: "false" },
            ]}
            hints={[
              "لا يكفي أن الابن الأيسر أصغر من الأب والأيمن أكبر.",
              "كل العقد في الفرع الأيسر يجب أن تكون أصغر من جميع العقد في المسار من الجذر للأب.",
              "استخدم حدود عليا وسفلية مع الاستدعاء الذاتي.",
            ]}
            solution={`function isValidBST(root) {
  function validate(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;

    return validate(node.left, min, node.val) &&
           validate(node.right, node.val, max);
  }

  return validate(root, -Infinity, Infinity);
}`}
            solutionApproach="الحل باستخدام DFS مع حدود: نمرر حدود عليا وسفلية لكل عقدة. Base Case: إذا كانت العقدة null → true. Recursive Case: تحقق أن القيمة ضمن الحدود ثم استدعاء ذاتي على الأبناء."
          />

          <ProblemCard
            id={7}
            title="Lowest Common Ancestor of a Binary Tree"
            difficulty="medium"
            category="Trees"
            description="أكتب دالة تُعيد أدنى سلف مشترك (Lowest Common Ancestor - LCA) لعقدتين معينتين في شجرة ثنائية. LCA هو أعمق عقدة لها كلا العقدتين كأبناء (أو أحفاد)."
            examples={[
              { input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1", output: "3" },
              { input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4", output: "5" },
            ]}
            hints={[
              "إذا كانت العقدة الحالية هي p أو q، فهي LCA المحتمل.",
              "ابحث في اليسار واليمين.",
              "إذا وجدت LCA في كليهما، فالعقدة الحالية هي LCA.",
            ]}
            solution={`function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left || right;
}`}
            solutionApproach="الحل باستخدام DFS: Base Case: إذا كانت العقدة null أو هي p أو q → أعد العقدة. Recursive Case: ابحث في اليسار واليمين. إذا وجدت LCA في كليهما → العقدة الحالية هي LCA."
          />

          <ProblemCard
            id={8}
            title="Number of Islands"
            difficulty="medium"
            category="Graphs"
            description="أكتب دالة تُعيد عدد الجزر في شبكة 2D. الجزر تمثل بـ '1' والمياه تمثل بـ '0'. الجزيرة هي مجموعة من الأراضي ('1') المتصلة أفقياً وعمودياً."
            examples={[
              { input: "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]", output: "1" },
              { input: "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]", output: "3" },
            ]}
            hints={[
              "مر على كل خلية في الشبكة.",
              "إذا وجدت '1'، قم بعمل BFS أو DFS لتحديد جميع الأراضي المتصلة.",
            ]}
            solution={`function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') return;

    grid[r][c] = '0';
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}`}
            solutionApproach="الحل باستخدام DFS: نمر على كل خلية. إذا وجدنا '1'، نزيد العداد ونستخدم DFS لتحديد جميع الأراضي المتصلة وتحويلها إلى '0' لتجنب التكرار."
          />

          <ProblemCard
            id={9}
            title="Clone Graph"
            difficulty="medium"
            category="Graphs"
            description="أكتب دالة تُعيد نسخة من رسم بياني موجه. الرسم البياني ممثل بعقدة واحدة، كل عقدة تحتوي على قيمة وقائمة بالجيران. يجب أن تكون النسخة مستقلة عن الأصل."
            examples={[
              { input: "adjList = [[2,4],[1,3],[2,4],[1,3]]", output: "[[2,4],[1,3],[2,4],[1,3]]" },
              { input: "adjList = [[]]", output: "[[]]" },
            ]}
            hints={[
              "استخدم Map لتخزين العقد المنسوخة لتجنب التكرار.",
              "ابدأ بإنشاء نسخة من العقدة الأولى.",
              "لكل جار، إذا لم يكن منسوخاً بعد، أنشأ نسخة منه واستمر.",
            ]}
            solution={`function cloneGraph(node) {
  if (!node) return null;

  const map = new Map();

  function dfs(current) {
    if (map.has(current)) return map.get(current);

    const clone = new Node(current.val);
    map.set(current, clone);

    for (const neighbor of current.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
}`}
            solutionApproach="الحل باستخدام DFS مع Map: نستخدم Map لتخزين العقد المنسوخة. لكل عقدة نزار، نإنشاء نسخة جديدة ونخزنها، ثم نستدعي DFS على جيرانها."
          />
        </LessonSection>

        <LessonSection title="مشاكل صعبة (Hard)">
          <ProblemCard
            id={10}
            title="Binary Tree Maximum Path Sum"
            difficulty="hard"
            category="Trees"
            description="أكتب دالة تُعيد أكبر مجموع مسار في شجرة ثنائية. المسار هو أي متتالية من العقد متصلة حيث لا يوجد عقدة متكررة. يمكن أن يبدأ المسار من أي عقدة وينتهي في أي عقدة."
            examples={[
              { input: "root = [1,2,3]", output: "6" },
              { input: "root = [-10,9,20,null,null,15,7]", output: "42" },
            ]}
            hints={[
              "في كل عقدة، حدد أكبر مسار يمر عبرها.",
              "المسار عبر عقدة = قيمة العقدة + أكبر مسار يسار + أكبر مسار يمين.",
              "استخدم DFS وتحدث المتغير العام لأكبر مسار.",
            ]}
            solution={`function maxPathSum(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    const leftMax = Math.max(dfs(node.left), 0);
    const rightMax = Math.max(dfs(node.right), 0);

    const currentPathSum = node.val + leftMax + rightMax;
    maxSum = Math.max(maxSum, currentPathSum);

    return node.val + Math.max(leftMax, rightMax);
  }

  dfs(root);
  return maxSum;
}`}
            solutionApproach="الحل باستخدام DFS: لكل عقدة، نحسب أكبر مسار يمر بها (القيمة + أقصى يسار + أقصى يمين). نُحدّث المتغير العام بأكبر مسار. نُعيد أكبر مسار يمكن تمديده لأعلى."
          />

          <ProblemCard
            id={11}
            title="Serialize and Deserialize Binary Tree"
            difficulty="hard"
            category="Trees"
            description="أكتب دالتين: واحدة لتحويل الشجرة الثنائية إلى نص (serialize) وأخرى لتحويل النص إلى شجرة (deserialize). يجب أن تكون العملية قابلة للعكس."
            examples={[
              { input: "root = [1,2,3,null,null,4,5]", output: "serialize → deserialize تُعيد الشجرة الأصلية" },
              { input: "root = []", output: "serialize → deserialize تُعيد []" },
            ]}
            hints={[
              "استخدم Pre-order traversal ل serialize.",
              "استخدم 'null' لتمثيل العقد الفارغة.",
              "لـ deserialize، استخدم مؤشر لتحويل النص إلى شجرة بشكل تكراري.",
            ]}
            solution={`function serialize(root) {
  const result = [];

  function dfs(node) {
    if (!node) {
      result.push('null');
      return;
    }
    result.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return result.join(',');
}

function deserialize(data) {
  const values = data.split(',');
  let index = 0;

  function dfs() {
    if (values[index] === 'null') {
      index++;
      return null;
    }

    const node = new Node(parseInt(values[index]));
    index++;
    node.left = dfs();
    node.right = dfs();

    return node;
  }

  return dfs();
}`}
            solutionApproach="الحل: Serialize باستخدام Pre-order traversal مع 'null' للعقد الفارغة. Deserialize باستخدام مؤشر و rebuild بشكل تكراري بنفس الترتيب."
          />

          <ProblemCard
            id={12}
            title="Alien Dictionary"
            difficulty="hard"
            category="Graphs"
            description="معطى قائمة مرتبة من الكلمات بلغة غريبة، حدد ترتيب الأحرف في اللغة الغريبة. الكلمات مرتبة أبجدياً وفقاً لقواعد اللغة الغريبة."
            examples={[
              { input: "words = [\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"]", output: "wertf" },
              { input: "words = [\"z\",\"x\"]", output: "zx" },
            ]}
            hints={[
              "قارن الكلمات المتتالية للعثور على ترتيب الأحرف.",
              "ابنِ رسم بياني موجه من الفروقات.",
              "استخدم Topological Sort (DFS أو BFS) لإيجاد الترتيب.",
            ]}
            solution={`function alienOrder(words) {
  const graph = new Map();

  for (const word of words) {
    for (const char of word) {
      if (!graph.has(char)) graph.set(char, new Set());
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    const minLen = Math.min(word1.length, word2.length);

    if (word1.length > word2.length && word1.startsWith(word2)) {
      return "";
    }

    for (let j = 0; j < minLen; j++) {
      if (word1[j] !== word2[j]) {
        graph.get(word1[j]).add(word2[j]);
        break;
      }
    }
  }

  const visited = new Set();
  const visiting = new Set();
  const result = [];

  function dfs(char) {
    if (visited.has(char)) return true;
    if (visiting.has(char)) return false;

    visiting.add(char);
    for (const neighbor of graph.get(char)) {
      if (!dfs(neighbor)) return false;
    }
    visiting.delete(char);
    visited.add(char);
    result.unshift(char);
    return true;
  }

  for (const char of graph.keys()) {
    if (!dfs(char)) return "";
  }

  return result.join('');
}`}
            solutionApproach="الحل باستخدام Topological Sort: أولاً نبني رسم بياني من الفروقات بين الكلمات المتتالية. ثم نستخدم DFS مع cycle detection لإيجاد الترتيب."
          />
        </LessonSection>

        <CheatSheet title="ملخص Trees & Graphs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>الأشجار (Trees):</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>DFS traversal</p>
                  <p>Pre-order: الجذر ← اليسار ← اليمين</p>
                  <p>In-order: اليسار ← الجذر ← اليمين</p>
                  <p>Post-order: اليسار ← اليمين ← الجذر</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>BFS traversal</p>
                  <p>عرض مستوي باستخدام Queue</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>BST</p>
                  <p>يسار &lt; جذر &lt; يمين</p>
                  <p>In-order يُعطي ترتيب تصاعدي</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold mb-3" style={{ color: "var(--primary)" }}>الرسوم البيانية (Graphs):</p>
              <div className="text-sm space-y-2">
                <div className="p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--primary)" }}>DFS</p>
                  <p>استخدام Stack أو استدعاء ذاتي</p>
                  <p>ممتاز للبحث العميق</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>BFS</p>
                  <p>استخدام Queue</p>
                  <p>أقصر مسار في رسم بياني غير مرجّح</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(251, 191, 36, 0.05)", border: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ color: "var(--secondary)" }}>Topological Sort</p>
                  <p>لترتيب المهام مع التبعيات</p>
                  <p>يعمل فقط مع رسم بياني أطياف (DAG)</p>
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
