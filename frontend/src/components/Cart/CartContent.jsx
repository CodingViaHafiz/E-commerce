import React from 'react'

const CartContent = () => {
  const cartproducts = [
    {
      productid: 1,
      name: "shirt",
      size: "M",
      color: "black",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200/random=1"
    },
    {
      productid: 2,
      name: "jeans",
      size: "M",
      color: "blue",
      quantity: 1,
      price: 120,
      image: "https://picsum.photos/200?random=2"
    },
  ]
  return (
    <div>
      {cartproducts.map((item, idx) => (
        <div key={idx}
          className='flex items-start justify-between py-4 border-b'
        >
          <div className='flex items-start'>
            <img src={item.image} alt="image" className='h-[30px] w-[0px]' />
          </div>
          <div>
            <p className='text-sm text-gray-600'>{item.name}</p>
          </div>
          <div>
            <p className='text-sm text-gray-600'>size: {item.size}</p>
          </div>
          <div>
            <p className='text-sm text-gray-600'>price: {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartContent
