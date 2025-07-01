import React from 'react'

const Login = () => {
  // Render the signup form for account creation
  return (
    <div>
      <form className='flex flex-col gap-4 p-4 max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg'>
        {/* Title and subtitle */}
        <h1 className='text-2xl font-bold align-text-top bg-primary'>Sign In</h1>
        <h2>Please Login to book appointment</h2>
        
      
        {/* Email input */}
        <label className='text-lg font-semibold'>Email</label>
        <input type="email" placeholder='Enter your email' className='border border-gray-300 p-2 rounded-md' required />
        
        {/* Password input */}
        <label className='text-lg font-semibold'>Password</label>
        <input type="password" placeholder='Enter your password' className='border border-gray-300 p-2 rounded-md' required />
        
      
        {/* Submit button */}
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Sign Up</button>
        {/*UseEffect to make an API call to get the token and set it in the state
        {/* Link to Signup page */}
        <p className='text-sm text-gray-500'>
          Don't have an account? <a href='/Signup' className='text-blue-500 hover:underline'>Create Account</a>
        </p>
        
        {/*
        <p className='text-sm text-gray-500'>
          By signing up, you agree to our 
          <a href='/terms' className='text-blue-500 hover:underline'>Terms of Service</a> and 
          <a href='/privacy' className='text-blue-500 hover:underline'>Privacy Policy</a>.
        </p>
        */}
      </form>
    </div>
  )
}

export default Login