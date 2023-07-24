import React from "react";

const TouristInfoCards = () => {
return (
   <div className="card-container">
   
   <div className="card">
  <img src="https://peoplemakeglasgow.com/imager/general/122864/city-centre-GoMA-in-Royal-Exchange-Square-Content-Block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg" />
	<div className="card-body">
        <h3>Glassgow</h3>
        <p>Glasgow is unique in that many of the city's top museums and galleries are free-to-visit.</p>
		<a href="https://peoplemakeglasgow.com/" className="btn btn-primary">More Information</a>
	</div>
   </div> 
  
   <div className="card">
  <img src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FOpera%20House%20Exterior.jpg&action=FeaturedItems" />
	<div className="card-body">
        <h3>Manchester</h3>
        <p>Welcome to the official tourism site of Greater Manchester where you can search for things to do in Manchester.</p>
		<a href="https://www.visitmanchester.com/" className="btn btn-primary">More Information</a>
	</div>
   </div> 
  

   <div className="card">
  <img src="https://cdn-lnp.dataweavers.io/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?h=174&iar=0&w=310&rev=95097c3d2aab47109d7b0e944c804d1b&hash=9EC914EC6624314954BF55EF0B561861" />
	<div className="card-body">
        <h3>London</h3>
        <p>Welcome to London! Discover the best of London with Visit London, the official guide to England’s capital.</p>
		<a href="https://www.visitlondon.com/" className="btn btn-primary">More Information</a>
	</div>
   </div> 
  
   
   </div>
)
}

export default TouristInfoCards;