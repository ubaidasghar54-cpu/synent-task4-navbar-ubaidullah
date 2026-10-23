/**
 * LumiLayer - Responsive Navigation Bar
 * Vanilla JavaScript Implementation
 * Synent Technologies Web Development Internship
 */

// ==========================================================================
// 1. DOM Element Selectors
// ==========================================================================
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('primary-navigation');
const navLinks = document.querySelectorAll('.navbar__link, .navbar__cta');
const sections = document.querySelectorAll('section[id]');

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
  document.body.classList.add('no-scroll');
}

/**
 * Closes the mobile navigation drawer and resets ARIA accessibility state.
 */
function closeMenu() {
  navMenu.classList.remove('is-active');
  navToggle.classList.remove('is-active');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
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

// ==========================================================================
// 4. Scroll Effects: Sticky Shadow & Active Link Highlight (ScrollSpy)
// ==========================================================================

/**
 * Toggles a subtle elevation shadow and backdrop blur when the page is scrolled down.
 */
function handleNavbarShadow() {
  if (!header) return;

  if (window.scrollY > 20) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
}

/**
 * Highlights the current active navigation link based on which section is in the viewport.
 */
function highlightActiveSection() {
  const scrollY = window.pageYOffset || window.scrollY;
  // Check if user has scrolled near the bottom of the document
  const isNearBottom = (window.innerHeight + scrollY) >= document.documentElement.scrollHeight - 50;

  if (isNearBottom && sections.length > 0) {
    const lastSectionId = sections[sections.length - 1].getAttribute('id');
    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      const link = document.querySelector(`.navbar__list a[href="#${sectionId}"]`);
      if (link) {
        link.classList.toggle('active-link', sectionId === lastSectionId);
      }
    });
    return;
  }

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    // Offset accounts for fixed navbar height so link activates right as section enters view
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const matchingLink = document.querySelector(`.navbar__list a[href="#${sectionId}"]`);

    if (matchingLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        matchingLink.classList.add('active-link');
      } else {
        matchingLink.classList.remove('active-link');
      }
    }
  });
}

// Attach scroll handler
window.addEventListener('scroll', () => {
  handleNavbarShadow();
  highlightActiveSection();
});

// Run once on initial load in case user refreshed mid-page
handleNavbarShadow();
highlightActiveSection();

