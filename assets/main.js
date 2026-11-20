// Theme toggle. Dark is the default; a saved "light" choice is restored in <head>.
document.querySelectorAll("[data-theme-toggle]").forEach((b) =>
  b.addEventListener("click", () => {
    const light = document.documentElement.classList.toggle("light");
    try { localStorage.setItem("theme", light ? "light" : "dark"); } catch (e) {}
  })
);

// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
if (menuBtn && menu) {
  const setOpen = (open) => {
    menu.classList.toggle("hidden", !open);
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn.addEventListener("click", () => setOpen(menu.classList.contains("hidden")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reduceMotion) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

// Hero workflow: run the steps in order, hold, then start again.
const workflow = document.querySelector("[data-workflow]");
if (workflow) {
  const steps = [...workflow.querySelectorAll(".wf-node, .wf-link")];
  const status = workflow.querySelector("[data-wf-status]");
  const setStatus = (text) => { if (status) status.textContent = text; };

  if (reduceMotion) {
    steps.forEach((s) => s.classList.add("is-active"));
    setStatus("done");
  } else {
    let i = 0;
    const tick = () => {
      if (i === 0) setStatus("running");
      if (i < steps.length) {
        steps[i].classList.add("is-active");
        const wasLink = steps[i].classList.contains("wf-link");
        i += 1;
        setTimeout(tick, wasLink ? 600 : 900);
      } else {
        setStatus("done");
        setTimeout(() => {
          steps.forEach((s) => s.classList.remove("is-active"));
          i = 0;
          setTimeout(tick, 700);
        }, 2600);
      }
    };
    setTimeout(tick, 600);
  }
}

// Work videos: mouse users get a silent preview on hover and full controls
// (with sound) after a click. Touch users keep the native controls.
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll("[data-hover-play]").forEach((card) => {
    const video = card.querySelector("video");
    if (!video) return;
    video.controls = false;
    video.style.cursor = "pointer";
    card.addEventListener("mouseenter", () => {
      if (!video.controls) { video.muted = true; video.play().catch(() => {}); }
    });
    card.addEventListener("mouseleave", () => {
      if (!video.controls) video.pause();
    });
    video.tabIndex = 0;
    const openPlayer = () => {
      if (video.controls) return;
      video.controls = true;
      video.muted = false;
      video.currentTime = 0;
      video.play().catch(() => {});
    };
    video.addEventListener("click", openPlayer);
    video.addEventListener("keydown", (e) => {
      if (!video.controls && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openPlayer(); }
    });
  });
}
