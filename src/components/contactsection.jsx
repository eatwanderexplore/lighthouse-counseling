import { Phone, MapPin, Calendar } from 'lucide-react';
import React from 'react';
// Contact Section Component
function ContactSection() {
    return (
      <section className="bg-gray-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <div className="flex justify-center gap-6">
          <div className="flex items-center space-x-2">
            <Phone /> <p>+64 123 456 789</p>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin /> <p>123 Counseling St, Auckland, NZ</p>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar /> <p>Mon - Fri: 9am - 5pm</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default ContactSection;
  