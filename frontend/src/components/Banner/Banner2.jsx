import React from 'react';
import satelliteImg from '../../assets/satelite2.jpg';

const Banner2 = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {/* Text section first */}
          <div className='space-y-3 xl:pl-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800'>
            <p data-aos="fade-up" className='text-sky-400 uppercase'>Our Mission</p>
            <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl'>Rapidcast</h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
              dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
              tempora similique dignissimos repellat aperiam veniam culpa
              consequatur repudiandae asperiores saepe dsfffffffffffffffffffffffff
              dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
              dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
              fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
              ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            </p>
            <button data-aos="fade-up" data-aos-delay="700" className='primary-button'>Learn More</button>
          </div>
          {/* Image section second */}
          <div className="flex justify-end">
            <img data-aos="zoom-in"
              src={satelliteImg}
              className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'
              alt="Satellite" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
