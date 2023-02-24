import React, { useState } from 'react';
import Register from './Register';
import Navbar from '../../Components/Navbar';



function RemEmpList() {

// var people=[
//         { name: 'John', role: "sales associate" } ];

const [remvalue,SetRemValue]=useState('')
 var people=[]   



if(localStorage.getItem("people")!=null){
    people=JSON.parse(localStorage.getItem("people"));
    people=people.filter(item => item.name !== remvalue); 
    localStorage.setItem("people",JSON.stringify(people))
    
 }


const remove = (event)=>{

}


  return (
    <div>
      <Navbar />
    <div className='containerind'>
    
    <form onSubmit={remove}>

    <input type="text" onChange={(event)=>{SetRemValue(event.target.value)}} placeholder="Enter Employee Name "/>
    <div className='containerind2'>
        <button type='submit'>Remove</button>
        </div>
    </form>
     
      
    </div>
    </div>
  );
}



export default RemEmpList;

