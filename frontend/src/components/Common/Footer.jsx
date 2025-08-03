import React from 'react'
import { Link, Links } from "react-router-dom"
import { TbBrandMeta } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai"
import { FaGithub } from "react-icons/fa6"
import { FiPhoneCall } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className='border-t py-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
        <div className='md:ml-4'>
          <h3 className='text-lg text-black mb-3'>
            Newsletter
          </h3>
          <p className='text-gray-500'>Be the first to hear about new products, exclusive events and online offers.</p>
          <p className='text-gray-600 font-medium my-2'>Signup and get 10% off on your first order.</p>
          <form action="" className='flex'>
            <input type="email" placeholder='Enter your email' className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-gray-500 transition-all' />
            <button type='submit' className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-700 transition-all'>Subscribe</button>
          </form>
        </div>
        <div>
          <h3 className='text-black text-lg mb-3'>Shop</h3>
          <ul className='flex flex-col text-gray-500 space-y-1'>
            <li>
              <Link to="#" className='hover:text-gray-600'>Men's Top Wear</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-gray-600'>Women's Top Wear </Link>
            </li>
            <li>
              <Link to="#" className='hover:text-gray-600'>Men's Bottom Wear</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-gray-600'>Women's Bottom Wear</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-black text-lg mb-3'>Support</h3>
          <ul className='flex flex-col text-gray-500 space-y-1'>
            <li>
              <Link to="#" className='hover:text-gray-600'>Contact Us</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-gray-600'>About Us</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-gray-600'>FAQs</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-gray-600'>Features</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-black text-lg mb-3'>Follow Us</h3>
          <div className='space-x-2 flex items-center'>
            <a
              href="https://www.facebook.com"
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-700 transition-colors duration-200'
            >
              <TbBrandMeta className='h-5 w-5' />
            </a>
            <a
              href="https://www.facebook.com"
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiOutlineLinkedin className='h-5 w-5 hover:text-blue-700 transition-colors duration-200' />
            </a>
            <a
              href="https://www.facebook.com"
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-600'
            >
              <FaGithub className='h-5 w-5' />
            </a>
          </div>
          <p className='text-gray-700 mt-4'>Call Us</p>
          <p >
            <FiPhoneCall className='inline-block mr-2 ' />
            0 (123) 456 789
          </p>
        </div>
      </div>
      <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
        <p className='text-gray-500 text-sm tracking-tighter text-center'>&copy; {new Date().getFullYear()} OnlineBag. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
