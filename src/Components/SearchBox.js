import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";



const SearchBox = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searcherrors, setsearcherrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    let navigate = useNavigate();

    const handleChange = (e) =>{
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setsearcherrors(validate(searchInput));
        setisSubmit(true);
    };

    const validate = (values) =>{
        const errors = {};
        const regex = /^[0-9]{4,8}$/i;
        if(!values){
            errors.msg = "Jewelry id is required !!"
        }
        else if(!regex.test(values)){
            errors.msg = "jewelry id should be numeric and 4-8 digits";
        }
        return errors;
    };

    useEffect(() => { 
        console.log(searcherrors);
        if(Object.keys(searcherrors).length === 0 && isSubmit){
            console.log(searchInput);
            navigate( '/ProductDetails',{ state: searchInput});
        }// eslint-disable-next-line react-hooks/exhaustive-deps
    },[searcherrors]);

  return (
    <div>
    <Paper
      sx={{ display: 'flex', alignItems: 'center', width: '60%', height: 70, marginLeft:'20%', marginTop:13 }}
    >
    <form onSubmit={handleSubmit} style={{width:'100%'}}>
      <InputBase
        style={{width:'60%'}}
        placeholder="Enter Product Id#" onChange={handleChange}
      />
      <IconButton type="button" sx={{ width: '5%' }} aria-label="search">
        <SearchIcon />
      </IconButton>
        <Button variant="contained" type="submit" style={{backgroundColor: '#5c6869', borderColor: 'green'}}>Search</Button>
        </form>
    </Paper>
    <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', width: '50%', marginLeft:'25%', marginTop:2, color:'purple' }}>
        {searcherrors.msg}
      </Typography>
    </div>
    
  )
}

export default SearchBox