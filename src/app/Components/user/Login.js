import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import cogoToast from 'cogo-toast';
import { connect } from 'react-redux'
import { setUser } from '../../Redux/actions/loginActions'
import { withRouter } from 'react-router-dom';
export class Login extends Component {
    constructor(props) {
        super(props)

        const currentitem = {
            username: '',
            password: ''
        }
        this.state = {
            currentitem
        }
    }


    Get_User = async () => {
       
        const response = await axios({
            method: 'post',
            data: this.state.currentitem,
            url: process.env.REACT_APP_BACKEND_URL + '/User/GetUser',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }).catch(error => {
            if (error.response != undefined) {
                if (error.response.status == '401') {
                    cogoToast.error('Veri Alınırken Hata Alındı', this.toastoptions)
                    this.props.history.push("/Login")
                }
            }else{
                cogoToast.error('Veri Alınırken Hata Alındı', this.toastoptions)
                this.props.history.push("/Login")
            }
        })       
        if (response != undefined) {  
            localStorage.setItem('currentUser', JSON.stringify(response.data))        
            this.props.setUser(response.data);
            this.props.history.push("/dashboard")
        }       

    };

    handlesubmit = (e) => {
        e.preventDefault();
        console.log('this.state.currentitem: ', this.state.currentitem);
        axios.post(process.env.REACT_APP_BACKEND_URL + '/Login', this.state.currentitem)
            .then(res => {
                localStorage.setItem('token', res.data)                
                this.Get_User();               
            })
            .catch(err => {
                console.log('err: ', err);
                if (err.response != undefined)
                    cogoToast.error('Giriş Yapılırken Hata oluştu : ' + err.response.data, this.toastoptions)
                else
                    cogoToast.error('Giriş Yapılamadı', this.toastoptions)
            })
    }

    handleChangeInput = (e) => {

        const newdata = { ...this.state.currentitem }
        newdata[e.target.id] = e.target.value
        console.log('newdata: ', newdata);
        this.setState({ currentitem: newdata }, () => {

        })
    }



    toastoptions = {
        hideAfter: 5,
        position: 'top-right',
        heading: 'Kullanıcı Girişi'
    }

    render() {
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
                                <h6 className="font-weight-light">Uygulamamıza HoşGeldiniz</h6>
                                <form className="pt-3" onSubmit={this.handlesubmit}>
                                    <div className="form-group">
                                        <label>Kullanıcıadi</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend bg-transparent">
                                                <span className="input-group-text bg-transparent border-right-0">
                                                    <i className="mdi mdi-account-outline text-primary"></i>
                                                </span>
                                            </div>
                                            <input type="text" className="form-control form-control-lg border-left-0" id="username" placeholder="Kullanıcı Adı"
                                                onChange={this.handleChangeInput} value={this.state.currentitem.username} />
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
                                            <input type="password" className="form-control form-control-lg border-left-0" id="password" placeholder="Şifre"
                                                onChange={this.handleChangeInput} value={this.state.currentitem.password} />
                                        </div>
                                    </div>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <label className="form-check-label text-muted">
                                                <input type="checkbox" className="form-check-input" />
                                                <i className="input-helper"></i>
                                                Beni Giriş Yapılı Tut
                                            </label>
                                        </div>
                                        <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-muted">Şifreyi Unuttum?</a>
                                    </div>
                                    <div className="my-3">
                                        <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >Giriş Yap</button>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light">
                                        Hesabın Yok mu? <Link to="/Register" className="text-primary">Kayıt Ol</Link>
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
}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = { setUser }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
