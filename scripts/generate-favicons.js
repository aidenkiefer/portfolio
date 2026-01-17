/**
 * Generate favicons from logo.svg
 * Requires: sharp (npm install --save-dev sharp)
 * Run: node scripts/generate-favicons.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Error: sharp is required. Install it with: npm install --save-dev sharp');
  process.exit(1);
}

const logoPath = path.join(__dirname, '../content/logo.svg');
const publicPath = path.join(__dirname, '../public');
const appPath = path.join(__dirname, '../app');

// Ensure directories exist
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

// Read the SVG file
const svgBuffer = fs.readFileSync(logoPath);

// Sizes needed for favicons
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-64x64.png', size: 64 }, // Added for optimal Chrome visibility
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

// Generate PNG files
async function generateFavicons() {
  console.log('Generating favicons from logo.svg...');
  
  for (const { name, size } of sizes) {
    try {
      await sharp(svgBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 249, g: 246, b: 241, alpha: 1 } // #F9F6F1 background
        })
        .png()
        .toFile(path.join(publicPath, name));
      
      console.log(`✓ Generated ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`✗ Error generating ${name}:`, error.message);
    }
  }

  // Generate favicon.ico with larger size for better Chrome visibility
  // Chrome displays larger favicons (64x64) more prominently in tabs
  try {
    // Generate 64x64 as the primary favicon (optimal size for Chrome tab visibility)
    const favicon64 = await sharp(svgBuffer)
      .resize(64, 64, {
        fit: 'contain',
        background: { r: 249, g: 246, b: 241, alpha: 1 }
      })
      .png()
      .toBuffer();

    // Use 64x64 as favicon.ico for better visibility in Chrome
    // (Browsers accept PNG renamed to .ico, and Chrome will use the larger size)
    fs.writeFileSync(path.join(publicPath, 'favicon.ico'), favicon64);
    console.log('✓ Generated favicon.ico (64x64 for optimal Chrome visibility)');
  } catch (error) {
    console.error('✗ Error generating favicon.ico:', error.message);
  }

  // Also create app/icon.png for Next.js App Router (180x180)
  if (!fs.existsSync(appPath)) {
    fs.mkdirSync(appPath, { recursive: true });
  }
  
  try {
    await sharp(svgBuffer)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 249, g: 246, b: 241, alpha: 1 }
      })
      .png()
      .toFile(path.join(appPath, 'icon.png'));
    
    console.log('✓ Generated app/icon.png (Next.js App Router)');
  } catch (error) {
    console.error('✗ Error generating app/icon.png:', error.message);
  }

  // Create apple-icon.png for Next.js App Router
  try {
    await sharp(svgBuffer)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 249, g: 246, b: 241, alpha: 1 }
      })
      .png()
      .toFile(path.join(appPath, 'apple-icon.png'));
    
    console.log('✓ Generated app/apple-icon.png (Next.js App Router)');
  } catch (error) {
    console.error('✗ Error generating app/apple-icon.png:', error.message);
  }

  console.log('\n✓ All favicons generated successfully!');
}

generateFavicons().catch(console.error);
