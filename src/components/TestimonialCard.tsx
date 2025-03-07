import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  eventType: string;
}

const TestimonialCard = ({
  name,
  role,
  image,
  quote,
  rating,
  eventType,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex items-center mb-4">
        <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
          <p className="text-purple-600 text-sm">{eventType}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 italic">{quote}</p>
    </div>
  );
};

export default TestimonialCard;