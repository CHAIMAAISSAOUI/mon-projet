// import axios from "axios";
// import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../stores/userStore";


export default  function Auth ({children}){
const [user]=useUser((state)=>[state.user])
return (
    <>
{user.emaile ? (
<Navigate to="/"/>

) :children }






    </>)}
