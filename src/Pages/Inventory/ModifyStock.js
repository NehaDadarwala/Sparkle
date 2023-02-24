import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Textarea from '@mui/material/TextareaAutosize';
import Container from '@mui/material/Container';
import { Autocomplete } from '@mui/material';
import CustomButton from '../../Components/CustomButton';


function modifyStock() {

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     })
    // };


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
                            alignItems: 'center',
                        }}
                    >
                        {/* <Typography component="h1" variant="h5">
                            Modify Stock
                        </Typography> */}
                        {/* onSubmit={handleSubmit} */}
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                autoFocus
                                // options={top100Films}
                                // sx={{ width: 300 }}
                                fullWidth
                                renderInput={(params) => <TextField {...params} label="Search Product" />}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="productName"
                                label="Product Name"
                                name="productName"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="productCategory"
                                label="Category"
                                id="productCategory"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="produtQty"
                                label="Qty"
                                id="productQty"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="productPrice"
                                label="Price"
                                id="productPrice"
                            />
                            <Textarea margin="normal"
                                required
                                name="productDescription"
                                placeholder="Decription"
                                id="productDescription"
                                style={{ width: 500, marginTop: "3%" }}
                                minRows={3}
                            />
                            <div>
                                <div>
                                    <CustomButton
                                        label="Modify"
                                        type="submit"
                                    />
                                </div>
                                <div>
                                    <CustomButton
                                        label="Add"
                                        type="submit"
                                    />
                                </div>
                            </div>
                        </Box>
                    </Box>
                </Container>
            </div>
        </div>
       
    )
}

export default modifyStock