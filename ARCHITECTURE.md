# Component Architecture

This document describes the architecture and design patterns used in the Group 15 Portal.

## Architecture Overview

```
App (Router)
├── Navbar (Global Navigation)
└── Routes
    ├── Home (Member Grid)
    │   └── MemberCard × 11 (Individual Members)
    ├── Payroll (Placeholder)
    ├── GPA (Placeholder)
    ├── PersonalDetails (Placeholder)
    └── CoursesRegistered (Placeholder)
```

## Component Breakdown

### 1. App.jsx
**Purpose**: Root application component that configures routing and layout.

**Responsibilities**:
- Set up React Router with BrowserRouter
- Define all application routes
- Render global Navbar
- Provide consistent layout wrapper

**Key Features**:
- Centralized route configuration
- Persistent navigation across pages
- Clean separation of concerns

**Code Pattern**:
```javascript
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    {/* Other routes */}
  </Routes>
</Router>
```

---

### 2. Navbar.jsx
**Purpose**: Global navigation component with responsive design.

**Props**: None (uses React Router's `useLocation` hook)

**State**:
- `location` - Current route location from React Router

**Responsibilities**:
- Display "Group 15" logo
- Render navigation links
- Highlight active page
- Provide smooth hover animations

**Animation Details**:
- Logo scales up on hover (1.05x)
- Links shift up 2px on hover
- Active indicator uses `layoutId` for smooth sliding effect
- Sticky positioning (always visible)

**Styling Philosophy**:
- Clean white background with subtle shadow
- Minimal border for visual separation
- Generous padding for breathing room

---

### 3. MemberCard.jsx
**Purpose**: Reusable card component displaying member information with interactive hover overlay.

**Props**:
```javascript
{
  name: string,        // Member's full name
  matricNumber: string, // Matriculation number
  bio: string,         // Short biography
  avatar: string,      // Image URL or empty for initials
  courses: Array<{     // Array of course objects
    code: string,
    title: string
  }>
}
```

**State**:
- `isHovered` - Boolean tracking hover state

**Key Functions**:

#### `getInitials(name)`
Extracts initials from full name for avatar fallback.
```javascript
"John Doe" → "JD"
"Ada Lovelace" → "AL"
```

**Responsibilities**:
- Display member information in card format
- Show circular avatar (image or initials)
- Reveal course details on hover
- Maintain responsive layout

**Animation Breakdown**:

1. **Initial Load**:
   - Fade in: opacity 0 → 1
   - Slide up: y 20px → 0
   - Staggered across grid

2. **Hover State**:
   - Card scale: 1 → 1.02
   - Shadow: sm → xl
   - Overlay fade in with backdrop blur

3. **Course Details**:
   - Overlay slides in from transparent
   - Each course item animates with delay
   - Staggered by 50ms per item

**Styling Decisions**:
- Rounded corners (2xl) for modern feel
- Subtle shadow with dramatic hover shadow
- White background for contrast
- Circular avatar with gradient fallback
- Dark overlay (95% opacity) for readability

---

### 4. Home.jsx
**Purpose**: Main landing page displaying grid of all group members.

**State**:
- `members` - Array of member data objects

**Data Structure**:
```javascript
{
  name: string,
  matricNumber: string,
  bio: string,
  avatar: string,
  courses: [
    { code: string, title: string }
  ]
}
```

**Responsibilities**:
- Render page header with title and description
- Display member grid (responsive columns)
- Pass data to MemberCard components
- Orchestrate staggered animations

**Grid Behavior**:
- Mobile (< 768px): 1 column
- Tablet (768-1024px): 2 columns
- Desktop (> 1024px): 3 columns
- 24px gap between cards

**Animation Strategy**:
- Container uses `staggerChildren` (100ms delay)
- Each card animates independently
- Creates waterfall effect on page load

---

### 5. Placeholder Pages
**Components**: Payroll, GPA, PersonalDetails, CoursesRegistered

**Shared Pattern**:
All placeholder pages follow identical structure for consistency.

**Layout**:
- Centered content (vertical and horizontal)
- Min-height: 100vh
- Ample padding on all sides

**Content Structure**:
1. Large display heading (6xl)
2. Descriptive subtitle
3. "Back to Home" button

**Animation**:
- Initial scale: 0.95
- Fade in and scale to 1.0
- Button hover/tap animations

**Purpose**:
- Provide navigable structure
- Maintain consistent UX
- Easy to replace with actual functionality

---

## Design Patterns

### 1. Composition Pattern
Components are composed rather than inherited:
```javascript
<Home>
  <MemberCard /> × 11
</Home>
```

### 2. Props Down, Events Up
- Parent components pass data down via props
- Child components communicate up via callbacks (if needed)

### 3. Single Responsibility
Each component has one clear purpose:
- Navbar: Navigation only
- MemberCard: Display single member
- Home: Orchestrate member display

### 4. Separation of Concerns
- **Components**: UI structure and behavior
- **Pages**: Content and layout
- **CSS**: Styling (via Tailwind)
- **Animation**: Motion logic (via Framer Motion)

## State Management

### Current Approach
- Local component state using `useState`
- URL state via React Router
- No global state management needed (yet)

### When to Add Global State
If you need to add:
- User authentication
- Shopping cart
- Global filters
- Cross-component data sharing

Consider: Context API, Zustand, or Redux

## Animation Philosophy

### Principles
1. **Purposeful**: Animations guide attention
2. **Smooth**: 60fps performance target
3. **Consistent**: Similar elements behave similarly
4. **Subtle**: Enhance, don't distract

### Performance
- Use Framer Motion's optimized animations
- Leverage GPU acceleration (transform, opacity)
- Avoid animating layout properties
- Use `AnimatePresence` for exit animations

## Styling Strategy

### Tailwind CSS Utility-First
Benefits:
- Rapid development
- Consistent spacing/colors
- No CSS file management
- Easy to understand at a glance

### Custom Configuration
Extended in `tailwind.config.js`:
- Custom fonts (Outfit, Inter)
- Brand colors (primary, secondary, accent)
- Additional utilities as needed

### Best Practices
- Use semantic class names for complex components
- Group related utilities
- Extract repeated patterns to components
- Use `@apply` sparingly (only for true duplicates)

## File Organization

### Why This Structure?
```
src/
├── components/   # Reusable UI pieces
├── pages/        # Route-level components
├── assets/       # Images, fonts, static files
└── ...
```

**Benefits**:
- Clear mental model
- Easy to find components
- Scales with project growth
- Follows React community standards

### Naming Conventions
- **Files**: PascalCase for components (e.g., `MemberCard.jsx`)
- **Folders**: kebab-case for utility folders
- **Exports**: Named exports preferred for clarity

## Future Enhancements

### Potential Features
1. **Search/Filter**: Filter members by name or course
2. **Dark Mode**: Toggle between light/dark themes
3. **Sorting**: Sort members by name or matriculation number
4. **Member Detail View**: Dedicated page for each member
5. **Data Persistence**: Connect to backend API
6. **Authentication**: Secure login for members only

### Scalability Considerations
- Consider code splitting for large pages
- Implement lazy loading for images
- Add error boundaries for graceful failures
- Implement loading states for async operations

## Testing Strategy

### Recommended Approach
1. **Component Tests**: Test individual components in isolation
2. **Integration Tests**: Test page-level interactions
3. **E2E Tests**: Test critical user flows

### Tools to Consider
- **Vitest**: Fast unit testing (Vite-native)
- **Testing Library**: Component testing
- **Playwright**: E2E testing

## Accessibility

### Current Implementation
- Semantic HTML elements
- Keyboard navigation supported (React Router)
- Sufficient color contrast

### Improvements to Consider
- Add ARIA labels where needed
- Ensure focus management in modals
- Test with screen readers
- Add keyboard shortcuts for power users

## Performance Optimization

### Current Optimizations
- Vite's fast HMR
- React's built-in optimizations
- Framer Motion's GPU acceleration
- Minimal JavaScript bundle

### Future Optimizations
- Image optimization and lazy loading
- Code splitting by route
- Memoization for expensive renders
- Virtual scrolling for large lists

---

This architecture provides a solid foundation for a scalable, maintainable React application with excellent user experience.
