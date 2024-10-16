import React from 'react';
import { FaStar } from 'react-icons/fa'; // Importing the star icon

const Testimonial = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-blue-600 text-xl" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <p className="text-2xl font-semibold text-gray-800 mb-6">
          "Merch Careers has been instrumental in my professional growth. The mentorship and guidance I received were invaluable."
        </p>

        {/* User Information */}
        <div className="flex flex-col items-center">
          <img 
            src="/path/to/testimonial-user.jpg" // Replace with your image path
            alt="Jamie Smith" 
            className="w-16 h-16 rounded-full mb-4" 
          />
          <p className="font-bold text-gray-900">Jamie Smith</p>
          <p className="text-gray-600">Merchandising Specialist</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;