import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ring from '../ring.png'
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';

const StockCardView = (props) => {
    let navigate = useNavigate();
    const navigateToNewPage = () => {
        let path = '/modifyStock';
        navigate(path);
    }

    const [ViewStock, setViewStock] = useState("");

    return (
        <div>
            <Container>
           <Grid
              container
              spacing={3}
              justify="center"
              style={{ marginTop: "1%" }}
            >
             {props.stock.map((stock) => {
               return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 345, margin: 5 }}>
                    <CardMedia
                        image={ring}
                        sx={{ height: 300 }}
                        title="Ring"
                    />
                    <CardContent align='left'>
                        <Typography gutterBottom variant="h5" component="div">
                            {stock.productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            Qty : {stock.qty}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price : {stock.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={navigateToNewPage}>Modify</Button>
                    </CardActions>
                </Card>
                </Grid>
            );
          })}
         </Grid>
         </Container>
        </div>
      );
    //return <div>{stock}</div> ;
};

export default StockCardView