import sys
import os

try:
    from pypdf import PdfReader
except ImportError:
    try:
        from PyPDF2 import PdfReader
    except ImportError:
        print("Please install pypdf: pip install pypdf")
        sys.exit(1)

def extract_pdf(pdf_path, output_path):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Extracted text from {pdf_path} to {output_path}")
    except Exception as e:
        print(f"Error extracting {pdf_path}: {e}")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    
    pdfs = [
        (os.path.join(base_dir, 'public', 'resume', 'Resume.pdf'), 
         os.path.join(base_dir, 'docs', 'resume-summary.md')),
        (os.path.join(base_dir, 'Jan25 Audit.pdf'), 
         os.path.join(base_dir, 'docs', 'coursework-audit-summary.md')),
        (os.path.join(base_dir, 'Kiefer-Aiden-SF_TOP_5.pdf'), 
         os.path.join(base_dir, 'docs', 'strengths-summary.md')),
    ]
    
    for pdf_path, output_path in pdfs:
        if os.path.exists(pdf_path):
            extract_pdf(pdf_path, output_path)
        else:
            print(f"File not found: {pdf_path}")
