/* ═══════════════════════════════════════════════════════════════════════
   Camp21-Digital-Hub-2026 — main.js
   Nav | Countdown | Floating Help | Readiness Checklist
   ═══════════════════════════════════════════════════════════════════════ */

'use strict';

// ── 1. Mobile nav ─────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!open));
    navLinks.classList.toggle('is-open');
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    }
  });
}

// ── 2. Active nav link ────────────────────────────────────────────────
(function markActiveLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav__links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === path ||
      (path === '/' && a.getAttribute('href') === '/'));
  });
})();

// ── 3. Registration countdown ─────────────────────────────────────────
function startCountdown(targetDate, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const deadline = new Date(targetDate).getTime();

  function tick() {
    const now  = Date.now();
    const diff = deadline - now;

    if (diff <= 0) {
      container.textContent = 'Registration closed';
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    container.innerHTML =
      `<span class="countdown__unit"><strong>${d}</strong><small>days</small></span>` +
      `<span class="countdown__sep">:</span>` +
      `<span class="countdown__unit"><strong>${String(h).padStart(2,'0')}</strong><small>hrs</small></span>` +
      `<span class="countdown__sep">:</span>` +
      `<span class="countdown__unit"><strong>${String(m).padStart(2,'0')}</strong><small>min</small></span>` +
      `<span class="countdown__sep">:</span>` +
      `<span class="countdown__unit"><strong>${String(s).padStart(2,'0')}</strong><small>sec</small></span>`;
  }

  tick();
  setInterval(tick, 1000);
}

// Registration deadline: 19 June 2026, 23:59 MYT (UTC+8)
startCountdown('2026-06-19T23:59:00+08:00', '#countdown-registration');
// Event countdown: 13 July 2026 07:00 MYT
startCountdown('2026-07-13T07:00:00+08:00', '#countdown-event');

// ── 4. Floating Help Button ───────────────────────────────────────────
const helpToggle = document.getElementById('help-toggle');
const helpPanel  = document.getElementById('help-panel');
const floatingHelp = document.getElementById('floating-help');

// Show floating help only during event dates (13–16 July 2026)
// OR always on participant-hub page
function shouldShowHelp() {
  const now   = new Date();
  const start = new Date('2026-07-13T00:00:00+08:00');
  const end   = new Date('2026-07-16T23:59:59+08:00');
  const onHub = window.location.pathname.includes('participant-hub');
  return onHub || (now >= start && now <= end);
}

if (floatingHelp) {
  if (shouldShowHelp()) {
    floatingHelp.classList.add('is-active');
  }
  if (helpToggle && helpPanel) {
    helpToggle.addEventListener('click', () => {
      const open = helpPanel.classList.toggle('is-open');
      helpToggle.setAttribute('aria-expanded', String(open));
      helpPanel.setAttribute('aria-hidden', String(!open));
    });
    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && helpPanel.classList.contains('is-open')) {
        helpPanel.classList.remove('is-open');
        helpToggle.setAttribute('aria-expanded', 'false');
        helpPanel.setAttribute('aria-hidden', 'true');
        helpToggle.focus();
      }
    });
  }
}

// ── 5. Readiness checklist (Participant Hub) ──────────────────────────
const CHECKLIST_KEY = 'camp21_readiness_v1';

function initChecklist() {
  const items = document.querySelectorAll('.readiness-item input[type="checkbox"]');
  if (!items.length) return;

  // Load saved state
  const saved = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || '{}');
  items.forEach(cb => {
    if (saved[cb.id]) cb.checked = true;
  });
  updateProgress(items);

  items.forEach(cb => {
    cb.addEventListener('change', () => {
      const state = {};
      items.forEach(i => { state[i.id] = i.checked; });
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state));
      updateProgress(items);
    });
  });
}

function updateProgress(items) {
  const total   = items.length;
  const checked = Array.from(items).filter(i => i.checked).length;
  const pct     = Math.round((checked / total) * 100);

  const bar  = document.querySelector('.readiness-progress__bar');
  const text = document.querySelector('.readiness-progress__text');
  const cta  = document.querySelector('.readiness-cta');

  if (bar)  bar.style.width = pct + '%';
  if (text) text.textContent = `${checked} of ${total} complete`;
  if (cta) {
    cta.style.display = checked < total ? 'block' : 'none';
  }
  const done = document.querySelector('.readiness-done');
  if (done) done.style.display = checked === total ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', initChecklist);

// ── 6. Smooth scroll for anchor links ────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Move focus for accessibility
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});

// ── 7. Day selector tabs (Programme page) ────────────────────────────
function initDayTabs() {
  const tabs    = document.querySelectorAll('[role="tab"]');
  const panels  = document.querySelectorAll('[role="tabpanel"]');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.classList.remove('is-active');
      });
      panels.forEach(p => p.hidden = true);

      tab.setAttribute('aria-selected', 'true');
      tab.classList.add('is-active');
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.hidden = false;
    });

    // Arrow key navigation
    tab.addEventListener('keydown', e => {
      const list  = Array.from(tabs);
      const index = list.indexOf(tab);
      if (e.key === 'ArrowRight') {
        list[(index + 1) % list.length].focus();
      } else if (e.key === 'ArrowLeft') {
        list[(index - 1 + list.length) % list.length].focus();
      }
    });
  });
}
document.addEventListener('DOMContentLoaded', initDayTabs);

console.log('Camp21 Digital Hub — main.js loaded ✓');
