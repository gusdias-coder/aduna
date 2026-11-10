/* Aduna: navegação e movimento progressivo, sem bibliotecas externas. */
(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");
  const heroArt = document.querySelector(".hero-art");
  const year = document.querySelector("#ano");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  if (year) year.textContent = String(new Date().getFullYear());

  function closeMenu({ restoreFocus = false } = {}) {
    if (!header || !menuButton) return;
    const wasOpen = header.classList.contains("is-open");
    header.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    if (wasOpen && restoreFocus) menuButton.focus();
  }

  if (menuButton && header && menu) {
    menuButton.addEventListener("click", () => {
      const open = !header.classList.contains("is-open");
      if (!open) { closeMenu(); return; }
      header.classList.add("is-open");
      document.body.classList.add("menu-open");
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Fechar menu");
      menu.querySelector("a")?.focus();
    });
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => closeMenu()));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu({ restoreFocus: true });
      if (event.key !== "Tab" || !header.classList.contains("is-open")) return;
      const focusable = [...menu.querySelectorAll("a"), menuButton];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    matchMedia("(min-width: 781px)").addEventListener("change", (event) => {
      if (event.matches) closeMenu();
    });
  }

  let scheduled = false;
  function syncScroll() {
    const y = window.scrollY;
    header?.classList.toggle("is-scrolled", y > 35);
    if (heroArt && !reduceMotion.matches) {
      heroArt.style.setProperty("--drift", `${Math.min(y, 950) * .14}px`);
    }
    scheduled = false;
  }
  window.addEventListener("scroll", () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(syncScroll);
  }, { passive: true });
  syncScroll();

  // Conteúdo permanece visível quando JavaScript ou IntersectionObserver não estão disponíveis.
  if (!reduceMotion.matches && "IntersectionObserver" in window) {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        self.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -45px 0px", threshold: .06 });
    document.documentElement.classList.add("motion-ready");
    elements.forEach((element) => observer.observe(element));
    document.documentElement.classList.add("hero-animated");
  }
})();
