import React from 'react'
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <Container className='d-flex align-items-center justify-content-center '  >
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="dark" />
      <div style={{marginTop:100 }}></div>
    </Container>
  )
}

export default Loader