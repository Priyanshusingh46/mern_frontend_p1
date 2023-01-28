import React from 'react'
import {Navigate,Outlet} from "react-router-dom";

function PrivateComponent({children}) {
    const auth = localStorage.getItem("user");
  return (
    auth?children:<Navigate to ="/login" />
  )
}

export default PrivateComponent