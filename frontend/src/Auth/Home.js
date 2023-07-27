import React, { useEffect,useState } from 'react'
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Home = () => {
   const [users,setUser] = useState([])
   const navigate = useNavigate();

   useEffect(()=>{
    axios.get("http://localhost:5000/api/getall",{
      headers:{'auth':`${JSON.parse(localStorage.getItem('auth'))}`}
    })
    .then(res=>{
      setUser(res.data)
      console.log(res.data);
    }).catch(err=>{
      toast.error(err.response.data)
    })
  },[]);
  return (
    <>
    <div className='text-center bg-success '>
    <h1 className='text-info'>Registered Users</h1>
    </div>
    <table className='table table-bordered'>
      <thead>
     <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Email</th>
     </tr>
      </thead>
     <tbody>
         {
          users.length > 0 ? (
           users.map((items,index)=>(
             <tr key = {items._id}>
              <td>{index + 1}</td>
              <td>{items.name}</td>
              <td>{items.email}</td>
             </tr>
           ))
          ):(
           <td>No Data</td>
            )
         }
     </tbody>
    </table>
    <div className='text-center mt-5'>
    <button className='btn btn-info align-items ' onClick={()=>{
      localStorage.clear();
      navigate('/login');
    }
    }>LogOut</button>
    </div>
    </>
  )
}

export default Home