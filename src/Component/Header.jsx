import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='bg-gray-800 flex justify-around text-2xl items-center h-15'>

      <Link to="/">
      <h1 className='text-white pt-sans-bold text-3xl c-font'>ABHISHEK</h1>
      </Link>

      <ul className='flex justify-around'>
        <li><NavLink to='/' className={({isActive})=>` m-5 text-xl hover:text-blue-500 ${isActive ? "text-blue-500":"text-white "}`}>Home</NavLink></li>
        <li><NavLink to='/about' className={({isActive})=>` m-5 text-xl hover:text-blue-500 ${isActive ? "text-blue-500":"text-white "}`} >About</NavLink></li>
        <li><NavLink to='/Project' className={({isActive})=>` m-5 text-xl hover:text-blue-500 ${isActive ? "text-blue-500":"text-white "}`} >Project</NavLink></li>
        <li><NavLink to='/Contact' className={({isActive})=>` m-5 text-xl hover:text-blue-500 ${isActive ? "text-blue-500":"text-white "}`} >Contact</NavLink></li>
      </ul>
      </header>

    </div>
  )
}

export default Header
