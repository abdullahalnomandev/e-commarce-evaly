import React from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsPhone,BsFillBagCheckFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import logo from 'assets/images/fvaly.png';


const Header = () => {
    return (
        <div className="header_component">
            <div className="top-header py-2 bg-light border-bottom">
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
                        <BsPhone /> <a href="https://play.google.com/store/apps/details?id=bd.com.fvaly.evalyshop&hl=en&gl=US">Save big on out app!</a>
                    </div>
                </Container>
            </div>


            <div className="middle-header">
                <Container>
                    <div className="d-flex align-items-center gap-5 py-3">
                        <img className='branding' src={logo} alt="" />

                        <InputGroup className="mb-3">
                            <FormControl
                                className='border border-primary'
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="primary" id="button-addon2">
                                <AiOutlineSearch className='text-white' />
                            </Button>
                        </InputGroup>

                        <ul className="icon-list list-unstyled d-flex gap-3">
                            <li>
                                < BsFillBagCheckFill />
                            </li>
                            <li>
                                < BiUser />
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>


            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Catagories</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="/">News feed</Nav.Link>
                        <Nav.Link href="/help">Merchant Zome</Nav.Link>
                        <Nav.Link href="/help">help</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
