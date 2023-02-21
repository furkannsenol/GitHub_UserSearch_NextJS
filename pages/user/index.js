import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const index = ({ data }) => {
  const router = useRouter()
  const [userName, setUserName] = React.useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    //setUserName(event.target.value);
    router.push(`user/${userName}`);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  return (
    <div>
      <Container>
        <div className="row justify-content-md-center">
          <div className="col col-lg-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" >
                {/*<Form.Label>Username</Form.Label>*/}
                <Form.Control type="text" size="lg"  placeholder="Enter username" required onChange={handleChange}  />
                <Form.Control.Feedback type="invalid" >
                  Please provide a valid username.
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Enter the username of the person you want to see
                </Form.Text>
              </Form.Group>
              <div className="d-grid">
              <Button variant="success" type="submit"  className='btn-block' size="lg"  >
                Search
              </Button>
              </div>
            </Form>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default index



