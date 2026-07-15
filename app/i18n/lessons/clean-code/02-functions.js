const translations = {
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Functions are the basic building blocks of any program. Clean functions are simple, focused, and do one thing well. They are the key to writing readable and maintainable code." },
        { type: "p", text: "In this lesson, we will learn the golden rules of writing clean functions that make your code easier to understand and test." },
      ]},
      { title: "The Single Responsibility Principle", content: [
        { type: "p", text: "The most important rule for functions is the <strong>Single Responsibility Principle</strong>: each function should do one thing, do it well, and do it only." },
        { type: "p", text: "When you find yourself adding the word \"and\" to describe what a function does, this is a strong sign that the function needs to be split." },
        { type: "p", text: "Benefits of small functions:" },
        { type: "li", text: "Easier to understand and read" },
        { type: "li", text: "Easier to test and debug" },
        { type: "li", text: "Easier to reuse in different places" },
        { type: "li", text: "Changes to one part don't affect other parts" },
      ]},
      { title: "Function Size", content: [
        { type: "p", text: "There is no strict rule for function length, but a good guideline is: <strong>If you need to scroll to see the entire function, it is probably too long</strong>." },
        { type: "p", text: "As a general rule, a function should not exceed 20 lines. If it does, consider splitting it into smaller functions." },
        { type: "callout", title: "Remember", text: "The goal is not to make functions as short as possible, but to make them clear and focused. A 15-line function that is clear is better than a 3-line function that is confusing." },
      ]},
      { title: "Function Arguments", content: [
        { type: "p", text: "Function arguments are one of the powerful tools in programming, but they can make functions complex if used incorrectly." },
        { type: "p", text: "Best practices for arguments:" },
        { type: "li", text: "<strong>Avoid too many arguments:</strong> Ideally 0-2, maximum 3" },
        { type: "li", text: "<strong>Avoid output arguments:</strong> Functions should return values, not modify arguments" },
        { type: "li", text: "<strong>Use options object:</strong> When you have many options, use an object" },
        { type: "li", text: "<strong>Be consistent:</strong> If a function takes arguments in a certain order, other functions should follow the same pattern" },
      ]},
      { title: "Function Structure", content: [
        { type: "p", text: "To write clean functions, follow this structure:" },
        { type: "li", text: "<strong>Function name:</strong> Clear and descriptive, starts with a verb" },
        { type: "li", text: "<strong>Arguments:</strong> Minimal and clear" },
        { type: "li", text: "<strong>Body:</strong> Focused on one task" },
        { type: "li", text: "<strong>Return value:</strong> Clear and expected" },
      ]},
      { title: "Functions in JavaScript", content: [
        { type: "p", text: "JavaScript offers several ways to define functions. Use the appropriate method based on your needs:" },
        { type: "li", text: "<strong>Function Declaration:</strong> Standard method, can be used before definition (hoisting)" },
        { type: "li", text: "<strong>Function Expression:</strong> Used when you need to define a function and store it in a variable" },
        { type: "li", text: "<strong>Arrow Functions:</strong> Shorter syntax, especially good for callbacks" },
        { type: "p", text: "All methods are valid, but choose the appropriate one based on your needs." },
      ]},
      { title: "Purity and Side Effects", content: [
        { type: "p", text: "A <strong>pure function</strong> is a function that:" },
        { type: "li", text: "Always returns the same output for the same input" },
        { type: "li", text: "Does not cause any side effects (does not change external state)" },
        { type: "p", text: "Benefits of pure functions:" },
        { type: "li", text: "Easy to test" },
        { type: "li", text: "Easy to debug" },
        { type: "li", text: "Can be cached" },
        { type: "li", text: "Easy to reason about" },
      ]},
    ],
    quiz: [
      { question: "What is the most important rule for functions in Clean Code?", options: ["Functions should be short", "Functions should do one thing", "Functions should have few arguments", "Functions should be pure"], explanation: "The Single Responsibility Principle is the most important rule: each function should do one thing, do it well, and do it only." },
    ],
    challenge: { title: "Challenge: Refactor the function", description: "The following function does too many things. Refactor it to follow the Single Responsibility Principle." },
    cheatSheet: { title: "Functions Cheat Sheet", items: [
      { term: "Single Responsibility", definition: "Each function should do one thing, do it well, do it only" },
      { term: "Function Size", definition: "Should not exceed 20 lines. If longer, split into smaller functions" },
      { term: "Arguments", definition: "Ideally 0-2, maximum 3. Use options object for many options" },
      { term: "Purity", definition: "Same input → same output, no side effects" },
      { term: "Naming", definition: "Start with a verb: get, create, validate, calculate" },
      { term: "Structure", definition: "Name → Arguments → Body → Return value" },
      { term: "Arrow Functions", definition: "Good for callbacks, shorter syntax" },
      { term: "Hoisting", definition: "Function declarations can be used before definition" },
    ]},
    interviewQuestions: [
      { question: "How do you choose variable names?", answer: "Use descriptive names, avoid abbreviations, use camelCase.", difficulty: "easy" }
    ],
    tricks: [
      { title: "Use names that reveal intent", description: "Instead of i, j, x, use userCount, totalPrice", type: "brain" }
    ]
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Les fonctions sont les blocs de construction de base de tout programme. Les fonctions propres sont simples, ciblées et font une chose bien. Elles sont la clé pour écrire du code lisible et maintenable." },
        { type: "p", text: "Dans cette leçon, nous apprendrons les règles d'or pour écrire des fonctions propres qui rendent votre code plus facile à comprendre et à tester." },
      ]},
      { title: "Le principe de responsabilité unique", content: [
        { type: "p", text: "La règle la plus importante pour les fonctions est le <strong>principe de responsabilité unique</strong> : chaque fonction doit faire une chose, la bien faire, et ne la faire que." },
        { type: "p", text: "Lorsque vous trouvez que vous utilisez le mot \"et\" pour décrire ce qu'une fonction fait, c'est un signe fort que la fonction doit être divisée." },
        { type: "p", text: "Avantages des petites fonctions :" },
        { type: "li", text: "Plus faciles à comprendre et à lire" },
        { type: "li", text: "Plus faciles à tester et à déboguer" },
        { type: "li", text: "Plus faciles à réutiliser à différents endroits" },
        { type: "li", text: "Les modifications d'une partie n'affectent pas les autres parties" },
      ]},
      { title: "Taille des fonctions", content: [
        { type: "p", text: "Il n'y a pas de règle stricte pour la longueur des fonctions, mais une bonne guideline est : <strong>Si vous devez défiler pour voir la fonction entière, elle est probablement trop longue</strong>." },
        { type: "p", text: "En règle générale, une fonction ne devrait pas dépasser 20 lignes. Si c'est le cas, envisagez de la diviser en fonctions plus petites." },
        { type: "callout", title: "Rappel", text: "Le but n'est pas de rendre les fonctions aussi courtes que possible, mais de les rendre claires et ciblées. Une fonction de 15 lignes qui est claire est meilleure qu'une fonction de 3 lignes qui est déroutante." },
      ]},
      { title: "Arguments des fonctions", content: [
        { type: "p", text: "Les arguments des fonctions sont l'un des outils puissants en programmation, mais ils peuvent rendre les fonctions complexes s'ils sont mal utilisés." },
        { type: "p", text: "Meilleures pratiques pour les arguments :" },
        { type: "li", text: "<strong>Évitez trop d'arguments :</strong> Idéalement 0-2, maximum 3" },
        { type: "li", text: "<strong>Évitez les arguments de sortie :</strong> Les fonctions doivent retourner des valeurs, pas modifier des arguments" },
        { type: "li", text: "<strong>Utilisez un objet d'options :</strong> Lorsque vous avez beaucoup d'options, utilisez un objet" },
        { type: "li", text: "<strong>Soyez cohérent :</strong> Si une fonction prend des arguments dans un certain ordre, les autres fonctions devraient suivre le même modèle" },
      ]},
      { title: "Structure des fonctions", content: [
        { type: "p", text: "Pour écrire des fonctions propres, suivez cette structure :" },
        { type: "li", text: "<strong>Nom de la fonction :</strong> Clair et descriptif, commence par un verbe" },
        { type: "li", text: "<strong>Arguments :</strong> Minimaux et clairs" },
        { type: "li", text: "<strong>Corps :</strong> Ciblé sur une tâche" },
        { type: "li", text: "<strong>Valeur de retour :</strong> Claire et attendue" },
      ]},
      { title: "Fonctions en JavaScript", content: [
        { type: "p", text: "JavaScript offre plusieurs façons de définir des fonctions. Utilisez la méthode appropriée en fonction de vos besoins :" },
        { type: "li", text: "<strong>Déclaration de fonction :</strong> Méthode standard, peut être utilisée avant la définition (hoisting)" },
        { type: "li", text: "<strong>Expression de fonction :</strong> Utilisée quand vous devez définir une fonction et la stocker dans une variable" },
        { type: "li", text: "<strong>Arrow Functions :</strong> Syntaxe plus courte, particulièrement bonne pour les callbacks" },
        { type: "p", text: "Toutes les méthodes sont valides, mais choisissez celle qui convient à vos besoins." },
      ]},
      { title: "Pureté et effets de bord", content: [
        { type: "p", text: "Une <strong>fonction pure</strong> est une fonction qui :" },
        { type: "li", text: "Retourne toujours la même sortie pour la même entrée" },
        { type: "li", text: "Ne cause aucun effet de bord (ne modifie pas l'état externe)" },
        { type: "p", text: "Avantages des fonctions pures :" },
        { type: "li", text: "Faciles à tester" },
        { type: "li", text: "Faciles à déboguer" },
        { type: "li", text: "Peuvent être mises en cache" },
        { type: "li", text: "Faciles à raisonner" },
      ]},
    ],
    quiz: [
      { question: "Quelle est la règle la plus importante pour les fonctions dans le Code Propre ?", options: ["Les fonctions devraient être courtes", "Les fonctions devraient faire une chose", "Les fonctions devraient avoir peu d'arguments", "Les fonctions devraient être pures"], explanation: "Le principe de responsabilité unique est la règle la plus importante : chaque fonction doit faire une chose, la bien faire, et ne la faire que." },
    ],
    challenge: { title: "Défi : Refactorisez la fonction", description: "La fonction suivante fait trop de choses. Refactorisez-la pour suivre le principe de responsabilité unique." },
    cheatSheet: { title: "Référence des fonctions", items: [
      { term: "Responsabilité unique", definition: "Chaque fonction doit faire une chose, la bien faire, ne la faire que" },
      { term: "Taille des fonctions", definition: "Ne devrait pas dépasser 20 lignes. Si plus longue, divisez en fonctions plus petites" },
      { term: "Arguments", definition: "Idéalement 0-2, maximum 3. Utilisez un objet d'options pour beaucoup d'options" },
      { term: "Pureté", definition: "Même entrée → même sortie, pas d'effets de bord" },
      { term: "Nommage", definition: "Commence par un verbe : get, create, validate, calculate" },
      { term: "Structure", definition: "Nom → Arguments → Corps → Valeur de retour" },
      { term: "Arrow Functions", definition: "Bon pour les callbacks, syntaxe plus courte" },
      { term: "Hoisting", definition: "Les déclarations de fonctions peuvent être utilisées avant la définition" },
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "Funktionen sind die grundlegenden Bausteine jedes Programms. Saubere Funktionen sind einfach, fokussiert und tun eine Sache gut. Sie sind der Schlüssel zum Schreiben von lesemachtem und wartbarem Code." },
        { type: "p", text: "In dieser Lektion lernen wir die goldenen Regeln zum Schreiben sauberer Funktionen, die Ihren Code leichter verständlich und testbar machen." },
      ]},
      { title: "Das Prinzip der Verantwortlichkeit", content: [
        { type: "p", text: "Die wichtigste Regel für Funktionen ist das <strong>Prinzip der Verantwortlichkeit</strong>: Jede Funktion sollte eine Sache tun, sie gut tun und sie nur tun." },
        { type: "p", text: "Wenn Sie feststellen, dass Sie das Wort \"und\" verwenden, um zu beschreiben, was eine Funktion tut, ist dies ein starkes Zeichen dafür, dass die Funktion aufgeteilt werden muss." },
        { type: "p", text: "Vorteile kleiner Funktionen:" },
        { type: "li", text: "Leichter zu verstehen und zu lesen" },
        { type: "li", text: "Leichter zu testen und zu debuggen" },
        { type: "li", text: "Leichter an verschiedenen Stellen wiederverwendbar" },
        { type: "li", text: "Änderungen an einem Teil beeinträchtigen andere Teile nicht" },
      ]},
      { title: "Funktionsgröße", content: [
        { type: "p", text: "Es gibt keine strikte Regel für die Funktionslänge, aber eine gute Richtlinie ist: <strong>Wenn Sie scrollen müssen, um die gesamte Funktion zu sehen, ist sie wahrscheinlich zu lang</strong>." },
        { type: "p", text: "Als Faustregel sollte eine Funktion 20 Zeilen nicht überschreiten. Wenn ja, teilen Sie sie in kleinere Funktionen auf." },
        { type: "callout", title: "Merken", text: "Das Ziel ist nicht, Funktionen so kurz wie möglich zu machen, sondern sie klar und fokussiert zu machen. Eine 15-Zeilen-Funktion, die klar ist, ist besser als eine 3-Zeilen-Funktion, die verwirrend ist." },
      ]},
      { title: "Funktionsargumente", content: [
        { type: "p", text: "Funktionsargumente sind eines der leistungsstarken Werkzeuge in der Programmation, können Funktionen aber komplex machen, wenn sie falsch verwendet werden." },
        { type: "p", text: "Best Practices für Argumente:" },
        { type: "li", text: "<strong>Vermeiden Sie zu viele Argumente:</strong> Idealerweise 0-2, maximal 3" },
        { type: "li", text: "<strong>Vermeiden Sie Ausgabe-Argumente:</strong> Funktionen sollten Werte zurückgeben, nicht Argumente ändern" },
        { type: "li", text: "<strong>Verwenden Sie ein Optionsobjekt:</strong> Bei vielen Optionen verwenden Sie ein Objekt" },
        { type: "li", text: "<strong>Seien Sie konsistent:</strong> Wenn eine Funktion Argumente in einer bestimmten Reihenfolge nimmt, sollten andere Funktionen dasselbe Muster befolgen" },
      ]},
      { title: "Funktionsstruktur", content: [
        { type: "p", text: "Um saubere Funktionen zu schreiben, befolgen Sie diese Struktur:" },
        { type: "li", text: "<strong>Funktionsname:</strong> Klar und beschreibend, beginnt mit einem Verb" },
        { type: "li", text: "<strong>Argumente:</strong> Minimal und klar" },
        { type: "li", text: "<strong>Rumpf:</strong> Auf eine Aufgabe fokussiert" },
        { type: "li", text: "<strong>Rückgabewert:</strong> Klar und erwartet" },
      ]},
      { title: "Funktionen in JavaScript", content: [
        { type: "p", text: "JavaScript bietet mehrere Möglichkeiten, Funktionen zu definieren. Verwenden Sie die entsprechende Methode basierend auf Ihren Bedürfnissen:" },
        { type: "li", text: "<strong>Funktionsdeklaration:</strong> Standardmethode, kann vor der Definition verwendet werden (Hoisting)" },
        { type: "li", text: "<strong>Funktionsausdruck:</strong> Verwendet, wenn Sie eine Funktion definieren und in einer Variable speichern müssen" },
        { type: "li", text: "<strong>Arrow Functions:</strong> Kürzere Syntax, besonders gut für Callbacks" },
        { type: "p", text: "Alle Methoden sind gültig, aber wählen Sie die entsprechende basierend auf Ihren Bedürfnissen." },
      ]},
      { title: "Reinheit und Nebeneffekte", content: [
        { type: "p", text: "Eine <strong>reine Funktion</strong> ist eine Funktion, die:" },
        { type: "li", text: "Immer dieselbe Ausgabe für dieselbe Eingabe zurückgibt" },
        { type: "li", text: "Keine Nebeneffekte verursacht (ändert keinen externen Zustand)" },
        { type: "p", text: "Vorteile reiner Funktionen:" },
        { type: "li", text: "Leicht zu testen" },
        { type: "li", text: "Leicht zu debuggen" },
        { type: "li", text: "Können zwischengespeichert werden" },
        { type: "li", text: "Leicht zu durchdenken" },
      ]},
    ],
    quiz: [
      { question: "Was ist die wichtigste Regel für Funktionen in sauberem Code?", options: ["Funktionen sollten kurz sein", "Funktionen sollten eine Sache tun", "Funktionen sollten wenige Argumente haben", "Funktionen sollten rein sein"], explanation: "Das Prinzip der Verantwortlichkeit ist die wichtigste Regel: Jede Funktion sollte eine Sache tun, sie gut tun und sie nur tun." },
    ],
    challenge: { title: "Herausforderung: Refaktorisieren Sie die Funktion", description: "Die folgende Funktion tut zu viele Dinge. Refaktorisieren Sie sie nach dem Prinzip der Verantwortlichkeit." },
    cheatSheet: { title: "Übersicht über Funktionen", items: [
      { term: "Verantwortlichkeit", definition: "Jede Funktion sollte eine Sache tun, sie gut tun, sie nur tun" },
      { term: "Funktionsgröße", definition: "Sollte 20 Zeilen nicht überschreiten. Wenn länger, teilen Sie in kleinere Funktionen" },
      { term: "Argumente", definition: "Idealerweise 0-2, maximal 3. Verwenden Sie ein Optionsobjekt bei vielen Optionen" },
      { term: "Reinheit", definition: "Gleiche Eingabe → gleiche Ausgabe, keine Nebeneffekte" },
      { term: "Benennung", definition: "Beginnt mit einem Verb: get, create, validate, calculate" },
      { term: "Struktur", definition: "Name → Argumente → Rumpf → Rückgabewert" },
      { term: "Arrow Functions", definition: "Gut für Callbacks, kürzere Syntax" },
      { term: "Hoisting", definition: "Funktionsdeklarationen können vor der Definition verwendet werden" },
    ]}
  },
};

export default translations;
