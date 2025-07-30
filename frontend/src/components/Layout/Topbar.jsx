import React from 'react'
import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"
const Topbar = () => {
  return (
    <div className='bg-[#ea2e0e] text-white'>
      <div className='flex  items-center justify-between container mx-auto py-1 px-4'>
        <div className='md:flex hidden items-center space-x-4'>
          <a href="#" className='hover:text-gray-300'>
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className='hover:text-gray-300'>
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className='hover:text-gray-300'>
            <RiTwitterXLine className="h-4 w-5" />
          </a>
        </div>
        <div className='text-sm text-center flex-grow'>
          <span>Worldwide coverage - timely and secure shipping</span>
        </div>
        <div className='text-sm hidden md:block'>
          <a href="0123456789" className='hover:text-gray-300'>
            +1 (234) 567 098
          </a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
