/* ============================================================
   ACADEMIC PORTFOLIO — script.js
   Features:
   1. Dark mode toggle (localStorage persisted)
   2. Header: shadow + scroll-active state
   3. Mobile hamburger menu
   4. Active nav link on scroll (IntersectionObserver)
   5. Publication year/type filtering
   6. BibTeX modal (open, close, copy)
   7. Contact form validation
   8. Hero canvas particle animation
============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     1. DARK MODE TOGGLE
     Reads/writes 'theme' key in localStorage.
     Applied as data-theme attribute on <html>.
  ============================================================ */
  const html         = document.documentElement;
  const themeToggle  = document.getElementById('theme-toggle');
  const STORAGE_KEY  = 'portfolio-theme';

  /**
   * Apply a theme ('light' or 'dark') to the document.
   * @param {string} theme
   */
  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (themeToggle) {
      themeToggle.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  // Determine initial theme: localStorage → system preference → light
  const savedTheme  = localStorage.getItem(STORAGE_KEY);
  const systemDark  = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme || (systemDark ? 'dark' : 'light'));

  // Toggle on button click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next    = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }


  /* ============================================================
     2. HEADER: SCROLL SHADOW
     Adds .scrolled class to header once user scrolls down.
  ============================================================ */
  const siteHeader = document.getElementById('site-header');

  function handleHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 10) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // run once on load


  /* ============================================================
     3. MOBILE HAMBURGER MENU
     Toggles the mobile nav drawer visibility.
  ============================================================ */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.hidden = isOpen;
    });

    // Close mobile menu when a nav link is clicked
    mobileNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      });
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
      if (!siteHeader.contains(e.target)) {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      }
    });
  }


  /* ============================================================
     4. ACTIVE NAV LINK ON SCROLL
     Uses IntersectionObserver to detect which section is visible.
     Highlights the matching nav link.
  ============================================================ */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link[data-section]');

  /**
   * Set a single nav link as active based on section id.
   * @param {string} sectionId
   */
  function setActiveNav(sectionId) {
    navLinks.forEach(link => {
      if (link.dataset.section === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach(section => observer.observe(section));
  }


  /* ============================================================
     5. PUBLICATION FILTERING
     Reads data-year and data-type from each .pub-card.
     data-type should be "preprint" or "conference".
     Matching is: year filters by year; "preprint"/"conference"
     filters by type; "all" shows everything.
     Also hides year group headers when all their cards are hidden.
  ============================================================ */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const pubCards    = document.querySelectorAll('.pub-card');
  const yearGroups  = document.querySelectorAll('.pub-year-group');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter; // 'all', '2026', '2025', 'preprint', 'conference'

        // Show/hide publication cards
        pubCards.forEach(card => {
          const year = card.dataset.year;
          const type = card.dataset.type;

          let show = false;
          if (filter === 'all') {
            show = true;
          } else if (filter === year) {
            show = true;
          } else if (filter === 'preprint' && type === 'preprint') {
            show = true;
          } else if (filter === 'conference' && type === 'conference') {
            show = true;
          }

          card.hidden = !show;
        });

        // Hide year group if all its cards are hidden
        yearGroups.forEach(group => {
          const visibleCards = group.querySelectorAll('.pub-card:not([hidden])');
          group.hidden = visibleCards.length === 0;
        });
      });
    });
  }


  /* ============================================================
     6. BIBTEX MODAL
     Opens when user clicks a .pub-btn-bibtex button.
     Uses the button's data-bibtex attribute as the content.
     Copy button copies to clipboard.
  ============================================================ */
  const bibtexModal    = document.getElementById('bibtex-modal');
  const bibtexContent  = document.getElementById('bibtex-content');
  const modalClose     = document.getElementById('modal-close');
  const copyBtn        = document.getElementById('copy-bibtex-btn');
  const copyFeedback   = document.getElementById('copy-feedback');

  /**
   * Open the BibTeX modal and populate with given text.
   * @param {string} bibtex
   */
  function openBibtexModal(bibtex) {
    if (!bibtexModal || !bibtexContent) return;
    bibtexContent.textContent = bibtex;
    bibtexModal.hidden = false;
    document.body.style.overflow = 'hidden';
    // Focus the pre block for screen readers
    bibtexContent.focus();
  }

  /**
   * Close the BibTeX modal.
   */
  function closeBibtexModal() {
    if (!bibtexModal) return;
    bibtexModal.hidden = true;
    document.body.style.overflow = '';
    if (copyFeedback) copyFeedback.textContent = '';
  }

  // Delegate: listen for BibTeX button clicks in pub list
  const pubList = document.getElementById('pub-list');
  if (pubList) {
    pubList.addEventListener('click', (e) => {
      const btn = e.target.closest('.pub-btn-bibtex');
      if (!btn) return;
      openBibtexModal(btn.dataset.bibtex || '');
    });
  }

  // Close via X button
  if (modalClose) {
    modalClose.addEventListener('click', closeBibtexModal);
  }

  // Close via overlay click (outside modal box)
  if (bibtexModal) {
    bibtexModal.addEventListener('click', (e) => {
      if (e.target === bibtexModal) closeBibtexModal();
    });
  }

  // Close via Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bibtexModal && !bibtexModal.hidden) {
      closeBibtexModal();
    }
  });

  // Copy BibTeX to clipboard
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const text = bibtexContent ? bibtexContent.textContent : '';
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        if (copyFeedback) {
          copyFeedback.textContent = '✓ Copied!';
          setTimeout(() => { copyFeedback.textContent = ''; }, 2500);
        }
      } catch {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        if (copyFeedback) {
          copyFeedback.textContent = '✓ Copied!';
          setTimeout(() => { copyFeedback.textContent = ''; }, 2500);
        }
      }
    });
  }


  /* ============================================================
     7. CONTACT FORM VALIDATION
     Validates name, email, message before "submission".
     Checks honeypot field (anti-bot).
     Shows success message (no backend — frontend-only demo).
  ============================================================ */
  const contactForm   = document.getElementById('contact-form');
  const nameInput     = document.getElementById('contact-name');
  const emailInput    = document.getElementById('contact-email');
  const messageInput  = document.getElementById('contact-message');
  const honeypotInput = document.getElementById('website');
  const formSuccess   = document.getElementById('form-success');
  const submitBtn     = document.getElementById('submit-btn');

  const nameError     = document.getElementById('name-error');
  const emailError    = document.getElementById('email-error');
  const messageError  = document.getElementById('message-error');

  /**
   * Show an error message for a field.
   * @param {HTMLElement} errorEl - the <span class="form-error"> element
   * @param {HTMLElement} inputEl - the input/textarea
   * @param {string} message
   */
  function showError(errorEl, inputEl, message) {
    if (errorEl) errorEl.textContent = message;
    if (inputEl) {
      inputEl.style.borderColor = '#ef4444';
      inputEl.style.boxShadow   = '0 0 0 3px rgba(239,68,68,0.15)';
    }
  }

  /**
   * Clear an error message.
   * @param {HTMLElement} errorEl
   * @param {HTMLElement} inputEl
   */
  function clearError(errorEl, inputEl) {
    if (errorEl) errorEl.textContent = '';
    if (inputEl) {
      inputEl.style.borderColor = '';
      inputEl.style.boxShadow   = '';
    }
  }

  /**
   * Validate email format using a simple regex.
   * @param {string} email
   * @returns {boolean}
   */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Live validation on blur
  if (nameInput)    nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim().length < 2) {
      showError(nameError, nameInput, 'Please enter your name (at least 2 characters).');
    } else {
      clearError(nameError, nameInput);
    }
  });

  if (emailInput)   emailInput.addEventListener('blur', () => {
    if (!isValidEmail(emailInput.value.trim())) {
      showError(emailError, emailInput, 'Please enter a valid email address.');
    } else {
      clearError(emailError, emailInput);
    }
  });

  if (messageInput) messageInput.addEventListener('blur', () => {
    if (messageInput.value.trim().length < 10) {
      showError(messageError, messageInput, 'Please enter a message (at least 10 characters).');
    } else {
      clearError(messageError, messageInput);
    }
  });

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Bot check: honeypot must be empty
    if (honeypotInput && honeypotInput.value.trim() !== '') {
      return;
    }

    let valid = true;

    if (!nameInput || nameInput.value.trim().length < 2) {
      showError(nameError, nameInput, 'Please enter your name (at least 2 characters).');
      valid = false;
    } else {
      clearError(nameError, nameInput);
    }

    if (!emailInput || !isValidEmail(emailInput.value.trim())) {
      showError(emailError, emailInput, 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(emailError, emailInput);
    }

    if (!messageInput || messageInput.value.trim().length < 10) {
      showError(messageError, messageInput, 'Please enter a message (at least 10 characters).');
      valid = false;
    } else {
      clearError(messageError, messageInput);
    }

    if (!valid) return;

    if (formSuccess) {
      formSuccess.hidden = false;
      formSuccess.innerHTML = `
        Your email app should open. Please send the message from there.
      `;
    }

    const name = encodeURIComponent(nameInput.value.trim());
    const email = encodeURIComponent(emailInput.value.trim());
    const message = encodeURIComponent(messageInput.value.trim());

    const subject = encodeURIComponent(`Portfolio contact from ${nameInput.value.trim()}`);
    const body = encodeURIComponent(
      `Name: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
    );

    setTimeout(() => {
      window.location.href = `mailto:asadmohd9411@gmail.com?subject=${subject}&body=${body}`;
    }, 700);
  });
}


  /* ============================================================
     8. HERO CANVAS PARTICLE ANIMATION
     - Creates a Particle class with x, y, vx, vy, radius
     - Draws particles and connects nearby ones with faint lines
     - Mouse position slightly repels particles
     - Respects prefers-reduced-motion
     - Handles window resize
  ============================================================ */

  // Check for reduced motion preference first
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('hero-canvas');

  if (canvas && !prefersReducedMotion) {
    initParticleCanvas(canvas);
  }

  /**
   * Initialize and run the particle animation on a given canvas.
   * @param {HTMLCanvasElement} canvas
   */
  function initParticleCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ── Configuration ── ✏️ EDIT these to tune the animation
    const CONFIG = {
      PARTICLE_COUNT:    55,      // number of particles
      MAX_SPEED:         0.55,    // maximum speed per axis
      CONNECT_DISTANCE:  140,     // px — max distance to draw connecting lines
      REPEL_RADIUS:      100,     // px — mouse repel radius
      REPEL_STRENGTH:    0.04,    // how strongly mouse repels particles
      PARTICLE_RADIUS_MIN: 1.5,
      PARTICLE_RADIUS_MAX: 3.0,
      LINE_OPACITY_MAX:  0.18,    // max opacity for connecting lines
      DOT_OPACITY:       0.45,    // particle opacity
    };

    // Accent color in RGB (matches --accent: #2563eb)
    // ✏️ EDIT: If you change the accent color, update these too
    const PARTICLE_COLOR = { r: 37, g: 99, b: 235 };

    let particles  = [];
    let animId     = null;
    let mouseX     = -9999;
    let mouseY     = -9999;
    let W          = 0;
    let H          = 0;

    /* ── Particle class ─────────────────────────────────────── */
    class Particle {
      constructor() {
        this.reset(true);
      }

      /**
       * Reset particle to a random position.
       * @param {boolean} initial - if true, randomize fully; else start at edge
       */
      reset(initial = false) {
        this.x  = initial ? Math.random() * W : (Math.random() < 0.5 ? 0 : W);
        this.y  = initial ? Math.random() * H : Math.random() * H;
        this.r  = CONFIG.PARTICLE_RADIUS_MIN +
                  Math.random() * (CONFIG.PARTICLE_RADIUS_MAX - CONFIG.PARTICLE_RADIUS_MIN);
        this.vx = (Math.random() - 0.5) * CONFIG.MAX_SPEED * 2;
        this.vy = (Math.random() - 0.5) * CONFIG.MAX_SPEED * 2;
        // Ensure minimum speed
        if (Math.abs(this.vx) < 0.1) this.vx = 0.1 * Math.sign(this.vx || 1);
        if (Math.abs(this.vy) < 0.1) this.vy = 0.1 * Math.sign(this.vy || 1);
      }

      /**
       * Update particle position, apply mouse repulsion, wrap at edges.
       */
      update() {
        // Mouse repulsion
        const dx   = this.x - mouseX;
        const dy   = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.REPEL_RADIUS && dist > 0) {
          const force = (CONFIG.REPEL_RADIUS - dist) / CONFIG.REPEL_RADIUS;
          this.vx += (dx / dist) * force * CONFIG.REPEL_STRENGTH;
          this.vy += (dy / dist) * force * CONFIG.REPEL_STRENGTH;
        }

        // Clamp velocity
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > CONFIG.MAX_SPEED) {
          this.vx = (this.vx / speed) * CONFIG.MAX_SPEED;
          this.vy = (this.vy / speed) * CONFIG.MAX_SPEED;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < -10)      this.x = W + 10;
        if (this.x > W + 10)   this.x = -10;
        if (this.y < -10)      this.y = H + 10;
        if (this.y > H + 10)   this.y = -10;
      }

      /**
       * Draw the particle dot.
       */
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PARTICLE_COLOR.r},${PARTICLE_COLOR.g},${PARTICLE_COLOR.b},${CONFIG.DOT_OPACITY})`;
        ctx.fill();
      }
    }

    /* ── Resize handler ─────────────────────────────────────── */
    function resize() {
      const hero = canvas.parentElement;
      if (!hero) return;
      W = canvas.width  = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
    }

    /* ── Initialize particles ───────────────────────────────── */
    function initParticles() {
      particles = [];
      for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    }

    /* ── Connect nearby particles ────────────────────────────── */
    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.CONNECT_DISTANCE) {
            const alpha = (1 - dist / CONFIG.CONNECT_DISTANCE) * CONFIG.LINE_OPACITY_MAX;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${PARTICLE_COLOR.r},${PARTICLE_COLOR.g},${PARTICLE_COLOR.b},${alpha})`;
            ctx.lineWidth   = 1;
            ctx.stroke();
          }
        }
      }
    }

    /* ── Animation loop ─────────────────────────────────────── */
    function animate() {
      ctx.clearRect(0, 0, W, H);
      connectParticles();
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    }

    /* ── Mouse tracking ─────────────────────────────────────── */
    const heroSection = canvas.parentElement;
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      });
      heroSection.addEventListener('mouseleave', () => {
        mouseX = -9999;
        mouseY = -9999;
      });
    }

    /* ── Window resize ──────────────────────────────────────── */
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        initParticles();
      }, 120);
    }, { passive: true });

    /* ── Start ──────────────────────────────────────────────── */
    resize();
    initParticles();
    animate();

    // Stop animation if canvas is not visible (page hidden)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animate();
      }
    });
  }

  /* ── End of DOMContentLoaded ──────────────────────────────── */
});
