# 🛰️ Rohit Khati - Modern Portfolio

An interactive portfolio showcasing Earth Observation (EO) and AI expertise.

![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Deployed](https://img.shields.io/badge/Deployed-Live-success?style=for-the-badge)


## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ro-hit81/portfolio_react.git
   cd portfolio_react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm run start

# Export static files
npm run export
```

## 📁 Project Structure

```
portfolio_react/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navigation.tsx         # Smart navigation with sliding effects
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Landing section with animations
│   │   │   ├── About.tsx             # Personal introduction
│   │   │   ├── Skills.tsx            # Technical expertise showcase
│   │   │   ├── Blog.tsx              # Blog/articles section
│   │   │   ├── Projects.tsx          # Portfolio projects
│   │   │   ├── Awards.tsx            # Achievements and recognition
│   │   │   └── Contact.tsx           # Contact form with validation
│   │   └── SatelliteBackground.tsx   # Animated satellite constellation
│   ├── hooks/
│   │   └── useAdvancedScroll.ts      # Advanced scroll detection
│   ├── styles/
│   │   └── components/               # CSS Modules for each component
│   ├── data/
│   │   ├── projects.ts               # Project data
│   │   ├── skills.ts                 # Skills and technologies
│   │   └── awards.ts                 # Achievement data
│   ├── globals.css                   # Global styles and animations
│   ├── layout.tsx                    # Root layout with metadata
│   └── page.tsx                      # Main page composition
├── public/
│   ├── images/                       # Optimized project images
│   └── favicon.ico                   # Site icon
├── next.config.ts                    # Next.js configuration
└── tailwind.config.ts               # Tailwind CSS configuration
```

## 🎯 Key Components

### Satellite Background Animation
- **6 Satellite Pairs**: Different colors, sizes, and speeds
- **Crossing Trajectories**: Mathematical sinusoidal paths with intersection points
- **Performance Optimized**: Smooth 60fps animations with CSS transforms
- **Responsive Behavior**: Adapted complexity for mobile devices

### Navigation System
- **Smart Active Detection**: Automatically highlights current section
- **Smooth Scrolling**: Enhanced scroll behavior with momentum
- **Visual Feedback**: Gradient underlines with sliding animations
- **Mobile Responsive**: Collapsible menu for smaller screens

### Contact Integration
- **Web3Forms**: Secure form submission without backend
- **Validation**: Client-side validation with user feedback
- **Success Animation**: Beautiful confirmation animations
- **Anti-spam**: Built-in protection and validation

## 🛠️ Technologies Used

### Frontend
- **Next.js 15.4.4**: React framework with App Router
- **TypeScript**: Type-safe development
- **CSS Modules**: Component-scoped styling
- **Lucide React**: Beautiful, customizable icons

### Styling & Animation
- **CSS Custom Properties**: Dynamic theming capabilities
- **CSS Transforms**: Hardware-accelerated animations
- **Backdrop Filters**: Modern glass morphism effects
- **Responsive Design**: Mobile-first approach

### Development Tools
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Git Hooks**: Pre-commit quality checks

## 🌟 Customization

### Adding New Projects
```typescript
// app/data/projects.ts
export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "/images/project.jpg",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    featured: true
  }
]
```

### Modifying Satellite Animation
```css
/* app/styles/components/SatelliteBackground.module.css */
.satelliteIcon {
  opacity: 0.25; /* Adjust transparency */
}

/* Modify animation duration */
.pair1A {
  animation: pair1A 45s linear infinite;
}
```

### Updating Contact Form
```typescript
// Replace Web3Forms access key in Contact.tsx
const accessKey = "YOUR_WEB3FORMS_KEY";
```

## 🚦 Performance Features

- **Optimized Images**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Purged unused styles in production
- **Animation Performance**: GPU-accelerated transforms
- **Lighthouse Score**: 95+ performance rating

## 📱 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions  
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile**: iOS Safari, Chrome Mobile

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Rohit Khati** - Earth Observation & AI Expert
- Specializing in satellite imagery analysis and machine learning
- Passionate about remote sensing applications and geospatial technologies
- Building innovative solutions for environmental monitoring and analysis

## 🔗 Links

- **Portfolio**: [Live Demo](https://www.rohit81.com.np/)
- **GitHub**: [@ro-hit81](https://github.com/ro-hit81)
- **LinkedIn**: [rhtkht](https://linkedin.com/in/rhtkht/)

---

Built with ❤️ and ☕ by Rohit Khati | © 2025
