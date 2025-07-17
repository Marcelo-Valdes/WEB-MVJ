// Espera a que todo el contenido de la página se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // --- SMOOTH SCROLL PARA LOS ENLACES DE NAVEGACIÓN ---
    // Selecciona todos los enlaces que empiezan con '#'
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previene el comportamiento por defecto del enlace (el salto brusco)
            e.preventDefault();

            // Obtiene el ID de la sección a la que queremos ir (ej: '#services')
            let targetId = this.getAttribute('href');
            let targetSection = document.querySelector(targetId);

            // Hace que la página se desplace suavemente hasta esa sección
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- MANEJO DEL FORMULARIO DE CONTACTO ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Previene que el formulario se envíe de la forma tradicional
            e.preventDefault();

            // --- AVISO IMPORTANTE PARA EL USUARIO ---
            // Este código solo simula el envío. Para que funcione de verdad,
            // se necesita un servicio de backend o una plataforma como Formspree o Netlify Forms.
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Validación simple
            if (name === '' || email === '') {
                alert('Por favor, complete su nombre y correo electrónico.');
                return;
            }

            // Simulación de envío exitoso
            alert('¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.');
            
            // Limpia el formulario después del "envío"
            contactForm.reset();
        });
    }
});