const translations = {
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Loops are used to repeat a block of code multiple times. In Clean Code, we aim to write loops that are clear, simple, and easy to understand." },
        { type: "p", text: "In this lesson, we will learn how to write better loops and avoid common mistakes that make code hard to read." },
      ]},
      { title: "What are Loops?", content: [
        { type: "p", text: "Loops allow code to execute repeatedly based on a condition. There are three main types of loops in JavaScript:" },
        { type: "li", text: "<code>for</code> loop: Used when you know the number of iterations" },
        { type: "li", text: "<code>while</code> loop: Used when you don't know the number of iterations" },
        { type: "li", text: "<code>do...while</code> loop: Similar to while, but executes at least once" },
      ]},
      { title: "The Problem with Loops", content: [
        { type: "p", text: "Loops can make code hard to understand and maintain, especially when they are complex or contain many nested loops." },
        { type: "p", text: "Common problems with loops:" },
        { type: "li", text: "<strong>Too many nested loops:</strong> Make code difficult to understand" },
        { type: "li", text: "<strong>Complex conditions:</strong> Make loops hard to follow" },
        { type: "li", text: "<strong>Modifying loop variables:</strong> Can cause unexpected behavior" },
        { type: "li", text: "<strong>Using break or continue excessively:</strong> Makes code flow unclear" },
      ]},
      { title: "Alternatives to Loops", content: [
        { type: "p", text: "JavaScript provides several methods to replace traditional loops with more readable and functional code." },
        { type: "p", text: "The <code>forEach</code> method executes a function for each array element." },
        { type: "p", text: "The <code>map</code> method creates a new array by applying a function to each element of the original array." },
        { type: "p", text: "The <code>filter</code> method creates a new array with elements that pass a specific test." },
        { type: "p", text: "The <code>reduce</code> method reduces an array to a single value by applying a function to an accumulator." },
        { type: "p", text: "The <code>find</code> method returns the first element that passes a specific test." },
        { type: "p", text: "The <code>some</code> method returns true if at least one element passes a specific test." },
        { type: "p", text: "The <code>every</code> method returns true if all elements pass a specific test." },
      ]},
      { title: "Using Array Methods Effectively", content: [
        { type: "p", text: "Array methods are powerful tools that can replace traditional loops with more readable and functional code. Here's how to use them effectively:" },
        { type: "p", text: "Benefits of using array methods:" },
        { type: "li", text: "More readable and declarative code" },
        { type: "li", text: "Easier to chain multiple operations" },
        { type: "li", text: "Less chance of errors" },
        { type: "li", text: "Easier to test and debug" },
      ]},
    ],
    quiz: [
      { question: "Which of the following is the best alternative to a traditional for loop for iterating over an array?", options: ["while loop", "do...while loop", "forEach method", "switch statement"], explanation: "The forEach method is more readable and declarative than a traditional for loop. It clearly expresses the intent to iterate over array elements." },
    ],
    challenge: { title: "Challenge: Refactor the loop", description: "The following code uses a complex for loop. Refactor it using array methods." },
    cheatSheet: { title: "Loops Cheat Sheet", items: [
      { term: "forEach", definition: "Executes a function for each array element" },
      { term: "map", definition: "Creates a new array by applying a function to each element" },
      { term: "filter", definition: "Creates a new array with elements that pass a test" },
      { term: "reduce", definition: "Reduces an array to a single value" },
      { term: "find", definition: "Returns the first element that passes a test" },
      { term: "some", definition: "Returns true if at least one element passes a test" },
      { term: "every", definition: "Returns true if all elements pass a test" },
      { term: "Use array methods over loops", definition: "More readable, less error-prone, easier to chain" },
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Les boucles sont utilisées pour répéter un bloc de code plusieurs fois. Dans le Code Propre, nous visons à écrire des boucles claires, simples et faciles à comprendre." },
        { type: "p", text: "Dans cette leçon, nous apprendrons comment écrire de meilleures boucles et éviter les erreurs courantes qui rendent le code difficile à lire." },
      ]},
      { title: "Qu'est-ce que les boucles ?", content: [
        { type: "p", text: "Les boucles permettent au code de s'exécuter de manière répétée en fonction d'une condition. Il y a trois types principaux de boucles en JavaScript :" },
        { type: "li", text: "Boucle <code>for</code> : Utilisée quand vous connaissez le nombre d'itérations" },
        { type: "li", text: "Boucle <code>while</code> : Utilisée quand vous ne connaissez pas le nombre d'itérations" },
        { type: "li", text: "Boucle <code>do...while</code> : Similaire à while, mais s'exécute au moins une fois" },
      ]},
      { title: "Le problème avec les boucles", content: [
        { type: "p", text: "Les boucles peuvent rendre le code difficile à comprendre et à maintenir, surtout quand elles sont complexes ou contiennent beaucoup de boucles imbriquées." },
        { type: "p", text: "Problèmes courants avec les boucles :" },
        { type: "li", text: "<strong>Trop de boucles imbriquées :</strong> Rendent le code difficile à comprendre" },
        { type: "li", text: "<strong>Conditions complexes :</strong> Rendent les boucles difficiles à suivre" },
        { type: "li", text: "<strong>Modification des variables de boucle :</strong> Peut causer des comportements inattendus" },
        { type: "li", text: "<strong>Utilisation excessive de break ou continue :</strong> Rend le flux du code flou" },
      ]},
      { title: "Alternatives aux boucles", content: [
        { type: "p", text: "JavaScript fournit plusieurs méthodes pour remplacer les boucles traditionnelles par du code plus lisible et fonctionnel." },
        { type: "p", text: "La méthode <code>forEach</code> exécute une fonction pour chaque élément du tableau." },
        { type: "p", text: "La méthode <code>map</code> crée un nouveau tableau en appliquant une fonction à chaque élément du tableau original." },
        { type: "p", text: "La méthode <code>filter</code> crée un nouveau tableau avec les éléments qui passent un test spécifique." },
        { type: "p", text: "La méthode <code>reduce</code> réduit un tableau à une seule valeur en appliquant une fonction à un accumulateur." },
        { type: "p", text: "La méthode <code>find</code> retourne le premier élément qui passe un test spécifique." },
        { type: "p", text: "La méthode <code>some</code> retourne vrai si au moins un élément passe un test spécifique." },
        { type: "p", text: "La méthode <code>every</code> retourne vrai si tous les éléments passent un test spécifique." },
      ]},
      { title: "Utilisation efficace des méthodes de tableau", content: [
        { type: "p", text: "Les méthodes de tableau sont des outils puissants qui peuvent remplacer les boucles traditionnelles par du code plus lisible et fonctionnel. Voici comment les utiliser efficacement :" },
        { type: "p", text: "Avantages de l'utilisation des méthodes de tableau :" },
        { type: "li", text: "Code plus lisible et déclaratif" },
        { type: "li", text: "Plus facile de chaîner plusieurs opérations" },
        { type: "li", text: "Moins de chances d'erreurs" },
        { type: "li", text: "Plus facile à tester et à déboguer" },
      ]},
    ],
    quiz: [
      { question: "Laquelle des suivantes est la meilleure alternative à une boucle for traditionnelle pour itérer sur un tableau ?", options: ["Boucle while", "Boucle do...while", "Méthode forEach", "Instruction switch"], explanation: "La méthode forEach est plus lisible et déclarative qu'une boucle for traditionnelle. Elle exprime clairement l'intention d'itérer sur les éléments du tableau." },
    ],
    challenge: { title: "Défi : Refactorisez la boucle", description: "Le code suivant utilise une boucle for complexe. Refactorisez-la en utilisant les méthodes de tableau." },
    cheatSheet: { title: "Référence des boucles", items: [
      { term: "forEach", definition: "Exécute une fonction pour chaque élément du tableau" },
      { term: "map", definition: "Crée un nouveau tableau en appliquant une fonction à chaque élément" },
      { term: "filter", definition: "Crée un nouveau tableau avec les éléments qui passent un test" },
      { term: "reduce", definition: "Réduit un tableau à une seule valeur" },
      { term: "find", definition: "Retourne le premier élément qui passe un test" },
      { term: "some", definition: "Retourne vrai si au moins un élément passe un test" },
      { term: "every", definition: "Retourne vrai si tous les éléments passent un test" },
      { term: "Utiliser les méthodes de tableau", definition: "Plus lisible, moins d'erreurs, plus facile à chaîner" },
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "Schleifen werden verwendet, um einen Codeblock mehrmals zu wiederholen. In sauberem Code zielen wir darauf ab, klare, einfache und leicht verständliche Schleifen zu schreiben." },
        { type: "p", text: "In dieser Lektion lernen wir, wie man bessere Schleifen schreibt und häufige Fehler vermeidet, die Code schwer lesbar machen." },
      ]},
      { title: "Was sind Schleifen?", content: [
        { type: "p", text: "Schleifen ermöglichen es dem Code, basierend auf einer Bedingung wiederholt ausgeführt zu werden. Es gibt drei Haupttypen von Schleifen in JavaScript:" },
        { type: "li", text: "<code>for</code>-Schleife: Verwendet, wenn Sie die Anzahl der Iterationen kennen" },
        { type: "li", text: "<code>while</code>-Schleife: Verwendet, wenn Sie die Anzahl der Iterationen nicht kennen" },
        { type: "li", text: "<code>do...while</code>-Schleife: Ähnlich wie while, wird aber mindestens einmal ausgeführt" },
      ]},
      { title: "Das Problem mit Schleifen", content: [
        { type: "p", text: "Schleifen können Code schwer verständlich und wartbar machen, besonders wenn sie komplex sind oder viele verschachtelte Schleifen enthalten." },
        { type: "p", text: "Häufige Probleme mit Schleifen:" },
        { type: "li", text: "<strong>Zu viele verschachtelte Schleifen:</strong> Machen Code schwer verständlich" },
        { type: "li", text: "<strong>Komplexe Bedingungen:</strong> Machen Schleifen schwer zu verfolgen" },
        { type: "li", text: "<strong>Ändern von Schleifenvariablen:</strong> Kann unerwartetes Verhalten verursachen" },
        { type: "li", text: "<strong>Übermäßige Verwendung von break oder continue:</strong> Macht Codefluss unklar" },
      ]},
      { title: "Alternativen zu Schleifen", content: [
        { type: "p", text: "JavaScript bietet mehrere Methoden, um traditionelle Schleifen durch更具lesbaren und funktionalen Code zu ersetzen." },
        { type: "p", text: "Die <code>forEach</code>-Methode führt eine Funktion für jedes Array-Element aus." },
        { type: "p", text: "Die <code>map</code>-Methode erstellt ein neues Array, indem sie eine Funktion auf jedes Element des Originalarrays anwendet." },
        { type: "p", text: "Die <code>filter</code>-Methode erstellt ein neues Array mit Elementen, die einen bestimmten Test bestehen." },
        { type: "p", text: "Die <code>reduce</code>-Methode reduziert ein Array auf einen einzigen Wert, indem sie eine Funktion auf einen Akkumulator anwendet." },
        { type: "p", text: "Die <code>find</code>-Methode gibt das erste Element zurück, das einen bestimmten Test besteht." },
        { type: "p", text: "Die <code>some</code>-Methode gibt true zurück, wenn mindestens ein Element einen bestimmten Test besteht." },
        { type: "p", text: "Die <code>every</code>-Methode gibt true zurück, wenn alle Elemente einen bestimmten Test bestehen." },
      ]},
      { title: "Effektive Verwendung von Array-Methoden", content: [
        { type: "p", text: "Array-Methoden sind leistungsstarke Werkzeuge, die traditionelle Schleifen durch更具lesbaren und funktionalen Code ersetzen können. So verwenden Sie sie effektiv:" },
        { type: "p", text: "Vorteile der Verwendung von Array-Methoden:" },
        { type: "li", text: "Mehr lesbarer und deklarativer Code" },
        { type: "li", text: "Leichter, mehrere Operationen zu verketten" },
        { type: "li", text: "Geringere Fehlerwahrscheinlichkeit" },
        { type: "li", text: "Leichter zu testen und zu debuggen" },
      ]},
    ],
    quiz: [
      { question: "Welche der folgenden ist die beste Alternative zu einer traditionellen for-Schleife zum Iterieren über ein Array?", options: ["while-Schleife", "do...while-Schleife", "forEach-Methode", "switch-Anweisung"], explanation: "Die forEach-Methode ist lesbarer und deklarativer als eine traditionelle for-Schleife. Sie drückt die Absicht aus, über Array-Elemente zu iterieren, klar aus." },
    ],
    challenge: { title: "Herausforderung: Refaktorisieren Sie die Schleife", description: "Der folgende Code verwendet eine komplexe for-Schleife. Refaktorisieren Sie sie mit Array-Methoden." },
    cheatSheet: { title: "Übersicht über Schleifen", items: [
      { term: "forEach", definition: "Führt eine Funktion für jedes Array-Element aus" },
      { term: "map", definition: "Erstellt ein neues Array, indem es eine Funktion auf jedes Element anwendet" },
      { term: "filter", definition: "Erstellt ein neues Array mit Elementen, die einen Test bestehen" },
      { term: "reduce", definition: "Reduziert ein Array auf einen einzigen Wert" },
      { term: "find", definition: "Gibt das erste Element zurück, das einen Test besteht" },
      { term: "some", definition: "Gibt true zurück, wenn mindestens ein Element einen Test besteht" },
      { term: "every", definition: "Gibt true zurück, wenn alle Elemente einen Test bestehen" },
      { term: "Array-Methoden statt Schleifen", definition: "Mehr lesbar, weniger fehleranfällig, leichter zu verketten" },
    ]}
  },
};

export default translations;
