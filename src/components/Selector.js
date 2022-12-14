import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../stylesheets/Selector.css';
import {Select,MenuItem} from '@material-ui/core';





function Selector({type, columnsNumber}){

    const options = [];
    const [course,setCourse]=React.useState(3);
   const updateSelectVal=(e)=>{console.warn(e.target.value)
setCourse(e.target.value)
}
      

    switch(type){
        case('logical'):
            options.push(<Grid xs={1}><Button variant="contained"  className="button button-logical">AND</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained"  className="button button-logical">OR</Button></Grid>);
            break;
        case('comparation'):
            options.push(<Grid xs={1}><Button variant="contained" onClick={()=>console.log("test")}className="button button-comparation">=</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" className="button button-comparation">{'>'}</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" className="button button-comparation">{'<'}</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" className="button button-comparation">{">"}=</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" className="button button-comparation">{"<"}=</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" className="button button-comparation">{"!="}</Button></Grid>);
            break;    
            
            
        case('columns'):
        
        options.push(<Grid xs={2}><Select value={course}
        displayEmpty
        onChange={updateSelectVal}>
            <MenuItem value="" disable>Selecione columna </MenuItem>
            <MenuItem value={1} disable>COLUMNA1</MenuItem>
            <MenuItem value={2} disable>COLUMNA2</MenuItem>
            </Select></Grid>);
      
            break;
        default:
    }
    return(
        <div className={`selector ${type}`}>            
            <div className="selector-name">
                {type}
            </div>
            <Grid container spacing={2} columnSpacing={-1} columns={columnsNumber}>                
                {options}
            </Grid>            
        </div>
    );
   
    
   
    
}

export default Selector;