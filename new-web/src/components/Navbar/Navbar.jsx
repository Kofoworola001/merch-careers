// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-black font-bold text-xl">
//           <a href="#home">Logo</a>
//         </div>
//         <ul className="hidden md:flex space-x-6">
//           <li><a href="#home" className="text-black hover:text-gray-400">Home</a></li>
//           <li><a href="#about" className="text-black hover:text-gray-400">About</a></li>
//           <li><a href="#programs" className="text-black hover:text-gray-400">Programs</a></li>
//           <li>
//             <button className="bg-black text-white py-2 px-4 rounded-full hover:text-black hover:bg-yellow-300">
//               Contact Us
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button className="text-white focus:outline-none">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
  
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">
            <a href="/" className="text-gray-800">Merch Careers</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="/programs" className="text-gray-600 hover:text-gray-800">Programs</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <a href="/join" className="text-gray-600 hover:text-gray-800">Join us</a>
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex items-center space-x-1">
              <a
                href="/contact"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Contact us
              </a>
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <a href="/" className="block text-gray-600 hover:text-gray-800 py-2">Home</a>
            <a href="/about" className="block text-gray-600 hover:text-gray-800 py-2">About</a>
            <a href="/programs" className="block text-gray-600 hover:text-gray-800 py-2">Programs</a>
            <a href="/join" className="block text-gray-600 hover:text-gray-800 py-2">Join us</a>
            <a href="/contact" className="block text-gray-600 hover:text-gray-800 py-2">Contact us</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
