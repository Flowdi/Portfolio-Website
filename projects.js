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
    statusKey: "project.rebuild",
    technologies: ["JavaScript", "Canvas", "CSS"],
    de: {
      title: "JavaScript-Plattformer",
      summary: "Mein erstes eigenes Spiel – ein browserbasierter Plattformer, der als nächstes technisch, visuell und für mobile Bedienung überarbeitet wird.",
      challenge: "Spiellogik, Kollisionen, Bewegung und Levelablauf wurden ohne Game Engine im Browser umgesetzt."
    },
    en: {
      title: "JavaScript Platformer",
      summary: "My first original game – a browser-based platformer that will next be rebuilt technically, visually and for mobile controls.",
      challenge: "Game logic, collisions, movement and level progression were implemented in the browser without a game engine."
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
      nextSteps: ["Projektseiten mit echten Screenshots erweitern", "Food-App als nächste ausführliche Fallstudie dokumentieren", "Social-Preview und finale Bildoptimierung ergänzen", "Spiel überarbeiten und wieder als Live-Demo veröffentlichen"],
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
      nextSteps: ["Add real screenshots to project pages", "Document the Food App as the next full case study", "Add a social preview and final image optimization", "Rebuild the game and publish it again as a live demo"],
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
    links: [{ label: "GitHub", url: "https://github.com/Flowdi/Creative-Portfolio-Interactive-UI-Experiment" }],
    de: {
      title: "Creative Portfolio Experiment",
      summary: "Ein experimentelles, zweisprachiges Portfolio mit animierter Space-Oberfläche, Orbit-Navigation und modular aufgebautem JavaScript-Frontend.",
      challenge: "Canvas-Animationen, Maus-, Touch- und Tastatursteuerung sowie interaktive Vorschauen werden ohne externe Abhängigkeiten zu einer eigenständigen Oberfläche verbunden.",
      period: "2026 · laufend",
      role: "Konzept, UI & Entwicklung"
    },
    en: {
      title: "Creative Portfolio Experiment",
      summary: "An experimental bilingual portfolio with an animated space interface, orbit navigation and a modular JavaScript frontend.",
      challenge: "Canvas animations, mouse, touch and keyboard controls as well as interactive previews are combined into a distinct interface without external dependencies.",
      period: "2026 · ongoing",
      role: "Concept, UI & development"
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
