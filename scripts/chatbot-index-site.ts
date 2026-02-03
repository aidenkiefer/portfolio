#!/usr/bin/env ts-node

/**
 * Site Content Indexing Script for Chatbot RAG
 *
 * This script indexes the following content sources:
 * - Services pages: /services/* (overview + individual service pages)
 * - About page content
 * - Portfolio summaries from MDX frontmatter
 * - Contact page content
 * - Services data from data/services.ts
 *
 * Chunking: ~400-800 tokens per chunk, 15% overlap, preserves section headers
 * Embedding: OpenAI text-embedding-3-small (1536 dimensions)
 *
 * Usage: npm run chatbot:index (loads .env.local automatically)
 */

import { config } from 'dotenv';

// Load .env.local so this script sees NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY
config({ path: '.env.local' });

import { createClient } from '@supabase/supabase-js';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { serviceCategories, servicePackages } from '../data/services';
import { chunkContent } from '../lib/chatbot/chunk';
import { embedText } from '../lib/chatbot/embed';
import type { ContentSource, DocumentChunk } from '../lib/chatbot/rag-types';

// Configuration
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('Missing required environment variables:');
  console.error('- NEXT_PUBLIC_SUPABASE_URL');
  console.error('- SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

/**
 * Extracts text content from React/TSX component files
 * This is a simple extraction - in a real implementation you might use a more sophisticated parser
 */
function extractTextFromTSX(content: string): string {
  // Remove imports and exports
  const withoutImports = content.replace(/^import.*$/gm, '');
  const withoutExports = withoutImports.replace(/^export.*$/gm, '');

  // Extract text from JSX strings and template literals
  const textMatches = withoutExports.match(/['"`]([^'"`\n]{10,}?)['"`]/g) || [];
  const extractedText = textMatches
    .map(match => match.slice(1, -1)) // Remove quotes
    .filter(text =>
      text.length > 20 && // Minimum length
      !text.includes('className') && // Skip CSS classes
      !text.includes('src=') && // Skip image sources
      !text.includes('href=') && // Skip links
      !/^[A-Z_]+$/.test(text) // Skip constants
    )
    .join(' ');

  return extractedText;
}

/**
 * Read and process services pages
 */
async function indexServicesPages(): Promise<ContentSource[]> {
  const sources: ContentSource[] = [];
  const servicesDir = join(process.cwd(), 'app/services');

  try {
    const files = await readdir(servicesDir, { recursive: true });
    const pageFiles = files.filter(file => file.endsWith('page.tsx'));

    for (const file of pageFiles) {
      const filePath = join(servicesDir, file);
      const content = await readFile(filePath, 'utf-8');
      const text = extractTextFromTSX(content);

      if (text.length > 100) {
        const slug = file.replace('/page.tsx', '').replace('page.tsx', '');
        const url = slug ? `/services/${slug}` : '/services';
        const title = slug ? `${slug.charAt(0).toUpperCase()}${slug.slice(1)} Service` : 'Services Overview';

        sources.push({
          url,
          title,
          content: text
        });
      }
    }
  } catch (error) {
    console.warn('Could not read services directory:', error);
  }

  return sources;
}

/**
 * Goals-to-services recommendations so RAG can answer "increase sales", "grow business", "e-commerce", etc.
 */
function indexGoalsAndRecommendations(): ContentSource[] {
  const content = [
    'Increase online sales: AI Customer Service Chatbots qualify leads and engage visitors 24/7. AI-Powered Web Personalization adapts the site to user behavior and boosts conversion. Technical SEO helps customers find you in search. Startup AI Jumpstart package ($350) bundles chatbot, content workflows, and personalization.',
    'Grow my business / get more customers: Same as increasing sales. Also consider AI-Generated Content Workflows for blog and marketing copy, and Website Speed & Performance so your site loads fast and ranks better.',
    'E-commerce / sell online / T-shirts / products: AI chatbots for support and lead qualification. Web personalization for conversion. SEO for visibility. Content workflows for product descriptions and ads. Speed optimization for a credible, fast store.',
    'Best service for my business: Depends on goals. For sales growth: chatbots, personalization, SEO. For content: AI content workflows. For automation: Business Process Automation, API integrations. For a faster site: Speed & SEO Tune-Up ($150).'
  ].join('\n\n');

  return [{
    url: '/services',
    title: 'Service recommendations by goal',
    content
  }];
}

/**
 * Read and process services data
 */
function indexServicesData(): ContentSource[] {
  const sources: ContentSource[] = [];

  // Index service categories
  for (const category of serviceCategories) {
    const categoryContent = `${category.title}: ${category.tagline}`;

    const servicesContent = category.services.map(service =>
      `${service.title}: ${service.description} (Price: $${service.price})`
    ).join('\\n');

    sources.push({
      url: '/services',
      title: `Services - ${category.title}`,
      content: `${categoryContent}\\n\\n${servicesContent}`
    });
  }

  // Index service packages if they exist
  if (servicePackages && servicePackages.length > 0) {
    const packagesContent = servicePackages.map(pkg =>
      `${pkg.name}: ${pkg.description} (Price: $${pkg.price})`
    ).join('\\n');

    sources.push({
      url: '/services',
      title: 'Service Packages',
      content: packagesContent
    });
  }

  return sources;
}

/**
 * Read and process portfolio projects
 */
async function indexPortfolioProjects(): Promise<ContentSource[]> {
  const sources: ContentSource[] = [];
  const projectsDir = join(process.cwd(), 'content/projects');

  try {
    const files = await readdir(projectsDir);
    const mdxFiles = files.filter(file => file.endsWith('.mdx'));

    for (const file of mdxFiles) {
      const filePath = join(projectsDir, file);
      const content = await readFile(filePath, 'utf-8');
      const { data: frontmatter, content: markdownContent } = matter(content);

      const slug = file.replace('.mdx', '');
      const title = frontmatter.title || slug;
      const description = frontmatter.description || '';

      // Use frontmatter + first few paragraphs for project summary
      const summary = `${description}\\n\\n${markdownContent.split('\\n').slice(0, 10).join('\\n')}`;

      sources.push({
        url: `/projects/${slug}`,
        title: `Project: ${title}`,
        content: summary.trim()
      });
    }
  } catch (error) {
    console.warn('Could not read projects directory:', error);
  }

  return sources;
}

/**
 * Read about page content
 */
async function indexAboutPage(): Promise<ContentSource[]> {
  try {
    const aboutPath = join(process.cwd(), 'app/page.tsx'); // Homepage has about content
    const content = await readFile(aboutPath, 'utf-8');
    const text = extractTextFromTSX(content);

    if (text.length > 100) {
      return [{
        url: '/',
        title: 'About Aiden Kiefer',
        content: text
      }];
    }
  } catch (error) {
    console.warn('Could not read about page:', error);
  }

  return [];
}

/**
 * Add contact page content (if exists)
 */
async function indexContactPage(): Promise<ContentSource[]> {
  try {
    const contactPath = join(process.cwd(), 'app/contact/page.tsx');
    const content = await readFile(contactPath, 'utf-8');
    const text = extractTextFromTSX(content);

    if (text.length > 100) {
      return [{
        url: '/contact',
        title: 'Contact Information',
        content: text
      }];
    }
  } catch (error) {
    console.warn('Could not read contact page:', error);
  }

  return [];
}

/**
 * Process and store chunks in the database
 */
async function processAndStoreChunks(chunks: DocumentChunk[]): Promise<void> {
  console.log(`Processing ${chunks.length} chunks...`);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];

    try {
      // Generate embedding
      const embedding = await embedText(chunk.content);

      // Insert document
      const { data: document, error: docError } = await supabase
        .from('site_documents')
        .insert({
          url: chunk.url,
          title: chunk.title,
          section: chunk.section || null,
          content: chunk.content,
          tags: null
        })
        .select('id')
        .single();

      if (docError) {
        console.error(`Error inserting document for chunk ${i + 1}:`, docError);
        continue;
      }

      // Insert embedding
      const { error: embError } = await supabase
        .from('site_embeddings')
        .insert({
          document_id: document.id,
          embedding: embedding,
          metadata: {
            tokens: chunk.tokens,
            url: chunk.url,
            title: chunk.title,
            section: chunk.section
          }
        });

      if (embError) {
        console.error(`Error inserting embedding for chunk ${i + 1}:`, embError);
        continue;
      }

      console.log(`✓ Processed chunk ${i + 1}/${chunks.length}: ${chunk.title} (${chunk.tokens} tokens)`);

    } catch (error) {
      console.error(`Error processing chunk ${i + 1}:`, error);
    }

    // Add small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

/**
 * Clear existing indexed content
 */
async function clearExistingContent(): Promise<void> {
  console.log('Clearing existing indexed content...');

  const { error: embError } = await supabase.from('site_embeddings').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (embError && embError.code !== 'PGRST116') { // PGRST116 = no rows found, which is fine
    console.error('Error clearing embeddings:', embError);
  }

  const { error: docError } = await supabase.from('site_documents').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (docError && docError.code !== 'PGRST116') {
    console.error('Error clearing documents:', docError);
  }

  console.log('✓ Cleared existing content');
}

/**
 * Main indexing function
 */
async function indexSiteContent(): Promise<void> {
  console.log('Starting site content indexing...');
  console.log('Sources: services pages, about, portfolio summaries, contact, data/services');
  console.log('Chunking: ~400-800 tokens, 15% overlap, preserves section headers');
  console.log('Embedding: OpenAI text-embedding-3-small (1536 dimensions)');
  console.log('');

  try {
    // Clear existing content
    await clearExistingContent();

    // Gather all content sources
    const allSources: ContentSource[] = [];

    console.log('Reading content sources...');
    allSources.push(...await indexServicesPages());
    allSources.push(...indexServicesData());
    allSources.push(...indexGoalsAndRecommendations());
    allSources.push(...await indexPortfolioProjects());
    allSources.push(...await indexAboutPage());
    allSources.push(...await indexContactPage());

    console.log(`Found ${allSources.length} content sources`);

    // Chunk all content
    console.log('Chunking content...');
    const allChunks: DocumentChunk[] = [];

    for (const source of allSources) {
      const chunks = chunkContent(source);
      allChunks.push(...chunks);
    }

    console.log(`Generated ${allChunks.length} chunks`);

    // Process and store chunks
    await processAndStoreChunks(allChunks);

    console.log('');
    console.log('✅ Site content indexing completed successfully!');
    console.log(`Indexed ${allChunks.length} chunks from ${allSources.length} content sources`);

  } catch (error) {
    console.error('Error during indexing:', error);
    process.exit(1);
  }
}

// Run the indexing if this script is called directly
if (require.main === module) {
  indexSiteContent();
}