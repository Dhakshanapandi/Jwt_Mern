import React from "react"
import {Outlet,Navigate} from "react-router-dom"


const ProtectedRouter = ()=>{
    const hasToken = JSON.parse(localStorage.getItem('auth'))
    
    return (
      hasToken !== null ? <Outlet/> : <Navigate to = "/login"/>
    )

}


export default ProtectedRouter;
    