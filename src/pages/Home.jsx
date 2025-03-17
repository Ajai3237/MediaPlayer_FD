import React, { useState } from 'react'
import Add from '../component/Add'
import { Link } from 'react-router-dom'
import View from '../component/View'
import Category from '../component/Category'

function Home() {
  const [uploadVideostatus, setuploadVideostatus] = useState({})
  return (
    <>
      <div className="container d-flex align-items-center mt-5 justify-content-between">
        <Add setuploadVideostatus={setuploadVideostatus} />

        <Link style={{ textDecoration: 'none' }} to={"/Watch"}>
          <span className='fs-5 fw-bold ' style={{ color: 'white' }}>WATCH HISTORY <i class="fa-regular fa-clock fa-fade"></i></span>

        </Link>

      </div>
      {/* sec */}

      <div className='container-fluid mt-5 w-100 mb-5'>
        <div className='row'>
          <div className='col-md-9 textStyle'>
            <View uploadVideostatus={uploadVideostatus} />
          </div>
          <div className='col-md-3 textStyle'>
            <Category />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home