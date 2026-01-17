import { NextRequest, NextResponse } from 'next/server';
import { getAllProjects } from '@/lib/content/projects';
import { experiences } from '@/data/experience';
import { searchContent } from '@/lib/search';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';
  const tag = searchParams.get('tag') || '';
  const type = searchParams.get('type') as 'project' | 'experience' | null;

  const projects = getAllProjects();
  const results = searchContent(projects, experiences, query, tag, type || undefined);

  return NextResponse.json({ results });
}
