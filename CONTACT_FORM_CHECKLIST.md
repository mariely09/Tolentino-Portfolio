# Contact Form Setup Checklist

## ✅ Pre-Setup Checklist
- [ ] EmailJS account created and verified
- [ ] Gmail account accessible (tolentinomariely09@gmail.com)
- [ ] Browser developer tools knowledge (F12)

## ✅ EmailJS Configuration
- [ ] Email service created and connected to Gmail
- [ ] Service ID copied and saved
- [ ] Email template created with proper variables
- [ ] Template ID copied and saved
- [ ] Public key copied from account settings
- [ ] All IDs updated in script.js file

## ✅ Code Implementation
- [ ] EmailJS library loaded in HTML head section
- [ ] Contact form has proper IDs and name attributes
- [ ] JavaScript form handler implemented
- [ ] Status messages (success/error/loading) added to HTML
- [ ] CSS styles for status messages added
- [ ] Fallback mechanism for EmailJS loading failures

## ✅ Testing Steps
1. **Visual Test**
   - [ ] Contact form displays correctly
   - [ ] All form fields are present (name, email, subject, message)
   - [ ] Submit button is styled properly
   - [ ] Form is responsive on mobile devices

2. **Functionality Test**
   - [ ] Form validation works (try submitting empty form)
   - [ ] Field-specific error messages appear
   - [ ] Loading state shows when submitting
   - [ ] Success message appears after successful submission
   - [ ] Form resets after successful submission
   - [ ] Error message appears if submission fails

3. **Email Delivery Test**
   - [ ] Test email received in inbox
   - [ ] Email contains all form data (name, email, subject, message)
   - [ ] Email formatting looks good
   - [ ] Reply-to address is set to sender's email
   - [ ] No emails in spam folder

4. **Browser Console Test**
   - [ ] No JavaScript errors in console
   - [ ] EmailJS success message logged
   - [ ] No network errors

## ✅ Troubleshooting Checklist
If the form isn't working, check:

- [ ] **EmailJS Library Loading**
  - Open browser console
  - Type `emailjs` and press Enter
  - Should show EmailJS object, not "undefined"

- [ ] **Configuration Values**
  - Public key is correct (starts with "user_")
  - Service ID is correct (starts with "service_")
  - Template ID is correct (starts with "template_")

- [ ] **Network Issues**
  - Check browser Network tab for failed requests
  - Verify internet connection
  - Try from different browser/device

- [ ] **Email Service**
  - Verify Gmail service is connected in EmailJS dashboard
  - Check EmailJS dashboard for sending statistics
  - Verify email template is published

- [ ] **Form Fields**
  - All inputs have correct `name` attributes
  - Form has `id="contact-form"`
  - Submit button has `id="submit-btn"`

## ✅ Security Checklist
- [ ] Only public key is exposed in client-side code
- [ ] Private key is never used in frontend
- [ ] Rate limiting considered (EmailJS dashboard)
- [ ] Spam protection considered

## ✅ Performance Checklist
- [ ] EmailJS library loads from CDN
- [ ] Form submission doesn't block UI
- [ ] Loading states provide user feedback
- [ ] Error handling is graceful

## ✅ User Experience Checklist
- [ ] Form is easy to find and use
- [ ] Clear labels and placeholders
- [ ] Helpful error messages
- [ ] Success confirmation is clear
- [ ] Mobile-friendly design
- [ ] Accessible for screen readers

## ✅ Final Verification
Test the complete flow:
1. [ ] Fill out form with valid data
2. [ ] Submit form
3. [ ] See loading message
4. [ ] See success message
5. [ ] Check email inbox
6. [ ] Verify email content is correct
7. [ ] Test reply functionality

## 🚨 Common Issues & Solutions

**Issue**: "emailjs is not defined"
**Solution**: Check EmailJS script is loaded before your custom script

**Issue**: "Service not found"
**Solution**: Verify Service ID matches exactly with EmailJS dashboard

**Issue**: "Template not found"
**Solution**: Verify Template ID and ensure template is published

**Issue**: Emails not received
**Solution**: Check spam folder, verify email service connection

**Issue**: Form submits but no email
**Solution**: Check browser console for errors, verify template variables

## 📞 Support Resources
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
- Browser Developer Tools Guide: F12 → Console tab

## 📝 Notes
- Free plan allows 200 emails/month
- Keep your credentials secure
- Monitor usage in EmailJS dashboard
- Consider upgrading for higher limits