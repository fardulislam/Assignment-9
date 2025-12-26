import React from "react";
import { Link } from "react-router";

const PlantCard = ({plant}) => {
     console.log("Plant passed to Card:", plant);
     console.log("Link plant id:", plant.id);

  return (
    <div className="border rounded-lg shadow p-4 flex flex-col items-center">
      {/* Image */}
      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Name */}
      <h3 className="mt-2 text-lg font-semibold">{plant.plantName}</h3>

      {/* Price */}
      <p className="text-green-600 font-bold mt-1">${plant.price}</p>

      {/* Rating */}
      <p className="text-yellow-500 mt-1">Rating: {plant.rating} ⭐</p>

      {/* View Details button */}
      <Link to={`/plants/${plant.plantId}`}>
        <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          View Details
        </button>
        
      </Link>
      
    </div>
  );
};

export default PlantCard;
