import moment from "moment";
import React from "react";

const SearchResults = ({results}) =>{
        return (
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
            </tr>
        </thead>
        
        <tbody>
         {results.map(({
            checkInDate,
            checkOutDate,
            id,
            title,
            roomId,
            firstname,
            surname,
            email
         }) => {
            let nights = moment(checkOutDate).diff(moment(checkInDate), "days");
         
        return (
         <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{firstname}</td>
            <td>{surname}</td>
            <td>{email}</td>
            <td>{roomId}</td>
            <td>{checkInDate}</td>
            <td>{checkOutDate}</td>
            <td>{nights}</td>
         </tr>
        )
         })}

        </tbody>
        </table>
    )
    }
  export default SearchResults;