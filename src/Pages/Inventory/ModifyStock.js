import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Autocomplete, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function ModifyStock() {

    const productRefNumber = [
        { label: '#RING01' },
        { label: '#EARRING01' },
        { label: '#NECKLACE01' }
    ];

    const location = useLocation();
    const productNameuseRef = React.useRef(null);
    const categoryuseRef = React.useRef(null);
    const qtyuseRef = React.useRef(null);
    const priceuseRef = React.useRef(null);
    const descriptionuseRef = React.useRef(null);
    const addButtonuseRef = React.useRef(null);

    

    const [formValues, setFormValues] = useState([])

    useEffect(() => {
        const defaultValues = {
            productName: location.state !== null ? location.state.productName : "",
            category: location.state !== null ? location.state.category : "",
            qty: location.state !== null ? location.state.qty : "",
            price: location.state !== null ? location.state.price : "",
            description: location.state !== null ? location.state.description : "",
            productRefNumber: location.state !== null ? location.state.productRefNumber : ""
        };

        setFormValues(location.state == null ? defaultValues : location.state);
        console.log(location.state);
        console.log(location.state);
    }, [location.state]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log("name = " + name);
        console.log("value" + value);
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

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

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box component="form" onSubmit={handleSubmit(getRefundProducts)} noValidate sx={{ mt: 1 }} >

                    <Autocomplete
                        disablePortal
                        id="productRefNumber"
                        value={formValues.productRefNumber}
                        options={productRefNumber}
                        fullWidth
                        ListboxProps={{ style: { maxHeight: 150 } }}
                        renderInput={(params) => <TextField {...params} label="Product Reference Number" size='small' />}
                    />
                    {console.log(location)}
                    <TextField
                        autoFocus
                        inputProps={{
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    categoryuseRef.current.focus();
                                }
                            }
                        }}
                        inputRef={productNameuseRef}
                        margin="normal"
                        fullWidth
                        label="Product Name"
                        name="productName"
                        value={formValues.productName}
                        {...register("productName", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Product Name is required.",
                            pattern: {
                                message: "Product Name is required"
                            }
                        })}
                        error={Boolean(errors.productName)}
                        helperText={errors.productName?.message}

                    />
                    <TextField
                        inputProps={{
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    qtyuseRef.current.focus();
                                }
                            }
                        }}

                        inputRef={categoryuseRef}
                        //ref={focusNextRef}
                        margin="normal"
                        fullWidth
                        name="category"
                        label="Category"
                        value={formValues.category}
                        {...register("category", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Category is required.",
                            pattern: {
                                message: "Category is required"
                            }
                        })}
                        error={Boolean(errors.category)}
                        helperText={errors.category?.message}
                    />
                    <TextField
                        value={formValues.qty}
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
                        margin="normal"
                        fullWidth
                        name="qty"
                        label="Qty"
                        id="productQty"
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
                        margin="normal"
                        fullWidth
                        name="price"
                        label="Price"
                        {...register("price", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Price is required",
                            pattern: {
                                value: /^\d+\.\d{0,2}$/,
                                message: "Price should be number"
                            }
                        })}
                        error={Boolean(errors.price)}
                        helperText={errors.price?.message}
                    />
                    <TextField
                        multiline
                        rows={3}
                        inputProps={{
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    addButtonuseRef.current.focus();
                                }
                            }
                        }}
                        inputRef={descriptionuseRef}
                        margin="normal"
                        fullWidth
                        label="Description"
                        name="description"
                        value={formValues.description}
                        {...register("description", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Description is required.",
                            pattern: {
                                message: "Description is required"
                            }
                        })}
                        error={Boolean(errors.description)}
                        helperText={errors.description?.message}

                    />
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
                            ref={addButtonuseRef}>
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
            </Box>
        </Container>

    )
}

export default ModifyStock