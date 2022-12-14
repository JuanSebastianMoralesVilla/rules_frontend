import { render } from '@testing-library/react';
import React, { Component } from 'react'
//import {Suppliers} from "./components/Suppliers";
import Selector from '../components/Selector.js'
import '../stylesheets/Home.css'

class Home extends Component{
  render(){
    return (
      <div className='home'>
        
        <div className='title'>
          <h1>MOTOR DE REGLAS </h1>
        </div>
        <div className='expression-builder-selectors'>
          <Selector type='logical'></Selector>
          <Selector type='comparation'></Selector>
          <Selector type='columns'></Selector>
        </div>


      </div>

    )
  }
}

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
