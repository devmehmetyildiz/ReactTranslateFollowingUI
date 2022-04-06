import React, { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import axios from 'axios';
import { useHistory } from "react-router-dom"
import { setStocks } from '../../Redux/actions/stockActions';
import { useDispatch, useSelector } from 'react-redux';
const { SearchBar } = Search;

const StockListining = () => {
    const history = useHistory()
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
            dataField: 'action',
            text: 'Action',
            sort: false,
            formatter: () => {
                return (
                    <div>
                        <button className="btn btn-dark">

                            <i className="mdi mdi-eye-outline text-primary"></i>View
                        </button>
                    </div>
                );
            },
            events: {
                onClick: (e, column, columnIndex, row, rowIndex) => {                   
                    history.push('/Stock/'+row.id)
                }               
            }
        }

    ];    
    const stocks = useSelector((state) => state.allStocks.stocks);
    const dispatch = useDispatch();
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    const axiosStocks = async () => {
        const response = await axios.get('http://localhost:18598/api/Stok/GetStokAll', config)
            .catch(error => {
                if (error.response.status == '401') {
                    console.log('döndürüom')
                    history.push("/Login")
                }
            })           
        if(response!=undefined) 
        dispatch(setStocks(response.data));
    }
    useEffect(() => {
        axiosStocks();
    }, []);
    return (
        <div>
            <div className="row datatable">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Stock Table</h4>
                            <div className="row">
                                <div className="col-12">
                                    <ToolkitProvider
                                        keyField="id"
                                        bootstrap4
                                        data={stocks}
                                        columns={columns}
                                        search
                                    >
                                        {
                                            props => (
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="mb-2 mr-2">Search in table:</p>
                                                        <SearchBar {...props.searchProps} />
                                                    </div>
                                                    <BootstrapTable
                                                        defaultSorted={defaultSorted}
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
    );
}


export default StockListining;