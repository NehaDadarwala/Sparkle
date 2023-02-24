import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Navbar from '../../Components/Navbar';

const defaultValues = {
  billnumber: '',
};


const BillValidation = () => {
  const [formValues, setFormValues] = useState(defaultValues)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const validateBill = (data) => {
    navigate('/billdetails', { state: formValues.billnumber });
  };


  return (
    <div>
      <Navbar/>
   
    <div style={{ marginTop: '20%' }}>
      <form onSubmit={handleSubmit(validateBill)}>
        <Grid container alignItems="center"  direction="column">
          <Grid item>
            <TextField
              label="Bill Number"
              type="text"
              value={formValues.billnumber}
              autoFocus
              style = {{width: 250}}
              InputLabelProps={{ style: { color: '#5c6869' } }}
              {...register("billnumber", {
                onChange: (e) => { handleInputChange(e) },
                required: "Bill Number is required.",
                pattern: {
                  value: /[0-9]{9}/,
                  message: "Should be numbers of minimum length 9"
                }
              })}
              error={Boolean(errors.billnumber)}
              helperText={errors.billnumber?.message}
            />
          </Grid>
          <Grid item>
            <Button style={{ margin: "20px", backgroundColor: '#5c6869' }} variant="contained"  type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
    </div>
  )
}

export default BillValidation