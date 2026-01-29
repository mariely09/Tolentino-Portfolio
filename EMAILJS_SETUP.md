# EmailJS Setup Instructions for Portfolio Contact Form

## Overview
This guide will help you set up EmailJS to make your contact form functional. EmailJS allows you to send emails directly from your static website without needing a backend server.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address
4. Log in to your EmailJS dashboard

## Step 2: Create Email Service
1. In your EmailJS dashboard, click on "Email Services" in the left sidebar
2. Click "Add New Service" button
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook/Hotmail**
   - **Yahoo**
   - Or any other SMTP service
4. For Gmail:
   - Click "Connect Account"
   - Sign in with your Gmail account (tolentinomariely09@gmail.com)
   - Grant necessary permissions
5. Your service will be created with a **Service ID** (e.g., "service_abc123")
6. **IMPORTANT**: Copy and save this Service ID - you'll need it later

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Give your template a name: "Portfolio Contact Form"
4. Set up the template with these fields:

### Template Settings:
- **To Email**: {{to_email}} (this will be your email)
- **From Name**: {{from_name}}
- **From Email**: {{from_email}}
- **Reply To**: {{from_email}}
- **Subject**: New Contact Form Message: {{subject}}

### Template Content (HTML):
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #4a90e2;">New Contact Form Message</h2>
    
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2c3e50;">{{subject}}</h3>
        <p style="line-height: 1.6;">{{message}}</p>
    </div>
    
    <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px;">
        <p><strong>From:</strong> {{from_name}}</p>
        <p><strong>Email:</strong> {{from_email}}</p>
        <p><strong>Subject:</strong> {{subject}}</p>
    </div>
    
    <p style="color: #666; font-size: 14px; margin-top: 20px;">
        This message was sent from your portfolio contact form.
    </p>
</div>
```

5. Save the template and copy the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the "API Keys" section
3. Copy this key (e.g., "user_abcdefghijk")

## Step 5: Update Your Website Code
Replace the placeholders in your `script.js` file:

```javascript
// Replace these three values with your actual EmailJS credentials:
emailjs.init('YOUR_PUBLIC_KEY');           // Your public key
emailjs.send('YOUR_SERVICE_ID',            // Your service ID
            'YOUR_TEMPLATE_ID',            // Your template ID
            templateParams)
```

### Example with real values:
```javascript
emailjs.init('user_abc123xyz');
emailjs.send('service_gmail_123', 'template_contact_456', templateParams)
```

## Step 6: Configure Email Template Variables
Make sure your EmailJS template uses these variable names:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (tolentinomariely09@gmail.com)

## Step 7: Test Your Form
1. Open your website in a browser
2. Fill out the contact form with test data
3. Submit the form
4. Check your email inbox for the message
5. Check browser console for any error messages

## Troubleshooting

### Common Issues:
1. **"EmailJS is not defined" error**
   - Make sure the EmailJS script is loaded in your HTML
   - Check that the script tag is before your custom script

2. **"Service not found" error**
   - Verify your Service ID is correct
   - Make sure the service is active in your EmailJS dashboard

3. **"Template not found" error**
   - Verify your Template ID is correct
   - Make sure the template is published

4. **Emails not being received**
   - Check your spam/junk folder
   - Verify your email service is properly connected
   - Test with a different email address

5. **CORS errors**
   - Add your domain to EmailJS allowed origins (if needed)
   - Make sure you're testing on a proper domain, not file://

### Testing Tips:
- Use browser developer tools to check for JavaScript errors
- Test with different email addresses
- Try sending from different devices/browsers
- Check EmailJS dashboard for sending statistics

## Security Notes
- Your EmailJS public key is safe to expose in client-side code
- Never expose your private key in client-side code
- Consider setting up rate limiting in EmailJS dashboard
- Monitor your usage to avoid exceeding free plan limits

## Free Plan Limits
- **200 emails per month**
- EmailJS branding in emails
- Basic support
- 2 email services
- 2 email templates

For higher limits and features, consider upgrading to a paid plan.

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
- Community Forum: https://www.emailjs.com/community/

## Your Configuration Summary
Once set up, save these details for reference:
- **Public Key**: `_________________`
- **Service ID**: `_________________`
- **Template ID**: `_________________`
- **Your Email**: `tolentinomariely09@gmail.com`