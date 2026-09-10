(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header shadow once the page scrolls
  const hdr = $('[data-hdr]');
  const onScroll = () => hdr.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile drawer
  const burger = $('.hdr__burger');
  const drawer = $('#drawer');
  const setDrawer = (open) => { burger.setAttribute('aria-expanded', open); drawer.hidden = !open; };
  burger.addEventListener('click', () => setDrawer(drawer.hidden));
  $$('a', drawer).forEach((a) => a.addEventListener('click', () => setDrawer(false)));

  // Services dropdown: hover/focus handled in CSS, click for touch
  const drop = $('.nav__drop');
  const dropBtn = $('button', drop);
  const setDrop = (open) => { drop.classList.toggle('is-open', open); dropBtn.setAttribute('aria-expanded', open); };
  dropBtn.addEventListener('click', () => setDrop(!drop.classList.contains('is-open')));
  document.addEventListener('click', (e) => { if (!drop.contains(e.target)) setDrop(false); });
  $$('a', drop).forEach((a) => a.addEventListener('click', () => { setDrop(false); a.blur(); }));

  // Reveal sections as they enter the viewport
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  $$('[data-reveal]').forEach((el) => io.observe(el));

  // Count-up stats (final numbers ship in the HTML)
  const counter = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    counter.unobserve(e.target);
    if (reduce) return;
    const el = e.target, end = +el.dataset.count, t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1400);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  $$('[data-count]').forEach((el) => counter.observe(el));

  // Turf quiz
  const quiz = $('[data-quiz]');
  if (quiz) {
    const steps = $$('[data-step]', quiz);
    const bar = $('.quiz__bar i', quiz);
    const answers = {};
    const PLANS = {
      'Essential Clean': ['From $199', 'Your turf mostly needs upkeep: debris out, power brushing, a rinse and a final groom.'],
      'Premium Restoration': ['From $299', 'Pets, odor or buildup call for a deep clean with pet-odor and antimicrobial treatment, infill redistribution and detailed grooming.'],
      'TIMELESS ELITE': ['$139/mo', "If the smell keeps coming back, one clean won't hold it. Quarterly deep restorations stop odor and buildup from returning."],
      'Pet Turf ELITE': ['$169/mo', 'Heavy daily pet use needs a schedule, not a one-off. Our flagship plan for dog yards keeps urine odor and bacteria in check all year.'],
    };
    const GREEN = 'Putting greens need a deep clean, infill redistribution and detailed grooming to roll true again.';
    const show = (step) => {
      steps.forEach((s) => { s.hidden = s.dataset.step !== String(step); });
      bar.style.width = step === 'r' ? '100%' : `${Math.max(0, step - 1) / 3 * 100}%`;
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

  // Any "Select plan" button pre-fills the quote form
  const planSelect = $('#f-plan');
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-plan]');
    if (a && planSelect) planSelect.value = a.dataset.plan;
  });

  // Before / after slider: drag anywhere on the photo, or use arrow keys on the range
  const ba = $('[data-ba]');
  if (ba) {
    const range = $('input', ba);
    const set = (v) => {
      v = Math.max(0, Math.min(100, v));
      ba.style.setProperty('--pos', `${v}%`);
      range.value = v;
    };
    const fromPointer = (e) => { const b = ba.getBoundingClientRect(); set((e.clientX - b.left) / b.width * 100); };
    let dragging = false;
    range.addEventListener('input', () => set(+range.value));
    ba.addEventListener('pointerdown', (e) => { dragging = true; ba.setPointerCapture(e.pointerId); fromPointer(e); });
    ba.addEventListener('pointermove', (e) => { if (dragging) fromPointer(e); });
    ['pointerup', 'pointercancel'].forEach((t) => ba.addEventListener(t, () => { dragging = false; }));
  }

  // Quote form: submit to Netlify Forms without leaving the page
  const form = $('form[name="quote"]');
  if (form) {
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
        ok.hidden = false;
      } catch {
        err.hidden = false;
      } finally {
        btn.disabled = false;
      }
    });
  }

  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
