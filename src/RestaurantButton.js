import React from "react";

let RestaurantButton = ({orderOne}) => {
  return (
   <div className="menu-button">
   <button className="btn btn-primary" onClick={orderOne}>Add</button>
   </div>
  )
}

export default RestaurantButton;