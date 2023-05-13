

import { Navigate } from 'react-router-dom';


function Private({children}){
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    if(user===null){
    //  window.location.hash ='/login'
    return <Navigate to="/login" />;

    }
    else{
        return children;
    }
}

export default Private;