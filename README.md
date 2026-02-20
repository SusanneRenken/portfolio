# Portfolio

**Frontend | Angular 17 Standalone SPA with i18n and responsive component architecture**

## Description

Portfolio is a production-style single-page application built with Angular 17 standalone components and SCSS. It presents personal profile content, technical skills, featured projects, legal pages, and a contact workflow in a structured, responsive layout. The app supports multilingual content through JSON-based translations and includes modular section navigation for smooth, maintainable UI behavior.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Requirements](#system-requirements)
- [Installation / Quickstart](#installation--quickstart)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

## Features

- Angular 17 standalone component architecture (no NgModule-based app structure).
- Responsive, section-based landing flow (`landing-page`, `why-me`, `my-skill-set`, `my-work`, `contact-me`).
- Multilingual UI using `@ngx-translate/core` with JSON dictionaries (`de`, `en`).
- Dynamic legal notice and privacy policy content loaded from static HTML assets.
- Interactive project showcase with typed project models and reusable project section components.
- Contact form with client-side validation and HTTP submission to a mail endpoint.
- Shared UI/services layer for navigation, scroll spy, navbar/footer, and social links.

## Tech Stack

### Frontend

- Angular 17
- TypeScript 5
- RxJS 7
- Angular Router

### UI / Styling

- SCSS
- Angular Material / CDK
- Responsive layout with breakpoint-based component styling

### Internationalization

- `@ngx-translate/core`
- `@ngx-translate/http-loader`

### Tooling & Testing

- Angular CLI 17
- Karma + Jasmine

## System Requirements

- Node.js 18+ (LTS recommended)
- npm 9+
- Modern browser (Chrome, Edge, Firefox, Safari)

## Installation / Quickstart

```bash
git clone https://github.com/SusanneRenken/portfolio.git
cd portfolio
npm install
npm start
```

Development server runs at:

```text
http://localhost:4200/
```

Additional commands:

```bash
npm run build      # Production build to dist/portfolio
npm run watch      # Development build in watch mode
npm test           # Unit tests (Karma + Jasmine)
```

## Project Structure

```text
portfolio/
├─ angular.json
├─ package.json
├─ src/
│  ├─ main.ts
│  ├─ styles.scss
│  ├─ app/
│  │  ├─ app.component.*
│  │  ├─ app.config.ts
│  │  ├─ app.routes.ts
│  │  ├─ main-content/
│  │  │  ├─ landing-page/
│  │  │  ├─ why-me/
│  │  │  ├─ my-skill-set/
│  │  │  ├─ my-work/
│  │  │  └─ contact-me/
│  │  ├─ privacy-policy/
│  │  ├─ legal-notice/
│  │  └─ shared/
│  │     ├─ components/
│  │     └─ services/
│  └─ assets/
│     ├─ i18n/
│     ├─ img/
│     └─ legal-documents/
└─ dist/
```

## Deployment

Build the production bundle:

```bash
npm run build
```

The compiled output is generated in `dist/portfolio` and can be deployed to any static hosting platform (for example Nginx, Apache, Netlify, Vercel, or GitHub Pages).

If you want the contact form to send real emails in production, the configured mail endpoint must be reachable from the deployed frontend (`https://susanne-renken.com/sendMail.php`).
