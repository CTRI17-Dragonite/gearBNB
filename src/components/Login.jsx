import React from 'react'

const Login = () => {
  const handleUsername = e => {
    console.log('username typed')
  }

  return (
    <div className="flex flex-col justify-center border-2 w-60 items-center border-orange-900">
      <h1 className="flex flex-auto justify-center">Login</h1>
      <form>
        <div className="flex flex-col justify-center">
          <label>Username</label>
          <input  
            className="border-2 w-32" 
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleUsername}
            required
          />
          <label>Password</label>
          <input  
            className="border-2 w-32" 
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleUsername}
            required
          />
        </div>
        <button className="border-2 w-32">Submit</button>
      </form>
    </div>
  )
}

export default Login;