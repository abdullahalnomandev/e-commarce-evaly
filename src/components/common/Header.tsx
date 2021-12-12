import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';

const Header = () => {
    return (
        <div className="header_component">
            <div className="top-header">
                <Container className='d-flex align-items-center justify-content-between'>
                    <ul className="list-unstyled d-flex align-items-center gap-4">
                        <li>
                            <FiPhoneCall /> <a href="tel:01741581512">+8801741581512</a>
                        </li>
                        <li className="list-unstyled">
                            <AiOutlineMail /> <a href="mail-to:abdullahalnoman1512@gmail.com">abdullahalnoman1512@gmail.com</a>
                        </li>
                    </ul>
                    <div>
                    <BsPhone/> <a href="https://play.google.com/store/apps/details?id=bd.com.fvaly.evalyshop&hl=en&gl=US">Save big on out app!</a>
                    </div>
                </Container>
            </div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/help">Help</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
