import React, { useContext } from "react";
import { PlantsContext } from "../Contex/PlantsContext";
import PlantCard from "../component/PlantCard";

const Plants = () => {
      const plants = useContext(PlantsContext);
  return (
    <div className="grid grid-cols-4 gap-4">
      {plants.map((plant) => (
        <PlantCard key={plant.plantId} plant={plant} />
      ))}
    </div>
  );
};

export default Plants;
