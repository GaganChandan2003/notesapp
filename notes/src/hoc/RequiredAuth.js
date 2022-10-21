import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const RequiredAuth=({children})=>
{
    let Auth=useSelector((state)=>state.reducer.isAuth);

    if(Auth)
    {
        return children
    }
    else{
        return <Navigate to="/login" replace/>
    }
}