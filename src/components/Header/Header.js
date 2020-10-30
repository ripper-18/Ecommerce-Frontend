import React from 'react'
import  {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="#home">DUBookX</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#">Login </Nav.Link>
                <Nav.Link href="#">Register</Nav.Link>
            </Nav>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
            </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
