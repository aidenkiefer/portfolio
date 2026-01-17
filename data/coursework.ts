import { CourseworkGroup } from '@/types/content';

export const coursework: CourseworkGroup[] = [
  {
    title: 'Core CS Fundamentals',
    courses: [
      {
        code: 'CS 111',
        name: 'Program Design I',
        skillsLearned: ['Programming fundamentals', 'Problem-solving', 'C/C++'],
      },
      {
        code: 'CS 141',
        name: 'Program Design II',
        skillsLearned: ['Object-oriented programming', 'Data structures basics', 'C/C++'],
      },
      {
        code: 'CS 151',
        name: 'Foundations of Computing',
        skillsLearned: ['Discrete mathematics', 'Logic', 'Set theory', 'Proof techniques'],
      },
      {
        code: 'CS 211',
        name: 'Programming Practicum',
        skillsLearned: ['Code organization', 'Best practices', 'Debugging'],
      },
      {
        code: 'CS 251',
        name: 'Data Structures',
        skillsLearned: ['Data structures', 'Algorithm analysis', 'Complexity theory'],
      },
      {
        code: 'CS 401',
        name: 'Computer Algorithms I',
        skillsLearned: ['Algorithm design', 'Complexity analysis', 'Dynamic programming', 'Graph algorithms'],
        projectLinks: ['id3-decision-tree'],
      },
    ],
  },
  {
    title: 'Systems & Low-Level Programming',
    courses: [
      {
        code: 'CS 261',
        name: 'Machine Organization',
        skillsLearned: ['Computer architecture', 'Assembly language', 'Memory management'],
      },
      {
        code: 'CS 361',
        name: 'Systems Programming',
        skillsLearned: ['System calls', 'Process management', 'File I/O', 'Multithreading'],
      },
      {
        code: 'CS 362',
        name: 'Computer Design',
        skillsLearned: ['Digital logic', 'CPU design', 'Computer organization'],
      },
    ],
  },
  {
    title: 'Software Engineering & Design',
    courses: [
      {
        code: 'CS 301',
        name: 'Languages and Automata',
        skillsLearned: ['Formal languages', 'Automata theory', 'Computability', 'Regular expressions'],
      },
      {
        code: 'CS 341',
        name: 'Programming Language Concepts',
        skillsLearned: ['Language paradigms', 'Type systems', 'Functional programming', 'Language design'],
      },
      {
        code: 'CS 342',
        name: 'Software Design',
        skillsLearned: ['Design patterns', 'Software architecture', 'UML', 'System design'],
      },
      {
        code: 'CS 440',
        name: 'Software Engineering I',
        skillsLearned: ['Software lifecycle', 'Requirements engineering', 'Testing', 'Project management'],
      },
      {
        code: 'CS 377',
        name: 'Ethical Issues in Computing',
        skillsLearned: ['Professional ethics', 'Privacy', 'Security', 'Social impact'],
      },
    ],
  },
  {
    title: 'Data Science & Machine Learning',
    courses: [
      {
        code: 'CS 412',
        name: 'Intro to Machine Learning',
        skillsLearned: ['Supervised learning', 'Unsupervised learning', 'Model evaluation', 'Feature engineering'],
        projectLinks: ['climate-change-bird-migration'],
      },
      {
        code: 'CS 418',
        name: 'Introduction to Data Science',
        skillsLearned: ['Data analysis', 'Statistical methods', 'Data visualization', 'pandas', 'NumPy'],
        projectLinks: ['climate-change-bird-migration'],
      },
      {
        code: 'CS 411',
        name: 'Artificial Intelligence I',
        skillsLearned: ['Search algorithms', 'Knowledge representation', 'Planning', 'AI fundamentals'],
      },
      {
        code: 'CS 480',
        name: 'Database Systems',
        skillsLearned: ['SQL', 'Database design', 'Normalization', 'Query optimization', 'Transaction management'],
        projectLinks: ['hospital-database-model'],
      },
    ],
  },
  {
    title: 'User Interface & Interaction',
    courses: [
      {
        code: 'CS 422',
        name: 'User Interface Design',
        skillsLearned: ['UI/UX principles', 'Human-computer interaction', 'Prototyping', 'Usability testing'],
      },
    ],
  },
  {
    title: 'Mathematics & Statistics',
    courses: [
      {
        code: 'MATH 180',
        name: 'Calculus I',
        skillsLearned: ['Limits', 'Derivatives', 'Integration'],
      },
      {
        code: 'MATH 181',
        name: 'Calculus II',
        skillsLearned: ['Advanced integration', 'Series', 'Sequences'],
      },
      {
        code: 'MATH 210',
        name: 'Calculus III',
        skillsLearned: ['Multivariable calculus', 'Vector calculus', 'Partial derivatives'],
      },
      {
        code: 'MATH 310',
        name: 'Applied Linear Algebra',
        skillsLearned: ['Matrices', 'Vector spaces', 'Linear transformations', 'Eigenvalues'],
      },
      {
        code: 'IE 342',
        name: 'Probability & Statistics for Engineering',
        skillsLearned: ['Probability theory', 'Statistical inference', 'Hypothesis testing', 'Regression'],
      },
    ],
  },
];
