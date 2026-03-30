const menuBtn = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

// 1. Abrir y cerrar menú al tocar la "hamburguesa"
menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// 2. Controlar todos los enlaces con scroll suave y cerrar el menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Cerrar el menú automáticamente al hacer clic en una opción (en móvil)
        navList.classList.remove('active');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
