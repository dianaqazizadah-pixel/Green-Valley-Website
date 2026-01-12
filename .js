// Close mobile menu after click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.navbar-collapse');
    if (nav.classList.contains('show')) {
      new bootstrap.Collapse(nav).toggle();
    }
  });
});

/* ===== GSAP Animations ===== */

gsap.from(".custom-nav", { y:-80, opacity:0, duration:1.2 });
gsap.from(".marquee", { opacity:0, delay:0.3 });
gsap.from(".img-main", { x:-80, opacity:0, delay:0.4 });
gsap.from(".img-float", { y:60, opacity:0, delay:0.8 });

gsap.from(".text-area h1 span", {
  y:80, opacity:0, stagger:0.15, delay:0.9
});

gsap.from(".text-area p", { opacity:0, delay:1.6 });
gsap.from(".btn-join", { scale:0.9, opacity:0, delay:1.9 });

gsap.from(".contact-text h1", { y:60, opacity:0 });
gsap.from(".field", { y:40, opacity:0, stagger:0.15 });
gsap.from(".submit-btn", { scale:0.9, opacity:0 });

gsap.from(".footer-left", { x:-80, opacity:0 });
gsap.from(".footer-divider", { scaleY:0 });
gsap.from(".footer-right span", { y:30, opacity:0, stagger:0.15 });
