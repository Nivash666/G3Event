import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

const CallToAction = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}: CallToActionProps) => {
  return (
    <div
      className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : { backgroundColor: '#4c1d95' }
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-purple-900 opacity-80"></div>
      )}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <Link
          to={buttonLink}
          className="inline-block bg-white hover:bg-gray-100 text-purple-800 font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;