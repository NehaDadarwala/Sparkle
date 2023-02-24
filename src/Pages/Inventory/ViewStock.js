import React from 'react'
import StockCardView from '../../Components/StockCardView'
import Navbar from '../../Components/Navbar';


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
      }
  ];
  
  return (
    <div>
      <Navbar/>
    
   <div>
    <StockCardView stock = {stock}/>
   </div>
   </div>
  )
}

export default ViewStock