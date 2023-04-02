// import React, { useState } from "react";
// import CustomButton from '../../Components/CustomButton';

// function UpdateForm() {
//   const [updateField, setUpdateField] = useState("");
//   const [selectedField, setSelectedField] = useState("");
//   const [email, setEmail] = useState("");
//   const [updateValue, setUpdateValue] = useState("");

//   const handleSelectChange = (event) => {
//     setSelectedField(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleUpdateValueChange = (event) => {
//     setUpdateValue(event.target.value);
//   };

//   const handleSubmit =async (event) => {
//     event.preventDefault();

//     // Submit form values to the server or update state as needed
//     console.log("Selected Field:", selectedField);
//     console.log("Email:", localStorage.getItem('updateemail'));
//     console.log("Update Value:", updateValue);
    
    
//     try {
//       var obj={email:localStorage.getItem('updateemail'), authtoken: localStorage.getItem('authtoken') };
//     obj[selectedField]=updateValue;
//     console.log(obj)
//       const response = await fetch("http://localhost:5000/api/user/updateuser", {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
        
        
//         body: JSON.stringify(obj)
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data);
      
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }

    
//     // setSelectedField("");
//     // setEmail("");
//     // setUpdateValue("");
//   };

//   return (
//     <div className="containerind">
//     <form onSubmit={handleSubmit}>
//       <label>
//         Update Field :
//         <select value={selectedField} onChange={handleSelectChange}>
//           <option value="">--Select Field--</option>
//           <option value="name">Name</option>
//           <option value="email">Email</option>
//           <option value="password">Password</option>
//           <option value="phone">Phone</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Update Value:
//         <input
//           type="text"
//           value={updateValue}
//           onChange={handleUpdateValueChange}
//         />
//       </label>
//       <div className="containerind2">
//       <CustomButton type="submit" label="Update" onclickFunction={handleSubmit}></CustomButton>
//       </div>
//       <br />
      
//     </form>
//     </div>
   
//   );
// }

// export default UpdateForm;
import React, { useState } from "react";
import CustomButton from '../../Components/CustomButton';
import axios from "axios";

function UpdateForm() {
  const [updateField, setUpdateField] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [email, setEmail] = useState("");
  const [updateValue, setUpdateValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSelectChange = (event) => {
    setSelectedField(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdateValueChange = (event) => {
    setUpdateValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  //   try {
  //     const authtoken = localStorage.getItem('authtoken');
  //     const email = localStorage.getItem('updateemail');
  //     const obj = {
  //       authtoken,
  //       email,
  //       [selectedField]: updateValue,
  //     };
  //     const response = await fetch("http://localhost:5000/api/user/updateuser", {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(obj)
  //     });
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //     setErrorMessage('');
  //   } catch (error) {
  //     console.error('There was a problem with the fetch operation:', error);
  //     setErrorMessage('There was a problem with the update. Please try again later.');
  //   }

  try{
    const authtoken = localStorage.getItem('authtoken');
      const email = localStorage.getItem('updateemail');
      const obj = {
        authtoken,
        email,
        updatepayload:{[selectedField]: updateValue},
      };
      
    await axios.put('https://sparkle-api.onrender.com/user/updateuser',obj).then(response => {console.log(response)});
  }catch(error){
    console.log(error)
  }
  };

  return (
    <div className="containerind">
    <form onSubmit={handleSubmit}>
      <label>
        Update Field :
        <select value={selectedField} onChange={handleSelectChange}>
          <option value="">--Select Field--</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
          <option value="phone">Phone</option>
        </select>
      </label>
      <br />
      <label>
        Update Value:
        <input
          type="text"
          value={updateValue}
          onChange={handleUpdateValueChange}
        />
      </label>
      <div className="containerind2">
      <CustomButton type="submit" label="Update" onclickFunction={handleSubmit}></CustomButton>
      </div>
      <br />
      {errorMessage && <div className="error">{errorMessage}</div>}
</form>
</div>
  );
}
export default UpdateForm;