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
//import { DataGrid } from '@mui/x-data-grid';

class Home extends Component{
  
  render(){

    return (
      <div className='home'>
        
        <div className='title'>
          <h1>MOTOR DE REGLAS </h1>
        </div>
        <div className='expression-builder-selectors'>
          <Selector type='logical' columnsNumber={1}></Selector>
          <Selector type='comparation' columnsNumber={3}></Selector>
          <Selector type='columns' columnsNumber={3}></Selector>
        </div>        
        <div className='rule-container'>
          <Stack direction='row' spacing={2}>
            <Box sx={{width: 500, maxWidth: '100%',}}>
              <TextField fullWidth label="Regla" id="rule" />
            </Box>
            <Button variant="contained" endIcon={<SendIcon />}>Validar</Button>
          </Stack>          
        </div>
        <div>
          <Button variant="contained" endIcon={<SendIcon />}>probar regla</Button>
        </div>
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
