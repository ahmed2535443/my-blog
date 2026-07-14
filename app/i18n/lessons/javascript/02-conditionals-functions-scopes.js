const translations = {
  en: {
    sections: [
      {
        title: "What are Conditionals, Functions, and Scopes?",
        content: [
          { type: "p", text: "In this lesson we will learn three fundamental concepts in JavaScript that form the foundation of every interactive program:" },
          { type: "li", text: "<strong>Conditionals:</strong> Allow code to make decisions. Instead of always executing the same code, you can tell JavaScript to do something different based on certain conditions." },
          { type: "li", text: "<strong>Functions:</strong> Reusable packages of code. Instead of repeating the same code many times, you write it once in a function and call it whenever needed." },
          { type: "li", text: "<strong>Scopes:</strong> Define where variables and functions are visible and available for use." },
          { type: "callout", title: "Simple Analogy:", text: "Imagine you are a restaurant manager. <strong>Conditionals</strong> are like customer service rules (if the customer is alone, give them a small table; otherwise give them a large table). <strong>Functions</strong> are like standard kitchen procedures (the pizza recipe is written once and the chef applies it whenever a customer orders). <strong>Scopes</strong> are like areas of the restaurant: what happens in the kitchen stays in the kitchen and is not heard in the dining area." },
        ],
      },
      {
        title: "Why Do We Use Conditionals and Functions?",
        content: [
          { type: "p", text: "Without conditionals and functions, code would be just sequential strings of instructions without intelligence or organization. Here are the main reasons:" },
          { type: "li", text: "<strong>Making Smart Decisions:</strong> The program needs to interact with different situations. For example: if the user is logged in, show the dashboard; otherwise show the login page." },
          { type: "li", text: "<strong>Code Reuse:</strong> Instead of writing the same code 10 times, you write a function once and call it 10 times. This saves time and reduces errors." },
          { type: "li", text: "<strong>Code Organization:</strong> Functions divide the program into small logical parts, making the code easier to read and maintain." },
          { type: "li", text: "<strong>Maintainability:</strong> If you need to change a certain logic, change it in one place (the function) instead of searching through dozens of places." },
        ],
      },
      {
        title: "The Problem It Solves",
        content: [
          { type: "p", text: "Let's look at a real problem example. Imagine you are writing code to calculate a discount on products:" },
          { type: "p", text: "The code above works, but it has problems: repetition, difficulty in modification, and risk of errors. If you want to change the discount calculation method, you need to modify <strong>three places</strong>!" },
          { type: "p", text: "The solution: Using <strong>functions</strong>:" },
          { type: "p", text: "Now if you want to change the calculation method, you modify it in <strong>only one place</strong>!" },
        ],
      },
      {
        title: "Simple Explanation: Conditional Statements",
        content: [
          { type: "p", text: "Conditional statements allow code to 'think' and make decisions. JavaScript checks a condition: if it is <strong>true</strong>, it executes certain code; if it is <strong>false</strong>, it executes other code or does nothing." },
          { type: "p", text: "<strong>1. Basic Condition: if</strong>" },
          { type: "p", text: "Executes the code inside the brackets only if the condition is true:" },
          { type: "p", text: "<strong>2. Double Condition: if / else</strong>" },
          { type: "p", text: "If the condition is not met, the code in the else block is executed:" },
          { type: "p", text: "<strong>3. Condition Chain: if / else if / else</strong>" },
          { type: "p", text: "You can test multiple conditions in sequence:" },
          { type: "callout", title: "Important Note:", text: "JavaScript checks conditions <strong>from top to bottom</strong> and executes <strong>only the first condition that is met</strong>, then stops. Even if a later condition is also met, it won't be executed." },
          { type: "p", text: "<strong>4. switch / case</strong>" },
          { type: "p", text: "Useful when you want to compare one value against multiple possibilities:" },
          { type: "callout", title: "Warning: Don't Forget break!", text: "If you forget <code>break</code>, JavaScript will continue through all following cases (fall-through) until it finds a break or the switch ends. This is usually not what you want." },
          { type: "p", text: "<strong>5. Ternary Operator</strong>" },
          { type: "p", text: "A shorthand for if/else in a single line:" },
          { type: "p", text: "Useful for simple cases, but don't overuse it. Complex conditions are better written with if/else for code clarity." },
        ],
      },
      {
        title: "Simple Example: Function Types",
        content: [
          { type: "p", text: "A function is a <strong>package of code</strong> you can call anytime. JavaScript has several ways to define functions:" },
          { type: "p", text: "<strong>1. Function Declaration</strong>" },
          { type: "p", text: "The classic and most common way. This method supports <strong>Hoisting</strong> (we'll talk about it later):" },
          { type: "p", text: "<strong>2. Function Expression</strong>" },
          { type: "p", text: "The function is defined as a value stored in a variable. This method does <strong>not support</strong> Hoisting:" },
          { type: "p", text: "<strong>3. Arrow Function (ES6+)</strong>" },
          { type: "p", text: "A concise and modern syntax. You'll need it a lot when learning <strong>React</strong> where it's widely used in components and events:" },
          { type: "callout", title: "React Preparation:", text: "Arrow Functions are widely used in React for writing functional components and event handlers. Your familiarity with them now will make learning React much easier." },
          { type: "p", text: "<strong>4. Quick Comparison of the Three Types</strong>" },
        ],
      },
      {
        title: "Practical Example: Login System",
        content: [
          { type: "p", text: "Let's apply what we've learned in a realistic example: a simple login system that combines conditionals and functions:" },
          { type: "callout", title: "Notes on the Example:", text: "We used <strong>small specialized functions</strong> (validateEmail, validatePassword) instead of writing everything in one big function. We used <strong>multiple conditions</strong> (if/else if/else) in the getGreeting function. The login function returns an <strong>object</strong> containing the verification result. This is a common pattern in JavaScript." },
        ],
      },
      {
        title: "What Happens Behind the Scenes? (Scope, Closure, and Hoisting)",
        content: [
          { type: "p", text: "These are the most important parts of the lesson. Understanding them will prevent you from confusing errors in JavaScript." },
          { type: "p", text: "<strong>1. Scope - Where Can a Variable Be Seen?</strong>" },
          { type: "p", text: "<strong>Scope</strong> determines where a variable or function can be accessed. There are three main types:" },
          { type: "callout", title: "The Essential Difference Between var, let, and const:", text: "<code>var</code>: <strong>Function Scope</strong> only - it crosses block boundaries { }!<br/><code>let</code>: <strong>Block Scope</strong> - confined to the block {} where it was defined.<br/><code>const</code>: <strong>Block Scope</strong> as well - like let but doesn't allow reassignment.<br/><br/><strong>The Rule:</strong> Always use <code>const</code>, use <code>let</code> only when you need to change the value, and never use <code>var</code> in modern code." },
          { type: "p", text: "<strong>2. Lexical Scope</strong>" },
          { type: "p", text: "A function in JavaScript remembers (wraps) variables from the scope where it was born, not where it was called. This is called <strong>Lexical Scope</strong>." },
          { type: "p", text: "<strong>3. Closures</strong>" },
          { type: "p", text: "<strong>Closure</strong> occurs when an inner function preserves a reference to variables in its outer scope, even after the outer function has finished executing. Simply put: the function 'wraps' the variables with it." },
          { type: "callout", title: "Why Are Closures Important for React?", text: "In React, Hooks like <code>useState</code> and <code>useEffect</code> directly depend on the concept of Closures. Every time you write <code>const [count, setCount] = useState(0)</code>, the <code>setCount</code> function preserves a reference to the count state thanks to Closure." },
          { type: "p", text: "<strong>4. Hoisting - What Happens Behind the Scenes</strong>" },
          { type: "p", text: "<strong>Hoisting</strong> is a behavior in JavaScript where the Interpreter 'raises' variable and function definitions to the top of the scope before executing the code. But the behavior differs by keyword:" },
          { type: "callout", title: "Hoisting Summary:", text: "<code>function declaration</code>: Fully hoisted (definition + content) - can be called before definition.<br/><code>var</code>: Only the definition is hoisted (value = undefined) - no error but value is undefined.<br/><code>let / const</code>: Not hoisted - attempting to access before definition gives ReferenceError.<br/><code>function expression / arrow function</code>: Not hoisted - must be defined before calling." },
        ],
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "<strong>Using var instead of let/const:</strong> <code>var</code> crosses block boundaries and causes unexpected errors. Always use <code>const</code>, and <code>let</code> when you need to change the value." },
          { type: "li", text: "<strong>Forgetting break in switch/case:</strong> Without <code>break</code>, code executes all following cases until it finds break or the switch ends." },
          { type: "li", text: "<strong>Using === instead of == in comparisons:</strong> <code>==</code> performs type coercion that may give unexpected results like <code>0 == ''</code> giving <code>true</code>. Always use <code>===</code>." },
          { type: "li", text: "<strong>Relying on Hoisting:</strong> Even if the code works, defining functions before using them makes the code easier to read and understand." },
          { type: "li", text: "<strong>Arrow Function doesn't have its own this:</strong> Arrow Functions don't create their own <code>this</code> (they take this from the outer scope). This is useful most of the time, but can cause errors sometimes." },
          { type: "li", text: "<strong>Defining a function inside a loop:</strong> If you define a function inside a <code>for</code> loop, a new copy is created each iteration. Use Closure correctly or an external function." },
        ],
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Always use const and let instead of var:</strong> <code>const</code> as the default, and <code>let</code> only when you need to change the value." },
          { type: "li", text: "<strong>Use === instead of ==:</strong> Strict Equality prevents unexpected type conversion errors." },
          { type: "li", text: "<strong>Write small, specialized functions:</strong> Each function should do only one thing (Single Responsibility Principle)." },
          { type: "li", text: "<strong>Use Arrow Functions in callbacks:</strong> In functions passed as arguments (like .map, .filter, .forEach), Arrow Functions are shorter and clearer." },
          { type: "li", text: "<strong>Name functions with clear verbs:</strong> Like <code>calculateTotal</code> and <code>validateEmail</code> instead of <code>doStuff</code> or <code>handleThings</code>." },
          { type: "li", text: "<strong>Use Default Parameters:</strong> Instead of manually checking for default values inside the function." },
          { type: "li", text: "<strong>Use Early Return to simplify conditions:</strong> Exit the function early on error to avoid deep nesting of conditions (Nested if)." },
        ],
      },
      {
        title: "Lesson Summary",
        content: [
          { type: "li", text: "<strong>Conditional statements</strong> allow code to make decisions using if/else, switch, and Ternary Operator." },
          { type: "li", text: "<strong>Functions</strong> repeat and organize code. There are Function Declaration, Expression, and Arrow Functions." },
          { type: "li", text: "<strong>Arrow Functions</strong> are a modern, concise syntax you'll need a lot in React." },
          { type: "li", text: "<strong>Scope</strong> determines where variables can be seen: Global, Function, and Block." },
          { type: "li", text: "<strong>var vs let vs const</strong>: var is Function Scope, let/const are Block Scope. Always use const." },
          { type: "li", text: "<strong>Closure</strong> is the ability of a function to preserve a reference to variables from its outer scope." },
          { type: "li", text: "<strong>Hoisting</strong>: function declarations are fully hoisted, var is hoisted only as definition (undefined), let/const are not hoisted." },
        ],
      },
    ],
    quiz: [
      {
        question: "What will the following code print to the console?",
        options: [
          "4 then 4",
          "undefined then 4",
          "4 then ReferenceError",
          "undefined then undefined",
        ],
        correctAnswer: 2,
        explanation: "The code: if (true) { var x = 4; let y = 4; } console.log(x); // 4 - var crosses block boundaries (Function Scope) console.log(y); // ReferenceError - let is confined to the block (Block Scope). The correct answer is: 4 then ReferenceError. var crosses blocks while let doesn't.",
      },
      {
        question: "What will the following code print?",
        options: [
          "0, 0, 0",
          "1, 2, 3",
          "3, 3, 3",
          "undefined, undefined, undefined",
        ],
        correctAnswer: 1,
        explanation: "This is Closure! The inner function preserves a reference to the count variable from the outer function. Each time you call it, the same count variable is modified. count is not reset with each call.",
      },
    ],
    challenge: {
      title: "Challenge: Simple Calculator",
      description: "Create a <code>calculator</code> function that takes three parameters: two numbers and a mathematical operation (+, -, *, /). It should: 1. Use a switch/case condition to select the operation, 2. Handle division by zero (show an error message), 3. Return the result. Example: <code>calculator(10, 5, '+')</code> returns 15",
    },
    cheatSheet: {
      title: "Cheat Sheet: Conditionals, Functions, and Scopes",
      items: [
        { label: "Conditionals", description: "if / else if / else | switch / case | Ternary: result = condition ? 'true' : 'false'" },
        { label: "Function Types", description: "Function Declaration | Function Expression | Arrow Function (ES6+) | Default Parameters" },
        { label: "Scope Rules", description: "var -> Function Scope | let/const -> Block Scope | Global Scope | Hoisting behavior" },
        { label: "Closures", description: "Inner function preserves reference to outer scope variables | Used in React Hooks" },
      ],
    },
  },
  fr: {
    sections: [
      {
        title: "Que Sont les Conditionnelles, les Fonctions et les Portées ?",
        content: [
          { type: "p", text: "Dans ce cours, nous apprendrons trois concepts fondamentaux en JavaScript qui forment la base de tout programme interactif :" },
          { type: "li", text: "<strong>Les Conditionnelles :</strong> Permettent au code de prendre des décisions. Au lieu d'exécuter toujours le même code, vous pouvez dire à JavaScript de faire quelque chose de différent selon certaines conditions." },
          { type: "li", text: "<strong>Les Fonctions :</strong> Des packages de code réutilisables. Au lieu de répéter le même code plusieurs fois, vous l'écrivez une fois dans une fonction et l'appelez quand vous en avez besoin." },
          { type: "li", text: "<strong>Les Portées :</strong> Définissent où les variables et les fonctions sont visibles et disponibles pour une utilisation." },
          { type: "callout", title: "Analogie Simple :", text: "Imaginez que vous êtes gérant de restaurant. <strong>Les Conditionnelles</strong> sont comme les règles de service client (si le client est seul, donnez-lui une petite table ; sinon donnez-lui une grande table). <strong>Les Fonctions</strong> sont comme les procédures standard de la cuisine (la recette de la pizza est écrite une fois et le cuisinier l'applique chaque fois qu'un client commande). <strong>Les Portées</strong> sont comme les zones du restaurant : ce qui se passe dans la cuisine reste dans la cuisine et ne s'entend pas dans la salle à manger." },
        ],
      },
      {
        title: "Pourquoi Utilisons-Nous les Conditionnelles et les Fonctions ?",
        content: [
          { type: "p", text: "Sans conditionnelles et fonctions, le code ne serait que des séquences d'instructions sans intelligence ni organisation. Voici les principales raisons :" },
          { type: "li", text: "<strong>Prendre des Décisions Intelligentes :</strong> Le programme doit interagir avec différentes situations. Par exemple : si l'utilisateur est connecté, affichez le tableau de bord ; sinon affichez la page de connexion." },
          { type: "li", text: "<strong>Réutilisation du Code :</strong> Au lieu d'écrire le même code 10 fois, vous écrivez une fonction une fois et l'appelez 10 fois. Cela fait gagner du temps et réduit les erreurs." },
          { type: "li", text: "<strong>Organisation du Code :</strong> Les fonctions divisent le programme en petites parties logiques, rendant le code plus facile à lire et à maintenir." },
          { type: "li", text: "<strong>Maintenabilité :</strong> Si vous devez modifier une certaine logique, changez-la en un seul endroit (la fonction) au lieu de chercher dans des dizaines d'endroits." },
        ],
      },
      {
        title: "Le Problème qu'Elle Résout",
        content: [
          { type: "p", text: "Regardons un exemple de problème réel. Imaginez que vous écrivez du code pour calculer une remise sur des produits :" },
          { type: "p", text: "Le code ci-dessus fonctionne, mais il a des problèmes : répétition, difficulté de modification et risque d'erreur. Si vous voulez changer la méthode de calcul de la remise, vous devez modifier <strong>trois endroits</strong> !" },
          { type: "p", text: "La solution : Utiliser des <strong>fonctions</strong> :" },
          { type: "p", text: "Maintenant, si vous voulez changer la méthode de calcul, vous la modifiez en <strong>un seul endroit</strong> !" },
        ],
      },
      {
        title: "Explication Simple : Instructions Conditionnelles",
        content: [
          { type: "p", text: "Les instructions conditionnelles permettent au code de 'réfléchir' et de prendre des décisions. JavaScript vérifie une condition : si elle est <strong>vraie</strong>, il exécute un certain code ; si elle est <strong>fausse</strong>, il exécute un autre code ou ne fait rien." },
          { type: "p", text: "<strong>1. Condition de Base : if</strong>" },
          { type: "p", text: "<strong>2. Double Condition : if / else</strong>" },
          { type: "p", text: "<strong>3. Chaîne de Conditions : if / else if / else</strong>" },
          { type: "callout", title: "Note Importante :", text: "JavaScript vérifie les conditions <strong>de haut en bas</strong> et n'exécute que <strong>la première condition qui est remplie</strong>, puis s'arrête. Même si une condition ultérieure est également remplie, elle ne sera pas exécutée." },
          { type: "p", text: "<strong>4. switch / case</strong>" },
          { type: "callout", title: "Attention : N'Oubliez Pas break !", text: "Si vous oubliez <code>break</code>, JavaScript continuera à travers tous les cas suivants (fall-through) jusqu'à ce qu'il trouve un break ou que le switch se termine. Ce n'est généralement pas ce que vous voulez." },
          { type: "p", text: "<strong>5. Opérateur Ternaire</strong>" },
          { type: "p", text: "Utile pour les cas simples, mais n'en abusez pas. Les conditions complexes sont mieux écrites avec if/else pour la clarté du code." },
        ],
      },
      {
        title: "Exemple Simple : Types de Fonctions",
        content: [
          { type: "p", text: "Une fonction est un <strong>package de code</strong> que vous pouvez appeler à tout moment. JavaScript a plusieurs façons de définir des fonctions :" },
          { type: "p", text: "<strong>1. Déclaration de Fonction</strong>" },
          { type: "p", text: "<strong>2. Expression de Fonction</strong>" },
          { type: "p", text: "<strong>3. Fonction Fléchée (ES6+)</strong>" },
          { type: "callout", title: "Préparation à React :", text: "Les Fonctions Fléchées sont largement utilisées dans React pour écrire des composants fonctionnels et des gestionnaires d'événements. Votre familiarité avec elles maintenant rendra l'apprentissage de React beaucoup plus facile." },
          { type: "p", text: "<strong>4. Comparaison Rapide des Trois Types</strong>" },
        ],
      },
      {
        title: "Exemple Pratique : Système de Connexion",
        content: [
          { type: "p", text: "Appliquons ce que nous avons appris dans un exemple réaliste : un système de connexion simple qui combine les conditionnelles et les fonctions :" },
          { type: "callout", title: "Notes sur l'Exemple :", text: "Nous avons utilisé des <strong>petites fonctions spécialisées</strong> (validateEmail, validatePassword) au lieu de tout écrire dans une seule grande fonction. Nous avons utilisé des <strong>conditions multiples</strong> (if/else if/else) dans la fonction getGreeting. La fonction login retourne un <strong>objet</strong> contenant le résultat de la vérification. C'est un modèle courant en JavaScript." },
        ],
      },
      {
        title: "Que Se Passe-T-il en Coulisse ? (Portée, Fermeture et Hissement)",
        content: [
          { type: "p", text: "Ce sont les parties les plus importantes du cours. Les comprendre vous évitera des erreurs déroutantes en JavaScript." },
          { type: "p", text: "<strong>1. Portée - Où Une Variable Peut-Elle Être Vue ?</strong>" },
          { type: "callout", title: "La Différence Essentielle Entre var, let et const :", text: "<code>var</code> : <strong>Portée de Fonction</strong> uniquement - elle traverse les limites de bloc { } !<br/><code>let</code> : <strong>Portée de Bloc</strong> - confinée au bloc {} où elle a été définie.<br/><code>const</code> : <strong>Portée de Bloc</strong> aussi - comme let mais ne permet pas la réaffectation.<br/><br/><strong>La Règle :</strong> Utilisez toujours <code>const</code>, utilisez <code>let</code> uniquement si vous devez changer la valeur, et n'utilisez jamais <code>var</code> dans le code moderne." },
          { type: "p", text: "<strong>2. Portée Lexicale</strong>" },
          { type: "p", text: "<strong>3. Fermetures (Closures)</strong>" },
          { type: "callout", title: "Pourquoi les Closures Sont-Elles Importantes pour React ?", text: "Dans React, les Hooks comme <code>useState</code> et <code>useEffect</code> dépendent directement du concept de Closures. Chaque fois que vous écrivez <code>const [count, setCount] = useState(0)</code>, la fonction <code>setCount</code> préserve une référence à l'état count grâce à la Closure." },
          { type: "p", text: "<strong>4. Hissement (Hoisting) - Ce Qui Se Passe en Coulisse</strong>" },
          { type: "callout", title: "Résumé du Hoisting :", text: "<code>function declaration</code> : Entièrement hissée (définition + contenu) - peut être appelée avant la définition.<br/><code>var</code> : Seule la définition est hissée (valeur = undefined) - pas d'erreur mais la valeur est indéfinie.<br/><code>let / const</code> : Ne sont pas hissées - tenter d'y accéder avant la définition donne ReferenceError.<br/><code>function expression / arrow function</code> : Ne sont pas hissées - doivent être définies avant l'appel." },
        ],
      },
      {
        title: "Erreurs Courantes",
        content: [
          { type: "li", text: "<strong>Utiliser var au lieu de let/const :</strong> <code>var</code> traverse les limites de bloc et cause des erreurs inattendues." },
          { type: "li", text: "<strong>Oublier break dans switch/case :</strong> Sans <code>break</code>, le code exécute tous les cas suivants." },
          { type: "li", text: "<strong>Utiliser === au lieu de == dans les comparaisons :</strong> <code>==</code> effectue une coercion de type. Utilisez toujours <code>===</code>." },
          { type: "li", text: "<strong>S'appuyer sur le Hoisting :</strong> Même si le code fonctionne, définir les fonctions avant de les utiliser rend le code plus lisible." },
          { type: "li", text: "<strong>La fonction fléchée n'a pas son propre this :</strong> Les Arrow Functions ne créent pas leur propre <code>this</code>." },
          { type: "li", text: "<strong>Définir une fonction dans une boucle :</strong> Utilisez correctement les Closures ou une fonction externe." },
        ],
      },
      {
        title: "Bonnes Pratiques",
        content: [
          { type: "li", text: "<strong>Utilisez toujours const et let au lieu de var :</strong> <code>const</code> par défaut, et <code>let</code> uniquement quand vous devez changer la valeur." },
          { type: "li", text: "<strong>Utilisez === au lieu de == :</strong> L'égalité stricte empêche les erreurs de conversion de type inattendues." },
          { type: "li", text: "<strong>Écrivez des petites fonctions spécialisées :</strong> Chaque fonction ne doit faire qu'une seule chose." },
          { type: "li", text: "<strong>Utilisez les Fonctions Fléchées dans les callbacks :</strong> Plus courtes et plus claires." },
          { type: "li", text: "<strong>Nommez les fonctions avec des verbes clairs :</strong> Comme <code>calculateTotal</code> et <code>validateEmail</code>." },
          { type: "li", text: "<strong>Utilisez les Paramètres Par Défaut :</strong> Au lieu de vérifier manuellement les valeurs par défaut." },
          { type: "li", text: "<strong>Utilisez le Retour Précoce :</strong> Sortez de la fonction tôt en cas d'erreur." },
        ],
      },
      {
        title: "Résumé du Cours",
        content: [
          { type: "li", text: "Les <strong>instructions conditionnelles</strong> permettent au code de prendre des décisions avec if/else, switch et l'opérateur ternaire." },
          { type: "li", text: "Les <strong>fonctions</strong> répètent et organisent le code." },
          { type: "li", text: "Les <strong>Fonctions Fléchées</strong> sont une syntaxe moderne et concise." },
          { type: "li", text: "La <strong>portée</strong> détermine où les variables peuvent être vues." },
          { type: "li", text: "<strong>var vs let vs const</strong> : var a une portée de fonction, let/const ont une portée de bloc." },
          { type: "li", text: "La <strong>fermeture</strong> est la capacité d'une fonction à préserver une référence aux variables de sa portée externe." },
          { type: "li", text: "Le <strong>hissement</strong> : les déclarations de fonctions sont entièrement hissées, var n'est hissée que comme définition." },
        ],
      },
    ],
    quiz: [
      {
        question: "Que va afficher le code suivant dans la console ?",
        options: [
          "4 puis 4",
          "undefined puis 4",
          "4 puis ReferenceError",
          "undefined puis undefined",
        ],
        correctAnswer: 2,
        explanation: "var a une portée de fonction ( traverse les blocs {}) tandis que let a une portée de bloc (reste confinée dans le bloc {}). La réponse correcte est : 4 puis ReferenceError.",
      },
      {
        question: "Que va afficher le code suivant ?",
        options: [
          "0, 0, 0",
          "1, 2, 3",
          "3, 3, 3",
          "undefined, undefined, undefined",
        ],
        correctAnswer: 1,
        explanation: "C'est une Closure ! La fonction interne préserve une référence à la variable count de la fonction externe.",
      },
    ],
    challenge: {
      title: "Défi : Calculatrice Simple",
      description: "Créez une fonction <code>calculator</code> qui prend trois paramètres : deux nombres et une opération mathématique (+, -, *, /). Elle doit : 1. Utiliser une condition switch/case pour sélectionner l'opération, 2. Gérer la division par zéro, 3. Retourner le résultat.",
    },
    cheatSheet: {
      title: "Aide-Mémoire : Conditionnelles, Fonctions et Portées",
      items: [
        { label: "Conditionnelles", description: "if / else if / else | switch / case | Ternaire : result = condition ? 'vrai' : 'faux'" },
        { label: "Types de Fonctions", description: "Déclaration | Expression | Fonction Fléchée (ES6+) | Paramètres par Défaut" },
        { label: "Règles de Portée", description: "var -> Portée de Fonction | let/const -> Portée de Bloc | Portée Globale" },
        { label: "Fermetures", description: "La fonction interne préserve une référence aux variables de la portée externe" },
      ],
    },
  },
  de: {
    sections: [
      {
        title: "Was Sind Bedingungen, Funktionen und Geltungsbereiche?",
        content: [
          { type: "p", text: "In dieser Lektion lernen wir drei grundlegende Konzepte in JavaScript, die die Grundlage jedes interaktiven Programs bilden:" },
          { type: "li", text: "<strong>Bedingungen:</strong> Ermöglichen es dem Code, Entscheidungen zu treffen. Anstatt immer denselben Code auszuführen, können Sie JavaScript sagen, etwas anderes zu tun, basierend auf bestimmten Bedingungen." },
          { type: "li", text: "<strong>Funktionen:</strong> Wiederverwendbare Code-Pakete. Anstatt denselben Code viele Male zu wiederholen, schreiben Sie ihn einmal in eine Funktion und rufen ihn bei Bedarf auf." },
          { type: "li", text: "<strong>Geltungsbereiche:</strong> Definieren, wo Variablen und Funktionen sichtbar und zur Verfügung stehen." },
          { type: "callout", title: "Einfache Analogie:", text: "Stellen Sie sich vor, Sie sind Restaurantmanager. <strong>Bedingungen</strong> sind wie Kundenservice-Regeln (wenn der Kunde allein ist, geben Sie ihm einen kleinen Tisch; anderenfalls einen großen Tisch). <strong>Funktionen</strong> sind wie Standard-Küchenverfahren (das Pizza-Rezept wird einmal geschrieben und der Koch wendet es an, wenn ein Kunde bestellt). <strong>Geltungsbereiche</strong> sind wie Bereiche des Restaurants: Was in der Küche passiert, bleibt in der Küche und wird im Speisesaal nicht gehört." },
        ],
      },
      {
        title: "Warum Verwenden Wir Bedingungen und Funktionen?",
        content: [
          { type: "p", text: "Ohne Bedingungen und Funktionen wäre Code nur aufeinanderfolgende Anweisungsfolgen ohne Intelligenz oder Organisation." },
          { type: "li", text: "<strong>Intelligente Entscheidungen treffen:</strong> Das Programm muss mit verschiedenen Situationen interagieren." },
          { type: "li", text: "<strong>Code-Wiederverwendung:</strong> Anstatt denselben Code 10 Mal zu schreiben, schreiben Sie eine Funktion einmal und rufen sie 10 Mal auf." },
          { type: "li", text: "<strong>Code-Organisation:</strong> Funktionen teilen das Programm in kleine logische Teile auf." },
          { type: "li", text: "<strong>Wartbarkeit:</strong> Wenn Sie eine bestimmte Logik ändern müssen, ändern Sie sie an einem Ort." },
        ],
      },
      {
        title: "Das Problem, das Es Löst",
        content: [
          { type: "p", text: "Schauen wir uns ein reales Problem an. Stellen Sie sich vor, Sie schreiben Code, um einen Rabatt auf Produkte zu berechnen:" },
          { type: "p", text: "Der Code oben funktioniert, hat aber Probleme: Wiederholung, Schwierigkeiten bei der Änderung und Fehlergefahr." },
          { type: "p", text: "Die Lösung: Verwenden von <strong>Funktionen</strong>:" },
          { type: "p", text: "Wenn Sie jetzt die Berechnungsmethode ändern wollen, ändern Sie sie nur an <strong>einem Ort</strong>!" },
        ],
      },
      {
        title: "Einfache Erklärung: Bedingte Anweisungen",
        content: [
          { type: "p", text: "Bedingte Anweisungen ermöglichen es dem Code, zu 'denken' und Entscheidungen zu treffen." },
          { type: "p", text: "<strong>1. Grundlegende Bedingung: if</strong>" },
          { type: "p", text: "<strong>2. Doppelte Bedingung: if / else</strong>" },
          { type: "p", text: "<strong>3. Bedingungskette: if / else if / else</strong>" },
          { type: "callout", title: "Wichtiger Hinweis:", text: "JavaScript überprüft Bedingungen <strong>von oben nach unten</strong> und führt nur <strong>die erste erfüllte Bedingung</strong> aus, dann stoppt es." },
          { type: "p", text: "<strong>4. switch / case</strong>" },
          { type: "callout", title: "Warnung: Vergessen Sie Nicht break!", text: "Wenn Sie <code>break</code> vergessen, wird JavaScript durch alle folgenden Fälle weitermachen (fall-through)." },
          { type: "p", text: "<strong>5. Ternärer Operator</strong>" },
        ],
      },
      {
        title: "Einfaches Beispiel: Funktionstypen",
        content: [
          { type: "p", text: "Eine Funktion ist ein <strong>Code-Paket</strong>, das Sie jederzeit aufrufen können." },
          { type: "p", text: "<strong>1. Funktionsdeklaration</strong>" },
          { type: "p", text: "<strong>2. Funktionsausdruck</strong>" },
          { type: "p", text: "<strong>3. Pfeilfunktion (ES6+)</strong>" },
          { type: "callout", title: "Vorbereitung auf React:", text: "Pfeilfunktionen werden in React häufig verwendet. Ihre Vertrautheit mit ihnen wird das Lernen von React viel einfacher machen." },
          { type: "p", text: "<strong>4. Schneller Vergleich der Drei Typen</strong>" },
        ],
      },
      {
        title: "Praktisches Beispiel: Anmeldesystem",
        content: [
          { type: "p", text: "Wenden wir das Gelernte in einem realistischen Beispiel an: ein einfaches Anmeldesystem, das Bedingungen und Funktionen kombiniert:" },
          { type: "callout", title: "Hinweise zum Beispiel:", text: "Wir haben <strong>kleine spezialisierte Funktionen</strong> verwendet, <strong>mehrere Bedingungen</strong> in der getGreeting-Funktion, und die login-Funktion gibt ein <strong>Objekt</strong> zurück." },
        ],
      },
      {
        title: "Was Passiert Hinter den Kulissen? (Geltungsbereich, Closures und Hoisting)",
        content: [
          { type: "p", text: "Dies sind die wichtigsten Teile der Lektion." },
          { type: "p", text: "<strong>1. Geltungsbereich - Wo Kann Eine Variable Gesehen Werden?</strong>" },
          { type: "callout", title: "Der Wesentliche Unterschied Zwischen var, let und const:", text: "<code>var</code>: Nur <strong>Function Scope</strong> - überschreitet Blockgrenzen { }!<br/><code>let</code>: <strong>Block Scope</strong> - auf den Block {} beschränkt, in dem es definiert wurde.<br/><code>const</code>: Auch <strong>Block Scope</strong> - wie let, erlaubt aber keine Neuzuweisung.<br/><br/><strong>Die Regel:</strong> Verwenden Sie immer <code>const</code>, verwenden Sie <code>let</code> nur, wenn Sie den Wert ändern müssen, und verwenden Sie nie <code>var</code> im modernen Code." },
          { type: "p", text: "<strong>2. Lexikalischer Geltungsbereich</strong>" },
          { type: "p", text: "<strong>3. Closures</strong>" },
          { type: "callout", title: "Warum Sind Closures Für React Wichtig?", text: "In React hängen Hooks wie <code>useState</code> und <code>useEffect</code> direkt vom Konzept der Closures ab." },
          { type: "p", text: "<strong>4. Hoisting - Was Passiert Hinter den Kulissen</strong>" },
          { type: "callout", title: "Hoisting-Zusammenfassung:", text: "<code>function declaration</code>: Vollständig gehoben - kann vor der Deklaration aufgerufen werden.<br/><code>var</code>: Nur die Deklaration wird gehoben (Wert = undefined).<br/><code>let / const</code>: Nicht gehoben - Zugriff vor Deklaration gibt ReferenceError.<br/><code>function expression / arrow function</code>: Nicht gehoben - muss vor dem Aufruf definiert werden." },
        ],
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "<strong>Verwendung von var statt let/const:</strong> <code>var</code> überschreitet Blockgrenzen." },
          { type: "li", text: "<strong>Vergessen von break in switch/case:</strong> Ohne <code>break</code> führt Code alle folgenden Fälle aus." },
          { type: "li", text: "<strong>Verwendung von === statt ==:</strong> <code>==</code> führt Typ-Coercion durch. Verwenden Sie immer <code>===</code>." },
          { type: "li", text: "<strong>Sich auf Hoisting verlassen:</strong> Definieren Sie Funktionen vor der Verwendung." },
          { type: "li", text: "<strong>Pfeilfunktion hat kein eigenes this:</strong> Arrow Functions erstellen kein eigenes <code>this</code>." },
          { type: "li", text: "<strong> Funktion in einer Schleife definieren:</strong> Verwenden Sie Closures oder eine externe Funktion." },
        ],
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Verwenden Sie immer const und let statt var:</strong> <code>const</code> als Standard." },
          { type: "li", text: "<strong>Verwenden Sie === statt ==:</strong> Strenge Gleichheit verhindert Typprobleme." },
          { type: "li", text: "<strong>Schreiben Sie kleine, spezialisierte Funktionen:</strong> Jede Funktion sollte nur eine Sache tun." },
          { type: "li", text: "<strong>Verwenden Sie Pfeilfunktionen in Callbacks:</strong> Kürzer und klarer." },
          { type: "li", text: "<strong>Nennen Sie Funktionen mit klaren Verben:</strong> Wie <code>calculateTotal</code>." },
          { type: "li", text: "<strong>Verwenden Sie Standardparameter:</strong> Statt manueller Überprüfung." },
          { type: "li", text: "<strong>Verwenden Sie Early Return:</strong> Verlassen Sie die Funktion frühzeitig bei Fehlern." },
        ],
      },
      {
        title: "Kurszusammenfassung",
        content: [
          { type: "li", text: "<strong>Bedingte Anweisungen</strong> ermöglichen Entscheidungen mit if/else, switch und ternärem Operator." },
          { type: "li", text: "<strong>Funktionen</strong> wiederholen und organisieren Code." },
          { type: "li", text: "<strong>Pfeilfunktionen</strong> sind eine moderne, kompakte Syntax." },
          { type: "li", text: "<strong>Geltungsbereich</strong> bestimmt, wo Variablen gesehen werden können." },
          { type: "li", text: "<strong>var vs let vs const</strong>: var hat Function Scope, let/const haben Block Scope." },
          { type: "li", text: "<strong>Closures</strong> ist die Fähigkeit einer Funktion, Referenzen auf Variablen zu bewahren." },
          { type: "li", text: "<strong>Hoisting</strong>: Funktionsdeklarationen werden vollständig gehoben." },
        ],
      },
    ],
    quiz: [
      {
        question: "Was wird der folgende Code in der Konsole ausgeben?",
        options: [
          "4 dann 4",
          "undefined dann 4",
          "4 dann ReferenceError",
          "undefined dann undefined",
        ],
        correctAnswer: 2,
        explanation: "var hat Function Scope (überschreitet Blöcke {}) während let Block Scope hat. Die richtige Antwort ist: 4 dann ReferenceError.",
      },
      {
        question: "Was wird der folgende Code ausgeben?",
        options: [
          "0, 0, 0",
          "1, 2, 3",
          "3, 3, 3",
          "undefined, undefined, undefined",
        ],
        correctAnswer: 1,
        explanation: "Das ist eine Closure! Die innere Funktion bewahrt eine Referenz auf die count-Variable der äußeren Funktion.",
      },
    ],
    challenge: {
      title: "Herausforderung: Einfacher Taschenrechner",
      description: "Erstellen Sie eine <code>calculator</code>-Funktion, die drei Parameter akzeptiert: zwei Zahlen und eine mathematische Operation.",
    },
    cheatSheet: {
      title: "Spickzettel: Bedingungen, Funktionen und Geltungsbereiche",
      items: [
        { label: "Bedingungen", description: "if / else if / else | switch / case | Ternär: result = condition ? 'wahr' : 'falsch'" },
        { label: "Funktionstypen", description: "Deklaration | Ausdruck | Pfeilfunktion (ES6+) | Standardparameter" },
        { label: "Geltungsbereichsregeln", description: "var -> Function Scope | let/const -> Block Scope | Globaler Scope" },
        { label: "Closures", description: "Innere Funktion bewahrt Referenz auf äußere Variablen" },
      ],
    },
  },
};

export default translations;
