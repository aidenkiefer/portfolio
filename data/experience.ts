import { Experience } from '@/types/content';

export const experiences: Experience[] = [
  {
    company: 'N-2 Water',
    role: 'Web Developer Intern',
    location: 'Remote',
    startDate: '2025-05',
    endDate: null,
    bullets: [
      'Optimized search/shopping campaigns through keyword research, audience targeting, and ad A/B tests',
      'Monitored conversion performance and produced recommendations on spend efficiency, achieving ~189% higher ROAS and ~76% increase in traffic',
      'Building a new website from scratch to modernize the company's online presence and improve SEO outcomes',
    ],
    techStack: ['JavaScript', 'HTML/CSS', 'SEO', 'Google Ads'],
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
