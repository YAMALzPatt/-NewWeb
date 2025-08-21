function copyEmail() {
  navigator.clipboard.writeText("example@mail.com").then(() => {
    alert("คัดลอก Email แล้ว!");
  });
}
// -----------------------------
// Fade In when entering page
// -----------------------------
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

// -----------------------------
// Typing Effect (ข้อความ header)
// -----------------------------
const headerElement = document.querySelector(".header h1");
if (headerElement) {
  const headerText = "สวัสดีครับ 👋 ยินดีต้อนรับ!";
  let i = 0;

  function typeEffect() {
    if (i < headerText.length) {
      headerElement.textContent += headerText.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  }

  headerElement.textContent = "";
  window.addEventListener("load", typeEffect);
}

// -----------------------------
// Scroll Reveal
// -----------------------------
const revealElements = document.querySelectorAll(".slide-up, .fade-in");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
});

// -----------------------------
// Particle Background
// -----------------------------
const bg = document.querySelector(".bg");
if (bg) {
  for (let i = 0; i < 25; i++) {
    let span = document.createElement("span");
    span.className = "particle";
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";
    span.style.animationDuration = 4 + Math.random() * 6 + "s";
    span.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
    bg.appendChild(span);
  }
}

// -----------------------------
// Click Ripple Effect
// -----------------------------
document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("click", function(e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const rect = el.getBoundingClientRect();
    ripple.style.left = e.clientX - rect.left + "px";
    ripple.style.top = e.clientY - rect.top + "px";
    el.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// -----------------------------
// Page Transition Effect
// -----------------------------
const links = document.querySelectorAll("a[href]");
const transitionLayer = document.createElement("div");
transitionLayer.className = "transition-layer";
document.body.appendChild(transitionLayer);

links.forEach(link => {
  link.addEventListener("click", function(e) {
    if (link.hostname === window.location.hostname) {
      e.preventDefault();
      transitionLayer.classList.add("active");
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    }
  });
});
// Animate on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run on load
});

// Smooth Page Fade Transition
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");

  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href && !href.startsWith("#") && !href.startsWith("mailto:")) {
        e.preventDefault();
        document.body.classList.remove("page-loaded");
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
});

