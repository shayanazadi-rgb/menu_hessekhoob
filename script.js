// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuSections = document.querySelectorAll('.menu-section');
    
    // Show first section by default
    if (menuSections.length > 0) {
        menuSections[0].classList.add('active');
        const firstLink = document.querySelector(`[data-section="${menuSections[0].id}"]`);
        if (firstLink) {
            firstLink.classList.add('active');
        }
    }
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetSectionId);
            
            if (targetSection) {
                // Remove active class from all sections and links
                menuSections.forEach(section => {
                    section.classList.remove('active');
                });
                
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                
                // Add active class to clicked link and corresponding section
                this.classList.add('active');
                targetSection.classList.add('active');
                
                // Smooth scroll to section
                targetSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                    inline: 'nearest'
                });
            }
        });
    });
});

