import * as Icon from 'react-bootstrap-icons'
import { Container, Nav } from 'react-bootstrap'
//import Nav from 'react-bootstrap/Nav';

import Logo from './Logo'
import { useState } from 'react'
import { Link } from 'react-router-dom'




export default function NavBar() {

const [sticky, setSticky] = useState(false)

function stickyFun(){
    if(window.scrollY>0){
        setSticky(true)
    }else{
        setSticky(false)
    }
}

window.addEventListener('scroll', stickyFun)


    return (
        <div id="sticky-wrapper" className={sticky? "sticky-wrapper navFixed": "sticky-wrapper"} style={{ height: '78px' }}>


            <Nav className="navbar navbar-expand-lg">
                <Container>
                    
                    <Logo />

                    <div className="d-lg-none ms-auto me-4">
                        <a href="#top" className="navbar-icon smoothscroll">
                            <Icon.Person />
                        </a>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-lg-5 me-lg-auto">
                            <Nav.Item>
                                <Nav.Link className="click-scroll" href="#section_1">Home</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link className="click-scroll" href="#section_2">Browse Topics</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="click-scroll" href="#section_3">How it works</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="click-scroll" href="#section_4">FAQs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="click-scroll" href="#section_5">Contact</Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="dropdown">
                                {/*<Nav.Link className="dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages
                                    <Icon.ChevronDown />
                                </Nav.Link>*/}
                                
                                <Nav.Link href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages
                                    <Icon.ChevronDown />
                                </Nav.Link>

                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/topicListing">Topics Listing</Link></li>

                                    <li><Link className="dropdown-item" to="/contact">Contact Form</Link></li>
                                </ul>
                            </Nav.Item>
                        </ul>

                        <div className="d-none d-lg-block">
                            <a href="#top" className="navbar-icon smoothscroll">
                                <Icon.Person />
                            </a>

                        </div>
                    </div>
                </Container>
            </Nav>
        </div>

    )
}
