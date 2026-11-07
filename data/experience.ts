import { Experience } from '@/types/content';

export const experiences: Experience[] = [
  {
    company: 'OPENLANE — LaneLink',
    role: 'Software Engineer Intern (Full-time)',
    location: 'Chicago, IL / Remote',
    startDate: '2026-06',
    endDate: null,
    bullets: [
      'Built a cross-service auction transfer workflow spanning React/TypeScript interfaces, Node.js services, and an external auction integration, preserving prior auction history while updating active vehicle state.',
      'Built an authenticated Next.js operator dashboard and extended an internal integration-test platform with validated vehicle lifecycle simulation, transactional Firestore updates, and downstream events.',
      'Implemented a client inventory dashboard with nine lifecycle KPIs and matching vehicle-level drilldowns, aligning reporting queries, authorization, and filters.',
      'Automated recurring document-status reminders with scheduled Node.js jobs, recipient grouping, and deployment safeguards against overlapping runs and duplicate sends after partial failures.',
      'Delivered finance and assignment reports, address-backed vehicle association, and data safeguards through cross-repository implementation, review, and regression validation.',
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Firebase', 'Firestore', 'SQL', 'Integration Testing', 'Scheduled Jobs'],
    links: [{ label: 'Selected LaneLink work', url: '/projects/lanelink-engineering' }],
  },
  {
    company: 'N-2 Water',
    role: 'Web Developer',
    location: 'Remote',
    startDate: '2025-05',
    endDate: '2026-08',
    bullets: [
      'Developed a headless commerce website using Next.js, React, and TypeScript, supporting marketing content and a production e-commerce storefront.',
      'Integrated Shopify Storefront and Customer Account APIs for authentication, order history, subscriptions, and cross-domain cart persistence.',
      'Collaborated with stakeholders and designers to refine customer workflows through iterative feedback and staged rollout.',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Shopify APIs', 'OAuth 2.0', 'Jest'],
  },
  {
    company: 'Thrive Vineyard Church',
    role: 'Web Developer Intern',
    location: 'Palatine, IL',
    startDate: '2024-06',
    endDate: null,
    bullets: [
      'Built and maintained a sermon archive CMS to streamline access to digital resources',
      'Improved SEO and site structure, increasing organic traffic and volunteer sign-ups',
      'Managed Google Ads for outreach events, achieving ~54% higher CTR and conversions',
    ],
    techStack: ['HTML/CSS', 'JavaScript', 'CMS', 'SEO', 'Google Ads'],
  },
  {
    company: 'Tribl Records',
    role: 'Software Engineering Intern',
    location: 'Atlanta, GA',
    startDate: '2020-04',
    endDate: '2021-11',
    bullets: [
      'Developed and maintained web-based content tools (HTML/CSS/JavaScript) to improve UX',
      'Optimized database queries and server configurations for faster load times',
      'Collaborated with cross-functional teams to integrate and scale media assets',
    ],
    techStack: ['HTML/CSS', 'JavaScript', 'SQL', 'Server Configuration'],
  },
];
