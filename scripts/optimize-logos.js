/**
 * Optimize and standardize project logos
 * Converts all logos to PNG format at consistent size (256x256)
 * Requires: sharp (npm install --save-dev sharp)
 * Run: node scripts/optimize-logos.js
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

const logosDirectory = path.join(__dirname, '../public/images/logos');
const outputDirectory = logosDirectory;

// Target size for all logos (square, 256x256 is good for web)
const TARGET_SIZE = 256;

// Ensure output directory exists
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// Logo files to process
// If you have SVG files, keep them as SVG (best for logos)
// If you have PNG files, we'll optimize them to consistent size
const logos = [
  { input: 'n2-icon.svg', output: 'n2-logo.svg', keepSvg: true }, // Keep SVG if it's vector
  { input: 'thrive-logo.png', output: 'thrive-logo-optimized.png', keepSvg: false },
  { input: 'tender-heart-logo.png', output: 'tender-heart-logo-optimized.png', keepSvg: false },
];

async function optimizeLogos() {
  console.log('Optimizing project logos...\n');

  for (const logo of logos) {
    const inputPath = path.join(logosDirectory, logo.input);
    const outputPath = path.join(outputDirectory, logo.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠ Skipping ${logo.input} (file not found)`);
      continue;
    }

    try {
      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024).toFixed(2);

      if (logo.keepSvg && logo.input.endsWith('.svg')) {
        // For SVG files, just copy them (they're already optimized)
        fs.copyFileSync(inputPath, outputPath);
        console.log(`✓ ${logo.output} (SVG - kept as vector)`);
        console.log(`  Size: ${originalSize} KB\n`);
      } else {
        // For PNG files, optimize and resize
        await sharp(inputPath)
          .resize(TARGET_SIZE, TARGET_SIZE, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
          })
          .png({ quality: 90, compressionLevel: 9 })
          .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSize = (newStats.size / 1024).toFixed(2);
        const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);

        console.log(`✓ ${logo.output}`);
        console.log(`  Original: ${originalSize} KB → Optimized: ${newSize} KB (${reduction}% reduction)`);
        console.log(`  Size: ${TARGET_SIZE}x${TARGET_SIZE}px\n`);
      }
    } catch (error) {
      console.error(`✗ Error processing ${logo.input}:`, error.message);
    }
  }

  console.log('✓ Logo optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Review the optimized files');
  console.log('2. Replace the original files with optimized versions if satisfied');
  console.log('3. Update project MDX files to use the new filenames if changed');
  console.log('\nRecommendation:');
  console.log('- Use SVG format for vector logos (best quality, smallest size)');
  console.log('- Use PNG format at 256x256px for raster logos (consistent sizing)');
}

optimizeLogos().catch(console.error);
