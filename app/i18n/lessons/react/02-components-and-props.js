const translations = {
  ar: {
    sections: [
      { title: "ما هي المكونات؟", content: [
        { type: "p", text: "المكونات هي اللبنات الأساسية لأي تطبيق React. تسمح لك بتقسيم واجهات المستخدم المعقدة إلى أجزاء صغيرة قابلة لإعادة الاستخدام يمكن إدارتها بشكل مستقل." },
        { type: "callout", title: "تشبيه بسيط", text: "المكونات مثل <strong>الجداول والأثاث</strong> في غرفة. كل قطعة لها وظيفة محددة: الطاولة للأكل، الكرسي للجلوس. يمكنك نقل أي قطعة إلى غرفة أخرى واستخدامها هناك. المكونات في React كذلك — قطع قابلة لإعادة الاستخدام يمكنك نقلها بين الصفحات." },
        { type: "p", text: "أنواع المكونات:" },
        { type: "li", text: "<strong>مكونات الدوال:</strong> النهج الحديث — دوال JavaScript تُرجع JSX (المعياري الآن)" },
        { type: "li", text: "<strong>مكونات الفئات:</strong> النهج القديم — فئات ES6 تُوسع React.Component (نادراً ما يُستخدم الآن)" },
      ]},
      { title: "إنشاء مكونك الأول", content: [
        { type: "p", text: "لإنشاء مكون في React، أنشئ ببساطة دالة تُرجع JSX. يجب أن يبدأ اسم الدالة بحرف كبير." },
        { type: "p", text: "قواعد مهمة:" },
        { type: "li", text: "يجب أن تبدأ أسماء المكونات بحرف كبير (مثل <code>UserProfile</code> وليس <code>userProfile</code>)" },
        { type: "li", text: "يجب أن تُرجع المكونات JSX (أو null)" },
        { type: "li", text: "يمكن تداخل المكونات داخل مكونات أخرى" },
        { type: "li", text: "كل مكون يجب أن يفعل شيئاً واحداً بشكل جيد" },
        { type: "callout", title: "تشبيه بسيط", text: "المكون مثل <strong>دالة حاسبة</strong>. أنت تعطيها مدخلات (الخصائص/props)، وهي تُخرج نتيجة (واجهة المستخدم). المكون لا يُغيّر مدخلاته — فقط يعرضها بشكل جميل." },
      ]},
      { title: "ما هي الخصائص (Props)؟", content: [
        { type: "p", text: "الخصائص (Props) هي البيانات المنسوبة من مكون أصل إلى مكون فرعي. تسمح لك بجعل المكونات ديناميكية وقابلة لإعادة الاستخدام." },
        { type: "callout", title: "تشبيه بسيط", text: "الخصائص مثل <strong>معاملات الدالة</strong>. عندما تستدعي دالة في JavaScript، تمرر لها قيم: <code>greet('Ahmed')</code>. في React، المكون الأصل يمرر بيانات لل ابن عن طريق الخصائص: <code>&lt;Greeting name='Ahmed' /&gt;</code>." },
        { type: "p", text: "خصائص الخصائص:" },
        { type: "li", text: "<strong>للقراءة فقط:</strong> المكونات الفرعية لا يمكنها تعديل الخصائص" },
        { type: "li", text: "<strong>أحادية الاتجاه:</strong> البيانات تتدفق من الأصل إلى الفرعي" },
        { type: "li", text: "<strong>يمكن أن يكون أي نوع:</strong> نصوص، أرقام، كائنات، دوال، حتى مكونات أخرى" },
      ]},
      { title: "استخدام الخصائص في المكونات", content: [
        { type: "p", text: "لاستخدام الخصائص في مكون، اقرأها من معامل الدالة. يمكنك بعد ذلك استخدامها في JSX." },
        { type: "p", text: "أنواع الخصائص:" },
        { type: "li", text: "<strong>نصوص:</strong> <code>name='Ahmed'</code>" },
        { type: "li", text: "<strong>أرقام:</strong> <code>age={'{'}25{'}'}</code>" },
        { type: "li", text: "<strong>قيم منطقية:</strong> <code>isActive={'{'}true{'}'}</code>" },
        { type: "li", text: "<strong>كائنات:</strong> <code>user={'{'}{'{'}name: 'Ahmed', age: 25{'}'}{'}'}</code>" },
        { type: "li", text: "<strong>دوال:</strong> <code>onClick={'{'}handleClick{'}'}</code>" },
      ]},
      { title: "الخصائص الافتراضية", content: [
        { type: "p", text: "يمكنك تعيين قيم افتراضية للخصائص في حال عدم تقديمها. هذا يجعل مكوناتك أكثر متانة." },
        { type: "callout", title: "تشبيه بسيط", text: "الخصائص الافتراضية مثل <strong>الإعدادات الافتراضية في الهاتف</strong>. عندما تشترى هاتفاً جديداً، يأتي بإعدادات افتراضية (صوت، سطح مكتب، خلفية). يمكنك تغييرها لاحقاً، لكن الهاتف يعمل بشكل جيد حتى بدون تغيير." },
        { type: "p", text: "الطريقتان لتعيين القيم الافتراضية:" },
        { type: "li", text: "<strong>المعاملات الافتراضية:</strong> <code>function Greeting({'{'}name = 'عالم'{'}'}) {'{'}...{'}'}</code>" },
        { type: "li", text: "<strong>ال桐 operator:</strong> <code>name {'||'} 'عالم'</code>" },
      ]},
      { title: "خاصية children", content: [
        { type: "p", text: "خاصية <code>children</code> هي خاصية خاصة تحتوي على المحتوى بين علامتي البداية والنهاية للمكون." },
        { type: "callout", title: "تشبيه بسيط", text: "children مثل <strong>محتوى صندوق</strong>. المكون هو الصندوق نفسه، و children هو كل ما داخله. يمكنك وضع أي شيء داخل الصندوق: نص، صور، مكونات أخرى." },
        { type: "p", text: "يمكن أن يكون children:" },
        { type: "li", text: "محتوى نصي" },
        { type: "li", text: "عناصر React أخرى" },
        { type: "li", text: "حتى مكونات أخرى" },
      ]},
      { title: "تركيب المكونات", content: [
        { type: "p", text: "تركيب المكونات هو ممارسة بناء واجهات المستخدم المعقدة عن طريق دمج المكونات البسيطة. هذه هي واحدة من أقوى ميزات React." },
        { type: "callout", title: "تشبيه بسيط", text: "التركيب مثل <strong>بناء منزل من Lego</strong>. كل قطعة Lego بسيطة بمفردها، لكن عندما تجمعها معاً، تُنشئ بناءً معقداً وجميلاً. المكونات في React كذلك." },
        { type: "p", text: "فوائد التركيب:" },
        { type: "li", text: "<strong>إعادة الاستخدام:</strong> استخدم نفس المكون في أماكن مختلفة" },
        { type: "li", text: "<strong>قابلية الصيانة:</strong> سهل التحديث وإصلاح المكونات الفردية" },
        { type: "li", text: "<strong>قابلية الاختبار:</strong> يمكن اختبار المكونات بشكل منفصل" },
      ]},
      { title: "ماذا يحدث خلف الكواليس؟", content: [
        { type: "p", text: "عندما تمرر خصائص لمكون، يحدث ما يلي:" },
        { type: "li", text: "<strong>1. الأصل يستدعي المكون:</strong> يكتب React: <code>&lt;Greeting name='Ahmed' /&gt;</code>" },
        { type: "li", text: "<strong>2. React ينشئ كائن props:</strong> يُنشئ <code>{'{'}name: 'Ahmed'{'}'}</code> وينقله للابن" },
        { type: "li", text: "<strong>3. المكون الابن يستخدم props:</strong> يقرأ <code>props.name</code> ويعرض 'Ahmed'" },
        { type: "li", text: "<strong>4. لا يمكن تعديل props:</strong> إذا حاول المكون الابن تعديل <code>props.name</code>، سيحصل على خطأ" },
      ]},
      { title: "أخطاء شائعة للمبتدئين", content: [
        { type: "p", text: "هناك أخطاء يقع فيها المبتدئون كثيراً:" },
        { type: "li", text: "<strong>خطأ 1: محاولة تعديل Props:</strong> Props للقراءة فقط. إذا أردت تغيير قيمة، استخدم الحالة (State) بدلاً من ذلك" },
        { type: "li", text: "<strong>خطأ 2: نسيان key في القوائم:</strong> عند عرض قائمة من المكونات، يجب تمرير خاصية <code>key</code> فريدة لكل مكون" },
        { type: "li", text: "<strong>خطأ 3: تسمية المكون بحرف صغير:</strong> يجب أن تبدأ أسماء المكونات بحرف كبير لتمييزها عن العناصر العادية" },
        { type: "li", text: "<strong>خطأ 4: تمرير كائنات مباشرة في JSX:</strong> عند تمرير كائن، أضف أقواس مزدوجة: <code>user={'{'}{'{'}name: 'Ahmed'{'}'}{'}'}</code>" },
      ]},
      { title: "أفضل الممارسات", content: [
        { type: "p", text: "اتبع هذه الممارسات:" },
        { type: "li", text: "<strong>استخدم Object Destructuring:</strong> بدلاً من <code>props.name</code>، اكتب <code>{'{'}name, age{'}'}</code>" },
        { type: "li", text: "<strong>لا تدمّر Props:</strong> لا تُنشئ متغيرات جديدة من Props除非必需" },
        { type: "li", text: "<strong>استخدم PropTypes أو TypeScript:</strong> للتحقق من أنواع Props" },
        { type: "li", text: "<strong>اجعل المكونات صغيرة:</strong> كل مكون يفعل شيئاً واحداً بشكل جيد" },
        { type: "li", text: "<strong>اسم المكون يصف وظيفته:</strong> مثل <code>UserProfile</code> وليس <code>Box</code>" },
      ]},
    ],
    quiz: [
      { question: "ما هي الخصائص (props) في React؟", options: ["حالة المكون الداخلية", "البيانات المنسوبة من الأصل إلى الفرعي", "methods المكون", "المتغيرات العامة"], explanation: "الخصائص (properties) هي بيانات تُنقل من مكون أصل إلى مكون فرعي. هي للقراءة فقط وتسمح للبيانات بالتدفق في اتجاه واحد." },
      { question: "كيف تمرر خاصية name لمكون Greeting؟", options: ["<Greeting name='Ahmed' />", "<Greeting name={Ahmed} />", "<Greeting {name='Ahmed'} />", "<Greeting>name='Ahmed'</Greeting>"], explanation: "الصيغة الصحيحة: <Greeting name='Ahmed' /> — الخصائص تُمرر كسمات على العلامة، والقيم النصية تُحاط بعلامات اقتباس." },
      { question: "ماذا يحدث إذا حاول المكون الابن تعديل prop؟", options: ["يعمل بشكل طبيعي", "يحدث خطأ في التشغيل", "React يتجاهل التعديل تلقائياً", "المكون يُعاد تشغيله"], explanation: "Props للقراءة فقط. محاولة التعديل تسبب خطأ في التشغيل في وضع التطوير." },
    ],
    challenge: { title: "تحدي: أنشئ مكون ملف المستخدم", description: "أنشئ مكون UserProfile يقبل الاسم والعمر والبريد الإلكتروني كخصائص ويعرضها. وأنشئ أيضاً مكون UserList يعرض عدة مكونات UserProfile." },
    cheatSheet: { title: "ملخص المكونات والخصائص", columns: [
      { heading: "المكونات:", items: [
        "مكون = دالة تُرجع JSX",
        "اسم بحرف كبير إجباري",
        "يجب أن يفعل شيئاً واحداً",
      ]},
      { heading: "الخصائص (Props):", items: [
        "بيانات من الأصل إلى الابن",
        "للقراءة فقط — لا يمكن تعديلها",
        "أي نوع: نص، رقم، كائن، دالة",
        "القيم الافتراضية مع المعاملات الافتراضية",
      ]},
      { heading: "مثال أساسي:", code: "function Greeting({ name, age = 25 }) {\n  return (\n    <div>\n      <h1>مرحباً {name}</h1>\n      <p>العمر: {age}</p>\n    </div>\n  );\n}\n\n// الاستخدام\n<Greeting name=\"Ahmed\" />" },
    ]},
    interviewQuestions: [
      { question: "ما الفرق بين Props و State؟", answer: "الخصائص تأتي من المكون الأصل (للقراءة فقط)، الحالة داخل المكون (قابلة للتغيير).", difficulty: "easy" },
      { question: "لماذا نستخدم key في القوائم؟", answer: "React يستخدم key لمعرفة العناصر التي تغيرت وأيها أُضيفت أو حُذفت، مما يحسن الأداء.", difficulty: "medium" },
      { question: "ما هي children props؟", answer: "خاصية خاصة تحتوي على المحتوى بين علامتي البداية والنهاية للمكون.", difficulty: "easy" },
    ],
    tricks: [
      { title: "استخدم Object Destructuring", description: "بدلاً من props.name و props.age، اكتب {name, age} في توقيع الدالة", icon: "brain" },
      { title: "لا تدمّر Props", description: "لا تُنشئ متغيرات جديدة من Props unless必需 — استخدمها مباشرة", icon: "zap" },
    ]
  },
  en: {
    sections: [
      { title: "What are Components?", content: [
        { type: "p", text: "Components are the building blocks of any React application. They allow you to break down complex UIs into small, reusable pieces." },
        { type: "callout", title: "Simple Analogy", text: "Components are like furniture in a room. Each piece has a specific purpose: a table for eating, a chair for sitting. You can move any piece to another room. React components work the same way." },
        { type: "p", text: "Types of components:" },
        { type: "li", text: "Function Components: The modern approach — JavaScript functions that return JSX (standard now)" },
        { type: "li", text: "Class Components: The older approach — ES6 classes extending React.Component (rarely used now)" },
      ]},
      { title: "Creating Your First Component", content: [
        { type: "p", text: "To create a component in React, simply create a function that returns JSX. The function name must start with a capital letter." },
        { type: "p", text: "Important rules:" },
        { type: "li", text: "Component names must start with a capital letter (like UserProfile not userProfile)" },
        { type: "li", text: "Components must return JSX (or null)" },
        { type: "li", text: "Components can be nested inside other components" },
        { type: "li", text: "Each component should do one thing well" },
        { type: "callout", title: "Simple Analogy", text: "A component is like a calculator function. You give it inputs (props), and it outputs a result (UI). The component does not change its inputs — it just displays them nicely." },
      ]},
      { title: "What are Props?", content: [
        { type: "p", text: "Props (short for properties) are data passed from a parent component to a child component. They allow you to make components dynamic and reusable." },
        { type: "callout", title: "Simple Analogy", text: "Props are like function parameters. When you call a JavaScript function, you pass values: greet('Ahmed'). In React, the parent passes data to the child via props: <Greeting name='Ahmed' />." },
        { type: "p", text: "Characteristics of props:" },
        { type: "li", text: "Read-Only: Child components cannot modify props" },
        { type: "li", text: "One-Way: Data flows from parent to child" },
        { type: "li", text: "Can be any type: Strings, numbers, objects, functions, even other components" },
      ]},
      { title: "Using Props in Components", content: [
        { type: "p", text: "To use props in a component, access them from the function parameter. Then use them in your JSX." },
        { type: "p", text: "Prop types:" },
        { type: "li", text: "Strings: name='Ahmed'" },
        { type: "li", text: "Numbers: age={'{'}25{'}'}" },
        { type: "li", text: "Booleans: isActive={'{'}true{'}'}" },
        { type: "li", text: "Objects: user={'{'}{'{'}name: 'Ahmed', age: 25{'}'}{'}'}" },
        { type: "li", text: "Functions: onClick={'{'}handleClick{'}'}" },
      ]},
      { title: "Default Props", content: [
        { type: "p", text: "You can set default values for props when they are not provided. This makes your components more robust." },
        { type: "callout", title: "Simple Analogy", text: "Default props are like default settings on a phone. When you buy a new phone, it comes with default settings (volume, wallpaper). You can change them later, but the phone works well without changes." },
        { type: "p", text: "Two ways to set defaults:" },
        { type: "li", text: "Default parameters: function Greeting({'{'}name = 'World'{'}'}) {'{'}...{'}'}" },
        { type: "li", text: "OR operator: name {'||'} 'World'" },
      ]},
      { title: "Children Prop", content: [
        { type: "p", text: "The children prop is a special prop that contains the content between a component opening and closing tags." },
        { type: "callout", title: "Simple Analogy", text: "Children is like the contents of a box. The component is the box itself, and children is everything inside it. You can put anything in the box: text, images, other components." },
        { type: "p", text: "Children can be:" },
        { type: "li", text: "Text content" },
        { type: "li", text: "Other React elements" },
        { type: "li", text: "Even other components" },
      ]},
      { title: "Component Composition", content: [
        { type: "p", text: "Component composition is the practice of building complex UIs by combining simple components. This is one of React most powerful features." },
        { type: "callout", title: "Simple Analogy", text: "Composition is like building a house from Lego. Each Lego piece is simple on its own, but when you combine them, you create a complex, beautiful structure." },
        { type: "p", text: "Benefits of composition:" },
        { type: "li", text: "Reusability: Use the same component in different places" },
        { type: "li", text: "Maintainability: Easy to update and fix individual components" },
        { type: "li", text: "Testability: Components can be tested in isolation" },
      ]},
      { title: "What Happens Behind the Scenes?", content: [
        { type: "p", text: "When you pass props to a component, here is what happens:" },
        { type: "li", text: "1. Parent calls the component: <Greeting name='Ahmed' />" },
        { type: "li", text: "2. React creates a props object: {'{'}name: 'Ahmed'{'}'} and passes it to the child" },
        { type: "li", text: "3. Child component uses props: reads props.name and displays 'Ahmed'" },
        { type: "li", text: "4. Props cannot be modified: if the child tries to change props.name, it gets an error" },
      ]},
      { title: "Common Beginner Mistakes", content: [
        { type: "p", text: "Mistakes beginners often make:" },
        { type: "li", text: "Mistake 1: Trying to modify Props: Props are read-only. Use State instead if you need to change values" },
        { type: "li", text: "Mistake 2: Forgetting key in lists: When rendering a list of components, pass a unique key prop to each" },
        { type: "li", text: "Mistake 3: Naming components lowercase: Component names must start with a capital letter" },
        { type: "li", text: "Mistake 4: Passing objects directly in JSX: Use double curly braces for objects" },
      ]},
      { title: "Best Practices", content: [
        { type: "p", text: "Follow these practices:" },
        { type: "li", text: "Use Object Destructuring: Instead of props.name, write {name, age}" },
        { type: "li", text: "Do not destroy Props: Do not create new variables from Props unnecessarily" },
        { type: "li", text: "Use PropTypes or TypeScript: To validate prop types" },
        { type: "li", text: "Keep components small: Each component does one thing well" },
        { type: "li", text: "Descriptive component names: Like UserProfile not Box" },
      ]},
    ],
    quiz: [
      { question: "What are props in React?", options: ["Internal component state", "Data passed from parent to child", "Component methods", "Global variables"], explanation: "Props (properties) are data passed from a parent component to a child component. They are read-only and allow data to flow in one direction." },
      { question: "How do you pass a name prop to a Greeting component?", options: ["<Greeting name='Ahmed' />", "<Greeting name={Ahmed} />", "<Greeting {name='Ahmed'} />", "<Greeting>name='Ahmed'</Greeting>"], explanation: "The correct syntax is: <Greeting name='Ahmed' /> — Props are passed as attributes on the tag, and string values are wrapped in quotes." },
      { question: "What happens if a child component tries to modify a prop?", options: ["It works normally", "A runtime error occurs", "React silently ignores the modification", "The component re-renders"], explanation: "Props are read-only. Attempting to modify them causes a runtime error in development mode." },
    ],
    challenge: { title: "Challenge: Create a user profile component", description: "Create a UserProfile component that accepts name, age, and email as props and displays them. Also create a UserList component that renders multiple UserProfile components." },
    cheatSheet: { title: "Components and Props Cheat Sheet", columns: [
      { heading: "Components:", items: [
        "Component = function that returns JSX",
        "Name must start with capital letter",
        "Should do one thing well",
      ]},
      { heading: "Props:", items: [
        "Data from parent to child",
        "Read-only — cannot be modified",
        "Any type: string, number, object, function",
        "Default values with default parameters",
      ]},
      { heading: "Basic Example:", code: "function Greeting({ name, age = 25 }) {\n  return (\n    <div>\n      <h1>Hello {name}</h1>\n      <p>Age: {age}</p>\n    </div>\n  );\n}\n\n// Usage\n<Greeting name=\"Ahmed\" />" },
    ]},
    interviewQuestions: [
      { question: "What is the difference between Props and State?", answer: "Props come from the parent component (read-only), while State is internal to the component (mutable).", difficulty: "easy" },
      { question: "Why do we use keys in lists?", answer: "React uses keys to identify which items have changed, been added, or been removed, improving performance.", difficulty: "medium" },
      { question: "What are children props?", answer: "A special prop that contains the content between the opening and closing tags of a component.", difficulty: "easy" },
    ],
    tricks: [
      { title: "Use Object Destructuring", description: "Instead of props.name and props.age, write {name, age} in the function signature", icon: "brain" },
      { title: "Do not destroy Props", description: "Do not create new variables from Props unnecessarily — use them directly", icon: "zap" },
    ]
  },
  fr: {
    sections: [
      { title: "Qu est-ce que les composants ?", content: [
        { type: "p", text: "Les composants sont les blocs de construction de toute application React." },
        { type: "callout", title: "Analogie simple", text: "Les composants sont comme des meubles dans une pièce. Chaque meuble a un usage spécifique. Vous pouvez déplacer n importe quel meuble dans une autre pièce." },
      ]},
      { title: "Créer votre premier composant", content: [
        { type: "p", text: "Pour créer un composant, créez une fonction qui retourne du JSX. Le nom doit commencer par une majuscule." },
        { type: "callout", title: "Analogie simple", text: "Un composant est comme une fonction calculatrice. Vous lui donnez des entrées (props), et il produit un résultat (interface)." },
      ]},
      { title: "Qu est-ce que les Props ?", content: [
        { type: "p", text: "Les props sont des données passées du parent à l enfant." },
        { type: "callout", title: "Analogie simple", text: "Les props sont comme les paramètres de fonction. Quand vous appelez une fonction, vous passez des valeurs." },
      ]},
      { title: "Utiliser les Props", content: [
        { type: "p", text: "Pour utiliser les props, accédez-y via le paramètre de la fonction." },
      ]},
      { title: "Props par défaut", content: [
        { type: "callout", title: "Analogie simple", text: "Les props par défaut sont comme les paramètres par défaut d un téléphone." },
      ]},
      { title: "Props children", content: [
        { type: "callout", title: "Analogie simple", text: "Children est comme le contenu d une boîte. Le composant est la boîte elle-même." },
      ]},
      { title: "Composition de composants", content: [
        { type: "callout", title: "Analogie simple", text: "La composition est comme construire une maison avec des Lego." },
      ]},
      { title: "Erreurs courantes", content: [
        { type: "li", text: "Erreur 1 : Essayer de modifier les Props" },
        { type: "li", text: "Erreur 2 : Oublier la clé dans les listes" },
        { type: "li", text: "Erreur 3 : Nommer les composants en minuscules" },
      ]},
      { title: "Meilleures pratiques", content: [
        { type: "li", text: "Utilisez le destructuring d objet" },
        { type: "li", text: "Ne détruisez pas les Props" },
        { type: "li", text: "Utilisez PropTypes ou TypeScript" },
      ]},
    ],
    quiz: [
      { question: "Qu est-ce que les props ?", options: ["État interne du composant", "Données passées du parent à l enfant", "Méthodes de composant", "Variables globales"], explanation: "Les props sont des données passées du parent à l enfant. Elles sont en lecture seule." },
      { question: "Comment passer une prop name ?", options: ["<Greeting name='Ahmed' />", "<Greeting name={Ahmed} />", "<Greeting {name='Ahmed'} />", "<Greeting>name='Ahmed'</Greeting>"], explanation: "La syntaxe correcte est : <Greeting name='Ahmed' />" },
      { question: "Que se passe-t-il si un enfant modifie une prop ?", options: ["Ça marche normalement", "Une erreur runtime se produit", "React ignore silencieusement", "Le composant se re-render"], explanation: "Les props sont en lecture seule. Tenter de les modifier cause une erreur." },
    ],
    challenge: { title: "Défi : Créez un composant profil", description: "Créez un composant UserProfile avec name, age et email comme props." },
    cheatSheet: { title: "Référence Composants et Props", columns: [
      { heading: "Composants :", items: [
        "Composant = fonction qui retourne JSX",
        "Nom commence par majuscule",
      ]},
      { heading: "Props :", items: [
        "Données du parent à l enfant",
        "Lecture seule",
        "Tout type",
      ]},
    ]}
  },
  de: {
    sections: [
      { title: "Was sind Komponenten?", content: [
        { type: "p", text: "Komponenten sind die Bausteine jeder React-Anwendung." },
        { type: "callout", title: "Einfache Analogie", text: "Komponenten sind wie Möbel in einem Zimmer. Jedes Möbelstück hat einen bestimmten Zweck. Sie können jedes Möbelstück in ein anderes Zimmer verschieben." },
      ]},
      { title: "Erstellen Sie Ihre erste Komponente", content: [
        { type: "p", text: "Um eine Komponente zu erstellen, erstellen Sie eine Funktion, die JSX zurückgibt. Der Name muss mit einem Großbuchstaben beginnen." },
        { type: "callout", title: "Einfache Analogie", text: "Eine Komponente ist wie eine Taschenrechner-Funktion. Sie geben ihr Eingaben (Props), und sie gibt ein Ergebnis aus." },
      ]},
      { title: "Was sind Props?", content: [
        { type: "p", text: "Props sind Daten, die vom Elternteil an das Kind übergeben werden." },
        { type: "callout", title: "Einfache Analogie", text: "Props sind wie Funktionsparameter. Wenn Sie eine Funktion aufrufen, übergeben Sie Werte." },
      ]},
      { title: "Props verwenden", content: [
        { type: "p", text: "Um Props zu verwenden, greifen Sie über den Funktionsparameter darauf zu." },
      ]},
      { title: "Standard-Props", content: [
        { type: "callout", title: "Einfache Analogie", text: "Standard-Props sind wie Standardeinstellungen auf einem Telefon." },
      ]},
      { title: "Children-Props", content: [
        { type: "callout", title: "Einfache Analogie", text: "Children ist wie der Inhalt einer Box. Die Komponente ist die Box selbst." },
      ]},
      { title: "Komposition von Komponenten", content: [
        { type: "callout", title: "Einfache Analogie", text: "Komposition ist wie das Bauen eines Hauses aus Lego." },
      ]},
      { title: "Häufige Fehler", content: [
        { type: "li", text: "Fehler 1: Props versuchen zu ändern" },
        { type: "li", text: "Fehler 2: key in Listen vergessen" },
        { type: "li", text: "Fehler 3: Komponenten kleinschreiben" },
      ]},
      { title: "Best Practices", content: [
        { type: "li", text: "Verwenden Sie Object Destructuring" },
        { type: "li", text: "Zerstören Sie Props nicht" },
        { type: "li", text: "Verwenden Sie PropTypes oder TypeScript" },
      ]},
    ],
    quiz: [
      { question: "Was sind Props?", options: ["Interner Zustand", "Von Eltern an Kinder übergebene Daten", "Komponentenmethoden", "Globale Variablen"], explanation: "Props sind Daten, die vom Elternteil an das Kind übergeben werden. Sie sind nur lesbar." },
      { question: "Wie übergeben Sie eine name Prop?", options: ["<Greeting name='Ahmed' />", "<Greeting name={Ahmed} />", "<Greeting {name='Ahmed'} />", "<Greeting>name='Ahmed'</Greeting>"], explanation: "Die richtige Syntax ist: <Greeting name='Ahmed' />" },
      { question: "Was passiert, wenn ein Kind eine Prop ändern versucht?", options: ["Es funktioniert normal", "Ein Runtime-Fehler tritt auf", "React ignoriert es stillschweigend", "Die Komponente rendert neu"], explanation: "Props sind nur lesbar. Ein Änderungsversuch verursacht einen Fehler." },
    ],
    challenge: { title: "Herausforderung: Erstellen Sie ein Profil-Komponente", description: "Erstellen Sie eine UserProfile-Komponente mit name, age und email als Props." },
    cheatSheet: { title: "Komponenten und Props", columns: [
      { heading: "Komponenten:", items: [
        "Komponente = Funktion die JSX zurückgibt",
        "Name beginnt mit Großbuchstaben",
      ]},
      { heading: "Props:", items: [
        "Daten vom Eltern- zum Kind",
        "Nur lesbar",
        "Jeder Typ",
      ]},
    ]}
  },
};

export default translations;
