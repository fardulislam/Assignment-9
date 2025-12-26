import React, { useContext } from "react";
import Swiperimg from "../component/Swiperimg";
import { PlantsContext } from "../Contex/PlantsContext";
import PlantCard from "../component/PlantCard";

const Homepages = () => {
  const plants = useContext(PlantsContext);
  const homePlants = plants.slice(0, 4);
  return (
    <div>
      <header>
        <Swiperimg></Swiperimg>
      </header>
      <main>
        <div className="grid grid-cols-4 gap-4">
          {homePlants.map((plant) => (
            <PlantCard key={plant.plantId} plant={plant} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Homepages;
