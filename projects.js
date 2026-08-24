const portfolioProjects = [
  {
    id: "food-app",
    number: "01",
    category: "Full Stack · Python",
    statusKey: "project.progress",
    technologies: ["Python", "Web", "Database"],
    de: {
      title: "Food-App",
      summary: "Mein langfristiges Hauptprojekt: eine Anwendung rund um Lebensmittel, Planung und intelligente Automatisierung. Konzept und Funktionsumfang entstehen derzeit Schritt für Schritt.",
      challenge: "Die App soll Full-Stack-Entwicklung, Datenhaltung und Python-Automatisierung in einem alltagstauglichen Produkt verbinden."
    },
    en: {
      title: "Food App",
      summary: "My long-term flagship project: an application combining food, planning and intelligent automation. Its concept and feature set are currently growing step by step.",
      challenge: "The app is designed to combine full-stack development, data storage and Python automation in a useful everyday product."
    }
  },
  {
    id: "javascript-platformer",
    number: "02",
    category: "Game Development",
    statusKey: "project.playable",
    technologies: ["JavaScript", "Canvas", "Game Design"],
    links: [
      { label: "Live-Demo", url: "game/" },
      { label: "GitHub", url: "https://github.com/Flowdi/dung-dash" }
    ],
    de: {
      title: "Dung Dash",
      summary: "Ein spielbarer Canvas-Plattformer mit mehreren Leveln, Touchsteuerung, Missionen, Achievements und lokal gespeicherten Bestleistungen.",
      challenge: "Spielphysik, Kollisionen, Kameraführung, Levelsystem und Fortschritt wurden ohne Game Engine als modulare JavaScript-Anwendung umgesetzt.",
      period: "2024–2026 · spielbare Version",
      role: "Konzept, Game Design & Entwicklung",
      introduction: "Dung Dash begann als mein erstes eigenes Browser-Spiel und als praktischer Einstieg in Canvas, Spiellogik und Kollisionsberechnung. Aus einem einfachen horizontalen Plattformer mit roten Blöcken ist inzwischen ein vollständigeres Spiel mit eigenem visuellen Stil, mehreren Leveln und dauerhaftem Fortschritt geworden.",
      problem: "Ein Plattformer muss sich unmittelbar und verlässlich anfühlen. Bewegung, Sprünge, Plattformkollisionen und Kameraführung dürfen auch bei unterschiedlichen Bildschirmgrößen nicht auseinanderfallen. Mit wachsendem Funktionsumfang mussten außerdem Leveldaten, Spielfortschritt und Sondermechaniken aus einer zunächst monolithischen Datei in klar getrennte Verantwortungsbereiche überführt werden.",
      approach: "Die aktuelle Version nutzt wartbare ES-Module für Spielzustände, Eingaben, Physik, Level, Rendering, Score und Speicherung. Ein eigener Build erzeugt daraus ein direkt im Browser startbares Bundle. Die Level werden aus Daten aufgebaut und kombinieren feste, bewegte, zeitgesteuerte, zerbrechliche und beschleunigende Plattformen mit Checkpoints, Gefahren und unterschiedlichen visuellen Themen.",
      result: "Entstanden ist eine öffentlich spielbare Kampagne mit drei regulären Leveln und dem vertikalen Royal-Flush-Modus. Timer, Combo-System, Medaillen, Missionen, Achievements und lokale Rekorde geben den Läufen ein klares Ziel. Tastatur- und Touchsteuerung machen das Spiel auf Desktop- und Mobilgeräten bedienbar.",
      highlights: [
        "Drei datengetriebene Level plus vertikaler Royal-Flush-Modus",
        "Responsive Tastatur- und Touchsteuerung",
        "Timer, Combo-Score sowie Bronze-, Silber- und Goldmedaillen",
        "Persönliche Bestzeiten, Highscores und Statistiken im lokalen Speicher",
        "Levelmissionen, sechs Achievements und schrittweise Freischaltung",
        "Bewegte, zeitgesteuerte, zerbrechliche und beschleunigende Plattformen",
        "Wasserstrahlen, rotierende Bürsten, Checkpoints und Respawn-System",
        "58 automatisierte Build- und Gameplay-Tests"
      ],
      decisions: [
        { title: "Ohne Game Engine", text: "Canvas und eigenes JavaScript machen Physik, Rendering und Zustandswechsel vollständig nachvollziehbar und bilden eine direkte Lernumgebung für Spiellogik." },
        { title: "Level als Daten", text: "Aufbau, Ziele, Missionen, Gefahren und visuelle Themen sind vom allgemeinen Spielablauf getrennt. Neue Level lassen sich ergänzen, ohne die Hauptschleife neu zu schreiben." },
        { title: "Fortschritt bleibt lokal", text: "Bestzeiten, Highscores, Missionen und Achievements werden fehlertolerant im Browser gespeichert. Das Spiel benötigt dafür weder Konto noch Backend." }
      ],
      learnings: "Mit wachsendem Umfang wurde besonders deutlich, wie wichtig getrennte Spielzustände und testbare Module sind. Gute Spielmechanik entsteht nicht nur durch neue Features, sondern durch konsistente Kollisionen, verlässliche Eingaben und viele kleine Iterationen am Bewegungsgefühl.",
      nextSteps: [
        "Balancing von Zeiten, Scores und Missionszielen mit weiteren Testläufen verfeinern",
        "Grafiken und Dateigrößen für schnellere mobile Ladezeiten weiter optimieren",
        "Zusätzliches Feedback für Treffer, Combos und besondere Plattformen ergänzen",
        "Neue Level nur als klar abgegrenzte spätere Erweiterungen entwickeln"
      ],
      sectionTitles: {
        introduction: "Vom ersten Canvas-Versuch zum spielbaren Projekt.",
        problem: "Spielgefühl braucht verlässliche Grundlagen.",
        approach: "Modulare Spiellogik statt wachsender Einzeldatei.",
        result: "Eine Kampagne mit Fortschritt und Wiederspielwert.",
        learning: "Gute Mechanik entsteht in vielen Iterationen.",
        next: "Spielbar – mit Raum für gezielte Erweiterungen."
      },
      image: "game/assets/themes/festival-background.png",
      imageAlt: "Festival-Level aus dem Browser-Spiel Dung Dash",
      imageCaption: "Dung Dash · eines der eigenständigen Levelthemen"
    },
    en: {
      title: "Dung Dash",
      summary: "A playable Canvas platformer with multiple levels, touch controls, missions, achievements and locally stored personal records.",
      challenge: "Game physics, collisions, camera movement, the level system and progression were built as a modular JavaScript application without a game engine.",
      period: "2024–2026 · playable version",
      role: "Concept, game design & development",
      introduction: "Dung Dash started as my first original browser game and a practical introduction to Canvas, game logic and collision detection. What began as a simple horizontal platformer with red blocks has grown into a more complete game with a distinct visual style, multiple levels and persistent progress.",
      problem: "A platformer needs to feel immediate and reliable. Movement, jumping, platform collisions and camera tracking must remain consistent across different viewport sizes. As its scope grew, level data, progression and special mechanics also had to move from an initially monolithic file into clearly separated responsibilities.",
      approach: "The current version uses maintainable ES modules for game states, input, physics, levels, rendering, scoring and storage. A custom build turns these modules into a bundle that launches directly in the browser. Data-driven levels combine solid, moving, timed, fragile and bounce platforms with checkpoints, hazards and individual visual themes.",
      result: "The result is a publicly playable campaign with three regular levels and the vertical Royal Flush mode. A timer, combo system, medals, missions, achievements and local records give each run a clear objective. Keyboard and touch controls make the game usable on desktop and mobile devices.",
      highlights: [
        "Three data-driven levels plus a vertical Royal Flush mode",
        "Responsive keyboard and touch controls",
        "Timer, combo score and bronze, silver and gold medals",
        "Personal best times, high scores and statistics in local storage",
        "Level missions, six achievements and progressive unlocking",
        "Moving, timed, fragile, conveyor and bounce platforms",
        "Water jets, rotating brushes, checkpoints and respawning",
        "58 automated build and gameplay tests"
      ],
      decisions: [
        { title: "No game engine", text: "Canvas and custom JavaScript keep physics, rendering and state transitions fully understandable and create a direct learning environment for game logic." },
        { title: "Levels as data", text: "Layouts, objectives, missions, hazards and visual themes are separated from the general game flow. New levels can be added without rewriting the main loop." },
        { title: "Progress stays local", text: "Best times, high scores, missions and achievements are stored fault-tolerantly in the browser. The game requires neither an account nor a backend." }
      ],
      learnings: "As the scope grew, the value of separate game states and testable modules became especially clear. Good game mechanics are not created by features alone, but by consistent collisions, reliable input and many small iterations on movement feel.",
      nextSteps: [
        "Refine time, score and mission balancing through further playtesting",
        "Further optimize graphics and file sizes for faster mobile loading",
        "Add more feedback for hits, combos and special platforms",
        "Develop new levels only as clearly scoped future expansions"
      ],
      sectionTitles: {
        introduction: "From a first Canvas experiment to a playable project.",
        problem: "Game feel depends on reliable foundations.",
        approach: "Modular game logic instead of a growing single file.",
        result: "A campaign with progression and replay value.",
        learning: "Good mechanics emerge through iteration.",
        next: "Playable, with room for focused extensions."
      },
      image: "game/assets/themes/festival-background.png",
      imageAlt: "Festival level from the browser game Dung Dash",
      imageCaption: "Dung Dash · one of its distinct level themes"
    }
  },
  {
    id: "portfolio-v1",
    number: "03",
    category: "Web Development",
    statusKey: "project.complete",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "GitHub", url: "https://github.com/Flowdi/Portfolio-Website" }],
    de: {
      title: "Portfolio Website",
      summary: "Der vollständige Neuaufbau dieser Website als zweisprachiges, zugängliches und erweiterbares Portfolio mit eigener visueller Identität.",
      challenge: "Aus einer frühen Lernwebsite entsteht eine professionelle Plattform, die Projekte nachvollziehbar dokumentiert und leicht erweitert werden kann.",
      period: "August 2026 · laufend",
      role: "Konzept, Design & Entwicklung",
      introduction: "Die erste Version dieser Website war ein wichtiger Lernschritt: Sie brachte Profil, Kenntnisse, Zertifikate und erste Projekte an einem Ort zusammen. Mit wachsender Erfahrung passten Struktur, Sprache und technische Qualität jedoch nicht mehr zu dem Anspruch, den das Portfolio heute vertreten soll.",
      problem: "Die alte Seite wirkte wie eine Sammlung einzelner Bereiche. Inhalte waren teilweise vorläufig, Projekte zu knapp beschrieben und neue Einträge nur durch Änderungen an mehreren Stellen möglich. Auch Navigation, Tastaturbedienung, mobile Darstellung und Metadaten brauchten ein belastbares Fundament.",
      approach: "Der Neuaufbau beginnt bewusst ohne großes Framework. Eine schlanke statische Basis aus HTML, CSS und JavaScript passt zum Hosting, bleibt transparent und macht jede Entscheidung nachvollziehbar. Inhalte, Übersetzungen und Projektdaten werden dabei getrennt von der Darstellung gepflegt.",
      result: "Entstanden ist eine zweisprachige, responsive Grundlage mit eigenem Designsystem, Dark- und Light-Theme, zentraler Projektverwaltung und wiederverwendbaren Detailseiten. Der Umbau wird in klar abgegrenzten Arbeitspaketen dokumentiert und erweitert.",
      highlights: [
        "Zentrale Projektdaten statt fest eingebauter Karten",
        "Deutsch und Englisch aus einer gemeinsamen Inhaltsstruktur",
        "Dark Mode als Standard mit gespeichertem Light Mode",
        "Semantische Struktur, Tastaturfokus und reduzierte Bewegung",
        "SEO-Basis mit Sitemap und strukturierten Personendaten",
        "Keine extern eingebundenen Schriften oder Tracking-Dienste"
      ],
      decisions: [
        { title: "Bewusst ohne Framework", text: "Für den aktuellen Umfang bietet eine statische Architektur kurze Ladezeiten, einfaches Hosting und möglichst wenig technische Komplexität." },
        { title: "Inhalte als Daten", text: "Projekte liegen zentral in einer Datei. Neue Fallstudien lassen sich ergänzen, ohne die Startseite neu strukturieren zu müssen." },
        { title: "Persönlich statt generisch", text: "Typografie, technische Raster, Neonorange und Fotografie verbinden eine seriöse Oberfläche mit einer eigenen, wärmeren Handschrift." }
      ],
      learnings: "Ein professioneller Neuaufbau beginnt nicht mit Effekten, sondern mit Positionierung, guten Inhalten und einer Struktur, die Veränderung aushält. Besonders wichtig war die Entscheidung, Selbsteinschätzungen nicht als scheinbar exakte Prozentwerte zu zeigen, sondern Erfahrung ehrlich einzuordnen.",
      nextSteps: ["Projektseiten mit echten Screenshots erweitern", "Food-App als nächste ausführliche Fallstudie dokumentieren", "Social-Preview und finale Bildoptimierung ergänzen", "Dung Dash durch Balancing und weitere Level ausbauen"],
      image: "images/website2024.webp",
      imageAlt: "Frühere Version der Portfolio-Website von Florian Dumler",
      imageCaption: "Ausgangspunkt: die Portfolio-Version von 2024"
    },
    en: {
      title: "Portfolio Website",
      summary: "A complete rebuild of this website into a bilingual, accessible and extensible portfolio with its own visual identity.",
      challenge: "An early learning website evolves into a professional platform that documents projects clearly and remains easy to extend.",
      period: "August 2026 · ongoing",
      role: "Concept, design & development",
      introduction: "The first version of this website was an important learning step. It brought my profile, skills, certificates and early projects together in one place. As my experience grew, however, its structure, language and technical quality no longer represented the standard I want the portfolio to communicate today.",
      problem: "The old site felt like a collection of separate sections. Some content was provisional, projects lacked context and adding a new entry meant editing several places. Navigation, keyboard support, mobile presentation and metadata also needed a reliable foundation.",
      approach: "The rebuild deliberately starts without a large framework. A lean static foundation using HTML, CSS and JavaScript fits the hosting setup, remains transparent and keeps every decision understandable. Content, translations and project data are maintained separately from presentation.",
      result: "The result is a bilingual, responsive foundation with its own design system, dark and light themes, central project management and reusable detail pages. The rebuild is documented and extended through clearly scoped iterations.",
      highlights: [
        "Central project data instead of hard-coded cards",
        "German and English from one shared content structure",
        "Dark mode by default with a saved light mode",
        "Semantic structure, keyboard focus and reduced motion",
        "SEO foundation with sitemap and structured person data",
        "No externally loaded fonts or tracking services"
      ],
      decisions: [
        { title: "Deliberately framework-free", text: "For the current scope, a static architecture delivers fast loading, simple hosting and minimal technical complexity." },
        { title: "Content as data", text: "Projects live in one central file. New case studies can be added without restructuring the homepage." },
        { title: "Personal, not generic", text: "Typography, technical grids, neon orange and photography combine a serious interface with a warmer personal signature." }
      ],
      learnings: "A professional rebuild does not begin with effects. It begins with positioning, strong content and a structure that can handle change. One particularly important decision was replacing seemingly precise skill percentages with honest descriptions of practical experience.",
      nextSteps: ["Add real screenshots to project pages", "Document the Food App as the next full case study", "Add a social preview and final image optimization", "Expand Dung Dash through balancing and additional levels"],
      image: "images/website2024.webp",
      imageAlt: "Earlier version of Florian Dumler's portfolio website",
      imageCaption: "Starting point: the 2024 portfolio version"
    }
  },
  {
    id: "creative-portfolio-experiment",
    number: "04",
    category: "Interactive UI",
    statusKey: "project.complete",
    technologies: ["JavaScript", "Canvas", "CSS"],
    links: [
      { label: "Live-Demo", url: "creative-portfolio/" },
      { label: "GitHub", url: "https://github.com/Flowdi/Creative-Portfolio-Interactive-UI-Experiment" }
    ],
    de: {
      title: "Creative Portfolio Experiment",
      summary: "Ein experimentelles, zweisprachiges Portfolio mit animierter Space-Oberfläche, Orbit-Navigation und modular aufgebautem JavaScript-Frontend.",
      challenge: "Canvas-Animationen, Maus-, Touch- und Tastatursteuerung sowie interaktive Vorschauen werden ohne externe Abhängigkeiten zu einer eigenständigen Oberfläche verbunden.",
      period: "2026",
      role: "Konzept, UI & Entwicklung",
      introduction: "Dieses Projekt untersucht, wie ein Portfolio selbst zu einer interaktiven Erfahrung werden kann. Statt einer klassischen Navigation bewegen sich Besucher durch eine animierte Weltraumoberfläche mit zentraler Boost-Sphere, umlaufenden Bereichen und eingebetteten Projektvorschauen.",
      problem: "Eine visuell starke Oberfläche darf Orientierung, Zugänglichkeit und Leistung nicht opfern. Die zentrale Herausforderung bestand darin, Canvas-Animation, Orbit-Navigation, Dialoge und eingebettete Inhalte so zu verbinden, dass die Seite sowohl mit Maus und Touch als auch per Tastatur verständlich bedienbar bleibt.",
      approach: "Die Anwendung wurde in klar getrennte JavaScript-Module gegliedert. Hintergrundeffekte, Eingaben, Orbit-Logik, Übersetzungen und UI-Komponenten besitzen eigene Verantwortungsbereiche. Ein eigener Bundle-Schritt erzeugt zusätzlich eine direkt per index.html startbare Version, ohne die wartbare Quellstruktur aufzugeben.",
      result: "Entstanden ist ein eigenständiges UI-Experiment mit Sternen, Nebel, Meteoren, Orbit-Navigation und zweisprachigen Inhaltsbereichen. Die Oberfläche reagiert auf Maus, Touch und Tastatur, berücksichtigt reduzierte Bewegung und pausiert aufwendige Animationen in inaktiven Browser-Tabs.",
      highlights: [
        "Animierter Canvas-Hintergrund mit Sternen, Nebel und Meteoren",
        "Interaktive Orbit-Navigation rund um eine zentrale Boost-Sphere",
        "Deutsch und Englisch aus getrennten Übersetzungsdaten",
        "Maus-, Touch- und Tastatursteuerung",
        "Isolierte Vorschauen älterer Projekte",
        "Dependency-freier Build-Schritt für den direkten Dateistart"
      ],
      decisions: [
        { title: "Canvas als Bühne", text: "Der animierte Hintergrund transportiert die kreative Idee, während normale HTML-Elemente für Inhalte und zentrale Bedienelemente erhalten bleiben." },
        { title: "Module nach Verantwortung", text: "Eingaben, Animationen, Navigation und UI sind getrennt. Dadurch bleibt die experimentelle Oberfläche trotz vieler Interaktionen nachvollziehbar." },
        { title: "Direktstart und Quellstruktur", text: "Ein eigenes Bundle verbindet komfortables Öffnen per Doppelklick mit modularen Dateien für die weitere Entwicklung." }
      ],
      learnings: "Experimentelles Design braucht besonders klare technische Grenzen. Animationen wirken nur dann überzeugend, wenn Eingaben zuverlässig bleiben, Fokuszustände sichtbar sind und schwächere Geräte nicht unnötig belastet werden.",
      nextSteps: ["Weitere reale Python- und Automatisierungsprojekte ergänzen", "Interaktionen und Übersetzungsdaten automatisiert testen", "Canvas-Last auf mobilen Geräten weiter reduzieren", "Projektvorschauen und Dokumentation ausbauen"],
      image: "creative-portfolio/assets/projects/portfolio-v2.jpg",
      imageAlt: "Vorschau des Creative Portfolio Experiments mit Space-Oberfläche",
      imageCaption: "Creative Portfolio Experiment · interaktive Space-Navigation",
      sectionTitles: {
        introduction: "Ein Portfolio als interaktive Erfahrung.",
        problem: "Kreativität ohne Kontrollverlust.",
        approach: "Viele Effekte, klar getrennte Bausteine.",
        result: "Eine eigenständige Space-Oberfläche.",
        learning: "Animation braucht technische Disziplin.",
        next: "Vom Experiment zur belastbaren Plattform."
      }
    },
    en: {
      title: "Creative Portfolio Experiment",
      summary: "An experimental bilingual portfolio with an animated space interface, orbit navigation and a modular JavaScript frontend.",
      challenge: "Canvas animations, mouse, touch and keyboard controls as well as interactive previews are combined into a distinct interface without external dependencies.",
      period: "2026",
      role: "Concept, UI & development",
      introduction: "This project explores how a portfolio can become an interactive experience of its own. Instead of conventional navigation, visitors move through an animated space interface with a central boost sphere, orbiting sections and embedded project previews.",
      problem: "A visually ambitious interface must not sacrifice orientation, accessibility or performance. The central challenge was connecting canvas animation, orbit navigation, dialogs and embedded content while keeping the site understandable with mouse, touch and keyboard input.",
      approach: "The application is split into focused JavaScript modules. Background effects, input handling, orbit logic, translations and UI components each have a clear responsibility. A custom build step also creates a version that runs directly from index.html without sacrificing the maintainable source structure.",
      result: "The result is a distinct UI experiment with stars, nebulae, meteors, orbit navigation and bilingual content areas. The interface supports mouse, touch and keyboard input, respects reduced motion and pauses expensive animations in inactive browser tabs.",
      highlights: [
        "Animated canvas background with stars, nebulae and meteors",
        "Interactive orbit navigation around a central boost sphere",
        "German and English from separate translation data",
        "Mouse, touch and keyboard controls",
        "Isolated previews of earlier projects",
        "Dependency-free build step for direct file launch"
      ],
      decisions: [
        { title: "Canvas as a stage", text: "The animated background carries the creative concept while regular HTML remains responsible for content and essential controls." },
        { title: "Modules by responsibility", text: "Input, animation, navigation and UI are separated, keeping the experimental interface understandable despite its many interactions." },
        { title: "Direct launch and source structure", text: "A custom bundle combines convenient double-click launching with modular files for ongoing development." }
      ],
      learnings: "Experimental design needs particularly clear technical boundaries. Animation is only convincing when input remains reliable, focus states stay visible and less powerful devices are not burdened unnecessarily.",
      nextSteps: ["Add more real Python and automation projects", "Automate tests for interactions and translation data", "Further reduce canvas load on mobile devices", "Expand project previews and documentation"],
      image: "creative-portfolio/assets/projects/portfolio-v2.jpg",
      imageAlt: "Preview of the Creative Portfolio Experiment with its space interface",
      imageCaption: "Creative Portfolio Experiment · interactive space navigation",
      sectionTitles: {
        introduction: "A portfolio as an interactive experience.",
        problem: "Creativity without losing control.",
        approach: "Many effects, clearly separated building blocks.",
        result: "A distinct space interface.",
        learning: "Animation requires technical discipline.",
        next: "From experiment to robust platform."
      }
    }
  },
  {
    id: "fashion-cooking-blog",
    number: "05",
    category: "Web Development",
    statusKey: "project.planned",
    technologies: ["Design", "Web", "Content"],
    de: {
      title: "Fashion & Cooking Blog Website",
      summary: "Eine geplante persönliche Blog-Website für Mode- und Kochinhalte, die in enger Zusammenarbeit mit meiner Freundin entstehen wird.",
      challenge: "Ziel ist eine eigenständige visuelle Identität, die zwei Themenwelten verbindet und Inhalte später unkompliziert pflegbar macht.",
      period: "In Planung",
      role: "Konzept, Design & Entwicklung"
    },
    en: {
      title: "Fashion & Cooking Blog Website",
      summary: "A planned personal blog for fashion and cooking content that will be created in close collaboration with my partner.",
      challenge: "The goal is a distinct visual identity that connects two topics while keeping future content easy to maintain.",
      period: "Planning stage",
      role: "Concept, design & development"
    }
  }
];
