
export interface Project {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  logoUrl: string;
  verifyUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'education' | 'work' | 'milestone' | 'extracurricular';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
