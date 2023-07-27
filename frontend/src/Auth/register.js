import React from 'react'
import { useState } from 'react'
import {toast } from "react-toastify"
import {useNavigate} from "react-router-dom"

import axios from "axios"

const Register = (props) => {
  const Navigate = useNavigate();
  const [Name,setName] = useState("");
  const[Email,setEmail] = useState("");
  const [Password,setPass] = useState("")

  const onsubmit = async(e)=>{
   e.preventDefault();
   
    const data = {
          name:Name,
          email:Email,
          password:Password
    }
    console.log(data);
    await axios.post("http://localhost:5000/api/register",data)
    .then((res)=>{
       Navigate("/login")
    }).catch((err)=>{
      toast.error(err.response.data)
      console.log(err);
    })
  }
  return (
    <div className='container col-4 text-white bg-primary p-4 mx-auto  mt-5 '>
      <h3 className='text-white'>Registration Form</h3>
      <form className='form-group' onSubmit={(e)=>onsubmit(e)}>
        <label>Name:</label>
        <input className='form-control' type="text" value={Name} onChange={(e)=>setName(e.target.value)} />
        <label>Email:</label>
        <input className='form-control' type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} />
        <label>Password:</label>
       
        
        <input className='form-control' type="password" value={Password} onChange={(e)=>setPass(e.target.value)} />
        <div className='text-center mt-3'>
        <button className='btn btn-success mt-3 text-center'>
         Register
        </button>
        </div>
        <div style={{float:'right' , marginTop:"-5%"}}>
        <button className='btn btn-danger  text-center' onClick={()=>Navigate('/login')}>
         Login
        </button>
        </div>

      </form>
    </div>
  )
}

export default Register