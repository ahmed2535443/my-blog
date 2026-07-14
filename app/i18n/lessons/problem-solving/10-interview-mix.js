const translations = {
  ar: {
    sections: [
      { title: "مقدمة في المقابلات التقنية", content: [
        { type: "p", text: "تختبر المقابلات التقنية مهاراتك في حل المشكلات وقدرتك على البرمجة ومعرفتك بتصميم النظام." },
        { type: "callout", title: "ما سنتعلمه", text: "تنسيقات المقابلة، أنواع الأسئلة الشائعة، استراتيجيات حل المشكلات، ونصائح التواصل." }
      ]},
      { title: "تنسيقات المقابلة", content: [
        { type: "p", text: "تستخدم شركات مختلفة تنسيقات مقابلة مختلفة لتقييم المرشحين." },
        { type: "callout", title: "التنسيقات", text: "البرمجة على السبورة، البرمجة المباشرة، المشاريع المنزلية، تصميم النظام، المقابلات السلوكية." }
      ]},
      { title: "أنواع الأسئلة الشائعة", content: [
        { type: "p", text: "تتضمن المقابلات التقنية غالبًا هذه الفئات من الأسئلة." },
        { type: "callout", title: "الأنواع", text: "هياكل البيانات، الخوارزميات، تصميم النظام، خصائص اللغة، إصلاح الأخطاء، مراجعة الكود." }
      ]},
      { title: "استراتيجية حل المشكلات", content: [
        { type: "p", text: "اتبع نهجًا منهجيًا عند حل المشكلات في المقابلات." },
        { type: "callout", title: "الاستراتيجية", text: "1. افهم المشكلة، 2. اطرح أسئلة توضيحية، 3. خطط لنهجك، 4. برمج الحل، 5. اختبره." }
      ]},
      { title: "نصائح التواصل", content: [
        { type: "p", text: "التواصل الواضح مهم بنفس قدر حل المشكلة بشكل صحيح." },
        { type: "callout", title: "النصائح", text: "فكر بصوت عالٍ، اشرح نهجك، اطرح أسئلة، ناقش المفاضلات." }
      ]},
      { title: "التعامل مع الأسئلة الصعبة", content: [
        { type: "p", text: "عند العطب، استخدم هذه الاستراتيجيات للمضي قدمًا." },
        { type: "callout", title: "الاستراتيجيات", text: "فكك المشكلة، ابدأ بحل بسيط،حسّن خطوة بخطوة، ناقش البدائل." }
      ]}
    ],
    quiz: [
      { question: "ماذا يجب أن تفعل أولاً في مقابلة تقنية؟",
        options: ["ابدأ البرمجة فورًا", "افهم المشكلة واطرح أسئلة", "اكتب كود وهمي", "اختر إطار عمل"],
        correctAnswer: 1, explanation: "افهم المشكلة دائمًا بشكل كامل واطرح أسئلة توضيحية قبل البرمجة." },
      { question: "لماذا التفكير بصوت عالٍ مهم؟",
        options: ["مطلوب قانونيًا", "يُظهر عملية حل المشكلات لديك للمقابل", "يجعلك تبرمج أسرع", "ليس مهمًا"],
        correctAnswer: 1, explanation: "يُظهر التفكير بصوت عالٍ للمقابل كيف تتعامل مع المشكلات." },
      { question: "ماذا تفعل عند العطب؟",
        options: ["استسلم", "اصمت", "فكك المشكلة وابدأ بحل بسيط", "اطلب الإجابة"],
        correctAnswer: 2, explanation: "عند العطب، فككة المشكلة وابدأ بإصدار أبسط." }
    ],
    challenge: { title: "تحدي: المقابلة العملية",
      description: "تدرب على حل مشكلة برمجية في 45 دقيقة مع تواصل واضح." },
    cheatSheet: { title: "مرجع المقابلة التقنية السريع", items: [
      { title: "الاستراتيجية", content: "افهم ← خطط ← برمج ← اختبر" },
      { title: "التواصل", content: "فكر بصوت عالٍ، اشرح النهج، ناقش المفاضلات" },
      { title: "عند العطب", content: "فكك، حل بسيط أولاً، حسّن" },
      { title: "المواضيع الشائعة", content: "المصفوفات، النصوص، الأشجار، الرسوم البيانية، DP، تصميم النظام" }
    ]}
  },
  en: {
    sections: [
      { title: "Introduction to Technical Interviews", content: [
        { type: "p", text: "Technical interviews test your problem-solving skills, coding ability, and system design knowledge." },
        { type: "callout", title: "What We Will Learn", text: "Interview formats, common question types, problem-solving strategies, and communication tips." }
      ]},
      { title: "Interview Formats", content: [
        { type: "p", text: "Different companies use different interview formats to evaluate candidates." },
        { type: "callout", title: "Formats", text: "Whiteboard coding, live coding, take-home projects, system design, behavioral interviews." }
      ]},
      { title: "Common Question Types", content: [
        { type: "p", text: "Technical interviews often include these categories of questions." },
        { type: "callout", title: "Types", text: "Data structures, algorithms, system design, language-specific, debugging, code review." }
      ]},
      { title: "Problem-Solving Strategy", content: [
        { type: "p", text: "Follow a systematic approach when solving problems in interviews." },
        { type: "callout", title: "Strategy", text: "1. Understand the problem, 2. Ask clarifying questions, 3. Plan your approach, 4. Code the solution, 5. Test it." }
      ]},
      { title: "Communication Tips", content: [
        { type: "p", text: "Clear communication is as important as solving the problem correctly." },
        { type: "callout", title: "Tips", text: "Think out loud, explain your approach, ask questions, discuss trade-offs." }
      ]},
      { title: "Handling Difficult Questions", content: [
        { type: "p", text: "When stuck, use these strategies to make progress." },
        { type: "callout", title: "Strategies", text: "Break down the problem, start with a simple solution, optimize step by step, discuss alternatives." }
      ]}
    ],
    quiz: [
      { question: "What should you do first in a technical interview?",
        options: ["Start coding immediately", "Understand the problem and ask questions", "Write pseudocode", "Choose a framework"],
        correctAnswer: 1, explanation: "Always understand the problem fully and ask clarifying questions before coding." },
      { question: "Why is thinking out loud important?",
        options: ["It's required by law", "It shows your problem-solving process to the interviewer", "It makes you code faster", "It's not important"],
        correctAnswer: 1, explanation: "Thinking out loud shows the interviewer how you approach problems." },
      { question: "What should you do when stuck?",
        options: ["Give up", "Stay silent", "Break down the problem and start with a simple solution", "Ask for the answer"],
        correctAnswer: 2, explanation: "When stuck, break down the problem and start with a simpler version." }
    ],
    challenge: { title: "Challenge: Practice Interview",
      description: "Practice solving a coding problem in 45 minutes with clear communication." },
    cheatSheet: { title: "Technical Interview Quick Reference", items: [
      { title: "Strategy", content: "Understand → Plan → Code → Test" },
      { title: "Communication", content: "Think out loud, explain approach, discuss trade-offs" },
      { title: "When Stuck", content: "Break down, simple solution first, optimize" },
      { title: "Common Topics", content: "Arrays, strings, trees, graphs, DP, system design" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction aux entretiens techniques", content: [
        { type: "p", text: "Les entretiens techniques testent vos competences de resolution de problemes." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Formats d'entretien, types de questions, strategies de resolution, conseils de communication." }
      ]},
      { title: "Formats d'entretien", content: [
        { type: "p", text: "Differentes entreprises utilisent differents formats pour evaluer les candidats." },
        { type: "callout", title: "Formats", text: "Codage tableau blanc, codage en direct, projets a rendre, conception de systeme." }
      ]},
      { title: "Types de questions courantes", content: [
        { type: "p", text: "Les entretiens techniques incluent souvent ces categories de questions." },
        { type: "callout", title: "Types", text: "Structures de donnees, algorithmes, conception de systeme, langage, debogage." }
      ]},
      { title: "Strategie de resolution", content: [
        { type: "p", text: "Suivez une approche systematique lors de la resolution de problemes." },
        { type: "callout", title: "Strategie", text: "1. Comprendre, 2. Clarifier, 3. Planifier, 4. Coder, 5. Tester." }
      ]},
      { title: "Conseils de communication", content: [
        { type: "p", text: "Une communication claire est aussi importante que la solution." },
        { type: "callout", title: "Conseils", text: "Pensez a voix haute, expliquez votre approche, posez des questions, discutez des compromis." }
      ]},
      { title: "Gerer les questions difficiles", content: [
        { type: "p", text: "Quand vous etes bloque, utilisez ces strategies pour avancer." },
        { type: "callout", title: "Strategies", text: "Decomposez le probleme, commencez par une solution simple, optimisez." }
      ]}
    ],
    quiz: [
      { question: "Que devez-vous faire en premier lors d'un entretien ?",
        options: ["Coder immediatement", "Comprendre le probleme et poser des questions", "Ecrire du pseudocode", "Choisir un framework"],
        correctAnswer: 1, explanation: "Comprenez toujours completement le probleme et posez des questions avant de coder." },
      { question: "Pourquoi penser a voix haute est important ?",
        options: ["C'est requis par la loi", "Cela montre votre processus de resolution", "Cela rend le code plus rapide", "Ce n'est pas important"],
        correctAnswer: 1, explanation: "Penser a voix haute montre comment vous approchez les problemes." },
      { question: "Que faire quand vous etes bloque ?",
        options: ["Abandonner", "Rester silencieux", "Decomposer et commencer par une solution simple", "Demander la reponse"],
        correctAnswer: 2, explanation: "Quand vous etes bloque, decomposez et commencez par une version plus simple." }
    ],
    challenge: { title: "Defi : Entretien pratique",
      description: "Entrainez-vous a resoudre un probleme en 45 minutes avec communication claire." },
    cheatSheet: { title: "Entretien technique - Reference rapide", items: [
      { title: "Strategie", content: "Comprendre → Planifier → Coder → Tester" },
      { title: "Communication", content: "Pensez a voix haute, expliquez, discutez des compromis" },
      { title: "Bloque", content: "Decomposer, solution simple d'abord, optimiser" },
      { title: "Sujets courants", content: "Tableaux, cordes, arbres, graphes, DP, conception" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in technische Vorstellungsgesprache", content: [
        { type: "p", text: "Technische Vorstellungsgesprache testen Ihre Problemlösungsfahigkeiten und Ihr Wissen." },
        { type: "callout", title: "Was wir lernen werden", text: "Interviewformate, Fragetypen, Losungsstrategien, Kommunikationstipps." }
      ]},
      { title: "Interviewformate", content: [
        { type: "p", text: "Verschiedene Unternehmen verwenden verschiedene Formate." },
        { type: "callout", title: "Formate", text: "Whiteboard-Coding, Live-Coding, Take-Home-Projekte, Systemdesign." }
      ]},
      { title: "Haufige Fragetypen", content: [
        { type: "p", text: "Technische Interviews enthalten oft diese Fragekategorien." },
        { type: "callout", title: "Typen", text: "Datenstrukturen, Algorithmen, Systemdesign, Sprachspezifisch, Debugging." }
      ]},
      { title: "Problemlosungsstrategie", content: [
        { type: "p", text: "Befolgen Sie einen systematischen Ansatz bei der Problemlösung." },
        { type: "callout", title: "Strategie", text: "1. Problem verstehen, 2. Klarstellende Fragen, 3. Ansatz planen, 4. Losung coden, 5. Testen." }
      ]},
      { title: "Kommunikationstipps", content: [
        { type: "p", text: "Klare Kommunikation ist ebenso wichtig wie die richtige Losung." },
        { type: "callout", title: "Tipps", text: "Laut denken, Ansatz erklaren, Fragen stellen, Kompromisse diskutieren." }
      ]},
      { title: "Umgang mit schwierigen Fragen", content: [
        { type: "p", text: "Bei Schwierigkeiten konnen Sie diese Strategien anwenden." },
        { type: "callout", title: "Strategien", text: "Problem zerlegen, mit einfacher Losung beginnen, schrittweise optimieren." }
      ]}
    ],
    quiz: [
      { question: "Was sollten Sie in einem technischen Interview zuerst tun?",
        options: ["Sofort coden", "Problem verstehen und Fragen stellen", "Pseudocode schreiben", "Framework wahlen"],
        correctAnswer: 1, explanation: "Verstehen Sie das Problem immer vollstandig und stellen Sie klare Fragen." },
      { question: "Warum ist lautes Denken wichtig?",
        options: ["Gesetzlich vorgeschrieben", "Zeigt Ihren Losungsprozess", "Macht schnelleres Coden", "Ist nicht wichtig"],
        correctAnswer: 1, explanation: "Lautes Denken zeigt dem Interviewer, wie Sie Probleme angehen." },
      { question: "Was tun, wenn Sie stecken bleiben?",
        options: ["Aufgeben", "Schweigen", "Problem zerlegen und mit einfacher Losung beginnen", "Nach der Losung fragen"],
        correctAnswer: 2, explanation: "Wenn Sie stecken bleiben, zerlegen Sie das Problem und beginnen Sie einfach." }
    ],
    challenge: { title: "Herausforderung: Interview uben",
      description: "Ubben Sie, ein Coding-Problem in 45 Minuten mit klarer Kommunikation zu losen." },
    cheatSheet: { title: "Technisches Interview - Schnellreferenz", items: [
      { title: "Strategie", content: "Verstehen → Planen → Coden → Testen" },
      { title: "Kommunikation", content: "Laut denken, erklaren, Kompromisse diskutieren" },
      { title: "Stecken bleiben", content: "Zerlegen, einfache Losung zuerst, optimieren" },
      { title: "Haufige Themen", content: "Arrays, Strings, Baume, Graphen, DP, Systemdesign" }
    ]}
  }
};
export default translations;
