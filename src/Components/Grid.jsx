import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Make", field: "make", sortable: true, filter: true
      }, {
        headerName: "Model",  field: "make",sortable: true, filter: true
      }, {
        headerName: "Price",  field: "make",sortable: true, filter: true
      }],
    }
  }

  componentDidMount(){
    const { showLoaderComponent, hideLoaderComponnent } = this.props; 
    showLoaderComponent();
    fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json')
    .then(result => result.json())
    .then(rowData => {
      setTimeout(() => {
        this.setState({rowData});
        hideLoaderComponnent();
      }, 20000);
    });
  }

  render() {
    return (
      <div
        className="ag-theme-alpine"
        style={{
        height: '250px',
        width: '600px' }}
      >
        <AgGridReact
          rowSelection="multiple"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default Grid;