
import { FaStar } from 'react-icons/fa';
import  img from '../../assets/images/img.svg';

const Testimonial = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 flex flex-col text-center justify-center">
        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-blue-600 text-xl" />
          ))}
        </div>

        {/* Testimonial Quote */}
       <div className='flex items-center justify-center'>
         <p className="text-2xl font-semibold text-gray-800 mb-6 w-2/3  border-solid border-[1px]">
          Merch Careers has been instrumental in my professional growth. The mentorship and guidance I received were invaluable.
        </p>
       </div>

        {/* User Information */}
        <div className="flex flex-col items-center ">
          <div className='flex flex-row justify-start gap-5 '>
            <img src={img} alt="Testimonial User" className='w-12 h-12'/>
            <div className='flex flex-col items-start'>
              <h2 className="text-lg font-semibold text-gray-800">Jo Doe</h2>
              <p className="text-gray-600t text-sm font-thin">Scrum Master</p>
            </div>
          </div>
        </div>
      </div>

      <div >

        <div>
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>

        



      </div>
    </section>
  );
};

export default Testimonial;