import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Textarea from '@mui/material/TextareaAutosize';
import Container from '@mui/material/Container';

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
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="productName"
                                label="Product Name"
                                name="productName"
                                autoFocus
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
                                minRows={3}
                                fullWidth
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{ backgroundColor:'#384241'}}
                            >
                                Modify
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </div>
        </div>
    )
}

export default modifyStock