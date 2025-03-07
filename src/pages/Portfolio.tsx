import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Gallery from '../components/Gallery';
import TestimonialCard from '../components/TestimonialCard';
import CallToAction from '../components/CallToAction';
import { galleryPhotos, galleryCategories } from '../data/gallery';
import { testimonials } from '../data/testimonials';

const Portfolio = () => {
  const featuredTestimonials = testimonials.filter(testimonial => testimonial.featured);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Portfolio"
        subtitle="A showcase of our most memorable events and celebrations"
        backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        height="h-[60vh]"
      />

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Event Gallery"
            subtitle="Browse through our collection of successful events and celebrations"
          />

          <div className="mt-12">
            <Gallery
              photos={galleryPhotos}
              categories={galleryCategories}
            />
          </div>
        </div>
      </section>

      {/* Client Stories Section */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Client Stories"
            subtitle="Read what our clients have to say about their experience with us"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                quote={testimonial.quote}
                rating={testimonial.rating}
                eventType={testimonial.eventType}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to Create Your Own Success Story?"
        subtitle="Let's start planning your perfect event today."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
    </div>
  );
};

export default Portfolio;