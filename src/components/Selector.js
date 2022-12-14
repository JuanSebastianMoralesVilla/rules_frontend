import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../stylesheets/Selector.css'


function Selector({type, columnsNumber}){

    const options = [];

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
            options.push(<Grid xs={1}><Button variant="contained" className="button button-column">Column1</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" className="button button-column">Column2</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" className="button button-column">Column1</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" className="button button-column">Column2</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" className="button button-column">Column1</Button></Grid>);
            options.push(<Grid xs={1}><Button variant="contained" className="button button-column">Column2</Button></Grid>);
            
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