import React, {useState, useEffect} from "react";

const CustomerProfile = ({id}) => {

    const [customers, setCustomers] = useState("")

    useEffect(() => {
        fetch(
          `https://cyf-react.glitch.me/customers/${id}`,
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setCustomers(data);
          });
      }, [id]); 

      return (
        <div className="customer-profile">
          
          {customers ? (
            <div>
             
            <p>Customer {id} Profile :</p>
            <ul>

            <li>Customer Id : {id}</li>
            <li>Email : {customers.email}</li>
            <li>VIP : {customers.vip ? "Yes" : "No"}</li>
            <li>Phone Number: {customers.phoneNumber}</li>
            
             </ul>
            </div>
          ) : (
              <p>Customer Profile :</p>
          )
          } 
         
           </div>
                  
      )


}
  

export default CustomerProfile;