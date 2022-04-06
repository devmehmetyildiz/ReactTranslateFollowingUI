import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import axios from 'axios';
import { useHistory } from "react-router-dom"
import { Redirect } from 'react-router-dom';
const { SearchBar } = Search;

var products = [
  {
    alışfiyat: 0,
    birim: "SAYFA",
    id: 1,
    kdv: "%40",
    miktar: 0,
    satışfiyat: 140,
    stokadı: "İNGİLİZCE",
    stokkod: "Lang1",
    İskonto: 0
  }
];

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
  }
];

const defaultSorted = [{
  dataField: 'id',
  order: 'desc'
}];

const Stock = () => {  
  
  const history = useHistory()

  /* const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  };

  axios.get('http://localhost:18598/api/Stok/GetStokAll', config)
    .then(res => {
      console.log('girdim')
      products=(res.data);
      console.log(products)
    })
    .catch(error => {
      if (error.response.status == '401') {
        console.log('döndürüom')
        history.push("/Login")
      }
    }) */
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
                    data={products}
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


export default Stock;