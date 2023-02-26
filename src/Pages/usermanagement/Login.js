import React, {useState} from "react";

import Navbar from '../../Components/Navbar'

import {useNavigate} from "react-router-dom";
function Login(){


const [isToggled, setIsToggled] = useState(false);
localStorage.setItem("isToggled",isToggled);
// setIsToggled(false);
const [Email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();
localStorage.setItem("Email",Email);

// const changer = (event) =>{



//     navigate("/Register");


// }


const log_in = (event) =>{
   
if(Email=="group8@dal.ca" && password=="Test@123"){
    // alert("loggedin")
    navigate("/Profile");
    setIsToggled(!isToggled)
    localStorage.setItem("isToggled",isToggled);
}
else{
    alert("invalid credentials")
}
}




  


    return(
  
        <div>
    
            <div className="containerind">
                
                <div>
                    <form onSubmit={log_in}>
                        <div>
                            <div><input type="email" placeholder="Email" onChange={(event)=>setEmail(event.target.value)}  required></input></div>
                            <div><input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} required></input></div>
                        </div>
                        <div className="containerind2"><button type="submit">Login</button></div>
                    </form>
                </div>
            </div>
            </div>
     
   );

// return("hello");
};

export default Login;