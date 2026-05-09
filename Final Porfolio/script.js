// Ananya Singh
// Introduction to Web Dev
// Final Project 

//  LOADER 
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1500);
});

//  CUSTOM CURSOR 
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.12;
  cursorY += (mouseY - cursorY) * 0.12;
  cursor.style.left = cursorX + 'px';
  cursor.style.top  = cursorY + 'px';
  cursor.style.transform = 'translate(-50%, -50%)';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .proj-card, .skill-card, .contact-item, .gallery-thumb').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

//  SCROLL REVEAL 
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.08}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

//  STICKY NAV 
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 60);
});

//  ACTIVE NAV LINK ON SCROLL 
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('#mainNav .nav-link.site-nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active-link');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

//  SCROLL AND MOBILE 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      // Close Bootstrap mobile nav if open
      const collapseEl = document.getElementById('navbarNav');
      if (collapseEl && collapseEl.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
      }
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

//  PARALLAX HERO BG TEXT 
const heroBgText = document.querySelector('.hero-bg-text');
window.addEventListener('scroll', () => {
  if (heroBgText) {
    heroBgText.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * 0.25}px))`;
  }
});

//  GALLERY THUMBNAIL SYNC 
// Clicking a thumbnail jumps the carousel to that slide
const galleryCarouselEl = document.getElementById('galleryCarousel');
const thumbs = document.querySelectorAll('.gallery-thumb');

if (galleryCarouselEl) {
  const bsCarousel = bootstrap.Carousel.getOrCreateInstance(galleryCarouselEl);

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      bsCarousel.to(parseInt(thumb.getAttribute('data-slide')));
    });
  });

  // Sync active-thumb class when carousel slides automatically
  galleryCarouselEl.addEventListener('slid.bs.carousel', e => {
    thumbs.forEach(t => t.classList.remove('active-thumb'));
    const active = document.querySelector(`.gallery-thumb[data-slide="${e.to}"]`);
    if (active) active.classList.add('active-thumb');
  });
}

//  TILT EFFECT ON PROJECT CARDS 
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width  / 2;
    const y = e.clientY - rect.top  - rect.height / 2;
    card.style.transform = `perspective(900px) rotateX(${(-y / rect.height) * 7}deg) 
    rotateY(${(x / rect.width) * 7}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

//  ACCORDION BORDER FLASH 
// Flash the border pink when an accordion item opens subtle visual feedback
document.querySelectorAll('#expAccordion .accordion-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    item.style.borderColor = 'var(--pink)';
    setTimeout(() => { item.style.borderColor = ''; }, 700);
  });
});

// End