const translations = {
  en: {
    sections: [
      { title: "Introduction to System Design", content: [
        { type: "p", text: "System design is the process of defining the architecture, components, and interfaces of a system." },
        { type: "callout", title: "What We Will Learn", text: "System design principles, scalability patterns, database design, API design, and deployment architecture." }
      ]},
      { title: "System Design Principles", content: [
        { type: "p", text: "Follow these principles to create robust, scalable, and maintainable systems." },
        { type: "callout", title: "Key Principles", text: "Separation of concerns, modularity, loose coupling, high cohesion, single source of truth." }
      ]},
      { title: "Scalability Patterns", content: [
        { type: "p", text: "Design systems that can handle growth in users, data, and traffic." },
        { type: "callout", title: "Patterns", text: "Horizontal scaling, load balancing, caching, database sharding, microservices." }
      ]},
      { title: "Database Design", content: [
        { type: "p", text: "Design your database schema to support your application's requirements efficiently." },
        { type: "callout", title: "Considerations", text: "Normalization vs denormalization, indexing, query optimization, data integrity." }
      ]},
      { title: "API Design", content: [
        { type: "p", text: "Design APIs that are intuitive, consistent, and scalable." },
        { type: "callout", title: "API Best Practices", text: "RESTful conventions, proper HTTP methods, error handling, versioning, pagination." }
      ]},
      { title: "Deployment Architecture", content: [
        { type: "p", text: "Plan how your system will be deployed, monitored, and maintained." },
        { type: "callout", title: "Architecture Options", text: "Monolith, microservices, serverless, containerized, hybrid approaches." }
      ]}
    ],
    quiz: [
      { question: "What is system design?",
        options: ["Writing code", "Defining system architecture and components", "Testing applications", "Database management"],
        correctAnswer: 1, explanation: "System design is the process of defining the architecture, components, and interfaces of a system." },
      { question: "What is horizontal scaling?",
        options: ["Adding more CPU power to one machine", "Adding more machines to handle load", "Making code run faster", "Reducing database size"],
        correctAnswer: 1, explanation: "Horizontal scaling means adding more machines/servers to distribute the load." },
      { question: "What is loose coupling?",
        options: ["Components are tightly connected", "Components have minimal dependencies on each other", "Components share the same database", "Components are written in the same language"],
        correctAnswer: 1, explanation: "Loose coupling means components have minimal dependencies, making the system more flexible." }
    ],
    challenge: { title: "Challenge: Design a System",
      description: "Design a URL shortener system. Define the architecture, database schema, and API endpoints." },
    cheatSheet: { title: "System Design Quick Reference", items: [
      { title: "Principles", content: "Separation of concerns, modularity, loose coupling" },
      { title: "Scaling", content: "Horizontal: more machines. Vertical: bigger machine" },
      { title: "Database", content: "Normalize for integrity, denormalize for performance" },
      { title: "API", content: "REST: proper methods, error handling, versioning" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction a la conception de systemes", content: [
        { type: "p", text: "La conception de systemes est le processus de definition de l'architecture et des composants." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Principes, patterns d'evolutivite, conception de bases de donnees, conception d'API." }
      ]},
      { title: "Principes de conception", content: [
        { type: "p", text: "Suivez ces principes pour creer des systemes robustes et evolutifs." },
        { type: "callout", title: "Principes cles", text: "Separation des responsabilites, modularite, faible couplage, cohesion elevee." }
      ]},
      { title: "Patterns d'evolutivite", content: [
        { type: "p", text: "Concevez des systemes capables de gerer la croissance." },
        { type: "callout", title: "Patterns", text: "Mise a l'echelle horizontale, equilibrage de charge, mise en cache, sharding." }
      ]},
      { title: "Conception de bases de donnees", content: [
        { type: "p", text: "Concevez votre schema de base de donnees pour supporter vos besoins." },
        { type: "callout", title: "Considerations", text: "Normalisation vs denormalisation, indexation, optimisation des requetes." }
      ]},
      { title: "Conception d'API", content: [
        { type: "p", text: "Concevez des API intuitives, coherentes et evolutives." },
        { type: "callout", title: "Bonnes pratiques", text: "Conventions REST, methodes HTTP, gestion des erreurs, versioning, pagination." }
      ]},
      { title: "Architecture de deploiement", content: [
        { type: "p", text: "Planifiez le deploiement, la surveillance et la maintenance." },
        { type: "callout", title: "Options", text: "Monolithe, microservices, serverless, conteneurise, hybride." }
      ]}
    ],
    quiz: [
      { question: "Qu'est-ce que la conception de systemes ?",
        options: ["Ecrire du code", "Definir l'architecture et les composants", "Tester les applications", "Gestion de bases de donnees"],
        correctAnswer: 1, explanation: "La conception de systemes definit l'architecture, les composants et les interfaces." },
      { question: "Qu'est-ce que la mise a l'echelle horizontale ?",
        options: ["Ajouter plus de CPU", "Ajouter plus de machines", "Rendre le code plus rapide", "Reduire la taille de la base"],
        correctAnswer: 1, explanation: "La mise a l'echelle horizontale signifie ajouter des machines pour distribuer la charge." },
      { question: "Qu'est-ce que le faible couplage ?",
        options: ["Composants etroitement connectes", "Composants avec dependances minimales", "Composants partagent la meme base", "Composants memes langage"],
        correctAnswer: 1, explanation: "Le faible couplage signifie des dependances minimales entre composants." }
    ],
    challenge: { title: "Defi : Concevoir un systeme",
      description: "Concevez un systeme de raccourcissement d'URL. Definissez l'architecture et les API." },
    cheatSheet: { title: "Conception de systemes - Reference rapide", items: [
      { title: "Principes", content: "Separation, modularite, faible couplage" },
      { title: "Evolutivite", content: "Horizontale : plus de machines. Verticale : machine plus grosse" },
      { title: "BDD", content: "Normaliser pour integrite, denormaliser pour performance" },
      { title: "API", content: "REST : methodes appropriees, gestion erreurs, versioning" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in das Systemdesign", content: [
        { type: "p", text: "Systemdesign ist der Prozess der Definition von Architektur, Komponenten und Schnittstellen." },
        { type: "callout", title: "Was wir lernen werden", text: "Prinzipien, Skalierungsmuster, Datenbankdesign, API-Design, Deployments-Architektur." }
      ]},
      { title: "Systemdesign-Prinzipien", content: [
        { type: "p", text: "Befolgen Sie diese Prinzipien fur robuste, skalierbare Systeme." },
        { type: "callout", title: "Schlusselprinzipien", text: "Verantwortlichkeits trennung, Modularitat, lose Kopplung, hohe Kohasion." }
      ]},
      { title: "Skalierungsmuster", content: [
        { type: "p", text: "Entwerfen Sie Systeme fur Wachstum in Benutzern und Daten." },
        { type: "callout", title: "Muster", text: "Horizontale Skalierung, Load Balancing, Caching, Sharding, Microservices." }
      ]},
      { title: "Datenbankdesign", content: [
        { type: "p", text: "Entwerfen Sie Ihr Datenbankschema effizient." },
        { type: "callout", title: "Uberlegungen", text: "Normalisierung vs Denormalisierung, Indizierung, Abfrageoptimierung." }
      ]},
      { title: "API-Design", content: [
        { type: "p", text: "Entwerfen Sie intuitive, konsistente und skalierbare APIs." },
        { type: "callout", title: "Best Practices", text: "REST-Konventionen, HTTP-Methoden, Fehlerbehandlung, Versionierung, Paginierung." }
      ]},
      { title: "Deployments-Architektur", content: [
        { type: "p", text: "Planen Sie Deployment, Uberwachung und Wartung." },
        { type: "callout", title: "Optionen", text: "Monolith, Microservices, Serverless, Containerisierte, Hybride Ansatze." }
      ]}
    ],
    quiz: [
      { question: "Was ist Systemdesign?",
        options: ["Code schreiben", "Architektur und Komponenten definieren", "Anwendungen testen", "Datenbankverwaltung"],
        correctAnswer: 1, explanation: "Systemdesign definiert Architektur, Komponenten und Schnittstellen eines Systems." },
      { question: "Was ist horizontale Skalierung?",
        options: ["Mehr CPU an einem Server", "Mehr Server hinzufugen", "Code schneller machen", "Datenbankgrosse reduzieren"],
        correctAnswer: 1, explanation: "Horizontale Skalierung bedeutet, mehr Server hinzuzufugen, um die Last zu verteilen." },
      { question: "Was ist lose Kopplung?",
        options: ["Komponenten eng verbunden", "Komponenten mit minimalen Abhangigkeiten", "Gemeinsame Datenbank", "Gleiche Sprache"],
        correctAnswer: 1, explanation: "Lose Kopplung bedeutet minimale Abhangigkeiten zwischen Komponenten." }
    ],
    challenge: { title: "Herausforderung: System entwerfen",
      description: "Entwerfen Sie ein URL-Verkurzungssystem. Definieren Sie Architektur und APIs." },
    cheatSheet: { title: "Systemdesign - Schnellreferenz", items: [
      { title: "Prinzipien", content: "Trennung, Modularitat, lose Kopplung" },
      { title: "Skalierung", content: "Horizontal: mehr Server. Vertical: grosserer Server" },
      { title: "Datenbank", content: "Normalisieren fur Integritat, Denormalisieren fur Leistung" },
      { title: "API", content: "REST: richtige Methoden, Fehlerbehandlung, Versionierung" }
    ]}
  }
};
export default translations;
