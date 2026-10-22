# Porto-Graphite — Editorial Portfolio RIO

<div align="center">

  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![WebGL](https://img.shields.io/badge/Graphics-OGL_WebGL-black?style=for-the-badge&logo=webgl&logoColor=white)](https://github.com/oframe/ogl)
  [![License](https://img.shields.io/badge/License-MIT-000000?style=for-the-badge)](LICENSE)

  <p align="center">
    <strong>Portfolio editorial monokrom (graphite) — RIO, Fullstack Developer & AI Agent Engineer.</strong>
  </p>

  <p align="center">
    Dibuat oleh <strong><a href="https://github.com/JustRio24">RIO</a></strong> — Fullstack Developer & AI Agent Engineer.
  </p>

</div>

---

## ✦ Overview

**Porto-Graphite** adalah portfolio pribadi yang di-customize dari template editorial ECHO. Mengangkat estetika **monokrom graphite** — brutalist minimalist, tipografi kuat, motion sinematik, dan interaksi 3D.

---

## ✦ Fitur

- **Preloader sinematik** — reveal per huruf ("RIO"), progress hairline + counter, exit curtain halus.
- **Hero & typography metallic** — teks besar uppercase dengan gradien metalik, portrait masking.
- **`ScrollExpandMedia`** — media yang mengembang saat scroll dengan unblur GPU-accelerated.
- **Horizontal Experience Canvas** — timeline karier yang berjalan dari scroll vertikal.
- **WorksWheel 3D** — drum reel 3D untuk proyek/landing pages.
- **FlexCarousel (OGL WebGL)** — carousel liquid lens berbasis WebGL.
- **Interactive Project Modal** — detail proyek: deskripsi, stats, deliverables, stack.

---

## ✦ Tech Stack

| Domain | Teknologi | Keterangan |
|---|---|---|
| **Struktur** | HTML5 / Semantic Web | Markup SEO-optimized |
| **Styling** | Vanilla CSS + Tailwind v3 | Design tokens monokrom |
| **Graphics & WebGL** | [OGL](https://github.com/oframe/ogl) | Mesh & shader liquid bending |
| **Logic & Motion** | Vanilla JavaScript (ES Modules) | Zero-framework |
| **Typography** | Plus Jakarta Sans | Sans-serif editorial |
| **Komponen** | `flex-carousel`, `works-wheel`, `scroll-expand-media` | Modular UI engine |

---

## ✦ Proyek

Portfolio menampilkan proyek-proyek asli RIO, antara lain:

- **MiDClass App** — Learning Management System (Android, Java, Firebase)
- **SmartDrum** — IoT Dashboard monitoring & otomasi budidaya jamur
- **Visit Palembang** — web promosi pariwisata Palembang (Web Design Competition 2025)
- **Gobeng App** — React + Vite dengan sistem RBAC
- **ERP Tempe 3 Puteri v2** — ERP untuk UMKM (Laravel)
- **KONSTRA** — PWA manajemen kontraktor & proyek
- **Sweetmelt Cookies** — e-commerce kue premium
- **SPECTRA** — platform internal PT. SatSet MerahPutih Indonesia
- **Payroll System HRIS** — sistem payroll & absensi (TypeScript)
- **SIMAMANG** — sistem manajemen magang POLSRI (Laravel)
- **UMKM Mie Mercon Jawara** — e-commerce UMKM

---

## ✦ Struktur Project

```bash
Porto-Graphite/
├── index.html                   # Halaman utama (SPA)
├── flex-carousel.js             # Mesin carousel WebGL (OGL)
├── FlexCarousel.css             # Stylesheet carousel
├── works-wheel.js               # Komponen drum reel 3D
├── scroll-expand-media.js       # Mesin media expand saat scroll
├── experience-section.js        # Timeline horizontal pengalaman
├── package.json                 # Konfigurasi & scripts
├── assets/
│   ├── preloader.css/js         # Preloader sinematik
│   ├── hero_portrait.png        # Foto hero
│   ├── projects/                # Screenshot proyek
│   └── profile/                 # Foto profil
└── README.md
```

---

## ✦ Menjalankan Lokal

Project ini murni statis (ES modules native). Jalankan dengan server HTTP apa pun:

```bash
# Clone
git clone https://github.com/JustRio24/Porto-Graphite.git
cd Porto-Graphite

# Option 1: Python (rekomendasi)
python3 -m http.server 8080

# Option 2: Node
npx serve .
```

Buka `http://localhost:8080`.

---

## ✦ Deployment

Karena portfolio sepenuhnya statis, deploy instan ke hosting edge mana pun:

- **Vercel**: `vercel` dari root, atau hubungkan repo GitHub.
- **Netlify**: drag & drop folder, atau hubungkan repo (publish dir `/`).
- **GitHub Pages**: Settings → Pages → source `main`, folder `/ (root)`.

---

## ✦ Connect

- **GitHub**: [@JustRio24](https://github.com/JustRio24)
- **Instagram**: [@justrio.24](https://www.instagram.com/justrio.24/)
- **LinkedIn**: [rio](https://www.linkedin.com/in/rio-rio-86a687297/)
- **Portfolio lama**: [justrio.my.id](https://justrio.my.id)

---

## ✦ Lisensi

Project ini open-source di bawah [MIT License](LICENSE).
