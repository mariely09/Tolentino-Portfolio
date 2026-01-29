# Mariely Ann Tolentino - Portfolio Website

A modern, responsive portfolio website showcasing skills, projects, and achievements in Information Technology.

## 🌟 Features

### ✨ Modern Design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Smooth Animations**: Engaging hover effects and transitions
- **Professional Typography**: Clean, readable fonts with proper hierarchy

### 📧 Functional Contact Form
- **EmailJS Integration**: Send emails directly from the website
- **Real-time Validation**: Instant feedback on form inputs
- **Status Messages**: Loading, success, and error states
- **Mobile Optimized**: Touch-friendly form elements
- **Spam Protection**: Built-in rate limiting

### 🎨 Interactive Elements
- **Skill Cards**: Flip animations revealing technical and soft skills
- **Project Gallery**: Clickable project images with modal views
- **Certificate Showcase**: Professional certifications display
- **Social Links**: Direct connections to social media profiles
- **Resume Download**: Easy access to downloadable resume

### 🚀 Performance Optimized
- **Fast Loading**: Optimized images and efficient CSS
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: Screen reader friendly with proper ARIA labels
- **Cross-browser**: Compatible with all modern browsers

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript file
├── img/                    # Images and assets
│   ├── mariely.png         # Profile image
│   ├── tolentino.png       # About section image
│   ├── *.png               # Certificate images
│   └── *.jpg               # Project screenshots
├── emailjs-setup/          # EmailJS configuration files
│   ├── EMAILJS_SETUP.md    # Setup instructions
│   ├── email-template.html # Email template
│   └── emailjs-config.js   # Configuration template
└── docs/                   # Documentation
    ├── CONTACT_FORM_CHECKLIST.md
    └── IMPLEMENTATION_SUMMARY.md
```

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Poppins)

### Services
- **EmailJS**: Contact form email delivery
- **GitHub Pages**: Hosting (optional)
- **CDN**: Fast asset delivery

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone [repository-url]
cd portfolio
```

### 2. Open in Browser
Simply open `index.html` in your web browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

### 3. Configure Contact Form
Follow the instructions in `emailjs-setup/EMAILJS_SETUP.md` to set up the contact form.

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly from the website. To set it up:

1. **Create EmailJS Account**: Sign up at [emailjs.com](https://www.emailjs.com/)
2. **Connect Email Service**: Link your Gmail account
3. **Create Email Template**: Use the provided template
4. **Get Credentials**: Copy Public Key, Service ID, and Template ID
5. **Update Code**: Replace placeholders in `script.js`

Detailed instructions are available in `emailjs-setup/EMAILJS_SETUP.md`.

## 🎨 Customization

### Colors
The website uses a blue-based color scheme. To customize:

```css
:root {
  --primary-color: #4a90e2;
  --secondary-color: #87baf5;
  --accent-color: #ffd700;
  --text-color: #333;
  --bg-color: #f8f9fa;
}
```

### Content
Update the following sections in `index.html`:
- Personal information in the About section
- Skills in the Skills section
- Projects in the Projects section
- Education timeline
- Certificate images and details

### Images
Replace images in the `img/` folder:
- `mariely.png`: Profile image (recommended: 400x400px)
- `tolentino.png`: About section image
- Project screenshots
- Certificate images

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌙 Dark Mode

Toggle between light and dark themes using the moon/sun icon in the navigation. Theme preference is saved in localStorage.

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Focus indicators

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings
3. Enable GitHub Pages
4. Select source branch (main/master)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect GitHub repository to Netlify
2. Set build command: (none needed for static site)
3. Set publish directory: `/`
4. Deploy automatically on git push

### Vercel
1. Import GitHub repository to Vercel
2. Configure as static site
3. Deploy with automatic updates

## 📞 Support

For questions or issues:
- **Email**: tolentinomariely09@gmail.com
- **LinkedIn**: [Mariely Ann Tolentino](https://www.linkedin.com/in/mariely-ann-tolentino-434a093a6/)
- **GitHub**: [mariely09](https://github.com/mariely09)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Font Awesome** for icons
- **EmailJS** for contact form functionality
- **Google Fonts** for typography
- **Unsplash** for inspiration (if any stock images used)

## 📝 Changelog

### Version 1.0.0 (Current)
- Initial release
- Responsive design implementation
- Dark/light mode toggle
- EmailJS contact form integration
- Interactive skill cards
- Project gallery with modals
- Certificate showcase
- Social media integration
- Resume download functionality

---

**Built with ❤️ by Mariely Ann Tolentino**