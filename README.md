# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, TailwindCSS, and Framer Motion. Perfect for showcasing your skills, projects, and experience as a developer.

## 🚀 Features

- **Modern Design**: Clean, minimal design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Optimized for speed and accessibility
- **Easy Customization**: Well-structured code for easy updates

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Router** for navigation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization Guide

### 1. Personal Information

Update the following files with your personal information:

#### Hero Section (`src/components/Hero.tsx`)
- Replace "Your Name" with your actual name
- Update social media links (GitHub, LinkedIn, email)
- Modify the tagline if desired

#### About Section (`src/components/About.tsx`)
- Update the biography text
- Replace the profile photo placeholder
- Modify the key features/achievements

#### Contact Section (`src/components/Contact.tsx`)
- Update email, phone, and location
- Modify social media links

#### Footer (`src/components/Footer.tsx`)
- Update your name and contact information
- Modify social media links

### 2. Skills Section (`src/components/Skills.tsx`)

Update the skills arrays with your actual skills and proficiency levels:

```typescript
const skillCategories = [
  {
    title: "Full-Stack Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      // Add your skills here
    ]
  },
  // Add more categories
];
```

### 3. Projects Section (`src/components/Projects.tsx`)

Replace the placeholder projects with your actual projects:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    image: "project-image-url",
    category: "fullstack", // or "ai", "frontend"
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.com",
    featured: true
  },
  // Add more projects
];
```

### 4. Experience Section (`src/components/Experience.tsx`)

Update with your actual experience and education:

```typescript
const experiences = [
  {
    id: 1,
    type: 'education',
    title: 'Your Degree',
    organization: 'Your University',
    location: 'Your City, Country',
    period: '2020 - 2024',
    description: 'Your description',
    highlights: [
      'Achievement 1',
      'Achievement 2',
      // Add more highlights
    ]
  },
  // Add more experiences
];
```

### 5. Styling Customization

#### Colors
Update the primary color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize your color palette
  },
}
```

#### Typography
Modify font sizes and weights in the component classes or add custom fonts in `index.css`.

### 6. Contact Form Integration

The contact form is currently set up with a simulation. To integrate with a real email service:

1. **EmailJS** (Recommended for simple setup):
   ```bash
   npm install emailjs-com
   ```

2. **Formspree** (No backend required):
   - Sign up at formspree.io
   - Replace the form action with your Formspree endpoint

3. **Custom Backend**:
   - Set up your own API endpoint
   - Update the `handleSubmit` function in `Contact.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📝 File Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── Projects.tsx       # Projects section
│   ├── Experience.tsx     # Experience section
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer
├── App.tsx                # Main app component
├── index.tsx              # App entry point
└── index.css              # Global styles
```

## 🎯 Key Features Explained

### Dark Mode
- Automatically detects user preference
- Persists choice in localStorage
- Smooth transitions between themes

### Animations
- Scroll-triggered animations using Framer Motion
- Staggered animations for lists
- Hover effects and micro-interactions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts

### Performance
- Lazy loading for images
- Optimized animations
- Minimal bundle size

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy coding! 🚀**
