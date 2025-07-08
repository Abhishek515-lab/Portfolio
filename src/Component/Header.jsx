import React from 'react';
import { NavLink, Link } from 'react-router-dom';



const Header = () => {


  return (
    <header className="bg-gray-800 dark:bg-gray-950 flex justify-between px-20 text-xl items-center h-16">
      <Link to="/">
        <h1 className="text-white font-bold text-3xl">ABHISHEK</h1>
      </Link>

      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? 'text-blue-500' : 'text-white'} hover:text-blue-400`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? 'text-blue-500' : 'text-white'} hover:text-blue-400`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `${isActive ? 'text-blue-500' : 'text-white'} hover:text-blue-400`
            }
          >
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? 'text-blue-500' : 'text-white'} hover:text-blue-400`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

  
    </header>
  );
};

export default Header;
