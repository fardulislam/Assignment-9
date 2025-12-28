import React from 'react';
import plantImage from '../assets/plants imgae.avif'
 const Selectplants = () => {
    return (
        <div className="flex items-center bg-[#1F3B2E] text-white p-6 rounded-2xl w-full h-100 mx-auto shadow-lg my-10">
      {/* Text section */}
      <div className="flex-1 pr-6">
        <p className="text-sm md:text-base mb-4">
          Empowering all people to be plant people – a collection of articles
          from The Sill’s team of Plant Experts across a variety of plant care
          topics to inspire confidence in the next generation of plant parents.
          Welcome to Plant Parenthood
        </p>
        <p className="font-semibold text-yellow-400">Jhon Roy</p>
        <p className="text-xs text-gray-300">by Founder</p>
      </div>

      {/* Image section */}
      <div className="flex-shrink-0">
        <img
          src={plantImage}
          alt="Plant"
          className="w-32 h-32 md:w-full md:h-80 object-cover rounded-lg"
        />
      </div>
    </div>
    );
};

export default Selectplants;
