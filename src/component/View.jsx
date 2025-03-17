import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getALLvideo } from '../Services/AllApi'


function View({uploadVideostatus}) {

  const [Allvideos, setAllVideo] = useState([])
  const [deleteVideo , setdeleteVideo]= useState({})

  const getVideos = async () => {
    const resp = await getALLvideo()
    const { data } = resp
    setAllVideo(data)
    console.log(Allvideos);
  }
  
  

  

  useEffect(() => {
    getVideos()
  }, [uploadVideostatus ,deleteVideo])

  return (
    <>
      <Row>
        {
          Allvideos.map((item => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayVideo={item} setdeleteVideo={setdeleteVideo} />
            </Col>
          )))
        }

      </Row>
    </>
  )
}

export default View