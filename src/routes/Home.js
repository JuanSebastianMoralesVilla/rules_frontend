
import React, { Component } from 'react';

import Selector from '../components/Selector.js'
import '../stylesheets/Home.css';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


import 'bootstrap/dist/css/bootstrap.min.css';

import Table from 'react-bootstrap/Table';


import { DataGrid } from '@mui/x-data-grid';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

class Home extends Component {

  constructor() {
    super();
    this.rule = 'asdasdasd';
  }

  render() {

    const updateRule = (symbol) => {
      var input = document.getElementById('rule');

      var cursorPos = input.selectionStart;

      var value = input.value;

      input.value = [value.slice(0, cursorPos), symbol + ' ', value.slice(cursorPos)].join('');

      input.setSelectionRange(input.value.length, input.value.length);
      input.focus();

    }


    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'firstName', headerName: 'First name', width: 130 },
      { field: 'lastName', headerName: 'Last name', width: 130 },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
          `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      },
    ];

    const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (





      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header class="masthead mb-auto">
          <div class="inner">
            <h2 class="masthead-brand">RULES ENGINE</h2>
            <nav class="nav nav-masthead justify-content-center">



            </nav>
          </div>
        </header>
        <div className="separator">
          <label></label>

        </div>

        <main role="main" class="container">



          <h4 class="cover-heading">Example</h4>
          <p class="lead">
            <div className='textExample'>
              <li>Column 1 = 5</li>
              <li>Column 2 != column 3</li>
              <li>(Column 1 > column 2) AND (Column 1 = 2)</li>

            </div>
          </p>





          <Table>
            <td>
              Logical
            </td>
            <td>
              Boolean
            </td>
            <td>
              Comparatives
            </td>
            <td>
              Columns

            </td>


          </Table>




          <div >


            <div className='expression-builder-selectors'>
              <Selector type='logical' columnsNumber={1} updateRule={updateRule} ></Selector>
              <Selector type='boolean' columnsNumber={1} updateRule={updateRule} ></Selector>
              <Selector type='comparation' columnsNumber={3} updateRule={updateRule}></Selector>
              <Selector type='columns' columnsNumber={2} updateRule={updateRule}></Selector>
            </div>


            <div>
              <container className="area">

                <p>


                </p>


                <Table>



                  <Box sx={{ width: 500, maxWidth: '100%', }}>
                    <div>

                    </div>
                    <label>REGLA:</label>&nbsp;&nbsp;
                    <textarea id='rule' placeholder='COLUMNA1 > 35' rows="5" cols="50"     ></textarea>
                  </Box>
                  <td>    <Button variant="contained" endIcon={<CheckCircleOutlineIcon />}>Validate rule</Button>


                    <td>


                      <div>

                        <Button variant="contained" endIcon={<SendIcon />}>Result</Button>
                      </div>

                    </td>
                  </td>



                </Table>


              </container>



            </div>







          </div>

          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}

            />
          </div>


        </main>






      </div>






















    )
  }
}



export default Home;
