import React, { useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
import "./style.css"

const Login = () => {
     const [Email,setEmail] = useState();
     const [Password,setPass] = useState();
    const Navigate = useNavigate()
     const onsubmit = async(e)=>{
      e.preventDefault();
      const data = {
        email:Email,
        password:Password
      }
     await axios.post("http://localhost:5000/api/login",data)
     .then(res =>{
       localStorage.setItem('auth',JSON.stringify(res.data))
       Navigate('/home')
     }).catch(err =>{
        toast.error(err.response.data)
     })

     }
     return(
      <div className='container col-4 text-white bg-primary p-4 mx-auto  mt-5 '>
      <h3 className='text-white'>Login Form</h3>
      <form className='form-group' onSubmit={(e)=>onsubmit(e)}>
        <label>Email:</label>
        <input className='form-control' type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} />
        <label>Password:</label>
        <input className='form-control' type="password" value={Password} onChange={(e)=>setPass(e.target.value)} />
        <button className='btn btn-info mt-3 text-center'>
         Login
        </button>
      </form>
    </div>
     )
     
}

export default Login