import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home.jsx'
import About from './Pages/about.jsx'
import Contact from './Pages/contact.jsx'
import Alldoctors from './Pages/alldoctors.jsx'
import Navbar from './Components/navbar.jsx'
import Login from './Pages/login.jsx'
import PatientAppointments from './Pages/PatientAppointments.jsx'
import PatientProfile from './Pages/PatientProfile.jsx'
import Signup from './Pages/Singup.jsx'
import Footer from './Components/Footer.jsx'

export const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/alldoctors' element={<Alldoctors/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        {/* Assuming Signup is the same component as Login, you can change this if needed */}
        <Route path='/my-appointments' element={<PatientAppointments/>}/>
        <Route path='/my-profile' element={<PatientProfile/>}/>
      </Routes>
     
      <Footer/>
    </div>

  )
}

export default App