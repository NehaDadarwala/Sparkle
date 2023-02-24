import React, { useState } from 'react';
import Register from './Register';




function EmpList() {




 var people=[]   



if(localStorage.getItem("people")!=null){
    people=JSON.parse(localStorage.getItem("people"));

    
 }



  return (

   
    <div className='containerind'>
        <div>
            <h4>Add an employee first to view the list</h4>
        </div>
    
        {people.map(person => (
          <table key={person.name}>
           <tr><td>Name</td><td>{person.name}</td></tr> 
          
           <tr><td>Role</td><td>{person.role}</td></tr> 
          </table>
        ))}
     
      
    </div>
   
  );
}



export default EmpList;

