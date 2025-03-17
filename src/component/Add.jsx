import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import uploadeVideo from '../Services/AllApi';
import { ToastContainer, toast } from 'react-toastify';



function Add({setuploadVideostatus}) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setvideo({
            caption: '',
            thumbnailurl: '',
            embededLink: ''
        })

    }
    const handleShow = () => setShow(true);
    const [video, setvideo] = useState({
        caption: '',
        thumbnailurl: '',
        embededLink: ''
    })
    const HandleUpload = async () => {
        console.log("uploade video");
        console.log(video);
        const { caption, thumbnailurl, embededLink } = video
        if (!caption || !thumbnailurl || !embededLink) {
            toast.warning("please fill the form fully")
        }
        else {
            const result = await uploadeVideo(video)
            console.log("result");
            console.log(result);

            if (result.status === 201) {
                setuploadVideostatus(result)
                toast.success('Video is successfully uploaded')
                handleClose()
            } else {
                alert('somthing went wrong')
            }


        }


    }

    const setEmbededLink = (data) => {
        //set embaded link
        const link = `https://www.youtube.com/embed/${data.slice(-11)}`
        console.log(link);
        setvideo({ ...video, embededLink: link })


    }
    return (
        <>
            <div className='d-flex align-items-center'>
                <h5 style={{ color: 'white' }}>UPLOAD NEW VIDEO</h5>
                <button style={{ color: 'orange' }} className='btn' onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up fs-5 textStyle"></i></button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                data-bs-theme='dark'
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'white' }}><i style={{ color: "orange" }} class="fa-solid fa-film me-2"></i>UPLOAD <span style={{ color: 'red', fontWeight: 'bolder' }}>VIDEO</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='border border-secondary p-3 rounded'>
                        <p style={{ color: 'white', textAlign: 'center' }}>PLEASE FILL THE FORM</p>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Control type="text" placeholder="VIDEO TITLE"
                                onChange={(e) => setvideo({ ...video, caption: e.target.value })} />

                            <Form.Control className='mt-2' type="text" placeholder="VIDEO THUMBNAIL"
                                onChange={(e) => setvideo({ ...video, thumbnailurl: e.target.value })} />

                            <Form.Control className='mt-2' type="text" placeholder="VIDEO URL"
                                onChange={(e) => setEmbededLink(e.target.value)} />
                        </Form.Group>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button onClick={HandleUpload} variant="primary">UPLOAD</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />

        </>
    )
}

export default Add