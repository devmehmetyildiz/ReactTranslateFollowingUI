import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap'
import './Style/Home.css'
class Home extends Component {

    render() {
        return (
            <>
                <div className='mainboard'>
                    <Navbar style={{ left: '0px', alignItems: '' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/dashboard">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className='ml-auto'>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className='space-md'></div>
                    <div className='selectmodel'>
                        <Dropdown>
                            <Dropdown.Toggle variant="btn btn-secondary selecmodeldropdown" id="dropdownMenuButton2">
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Header>Settings</Dropdown.Header>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else here</Dropdown.Item>
                                <Dropdown.Divider></Dropdown.Divider>
                                <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button type="button" className="btn btn-primary btn-lg btn-block selecmodelbtn">
                            <i className="mdi mdi-account"></i>
                            Block buttons
                        </button>
                    </div>
                </div>
                <div className='services'>
                    <div className='container text-center'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-6 col-md-2 box box-shadow bg-light'>
                                <a>
                                    <div className='box-head'>
                                        <img src={require("./Style/images/ev-temizligi.png")} alt="carousel item" />
                                    </div>
                                    <div className='box-content'>
                                        <span>
                                            Ev
                                            <br />
                                            Temizliği
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className='col-6 col-md-2 box box-shadow bg-light'>
                                <a>
                                    <div className='box-head'>
                                        <img src={require("./Style/images/ev-temizligi.png")} alt="carousel item" />
                                    </div>
                                    <div className='box-content'>
                                        <span>
                                            Ev
                                            <br />
                                            Temizliği
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className='col-4 col-md-2 box box-shadow bg-light'>
                                <a>
                                    <div className='box-head'>
                                        <img src={require("./Style/images/ev-temizligi.png")} alt="carousel item" />
                                    </div>
                                    <div className='box-content'>
                                        <span>
                                            Ev
                                            <br />
                                            Temizliği
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className='col-4 col-md-2 box box-shadow bg-light'>
                                <a>
                                    <div className='box-head'>
                                        <img src={require("./Style/images/ev-temizligi.png")} alt="carousel item" />
                                    </div>
                                    <div className='box-content'>
                                        <span>
                                            Ev
                                            <br />
                                            Temizliği
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
            </>
        )
    }
}
export default Home