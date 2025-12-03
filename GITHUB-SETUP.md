# 🚀 Budget Pro - GitHub Setup Guide

**Vollständige Anleitung zum Einrichten auf GitHub mit auto-deploy**

---

## 📋 Schritt-für-Schritt

### **Schritt 1: GitHub Repository erstellen**

#### 1.1 GitHub öffnen
- Gehe auf https://github.com/new
- Oder klick oben rechts: + → New Repository

#### 1.2 Repository Details eingeben
```
Repository name: budget-pro
Description: Budget Planner Pro - Advanced Finance Management App
Visibility: Public (wichtig für GitHub Pages/Actions)
Initialize with:
  ☑ Add a README file
  ☑ Add .gitignore (Node)
  ☑ Choose a license (MIT)
```

#### 1.3 Repository erstellen
- Klick "Create repository"
- **Fertig!** Du hast jetzt ein GitHub Repository

---

### **Schritt 2: Repository lokal klonen**

#### 2.1 HTTPS Clone-Link kopieren
```
GitHub Repository öffnen
→ Grüner "Code" Button
→ HTTPS kopieren
(Sieht so aus: https://github.com/DEIN-USERNAME/budget-pro.git)
```

#### 2.2 Terminal öffnen und klonen
```bash
# Terminal/CMD öffnen
git clone https://github.com/DEIN-USERNAME/budget-pro.git
cd budget-pro

# ✓ Repository ist jetzt lokal
```

---

### **Schritt 3: Tauri-Projekt Setup**

#### 3.1 Tauri erstellen (wenn noch nicht vorhanden)
```bash
npm create tauri-app@latest -- \
  --project-name budget-pro \
  --package-manager npm \
  --ui vanilla
  
cd budget-pro
```

#### 3.2 Falls bereits vorhanden: Dependencies installieren
```bash
npm install
npm install -D @tauri-apps/cli
```

#### 3.3 Struktur prüfen
```
budget-pro/
├── src/
│   ├── index.html
│   ├── main.ts
│   └── style.css
├── src-tauri/
│   ├── src/
│   │   └── main.rs
│   └── Cargo.toml
├── .github/
│   └── workflows/
├── tauri.conf.json
├── package.json
├── vite.config.ts
└── .gitignore
```

---

### **Schritt 4: Budget Pro Dateien einfügen**

#### 4.1 Dateien kopieren
Kopiere diese Dateien in dein `budget-pro/` Verzeichnis:

**Konfiguration:**
- `tauri.conf.json` (ersetzen)
- `package.json` (ersetzen)
- `Cargo.toml` in `src-tauri/` (ersetzen)
- `vite.config.ts` (ersetzen)
- `.gitignore` (ersetzen)

**Code:**
- `src/index.html` - Budget Pro App (ersetzen)
- `src/main.ts` (ersetzen)
- `src-tauri/src/main.rs` (ersetzen)

**GitHub Actions:**
- `.github/workflows/build.yml` (neuer Ordner)

**Dokumentation:**
- `README.md` (ersetzen)
- `.github/CONTRIBUTING.md` (neu)
- `.github/ISSUE_TEMPLATE/bug_report.md` (neu)

#### 4.2 Dependencies installieren
```bash
npm install
```

#### 4.3 Lokal testen
```bash
npm run tauri dev

# App sollte sich öffnen!
# Teste alle Features
# Wenn OK → Close App
```

---

### **Schritt 5: Git Commit & Push zu GitHub**

#### 5.1 Status prüfen
```bash
git status
# Sollte alle neuen/geänderten Dateien zeigen
```

#### 5.2 Alle Dateien hinzufügen
```bash
git add .
```

#### 5.3 Commit mit Nachricht
```bash
git commit -m "Initial commit: Budget Pro Tauri App v2.2.0

- Tauri Desktop App (Windows, macOS, Linux)
- All Budget Pro features integrated
- GitHub Actions CI/CD pipeline
- Auto-update system
- Dropbox sync support
- Complete documentation"
```

#### 5.4 Zu GitHub pushen
```bash
git push origin main

# Falls Fehler: git branch -M main
# Dann nochmal: git push -u origin main
```

---

### **Schritt 6: GitHub Actions aktivieren**

#### 6.1 Repository öffnen
- GitHub öffnen
- Dein Repository: budget-pro

#### 6.2 Settings öffnen
```
Repository öffnen
→ Settings Tab
→ Actions (linke Seite)
→ General
```

#### 6.3 Actions konfigurieren
```
Unter "Policies":
☑ Allow all actions and reusable workflows

Unter "Fork pull request workflows from outside collaborators":
☑ Require approval for first-time contributors
☑ Require approval for all outside collaborators

→ Save
```

#### 6.4 Workflow-Permissions setzen
```
Settings → Actions → General
→ Scroll zu "Workflow permissions"
→ ☑ Read and write permissions
→ ☑ Allow GitHub Actions to create and approve pull requests
→ Save
```

---

### **Schritt 7: Builds überwachen**

#### 7.1 Actions Tab öffnen
```
GitHub Repository
→ Actions Tab
→ Warten auf Workflow (5-10 Min)
```

#### 7.2 Workflow-Status prüfen
```
✅ Grün   = Erfolgreich
🟡 Gelb   = Läuft noch
❌ Rot    = Fehler
```

#### 7.3 Bei Fehler: Logs anschauen
```
Fehlgeschlagene Workflow anklicken
→ Job anklicken
→ Logs lesen
→ Problem beheben
→ git push nochmal
```

---

### **Schritt 8: Release herunterladen**

#### 8.1 GitHub Releases öffnen
```
Repository
→ Releases (rechte Seite) oder
→ Tags Tab → Latest Release
```

#### 8.2 Binaries herunterladen
```
Je nach Betriebssystem:

Windows:
- budget-pro.exe (portable)
- budget-pro.msi (installer)

macOS:
- Budget Pro.dmg

Linux:
- budget-pro.deb
- budget-pro.AppImage
```

#### 8.3 Installieren
```
Windows: 
  → Doppelklick auf .msi
  
macOS:
  → Öffne .dmg
  → Drag App zu Applications
  
Linux:
  → sudo dpkg -i budget-pro.deb
  → oder: chmod +x budget-pro.AppImage && ./budget-pro.AppImage
```

---

## 🔄 **Zukünftige Workflows**

### **Features hinzufügen**

```bash
# 1. Änderungen lokal machen
# (Bearbeite src/index.html, etc.)

# 2. Testen
npm run tauri dev

# 3. Commit
git add .
git commit -m "Feature: Add [X]"

# 4. Push zu GitHub
git push origin main

# 5. Warten auf Build (GitHub Actions macht automatisch)
# 6. Release wird automatisch erstellt
# 7. Users bekommen Auto-Update Notification
```

### **Versionierung**

```bash
# Wenn du eine neue Version releasen möchtest:

# 1. Package.json aktualisieren
# "version": "2.3.0"

# 2. tauri.conf.json aktualisieren
# "version": "2.3.0"

# 3. Git Tag erstellen
git tag -a v2.3.0 -m "Version 2.3.0 - New Features"

# 4. Pushen
git push origin main
git push origin v2.3.0

# 5. GitHub Actions baut und erstellt Release
```

---

## 🐛 **Troubleshooting**

### Problem: "npm: command not found"
```bash
# Lösung: Node.js neu installieren
https://nodejs.org/ → LTS Version
```

### Problem: "git: command not found"
```bash
# Lösung: Git neu installieren
https://git-scm.com/
```

### Problem: "fatal: 'origin' does not appear to be a 'git' repository"
```bash
# Lösung: Git initialisieren
git init
git remote add origin https://github.com/USER/budget-pro.git
git branch -M main
git push -u origin main
```

### Problem: "Permission denied (publickey)"
```bash
# SSH Key Fehler
# Lösung: HTTPS statt SSH verwenden

# URL ändern:
git remote set-url origin https://github.com/USER/budget-pro.git

# Oder: SSH Key einrichten
# https://docs.github.com/en/authentication/connecting-to-github-with-ssh
```

### Problem: "GitHub Actions schlägt fehl"
```bash
# 1. Actions Log anschauen
GitHub → Actions Tab → Fehlgeschlagener Job

# 2. Error Message lesen

# Häufigste Probleme:
- Abhängigkeiten nicht vorhanden → npm install
- Rust nicht installiert → rustup.rs
- Node zu alt → Node.js 16+ nötig

# 3. Lokal reproduzieren:
npm install
npm run tauri build

# 4. Problem beheben
# 5. git push nochmal
```

---

## ✅ **Setup Checkliste**

- [ ] GitHub Account erstellt
- [ ] Repository erstellt (budget-pro)
- [ ] Repository ist PUBLIC
- [ ] Lokal geklont
- [ ] Tauri-Projekt setup
- [ ] Alle Dateien eingefügt
- [ ] npm install durchgeführt
- [ ] npm run tauri dev funktioniert
- [ ] Alle Features getestet
- [ ] git add . & git commit durchgeführt
- [ ] git push origin main erfolgreich
- [ ] GitHub Actions aktiviert
- [ ] Erstes Build erfolgreich
- [ ] .exe / .dmg / .deb heruntergeladen
- [ ] App installiert & getestet

---

## 📚 **Hilfreiche Links**

- **GitHub Docs**: https://docs.github.com/
- **GitHub Actions**: https://github.com/features/actions
- **Tauri**: https://tauri.app/
- **Vite**: https://vitejs.dev/
- **Rust**: https://www.rust-lang.org/

---

## 🎉 **Glückwunsch!**

Du hast Budget Pro jetzt:
- ✅ Auf GitHub gehostet
- ✅ Mit automatischen Builds
- ✅ Mit Auto-Update System
- ✅ Auf allen Plattformen verfügbar
- ✅ Production Ready

**Viel Erfolg!** 🚀

---

## 📞 **Nächste Schritte**

1. **Jetzt**: Setup durchführen (30 Min)
2. **Danach**: Erste App testen & installieren
3. **Später**: Features anfragen → Auto-Deploy
4. **Optional**: Mobile App (iOS/Android) hinzufügen
