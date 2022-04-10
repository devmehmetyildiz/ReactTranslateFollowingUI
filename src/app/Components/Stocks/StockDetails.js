import React, { Component } from 'react'
import { connect } from 'react-redux'
import axiosInstance from '../../Utils/axios';
import axios from 'axios';
import { selectedStock, removeselectedStock } from '../../Redux/actions/stockActions';
import "../../../assets/styles/custom/Stock.scss"
import { withRouter } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import InputItem from '../Common/input'
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
        this.setState({ currentitem: newdata }, () => {
            this.props.selectedStock(this.state.currentitem);
        })
      
    }

    handleonSubmit = (e) => {
        e.preventDefault();
        this.updateStock();
    }

    goBack = () => {
        this.props.history.push("/Stock")
    }

    updateStock = async () => {
        console.log('this.state.currentitem: ', this.state.currentitem);
        const response = await axios({
            method: 'post',
            data: this.state.currentitem,
            url: process.env.REACT_APP_BACKEND_URL + '/Stok/UpdateStok',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }).catch(error => {

            if (error.response != undefined) {
                if (error.response.status == '401') {
                    this.props.history.push("/Login")
                }
            } else {
                cogoToast.error('Veri Alınırken Hata Alındı', this.toastoptions)
                this.props.history.push("/Login")
            }
        })
        if (response != undefined) {
            if (response.status == '200') {
                cogoToast.success('Güncelleme Başarılı!', this.toastoptions)
                this.props.history.push("/Stock")
            }
        } else {
            cogoToast.error('Kaydedilirken Hata Alındı', this.toastoptions)
        }

    };

    getStock = async () => {
        const response = await axios({
            method: 'get',
            data: this.state.currentitem,
            url: process.env.REACT_APP_BACKEND_URL + '/Stok/GetSelectedStock?ID=' + this.props.match.params.StockId,
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
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

    toastoptions = {
        hideAfter: 5,
        position: 'top-right',
        heading: 'Dil Güncelleme'
    }

    render() {
        return (
            <div>
                <div className="d-flex align-items-stretch auth auth-img-bg h-100 content">
                    <div className="row flex-grow">
                        <div className="col-lg-12 d-flex align-items-center justify-content-center">
                            <div className="auth-form-transparent text-left p-3 addform" >
                                <h6 className="font-weight-light">Dil Güncelleme</h6>
                                <form className="pt-3" onSubmit={this.handleonSubmit}>
                                    <div className='row'>
                                        <div className="col-6">
                                            <InputItem 
                                            title="Dil Kodu"
                                            itemid="stokkod" 
                                            itemtype="text"
                                            itemholder="Dil Kodu"
                                            itemvalue={this.state.currentitem.stokkod || ' '}
                                            itemchangefunc = {this.handleChangeInput}
                                            ></InputItem>
                                        </div>
                                        <div className="col-6">                                       
                                             <InputItem 
                                            title="Dil Adı"
                                            itemid="stokadı" 
                                            itemtype="text"
                                            itemholder="Dil Adı"
                                            itemvalue={this.state.currentitem.stokadı || ' '}
                                            itemchangefunc = {this.handleChangeInput}
                                            ></InputItem>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">                                         
                                            <InputItem 
                                            title="Miktar" 
                                            itemid="miktar" 
                                            itemtype="number"
                                            itemholder="Miktar"
                                            itemvalue={this.state.currentitem.miktar || ' '}
                                            itemchangefunc = {this.handleChangeInput}
                                            ></InputItem>
                                        </div>
                                        <div className="col-6">                                         
                                            <InputItem 
                                            title="Birim" 
                                            itemid="birim" 
                                            itemtype="text"
                                            itemholder="Birim"
                                            itemvalue={this.state.currentitem.birim || ' '}
                                            itemchangefunc = {this.handleChangeInput}
                                            ></InputItem>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className="col-6">                                         
                                            <InputItem 
                                            title="Alış Fiyatı" 
                                            itemid="alışfiyat" 
                                            itemtype="number"
                                            itemholder="Alış Fiyatı"
                                            itemvalue={this.state.currentitem.alışfiyat || ' '}
                                            itemchangefunc = {this.handleChangeInput}
                                            ></InputItem>
                                        </div>
                                        <div className="col-6">                                          
                                            <InputItem 
                                            title="Satış Fiyat" 
                                            itemid="satışfiyat" 
                                            itemtype="number"
                                            itemholder="Satış Fiyat"
                                            itemvalue={this.state.currentitem.satışfiyat || ' '}
                                            itemchangefunc = {this.handleChangeInput}
                                            ></InputItem>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">                                          
                                            <InputItem 
                                            title="İskonto" 
                                            itemid="İskonto" 
                                            itemtype="number"
                                            itemholder="İskonto"
                                            itemvalue={this.state.currentitem.İskonto || ' '}
                                            itemchangefunc = {this.handleChangeInput}
                                            ></InputItem>
                                        </div>
                                        <div className="col-6">                                          
                                            <InputItem 
                                            title="Kdv" 
                                            itemid="kdv" 
                                            itemtype="text"
                                            itemholder="kdv"
                                            itemvalue={this.state.currentitem.kdv || ' '}
                                            itemchangefunc = {this.handleChangeInput}
                                            ></InputItem>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="col-6 mt-3 gobackrow ">
                                            <button onClick={this.goBack} className="btn btn-block btn-primary btn-lg signupbtn font-weight-medium auth-form-btn" >Geri Dön</button>
                                        </div>
                                        <div className="col-6 mt-3 signuprow ">
                                            <button type='submit' className="btn btn-block btn-primary btn-lg signupbtn font-weight-medium auth-form-btn" >Kaydet</button>
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
