import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/custom/Register.css'

export class Register2 extends Component {

    handlesubmit = e => {

        e.preventDefault();
        var today = new Date();
        var date = today.getDate() + ':' + today.getMonth() + ':' + today.getFullYear();
        const data = {
            Id: 0,
            İsim: this.İsim,
            Soyisim: this.Soyisim,
            Kullanıcıadi: this.Kullanıcıadi,
            Şifre: this.Şifre,
            Yetki: ' ',
            isActive: false,
            Kayıttarihi: date
        }
        console.log(data)
    }

    render() {
        return (
            <div>
                <div className="d-flex align-items-stretch auth auth-img-bg h-100">
                    <div className="row flex-grow">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <div className="auth-form-transparent text-left p-3 registerform">
                                <div className="brand-logo">
                                    <img src={require("../../../assets/images/logo.svg")} alt="logo" />
                                </div>
                                <h4>New here?</h4>
                                <h6 className="font-weight-light">Join us today! It takes only few steps</h6>
                                <form className="pt-3" onSubmit={this.handlesubmit}>
                                    <div className='row'>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>İsim</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-account-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control form-control-lg border-left-0" placeholder="İsim"
                                                        onChange={e => this.İsim = e.target.value}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Kullanıcı Adı</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-email-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control form-control-lg border-left-0" placeholder="Kullanıcı Adı"
                                                        onChange={e => this.Kullanıcıadi = e.target.value}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Soyisim</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-account-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control form-control-lg border-left-0" placeholder="Soyisim"
                                                        onChange={e => this.Soyisim = e.target.value}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-email-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input type="email" className="form-control form-control-lg border-left-0" placeholder="Email"
                                                        onChange={e => this.Mailadres = e.target.value}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-lock-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password"
                                                        onChange={e => this.Şifre = e.target.value}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="form-check">
                                            <label className="form-check-label text-muted">
                                                <input type="checkbox" className="form-check-input" />
                                                <i className="input-helper"></i>
                                                I agree to all Terms & Conditions
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mt-3 signuprow">
                                        <button className="btn btn-block btn-primary btn-lg signupbtn font-weight-medium auth-form-btn" >SIGN UP</button>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light">
                                        Already have an account? <Link to="/Login" className="text-primary">Login</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 register-half-bg d-flex flex-row">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register2
