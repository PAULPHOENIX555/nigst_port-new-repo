

import { Navigate } from 'react-router-dom';


function Private({children}){
    const user = JSON.parse(localStorage.getItem("user"))
    if(user===null){
    return <Navigate to="/login" />;
    }
    else{
        return children;
    }
}

export default Private;