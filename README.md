

# 📰 Global NewsHub

**Global NewsHub** is a modern news aggregator that displays real-time global headlines using a public API. The project is split into a **React frontend** and a **Node.js + Express backend**, built to be clean, secure, and accessible.

# Global NewsHub

A lightweight React + Vite frontend for browsing news articles. This repository contains the frontend used to display news fetched from a public news API.

**Key goals:** simple UI for browsing categories, quick pagination of results, and a modular component design that is easy to extend.

## Features

- Top headlines and search by category
- Responsive layout with reusable components (`Navbar`, `News`, `Footer`)
- Easy to configure API integration (see `src/components/Api_file.jsx`)

## Tech stack

- Frontend: React, Vite
- Bundler: Vite
- HTTP client: Axios

## Quickstart

Prerequisites:

- Node.js 16+ and npm

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Configuration (API key)

This app uses a news provider API. Currently the project contains a hard-coded key in `src/components/Api_file.jsx`. For security and portability you should replace that with an environment variable.

Recommended: create a `.env` file at the project root with:

```
VITE_NEWS_API_KEY=your_api_key_here
```

Then update `src/components/Api_file.jsx` to use `import.meta.env.VITE_NEWS_API_KEY` instead of a hard-coded string (or set the constant from `process.env` when running a Node-based build step).

If you need a quick local change, open [src/components/Api_file.jsx](src/components/Api_file.jsx) and replace the `API_KEY` constant.

## Project structure

- `index.html` — Vite entry
- `src/main.jsx` — App bootstrap
- `src/App.jsx` — Application shell
- `src/components/` — Reusable UI components (`Navbar.jsx`, `News.jsx`, `Footer.jsx`, `Api_file.jsx`)
- `src/Context/NewsContext.jsx` — React context for news state

## Usage notes

- The app queries `everything` endpoint with a category param; the query date and sorting are set in `Api_file.jsx`.
- To add a new category, call `getTopHeadlines('your-query')` from a component or update the UI to provide the category.

## Contributing

Contributions are welcome. Please open an issue first to discuss major changes. For small fixes:

1. Fork the repo
2. Create a branch (`feature/your-feature`)
3. Commit your changes and open a pull request

## License

MIT © 2026

---

If you'd like, I can update `src/components/Api_file.jsx` to read the key from `import.meta.env.VITE_NEWS_API_KEY` and add a `.env.example` file. Want me to do that?
