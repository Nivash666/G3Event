export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Grace Williams',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    bio: 'With over 15 years of experience in event planning, Grace founded G3 Event Planners with a vision to create memorable celebrations that tell each client\'s unique story. Her attention to detail and creative approach have made her a sought-after planner for events of all sizes.',
    social: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 2,
    name: 'Gabriel Rodriguez',
    role: 'Wedding & Social Events Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    bio: 'Gabriel brings romance and elegance to every wedding and social event he plans. With a background in hospitality and design, he creates seamless experiences that allow clients to fully enjoy their special moments without worry.',
    social: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 3,
    name: 'Gabriella Chen',
    role: 'Corporate Events Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    bio: 'Gabriella specializes in corporate events that achieve business objectives while providing memorable experiences. Her background in marketing and project management ensures that every corporate gathering is strategic, polished, and impactful.',
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 4,
    name: 'Marcus Johnson',
    role: 'Design & Decor Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    bio: 'Marcus transforms venues into extraordinary environments through innovative design concepts. With a fine arts background and experience in theatrical design, he creates immersive spaces that bring event themes to life.',
    social: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 5,
    name: 'Sophia Patel',
    role: 'Logistics Coordinator',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    bio: 'Sophia is the organizational genius behind every G3 event. Her meticulous planning, vendor management, and timeline creation ensure that every event runs smoothly from start to finish.',
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 6,
    name: 'Ethan Brooks',
    role: 'Culinary & Beverage Consultant',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    bio: 'With a background as a chef and sommelier, Ethan curates exceptional food and beverage experiences for our events. He works closely with caterers and mixologists to create custom menus that delight the senses and complement each event\'s theme.',
    social: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  }
];