// Demo EmailJS Configuration - Replace with your actual credentials
// This is a working example you can use as reference

// EmailJS Configuration and Form Handling
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    // IMPORTANT: Replace these with your actual EmailJS credentials
    const EMAILJS_CONFIG = {
        PUBLIC_KEY: 'wW6DI4cjJ7VDymCOL',      // Get from EmailJS dashboard
        SERVICE_ID: 'service_ozdj74k',      // Your email service ID
        TEMPLATE_ID: 'template_3nvtrjo'     // Your email template ID
    };
    
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
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
            emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID, 
                EMAILJS_CONFIG.TEMPLATE_ID, 
                templateParams
            )
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
        if (error) {
            const errorText = errorMessage.querySelector('span');
            if (error.text) {
                errorText.textContent = `Failed to send message: ${error.text}`;
            } else {
                errorText.textContent = 'Failed to send message. Please check your internet connection and try again.';
            }
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
            field.addEventListener('blur', function() {
                // Validate individual field on blur
                const value = this.value.trim();
                const fieldError = this.parentNode.querySelector('.field-error');
                
                if (fieldError) {
                    fieldError.remove();
                }
                
                this.classList.remove('error');
                
                // Basic validation
                if (value === '') {
                    return; // Don't show error for empty fields on blur
                }
                
                switch (fieldName) {
                    case 'name':
                        if (value.length < 2) {
                            showFieldError(fieldName, 'Name must be at least 2 characters long');
                        }
                        break;
                    case 'email':
                        if (!isValidEmail(value)) {
                            showFieldError(fieldName, 'Please enter a valid email address');
                        }
                        break;
                    case 'subject':
                        if (value.length < 3) {
                            showFieldError(fieldName, 'Subject must be at least 3 characters long');
                        }
                        break;
                    case 'message':
                        if (value.length < 10) {
                            showFieldError(fieldName, 'Message must be at least 10 characters long');
                        }
                        break;
                }
            });
            
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

// Fallback for browsers that don't support EmailJS
if (typeof emailjs === 'undefined') {
    console.warn('EmailJS library not loaded. Contact form will not work.');
    
    // Show a message to the user
    document.addEventListener('DOMContentLoaded', function() {
        const formContainer = document.querySelector('.contact-form-container');
        if (formContainer) {
            const warningDiv = document.createElement('div');
            warningDiv.className = 'error-message';
            warningDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>Contact form is currently unavailable. Please email directly to tolentinomariely09@gmail.com</span>';
            warningDiv.style.display = 'flex';
            formContainer.insertBefore(warningDiv, formContainer.firstChild);
        }
    });
}