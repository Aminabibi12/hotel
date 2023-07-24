import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {

  const array = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "123 456789"]

  return (
    <div className="App">

     <Heading />
     <TouristInfoCards />
      <Bookings />
      <Footer array = {array} />
    </div>
  );
};

export default App;
