/* ===== CUSTOM CURSOR =====
   Uses transform (GPU layer) instead of left/top to eliminate lag.
   Lerp factor 0.22 keeps smooth feel without noticeable delay.
*/
const ring = document.getElementById('cursor-ring');
const dot  = document.getElementById('cursor-dot');

if (window.matchMedia('(hover: hover)').matches) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    /* Dot snaps instantly — offset by half its size (2.5px) to center */
    dot.style.transform = `translate(${mx - 2.5}px, ${my - 2.5}px)`;
    dot.classList.add('on');
    ring.classList.add('on');
  }, { passive: true });

  /* Ring lerps toward cursor — offset by half ring size (18px) to center */
  (function trackRing() {
    rx += (mx - rx) * 0.22;
    ry += (my - ry) * 0.22;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(trackRing);
  })();

  /* Expand ring over interactive elements */
  document.querySelectorAll('a, button, .project-card, .stat-card, .chip').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('big'));
    el.addEventListener('mouseleave', () => ring.classList.remove('big'));
  });
}

/* ===== MAGNETIC BUTTONS ===== */
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r  = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) * 0.28;
    const dy = (e.clientY - (r.top  + r.height / 2)) * 0.28;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});

/* ===== NAV: blur on scroll ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ===== NAV: scrollspy ===== */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const spyObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(l => l.classList.remove('active'));
    const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, { threshold: 0.35 });
sections.forEach(s => spyObs.observe(s));

/* ===== MOBILE HAMBURGER ===== */
const hamburger    = document.getElementById('hamburger');
const navLinksList = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksList.classList.toggle('open');
});
navLinksList.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksList.classList.remove('open');
  });
});

/* ===== SCROLL REVEAL ===== */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    revObs.unobserve(entry.target);
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ===== HERO TYPING EFFECT ===== */
const tagline  = "Not waiting to graduate — already shipping production apps.";
const typedEl  = document.getElementById('typed-text');
let i = 0;

setTimeout(() => {
  const iv = setInterval(() => {
    typedEl.textContent += tagline[i++];
    if (i >= tagline.length) clearInterval(iv);
  }, 46);
}, 1100);
