import React from 'react'
import StockCardView from '../../Components/StockCardView'



function ViewStock() {
 
  //everything must be from database
  const stock = [{
    productID:"ABC899900", 
    productName:"Product - 1", 
    qty: 10,
    price: "$1990",
    image: "imgUrl"
    },
    {
      productID:"ABC899901", 
      productName:"Product - 2", 
      qty: 35,
      price: "$1890",
      image: "imgUrl"
      },
      {
        productID:"ABC899902", 
        productName:"Product - 3", 
        qty: 25,
        price: "$180",
        image: "imgUrl"
        }
  ];
  
  return (
   
    
   <div>
    <StockCardView stock = {stock}/>
   </div>
  
  )
}

export default ViewStock