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

    sr.reveal("header .logo", { origin: "left" });
    sr.reveal("header nav", { origin: "top", delay: 100 });
    sr.reveal(".nav-right .social-pill", { origin: "right", interval: 120 });


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


    sr.reveal("footer .footer-brand-block", { origin: "left", delay: 100 });
    sr.reveal("footer .footer-nav", { origin: "right", delay: 200 });
    sr.reveal("footer .footer-bottom", { origin: "bottom", delay: 300 });
});
