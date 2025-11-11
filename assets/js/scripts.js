document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.glass');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.80
  });

  cards.forEach(card => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", () => {
  if (typeof ScrollReveal === "undefined") return;

  const sr = ScrollReveal({
    distance: "40px",
    duration: 1000,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    opacity: 0,
    reset: false
  });

  sr.reveal(".hero h1", { origin: "bottom", delay: 200 });
  sr.reveal(".hero p", { origin: "bottom", delay: 300 });
  sr.reveal(".hero .button", { origin: "bottom", delay: 400 });

  sr.reveal(".title", {
    origin: "bottom",
    interval: 120,
    delay: 200,
    scale: 0.95
  });

  sr.reveal(".servicos-left", { origin: "left", delay: 100 });
  sr.reveal(".servicos-right", { origin: "right", delay: 200 });
  sr.reveal(".item-servico", { origin: "bottom", interval: 120, delay: 200 });

  sr.reveal(".pq-lod .titulo-pq", { origin: "top", delay: 100 });
  sr.reveal(".pq-lod .subtitulo-pq", { origin: "top", delay: 200 });
  sr.reveal(".pq-lod .outer", { origin: "bottom", interval: 150, delay: 250 });


  sr.reveal(".contato-projeto .conteudo h1", { origin: "top", delay: 150 });
  sr.reveal(".contato-projeto .button", { origin: "bottom", delay: 300 });

});

const pills = document.querySelectorAll('.pill');
const dynamicText = document.getElementById('dynamicText');

pills.forEach((pill) => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    const newText = pill.getAttribute('data-text');
    dynamicText.classList.add('fade-out');

    setTimeout(() => {
      dynamicText.textContent = newText;
      dynamicText.classList.remove('fade-out');
      dynamicText.classList.add('fade-in');
      setTimeout(() => dynamicText.classList.remove('fade-in'), 250);
    }, 200);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.servicos-swiper', {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 2800,
      disableOnInteraction: false
    },
    spaceBetween: 18,
    slidesPerView: 1,          
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 20 },   
      1200: { slidesPerView: 4, spaceBetween: 22 }    
    },
    pagination: {
      el: '.servicos-swiper .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.servicos-swiper .swiper-button-next',
      prevEl: '.servicos-swiper .swiper-button-prev'
    },
    grabCursor: true
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.portfolio-swiper');
  if (!container) return; 

  const paginationEl = container.querySelector('.swiper-pagination');

  const wrapper = container.querySelector('.swiper-wrapper');
  const hasSlides = wrapper && wrapper.querySelector('.swiper-slide');
  if (!hasSlides) return;

  const swiper = new Swiper(container, {
    loop: true,
    effect: 'fade',
    speed: 1000,
    fadeEffect: { crossFade: true },
    autoplay: { delay: 3500, disableOnInteraction: false },
    pagination: { el: paginationEl, clickable: true },
  });

  const pad2 = n => String(n).padStart(2, '0');

  const countRealSlides = () => {
  
    return container.querySelectorAll(
      '.swiper-wrapper > .swiper-slide:not(.swiper-slide-duplicate)'
    ).length;
  };

  const updateCounts = () => {
    const total = countRealSlides();

   
    container.querySelectorAll('.pf-count .total')
      .forEach(el => (el.textContent = pad2(total)));

    
    const currentEl = container.querySelector('.swiper-slide-active .pf-count .current');
    if (currentEl) currentEl.textContent = pad2(swiper.realIndex + 1);
  };

  swiper.on('init', updateCounts);
  swiper.on('slideChange', updateCounts);
  swiper.on('slidesLengthChange', updateCounts);

  updateCounts();
});



(function () {
  const ocEl = document.getElementById('mobileMenu');
  if (!ocEl) return;

  const oc = bootstrap.Offcanvas.getOrCreateInstance(ocEl);

  ocEl.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const hash = link.getAttribute('href');
      const target = document.querySelector(hash);

      const onHidden = () => {
        ocEl.removeEventListener('hidden.bs.offcanvas', onHidden);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });

          history.replaceState(null, '', hash);
        }
      };
      ocEl.addEventListener('hidden.bs.offcanvas', onHidden);
      oc.hide();
    });
  });
})();

const links = document.querySelectorAll('nav a[href^="#"]');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    const id = '#' + e.target.id;
    const link = document.querySelector(`nav a[href="${id}"]`);
    if (link) {
      if (e.isIntersecting) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
  });
}, { threshold: 0.6 });
sections.forEach(s => s && io.observe(s));
