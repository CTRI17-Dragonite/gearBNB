import React from 'react'
import NavBar from './NavBar.jsx'


const Profile = (props) => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
      <button class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg px-6 py-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition-transform hover:scale-105">
        Add Listing
      </button>

        <button class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg px-6 py-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition-transform hover:scale-105">
          Delete Listing
        </button>
      </div>
    </div>
  )
}

export default Profile