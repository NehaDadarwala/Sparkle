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

    const product_ref_number = [
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
    const imageRef = React.useRef(null);
    const addButtonuseRef = React.useRef(null);



    const [formValues, setFormValues] = useState([])

    useEffect(() => {
        const defaultValues = {
            product_name: location.state !== null ? location.state.product_name : "",
            product_category: location.state !== null ? location.state.product_category : "",
            qty: location.state !== null ? location.state.qty : "",
            price: location.state !== null ? location.state.price : "",
            product_description: location.state !== null ? location.state.product_description : "",
            product_ref_number: location.state !== null ? location.state.product_ref_number : ""
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
                        value={formValues.product_ref_number}
                        options={product_ref_number}
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
                        inputRef={product_ref_number}
                        margin="normal"
                        fullWidth
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
                        name="product_category"
                        label="Category"
                        value={formValues.product_category}
                        {...register("product_category", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Category is required.",
                            pattern: {
                                message: "Category is required"
                            }
                        })}
                        error={Boolean(errors.product_category)}
                        helperText={errors.product_category?.message}
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
                        name="product_description"
                        value={formValues.product_description}
                        {...register("description", {
                            onChange: (e) => { handleInputChange(e) },
                            required: "Description is required.",
                            pattern: {
                                message: "Description is required"
                            }
                        })}
                        error={Boolean(errors.product_description)}
                        helperText={errors.product_description?.message}

                    />
                    <TextField
                    type="file"
                    id="outlined-image"
                        value={formValues.image}
                        inputProps={{
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    imageRef.current.focus();
                                }
                            }
                        }}
                        inputRef={imageRef}
                        margin="normal"
                        fullWidth
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