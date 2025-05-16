        // Initialisation des animations
        AOS.init({
            duration: 800,
            once: true
        });

        // Effet de navbar au scroll
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'shadow-md', 'text-gray-800');
                navbar.classList.remove('bg-transparent', 'text-white');
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.add('bg-transparent', 'text-white');
                navbar.classList.remove('bg-white', 'shadow-md', 'text-gray-800');
                navbar.classList.remove('navbar-scrolled');

            }
        });
    
// Menu mobile
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});


        // Compteurs animés
        function animateCounters() {
            const counters = document.querySelectorAll('.counter');
            const speed = 200;

            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animateCounters, 1);
                } else {
                    counter.innerText = target;
                }
            });
        }

        // Déclenchement des compteurs quand la section est visible
        // (À implémenter avec Intersection Observer pour une meilleure performance)
        window.addEventListener('scroll', function() {
            // Logique simplifiée pour l'exemple
            if (window.scrollY > document.getElementById('marche').offsetTop - 500) {
                animateCounters();
            }
        });
