import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../stylesheets/Selector.css';
import {Select,MenuItem} from '@material-ui/core';





function Selector({type, columnsNumber, updateRule}){

    const options = [];

    const [selectedColumn,setColumn] = React.useState("");
    const updateSelectVal = (e) => {
        setColumn(e.target.value)
    }  
    
    switch(type){
     
        case('logical'):
       
            options.push(<Grid xs={1}><Button variant="contained" onClick={() => updateRule('AND')} className="button button-logical">AND</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" onClick={() => updateRule('OR')} className="button button-logical">OR</Button></Grid>);
            break;
        
        case('comparation'):
       
            options.push(<Grid xs={1}><Button variant="contained" onClick={() => updateRule('=')} className="button button-comparation">=</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" onClick={() => updateRule('>')} className="button button-comparation">{'>'}</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" onClick={() => updateRule('<')} className="button button-comparation">{'<'}</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" onClick={() => updateRule('>=')} className="button button-comparation">{">"}=</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" onClick={() => updateRule('<=')} className="button button-comparation">{"<"}=</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" onClick={() => updateRule('!=')} className="button button-comparation">{"!="}</Button></Grid>);
            break;    
        
        case('boolean'):
       
            options.push(<Grid xs={1}><Button variant="contained" onClick={() => updateRule('true')} className="button button-comparation">true</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" onClick={() => updateRule('false')} className="button button-comparation">false</Button></Grid>);
            break;  
            
        case('columns'):
        
            options.push(<Grid xs={2}>
                            <Select value={selectedColumn} displayEmpty  onChange={updateSelectVal}>
                                <MenuItem value="" disable>Select column</MenuItem>
                                <MenuItem value={1} onClick={() => updateRule('COLUMNA1')} disable>COLUMN 1</MenuItem>
                                <MenuItem value={2} onClick={() => updateRule('COLUMNA2')} disable>COLUMN 2</MenuItem>
                            </Select>
                        </Grid>);
      
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