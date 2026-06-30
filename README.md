# Technical Portfolio Engine (Vue 3 + Vite)

A high-performance, single-page application (SPA) portfolio engine custom-built for showcasing data pipelines, warehouse architectures, and analytics workspaces. Hosted completely serverless on **AWS S3** with a decoupled text-based database model.

## 🚀 Key Architectural Features

* **Single Source of Truth:** All project content, deep-dive case studies, technical sections, images, and live code blocks are configured inside a single file: `public/data/projects.json`.
* **Dynamic Data-Driven Content System:** The core view automatically parses complex sections (paragraphs, code arrays, inline dashboards/images) dynamically depending on individual project payload configurations.
* **Intelligent History-Aware Navigation:** Inbound routing intercepts the browser state on mount, updating the context labels seamlessly (e.g., changing back actions from "Back to Portfolio" to "Back to Projects Archive" depending on recruiter navigation behaviors).
* **Performance Engine Optimized:** Zero heavy UI frameworks slowing down asset execution times. Uses Tailwind utility compilation for rapid page loads under poor mobile network conditions.

---

## 🛠️ Tech Stack & Dependencies

* **Core Engine:** Vue 3 (`<script setup>` Composition API)
* **Routing Architecture:** Vue Router 4 (HTML5 Web History Mode)
* **Build Bundler:** Vite
* **Style Framework:** Tailwind CSS

---

## 📂 File Architecture Mapping

```text
├── public/
│   └── data/
│       └── projects.json       # The Consolidated Global Database
├── src/
│   ├── assets/                 # Global Styles & Typography
│   ├── components/
│   │   └── ProjectGallery.vue  # Curated Gallery (Homepage Core Component)
│   ├── router/
│   │   └── index.js            # Single-Page Wildcard Routing Filters
│   ├── views/
│   │   ├── Home.vue            # Profile Dashboard (30% Profile / 70% Curated)
│   │   ├── ProjectsArchive.vue # Searchable Career Index (Full Archive View)
│   │   └── ProjectDetail.vue   # Dynamic Reusable Case Study Engine
│   ├── App.vue
│   └── main.js
├── index.html
├── tailwind.config.js
└── package.json