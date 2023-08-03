import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const WithOuthRedirect=(Component)=>{

    const PrivatComponent = (props) =>{
        const userData = useSelector((state)=>state.user.userData);
        // const navigate=Navigate
        return userData ? <Component {...props}/>
        : <Navigate to='/login' replace={true}/>
    };

    return PrivatComponent;
}

export default WithOuthRedirect
