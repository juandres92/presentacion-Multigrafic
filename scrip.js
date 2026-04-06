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
const track = document.getElementById('logo-track');
const cantidadLogos = 22; 

for (let i = 1; i <= cantidadLogos; i++) {
    const img = document.createElement('img');
    img.src = `logo/${i}.png`;
    img.alt = `Cliente ${i}`;

    img.onload = function() {
        // Calculamos la relación de aspecto
        const ratio = this.naturalWidth / this.naturalHeight;
        
        // Si el ratio está entre 0.8 y 1.2, lo consideramos cuadrado/circular
        if (ratio > 0.8 && ratio < 1.2) {
            this.classList.add('logo-cuadrado');
        } else {
            this.classList.add('logo-rectangular');
        }
        
        // Solo duplicamos cuando el último logo haya cargado para evitar errores de estilo
        if (i === cantidadLogos) {
            setTimeout(() => {
                const clones = track.innerHTML;
                track.innerHTML += clones;
            }, 100); 
        }
    };

    track.appendChild(img);
}
