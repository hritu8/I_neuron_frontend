import { useEffect } from "react";
import { selectLoggedInUser, signOutAsync } from "../authSlice";
import Navbar from "../../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LogOut() {
    const dispatch = useDispatch();
    const user=useSelector(selectLoggedInUser);
    useEffect(()=>{
        dispatch(signOutAsync())
    })
    return ( <>
       {user &&  <Navigate to="/login" replace={true}></Navigate>}
       </>
     );
}

export default LogOut;