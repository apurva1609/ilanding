import React from 'react';
import '../Assets/Css/MyNavbar.css';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Dropdown, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';
const MyNavbar = () => {
    return (
        <>
        <Container fluid style={{backgroundColor:" #F3F9FF"}}>
            <Container>
                <Row>
                    <Col md={12} xs={12} lg={12}>
                        <div className="header">
                            
                            <Navbar expand="lg" variant='white' className="bg-white text-dark rounded-pill my-3 px-3 py-1 custom-navbar d-flex justify-content-center align-items-center">
                                <Container className='bg-white d-flex justify-content-between'>
                                    <Navbar.Brand href="#home" className='fs-4  '>iLanding</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className='bg-white' id="basic-navbar-nav">
                                        <Nav className="mx-auto">
                                            <Link to="/Hero" className='text-decoration-none '> <Nav.Link className='text-primary  fs-6 px-2' href="#Hero">Home</Nav.Link></Link>
                                            <Link to="/About" className='text-decoration-none '><Nav.Link className='text-dark px-2' href="#about">About</Nav.Link></Link>
                                            <Link to="/Features" className='text-decoration-none '><Nav.Link className='text-dark px-2' href="#features">Features</Nav.Link></Link>
                                            <Link to="/Services" className='text-decoration-none '><Nav.Link className='text-dark px-2' href="#services">Services</Nav.Link></Link>
                                            <Link to="/Pricing" className='text-decoration-none '><Nav.Link className='text-dark  bg-white px-2' href="#Pricing">Pricing</Nav.Link></Link>
                                            <NavDropdown className='text-dark  px-2' title="Dropdown" id="basic-Arrnav-dropdown">

                                                <NavDropdown.Item href="#action/3.1">Dropdown 1</NavDropdown.Item>

                                                <Dropdown className='bg-white'>
                                                    <Dropdown.Toggle variant="light" className='bg-white border-0' >Dropdown</Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Dropdown 1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Dropdown 2</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Dropdown 3</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Dropdown 4</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Dropdown 5</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <NavDropdown.Item href="#action/3.2">Dropdown 2</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Dropdown 3</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.4">Dropdown 4</NavDropdown.Item>
                                            </NavDropdown>
                                            <Link to="/Contact" className='text-decoration-none '><Nav.Link className='text-dark bg-white' href="#Contact">Contact</Nav.Link></Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                        <Button variant="primary" className='rounded-pill px-3' style={{ transition: '0.3s' }}>Get Started</Button>
                                </Container>
                            </Navbar>
                        </div>
                    </Col>
                </Row>

            </Container>
            </Container>
        </>
    )
}

export default MyNavbar
