import React, {useState} from "react";

import Navbar from '../../Components/Navbar'

import {useNavigate} from "react-router-dom";
function Logout(){
    const navigate=useNavigate();
    const logout =(event)=>{
        event.preventDefault();
       
        localStorage.clear();
        navigate("/");
    }

    const logoutno =(event)=>{
        event.preventDefault();
       
        localStorage.clear();
        navigate("/Profile");
    }









  


    return(
  
        <div>
    
            <div className="containerind">
                
                <div>
                    <form onSubmit={logout}>
                        <div>
                            <div><h4>Are you Sure You want to logout</h4></div>
                           
                        </div>
                        <div className="containerind2"><button onClick={logout}>Yes</button><button onClick={logoutno}>No</button></div>
                    </form>
                </div>
            </div>
            </div>

     
   );

// return("hello");
};

export default Logout;