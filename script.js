gsap.registerPlugin(ScrollTrigger);

// --- HERO ANIMATION ---
const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTl.from('.nav', { y: -100, opacity: 0, duration: 1 })
  .from('.hero-text h1', { y: 50, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.5")
  .from('.hero-text p', { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
  .from('.btn-primary', { scale: 0.8, opacity: 0, duration: 0.5 }, "-=0.2")
  .from('.phone-mockup', { y: 100, opacity: 0, rotation: 10, duration: 1 }, "-=0.6")
  .from('.float-card', { scale: 0, opacity: 0, duration: 0.5, stagger: 0.2 }, "-=0.5");

// Parallax effect on hero phone
gsap.to('.phone-mockup', {
  y: -30,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});

// --- FEATURES SECTION ---
gsap.from('.feature-card', {
  scrollTrigger: {
    trigger: '.features-grid',
    start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15
});

// --- ABOUT SECTION ---
gsap.from('.bg-circle', {
  scrollTrigger: {
    trigger: '.about-visual',
    start: 'top 80%',
  },
  scale: 0,
  duration: 1,
  ease: "elastic.out(1, 0.5)"
});

gsap.from('.phone-tilt-left', {
  scrollTrigger: {
    trigger: '.about-visual',
    start: 'top 80%',
  },
  x: -100,
  opacity: 0,
  rotation: -30,
  duration: 1
});

gsap.from('.phone-tilt-right', {
  scrollTrigger: {
    trigger: '.about-visual',
    start: 'top 80%',
  },
  x: 100,
  opacity: 0,
  rotation: 30,
  duration: 1
}, "-=0.8");

gsap.from('.about-mini-card', {
  scrollTrigger: {
    trigger: '.about-cards',
    start: 'top 80%',
  },
  x: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 0.6
});

// --- INSTALL STEPS ---
gsap.from('.step', {
  scrollTrigger: {
    trigger: '.steps-container',
    start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  stagger: 0.3,
  duration: 0.8
});

// --- CTA RED SECTION ---
gsap.from('.cta-text > *', {
  scrollTrigger: {
    trigger: '.cta-red',
    start: 'top 70%',
  },
  y: 30,
  opacity: 0,
  stagger: 0.2,
  duration: 0.6
});

gsap.from('.phone-cta-1', {
  scrollTrigger: {
    trigger: '.cta-red',
    start: 'top 70%',
  },
  y: 100,
  opacity: 0,
  duration: 1
});

gsap.from('.phone-cta-2', {
  scrollTrigger: {
    trigger: '.cta-red',
    start: 'top 70%',
  },
  y: -100,
  opacity: 0,
  duration: 1
}, "-=0.5");

// --- TESTIMONIALS ---
gsap.from('.test-card', {
  scrollTrigger: {
    trigger: '.test-grid',
    start: 'top 80%',
  },
  scale: 0.9,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5
});

// --- FOOTER ---
gsap.from('.footer-text > *', {
  scrollTrigger: {
    trigger: '.footer-top',
    start: 'top 80%',
  },
  y: 30,
  opacity: 0,
  stagger: 0.15
});

gsap.from('.fp-1', {
  scrollTrigger: {
    trigger: '.footer-top',
    start: 'top 80%',
  },
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from('.fp-2', {
  scrollTrigger: {
    trigger: '.footer-top',
    start: 'top 80%',
  },
  y: -100,
  opacity: 0,
  duration: 1
}, "-=0.5");