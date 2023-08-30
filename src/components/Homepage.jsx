import React, {useState} from 'react'
import NavBar from './NavBar.jsx';
import Map from './Map.jsx';


const Homepage = (props) => {
  const [bagSize, setBagSize] = useState('');
  const [bagType, setBagType] = useState('');

  const handleSizeChange = (e) => {
    setBagSize(e.target.value)
  }

  const handleTypeChange = (e) => {
    setBagType(e.target.value)
  }

  const handleFilter = async (e) => {
    e.preventDefault();
    console.log('bagSize: ', bagSize);
    console.log('bagType: ', bagType);
    // const response = await fetch('/api/items/filter', {

    // })
  }

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
      <div className='flex justify-center border-2 border-blue-500'>
        <div className='flex'>
          Filters:
          <select className='border-2 padding-4' placeholder='bag size' onChange={handleSizeChange}>
            <option value="small">small</option>          
            <option value="medium">medium</option>          
            <option value="large">large</option> 
          </select>
          <select className='border-2 padding-4' placeholder='bag type' onChange={handleTypeChange}>
            <option value="camping">camping</option>          
            <option value="roller">roller</option>          
            <option value="duffel">duffel</option> 
          </select>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleFilter}>GO</button>
      </div>
      <Map />
      <div>the pin drop results go here</div>
    </div>
  )
}

export default Homepage;