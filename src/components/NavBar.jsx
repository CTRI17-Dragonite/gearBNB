import React from 'react'
import { useNavigate } from 'react-router-dom';
//import useContext
// import actual context


const NavBar = (props) => {

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile')
  }

  const handleHomeClick = () => {
    navigate('/home')
  }

  return (
    <div className="flex justify-between text-red-500 border-green-400 border-4 h-auto m-5 p-5 rounded-lg">
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full w-16 h-16 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition-transform hover:scale-105" onClick={handleHomeClick}>
        Home
      </button>
      <div className="flex justify-center text-red-500 border-green-400">

    </div>
    
    
    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full w-16 h-16 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition-transform hover:scale-105" onClick={handleProfileClick}>
      Profile
    </button>

    
    </div>
  )
}

export default NavBar