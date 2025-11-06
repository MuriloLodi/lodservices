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
    slidesPerView: 1,           // mobile
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 20 },   // tablet
      1200:{ slidesPerView: 4, spaceBetween: 22 }    // desktop (4 cards)
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

  const swiper = new Swiper(container, {
    loop: true,
    effect: 'fade',
    speed: 1000,
    fadeEffect: { crossFade: true },
    autoplay: { delay: 3500, disableOnInteraction: false },
    pagination: { el: '.portfolio-swiper .swiper-pagination', clickable: true },
  });

  // Conta apenas os slides reais (ignora os duplicados do loop)
  const countRealSlides = () =>
    container.querySelectorAll('.swiper-wrapper > .swiper-slide:not(.swiper-slide-duplicate)').length;

  const pad2 = n => String(n).padStart(2, '0');

  // Atualiza o "01 / 06"
  const updateCounts = () => {
    const total = countRealSlides();
    // escreve o total em todos os contadores
    container.querySelectorAll('.pf-count .total').forEach(el => (el.textContent = pad2(total)));
    // escreve o current apenas no slide visível (active)
    const currentEl = container.querySelector('.swiper-slide-active .pf-count .current');
    if (currentEl) currentEl.textContent = pad2(swiper.realIndex + 1);
  };

  // Eventos que podem mudar a contagem/active
  swiper.on('init', updateCounts);
  swiper.on('slideChange', updateCounts);
  swiper.on('slidesLengthChange', updateCounts);

  // Primeira atualização
  updateCounts();
});
