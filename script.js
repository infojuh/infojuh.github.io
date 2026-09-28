const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- i18n ---------- */
const I18N = window.I18N;
let lang = 'pt';

// O português vem do HTML: guarda o texto original de cada chave.
$$('[data-i18n]').forEach((el) => { I18N.pt[el.dataset.i18n] ??= el.innerHTML.trim(); });
$$('[data-i18n-label]').forEach((el) => { I18N.pt[el.dataset.i18nLabel] ??= el.getAttribute('aria-label'); });

const tr = (k) => (I18N[lang] && I18N[lang][k] != null ? I18N[lang][k] : I18N.pt[k]);
const ui = (k) => (I18N[lang].ui[k] ?? I18N.pt.ui[k]);

function detectLang() {
  const saved = store.get('lang');
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || 'pt').slice(0, 2);
  return I18N[nav] ? nav : 'pt';
}

function applyLang(next) {
  lang = next;
  document.documentElement.lang = ui('htmlLang');
  document.title = ui('title');
  const meta = $('meta[name="description"]');
  if (meta) meta.content = ui('description');
  $$('[data-i18n]').forEach((el) => { el.innerHTML = tr(el.dataset.i18n); });
  $$('[data-i18n-label]').forEach((el) => el.setAttribute("aria-label", tr(el.dataset.i18nLabel)));
  $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  syncThemeLabel();
  syncMenuLabel();
  restartTyping();
}

function setupLang() {
  $$('.lang button').forEach((b) => b.addEventListener('click', () => {
    store.set('lang', b.dataset.lang);
    applyLang(b.dataset.lang);
  }));
}

/* ---------- Typing ---------- */
const typed = $('#typed');
let typingTimer = null;

function restartTyping() {
  clearTimeout(typingTimer);
  const roles = ui('roles');
  if (reduceMotion) { typed.textContent = roles[0]; return; }
  let r = 0, i = roles[0].length, deleting = false;
  typed.textContent = roles[0];
  const tick = () => {
    const word = roles[r];
    if (!deleting && i === word.length) { deleting = true; typingTimer = setTimeout(tick, 1800); return; }
    if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; typingTimer = setTimeout(tick, 250); return; }
    i += deleting ? -1 : 1;
    typed.textContent = roles[r].slice(0, i);
    typingTimer = setTimeout(tick, deleting ? 28 : 55);
  };
  typingTimer = setTimeout(tick, 1800);
}

/* ---------- Theme ---------- */
const themeBtn = $('#theme-toggle');
const isLight = () => {
  const d = document.documentElement.dataset.theme;
  if (d) return d === 'light';
  return window.matchMedia('(prefers-color-scheme: light)').matches;
};
function syncThemeLabel() { themeBtn.setAttribute('aria-label', isLight() ? ui('themeToDark') : ui('themeToLight')); }
function setupTheme() {
  themeBtn.addEventListener('click', () => {
    const next = isLight() ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    store.set('theme', next);
    syncThemeLabel();
  });
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', syncThemeLabel);
}

/* ---------- Nav ---------- */
const nav = $('#nav');
const menuBtn = $('#menu-toggle');
const links = $('#nav-links');
function syncMenuLabel() { menuBtn.setAttribute('aria-label', links.classList.contains('is-open') ? ui('menuClose') : ui('menuOpen')); }
function setMenu(open) {
  links.classList.toggle('is-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  syncMenuLabel();
}
function setupNav() {
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  menuBtn.addEventListener('click', () => setMenu(!links.classList.contains('is-open')));
  links.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Destaca a seção visível no menu
  const map = new Map($$('a', links).map((a) => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const a = map.get(en.target.id);
      if (a && en.isIntersecting) { map.forEach((x) => x.classList.remove('is-active')); a.classList.add('is-active'); }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
}

/* ---------- Reveal ---------- */
function setupReveal() {
  const els = $$('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-visible')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  els.forEach((el) => io.observe(el));
}

/* ---------- Init ---------- */
$('#year').textContent = new Date().getFullYear();
setupLang();
setupTheme();
setupNav();
setupReveal();
applyLang(detectLang());
