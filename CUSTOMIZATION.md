# Customization Guide

This guide shows you exactly how to customize the Group 15 Portal for your specific needs.

## Quick Customizations

### 1. Change Group Name/Number

**File**: `src/components/Navbar.jsx`

**Find** (line ~22):
```javascript
Group <span className="text-gray-400">15</span>
```

**Change to**:
```javascript
Group <span className="text-gray-400">16</span>  // Your group number
// or
<span className="text-blue-600">Team</span> Alpha  // Custom name
```

---

### 2. Update Member Information

**File**: `src/pages/Home.jsx`

**Find** (line ~10):
```javascript
const members = [
  {
    name: "Ada Lovelace",
    matricNumber: "MAT/2023/001",
    bio: "Frontend Developer...",
    avatar: "",
    courses: [...]
  },
  // ... more members
];
```

**Customize**:

```javascript
const members = [
  {
    name: "Your Name",                    // Required
    matricNumber: "YOUR/MATRIC/NUMBER",   // Required
    bio: "Your short bio here",           // Required
    avatar: "",                            // Optional: image URL or leave empty
    courses: [                             // Optional: can be empty array
      { 
        code: "CSC301",                    // Course code
        title: "Software Engineering"      // Course title
      },
      { code: "CSC302", title: "Database Systems" },
      // Add as many courses as needed
    ]
  },
  // Duplicate this structure for each member (up to 11 members)
];
```

**Tips**:
- Keep bio under 80 characters for best display
- Leave `avatar: ""` empty to show initials
- Add image URL like `avatar: "/images/member1.jpg"` for photos
- You can have 1-20+ members (grid adjusts automatically)

---

### 3. Add Member Photos

**Option A: Local Images**

1. Create folder: `src/assets/images/`
2. Add images: `member1.jpg`, `member2.jpg`, etc.
3. Update member data:

```javascript
import member1 from '../assets/images/member1.jpg';
import member2 from '../assets/images/member2.jpg';

const members = [
  {
    name: "John Doe",
    avatar: member1,  // Use imported image
    // ... rest of data
  },
  // ...
];
```

**Option B: External URLs**

```javascript
const members = [
  {
    name: "John Doe",
    avatar: "https://i.imgur.com/abc123.jpg",  // Direct URL
    // ... rest of data
  },
];
```

**Image Requirements**:
- Square format (1:1 ratio) works best
- Minimum: 200×200px
- Maximum: 800×800px (will be resized)
- Formats: JPG, PNG, WebP

---

### 4. Change Color Scheme

**File**: `tailwind.config.js`

**Find** (line ~10):
```javascript
colors: {
  'primary': '#0A0A0A',
  'secondary': '#F8F8F8',
  'accent': '#E5E5E5',
},
```

**Customize**:

```javascript
colors: {
  'primary': '#1a1a2e',      // Dark blue instead of black
  'secondary': '#f5f5f5',    // Slightly different white
  'accent': '#3498db',       // Blue accent
},
```

**Popular Color Schemes**:

**Professional Blue**:
```javascript
colors: {
  'primary': '#1a365d',
  'secondary': '#f7fafc',
  'accent': '#2b6cb0',
}
```

**Modern Purple**:
```javascript
colors: {
  'primary': '#2d3748',
  'secondary': '#f7fafc',
  'accent': '#805ad5',
}
```

**Warm Orange**:
```javascript
colors: {
  'primary': '#1a202c',
  'secondary': '#fffff0',
  'accent': '#dd6b20',
}
```

---

### 5. Change Fonts

**File**: `index.html`

**Find** (line ~10):
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**Replace with** (example - Poppins + Open Sans):
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**Then update** `tailwind.config.js`:
```javascript
fontFamily: {
  'display': ['Poppins', 'sans-serif'],
  'body': ['Open Sans', 'system-ui', 'sans-serif'],
},
```

**Popular Font Combinations**:
- **Modern**: Montserrat + Lato
- **Classic**: Playfair Display + Source Sans Pro
- **Tech**: Space Grotesk + IBM Plex Sans
- **Elegant**: Cormorant + Lato
- **Playful**: Nunito + Work Sans

---

### 6. Modify Page Header

**File**: `src/pages/Home.jsx`

**Find** (line ~168):
```javascript
<h1 className="text-5xl font-display font-bold mb-4 tracking-tight">
  Our Team
</h1>
<p className="text-gray-600 text-lg max-w-2xl mx-auto">
  Meet the talented members of Group 15...
</p>
```

**Customize**:
```javascript
<h1 className="text-5xl font-display font-bold mb-4 tracking-tight">
  Meet Group 15  // Your custom title
</h1>
<p className="text-gray-600 text-lg max-w-2xl mx-auto">
  Your custom description here...
</p>
```

---

### 7. Update Navigation Links

**File**: `src/components/Navbar.jsx`

**Find** (line ~12):
```javascript
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/payroll', label: 'Payroll' },
  { path: '/gpa', label: 'GPA' },
  { path: '/personal-details', label: 'Personal Details' },
  { path: '/courses', label: 'Courses' },
];
```

**Customize**:
```javascript
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/payroll', label: 'Payroll Calculator' },  // Longer label
  { path: '/gpa', label: 'Grades' },                  // Shorter label
  { path: '/about', label: 'About Us' },              // New page
  { path: '/contact', label: 'Contact' },             // New page
];
```

**Note**: If you add new links, you'll need to:
1. Create the corresponding page component
2. Add the route in `src/App.jsx`

---

### 8. Adjust Card Hover Behavior

**File**: `src/components/MemberCard.jsx`

**Modify scale amount** (line ~40):
```javascript
whileHover={{ scale: 1.02 }}  // Change to 1.03, 1.05, etc.
```

**Change animation speed** (line ~41):
```javascript
transition={{ duration: 0.3 }}  // Change to 0.2, 0.5, etc.
```

**Modify overlay appearance** (line ~78):
```javascript
className="absolute inset-0 bg-primary/95 backdrop-blur-sm"
// Change to:
className="absolute inset-0 bg-blue-900/90 backdrop-blur-lg"
```

---

### 9. Grid Layout Adjustments

**File**: `src/pages/Home.jsx`

**Find** (line ~187):
```javascript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

**Customize**:

**4 columns on large screens**:
```javascript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
```

**Different gaps**:
```javascript
gap-4   // Smaller gap (16px)
gap-8   // Larger gap (32px)
gap-10  // Even larger (40px)
```

**Different mobile behavior**:
```javascript
// 2 columns on mobile
className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
```

---

## Advanced Customizations

### 10. Add Member Filter/Search

**File**: Create `src/components/SearchBar.jsx`

```javascript
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="mb-8 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search members..."
        value={query}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
};

export default SearchBar;
```

**Update** `src/pages/Home.jsx`:

```javascript
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // ... existing members data ...

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.bio.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      {/* ... header ... */}
      <SearchBar onSearch={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};
```

---

### 11. Add Dark Mode Toggle

**File**: `tailwind.config.js`

Add dark mode support:
```javascript
module.exports = {
  darkMode: 'class',  // Add this line
  // ... rest of config
}
```

**Create** `src/components/ThemeToggle.jsx`:

```javascript
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
    >
      {isDark ? '☀️' : '🌙'}
    </motion.button>
  );
};

export default ThemeToggle;
```

Add to Navbar and update styles accordingly.

---

### 12. Change Animation Timing

**File**: `src/components/MemberCard.jsx`

**Entrance animation**:
```javascript
initial={{ opacity: 0, y: 20 }}      // y: change distance
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}       // Change speed
```

**File**: `src/pages/Home.jsx`

**Stagger timing**:
```javascript
transition: {
  staggerChildren: 0.1  // Change from 0.1 to 0.05, 0.15, etc.
}
```

---

## Common Issues & Solutions

### Issue: Cards not showing courses on hover

**Solution**: Make sure each member object has a `courses` array:
```javascript
courses: [
  { code: "CSC301", title: "Software Engineering" }
]
```

### Issue: Images not loading

**Solutions**:
1. Check file path is correct
2. Ensure image is in `src/assets/` or use full URL
3. Verify image file extension matches

### Issue: Colors not applying

**Solution**: 
1. Restart dev server after changing `tailwind.config.js`
2. Clear browser cache
3. Make sure using custom color names correctly: `text-primary` not `text-#0A0A0A`

### Issue: Fonts not changing

**Solution**:
1. Verify Google Fonts link in `index.html`
2. Update both `tailwind.config.js` AND font link
3. Restart dev server

---

## Testing Your Changes

After making changes:

1. **Save the file** (Ctrl+S / Cmd+S)
2. **Check browser** - should auto-reload
3. **Test hover states** - hover over cards
4. **Test navigation** - click all links
5. **Test responsive** - resize browser window
6. **Check console** - F12, look for errors

---

## Need More Help?

- Check `ARCHITECTURE.md` for component details
- Review `DESIGN.md` for styling information  
- See `SETUP.md` for installation issues
- Read `README.md` for general documentation

---

**Pro Tip**: Make changes one at a time and test each change before moving on. This makes it easier to identify what broke if something goes wrong!
