import React from 'react'
import {Navigate} from "react-router-dom";
function SecondPrivate({children}) {
    const auth = localStorage.getItem("email");
  return (
    auth?children:<Navigate to ="/login" />
  )
}

export default SecondPrivate