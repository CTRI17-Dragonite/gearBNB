import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import AddListing from './AddListing.jsx'

const Profile = (props) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    console.log('deleting')
  }

  const handleAddListing = () => {
    console.log('inAddListing')
    navigate("/addlisting")
    
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='flex justify-center'>
        <div className='flex justify-between border-2 border-red-500'>
          <button onClick={handleAddListing} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block mr-10">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Add Listing</span>
          </button>

          <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Delete Listing</span>
          </a>
        </div>
      </div>

      <br/>

      <div className='flex justify-center border-2 border-yellow-500 h-auto'>
        <div className='flex flex-col'>
          <div className='flex mr-0 border-2 border-blue-500 h-500 w-50'>
            Transaction History
          </div>

          <br/>

          <div className='border-2 border-green-500'>
            Fetch History Here
          </div>
        </div>
      </div>
      {/* <button className='absolute bottom-0 right-0 border-2 border-orange-500' onClick={handleDelete}>
        Delete Account
      </button> */}
      <a class="relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white" onClick={handleDelete}>
        <span class="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100">

        </span>
        <span class="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100">

        </span>
        Delete Account
      </a>
    </div>
  )
}

export default Profile;