(() => {
  "use strict";

  const body = document.body;
  const root = document.documentElement;
  const main = document.querySelector("main");
  const sectionOrder = [
    "capa",
    "introducao",
    "cli",
    "menu",
    "formulario",
    "gui",
    "touch",
    "vui",
    "nlui",
    "requisitos",
    "implementacao",
    "referencias"
  ];

  sectionOrder
    .map((id) => document.getElementById(id))
    .filter(Boolean)
    .forEach((section) => main?.appendChild(section));

  document.querySelectorAll(".topic-grid").forEach((grid) => {
    const limitation = grid.querySelector(".limitation-case");
    const mainFigure = grid.querySelector(".topic-figure");
    if (limitation && mainFigure) {
      const visualStack = document.createElement("div");
      visualStack.className = "topic-visuals";
      mainFigure.replaceWith(visualStack);
      visualStack.append(mainFigure, limitation);
    }
  });

  const menuButton = document.querySelector("#menu-button");
  const menu = document.querySelector("#menu-principal");
  const accessibilityToolbar = document.querySelector(".accessibility-toolbar");
  const accessibilityToggle = document.querySelector("#accessibility-toggle");
  const accessibilityTools = document.querySelector("#accessibility-tools");
  const fontDecrease = document.querySelector("#font-decrease");
  const fontReset = document.querySelector("#font-reset");
  const fontIncrease = document.querySelector("#font-increase");
  const contrastToggle = document.querySelector("#contrast-toggle");
  const presentationToggle = document.querySelector("#presentation-toggle");
  const presentationControls = document.querySelector("#presentation-controls");
  const previousButton = document.querySelector("#previous-slide");
  const nextButton = document.querySelector("#next-slide");
  const exitButton = document.querySelector("#exit-presentation");
  const slideStatus = document.querySelector("#slide-status");
  const slides = [...document.querySelectorAll(".slide-section")];
  const navLinks = [...document.querySelectorAll(".main-nav a")];

  let fontScale = Number(localStorage.getItem("fontScale")) || 1;
  let toolbarCollapsed = localStorage.getItem("toolbarCollapsed") === "true";
  let currentSlide = 0;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  function applyFontScale() {
    fontScale = clamp(fontScale, 0.9, 1.35);
    root.style.setProperty("--font-scale", fontScale.toFixed(2));
    localStorage.setItem("fontScale", String(fontScale));
  }

  function setMenu(open) {
    menu.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  }

  function setToolbarCollapsed(collapsed) {
    toolbarCollapsed = collapsed;
    accessibilityToolbar?.classList.toggle("collapsed", collapsed);
    accessibilityToggle?.setAttribute("aria-expanded", String(!collapsed));
    if (accessibilityTools) accessibilityTools.hidden = collapsed;
    localStorage.setItem("toolbarCollapsed", String(collapsed));
  }

  function updateSlide() {
    slides.forEach((slide, index) => {
      const active = index === currentSlide;
      slide.classList.toggle("active-slide", active);
      if (body.classList.contains("presentation-mode")) {
        slide.setAttribute("aria-hidden", String(!active));
        if ("inert" in slide) slide.inert = !active;
      } else {
        slide.removeAttribute("aria-hidden");
        if ("inert" in slide) slide.inert = false;
      }
    });

    slideStatus.textContent = `${currentSlide + 1} de ${slides.length}`;
    previousButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;

    const heading = slides[currentSlide].querySelector("h1, h2");
    if (heading && body.classList.contains("presentation-mode")) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  }

  function enterPresentation() {
    body.classList.add("presentation-mode");
    presentationToggle.setAttribute("aria-pressed", "true");
    presentationControls.hidden = false;

    const currentHash = window.location.hash;
    const hashIndex = slides.findIndex((slide) => `#${slide.id}` === currentHash);
    currentSlide = hashIndex >= 0 ? hashIndex : 0;

    updateSlide();

    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }

  function exitPresentation() {
    body.classList.remove("presentation-mode");
    presentationToggle.setAttribute("aria-pressed", "false");
    presentationControls.hidden = true;
    slides.forEach((slide) => {
      slide.classList.remove("active-slide");
      slide.removeAttribute("aria-hidden");
      if ("inert" in slide) slide.inert = false;
    });

    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }

    const target = slides[currentSlide];
    target?.scrollIntoView({ block: "start" });
    presentationToggle.focus();
  }

  menuButton?.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });

  menu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });

  accessibilityToggle?.addEventListener("click", () => {
    setToolbarCollapsed(!toolbarCollapsed);
  });

  fontDecrease?.addEventListener("click", () => {
    fontScale -= 0.1;
    applyFontScale();
  });

  fontReset?.addEventListener("click", () => {
    fontScale = 1;
    applyFontScale();
  });

  fontIncrease?.addEventListener("click", () => {
    fontScale += 0.1;
    applyFontScale();
  });

  contrastToggle?.addEventListener("click", () => {
    const enabled = !body.classList.contains("high-contrast");
    body.classList.toggle("high-contrast", enabled);
    contrastToggle.setAttribute("aria-pressed", String(enabled));
    localStorage.setItem("highContrast", String(enabled));
  });

  presentationToggle?.addEventListener("click", () => {
    if (body.classList.contains("presentation-mode")) {
      exitPresentation();
    } else {
      enterPresentation();
    }
  });

  previousButton?.addEventListener("click", () => {
    currentSlide = clamp(currentSlide - 1, 0, slides.length - 1);
    updateSlide();
  });

  nextButton?.addEventListener("click", () => {
    currentSlide = clamp(currentSlide + 1, 0, slides.length - 1);
    updateSlide();
  });

  exitButton?.addEventListener("click", exitPresentation);

  document.addEventListener("keydown", (event) => {
    if (!body.classList.contains("presentation-mode")) return;

    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      currentSlide = clamp(currentSlide + 1, 0, slides.length - 1);
      updateSlide();
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      currentSlide = clamp(currentSlide - 1, 0, slides.length - 1);
      updateSlide();
    }

    if (event.key === "Home") {
      event.preventDefault();
      currentSlide = 0;
      updateSlide();
    }

    if (event.key === "End") {
      event.preventDefault();
      currentSlide = slides.length - 1;
      updateSlide();
    }

    if (event.key === "Escape") {
      exitPresentation();
    }
  });

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && body.classList.contains("presentation-mode")) {
      exitPresentation();
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        if (active) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

  slides.forEach((slide) => observer.observe(slide));

  applyFontScale();
  setToolbarCollapsed(toolbarCollapsed);

  const savedContrast = localStorage.getItem("highContrast") === "true";
  body.classList.toggle("high-contrast", savedContrast);
  contrastToggle?.setAttribute("aria-pressed", String(savedContrast));
})();
