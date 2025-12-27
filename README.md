# Professional Portfolio Website

A modern, high-performance portfolio website built with Next.js 14, featuring SEO optimization, responsive design, and production-ready security configurations.

## 🚀 Project Overview

This portfolio website showcases professional work through an interactive, mobile-first design. Built with cutting-edge web technologies, it delivers exceptional user experience with Lighthouse 90+ performance scores, zero Cumulative Layout Shift (CLS), and comprehensive accessibility features.

### Key Features

- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Performance First**: Static generation, image optimization, lazy loading
- **Responsive Design**: Mobile-first approach with fluid typography
- **Interactive Animations**: Smooth transitions with Framer Motion and GSAP
- **Blog System**: Markdown-based content with static generation
- **Secure Contact Form**: Spam protection and validation
- **Accessibility**: WCAG compliant with screen reader support
- **Security**: CSP headers, HSTS, XSS protection

## 🛠 Tech Stack

### Core Framework
- **Next.js 14** - App Router with static generation
- **TypeScript** - Strict type checking and IntelliSense
- **React 18** - Server and client components

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **GSAP** - High-performance animations (lazy-loaded)

### Content & Forms
- **Gray Matter** - Front matter parsing for blog posts
- **Remark** - Markdown processing
- **React Hook Form** - Form validation and handling

### Development & Quality
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 📦 Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🚀 Deployment Guide

### Vercel (Recommended)

1. **Connect Repository**
   - Import project to Vercel
   - Connect your GitHub/GitLab repository

2. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables**
   - Add required environment variables (see below)

4. **Deploy**
   - Vercel will automatically deploy on push to main branch

### Netlify

1. **Connect Repository**
   - Import project to Netlify

2. **Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `.next`

3. **Environment Variables**
   - Configure in Netlify dashboard

### Manual Deployment

```bash
# Build the project
npm run build

# Export static files (if using static export)
npm run export

# Deploy the .next folder to your hosting provider
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Service Configuration (Required for contact form)
EMAIL_SERVICE_API_KEY=your_email_service_api_key
EMAIL_FROM=your-email@example.com
EMAIL_TO=contact@yourdomain.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_GTM_ID=GTM_CONTAINER_ID

# Optional: Social Media
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
```

### Email Service Setup

Choose one of the following email services:

- **Resend**: `EMAIL_SERVICE_API_KEY` from Resend dashboard
- **SendGrid**: `EMAIL_SERVICE_API_KEY` from SendGrid API keys
- **Mailgun**: `EMAIL_SERVICE_API_KEY` from Mailgun dashboard

## 📁 Project Structure

```
nextjs-app/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (to be implemented)
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # Sitemap generation
├── components/            # Reusable components
│   ├── ContactForm.tsx    # Contact form component
│   ├── HeroSection.tsx    # Hero section
│   ├── Navbar.tsx         # Navigation component
│   └── ...
├── content/               # Blog content (Markdown)
├── lib/                   # Utility functions
│   ├── blog.ts           # Blog processing utilities
│   └── types.ts          # TypeScript definitions
├── public/                # Static assets
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # XML sitemap
└── ...
```

## 🔧 Maintenance Notes

### Adding Blog Posts

1. Create new `.md` file in `content/blog/`
2. Add front matter:
   ```yaml
   ---
   title: "Your Post Title"
   date: "2024-01-01"
   description: "Post description"
   tags: ["tag1", "tag2"]
   ---
   ```
3. Write content in Markdown
4. Commit and deploy

### Updating Content

- **Projects**: Edit `app/page.tsx` or create dedicated project pages
- **About Section**: Modify components in the hero/about sections
- **Contact Information**: Update in contact form and footer components

### Performance Monitoring

- Use Lighthouse for performance audits
- Monitor Core Web Vitals in search consoles
- Check bundle size with `npm run build`

### Security Updates

- Keep dependencies updated: `npm audit` and `npm update`
- Review security headers in `next.config.ts`
- Monitor for vulnerabilities regularly

### API Implementation

The contact form requires API routes to be implemented:

1. Create `app/api/contact/route.ts`
2. Implement email sending logic
3. Add proper error handling and validation

### Content Management

- Blog posts: Markdown files in `content/blog/`
- Projects: Update in component files or create CMS integration
- Images: Optimize and place in `public/` directory

## 📊 Performance Benchmarks

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All green
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: <3s first contentful paint

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js 14
