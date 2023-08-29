import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  const handleUsername = e => {
    
    console.log('username typed')
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border-2 w-80 p-4 bg-white rounded-lg">
        <h1 className="text-center mb-4">Login</h1>
        <form>
          <div className="flex flex-col">
            <label>Username</label>
            <input  
              className="border-2 w-full p-2 mb-2" 
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleUsername}
              required
            />
            <label>Password</label>
            <input  
              className="border-2 w-full p-2 mb-4" 
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleUsername}
              required
            />
          </div>
          <button className="border-2 w-full p-2 hover:bg-sky-700 pointer-events-auto">Submit</button>
          <p className="p-5">dont have an account? <Link to="/signUp" className="text-blue-600">Sign Up</Link></p>
        </form>        
      </div>
    </div>
  )
}

export default Login;