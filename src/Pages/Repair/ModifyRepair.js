import Grid from "@material-ui/core/Grid";
import TextField from '@mui/material/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CustomButton from '../../Components/CustomButton';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ModifyRepair = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bag, setBag] = useState('');
  const [rstatus, setStatus] = useState('');
  const bagError = bag === ''&& formSubmitted;
  const statusError = rstatus === ''&& formSubmitted;  

  const handleBagChange = (event) => {
    setBag(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bag === '' || rstatus === '' ) {
      setFormSubmitted(true);
      return;
    }else 
    Swal.fire({
      title: 'Status Changed Successfully ',
      position: 'top-end',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then(function () {
      window.location.href = "/Profile";
  })
}
  return (
  
    <div style={{ marginTop: '15%' }}>
      <form >
      <Grid container spacing={2} alignItems="center" style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           flexDirection:'column' }}>
      <Grid item>
        <TextField 
              label="Repair bag number*" 
              variant="outlined" 
              type="number"
              style={{width: '235px'}}
              value={bag}
              error={bagError}
              onChange={handleBagChange}
              helperText={bagError ? 'This field is required' : ''} />
      </Grid>
      <Grid item>
        <TextField select label="Status*" variant="outlined" style={{width: '235px',marginTop:'15%'}} 
              value={rstatus}
              error={statusError}
              onChange={handleStatusChange}
              helperText={statusError ? 'This field is required' : ''} >
          <MenuItem value="Picked up">Picked up</MenuItem>
          <MenuItem value="Complete">Complete</MenuItem>
          <MenuItem value="Return">Return</MenuItem>
      </TextField>
      </Grid>
    
     
       <Grid item style={{marginTop:'2%'}}>
            
            <CustomButton 
              label="Submit"
              type="submit"
              onclickFunction={handleSubmit}
              ></CustomButton>
            </Grid>
            
        </Grid>
      </form>
      </div>
  );
}
export default ModifyRepair;