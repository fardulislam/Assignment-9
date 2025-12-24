import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvaider = ({children}) => {
    const [user,setuser]=useState(null)

    const authinfo = {
        user,
        setuser

    }

    return <AuthContext value={authinfo}>{children}</AuthContext>
};

export default AuthProvaider;