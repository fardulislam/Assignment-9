import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Navber from '../component/Navber';
import Footer from '../component/Footer';
import { PlantsContext } from '../Contex/PlantsContext';




const MainLayout = () => {
    const plants = useLoaderData();

// console.log("Loader data:", plants);
    return (
        <div  className='bg-base-200 '>
         <PlantsContext.Provider value={plants}>
            <header className=''>
                <Navber></Navber>
            </header>
            <main className=''>
                <Outlet>    
            </Outlet>
            </main>
           <footer className=''>
             <Footer></Footer>
           </footer>
         </PlantsContext.Provider>
        </div>
    );
};

export default MainLayout;