import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useHistory } from "react-router-dom"
import "../../../assets/styles/custom/Login.css"


function Login() {
    const history = useHistory()
    const [username, getusername] = useState(' ');
    const [password, getpassword] = useState(' ');

    const handlesubmit = (e) => {
        console.log('girdim')
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        console.log(data)
        axios.post('http://localhost:18598/api/Login', data)
            .then(res => {
                localStorage.setItem('token', res.data)
                history.push("/Dashboard")
            })
            .catch(err => {
                alert(err)
            })
        console.log(data)
    }

    return (
        <div className='loginpage'>
            <div className="d-flex align-items-stretch auth auth-img-bg h-100">
                <div className="row flex-grow">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <div className="auth-form-transparent text-left p-3">
                            <div className="brand-logo">
                                <img src={require("../../../assets/images/logo.svg")} alt="logo" />
                            </div>
                            <h4>Hoşgeldiniz!</h4>
                            <h6 className="font-weight-light">Happy to see you again!</h6>
                            <form className="pt-3" onSubmit={handlesubmit}>
                                <div className="form-group">
                                    <label>Kullanıcıadi</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend bg-transparent">
                                            <span className="input-group-text bg-transparent border-right-0">
                                                <i className="mdi mdi-account-outline text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control form-control-lg border-left-0" id="exampleInputEmail" placeholder="Username"
                                            onChange={e => getusername(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend bg-transparent">
                                            <span className="input-group-text bg-transparent border-right-0">
                                                <i className="mdi mdi-lock-outline text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="password" className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password"
                                            onChange={e => getpassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="my-2 d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <label className="form-check-label text-muted">
                                            <input type="checkbox" className="form-check-input" />
                                            <i className="input-helper"></i>
                                            Keep me signed in
                                        </label>
                                    </div>
                                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-muted">Forgot password?</a>
                                </div>
                                <div className="my-3">
                                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >LOGIN</button>
                                </div>
                                <div className="mb-2 d-flex">
                                    <button type="button" className="btn btn-facebook auth-form-btn flex-grow mr-1">
                                        <i className="mdi mdi-facebook mr-2"></i>Facebook
                                    </button>
                                    <button type="button" className="btn btn-google auth-form-btn flex-grow ml-1">
                                        <i className="mdi mdi-google mr-2"></i>Google
                                    </button>
                                </div>
                                <div className="text-center mt-4 font-weight-light">
                                    Don't have an account? <Link to="/Register" className="text-primary">Create</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 login-half-bg d-flex flex-row">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
