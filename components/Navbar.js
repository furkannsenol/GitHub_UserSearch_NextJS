import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

const Menu = () => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
            </Head>
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <Container >
                        <Navbar.Brand><Image src='https://user-images.githubusercontent.com/59932098/104577259-8ea22080-5659-11eb-8efe-43e03c3b490f.png' width={32} height={32}/> GitHub </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link alt="" onClick={() => router.push("/")} className={router.pathname == "/" ? "active " : ""}>Home</Nav.Link>
                                <Nav.Link  onClick={() => router.push("/user/")} className={router.pathname == "/user" ? "active" : ""}> Search</Nav.Link>
                                 <Nav.Link disabled onClick={() => router.push("/")} className={router.pathname == "/user/[userName]" ? "active" : ""}>Detail</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        </div>
    )
}

export default Menu

