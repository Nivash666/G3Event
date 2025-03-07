import React from 'react';
import { Calendar, Users, Award, ThumbsUp } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import TeamMember from '../components/TeamMember';
import CallToAction from '../components/CallToAction';
import { team } from '../data/team';

const About = () => {
  const stats = [
    {
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
      value: '2+',
      label: 'Years of Experience',
      description: 'Creating memorable events since 2013'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      value: '100+',
      label: 'Events Planned',
      description: 'From intimate gatherings to grand celebrations'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      value: '5',
      label: 'Industry Awards',
      description: 'Recognized for excellence in event planning in Dindigul'
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-purple-600" />,
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Our clients love our attention to detail'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About G3 Event Planners"
        subtitle="Meet the team behind your extraordinary events"
        backgroundImage="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        height="h-[60vh]"
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="h-1 w-20 bg-purple-600 mb-6"></div>
              <p className="text-gray-600 mb-6 text-lg">
                G3 Event Planners was founded in 2013 by Grace Williams, who had a vision to create a boutique event planning company that would focus on personalized service and creative excellence. The name "G3" represents the three founding principles: Grace, Gratitude, and Grandeur.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                What began as a small operation planning local birthday parties and intimate weddings has grown into a full-service event planning company with a reputation for creating unforgettable experiences across a wide range of celebrations.
              </p>
              <p className="text-gray-600 text-lg">
                Today, our team of dedicated professionals brings diverse talents and perspectives to every event we plan. We remain committed to our founding values while continuously evolving to incorporate new trends and technologies that enhance the event experience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Team planning an event"
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Event preparation"
                className="rounded-lg shadow-md h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Corporate event setup"
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Birthday celebration"
                className="rounded-lg shadow-md h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Elegant event setup"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Promise</h3>
                <p className="text-gray-600">
                  "We transform your vision into reality, creating moments that become cherished memories for a lifetime."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Mission & Values
              </h2>
              <div className="h-1 w-20 bg-purple-600 mb-6"></div>
              <p className="text-gray-600 mb-8 text-lg">
                Our mission is to create extraordinary events that exceed expectations and create lasting memories. We approach each event with creativity, integrity, and a commitment to excellence.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-xl">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">
                      We believe that every event should reflect the unique personality and vision of our clients. No two events are ever the same.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-xl">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Attention to Detail</h3>
                    <p className="text-gray-600">
                      We obsess over the small things because we know they make a big difference in creating a seamless and memorable experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-xl">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Creative Excellence</h3>
                    <p className="text-gray-600">
                      We continuously push creative boundaries to design unique, innovative, and inspiring event experiences.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-xl">04</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Relationship Building</h3>
                    <p className="text-gray-600">
                      We value the relationships we build with our clients and vendors, fostering trust and collaboration throughout the planning process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-md transition-transform duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-purple-600 mb-2">{stat.label}</p>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The creative minds behind your extraordinary events"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {team.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                social={member.social}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Let's Create Something Amazing Together"
        subtitle="Ready to start planning your next event? Our team is excited to bring your vision to life."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
    </div>
  );
};

export default About;