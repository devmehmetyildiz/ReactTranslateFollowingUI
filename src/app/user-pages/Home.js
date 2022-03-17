import React, { Component } from 'react'
import "./Home.css"
import { Dropdown, ButtonGroup } from 'react-bootstrap';
export class Home extends Component {
    render() {
        return (
        
                <div className='mainboard'>
                    <nav class="navbar navbar-light bg-light">
                        <span class="navbar-brand mb-0 h1">Navbar</span>
                    </nav>
                    <div className='bg'>

                        <div className='row h-50'>
                            <div class="col-6 d-flex">
                                <img className="bg_logo" src={require("../../assets/images/carousel/banner_7.jpg")} alt="carousel item" />
                            </div>
                            <div className='col-6 login-btn d-flex'>
                                <button type="button" className="btn btn-primary btn-lg btn-block login_btn">
                                    <i className="mdi mdi-account"></i>
                                    Giriş/Kayıt
                                </button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='makejob'>
                                <Dropdown >
                                    <Dropdown.Toggle variant="btn btn-danger btn-lg" id="dropdownMenuButton2" >
                                        Dropdown 2
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

                            </div>

                        </div>

                    </div>

                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                    <p>testttt</p>
                </div>
           

        )
    }
}

export default Home