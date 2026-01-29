// EmailJS Quick Configuration
// Replace the values below with your actual EmailJS credentials

const EMAILJS_CONFIG = {
    // Get this from EmailJS Dashboard > Account > API Keys
    PUBLIC_KEY: 'wW6DI4cjJ7VDymCOL',
    
    // Get this from EmailJS Dashboard > Email Services
    SERVICE_ID: 'service_ozdj74k',
    
    // Get this from EmailJS Dashboard > Email Templates
    TEMPLATE_ID: 'template_3nvtrjo',
    
    // Your email address where you want to receive messages
    TO_EMAIL: 'tolentinomariely09@gmail.com'
};

// Example of what the actual values might look like:
// PUBLIC_KEY: 'user_abc123xyz789'
// SERVICE_ID: 'service_gmail_456'
// TEMPLATE_ID: 'template_contact_789'

// Once you have your actual values, update your script.js file:
// 1. Replace 'YOUR_PUBLIC_KEY' with EMAILJS_CONFIG.PUBLIC_KEY
// 2. Replace 'YOUR_SERVICE_ID' with EMAILJS_CONFIG.SERVICE_ID
// 3. Replace 'YOUR_TEMPLATE_ID' with EMAILJS_CONFIG.TEMPLATE_ID

// Or you can use this configuration object directly in your script.js:
/*
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
*/