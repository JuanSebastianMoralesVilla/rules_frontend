import React, { Component } from "react";

import Selector from "../components/Selector.js";
import "../stylesheets/Home.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { DataGrid } from "@mui/x-data-grid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {Select,MenuItem} from '@material-ui/core';

import "bootstrap/dist/css/bootstrap.min.css";

import Table from "react-bootstrap/Table";

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      columns: [],
      rows : []
    };
  }
  
  async getColumns (){    
    const res = await fetch('http://localhost:8080/api/transactions/columns')
    var columns = await res.json();

    var columnsProcessed = [];
    
    for(var i = 0 ; i < columns.length; i++){
      columnsProcessed.push( { field: columns[i] , headerName: columns[i]});
    }

    return columnsProcessed;
  }

  async getRows(){
    const res = await fetch('http://localhost:8080/api/transactions/')
    var rows = await res.json();

    var rowsProcessed = [];
      
    for(var i = 0 ; i < rows.length; i++){
      rowsProcessed.push(rows[i].data);
    }

    return rowsProcessed;
  }

  //async validateAndApplyRule(){

  //}

  render() {  

    const fillTable = async () => {  
      this.setState({columns: await this.getColumns()});
      this.setState({rows: await this.getRows()});
    };
    
    const updateRule = (symbol) => {
      var input = document.getElementById("rule");

      var cursorPos = input.selectionStart;

      var value = input.value;

      input.value = [
        value.slice(0, cursorPos),
        symbol + " ",
        value.slice(cursorPos),
      ].join("");

      input.setSelectionRange(input.value.length, input.value.length);
      input.focus();
    };

    return (
      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header class="masthead mb-auto">
          <div class="inner">
            <h2 class="masthead-brand">RULES ENGINE</h2>
            <nav class="nav nav-masthead justify-content-center"></nav>
          </div>
        </header>
        <div className="separator">
          <label></label>
        </div>

        <main role="main" class="container">
          <h4 class="cover-heading">Example</h4>
          <p class="lead">
            <div className="textExample">
              <li>Column 1 = 5</li>
              <li>Column 2 != column 3</li>
              <li>(Column 1 {">"} column 2) AND (Column 1 = 2)</li>
            </div>
          </p>

          <Button variant="contained" onClick={fillTable} endIcon={<SendIcon />}>
                          Fill table
                        </Button>

          <table className="selectors-table">
            <thead>
              <tr>
                <th className="selector-head">Logical</th>
                <th className="selector-head">Boolean</th>
                <th className="selector-head">Comparation</th>
                <th className="selector-head">Columns</th>
              </tr>
            </thead>
            <tbody className="selectors-body">
              <tr className="selectors-tr">
                <td className="selectors-td">
                  <Selector type="logical" updateRule={updateRule} />
                </td>
                <td className="selectors-td">
                  <Selector type="boolean" updateRule={updateRule} />
                </td>
                <td className="selectors-td">
                  <Selector type="comparation" updateRule={updateRule} />
                </td>
                <td className="selectors-td">
                  <Selector type="columns" updateRule={updateRule} />
                </td>
              </tr>
            </tbody>
          </table>


          <div className='db-table-selector'>
            <h3>Select database table:</h3>
            <Select displayEmpty>
              <MenuItem value="" disable>Select column</MenuItem>
              <MenuItem value={1} onClick={() => console.log('click')} disable>Tabla 1</MenuItem>
              <MenuItem value={2} onClick={() => console.log('click')} disable>Tabla 2</MenuItem>
            </Select>
          </div>


          <div>
            <div>
              <container className="area">
                <p></p>

                <Table>
                  <Box sx={{ width: 500, maxWidth: "100%" }}>
                    <div></div>
                    <label>REGLA:</label>&nbsp;&nbsp;
                    <textarea
                      id="rule"
                      placeholder="COLUMNA1 > 35"
                      rows="5"
                      cols="50"
                    ></textarea>
                  </Box>
                  <td>
                    {" "}
                    <Button
                      variant="contained"
                      endIcon={<CheckCircleOutlineIcon />}
                    >
                      Validate rule
                    </Button>
                    <td>
                      <div>
                        <Button variant="contained" endIcon={<SendIcon />}>
                          Result
                        </Button>
                      </div>
                    </td>
                  </td>
                </Table>
              </container>
            </div>
          </div>

          <div style={{ height: 400, width: "100%" }}>
            <DataGrid id='main-table'
              rows={this.state.rows}
              columns={this.state.columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              getRowId={(row) => row.transaction_id}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
