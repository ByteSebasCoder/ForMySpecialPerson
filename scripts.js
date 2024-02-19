document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (passwordInput.value === 'tequiero') {
            // Oculta el cuadro de inicio de sesión
            document.querySelector('.slide-in').style.display = 'none';

            // Inicializar carrusel y mostrarlo
            const elems = document.querySelectorAll('.carousel');
            const instances = M.Carousel.init(elems, {
                duration: 200,
                fullWidth: true,
                indicators: false,
                noWrap: false
            });

            document.getElementById('imageCarousel').style.display = 'block';

           
        } else {
            M.toast({html: 'Contraseña incorrecta'});
        }
    });
});
