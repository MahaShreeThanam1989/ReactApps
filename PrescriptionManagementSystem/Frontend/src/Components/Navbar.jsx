import React from 'react'
import assets from '../assets/assets'; // Adjust the path as necessary
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState(false);
  // UseEffect to make an API call to get the token and set it in the state
  return (
    <div className='flex justify-between items-center text-sm border-b mb-5'>
        
         <img className='w-30 h-30 md:w-25 md:h-25 flex items-start' src={assets.logo} alt="logo" />
        <ul className='md:flex item-start gap-4 font-bold'>
           <NavLink to='/'>
            <li className='py-1'>Home</li>
             <hr className='border-none h-0.5 bg-primary outline-none m-auto w-3/5 hidden' />
            </NavLink>
            <NavLink to='/alldoctors'>
            <li className='py-1'>All doctors</li>
              <hr className='border-none h-0.5 bg-primary outline-none m-auto w-3/5 hidden' />
            </NavLink>
            <NavLink to='/about'>
              <li className='py-1'>About</li>
               <hr className='border-none h-0.5 bg-primary outline-none m-auto w-3/5 hidden' />
            </NavLink>
            <NavLink to='/contact'> 
              <li className='py-1'>Contact</li>
                <hr className='border-gnone h-0.5bg-primary outline-none m-auto w-3/5 hidden' />'
              </NavLink>

            </ul>
            <div className='flex items-center gap-4'>
              {
                token ? (
                  <div className='flex items-center gap-2 group relative cursor-pointer'>
                    <img src={assets.profile_pic} alt="Profile" className='w-10 h-10 rounded-full' />
                    <img src={assets.dropdown_icon} alt="Dropdown" className='w-2 h-2 cursor-pointer' />
                    </div>
                ): <button onClick={()=>navigate('/Signup')} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Create Account</button>
            
              }
            </div>
       </div>
  
  )
}

export default Navbar