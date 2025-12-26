import React, { useContext } from "react";
import { useParams } from "react-router";
import { PlantsContext } from "../Contex/PlantsContext";

const PlantsDetails = () => {
  const {plantId} = useParams(); 
  const plants = useContext(PlantsContext); 
  const plant = plants.find(p => p.plantId === Number(plantId)); 

  if (!plant) return <p>Plant not found!</p>;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{plant.plantName}</h1>
      <img src={plant.image} alt={plant.plantName} className="w-full h-96 object-cover rounded mt-4" />
      <p className="mt-2">{plant.description}</p>
      <p className="mt-2 font-bold text-green-600">Price: ${plant.price}</p>
      <p className="mt-1 text-yellow-500">Rating: {plant.rating} ⭐</p>
    </div>
  );
};

export default PlantsDetails;
