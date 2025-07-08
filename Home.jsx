import React from 'react'
import Header from '../Components/Header.jsx'
import Speciality from '../Components/Speciality.jsx'
import Topdoctors from '../Components/Topdoctors.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <Speciality/>
      <Topdoctors/>
      
      <div className='h-20'>
        <p>Create Account</p>
      </div>
    </div>
  )
}

export default Home
