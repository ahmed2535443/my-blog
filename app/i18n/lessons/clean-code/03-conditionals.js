const translations = {
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Conditional statements are an essential part of any program. They control the flow of code execution based on conditions. In Clean Code, we focus on writing conditionals that are clear, simple, and easy to understand." },
        { type: "p", text: "In this lesson, we will learn how to write better conditional statements and avoid common mistakes that make code hard to read." },
      ]},
      { title: "What are Conditional Statements?", content: [
        { type: "p", text: "Conditional statements allow code to make decisions based on specific conditions. When a condition is true, a specific block of code executes. When false, another block may execute." },
        { type: "p", text: "The basic types of conditionals in JavaScript:" },
        { type: "li", text: "<code>if</code> statement: Executes code when condition is true" },
        { type: "li", text: "<code>if...else</code> statement: Executes code when condition is true or false" },
        { type: "li", text: "<code>if...else if...else</code> chain: Tests multiple conditions" },
        { type: "li", text: "<code>switch</code> statement: Tests a single value against multiple cases" },
      ]},
      { title: "Clean Conditional Rules", content: [
        { type: "p", text: "Rule 1: <strong>Use positive conditions</strong>. Positive conditions are easier to understand than negative ones." },
        { type: "p", text: "Rule 2: <strong>Use early returns</strong> to reduce nesting. Instead of putting all logic inside if blocks, return early when a condition is met." },
        { type: "p", text: "Rule 3: <strong>Avoid deep nesting</strong>. Deeply nested code is difficult to read and maintain. Use early returns to flatten the structure." },
        { type: "p", text: "Rule 4: <strong>Keep conditions simple</strong>. Complex conditions are hard to understand. Consider extracting them into well-named functions." },
      ]},
      { title: "Extracting Complex Conditions", content: [
        { type: "p", text: "When you have complex conditions, consider extracting them into well-named functions. This makes code more readable and self-documenting." },
        { type: "p", text: "Benefits of extracting conditions:" },
        { type: "li", text: "Makes code self-documenting" },
        { type: "li", text: "Makes conditions reusable" },
        { type: "li", text: "Makes code easier to test" },
      ]},
      { title: "Using Early Returns", content: [
        { type: "p", text: "Early returns reduce nesting and make code clearer. Instead of wrapping all logic in an if block, return early when a condition is met." },
        { type: "callout", title: "Tip", text: "Apply the early return pattern in your code. This will reduce nesting and make functions clearer and easier to read." },
      ]},
      { title: "Using Guard Clauses", content: [
        { type: "p", text: "Guard clauses are conditions at the beginning of a function that handle edge cases and errors first. Then the main function logic runs without nested conditions." },
        { type: "p", text: "Benefits of guard clauses:" },
        { type: "li", text: "Handle errors and edge cases first" },
        { type: "li", text: "Reduce nesting and complexity" },
        { type: "li", text: "Make main function logic clearer" },
        { type: "li", text: "Make code easier to read and maintain" },
      ]},
    ],
    quiz: [
      { question: "Which of the following is the best practice for writing conditionals in Clean Code?", options: ["Use negative conditions", "Use deep nesting", "Use early returns and guard clauses", "Keep all logic inside if blocks"], explanation: "Using early returns and guard clauses is best practice. It reduces nesting and makes code clearer and easier to read." },
    ],
    challenge: { title: "Challenge: Improve the conditionals", description: "The following code uses negative conditions and deep nesting. Improve it using Clean Code techniques." },
    cheatSheet: { title: "Conditionals Cheat Sheet", items: [
      { term: "Use positive conditions", definition: "Prefer positive conditions over negative ones" },
      { term: "Use early returns", definition: "Return early when a condition is met to reduce nesting" },
      { term: "Use guard clauses", definition: "Handle errors and edge cases first, then run main logic" },
      { term: "Extract complex conditions", definition: "Turn complex conditions into well-named functions" },
      { term: "Avoid deep nesting", definition: "Use early returns to flatten code structure" },
      { term: "Keep conditions simple", definition: "Avoid complex conditions in if statements" },
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Les instructions conditionnelles font partie essentielle de tout programme. Elles contrôlent le flux d'exécution du code en fonction de conditions. Dans le Code Propre, nous nous concentrons sur l'écriture de conditionnels clairs, simples et faciles à comprendre." },
        { type: "p", text: "Dans cette leçon, nous apprendrons comment écrire de meilleures instructions conditionnelles et éviter les erreurs courantes qui rendent le code difficile à lire." },
      ]},
      { title: "Qu'est-ce que les instructions conditionnelles ?", content: [
        { type: "p", text: "Les instructions conditionnelles permettent au code de prendre des décisions basées sur des conditions spécifiques. Lorsqu'une condition est vraie, un bloc de code spécifique s'exécute. Lorsqu'elle est fausse, un autre bloc peut s'exécuter." },
        { type: "p", text: "Les types de base de conditionnels en JavaScript :" },
        { type: "li", text: "Instruction <code>if</code> : Exécute le code quand la condition est vraie" },
        { type: "li", text: "Instruction <code>if...else</code> : Exécute le code quand la condition est vraie ou fausse" },
        { type: "li", text: "Chaîne <code>if...else if...else</code> : Teste plusieurs conditions" },
        { type: "li", text: "Instruction <code>switch</code> : Teste une seule valeur contre plusieurs cas" },
      ]},
      { title: "Règles des conditionnels propres", content: [
        { type: "p", text: "Règle 1 : <strong>Utilisez des conditions positives</strong>. Les conditions positives sont plus faciles à comprendre que les négatives." },
        { type: "p", text: "Règle 2 : <strong>Utilisez des retours anticipés</strong> pour réduire l'imbrication. Au lieu de mettre toute la logique dans des blocs if, retournez tôt lorsqu'une condition est remplie." },
        { type: "p", text: "Règle 3 : <strong>Évitez l'imbrication profonde</strong>. Le code profondément imbriqué est difficile à lire et à maintenir. Utilisez des retours anticipés pour aplatir la structure." },
        { type: "p", text: "Règle 4 : <strong>Gardez les conditions simples</strong>. Les conditions complexes sont difficiles à comprendre. Envisagez de les extraire dans des fonctions bien nommées." },
      ]},
      { title: "Extraction des conditions complexes", content: [
        { type: "p", text: "Lorsque vous avez des conditions complexes, envisagez de les extraire dans des fonctions bien nommées. Cela rend le code plus lisible et auto-documenté." },
        { type: "p", text: "Avantages de l'extraction des conditions :" },
        { type: "li", text: "Rend le code auto-documenté" },
        { type: "li", text: "Rend les conditions réutilisables" },
        { type: "li", text: "Rend le code plus facile à tester" },
      ]},
      { title: "Utilisation des retours anticipés", content: [
        { type: "p", text: "Les retours anticipés réduisent l'imbrication et rendent le code plus clair. Au lieu d'envelopper toute la logique dans un bloc if, retournez tôt lorsqu'une condition est remplie." },
        { type: "callout", title: "Conseil", text: "Appliquez le modèle de retour anticipé dans votre code. Cela réduira l'imbrication et rendra les fonctions plus claires et plus faciles à lire." },
      ]},
      { title: "Utilisation des clauses gardiennes", content: [
        { type: "p", text: "Les clauses gardiennes sont des conditions au début d'une fonction qui gèrent d'abord les cas limites et les erreurs. Ensuite, la logique principale de la fonction s'exécute sans conditions imbriquées." },
        { type: "p", text: "Avantages des clauses gardiennes :" },
        { type: "li", text: "Gèrent les erreurs et cas limites en premier" },
        { type: "li", text: "Réduisent l'imbrication et la complexité" },
        { type: "li", text: "Rendent la logique principale de la fonction plus claire" },
        { type: "li", text: "Rendent le code plus facile à lire et à maintenir" },
      ]},
    ],
    quiz: [
      { question: "Laquelle des suivantes est la meilleure pratique pour écrire des conditionnels dans le Code Propre ?", options: ["Utiliser des conditions négatives", "Utiliser une imbrication profonde", "Utiliser des retours anticipés et des clauses gardiennes", "Garder toute la logique dans des blocs if"], explanation: "Utiliser des retours anticipés et des clauses gardiennes est la meilleure pratique. Cela réduit l'imbrication et rend le code plus clair et plus facile à lire." },
    ],
    challenge: { title: "Défi : Améliorez les conditionnels", description: "Le code suivant utilise des conditions négatives et une imbrication profonde. Améliorez-le en utilisant les techniques du Code Propre." },
    cheatSheet: { title: "Référence des conditionnels", items: [
      { term: "Utiliser des conditions positives", definition: "Préférez les conditions positives aux négatives" },
      { term: "Utiliser des retours anticipés", definition: "Retournez tôt quand une condition est remplie pour réduire l'imbrication" },
      { term: "Utiliser des clauses gardiennes", definition: "Gérez les erreurs et cas limites en premier, puis exécutez la logique principale" },
      { term: "Extraire les conditions complexes", definition: "Transformez les conditions complexes en fonctions bien nommées" },
      { term: "Éviter l'imbrication profonde", definition: "Utilisez des retours anticipés pour aplatir la structure du code" },
      { term: "Garder les conditions simples", definition: "Évitez les conditions complexes dans les instructions if" },
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "Bedingte Anweisungen sind ein wesentlicher Teil jedes Programms. Sie steuern den Fluss der Codeausführung basierend auf Bedingungen. In sauberem Code konzentrieren wir uns auf das Schreiben klarer, einfacher und leicht verständlicher Bedingungen." },
        { type: "p", text: "In dieser Lektion lernen wir, wie man bessere bedingte Anweisungen schreibt und häufige Fehler vermeidet, die Code schwer lesbar machen." },
      ]},
      { title: "Was sind bedingte Anweisungen?", content: [
        { type: "p", text: "Bedingte Anweisungen ermöglichen es dem Code, Entscheidungen auf der Grundlage bestimmter Bedingungen zu treffen. Wenn eine Bedingung wahr ist, wird ein bestimmter Codeblock ausgeführt. Wenn falsch, kann ein anderer Block ausgeführt werden." },
        { type: "p", text: "Die grundlegenden Arten von Bedingungen in JavaScript:" },
        { type: "li", text: "<code>if</code>-Anweisung: Führt Code aus, wenn die Bedingung wahr ist" },
        { type: "li", text: "<code>if...else</code>-Anweisung: Führt Code aus, wenn die Bedingung wahr oder falsch ist" },
        { type: "li", text: "<code>if...else if...else</code>-Kette: Testet mehrere Bedingungen" },
        { type: "li", text: "<code>switch</code>-Anweisung: Testet einen einzigen Wert gegen mehrere Fälle" },
      ]},
      { title: "Regeln für saubere Bedingungen", content: [
        { type: "p", text: "Regel 1: <strong>Verwenden Sie positive Bedingungen</strong>. Positive Bedingungen sind leichter zu verstehen als negative." },
        { type: "p", text: "Regel 2: <strong>Verwenden Sie vorzeitige Rückgaben</strong>, um Verschachtelung zu reduzieren. Anstatt die gesamte Logik in if-Blöcken unterzubringen, kehren Sie früh zurück, wenn eine Bedingung erfüllt ist." },
        { type: "p", text: "Regel 3: <strong>Vermeiden Sie tiefe Verschachtelung</strong>. Tief verschachtelter Code ist schwer lesbar und wartbar. Verwenden Sie vorzeitige Rückgaben, um die Struktur zu flachen." },
        { type: "p", text: "Regel 4: <strong>Halten Sie Bedingungen einfach</strong>. Komplexe Bedingungen sind schwer zu verstehen. Erwägen Sie, sie in gut benannte Funktionen auszulagern." },
      ]},
      { title: "Extrahieren komplexer Bedingungen", content: [
        { type: "p", text: "Wenn Sie komplexe Bedingungen haben, erwägen Sie, sie in gut benannte Funktionen auszulagern. Dies macht Code lesbarer und selbst dokumentierend." },
        { type: "p", text: "Vorteile der Bedingungsextraktion:" },
        { type: "li", text: "Macht Code selbst dokumentierend" },
        { type: "li", text: "Macht Bedingungen wiederverwendbar" },
        { type: "li", text: "Macht Code leichter zu testen" },
      ]},
      { title: "Verwendung vorzeitiger Rückgaben", content: [
        { type: "p", text: "Vorzeitige Rückgaben reduzieren Verschachtelung und machen Code klarer. Anstatt die gesamte Logik in einen if-Block zu verpacken, kehren Sie früh zurück, wenn eine Bedingung erfüllt ist." },
        { type: "callout", title: "Tipp", text: "Wenden Sie das Muster der vorzeitigen Rückgabe in Ihrem Code an. Dies wird Verschachtelung reduzieren und Funktionen klarer und leichter lesbar machen." },
      ]},
      { title: "Verwendung von Guard Clauses", content: [
        { type: "p", text: "Guard Clauses sind Bedingungen am Anfang einer Funktion, die zuerst Randfälle und Fehler behandeln. Dann läuft die Hauptfunktionslogik ohne verschachtelte Bedingungen." },
        { type: "p", text: "Vorteile von Guard Clauses:" },
        { type: "li", text: "Behandeln Fehler und Randfälle zuerst" },
        { type: "li", text: "Reduzieren Verschachtelung und Komplexität" },
        { type: "li", text: "Machen die Hauptfunktionslogik klarer" },
        { type: "li", text: "Machen Code leichter lesbar und wartbar" },
      ]},
    ],
    quiz: [
      { question: "Welche der folgenden ist die beste Praxis für das Schreiben von Bedingungen in sauberem Code?", options: ["Negative Bedingungen verwenden", "Tiefe Verschachtelung verwenden", "Vorzeitige Rückgaben und Guard Clauses verwenden", "Gesamte Logik in if-Blöcken belassen"], explanation: "Vorzeitige Rückgaben und Guard Clauses verwenden ist die beste Praxis. Es reduziert Verschachtelung und macht Code klarer und leichter lesbar." },
    ],
    challenge: { title: "Herausforderung: Verbessern Sie die Bedingungen", description: "Der folgende Code verwendet negative Bedingungen und tiefe Verschachtelung. Verbessern Sie ihn mit sauberen Code-Techniken." },
    cheatSheet: { title: "Übersicht über Bedingungen", items: [
      { term: "Positive Bedingungen verwenden", definition: "Bevorzugen Sie positive Bedingungen gegenüber negativen" },
      { term: "Vorzeitige Rückgaben verwenden", definition: "Kehren Sie früh zurück, wenn eine Bedingung erfüllt ist, um Verschachtelung zu reduzieren" },
      { term: "Guard Clauses verwenden", definition: "Behandeln Sie Fehler und Randfälle zuerst, dann führen Sie die Hauptlogik aus" },
      { term: "Komplexe Bedingungen extrahieren", definition: "Verwandeln Sie komplexe Bedingungen in gut benannte Funktionen" },
      { term: "Tiefe Verschachtelung vermeiden", definition: "Verwenden Sie vorzeitige Rückgaben, um die Codestruktur zu flachen" },
      { term: "Bedingungen einfach halten", definition: "Vermeiden Sie komplexe Bedingungen in if-Anweisungen" },
    ]}
  },
};

export default translations;
