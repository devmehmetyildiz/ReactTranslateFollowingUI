import React, { Component } from 'react'
import { connect } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import axios from 'axios';
import axiosInstance from '../../Utils/axios';
import { setStocks } from '../../Redux/actions/stockActions';
import { withRouter } from 'react-router-dom';
import cogoToast from 'cogo-toast';

export class StockListining extends Component {

    constructor(props) {
        super(props)
        const currentitem = [{

        }]
        const { SearchBar } = Search;
        const defaultSorted = [{
            dataField: 'id',
            order: 'asc'
        }];
        const columns = [
            {
                dataField: 'id',
                text: 'id',
                sort: true
            }, {
                dataField: 'stokkod',
                text: 'stokkod',
                sort: true
            }, {
                dataField: 'stokadı',
                text: 'stokadı',
                sort: true
            }, {
                dataField: 'miktar',
                text: 'miktar',
                sort: true
            }, {
                dataField: 'birim',
                text: 'birim',
                sort: true
            }, {
                dataField: 'alışfiyat',
                text: 'alışfiyat',
                sort: true
            }, {
                dataField: 'satışfiyat',
                text: 'satışfiyat',
                sort: true
            }, {
                dataField: 'kdv',
                text: 'kdv',
                sort: true
            }, {
                dataField: 'İskonto',
                text: 'İskonto',
                sort: true
            }, {
                dataField: 'update',
                text: 'Güncelle',
                sort: false,
                formatter: () => {
                    return (
                        <div>
                            <button className="btn btn-dark">
                                <i className="mdi mdi-tooltip-edit text-primary"></i>Güncelle
                            </button>
                        </div>
                    );
                },
                events: {
                    onClick: (e, column, columnIndex, row, rowIndex) => {
                        this.props.history.push('/Stock/' + row.id)
                    }
                }
            }
            , {
                dataField: 'delete',
                text: 'Sil',
                sort: false,
                formatter: () => {
                    return (
                        <div>
                            <button className="btn btn-dark">
                                <i className="mdi mdi-trash-can text-primary"></i>Sil
                            </button>
                        </div>
                    );
                },
                events: {
                    onClick: (e, column, columnIndex, row, rowIndex) => {
                        this.props.history.push('/Stock/' + row.id)
                    }
                }
            }

        ];
        this.state = { currentitem, defaultSorted, columns, SearchBar };


    }

    componentDidMount() {
        this.getStocks()
    }

    getStocks = async () => {
        const response = await axios({
            method: 'get',
            data: this.state.currentitem,
            url: process.env.REACT_APP_BACKEND_URL + '/Stok/GetStokAll',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }).catch(error => {
            if (error.response != undefined) {
                if (error.response.status == '401') {
                    this.props.history.push("/Login")
                }
            }else{
                cogoToast.error('Veri Alınırken Hata Alındı', this.toastoptions)
                this.props.history.push("/Login")
            }
        })
        if (response != undefined) {
            this.props.setStocks(response.data);
            this.setState({ currentitem: this.props.allStocks.stocks })
        }
    };

    render() {
        return (
            <div>
                <div className="row datatable">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Diller</h4>
                                <div className="row">
                                    <div className="col-12">
                                        <ToolkitProvider
                                            keyField="id"
                                            bootstrap4
                                            data={this.state.currentitem}
                                            columns={this.state.columns}
                                            search
                                        >
                                            {
                                                props => (
                                                    <div>
                                                        <div className="d-flex align-items-center">
                                                            <p className="mb-2 mr-2">Arama Yap:</p>
                                                            <this.state.SearchBar {...props.searchProps} />
                                                        </div>
                                                        <BootstrapTable
                                                            defaultSorted={this.state.defaultSorted}
                                                            pagination={paginationFactory()}
                                                            {...props.baseProps}
                                                            wrapperClasses="table-responsive"
                                                        />
                                                    </div>
                                                )
                                            }
                                        </ToolkitProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allStocks: state.allStocks
})

const mapDispatchToProps = { setStocks }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StockListining))



