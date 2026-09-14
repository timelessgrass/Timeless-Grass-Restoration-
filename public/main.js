(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header shadow, mobile drawer and dropdowns (the /fb/ page has no header)
  const hdr = $('[data-hdr]');
  if (hdr) {
    const onScroll = () => hdr.classList.toggle('is-scrolled', scrollY > 8);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const burger = $('.hdr__burger');
    const drawer = $('#drawer');
    const setDrawer = (open) => { burger.setAttribute('aria-expanded', open); drawer.hidden = !open; };
    burger.addEventListener('click', () => setDrawer(drawer.hidden));
    $$('a', drawer).forEach((a) => a.addEventListener('click', () => setDrawer(false)));

    const drops = $$('.nav__drop');
    const setDrop = (d, open) => { d.classList.toggle('is-open', open); $('button', d).setAttribute('aria-expanded', open); };
    drops.forEach((d) => {
      $('button', d).addEventListener('click', () => { const open = !d.classList.contains('is-open'); drops.forEach((o) => setDrop(o, false)); setDrop(d, open); });
      $$('a', d).forEach((a) => a.addEventListener('click', () => { setDrop(d, false); a.blur(); }));
    });
    document.addEventListener('click', (e) => { drops.forEach((d) => { if (!d.contains(e.target)) setDrop(d, false); }); });
  }

  // Scroll reveals: single elements, staggered groups (children get --i), and the closing band's photo
  $$('[data-stagger]').forEach((g) => [...g.children].forEach((c, i) => c.style.setProperty('--i', Math.min(i, 8))));
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  $$('[data-reveal], [data-stagger], .final').forEach((el) => io.observe(el));

  // Count-up numbers (the final value ships in the HTML)
  const counter = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    counter.unobserve(e.target);
    if (reduce) return;
    const el = e.target, end = +el.dataset.count, t0 = performance.now(), dur = 1400;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString('en-US');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  $$('[data-count]').forEach((el) => counter.observe(el));

  // Mobile call bar: appears once the page's own hero buttons have scrolled away, hides while a form is on screen
  const mbar = $('.mbar');
  if (mbar) {
    const heroCta = $('[data-hero-cta]');
    const forms = $$('form[data-netlify]');
    let queued = false;
    const sync = () => {
      queued = false;
      const pastHero = !heroCta || heroCta.getBoundingClientRect().bottom < 0;
      const overForm = forms.some((f) => { const r = f.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; });
      mbar.classList.toggle('is-on', pastHero && !overForm);
    };
    addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(sync); } }, { passive: true });
    addEventListener('resize', sync, { passive: true });
    sync();
  }

  // Reading progress on long articles
  const article = $('[data-progress]');
  const bar = $('.progress');
  if (article && bar && !reduce) {
    let ticking = false;
    const update = () => {
      const r = article.getBoundingClientRect();
      const total = r.height - innerHeight * 0.6;
      bar.style.setProperty('--p', Math.max(0, Math.min(1, -r.top / Math.max(1, total))).toFixed(4));
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  // Photo lightbox for before/after proof
  const dialog = $('[data-lightbox-dialog]');
  if (dialog) {
    const img = $('img', dialog);
    document.addEventListener('click', (e) => {
      const t = e.target.closest('[data-lightbox]');
      if (t) { img.src = t.dataset.lightbox; img.alt = t.dataset.alt || ''; dialog.showModal(); return; }
      if (e.target === dialog) dialog.close();
    });
  }

  // In-page links (table of contents) open the collapsed section they point to
  const openTarget = (id) => { const t = id && document.getElementById(id); const d = t && (t.matches('details') ? t : t.closest('details')); if (d) d.open = true; };
  document.addEventListener('click', (e) => { const a = e.target.closest('a[href^="#"]'); if (a) openTarget(decodeURIComponent(a.getAttribute('href').slice(1))); });
  openTarget(decodeURIComponent(location.hash.slice(1)));

  // Turf quiz
  const quiz = $('[data-quiz]');
  if (quiz) {
    const steps = $$('[data-step]', quiz);
    const qbar = $('.quiz__bar i', quiz);
    const answers = {};
    const PLANS = {
      'Essential Clean': ['From $199', 'Your turf mostly needs upkeep: debris out, power brushing, a rinse and a final groom.'],
      'Premium Restoration': ['From $299', 'Pets, odor or buildup call for a deep clean with pet-odor and antimicrobial treatment, infill redistribution and detailed grooming.'],
      'TIMELESS ELITE': ['$139/mo', "If the smell keeps coming back, one clean won't hold it. Quarterly deep restorations stop odor and buildup from returning."],
      'Pet Turf ELITE': ['$169/mo', 'Heavy daily pet use needs a schedule, not a one-off. Built for dog yards, it keeps urine odor and bacteria in check all year.'],
    };
    const GREEN = 'Putting greens need a deep clean, fresh sand where it is thin, brushing and rolling to roll true again.';
    const show = (step) => {
      steps.forEach((s) => { s.hidden = s.dataset.step !== String(step); });
      qbar.style.width = step === 'r' ? '100%' : `${Math.max(0, step - 1) / 3 * 100}%`;
    };
    $('[data-quiz-start]', quiz).addEventListener('click', () => show(1));
    $('[data-quiz-reset]', quiz).addEventListener('click', () => show(1));
    $$('[data-k]', quiz).forEach((btn) => btn.addEventListener('click', () => {
      answers[btn.dataset.k] = btn.dataset.v;
      const n = +btn.closest('[data-step]').dataset.step;
      if (n < 3) return show(n + 1);
      const { use, smell, state } = answers;
      const score = (use === 'green' ? 1 : +use) + +smell + (state === 'back' ? 2 : 0);
      let plan = score <= 1 ? 'Essential Clean' : score <= 4 ? 'Premium Restoration' : use === '2' ? 'Pet Turf ELITE' : 'TIMELESS ELITE';
      if ((use === 'green' || state === 'worn') && plan === 'Essential Clean') plan = 'Premium Restoration';
      const [price, why] = PLANS[plan];
      $('[data-plan-name]', quiz).textContent = plan;
      $('[data-plan-price]', quiz).textContent = price;
      $('[data-plan-why]', quiz).textContent = use === 'green' && plan === 'Premium Restoration' ? GREEN : why;
      $('[data-plan-cta]', quiz).dataset.plan = plan;
      show('r');
    }));
  }

  // Any "Select plan" button pre-fills the quote form on the same page
  const planSelect = $('#f-plan');
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-plan]');
    if (a && planSelect) [...planSelect.options].forEach((o) => { if (o.value.startsWith(a.dataset.plan)) planSelect.value = o.value; });
  });

  // Before / after slider: drag anywhere, arrow keys on the range; a one-time peek teaches the drag
  $$('[data-ba]').forEach((ba) => {
    const range = $('input', ba);
    const set = (v) => { v = Math.max(0, Math.min(100, v)); ba.style.setProperty('--pos', `${v}%`); range.value = v; };
    const fromPointer = (e) => { const b = ba.getBoundingClientRect(); set((e.clientX - b.left) / b.width * 100); };
    let dragging = false;
    range.addEventListener('input', () => set(+range.value));
    ba.addEventListener('pointerdown', (e) => { ba.classList.remove('is-peek'); dragging = true; ba.setPointerCapture(e.pointerId); fromPointer(e); });
    ba.addEventListener('pointermove', (e) => { if (dragging) fromPointer(e); });
    ['pointerup', 'pointercancel'].forEach((t) => ba.addEventListener(t, () => { dragging = false; }));
    if (!reduce) new IntersectionObserver(([e], obs) => { if (e.isIntersecting) { ba.classList.add('is-peek'); obs.disconnect(); } }, { threshold: 0.6 }).observe(ba);
  });

  // Netlify forms: submit without leaving the page
  $$('form[data-netlify]').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const ok = $('.form__msg--ok', form), err = $('.form__msg--err', form), btn = $('button[type="submit"]', form);
      ok.hidden = err.hidden = true;
      btn.disabled = true;
      try {
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(new FormData(form)).toString(),
        });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        $$('[data-ballpark]', form).forEach((b) => { b.hidden = true; });
        ok.hidden = false;
        ok.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
        if (window.fbq && form.dataset.fbq) window.fbq('track', form.dataset.fbq);
      } catch {
        err.hidden = false;
      } finally {
        btn.disabled = false;
      }
    });
  });

  // Quote page: ?plan= from a "Book" button pre-selects the dropdown
  if (planSelect) {
    const plan = new URLSearchParams(location.search).get('plan');
    if (plan) [...planSelect.options].forEach((o) => { if (o.value.startsWith(plan)) planSelect.value = o.value; });
  }

  // /fb/ page: greet by name from ?name= or ?first_name=
  const nameSlot = $('[data-name]');
  if (nameSlot) {
    const qs = new URLSearchParams(location.search);
    const raw = (qs.get('name') || qs.get('first_name') || '').trim().split(/\s+/)[0].slice(0, 24);
    if (raw) {
      const first = raw.charAt(0).toUpperCase() + raw.slice(1);
      nameSlot.textContent = `, ${first}`;
      const input = $('[data-name-input]');
      if (input) input.value = first;
    }
  }

  // /fb/ page: show a ballpark price as soon as a turf size is picked
  const ballpark = $('[data-ballpark]');
  if (ballpark) {
    $$('input[name="size"]').forEach((r) => r.addEventListener('change', () => {
      ballpark.hidden = false;
      ballpark.innerHTML = r.dataset.e
        ? `Ballpark for your yard: Essential Clean <b>${r.dataset.e}</b> · Premium Restoration <b>${r.dataset.p}</b>`
        : 'No problem. Brian will help you measure. Pricing starts at <b>$199</b> for yards up to 500 sq ft.';
    }));
  }

  // Site search: fetch the build-time index once, filter by words, keyboard-navigable
  const searches = $$('[data-search]');
  if (searches.length) {
    let idx = null;
    const load = async () => { if (!idx) idx = await fetch('/search.json').then((r) => r.json()).catch(() => []); return idx; };
    searches.forEach((box) => {
      const input = $('[data-search-in]', box), res = $('[data-search-res]', box);
      let active = -1;
      const render = (rows) => {
        res.innerHTML = rows.length ? rows.map((r) => `<a href="${r.u}"><small>${r.k}</small><b>${r.t}</b></a>`).join('') : '<p>No matches. Try "smell", "algae", "green" or a town.</p>';
        res.hidden = false; active = -1;
      };
      input.addEventListener('focus', load);
      input.addEventListener('input', async () => {
        const q = input.value.trim().toLowerCase();
        if (q.length < 2) { res.hidden = true; return; }
        const rows = await load();
        const terms = q.split(/\s+/);
        const scored = rows.map((r) => { const hay = (r.t + ' ' + r.s + ' ' + r.k).toLowerCase(); let sc = 0; for (const t of terms) { if (!hay.includes(t)) return null; sc += r.t.toLowerCase().includes(t) ? 2 : 1; if (r.t.toLowerCase().startsWith(t)) sc += 2; } return { r, sc }; }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 8).map((x) => x.r);
        render(scored);
      });
      input.addEventListener('keydown', (e) => {
        const links = $$('a', res); if (res.hidden || !links.length) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); active = (active + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length; links.forEach((l, i) => l.classList.toggle('is-active', i === active)); }
        if (e.key === 'Enter' && active >= 0) { e.preventDefault(); location.href = links[active].href; }
        if (e.key === 'Escape') res.hidden = true;
      });
      document.addEventListener('click', (e) => { if (!box.contains(e.target)) res.hidden = true; });
    });
  }

  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
