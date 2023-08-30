import React from 'react'
import NavBar from './NavBar.jsx';
import Map from './Map.jsx';


const Homepage = (props) => {
  return (
    <div>
      <NavBar />
      <form>
        <div className="flex justify-center">
          <input  
            className="border-2 w-60 p-2 mb-4" 
            type="text"
            name="search"
            placeholder='search for luggages...'
            required
          />
        <button className="border-2 w-20 p-2 mb-4">Submit</button>
        </div>
      </form>
      <Map />
      <h1>the pin drop results go here</h1>
    </div>
  )
}

export default Homepage;