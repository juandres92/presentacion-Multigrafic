const menuBtn = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

// 1. Abrir y cerrar menú al tocar la "hamburguesa"
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic se propague al documento
    navList.classList.toggle('active');
});

// 2. CERRAR AL TOCAR FUERA (Nueva funcionalidad)
document.addEventListener('click', (e) => {
    // Si el menú tiene la clase 'active' Y el clic NO fue dentro del menú ni en el botón
    if (navList.classList.contains('active') && 
        !navList.contains(e.target) && 
        !menuBtn.contains(e.target)) {
        
        navList.classList.remove('active');
    }
});

// 3. Controlar todos los enlaces con scroll suave y cerrar el menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Cerrar el menú automáticamente al hacer clic en una opción
        navList.classList.remove('active');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
