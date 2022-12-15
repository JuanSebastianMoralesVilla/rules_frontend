import { render } from '@testing-library/react';
import React, { Component } from 'react';
//import {Suppliers} from "./components/Suppliers";
import Selector from '../components/Selector.js'
import '../stylesheets/Home.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import 'bootstrap/dist/css/bootstrap.min.css';

import Table from 'react-bootstrap/Table';
//import { DataGrid } from '@mui/x-data-grid';

class Home extends Component{  

  constructor(){
    super();
    this.rule = 'asdasdasd';
  }  

  render(){
    
    const updateRule = (value) =>{
      this.rule = this.rule + value;
    }

    return (
      <div className='home'>
        
        <div className='title'>
          <h1>MOTOR DE REGLAS </h1>
        </div>
        <container>
        <div className='expression-builder-selectors'>
          <Selector type='logical' columnsNumber={1} updateRule={updateRule} ></Selector>
          <Selector type='comparation' columnsNumber={3}></Selector>
          <Selector type='columns' columnsNumber={1}></Selector>
        </div>  
        </container>

        <container>
          <Table className='previewRule'>
            <tr>
            
           <div className='rule-container'>
           <td>
          <Stack direction='row' spacing={2}>
            <Box sx={{width: 500, maxWidth: '100%',}}>
              <TextField fullWidth label="Regla" id="rule">{this.rule}</TextField>
            </Box>
            <Button variant="contained" endIcon={<SendIcon />}>Validar</Button>
          </Stack> 
          </td>         
        </div>
        </tr>
        </Table>
        </container>
         

        <Table>
          <tr>
            <td>
              <container>
                <Button variant="contained" endIcon={<SendIcon />}>probar regla</Button>
              </container>

            </td>
          </tr>
          <div>

          </div>
        </Table>

        <div>

        </div>

      </div>

    )
  }
}
/*          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
              />
          </Box>*/
/*
combobox()
{

  return(
    <>
    < Suppliers />
     </>
  )
}
*/


export default Home;
