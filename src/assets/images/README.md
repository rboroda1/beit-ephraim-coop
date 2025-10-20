# Photo Guidelines for Beit Ephraim Website

## Folder Structure

- `hero/` - Main background image for the hero section
- `gallery/` - Photos for the gallery section (6 images recommended)
- `logos/` - Any logos or branding images

## Recommended Image Specs

- **Hero background**: 1920x1080px or larger, landscape orientation
- **Gallery images**: 800x600px minimum, can be various orientations
- **File formats**: JPG for photos, PNG for logos with transparency
- **File naming**: Use descriptive names with hyphens (e.g., `community-kitchen.jpg`)

## How to Add Photos

1. Drop your photos into the appropriate folders
2. Update the component imports (see examples below)

## Example Usage

### Hero Background

```jsx
import heroImage from "../assets/images/hero/community-kitchen.jpg";
// Then use: background-image: url(${heroImage})
```

### Gallery Images

```jsx
import kitchen1 from "../assets/images/gallery/kitchen-1.jpg";
import diningArea from "../assets/images/gallery/dining-area.jpg";
// Then use in your images array
```
