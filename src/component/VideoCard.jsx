import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addHistory, deleteVideo } from '../Services/AllApi';
import { ToastContainer, toast } from 'react-toastify'

function VideoCard({ displayVideo ,setdeleteVideo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const {caption , embededLink}= displayVideo
    const today = new Date();
    console.log(today);
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const day = today.getDay();
   
    console.log(year,month,day);
   
    const hour = today.getHours();
    const minute= String(today.getMinutes()).padStart(2,"0");
    const timeValue = day+'-'+month+"-"+year+" "+ hour + ":" +minute
    console.log(timeValue);

    const history ={
      caption,
      embededLink,
      timeStamp:timeValue
    }
    await addHistory(history)
    
 
    console.log(hour,minute);
    


    
    
    
  }

  const removeVideo = async (id) => {
    const response = await deleteVideo(id)
    console.log(response);
    if (response.status === 200) {
      setdeleteVideo(response)
      toast.error(`${displayVideo.caption} successfully deleted`)
    }
  }
  const dragStarted =(e, id) =>{
    console.log(`video with ${id} started dragging`);
    e.dataTransfer.setData("videoID",id)
    
  }
  return (
    <>
      <Card style={{ width: '18rem', height: '18rem' }} draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}>
        <Card.Img onClick={handleShow} variant="top" src={displayVideo.thumbnailurl} height={'200px'} />
        <Card.Body>

          <div className=" d-flex justify-content-between">
            <Card.Title style={{ color: 'white' }} >{displayVideo.caption.slice(0.12)}</Card.Title>

            <Button style={{ height: '50px' }} onClick={() => removeVideo(displayVideo.id)} variant="danger"><i class="fa-solid fa-trash fa-shake"></i></Button>
          </div>

        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ color: 'white' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="400px" src={displayVideo.embededLink}  ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />

    </>


  )
}

export default VideoCard