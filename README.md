# Florian Dumler — Portfolio

Quellcode für die persönliche Portfolio-Website [floriandumler.de](https://www.floriandumler.de).

## Ziel

Die Website präsentiert Florian Dumler als Full-Stack Developer mit Fokus auf Webentwicklung und Python-Automatisierung. Sie wird schrittweise zu einer zweisprachigen, zugänglichen und leicht erweiterbaren Projektdokumentation ausgebaut.

## Aktueller Funktionsumfang

- responsive Startseite
- Dark Mode als Standard und optionaler Light Mode
- deutsche und englische Inhalte
- zentral gepflegte Projektdaten in `projects.js`
- dynamische Projektdetailseiten über `project.html?id=...`
- automatisch berechnetes Alter
- bestehendes JavaScript-Spiel unter `game/`

## Projektstruktur

```text
index.html       Startseite
project.html     Vorlage für Projektdetailseiten
projects.js      zentrale Projektinhalte
script.js        Startseitenlogik, Sprache und Theme
project.js       Logik der Projektdetailseiten
styles.css       gemeinsames Designsystem
images/          Bilder und Grafiken
game/            JavaScript-Plattformer
```

## Lokale Vorschau

Die Website ist statisch und benötigt keine Installation. Für eine lokale Vorschau kann ein einfacher Webserver im Projektordner gestartet werden, beispielsweise über die entsprechende Funktion des verwendeten Editors.

## Veröffentlichung

Die produktive Website wird bei Hetzner unter `www.floriandumler.de` betrieben. Änderungen werden erst nach Prüfung gezielt veröffentlicht.
