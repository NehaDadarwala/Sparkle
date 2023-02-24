import React from 'react'
import StockCardView from '../../Components/StockCardView'


function ViewStock() {
 
  //everything must be from database
  const stock = [{
    productID:"ABC899900", 
    productName:"Product Name - 1", 
    qty: 10,
    price: "$1990"
    },
    {
      productID:"ABC899901", 
      productName:"Product Name-2", 
      qty: 35,
      price: "$1890"
      }
  ];
  
  return (
   <div>
    <StockCardView stock = {stock}/>
   </div>
  )
}

export default ViewStock