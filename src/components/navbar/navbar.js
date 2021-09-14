import React, {useState} from 'react';
import './navbar.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export const NavBar = () => {
    const [navbar,setNavBar] = useState(false);

    const changeNavbar=()=>{
        
        if(window.scrollY >=68 ){ // scroll y vanya chai y axis ko height
            setNavBar(true);
        }
        else{
            setNavBar(false)
        }
    }

    window.addEventListener('scroll',changeNavbar);


    return (
        <div >
            <Navbar className={navbar ? 'navbar scrolled' : 'navbar'} collapseOnSelect expand="lg" variant="light">
                <Container fluid>
                    <Navbar.Brand id="brand"  href="#home">BOOZE CHITWAN 2.0</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <li className="navitem"><Nav.Link active="selected" className="nav-item"  href="#features">HOME</Nav.Link></li>
                            <li className="navitem"><Nav.Link active="selected" className="nav-item"  href="#features">ABOUT </Nav.Link></li>

                        </Nav>
                        <Nav >
                        <Button style={{ fontFamily: "Roboto", fontSize: "17px" }}>Locate us</Button>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
