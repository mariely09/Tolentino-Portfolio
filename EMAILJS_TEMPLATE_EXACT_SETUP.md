# 📧 EmailJS Template - Exact Setup Guide

## 🎯 Template Settings (Copy Exactly)

### Basic Settings:
```
Template Name: Portfolio Contact Form
Template ID: (auto-generated, copy this for your script.js)
```

### Email Settings:
```
To Email: tolentinomariely09@gmail.com
From Name: Portfolio Contact Form
From Email: tolentinomariely09@gmail.com
Reply To: {{reply_to}}
Subject: 📧 New Message from {{from_name}} - {{subject}}
```

## 📝 Template Content (HTML Version)

**Copy this EXACTLY into your EmailJS template:**

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #4a90e2;">
            <h1 style="color: #2c3e50; margin: 0; font-size: 24px;">📧 New Portfolio Contact</h1>
            <p style="color: #666; margin: 5px 0 0 0; font-size: 14px;">From marielyportfolio.com</p>
        </div>
        
        <!-- SENDER INFO - MOST IMPORTANT PART -->
        <div style="background-color: #e8f4fd; padding: 25px; border-radius: 10px; margin-bottom: 25px; border-left: 5px solid #4a90e2;">
            <h2 style="color: #1565c0; margin: 0 0 20px 0; font-size: 22px;">👤 Message from: {{from_name}}</h2>
            
            <table style="width: 100%; border-collapse: collapse; background-color: white; border-radius: 8px; overflow: hidden;">
                <tr style="background-color: #f8f9fa;">
                    <td style="padding: 15px; font-weight: bold; color: #495057; border-bottom: 1px solid #dee2e6;">Sender Name:</td>
                    <td style="padding: 15px; color: #212529; border-bottom: 1px solid #dee2e6; font-size: 16px;">{{from_name}}</td>
                </tr>
                <tr>
                    <td style="padding: 15px; font-weight: bold; color: #495057; border-bottom: 1px solid #dee2e6;">Email Address:</td>
                    <td style="padding: 15px; border-bottom: 1px solid #dee2e6;">
                        <span style="color: #1565c0; font-weight: bold; font-size: 16px;">{{from_email}}</span>
                    </td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                    <td style="padding: 15px; font-weight: bold; color: #495057;">Subject:</td>
                    <td style="padding: 15px; color: #212529; font-size: 16px;">{{subject}}</td>
                </tr>
            </table>
            
            <div style="margin-top: 15px; padding: 12px; background-color: #d1ecf1; border-radius: 5px; border-left: 4px solid #17a2b8;">
                <p style="margin: 0; color: #0c5460; font-size: 14px; font-weight: 500;">
                    💡 <strong>To Reply:</strong> Click the "Reply" button above. Your response will go directly to {{from_email}}
                </p>
            </div>
        </div>
        
        <!-- MESSAGE CONTENT -->
        <div style="margin-bottom: 25px;">
            <h3 style="color: #4a90e2; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid #e9ecef; padding-bottom: 10px;">💬 Message:</h3>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef;">
                <p style="margin: 0; line-height: 1.7; color: #495057; font-size: 15px; white-space: pre-wrap;">{{message}}</p>
            </div>
        </div>
        
        <!-- QUICK CONTACT INFO -->
        <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #ffc107;">
            <h4 style="color: #856404; margin: 0 0 15px 0; font-size: 16px;">📋 Quick Contact Info:</h4>
            <p style="margin: 5px 0; color: #856404;"><strong>Name:</strong> {{from_name}}</p>
            <p style="margin: 5px 0; color: #856404;"><strong>Email:</strong> {{from_email}}</p>
            <p style="margin: 5px 0; color: #856404;"><strong>Date:</strong> {{date}}</p>
        </div>
        
        <!-- FOOTER -->
        <div style="text-align: center; padding-top: 20px; border-top: 2px solid #e9ecef;">
            <div style="background-color: #d4edda; padding: 15px; border-radius: 8px; border: 1px solid #c3e6cb; margin-bottom: 15px;">
                <p style="color: #155724; margin: 0; font-weight: bold; font-size: 15px;">
                    🔄 <strong>REPLY INSTRUCTIONS:</strong><br>
                    Click "Reply" to respond directly to {{from_name}} at {{from_email}}
                </p>
            </div>
            <p style="color: #6c757d; font-size: 12px; margin: 0;">
                This message was sent from your portfolio contact form.<br>
                Portfolio Website © 2024 Mariely Ann Tolentino
            </p>
        </div>
        
    </div>
</div>
```

## 📝 Template Content (Simple Text Version)

**Alternative simple version:**

```
Subject: 📧 New Message from {{from_name}} - {{subject}}

===========================================
📧 NEW PORTFOLIO CONTACT MESSAGE
===========================================

👤 FROM: {{from_name}}
📧 EMAIL: {{from_email}}
📝 SUBJECT: {{subject}}
📅 DATE: {{date}}

⚠️ IMPORTANT: Reply to this email to respond directly to {{from_email}}

===========================================
💬 MESSAGE:
===========================================

{{message}}

===========================================
📋 CONTACT SUMMARY:
===========================================
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

===========================================
🔄 TO REPLY:
===========================================
Click "Reply" button - your response will go to {{from_email}}

This message was sent from your portfolio contact form.
Portfolio Website - Mariely Ann Tolentino
```

## 🔧 Variables Used in Template

Make sure these variables are available in your template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email (same as from_email)
- `{{date}}` - Date/time of message

## ✅ Step-by-Step Setup

1. **Login to EmailJS Dashboard**
2. **Go to Email Templates**
3. **Edit your existing template or create new one**
4. **Copy the settings above EXACTLY**
5. **Paste the HTML template content**
6. **Save the template**
7. **Test by sending a message from your contact form**

## 🎯 What You'll See After Setup

### Email Subject:
```
📧 New Message from John Doe - Job Inquiry
```

### Email From:
```
Portfolio Contact Form <tolentinomariely09@gmail.com>
```

### Email Content:
```
📧 New Portfolio Contact
From marielyportfolio.com

👤 Message from: John Doe

Sender Name: John Doe
Email Address: john.doe@example.com
Subject: Job Inquiry

💡 To Reply: Click the "Reply" button above. Your response will go directly to john.doe@example.com

💬 Message:
Hi Mariely, I saw your portfolio and I'm interested in discussing a job opportunity...

🔄 REPLY INSTRUCTIONS:
Click "Reply" to respond directly to John Doe at john.doe@example.com
```

## 🚨 Common Mistakes to Avoid

1. **DON'T** put `{{from_email}}` in the "From Email" field
2. **DO** put `{{reply_to}}` in the "Reply To" field
3. **DON'T** forget to save the template after editing
4. **DO** test the setup by sending a real message

## 🔍 Testing Your Setup

1. **Send test message** from your contact form
2. **Check your email** - should see clear sender info
3. **Click Reply** - should address to sender's email, not yours
4. **Verify subject** includes sender's name

Kapag na-setup mo na ito correctly, makikita mo na agad kung sino ang nag-contact sa'yo at madali mo silang ma-reply! 🎉