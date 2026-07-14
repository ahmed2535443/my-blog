const translations = {
  en: {
    sections: [
      { title: "Introduction to Design Patterns", content: [
        { type: "p", text: "Design patterns are reusable solutions to common software design problems." },
        { type: "callout", title: "What We Will Learn", text: "Creational, structural, and behavioral patterns with practical examples." }
      ]},
      { title: "Creational Patterns", content: [
        { type: "p", text: "Creational patterns deal with object creation mechanisms." },
        { type: "callout", title: "Patterns", text: "Singleton, Factory Method, Abstract Factory, Builder, Prototype." }
      ]},
      { title: "Structural Patterns", content: [
        { type: "p", text: "Structural patterns deal with object composition and relationships." },
        { type: "callout", title: "Patterns", text: "Adapter, Bridge, Composite, Decorator, Facade, Proxy." }
      ]},
      { title: "Behavioral Patterns", content: [
        { type: "p", text: "Behavioral patterns deal with communication between objects." },
        { type: "callout", title: "Patterns", text: "Observer, Strategy, Command, Iterator, State, Template Method." }
      ]},
      { title: "When to Use Patterns", content: [
        { type: "p", text: "Use patterns when you face a recurring design problem, not for every situation." },
        { type: "callout", title: "Guidelines", text: "Identify the problem first, choose the right pattern, don't over-engineer." }
      ]},
      { title: "Pattern Examples", content: [
        { type: "p", text: "Real-world examples help understand when and how to apply patterns." },
        { type: "callout", title: "Examples", text: "Singleton: database connection. Observer: event listeners. Strategy: sorting algorithms." }
      ]}
    ],
    quiz: [
      { question: "What are design patterns?",
        options: ["CSS patterns", "Reusable solutions to common design problems", "TypeScript patterns", "Database patterns"],
        correctAnswer: 1, explanation: "Design patterns are reusable solutions to common software design problems." },
      { question: "Which category deals with object creation?",
        options: ["Structural", "Behavioral", "Creational", "Functional"],
        correctAnswer: 2, explanation: "Creational patterns deal with object creation mechanisms." },
      { question: "When should you use design patterns?",
        options: ["For every line of code", "When facing recurring design problems", "Never", "Only in large projects"],
        correctAnswer: 1, explanation: "Use patterns when you face a recurring design problem, not for every situation." }
    ],
    challenge: { title: "Challenge: Apply Design Patterns",
      description: "Identify and implement 3 different design patterns in a small project." },
    cheatSheet: { title: "Design Patterns Quick Reference", items: [
      { title: "Creational", content: "Singleton, Factory, Builder - object creation" },
      { title: "Structural", content: "Adapter, Facade, Decorator - object composition" },
      { title: "Behavioral", content: "Observer, Strategy, Command - object communication" },
      { title: "When", content: "Recurring problem → right pattern → don't over-engineer" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction aux patrons de conception", content: [
        { type: "p", text: "Les patrons de conception sont des solutions reutilisables aux problemes courants de conception." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Patrons de creation, structure et comportement avec exemples pratiques." }
      ]},
      { title: "Patrons de creation", content: [
        { type: "p", text: "Les patrons de creation traitent des mecanismes de creation d'objets." },
        { type: "callout", title: "Patrons", text: "Singleton, Methode usine, Usine abstraite, Constructeur, Prototype." }
      ]},
      { title: "Patrons structurels", content: [
        { type: "p", text: "Les patrons structurels traitent de la composition et des relations d'objets." },
        { type: "callout", title: "Patrons", text: "Adaptateur, Pont, Composite, Decorateur, Façade, Proxy." }
      ]},
      { title: "Patrons comportementaux", content: [
        { type: "p", text: "Les patrons comportementaux traitent de la communication entre objets." },
        { type: "callout", title: "Patrons", text: "Observateur, Strategie, Commande, Iterateur, Etat, Methode-modele." }
      ]},
      { title: "Quand utiliser les patrons", content: [
        { type: "p", text: "Utilisez les patrons quand vous facez un probleme de conception recurrent." },
        { type: "callout", title: "Directives", text: "Identifiez le probleme, choisissez le bon patron, n'hyperconcevez pas." }
      ]},
      { title: "Exemples de patrons", content: [
        { type: "p", text: "Des exemples concrets aident a comprendre quand et comment appliquer les patrons." },
        { type: "callout", title: "Exemples", text: "Singleton : connexion base de donnees. Observateur : ecouteurs d'evenements." }
      ]}
    ],
    quiz: [
      { question: "Qu'est-ce que les patrons de conception ?",
        options: ["Patrons CSS", "Solutions reutilisables aux problemes courants", "Patrons TypeScript", "Patrons de base de donnees"],
        correctAnswer: 1, explanation: "Les patrons sont des solutions reutilisables aux problemes courants de conception." },
      { question: "Quelle categorie traite de la creation d'objets ?",
        options: ["Structurels", "Comportementaux", "Creation", "Fonctionnels"],
        correctAnswer: 2, explanation: "Les patrons de creation traitent des mecanismes de creation d'objets." },
      { question: "Quand utiliser les patrons ?",
        options: ["Pour chaque ligne de code", "Face a un probleme recurrent", "Jamais", "Seulement dans les gros projets"],
        correctAnswer: 1, explanation: "Utilisez les patrons face a un probleme de conception recurrent." }
    ],
    challenge: { title: "Defi : Appliquer les patrons",
      description: "Identifiez et implementez 3 patrons differents dans un petit projet." },
    cheatSheet: { title: "Patrons de conception - Reference rapide", items: [
      { title: "Creation", content: "Singleton, Usine, Constructeur - creation d'objets" },
      { title: "Structure", content: "Adaptateur, Facade, Decorateur - composition" },
      { title: "Comportement", content: "Observateur, Strategie, Commande - communication" },
      { title: "Quand", content: "Probleme recurrent → bon patron → pas d'hyperconception" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Designmuster", content: [
        { type: "p", text: "Designmuster sind wiederverwendbare Losungen fur haufige Software-Designprobleme." },
        { type: "callout", title: "Was wir lernen werden", text: "Kreations-, Struktur- und Verhaltensmuster mit praktischen Beispielen." }
      ]},
      { title: "Kreationsmuster", content: [
        { type: "p", text: "Kreationsmuster befassen sich mit Objekterstellungsmechanismen." },
        { type: "callout", title: "Muster", text: "Singleton, Fabrikmethode, Abstrakte Fabrik, Builder, Prototyp." }
      ]},
      { title: "Strukturmuster", content: [
        { type: "p", text: "Strukturmuster befassen sich mit Objektkomposition und Beziehungen." },
        { type: "callout", title: "Muster", text: "Adapter, Brucke, Dekorateur, Fassade, Komposite, Proxy." }
      ]},
      { title: "Verhaltensmuster", content: [
        { type: "p", text: "Verhaltensmuster befassen sich mit der Kommunikation zwischen Objekten." },
        { type: "callout", title: "Muster", text: "Observer, Strategie, Befehl, Iterator, Zustand, Schablonenmethode." }
      ]},
      { title: "Wann Muster verwenden", content: [
        { type: "p", text: "Verwenden Sie Muster bei wiederkehrenden Designproblemen." },
        { type: "callout", title: "Richtlinien", text: "Problem zuerst identifizieren, richtiges Muster wahlen, nicht uberkonstruieren." }
      ]},
      { title: "Musterbeispiele", content: [
        { type: "p", text: "Praktische Beispiele helfen zu verstehen, wann und wie Muster angewendet werden." },
        { type: "callout", title: "Beispiele", text: "Singleton: Datenbankverbindung. Observer: Event Listener. Strategie: Sortieralgorithmen." }
      ]}
    ],
    quiz: [
      { question: "Was sind Designmuster?",
        options: ["CSS-Muster", "Wiederverwendbare Losungen fur Designprobleme", "TypeScript-Muster", "Datenbankmuster"],
        correctAnswer: 1, explanation: "Designmuster sind wiederverwendbare Losungen fur haufige Designprobleme." },
      { question: "Welche Kategorie befasst sich mit Objekterstellung?",
        options: ["Strukturell", "Verhaltensbasiert", "Kreational", "Funktional"],
        correctAnswer: 2, explanation: "Kreationsmuster befassen sich mit Objekterstellungsmechanismen." },
      { question: "Wann sollte man Designmuster verwenden?",
        options: ["Fur jede Codezeile", "Bei wiederkehrenden Designproblemen", "Niemals", "Nur in grossen Projekten"],
        correctAnswer: 1, explanation: "Verwenden Sie Muster bei wiederkehrenden Designproblemen." }
    ],
    challenge: { title: "Herausforderung: Designmuster anwenden",
      description: "Identifizieren und implementieren Sie 3 verschiedene Designmuster in einem kleinen Projekt." },
    cheatSheet: { title: "Designmuster - Schnellreferenz", items: [
      { title: "Kreational", content: "Singleton, Fabrik, Builder - Objekterstellung" },
      { title: "Strukturell", content: "Adapter, Fassade, Dekorateur - Objektkomposition" },
      { title: "Verhaltensbasiert", content: "Observer, Strategie, Befehl - Objektkommunikation" },
      { title: "Wann", content: "Wiederkehrendes Problem → richtiges Muster → nicht uberkonstruieren" }
    ]}
  }
};
export default translations;
