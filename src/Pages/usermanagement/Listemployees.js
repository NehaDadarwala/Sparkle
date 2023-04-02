import React, { useState, useEffect } from 'react';
import Register from './Register';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function EmpList() {
  const [people, setPeople] = useState([]);
  const navigate=useNavigate();
  const [error,setError]=useState(false);
  const [errormessage,setErrormessage]=useState('');

  useEffect(() => {
    const fetchEmpList = async () => {
      try {
        const response = await fetch("https://sparkle-api.onrender.com/user/getalluser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ authtoken: localStorage.getItem('authtoken') })
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
          
        }
        const data = await response.json();
        setPeople(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        setError(true)
        setErrormessage("you dont seem to have necessary permisiion")
        
      }
    };
    fetchEmpList();
  }, []);

  const removeerror=()=>{
    setError(false)
    setErrormessage('')
    navigate('/Profile')
  }

  const stylesli = {
    li: "hover",
    cursor: "pointer",
    display: 'block',
    boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
    borderRadius: '6px',
    padding: '5px',
    margin: '5px',
    backgroundColor: '#f0f0f0',
  }

  const stylesul = {
    listStyleType: 'none',
  };

  const stylesinput = {
    width: '175vh',
  };

  const clickable = (email) => {
    localStorage.setItem("email", email)
    navigate("/empprofile")
  }
  const apitrigger = async (event) => {
    try {
      const response = await fetch("http://localhost:5000/api/user/getalluser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ authtoken: localStorage.getItem('authtoken') })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPeople(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  const searchfunc = (val) => {
    if (val == '' || val == undefined || val == null) {
      apitrigger();
    } else {
      const filteredItems = people.filter((user) => user.name.toLowerCase().includes(val.toLowerCase()));
      setPeople(filteredItems);
    }
  }

  return (
    <div>
      <div>{!error &&
        <input
          type="text"
          id="search"
          onChange={(event) => { searchfunc(event.target.value) }}
          placeholder="Search for person with name"
          style={stylesinput}
        />}
      </div>
      <div>
        <ul style={stylesul}>
          {people.map(person => (
            <li key={person.email} onClick={() => clickable(person.email)} style={stylesli}>{person.name}</li>
          ))}
        </ul>
      </div>
      <div className='containerind2'>
      {error && <div style={{ color: 'red' }}>{errormessage}</div>}
      {error && <button style={{ color: 'red' }} onClick={removeerror}>ok</button>}
      </div>
    </div>
  );
};

//   return (
//     <div className='containerind'>
//       <div>
//         {people.length === 0 && <div style={{ color: 'red' }}>No employee to show</div>}
//       </div>
//       {people.map(person => (
//         <table key={person._id}>
//           <tbody>
//             <tr>
//               <td>Name</td>
//               <td>{person.name}</td>
//             </tr>
//             <tr>
//               <td>Role</td>
//               <td>{person.role}</td>
//             </tr>
//           </tbody>
//         </table>
//       ))}
//     </div>
//   );


export default EmpList;

// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import { useNavigate } from "react-router-dom";

// function ProfileList() {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState('')
//   const [userlist, setUserList] = useState([]);

//   useEffect(() => {
//     axios.get("https://express-t4.onrender.com/api/users").then((res) => {
//       setUserList(res.data);
//     });
//   }, []);

//   const apitrigger = (event) => {
//     axios.get("https://express-t4.onrender.com/api/users").then((res) => {
//       setUserList(res.data);
//     });
//   }

//   const stylesli = {
//     li: "hover",
//     cursor: "pointer",
//     display: 'block',
//     boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
//     borderRadius: '6px',
//     padding: '5px',
//     margin: '5px',
//     backgroundColor: '#f0f0f0',
//   }

//   const stylesul = {
//     listStyleType: 'none',
//   };

//   const stylesinput = {
//     width: '175vh',
//   };

//   const clickable = (email) => {
//     localStorage.setItem("email", email)
//     navigate("/profile")
//   }

//   const searchfunc = (val) => {
//     if (val == '' || val == undefined || val == null) {
//       apitrigger();
//     } else {
//       const filteredItems = userlist.filter((user) => user.email.toLowerCase().includes(val.toLowerCase()));
//       setUserList(filteredItems);
//     }
//   }

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           id="search"
//           onChange={(event) => { searchfunc(event.target.value) }}
//           placeholder="Search for person with email"
//           style={stylesinput}
//         />
//       </div>
//       <div>
//         <ul style={stylesul}>
//           {userlist.map(person => (
//             <li key={person._id} onClick={() => clickable(person.email)} style={stylesli}>{person.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProfileList;
