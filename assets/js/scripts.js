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
        threshold: 0.90
    });

    cards.forEach(card => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", function () {
  const imgSobre = document.querySelector('.img-sobre img');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.7 });

  observer.observe(imgSobre);
});
