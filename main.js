/* ===================================================
   main.js — Shared JS for all portfolio pages
   - Light/dark mode toggle (persists via localStorage)
   - Scroll-to-top button
   - Active nav link highlighting (page-level)
   - Scroll progress bar
   - Active section label in header
   - Scrolling gradient background
   - Hero typing animation (index.html only)
=================================================== */


// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const root        = document.documentElement;

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label',
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

(function () {
  const saved = localStorage.getItem('portfolio-theme') || 'light';
  setTheme(saved);
})();

themeToggle.addEventListener('click', () => {
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});


// ===== Active Nav Link (page-level) =====
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });
})();


// ===== Scroll Events (progress bar + gradient + scroll-top) =====
const scrollTopBtn  = document.getElementById('scroll-top');
const sectionLabel  = document.getElementById('section-label');

function onScroll() {
  const scrollY   = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress  = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

  // Scroll progress bar (via CSS custom property on :root)
  root.style.setProperty('--scroll-progress', progress.toFixed(2));

  // Scrolling gradient: move the radial glow from top to bottom as user scrolls
  const gradientY = 8 + (progress * 0.7); // travels from 8% to ~78%
  root.style.setProperty('--gradient-y', gradientY.toFixed(1) + '%');

  // Scroll-to-top button visibility
  if (scrollY > 300) scrollTopBtn.classList.add('visible');
  else               scrollTopBtn.classList.remove('visible');
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ===== Active Section Observer =====
const sections = document.querySelectorAll('main section[id]');

if (sections.length && sectionLabel) {
  const sectionNames = {
    summary:                'Summary',
    education:              'Education',
    experience:             'Experience',
    skills:                 'Skills',
    intro:                  'About Me',
    interests:              'Interests',
    projects:               'Projects',
    'contact-info':         'Contact Info',
    'contact-form-section': 'Send a Message',
  };

  function updateSectionLabel() {
    if (window.scrollY < 80) {
      sectionLabel.classList.remove('visible');
      return;
    }

    // Find the section whose top is closest to (but above) 40% down the viewport
    const threshold = window.innerHeight * 0.4;
    let activeSection = null;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= threshold) {
        activeSection = section;
      }
    });

    if (activeSection) {
      const name = sectionNames[activeSection.id] || '';
      if (name) {
        sectionLabel.textContent = name;
        sectionLabel.classList.add('visible');
      }
    }
  }

  window.addEventListener('scroll', updateSectionLabel, { passive: true });
  updateSectionLabel(); // run once on load
}


// ===== Hero Typing Animation (home page only) =====
const heroTyped  = document.getElementById('hero-typed');
const heroCursor = document.getElementById('hero-cursor');

if (heroTyped) {
  const phrases = [
    'IT Technician',
    'U.S. Marine Corps Veteran',
    'Computing Applications Student',
    'Web Developer in Progress',
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let isPaused    = false;

  const TYPE_SPEED   = 65;   // ms per character typed
  const DELETE_SPEED = 35;   // ms per character deleted
  const PAUSE_AFTER  = 2000; // ms to pause at full phrase
  const PAUSE_BEFORE = 400;  // ms to pause before typing next

  function tick() {
    const current = phrases[phraseIndex];

    if (isPaused) {
      isPaused = false;
      isDeleting = true;
      setTimeout(tick, PAUSE_AFTER);
      return;
    }

    if (isDeleting) {
      charIndex--;
      heroTyped.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, PAUSE_BEFORE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    } else {
      charIndex++;
      heroTyped.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        isPaused = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    }
  }

  // Small initial delay before the animation starts
  setTimeout(tick, 500);
}