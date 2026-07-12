"use client";

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function TypeScriptFinalProject() {
  const lesson = getLessonBySlug("typescript", "06-typescript-final-project");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        <LessonSection title="نظرة عامة على المشروع">
          <p>
            في هذا المشروع النهائي، ستقوم ببناء <strong>تطبيق إدارة مهام (Task Manager)</strong> كامل باستخدام TypeScript.
            المشروع يغطي كل المفاهيم التي تعلمتها: الأنواع، Generics، Discriminated Unions، Type Guards، وأكثر.
          </p>

          <div className="p-5 rounded-xl my-4 border" style={{ background: "rgba(49, 120, 198, 0.08)", borderColor: "#3178c6" }}>
            <h3 className="font-bold text-lg mb-3" style={{ color: "#3178c6" }}>ما ستطبقه في هذا المشروع:</h3>
            <ul className="space-y-2 text-sm">
              <li>✅ نظام أنواع متقدم (Interfaces, Types, Generics)</li>
              <li>✅ Discriminated Union لإدارة حالات المهام</li>
              <li>✅ Repository Pattern مع Generics</li>
              <li>✅ Custom Type Guards</li>
              <li>✅ Utility Types (Pick, Omit, Partial)</li>
              <li>✅ Mapped Types و Conditional Types</li>
              <li>✅ Branded Types (أنواع موسومة)</li>
              <li>✅ Async/Await مع Promise</li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="الخطوة 1: تعريف أنواع المشروع الأساسية">
          <p>
            أولاً، نعرف الأنواع الأساسية التي سنستخدمها في كل التطبيق.
            نستخدم <strong>Branded Types</strong> لتمييز المعرفات (IDs) - هذا يمنع الخلط بين معرف مهمة ومعرف مستخدم.
          </p>

          <CodeBlock
            language="typescript"
            code={`// === Branded Types: لتمييز المعرفات ===
type TaskId = string & { readonly __brand: "TaskId" };
type UserId = string & { readonly __brand: "UserId" };

// دوال مساعدة لإنشاء المعرفات
function createTaskId(): TaskId {
  return crypto.randomUUID() as TaskId;
}

function createUserId(): UserId {
  return crypto.randomUUID() as UserId;
}

// === أنواع المهام الأساسية ===
type TaskStatus = "todo" | "in_progress" | "review" | "done" | "cancelled";

type TaskPriority = "low" | "medium" | "high" | "critical";

interface Task {
  readonly id: TaskId;          // معرف فريد (لا يتغير)
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignedTo: UserId;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  dueDate?: Date;              // اختياري
  completedAt?: Date;          // اختياري
}

// === أنواع المستخدمين ===
interface User {
  readonly id: UserId;
  name: string;
  email: string;
  role: "admin" | "manager" | "member";
  avatar?: string;
}

// === أنواع ملخصة باستخدام Pick و Omit ===
type TaskPreview = Pick<Task, "id" | "title" | "status" | "priority" | "assignedTo">;
type CreateTaskInput = Omit<Task, "id" | "createdAt" | "updatedAt" | "completedAt">;
type UpdateTaskInput = Partial<Omit<Task, "id" | "createdAt">>;`}
          />
        </LessonSection>

        <LessonSection title="الخطوة 2: حالات المهام (Discriminated Union)">
          <p>
            كل مهمة تمر بحالات مختلفة. نستخدم <strong>Discriminated Union</strong> لتمثيل كل حالة مع بياناتها الخاصة.
          </p>

          <CodeBlock
            language="typescript"
            code={`// === Discriminated Union لحالات المهام ===
type TaskEvent =
  | { type: "created"; task: Task; createdBy: UserId }
  | { type: "assigned"; taskId: TaskId; assignedBy: UserId; assignedTo: UserId }
  | { type: "progress_updated"; taskId: TaskId; oldStatus: TaskStatus; newStatus: TaskStatus }
  | { type: "priority_changed"; taskId: TaskId; oldPriority: TaskPriority; newPriority: TaskPriority }
  | { type: "comment_added"; taskId: TaskId; comment: string; author: UserId }
  | { type: "completed"; taskId: TaskId; completedBy: UserId }
  | { type: "cancelled"; taskId: TaskId; reason: string };

// === Custom Type Guards للتحقق من الحالات ===
function isTaskCompleted(event: TaskEvent): event is TaskEvent & { type: "completed" } {
  return event.type === "completed";
}

function isTaskOverdue(task: Task): boolean {
  if (!task.dueDate) return false;
  return task.dueDate < new Date() && task.status !== "done" && task.status !== "cancelled";
}

// === دالة معالجة الأحداث العامة ===
function processTaskEvent(event: TaskEvent): string {
  switch (event.type) {
    case "created":
      return \`📝 تم إنشاء المهمة "\${event.task.title}" بواسطة \${event.createdBy}\`;
    
    case "assigned":
      return \`👤 تم تعيين المهمة \${event.taskId} لـ \${event.assignedTo}\`;
    
    case "progress_updated":
      return \`🔄 تغيرت حالة المهمة من "\${event.oldStatus}" إلى "\${event.newStatus}"\`;
    
    case "priority_changed":
      return \`⚡ تغيرت أولوية المهمة من "\${event.oldPriority}" إلى "\${event.newPriority}"\`;
    
    case "comment_added":
      return \`💬 تمت إضافة تعليق على المهمة \${event.taskId}: "\${event.comment}"\`;
    
    case "completed":
      return \`✅ تم إكمال المهمة \${event.taskId} بواسطة \${event.completedBy}\`;
    
    case "cancelled":
      return \`❌ تم إلغاء المهمة \${event.taskId}: \${event.reason}\`;
    
    default:
      const _exhaustive: never = event;
      return \`حدث غير معروف: \${_exhaustive}\`;
  }
}`}
          />
        </LessonSection>

        <LessonSection title="الخطوة 3: Repository Pattern مع Generics">
          <p>
            نستخدم <strong>Repository Pattern</strong> للتعامل مع البيانات - فصل منطق الوصول للبيانات عن منطق الأعمال.
          </p>

          <CodeBlock
            language="typescript"
            code={`// === واجهة المستودع العامة ===
interface Repository<T extends { id: string }> {
  getAll(): Promise<T[]>;
  getById(id: T["id"]): Promise<T | null>;
  create(item: Omit<T, "id" | "createdAt" | "updatedAt">): Promise<T>;
  update(id: T["id"], updates: Partial<Omit<T, "id">>): Promise<T | null>;
  delete(id: T["id"]): Promise<boolean>;
  find(predicate: (item: T) => boolean): Promise<T[]>;
}

// === تطبيق المستودع في الذاكرة ===
class InMemoryRepository<T extends { id: string }> implements Repository<T> {
  private items: Map<T["id"], T> = new Map();

  async getAll(): Promise<T[]> {
    return Array.from(this.items.values());
  }

  async getById(id: T["id"]): Promise<T | null> {
    return this.items.get(id) ?? null;
  }

  async create(input: Omit<T, "id" | "createdAt" | "updatedAt">): Promise<T> {
    const now = new Date();
    const item = {
      ...input,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    } as unknown as T;
    
    this.items.set(item.id, item);
    return item;
  }

  async update(id: T["id"], updates: Partial<Omit<T, "id">>): Promise<T | null> {
    const existing = this.items.get(id);
    if (!existing) return null;
    
    const updated = {
      ...existing,
      ...updates,
      updatedAt: new Date(),
    };
    
    this.items.set(id, updated);
    return updated;
  }

  async delete(id: T["id"]): Promise<boolean> {
    return this.items.delete(id);
  }

  async find(predicate: (item: T) => boolean): Promise<T[]> {
    return Array.from(this.items.values()).filter(predicate);
  }
}`}
          />
        </LessonSection>

        <LessonSection title="الخطوة 4: خدمة المهام (Task Service)">
          <p>
            نضيف طبقة خدمات (Service Layer) لمنطق الأعمال - إنشاء المهام، البحث، التصفية، وإدارة الأحداث.
          </p>

          <CodeBlock
            language="typescript"
            code={`// === Mapped Type لإنشاء تقارير ===
type TaskReport = {
  [K in TaskStatus]: number;  // عدد المهام لكل حالة
};

// === Conditional Type لتحديد نوع التقارير ===
type ReportType<T> = T extends "summary"
  ? TaskReport
  : T extends "detailed"
  ? { tasks: Task[]; report: TaskReport }
  : never;

// === خدمة المهام ===
class TaskService {
  private taskRepo: InMemoryRepository<Task>;
  private userRepo: InMemoryRepository<User>;
  private events: TaskEvent[] = [];

  constructor() {
    this.taskRepo = new InMemoryRepository<Task>();
    this.userRepo = new InMemoryRepository<User>();
  }

  // إنشاء مستخدم
  async createUser(input: { name: string; email: string; role: User["role"] }): Promise<User> {
    const user = await this.userRepo.create(input as any);
    return user;
  }

  // إنشاء مهمة
  async createTask(
    input: CreateTaskInput,
    createdBy: UserId
  ): Promise<Task> {
    const user = await this.userRepo.getById(input.assignedTo);
    if (!user) {
      throw new Error(\`المستخدم \${input.assignedTo} غير موجود\`);
    }

    const task = await this.taskRepo.create(input as any);
    
    this.events.push({
      type: "created",
      task,
      createdBy,
    });

    return task;
  }

  // تحديث حالة المهمة
  async updateTaskStatus(
    taskId: TaskId,
    newStatus: TaskStatus
  ): Promise<Task | null> {
    const task = await this.taskRepo.getById(taskId);
    if (!task) return null;

    const oldStatus = task.status;
    const updated = await this.taskRepo.update(taskId, {
      status: newStatus,
      ...(newStatus === "done" ? { completedAt: new Date() } : {}),
    } as any);

    this.events.push({
      type: "progress_updated",
      taskId,
      oldStatus,
      newStatus,
    });

    return updated;
  }

  // البحث عن المهام المتأخرة
  async getOverdueTasks(): Promise<Task[]> {
    const tasks = await this.taskRepo.find(
      (task) => isTaskOverdue(task)
    );
    return tasks;
  }

  // إحصائيات
  async getTaskReport(): Promise<TaskReport> {
    const tasks = await this.taskRepo.getAll();
    
    const report: TaskReport = {
      todo: 0,
      in_progress: 0,
      review: 0,
      done: 0,
      cancelled: 0,
    };

    for (const task of tasks) {
      report[task.status]++;
    }

    return report;
  }

  // الحصول على سجل الأحداث
  getEventLog(): readonly TaskEvent[] {
    return this.events as readonly TaskEvent[];
  }
}`}
          />
        </LessonSection>

        <LessonSection title="الخطوة 5: استخدام التطبيق">
          <p>
            هنا نرى كيف يعمل كل شيء معاً - إنشاء مستخدمين، مهام، وتحديث الحالات.
          </p>

          <CodeBlock
            language="typescript"
            code={`// === مثال استخدام كامل ===
async function main() {
  const app = new TaskService();

  // 1. إنشاء مستخدمين
  const admin = await app.createUser({
    name: "أحمد",
    email: "ahmed@example.com",
    role: "admin",
  });

  const member = await app.createUser({
    name: "سارة",
    email: "sara@example.com",
    role: "member",
  });

  // 2. إنشاء مهام
  const task1 = await app.createTask(
    {
      title: "بناء صفحة تسجيل الدخول",
      description: "استخدام Next.js + Supabase للمصادقة",
      status: "todo",
      priority: "high",
      assignedTo: member.id,
      tags: ["frontend", "auth"],
    },
    admin.id
  );

  const task2 = await app.createTask(
    {
      title: "كتابة اختبارات API",
      description: "تغطية 80% من Routes بـ Jest",
      status: "todo",
      priority: "medium",
      assignedTo: admin.id,
      tags: ["backend", "testing"],
    },
    admin.id
  );

  // 3. تحديث حالة مهمة
  await app.updateTaskStatus(task1.id, "in_progress");
  await app.updateTaskStatus(task1.id, "done");

  // 4. عرض التقارير
  const report = await app.getTaskReport();
  console.log("تقرير المهام:", report);

  // 5. عرض المهام المتأخرة
  const overdue = await app.getOverdueTasks();
  if (overdue.length > 0) {
    console.log(\`مهام متأخرة: \${overdue.length}\`);
  }

  // 6. عرض سجل الأحداث
  const eventLog = app.getEventLog();
  eventLog.forEach((event) => {
    console.log(processTaskEvent(event));
  });
}

// main().catch(console.error);`}
          />
        </LessonSection>

        <LessonSection title="الخطوة 6: أنواع متقدمة إضافية">
          <p>
            بعض الأنواع المتقدمة التي تجعل المشروع أكثر احترافية:
          </p>

          <CodeBlock
            language="typescript"
            code={`// === Mapped Types متقدمة ===

// جعل كل الخصائص التاريخية
type History<T> = {
  readonly [K in keyof T as \`previous\${Capitalize<string & K>}\`]: T[K];
};

// Deep Partial - جعل كل الخصائص اختيارية حتى المتداخلة
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

// NonNullable - إزالة null و undefined
type SafeTask = NonNullable<Task>;
type RequiredDate = NonNullable<Task["dueDate"]>;

// Extract - استخراج الأنواع المطابقة
type CompletedEvents = Extract<TaskEvent, { type: "completed" }>;
type StatusEvents = Extract<TaskEvent, { type: "progress_updated" | "completed" | "cancelled" }>;

// === Utility Types لتنسيق المخرجات ===

// نوع للبحث المتقدم
interface TaskSearchCriteria {
  status?: TaskStatus[];
  priority?: TaskPriority[];
  assignedTo?: UserId;
  tags?: string[];
  dueBefore?: Date;
  dueAfter?: Date;
  query?: string;
}

// نوع لترتيب النتائج
type SortDirection = "asc" | "desc";
type TaskSortField = keyof TaskPreview;

interface TaskSortOptions {
  field: TaskSortField;
  direction: SortDirection;
}

// === Branded Types للتمييز بين أنواع المعرفات ===
type EmailAddress = string & { readonly __brand: "Email" };
type PhoneNumber = string & { readonly __brand: "Phone" };

function createEmail(email: string): EmailAddress | null {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email) ? (email as EmailAddress) : null;
}

function createPhone(phone: string): PhoneNumber | null {
  const phoneRegex = /^\\+?[1-9]\\d{1,14}$/;
  return phoneRegex.test(phone) ? (phone as PhoneNumber) : null;
}`}
          />
        </LessonSection>

        <LessonSection title="الأخطاء الشائعة في المشاريع الحقيقية">
          <ul>
            <li><strong>❌ إهمال Branded Types:</strong> الخلط بين معرفات مختلفة (مهمة vs مستخدم) يؤدي لأخطاء خطيرة. استخدم Branded Types للتمييز.</li>
            <li><strong>❌ عدم استخدام Discriminated Unions للحالات:</strong> استخدام string عادي لحالات المهام يسمح بقيم غير صالحة. استخدم Union Types.</li>
            <li><strong>❌ تجاهل Generic Constraints:</strong> <code>T extends &#123; id: string &#125;</code> يضمن أن المستودع يعمل فقط مع الكائنات التي لها id.</li>
            <li><strong>❌ عدم استخدام Readonly:</strong> الخصائص مثل id و createdAt يجب ألا تتغير بعد الإنشاء. استخدم readonly.</li>
            <li><strong>❌ تجاهل Omit عند الإنشاء:</strong> عند إنشاء كائن جديد، استخدم Omit لتجنب تمرير الخصائص التي تُنشأ تلقائياً.</li>
          </ul>
        </LessonSection>

        <LessonSection title="أفضل الممارسات للمشاريع الحقيقية">
          <ul>
            <li><strong>✅ استخدم Branded Types للمعرفات:</strong> يمنع الخلط بين أنواع المعرفات المختلفة.</li>
            <li><strong>✅ استخدم Discriminated Unions للحالات:</strong> يجعل الكود أكثر أماناً ووضوحاً مع Exhaustive Checking.</li>
            <li><strong>✅ استخدم Repository Pattern:</strong> يفصل منطق الوصول للبيانات عن منطق الأعمال.</li>
            <li><strong>✅ استخدم Generics مع Constraints:</strong> يضمن أن الأنواع تتبع قواعد محددة.</li>
            <li><strong>✅ استخدم Utility Types:</strong> Pick, Omit, Partial, Readonly تقلل التكرار وتزيد الأمان.</li>
          </ul>
        </LessonSection>

        <LessonSection title="ملخص المشروع النهائي">
          <div className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--primary)" }}>ما تعلمته في دورة TypeScript:</h3>
                <ul className="space-y-2">
                  <li><strong>الدرس 1:</strong> مقدمة في TypeScript - ما هو، لماذا نستخدمه، وكيف يعمل الترجمة.</li>
                  <li><strong>الدرس 2:</strong> الأنواع الأساسية - Primitive Types, Union Types, Literal Types, Tuples, Enums.</li>
                  <li><strong>الدرس 3:</strong> Interfaces و Types - الفرق بينهما، Optional Properties, Readonly, Index Signatures, Utility Types.</li>
                  <li><strong>الدرس 4:</strong> الدوال والـ Generics - Function Overloading, Generics with Constraints, Type Guards.</li>
                  <li><strong>الدرس 5:</strong> TypeScript مع React - Props Typing, Hooks Typing, Event Handlers.</li>
                  <li><strong>الدرس 6:</strong> المشروع النهائي - Branded Types, Discriminated Unions, Repository Pattern, Mapped Types.</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg" style={{ background: "rgba(49, 120, 198, 0.08)", border: "1px solid #3178c6" }}>
                <p className="font-bold mb-2" style={{ color: "#3178c6" }}>🎯 الخطوات التالية:</p>
                <p>
                  TypeScript يغير طريقة كتابتك للكود بشكل جذري. في المرحلة القادمة سنتعلم <strong>Clean Code</strong> -
                  كتابة كود نظيف وقابل للصيانة. بعدها ننتقل لـ <strong>React</strong> و <strong>Next.js</strong> حيث سنستخدم TypeScript بشكل مكثف.
                </p>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid var(--accent)" }}>
                <span className="text-3xl">🔷</span>
                <div>
                  <p className="font-bold" style={{ color: "var(--accent)" }}>مبروك! 🎉</p>
                  <p style={{ color: "var(--foreground)" }}>
                    أكملت دورة TypeScript. الآن يمكنك كتابة كود أكثر أماناً ووضوحاً مع TypeScript.
                    هذا سيساعدك كثيراً في React و Next.js حيث الأنواع تجعل التطوير أسرع وأقل خطأ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </LessonSection>

        <Quiz
          question="ما الفائدة من استخدام Branded Types (مثل TaskId و UserId)؟"
          options={[
            "تجعل الكود أبطأ",
            "تمنع الخلط بين أنواع المعرفات المختلفة - لا يمكن تمرير UserId حيث TaskId مطلوب",
            "تضيف ألواناً للمعرفات",
            "تستخدم فقط مع قواعد البيانات"
          ]}
          correctAnswer={1}
          explanation="Branded Types ({ readonly __brand: ... }) تجعل TypeScript يميز بين أنواع المعرفات. لو دالة تنتظر TaskId ومررت UserId، ستحصل على خطأ في وقت الترجمة."
        />

        <Quiz
          question="في المشروع النهائي، لماذا استخدمنا Omit عند إنشاء المهام (CreateTaskInput)؟"
          options={[
            "لجعل الكود أقصر",
            "لمنع تمرير خصائص مثل id و createdAt التي تُنشأ تلقائياً عند الإنشاء",
            "لأن Omit هو النوع الوحيد المتاح",
            "لإخفاء بعض الخصائص عن TypeScript"
          ]}
          correctAnswer={1}
          explanation={"CreateTaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'completedAt'> يضمن أن المستخدم لا يمكنه تمرير هذه الخصائص عند إنشاء مهمة جديدة - هي تُنشأ تلقائياً."}
        />

        <Challenge
          title="التحدي النهائي: أضف ميزة جديدة للمشروع"
          description={
            <p>
              حسّن مشروع Task Manager بإضافة:
              <br />
              1. <strong>نظام تعليقات (Comments):</strong> أضف <code>Comment</code> type
              مع id, taskId, authorId, content, createdAt
              <br />
              2. <strong>دالة تصفية متقدمة:</strong> استخدم <code>TaskSearchCriteria</code>
              للبحث عن المهام حسب: الحالة، الأولوية، المستخدم، الوسوم، النص
              <br />
              3. <strong>دالة ترتيب:</strong> استخدم <code>TaskSortOptions</code> لترتيب النتائج
              <br />
              4. <strong>إحصائيات متقدمة:</strong> أضف <code>{'getUserProductivity(userId: UserId): Promise<number>'}</code>
              تحسب عدد المهام المنجزة لكل مستخدم
              <br />
              5. <strong>نظام إشعارات:</strong> Discriminated Union للحالات: email, push, in_app
            </p>
          }
        >
          <CodeBlock
            language="typescript"
            code={`// === 1. نظام التعليقات ===
interface Comment {
  readonly id: string;
  taskId: TaskId;
  authorId: UserId;
  content: string;
  createdAt: Date;
}

// === 2. نظام التصفية المتقدم ===
async function searchTasks(
  criteria: TaskSearchCriteria
): Promise<Task[]> {
  const tasks = await taskRepo.getAll();
  
  return tasks.filter((task) => {
    if (criteria.status && !criteria.status.includes(task.status))
      return false;
    if (criteria.priority && !criteria.priority.includes(task.priority))
      return false;
    if (criteria.assignedTo && task.assignedTo !== criteria.assignedTo)
      return false;
    if (criteria.tags && !criteria.tags.some((t) => task.tags.includes(t)))
      return false;
    if (criteria.query) {
      const q = criteria.query.toLowerCase();
      if (!task.title.toLowerCase().includes(q) &&
          !task.description.toLowerCase().includes(q))
        return false;
    }
    if (criteria.dueBefore && task.dueDate && task.dueDate > criteria.dueBefore)
      return false;
    if (criteria.dueAfter && task.dueDate && task.dueDate < criteria.dueAfter)
      return false;
    return true;
  });
}

// === 3. نظام الترتيب ===
function sortTasks(
  tasks: Task[],
  options: TaskSortOptions
): Task[] {
  return [...tasks].sort((a, b) => {
    const aVal = a[options.field];
    const bVal = b[options.field];
    
    if (aVal < bVal) return options.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return options.direction === "asc" ? 1 : -1;
    return 0;
  });
}

// === 4. إحصائيات الإنتاجية ===
async function getUserProductivity(userId: UserId): Promise<number> {
  const tasks = await taskRepo.getAll();
  const completed = tasks.filter(
    (t) => t.assignedTo === userId && t.status === "done"
  );
  return completed.length;
}

// === 5. نظام الإشعارات ===
type Notification =
  | { type: "email"; to: EmailAddress; subject: string; body: string }
  | { type: "push"; deviceToken: string; title: string; message: string }
  | { type: "in_app"; userId: UserId; message: string; link?: string };

function sendNotification(notification: Notification): void {
  switch (notification.type) {
    case "email":
      console.log(\`📧 إرسال بريد إلى \${notification.to}: \${notification.subject}\`);
      break;
    case "push":
      console.log(\`📱 إشعار push: \${notification.title}\`);
      break;
    case "in_app":
      console.log(\`🔔 إشعار داخل التطبيق: \${notification.message}\`);
      break;
  }
}`}
          />
        </Challenge>

        <CheatSheet title="الملخص النهائي - كل ما تعلمته في TypeScript">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>الدرس 1: مقدمة</p>
              <div className="text-xs space-y-1">
                <p>🔷 TypeScript = JS + Types</p>
                <p>🔷 tsc compiler</p>
                <p>🔷 tsconfig.json</p>
                <p>🔷 Gradual Adoption</p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>الدرس 2: الأنواع</p>
              <div className="text-xs space-y-1">
                <p>🔷 string, number, boolean</p>
                <p>🔷 any vs unknown</p>
                <p>🔷 Union (|) Literal</p>
                <p>🔷 Tuple, Enum</p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>الدرس 3: Interfaces</p>
              <div className="text-xs space-y-1">
                <p>🔷 interface vs type</p>
                <p>🔷 extends, readonly</p>
                <p>🔷 Pick, Omit, Partial</p>
                <p>🔷 Discriminated Unions</p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>الدرس 4: Generics</p>
              <div className="text-xs space-y-1">
                <p>🔷 <code>{'<T>(value: T): T'}</code></p>
                <p>🔷 <code>T extends Type</code></p>
                <p>🔷 <code>keyof</code>, <code>typeof</code></p>
                <p>🔷 <code>Type Guards</code></p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>الدرس 5: React</p>
              <div className="text-xs space-y-1">
                <p>🔷 Props Typing</p>
                <p>🔷 Hooks Typing</p>
                <p>🔷 Event Handlers</p>
                <p>🔷 Generics في React</p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>الدرس 6: المشروع</p>
              <div className="text-xs space-y-1">
                <p>🔷 Branded Types</p>
                <p>🔷 Repository Pattern</p>
                <p>🔷 Mapped Types</p>
                <p>🔷 Task Manager App</p>
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
  );
}