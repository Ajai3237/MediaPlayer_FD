import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div style={{borderRadius:'20px'}} className="d-flex justify-content-center align-item-center mt-5 bg-dark p-2 ">
        <div style={{borderRadius:'20px'}} className="d-flex align-items-center justify-content-evenly p-3">
          <div className="overview" style={{ width: "400px" }}>
            <h5><i className="fa-solid fa-video fa-fade text-warning me-3"></i>
              <span style={{ color: 'red', fontWeight: 'bolder' }}>MEDIA</span> <span style={{ color: "white" }}> PLAYER</span>
            </h5>
            <p style={{ color: "white", textAlign: "justify", fontFamily: "cursive" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore adipisci autem incidunt repellat, dignissimos necessitatibus officia eveniet ullam eligendi neque perspiciatis ipsum suscipit ab laborum mollitia. Recusandae, harum esse.</p>

          </div>

          <div className="links d-flex flex-column m-3" style={{ color: 'white' }}>
            <h4 style={{ color: 'red', fontWeight: 'bolder' }}>LINKS</h4>

            <Link to={"/"} style={{textDecoration:'none', color:"white"}}>LANDING PAGE</Link>

            <Link to={"/Home"} style={{textDecoration:'none', color:"white"}}>HOME</Link>

            <Link to={"/Watch"} style={{textDecoration:'none', color:"white"}}>WATCH HISTORY</Link>


          </div>
          <div className="links d-flex flex-column m-3" style={{ color: 'white' }}>
            <h4 style={{ color: 'red', fontWeight: 'bolder' }}>GUIDES</h4>
            <a style={{textDecoration:"none", color:"white"}} target='blank' href="https://react.dev/">REACT</a>
            
            <a style={{textDecoration:"none", color:"white"}} target='blank'  href="https://react-bootstrap.netlify.app/"> REACT BOOTSTRAP</a>
          
            <a style={{textDecoration:"none", color:"white"}} target='blank'  href="https://fontawesome.com/">FONT AWESOME</a>
          </div>
          <div className="contact_us ms-3 " style={{ color: 'white' }}>
            <h4>CONTACT US</h4>

            <div className="d-flex">
              <input type="text" name='' placeholder='Enter Your Name' className='form_control' />
              <button className='btn btn-warning ms-3'>SUBSCRIBE</button>
            </div>
            <div className=" d-flex justify-content-evenly align-item-center mt-3">
              <i class="fa-brands fa-instagram fa-fade fa-2x"></i>
              <i class="fa-brands fa-twitter fa-fade fa-2x"></i>
              <i class="fa-brands fa-whatsapp fa-fade fa-2x"></i>
              <i class="fa-brands fa-reddit fa-fade fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center mt-5' style={{ color: 'gray' }}>Copy right <i class="fa-solid fa-copyright"></i> 2025 MEDIA PLAYER BUILT IT WITH REACT</p>
    </>
  )
}

export default Footer