import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Header, Img} from './LayoutStyles'
import {Logo}from '../../constants/constants'
const NavBar = () => {
    return (
        <Header>
            <Navbar className='py-2' collapseOnSelect expand="lg"  variant="dark">
              <Container>
              <Navbar.Brand href="/" style={{width:'50px'}} >
                <Img src = {Logo} alt ='logo' />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav className="justify-content-around w-50" >
                  <Nav.Link href="/" className="animate__animated animate__bounceInDown animate__delay-0s" >
                    <div>Home</div>
                  </Nav.Link>
                  <Nav.Link href="" className="animate__animated animate__bounceInDown animate__delay-1s" >About</Nav.Link>
                  <Nav.Link href="" className="animate__animated animate__bounceInDown animate__delay-2s">Blog</Nav.Link>
                  <Nav.Link href="" className="animate__animated animate__bounceInDown animate__delay-3s">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
        </Header>
    )
}

export default NavBar
