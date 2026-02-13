// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('scroll-animate');
        scrollObserver.observe(section);
    });

    // Observe specific elements within sections
    const animateElements = document.querySelectorAll(
        '.about-image, .about-text, .skill-card, .project-card, ' +
        '.certificate-card, .timeline-item, .contact-card, .contact-form-container'
    );
    
    animateElements.forEach((element, index) => {
        // Add staggered animation delay
        element.style.transitionDelay = `${index * 0.1}s`;
        
        // Determine animation type based on element
        if (element.classList.contains('about-image')) {
            element.classList.add('scroll-animate-left');
        } else if (element.classList.contains('about-text')) {
            element.classList.add('scroll-animate-right');
        } else if (element.classList.contains('skill-card') || 
                   element.classList.contains('project-card') ||
                   element.classList.contains('certificate-card')) {
            element.classList.add('scroll-animate-scale');
        } else {
            element.classList.add('scroll-animate');
        }
        
        scrollObserver.observe(element);
    });
});

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

// Enhanced Dynamic Typing Effect
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.wait = parseInt(wait, 10);
        this.wordIndex = 0;
        this.txt = '';
        this.isDeleting = false;
        this.typeSpeed = 100;
        this.deleteSpeed = 50;
        this.pauseTime = 1500;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            this.element.classList.add('deleting');
            this.element.classList.remove('typing');
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            this.element.classList.add('typing');
            this.element.classList.remove('deleting');
        }

        this.element.textContent = this.txt;

        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        // Add some randomness to typing speed for more natural feel
        if (!this.isDeleting) {
            typeSpeed += Math.random() * 50;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
            this.element.classList.remove('typing');
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
            this.element.classList.remove('deleting');
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const words = [
            'Web Developer',
            'UI/UX Designer', 
        ];
        new TypeWriter(typingElement, words, 2000);
    }
    
    // ID Card Animation Trigger
    const idCardContainer = document.querySelector('.id-card-container');
    if (idCardContainer) {
        // Add landed class after the fall animation completes (2s + 1.2s delay = 3.2s)
        setTimeout(() => {
            idCardContainer.classList.add('landed');
        }, 3200);
    }
});

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
                reply_to: formData.get('from_email'),
                // Additional info for better email identification
                sender_name: formData.get('from_name'),
                sender_email: formData.get('from_email'),
                date: new Date().toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                })
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

// Skills Carousel - Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        // Initialize carousel immediately
        const carousel = card.querySelector('.skill-carousel');
        if (carousel && !carousel.dataset.initialized) {
            initializeCarousel(carousel);
        }
        
        // Add skill items animation
        const skillItems = card.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            item.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
        });
        
        // Show skill items when card is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillItems.forEach(item => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    });
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(card);
    });
});

// Carousel functionality
function initializeCarousel(carouselElement) {
    const card = carouselElement.closest('.skill-card');
    const items = carouselElement.querySelectorAll('.skill-item');
    const prevBtn = card.querySelector('.carousel-prev');
    const nextBtn = card.querySelector('.carousel-next');
    const indicatorsContainer = card.querySelector('.carousel-indicators');
    
    if (!items || items.length === 0) {
        console.warn('No skill items found in carousel');
        return;
    }
    
    if (!prevBtn || !nextBtn || !indicatorsContainer) {
        console.warn('Carousel controls not found');
        return;
    }
    
    let currentIndex = 0;
    let autoPlayInterval;
    
    // Create indicators
    items.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = 'carousel-indicator';
        indicator.setAttribute('aria-label', `Go to skill ${index + 1}`);
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(index);
            resetAutoPlay();
        });
        indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
    
    // Update carousel display
    function updateCarousel(direction = 'next') {
        items.forEach((item, index) => {
            item.classList.remove('active', 'prev', 'next');
            
            if (index === currentIndex) {
                item.classList.add('active');
            } else if (direction === 'next') {
                if (index < currentIndex) {
                    item.classList.add('prev');
                } else {
                    item.classList.add('next');
                }
            } else {
                if (index > currentIndex) {
                    item.classList.add('next');
                } else {
                    item.classList.add('prev');
                }
            }
        });
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        const direction = index > currentIndex ? 'next' : 'prev';
        currentIndex = index;
        updateCarousel(direction);
    }
    
    // Next slide
    function nextSlide() {
        const direction = 'next';
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel(direction);
    }
    
    // Previous slide
    function prevSlide() {
        const direction = 'prev';
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel(direction);
    }
    
    // Auto play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }
    
    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            prevSlide();
            resetAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            nextSlide();
            resetAutoPlay();
        });
    }
    
    // Pause on hover
    carouselElement.addEventListener('mouseenter', stopAutoPlay);
    carouselElement.addEventListener('mouseleave', startAutoPlay);
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselElement.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    }, { passive: true });
    
    carouselElement.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Keyboard navigation
    card.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
            resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
            resetAutoPlay();
        }
    });
    
    // Initialize
    updateCarousel();
    startAutoPlay();
    
    // Mark as initialized
    carouselElement.dataset.initialized = 'true';
    
    console.log(`Carousel initialized with ${items.length} items`);
}

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

// Image Modal Functionality with Carousel
let modalImages = [];
let currentModalIndex = 0;

function openImageModal(imageSrc, imageAlt, allImages = null) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCounter = document.getElementById('modalImageCounter');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    // If allImages array is provided, use it for carousel
    if (allImages && allImages.length > 0) {
        modalImages = allImages;
        currentModalIndex = allImages.findIndex(img => img.src === imageSrc);
        if (currentModalIndex === -1) currentModalIndex = 0;
    } else {
        // Single image mode
        modalImages = [{ src: imageSrc, alt: imageAlt }];
        currentModalIndex = 0;
    }
    
    updateModalImage();
    modal.classList.add('active');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Show/hide navigation buttons
    if (modalImages.length > 1) {
        modalPrev.style.display = 'flex';
        modalNext.style.display = 'flex';
    } else {
        modalPrev.style.display = 'none';
        modalNext.style.display = 'none';
    }
}

function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const modalCounter = document.getElementById('modalImageCounter');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    if (modalImages.length === 0) return;
    
    const currentImage = modalImages[currentModalIndex];
    modalImage.src = currentImage.src;
    modalImage.alt = currentImage.alt || 'Full size image';
    
    // Update counter
    if (modalImages.length > 1) {
        modalCounter.textContent = `${currentModalIndex + 1} / ${modalImages.length}`;
        modalCounter.style.display = 'block';
    } else {
        modalCounter.style.display = 'none';
    }
    
    // Update button states
    modalPrev.disabled = currentModalIndex === 0;
    modalNext.disabled = currentModalIndex === modalImages.length - 1;
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Reset
    modalImages = [];
    currentModalIndex = 0;
}

function nextModalImage() {
    if (currentModalIndex < modalImages.length - 1) {
        currentModalIndex++;
        updateModalImage();
    }
}

function prevModalImage() {
    if (currentModalIndex > 0) {
        currentModalIndex--;
        updateModalImage();
    }
}

// Add click event listeners to project and certificate images only
document.addEventListener('DOMContentLoaded', () => {
    // Handle project carousel images
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const carouselImages = card.querySelectorAll('.project-image img');
        
        carouselImages.forEach(img => {
            img.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Get all images from this project
                const allProjectImages = Array.from(carouselImages).map(image => ({
                    src: image.src,
                    alt: image.alt
                }));
                
                openImageModal(img.src, img.alt, allProjectImages);
            });
            
            // Add keyboard accessibility
            img.setAttribute('tabindex', '0');
            img.setAttribute('role', 'button');
            img.setAttribute('aria-label', 'Click to view full size image');
            
            img.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    
                    const allProjectImages = Array.from(carouselImages).map(image => ({
                        src: image.src,
                        alt: image.alt
                    }));
                    
                    openImageModal(img.src, img.alt, allProjectImages);
                }
            });
            
            // Add visual indicator that image is clickable
            img.style.cursor = 'pointer';
        });
    });
    
    // Handle certificate images (single image mode)
    const certificateImages = document.querySelectorAll('.certificate-image img');
    certificateImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openImageModal(img.src, img.alt);
        });
        
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', 'Click to view full size image');
        
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openImageModal(img.src, img.alt);
            }
        });
        
        img.style.cursor = 'pointer';
    });
    
    // Modal navigation button events
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    if (modalPrev) {
        modalPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            prevModalImage();
        });
    }
    
    if (modalNext) {
        modalNext.addEventListener('click', (e) => {
            e.stopPropagation();
            nextModalImage();
        });
    }
    
    // Close modal when clicking outside the image
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('image-modal')) {
                closeImageModal();
            }
        });
    }
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('imageModal');
        if (modal && modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeImageModal();
            } else if (e.key === 'ArrowLeft') {
                prevModalImage();
            } else if (e.key === 'ArrowRight') {
                nextModalImage();
            }
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


// Particle Background Animation
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createHomeParticles();
    initHomeParallax();
});

// Add parallax effect to home section
function initHomeParallax() {
    const homeSection = document.getElementById('home');
    const heroCenter = document.querySelector('.home-hero-center');
    const heroPhoto = document.querySelector('.hero-photo');
    const heroNames = document.querySelectorAll('.hero-name');
    const typingInfo = document.querySelector('.typing-info-left');
    
    if (!homeSection) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const homeSectionTop = homeSection.offsetTop;
        const homeSectionHeight = homeSection.offsetHeight;
        
        // Only apply parallax when in home section view
        if (scrolled < homeSectionHeight) {
            const parallaxSpeed = scrolled * 0.5;
            const parallaxSpeedSlow = scrolled * 0.3;
            const parallaxSpeedFast = scrolled * 0.7;
            
            if (heroCenter) {
                heroCenter.style.transform = `translateY(${parallaxSpeed}px)`;
                heroCenter.style.opacity = 1 - (scrolled / homeSectionHeight) * 0.8;
            }
            
            if (heroPhoto) {
                heroPhoto.style.transform = `translateY(${parallaxSpeedSlow}px) scale(${1 - scrolled / homeSectionHeight * 0.1})`;
            }
            
            heroNames.forEach((name, index) => {
                const speed = index === 0 ? parallaxSpeedFast : parallaxSpeed;
                name.style.transform = `translateY(${speed}px)`;
            });
            
            if (typingInfo) {
                typingInfo.style.transform = `translateY(${parallaxSpeedSlow}px)`;
                typingInfo.style.opacity = 1 - (scrolled / homeSectionHeight) * 1.2;
            }
        }
    });
}

function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) {
        // Create particles container if it doesn't exist
        const container = document.createElement('div');
        container.className = 'particles';
        document.body.appendChild(container);
    }
    
    const container = document.querySelector('.particles');
    const particleCount = 50; // Number of particles
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random starting position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration between 10s and 30s
    const duration = Math.random() * 20 + 10;
    particle.style.animationDuration = `${duration}s`;
    
    // Random animation delay
    const delay = Math.random() * 5;
    particle.style.animationDelay = `${delay}s`;
    
    // Random opacity
    const opacity = Math.random() * 0.5 + 0.3;
    particle.style.opacity = opacity;
    
    container.appendChild(particle);
    
    // Remove and recreate particle after animation ends
    particle.addEventListener('animationiteration', () => {
        particle.style.left = `${Math.random() * 100}%`;
    });
}

// Enhanced Home Section Particles
function createHomeParticles() {
    const homeParticlesContainer = document.getElementById('homeParticles');
    if (!homeParticlesContainer) return;
    
    const particleCount = 80; // Increased number of particles for home section
    
    // Create particles with varied properties
    for (let i = 0; i < particleCount; i++) {
        createHomeParticle(homeParticlesContainer, i);
    }
    
    // Continuously add new particles
    setInterval(() => {
        if (homeParticlesContainer.children.length < particleCount) {
            createHomeParticle(homeParticlesContainer, Math.random() * particleCount);
        }
    }, 2000); // Faster particle generation
    
    // Add mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create particle trail on mouse move (throttled)
        if (Math.random() > 0.95) {
            createMouseParticle(homeParticlesContainer, mouseX, mouseY);
        }
    });
}

function createMouseParticle(container, x, y) {
    const particle = document.createElement('div');
    particle.className = 'home-particle mouse-particle';
    
    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.position = 'fixed';
    
    const colors = [
        'rgba(74, 144, 226, 0.9)',
        'rgba(52, 152, 219, 0.8)',
        'rgba(100, 149, 237, 0.9)',
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
    particle.style.animation = 'mouseParticleFade 1s ease-out forwards';
    
    container.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode === container) {
            container.removeChild(particle);
        }
    }, 1000);
}

function createHomeParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'home-particle';
    
    // Random size between 4px and 15px (increased size range)
    const size = Math.random() * 11 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random starting position (X axis)
    const startX = Math.random() * 100;
    const midX = startX + (Math.random() * 80 - 40); // Increased movement range
    const endX = midX + (Math.random() * 80 - 40);
    
    // Set CSS custom properties for animation
    particle.style.setProperty('--start-x', `${startX}vw`);
    particle.style.setProperty('--mid-x', `${midX}vw`);
    particle.style.setProperty('--end-x', `${endX}vw`);
    
    // Random animation duration between 12s and 30s (faster particles)
    const duration = Math.random() * 18 + 12;
    particle.style.setProperty('--duration', `${duration}s`);
    
    // Random animation delay
    const delay = Math.random() * 8;
    particle.style.animationDelay = `${delay}s`;
    
    // Random opacity
    const opacity = Math.random() * 0.7 + 0.4;
    particle.style.setProperty('--opacity', opacity);
    
    // Random scale
    const scale = Math.random() * 0.6 + 0.9;
    particle.style.setProperty('--scale', scale);
    
    // Enhanced random colors with blue theme
    const colors = [
        'rgba(74, 144, 226, 0.9)',
        'rgba(52, 152, 219, 0.8)',
        'rgba(100, 149, 237, 0.9)',
        'rgba(30, 144, 255, 0.8)',
        'rgba(135, 186, 245, 0.9)',
        'rgba(65, 105, 225, 0.8)',
        'rgba(70, 130, 255, 0.85)',
        'rgba(95, 158, 255, 0.85)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const colorFaded = color.replace(/[\d.]+\)$/, '0.3)');
    particle.style.background = `radial-gradient(circle, ${color} 0%, ${colorFaded} 50%, transparent 100%)`;
    
    // Add glow effect to more particles
    if (Math.random() > 0.5) {
        particle.style.animation += ', particleGlow 3s ease-in-out infinite';
        particle.style.animationDelay = `${delay}s, ${delay + Math.random() * 2}s`;
    }
    
    // Add blur effect to some particles for depth
    if (Math.random() > 0.7) {
        particle.style.filter = `blur(${Math.random() * 2 + 1}px)`;
    }
    
    container.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
        if (particle.parentNode === container) {
            container.removeChild(particle);
        }
    }, (duration + delay) * 1000);
}

// Add more particles on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const container = document.querySelector('.particles');
        if (container && container.children.length < 30) {
            for (let i = 0; i < 10; i++) {
                createParticle(container);
            }
        }
        
        // Recreate home particles on resize
        const homeContainer = document.getElementById('homeParticles');
        if (homeContainer && homeContainer.children.length < 40) {
            for (let i = 0; i < 10; i++) {
                createHomeParticle(homeContainer, i);
            }
        }
    }, 250);
});


// Project Image Carousel
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const carousel = card.querySelector('.project-image-carousel');
        if (!carousel) return;
        
        const images = carousel.querySelectorAll('.project-image');
        const prevBtn = carousel.querySelector('.project-prev');
        const nextBtn = carousel.querySelector('.project-next');
        const dotsContainer = carousel.querySelector('.project-carousel-dots');
        
        if (images.length === 0) return;
        
        let currentIndex = 0;
        let autoPlayInterval;
        
        // Create dots
        images.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'project-carousel-dot';
            dot.setAttribute('aria-label', `Go to image ${index + 1}`);
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                goToSlide(index);
                resetAutoPlay();
            });
            dotsContainer.appendChild(dot);
        });
        
        const dots = dotsContainer.querySelectorAll('.project-carousel-dot');
        
        // Initialize - make sure only first image is active
        images.forEach((img, index) => {
            img.classList.remove('active');
        });
        images[0].classList.add('active');
        
        // Update carousel display
        function updateCarousel() {
            console.log(`Carousel update: showing image ${currentIndex + 1} of ${images.length}`);
            
            // Remove active class from all images
            images.forEach((img, index) => {
                img.classList.remove('active');
            });
            
            // Add active class to current image
            images[currentIndex].classList.add('active');
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.remove('active');
            });
            dots[currentIndex].classList.add('active');
        }
        
        // Go to specific slide
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }
        
        // Next slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }
        
        // Previous slide
        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        }
        
        // Auto play
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 4000);
        }
        
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }
        
        function resetAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }
        
        // Event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                prevSlide();
                resetAutoPlay();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                nextSlide();
                resetAutoPlay();
            });
        }
        
        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
        
        // Touch support
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoPlay();
        }, { passive: true });
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoPlay();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
        
        // Initialize
        updateCarousel();
        startAutoPlay();
        
        console.log(`Project carousel initialized with ${images.length} images`);
    });
});


// Education Section Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    initEducationAnimations();
});

function initEducationAnimations() {
    const educationHeader = document.querySelector('.education-header');
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Create Intersection Observer for education section
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const educationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe header and timeline
    if (educationHeader) educationObserver.observe(educationHeader);
    if (timeline) educationObserver.observe(timeline);
    
    // Observe each timeline item individually for staggered effect
    timelineItems.forEach((item, index) => {
        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add delay based on index
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, index * 150);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });
        
        itemObserver.observe(item);
        
        // Add hover effect enhancement
        item.addEventListener('mouseenter', () => {
            const dot = item.querySelector('.timeline-dot');
            if (dot) {
                dot.style.transform = 'translateY(-50%) scale(1.3)';
                dot.style.boxShadow = '0 0 0 8px rgba(74, 144, 226, 0.3), 0 0 30px rgba(74, 144, 226, 0.6)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const dot = item.querySelector('.timeline-dot');
            if (dot) {
                dot.style.transform = 'translateY(-50%) scale(1)';
                dot.style.boxShadow = '0 0 0 4px rgba(74, 144, 226, 0.2), 0 0 20px rgba(74, 144, 226, 0.4)';
            }
        });
    });
    
    // Add click effect for timeline items
    timelineItems.forEach(item => {
        const content = item.querySelector('.timeline-content');
        if (content) {
            content.addEventListener('click', () => {
                // Add ripple effect
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(74, 144, 226, 0.3)';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.animation = 'ripple 0.6s ease-out';
                ripple.style.pointerEvents = 'none';
                
                const rect = content.getBoundingClientRect();
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                ripple.style.transform = 'translate(-50%, -50%)';
                
                content.style.position = 'relative';
                content.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        }
    });
}
