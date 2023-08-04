import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";


  let Order = (props) => {
  
    let [orders, setorders] = useState(0);
     
    let orderOne = () => {
     setorders(orders + 1);

  }

  return (
  <li>
  {props.orderType}: {orders} <RestaurantButton orderOne={orderOne} />
  </li> 
  )
}

export default Order;