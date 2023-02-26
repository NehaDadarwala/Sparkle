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

const StockCardView = (props) => {
    
    
    let navigate = useNavigate();

    let path = '/modifyStock';
       
    return (
        <div>
            <Container>
           <Grid
              container
              spacing={3}
              justify="center"
              style={{ marginTop: "1%" }}
            >
             {props.stock.map((stock,index) => {
               return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 345, margin: 5 }}>
                    <CardMedia
                        image={ring}
                        sx={{ height: 300 }}
                        title="Ring"
                    />
                    <CardContent align='left'>
                        <Typography   name ="productName">
                        {stock.productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" name="qty" >
                            Qty : {stock.qty}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" name="price">
                            Price : {"$" + stock.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => navigate(path,{state:stock}) +console.log(stock) }>Modify</Button>
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