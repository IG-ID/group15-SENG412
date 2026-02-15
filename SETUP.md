# Setup Guide for Group 15 Portal

This guide will help you set up and run the Group 15 Portal on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (version 16 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

## Quick Start

### 1. Install Dependencies

Open your terminal in the `group15-portal` directory and run:

```bash
npm install
```

This will install all required packages:
- React and React DOM
- React Router for navigation
- Framer Motion for animations
- Tailwind CSS for styling
- Vite for fast development

**Expected time**: 1-3 minutes (depending on internet speed)

### 2. Start Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 3. Open in Browser

- Click the local URL (usually `http://localhost:5173`)
- Or manually navigate to it in your browser
- The portal should load immediately

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port (5174, 5175, etc.). Check the terminal output for the actual port.

### Dependencies Not Installing

If `npm install` fails:
1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again
3. If still failing, try `npm cache clean --force` then `npm install`

### Page Not Loading Correctly

1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check browser console (F12) for errors

### Styles Not Applying

If Tailwind CSS styles aren't working:
1. Ensure `postcss.config.js` and `tailwind.config.js` exist
2. Restart the development server
3. Check that `index.css` imports Tailwind directives

## Development Tips

### Hot Module Replacement (HMR)

Vite supports HMR, meaning changes you make to files will instantly appear in the browser without a full page reload. Just save your file and watch the changes appear!

### Editing Member Data

To customize the member information:
1. Open `src/pages/Home.jsx`
2. Find the `members` array (around line 10)
3. Edit the existing entries or add new ones
4. Save the file - changes appear instantly

### Changing Colors

To update the color scheme:
1. Open `tailwind.config.js`
2. Edit the colors in the `extend` section
3. Save and see changes immediately

### Adding New Pages

To add a new page:
1. Create a new file in `src/pages/` (e.g., `NewPage.jsx`)
2. Copy the structure from an existing placeholder page
3. Import and add the route in `src/App.jsx`
4. Add a link to the Navbar in `src/components/Navbar.jsx`

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

This runs a local server to preview your production build.

## Next Steps

1. **Customize Member Data**: Update the sample data in `Home.jsx`
2. **Add Images**: Add member photos (update the `avatar` field)
3. **Implement Features**: Build out the placeholder pages
4. **Deploy**: Host on Vercel, Netlify, or GitHub Pages

## Need Help?

- Check the main `README.md` for detailed documentation
- Review component files - they include JSDoc comments
- Refer to official docs:
  - [React](https://react.dev)
  - [Vite](https://vitejs.dev)
  - [Tailwind CSS](https://tailwindcss.com)
  - [Framer Motion](https://www.framer.com/motion)
  - [React Router](https://reactrouter.com)

Happy coding! 🚀
