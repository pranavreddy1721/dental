<div align="center">

# 🦷 Chougule Dental Clinic

### *Your Smile, Our Priority*

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-1E88E5?style=for-the-badge&labelColor=0D1B2A" alt="Version"/>
  <img src="https://img.shields.io/badge/license-MIT-26A69A?style=for-the-badge&labelColor=0D1B2A" alt="License"/>
  <img src="https://img.shields.io/badge/built%20with-React%20%7C%20TS%20%7C%20Vite-1E88E5?style=for-the-badge&labelColor=0D1B2A" alt="Built With"/>
  <img src="https://img.shields.io/badge/hosting-Cloudflare_Pages-F38020?style=for-the-badge&labelColor=0D1B2A" alt="Hosting"/>
  <img src="https://img.shields.io/badge/status-🟢_Live-26A69A?style=for-the-badge&labelColor=0D1B2A" alt="Status"/>
</p>

<p align="center">
  A <strong>production-grade, bilingual, fully responsive</strong> dental clinic website.<br/>
  Dark / Light Mode · English & Marathi · EmailJS Booking · 3D Flip Cards · Verified Reviews
</p>

<p align="center">
  <a href="https://chouguledentalclinic1.pages.dev">
    <img src="https://img.shields.io/badge/🌐_View_Live_Website-1E88E5?style=for-the-badge" alt="Live"/>
  </a>
  &nbsp;
  <a href="https://github.com/pranavreddy1721/dental">
    <img src="https://img.shields.io/badge/⭐_Star_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  &nbsp;
  <a href="mailto:pranavreddy1721@gmail.com">
    <img src="https://img.shields.io/badge/📧_Contact_Dev-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>
</p>

<br/>

---

</div>

## 📸 Preview

<div align="center">
  <img src="screenshots/hero-desktop.png" alt="Chougule Dental Clinic — Homepage" width="100%"/>
  <br/><br/>
  <em>Chougule Dental Clinic — Live on Cloudflare Pages · Bilingual · Dark/Light Mode · Appointment Booking</em>
</div>

<br/>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🌍 &nbsp;Bilingual Interface
- Full **English ↔ Marathi** switch — one click, no reload
- React Context API with 40+ translated strings
- Covers Navigation, Hero, About, Stats sections
- Pill-style language toggle in the navbar

</td>
<td width="50%">

### 🌙 &nbsp;Dark / Light Mode
- Smooth theme toggle with moon/sun icon
- **Persists** across sessions via `localStorage`
- Tailwind `dark:` classes throughout all components
- Matches clinic's blue-teal brand in both modes

</td>
</tr>
<tr>
<td width="50%">

### 📊 &nbsp;Animated Statistics
- Scroll-triggered counters using `IntersectionObserver`
- **10,000+** Happy Patients · **200+** Implants
- **350+** Google Reviews · **5+** Years Experience
- Cubic ease-out animation, ~2.2s duration

</td>
<td width="50%">

### 🃏 &nbsp;3D Flip Service Cards
- Click any highlighted card to **flip it 180°**
- Back face reveals: duration, 5-point checklist, doctor name
- 3 flip cards + 3 direct-book cards
- `preserve-3d` + `backface-visibility` CSS animation

</td>
</tr>
<tr>
<td width="50%">

### 📅 &nbsp;Appointment Booking
- **EmailJS** integration — no backend server needed
- Blocks Sunday dates with a real-time alert
- Auto-populates service from clicked card via `localStorage`
- Sends confirmation email to clinic Gmail instantly

</td>
<td width="50%">

### ⭐ &nbsp;Google Reviews
- Auto-cycling featured card (20 reviews · 4.5s interval)
- **2×2 clickable side grid** — click to promote to featured
- **Verified Google Review** green badge on every card
- Scrolling marquee strip of all 20 reviewer names

</td>
</tr>
<tr>
<td width="50%">

### 🖼️ &nbsp;Gallery & Certifications
- 6 real clinic photos in a responsive 3-column grid
- Full-screen **lightbox** overlay on click
- MDS degree certificates with **click-to-zoom** modal
- Lazy-loaded images for performance

</td>
<td width="50%">

### 📱 &nbsp;Fully Responsive
- Works from **320px mobile** to **1920px desktop**
- Dedicated mobile hero with 2-column info card grid
- Hamburger nav menu with smooth transitions
- Tested on Chrome, Firefox, Safari, and Android

</td>
</tr>
</table>

<br/>

---

## 🚀 Getting Started

No backend. No environment setup required.

```bash
# 1. Clone the repository
git clone https://github.com/pranavreddy1721/dental.git
cd dental

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

> Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
# Output → dist/
```

<br/>

---

## 🖥️ Screenshots

### 🏠 Homepage — Desktop
![Homepage Desktop](screenshots/hero-desktop.png)

---

### 🌙 Dark Mode
![Dark Mode](screenshots/dark-mode.png)

---

### 🌍 Marathi Language Active
![Marathi Mode](screenshots/marathi-mode.png)

---

### 📱 Mobile View
![Mobile](screenshots/hero-mobile.png)

---

### 🃏 Services — Card Flip

**Front face — all 6 service cards:**
![Services Front](screenshots/services-front.png)

**After clicking — treatment details revealed:**
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

### 🖼️ Clinic Gallery
![Gallery](screenshots/gallery.png)

<br/>

---

## 🗂️ Project Structure

```
Chougule-Dental-Clinic/
│
├── 📂 public/                       # Static assets
│   ├── Chougule_logo.jpg            # Clinic logo
│   ├── Dental_chair.jpg             # Gallery — real clinic photos
│   ├── clinic_reception.jpg
│   ├── Treatment_room.jpg  ...
│   ├── root_canal.jpg               # Service card images
│   ├── dental_implant.png  ...
│   └── mds-certificate.jpg          # Doctor MDS certificates
│
├── 📂 screenshots/                  # README screenshots (add yours here)
│
├── 📂 src/
│   ├── 📂 app/
│   │   ├── App.tsx                  # Root + LanguageContext (EN/MR)
│   │   ├── context/
│   │   │   └── ThemeContext.tsx     # Dark / Light mode
│   │   ├── hooks/
│   │   │   └── useCountUp.ts        # Scroll-triggered counter hook
│   │   └── components/
│   │       ├── Navigation.tsx       # Navbar — EN/MR toggle + dark mode
│   │       ├── Hero.tsx             # Hero + clinic info panel
│   │       ├── About.tsx            # About + animated stats bar
│   │       ├── StatsBar.tsx         # Reusable animated counters
│   │       ├── Services.tsx         # 3D flip service cards
│   │       ├── Doctors.tsx          # Doctor profiles
│   │       ├── WhyChooseUs.tsx      # USP section
│   │       ├── Reviews.tsx          # Google reviews + marquee
│   │       ├── Gallery.tsx          # Photo gallery + lightbox
│   │       ├── Certifications.tsx   # MDS certificates + zoom
│   │       ├── Appointment.tsx      # EmailJS booking form
│   │       ├── Contact.tsx          # Contact info + Google Maps
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

<br/>

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  &nbsp;
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  &nbsp;
  <img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  &nbsp;
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/EmailJS-4.x-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="EmailJS"/>
  &nbsp;
  <img src="https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare"/>
  &nbsp;
  <img src="https://img.shields.io/badge/Lucide_React-0.487-1E88E5?style=for-the-badge" alt="Lucide"/>
  &nbsp;
  <img src="https://img.shields.io/badge/React_Slick-0.31-26A69A?style=for-the-badge" alt="React Slick"/>
</p>

| Technology | Purpose |
|---|---|
| **React 18 + TypeScript** | Component-based UI with full type safety |
| **Vite 6** | Lightning-fast dev server and production build |
| **Tailwind CSS 4** | Utility-first styling with custom theme tokens |
| **EmailJS** | Client-side email sending — no backend needed |
| **React Context API** | Theme (dark/light) and Language (EN/MR) state |
| **IntersectionObserver** | Scroll-triggered counter animations |
| **Cloudflare Pages** | Free CDN hosting with GitHub auto-deploy |
| **Google Maps Embed** | Live clinic location — no API key needed |
| **Lucide React** | Icon library — lightweight, tree-shakable |
| **React Slick** | Carousel for reviews section |

<br/>

---

## 🔧 Configuration

### 📧 EmailJS Setup

The appointment form sends emails via **EmailJS** — no backend required.

Credentials are in `src/app/components/Appointment.tsx`:

```typescript
emailjs.send(
  "service_qrumx55",      // ← EmailJS Service ID
  "template_908dksu",     // ← EmailJS Template ID
  templateParams,
  "2mDLcruOZfH0K_PBA"     // ← EmailJS Public Key
);
```

To use your own account → [emailjs.com](https://www.emailjs.com) → create service + template → replace the IDs above.

### 🌐 Live Google Reviews (Optional)

Add to Cloudflare Pages environment variables to fetch real reviews:

```env
VITE_GOOGLE_PLACES_API_KEY=AIza...
VITE_GOOGLE_PLACE_ID=ChIJ...
```

Without these, the site shows 20 curated fallback reviews — works perfectly.

<br/>

---

## 📦 Deployment

Deployed on **Cloudflare Pages** with automatic CI/CD from GitHub.

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node.js version | `18.x` |

Every `git push` to `main` → Cloudflare auto-builds and deploys in ~60–90 seconds.

**Live →** [https://chouguledentalclinic1.pages.dev](https://chouguledentalclinic1.pages.dev)

<br/>

---

## 📱 Responsive Behaviour

| Screen | Layout |
|--------|--------|
| **Desktop (≥ 1024px)** | 2-column hero with clinic info panel on right |
| **Tablet (768px – 1023px)** | Single column, info cards below CTAs |
| **Mobile (≤ 767px)** | 2-column info card grid, hamburger nav |

<br/>

---

## 🔒 Privacy

The website is **100% client-side** for all user data:
- ✅ No patient data stored on any server
- ✅ Appointment form only sends to clinic's own Gmail
- ✅ No analytics or tracking scripts
- ✅ Works fully after initial CDN load

<br/>

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

```bash
# Fork the repo, create a branch, make changes, open a PR
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature"
git push origin feature/your-feature-name
```

**Ideas for contributions:**
- Patient testimonial video section
- Before/after smile gallery slider
- Razorpay payment gateway for consultation fees
- Schema.org DentalClinic structured data for SEO
- Firebase backend for appointment management

<br/>

---

## 📄 License

```
MIT License — free to use, modify, and distribute.
```

<br/>

---

<div align="center">

**Made with ❤️ for Chougule Dental Clinic, Ashta, Maharashtra**

<br/>

*Chougule Dental Clinic — Your Smile, Our Priority*

<br/>

[![⭐ Star this repo](https://img.shields.io/badge/⭐%20Star%20this%20repo-If%20it%20helped%20you!-1E88E5?style=for-the-badge&labelColor=0D1B2A)](https://github.com/pranavreddy1721/dental)

</div>
