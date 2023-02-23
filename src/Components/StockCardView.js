import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ring from '../ring.png'

const StockCardView = () => {
    return (
        <div className='App'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    image={ring}
                    sx={{ height: 300 }}
                    title="Ring"
                />
                <CardContent  align='left'>
                    <Typography gutterBottom variant="h5" component="div">  
                        Ring
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                       Qty : 10
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       Price : 10
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Modify</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default StockCardView