const translations = {
  en: {
    sections: [
      { title: "Introduction to Code Review", content: [
        { type: "p", text: "Code review is the process of systematically examining code to find bugs, improve quality, and share knowledge." },
        { type: "callout", title: "What We Will Learn", text: "Code review best practices, common issues to look for, providing constructive feedback, and automated review tools." }
      ]},
      { title: "Why Code Review Matters", content: [
        { type: "p", text: "Code review catches bugs early, improves code quality, and helps the entire team learn." },
        { type: "callout", title: "Benefits", text: "Early bug detection, knowledge sharing, consistent code style, mentorship opportunity." }
      ]},
      { title: "Code Review Checklist", content: [
        { type: "p", text: "Use a checklist to ensure you review all important aspects of the code." },
        { type: "callout", title: "Checklist Items", text: "Functionality, readability, performance, security, testing, documentation." }
      ]},
      { title: "Common Issues to Look For", content: [
        { type: "p", text: "Focus on these categories when reviewing code to catch common problems." },
        { type: "callout", title: "Categories", text: "Bugs, performance issues, security vulnerabilities, code duplication, naming conventions." }
      ]},
      { title: "Providing Constructive Feedback", content: [
        { type: "p", text: "Good feedback is specific, actionable, and respectful." },
        { type: "callout", title: "Feedback Tips", text: "Be specific, explain why, suggest alternatives, ask questions, be respectful." }
      ]},
      { title: "Automated Code Review", content: [
        { type: "p", text: "Use automated tools to catch issues before human review." },
        { type: "callout", title: "Tools", text: "ESLint, Prettier, SonarQube, GitHub Actions for automated checks." }
      ]}
    ],
    quiz: [
      { question: "Why is code review important?",
        options: ["It makes code run faster", "It catches bugs early and improves quality", "It's required by law", "It replaces testing"],
        correctAnswer: 1, explanation: "Code review catches bugs early, improves quality, and helps the team learn." },
      { question: "What makes good feedback?",
        options: ["Vague comments", "Specific, actionable, and respectful", "Only negative comments", "Only praise"],
        correctAnswer: 1, explanation: "Good feedback is specific about what to change, suggests alternatives, and is respectful." },
      { question: "What should you NOT do in code review?",
        options: ["Ask questions", "Suggest improvements", "Be respectful", "Make personal attacks"],
        correctAnswer: 3, explanation: "Code review should be professional and focus on code, not personal criticism." }
    ],
    challenge: { title: "Challenge: Review Code",
      description: "Review a peer's code using a checklist. Provide constructive feedback on at least 3 aspects." },
    cheatSheet: { title: "Code Review Quick Reference", items: [
      { title: "Checklist", content: "Functionality, readability, performance, security, tests" },
      { title: "Feedback", content: "Specific, actionable, respectful, explain why" },
      { title: "Tools", content: "ESLint, Prettier, SonarQube, GitHub Actions" },
      { title: "Focus", content: "Bugs, performance, security, duplication, naming" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction a la revue de code", content: [
        { type: "p", text: "La revue de code est le processus d'examen systematique du code pour trouver des bugs et ameliorer la qualite." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Bonnes pratiques, problemes courants, feedback constructif, outils automatises." }
      ]},
      { title: "Pourquoi la revue de code est importante", content: [
        { type: "p", text: "La revue de code attrape les bugs tot, ameliore la qualite et fait apprendre l'equipe." },
        { type: "callout", title: "Avantages", text: "Detection precoce, partage de connaissances, style coherent, mentorat." }
      ]},
      { title: "Liste de verification", content: [
        { type: "p", text: "Utilisez une liste de verification pour passer en revue tous les aspects." },
        { type: "callout", title: "Elements", text: "Fonctionnalite, lisibilite, performance, securite, tests, documentation." }
      ]},
      { title: "Problememes courants", content: [
        { type: "p", text: "Concentrez-vous sur ces categories pour attraper les problemes courants." },
        { type: "callout", title: "Categories", text: "Bugs, performance, securite, duplication, conventions de nommage." }
      ]},
      { title: "Feedback constructif", content: [
        { type: "p", text: "Un bon feedback est specifique, realisable et respectueux." },
        { type: "callout", title: "Conseils", text: "Soyez specifique, expliquez pourquoi, suggerez des alternatives, soyez respectueux." }
      ]},
      { title: "Revue automatisee", content: [
        { type: "p", text: "Utilisez des outils automatises pour attraper les problemes avant l'humain." },
        { type: "callout", title: "Outils", text: "ESLint, Prettier, SonarQube, GitHub Actions." }
      ]}
    ],
    quiz: [
      { question: "Pourquoi la revue de code est importante ?",
        options: ["Elle rend le code plus rapide", "Elle attrape les bugs tot et ameliore la qualite", "Elle est requise par la loi", "Elle remplace les tests"],
        correctAnswer: 1, explanation: "La revue de code attrape les bugs tot, ameliore la qualite et fait apprendre l'equipe." },
      { question: "Qu'est-ce qu'un bon feedback ?",
        options: ["Commentaires vagues", "Specifique, realisable et respectueux", "Seulement des commentaires negatifs", "Seulement des eloges"],
        correctAnswer: 1, explanation: "Un bon feedback specifie quoi changer, suggere des alternatives, et est respectueux." },
      { question: "Que ne devez-vous PAS faire lors d'une revue ?",
        options: ["Poser des questions", "Suggerer des ameliorations", "Etre respectueux", "Faire des attaques personnelles"],
        correctAnswer: 3, explanation: "La revue de code doit etre professionnelle et se concentrer sur le code." }
    ],
    challenge: { title: "Defi : Revue de code",
      description: "Passez en revue le code d'un pairs avec une liste de verification. Donnez un feedback constructif." },
    cheatSheet: { title: "Revue de code - Reference rapide", items: [
      { title: "Liste", content: "Fonctionnalite, lisibilite, performance, securite, tests" },
      { title: "Feedback", content: "Specifique, realisable, respectueux, expliquer pourquoi" },
      { title: "Outils", content: "ESLint, Prettier, SonarQube, GitHub Actions" },
      { title: "Focus", content: "Bugs, performance, securite, duplication, nommage" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Code-Review", content: [
        { type: "p", text: "Code-Review ist der Prozess der systematischen Uberprufung von Code." },
        { type: "callout", title: "Was wir lernen werden", text: "Best Practices, haufige Probleme, konstruktives Feedback, automatisierte Tools." }
      ]},
      { title: "Warum Code-Review wichtig ist", content: [
        { type: "p", text: "Code-Review findet Fruhfehler, verbessert Qualitat und hilft dem Team." },
        { type: "callout", title: "Vorteile", text: "Fruhe Fehlererkennung, Wissensaustausch, konsistenter Stil, Mentoring." }
      ]},
      { title: "Code-Review Checkliste", content: [
        { type: "p", text: "Verwenden Sie eine Checkliste fur alle wichtigen Aspekte." },
        { type: "callout", title: "Checkpunkte", text: "Funktionalitat, Lesbarkeit, Leistung, Sicherheit, Tests, Dokumentation." }
      ]},
      { title: "Haufige Probleme", content: [
        { type: "p", text: "Konzentrieren Sie sich auf diese Kategorien bei der Uberprufung." },
        { type: "callout", title: "Kategorien", text: "Bugs, Leistungsprobleme, Sicherheitslucken, Code-Duplikat, Namenskonventionen." }
      ]},
      { title: "Konstruktives Feedback", content: [
        { type: "p", text: "Gutes Feedback ist spezifisch, umsetzbar und respektvoll." },
        { type: "callout", title: "Tipps", text: "Seien Sie spezifisch, erklaren Sie warum, schlagen Sie Alternativen vor." }
      ]},
      { title: "Automatisierte Code-Review", content: [
        { type: "p", text: "Verwenden Sie automatisierte Tools vor der menschlichen Uberprufung." },
        { type: "callout", title: "Tools", text: "ESLint, Prettier, SonarQube, GitHub Actions." }
      ]}
    ],
    quiz: [
      { question: "Warum ist Code-Review wichtig?",
        options: ["Macht Code schneller", "Findet Fruhfehler und verbessert Qualitat", "Ist gesetzlich vorgeschrieben", "Ersetzt Tests"],
        correctAnswer: 1, explanation: "Code-Review findet Fruhfehler, verbessert Qualitat und hilft dem Team." },
      { question: "Was macht gutes Feedback aus?",
        options: ["Vage Kommentare", "Spezifisch, umsetzbar und respektvoll", "Nur negative Kommentare", "Nur Lob"],
        correctAnswer: 1, explanation: "Gutes Feedback ist spezifisch, schlagt Alternativen vor und ist respektvoll." },
      { question: "Was sollten Sie NICHT in Code-Review tun?",
        options: ["Fragen stellen", "Verbesserungen vorschlagen", "Respektvoll sein", "Personliche Angriffe machen"],
        correctAnswer: 3, explanation: "Code-Review sollte professionell sein und sich auf den Code konzentrieren." }
    ],
    challenge: { title: "Herausforderung: Code reviewen",
      description: "Reviewen Sie den Code eines Kollegen mit einer Checkliste. Geben Sie konstruktives Feedback." },
    cheatSheet: { title: "Code-Review - Schnellreferenz", items: [
      { title: "Checkliste", content: "Funktionalitat, Lesbarkeit, Leistung, Sicherheit, Tests" },
      { title: "Feedback", content: "Spezifisch, umsetzbar, respektvoll, warum erklaren" },
      { title: "Tools", content: "ESLint, Prettier, SonarQube, GitHub Actions" },
      { title: "Fokus", content: "Bugs, Leistung, Sicherheit, Duplikate, Namensgebung" }
    ]}
  }
};
export default translations;
