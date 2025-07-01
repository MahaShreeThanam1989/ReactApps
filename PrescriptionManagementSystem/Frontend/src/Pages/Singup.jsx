import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  // Render the signup form for account creation
  const navigate = useNavigate();
  return (
    <div>
      <form className='flex flex-col gap-4 p-4 max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg'>
        {/* Title and subtitle */}
        <h1 className='text-2xl font-bold align-text-top bg-primary'>Create Account</h1>
        <h2>Please sign up to book appointment</h2>
        
        {/* Full name input */}
        <label className='text-lg font-semibold'>Full name</label>
        <input type="text" placeholder='Enter your full name' className='border border-gray-300 p-2 rounded-md' required />
        
        {/* Email input */}
        <label className='text-lg font-semibold'>Email</label>
        <input type="email" placeholder='Enter your email' className='border border-gray-300 p-2 rounded-md' required />
        
        {/* Password input */}
        <label className='text-lg font-semibold'>Password</label>
        <input type="password" placeholder='Enter your password' className='border border-gray-300 p-2 rounded-md' required />
        
        {/* Confirm password input */}
        <label className='text-lg font-semibold'>Confirm Password</label>
        <input type="password" placeholder='Confirm your password' className='border border-gray-300 p-2 rounded-md' required />
        
        {/* Submit button */}
        <button type='submit' onClick={()=>navigate('/Login')} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Sign Up</button>
        
        {/* Link to login page */}
        <p className='text-sm text-gray-500'>
          Already have an account? <a href='/Login' className='text-blue-500 hover:underline'>Login</a>
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

export default Signup