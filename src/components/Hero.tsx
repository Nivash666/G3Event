import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
  height?: string;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  buttonText = 'Get Started',
  buttonLink = '/contact',
  overlay = true,
  height = 'h-screen'
}: HeroProps) => {
  return (
    <div
      className={`relative ${height} flex items-center justify-center bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {buttonText && (
          <Link
            to={buttonLink}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;