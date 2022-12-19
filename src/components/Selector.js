import '../stylesheets/Selector.css';
import React from "react";
import Button from '@mui/material/Button';
import {Select,MenuItem} from '@material-ui/core';


function Selector({type, updateRule, columns}){

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
                /*
            const partialOptions = [];         
            
            partialOptions.push(<MenuItem value="" disable>Select column</MenuItem>);

            for(var i=0; i < columns.length ; i++){
                partialOptions.push(<MenuItem value={i} onClick={() => updateRule(columns[i])} disable>columns[i]</MenuItem>);
            }                    
                                 
            options.push(<tr>
                            <Select value={selectedColumn} displayEmpty  onChange={updateSelectVal}>  
                                {partialOptions}     
                            </Select>
                        </tr>);
            console.log(options.toString())*/
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