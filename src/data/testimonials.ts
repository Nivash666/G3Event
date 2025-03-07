export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  eventType: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Pooja',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    quote: 'G3 Event Planners made our wedding day absolutely perfect! From the initial planning stages to the final dance, they handled everything with professionalism and creativity. Our guests are still talking about how beautiful everything was.',
    rating: 5,
    eventType: 'Wedding',
    featured: true
  },
  {
    id: 2,
    name: 'Vijay',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    quote: 'We hired G3 for our annual company gala, and they exceeded all expectations. The attention to detail was impressive, and they managed to stay within our budget while delivering a high-end experience for our team and clients.',
    rating: 5,
    eventType: 'Corporate Event',
    featured: true
  },
  {
    id: 3,
    name: 'Jennifer',
    role: 'Mother',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    quote: 'My daughter\'s sweet sixteen was everything she dreamed of thanks to G3 Event Planners. They captured her personality perfectly in every detail, and the surprise element they arranged left her speechless. Worth every penny!',
    rating: 5,
    eventType: 'Birthday Party',
    featured: true
  },
  {
    id: 4,
    name: 'Suresh',
    role: 'Husband',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    quote: 'I wanted to create a special anniversary surprise for my wife, and G3 helped me pull off the perfect evening. Their discretion and attention to the romantic details made for an unforgettable celebration of our 10 years together.',
    rating: 5,
    eventType: 'Anniversary'
  },
  {
    id: 5,
    name: 'Priyankha',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    quote: 'Our company retreat was a huge success thanks to G3. They found the perfect venue and activities that aligned with our team-building goals. The logistics were flawless, allowing me to focus on connecting with my team instead of worrying about details.',
    rating: 4,
    eventType: 'Corporate Retreat'
  },
  {
    id: 6,
    name: 'Rakesh',
    role: 'Father of the Bride',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    quote: 'As father of the bride, I wanted everything to be perfect for my daughter\'s wedding. G3 not only delivered a beautiful event but also kept us on budget and stress-free throughout the planning process. They were worth every penny.',
    rating: 5,
    eventType: 'Wedding'
  },
  {
    id: 7,
    name: 'Abinaya',
    role: 'Birthday Honoree',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    quote: 'I was completely shocked when I walked into my 40th birthday party! G3 worked with my husband to create the most amazing surprise celebration. The theme was perfect, the food was delicious, and they thought of every detail to make it special.',
    rating: 5,
    eventType: 'Surprise Birthday'
  },
  {
    id: 8,
    name: 'Mohan',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    quote: 'As someone who works in the industry, I have high standards for event planning. G3 impressed me with their professionalism and creativity when I hired them for our non-profit fundraiser. They maximized our impact while respecting our limited budget.',
    rating: 4,
    eventType: 'Fundraiser'
  }
];