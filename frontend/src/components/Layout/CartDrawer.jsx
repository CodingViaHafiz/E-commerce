import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io"
import CartContent from '../Cart/CartContent'

const CartDrawer = ({ toggleCartDrawer, drawerOpen }) => {

  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
      {/* close button  */}
      <div className='flex justify-end'>
        <button onClick={toggleCartDrawer}>
          <IoMdClose className='h-6 w-6 text-gray-600' />
        </button>
      </div>
      {/* cart content scrollable */}
      <div className='flex-grow p-4 overflow-y-auto'>
        <h2 className='text-xl font-semibold mb-4 text-[#ea2e0e]'>Your Cart</h2>
        <CartContent />
      </div>
      {/* checkout button */}
      <div className='p-4 bg-white sticky b-0'>
        <button className='w-full bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition'>Checkout</button>
        <p className='mt-2 text-sm text-gray-500 text-center tracking-tighter'>Shipping, taxes and discount codes calculated at checkout.</p>
      </div>
    </div>
  )
}

export default CartDrawer
