import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Autocomplete, Grid } from '@mui/material';
import Button from '@mui/material/Button';
//import CustomButton from '../../Components/CustomButton';
//import { useCallback, useRef } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

function ModifyStock() {

    const productRefNumber = [
        { label: '#RING01' },
        { label: '#EARRING01' },
        { label: '#NECKLACE01' }
    ];

    const productNameuseRef = React.useRef(null);
    const categoryuseRef = React.useRef(null);
    const qtyuseRef = React.useRef(null);
    const priceuseRef = React.useRef(null);
    const descriptionuseRef = React.useRef(null);
    const addButtonuseRef = React.useRef(null);

    const defaultValues = {
        productName: '',
        category: '',
        qty: '',
        price: '',
        description: '',
    };

    const [formValues, setFormValues] = useState(defaultValues)

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

    return (
        <div>
            <div>
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
                        {/* <Typography component="h1" variant="h5">
                            Modify Stock
                        </Typography> */}

                        <Box component="form" onSubmit={handleSubmit(console.log)} sx={{ mt: 1 }} >

                            <Autocomplete
                                disablePortal
                                id="productRefNumber"
                                options={productRefNumber}
                                fullWidth
                                renderInput={(params) => <TextField {...params} label="Product Reference Number" />}
                            />
                            <TextField
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
                                        message: "Should be number"
                                    }
                                })}
                                error={Boolean(errors.qty)}
                                helperText={errors.qty?.message}
                            />
                            <TextField
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
                                id="productPrice"
                                {...register("price", {
                                    onChange: (e) => { handleInputChange(e) },
                                    required: "Price is required",
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Should be number"
                                    }
                                })}
                                error={Boolean(errors.price)}
                                helperText={errors.price?.message}
                            />
                            <TextField
                                inputProps={{
                                    onKeyPress: event => {
                                        const { key } = event;
                                        console.log(key);
                                        if (key === "Enter") {
                                            categoryuseRef.current.focus();
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
            </div>
        </div>

    )
}

export default ModifyStock