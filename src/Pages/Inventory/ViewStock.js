import React from 'react'
import StockCardView from '../../Components/StockCardView'



function ViewStock() {
 
  //everything must be from database
  const stock = [{
    productID:"1", 
    productRefNumber:'#RING01',
    productName:"Ring", 
    qty: 10,
    price: "$1990",
    image: "imgUrl"
    },
    {
      productID:"2", 
      productRefNumber:'#EARRING01',
      productName:"Earring", 
      qty: 35,
      price: "$1890",
      image: "imgUrl"
      },
      {
        productID:"3", 
        productRefNumber:'#NECKLACE01',
        productName:"Necklace", 
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