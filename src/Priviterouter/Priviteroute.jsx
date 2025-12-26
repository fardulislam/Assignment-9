import React, { useContext } from 'react';
import { AuthContext } from '../Contex/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { FadeLoader } from 'react-spinners';

const Priviteroute = ({children}) => {

    const {user,loading}=useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return (
            <div className='h-screen flex justify-center items-center'>
                < FadeLoader />
            </div>
        )
    }

    if(!user){
        return <Navigate to={'/signin'} state={location.pathname}></Navigate>
    }
    return children
};

export default Priviteroute;