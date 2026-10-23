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
