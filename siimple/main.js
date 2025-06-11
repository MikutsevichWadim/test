// Function to handle mobile navigation toggle (if you enable it)
document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navmenu = document.querySelector('#navmenu');

    if (mobileNavToggle && navmenu) {
        mobileNavToggle.addEventListener('click', () => {
            document.body.classList.toggle('mobile-nav-active');
            navmenu.classList.toggle('mobile-nav-active');
            mobileNavToggle.classList.toggle('bi-list');
            mobileNavToggle.classList.toggle('bi-x'); // Toggle to an X icon on open
        });

        // Close mobile nav on click outside
        document.addEventListener('click', (event) => {
            if (!navmenu.contains(event.target) && !mobileNavToggle.contains(event.target) && document.body.classList.contains('mobile-nav-active')) {
                document.body.classList.remove('mobile-nav-active');
                navmenu.classList.remove('mobile-nav-active');
                mobileNavToggle.classList.add('bi-list');
                mobileNavToggle.classList.remove('bi-x');
            }
        });
    }

    // Smooth scroll for nav links (optional, Bootstrap handles some of this)
    document.querySelectorAll('#navmenu a').forEach(navLink => {
        navLink.addEventListener('click', function(e) {
            if (this.hash) {
                e.preventDefault();
                const targetId = this.hash;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - (document.querySelector('#header').offsetHeight || 0),
                        behavior: 'smooth'
                    });
                    // Close mobile nav after clicking a link
                    if (document.body.classList.contains('mobile-nav-active')) {
                        document.body.classList.remove('mobile-nav-active');
                        navmenu.classList.remove('mobile-nav-active');
                        mobileNavToggle.classList.add('bi-list');
                        mobileNavToggle.classList.remove('bi-x');
                    }
                }
            }
        });
    });

    // Header sticky on scroll
    const header = document.querySelector('#header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Scroll top button
    const scrollTop = document.querySelector('#scroll-top');
    if (scrollTop) {
        const toggleScrollTop = () => {
            if (window.scrollY > 100) {
                scrollTop.classList.add('active');
            } else {
                scrollTop.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);
        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Init AOS (Animate On Scroll)
    AOS.init({
        duration: 800, // global duration for animations
        easing: 'ease-in-out', // global easing
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false // whether elements should animate out while scrolling past them
    });

});