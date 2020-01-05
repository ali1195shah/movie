import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
// import Loading from './Loading'

const ModalComponent = (props) => {
  return (
    <div>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Account Setting
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {<iframe src={'https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1'}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        width='100%'
                        height='500'/>}

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal> 
      </div>
  );
}

export default ModalComponent;
