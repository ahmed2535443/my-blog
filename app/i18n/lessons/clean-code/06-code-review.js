const translations = {
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Code review is a critical practice in software development where developers review each other's code to improve quality, catch bugs early, and share knowledge. It is one of the most effective ways to improve code quality and maintain Clean Code standards." },
        { type: "p", text: "In this lesson, we will learn how to perform effective code reviews and how to give and receive feedback professionally." },
      ]},
      { title: "Why Code Review Matters", content: [
        { type: "p", text: "Code review provides many benefits to both the individual developer and the team:" },
        { type: "li", text: "<strong>Catches bugs early:</strong> Finding issues before they reach production saves time and money" },
        { type: "li", text: "<strong>Improves code quality:</strong> Fresh eyes can spot problems the author missed" },
        { type: "li", text: "<strong>Shares knowledge:</strong> Team members learn from each other's code" },
        { type: "li", text: "<strong>Enforces standards:</strong> Ensures everyone follows the same coding standards" },
        { type: "li", text: "<strong>Reduces technical debt:</strong> Prevents poor code from accumulating" },
      ]},
      { title: "What to Look for in Code Review", content: [
        { type: "p", text: "When reviewing code, focus on these key areas:" },
        { type: "li", text: "<strong>Correctness:</strong> Does the code do what it's supposed to do?" },
        { type: "li", text: "<strong>Readability:</strong> Is the code easy to understand?" },
        { type: "li", text: "<strong>Maintainability:</strong> Will the code be easy to modify in the future?" },
        { type: "li", text: "<strong>Performance:</strong> Are there any performance issues?" },
        { type: "li", text: "<strong>Security:</strong> Are there any security vulnerabilities?" },
        { type: "li", text: "<strong>Testing:</strong> Are there adequate tests?" },
      ]},
      { title: "How to Give Feedback", content: [
        { type: "p", text: "Giving feedback is an art. Here are some guidelines:" },
        { type: "li", text: "<strong>Be respectful:</strong> Critique the code, not the person" },
        { type: "li", text: "<strong>Be specific:</strong> Point to exact lines and explain the issue" },
        { type: "li", text: "<strong>Explain why:</strong> Don't just say \"change this\" - explain why it should change" },
        { type: "li", text: "<strong>Ask questions:</strong> Instead of making assumptions, ask why the code was written that way" },
        { type: "li", text: "<strong>Suggest alternatives:</strong> Offer better solutions when possible" },
      ]},
      { title: "How to Receive Feedback", content: [
        { type: "p", text: "Receiving feedback gracefully is equally important:" },
        { type: "li", text: "<strong>Stay calm:</strong> Don't take feedback personally" },
        { type: "li", text: "<strong>Ask for clarification:</strong> If you don't understand a comment, ask" },
        { type: "li", text: "<strong>Be open:</strong> Consider the feedback carefully before dismissing it" },
        { type: "li", text: "<strong>Learn:</strong> Use feedback as a learning opportunity" },
        { type: "li", text: "<strong>Thank the reviewer:</strong> Appreciate the time and effort spent" },
      ]},
      { title: "Code Review Best Practices", content: [
        { type: "p", text: "Follow these best practices for effective code reviews:" },
        { type: "li", text: "<strong>Keep reviews small:</strong> Smaller changes are easier to review" },
        { type: "li", text: "<strong>Review promptly:</strong> Don't let reviews sit for too long" },
        { type: "li", text: "<strong>Use checklists:</strong> Create a checklist of things to look for" },
        { type: "li", text: "<strong>Automate what you can:</strong> Use linters and formatters for style issues" },
        { type: "li", text: "<strong>Focus on important issues:</strong> Don't get caught up in minor style issues" },
      ]},
    ],
    quiz: [
      { question: "What is the most important aspect of code review?", options: ["Finding all bugs", "Improving code quality", "Checking code style only", "Completing reviews quickly"], explanation: "Code review is primarily about improving code quality. While finding bugs is important, the overall goal is to ensure the code is maintainable, readable, and follows best practices." },
    ],
    challenge: { title: "Challenge: Perform a code review", description: "Review the following code and provide constructive feedback on how to improve it." },
    cheatSheet: { title: "Code Review Cheat Sheet", items: [
      { term: "Why review?", definition: "Catch bugs early, improve quality, share knowledge, enforce standards" },
      { term: "What to look for", definition: "Correctness, readability, maintainability, performance, security, testing" },
      { term: "Giving feedback", definition: "Be respectful, specific, explain why, ask questions, suggest alternatives" },
      { term: "Receiving feedback", definition: "Stay calm, ask for clarification, be open, learn, thank the reviewer" },
      { term: "Best practices", definition: "Keep reviews small, review promptly, use checklists, automate what you can" },
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "La revue de code est une pratique critique dans le développement logiciel où les développeurs examinent le code des autres pour améliorer la qualité, attraper les bugs tôt et partager les connaissances. C'est l'un des moyens les plus efficaces d'améliorer la qualité du code et de maintenir les standards du Code Propre." },
        { type: "p", text: "Dans cette leçon, nous apprendrons comment effectuer des revues de code efficaces et comment donner et recevoir des retours professionnellement." },
      ]},
      { title: "Pourquoi la revue de code est importante", content: [
        { type: "p", text: "La revue de code offre de nombreux avantages au développeur individuel et à l'équipe :" },
        { type: "li", text: "<strong>Attrape les bugs tôt :</strong> Trouver les problèmes avant qu'ils n'atteignent la production économise du temps et de l'argent" },
        { type: "li", text: "<strong>Améliore la qualité du code :</strong> Un œil frais peut repérer des problèmes que l'auteur a manqués" },
        { type: "li", text: "<strong>Partage les connaissances :</strong> Les membres de l'équipe apprennent du code des autres" },
        { type: "li", text: "<strong>Applique les standards :</strong> S'assure que tout le monde suit les mêmes standards de codage" },
        { type: "li", text: "<strong>Réduit la dette technique :</strong> Empêche le mauvais code de s'accumuler" },
      ]},
      { title: "Ce qu'il faut rechercher lors de la revue de code", content: [
        { type: "p", text: "Lorsque vous examinez du code, concentrez-vous sur ces domaines clés :" },
        { type: "li", text: "<strong>Correctitude :</strong> Le code fait-il ce qu'il est censé faire ?" },
        { type: "li", text: "<strong>Lisibilité :</strong> Le code est-il facile à comprendre ?" },
        { type: "li", text: "<strong>Maintenabilité :</strong> Le code sera-t-il facile à modifier dans le futur ?" },
        { type: "li", text: "<strong>Performance :</strong> Y a-t-il des problèmes de performance ?" },
        { type: "li", text: "<strong>Sécurité :</strong> Y a-t-il des vulnérabilités de sécurité ?" },
        { type: "li", text: "<strong>Tests :</strong> Y a-t-il des tests adéquats ?" },
      ]},
      { title: "Comment donner des retours", content: [
        { type: "p", text: "Donner des retours est un art. Voici quelques directives :" },
        { type: "li", text: "<strong>Soyez respectueux :</strong> Critiquez le code, pas la personne" },
        { type: "li", text: "<strong>Soyez spécifique :</strong> Pointez vers des lignes exactes et expliquez le problème" },
        { type: "li", text: "<strong>Expliquez pourquoi :</strong> Ne dites pas simplement \"changez cela\" - expliquez pourquoi cela devrait changer" },
        { type: "li", text: "<strong>Posez des questions :</strong> Au lieu de faire des hypothèses, demandez pourquoi le code a été écrit de cette façon" },
        { type: "li", text: "<strong>Suggérez des alternatives :</strong> Offrez de meilleures solutions quand c'est possible" },
      ]},
      { title: "Comment recevoir des retours", content: [
        { type: "p", text: "Recevoir des retours gracieusement est tout aussi important :" },
        { type: "li", text: "<strong>Restez calme :</strong> Ne prenez pas les retours personnellement" },
        { type: "li", text: "<strong>Demandez des clarifications :</strong> Si vous ne comprenez pas un commentaire, demandez" },
        { type: "li", text: "<strong>Soyez ouvert :</strong> Considérez les retours attentivement avant de les rejeter" },
        { type: "li", text: "<strong>Apprenez :</strong> Utilisez les retours comme opportunité d'apprentissage" },
        { type: "li", text: "<strong>Remerciez le réviseur :</strong> Appréciez le temps et l'effort investis" },
      ]},
      { title: "Meilleures pratiques de revue de code", content: [
        { type: "p", text: "Suivez ces meilleures pratiques pour des revues de code efficaces :" },
        { type: "li", text: "<strong>Gardez les revues petites :</strong> Les petits changements sont plus faciles à examiner" },
        { type: "li", text: "<strong>Examinez rapidement :</strong> Ne laissez pas les revues traîner trop longtemps" },
        { type: "li", text: "<strong>Utilisez des checklists :</strong> Créez une liste de contrôle des choses à rechercher" },
        { type: "li", text: "<strong>Automatisez ce que vous pouvez :</strong> Utilisez des linters et formatteurs pour les problèmes de style" },
        { type: "li", text: "<strong>Concentrez-vous sur les problèmes importants :</strong> Ne vous attardez pas sur les problèmes de style mineurs" },
      ]},
    ],
    quiz: [
      { question: "Quel est l'aspect le plus important de la revue de code ?", options: ["Trouver tous les bugs", "Améliorer la qualité du code", "Vérifier le style du code uniquement", "Terminer les revues rapidement"], explanation: "La revue de code vise principalement à améliorer la qualité du code. Bien que trouver des bugs soit important, l'objectif global est de s'assurer que le code est maintenable, lisible et suit les meilleures pratiques." },
    ],
    challenge: { title: "Défi : Effectuez une revue de code", description: "Examinez le code suivant et fournissez des retours constructifs sur la manière de l'améliorer." },
    cheatSheet: { title: "Référence de la revue de code", items: [
      { term: "Pourquoi revue ?", definition: "Attraper les bugs tôt, améliorer la qualité, partager les connaissances, appliquer les standards" },
      { term: "Ce qu'il faut rechercher", definition: "Correctitude, lisibilité, maintenabilité, performance, sécurité, tests" },
      { term: "Donner des retours", definition: "Soyez respectueux, spécifique, expliquez pourquoi, posez des questions, suggérez des alternatives" },
      { term: "Recevoir des retours", definition: "Restez calme, demandez des clarifications, soyez ouvert, apprenez, remerciez le réviseur" },
      { term: "Meilleures pratiques", definition: "Gardez les revues petites, examinez rapidement, utilisez des checklists, automatisez ce que vous pouvez" },
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "Code-Review ist eine kritische Praxis in der Softwareentwicklung, bei der Entwickler den Code anderer überprüfen, um die Qualität zu verbessern, Fehler frühzeitig zu finden und Wissen zu teilen. Es ist eine der effektivsten Methoden, um die Codequalität zu verbessern und Sauber-Code-Standards aufrechtzuerhalten." },
        { type: "p", text: "In dieser Lektion lernen wir, wie man effektive Code-Reviews durchführt und wie man Feedback professionell gibt und empfängt." },
      ]},
      { title: "Warum Code-Review wichtig ist", content: [
        { type: "p", text: "Code-Review bietet viele Vorteile für den einzelnen Entwickler und das Team:" },
        { type: "li", text: "<strong>Findet Fehler früh:</strong> Probleme zu finden, bevor sie die Produktion erreichen, spart Zeit und Geld" },
        { type: "li", text: "<strong>Verbessert die Codequalität:</strong> Ein frischer Blick kann Probleme entdecken, die der Autor übersehen hat" },
        { type: "li", text: "<strong>Teilt Wissen:</strong> Teammitglieder lernen vom Code der anderen" },
        { type: "li", text: "<strong>Setzt Standards durch:</strong> Stellt sicher, dass alle denselben Coding-Standard einhalten" },
        { type: "li", text: "<strong>Reduziert technische Schulden:</strong> Verhindert, dass schlechter Code sich ansammelt" },
      ]},
      { title: "Was bei Code-Review zu suchen ist", content: [
        { type: "p", text: "Bei der Überprüfung von Code konzentrieren Sie sich auf diese Schlüsselbereiche:" },
        { type: "li", text: "<strong>Korrektheit:</strong> Macht der Code das, was er soll?" },
        { type: "li", text: "<strong>Lesbarkeit:</strong> Ist der Code leicht zu verstehen?" },
        { type: "li", text: "<strong>Wartbarkeit:</strong> Wird der Code in Zukunft leicht zu ändern sein?" },
        { type: "li", text: "<strong>Leistung:</strong> Gibt es Leistungsprobleme?" },
        { type: "li", text: "<strong>Sicherheit:</strong> Gibt es Sicherheitslücken?" },
        { type: "li", text: "<strong>Tests:</strong> Gibt es angemessene Tests?" },
      ]},
      { title: "Wie man Feedback gibt", content: [
        { type: "p", text: "Feedback zu geben ist eine Kunst. Hier sind einige Richtlinien:" },
        { type: "li", text: "<strong>Seien Sie respektvoll:</strong> Kritisieren Sie den Code, nicht die Person" },
        { type: "li", text: "<strong>Seien Sie spezifisch:</strong> Weisen Sie auf genaue Zeilen hin und erklären Sie das Problem" },
        { type: "li", text: "<strong>Erklären Sie warum:</strong> Sagen Sie nicht einfach \"ändern Sie das\" - erklären Sie, warum es geändert werden sollte" },
        { type: "li", text: "<strong>Stellen Sie Fragen:</strong> Stellen Sie Annahmen, fragen Sie, warum der Code so geschrieben wurde" },
        { type: "li", text: "<strong>Schlagen Sie Alternativen vor:</strong> Bieten Sie bessere Lösungen an, wenn möglich" },
      ]},
      { title: "Wie man Feedback empfängt", content: [
        { type: "p", text: "Feedback galant zu empfangen ist ebenso wichtig:" },
        { type: "li", text: "<strong>Bleiben Sie ruhig:</strong> Nehmen Sie Feedback nicht persönlich" },
        { type: "li", text: "<strong>Bitte um Klarheit:</strong> Wenn Sie einen Kommentar nicht verstehen, fragen Sie" },
        { type: "li", text: "<strong>Seien Sie offen:</strong> Betrachten Sie das Feedback sorgfältig, bevor Sie es verwerfen" },
        { type: "li", text: "<strong>Lernen Sie:</strong> Nutzen Sie Feedback als Lernmöglichkeit" },
        { type: "li", text: "<strong>Danken Sie dem Reviewer:</strong> Schätzen Sie die investierte Zeit und Mühe" },
      ]},
      { title: "Best Practices für Code-Review", content: [
        { type: "p", text: "Befolgen Sie diese Best Practices für effektive Code-Reviews:" },
        { type: "li", text: "<strong>Halten Sie Reviews klein:</strong> Kleinere Änderungen sind leichter zu überprüfen" },
        { type: "li", text: "<strong>Überprüfen Sie sofort:</strong> Lassen Sie Reviews nicht zu lange liegen" },
        { type: "li", text: "<strong>Verwenden Sie Checklisten:</strong> Erstellen Sie eine Checkliste mit Dingen, nach denen Sie suchen" },
        { type: "li", text: "<strong>Automatisieren Sie, was Sie können:</strong> Verwenden Sie Linter und Formatter für Stilprobleme" },
        { type: "li", text: "<strong>Konzentrieren Sie sich auf wichtige Probleme:</strong> Verlieren Sie sich nicht in minoritären Stilproblemen" },
      ]},
    ],
    quiz: [
      { question: "Was ist der wichtigste Aspekt von Code-Review?", options: ["Alle Fehler finden", "Codequalität verbessern", "Nur Code-Stil überprüfen", "Reviews schnell abschließen"], explanation: "Code-Review dient hauptsächlich der Verbesserung der Codequalität. Fehler zu finden ist wichtig, aber das Gesamtsziel ist sicherzustellen, dass Code wartbar, lesbar und nach Best Practices ist." },
    ],
    challenge: { title: "Herausforderung: Führen Sie ein Code-Review durch", description: "Überprüfen Sie den folgenden Code und geben Sie konstruktives Feedback zu dessen Verbesserung." },
    cheatSheet: { title: "Übersicht über Code-Review", items: [
      { term: "Warum Review?", definition: "Frühzeitig Fehler finden, Qualität verbessern, Wissen teilen, Standards durchsetzen" },
      { term: "Was suchen", definition: "Korrektheit, Lesbarkeit, Wartbarkeit, Leistung, Sicherheit, Tests" },
      { term: "Feedback geben", definition: "Respektvoll, spezifisch, Warum erklären, Fragen stellen, Alternativen vorschlagen" },
      { term: "Feedback empfangen", definition: "Ruhig bleiben, um Klarheit bitten, offen sein, lernen, Reviewer danken" },
      { term: "Best Practices", definition: "Reviews klein halten, sofort überprüfen, Checklisten verwenden, automatisieren" },
    ]}
  },
};

export default translations;
