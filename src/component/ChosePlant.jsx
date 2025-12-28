import React from "react";
import { BiHomeAlt, BiLeaf } from "react-icons/bi";
import { LuBuilding2 } from "react-icons/lu";

const ChosePlant = () => {
  return (
    <section className="bg-[#F4F7F5] ">
      

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow text-center hover:scale-105 transition-transform duration-200">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#E6F1ED] text-[#1F5C47] ">
            <BiLeaf />
          </div>
          <h3 className="text-lg font-semibold text-[#2F2F2F] mb-2">
            Garden plants
          </h3>
          <p className="text-sm text-gray-500">
            Empowering all people to be plant people & a collection of articles
          </p>
        </div>

        {/* Card 2 (Active / Highlighted) */}
        <div className="bg-[#0F3D2E] p-6 rounded-lg shadow text-center text-white hover:scale-105 transition-transform duration-200">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white text-[#0F3D2E] ">
            <LuBuilding2 />
          </div>
          <h3 className="text-lg font-semibold mb-2">Office plants</h3>
          <p className="text-sm text-gray-200">
            Empowering all people to be plant people & a collection of articles
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow text-center hover:scale-105 transition-transform duration-200">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#E6F1ED] text-[#1F5C47] ">
            <BiHomeAlt />
          </div>
          <h3 className="text-lg font-semibold text-[#2F2F2F] mb-2">
            Home plants
          </h3>
          <p className="text-sm text-gray-500">
            Empowering all people to be plant people & a collection of articles
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChosePlant;
