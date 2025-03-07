import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="Let's discuss how we can bring your event vision to life"
        backgroundImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        height="h-[60vh]"
      />

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Get in Touch"
                subtitle="We'd love to hear from you. Contact us using any of the methods below or fill out the form."
                centered={false}
              />

              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">(+91) 6383363074</p>
                    <p className="text-gray-500 text-sm mt-1">Available Monday-Sunday, 9AM-8PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">g3eventplanners@gmail.com</p>
                    <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Office Location</h3>
                    <p className="text-gray-600">43, RM Colony Main Rd, near keerthi supermarket, above Design Mania Architects, Ashok Nagar,</p>
                    <p className="text-gray-600">Dindigul Tamil Nadu 624001
                    </p>
                    <p className="text-gray-500 text-sm mt-1">Available for in-person consultations by appointment</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday-Friday: 9AM-6PM</p>
                    <p className="text-gray-600">Saturday: 10AM-4PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
                <div className="rounded-lg overflow-hidden h-80 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3924.5644590025477!2d77.9684388!3d10.3766668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab9633f2654b%3A0x86484b794f3857c3!2sG3%20Event%20Planners!5e0!3m2!1sen!2sin!4v1741362349980!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="G3 Event Planners Office Location"
                  ></iframe>
                </div>
              </div>
            </div>

            <div>
              <SectionTitle
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
                centered={false}
              />

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and process."
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <FAQ
              items={[
                {
                  question: "How soon should I contact you before my event?",
                  answer: "We recommend reaching out as soon as you have a date in mind. For weddings and large events, 2-3 months in advance is ideal. For smaller events, 1-2 months is typically sufficient. However, we occasionally have availability for last-minute events, so don't hesitate to contact us regardless of your timeline."
                },
                {
                  question: "What information should I have ready for our initial consultation?",
                  answer: "It's helpful to have a general idea of your event date, approximate guest count, location preferences, budget range, and any specific themes or elements you'd like to incorporate. Don't worry if you don't have all the details figured out – that's what we're here to help with!"
                },
                {
                  question: "Do you charge for initial consultations?",
                  answer: "We offer a complimentary 30-minute initial consultation to discuss your event needs and determine if we're a good fit for each other. This can be done in person, over the phone, or via video call."
                },
                {
                  question: "What areas do you serve?",
                  answer: "We primarily serve the Dindigul City metropolitan area, including Madurai,Kovai and Theni. For destination events, additional travel fees may apply."
                },
                {
                  question: "How do I book your services?",
                  answer: "After our initial consultation, if you decide to move forward, we'll prepare a custom proposal based on your needs. Once you approve the proposal, we require a Minimum deposit (typically 50% of the planning fee) to secure your date."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;