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
// All logos will be converted to PNG at consistent size for uniform display
const logos = [
  { input: 'n2-icon.svg', output: 'n2-logo.png' },
  { input: 'thrive-logo.png', output: 'thrive-logo.png' },
  { input: 'tender-heart-logo.png', output: 'tender-heart-logo.png' },
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

      // Use temp file if input and output are the same
      const tempPath = inputPath === outputPath 
        ? path.join(outputDirectory, `temp-${Date.now()}-${logo.output}`)
        : outputPath;

      // Convert all logos (SVG and PNG) to PNG at consistent size
      await sharp(inputPath)
        .resize(TARGET_SIZE, TARGET_SIZE, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
        })
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(tempPath);

      // If we used a temp file, replace the original
      if (tempPath !== outputPath) {
        fs.unlinkSync(inputPath);
        fs.renameSync(tempPath, outputPath);
      }

      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024).toFixed(2);
      const reduction = inputPath === outputPath 
        ? 'N/A (same file)'
        : ((1 - newStats.size / stats.size) * 100).toFixed(1) + '%';

      console.log(`✓ ${logo.output}`);
      if (inputPath !== outputPath) {
        console.log(`  Original: ${originalSize} KB → Optimized: ${newSize} KB (${reduction} reduction)`);
      } else {
        console.log(`  Optimized: ${newSize} KB`);
      }
      console.log(`  Size: ${TARGET_SIZE}x${TARGET_SIZE}px\n`);
    } catch (error) {
      console.error(`✗ Error processing ${logo.input}:`, error.message);
    }
  }

  console.log('✓ Logo optimization complete!');
  console.log('\nAll logos are now PNG format at 256x256px for consistent sizing.');
  console.log('The Image component will display them at the same size (32px on cards, 48px on detail pages).');
}

optimizeLogos().catch(console.error);
