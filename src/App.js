import React, { useState } from "react";
import './index.css'
import { Tours } from "./components/Tours";
import data from './data';

const App = () => {



  const [tours, setTour] = useState(data);


  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTour(newTour);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tour Found</h2>
        <button onClick={()=>setTour(data)}>Click Now</button>
        </div>
      )
   }



  return (
    <div>
   
      <Tours tours={tours}    removeTour={removeTour}></Tours>
      
  </div>
  );
};

export default App;
