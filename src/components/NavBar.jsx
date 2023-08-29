import React from 'react'
import { useNavigate } from 'react-router-dom';
//import useContext
// import actual context


const NavBar = (props) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile')
  }

  return (
    <div className="flex justify-between text-red-500 border-green-400 border-4 h-auto m-5 p-5 rounded-lg">NavBar

    
    <button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full w-16 h-16 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition-transform hover:scale-105" onClick={handleClick}>
      Click me
    </button>

    
    </div>
  )
}

export default NavBar