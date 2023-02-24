import React, {useState} from "react";


function Profile(){
const FirstName=localStorage.getItem("FirstName")
console.log(FirstName)

const email=localStorage.getItem("Email")
const role =localStorage.getItem("Role")




    return(
        
        <div>
        <div><h4>Profile</h4></div>

        <div>
    <table>    
    <tr><td>Logged In as:</td><td>{email}</td></tr>
    <tr><td>Responsibility:</td><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </td></tr>
    </table>   
    </div>                  
    </div>
  
    );

    };
export default Profile;