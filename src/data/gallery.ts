export interface Photo {
  src: string;
  width: number;
  height: number;
  alt?: string;
  category?: string;
}

export const galleryPhotos: Photo[] = [
  // Weddings
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Elegant wedding ceremony setup',
    category: 'Weddings'
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Bride and groom first dance',
    category: 'Weddings'
  },
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Wedding reception table setting',
    category: 'Weddings'
  },
  {
    src: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 1500,
    alt: 'Wedding cake with floral decoration',
    category: 'Weddings'
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Bride getting ready with bridesmaids',
    category: 'Weddings'
  },
  
  // Birthdays
  {
    src: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Kids birthday party with colorful decorations',
    category: 'Birthdays'
  },
  {
    src: 'https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 1333,
    alt: 'Teen birthday celebration with friends',
    category: 'Birthdays'
  },
  {
    src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Elegant adult birthday dinner party',
    category: 'Birthdays'
  },
  {
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 1500,
    alt: 'Birthday cake with candles',
    category: 'Birthdays'
  },
  {
    src: 'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Children playing party games',
    category: 'Birthdays'
  },
  {
    src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 563,
    alt: 'Milestone birthday celebration',
    category: 'Birthdays'
  },
  
  // Corporate
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Business meeting in progress',
    category: 'Corporate'
  },
  {
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Team building activity',
    category: 'Corporate'
  },
  {
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Corporate gala dinner',
    category: 'Corporate'
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Business presentation',
    category: 'Corporate'
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Corporate team working together',
    category: 'Corporate'
  },
  
  // Surprise Parties
  {
    src: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Surprise party reveal moment',
    category: 'Surprise Parties'
  },
  {
    src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Friends celebrating at a surprise party',
    category: 'Surprise Parties'
  },
  {
    src: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Surprise proposal setup',
    category: 'Surprise Parties'
  },
  {
    src: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    width: 1000,
    height: 667,
    alt: 'Decorations for surprise party',
    category: 'Surprise Parties'
  }
];

export const galleryCategories = [
  'Weddings',
  'Birthdays',
  'Corporate',
  'Surprise Parties'
];