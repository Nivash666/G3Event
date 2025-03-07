import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  popular = false,
  buttonText = 'Get Started',
  buttonLink = '/contact',
}: PricingCardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
        popular ? 'border-2 border-purple-500 relative' : ''
      }`}
    >
      {popular && (
        <div className="bg-purple-500 text-white text-sm font-semibold py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          {price !== 'Custom' && <span className="text-gray-600">/package</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          to={buttonLink}
          className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
            popular
              ? 'bg-purple-600 hover:bg-purple-700 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;