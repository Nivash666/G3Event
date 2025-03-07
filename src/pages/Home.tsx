import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart, PartyPopper, Briefcase, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CallToAction from '../components/CallToAction';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const featuredServices = services.slice(0, 4);
  const featuredTestimonials = testimonials.filter(testimonial => testimonial.featured);

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const gallerySettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const serviceIcons = {
    'birthdays': <Calendar className="h-12 w-12 text-purple-600" />,
    'weddings': <Heart className="h-12 w-12 text-purple-600" />,
    'surprise-parties': <PartyPopper className="h-12 w-12 text-purple-600" />,
    'corporate': <Briefcase className="h-12 w-12 text-purple-600" />
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Creating Unforgettable Events"
        subtitle="From intimate gatherings to grand celebrations, we bring your vision to life with creativity, precision, and passion."
        backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        buttonText="Plan Your Event"
        buttonLink="/contact"
      />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Services"
            subtitle="We specialize in creating personalized events that reflect your style and exceed your expectations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.shortDescription}
                image={service.image}
                link={`/services/${service.id}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Your Vision, Our Expertise
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                At G3 Event Planners, we believe that every celebration should be as unique as the people it honors. Our team of creative professionals is dedicated to transforming your ideas into extraordinary experiences.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                With meticulous attention to detail and a passion for perfection, we handle everything from concept development to flawless execution, allowing you to relax and enjoy every moment of your special occasion.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-lg">
                  <span className="text-4xl font-bold text-purple-600 mb-2">100+</span>
                  <span className="text-gray-700">Events Planned</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-lg">
                  <span className="text-4xl font-bold text-purple-600 mb-2">98%</span>
                  <span className="text-gray-700">Client Satisfaction</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Event planning team in action"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80"
                      alt="Client"
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80"
                      alt="Client"
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80"
                      alt="Client"
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Trusted by</p>
                    <p className="text-xs text-gray-500">hundreds of happy clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Client Testimonials"
            subtitle="Don't just take our word for it. Here's what our clients have to say about their experience with G3 Event Planners."
          />

          <div className="mt-12">
            <Slider {...testimonialSettings}>
              {featuredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-2">
                  <TestimonialCard
                    name={testimonial.name}
                    role={testimonial.role}
                    image={testimonial.image}
                    quote={testimonial.quote}
                    rating={testimonial.rating}
                    eventType={testimonial.eventType}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300"
            >
              See More Success Stories <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Recent Events"
            subtitle="Take a glimpse at some of the beautiful events we've had the pleasure of creating."
          />

          <div className="mt-12">
            <Slider {...gallerySettings}>
              <div className="px-2">
                <img
                  src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Wedding ceremony"
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
              <div className="px-2">
                <img
                  src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Birthday party"
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
              
              <div className="px-2">
                <img
                  src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Surprise party"
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
              <div className="px-2">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Wedding dance"
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
              <div className="px-2">
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Corporate gala"
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
            </Slider>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to Plan Your Perfect Event?"
        subtitle="Let's create something extraordinary together. Contact us today to start planning your dream celebration."
        buttonText="Get in Touch"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
    </div>
  );
};

export default Home;