# React DevOps Portfolio - Quick Start

Get your React-based DevOps portfolio running in minutes!

## 🚀 Quick Start (3 Steps)

### 1. Install Dependencies
```bash
cd my-portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit `http://localhost:3000`

✅ **Your portfolio is now running!**

---

## 📝 Customize in 5 Minutes

### 1. Update Your Name & Info

Edit `src/pages/Home.jsx`:
- Change hero title "DevOps Engineer" to your name
- Update hero subtitle
- Update about section

### 2. Update About Section

Edit `src/pages/About.jsx`:
- Change background info
- Update experience timeline
- Add your certifications

### 3. Add Your Projects

Edit `src/pages/Projects.jsx`:
- Modify the `projectsData` array
- Add your real projects
- Update technologies

### 4. Update Contact Info

Edit `src/pages/Contact.jsx`:
- Change email address
- Update phone number
- Update location
- Add social media links

### 5. Change Colors

Edit `src/index.css`:
- Find `:root { --primary-color: #0052cc; }`
- Change to your preferred colors

---

## 🎨 Pages Overview

### Home (`/`)
- Hero section with CTA buttons
- About section with stats
- Skills grid (6 categories)
- Featured projects (3 cards)
- Call-to-action section

### About (`/about`)
- Background information
- What you do
- Focus areas
- Statistics sidebar
- Technology stack
- Experience timeline
- Certifications

### Projects (`/projects`)
- Full project showcase
- 6 detailed project cards
- Client, duration, outcomes
- Technology tags for each project

### Contact (`/contact`)
- Contact form with validation
- Email, phone, location info
- Social media links
- Response time info

---

## 🔀 Routes

All routing is done with React Router. Pages are:
- `/` → Home page
- `/about` → About page
- `/projects` → Projects page
- `/contact` → Contact page

Navigation automatically updates based on current route.

---

## 📦 Build for Production

Build the static site:
```bash
npm run build
```

This creates a `dist/` folder with optimized files ready to deploy.

Preview the build:
```bash
npm run preview
```

---

## 🌐 Deploy Options

### Vercel (Fastest)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir dist
```

### GitHub Pages
1. Run `npm run build`
2. Upload `dist/` folder to GitHub Pages

### Any Host
Upload the `dist/` folder to any static hosting.

---

## 📚 File Structure

```
src/
├── App.jsx                 # Main app with routing
├── App.css
├── index.jsx              # Entry point
├── index.css              # Global styles
├── components/
│   ├── Navigation.jsx     # Navigation bar
│   └── Footer.jsx         # Footer
└── pages/
    ├── Home.jsx           # Home page
    ├── About.jsx          # About page
    ├── Projects.jsx       # Projects page
    └── Contact.jsx        # Contact page
```

---

## 🛠️ Available Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run serve     # Serve with Python
```

---

## 🎯 Next Steps

1. ✅ Run `npm install && npm run dev`
2. ✅ Customize content in each page
3. ✅ Test routing by clicking navigation
4. ✅ Build with `npm run build`
5. ✅ Deploy to your hosting

---

## 💡 Tips

- Use CSS variables in `src/index.css` to change theme colors
- All pages are in `src/pages/` folder
- Styling is in `*.css` files next to components
- React Router handles all navigation
- No backend needed - it's a static site!

---

## 🆘 Troubleshooting

### Port 3000 already in use
Edit `vite.config.js` and change port to 3001

### Node modules error
```bash
rm -rf node_modules
npm install
```

### Changes not showing
Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

---

**Ready to deploy your portfolio?** 🚀

Happy coding!
