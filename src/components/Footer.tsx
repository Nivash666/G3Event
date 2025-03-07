import React from 'react';
import { Link } from 'react-router-dom';
import { PartyPopper, Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <PartyPopper className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">G3 Event Planners</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating unforgettable moments and turning your dreams into reality. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Portfolio</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/birthdays" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Birthday Celebrations</Link>
              </li>
              <li>
                <Link to="/services/weddings" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Wedding Planning</Link>
              </li>
              <li>
                <Link to="/services/surprise-parties" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Surprise Parties</Link>
              </li>
              <li>
                <Link to="/services/corporate" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Corporate Events</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5" />
                <span className="text-gray-400">43, RM Colony Main Rd, Ashok Nagar, Dindigul</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400">(91) 6383363074</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400">g3eventplanners@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-purple-400 mt-0.5" />
                <span className="text-gray-400">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM<br />Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} G3 Event Planners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;