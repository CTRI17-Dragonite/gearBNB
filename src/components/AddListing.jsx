import React, { useState } from 'react'

function AddListing() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  const [size, setSize] = useState('')
  const [description, setDescription] = useState('')
  const [bagType, setBagType] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      name,
      price,
      size,
      description,
      bagType
    }
    try {
      await fetch('./api/addlisting', {      
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    } catch (err) {
        console.log('error', err)
      }
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <div>
        <h1>ADD LISTING</h1>
      </div>
      <div>
        <form>
          <div>
            <input  
              className="border-2 w-62 p-2 mb-2" 
              type="text"
              name="Name"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input  
              className="border-2 w-62 p-2 mb-2" 
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <select className="border-2 w-62 p-2 mb-2" name="Name" placeholder="size" onChange={e => setSize(e.target.value)} required>
              <option value="small">small</option>          
              <option value="medium">medium</option>          
              <option value="large">large</option>
            </select>
            <select className="border-2 w-62 p-2 mb-2" name="Name" placeholder="bag type" onChange={e => setBagType(e.target.value)} required>
              <option value="camping">camping</option>          
              <option value="roller">roller</option>          
              <option value="duffel">duffel</option>          
            </select>
          </div>
            <input  
              className="border-2 w-96 h-52 p-2 mb-2 flex items-center justify-center text-center"
              type="textarea"
              name="Name"
              placeholder="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />  
          <div>
            <button type="submit" className="border-2 w-96 p-2 hover:bg-sky-700 pointer-events-auto" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddListing
