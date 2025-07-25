import React from 'react'
import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Topdoctors = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
    <div className='grid grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,10).map((item,index)=>(
          <div onClick={()=>navigate(`/appointment/${item._id}`)}  className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300' key={index}>
            <img className='bg-blue-50' src={item.image} alt=""/>
            <div>
               
                <div className='flex text-center gap-2 text-sm items-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full pt-2 md:mx-1'></p><p>Available</p>
                </div>
                <p className='text-shadow-md text-gray-900 font-semiboldmd:mx-0.5'>{item.name}</p>
                <p className='text-gray-600 text-sm md:mx-0.5'>{item.speciality}</p>
                </div>
            </div>
        ))}
    </div>
    <button className='border-b-blue-200 bg-blue-100 mt-10 px-12 py-3 rounded-full border-solid text-center text-sm'>More</button>
    </div>
  )
}

export default Topdoctors