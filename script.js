
document.addEventListener("DOMContentLoaded", () => {

  // ---------- LOADER ----------
  const loader = document.getElementById("loader");
  const progress = document.getElementById("loaderProgress");
  const percent = document.getElementById("loaderPercent");

  let value = 0;

  const loading = setInterval(() => {
    value += Math.floor(Math.random() * 8) + 3;

    if (value >= 100) {
      value = 100;
      clearInterval(loading);

      setTimeout(() => {
        loader.classList.add("hide");
      }, 450);
    }

    progress.style.width = `${value}%`;
    percent.textContent = `${String(value).padStart(2, "0")}%`;
  }, 80);


  // ---------- NAVBAR ----------
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });


  // ---------- MOBILE MENU ----------
  const menuToggle = document.getElementById("menuToggle");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("menu-open");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("menu-open");
    });
  });


  // ---------- SCROLL REVEAL ----------
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => observer.observe(element));


  // ---------- HERO IMAGE MOUSE PARALLAX ----------
  const cyborg = document.getElementById("cyborgImage");

  document.addEventListener("mousemove", (event) => {
    if (window.innerWidth < 900 || !cyborg) return;

    const x = (window.innerWidth / 2 - event.clientX) / 70;
    const y = (window.innerHeight / 2 - event.clientY) / 70;

    cyborg.style.transform =
      `translate(${x}px, ${y}px) scale(1.02)`;
  });


  // ---------- BUTTON "SYSTEM ACCESS" EFFECT ----------
  document.querySelectorAll(".btn-primary").forEach(button => {
    button.addEventListener("click", () => {
      const original = button.innerHTML;

      button.innerHTML = "ACCESSING...";

      setTimeout(() => {
        button.innerHTML = original;
      }, 900);
    });
  });


  // ---------- YEAR ----------
  document.getElementById("year").textContent =
    new Date().getFullYear();

});
