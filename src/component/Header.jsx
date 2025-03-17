import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar  className="bg-dark " >
        <Container style={{borderRadius:'20px'}}>
          <Navbar.Brand href="#home">
            <Link to={"/"} style={{textDecoration:'none'}}>
              <i class="fa-solid fa-video fa-fade text-warning me-3"></i>
              <span style={{ color: 'red', fontWeight: 'bolder' }}>MEDIA</span> <span style={{ color: "white" }}> PLAYER</span>
            </Link> 
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Header