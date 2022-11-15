import React, { useRef, useState } from 'react';
import './App.css';
import Name from './components/firstComp';
import {render} from "react-dom";
import { prependOnceListener } from 'process';
import { isPropertySignature } from 'typescript';


//const textInput = React.useRef //retrive value as textInput.current.value

function App() {


  return (
    <div className="App mt-5 ml-5 mr-5" id='divMain'>
      <div className='flex flex-col bg-orange-400'>
        <span className='text-left text-lg'>Vidhya Arun</span> 
        <span className='text-right'>vidhya.raghav21@gmail.com</span>
        <span className='text-right'>8861630864</span> 
      </div>
      <div className='flex flex-col bg-red-200'>About Me
        <ul className='text-left font-semibold flex-col'>
          <li className='font-normal'>Computer science Engineer</li>
          <li className='font-normal'>Four years work experience in Javascript, ASP, C # and ASP.net, SQL , Crystal reports</li>
          <li className='font-normal'>Microsoft certified professional</li>
          <li className='font-normal'>Jquery certification</li>
        </ul>

      </div>
      <div className='md:grid flex flex-row gap-5 w-full'>
     <Name />
     </div>
    </div>
  );
}

export default App;
