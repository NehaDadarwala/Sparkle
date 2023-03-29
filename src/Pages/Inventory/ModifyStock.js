import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Autocomplete, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function ModifyStock() {

    const [formValues, setFormValues] = useState([])
    const [refNumber, setRefNumber] = useState([]);
    const [category, setCategory] = useState([]);

    const location = useLocation();
    const productNameuseRef = React.useRef(null);
    const categoryuseRef = React.useRef(null);
    const qtyuseRef = React.useRef(null);
    const priceuseRef = React.useRef(null);
    const descriptionuseRef = React.useRef(null);
    const imageRef = React.useRef(null);
    const addButtonuseRef = React.useRef(null);


    useEffect(() => {

        const getProductReferenceUrl = // "localhost:3000/inventory/getProductRefNumber"
            "https://sparkle-api.onrender.com/inventory/getProductRefNumber"

        const getCategory = "https://sparkle-api.onrender.com/inventory/category"

        axios.get(getProductReferenceUrl)
            .then(res => {
                console.log(res.data);
                const refDet = [];
                refDet.push(res.data.product_ref_number);
                refDet.map((refNumber) => {
                    setRefNumber(refNumber);
                    return (<></>)
                });
            });

        axios.get(getCategory)
            .then(res => {
                console.log(res.data);
                const cateDet = [];
                cateDet.push(res.data.category);
                console.log(cateDet);
                cateDet.map((category) => {
                    setCategory(category);
                    return (<></>)
                });
            });


        const defaultValues = {
            product_name: location.state !== null ? location.state.product_name : "",
            category_id: location.state !== null ? location.state.category_id : "",
            qty: location.state !== null ? location.state.qty : "",
            price: location.state !== null ? location.state.price : "",
            product_description: location.state !== null ? location.state.product_description : "",
            product_ref_number: location.state !== null ? location.state.product_ref_number : ""
        };

        setFormValues(location.state == null ? defaultValues : location.state);
    }, [location.state]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleInputChange = (e) => {
        console.log(e.target.label);
        const { name, value } = e.target;
        console.log("name = " + name);
        console.log("value" + value);
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleCategoryChange = (event, value) => {
        console.log(value)
        if (value) {
            setFormValues({
                ...formValues,
                category_id: value._id,
            });
        }
        console.log(formValues)
    }
    
    const navigate = useNavigate();

    const getRefundProducts = () => {
        Swal.fire({
            title: "Product Added Successfully",
            icon: 'success',
            text: "Redirecting in a second...",
            timer: 1500,
            showConfirmButton: false
        }).then(function () {
            navigate("/viewStock")
        })
    };

    const onClickAdd = () => {

        const addProductUrl = "https://sparkle-api.onrender.com/inventory/addProduct"
        console.log(formValues)
        axios.post(addProductUrl,{
            product_name: formValues.product_name,
            category_id : formValues.category_id,
            qty:formValues.qty,
            price : formValues.price,
            product_description : formValues.product_description,
            image :formValues.image
            //data: formValues
        })
        .then(
            res =>{console.log(res);
            console.log(res.data);
            if(res.status === 200)
            {
                navigate("/viewStock")
            }
            else if(res.status === 401)
            {
            
            }
        })
    }
    return (
        <Grid container spacing={2} alignItems="center" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <CssBaseline />
            <Box component="form" onSubmit={handleSubmit(onClickAdd)} noValidate
                // sx={{}}
                sx={{
                    mt: 1, marginTop: 8,
                    maxWidth: "100%"
                }}
            >
                {/*  */}
                <Grid item>
                    <Autocomplete
                        margin="normal"
                        disablePortal
                        id="productRefNumber"
                        value={formValues.product_ref_number}
                        options={refNumber}
                        ListboxProps={{ style: { maxHeight: 150 } }}
                        renderInput={(params) => <TextField {...params} style={{ alignItems: "right" }} label="Product Reference Number" size='small' />}
                    />
                </Grid>
                <Grid item style={
                    {
                        marginTop: "5%"
                    }
                }>
                    <TextField
                        autoFocus
                        inputProps={{
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    categoryuseRef.current.focus();
                                }
                            },
                            autoComplete: "off",
                            defaultValue: formValues.product_name,
                        }}
                        fullWidth
                        inputRef={refNumber}
                        label="Product Name"
                        name="product_name"
                        value={formValues.product_name}
                        {...register("product_name", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Product Name is required.",
                            pattern: {
                                message: "Product Name is required"
                            }
                        })}
                        error={Boolean(errors.product_name)}
                        helperText={errors.product_name?.message}
                    />
                </Grid>
                <Grid item style={
                    {
                        marginTop: "5%"
                    }}
                >
                    {/* <Autocomplete
                        inputProps={{
                            // onKeyPress: handleKeyPress
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    qtyuseRef.current.focus();
                                }
                            }
                        }}
                        inputRef={categoryuseRef}
                        disablePortal
                        name ="category_id"
                        id="category_id"
                        {...register("category_id", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Category is required.",
                            pattern: {
                                message: "Category is required"
                            }
                        })}
                        options={category}
                        ListboxProps={{ style: { maxHeight: 150 } }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                style={{ textAlign: "left" }}
                                label="Category"
                                size="small"
                                name = "category_id"
                                value={formValues.category_id}
                                error={Boolean(errors.category_id)}
                                helperText={errors.category_id?.message}
                            />
                        )}
                    /> */}
                    <Autocomplete
                        id="category"
                        options={category}
                        value={category.find(c => c._id === formValues.category_id)}
                        onChange={handleCategoryChange}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                            <TextField {...params} label="Category" variant="outlined" />
                        )}
                    />

                </Grid>
                <Grid item style={
                    {
                        marginTop: "8.5%"
                    }}>
                    <TextField
                        value={formValues.qty}
                        type="number"
                        inputProps={{
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    priceuseRef.current.focus();
                                }
                            }
                        }}
                        inputRef={qtyuseRef}
                        name="qty"
                        label="Qty"
                        id="productQty"
                        style={{
                            marginRight: "1%",
                            width: "49%"
                        }}
                        {...register("qty", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Quantity is required",
                            pattern: {
                                value: /^\d+$/,
                                message: "Quantity should be number"
                            }
                        })}
                        error={Boolean(errors.qty)}
                        helperText={errors.qty?.message}
                    />
                    <TextField
                        type="number"
                        value={formValues.price}
                        inputProps={{
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    descriptionuseRef.current.focus();
                                }
                            }
                        }}
                        inputRef={priceuseRef}
                        name="price"
                        label="Price"
                        style={{
                            marginLeft: "1%",
                            width: "49%"
                        }}
                        {...register("price", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Price is required",
                            pattern: {
                                value: /^\d+$/,
                                message: "Price should be number"
                            }
                        })}
                        error={Boolean(errors.price)}
                        helperText={errors.price?.message}
                    />
                </Grid>
                <Grid item style={
                    {
                        marginTop: "5%"
                    }}>
                    <TextField
                        multiline
                        rows={3}
                        inputProps={{
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    imageRef.current.focus();
                                }
                            }
                        }}
                        inputRef={descriptionuseRef}
                        margin="normal"
                        fullWidth
                        label="Description"
                        name="product_description"
                        value={formValues.product_description}
                        {...register("product_description", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Description is required.",
                            pattern: {
                                message: "Description is required"
                            }
                        })}
                        error={Boolean(errors.product_description)}
                        helperText={errors.product_description?.message}

                    />
                </Grid>
                <Grid item style={
                    {
                        marginTop: "5%"
                    }}>
                    <TextField
                        type="file"
                        id="outlined-image"
                        value={formValues.image}
                        inputProps={{
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    addButtonuseRef.current.focus();
                                }
                            }
                        }}
                        inputRef={imageRef}
                        name="image"
                        {...register("image", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Image is required",
                            pattern: {
                                message: "Please select an Image"
                            }
                        })}
                        error={Boolean(errors.image)}
                        helperText={errors.image?.message}
                        fullWidth
                    />
                </Grid>
                {/* <Grid item>
                                    <CustomButton
                                        //ref={focusNextRef}
                                        label="Modify"
                                        type="submit"
                                    />
                          
                                    <CustomButton
                                        //ref={focusNextRef}
                                        label="Add"
                                        type="submit"
                                        
                                    />
                               
                                </Grid> */}
                <Grid item>
                    <Button style={{
                        margin: "20px", backgroundColor: '#444454',
                        color: '#bab79d', borderColor: '#b28faa', height: 50, width: 150,
                        borderRadius: 7

                    }} variant="contained" type="submit"
                        ref={addButtonuseRef}
                        onClick={onClickAdd}
                    >
                        Add
                    </Button>
                    <Button style={{
                        margin: "20px", backgroundColor: '#444454',
                        color: '#bab79d', borderColor: '#b28faa', height: 50, width: 150,
                        borderRadius: 7
                    }} variant="contained" type="submit">
                        Modify
                    </Button>
                </Grid>
            </Box>
        </Grid>
    )
}

export default ModifyStock