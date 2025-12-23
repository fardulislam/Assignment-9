import React from 'react';
import { NavLink } from 'react-router';

const Mylinks = ({to, className ,children}) => {
    return (
       <div>
        <NavLink
        to={to}
        className={({isActive})=>(isActive?'text-green-400':`${className}`)}>
          {children}
        </NavLink>
       </div>
    );
};

export default Mylinks;