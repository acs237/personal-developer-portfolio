
import { Project, Certification, JourneyItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Customisable Personal Portfolio Website',
    description: 'A website that allows the user to customise their contents in their own portfolio website.',
    videoUrl: './public/assets/videos/PMKPortfolio.mp4',
    tags: ['Tailwind CSS', 'TypeScript', 'React', 'Vite', 'Supabase'],
    links: { github: 'https://github.com/acs237/phyoe-min-khant', live: 'https://phyoe-min-khant.vercel.app' }
  },
  {
    id: '2',
    title: 'TalentFlow AI - AI-powered Talent Management System',
    description: 'A system that uses AI to help businesses manage their talent pool and find the best candidates for their open positions. Also empowers job seekers to find the best jobs for them.',
    videoUrl: './public/assets/videos/Spaghetti.mp4',
    tags: ['TypeScript', 'React', 'Express.js', 'Google Gemini API'],
    links: { github: 'https://github.com/winnieee-chan/flying-spaghetti ', live: '#' }
  },
  {
    id: '3',
    title: 'AirBrb - Simulated Airbnb Booking System',
    description: 'A simulated Airbnb booking system that allows users to book and manage their bookings.',
    videoUrl: './public/assets/videos/AirBrb.mp4',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'REST API'],
    links: { github: 'https://github.com/acs237/airbrb', live: '#' }
  },
  {
    id: '4',
    title: 'Slackr - Communication Platform',
    description: 'A platform that allows users to communicate with each other through channels, messages and images.',
    videoUrl: './public/assets/videos/Slackr.mp4',
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
    logoUrl: './public/assets/aws-certified-cloud-practitioner.png',
    verifyUrl: 'https://www.credly.com/badges/3201cb9b-858d-4e29-a536-06e93d9a2b50/public_url'
  },
  {
    id: 'aws-saa',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Jan 2026',
    // Using relative path without leading slash for better compatibility with static hosting
    logoUrl: './public/assets/aws-certified-solutions-architect-associate.png',
    verifyUrl: 'https://www.credly.com/badges/1a320109-4f52-4d1d-8c35-fbebfc8bb5b1/public_url'
  }
];

export const JOURNEY: JourneyItem[] = [
  {
    year: '2022 - Present',
    title: 'Software Engineer',
    company: 'Tech Solutions Ltd',
    description: 'Developing high-performance software and scalable cloud solutions.',
    type: 'work'
  },
  {
    year: '2018 - 2022',
    title: 'Bachelor of Advanced Computer Science (Honours) - BAdvCompSci(Hons)',
    company: 'University',
    description: 'Specialized in Advanced Computer Science with an Honours thesis in Cloud Infrastructure.',
    type: 'education'
  },
  {
    year: '2021',
    title: 'Software Development Intern',
    company: 'Innovation Labs',
    description: 'Built internal tools for monitoring distributed systems performance.',
    type: 'work'
  },
  {
    year: '2017',
    title: 'First Coding Project',
    company: 'Personal Milestone',
    description: 'Started my coding journey by building small automation scripts and web prototypes.',
    type: 'milestone'
  }
];
