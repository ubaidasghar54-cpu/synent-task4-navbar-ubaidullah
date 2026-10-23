/**
 * LumiLayer - Responsive Navigation Bar
 * Vanilla JavaScript Implementation
 * Synent Technologies Web Development Internship
 */

// ==========================================================================
// 1. DOM Element Selectors
// ==========================================================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('primary-navigation');
const navLinks = document.querySelectorAll('.navbar__link, .navbar__cta');

// ==========================================================================
// 2. Navigation State Functions
// ==========================================================================

/**
 * Opens the mobile navigation drawer and updates ARIA accessibility state.
 */
function openMenu() {
  navMenu.classList.add('is-active');
  navToggle.classList.add('is-active');
  navToggle.setAttribute('aria-expanded', 'true');
}

/**
 * Closes the mobile navigation drawer and resets ARIA accessibility state.
 */
function closeMenu() {
  navMenu.classList.remove('is-active');
  navToggle.classList.remove('is-active');
  navToggle.setAttribute('aria-expanded', 'false');
}

/**
 * Toggles the menu between open and closed states based on current aria-expanded value.
 */
function toggleMenu() {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    closeMenu();
  } else {
    openMenu();
  }
}

// ==========================================================================
// 3. Event Listeners
// ==========================================================================

// Toggle menu when clicking the hamburger button
if (navToggle && navMenu) {
  navToggle.addEventListener('click', toggleMenu);
}

// Close mobile menu when any navigation link or CTA is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navToggle && navToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
});

// Close menu when clicking anywhere outside of the navbar menu and toggle
document.addEventListener('click', (event) => {
  if (!navToggle || !navMenu) return;

  const isMenuOpen = navToggle.getAttribute('aria-expanded') === 'true';
  const isClickInside = navMenu.contains(event.target) || navToggle.contains(event.target);

  if (isMenuOpen && !isClickInside) {
    closeMenu();
  }
});

// Close menu on Escape key press (keyboard accessibility)
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navToggle && navToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    navToggle.focus(); // Return focus to the toggle button
  }
});

// Reset menu if the browser window is resized wider than the mobile breakpoint
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navToggle && navToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
  }
});

