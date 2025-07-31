import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2"
import Searchbar from './Searchbar'
import CartDrawer from '../Layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navBarToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (
    <>
      <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        {/* left side logo */}
        <div>
          <Link to="/" className='text-2xl font-medium'>
            Rabbit
          </Link>
        </div>
        {/* senter navigation links */}
        <div className='hidden md:flex space-x-6'>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            men
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            women
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            top wear
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            bottom wear
          </Link>
        </div>
        {/* right icons */}
        <div className=' flex items-center space-x-4'>
          <Link to="/profile" className='hover:text-black'>
            <HiOutlineUser className='h-6 w-6 text-gray-700' />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className='relative hover:text-black cursor-pointer'>
            <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
            <span className='absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5'>2</span>
          </button>
          {/* search icon  */}
          <div className=''>
            <Searchbar />
          </div>
          <button
            onClick={navBarToggle}
            className='md:hidden hover:text-black'>
            <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* mobile navigation  */}
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navbarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className='flex justify-end p-4'>
          <button>
            <IoMdClose
              onClick={navBarToggle}
              className='h-6 w-6 text-gray-600' />
          </button>
        </div>
        <div className='p-4'>
          <h2 className='text-[#ea2e0e] mb-4 font-semibold text-xl ml-2'>
            Menu
          </h2>
          <nav className='flex flex-col cursor-pointer space-y-4  ml-2'>
            <Link
              onClick={navBarToggle}
              to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
              men
            </Link>
            <Link
              onClick={navBarToggle}
              to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
              women
            </Link>
            <Link
              onClick={navBarToggle}
              to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
              top wear
            </Link>
            <Link
              onClick={navBarToggle}
              to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
              bottom wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
