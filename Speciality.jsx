import React from 'react'
import { specialityData } from '../assets/assets' // Assuming you have a JSON file with speciality data
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div id='speciality' className="flex flex-col items-center justify-center gap-4 my-10">
        <h1 class="text-3xl font-medium">Find by Speciality</h1>
        <p class="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
         {specialityData.map((item,index)=>(
          <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/alldoctors/${item.speciality}`}>
              <img className='w-16 sm:w-24 mb-2' src={item.image} alt=""></img>
              <p>{item.speciality}</p>
          </Link>
         ))}
        </div>
    </div>
  )
}

export default Speciality