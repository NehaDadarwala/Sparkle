import React from 'react'
import StockCardView from '../../Components/StockCardView'



function ViewStock() {
 
  //everything must be from database
  const stock = [{
    productID:"1", 
    productRefNumber:'#RING01',
    productName:"Emerald Ring", 
    qty: 10,
    price: "1990.00",
    image: "imgUrl",
    category:"Ring",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo donec. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Lobortis mattis aliquam faucibus purus in. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Ipsum dolor sit amet consectetur adipiscing elit ut. Est velit egestas dui id ornare arcu odio ut. Molestie nunc non blandit massa enim nec dui nunc mattis. Volutpat lacus laoreet non curabitur gravida arcu. Varius duis at consectetur lorem donec massa sapien. Imperdiet proin fermentum leo vel."
    },
    {
      productID:"2", 
      productRefNumber:'#EARRING01',
      productName:"Stud Earring", 
      qty: "35",
      price: "1890.00",
      image: "imgUrl",
      category:"Earring",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo donec. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Lobortis mattis aliquam faucibus purus in. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Ipsum dolor sit amet consectetur adipiscing elit ut. Est velit egestas dui id ornare arcu odio ut. Molestie nunc non blandit massa enim nec dui nunc mattis. Volutpat lacus laoreet non curabitur gravida arcu. Varius duis at consectetur lorem donec massa sapien. Imperdiet proin fermentum leo vel."
      },
      {
        productID:"3", 
        productRefNumber:'#NECKLACE01',
        productName:"Gold Chain", 
        qty: "25",
        price: "180.80",
        image: "imgUrl",
        category:"Necklace",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo donec. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Lobortis mattis aliquam faucibus purus in. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Ipsum dolor sit amet consectetur adipiscing elit ut. Est velit egestas dui id ornare arcu odio ut. Molestie nunc non blandit massa enim nec dui nunc mattis. Volutpat lacus laoreet non curabitur gravida arcu. Varius duis at consectetur lorem donec massa sapien. Imperdiet proin fermentum leo vel."
        }
  ];
  
  return (
   
    
   <div>
    <StockCardView stock = {stock}/>
   </div>
  
  )
}

export default ViewStock