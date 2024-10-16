
import img from '../../assets/images/img.svg';
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-blue-100 min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-8 pt-20 md:pt-32">
        
        {/* Left side: Large text */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 transition-opacity duration-1000 opacity-100">
          <div>
            <h1 className="text-5xl md:text-3xl lg:text-6xl font-bold text-black">
            Welcome to
          </h1>
          <span className='text-7xl font-bold text-yellow-600 '>Merch Careers</span>
          </div>
          <p className="mt-4 text-lg md:text-lg text-black">
            your gateway to a thriving career.
          </p>
          <div className='flex flex-row'>
            <button className="mt-8 bg-black text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition-transform duration-500 ease-in-out transform hover:scale-105">
              Join our community
            </button>

            <div className='flex flex-row justify-center ml-6 items-center'>
              <button className="mt-8 text-black py-2 px-6 rounded transition-transform duration-500 ease-in-out transform hover:scale-105">
                Learn More About Us
              </button>

              <FaArrowRight className='mt-8 ml-[-5] transition-transform duration-500 ease-in-out transform hover:translate-x-2' />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-row justify-center md:justify-start mt-8 space-x-8">
            <div>
              <p className="text-2xl font-bold text-black">10K+</p>
              <p className="text-gray-600">Mentorships</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">5K+</p>
              <p className="text-gray-600">Connections</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">8K+</p>
              <p className="text-gray-600">Opportunities</p>
            </div>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 overflow-hidden rounded-tl-[180px] rounded-br-[180px] rounded-[60px] opacity-100 transition-opacity duration-1000">
          <img
            src={img}
            alt="Placeholder for house or apartment"
            className="w-full h-auto shadow-lg transition-transform duration-1000 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
