import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import {NavLink}  from "react-router-dom"

function Delete() {
    const {stuId} = useParams()
    const [stud,setStud] = useState([])
    const Nav = useNavigate()
    const getData = async() =>{
       const res = await axios.get(`http://localhost:5000/student/${stuId}`)
       console.log(res.data)
       setStud(res.data)
    }

    useEffect(()=>{
        getData()
    },[])
    
    const deleteData = ()=>{
        axios.delete(`http://localhost:5000/student/${stuId}`)
        alert("Data Deleted Successfully!!!")
        Nav("/show")

    }

  return (
    <div>
        <div className='bg-secondary w-50 mx-auto mt-3 mb-3 text-center'>
        <h2>Do you want to delete this  
            <span style={{color:"red"}}>
                <br></br> {stud.fname},{stud.email} </span>
                <br></br>record ?????</h2>
        <button className='btn btn-success me-3' onClick={deleteData}>Yes</button>
        <NavLink to="/show">
            <button className='btn btn-warning'>No</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Delete