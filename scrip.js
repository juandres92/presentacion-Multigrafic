document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventeListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});