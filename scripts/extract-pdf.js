const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function extractPDF(pdfPath, outputPath) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    fs.writeFileSync(outputPath, data.text, 'utf8');
    console.log(`Extracted text from ${pdfPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error extracting ${pdfPath}:`, error.message);
  }
}

async function main() {
  const pdfs = [
    { input: path.join(__dirname, '..', 'public', 'resume', 'Resume.pdf'), output: path.join(__dirname, '..', 'docs', 'resume-summary.md') },
    { input: path.join(__dirname, '..', 'Jan25 Audit.pdf'), output: path.join(__dirname, '..', 'docs', 'coursework-audit-summary.md') },
    { input: path.join(__dirname, '..', 'Kiefer-Aiden-SF_TOP_5.pdf'), output: path.join(__dirname, '..', 'docs', 'strengths-summary.md') },
  ];

  // Create docs directory if it doesn't exist
  const docsDir = path.join(__dirname, '..', 'docs');
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  for (const { input, output } of pdfs) {
    if (fs.existsSync(input)) {
      await extractPDF(input, output);
    } else {
      console.log(`File not found: ${input}`);
    }
  }
}

main();
