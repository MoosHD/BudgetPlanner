# 💰 Budget Pro - Advanced Finance Management App

> **Desktop & Mobile Finance App** - Windows, macOS, Linux, iOS, Android  
> Built with Tauri + React/TypeScript + Dropbox Sync

[![Version](https://img.shields.io/badge/version-2.2.0-blue.svg)](https://github.com/YOUR-USERNAME/budget-pro/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Desktop%20%7C%20Mobile-brightgreen.svg)]()
[![Status](https://img.shields.io/badge/status-Production%20Ready-success.svg)]()

---

## 🎯 Features

### 📊 Financial Overview
- **Smart Dashboard** - Real-time balance, income/expense summary
- **Quick Add** - Fast transaction entry from any screen
- **Financial Forecast** - Project balance for 1mo/3mo/1yr
- **Account Management** - Multiple account types (Checking, Savings, Credit Card)

### 💎 Savings Goals
- **Auto-Calculate** - Automatic required savings rate calculation
- **Weekly/Monthly Plans** - Flexible saving schedules
- **Progress Tracking** - Mark completed periods with checkmarks
- **Multi-Goal Support** - Manage unlimited savings goals

### 🏦 Investment & Interest
- **Compound Interest Calculator** - Support for various frequencies
- **Savings Projections** - 1-10 year forecasting
- **Scenario Simulation** - "What if?" analysis tools
- **Growth Reports** - Annual breakdown of principal vs interest

### 📈 Advanced Analytics
- **Time Period Filters** - Today, This Week, Month, Quarter, Year, Custom
- **Category Breakdown** - Expense & income by category
- **Trend Analysis** - Monthly trends and year-over-year comparisons
- **Export Options** - CSV and PDF reports

### 🔄 Recurring Transactions
- **Auto-Execute** - Automatic income/expense creation on schedule
- **Custom Frequencies** - Weekly, Bi-weekly, Monthly, Quarterly, Yearly
- **Flexible Scheduling** - Set specific dates or intervals
- **Missed Transaction** - Catch up for missed periods

### ☁️ Synchronization
- **Dropbox Integration** - Automatic 5-minute sync
- **Multi-Device Sync** - Same data everywhere
- **Offline First** - Works completely offline
- **Auto Backup** - Continuous backup to Dropbox

### 🎨 User Experience
- **Dark Theme** - Modern, eye-friendly interface
- **Responsive Design** - Works on all screen sizes
- **Mobile-Optimized** - Quick-add widget for rapid entry
- **Smooth Animations** - Polished interactions

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16+ ([Download](https://nodejs.org/))
- **Rust** ([Install](https://rustup.rs/))
- **Git** ([Download](https://git-scm.com/))

### Quick Start

```bash
# 1. Clone repository
git clone https://github.com/YOUR-USERNAME/budget-pro.git
cd budget-pro

# 2. Install dependencies
npm install

# 3. Start development
npm run tauri dev

# 4. Build for production
npm run tauri build
```

### Development Commands
```bash
npm run tauri dev          # Development server with hot reload
npm run tauri build        # Build for current OS
npm run build              # Build frontend only
npm run preview            # Preview production build
npm run tauri android      # Build for Android (later)
npm run tauri ios          # Build for iOS (later)
```

---

## 📦 Platform Support

| Platform | Status | Format |
|----------|--------|--------|
| **Windows** | ✅ Ready | .exe, .msi, .nsis |
| **macOS** | ✅ Ready | .dmg |
| **Linux** | ✅ Ready | .deb, .AppImage |
| **iOS** | 🔄 Planned | .ipa |
| **Android** | 🔄 Planned | .apk |

---

## 📋 Installation

### Windows
1. Download `budget-pro.msi` from [Releases](https://github.com/YOUR-USERNAME/budget-pro/releases)
2. Run the installer
3. Launch from Start Menu or Desktop

### macOS
1. Download `Budget Pro.dmg` from [Releases](https://github.com/YOUR-USERNAME/budget-pro/releases)
2. Open DMG file
3. Drag `Budget Pro.app` to `Applications`
4. Launch from Launchpad or Finder

### Linux
```bash
# Debian/Ubuntu
wget https://github.com/YOUR-USERNAME/budget-pro/releases/download/v2.2.0/budget-pro.deb
sudo dpkg -i budget-pro.deb
budget-pro

# Any distro (AppImage)
wget https://github.com/YOUR-USERNAME/budget-pro/releases/download/v2.2.0/budget-pro.AppImage
chmod +x budget-pro.AppImage
./budget-pro.AppImage
```

---

## 🔄 Auto-Updates

Budget Pro includes automatic update detection:
- Checks for updates on startup
- Displays notification when available
- Downloads and installs in background
- Restarts app automatically

**Manual update check:** Settings → Check for Updates

---

## 💾 Data Management

### Local Storage
- All data stored locally on your device
- No cloud dependency
- Full offline functionality

### Dropbox Sync
- Optional automatic sync to Dropbox
- Configure in Settings
- 5-minute sync interval
- Easy multi-device sync

### Backup & Export
- Export all data as JSON
- Export reports as CSV/PDF
- One-click restore from backup
- Manual sync to Dropbox anytime

---

## 🔐 Security & Privacy

✅ **Your data is yours**
- No tracking or analytics
- No ads
- No cloud upload (unless enabled)
- Open source code
- Encrypted local storage

---

## 🛠️ Development

### Project Structure
```
budget-pro/
├── src/                    # Frontend (HTML/CSS/JS)
│   ├── index.html         # Main UI
│   ├── style.css          # Styling
│   └── main.ts            # TypeScript entry
├── src-tauri/             # Tauri backend (Rust)
│   ├── src/
│   │   └── main.rs        # Tauri commands
│   └── Cargo.toml         # Rust dependencies
├── .github/
│   └── workflows/
│       └── build.yml      # CI/CD pipeline
├── tauri.conf.json        # Tauri config
├── package.json           # Node dependencies
├── vite.config.ts         # Vite config
└── tsconfig.json          # TypeScript config
```

### Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript/TypeScript
- **Desktop:** Tauri 1.5+ (Rust)
- **Build:** Vite 4+
- **Sync:** Dropbox API
- **CI/CD:** GitHub Actions

---

## 📖 Documentation

- [GitHub Setup Guide](./docs/GITHUB-SETUP.md) - Detailed GitHub setup
- [Quick Start](./docs/QUICK-START.md) - 5-minute quickstart
- [Setup Guide](./docs/SETUP-GUIDE.md) - Complete setup walkthrough
- [Deployment Guide](./docs/DEPLOYMENT.md) - Production deployment

---

## 🤝 Contributing

Contributions welcome! 

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 🐛 Issues & Bug Reports

Found a bug? Create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your OS & app version

[Create Issue](https://github.com/YOUR-USERNAME/budget-pro/issues/new)

---

## 💡 Feature Requests

Want a new feature? 

1. Check existing issues first
2. Create new issue with "enhancement" label
3. Describe use case and expected behavior
4. Provide any relevant context

[Request Feature](https://github.com/YOUR-USERNAME/budget-pro/issues/new?labels=enhancement)

---

## 📊 Performance

- **App Size:** 5-10 MB (depending on OS)
- **Memory:** 80-150 MB typical
- **Startup Time:** < 2 seconds
- **Load Time:** < 1 second
- **UI Responsiveness:** 60 FPS

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Built with:
- ⚡ [Tauri](https://tauri.app/) - Desktop app framework
- 🎨 [Vite](https://vitejs.dev/) - Frontend build tool
- 💾 [Dropbox API](https://www.dropbox.com/developers) - Sync service
- 🦀 [Rust](https://www.rust-lang.org/) - Backend language
- 🔄 [GitHub Actions](https://github.com/features/actions) - CI/CD

---

## 📞 Support & Contact

- **Issues:** [GitHub Issues](https://github.com/YOUR-USERNAME/budget-pro/issues)
- **Discussions:** [GitHub Discussions](https://github.com/YOUR-USERNAME/budget-pro/discussions)
- **Releases:** [Download Latest](https://github.com/YOUR-USERNAME/budget-pro/releases)

---

## 🎯 Roadmap

- [x] Core budget tracking
- [x] Recurring transactions
- [x] Savings goals with auto-calculation
- [x] Advanced analytics
- [x] Interest calculator
- [x] Dropbox sync
- [ ] iOS app
- [ ] Android app
- [ ] Multi-language support
- [ ] Cloud backup option
- [ ] Budget templates
- [ ] Investment tracking

---

**Made with ❤️ for better personal finance management**

*Last Updated: December 2025 - v2.2.0*
