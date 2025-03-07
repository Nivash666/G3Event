import React from 'react';
import { Check } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import PricingCard from '../components/PricingCard';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';
import { services } from '../data/services';

const Pricing = () => {
  const commonFaqs = [
    {
      question: 'Do you require a deposit to secure a date?',
      answer: 'Yes, we require a 50% deposit to secure your event date. The remaining balance is due two weeks before the event date.'
    },
    {
      question: 'Can I customize a package to fit my specific needs?',
      answer: 'Absolutely! Our packages are starting points, and we are happy to customize them to fit your specific event needs and budget. Contact us for a personalized quote.'
    },
    {
      question: 'Are there any additional fees I should be aware of?',
      answer: 'Our package prices include our planning and coordination services. Additional costs may include vendor services, rentals, and venue fees.'
    }
  ];

  const weddingPackages = services.find(s => s.id === 'weddings')?.packages || [];
  const birthdayPackages = services.find(s => s.id === 'birthdays')?.packages || [];

  return (
    <div>
      <Hero
        title="Pricing & Packages"
        subtitle="Transparent pricing for exceptional event experiences"
        backgroundImage="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        height="h-[60vh]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Wedding Packages"
            subtitle="Comprehensive solutions for your perfect day"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {weddingPackages.map((pkg) => (
              <PricingCard
                key={pkg.name}
                title={pkg.name}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Birthday Packages"
            subtitle="Create memorable birthday experiences"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {birthdayPackages.map((pkg) => (
              <PricingCard
                key={pkg.name}
                title={pkg.name}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Common questions about our pricing and packages"
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <FAQ items={commonFaqs} />
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Start Planning?"
        subtitle="Contact us today to discuss your event needs"
        buttonText="Get in Touch"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
    </div>
  );
};

export default Pricing;