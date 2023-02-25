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

const StockCardView = (props) => {
    let navigate = useNavigate();
    const navigateToNewPage = () => {
        let path = '/modifyStock';
        navigate(path);
    }

    return (
        <div>
           <Grid
              container
              spacing={3}
              justify="center"
              style={{ marginTop: "1%" }}
            >
             {props.stock.map((stock) => {
               return (
                <Grid item xs={6} sm={4} md={4}>
                  <Card sx={{ maxWidth: 345, margin: 10 }}>
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
        </div>
      );
    //return <div>{stock}</div> ;
};

export default StockCardView