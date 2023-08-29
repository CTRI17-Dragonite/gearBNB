import React from 'react'

const SignUp = () => {
  const handleSubmit = () => {
    console.log('click is working')
  }

  return (
    <div className='flex border-2 border-blue-500 justify-center'>
      <div className="justify-center border-2 border-red-500 h-auto">
        <h1 className="w-full max-w-sm  flex flex-col items-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="justify-center">
          <div className='flex flex-col'>
            <label>Username</label>
            <input className="border-2 w-auto"/>
            <label>Password</label>
            <input type="password" className="border-2 w-auto"/>
            <label>Zip Code</label>
            <input className="border-2 w-14"/>
            <button type="submit" className="justify-center border-2 rounded w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
