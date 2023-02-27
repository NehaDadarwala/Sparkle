import React, { useState } from 'react';
import CustomButton from '../../Components/CustomButton';
import {useNavigate} from "react-router-dom";




function RemEmpList() {

// var people=[
//         { name: 'John', role: "sales associate" } ];

const navigate=useNavigate();

const [remvalue,SetRemValue]=useState('')
 var people=[]   






const remove = (event)=>{

  if(localStorage.getItem("people")!=null){
    people=JSON.parse(localStorage.getItem("people"));
    people=people.filter(item => item.name !== remvalue); 
    localStorage.setItem("people",JSON.stringify(people))
    
 }

 navigate("/Profile")

}


  return (
    
    <div className='containerind'>
    
    <form onSubmit={remove}>

    <input type="text" onChange={(event)=>{SetRemValue(event.target.value)}} placeholder="Enter Employee Name "/>
    <div className='containerind2'>
        {/* <button type='submit'>Remove</button> */}
        <CustomButton label="Remove" onclickFunction={remove}></CustomButton>
        </div>
    </form>
     
      
    </div>
   
  );
}



export default RemEmpList;

