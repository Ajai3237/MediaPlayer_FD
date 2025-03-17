import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <>
    <Container className='mt-5 mb-5 align-item-center justify-content-evenly'>
      <Row>
        <Col>
        <h3 style={{color:'white'}}>WELCOME TO <span style={{color:'red', fontWeight:'bolder'}}>MEDIA PLAYER</span></h3>
        <p className='textstyle mt-3' style={{color:'white', textAlign:'justify', fontFamily:'cursive'}}>Music is a universal language that transcends cultures, emotions, and time. It has the power to evoke deep feelings, tell stories, and connect people across the world. From classical symphonies to modern pop hits, music takes many forms, each with its own rhythm, melody, and meaning. It can be a source of comfort, inspiration, or excitement, influencing moods and even shaping identities. Whether played on instruments, sung, or produced digitally, music remains an essential part of human expression, bringing joy and unity to those who experience it.</p>
        <Link to={"/Home"}>
        <button className='btn btn-warning' >GET STARTED </button>
        </Link>
        </Col>

        <Col>
           <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnoxdTBnM3UwZGh4Njc2bG8xdzFlMjEybHIzd2oxbTI1eW9objN5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85xvHW8R8jgXSKTS/giphy.gif" alt="" width={'400px'} className='ms-5 ' />
        </Col>
      </Row>
    </Container>

    {/* second*/}
    <div className="container">
      <h3 className='textstyle'>FEATURES</h3>
      <div className='d-flex align-item-center justify-content-evenly mt-5'>
      <Card style={{ width: '18rem',  color:'white'}}>
      <Card.Img variant="top" src="https://media.giphy.com/media/3o85xEsjn0ag8XktmE/giphy.gif?cid=ecf05e475hqpxnu1jrga55ven5ryd0tfquslg8v1e1p0q3cp&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title>MANAGE VIDEOS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={"/Home"}>
        <Button variant="warning">MANAGE VIDEOS</Button>
        </Link>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', color:'white'}}>
      <Card.Img style={{height:'300px'}} variant="top" src="https://media.giphy.com/media/hrRD73T5lFHoNMfFbY/giphy.gif?cid=ecf05e47xweipiv96np3p5jb7xo6zb4z04s9kmk4fv7kqm52&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title>ADD VIDEOS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        <Link to={"/Home"}>
        <Button variant="warning">ADD VIDEOS</Button>
        </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', color:'white' }}>
      <Card.Img style={{height:'300px'}} variant="top" src="https://media.giphy.com/media/h4Cn6OK4ysRygk9R0T/giphy.gif?cid=ecf05e475vnj95jpdam9nicc5xiof2vkn5qbnqyzlo0hpsgj&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title>WATCH HISTORY</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        <Link to={"/Watch"}>
        <Button variant="warning">WATCH HISTORY</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
    </div>

    {/* Third */}
    <div className="container mt-5 mb-5 border border-1 border-secondary rounded p-5">
      <Row>
        <Col>
        <h3>SIMPLE AND POWERFULL</h3>
        <p><span>PLAY EVERYTHING</span>Music is a universal language that transcends cultures, emotions, and time. It has the power to evoke deep feelings, tell stories, and connect people across the world. From classical symphonies to modern pop hits, music takes many forms, each with its own rhythm, melody, and meaning. It can be a source of comfort, inspiration, or excitement, influencing moods and even shaping identities. Whether played on instruments, sung, or produced digitally, music remains an essential part of human expression, bringing joy and unity to those who experience it.</p>
        
        <p><span>PLAY EVERYTHING</span>Music is a universal language that transcends cultures, emotions, and time. It has the power to evoke deep feelings, tell stories, and connect people across the world. From classical symphonies to modern pop hits, music takes many forms, each with its own rhythm, melody, and meaning. It can be a source of comfort, inspiration, or excitement, influencing moods and even shaping identities. Whether played on instruments, sung, or produced digitally, music remains an essential part of human expression, bringing joy and unity to those who experience it.</p>
        


        </Col>
        <Col>
        <div className="">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/qpWHNA2loyA?si=ewU31TB8RJtVDOtB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default LandingPage