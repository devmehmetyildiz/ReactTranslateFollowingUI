import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { selectedStock, removeselectedStock } from '../../Redux/actions/stockActions';
import "../../../assets/styles/custom/Stock.css"
import { withRouter } from 'react-router-dom';
export class StockDetails extends Component {
    constructor(props) {
        super(props)
        const currentitem = {
            id: 0,
            stokkod: '',
            stokadı: '',
            miktar: 0,
            birim: '',
            alışfiyat: 0.0,
            satışfiyat: 0.0,
            kdv: '',
            İskonto: 0
        }
        this.state = { currentitem };
    }
    componentDidMount() {
        this.getStock()
    }
    componentWillUnmount() {
        this.props.removeselectedStock(this.state.currentitem)
    }
    handleChangeInput = (e) => {
        const newdata = { ...this.state.currentitem }
        newdata[e.target.id] = e.target.value
        this.setState({ currentitem: newdata })
        this.props.selectedStock(this.state.currentitem);
    }
    getStock = async () => {
        const response = await axios.get('http://localhost:18598/api/Stok/GetSelectedStock?ID=' + this.props.match.params.StockId,
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .catch(error => {
                if (error.response.status == '401') {
                    this.props.history.push("/Login")
                }
            })
        if (response != undefined) {
            this.props.selectedStock(response.data);
            this.setState({ currentitem: this.props.stock })
        }
    };
    render() {
        return (
            <div>
                <div className="d-flex align-items-stretch auth auth-img-bg h-100">
                    <div className="row flex-grow">
                        <div className="col-lg-12 d-flex align-items-center justify-content-center">
                            <div className="auth-form-transparent text-left p-3 addform" >
                                <h6 className="font-weight-light">Stock Update</h6>
                                <form className="pt-3" >
                                    <div className='row'>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Dil Kodu</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-account-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input id='stokkod' type="text" className="form-control form-control-lg border-left-0" placeholder="Dil Kodu"
                                                        value={this.state.currentitem.stokkod || ' '} onChange={this.handleChangeInput}
                                                    ></input>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-6">
                                            <div className="form-group">
                                                <label>Dil Adı</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-email-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input id='stokadı' type="text" className="form-control form-control-lg border-left-0" placeholder="Dil Adı"
                                                        value={this.state.currentitem.stokadı || ' '} onChange={this.handleChangeInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Miktar</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-account-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input id='miktar' type="text" className="form-control form-control-lg border-left-0" placeholder="miktar"
                                                        value={this.state.currentitem.miktar || ' '} onChange={this.handleChangeInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Birim</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-account-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input id='birim' type="text" className="form-control form-control-lg border-left-0" placeholder="birim"
                                                        value={this.state.currentitem.birim || ' '} onChange={this.handleChangeInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>satışfiyat</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-account-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input id='satışfiyat' type="text" className="form-control form-control-lg border-left-0" placeholder="satışfiyat"
                                                        value={this.state.currentitem.satışfiyat || ' '} onChange={this.handleChangeInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>kdv</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-account-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input id='kdv' type="text" className="form-control form-control-lg border-left-0" placeholder="kdv"
                                                        value={this.state.currentitem.kdv || ' '} onChange={this.handleChangeInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>İskonto</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <i className="mdi mdi-account-outline text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <input id='İskonto' type="text" className="form-control form-control-lg border-left-0" placeholder="İskonto"
                                                        value={this.state.currentitem.İskonto || ' '} onChange={this.handleChangeInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                    <div className="col-6 mt-3 signuprow ">
                                        <button className="btn btn-block btn-primary btn-lg signupbtn font-weight-medium auth-form-btn" >SIGN UP</button>
                                    </div>
                                    <div className="col-6 mt-3 signuprow ">
                                        <button className="btn btn-block btn-primary btn-lg signupbtn font-weight-medium auth-form-btn" >SIGN UP</button>
                                    </div>
                                    </div>
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    stock: state.stock
})
const mapDispatchToProps = { selectedStock, removeselectedStock }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StockDetails))
