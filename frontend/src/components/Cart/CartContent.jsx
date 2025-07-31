import React from 'react'
import { RiDeleteBin4Line } from "react-icons/ri";
const CartContent = () => {
  const cartproducts = [
    {
      productid: 1,
      name: "shirt",
      size: "M",
      color: "black",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200/?random=2"
    },
    {
      productid: 2,
      name: "jeans",
      size: "M",
      color: "blue",
      quantity: 1,
      price: 120,
      image: "https://picsum.photos/200?random=3"
    },
  ]
  return (
    <div>
      {cartproducts.map((item, idx) => (
        <div key={idx}
          className='flex items-start justify-between py-4 border-b'
        >
          <div className='flex items-start'>
            <img src={item.image} alt="image" className='h-[50px] w-[60px] mr-2 rounded-md object-cover' />
            <div>
              <h3 className='text-md text-black'>{item.name}</h3>
              <p className='text-sm text-gray-600'>size: {item.size} | color: {item.color}</p>
            </div>
          </div>
          <div>
            <p>
              $ {item.price.toLocaleString()}
            </p>
            <button>
              < RiDeleteBin4Line className='h-6 w-5 text-red-600' />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartContent
