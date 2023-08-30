import React from 'react'

function AddListing() {
  const handleSubmit = e => {
    
  }

  return (
    <div>
      <h1>ADD LISTING</h1>
      <form>
        <input  
          className="border-2 w-62 p-2 mb-2" 
          type="text"
          name="Name"
          placeholder="Name"
          required
        />
        <input  
          className="border-2 w-62 p-2 mb-2" 
          type="number"
          name="Name"
          placeholder="Price"
          required
        />
        <select className="border-2 w-62 p-2 mb-2" name="Name" placeholder="size" required>
          <option value="small">small</option>          
          <option value="medium">medium</option>          
          <option value="large">large</option>          
        </select>
        <input  
          className="border-2 w-62 h-52 p-2 mb-2" 
          type="textarea"
          name="Name"
          placeholder="description"
          required
        />  
        <select className="border-2 w-62 p-2 mb-2" name="Name" placeholder="bag type" required>
          <option value="camping">camping</option>          
          <option value="roller">roller</option>          
          <option value="duffel">duffel</option>          
        </select>
        <button type="submit" className="border-2 w-72 p-2 hover:bg-sky-700 pointer-events-auto">Submit</button>
      </form>
    </div>
  )
}

export default AddListing
