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
import axiosApi from '../../Common/AxiosApi';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function ModifyStock() {

    const [formValues, setFormValues] = useState([])
    const [refNumber, setRefNumber] = useState([]);
    const [category, setCategory] = useState([]);
    const [isSearched,setIsSearched] = useState("");
    const location = useLocation();
    const { isFromViewStock } = useParams();

    //const isViewStock = new URLSearchParams(location.search).get('viewStock') === 'true';

    useEffect(() => {
        const getProductRefNumber = "/inventory/getProductRefNumber"
        const getCategory = "/inventory/category"
        axiosApi.get(getProductRefNumber)
            .then(res => {
                console.log(res.data);
                const refDet = [];
                refDet.push(res.data.product_ref_number);
                refDet.map((refNumber) => {
                    setRefNumber(refNumber);
                    return (<></>)
                });
            });

        axiosApi.get(getCategory)
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
            _id: location.state !== null ? location.state._id : "",
            product_name: location.state !== null ? location.state.product_name : "",
            category_id: location.state !== null ? location.state.category_id : "",
            qty: location.state !== null ? location.state.qty : "",
            price: location.state !== null ? location.state.price : "",
            product_description: location.state !== null ? location.state.product_description : "",
            product_ref_number: location.state !== null ? location.state.product_ref_number : "",
            image: location.state !== null ? location.state.image : "",
        };

        setFormValues(location.state == null ? defaultValues : location.state);
        console.log(formValues)
    }, [location.state], []);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleInputChange = (e) => {
        console.log(e.target.label);
        const target = e.target;
        const value = target.type === 'file' ? target.files[0] : target.value;
        const name = target.name;

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
    useEffect(() => {
        console.log(formValues)
    }, [formValues]);

    const handleRefNumberChange = (event, value) => {
        console.log(value)
        if (value) {
            setFormValues({
                ...formValues,
                _id: value._id
            });
        }
        setIsSearched(true)
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

    const onClickAdd = async () => {
        handleSubmit(async () => {
            const addProduct = "/inventory/addProduct"
            await axiosApi.post(addProduct, {
                product_name: formValues.product_name,
                category_id: formValues.category_id,
                qty: formValues.qty,
                price: formValues.price,
                product_description: formValues.product_description,
                image: formValues.image,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    if (res.status === 200) {
                        navigate("/viewStock");
                    }
                })
                .catch((err) => console.log(err));
        })((errors) => {
            // handle form validation errors here
        });
    };


    useEffect(() => {

        const getProductById = "inventory/getProduct/" + formValues._id

        axiosApi.get(getProductById)
            .then(res => {
                console.log(res.data);
                const prodDet = [];
                prodDet.push(res.data.product);
                console.log(prodDet);
                prodDet.map((product) => {
                    setFormValues(product);
                    return (<></>)
                });
            });
        if (formValues._id) {
            setIsSearched(true)
        }
        else {
           setIsSearched(false)
        }
        console.log(isSearched)
    }, [formValues._id]);


    const onClickModify = async () => {

        const modifyProductUrl = "/inventory/updateStock/" + formValues._id
        console.log(formValues)

        await axiosApi.put(modifyProductUrl, {
            product_name: formValues.product_name,
            category_id: formValues.category_id,
            qty: formValues.qty,
            price: formValues.price,
            product_description: formValues.product_description,
            ...(formValues.image instanceof File && { image: formValues.image })
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                if (res.status === 200) {
                    navigate("/viewStock");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Grid container spacing={2} alignItems="center" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: 'normal'
        }}>
            <CssBaseline />
            <Box component="form" noValidate
                // sx={{}}
                sx={{
                    mt: 1, marginTop: 8,
                    maxWidth: "100%"
                }}
            >
                {/*  */}
                <Grid item>
                    <Autocomplete
                        id="prodRefNumber"
                        options={refNumber}
                        value={
                            refNumber.find((c) => c._id === formValues._id) || { label: "" }
                        }
                        onChange={handleRefNumberChange}
                        getOptionLabel={(option) => option.label}
                        getOptionSelected={(option, value) => option._id === value._id}
                        style={{ height: "150" }}
                        renderInput={(params) => (
                            <TextField {...params} label="Search by Reference Number" variant="outlined"
                                required
                                size="small"
                                value={formValues._id}
                            />
                        )}

                    />
                </Grid>
                <Grid item style={
                    {
                        marginTop: "5%"
                    }
                }>
                    <TextField
                        autoFocus
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
                        required
                        variant="outlined"
                    />
                </Grid>
                <Grid item style={
                    {
                        marginTop: "5%"
                    }}
                >
                    <Autocomplete
                        id="category"
                        paperStyle={{ maxHeight: 200, overflow: 'auto' }}
                        options={category}
                        disabled={(isFromViewStock === true || isSearched === true) && Boolean(formValues.category_id)}
                        value={
                            category.find((c) => c._id === formValues.category_id) || { label: "" }
                        }
                        onChange={handleCategoryChange}
                        getOptionLabel={(option) => option.label}
                        getOptionSelected={(option, value) => option._id === value._id}
                        style={{ height: "150" }}
                        renderInput={(params) => (
                            <TextField {...params} label="Category" variant="outlined"
                                required
                                size="small"
                                value={formValues.category_id}
                                {...register("category_id", {
                                    onChange: (e) => { handleCategoryChange(e) },
                                    required: "Category is required.",
                                    pattern: {
                                        message: "Category is required"
                                    }
                                })
                                }
                                error={Boolean(errors.category_id)}
                                helperText={errors.category_id?.message}
                            //defaultValue={category.find(c => c._id === formValues.category_id)}
                            />
                        )}

                    />

                </Grid>
                <Grid item style={
                    {
                        marginTop: "5%"
                    }}>
                    <TextField
                        value={formValues.qty}
                        type="number"
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
                        required
                        variant="outlined"
                    />
                    <TextField
                        type="number"
                        value={formValues.price}
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
                        required
                        variant="outlined"
                    />
                </Grid>
                <Grid item style={
                    {
                        marginTop: "1%"
                    }}>
                    <TextField
                        multiline
                        rows={3}
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
                        })
                        }
                        error={Boolean(errors.product_description)}
                        helperText={errors.product_description?.message}
                        required
                        variant="outlined"
                    />
                </Grid>
                <Grid item style={
                    {
                        marginTop: "3%"
                    }}>
                    <TextField
                        type="file"
                        id="image"
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
                        required
                        variant="outlined"
                    />
                    <p>Previous Image: {formValues.image_name}</p>
                </Grid>
                <Grid item>
                    <Button style={{
                        margin: "5%", backgroundColor: '#444454',
                        color: '#bab79d', borderColor: '#b28faa', height: 50, width: 150,
                        borderRadius: 7
                    }} variant="contained"
                        onClick={onClickAdd}
                    >
                        Add
                    </Button>
                    <Button style={{
                        margin: "5%", backgroundColor: '#444454',
                        color: '#bab79d', borderColor: '#b28faa', height: 50, width: 150,
                        borderRadius: 7
                    }} variant="contained"
                        onClick={onClickModify}
                    >
                        Modify
                    </Button>
                </Grid>
            </Box>
        </Grid>
    )
}

export default ModifyStock