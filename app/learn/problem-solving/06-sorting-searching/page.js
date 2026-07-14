"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/problem-solving/06-sorting-searching";
import ProblemCard from "@/components/ProblemCard";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const problems = [
  {
    id: 1,
    title: "Binary Search",
    difficulty: "easy",
    category: "Searching",
    description:
      "مصفوفة مرتبة من الأعداد الصحيحة `nums` وعدد صحيح `target`. اكتب دالة تبحث عن `target` في `nums` وترجع الفهرس الخاص به. إذا لم يتم العثور عليه، ارجع `-1`. يجب عليك كتابة خوارزمية ب SearchesO(log n) في التعقيد الزمني.",
    examples: [
      {
        input: "nums = [-1, 0, 3, 5, 9, 12], target = 9",
        output: "4",
      },
      {
        input: "nums = [-1, 0, 3, 5, 9, 12], target = 2",
        output: "-1",
      },
    ],
    hints: [
      "استخدم البحث الثنائي مع مؤشرين `left` و `right`",
      "احسب `mid = Math.floor((left + right) / 2)` في كل خطوة",
      "إذا كان `nums[mid] < target` حرّك المؤشر الأيسر إلى `mid + 1`",
      "إذا كان `nums[mid] > target` حرّك المؤشر الأيمن إلى `mid - 1`",
    ],
    solution: `function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}`,
    solutionApproach:
      "البحث الثنائي يقسم نطاق البحث في كل خطوة نصفين. نستخدم مؤشرين `left` و `right` لتحديد الحدود الحالية، ونحسب `mid` مرتين في كل تكرار. إذا كان العنصر الأوسط أقل من الهدف، نبحث في النصف الأيمن؛ وإذا كان أكبر، نبحث في النصف الأيسر. هذا يضمن تعقيدًا زمنيًا O(log n).",
  },
  {
    id: 2,
    title: "First Bad Version",
    difficulty: "easy",
    category: "Searching",
    description:
      "لديك `n` إصدارًا من 1 إلى `n`. يوجد إصدار واحد سيء هو أول إصدار سيء يسبّب فشل جميع الإصدارات اللاحقة. لديك دالة `isBadVersion(version)` التي ترجع `true` إذا كان الإصدار سيئًا و `false` إذا لم يكن سيئًا. اكتب دالة تجد أول إصدار سيء. يجب أن تستخدم أقل عدد ممكن من الاستدعاءات لدالة `isBadVersion`.",
    examples: [
      {
        input: "n = 5, output = isBadVersion(4) = true, isBadVersion(3) = false",
        output: "4",
      },
      {
        input: "n = 1, output = isBadVersion(1) = true",
        output: "1",
      },
    ],
    hints: [
      "هذا مشكلة بحث ثنائي في جدول القيم المنطقية",
      "إذا كان الإصدار `mid` سيئًا، فالإصدار السيئ الأول قد يكون `mid` أو قبله",
      "إذا كان الإصدار `mid` جيدًا، فالإصدار السيئ الأول بعد `mid`",
    ],
    solution: `var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
};`,
    solutionApproach:
      "نستخدم البحث الثنائي لتحديد النطاق. نحسب `mid` باستخدام `left + Math.floor((right - left) / 2)` لتجنب الoverflow. إذا كان الإصدار `mid` سيئًا، نحفظ `right = mid` لأن `mid` قد يكون أول إصدار سيء. إذا كان جيدًا، نحرك `left = mid + 1`. الملفقة تضمن إيجاد أول إصدار سيء بأقل عدد من الاستدعاءات.",
  },
  {
    id: 3,
    title: "Valid Perfect Square",
    difficulty: "easy",
    category: "Searching",
    description:
      "أعطى عدد صحيح موجب `num`، ارجع `true` إذا كان `num` مربعًا كاملًا. يجب عليك حل المشكلة بدون استخدام مكتبة أو دالة جذر تربيعي.",
    examples: [
      {
        input: "num = 16",
        output: "true",
      },
      {
        input: "num = 14",
        output: "false",
      },
    ],
    hints: [
      "استخدم البحث الثنائي على النطاق من 1 إلى `num`",
      "احسب `mid * mid` وقارنه مع `num`",
      "إذا كان `mid * mid === num` فهذا مربع كامل",
      "إذا كان `mid * mid < num` حرّك المؤشر الأيسر، وإلا حرّك المؤشر الأيمن",
    ],
    solution: `function isPerfectSquare(num) {
  if (num < 2) return true;

  let left = 2;
  let right = Math.floor(num / 2);

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const square = mid * mid;

    if (square === num) {
      return true;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}`,
    solutionApproach:
      "نستخدم البحث الثنائي على نطاق من 2 إلى `num / 2` لأن الجذر التربيعي لأي عدد أكبر من 1 سيكون أقل من نصفه. في كل خطوة، نحسب `mid * mid` ونقارنه مع `num`. إذا تساوا، فـ `num` مربع كامل. إذا كان `mid * mid` أقل من `num`، نبحث في النصف الأيمن. التعقيد الزمني O(log n).",
  },
  {
    id: 4,
    title: "Search in Rotated Sorted Array",
    difficulty: "medium",
    category: "Searching",
    description:
      "مصفوفة مرتبة بأعداد صحيحة مميزة `nums` تم تدويرها في مكان ما قبل الدوران (مثلاً `[0,1,2,4,5,6,7]` قد تصبح `[4,5,6,7,0,1,2]`). أعطى `target`، ارجع الفهرس الخاص به في `nums`. إذا لم يتم العثور عليه، ارجع `-1`. يجب أن تعطي حلًا بتعقيد زمني O(log n).",
    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
      },
      {
        input: "nums = [4,5,6,7,0,1,2], target = 3",
        output: "-1",
      },
    ],
    hints: [
      "في أي لحظة، أحد نصفي المصفوفة مرتب دائمًا",
      "حدد النصف المرتب عن طريق مقارنة `nums[left]` مع `nums[mid]`",
      "إذا كان `nums[left] <= nums[mid]`، فالنصف الأيسر مرتب",
      "حدد ما إذا كان الهدف في النصف المرتب أم في النصف الآخر",
    ],
    solution: `function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}`,
    solutionApproach:
      "الفكرة الأساسية هي أن أحد نصفي المصفوفة مرتب دائمًا حتى مع الدوران. نحدد النصف المرتب بمقارنة `nums[left]` مع `nums[mid]`. إذا كان `nums[left] <= nums[mid]`، فالنصف الأيسر مرتب. ثم نتحقق ما إذا كان الهدف يقع داخل النطاق المرتب. إذا لم يكن كذلك، نبحث في النصف الآخر. التعقيد الزمني O(log n).",
  },
  {
    id: 5,
    title: "Find Peak Element",
    difficulty: "medium",
    category: "Searching",
    description:
      "مصفوفة أعداد صحيحة `nums`، عنصر ذروة هو عنصر أكبر من جاريه. اكتب دالة تعيد فهرس عنصر ذروة في `nums`. يمكنك افتراض أن `nums[-1] = nums[n] = -∞`. يجب أن تعطي حلًا بتعقيد زمني O(log n).",
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "2",
      },
      {
        input: "nums = [1,2,1,3,5,6,4]",
        output: "5",
      },
    ],
    hints: [
      "البحث الثنائي يمكن استخدامه لأن عنصر الذروة ي creating فرقًا في الاتجاه",
      "إذا كان `nums[mid] < nums[mid + 1]`، فالذروة في النصف الأيمن",
      "إذا كان `nums[mid] > nums[mid + 1]`، فالذروة في النصف الأيسر أو `mid`",
    ],
    solution: `function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}`,
    solutionApproach:
      "نستخدم البحث الثنائي للاقتراب من عنصر الذروة. المقارنة الحاسمة هي `nums[mid]` مع `nums[mid + 1]`. إذا كان `nums[mid] < nums[mid + 1]`، فهذا يعني أننا في صعود، والذروة في النصف الأيمن. وإلا، فنحن في هبوط أو عند الذروة، فنحرك `right` إلى `mid`. الحل يضمن O(log n) لأننا نقسم النطاق في كل خطوة.",
  },
  {
    id: 6,
    title: "Koko Eating Bananas",
    difficulty: "medium",
    category: "Sorting",
    description:
      "كوكو تريد أكل موز. لديها مصفوفة `piles` حيث `piles[i]` هو عدد الموز في الرصيف الثالث. لديها `h` ساعة لأكل جميع الموز. في كل ساعة، تأكل الموز من رصيف واحد؛ إذا أكلت من رصيف فيه `x` موز، ستأكل `k` موز في الساعة (أقل من أو يساوي `x`). اكتب دالة تجد الحد الأدنى لعدد الموز التي يمكنها أكلها في الساعة `k` ل أن تأكل جميع الموز في الوقت المحدد.",
    examples: [
      {
        input: "piles = [3,6,7,11], h = 8",
        output: "4",
      },
      {
        input: "piles = [30,11,23,4,20], h = 5",
        output: "30",
      },
    ],
    hints: [
      "النطاق الممكن لـ `k` من 1 إلى أكبر عنصر في `piles`",
      "استخدم البحث الثنائي على قيمة `k`",
      "لكل `k` محدد، احسب الوقت المطلوب: `Math.ceil(pile / k)` لكل رصيف",
      "إذا كان الوقت الإجمالي `<= h`، جرّب قيمة `k` أصغر",
    ],
    solution: `function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    let totalHours = 0;

    for (const pile of piles) {
      totalHours += Math.ceil(pile / mid);
    }

    if (totalHours <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}`,
    solutionApproach:
      "النطاق الممكن لسرعة الأكل `k` من 1 إلى أكبر عنصر في المصفوفة. نستخدم البحث الثنائي على هذا النطاق. لكل قيمة `mid`، نحسب إجمالي الساعات المطلوبة بجمع `Math.ceil(pile / mid)` لكل رصيف. إذا كان الإجمالي أقل من أو يساوي `h`، نحاول قيمة أصغر (`right = mid`). وإلا نزيد القيمة (`left = mid + 1`). التعقيد الزمني O(n * log(max(piles))).",
  },
  {
    id: 7,
    title: "Search a 2D Matrix",
    difficulty: "medium",
    category: "Searching",
    description:
      "لديك مصفوفة ثنائية الأبعاد `matrix` من الأعداد الصحيحة حيث صفوفها مرتبة من الأصغر إلى الأكبر، وصف يبدأ بقيمة أكبر من نهاية الصف السابق له. أعطى `target`، ارجع `true` إذا كان `target` موجودًا في `matrix`.",
    examples: [
      {
        input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        output: "true",
      },
      {
        input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        output: "false",
      },
    ],
    hints: [
      "يمكن اعتبار المصفوفة كمصفوفة مسطحة واحدة لأن كل صف يبدأ بقيمة أكبر من نهاية الصف السابق",
      "استخدم البحث الثنائي على المصفوفة المسطحة مع تحويل الفهرس",
      "لتحويل فهرس مسطح إلى فهرس صف وعمود: `row = Math.floor(mid / cols)`, `col = mid % cols`",
    ],
    solution: `function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midValue = matrix[Math.floor(mid / cols)][mid % cols];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}`,
    solutionApproach:
      "بما أن كل صف يبدأ بقيمة أكبر من نهاية الصف السابق، يمكننا تعامل المصفوفة كمصفوفة مسطحة مرتبة. نستخدم البحث الثنائي مع `left = 0` و `right = rows * cols - 1`. لتحويل فهرس مسطح إلى فهرس صف وعمود: `row = Math.floor(mid / cols)` و `col = mid % cols`. التعقيد الزمني O(log(m*n)).",
  },
  {
    id: 8,
    title: "Time Based Key-Value Store",
    difficulty: "medium",
    category: "Sorting",
    description:
      "صمم بنية بيانات تعتمد على الوقت لتخزين القيم. Implement the following: `set(key, value, timestamp)`: store a value tied to a key and timestamp. `get(key, timestamp)`: return the most recent value for `key` with `timestamp` less than or equal to the given time. If no value found, return '\"\"'.",
    examples: [
      {
        input: 'set("foo", "bar", 1), get("foo", 1) => "bar", get("foo", 3) => "bar", set("foo", "bar2", 4), get("foo", 4) => "bar2", get("foo", 5) => "bar2"',
        output: '["bar","bar","bar2","bar2"]',
      },
    ],
    hints: [
      "استخدم خريطة (Map) لتخزين قائمة القيم لكل مفتاح",
      "لكل مفتاح، خزّن الأزواج (قيمة، وقت) في مصفوفة مرتبة بالوقت",
      "للحصول على القيمة، استخدم البحث الثنائي على القائمة المرتبة بالوقت",
      "ابحث عن آخر عنصر يكون `timestamp` الخاص به `<= time`",
    ],
    solution: `var TimeMap = function () {
  this.map = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, []);
  }
  this.map.get(key).push([value, timestamp]);
};

TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) return "";

  const entries = this.map.get(key);
  let left = 0;
  let right = entries.length - 1;
  let result = "";

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (entries[mid][1] <= timestamp) {
      result = entries[mid][0];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};`,
    solutionApproach:
      "نستخدم خريطة (Map) لتخزين مصفوفة من الأزواج (قيمة، وقت) لكل مفتاح. المصفوفة مرتبة بالوقت تلقائيًا لأننا نضيف القيم بالترتيب. للحصول على القيمة، نستخدم البحث الثنائي على المصفوفة للعثور على آخر عنصر يكون وقته أقل من أو يساوي الوقت المحدد. التعقيد الزمني: `set` هو O(1) و `get` هو O(log n) لكل مفتاح.",
  },
  {
    id: 9,
    title: "Median of Two Sorted Arrays",
    difficulty: "hard",
    category: "Searching",
    description:
      "مصفوفتان مرتبتان `nums1` و `nums2` بحجمي `m` و `n` على التوالي. اكتب دالة تجد الوسيط. يجب أن يكون التعقيد الزمني O(log(min(m, n))).",
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
      },
    ],
    hints: [
      "افترض أن `nums1` أقصر من `nums2` (إلا فبدّلهما)",
      "الوسيط يقسم المصفوفة إلى قسمين متساويين تقريبًا",
      "استخدم البحث الثنائي على المصفوفة الأقصر",
      "تأكد أن كل عنصر في النصف الأيسر `<=` من كل عنصر في النصف الأيمن",
    ],
    solution: `function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let left = 0;
  let right = m;

  while (left <= right) {
    const partitionX = Math.floor((left + right) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxX =
      partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minX =
      partitionX === m ? Infinity : nums1[partitionX];
    const maxY =
      partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minY =
      partitionY === n ? Infinity : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      right = partitionX - 1;
    } else {
      left = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted");
}`,
    solutionApproach:
      "نبحث عن التقسيم الصحيح في المصفوفة الأقصر (`nums1`). `partitionX` هو عدد العناصر من `nums1` في النصف الأيسر. `partitionY` يُحسب تلقائيًا ليكون `Math.floor((m + n + 1) / 2) - partitionX`. نتحقق أن `maxX <= minY` و `maxY <= minX`. إذا تحقق، فقد وجدنا التقسيم الصحيح. التعقيد الزمني O(log(min(m, n))).",
  },
  {
    id: 10,
    title: "Magnetic Force Between Balls",
    difficulty: "hard",
    category: "Sorting",
    description:
      "لديك `n` كرة مغناطيسية على خط عدد صحيح `position` حيث `position[i]` هو موقع الكرة الثانية. اختر `m` كرات ووضعها على مواقع مختلفة. القوة المغناطيسية بين كرتين هي القيمة المطلقة للفرق بين موقعيهما. اكتب دالة تجد الحد الأدنى للقوة المغناطيسية القصى بين أي كرتين. يجب أن تزيد `position` لتكون أكبر قوة مغناطيسية ممكنة هي الأقل.",
    examples: [
      {
        input: "position = [1,2,3,4,7], m = 3",
        output: "3",
      },
      {
        input: "position = [5,4,3,2,1,1000000000], m = 2",
        output: "999999999",
      },
    ],
    hints: [
      "رتّب المصفوفة أولاً",
      "استخدم البحث الثنائي على قيمة القوة المغناطيسية",
      "لكل قيمة متوسطة، تحقق ما إذا كان يمكن وضع `m` كرات بقوة مغناطيسية `>= mid`",
      "استخدم خوارزمية شرهة (greedy) لتحديد عدد الكرات الممكن وضعها",
    ],
    solution: `function maxDistance(position, m) {
  position.sort((a, b) => a - b);

  let left = 1;
  let right = Math.floor(
    (position[position.length - 1] - position[0]) / (m - 1)
  );

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (canPlaceBalls(position, m, mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

function canPlaceBalls(position, m, minForce) {
  let count = 1;
  let lastPosition = position[0];

  for (let i = 1; i < position.length; i++) {
    if (position[i] - lastPosition >= minForce) {
      count++;
      lastPosition = position[i];
      if (count >= m) return true;
    }
  }

  return false;
}`,
    solutionApproach:
      "نستخدم البحث الثنائي على قيمة القوة المغناطيسية. أولاً نرتّب المصفوفة. النطاق الممكن هو من 1 إلى `(max - min) / (m - 1)`. لكل قيمة متوسطة `mid`، نتحقق ما إذا كان يمكن وضع `m` كرات بقوة مغناطيسية `>= mid` باستخدام خوارزمية شرهة: نضع الكرة الأولى في الموقع الأول، ثم نبحث عن الموقع التالي يكون بفرق `>= mid`. التعقيد الزمني O(n * log(max_distance)).",
  },
];

const cheatSheet = {
  title: "مرجع Sorting & Searching",
  sections: [
    {
      title: "البحث الثنائي (Binary Search)",
      items: [
        {
          name: "البحث الثنائي الأساسي",
          code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
        },
        {
          name: "حساب Mid بدون Overflow",
          code: "const mid = left + Math.floor((right - left) / 2);",
        },
      ],
    },
    {
      title: "الفرز (Sorting)",
      items: [
        {
          name: "Quick Sort",
          code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const mid = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...mid, ...quickSort(right)];
}`,
        },
        {
          name: "Merge Sort",
          code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}`,
        },
      ],
    },
  ],
};

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

export default function SortingSearchingPage() {
  const { lang } = useLanguage();
  const lesson = getLessonBySlug("problem-solving", "06-sorting-searching");
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

        {problems.map((problem) => (
          <ProblemCard
            key={problem.id}
            id={problem.id}
            title={problem.title}
            difficulty={problem.difficulty}
            category={problem.category}
            description={problem.description}
            examples={problem.examples}
            hints={problem.hints}
            solution={problem.solution}
            solutionApproach={problem.solutionApproach}
          />
        ))}

        <CheatSheet title={cheatSheet.title} sections={cheatSheet.sections} />

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
