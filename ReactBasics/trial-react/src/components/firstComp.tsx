import React from "react";
import { isPropertySignature } from "typescript";
//trial - buttoon to print the no. entered in the parent comp
import './data.json';
import game from '../images/js.png'

const fetchJsonData=(() =>{
    console.log("inside")
   const d= require('./data.json')
   return d
})


// creating a component 
const Name = ()=>{
   const value= fetchJsonData();
   console.log("val", value)

   
    return(
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 items-center w-full h-auto">
            {value.map((data:any, index:number)=>
            <div key = {index} className="flex flex-row border-white rounded-lg border-2 gap-5 bg-yellow-800 hover:bg-orange-300 " >
                <div className="flex flex-col flex-wrap">
                    <div className="bg-red-400 text-center flex-wrap">{data.title}</div>
                    <a href={data.imagelink}>
                    <img  src={game}  className="w-32 h-28 bg-cover"></img>
                    </a>
                    <div>{data.image}</div>
                    <div>{data.language}</div>
                    <a href={data.code}>View Code</a>
                </div>
            </div>
            )}
        </div>
        
    )
   
}

//const Namecomp = <Name />



export default Name;