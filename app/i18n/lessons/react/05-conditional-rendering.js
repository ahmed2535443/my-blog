const translations = {
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Conditional rendering is the ability to render different UI elements based on certain conditions. It allows you to create dynamic and responsive user interfaces." },
        { type: "p", text: "In this lesson, we will learn different techniques for conditional rendering in React." },
      ]},
      { title: "What is Conditional Rendering?", content: [
        { type: "p", text: "Conditional rendering in React works the same way as conditions in JavaScript. You can use if statements, ternary operators, or logical && to render different content." },
        { type: "p", text: "Common use cases:" },
        { type: "li", text: "Show/hide elements based on user authentication" },
        { type: "li", text: "Display different content based on user roles" },
        { type: "li", text: "Show loading states" },
        { type: "li", text: "Display error messages" },
      ]},
      { title: "Using If Statements", content: [
        { type: "p", text: "The simplest way to conditionally render is to use an if statement. You can return different JSX based on a condition." },
        { type: "p", text: "This approach works well when you have mutually exclusive conditions." },
      ]},
      { title: "Using Ternary Operator", content: [
        { type: "p", text: "The ternary operator is a concise way to render one of two elements based on a condition. It's often used for simple conditional rendering." },
        { type: "p", text: "Syntax: condition ? elementIfTrue : elementIfFalse" },
        { type: "callout", title: "Tip", text: "Keep ternary operators simple. If the logic is complex, consider using an if statement or extracting into a separate variable." },
      ]},
      { title: "Using Logical &&", content: [
        { type: "p", text: "The logical && operator is useful when you want to render something or nothing. It's often used for showing elements conditionally." },
        { type: "p", text: "Syntax: condition && element" },
        { type: "p", text: "Note: Be careful with falsy values like 0, as they won't render but won't show an error either." },
      ]},
      { title: "Using Switch Statements", content: [
        { type: "p", text: "For multiple conditions, you can use a switch statement or if-else chain. This is useful when you have many possible outcomes." },
        { type: "p", text: "Switch statements work well when you have more than 3 possible outcomes." },
      ]},
      { title: "Extracting to Variables", content: [
        { type: "p", text: "When you have complex conditional logic, you can extract the conditions into variables before the return statement. This makes the JSX cleaner and more readable." },
        { type: "p", text: "Benefits of extracting to variables:" },
        { type: "li", text: "Makes JSX cleaner" },
        { type: "li", text: "Easier to understand the logic" },
        { type: "li", text: "Can be reused in different parts of the component" },
      ]},
      { title: "Preventing Rendering", content: [
        { type: "p", text: "Sometimes you want to prevent a component from rendering at all. You can return null to skip rendering." },
        { type: "p", text: "Returning null doesn't affect the component's lifecycle - it just doesn't produce any visual output." },
      ]},
    ],
    quiz: [
      { question: "What is the correct way to conditionally render an element in React?", options: ["Use v-if directive", "Use v-show directive", "Use ternary operator or &&", "Use ng-if directive"], explanation: "React uses JavaScript expressions for conditional rendering. The most common approaches are the ternary operator (condition ? A : B) and logical && (condition && A)." },
    ],
    challenge: { title: "Challenge: Build a conditional UI", description: "Create a component that shows different content based on user status: logged in, logged out, or loading." },
    cheatSheet: { title: "Conditional Rendering Cheat Sheet", items: [
      { term: "If statement", definition: "Return different JSX based on condition" },
      { term: "Ternary operator", definition: "condition ? elementIfTrue : elementIfFalse" },
      { term: "Logical &&", definition: "condition && element (render or nothing)" },
      { term: "Switch statement", definition: "For multiple conditions (more than 3 outcomes)" },
      { term: "Extract to variables", definition: "Make complex conditions cleaner in JSX" },
      { term: "Return null", definition: "Prevent component from rendering" },
      { term: "Avoid complex ternaries", definition: "Keep conditions simple, extract if complex" },
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Le rendu conditionnel est la capacité d'afficher des éléments UI différents en fonction de certaines conditions. Il vous permet de créer des interfaces utilisateur dynamiques et réactives." },
        { type: "p", text: "Dans cette leçon, nous apprendrons différentes techniques de rendu conditionnel dans React." },
      ]},
      { title: "Qu'est-ce que le rendu conditionnel ?", content: [
        { type: "p", text: "Le rendu conditionnel dans React fonctionne de la même manière que les conditions en JavaScript. Vous pouvez utiliser des instructions if, des opérateurs ternaires ou des && logiques pour afficher du contenu différent." },
        { type: "p", text: "Cas d'utilisation courants :" },
        { type: "li", text: "Afficher/masquer des éléments selon l'authentification utilisateur" },
        { type: "li", text: "Afficher du contenu différent selon les rôles utilisateur" },
        { type: "li", text: "Afficher des états de chargement" },
        { type: "li", text: "Afficher des messages d'erreur" },
      ]},
      { title: "Utiliser les instructions if", content: [
        { type: "p", text: "La manière la plus simple de rendre conditionnellement est d'utiliser une instruction if. Vous pouvez retourner du JSX différent en fonction d'une condition." },
        { type: "p", text: "Cette approche fonctionne bien quand vous avez des conditions mutuellement exclusives." },
      ]},
      { title: "Utiliser l'opérateur ternaire", content: [
        { type: "p", text: "L'opérateur ternaire est une manière concise d'afficher l'un de deux éléments en fonction d'une condition. Il est souvent utilisé pour un rendu conditionnel simple." },
        { type: "p", text: "Syntaxe : condition ? elementSiVrai : elementSiFaux" },
        { type: "callout", title: "Conseil", text: "Gardez les opérateurs ternaires simples. Si la logique est complexe, envisagez d'utiliser une instruction if ou d'extraire dans une variable séparée." },
      ]},
      { title: "Utiliser les && logiques", content: [
        { type: "p", text: "L'opérateur && logique est utile quand vous voulez afficher quelque chose ou rien. Il est souvent utilisé pour afficher des éléments conditionnellement." },
        { type: "p", text: "Syntaxe : condition && element" },
        { type: "p", text: "Note : Soyez prudent avec les valeurs fausses comme 0, car elles ne s'afficheront pas mais ne montreront pas non plus d'erreur." },
      ]},
      { title: "Utiliser les instructions switch", content: [
        { type: "p", text: "Pour plusieurs conditions, vous pouvez utiliser une instruction switch ou une chaîne if-else. C'est utile quand vous avez de nombreux résultats possibles." },
        { type: "p", text: "Les instructions switch fonctionnent bien quand vous avez plus de 3 résultats possibles." },
      ]},
      { title: "Extraction dans des variables", content: [
        { type: "p", text: "Quand vous avez une logique conditionnelle complexe, vous pouvez extraire les conditions dans des variables avant l'instruction return. Cela rend le JSX plus propre et plus lisible." },
        { type: "p", text: "Avantages de l'extraction dans des variables :" },
        { type: "li", text: "Rend le JSX plus propre" },
        { type: "li", text: "Plus facile de comprendre la logique" },
        { type: "li", text: "Peut être réutilisée dans différentes parties du composant" },
      ]},
      { title: "Empêcher le rendu", content: [
        { type: "p", text: "Parfois, vous voulez empêcher un composant de se rendre du tout. Vous pouvez retourner null pour sauter le rendu." },
        { type: "p", text: "Retourner null n'affecte pas le cycle de vie du composant - il ne produit simplement aucune sortie visuelle." },
      ]},
    ],
    quiz: [
      { question: "Quelle est la bonne façon de rendre conditionnellement un élément dans React ?", options: ["Utiliser la directive v-if", "Utiliser la directive v-show", "Utiliser l'opérateur ternaire ou &&", "Utiliser la directive ng-if"], explanation: "React utilise les expressions JavaScript pour le rendu conditionnel. Les approches les plus courantes sont l'opérateur ternaire (condition ? A : B) et && logique (condition && A)." },
    ],
    challenge: { title: "Défi : Construisez une interface conditionnelle", description: "Créez un composant qui affiche du contenu différent selon le statut de l'utilisateur : connecté, déconnecté, ou en cours de chargement." },
    cheatSheet: { title: "Référence du rendu conditionnel", items: [
      { term: "Instruction if", definition: "Retourne du JSX différent selon la condition" },
      { term: "Opérateur ternaire", definition: "condition ? elementSiVrai : elementSiFaux" },
      { term: "&& logique", definition: "condition && element (afficher ou rien)" },
      { term: "Instruction switch", definition: "Pour plusieurs conditions (plus de 3 résultats)" },
      { term: "Extraire dans des variables", definition: "Rendre les conditions complexes plus propres dans JSX" },
      { term: "Retourner null", definition: "Empêcher le composant de se rendre" },
      { term: "Éviter les ternaires complexes", definition: "Gardez les conditions simples, extrayez si complexe" },
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "Bedingtes Rendering ist die Fähigkeit, verschiedene UI-Elemente basierend auf bestimmten Bedingungen darzustellen. Es ermöglicht Ihnen, dynamische und reaktive Benutzeroberflächen zu erstellen." },
        { type: "p", text: "In dieser Lektion lernen wir verschiedene Techniken für bedingtes Rendering in React." },
      ]},
      { title: "Was ist bedingtes Rendering?", content: [
        { type: "p", text: "Bedingtes Rendering in React funktioniert genau wie Bedingungen in JavaScript. Sie können if-Anweisungen, Ternäroperatoren oder logische && verwenden, um verschiedene Inhalte darzustellen." },
        { type: "p", text: "Häufige Anwendungsfälle:" },
        { type: "li", text: "Elemente basierend auf Benutzerauthentifizierung ein-/ausblenden" },
        { type: "li", text: "Verschiedene Inhalte basierend auf Benutzerrollen anzeigen" },
        { type: "li", text: "Ladezustände anzeigen" },
        { type: "li", text: "Fehlermeldungen anzeigen" },
      ]},
      { title: "Verwendung von if-Anweisungen", content: [
        { type: "p", text: "Der einfachste Weg für bedingtes Rendering ist die Verwendung einer if-Anweisung. Sie können verschiedene JSX-Ausgaben basierend auf einer Bedingung zurückgeben." },
        { type: "p", text: "Dieser Ansatz funktioniert gut, wenn Sie sich gegenseitig ausschließende Bedingungen haben." },
      ]},
      { title: "Verwendung des Ternäroperators", content: [
        { type: "p", text: "Der Ternäroperator ist eine prägnante Möglichkeit, eines von zwei Elementen basierend auf einer Bedingung darzustellen. Er wird häufig für einfaches bedingtes Rendering verwendet." },
        { type: "p", text: "Syntax: condition ? elementIfTrue : elementIfFalse" },
        { type: "callout", title: "Tipp", text: "Halten Sie Ternäroperatoren einfach. Wenn die Logik komplex ist, erwägen Sie eine if-Anweisung oder Extraktion in eine separate Variable." },
      ]},
      { title: "Verwendung von logischen &&", content: [
        { type: "p", text: "Der logische &&-Operator ist nützlich, wenn Sie etwas oder nichts darstellen möchten. Er wird häufig für bedingte Darstellung verwendet." },
        { type: "p", text: "Syntax: condition && element" },
        { type: "p", text: "Hinweis: Seien Sie vorsichtig mit falschen Werten wie 0, da sie nicht dargestellt werden, aber auch keinen Fehler anzeigen." },
      ]},
      { title: "Verwendung von Switch-Anweisungen", content: [
        { type: "p", text: "Für mehrere Bedingungen können Sie eine Switch-Anweisung oder if-else-Kette verwenden. Dies ist nützlich, wenn Sie viele mögliche Ergebnisse haben." },
        { type: "p", text: "Switch-Anweisungen funktionieren gut, wenn Sie mehr als 3 mögliche Ergebnisse haben." },
      ]},
      { title: "In Variablen extrahieren", content: [
        { type: "p", text: "Wenn Sie komplexe bedingte Logik haben, können Sie die Bedingungen vor der return-Anweisung in Variablen extrahieren. Dies macht das JSX sauberer und lesbarer." },
        { type: "p", text: "Vorteile der Extraktion in Variablen:" },
        { type: "li", text: "Macht JSX sauberer" },
        { type: "li", text: "Leichter, die Logik zu verstehen" },
        { type: "li", text: "Kann in verschiedenen Teilen der Komponente wiederverwendet werden" },
      ]},
      { title: "Rendering verhindern", content: [
        { type: "p", text: "Manchmal möchten Sie verhindern, dass eine Komponente überhaupt gerendert wird. Sie können null zurückgeben, um das Rendering zu überspringen." },
        { type: "p", text: "null zurückgeben beeinträchtigt den Lebenszyklus der Komponente nicht - es produziert einfach keine visuelle Ausgabe." },
      ]},
    ],
    quiz: [
      { question: "Was ist der richtige Weg, ein Element in React bedingt darzustellen?", options: ["Verwenden Sie die v-if-Direktive", "Verwenden Sie die v-show-Direktive", "Verwenden Sie Ternäroperator oder &&", "Verwenden Sie die ng-if-Direktive"], explanation: "React verwendet JavaScript-Ausdrücke für bedingtes Rendering. Die gängigsten Ansätze sind der Ternäroperator (condition ? A : B) && logisch (condition && A)." },
    ],
    challenge: { title: "Herausforderung: Erstellen Sie eine bedingte Benutzeroberfläche", description: "Erstellen Sie eine Komponente, die je nach Benutzerstatus unterschiedliche Inhalte anzeigt: angemeldet, abgemeldet oder beim Laden." },
    cheatSheet: { title: "Übersicht über bedingtes Rendering", items: [
      { term: "If-Anweisung", definition: "Gibt verschiedenen JSX basierend auf der Bedingung zurück" },
      { term: "Ternäroperator", definition: "condition ? elementIfTrue : elementIfFalse" },
      { term: "Logisches &&", definition: "condition && element (darstellen oder nichts)" },
      { term: "Switch-Anweisung", definition: "Für mehrere Bedingungen (mehr als 3 Ergebnisse)" },
      { term: "In Variablen extrahieren", definition: "Macht komplexe Bedingungen im JSX sauberer" },
      { term: "null zurückgeben", definition: "Verhindert, dass die Komponente gerendert wird" },
      { term: "Komplexe Ternäre vermeiden", definition: "Halten Sie Bedingungen einfach, extrahieren Sie wenn komplex" },
    ]}
  },
};

export default translations;
