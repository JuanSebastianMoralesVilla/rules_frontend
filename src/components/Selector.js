import '../stylesheets/Selector.css';
import React from "react";
import Button from '@mui/material/Button';
import {Select,MenuItem} from '@material-ui/core';


function Selector({type, updateRule}){

    const options = [];

    const [selectedColumn,setColumn] = React.useState("");
    const updateSelectVal = (e) => {
        setColumn(e.target.value)
    }  
    
    switch(type){
     
        case('logical'):
            options.push(<tr><td><Button variant="contained" onClick={() => updateRule('AND')} className="button button-logical">AND</Button></td></tr>);
            options.push(<tr><td><Button variant="contained" onClick={() => updateRule('OR')} className="button button-logical">OR</Button></td></tr>);
            break;

        case('boolean'):
       
            options.push(<tr><td><Button variant="contained" onClick={() => updateRule('true')} className="button button-comparation">true</Button></td></tr>);
            options.push(<tr><td><Button variant="contained" onClick={() => updateRule('false')} className="button button-comparation">false</Button></td></tr>);
            break;

        case('comparation'):       
            options.push(
                <tr>
                    <td><Button variant="contained" onClick={() => updateRule('=')} className="button button-comparation">=</Button></td>
                    <td><Button variant="contained" onClick={() => updateRule('>')} className="button button-comparation">{'>'}</Button></td>
                    <td><Button variant="contained" onClick={() => updateRule('<')} className="button button-comparation">{'<'}</Button></td>
                </tr>);

            options.push(
                <tr>
                    <td><Button variant="contained" onClick={() => updateRule('>=')} className="button button-comparation">{">"}=</Button></td>
                    <td><Button variant="contained" onClick={() => updateRule('<=')} className="button button-comparation">{"<"}=</Button></td>
                    <td><Button variant="contained" onClick={() => updateRule('!=')} className="button button-comparation">{"!="}</Button></td>
                </tr>);               
            break;    
        
        case('columns'):
        
            options.push(<tr>
                            <Select value={selectedColumn} displayEmpty  onChange={updateSelectVal}>
                                <MenuItem value="" disable>Select column</MenuItem>
                                <MenuItem value={1} onClick={() => updateRule('COLUMNA1')} disable>COLUMN 1</MenuItem>
                                <MenuItem value={2} onClick={() => updateRule('COLUMNA2')} disable>COLUMN 2</MenuItem>
                            </Select>
                        </tr>);
      
        break;
        default:         
    }

    return(
        <table>
            {options}
        </table>
    );
}

export default Selector;