import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mx-auto flex items-center justify-between flex-wrap px-6 py-6 xl:px-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current text-indigo-600 h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-light text-xl tracking-tight">
          tailwind<span className="font-medium">tube</span>
        </span>
      </div>
      <div className="block md:hidden">
        <button
          onClick={toggleNav}
          className="flex items-center px-3 py-2 rounded text-gray-500 hover:text-white"
        >
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full md:block md:flex md:items-center md:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <NavLink
            to="/"
            exact
            className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-white mr-6"
          >
            Videos
          </NavLink>
          <NavLink
            to="/about"
            exact
            className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-white mr-6"
          >
            About
          </NavLink>
          <a
            href="https://github.com/GeoffSelby/TailwindTube"
            className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
