import React from 'react'
import assets from '../assets/assets.js'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 bg-blue-500'>
        <table className='w-full'>
            <tbody>
        <tr className='text-left'>
          <td colSpan="2">
            <p className='text-3xl mt-1 font-bold text-white'>Book Appointments<br/>
            With Our Trusted Doctors</p>
           <div class="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
            <img src={assets.group_profiles} alt="Group Icon" className='w-10 h-10 mt-2' />
            <p className='text-white mt-2'>Simply browse through our extensive list of trusted doctors<br/>Book an appointment with our trusted doctors.</p>
            </div>
            <div className='flex items-center gap-2 mt-6'>
            <a href="#speciality" class="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-7 md:m-0 hover:scale-105 transition-all duration-300">Book appointment 
</a></div>
          </td>
       
          <td colSpan="2" className='flex justify-end'>
            <img src={assets.header_img} alt="Header" className='w-80 object-cover' />
          </td>
        </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Header