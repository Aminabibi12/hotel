import moment from "moment";
import React, {useState} from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({results}) =>{
  
   let [selectedId, setselectedId] = useState("");

      let rowClicked =(id) => {
          if (id === selectedId){
            setselectedId("")
          }
          else {
            setselectedId(id)
          }
      }

      return (
        <div> 

        <table className="table table-striped">
         
        <thead>
         
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of Nights</th>
            <th scope="col">Customer Profile</th>
            </tr>
         
        </thead>
        
        <tbody>
         {results.map(({
            checkInDate,
            checkOutDate,
            id,
            title,
            roomId,
            firstName,
            surname,
            email
         }) => {
            let nights = moment(checkOutDate).diff(moment(checkInDate), "days");
            
            let bgColor = id === selectedId ? "orange":""

        return (
         <tr key={id}
             style={{backgroundColor: bgColor}} 
             onClick={() => rowClicked(id)}
             >
            <td>{id}</td>
            <td>{title}</td>
            <td>{firstName}</td>
            <td>{surname}</td>
            <td>{email}</td>
            <td>{roomId}</td>
            <td>{checkInDate}</td>
            <td>{checkOutDate}</td>
            <td>{nights}</td>
            <td> 
              {""}
              <button onClick={() => rowClicked(id)}>Show Profile</button> {""} </td>
         </tr>
        )
         })}

        </tbody>
      
        </table>
        <CustomerProfile id ={selectedId}/>
        </div> 
      )
    

    }
  export default SearchResults;