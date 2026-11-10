/* ==========================================================================
   ADUNA — animações e interações
   Depende de GSAP + ScrollTrigger (carregados no index.html).
   Se o GSAP não carregar, o conteúdo continua visível (nada começa oculto).
   ========================================================================== */

(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---------- Navbar: muda ao rolar ---------- */
  const nav = document.querySelector(".navbar-aduna");
  const onScroll = () => nav && nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Fechar menu mobile ao clicar em link ---------- */
  document.querySelectorAll(".navbar-aduna .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const collapse = document.querySelector(".navbar-collapse.show");
      if (collapse && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(collapse).hide();
      }
    });
  });

  /* ---------- Ano no rodapé ---------- */
  const year = document.getElementById("ano");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Brilho que segue o cursor nos cards ---------- */
  if (finePointer) {
    document.querySelectorAll(".service-card").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    });
  }

  /* ---------- Botões magnéticos ---------- */
  if (finePointer && !reduceMotion && window.gsap) {
    document.querySelectorAll(".btn-magnetic").forEach((btn) => {
      const strength = 0.25;
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        gsap.to(btn, { x, y, duration: 0.4, ease: "power3.out" });
      });
      btn.addEventListener("pointerleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
      });
    });
  }

  /* Demais animações exigem GSAP e movimento não reduzido */
  if (!window.gsap || reduceMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Hero: revelação palavra por palavra ---------- */
  const splitTargets = document.querySelectorAll("[data-split]");
  splitTargets.forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words
      .map((w) => `<span class="word-wrap"><span class="word">${w}</span></span>`)
      .join(" ");
  });

  const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
  heroTl
    .from(".hero .eyebrow", { y: 20, opacity: 0, duration: 0.8 })
    .from(".hero .word", { yPercent: 110, duration: 1.1, stagger: 0.08 }, "-=0.4")
    .from(".hero .lead-text", { y: 30, opacity: 0, duration: 1 }, "-=0.7")
    .from(".hero .hero-actions > *", { y: 24, opacity: 0, duration: 0.8, stagger: 0.12 }, "-=0.7")
    .from(".abstract-hero", { scale: 0.85, opacity: 0, duration: 1.8 }, 0)
    .from(".scroll-cue", { opacity: 0, duration: 1 }, "-=0.5");

  /* ---------- Parallax nas formas abstratas (acompanham o scroll) ---------- */
  gsap.to(".abstract-hero", {
    yPercent: 28,
    rotate: 14,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });
  gsap.to(".abstract-hero-b", {
    yPercent: -40,
    rotate: -10,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });
  gsap.utils.toArray(".abstract-banner").forEach((el) => {
    gsap.to(el, {
      yPercent: 30,
      rotate: 18,
      ease: "none",
      scrollTrigger: { trigger: el.closest(".partner-banner"), start: "top bottom", end: "bottom top", scrub: true },
    });
  });

  /* ---------- Títulos de seção: subida suave com máscara ---------- */
  gsap.utils.toArray(".reveal-title").forEach((el) => {
    gsap.from(el, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
    });
  });

  /* ---------- Blocos genéricos com [data-reveal] ---------- */
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  /* ---------- Cards em cascata ---------- */
  ["#servicos .service-card", "#sites .site-card", ".steps .step"].forEach((sel) => {
    const items = gsap.utils.toArray(sel);
    if (!items.length) return;
    gsap.from(items, {
      y: 70,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.14,
      scrollTrigger: { trigger: items[0], start: "top 85%" },
    });
  });

  /* ---------- Chips de valores: entrada escalonada ---------- */
  gsap.from(".value-chip", {
    scale: 0.8,
    opacity: 0,
    duration: 0.7,
    ease: "back.out(1.6)",
    stagger: 0.08,
    scrollTrigger: { trigger: ".value-chip", start: "top 90%" },
  });

  /* ---------- Frase de destaque: revelação por linha ---------- */
  gsap.utils.toArray(".quote-block").forEach((el) => {
    gsap.from(el, {
      x: -40,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });
})();
