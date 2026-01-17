# Vercel Deployment Guide

## Automatic Detection

Vercel will automatically detect Next.js projects and configure most settings. However, here are the recommended settings for this project:

## Project Settings in Vercel Dashboard

### Framework Preset
- **Framework**: Next.js (auto-detected)
- Vercel should automatically detect this from `package.json`

### Build & Development Settings

#### Build Command
```
npm run build
```
- This is the default and should work automatically
- Next.js will generate static pages and server components

#### Output Directory
- **Leave empty** or set to `.next`
- Next.js handles its own output directory internally
- Do NOT set a custom output directory

#### Install Command
```
npm install
```
- Default, should work automatically

#### Development Command
```
npm run dev
```
- Used for Vercel's preview deployments

### Node.js Version

- **Recommended**: Node.js 18.x or 20.x
- Vercel will use the version specified in `.nvmrc` if present, or default to 18.x
- This project uses Next.js 16.1.3 which supports Node 18+

### Environment Variables

**No environment variables required** for this project currently. The site uses:
- Static content files (MDX in `content/projects/`)
- Static data files (TypeScript modules in `data/`)
- Public assets (images, PDFs in `public/`)

If you add environment variables later (e.g., for analytics, API keys), add them in:
- Vercel Dashboard → Project Settings → Environment Variables

### Root Directory

- **Leave empty** (defaults to repository root)
- If your Next.js app is in a subdirectory, specify it here

## Build Configuration

### Static Generation

This project uses:
- **Static Site Generation (SSG)** for all pages
- All routes are pre-rendered at build time
- MDX files are processed during build
- No server-side API routes currently

### Content Files

The following directories are read at build time:
- `content/projects/*.mdx` - Project case studies
- `data/*.ts` - Structured data (experience, coursework, skills)

These are processed during `npm run build` and don't require special Vercel configuration.

### Public Assets

Files in `public/` are served statically:
- `/public/images/*` - Images (portrait, UIC)
- `/public/resume/Resume.pdf` - Resume PDF

## Recommended Vercel Settings

### General Settings

1. **Project Name**: Set your preferred project name
2. **Framework Preset**: Next.js (auto-detected)
3. **Root Directory**: Leave empty (unless app is in subdirectory)
4. **Build Command**: `npm run build` (default)
5. **Output Directory**: Leave empty (Next.js handles this)
6. **Install Command**: `npm install` (default)

### Build Settings

1. **Node.js Version**: 18.x or 20.x (auto-detected from package.json)
2. **Environment Variables**: None required currently

### Deployment Settings

1. **Production Branch**: `main` or `master` (your default branch)
2. **Preview Deployments**: Enabled (for pull requests)
3. **Automatic Deployments**: Enabled (deploy on push)

## Build Process

When Vercel builds your project:

1. **Install Dependencies**: Runs `npm install`
2. **Build**: Runs `npm run build`
   - TypeScript compilation
   - Next.js static page generation
   - MDX file processing
   - Image optimization
3. **Deploy**: Serves the built `.next` output

## Troubleshooting

### Build Fails

If the build fails, check:

1. **Node Version**: Ensure Node 18+ is being used
2. **Dependencies**: All packages in `package.json` should install correctly
3. **TypeScript Errors**: Fix any TypeScript compilation errors
4. **MDX Processing**: Ensure MDX files in `content/projects/` are valid

### Common Issues

**Issue**: "Module not found" errors
- **Solution**: Ensure all dependencies are in `package.json`, not just `package-lock.json`

**Issue**: Build timeout
- **Solution**: Large projects may need longer build times (check Vercel plan limits)

**Issue**: MDX files not rendering
- **Solution**: Verify `next-mdx-remote` is properly configured in `app/projects/[slug]/page.tsx`

## Post-Deployment

After deployment:

1. **Verify Routes**: Check all pages load correctly
   - `/` - Homepage
   - `/projects` - Projects listing
   - `/projects/[slug]` - Individual case studies
   - `/experience` - Experience page
   - `/coursework` - Coursework page
   - `/strengths` - About page
   - `/resume` - Resume page
   - `/contact` - Contact page

2. **Check Images**: Verify images load correctly
   - Portrait image on homepage
   - UIC image on coursework page

3. **Test Navigation**: Ensure all links work
   - Navbar navigation
   - Project cards → case studies
   - Back navigation from case studies

4. **Verify PDF**: Check resume PDF loads and downloads correctly

## Custom Domain (Optional)

To add a custom domain:

1. Vercel Dashboard → Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. SSL certificates are automatically provisioned

## Analytics (Optional)

Vercel Analytics can be added later:
1. Install `@vercel/analytics`
2. Add to `app/layout.tsx`
3. Enable in Vercel Dashboard

## Notes

- This project uses **static generation** - all pages are pre-rendered
- No serverless functions are used currently
- MDX files are processed at build time, not runtime
- All content is committed to the repository (no CMS)
