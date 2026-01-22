import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { slug, content } = await request.json();

    if (!slug || !content) {
      return NextResponse.json(
        { error: 'Missing slug or content' },
        { status: 400 }
      );
    }

    // Note: This allows file editing from the web interface
    // In production, you may want to add authentication

    const filePath = path.join(process.cwd(), 'content', 'blogs', `${slug}.mdx`);

    // Verify file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Read current file to preserve frontmatter
    const currentContent = fs.readFileSync(filePath, 'utf8');
    const frontmatterMatch = currentContent.match(/^---\n([\s\S]*?)\n---\n\n?([\s\S]*)$/);
    
    if (!frontmatterMatch) {
      return NextResponse.json(
        { error: 'Invalid blog post format' },
        { status: 400 }
      );
    }

    const frontmatter = frontmatterMatch[1];
    // Preserve frontmatter and add new content (trim to remove extra newlines)
    const newContent = `---\n${frontmatter}\n---\n\n${content.trim()}\n`;

    // Write updated content
    fs.writeFileSync(filePath, newContent, 'utf8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving blog post:', error);
    return NextResponse.json(
      { error: 'Failed to save blog post' },
      { status: 500 }
    );
  }
}
