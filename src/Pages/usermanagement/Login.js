import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import CustomButton from '../../Components/CustomButton';
import axios from 'axios';
function Login(){


const [isToggled, setIsToggled] = useState(false);
localStorage.setItem("isToggled",isToggled);
// setIsToggled(false);
const [Email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();
localStorage.setItem("Email",Email);




const log_in =async (event) =>{
   


await axios.post(`https://sparkle-api.onrender.com/user/login`, { email:Email,password:password })
      .then(res => {
        // console.log(res);
        console.log(res.data.token);
        localStorage.setItem('authtoken',res.data.token);
        navigate("/Profile");
      })
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
                        {/* <div className="containerind2"><button type="submit">Login</button></div> */}
                        <div className="containerind2"><CustomButton type="submit" label="Login" onclickFunction={log_in}></CustomButton></div>
                    </form>
                </div>
            </div>
            </div>
     
   );


};

export default Login;