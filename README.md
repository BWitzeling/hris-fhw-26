# HRIS FHW 26 – HR-Quiz der FHWien der WKW

Statische, touch-optimierte Quiz-Website für den Einsatz auf der HR Inside Summit 2026. Das Projekt benötigt weder einen Build-Schritt noch zusätzliche Pakete und kann direkt über GitHub Pages veröffentlicht werden.

## Lokal öffnen

Für eine schnelle Vorschau `index.html` im Browser öffnen. Für eine realitätsnähere lokale Vorschau kann in VS Code auch die Erweiterung „Live Server“ verwendet werden.

## Inhalte bearbeiten

- `js/quiz-data.js`: Veranstaltungstexte, Gewinnhinweis, Studienlink, Fragen, Antworten und Auflösungen
- `css/styles.css`: FHWien-Farben am Anfang der Datei, Abstände und Layout
- `index.html`: Seitenstruktur, Studiengangsbox und Footer
- `assets/fhwien-logo.png`: Webversion des Logos
- `assets/farbstrahl-original.jpg`: Farbstrahl am unteren Seitenrand
- `assets/hris-startscreen.jpg`: browseroptimierte Startscreen-Version des bereitgestellten TIFF-Motivs
- `assets/newsletter-qr.png`: QR-Code zur Newsletter-Anmeldung

Das TIFF-Original `40_FINAL 38_0676_Banner RGB.tif` bleibt lokal erhalten, wird wegen seiner Dateigröße aber nicht mit der Website veröffentlicht.
Das lokal abgelegte Hernstein-Motiv dient nur als Gestaltungsreferenz und wird ebenfalls nicht veröffentlicht.
Die CMYK-Quelldatei im Ordner `source-assets` bleibt ebenfalls ausschließlich lokal erhalten.

## Links pflegen

Der Link zur Newsletter-Anmeldung wird in `js/quiz-data.js` unter `newsletterUrl` gepflegt. Wenn sich die URL ändert, muss zusätzlich der QR-Code in `assets/newsletter-qr.png` neu erzeugt werden. Der Link für „HR-Studiengänge entdecken“ wird unter `studyUrl` gepflegt.

## Auf GitHub Pages veröffentlichen

1. Den **Inhalt** dieses Ordners in das Stammverzeichnis eines GitHub-Repositories übertragen.
2. Änderungen committen und in den gewünschten Branch pushen.
3. In GitHub unter **Settings → Pages** die Option **Deploy from a branch** wählen.
4. Den Branch und den Ordner `/ (root)` auswählen und speichern.

Da alle Pfade relativ sind, funktioniert die Seite sowohl in einem Projekt-Repository als auch unter einer eigenen Domain.

## Technische Hinweise

- Reines HTML, CSS und JavaScript
- Keine externen Schriftarten, Bibliotheken oder Tracking-Dienste
- Für Maus, Tastatur und Touch-Bedienung ausgelegt
- Responsive für Smartphone, Tablet, Desktop und großformatige Touchscreens
- Die Manner-Schnitte ist ein Sofortgewinn unabhängig vom Quiz-Ergebnis; es gibt keine Verlosung.
