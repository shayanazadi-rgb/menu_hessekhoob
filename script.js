// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuSections = document.querySelectorAll('.menu-section');
    const menuGrid = document.querySelector('.menu-grid');

    function showSection(sectionId, options) {
        const shouldScroll = !options || options.scroll !== false;

        navLinks.forEach(navLink => navLink.classList.remove('active'));

        const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        if (sectionId === 'all') {
            menuSections.forEach(section => section.classList.add('active'));
            if (menuGrid) {
                menuGrid.classList.add('all-view');
                if (shouldScroll) {
                    menuGrid.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                }
            }
            return;
        }

        if (menuGrid) {
            menuGrid.classList.remove('all-view');
        }

        menuSections.forEach(section => section.classList.remove('active'));

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            if (shouldScroll) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        }
    }

    // Show the full menu by default
    showSection('all', { scroll: false });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showSection(this.getAttribute('data-section'));
        });
    });
    
    // Generate QR Code as fallback if image doesn't load
    if (typeof QRCode !== 'undefined') {
        const qrImage = document.getElementById('qrcode-img');
        const qrFallback = document.getElementById('qrcode');
        
        // If image fails to load, generate QR code dynamically
        if (qrImage) {
            qrImage.onerror = function() {
                qrImage.style.display = 'none';
                qrFallback.style.display = 'block';
                const qrUrl = 'https://shayanazadi-rgb.github.io/menu_hessekhoob/';
                new QRCode(qrFallback, {
                    text: qrUrl,
                    width: 200,
                    height: 200,
                    colorDark: '#6b4423',
                    colorLight: '#fffef9',
                    correctLevel: QRCode.CorrectLevel.H
                });
            };
        }
    }
});
