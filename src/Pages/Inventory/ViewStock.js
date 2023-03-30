import React from 'react'
import StockCardView from '../../Components/StockCardView'
import { useEffect, useState } from 'react'
import axios from 'axios';

function ViewStock() {

  const [stock, setStock] = useState([]);

    useEffect(() => {

        const stockUrl = "https://sparkle-api.onrender.com/inventory/viewStock"

        axios.get(stockUrl)
            .then(res => {
              console.log(res.data.stock);
                const stockDet = [];
                stockDet.push(res.data.stock);
                console.log(stock)
                stockDet.map((stock) => {
                    setStock(stock);
                    return(<></>)
                });
            });
        console.log(stock);
    },[]

    );
 
  //everything must be from database
  
  return (
   
    
   <div>
    <StockCardView stock = {stock}/>
   </div>
  
  )
}

export default ViewStock