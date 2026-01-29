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

// EmailJS Configuration and Form Handling
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    // IMPORTANT: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('wW6DI4cjJ7VDymCOL');
    
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const loadingMessage = document.getElementById('loading-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const templateParams = {
                from_name: formData.get('from_name'),
                from_email: formData.get('from_email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                to_email: 'tolentinomariely09@gmail.com',
                reply_to: formData.get('from_email')
            };
            
            // Validate form
            if (!validateForm(templateParams)) {
                return;
            }
            
            // Show loading state
            showLoadingState();
            
            // Send email using EmailJS
            // IMPORTANT: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
            emailjs.send('service_ozdj74k', 'template_3nvtrjo', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully:', response);
                    showSuccessMessage();
                    contactForm.reset();
                    clearErrorStates();
                })
                .catch(function(error) {
                    console.error('Email sending failed:', error);
                    showErrorMessage(error);
                })
                .finally(function() {
                    hideLoadingState();
                });
        });
    }
    
    // Form validation function
    function validateForm(data) {
        clearErrorStates();
        let isValid = true;
        
        // Name validation
        if (!data.from_name || data.from_name.trim() === '') {
            showFieldError('name', 'Please enter your name');
            isValid = false;
        } else if (data.from_name.trim().length < 2) {
            showFieldError('name', 'Name must be at least 2 characters long');
            isValid = false;
        }
        
        // Email validation
        if (!data.from_email || data.from_email.trim() === '') {
            showFieldError('email', 'Please enter your email');
            isValid = false;
        } else if (!isValidEmail(data.from_email)) {
            showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Subject validation
        if (!data.subject || data.subject.trim() === '') {
            showFieldError('subject', 'Please enter a subject');
            isValid = false;
        } else if (data.subject.trim().length < 3) {
            showFieldError('subject', 'Subject must be at least 3 characters long');
            isValid = false;
        }
        
        // Message validation
        if (!data.message || data.message.trim() === '') {
            showFieldError('message', 'Please enter your message');
            isValid = false;
        } else if (data.message.trim().length < 10) {
            showFieldError('message', 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    }
    
    // Show field-specific error
    function showFieldError(fieldName, message) {
        const field = document.getElementById(fieldName);
        if (field) {
            field.classList.add('error');
            
            // Remove existing error message
            const existingError = field.parentNode.querySelector('.field-error');
            if (existingError) {
                existingError.remove();
            }
            
            // Create new error message
            const errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.textContent = message;
            
            // Insert error message after the field
            field.parentNode.appendChild(errorElement);
        }
    }
    
    // Clear error states
    function clearErrorStates() {
        const fields = ['name', 'email', 'subject', 'message'];
        fields.forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (field) {
                field.classList.remove('error');
                
                // Remove existing error messages
                const errorElement = field.parentNode.querySelector('.field-error');
                if (errorElement) {
                    errorElement.remove();
                }
            }
        });
    }
    
    // Show loading state
    function showLoadingState() {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        formStatus.style.display = 'block';
        loadingMessage.style.display = 'flex';
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    }
    
    // Hide loading state
    function hideLoadingState() {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        loadingMessage.style.display = 'none';
    }
    
    // Show success message
    function showSuccessMessage() {
        formStatus.style.display = 'block';
        successMessage.style.display = 'flex';
        errorMessage.style.display = 'none';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
            if (loadingMessage.style.display === 'none' && errorMessage.style.display === 'none') {
                formStatus.style.display = 'none';
            }
        }, 5000);
    }
    
    // Show error message
    function showErrorMessage(error = null) {
        formStatus.style.display = 'block';
        errorMessage.style.display = 'flex';
        successMessage.style.display = 'none';
        
        // Update error message text if specific error provided
        if (error && error.text) {
            const errorText = errorMessage.querySelector('span');
            errorText.textContent = `Failed to send message: ${error.text}`;
        }
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
            if (loadingMessage.style.display === 'none' && successMessage.style.display === 'none') {
                formStatus.style.display = 'none';
            }
        }, 5000);
    }
    
    // Add real-time validation
    const fields = ['name', 'email', 'subject', 'message'];
    fields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            // Clear error on input
            field.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    this.classList.remove('error');
                    const fieldError = this.parentNode.querySelector('.field-error');
                    if (fieldError) {
                        fieldError.remove();
                    }
                }
            });
        }
    });
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

// Add current year to footer (only if element exists)
const footerText = document.querySelector('.footer-text');
if (footerText) {
    footerText.innerHTML = `&copy; ${new Date().getFullYear()} <span>Mariely</span>. All Rights Reserved.`;
}

// Image Modal Functionality
function openImageModal(imageSrc, imageAlt) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt || 'Full size image';
    modal.classList.add('active');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Add click event listeners to project and certificate images only
document.addEventListener('DOMContentLoaded', () => {
    // Select only project and certificate images that should be clickable for modal viewing
    const clickableImages = document.querySelectorAll('.project-image img, .certificate-image img');
    
    clickableImages.forEach(img => {
        // Add click event for opening modal
        img.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openImageModal(img.src, img.alt);
        });
        
        // Add keyboard accessibility
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', 'Click to view full size image');
        
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openImageModal(img.src, img.alt);
            }
        });
        
        // Add visual indicator that image is clickable
        img.style.cursor = 'pointer';
    });
    
    // Close modal when clicking outside the image
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('image-modal')) {
                closeImageModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
});

// Add hover effect for project and certificate images only
document.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.project-image, .certificate-image');
    
    imageContainers.forEach(container => {
        const img = container.querySelector('img');
        
        if (img) {
            // Only add hover effects on non-touch devices
            if (!('ontouchstart' in window)) {
                container.addEventListener('mouseenter', () => {
                    img.style.transform = 'scale(1.05)';
                    img.style.filter = 'brightness(0.8)';
                    img.style.transition = 'all 0.3s ease';
                });
                
                container.addEventListener('mouseleave', () => {
                    img.style.transform = '';
                    img.style.filter = '';
                });
            }
            
            // Add click indicator for clickable images only
            container.style.position = 'relative';
            container.style.cursor = 'pointer';
        }
    });
});
