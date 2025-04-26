// Add JavaScript for theme toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
    
    // Update icon with smooth transition
    if (body.classList.contains('dark-mode')) {
        themeIcon.textContent = '☀️';
        themeIcon.style.transform = 'rotate(180deg)';
    } else {
        themeIcon.textContent = '🌙';
        themeIcon.style.transform = 'rotate(0deg)';
    }
    
    // Save theme preference
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
        const themeIcon = document.querySelector('.theme-icon');
        themeIcon.textContent = '☀️';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// Animation for skill items
const skillItems = document.querySelectorAll('.skill-item');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});

// Project card hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const subject = contactForm.querySelector('input[placeholder="Subject"]').value.trim();
            const message = contactForm.querySelector('textarea').value.trim();
            
            // Validate form
            if (!validateForm(name, email, subject, message)) {
                return;
            }
            
            // Create form data object
            const formData = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Form validation function
    function validateForm(name, email, subject, message) {
        let isValid = true;
        
        // Name validation
        if (name === '') {
            showError('Please enter your name');
            isValid = false;
        }
        
        // Email validation
        if (email === '') {
            showError('Please enter your email');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            isValid = false;
        }
        
        // Subject validation
        if (subject === '') {
            showError('Please enter a subject');
            isValid = false;
        }
        
        // Message validation
        if (message === '') {
            showError('Please enter your message');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show error message
    function showError(message) {
        // Remove any existing error messages
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Create and show new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        const formContainer = document.querySelector('.contact-form-container');
        formContainer.insertBefore(errorDiv, formContainer.firstChild);
        
        // Remove error message after 3 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }
    
    // Show success message
    function showSuccessMessage() {
        // Remove any existing messages
        const existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create and show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = 'Message sent successfully! Thank you for contacting me.';
        
        const formContainer = document.querySelector('.contact-form-container');
        formContainer.insertBefore(successDiv, formContainer.firstChild);
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
});

// Skills Card Flip Animation
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        // Add click event for all devices
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('flipped');
        });
        
        // Add skill items animation
        const skillItems = card.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
        });
        
        // Show skill items when card is flipped
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillItems.forEach(item => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    });
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(card);
    });
});

// Enhanced Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;

    // Function to toggle menu
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    // Toggle menu on button click
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', () => {
        toggleMenu();
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });
});

// Add current year to footer
document.querySelector('.footer-text').innerHTML = `&copy; ${new Date().getFullYear()} <span>Mariely</span>. All Rights Reserved.`;
