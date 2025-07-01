import React from 'react'
import Header from '../Components/Header.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='h-20'>
        <p>List of Departments</p>
      </div>
      <div className='h-20'>
        <p>Top Doctors to choose</p>
      </div>
      <div className='h-20'>
        <p>Create Account</p>
      </div>
    </div>
  )
}

export default Home
