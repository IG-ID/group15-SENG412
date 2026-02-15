# Visual Design Reference

This document describes the visual appearance and design elements of the Group 15 Portal.

## Color Palette

### Primary Colors
- **Primary**: `#0A0A0A` - Deep black for text and dark elements
- **Secondary**: `#F8F8F8` - Off-white background
- **Accent**: `#E5E5E5` - Light gray for subtle accents

### Gradients
- Avatar fallback: `from-gray-100 to-gray-200`
- Hover overlay: Dark with 95% opacity + backdrop blur

## Typography

### Font Families
1. **Outfit** (Display/Headings)
   - Weights: 300, 400, 500, 600, 700
   - Used for: Logo, page titles, card names
   - Character: Modern, geometric, clean

2. **Inter** (Body Text)
   - Weights: 300, 400, 500, 600
   - Used for: Body text, descriptions, UI elements
   - Character: Highly readable, neutral

### Type Scale
- **6xl**: Main page headings (60px)
- **5xl**: Section headings (48px)
- **2xl**: Component headings (24px)
- **lg**: Subheadings (18px)
- **base**: Body text (16px)
- **sm**: Metadata (14px)
- **xs**: Fine print (12px)

## Layout

### Spacing System
- **Container Max Width**: 1280px (7xl)
- **Page Padding**: 16px mobile, 24px tablet, 32px desktop
- **Component Gaps**: 24px (6)
- **Card Padding**: 24px (6)

### Grid System
- **Mobile** (< 768px): 1 column
- **Tablet** (768-1024px): 2 columns
- **Desktop** (> 1024px): 3 columns

## Components

### Navbar
```
┌─────────────────────────────────────────────────┐
│  Group 15    Home  Payroll  GPA  Details  Courses│
│             [Active indicator underline]         │
└─────────────────────────────────────────────────┘
```
- Height: 64px (16)
- Background: White
- Border: 1px bottom, gray-100
- Shadow: Subtle (sm)
- Position: Sticky top

### Member Card (Default State)
```
┌─────────────────────┐
│                     │
│       ┌─────┐       │  ← Avatar (80px circle)
│       │ AL  │       │
│       └─────┘       │
│                     │
│   Ada Lovelace     │  ← Name (lg, bold)
│   MAT/2023/001     │  ← Matric (sm, gray-500)
│                     │
│  Frontend Developer │  ← Bio (sm, gray-600)
│  specializing in    │
│  React and UI/UX    │
│                     │
└─────────────────────┘
```
- Background: White
- Border Radius: 16px (2xl)
- Shadow: Subtle (sm), dramatic on hover (xl)
- Padding: 24px (6)

### Member Card (Hover State)
```
┌─────────────────────┐
│ Course Details      │  ← White text
│                     │
│ ┌─────────────────┐ │
│ │ CSC301          │ │  ← Course item
│ │ Software Eng    │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ CSC302          │ │
│ │ Database Systems│ │
│ └─────────────────┘ │
│                     │
└─────────────────────┘
```
- Overlay: Dark (95% opacity)
- Backdrop Blur: 8px
- Text: White
- Course Items: Semi-transparent white background

## Animation Specifications

### Timing Functions
- **Default**: ease (cubic-bezier)
- **Spring**: Framer Motion spring (stiffness: 380, damping: 30)
- **Duration**: 300ms for most transitions

### Animation Types

#### Navbar
- **Logo Hover**: Scale 1.0 → 1.05 (instant)
- **Link Hover**: translateY 0 → -2px
- **Active Indicator**: Smooth slide (spring animation)

#### Member Cards
- **Initial Load**: 
  - Opacity: 0 → 1
  - translateY: 20px → 0
  - Stagger: 100ms per card
  
- **Hover Scale**: 1.0 → 1.02
- **Shadow**: sm → xl (300ms)

- **Overlay Appear**:
  - Opacity: 0 → 1 (200ms)
  - Backdrop blur: 0 → 8px
  
- **Course Items**:
  - translateX: -10px → 0
  - Opacity: 0 → 1
  - Stagger: 50ms per item

#### Page Transitions
- **Placeholder Pages**:
  - Opacity: 0 → 1
  - Scale: 0.95 → 1.0
  - Duration: 500ms

- **Button Hover**: Scale 1.0 → 1.05
- **Button Tap**: Scale 1.0 → 0.95

## Responsive Breakpoints

### Mobile First Approach
```css
/* Mobile */
< 768px:  Single column, full width
          Stack navigation (if needed)
          Larger touch targets

/* Tablet */
768px - 1024px:  Two column grid
                 Horizontal navigation
                 Medium spacing

/* Desktop */
> 1024px:  Three column grid
           Full navigation
           Maximum spacing
```

## Shadows

### Elevation System
- **sm**: `0 1px 2px rgba(0,0,0,0.05)` - Default cards
- **md**: `0 4px 6px rgba(0,0,0,0.07)` - Navbar
- **xl**: `0 20px 25px rgba(0,0,0,0.1)` - Hover state

## Border Radius

- **lg**: 8px - Buttons, small elements
- **xl**: 12px - Medium components
- **2xl**: 16px - Cards
- **full**: 9999px - Circular elements (avatars)

## Interactive States

### Hover States
- **Buttons**: Scale up, color change
- **Links**: Slight movement, underline
- **Cards**: Scale up, shadow increase

### Active States
- **Navigation**: Underline indicator
- **Buttons**: Scale down (pressed effect)

### Focus States
- All interactive elements have visible focus indicators
- Keyboard navigation fully supported

## Accessibility Features

### Color Contrast
- Text on white: AAA compliant (>7:1 ratio)
- Overlay text: AAA compliant (white on dark)

### Focus Indicators
- Visible outline on keyboard focus
- Skip navigation links (if implemented)

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Nav wrapped in <nav> element
- Links use <a> tags with proper routing

## Design Principles

### 1. Minimalism
- Generous white space
- Clean lines
- Subtle shadows
- No unnecessary decoration

### 2. Consistency
- Uniform spacing system
- Consistent animation timing
- Predictable interaction patterns
- Unified color palette

### 3. Hierarchy
- Clear visual hierarchy through size/weight
- Important elements stand out
- Supporting text is subtle
- Logical content flow

### 4. Feedback
- Immediate hover responses
- Smooth transitions
- Clear active states
- Loading indicators (if needed)

### 5. Performance
- Smooth 60fps animations
- Fast page loads
- Optimized images
- Minimal bundle size

## Browser Support

### Tested Browsers
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Required Features
- CSS Grid
- Flexbox
- CSS Custom Properties
- Modern JavaScript (ES6+)
- Backdrop filter

---

This design system provides a cohesive, modern, and accessible user experience that balances aesthetics with functionality.
