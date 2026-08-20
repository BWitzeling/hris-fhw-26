/*
 * Zentrale Inhaltsdatei des Quiz.
 * Texte, Links und Fragen können hier ohne Änderungen an der Quizlogik gepflegt werden.
 */
window.QUIZ_DATA = {
  eventLabel: "HR Inside Summit 2026",
  headline: "Für alle, die HR nicht nur verwalten, sondern gestalten.",
  heroText: "Testen Sie Ihr HR-Wissen und entdecken Sie praxisnahe Studienangebote für moderne Personalarbeit.",
  prizeLabel: "Mitmachen und eine süße Überraschung als Sofortgewinn abholen.",
  durationLabel: "Dauer: ca. 2 Minuten",
  difficultyLabel: "Schwierigkeitsgrad: mittel",
  introSteps: [
    "Beantworten Sie fünf Fragen mit A, B oder C.",
    "Nach Ihrer Auswahl wird die nächste Frage freigeschaltet.",
    "Am Schluss sehen Sie Ihr Ergebnis und alle Auflösungen."
  ],
  resultPrizeTitle: "Danke fürs Mitmachen!",
  resultPrizeText: "Holen Sie sich jetzt Ihre Manner-Schnitte bei unserem Messeteam ab.",
  studyText: "Praxisnahes Wissen für Menschen, die HR und Organisationen aktiv gestalten wollen.",
  studyUrl: "https://www.fh-wien.ac.at/fachhochschule/studienbereiche/human-resources-organization/",
  newsletterUrl: "https://www.fh-wien.ac.at/newsletter-informieren-und-studieren-anmeldung/",

  questions: [
    {
      question: "Was zeichnet HR als strategische:n Partner:in der Unternehmensführung aus?",
      options: [
        "HR konzentriert sich ausschließlich auf Verträge und Personalakten.",
        "HR überlässt Personalentscheidungen vollständig dem Bauchgefühl der Führungskräfte.",
        "HR verbindet Unternehmensziele mit fundierten Entscheidungen zu Menschen, Kompetenzen und Organisation."
      ],
      correctIndex: 2,
      explanation: "Moderne HR-Arbeit gestaltet den Unternehmenserfolg aktiv mit. Diese Verbindung von HRM, Strategie, Beratungskompetenz und HR Analytics ist Teil des Bachelor-Studiums Personalmanagement."
    },
    {
      question: "Wann ist eine Personalentwicklungsmaßnahme besonders wirksam?",
      options: [
        "Wenn Lernziele, Anwendung im Arbeitsalltag, Feedback und Erfolgskontrolle miteinander verbunden werden.",
        "Wenn möglichst viele Trainings angeboten werden – unabhängig vom tatsächlichen Bedarf.",
        "Wenn die Maßnahme mit dem Ende des Seminars abgeschlossen ist."
      ],
      correctIndex: 0,
      explanation: "Nachhaltige Personalentwicklung endet nicht nach dem Training. Entscheidend ist, ob neues Wissen in den Arbeitsalltag übertragen und wirksam eingesetzt wird."
    },
    {
      question: "Was sollte am Beginn eines größeren Veränderungsprozesses stehen?",
      options: [
        "Die fertige Lösung wird verkündet, bevor Fragen entstehen können.",
        "Ausgangslage und Organisationskultur analysieren, Ziele klären und betroffene Personen frühzeitig einbeziehen.",
        "Ein erprobtes Konzept wird unabhängig von der jeweiligen Organisation übernommen."
      ],
      correctIndex: 1,
      explanation: "Erfolgreiche Veränderung braucht Organisationsdiagnose, Beteiligung und klare Orientierung. Die professionelle Begleitung solcher Prozesse ist ein Schwerpunkt des Master-Studiums Organisations- & Personalentwicklung."
    },
    {
      question: "Was kennzeichnet professionelles Coaching im Organisationskontext am besten?",
      options: [
        "Der Coach gibt für jedes Problem die richtige Lösung vor.",
        "Coaching ist in erster Linie eine verdeckte Leistungsbeurteilung.",
        "Durch gezielte Fragen und Reflexion werden Menschen dabei unterstützt, eigene Lösungen zu entwickeln."
      ],
      correctIndex: 2,
      explanation: "Coaching stärkt Selbstreflexion und Handlungsfähigkeit. Im Master-Studium Organisations- & Personalentwicklung ist eine Coaching-Ausbildung integriert."
    },
    {
      question: "Welche beiden HR-Studiengänge bietet die FHWien der WKW an?",
      options: [
        "Bachelor Personalmanagement und Master Organisations- & Personalentwicklung",
        "Bachelor Personalverrechnung und Master Arbeitsrecht",
        "Bachelor Recruiting und Master Wirtschaftspsychologie"
      ],
      correctIndex: 0,
      explanation: "Vom Einstieg oder nächsten Karriereschritt im Personalmanagement bis zur Vertiefung in Organisationsentwicklung, Personalentwicklung und Coaching bietet die FHWien einen durchgängigen HR-Bildungsweg."
    }
  ]
};
