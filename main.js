// -----------------------------
// Copy Email
// -----------------------------
function copyEmail() {
  navigator.clipboard.writeText("example@mail.com").then(() => {
    alert("คัดลอก Email แล้ว!");
  });
}

// -----------------------------
// Fade In & Page Loaded
// -----------------------------
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
  typeHeaderEffect();
  createParticles();
});

// -----------------------------
// Typing Effect (Header)
// -----------------------------
function typeHeaderEffect() {
  const headerElement = document.querySelector(".header h1");
  if (!headerElement) return;

  const headerText = "สวัสดีครับ 👋 ยินดีต้อนรับ!";
  let i = 0;
  headerElement.textContent = "";

  function typeEffect() {
    if (i < headerText.length) {
      headerElement.textContent += headerText.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();
}

// -----------------------------
// Scroll Reveal
// -----------------------------
function scrollReveal() {
  const revealElements = document.querySelectorAll(".slide-up, .fade-in, .reveal");
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("show", "active");
    }
  });
}
window.addEventListener("scroll", scrollReveal);
document.addEventListener("DOMContentLoaded", scrollReveal);

// -----------------------------
// Particle Background
// -----------------------------
function createParticles() {
  const bg = document.querySelector(".bg");
  if (!bg) return;

  for (let i = 0; i < 25; i++) {
    const span = document.createElement("span");
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
const transitionLayer = document.createElement("div");
transitionLayer.className = "transition-layer";
document.body.appendChild(transitionLayer);

document.querySelectorAll("a[href]").forEach(link => {
  link.addEventListener("click", function(e) {
    if (link.hostname === window.location.hostname && !link.href.startsWith("#") && !link.href.startsWith("mailto:")) {
      e.preventDefault();
      transitionLayer.classList.add("active");
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    }
  });
});

// -----------------------------
// Hover Effect (ข้อความ/ลิงก์)
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h1, h2, p, a").forEach(el => {
    el.addEventListener("mouseover", () => {
      el.style.transition = "color 0.3s, text-shadow 0.3s";
      el.style.color = "#c8102e";
      el.style.textShadow = "0 0 10px rgba(200,16,46,0.7)";
    });
    el.addEventListener("mouseout", () => {
      el.style.color = "";
      el.style.textShadow = "";
    });
  });

  // -----------------------------
  // Modal system
  // -----------------------------
  const cards = document.querySelectorAll(".card");
  const closes = document.querySelectorAll(".close");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const modalId = card.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "flex";
    });
  });

  closes.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
});
