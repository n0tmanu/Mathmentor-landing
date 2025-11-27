# MathMentor - AI-Powered Math Learning Platform

A beautifully crafted landing page for MathMentor, an AI-powered mathematics learning platform designed with a fantasy/medieval theme. Built with React, TypeScript, Material-UI, and Vite.

## ✨ Features

- **🎨 Fantasy Theme**: Medieval-inspired design with custom fonts and color schemes
- **📱 Responsive Design**: Optimized for all device sizes
- **🧙 Character Animations**: Floating wizard, troll, and elf illustrations
- **🎯 Interactive Features**: Color-changing icons and smooth scrolling navigation
- **💰 Pricing Plans**: Flexible subscription options for students, tutors, and parents
- **📧 Contact Integration**: Social media links and newsletter signup
- **🌐 Multi-role Support**: Dedicated features for students, tutors, and parents

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/n0tmanu/Mathmentor-landing.git
cd Mathmentor-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to see the application.

## 🏗️ Production Deployment

### Build Process

1. Build the application:
```bash
npm run build
```

This creates optimized production files in the `dist/` directory.

### Local Production Server (Port 5005, Localhost Only)

To run the production build on port 5005 with access restricted to localhost only:

1. **Using the included serve script:**

   The project includes a custom Express server (`serve.js`) optimized for production deployment:

   ```bash
   # Build the application first
   npm run build

   # Start production server on port 5005 (localhost only)
   HOST=127.0.0.1 PORT=5005 npm run serve
   ```

   **Expected Output:**
   ```
   🚀 MathMentor server running at http://127.0.0.1:5005
   🔒 Access restricted to: 127.0.0.1
   ✅ Server is secured to localhost only
   📁 Serving static files from: /path/to/Mathmentor-landing/dist
   ```

2. **Manual setup with Express:**

   If you prefer to set up your own server:

   ```javascript
   // server.js
   const express = require('express');
   const path = require('path');
   const app = express();

   // Serve static files from dist directory
   app.use(express.static(path.join(__dirname, 'dist')));

   // Handle client-side routing - avoid path-to-regexp issues
   app.use((req, res, next) => {
     // Skip API routes and static assets
     if (req.path.startsWith('/api') ||
         req.path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
       return next();
     }
     // Serve React app for all other routes
     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
   });

   // Listen only on localhost (127.0.0.1) port 5005
   app.listen(5005, '127.0.0.1', () => {
     console.log('🚀 MathMentor server running at http://127.0.0.1:5005');
     console.log('✅ Server is secured to localhost only');
   });
   ```

   Then run:
   ```bash
   npm install express
   node server.js
   ```

### Security Notes

- The server is configured to only accept connections from `127.0.0.1` (localhost)
- Port 5005 is used for internal/production access
- No external access is allowed with this configuration
- Compatible with various Express/path-to-regexp versions

### Environment Variables

For production deployment, you can set:

```bash
HOST=127.0.0.1    # Restrict to localhost
PORT=5005         # Custom port
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build (requires HOST and PORT env vars)
- `npm test` - Run tests

## 🏛️ Architecture

### Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v6
- **Styling**: Emotion (CSS-in-JS)
- **Font Management**: Custom web fonts with @font-face
- **Icons**: Material-UI Icons + Custom SVGs
- **Deployment**: Express.js for production serving

### Project Structure

```
Mathmentor-landing/
├── public/                 # Static assets and fonts
├── src/                    # Source code
├── components/             # React components
├── shared-theme/           # Theme configuration
├── dist/                   # Production build output
├── serve.js               # Production server
└── package.json           # Dependencies and scripts
```

### Key Components

- **Hero**: Main landing section with castle background and character animations
- **Features**: Interactive role-based feature showcase (Student/Tutor/Parent)
- **Testimonials**: Community testimonials with custom avatars
- **Highlights**: Key platform benefits with themed icons
- **Pricing**: Subscription plans with registration links
- **FAQ**: Comprehensive question-and-answer section
- **Footer**: Contact information and social media links

## 🎨 Customization

### Theme Configuration

The application uses a custom Gruvbox-inspired color palette defined in `shared-theme/themePrimitives.ts`. Colors can be modified there.

### Fonts

Custom fonts are loaded via @font-face declarations in `index.html`:
- **Runewood**: Used for section titles
- **RockThorn**: Used for body text
- **Fallback**: Inter and system fonts

### Assets

All images, fonts, and SVGs are located in the `public/` directory:
- Background images: `castle.jpg`, `room1.png`, `room2.png`, `room3.png`
- Character illustrations: `wizard1.png`, `troll1.png`, `elf1.png`
- UI elements: `student.svg`, `tutor.svg`, `parent.svg`
- Custom fonts: Multiple TTF files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is private and proprietary to MathMentor.

## 📞 Support

For support or questions, please contact the development team.

---

**MathMentor** - Making mathematics accessible and enjoyable for everyone! 🧮✨
