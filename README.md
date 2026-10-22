# Porto-Graphite

**Portfolio editorial monokrom untuk RIO — Fullstack Developer & AI Agent Engineer.**

Porto-Graphite adalah website portfolio pribadi dengan estetika **graphite**: tenang, tegas, sinematik, dan berfokus pada tipografi serta motion. Dibangun di atas fondasi template editorial ECHO, kemudian di-customize penuh untuk identitas RIO.

---

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Proyek](#proyek)
- [Cara Menjalankan](#cara-menjalankan)
- [Deployment](#deployment)
- [Struktur](#struktur)
- [Kontak](#kontak)
- [Lisensi](#lisensi)

---

## Fitur

### 🎬 Preloader Sinematik
- Wordmark "RIO" muncul **per huruf** (staggered reveal).
- Progress **hairline** dengan dot bercahaya + counter persen.
- Exit **curtain** (slide ke atas) disusul hero reveal halus.
- Menghormati `prefers-reduced-motion`.

### 🗞️ Hero Editorial & Typography Metallic
- Tipografi responsif berbasis viewport (`clamp` / `vw`).
- Gradien metalik multi-layer pada teks besar.
- Portrait depth masking pada foto hero.

### 🔍 ScrollExpandMedia
- Media mengembang mengikuti scroll: interpolasi dimensi, aspect ratio, dan blur.
- Unblur dual-layer GPU-accelerated hingga 120 FPS.

### 🧭 Horizontal Experience Canvas
- Timeline karier horizontal yang didorong scroll vertikal.
- Panel milestone interaktif + animasi "living flow".
- Fallback aksesibel (`prefers-reduced-motion`).

### 🎡 WorksWheel 3D Drum Reel
- Proyeksi drum 3D (rotateX/rotateZ/translateZ).
- Drag fisika, momentum inertia, scroll wheel, navigasi bertahap.
- Terhubung ke modal inspeksi proyek.

### 🌊 FlexCarousel (OGL WebGL)
- Card slider bertenaga **OGL** dengan liquid lens bending.
- Accordion dinamis, klik-untuk-fokus, dukungan keyboard/touch.

### 🪟 Interactive Project Modal
- Modal glassmorphic dengan backdrop blur.
- Metadata lengkap: kategori, deskripsi, highlight, deliverables, stack.

---

## Teknologi

| Domain | Teknologi | Keterangan |
|---|---|---|
| **Struktur** | HTML5 / Semantic Web | Markup SEO-optimized |
| **Styling** | Vanilla CSS + Tailwind CSS v3 | Design tokens monokrom graphite |
| **Graphics & WebGL** | [OGL](https://github.com/oframe/ogl) | WebGL 3D & shader liquid |
| **Logic & Motion** | Vanilla JavaScript (ES Modules) | Zero-framework |
| **Typography** | Plus Jakarta Sans | Sans-serif editorial |
| **Komponen** | `flex-carousel`, `works-wheel`, `scroll-expand-media`, `experience-section` | Modular UI engine |

---

## Proyek

Portfolio menampilkan proyek-proyek asli RIO:

| Proyek | Deskripsi | Stack |
|---|---|---|
| **MiDClass App** | Learning Management System: absensi, jadwal, tugas, kalender akademik | Android, Java, Firebase |
| **SmartDrum** | IoT dashboard monitoring & otomasi budidaya jamur | IoT, Arduino, JavaScript |
| **Visit Palembang** | Web promosi pariwisata Palembang (Web Design Competition 2025) | JavaScript, HTML/CSS |
| **Gobeng App** | Web app React + Vite dengan sistem RBAC | React, Vite, RBAC |
| **ERP Tempe 3 Puteri v2** | ERP UMKM: inventori, produksi, penjualan, keuangan | Laravel, Blade, PHP |
| **KONSTRA** | PWA manajemen kontraktor & proyek (offline-first) | JavaScript, PWA |
| **Sweetmelt Cookies** | E-commerce kue premium | JavaScript, E-commerce |
| **SPECTRA** | Platform internal PT. SatSet MerahPutih Indonesia | Laravel, Blade, PHP |
| **Payroll System HRIS** | Payroll & absensi komprehensif (HRIS) | TypeScript, HRIS |
| **SIMAMANG** | Sistem manajemen magang POLSRI | Laravel, PHP, Blade |
| **UMKM Mie Mercon Jawara** | E-commerce UMKM dengan manajemen produk & pesanan | Laravel, Blade |

---

## Cara Menjalankan

Project ini murni statis (ES modules native) — cukup dengan HTTP server apa pun.

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

## Deployment

Karena portfolio sepenuhnya statis, deploy ke hosting edge mana pun:

- **Vercel** — `vercel` dari root, atau hubungkan repo GitHub.
- **Netlify** — drag & drop folder, atau hubungkan repo (publish dir `/`).
- **GitHub Pages** — Settings → Pages → source `main`, folder `/ (root)`.

---

## Struktur

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
│   ├── preloader.css / .js      # Preloader sinematik
│   ├── hero_portrait.png        # Foto hero
│   ├── projects/                # Screenshot proyek
│   └── profile/                 # Foto profil
└── README.md
```

---

## Kontak

- **GitHub**: [@JustRio24](https://github.com/JustRio24)
- **Instagram**: [@justrio.24](https://www.instagram.com/justrio.24/)
- **LinkedIn**: [rio](https://www.linkedin.com/in/rio-rio-86a687297/)
- **Situs lama**: [justrio.my.id](https://justrio.my.id)

---

## Lisensi

Project ini open-source di bawah [MIT License](LICENSE).
