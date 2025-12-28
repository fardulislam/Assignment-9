import React, { useContext } from "react";
import { PlantsContext } from "../Contex/PlantsContext";
import PlantCard from "../component/PlantCard";

const Plants = () => {
      const plants = useContext(PlantsContext);
  return (
    <div className="my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
      {plants.map((plant) => (
        <PlantCard key={plant.plantId} plant={plant} />
      ))}
    </div>
  );
};

export default Plants;
