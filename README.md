# Quick Poll

![Dependencies](https://img.shields.io/badge/✓_Dependencies-Fixed-228B22)
![Secrets](https://img.shields.io/badge/✓_Secrets-Removed-228B22)
![Git History](https://img.shields.io/badge/✓_Git_History-Cleaned-228B22)
![XSS](https://img.shields.io/badge/✓_XSS-Patched-228B22)
![Code Injection](https://img.shields.io/badge/✓_eval()-Secured-228B22)
![Big Five](https://img.shields.io/badge/🏆_Big_Five-Complete!-gold)

A simple, interactive poll application with a built-in calculator. Submit your favorite programming language and perform quick calculations in a clean, responsive interface.

## Features

- 📊 Quick poll form for collecting responses
- 🧮 Safe math expression calculator
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite
- 🔒 Secure input handling

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to see the app in action.

## Tech Stack

- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Vanilla JavaScript** - No framework overhead

## Environment Variables

Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

See `.env.example` for required variables.

## Project Structure

```
.
├── index.html          # Main HTML file
├── src/
│   ├── index.js        # Application logic
│   ├── config.js       # Configuration
│   └── styles.css      # Tailwind directives
├── docs/               # Documentation
└── package.json        # Dependencies
```

## Development

This project uses Vite for hot module replacement and fast builds. Tailwind CSS is configured with PostCSS for utility-first styling.

## License

MIT License - Cynthia Teeters
