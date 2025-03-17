import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCatagory, deleteVideocategory, getallcategorys } from '../Services/AllApi';


function Category() {
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState('')

    const [category, setcateGory] = useState([])





    const handilAddCatagory = async () => {
        if (!categoryName) {
            toast.warning('Please fill the category name')
        } else {
            const body = {
                categoryName,
                allvideo: []
            }
            const response = await addCatagory(body);
            console.log(response);
            if (response.status === 201) {
                toast.success(`${categoryName} successfully saved`)
            }
            handleClose()

        }
    }

    const handleClose = () => {
        setShow(false);
        setCategoryName('')
    }
    const handleShow = () => setShow(true);

    const getCategorys = async () => {
        const response = await getallcategorys()
        console.log("category");
        console.log(response);
        const { data } = response
        setcateGory(data)


    }
    useEffect(() => {
        getCategorys()
    }, [])


    const deleteCategory = async (id) =>{
        
        await deleteVideocategory(id)
        getCategorys()
    }
    return (
        <>
            <div className="">

                <button onClick={handleShow} className='btn btn-warning'> ADD NEW CATEGORY</button>
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


                            <Form.Control className='mt-2' type="text" placeholder="CATECORY NAME"
                                onChange={(e) => setCategoryName(e.target.value)} />

                        </Form.Group>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button onClick={handilAddCatagory} variant="primary">UPLOAD</Button>
                </Modal.Footer>
            </Modal>

            {
                category?.map((item) => (
                    <div className="border border-seccondary rounded mt-3 p-2">

                    <div className="d-flex justify-content-between align-items-center textStyle ">
                        <h6 >{item.categoryName}</h6>
    
                        <button onClick={(e)=> deleteCategory (item.id)} className='btn btn-danger fa-solid fa-trash'></button>
                    </div>
    
    
                </div>

                ))

            }

           



        </>
    )
}

export default Category