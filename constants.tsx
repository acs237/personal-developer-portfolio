
import { Project, Certification, JourneyItem } from './types';

export const HERO_VIDEOS: string[] = [
  '/assets/videos/AirBrb.mp4',
  '/assets/videos/Slackr.mp4',
  '/assets/videos/PMKPortfolio.mp4'
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Customisable Personal Portfolio Website',
    description: 'A website that allows the user to customise their contents in their own portfolio website. Clear differentiation between public reader and admin interface.',
    videoUrl: '/assets/videos/PMKPortfolio.mp4',
    tags: ['Tailwind CSS', 'TypeScript', 'React', 'Vite', 'Supabase'],
    links: { github: 'https://github.com/acs237/phyoe-min-khant', live: 'https://phyoe-min-khant.vercel.app' }
  },
  {
    id: '2',
    title: 'TalentFlow AI - AI-powered Talent Management System',
    description: 'A system that uses AI to help businesses manage their talent pool and find the best candidates for their open positions. Also empowers job seekers to find the best jobs for them.',
    videoUrl: '/assets/videos/Spaghetti.mp4',
    tags: ['TypeScript', 'React', 'Express.js', 'Google Gemini API'],
    links: { github: 'https://github.com/winnieee-chan/flying-spaghetti ', live: '#' }
  },
  {
    id: '3',
    title: 'AirBrb - Simulated Airbnb Booking System',
    description: 'A simulated Airbnb booking system that allows users to book and manage their bookings.',
    videoUrl: '/assets/videos/AirBrb.mp4',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'REST API'],
    links: { github: 'https://github.com/acs237/airbrb', live: '#' }
  },
  {
    id: '4',
    title: 'Slackr - Communication Platform',
    description: 'A platform that allows users to communicate with each other through channels, messages and images.',
    videoUrl: '/assets/videos/Slackr.mp4',
    tags: ['Vanilla JS', 'Tailwind CSS', 'REST API'],
    links: { github: 'https://github.com/acs237/slackr', live: '#' }
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'aws-ccp',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Jan 2026',
    // Using relative path without leading slash for better compatibility with static hosting
    logoUrl: '/assets/aws-certified-cloud-practitioner.png',
    verifyUrl: 'https://www.credly.com/badges/3201cb9b-858d-4e29-a536-06e93d9a2b50/public_url'
  },
  {
    id: 'aws-saa',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Jan 2026',
    // Using relative path without leading slash for better compatibility with static hosting
    logoUrl: '/assets/aws-certified-solutions-architect-associate.png',
    verifyUrl: 'https://www.credly.com/badges/1a320109-4f52-4d1d-8c35-fbebfc8bb5b1/public_url'
  }
];

export const JOURNEY: JourneyItem[] = [
  {
    year: '2026 Jan - Present',
    title: 'Software Developer',
    company: 'Nemanta',
    description: 'Developing a page where our technical services are demonstrated to potential clients. Helping them understand the services we offer.',
    type: 'work'
  },
  {
    year: '2025 Dec',
    title: 'Lyrathon - Hackathon',
    company: 'Lyra',
    description: 'Solved a problem that accelerates the job application process for both job seekers and recruiters.',
    type: 'work'
  },
  {
    year: '2025 Sep - 2025 Dec',
    title: 'Casual Academic Tutor',
    company: 'UNSW Computer Science and Engineering',
    description: 'Tutored students in Computer Vision course. Helped them understand the concepts and solve the problems.',
    type: 'work'
  },
  {
    year: '2025 Sep',
    title: 'Female Founder Program Participant ',
    company: 'New Wave - UNSW Founders',
    description: 'Participated in the Female Founder Program, where I learned about the startup ecosystem and the importance of diversity and inclusion.',
    type: 'extracurricular'
  },
  {
    year: '2025 Aug - Present',
    title: 'Acapella Group - Alto Vocalist',
    company: 'UNSW Vocallective',
    description: 'Joined the acapella group as an alto vocalist. Practiced and performed various songs with the group.',
    type: 'extracurricular'
  },
  {
    year: '2025 Jun - 2025 Aug',
    title: 'Internship - Software Development',
    company: 'JobGen.AI',
    description: 'Automate the job application process for job seekers. Helped them find the best jobs for them.',
    type: 'work'
  },
  {
    year: '2025 May - Present',
    title: 'Retail Operator',
    company: 'Australia Post',
    description: 'Handle customer inquiries and transactions. Constantly learning and growing in the field of customer service and retail operations.',
    type: 'work'
  },
  {
    year: '2023 Oct - 2025 Oct',
    title: 'Executive Committee Member',
    company: 'UNSW Myanmar Students\' Society',
    description: 'Organised various events for the Myanmar community at UNSW. Helped them integrate into the Australian society.',
    type: 'extracurricular'
  },
  {
    year: '2022',
    title: 'Global University Award',
    company: 'UNSW Sydney',
    description: 'Awarded the Global University Award for outstanding academic performance.',
    type: 'milestone'
  },
  {
    year: '2022 - 2026',
    title: 'Bachelor of Advanced Computer Science (Honours)',
    company: 'UNSW Sydney',
    description: 'Majored in Computer Science and Engineering. Research focused on Robotic Computer Vision',
    type: 'education'
  },
  {
    year: '2019',
    title: 'First Runner Up',
    company: 'ACM ICPC Myanmar National Programming Contest',
    description: 'Achieved first runner up among all universities in Myanmar.',
    type: 'milestone'
  },
  {
    year: '2019',
    title: 'First Prize',
    company: 'Myanmar Institute of Information Technology (MIIT)',
    description: 'Achieved first prize, outperforming the entire cohort.',
    type: 'milestone'
  },
  {
    year: '2017 - 2020',
    title: 'Bachelor of Computer Science and Engineering',
    company: 'Myanmar Institute of Information Technology (MIIT)',
    description: 'Majored in Computer Science and Engineering.',
    type: 'education'
  }
];
