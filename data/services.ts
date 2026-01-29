export interface Service {
  title: string;
  description: string;
  price: number;
  slug: string;
}

export interface ServiceCategory {
  title: string;
  tagline: string;
  services: Service[];
}

export interface ServicePackage {
  name: string;
  description: string;
  price: number;
  slug: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'AI-Enhanced Experiences',
    tagline: 'Tools that engage visitors, automate tasks, and deliver smarter customer experiences.',
    services: [
      {
        title: 'AI Customer Service Chatbots',
        description: 'Conversational bots that answer questions, qualify leads, and support customers 24/7.',
        price: 150,
        slug: 'chatbots',
      },
      {
        title: 'AI-Generated Content Workflows',
        description: 'Auto-generate blog drafts, product blurbs, or email copy using GPT tools. Great for marketers or solo founders.',
        price: 120,
        slug: 'ai-content',
      },
      {
        title: 'AI-Powered Web Personalization',
        description: 'Create site flows or popups that adapt to user behavior in real time.',
        price: 230,
        slug: 'personalization',
      },
      {
        title: 'AI Voiceovers & Video Avatars',
        description: 'Generate narrated videos for products, onboarding, or ads—without hiring talent.',
        price: 80,
        slug: 'ai-video',
      },
      {
        title: 'AI-Based Business Insights',
        description: 'Use AI models to predict sales, identify churn risks, or analyze customer behavior.',
        price: 260,
        slug: 'ai-insights',
      },
    ],
  },
  {
    title: 'Performance, UX, and Optimization',
    tagline: 'Speed, accessibility, and error-free functionality to keep your site running at its best.',
    services: [
      {
        title: 'Website Speed & Performance Optimization',
        description: 'Speed up page loads, improve Core Web Vitals, and boost Google rankings.',
        price: 120,
        slug: 'performance',
      },
      {
        title: 'Technical SEO Setup',
        description: 'Ensure your site is search-friendly under the hood with optimized tags, structure, and indexing.',
        price: 200,
        slug: 'seo',
      },
      {
        title: 'Accessibility & Mobile Readiness Audit',
        description: 'Make your site compliant, mobile-friendly, and easy for anyone to use.',
        price: 100,
        slug: 'accessibility',
      },
      {
        title: 'One-Off Bug Fixes',
        description: 'Fix broken layouts, console errors, or annoying frontend/backend issues.',
        price: 50,
        slug: 'bugfixes',
      },
    ],
  },
  {
    title: 'Automation & Backend Integrations',
    tagline: 'Free up time and connect your stack with custom-built backend tools.',
    services: [
      {
        title: 'Business Process Automation',
        description: 'Automate lead handling, report generation, content publishing, and more using scripts, Zapier, or Python.',
        price: 230,
        slug: 'automation',
      },
      {
        title: 'API Integrations & Custom Tool Connections',
        description: 'Wire together the tools you already use: CRMs, databases, apps, and services.',
        price: 200,
        slug: 'api-integrations',
      },
      {
        title: 'Internal Tools & Lightweight Dashboards',
        description: 'Build internal admin panels or reporting dashboards to streamline team ops.',
        price: 140,
        slug: 'internal-tools',
      },
    ],
  },
];

export const servicePackages: ServicePackage[] = [
  {
    name: 'Startup AI Jumpstart',
    description: 'AI chatbot + content workflows + personalization setup',
    price: 350,
    slug: 'startup-ai',
  },
  {
    name: 'Speed & SEO Tune-Up',
    description: 'Performance optimization + technical SEO audit',
    price: 150,
    slug: 'speed-seo',
  },
  {
    name: 'Automation Sprint',
    description: '1–2 backend workflows automated via Python, Zapier, or similar',
    price: 220,
    slug: 'automation-sprint',
  },
];
