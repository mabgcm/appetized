import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import logo from '../assets/img/logo.png';
import { GiMeal } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Nvbar = () => {
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Navbar id="header" className="header fixed-top d-flex align-items-center" bg="white" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link href="/" className="logo d-flex align-items-center me-auto me-lg-0">
                            <img src={logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="d-flex align-items-center justify-content-end">
                        <Navbar.Collapse className='responsive-nav' id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="nav-text text-center" href="/">Home</Nav.Link>
                                <Nav.Link className="nav-text text-center" href="about">About</Nav.Link>
                                <Nav.Link className="nav-text text-center" href="contact">Contact</Nav.Link>
                                {user && <Nav.Link className="nav-text text-center" to="myrecipes">My Recipes</Nav.Link>}
                                {/* <div className='d-flex align-items-center mx-5'>
                                    {user?.displayName ? <Link className="btn-book-a-table" onClick={handleSignOut}>Logout</Link> : <Link className="btn-book-a-table" to='signin'>SignIn</Link>}
                                </div> */}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div >
    )
}

export default Nvbar