import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Navber from '../component/Navber';
import Footer from '../component/Footer';
import { PlantsContext } from '../Contex/PlantsContext';



const MainLayout = () => {
    const plants = useLoaderData();

console.log("Loader data:", plants);
    return (
        <div >
         <PlantsContext.Provider value={plants}>
            <Navber></Navber>
            <Outlet>
                
            </Outlet>
            <Footer></Footer>
         </PlantsContext.Provider>
        </div>
    );
};

export default MainLayout;