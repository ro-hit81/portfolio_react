# Images Directory

This directory contains all images for the Rohit Khati portfolio website.

## Required Images

### 1. Logo (`logo.png` or `logo.svg`)
- **Location**: Navigation header
- **Recommended size**: 48x48px or scalable SVG
- **Format**: PNG or SVG with transparent background
- **Description**: Your personal/professional logo
- **Current status**: Placeholder showing "LOGO"

### 2. Profile Picture (`profile.jpg` or `profile.png`)
- **Location**: Hero section (main landing page)
- **Recommended size**: 400x400px minimum
- **Format**: JPG or PNG
- **Description**: Casual/friendly profile photo for the hero section
- **Current status**: Placeholder showing "PROFILE PHOTO"

### 3. Professional Headshot (`headshot.jpg` or `headshot.png`)
- **Location**: About section
- **Recommended size**: 300x300px minimum
- **Format**: JPG or PNG
- **Description**: Professional headshot for the about section
- **Current status**: Placeholder showing "PROFESSIONAL PHOTO"

## Image Guidelines

### Technical Requirements
- **Profile/Headshot**: Square aspect ratio (1:1)
- **Logo**: Can be square or rectangular, preferably with transparent background
- **File size**: Keep under 1MB for optimal loading
- **Resolution**: High enough for retina displays (2x the display size)

### Style Guidelines
- **Profile Picture**: Can be more casual, shows personality
- **Professional Headshot**: Business appropriate, clean background
- **Logo**: Should work on both light and dark backgrounds

## How to Add Images

1. Save your images in this `/public/images/` directory
2. Update the image paths in the components:
   - **Navigation.tsx**: Uncomment the logo image section
   - **Hero.tsx**: Uncomment the profile picture section  
   - **About.tsx**: Uncomment the headshot section

## File Naming Convention
- Use lowercase filenames
- Use hyphens for spaces: `profile-picture.jpg`
- Be descriptive: `rohit-khati-logo.png`

## Current Placeholders
All placeholders are styled with dashed borders and will be automatically replaced when you add the actual images and uncomment the respective code sections.
