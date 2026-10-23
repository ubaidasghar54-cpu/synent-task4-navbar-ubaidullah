# LumiLayer | Responsive Navigation Bar

> **Synent Technologies Web Development Internship — Task 4 (Basic Level)**  
> **Student:** Ubaidullah  
> **Folder / Repository:** `synent-task4-navbar-ubaidullah`  

---

## 🌟 Live Demo & Video Walkthrough

- **Live URL:** [https://ubaidullah.github.io/synent-task4-navbar-ubaidullah](https://ubaidullah.github.io/synent-task4-navbar-ubaidullah) *(Placeholder)*
- **Demo Video Walkthrough:** [YouTube / Loom Link](https://loom.com/share/placeholder) *(Placeholder)*

---

## 📖 Project Overview

**LumiLayer** is a lightweight, accessible, and responsive navigation bar built strictly with vanilla web technologies: **semantic HTML5, modern CSS3, and clean vanilla JavaScript**—with zero frameworks, zero CSS utility libraries, and zero external icon packages.

The project demonstrates a production-grade front-end workflow: desktop Flexbox layout, an off-canvas mobile drawer with pure CSS hamburger-to-'X' animation, sticky navbar elevation, active scroll spy navigation, and comprehensive keyboard/screen-reader accessibility (WCAG 2.1 AA).

---

## 📸 Screenshots

| Desktop View (≥ 769px) | Mobile Drawer View (≤ 768px) |
| :---: | :---: |
| ![Desktop View](https://via.placeholder.com/600x340?text=LumiLayer+Desktop+Navbar) | ![Mobile View](https://via.placeholder.com/300x530?text=LumiLayer+Mobile+Menu) |

---

## ✨ Features

### Required Core Features
1. **Brand Logo & Menu Items:** Clean text wordmark (`LumiLayer`) with primary navigation links (*Home, About, Services, Portfolio, Contact*).
2. **Mobile Hamburger Menu:** Switches automatically to a mobile toggle on screens $768\text{px}$ and below.
3. **Vanilla JavaScript Toggle:** Smoothly opens and closes the mobile navigation drawer.
4. **Fluid Cross-Device Navigation:** Tested and optimized for mobile ($360\text{px}$), tablet ($768\text{px}$), and wide desktop ($1280\text{px}+$ screens.

### Extra Features to Stand Out
- **CSS-Only Animated Hamburger-to-'X' Icon:** Built entirely with three CSS `<span class="navbar__bar"></span>` lines using 2D transforms and opacity—zero external icon libraries (e.g. FontAwesome, Boxicons) needed.
- **Off-Canvas Slide & Fade Drawer:** Mobile navigation animates gracefully with cubic-bezier easing.
- **Multiple Dismiss Gestures:**
  - Closes upon clicking any navigation link or CTA.
  - Closes upon clicking anywhere outside the menu drawer.
  - Closes upon pressing the <kbd>Escape</kbd> key, gracefully returning focus to the toggle button.
- **Sticky Navbar Elevation Shadow:** When scrolled past $20\text{px}$, the navbar transitions from flat to a floating elevation shadow with a frosted glass backdrop filter (`backdrop-filter: blur(8px)`).
- **Dynamic Active Section Highlighter (ScrollSpy):** Highlights the corresponding nav link as the user scrolls past each section on the demo page.
- **WCAG 2.1 Accessibility Support:**
  - Uses native `<button>` element with minimum $44 \times 44\text{px}$ tap target.
  - JavaScript maintains dynamic synchronization of `aria-expanded` (`true`/`false`) and `aria-controls`.
  - High-contrast `:focus-visible` outline for keyboard-only users.
  - `prefers-reduced-motion` media query respects users' motion sensitivity preferences.
- **Call-to-Action (CTA) Button:** Prominent *"Get Started"* pill button with subtle elevation hover effects.
- **Smooth Anchor Scrolling:** Configured with `scroll-behavior: smooth` and `scroll-padding-top: var(--nav-height)` so fixed navbar never conceals section headings.

---

## 🛠️ Tech Stack & Architecture

- **Markup:** Semantic HTML5 (`<header>`, `<nav>`, `<ul>`, `<li>`, `<main>`, `<section>`, `<footer>`) following BEM (Block Element Modifier) class naming conventions.
- **Styling:** Modern CSS3 featuring CSS Custom Properties (`--color-primary: #0F172A`, `--color-accent: #3B82F6`, `--color-highlight: #FBBF24`, `--color-bg: #F8FAFC`), Flexbox layout, and mobile-first responsive media queries.
- **Scripting:** Modular, lightweight Vanilla JavaScript (ES6+) with clear function definitions:
  - `openMenu()`
  - `closeMenu()`
  - `toggleMenu()`
  - `handleNavbarShadow()`
  - `highlightActiveSection()`
- **Typography:** Google Fonts — [Poppins](https://fonts.google.com/specimen/Poppins) (400, 500, 600, 700).

---

## 📁 File Structure

```text
synent-task4-navbar-ubaidullah/
│
├── index.html        # Semantic HTML structure & demo sections
├── css/
│   └── style.css     # CSS custom variables, reset, desktop/mobile layouts & animations
├── js/
│   └── main.js       # Modular vanilla JavaScript logic & event listeners
└── README.md         # Comprehensive project documentation
```

---

## 🚀 How to Run Locally

You do not need any build tools, bundlers, or package managers to run this project.

### Option 1: Direct File Open
Double-click `index.html` to open it directly in any modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` and click **"Open with Live Server"** (runs at `http://127.0.0.1:5500`).

### Option 3: Local Python HTTP Server
Open your terminal in the project directory and run:
```bash
# Python 3.x
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 📐 Responsive Breakpoints

| Viewport Width | Device Category | Navbar Behavior |
| :--- | :--- | :--- |
| **$\le 360\text{px}$** | Small Mobile (e.g. iPhone SE, Galaxy A) | Hamburger visible, compact padding, full-width CTA & links |
| **$361\text{px} - 768\text{px}$** | Standard Mobile & Tablet Portrait | Hamburger button visible, vertical off-canvas drawer |
| **$\ge 769\text{px}$** | Tablet Landscape & Desktop Monitors | Horizontal Flexbox layout, hamburger hidden, hover animations |

---

## 📝 Git Commit History

The repository follows standard Conventional Commits:

1. `feat: create semantic HTML structure for navbar and demo sections`
2. `style: add CSS custom properties, desktop flexbox navbar, and demo page sections`
3. `style: add mobile navigation layout and CSS-only hamburger button`
4. `feat: implement JavaScript toggle with openMenu, closeMenu, and ARIA state management`
5. `feat: animate hamburger to X icon and handle link click, outside click, and Escape key`
6. `feat: add sticky navbar shadow on scroll and dynamic active section link highlight`
7. `style: add 360px viewport optimization and prefers-reduced-motion accessibility support`
8. `docs: add comprehensive project documentation in README.md`

---

## 📄 License & Credits

Created by **Ubaidullah** as an educational internship project for the **Synent Technologies Web Development Internship**.
All code is original and written from scratch without third-party frameworks.
