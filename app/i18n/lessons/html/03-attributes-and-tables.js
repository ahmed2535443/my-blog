const translations = {
  en: {
    sections: [
      {
        title: "What are Attributes?",
        content: [
          { type: "p", text: "Attributes are additional information we place inside the opening tag to change the element's behavior or appearance, or to provide descriptive data about it. They always come in the form <code>name=\"value\"</code>." },
          { type: "p", text: "If the tag is like the name (a car), then attributes are the properties (color=\"red\", model=\"2026\")." },
          { type: "callout", title: "Analogy", text: "If the tag is the \"car name\" (like Toyota), then attributes are the \"car properties\" (color=\"red\", year=\"2026\"). Each attribute gives additional information about the element." }
        ]
      },
      {
        title: "Most Common Attributes",
        content: [
          { type: "p", text: "There are attributes that can be used with most HTML tags:" },
          { type: "li", text: "<strong><code>id</code></strong>: Gives a unique identifier to the element on the page. The same id should not be repeated on a single page. It's mainly used to access the element using JavaScript or for internal navigation." },
          { type: "li", text: "<strong><code>class</code></strong>: Used to classify elements. The same class can be given to multiple elements, and a single element can have multiple classes (separated by spaces). Its main use is with CSS for applying styles." },
          { type: "li", text: "<strong><code>style</code></strong>: Used to add CSS styles directly to the element (Inline CSS). It's best to avoid it and use external CSS files." },
          { type: "li", text: "<strong><code>title</code></strong>: Shows a tooltip when hovering over the element." },
          { type: "callout", title: "Important Rule for id vs class", text: "<strong>id is unique</strong> - it cannot be repeated on the page. Use it for a single distinctive element.<br /><strong>class is repeatable</strong> - it can be used with multiple elements. Use it to style multiple elements with the same style." }
        ]
      },
      {
        title: "Introduction to Tables",
        content: [
          { type: "p", text: "Tables are used to display tabular data, like price tables, statistics, or any data consisting of rows and columns." },
          { type: "p", text: "The basic tags for building a table are:" },
          { type: "li", text: "<code>&lt;table&gt;</code>: The main container for the table." },
          { type: "li", text: "<code>&lt;tr&gt;</code>: Represents a row in the table (Table Row)." },
          { type: "li", text: "<code>&lt;th&gt;</code>: Represents a table header cell (Table Header). The text inside is bold and distinctive." },
          { type: "li", text: "<code>&lt;td&gt;</code>: Represents a regular data cell in the table (Table Data)." }
        ]
      },
      {
        title: "Practical Example: User Data Table",
        content: [
          { type: "p", text: "Let's build a table displaying user names and their email addresses. Notice how we use <code>&lt;thead&gt;</code> for the table header and <code>&lt;tbody&gt;</code> for the table body to improve semantic structure." },
          { type: "p", text: "<strong>Note:</strong> The <code>scope=\"col\"</code> attribute in the <code>&lt;th&gt;</code> tag is an excellent practice for improving accessibility, as it tells screen readers that this cell is a header for the entire column." }
        ]
      },
      {
        title: "Advanced Tables: thead, tbody, tfoot",
        content: [
          { type: "p", text: "You can divide the table into semantic sections:" },
          { type: "p", text: "Notice the <code>colspan=\"2\"</code> attribute - this attribute makes the cell span across 2 columns." }
        ]
      },
      {
        title: "What Happens Behind the Scenes?",
        content: [
          { type: "p", text: "When the browser reads an HTML table, the following happens:" },
          { type: "li", text: "Creates the <code>&lt;table&gt;</code> structure as the main container." },
          { type: "li", text: "Each <code>&lt;tr&gt;</code> creates a horizontal row." },
          { type: "li", text: "Each <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> creates a cell inside the row." },
          { type: "li", text: "Applies default styles: <code>&lt;th&gt;</code> is bold and centered, while <code>&lt;td&gt;</code> is normal." },
          { type: "li", text: "Adds default borders to tables in some browsers." },
          { type: "p", text: "If you want to override the default styling, you can use CSS to style the table to your liking." }
        ]
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "<strong>Using tables for layout:</strong> In the past, developers used tables to structure page layouts. This is a very bad and outdated practice. Use CSS (like Flexbox or Grid) for layout." },
          { type: "li", text: "<strong>Forgetting quotation marks around attribute values:</strong> Writing <code>class=heading</code> might work, but it's incorrect. Always use quotation marks: <code>class=\"heading\"</code>." },
          { type: "li", text: "<strong>Using <code>&lt;td&gt;</code> instead of <code>&lt;th&gt;</code> in table headers:</strong> This reduces the meaning and accessibility of the table." },
          { type: "li", text: "<strong>Forgetting tbody and thead:</strong> Using <code>&lt;tr&gt;</code> directly without <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code>. This weakens the semantic structure of the table." }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Always use thead, tbody, and tfoot:</strong> To improve semantic structure." },
          { type: "li", text: "<strong>Use scope=\"col\" with &lt;th&gt;:</strong> To improve accessibility." },
          { type: "li", text: "<strong>Don't use tables for layout:</strong> Use Flexbox or Grid in CSS." },
          { type: "li", text: "<strong>Use colspan and rowspan only when needed:</strong> And make sure the table doesn't become complex." },
          { type: "li", text: "<strong>Add a caption to the table:</strong> Using <code>&lt;caption&gt;</code> to improve SEO and accessibility." }
        ]
      },
      {
        title: "Lesson Summary",
        content: [
          { type: "li", text: "<strong>Attributes</strong> give elements additional information" },
          { type: "li", text: "Most common attributes: <code>id</code> (unique) | <code>class</code> (repeatable) | <code>style</code> | <code>title</code>" },
          { type: "li", text: "Tables are used to display tabular data only" },
          { type: "li", text: "Table tags: <code>&lt;table&gt;</code> | <code>&lt;tr&gt;</code> | <code>&lt;th&gt;</code> | <code>&lt;td&gt;</code>" },
          { type: "li", text: "Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> to improve structure" },
          { type: "li", text: "Don't use tables for layout - use CSS" }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the difference between id and class in HTML?",
        options: [
          "There is no difference between them",
          "id is used for multiple elements, class for a single element",
          "id is unique and cannot be repeated, class can be repeated for multiple elements",
          "id is only in CSS, class is only in HTML"
        ],
        explanation: "id must be unique on the page (cannot be repeated), while class can be used with multiple elements to give them the same style."
      },
      {
        question: "Which tag is used for table headers?",
        options: ["<td>", "<th>", "<tr>", "<caption>"],
        explanation: "<th> is used for table headers. The text inside is automatically bold and centered."
      }
    ],
    challenge: {
      title: "Challenge: Favorite Movies Table",
      description: "Create a table displaying 3 of your favorite movies. The table should have 3 columns: \"Movie Title\", \"Release Year\", and \"Your Rating (out of 10)\". Use the correct semantic tags (<code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>)."
    },
    cheatSheet: {
      title: "Attributes and Tables Cheat Sheet",
      items: [
        { term: "<code>id</code>", definition: "Unique identifier on the page" },
        { term: "<code>class</code>", definition: "Repeatable class name for styling" },
        { term: "<code>style</code>", definition: "Inline CSS styles" },
        { term: "<code>title</code>", definition: "Tooltip on hover" },
        { term: "<code>&lt;table&gt;</code>", definition: "Table container" },
        { term: "<code>&lt;tr&gt;</code>", definition: "Table row" },
        { term: "<code>&lt;th&gt;</code>", definition: "Table header cell" },
        { term: "<code>&lt;td&gt;</code>", definition: "Table data cell" },
        { term: "<code>&lt;thead&gt;</code>", definition: "Table header section" },
        { term: "<code>&lt;tbody&gt;</code>", definition: "Table body section" },
        { term: "<code>&lt;tfoot&gt;</code>", definition: "Table footer section" }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que les attributs ?",
        content: [
          { type: "p", text: "Les attributs sont des informations supplémentaires que nous plaçons à l'intérieur de la balise d'ouverture pour modifier le comportement ou l'apparence de l'élément, ou pour fournir des données descriptives à son sujet. Ils sont toujours sous la forme <code>nom=\"valeur\"</code>." },
          { type: "p", text: "Si la balise est comme le nom (une voiture), alors les attributs sont les propriétés (couleur=\"rouge\", modèle=\"2026\")." },
          { type: "callout", title: "Analogie", text: "Si la balise est le \"nom de la voiture\" (comme Toyota), alors les attributs sont les \"propriétés de la voiture\" (couleur=\"rouge\", année=\"2026\"). Chaque attribut donne des informations supplémentaires sur l'élément." }
        ]
      },
      {
        title: "Attributs les plus courants",
        content: [
          { type: "p", text: "Il existe des attributs qui peuvent être utilisés avec la plupart des balises HTML :" },
          { type: "li", text: "<strong><code>id</code></strong> : Donne un identifiant unique à l'élément sur la page. Le même id ne doit pas être répété sur une seule page. Il est principalement utilisé pour accéder à l'élément avec JavaScript ou pour la navigation interne." },
          { type: "li", text: "<strong><code>class</code></strong> : Utilisé pour classifier les éléments. La même classe peut être donnée à plusieurs éléments, et un seul élément peut avoir plusieurs classes (séparées par des espaces). Son utilisation principale est avec CSS pour appliquer des styles." },
          { type: "li", text: "<strong><code>style</code></strong> : Utilisé pour ajouter des styles CSS directement à l'élément (CSS en ligne). Il est préférable de l'éviter et d'utiliser des fichiers CSS externes." },
          { type: "li", text: "<strong><code>title</code></strong> : Affiche un info-bulle au survol de l'élément." },
          { type: "callout", title: "Règle importante pour id vs class", text: "<strong>id est unique</strong> - il ne peut pas être répété sur la page. Utilisez-le pour un seul élément distinctif.<br /><strong>class est répétable</strong> - il peut être utilisé avec plusieurs éléments. Utilisez-le pour styliser plusieurs éléments avec le même style." }
        ]
      },
      {
        title: "Introduction aux tableaux",
        content: [
          { type: "p", text: "Les tableaux sont utilisés pour afficher des données tabulaires, comme des tableaux de prix, des statistiques ou toute donnée composée de lignes et de colonnes." },
          { type: "p", text: "Les balises de base pour construire un tableau sont :" },
          { type: "li", text: "<code>&lt;table&gt;</code> : Le conteneur principal du tableau." },
          { type: "li", text: "<code>&lt;tr&gt;</code> : Représente une ligne dans le tableau (Table Row)." },
          { type: "li", text: "<code>&lt;th&gt;</code> : Représente une cellule d'en-tête de tableau (Table Header). Le texte à l'intérieur est en gras et distinctif." },
          { type: "li", text: "<code>&lt;td&gt;</code> : Représente une cellule de données ordinaire dans le tableau (Table Data)." }
        ]
      },
      {
        title: "Exemple pratique : Tableau de données utilisateur",
        content: [
          { type: "p", text: "Construisons un tableau affichant les noms des utilisateurs et leurs adresses e-mail. Remarquez comment nous utilisons <code>&lt;thead&gt;</code> pour l'en-tête du tableau et <code>&lt;tbody&gt;</code> pour le corps du tableau afin d'améliorer la structure sémantique." },
          { type: "p", text: "<strong>Remarque :</strong> L'attribut <code>scope=\"col\"</code> dans la balise <code>&lt;th&gt;</code> est une excellente pratique pour améliorer l'accessibilité, car il indique aux lecteurs d'écran que cette cellule est un en-tête pour toute la colonne." }
        ]
      },
      {
        title: "Tableaux avancés : thead, tbody, tfoot",
        content: [
          { type: "p", text: "Vous pouvez diviser le tableau en sections sémantiques :" },
          { type: "p", text: "Remarquez l'attribut <code>colspan=\"2\"</code> - cet attribut fait que la cellule s'étend sur 2 colonnes." }
        ]
      },
      {
        title: "Que se passe-t-il en coulisses ?",
        content: [
          { type: "p", text: "Quand le navigateur lit un tableau HTML, voici ce qui se passe :" },
          { type: "li", text: "Crée la structure <code>&lt;table&gt;</code> comme conteneur principal." },
          { type: "li", text: "Chaque <code>&lt;tr&gt;</code> crée une ligne horizontale." },
          { type: "li", text: "Chaque <code>&lt;th&gt;</code> et <code>&lt;td&gt;</code> crée une cellule à l'intérieur de la ligne." },
          { type: "li", text: "Applique des styles par défaut : <code>&lt;th&gt;</code> est en gras et centré, tandis que <code>&lt;td&gt;</code> est normal." },
          { type: "li", text: "Ajoute des bordures par défaut aux tableaux dans certains navigateurs." },
          { type: "p", text: "Si vous voulez remplacer le style par défaut, vous pouvez utiliser CSS pour styliser le tableau à votre goût." }
        ]
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "<strong>Utiliser des tableaux pour la mise en page :</strong> Dans le passé, les développeurs utilisaient des tableaux pour structurer les mises en page. C'est une pratique très mauvaise et dépassée. Utilisez CSS (comme Flexbox ou Grid) pour la mise en page." },
          { type: "li", text: "<strong>Oublier les guillemets autour des valeurs d'attributs :</strong> Écrire <code>class=heading</code> pourrait fonctionner, mais c'est incorrect. Utilisez toujours des guillemets : <code>class=\"heading\"</code>." },
          { type: "li", text: "<strong>Utiliser <code>&lt;td&gt;</code> au lieu de <code>&lt;th&gt;</code> dans les en-têtes de tableau :</strong> Cela réduit la signification et l'accessibilité du tableau." },
          { type: "li", text: "<strong>Oublier tbody et thead :</strong> Utiliser <code>&lt;tr&gt;</code> directement sans <code>&lt;thead&gt;</code> et <code>&lt;tbody&gt;</code>. Cela affaiblit la structure sémantique du tableau." }
        ]
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "<strong>Utilisez toujours thead, tbody et tfoot :</strong> Pour améliorer la structure sémantique." },
          { type: "li", text: "<strong>Utilisez scope=\"col\" avec &lt;th&gt; :</strong> Pour améliorer l'accessibilité." },
          { type: "li", text: "<strong>N'utilisez pas les tableaux pour la mise en page :</strong> Utilisez Flexbox ou Grid en CSS." },
          { type: "li", text: "<strong>Utilisez colspan et rowspan uniquement si nécessaire :</strong> Et assurez-vous que le tableau ne devient pas complexe." },
          { type: "li", text: "<strong>Ajoutez un sous-titre au tableau :</strong> En utilisant <code>&lt;caption&gt;</code> pour améliorer le SEO et l'accessibilité." }
        ]
      },
      {
        title: "Résumé de la leçon",
        content: [
          { type: "li", text: "<strong>Les attributs</strong> donnent aux éléments des informations supplémentaires" },
          { type: "li", text: "Attributs les plus courants : <code>id</code> (unique) | <code>class</code> (répétable) | <code>style</code> | <code>title</code>" },
          { type: "li", text: "Les tableaux sont utilisés uniquement pour afficher des données tabulaires" },
          { type: "li", text: "Balises de tableau : <code>&lt;table&gt;</code> | <code>&lt;tr&gt;</code> | <code>&lt;th&gt;</code> | <code>&lt;td&gt;</code>" },
          { type: "li", text: "Utilisez <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> et <code>&lt;tfoot&gt;</code> pour améliorer la structure" },
          { type: "li", text: "N'utilisez pas les tableaux pour la mise en page - utilisez CSS" }
        ]
      }
    ],
    quiz: [
      {
        question: "Quelle est la différence entre id et class en HTML ?",
        options: [
          "Il n'y a pas de différence entre eux",
          "id est utilisé pour plusieurs éléments, class pour un seul élément",
          "id est unique et ne peut pas être répété, class peut être répété pour plusieurs éléments",
          "id est uniquement en CSS, class est uniquement en HTML"
        ],
        explanation: "id doit être unique sur la page (ne peut pas être répété), tandis que class peut être utilisé avec plusieurs éléments pour leur donner le même style."
      },
      {
        question: "Quelle balise est utilisée pour les en-têtes de tableau ?",
        options: ["<td>", "<th>", "<tr>", "<caption>"],
        explanation: "<th> est utilisé pour les en-têtes de tableau. Le texte à l'intérieur est automatiquement en gras et centré."
      }
    ],
    challenge: {
      title: "Défi : Tableau de films préférés",
      description: "Créez un tableau affichant 3 de vos films préférés. Le tableau doit avoir 3 colonnes : \"Titre du film\", \"Année de sortie\" et \"Votre note (sur 10)\". Utilisez les balises sémantiques correctes (<code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>)."
    },
    cheatSheet: {
      title: "Fiche mémo Attributs et Tableaux",
      items: [
        { term: "<code>id</code>", definition: "Identifiant unique sur la page" },
        { term: "<code>class</code>", definition: "Nom de classe répétable pour le style" },
        { term: "<code>style</code>", definition: "Styles CSS en ligne" },
        { term: "<code>title</code>", definition: "Info-bulle au survol" },
        { term: "<code>&lt;table&gt;</code>", definition: "Conteneur de tableau" },
        { term: "<code>&lt;tr&gt;</code>", definition: "Ligne de tableau" },
        { term: "<code>&lt;th&gt;</code>", definition: "Cellule d'en-tête de tableau" },
        { term: "<code>&lt;td&gt;</code>", definition: "Cellule de données de tableau" },
        { term: "<code>&lt;thead&gt;</code>", definition: "Section d'en-tête de tableau" },
        { term: "<code>&lt;tbody&gt;</code>", definition: "Section de corps de tableau" },
        { term: "<code>&lt;tfoot&gt;</code>", definition: "Section de pied de tableau" }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was sind Attribute?",
        content: [
          { type: "p", text: "Attribute sind zusätzliche Informationen, die wir in das Öffnungstag legen, um das Verhalten oder Aussehen des Elements zu ändern, oder um beschreibende Daten darüber bereitzustellen. Sie kommen immer in der Form <code>name=\"wert\"</code>." },
          { type: "p", text: "Wenn der Tag wie der Name (ein Auto) ist, dann sind Attribute die Eigenschaften (farbe=\"rot\", modell=\"2026\")." },
          { type: "callout", title: "Analogie", text: "Wenn der Tag der \"Autoname\" (wie Toyota) ist, dann sind Attribute die \"Autoeigenschaften\" (farbe=\"rot\", baujahr=\"2026\"). Jedes Attribut gibt zusätzliche Informationen über das Element." }
        ]
      },
      {
        title: "Häufigste Attribute",
        content: [
          { type: "p", text: "Es gibt Attribute, die mit den meisten HTML-Tags verwendet werden können:" },
          { type: "li", text: "<strong><code>id</code></strong>: Gibt dem Element eine eindeutige Kennung auf der Seite. Die gleiche id sollte nicht auf einer einzelnen Seite wiederholt werden. Es wird hauptsächlich verwendet, um das Element mit JavaScript zu erreichen oder für die interne Navigation." },
          { type: "li", text: "<strong><code>class</code></strong>: Wird verwendet, um Elemente zu klassifizieren. Die gleiche Klasse kann mehreren Elements gegeben werden, und ein einzelnes Element kann mehrere Klassen haben (durch Leerzeichen getrennt). Seine Hauptverwendung ist mit CSS für die Anwendung von Stilen." },
          { type: "li", text: "<strong><code>style</code></strong>: Wird verwendet, um CSS-Stile direkt auf das Element anzuwenden (Inline-CSS). Es ist am besten, es zu vermeiden und externe CSS-Dateien zu verwenden." },
          { type: "li", text: "<strong><code>title</code></strong>: Zeigt ein Tooltip beim Überfahren mit der Maus an." },
          { type: "callout", title: "Wichtige Regel für id vs class", text: "<strong>id ist eindeutig</strong> - es kann auf der Seite nicht wiederholt werden. Verwenden Sie es für ein einzelnes charakteristisches Element.<br /><strong>class ist wiederholbar</strong> - es kann mit mehreren Elementen verwendet werden. Verwenden Sie es, um mehrere Elemente mit demselben Stil zu gestalten." }
        ]
      },
      {
        title: "Einführung in Tabellen",
        content: [
          { type: "p", text: "Tabellen werden verwendet, um tabellarische Daten anzuzeigen, wie Preistabellen, Statistiken oder beliebige Daten, die aus Zeilen und Spalten bestehen." },
          { type: "p", text: "Die grundlegenden Tags zum Erstellen einer Tabelle sind:" },
          { type: "li", text: "<code>&lt;table&gt;</code>: Der Hauptcontainer für die Tabelle." },
          { type: "li", text: "<code>&lt;tr&gt;</code>: Stellt eine Zeile in der Tabelle dar (Table Row)." },
          { type: "li", text: "<code>&lt;th&gt;</code>: Stellt eine Kopfzelle der Tabelle dar (Table Header). Der Text darin ist fett und charakteristisch." },
          { type: "li", text: "<code>&lt;td&gt;</code>: Stellt eine normale Datenzelle in der Tabelle dar (Table Data)." }
        ]
      },
      {
        title: "Praktisches Beispiel: Benutzerdaten-Tabelle",
        content: [
          { type: "p", text: "Lassen Sie uns eine Tabelle erstellen, die Benutzernamen und ihre E-Mail-Adressen anzeigt. Beachten Sie, wie wir <code>&lt;thead&gt;</code> für den Tabellenkopf und <code>&lt;tbody&gt;</code> für den Tabellenkörper verwenden, um die semantische Struktur zu verbessern." },
          { type: "p", text: "<strong>Hinweis:</strong> Das <code>scope=\"col\"</code>-Attribut im <code>&lt;th&gt;</code>-Tag ist eine ausgezeichnete Praxis zur Verbesserung der Barrierefreiheit, da es Screenreadern mitteilt, dass diese Zelle eine Überschrift für die gesamte Spalte ist." }
        ]
      },
      {
        title: "Erweiterte Tabellen: thead, tbody, tfoot",
        content: [
          { type: "p", text: "Sie können die Tabelle in semantische Abschnitte unterteilen:" },
          { type: "p", text: "Beachten Sie das <code>colspan=\"2\"</code>-Attribut - dieses Attribut lässt die Zelle sich über 2 Spalten erstrecken." }
        ]
      },
      {
        title: "Was passiert hinter den Kulissen?",
        content: [
          { type: "p", text: "Wenn der Browser eine HTML-Tabelle liest, passiert Folgendes:" },
          { type: "li", text: "Erstellt die <code>&lt;table&gt;</code>-Struktur als Hauptcontainer." },
          { type: "li", text: "Jedes <code>&lt;tr&gt;</code> erstellt eine horizontale Zeile." },
          { type: "li", text: "Jedes <code>&lt;th&gt;</code> und <code>&lt;td&gt;</code> erstellt eine Zelle innerhalb der Zeile." },
          { type: "li", text: "Wendet Standardstile an: <code>&lt;th&gt;</code> ist fett und zentriert, während <code>&lt;td&gt;</code> normal ist." },
          { type: "li", text: "Fügt in einigen Browsern Standardrahmen zu Tabellen hinzu." },
          { type: "p", text: "Wenn Sie die Standardformatierung überschreiben möchten, können Sie CSS verwenden, um die Tabelle nach Ihrem Geschmack zu gestalten." }
        ]
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "<strong>Tabellen für das Layout verwenden:</strong> In der Vergangenheit haben Entwickler Tabellen verwendet, um Seitenlayouts zu strukturieren. Das ist eine sehr schlechte und veraltete Praxis. Verwenden Sie CSS (wie Flexbox oder Grid) für das Layout." },
          { type: "li", text: "<strong>Anführungszeichen um Attributwerte vergessen:</strong> <code>class=heading</code> zu schreiben könnte funktionieren, ist aber falsch. Verwenden Sie immer Anführungszeichen: <code>class=\"heading\"</code>." },
          { type: "li", text: "<strong>Verwendung von <code>&lt;td&gt;</code> statt <code>&lt;th&gt;</code> in Tabellenüberschriften:</strong> Dies reduziert die Bedeutung und Barrierefreiheit der Tabelle." },
          { type: "li", text: "<strong>Vergessen von tbody und thead:</strong> Direkte Verwendung von <code>&lt;tr&gt;</code> ohne <code>&lt;thead&gt;</code> und <code>&lt;tbody&gt;</code>. Dies schwächt die semantische Struktur der Tabelle." }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Verwenden Sie immer thead, tbody und tfoot:</strong> Um die semantische Struktur zu verbessern." },
          { type: "li", text: "<strong>Verwenden Sie scope=\"col\" mit &lt;th&gt;:</strong> Um die Barrierefreiheit zu verbessern." },
          { type: "li", text: "<strong>Verwenden Sie Tabellen nicht für das Layout:</strong> Verwenden Sie Flexbox oder Grid in CSS." },
          { type: "li", text: "<strong>Verwenden Sie colspan und rowspan nur bei Bedarf:</strong> Und stellen Sie sicher, dass die Tabelle nicht komplex wird." },
          { type: "li", text: "<strong>Fügen Sie eine Beschriftung zur Tabelle hinzu:</strong> Mit <code>&lt;caption&gt;</code> um SEO und Barrierefreiheit zu verbessern." }
        ]
      },
      {
        title: "Zusammenfassung der Lektion",
        content: [
          { type: "li", text: "<strong>Attribute</strong> geben Elementen zusätzliche Informationen" },
          { type: "li", text: "Häufigste Attribute: <code>id</code> (einzigartig) | <code>class</code> (wiederholbar) | <code>style</code> | <code>title</code>" },
          { type: "li", text: "Tabellen werden nur zur Anzeige tabellarischer Daten verwendet" },
          { type: "li", text: "Tabellen-Tags: <code>&lt;table&gt;</code> | <code>&lt;tr&gt;</code> | <code>&lt;th&gt;</code> | <code>&lt;td&gt;</code>" },
          { type: "li", text: "Verwenden Sie <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> und <code>&lt;tfoot&gt;</code> zur Strukturverbesserung" },
          { type: "li", text: "Verwenden Sie Tabellen nicht für das Layout - verwenden Sie CSS" }
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist der Unterschied zwischen id und class in HTML?",
        options: [
          "Es gibt keinen Unterschied zwischen ihnen",
          "id wird für mehrere Elemente verwendet, class für ein einzelnes Element",
          "id ist einzigartig und kann nicht wiederholt werden, class kann für mehrere Elemente wiederholt werden",
          "id ist nur in CSS, class ist nur in HTML"
        ],
        explanation: "id muss auf der Seite einzigartig sein (kann nicht wiederholt werden), während class mit mehreren Elementen verwendet werden kann, um ihnen denselben Stil zu geben."
      },
      {
        question: "Welches Tag wird für Tabellenüberschriften verwendet?",
        options: ["<td>", "<th>", "<tr>", "<caption>"],
        explanation: "<th> wird für Tabellenüberschriften verwendet. Der Text darin ist automatisch fett und zentriert."
      }
    ],
    challenge: {
      title: "Herausforderung: Lieblingsfilme-Tabelle",
      description: "Erstellen Sie eine Tabelle mit 3 Ihrer Lieblingsfilme. Die Tabelle sollte 3 Spalten haben: \"Filmtitel\", \"Erscheinungsjahr\" und \"Ihre Bewertung (von 10)\". Verwenden Sie die richtigen semantischen Tags (<code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>)."
    },
    cheatSheet: {
      title: "Spickzettel Attribute und Tabellen",
      items: [
        { term: "<code>id</code>", definition: "Eindeutige Kennung auf der Seite" },
        { term: "<code>class</code>", definition: "Wiederholbarer Klassenname für Stile" },
        { term: "<code>style</code>", definition: "Inline-CSS-Stile" },
        { term: "<code>title</code>", definition: "Tooltip beim Überfahren" },
        { term: "<code>&lt;table&gt;</code>", definition: "Tabellen-Container" },
        { term: "<code>&lt;tr&gt;</code>", definition: "Tabellenzeile" },
        { term: "<code>&lt;th&gt;</code>", definition: "Tabellenkopfzelle" },
        { term: "<code>&lt;td&gt;</code>", definition: "Tabellen-Datenzelle" },
        { term: "<code>&lt;thead&gt;</code>", definition: "Tabellenkopf-Abschnitt" },
        { term: "<code>&lt;tbody&gt;</code>", definition: "Tabellenkörper-Abschnitt" },
        { term: "<code>&lt;tfoot&gt;</code>", definition: "Tabellenfuß-Abschnitt" }
      ]
    }
  }
};

export default translations;