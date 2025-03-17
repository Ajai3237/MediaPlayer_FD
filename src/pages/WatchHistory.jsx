import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { deletewatchHIstory, Gethistory } from '../Services/AllApi';

function WatchHistory() {
  const [allHIstory , setAllHistory]=useState([])
  const GetallHistory = async ()=>{
    const resp = await Gethistory ()
    console.log("history");
    console.log(resp);

    const {data}= resp
    setAllHistory(data)
    
    
  }
  useEffect(()=>{
    GetallHistory()
  },[])

  const deleteHistory = async(id)=>{
   await deletewatchHIstory (id)
   GetallHistory(id)
  }
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <h3>WATCH HISTORY</h3>
      <Link to={'/HOME'} style={{textDecoration:'none', color:'white'}}> <i class="fa-solid fa-arrow-left-long fa-fade me-2"></i>BACK TO HOME </Link>
    </div>
    <table className='table mt-5 mb-5 container' data-bs-theme="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>CAPTION</th>
          <th>URL</th>
          <th>TIME</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {
          allHIstory.length>0?
          allHIstory.map((item)=>(
            <tr>
            <td>1</td>
            <td>KILIYEE</td>
            <td>WWW. youtube.com/KILIYE</td>
            <td> 2025-03-05 12:45</td>
            <td><Button variant="danger" onClick={()=>deleteHistory(item.id)}><i class="fa-solid fa-trash fa-shake"></i></Button></td>
          </tr>

          )):
          <p className='m-5 text-danger fw-bold'>NO HISTORY IS FOUND</p>
        }
       
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory