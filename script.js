function updateHelsinkiTime() {
    const helsinkiTime = new Date().toLocaleTimeString('en-US', {timeZone: 'Europe/Helsinki', hour12: false});
    const timeElement = document.getElementById('helsinki-time');
    if (timeElement) {
        timeElement.innerText = `${helsinkiTime}`;
    }
}

setInterval(updateHelsinkiTime, 1000);
updateHelsinkiTime();

document.addEventListener("DOMContentLoaded", function () {
    // Add a scroll event listener for navbar background change
    window.addEventListener("scroll", function () {
        const totalHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const scrollPosition = (window.scrollY / (totalHeight - viewportHeight)) * 100;

        if (scrollPosition >= 20) {
            let style = document.getElementById('main_nav');
            style.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            style.style.backdropFilter = 'blur(10px)';
            // Change text color when background changes
            const navLinks = style.querySelectorAll('a');
            navLinks.forEach(link => {
                link.style.color = '#333';
            });
        } else {
            let style = document.getElementById('main_nav');
            style.style.backgroundColor = 'black';
            style.style.backdropFilter = 'none';
            // Revert text color
            const navLinks = style.querySelectorAll('a');
            navLinks.forEach(link => {
                link.style.color = '#f4f4f4';
            });
            document.getElementById('name').style.color = 'white';
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 100; // Account for fixed navbar
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for smooth loading
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.aboutdiv, .digitaltools-boxes, article, .contactme, .formdiv');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

function showPopup() {
    const popup = document.getElementById('popup-message');
    popup.style.display = 'block';
    
    // Add fade-in animation
    popup.style.opacity = '0';
    popup.style.transform = 'translate(-50%, -50%) scale(0.8)';
    popup.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);

    // Hide the popup after 5.5 seconds with fade-out
    setTimeout(function() {
        popup.style.opacity = '0';
        popup.style.transform = 'translate(-50%, -50%) scale(
    popup.style.display = 'none';
  }, 5555);
}