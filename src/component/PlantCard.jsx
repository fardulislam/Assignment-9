import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  return (
    <div className="bg-white rounded-lg shadow  flex flex-col hover:scale-105 transition-transform duration-200">
    
      {/* Image */}
      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full h-38 object-cover rounded-md"
      />

      <div className="p-2">
        <h3 className="mt-2 text-lg font-semibold">{plant.plantName}</h3>

        <div className="flex  justify-between ">
          <p className="text-green-600 font-bold mt-1">${plant.price}</p>

          <p className="text-yellow-500 mt-1">Rating: {plant.rating} ⭐</p>
        </div>

        <Link to={`/plants/${plant.plantId}`}>
          <button className="mt-3 bg-green-600 text-white w-full  py-2 rounded hover:bg-green-700 cursor-pointer hover:scale-105 transition-transform duration-200 ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;
