import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Heart, PartyPopper, Briefcase, Check } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import PricingCard from '../components/PricingCard';
import ProcessStep from '../components/ProcessStep';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been moved.</p>
          <Link
            to="/services"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const serviceIcons = {
    'birthdays': <Calendar className="h-8 w-8" />,
    'weddings': <Heart className="h-8 w-8" />,
    'surprise-parties': <PartyPopper className="h-8 w-8" />,
    'corporate': <Briefcase className="h-8 w-8" />
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title={service.title}
        subtitle={service.shortDescription}
        backgroundImage={service.image}
        height="h-[60vh]"
      />

      {/* Service Description */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  {serviceIcons[service.id as keyof typeof serviceIcons]}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{service.title}</h2>
              </div>
              <div className="h-1 w-20 bg-purple-600 mb-6"></div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {service.fullDescription}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What We Offer:</h3>
                {service.packages.map((pkg) => (
                  <div key={pkg.name} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{pkg.name} - {pkg.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Process"
            subtitle={`How we create your perfect ${service.title.toLowerCase()} experience`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-12">
            {service.process.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                icon={serviceIcons[service.id as keyof typeof serviceIcons]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Packages & Pricing"
            subtitle="Choose the perfect package for your event needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {service.packages.map((pkg) => (
              <PricingCard
                key={pkg.name}
                title={pkg.name}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
                buttonText="Request Quote"
                buttonLink="/contact"
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Need a custom package? We can create a tailored solution just for you.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Event Gallery"
            subtitle={`Take a look at some of our past ${service.title.toLowerCase()} events`}
          />

          <div className="mt-12">
            <Gallery photos={service.gallery} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle={`Common questions about our ${service.title.toLowerCase()} services`}
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <FAQ items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title={`Ready to Plan Your ${service.title}?`}
        subtitle="Contact us today to start creating your perfect event experience."
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage={service.image}
      />
    </div>
  );
};

export default ServiceDetail;