import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [zipCode, setZipCode] = useState()
  const handleSubmit = e => {
    // e.preventDefault
    console.log('username typed')
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 p-4 bg-white rounded-lg w-80">
        <h1 className="text-center mb-4 text-xl font-semibold">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label className="mb-1">Username</label>
            <input className="border-2 p-2 w-full" type="text" placeholder="Username" onChange={handleSubmit} required/>
          </div>
          <div className="mb-4">
            <label className="mb-1">Password</label>
            <input className="border-2 p-2 w-full" type="password" placeholder="Password" required/>
          </div>
          <div className="mb-4">
            <label className="mb-1">Zip Code</label>
            <input className="border-2 p-2 w-full" type="text" placeholder="Zip Code" required/>
          </div>
          <button type="submit" className="border-2 w-full p-2 hover:bg-sky-700 pointer-events-auto">
            Submit
          </button>
        </form>
        <p className="p-5">already have an account? <Link to="/" className="text-blue-600">Log In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
