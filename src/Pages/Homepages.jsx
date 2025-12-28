import React, { useContext } from "react";
import Swiperimg from "../component/Swiperimg";
import { PlantsContext } from "../Contex/PlantsContext";
import PlantCard from "../component/PlantCard";
import { AuthContext } from "../Contex/AuthContext";
import { FadeLoader } from "react-spinners";
import Sectiontitle from "../component/Sectiontitle";
import Sectiontitle2 from "../component/Sectiontitle2";
import ChosePlant from "../component/ChosePlant";
import Selectplants from "../component/Selectplants";

const Homepages = () => {
  const { loading } = useContext(AuthContext);
  const plants = useContext(PlantsContext);
  const homePlants = plants.slice(0, 4);
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <FadeLoader color="skyblue" />
      </div>
    );
  }
  return (
    <div>
      <header>
        <Swiperimg></Swiperimg>
      </header>
      <main className=" w-11/12 mx-auto">
       <section>
        <Sectiontitle></Sectiontitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {homePlants.map((plant) => (
            <PlantCard key={plant.plantId} plant={plant} />
          ))}
        </div>
       </section>
       <section>
        <Sectiontitle2></Sectiontitle2>
        <ChosePlant></ChosePlant>
        <Selectplants></Selectplants>
       </section>

      </main>
    </div>
  );
};

export default Homepages;
