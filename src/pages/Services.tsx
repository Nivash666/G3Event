import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart, PartyPopper, Briefcase } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProcessStep from '../components/ProcessStep';
import CallToAction from '../components/CallToAction';
import { services } from '../data/services';

const Services = () => {
  const serviceIcons = {
    'birthdays': <Calendar className="h-8 w-8" />,
    'weddings': <Heart className="h-8 w-8" />,
    'surprise-parties': <PartyPopper className="h-8 w-8" />,
    'corporate': <Briefcase className="h-8 w-8" />
  };

  const generalProcess = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We start by understanding your vision, preferences, and requirements for the event.',
      icon: <Calendar className="h-8 w-8" />
    },
    {
      number: 2,
      title: 'Proposal & Planning',
      description: 'Based on your needs, we create a detailed proposal and begin the planning process.',
      icon: <Heart className="h-8 w-8" />
    },
    {
      number: 3,
      title: 'Design & Coordination',
      description: 'Our team handles all aspects of design, vendor coordination, and logistics.',
      icon: <PartyPopper className="h-8 w-8" />
    },
    {
      number: 4,
      title: 'Flawless Execution',
      description: 'On the day of your event, we ensure everything runs smoothly so you can enjoy the moment.',
      icon: <Briefcase className="h-8 w-8" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive event planning solutions for every occasion"
        backgroundImage="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        height="h-[60vh]"
      />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Event Planning Services"
            subtitle="From intimate gatherings to grand celebrations, we bring your vision to life with creativity and precision."
          />

          <div className="grid grid-cols-1 gap-12 mt-12">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      {serviceIcons[service.id as keyof typeof serviceIcons]}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">{service.fullDescription}</p>
                  <div className="space-y-3 mb-6">
                    {service.packages.slice(0, 3).map((pkg) => (
                      <div key={pkg.name} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-purple-600 text-sm font-bold">✓</span>
                        </div>
                        <p className="text-gray-700">{pkg.name}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Process"
            subtitle="How we bring your vision to life, from concept to celebration"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {generalProcess.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose G3 Event Planners?
              </h2>
              <div className="h-1 w-20 bg-purple-600 mb-6"></div>
              <p className="text-gray-600 mb-8 text-lg">
                With G3 Event Planners, you're not just hiring an event coordinator – you're partnering with a team of creative professionals dedicated to bringing your vision to life. Here's what sets us apart:
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">
                      We take the time to understand your unique vision and create a customized plan that reflects your style and preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Experienced Team</h3>
                    <p className="text-gray-600">
                      Our team brings years of industry experience and a diverse set of skills to ensure every aspect of your event is handled with expertise.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Vendor Network</h3>
                    <p className="text-gray-600">
                      We've cultivated relationships with the best vendors in the industry, giving you access to top-tier services at competitive prices.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Stress-Free Experience</h3>
                    <p className="text-gray-600">
                      We handle all the details, big and small, so you can relax and enjoy your special occasion without worry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/src/images/services/marriage_2.jpg"
                alt="Event planning meeting"
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Event decoration"
                className="rounded-lg shadow-md h-64 object-cover mt-8"
              />
              <img
                src="/src/images/services/birthday_3.jpg"
                alt="Celebration moment"
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Wedding ceremony"
                className="rounded-lg shadow-md h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to Start Planning Your Event?"
        subtitle="Contact us today to schedule a consultation and bring your vision to life."
        buttonText="Get in Touch"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
    </div>
  );
};

export default Services;