# FITNESS STACK UNISEX GYM Gym Website Prototype

A high-performance, fully responsive prototype for a modern gym built with React, Vite, Framer Motion, and pure CSS.

## 🚀 How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the provided local URL (usually `http://localhost:5173`) in your browser.

## 🎨 How to Change Branding & Content

This project was built with a single-source-of-truth configuration. You do not need to hunt through components to rebrand the site.

- **Content & Data:** Open `src/data/siteConfig.js`. All text, images, trainers, pricing plans, schedule, and testimonials are defined here. Change them to instantly update the site.
- **Colors & Typography:** Open `src/styles/globals.css`. Look for the `:root` variables block at the top. Change `--primary`, `--accent-lime`, or fonts to completely overhaul the look and feel.

## 🚢 How to Deploy

This site is a static single-page application and can be hosted anywhere for free.

**Deploying to Vercel or Netlify:**
1. Push this repository to GitHub/GitLab.
2. Log in to Vercel or Netlify and select "Add New Site/Project".
3. Connect your Git repository.
4. The platform should automatically detect that it's a Vite app.
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**.

## 🔌 Mocked Data vs. Real Backend

This project is a **UI/UX prototype**. It requires no backend to run, but if you want to turn it into a fully functional product, here is what is currently mocked and needs API integration:

- **Free Trial Form:** The form at the bottom simulates a submission with validation and a success confetti state. To make it real, hook the `handleSubmit` function in `src/sections/FreeTrial.jsx` to an email service (like Formspree or EmailJS) or your own backend API.
- **Class Booking:** The "Book" buttons on the Schedule section just scroll to the trial form right now. You would need a backend (like Mindbody or a custom Node/SQL setup) to track available spots and handle user auth.
- **Dynamic Data:** Trainers, pricing, and schedule are hardcoded in `siteConfig.js`. In a CMS-driven app, you would fetch these from a database or a headless CMS (like Sanity or Contentful).
- **BMI Calculator:** This is fully functional client-side logic! It doesn't strictly need a backend, but you could save user results to a database if desired.
