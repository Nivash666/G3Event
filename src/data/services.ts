export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  packages: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  gallery: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  {
    id: 'birthdays',
    title: 'Birthday Celebrations',
    shortDescription: 'Create unforgettable birthday experiences for all ages.',
    fullDescription: 'Our birthday celebration services are designed to create magical moments for people of all ages. Whether you are planning a child\'s themed party, a teenager\'s milestone celebration, or a sophisticated adult gathering, our team brings creativity and attention to detail to every event.',
    image: '/src/images/services/bia-OoVxXh1AQZY-unsplash.jpg',
    icon: 'Cake',
    packages: [
      {
        name: 'Kids Party Package',
        price: '₹6999',
        description: 'Perfect for children\'s birthday parties with fun themes and activities.',
        features: [
          'Theme development and decoration',
          'Games and entertainment coordination',
          'Party favors for up to 15 children',
          'Cake and refreshments arrangement',
          'Photography service (2 hours)',
          'Setup and cleanup assistance'
        ]
      },
      {
        name: 'Teen Celebration',
        price: '₹13,499',
        description: 'Trendy and age-appropriate celebrations for teenagers.',
        features: [
          'Cool venue selection assistance',
          'Modern decoration and setup',
          'DJ or playlist curation',
          'Food and beverage coordination',
          'Photo booth with props',
          'Social media-worthy backdrop',
          'Setup and cleanup assistance'
        ],
        popular: true
      }
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We discuss your vision and requirements'
      },
      {
        title: 'Planning & Design',
        description: 'We create a detailed plan and theme'
      }
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Kids birthday party'
      }
    ],
    faqs: [
      {
        question: 'Do you work with specific vendors?',
        answer: 'We have a network of trusted vendors we recommend, but we are happy to work with vendors you have already selected or help you find new ones that match your vision and budget.'
      },
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking at least 2-3 months in advance for standard parties and 4-6 months for larger events.'
      }
    ]
  },
  {
    id: 'weddings',
    title: 'Wedding Planning',
    shortDescription: 'Your dream wedding brought to life with elegance and style.',
    fullDescription: 'From intimate ceremonies to grand celebrations, our wedding planning services ensure every detail of your special day is perfect. We handle everything from venue selection to the last dance, creating a seamless and memorable experience for you and your guests.',
    image: '/src/images/gallery/khadija-yousaf-lKwp3-FQomY-unsplash.jpg',
    icon: 'Heart',
    packages: [
      {
        name: 'Essential Wedding Package',
        price: '₹10,999',
        description: 'Perfect for couples who want professional guidance while maintaining involvement in the planning process.',
        features: [
          'Initial consultation and planning timeline',
          'Vendor recommendations and coordination',
          'Wedding day timeline creation',
          'Ceremony and reception coordination',
          'Day-of coordination (10 hours)',
          'Wedding rehearsal coordination',
          'Emergency kit on wedding day'
        ]
      },
      {
        name: 'Premium Wedding Package',
        price: '₹20,999',
        description: 'Comprehensive planning and coordination for your dream wedding.',
        features: [
          'All Essential Package features',
          'Full-service planning and design',
          'Budget management and tracking',
          'Custom design and decor planning',
          'RSVP management',
          'Guest accommodation coordination',
          'Transportation coordination',
          'Weekend event planning'
        ],
        popular: true
      },
      {
        name: 'Luxury Wedding Package',
        price: '₹45,999',
        description: 'The ultimate wedding planning experience with premium services and exclusive additions.',
        features: [
          'All Premium Package features',
          'Destination wedding planning',
          'Custom wedding website',
          'Honeymoon planning assistance',
          'Personal styling assistance',
          'Unlimited planning meetings',
          'Social media coordination',
          'Professional wedding album design'
        ]
      }
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'Understanding your vision and style'
      },
      {
        title: 'Vendor Selection',
        description: 'Choosing the perfect team for your day'
      },
      {
        title: 'Design Development',
        description: 'Creating your unique wedding aesthetic'
      },
      {
        title: 'Planning & Coordination',
        description: 'Managing all details and timelines'
      },
      {
        title: 'Wedding Day',
        description: 'Ensuring flawless execution of your vision'
      }
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Wedding ceremony'
      }
    ],
    faqs: [
      {
        question: 'How far in advance should we book your services?',
        answer: 'We recommend booking 12-18 months in advance for full-service wedding planning, and at least 6-8 months for day-of coordination.'
      },
      {
        question: 'Do you work with specific vendors?',
        answer: 'We have a network of trusted vendors we recommend, but we are happy to work with vendors you have already selected or help you find new ones that match your vision and budget.'
      }
    ]
  },
  {
    id: 'surprise-parties',
    title: 'Surprise Parties',
    shortDescription: 'Create unforgettable moments with perfectly planned surprise celebrations.',
    fullDescription: 'Our surprise party planning service specializes in creating memorable moments that leave lasting impressions. We handle all the secret details, from guest coordination to the big reveal, ensuring an unforgettable experience for everyone involved.',
    image: '/src/images/services/surprise-party.jpg',
    icon: 'PartyPopper',
    packages: [
      {
        name: 'Basic Surprise Package',
        price: '$799',
        description: 'Perfect for intimate surprise gatherings.',
        features: [
          'Guest list coordination',
          'Basic decorations',
          'Surprise element planning',
          'Timeline coordination',
          'Setup assistance',
          'Basic photography (1 hour)'
        ]
      },
      {
        name: 'Premium Surprise Package',
        price: '$1,499',
        description: 'Comprehensive surprise party planning with extra special touches.',
        features: [
          'All Basic Package features',
          'Custom theme development',
          'Professional decorations',
          'Catering coordination',
          'Entertainment booking',
          'Video capture of the reveal',
          'Guest transportation coordination'
        ],
        popular: true
      }
    ],
    process: [
      {
        title: 'Secret Planning',
        description: 'Coordinating with organizers while maintaining secrecy'
      },
      {
        title: 'Guest Coordination',
        description: 'Managing invitations and RSVPs discreetly'
      },
      {
        title: 'Surprise Elements',
        description: 'Planning the perfect reveal moment'
      }
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Surprise party celebration'
      }
    ],
    faqs: [
      {
        question: 'How do you maintain the surprise?',
        answer: 'We use careful planning and coordination techniques, including separate communication channels and discreet vendor management, to ensure the surprise is maintained until the big reveal.'
      },
      {
        question: 'What if the surprise gets revealed accidentally?',
        answer: 'We have backup plans and alternative surprise elements ready to ensure the celebration remains special even if the initial surprise is compromised.'
      }
    ]
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower Celebrations',
    shortDescription: 'Celebrate new life with beautifully crafted baby shower events.',
    fullDescription: 'Our baby shower planning services combine traditional elements with modern trends to create beautiful celebrations welcoming new life. From intimate gatherings to grand affairs, we ensure every detail reflects the joy and excitement of this special occasion.',
    image: '/src/images/services/baby-showering.jpeg',
    icon: 'Baby',
    packages: [
      {
        name: 'Classic Baby Shower',
        price: '$899',
        description: 'Traditional baby shower with modern touches.',
        features: [
          'Venue selection assistance',
          'Theme development',
          'Basic decorations',
          'Games and activities',
          'Gift table setup',
          'Basic refreshments coordination'
        ]
      },
      {
        name: 'Deluxe Baby Shower',
        price: '$1,699',
        description: 'Elevated baby shower experience with premium features.',
        features: [
          'All Classic Package features',
          'Custom backdrop design',
          'Professional photography (2 hours)',
          'Catering service',
          'Custom party favors',
          'Guest book and memory cards',
          'Professional setup and cleanup'
        ],
        popular: true
      }
    ],
    process: [
      {
        title: 'Theme Selection',
        description: 'Choosing the perfect theme and color scheme'
      },
      {
        title: 'Planning Details',
        description: 'Coordinating all elements of the celebration'
      },
      {
        title: 'Setup & Execution',
        description: 'Creating the perfect atmosphere for the celebration'
      }
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Baby shower decoration'
      }
    ],
    faqs: [
      {
        question: 'When is the best time to host a baby shower?',
        answer: 'We recommend hosting the baby shower between 28-32 weeks of pregnancy, allowing enough time for preparation while ensuring the mother-to-be is comfortable.'
      },
      {
        question: 'Can you accommodate dietary restrictions?',
        answer: 'Yes, we work with caterers who can provide options for various dietary needs, including vegetarian, vegan, gluten-free, and other specific requirements.'
      }
    ]
  },
  {
    id: 'ear-piercing',
    title: 'Ear Piercing Ceremonies',
    shortDescription: 'Traditional ear piercing ceremonies with modern elegance.',
    fullDescription: 'We specialize in creating meaningful ear piercing ceremonies that honor cultural traditions while incorporating modern celebrations. Our services ensure a safe, hygienic, and memorable experience for this important milestone.',
    image: '/src/images/services/Ear-pierching.jpg',
    icon: 'Sparkles',
    packages: [
      {
        name: 'Traditional Ceremony',
        price: '$599',
        description: 'Intimate ceremony focusing on traditional elements.',
        features: [
          'Venue decoration',
          'Traditional setup',
          'Basic photography',
          'Coordination with piercing professional',
          'Light refreshments',
          'Basic decor elements'
        ]
      },
      {
        name: 'Grand Celebration',
        price: '$1,299',
        description: 'Complete ceremonial experience with extended celebrations.',
        features: [
          'All Traditional Package features',
          'Professional photography',
          'Custom backdrop',
          'Full catering service',
          'Traditional music arrangement',
          'Custom invitations',
          'Professional video recording'
        ],
        popular: true
      }
    ],
    process: [
      {
        title: 'Consultation',
        description: 'Understanding traditional requirements and preferences'
      },
      {
        title: 'Ceremony Planning',
        description: 'Arranging all ceremonial elements'
      },
      {
        title: 'Celebration',
        description: 'Executing the ceremony and festivities'
      }
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1513443539211-0bb3facc5e7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Ear piercing ceremony'
      }
    ],
    faqs: [
      {
        question: 'Do you provide the piercing professional?',
        answer: 'Yes, we work with licensed and experienced professionals who specialize in traditional ear piercing ceremonies while maintaining modern safety standards.'
      },
      {
        question: 'Can you incorporate specific cultural elements?',
        answer: 'Absolutely! We work closely with families to understand and incorporate specific cultural traditions and requirements into the ceremony.'
      }
    ]
  }
];