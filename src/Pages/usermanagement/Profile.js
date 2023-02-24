import React, {useState} from "react";
import Navbar from '../../Components/Navbar';

function Profile(){
const FirstName=localStorage.getItem("FirstName")
console.log(FirstName)

const email=localStorage.getItem("Email")
const role =localStorage.getItem("Role")




    return(
        <div>
        <Navbar />
        <div>
        <div><h4>Profile</h4></div>

        <div>
    <table>    
    <tr><td>Logged In as:</td><td>{email}</td></tr>
    <tr><td>Responsibility:</td><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </td></tr>
    </table>   
    </div>                  
    </div>
    </div>
    );

    };
export default Profile;