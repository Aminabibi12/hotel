import React, {useState, useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {

  const [bookings, setBookings] = useState([])

  const [loading, setLoading] = useState(true); 
  
  const [error, setError] = useState("")

  useEffect(() => {
    fetch (`https://cyf-react.glitch.me/delayed`) // Use the delayed API to simulate loading delay
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
        setLoading(false); // After data is fetched, set loading state to false
      })
  }, []);



  useEffect(() => {
    fetch(
      `https://cyf-react.glitch.me`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
       
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        setError("Error fetching data. Please try again later."); // Set the error state if there is an HTTP error
      });
  }, []);
      
     
      

  

      const search = (searchVal) => {
    
        const filterFunc = bookings.filter((element) => {
          return element.firstName.toLowerCase().includes(searchVal.toLowerCase()) || element.surname.toLowerCase().includes(searchVal.toLowerCase())
         } ) 
        
         setBookings(filterFunc)
         console.info("TO DO!", searchVal);
        };
      
    
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <p>Loading data, please wait...</p>
        ) : error ? ( // Display error message if there is an error
          <p>{error}</p>
        ) : (
          <SearchResults results={bookings} />
        )}
         
      </div>
    </div>
  );
};

export default Bookings;
