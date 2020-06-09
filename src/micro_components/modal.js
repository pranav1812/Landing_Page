import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import { useState } from 'react'

export function Modal(heading,text,opt1,opt2) {
    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    return (
      <div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{text}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {opt1}
            </Button>
            <Button variant="primary" onClick={handleClose}>
              {opt2}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

