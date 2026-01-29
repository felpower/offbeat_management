# Martin Schwödiauer - Artist Management & Booking Website

## 📋 Überblick

Diese Website präsentiert Martin Schwödiauer als professioneller Artist Manager und Booking Agent. Die Website wurde komplett überarbeitet und auf die Anforderungen des Kunden abgestimmt.

## 🎯 Hauptfeatures

### 1. **Startseite (Hero Section)**
- Kurze Einführung zu Martin und seinen Services
- Schnelle Navigation zu relevanten Sections

### 2. **Über Mich**
- Persönliche Vorstellung
- Auflistung der angebotenen Services
- Links zu den Künstlern im Portfolio

### 3. **Künstler (Artists)**
Drei Künstler im Portfolio mit jeweils:
- **Fitz Brothers** - Hauptact mit vollständigem Management & Booking
- **Joe** - Nebenact mit Management & Booking
- **Ruma** - Booking Services

Jeder Künstler hat:
- Künstlerporträt (Bilder können unter `images/folio/` hinzugefügt werden)
- Kurzbeschreibung (2-3 Sätze)
- Kontaktdaten
- EPK Download Button

### 4. **Preisübersicht**
- Management Services
- Booking Services
- EPK & Presse-Pakete
- Custom Packages

Alle Preise zeigen "auf Anfrage" - Sie können diese später anpassen.

### 5. **Kontaktformular**
- Kontaktformular mit Feldern: Name, Email, Subject, Nachricht
- Vorkonfiguriert für Netlify-Deployment (kann angepasst werden)

### 6. **Rechtliche Seiten**
- **Impressum** (`impressum.html`) - Gesetzlich erforderlich
- **Datenschutz** (`datenschutz.html`) - DSGVO-konform

## 📁 Dateienstruktur

```
Martin_Website/
├── index.html                 # Hauptseite
├── impressum.html             # Impressum/Legal Page
├── datenschutz.html          # Datenschutz/Privacy Policy
├── css/
│   ├── styles.css            # Originale Styles
│   ├── vendor.css            # Vendor Styles
│   └── custom.css            # Neue Custom Styles
├── images/
│   ├── folio/
│   │   ├── fitz_brothers.jpg # Bild für Fitz Brothers
│   │   ├── joe.jpg           # Bild für Joe
│   │   └── ruma.jpg          # Bild für Ruma
│   └── ...
└── js/
    ├── main.js
    └── plugins.js
```

## 🖼️ Bilder hinzufügen

Ersetzen Sie diese Dateinamen mit Ihren tatsächlichen Bildern:
- `images/folio/fitz_brothers.jpg`
- `images/folio/joe.jpg`
- `images/folio/ruma.jpg`

Empfehlte Bildgröße: **600x400px** oder ähnliche Seitenverhältnisse.

## 📝 Wichtige Anpassungen vor dem Launch

1. **Impressum** - Ersetzen Sie Placeholder-Daten:
   - Vollständige Adresse
   - Telefonnummer
   - E-Mail-Adresse

2. **Datenschutz** - Passen Sie Kontaktdaten an

3. **Preisübersicht** - Ersetzen Sie "auf Anfrage" mit echten Preisen

4. **Künstlerbilder** - Fügen Sie echte Fotos der Künstler hinzu

5. **EPK Download Links** - Verlinken Sie auf echte PDF-Dateien:
   ```html
   <a href="path/to/fitz_brothers_epk.pdf" class="btn btn--stroke btn--small">EPK Download</a>
   ```

6. **Kontaktformular** - Falls Sie nicht Netlify verwenden:
   - Entfernen Sie `netlify` Attribut
   - Verwenden Sie Alternative wie Formspree, Basin, etc.

## 🌐 Lokale Testung mit Live Server

1. Installieren Sie VS Code Extension: **Live Server**
2. Rechtsklick auf `index.html` → "Open with Live Server"
3. Website öffnet automatisch im Browser unter `http://localhost:5500`

## 📱 Responsive Design

Die Website ist vollständig responsive und funktioniert auf:
- Desktop
- Tablet
- Mobilgeräte

## 🎨 Styling & Anpassungen

Custom Styles sind in `css/custom.css` definiert:
- Pricing Cards
- Artist Details
- Form Styling
- Responsive Grids

Sie können weitere Anpassungen direkt dort vornehmen.

## 🔐 Kontaktformular

Das Formular ist aktuell für **Netlify** konfiguriert. Für andere Hosting-Lösungen:
- Ändern Sie die `name="contact"` und `method="POST"`
- Nutzen Sie Services wie:
  - Formspree (formspree.io)
  - Basin (usebasin.com)
  - EmailJS (emailjs.com)

## 📞 Kontaktdaten zum Aktualisieren

Folgende Kontaktdaten sind im Code vorhanden und sollten aktualisiert werden:

- `kontakt@martinschwödiauer.at` → Ihre E-Mail
- `+43 123 456 789` → Ihre Telefonnummer
- `[Ihre Adresse]` → Vollständige Adresse (in Impressum)

## 🚀 Deployment

Die Website kann auf jedem Standard-Hosting deployed werden:
- Netlify (mit formularen Support)
- GitHub Pages
- Vercel
- Traditionelle Web-Hosting-Provider

Alle Dateien sind statisch und benötigen keine Backend-Services (außer für Formulare).

## ✅ Checkliste vor Launch

- [ ] Alle Bilder hinzugefügt
- [ ] Impressum korrekt ausgefüllt
- [ ] Datenschutz aktualisiert
- [ ] Preise eingefügt
- [ ] Kontaktdaten aktualisiert
- [ ] EPK Download-Links funktionieren
- [ ] Kontaktformular getestet
- [ ] Alle Links funktionieren
- [ ] Responsive Design getestet (mobile, tablet, desktop)
- [ ] Social Media Links konfiguriert

## 📧 Support

Bei Fragen oder Problemen kontaktieren Sie den Entwickler.

---

**Letzte Aktualisierung:** Januar 2026
