document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Make the first section visible immediately if it's already in viewport
    setTimeout(() => {
        const heroSection = document.querySelector('.hero.fade-in');
        if (heroSection) {
            heroSection.classList.add('visible');
        }
    }, 100);
});
