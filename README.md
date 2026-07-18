# 🌌 Nexora - Premium AI Financial Analytics Investor-Pitch Landing Page & Dashboard Preview

Nexora is a premium, investor-pitch-ready SaaS landing page + interactive analytics dashboard preview engineered for a fictional AI-powered financial analytics product. 

This flagship application is built using **React + Tailwind CSS (v4) + Three.js + GSAP**, combining custom WebGL particle networks and fluid scroll-triggered timelines. It represents the pinnacle of modern front-end craftsmanship—designed with deep-navy/black cinematic background styles, glowing glassmorphism dashboards, and subtle interactive parallax indicators.

---

## ✨ Design & Architecture Highlights

1. **Cinematic Hero with Interactive Three.js WebGL Particle Network**:
   - Features a custom canvas generating an abstract, floating data sphere containing $1,200$ individual depth-sorted coordinates.
   - Designed with realistic spherical math formulas, glowing radial particle maps, additive blending modes, and rotating wireframe orbital grids.
   - Implements **subtle mouse parallax feedback (lerp)**, where the camera smoothly rotates and tilts around the core sphere as the user moves their cursor over the screen.
   
2. **GSAP Scroll-Triggered Timelines**:
   - Custom-orchestrated staggered entrance animations revealing the hero text lines sequentially.
   - Smooth, non-linear slide-ins and staggered reveals applied to features cards, dashboard metrics, quant reviews, and pricing structures.
   - Structured around GSAP's native context rendering engine (`gsap.context()`), ensuring full React lifecycle compliance, auto-cleanup on unmount, and zero memory leaks.

3. **High-Fidelity Interactive Dashboard Preview**:
   - Custom dynamic dashboard simulating an institutional quantitative trading terminal.
   - **Interactive Model Toggles**: Select from 'Aggressive', 'Moderate', or 'Conservative' portfolios to see the glowing SVG Spline Chart dynamically change its forecasted path, yield parameters, risk indices, and execution logs in real-time.
   - **Simulated NAV Ticker**: Real-time asset value calculations updating every three seconds to mimic a live quantitative trade execution platform.
   - Built inside translucent glassmorphic components using premium utility-first gradients.

4. **Robust Pricing & Premium Investor CTAs**:
   - Contains a premium 3-tier membership seat tier system highlighting the signature "Quantum Vector" tier with custom animated glow indicators.
   - Includes micro-interactions (magnetic button tilts, glowing border hovers, and coordinate parallax offsets).
   - Incorporates a detailed regulatory compliance Safe Harbor SEC notice for absolute realism.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (engineered natively with `@tailwindcss/vite` for optimized bundles)
- **3D Engine**: [Three.js](https://threejs.org/)
- **Animation**: [GSAP](https://gsap.com/) + [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- **Iconography**: [Lucide React](https://lucide.dev/) (custom inline SVG branding vectors for trademark compliance)

---

## 🚀 Running & Developing Locally

To deploy or develop Nexora on your workstation, run the following steps:

### 1. Clone & Navigate
```bash
git clone https://github.com/ma2446965-lab/Frontend.git
cd Frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to: **[http://localhost:5173](http://localhost:5173)** to experience the high-frame-rate particle rendering.

### 4. Build for Production
```bash
npm run build
```
Creates highly compressed, code-split production outputs in the `/dist` directory.
