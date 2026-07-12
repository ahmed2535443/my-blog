import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ComponentsAndProps() {
  const lessonInfo = getLessonBySlug("react", "02-components-and-props");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        <LessonSection title="ما هي المكونات (Components)؟">
          <p>
            المكونات هي اللبنات الأساسية (Building Blocks) لتطبيقات React.
            كل مكون في React هو في الأساس <strong>دالة (Function)</strong> تُرجع
            JSX يصف جزءاً من واجهة المستخدم.
          </p>
          <p>
            يمكنك التفكير في المكونات كـ "وظائف" تأخذ بعض البيانات كمدخلات
            (تُسمى Props) وتعيد وصفاً لما يجب أن يبدو عليه جزء معين من
            الواجهة على الشاشة.
          </p>
          <p>
            الميزة الرئيسية للمكونات هي أنها <strong>مستقلة</strong> و{" "}
            <strong>قابلة لإعادة الاستخدام</strong>. يمكنك استخدام نفس المكون
            عدة مرات في أماكن مختلفة، أو حتى في تطبيقات مختلفة.
          </p>
        </LessonSection>

        <LessonSection title="لماذا نستخدم المكونات؟">
          <p>
            استخدام المكونات في React يوفر العديد من المزايا المهمة التي تجعل
            بناء وصيانة التطبيقات أكبر وأسهل بكثير:
          </p>
          <ul className="list-disc list-inside space-y-3 my-4">
            <li>
              <strong>إعادة الاستخدام (Reusability):</strong> يمكنك كتابة
              مكون مرة واحدة واستخدامه في عدة أماكن. مثلاً، مكون الزر
              (Button) يمكن استخدامه في كل أزرار التطبيق بتصميم مختلف.
            </li>
            <li>
              <strong>فصل الاهتمامات (Separation of Concerns):</strong> كل مكون
              مسؤول عن جزء واحد من الواجهة. هذا يجعل الكود منظماً و dễ فهم.
            </li>
            <li>
              <strong>سهولة الصيانة (Maintainability):</strong> عندما تريد
              تغيير جزء معين، تذهب مباشرة إلى المكون المسؤول عنه دون البحث
              في كل الكود.
            </li>
            <li>
              <strong>التطوير المشترك:</strong> يمكن لفريق العمل تقسيم المكونات
              والعمل على أجزاء مختلفة في نفس الوقت.
            </li>
            <li>
              <strong>الاختبار easier:</strong> يمكنك اختبار كل مكون بشكل
              مستقل لضمان عمله بشكل صحيح.
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="المشكلة التي يحلها المكونات">
          <p>
            قبل استخدام المكونات، كان الكود يصبح فوضوياً بسرعة في التطبيقات
            الكبيرة. تخيّل مشروع ويب كبير بدون مكونات:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>تكرار نفس الكود (Code Duplication) في عدة أماكن</li>
            <li>
              صعوبة العثور على مكان تغيير معين في كود ضخم
            </li>
            <li>استحالة إعادة استخدام الأجزاء في تطبيقات مختلفة</li>
            <li>
              صعوبة إضافة ميزات جديدة دون كسر الميزات الحالية
            </li>
          </ul>
          <p>
            تحل المكونات هذه المشكلة من خلال تقسيم الكود إلى أجزاء صغيرة
            ومستقلة، كل منها له وظيفة واحدة واضحة.
          </p>
        </LessonSection>

        <LessonSection title="شرح بسيط">
          <p>
            المكونات مثل <strong>المخططات المعمارية (Blueprints) للمنازل</strong>:
            مخطط واحد يمكنه بناء منازل كثيرة. كل مكون مثل مخطط، ويمكنك استخدامه
            لإنشاء نسخ كثيرة منه ببيانات مختلفة.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-4">
            <p className="text-blue-400 font-bold mb-2">💡 مثال واقعي:</p>
            <p>
              تخيّل أن لديك مكون "بطاقة منتج" في متجر إلكتروني. بدلاً من كتابة
              نفس الكود لكل منتج (50 منتج = 50 مرة كود مكرر)، تكتب المكون مرة
              واحدة وتستخدمه 50 مرة مع بيانات مختلفة لكل منتج.
            </p>
          </div>
          <p>
            هذا بالضبط ما تفعله المكونات: تكتب قالباً واحداً وتستخدمه مع
            بيانات مختلفة في عدة أماكن.
          </p>
        </LessonSection>

        <LessonSection title="مثال بسيط">
          <p>
            لنرَ المثال الأساسي لإنشاء مكون React بسيط: مكون ترحيب يعرض رسالة
            مرحباً للمستخدم:
          </p>
          <CodeBlock
            code={`function Greeting() {
  return <h1>مرحباً بكم في CodeMaster!</h1>;
}

// استخدام المكون في مكون آخر
function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}`}
            language="jsx"
          />
          <p>
            في هذا المثال، قمنا بإنشاء مكون <code>Greeting</code> يُرجع عنصر{" "}
            <code>h1</code>. ثم استخدمنا هذا المكون داخل مكون <code>App</code>{" "}
            باستخدام صيغة <code>{"<Greeting />"}</code>.
          </p>
          <p>
            لاحظ أننا لا نستخدم علامات إغلاق مثل <code>{"</Greeting>"}</code>{" "}
            لأن المكون لا يحتوي على محتوى داخلي. هذا ما يُسمى{" "}
            <strong>Self-Closing Tag</strong>.
          </p>
        </LessonSection>

        <LessonSection title="مثال عملي - مكونات تعمل معاً">
          <p>
            في تطبيقات العالم الحقيقي، تعمل المكونات معاً في شجرة (Tree)
            هرمية. لنرَ مثالاً يوضح ذلك: تطبيق بسيط يتكون من رأس ومحتوى
            وتذييل:
          </p>
          <CodeBlock
            code={`// مكون الرأس
function Header() {
  return (
    <header>
      <h1>CodeMaster Academy</h1>
      <nav>
        <a href="/">الرئيسية</a>
        <a href="/courses">الدورات</a>
        <a href="/about">من نحن</a>
      </nav>
    </header>
  );
}

// مكون المحتوى الرئيسي
function MainContent() {
  return (
    <main>
      <h2>مرحباً بك في عالم البرمجة!</h2>
      <p>ابدأ رحلتك في تعلم البرمجة معنا اليوم</p>
    </main>
  );
}

// مكون التذييل
function Footer() {
  return (
    <footer>
      <p>© 2024 CodeMaster Academy. جميع الحقوق محفوظة.</p>
    </footer>
  );
}

// مكون التطبيق الرئيسي الذي يجمع كل شيء
function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;`}
            language="jsx"
          />
          <p>
            هنا نرى كيف تعمل المكونات معاً: مكون <code>App</code> هو الأب
            (Parent) الذي يحتوي على ثلاثة أبناء (Children):{" "}
            <code>Header</code> و <code>MainContent</code> و{" "}
            <code>Footer</code>.
          </p>
          <p>
            هذا يُشكل شجرة مكونات (Component Tree) حيث كل مكون مسؤول عن جزء
            واحد من الواجهة، ويمكن دمجها معاً لإنشاء واجهة كاملة ومتكاملة.
          </p>
        </LessonSection>

        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>
            عندما يقوم React بعرض مكوناتك، يمر بعملية متعددة الخطوات:
          </p>
          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>إنشاء شجرة المكونات:</strong> يبدأ React من المكون
              الرئيسي (Root Component) ويursively يستدعي كل مكون فرعي
            </li>
            <li>
              <strong>تنفيذ كل مكون:</strong> يتم استدعاء كل دالة مكون وتنفيذها
              للحصول على JSX الخاص به
            </li>
            <li>
              <strong>بناء شجرة Virtual DOM:</strong> يجمع React كل نتائج
              المكونات في شجرة Virtual DOM واحدة
            </li>
            <li>
              <strong>عرض النتيجة:</strong> يتم تحويل Virtual DOM إلى عناصر
              حقيقية في الصفحة
            </li>
          </ol>
          <CodeBlock
            code={`// خلف الكواليس، React يفعل شيئاً مثل هذا:
function renderComponent(Component, props) {
  const jsx = Component(props);
  return jsx; // يُرجع JSX الخاص بهذا المكون
}

// ثم يجمع كل شيء معاً:
const appTree = renderComponent(App, {});
// App يستدعي Header، MainContent، Footer
// كل واحد منها يُرجع JSX
// ويتم بناء الشجرة الكاملة`}
            language="jsx"
          />
        </LessonSection>

        <LessonSection title="الخصائص (Props)">
          <p>
            <strong>Props</strong> (اختصار لـ Properties) هي البيانات التي تُمرر
            من المكون الأب (Parent) إلى المكون الابن (Child). يمكنك التفكير
            فيها كـ <strong>معاملات (Arguments)</strong> للدوالة: أنت تمرر
            البيانات للمكون ويعالجها ويعيد نتيجة.
          </p>
          <p>
            Props هي الطريقة الأساسية لنقل البيانات في React. وهي{" "}
            <strong>لوجه واحد فقط (Read-Only)</strong> أي لا يمكن للمكون الابن
            تغيير Props التي تلقاها من أباه.
          </p>
          <CodeBlock
            code={`// مكون يأخذ props
function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>العمر: {age}</p>
      <p>البريد: {email}</p>
    </div>
  );
}

// استخدام المكون مع بيانات مختلفة
function App() {
  return (
    <div>
      <UserCard
        name="أحمد محمد"
        age={25}
        email="ahmed@example.com"
      />
      <UserCard
        name="سارة علي"
        age={30}
        email="sara@example.com"
      />
    </div>
  );
}`}
            language="jsx"
          />
          <p>
            هنا نرى كيف نستخدم نفس المكون <code>UserCard</code> مرتين مع
            بيانات مختلفة. كل استخدام يُنشئ نسخة مستقلة من المكون بالبيانات
            الخاصة بها.
          </p>
        </LessonSection>

        <LessonSection title="أمثلة على Props من أنواع مختلفة">
          <p>
            يمكنك تمرير أي نوع من البيانات كـ Props: نصوص، أرقام، كائنات،
            مصفوفات،甚至 دوال (Functions):
          </p>
          <CodeBlock
            code={`// مكون يأخذ عدة أنواع من Props
function ProductCard({
  name,           // string
  price,          // number
  inStock,        // boolean
  tags,           // array
  onAddToCart,    // function
  productImage    // object
}) {
  return (
    <div className="product-card">
      <img src={productImage.url} alt={productImage.alt} />
      <h3>{name}</h3>
      <p>السعر: {price} ر.س</p>
      <p>التوفر: {inStock ? "متوفر" : "غير متوفر"}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <button onClick={() => onAddToCart(name)}>
        أضف إلى السلة
      </button>
    </div>
  );
}

// استخدام المكون
function App() {
  const handleAddToCart = (productName) => {
    alert(\`تمت إضافة \${productName} إلى السلة!\`);
  };

  return (
    <ProductCard
      name="لابتوب HP"
      price={3500}
      inStock={true}
      tags={["إلكترونيات", "كمبيوتر", "محمول"]}
      onAddToCart={handleAddToCart}
      productImage={{
        url: "/images/laptop.jpg",
        alt: "لابتوب HP"
      }}
    />
  );
}`}
            language="jsx"
          />
          <p>
            هذا المثال يوضح قوة Props: يمكنك تمرير أنواع مختلفة من البيانات
            وجعل المكون مرنًا وقابلاً للتخصيص بشكل كبير.
          </p>
        </LessonSection>

        <LessonSection title="خاصية children">
          <p>
            خاصية <code>props.children</code> هي خاصية خاصة في React تسمح
            لك بتمرير عناصر JSX كمحتوى داخلي للمكون. هذا مفيد لإنشاء مكونات
            Containiner أو Layout:
          </p>
          <CodeBlock
            code={`// مكون Card يحتوي على children
function Card({ title, children }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// استخدام children لتمرير محتوى مختلف
function App() {
  return (
    <div>
      <Card title="بطاقة معلومات">
        <p>هذه بطاقة تحتوي على معلومات مهمة</p>
        <ul>
          <li>النقطة الأولى</li>
          <li>النقطة الثانية</li>
        </ul>
      </Card>

      <Card title="بطاقة صورة">
        <img src="/photo.jpg" alt="صورة جميلة" />
        <p>وصف الصورة هنا</p>
      </Card>

      <Card title="بطاقة نموذج">
        <form>
          <input type="text" placeholder="أدخل اسمك" />
          <button>إرسال</button>
        </form>
      </Card>
    </div>
  );
}`}
            language="jsx"
          />
          <p>
            هنا نرى كيف يمكن لمكون <code>Card</code> واحد أن يتضمن محتوى
            مختلفاً في كل استخدام. خاصية <code>children</code> تأخذ كل ما
            وُضع بين علامتي الافتتاح والإغلاق للمكون وتضعه في المكان الذي
            تحدده باستخدام <code>{"{children}"}</code>.
          </p>
        </LessonSection>

        <LessonSection title="الأخطاء الشائعة">
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 1: محاولة تغيير Props
              </p>
              <CodeBlock
                code={`// خطأ: Props للقراءة فقط
function Wrong({ name }) {
  name = "أحمد"; // ❌ لا تفعل هذا
  return <h1>{name}</h1>;
}

// صحيح: استخدم State إذا كنت تحتاج تغيير البيانات
function Correct({ initialName }) {
  const [name, setName] = useState(initialName);
  return <h1>{name}</h1>;
}`}
                language="jsx"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 2: نسيان تسمية Props بشكل صحيح
              </p>
              <CodeBlock
                code={`// خطأ: اسم Prop غير متطابق
function Greeting({ userName }) {
  return <h1>مرحباً {name}</h1>; // ❌ name غير معرّف
}

// صحيح: تأكد من تطابق الأسماء
function Greeting({ userName }) {
  return <h1>مرحباً {userName}</h1>; // ✅
}`}
                language="jsx"
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-bold mb-2">
                ❌ الخطأ 3: تمرير Props غير مطلوبة
              </p>
              <CodeBlock
                code={`// خطأ: إرسال Props كثيرة غير ضرورية
function Button({ onClick, label, unusedProp1, unusedProp2 }) {
  // unusedProp1 و unusedProp2 لا استخدام لهما
  return <button onClick={onClick}>{label}</button>;
}

// صحيح: أرسل فقط ما يحتاجه المكون
function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}`}
                language="jsx"
              />
            </div>
          </div>
        </LessonSection>

        <LessonSection title="أفضل الممارسات">
          <ul className="list-disc list-inside space-y-3 my-4">
            <li>
              <strong>فك Props باستخدام Destructuring:</strong> استخدم{" "}
              <code>const {"{ a, b }"}</code> بدلاً من{" "}
              <code>props.a, props.b</code> للكود وأوضح
            </li>
            <li>
              <strong>استخدم TypeScript أو PropTypes:</strong> حدد أنواع
              البيانات المتوقعة لكل Prop للكشف عن الأخطاء مبكراً
            </li>
            <li>
              <strong>احتفظ بالـ Props بسيطة:</strong> حاول عدم تمرير كائنات
              كبيرة جداً أو مصفوفات طويلة كـ Props
            </li>
            <li>
              <strong>استخدم أسماء واضحة:</strong> اسم الـ Prop يجب أن يصف
              البيانات التي يحملها مثل <code>userName</code> و{" "}
              <code>isVisible</code>
            </li>
            <li>
              <strong>لا تُنشئ كائنات جديدة في كل عرض:</strong> تجنب كتابة{" "}
              <code>{"<Component data={{}} />"}</code> داخل المكون لأن هذا
              يُنشئ كائناً جديداً في كل مرة
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="ملخص">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 my-4">
            <h3 className="text-green-400 font-bold text-lg mb-4">
              🎯 ما تعلمناه في هذا الدرس:
            </h3>
            <ul className="space-y-2">
              <li>
                ✅ المكونات هي اللبنات الأساسية لتطبيقات React، وهي في
                الأساس دوال تُرجع JSX
              </li>
              <li>
                ✅ المكونات توفر إعادة الاستخدام وفصل الاهتمامات وسهولة
                الصيانة
              </li>
              <li>
                ✅ Props هي البيانات المُمرة من المكون الأب إلى المكون الابن
              </li>
              <li>
                ✅ Props للقراءة فقط (Read-Only) ولا يمكن للمكون الابن
                تغييرها
              </li>
              <li>
                ✅ يمكنك تمرير أي نوع من البيانات كـ Props: نصوص، أرقام،
                كائنات، مصفوفات، ودوال
              </li>
              <li>
                ✅ خاصية children تسمح بتمرير عناصر JSX كمحتوى داخلي
              </li>
              <li>
                ✅ استخدم Destructuring لفك Props بشكل أوضح
              </li>
            </ul>
          </div>
        </LessonSection>

        <Quiz
          question="ما هي Props في React؟"
          options={[
            "متغيرات داخلية للمكون",
            "بيانات تُمرر من المكون الأب إلى المكون الابن",
            "حالة (State) خاصة بالـ Props",
            "مكتبة لإدارة الحالة"
          ]}
          correctAnswer={1}
          explanation="Props (Properties) هي البيانات التي تُمرر من المكون الأب إلى المكون الابن، مثل معاملات الدوال في البرمجة العادية."
        />
        <Quiz
          question="ما هو خاصية props.children؟"
          options={[
            "مصفوفة تحتوي كل الأبناء",
            "عنصر JSX واحد يمثل المحتوى الداخلي للمكون",
            "دالة لإضافة أبناء جدد",
            "كائن يحتوي معلومات الأبناء"
          ]}
          correctAnswer={1}
          explanation="props.children تأخذ كل العناصر الواردة بين علامتي افتتاح وإغلاق المكون وتضعها في المكان الذي تحدده."
        />
        <Quiz
          question="هل يمكن للمكون الابن تغيير Props الذي تلقاه؟"
          options={[
            "نعم، يمكنه تغييرها بشكل دائم",
            "نعم، لكن فقط للعرض",
            "لا، Props للقراءة فقط (Read-Only)",
            "نعم، إذا كان من النوع Correct"
          ]}
          correctAnswer={2}
          explanation="Props في React للقراءة فقط. إذا كنت تحتاج تغيير بيانات، يجب استخدام State بدلاً من Props."
        />
        <Quiz
          question="كيف تستخدم مكون React داخل مكون آخر؟"
          options={[
            "باستخدام import في كل مرة",
            "باستدعاء الدالة مباشرة: Greeting()",
            "باستخدام العلامة JSX: <Greeting />",
            "باستخدام React.render()"
          ]}
          correctAnswer={2}
          explanation="تستخدم المكونات داخل JSX بنفس الطريقة التي تستخدم بها عناصر HTML، مثل <Greeting />."
        />
        <Quiz
          question="ما هو الفرق الأساسي بين Props و State؟"
          options={[
            "Props للقراءة، State للقراءة والكتابة",
            "Props من الأب، State من الابن",
            "Props للنصوص، State للأرقام",
            "لا يوجد فرق بينهما"
          ]}
          correctAnswer={0}
          explanation="Props للقراءة فقط وتُمرر من الأب، بينما State خاصية داخلية للمكون يمكن تغييرها."
        />

        <Challenge
          title="أنشئ شجرة مكونات"
          description="أنشئ تطبيقاً بسيطاً يستخدم مكونات متعددة وProps لإنشاء بطاقة ملف شخصي."
          tasks={[
            "أنشئ مكون UserProfile يأخذ Props: name, role, bio",
            "أنشئ مكون SkillList يأخذ Prop: skills (مصفوفة أسماء)",
            "أنشئ مكون StatsBox يأخذ Props: label, value",
            "أنشئ مكون App يجمع كل المكونات معاً لعرض ملف شخصي كامل",
            "تأكد من استخدام children prop في مكون wrapper واحد على الأقل"
          ]}
        />

        <CheatSheet
          items={[
            {
              title: "إنشاء مكون بسيط",
              description: "الشكل الأساسي لمكون React وظيفي",
              code: `function MyComponent() {
  return <div>مرحباً</div>;
}`
            },
            {
              title: "استخدام Props",
              description: "تمرير بيانات للمكون و استخدامها",
              code: `function UserCard({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>العمر: {age}</p>
    </div>
  );
}

// الاستخدام:
<UserCard name="أحمد" age={25} />`
            },
            {
              title: "Props كأنواع مختلفة",
              description: "تمرير نصوص وأرقام وكائنات ومصفوفات ودوال",
              code: `<Component
  name="نص"          // string
  count={5}          // number
  isVisible={true}   // boolean
  items={[1, 2, 3]}  // array
  onClick={() => {}} // function
  data={{ key: "value" }} // object
/>`
            },
            {
              title: "خاصية children",
              description: "تمرير محتوى داخلي للمكون",
              code: `function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

// الاستخدام:
<Card title="بطاقتي">
  <p>محتوى هنا</p>
</Card>`
            },
            {
              title: "الشكل الكامل لمكون",
              description: "مكون كامل مع تصدير وتنسيق",
              code: `function Button({ onClick, children, variant = "primary" }) {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;`
            }
          ]}
        />

        <LessonNavigation
          prevLesson={lessonInfo.prevLesson}
          prevStage={lessonInfo.prevLessonStage}
          nextLesson={lessonInfo.nextLesson}
          nextStage={lessonInfo.nextLessonStage}
        />
      </div>
    </div>
  );
}
