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
