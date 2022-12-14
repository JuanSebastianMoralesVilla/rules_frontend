import React from "react";

function Selector({type}){

    const options = [];

    switch(type){
        case('logical'):
            options.push(<button className="button button-logical">AND</button>);
            options.push(<button className="button button-logical">OR</button>);
            break;
        case('comparation'):
            options.push(<button className="button button-comparation">=</button>);
            options.push(<button className="button button-comparation">'{'>'}'</button>);
            options.push(<button className="button button-comparation">'{'<'}'</button>);
            options.push(<button className="button button-comparation">'{">"}='</button>);
            options.push(<button className="button button-comparation">'{"<"}='</button>);
            break;            
        case('columns'):
            options.push(<button className="button button-column">Column1</button>);
            options.push(<button className="button button-column">Column2</button>);
            break;
        default:
    }

    return(
        <div className={`selector ${type}`}>
            
            <div className="selector-name">
                {type}
            </div>
            <div className="selector-options">
                {options}
            </div>

            
        </div>
    );
}

export default Selector;