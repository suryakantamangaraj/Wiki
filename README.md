# Wiki | Personal Knowledge Base & Digital Garden

[![Build Status](https://github.com/suryakantamangaraj/Wiki/actions/workflows/deploy-to-github-pages.yml/badge.svg)](https://github.com/suryakantamangaraj/Wiki/actions/workflows/deploy-to-github-pages.yml)
[![Security Scan](https://github.com/suryakantamangaraj/Wiki/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/suryakantamangaraj/Wiki/actions/workflows/github-code-scanning/codeql)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to my **Digital Garden**—a curated personal knowledge base documenting my journey through technology, finance, philosophy, and lifestyle. This repository serves as my "Second Brain," built with [Docusaurus 3](https://docusaurus.io/) to share structured insights and learning paths with the community.

## 🌟 Vision & Purpose
The goal of this wiki is to provide a central, searchable hub for high-quality information. Whether it's complex technical documentation, financial research, or curated entertainment lists, every piece of content here is vetted and structured for maximum clarity and discoverability.

## 📂 Knowledge Domains
Explore the various sections of this wiki:
- **[Technology](./docs/technology)**: Software engineering, AI/ML, automation, and open-source explorations.
- **[Finance](./docs/finance)**: Investment strategies, fintech, and economic research.
- **[Startups](./docs/startups)**: Growth strategies, ecosystem analysis, and entrepreneurship.
- **[Philosophy](./docs/philosophy)**: Mental models, ethics, and structured thought experiments.
- **[Entertainment](./docs/entertainment)**: A comprehensive database of films, web series, and curated watchlists.

## 🛠️ Local Development & Management

### First-Time Setup
To initialize the environment and install dependencies:
```sh
yarn install
node runScripts.js
```

### Running the Project
Start the local development server:
```sh
yarn start
```
Most changes are reflected live via hot-reloading.

### Mind Map Generator
This repository includes a custom script to visualize the documentation structure:
1. Generate the Mermaid file: `python generate_mindmap.py`
2. Convert to PNG: `mmdc -i mindmap.mmd -o src/generated/mindmap.png`

## 🚀 Deployment
This project is automatically deployed to GitHub Pages via GitHub Actions.
- **Build**: `yarn build`
- **Deploy manually**: `USE_SSH=true yarn deploy`

## 🤝 Contributing
Contributions are welcome! Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) to learn how to add new documentation or suggest improvements.

## ⚖️ Governance & Legal
- **License**: [MIT](./LICENSE)
- **Code of Conduct**: [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- **Security**: [SECURITY.md](./SECURITY.md)

---
*Maintained by [Suryakanta Mangaraj](https://github.com/suryakantamangaraj)*