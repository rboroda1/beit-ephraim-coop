# 📸 Archive Photos - Easy Management Guide

## How to Add New Archive Photos

### Step 1: Add Your Photo

1. Place your new photo in this folder (`src/assets/images/archive/`)
2. Use a descriptive filename (e.g., `bayit-archive-3.jpeg`, `community-dinner-1995.jpg`)

### Step 2: Update the Archive Component

1. Open `src/components/Archive.jsx`
2. Find the "Import archive photos" section at the top
3. Add your import: `import archivePhoto3 from '../assets/images/archive/your-photo.jpeg'`

### Step 3: Add to the Photos Array

1. In the same file, find the `archivePhotos` array
2. Add your photo following this pattern:

```javascript
{
  id: 3, // Use the next available number
  image: archivePhoto3, // Use the import name from step 2
  title: "Your Photo Title",
  description: "Your photo description"
}
```

### Example:

```javascript
// At the top with other imports:
import archivePhoto3 from '../assets/images/archive/community-dinner-1995.jpeg'

// In the archivePhotos array:
{
  id: 3,
  image: archivePhoto3,
  title: "Community Dinner 1995",
  description: "One of our first community dinners in the original kitchen"
}
```

### Current Photos:

- `bayit-archive-1.jpeg` - Historic Bayit Moments
- `bayit-archive-2.jpeg` - Community Gatherings

That's it! Your new photo will automatically appear in the 3D scrolling archive with hover effects and modal functionality.
