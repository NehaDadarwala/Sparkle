import Grid from "@material-ui/core/Grid";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './modal.css';
import CustomButton from '../../Components/CustomButton';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
  
const RepairForm = () => {
  const [phone, setPhone] = useState('');
  const [bag, setBag] = useState('');
  const [name, setFname] = useState('');
  const [desc, setDesc] = useState('');
  const [cost, setCost]= useState('');
  const [status, setStatus] = useState('');
  const [instruction, setInstruction]= useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (phone === '' || bag === '' || name === '' || desc === '' || cost === '' || status === '' || instruction === '') {
      setFormSubmitted(true);
      return;
    }else 
    Swal.fire({
      title: 'Repair Added Successfully ',
      position: 'top-end',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then(function () {
      window.location.href = "/create";
  })
    
}
  const phoneError = phone === '' && formSubmitted; 
  const bagError = bag === ''&& formSubmitted;
  const nameError = name === ''&& formSubmitted;
  const descError = desc === ''&& formSubmitted;
  const costError = cost === ''&& formSubmitted;
  const statusError = status === ''&& formSubmitted;
  const instructionError = instruction === ''&& formSubmitted;

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleBagChange = (event) => {
    setBag(event.target.value);
  };
  const handleNameChange = (event) => {
    setFname(event.target.value);
  };
  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };
  const handleCostChange = (event) => {
    setCost(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleInstructionChange = (event) => {
    setInstruction(event.target.value);
  };
  
  
    return (
        <div style={{ marginTop: '5%' }}>
      <form >
        <Grid container alignItems="center"  direction="column">
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Phone Number*"
              type="number"
              value={phone}
              error={phoneError}
              onChange={handlePhoneChange}
              helperText={phoneError ? 'This field is required' : ''}
            />
            <TextField
              id="outlined-multiline"
              label="Repair Bag Number*"
              type="number"
              value={bag}
              error={bagError}
              onChange={handleBagChange}
              helperText={bagError ? 'This field is required' : ''}
            />
            
          </Grid>
          <Grid item>
            <TextField
              label="Name*"
              type="text"
              name="fname"
              value={name}
              error={nameError}
              onChange={handleNameChange}
              helperText={nameError ? 'This field is required' : ''}
            />
            
            <TextField
              label="Description*"
              type="text"
              name="description"
              value={desc}
              error={descError}
              onChange={handleDescChange}
              helperText={descError ? 'This field is required' : ''}
            />
            
          </Grid>
          <Grid item>
            <TextField
              label="Estimated Cost*"
              type="number"
              name="cost"
              value={cost}
              error={costError}
              onChange={handleCostChange}
              helperText={costError ? 'This field is required' : ''}
            />
            <TextField
              label="Status*"
              type="text"
              name="rstatus"
              value={status}
              error={statusError}
              onChange={handleStatusChange}
              helperText={statusError ? 'This field is required' : ''}
            />
          </Grid>
          <Grid>
            <TextField
                label="Repair Instruction*"
                type="text"
                style={{width:'92%'}}
                value={instruction}
                error={instructionError}
              onChange={handleInstructionChange}
              helperText={instructionError ? 'This field is required' : ''}
            />
          </Grid>

          <Grid item>
            
            <CustomButton onclickFunction={handleSubmit}
              label="Create"
               type="submit"
              
              />

          </Grid>
          </Box>
        </Grid>
        
      </form>
      
        </div>
    )
}

export default RepairForm