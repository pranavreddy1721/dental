<div align="center">

<img src="public/Chougule_logo.jpg" alt="Chougule Dental Clinic Logo" width="110" height="110"/>

<h1>🦷 Chougule Dental Clinic</h1>
<h3>Multispeciality Dental Clinic Website</h3>

<p>
  <strong>A production-grade, bilingual, fully responsive dental clinic website</strong><br/>
  Built with React 18 · TypeScript · Tailwind CSS · Vite · EmailJS · Cloudflare Pages
</p>

<p>
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
</p>

<p>
  <img src="https://img.shields.io/badge/Deployed_on-Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare"/>
  <img src="https://img.shields.io/badge/EmailJS-Integrated-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="EmailJS"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
  <img src="https://img.shields.io/badge/Status-Live_🟢-success?style=for-the-badge" alt="Status"/>
</p>

<p>
  <a href="https://chouguledentalclinic1.pages.dev" target="_blank">
    <img src="https://img.shields.io/badge/🌐_View_Live_Website-1E88E5?style=for-the-badge" alt="Live Site"/>
  </a>
  &nbsp;
  <a href="https://github.com/pranavreddy1721/dental" target="_blank">
    <img src="https://img.shields.io/badge/⭐_Star_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
</p>

</div>

---

## 🖥️ Preview

![Homepage Desktop](screenshots/hero-desktop.png)

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🖥️ Screenshots](#️-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚡ Getting Started](#-getting-started)
- [🔧 Configuration](#-configuration)
- [📦 Deployment](#-deployment)
- [👨‍💻 Author](#-author)

---

## ✨ Features

### 🌍 Bilingual Support — English & Marathi
Switch the entire UI between **English** and **Marathi (मराठी)** with one click using React Context API. No page reload.

### 🌙 Dark / Light Mode
Smooth theme toggle saved to `localStorage` — persists across sessions.

### 📊 Animated Statistics Counter
Scroll-triggered counters that animate from 0 using cubic ease-out via `IntersectionObserver`:
- **10,000+** Happy Patients · **200+** Successful Implants · **350+** Google Reviews · **5+** Years Experience

### 🃏 3D Flip Service Cards
Click any highlighted card to flip it and reveal treatment duration, 5-point checklist, doctor attribution, and a Book Appointment button.

### 📅 Online Appointment Booking
EmailJS-powered form — no backend needed. Blocks Sundays, auto-populates service from clicked card, sends email to clinic Gmail instantly.

### ⭐ Verified Google Reviews
Auto-cycling featured card, 2×2 clickable grid, verified badge on every review, scrolling marquee of reviewer names.

### 🖼️ Gallery + Certifications
6 real clinic photos with full-screen lightbox. MDS degree certificates with zoom modal.

### 📱 Fully Responsive
Works on all screen sizes — 320px mobile to 1920px desktop. Mobile has dedicated info card layout.

---

## 🖥️ Screenshots

### 🏠 Homepage — Desktop

![Homepage Desktop](screenshots/hero-desktop.png)

---

### 🌙 Dark Mode

![Dark Mode](screenshots/dark-mode.png)

---

### 🌍 Marathi Language Mode

![Marathi Mode](screenshots/marathi-mode.png)

---

### 📱 Mobile View

![Mobile Hero](screenshots/hero-mobile.png)

---

### 🃏 Services — Front & Flipped

![Services Front](screenshots/services-front.png)

![Services Flipped](screenshots/services-flipped.png)

---

### ⭐ Google Reviews Section

![Reviews](screenshots/reviews.png)

---

### 📊 Animated Stats Counter

![Stats](screenshots/stats.png)

---

### 📅 Appointment Booking Form

![Appointment](screenshots/appointment.png)

---

### 🖼️ Gallery

![Gallery](screenshots/gallery.png)

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| ⚛️ Framework | React | 18.3.1 |
| 🔷 Language | TypeScript | 5.x |
| ⚡ Build Tool | Vite | 6.3.5 |
| 🎨 Styling | Tailwind CSS | 4.x |
| 📧 Email | EmailJS | 4.x |
| 🔷 Icons | Lucide React | 0.487 |
| 🎠 Carousel | React Slick | 0.31 |
| ☁️ Hosting | Cloudflare Pages | — |
| 🗂️ Version Control | Git + GitHub | — |

---

## 📁 Project Structure

```
Chougule-Dental-Clinic/
│
├── public/                          # Static assets (clinic photos, logo)
├── screenshots/                     # README screenshots (add yours here)
│
├── src/
│   ├── app/
│   │   ├── App.tsx                  # Root + LanguageContext (EN/MR)
│   │   ├── context/
│   │   │   └── ThemeContext.tsx     # Dark/Light mode
│   │   ├── hooks/
│   │   │   └── useCountUp.ts        # Scroll-triggered counter animation
│   │   └── components/
│   │       ├── Navigation.tsx       # Navbar — EN/MR toggle + dark mode
│   │       ├── Hero.tsx             # Hero + clinic info panel
│   │       ├── About.tsx            # About + stats bar
│   │       ├── StatsBar.tsx         # Animated counters
│   │       ├── Services.tsx         # 3D flip service cards
│   │       ├── Doctors.tsx          # Doctor profiles
│   │       ├── WhyChooseUs.tsx      # USP section
│   │       ├── Reviews.tsx          # Google reviews + marquee
│   │       ├── Gallery.tsx          # Photo gallery + lightbox
│   │       ├── Certifications.tsx   # MDS certificates
│   │       ├── Appointment.tsx      # EmailJS booking form
│   │       ├── Contact.tsx          # Contact + Google Maps
│   │       ├── FloatingButtons.tsx  # Fixed WhatsApp + Call buttons
│   │       └── Footer.tsx           # Footer with CTA strip
│   │
│   ├── styles/
│   │   ├── index.css                # Global styles + slick carousel
│   │   ├── theme.css                # CSS variables + dark mode tokens
│   │   ├── fonts.css                # Sora + Plus Jakarta Sans
│   │   └── tailwind.css             # Tailwind imports
│   │
│   └── main.tsx                     # React entry point
│
├── index.html
├── vite.config.ts
└── package.json
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/pranavreddy1721/dental.git
cd dental

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

---

## 🔧 Configuration

### EmailJS

Configured in `src/app/components/Appointment.tsx`:

```typescript
emailjs.send(
  "service_qrumx55",      // EmailJS Service ID
  "template_908dksu",     // EmailJS Template ID
  templateParams,
  "2mDLcruOZfH0K_PBA"     // EmailJS Public Key
);
```

### Google Maps

Uses an `<iframe>` embed with the query `"Chougule Dental Clinic Ashta Sangli"` — no API key needed.

### Live Google Reviews (Optional)

Add to Cloudflare Pages environment variables:

```
VITE_GOOGLE_PLACES_API_KEY=AIza...
VITE_GOOGLE_PLACE_ID=ChIJ...
```

---

## 📦 Deployment

Deployed on **Cloudflare Pages** with automatic CI/CD from GitHub.

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node.js version | `18.x` |

Every push to `main` auto-deploys in ~60–90 seconds.

**Live:** [https://chouguledentalclinic1.pages.dev](https://chouguledentalclinic1.pages.dev)

---

## 👨‍💻 Author

<div align="center">

**Pranav Kaviraj Reddy**

[![GitHub](https://img.shields.io/badge/GitHub-pranavreddy1721-181717?style=for-the-badge&logo=github)](https://github.com/pranavreddy1721)
[![Email](https://img.shields.io/badge/Email-pranavreddy1817@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pranavreddy1817@gmail.com)

*Third Year B.Tech — CSE (IoT & Cyber Security)*
*Annasaheb Dange College of Engineering and Technology, Ashta*
*Under the guidance of Mrs. Shital D. Kolekar*

</div>

---

## 📄 License

MIT License — feel free to use this as a reference for your own projects.

---

<div align="center">

Made with ❤️ for **Chougule Dental Clinic, Ashta, Maharashtra**

⭐ **If this helped you, please give it a star!** ⭐

</div>
