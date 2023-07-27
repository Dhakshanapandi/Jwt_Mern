import React from "react"
import Register from "./Auth/register.js"
import Login from "./Auth/login.js"
import Home from "./Auth/Home.js"
import {Routes,Route} from "react-router-dom"
import ProtectedRouter from "./Auth/protected.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
<ToastContainer/>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register"  element ={<Register/>}/>
          <Route exact path="/"  element ={<Register/>}/>
          <Route element={<ProtectedRouter/>}>
          <Route element={<Home/>} exact path= "/home"/>
          </Route>
         
        </Routes>
        
 
        
       
        
    </div>
  );
}

export default App;
