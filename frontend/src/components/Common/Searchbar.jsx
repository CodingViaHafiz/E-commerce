import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2"

const Searchbar = () => {
  const [searchItem, setSearchItem] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const handleSearchToggle = () => {
    setIsOpen(!isOpen)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search item", searchItem);
    setIsOpen(false)
  }
  return (
    <div className={`flex items-center justify-center w-full transition-all  duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
      {isOpen ? (
        <form
          onSubmit={handleSubmit}
          className='relative flex items-center justify-center w-full'>
          <div className='relative w-1/2'>
            <input
              onChange={(e) => setSearchItem(e.target.value)}
              type="text" placeholder='Search' value={searchItem} className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus-outline-none w-full placeholder:text-gray-700' />
            {/* search icon */}
            <button type="submit" className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800'>
              <HiMagnifyingGlass className='h-6 w-6' />
            </button>
            {/* close button  */}
            <button
              onClick={handleSearchToggle}
              type='button' className='absolute -right-10 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 '>
              <HiMiniXMark className='h-6 w-6 ' />
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className='h-6 w-6' />
        </button>
      )}
    </div>
  )
}

export default Searchbar
