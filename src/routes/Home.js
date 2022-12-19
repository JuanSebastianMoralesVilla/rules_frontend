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

  selectedTable;


  render() {

    const updateSelectedTable = (name) => {
      
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

    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "firstName", headerName: "First name", width: 130 },
      { field: "lastName", headerName: "Last name", width: 130 },
      { field: "age", headerName: "Age", type: "number", width: 90,},
      { field: "fullName", headerName: "Full name",
        description: "This column has a value getter and is not sortable.", sortable: false, width: 160},
    ];

    const rows = [
      { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
      { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
      { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
      { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
      { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
      { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
      { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
      { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
      { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];

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
              <li> Example text : "word"</li>
              <li>Example   number : 10 </li>
            </div>
          </p>

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
              <MenuItem value="" disable>Select table</MenuItem>
              <MenuItem value={1} onClick={() => updateSelectedTable('MOCK_DATA.csv')} disable>Sample Table 1</MenuItem>
              <MenuItem value={2} onClick={() => updateSelectedTable('MOCK_DATA.json')} disable>Sample Table 2</MenuItem>
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
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
