import React from 'react'
import heroImg from "../../assets/rabbit-hero.webp"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='relative'>
      <img src={heroImg} alt="heroimg"
        className='h-[400px] w-full md:h-[400px] lg:h-[450px] object-cover'
      />
      <div className='absolute inset-0  flex items-center justify-center'>
        <div className='text-center text-white p-6'>
          <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>My Shop</h1>
          <p className='text-sm tracking-tighter md:text-lg mb-6'>
            Explore our vacation-ready outfit with fast worldwide shipping.
          </p>
          <Link to="" className='bg-white text-gray-950 px-6 py-2 text-lg rounded-md  transition-transform duration-300 hover:bg-[#ea2e0e]'>Shop now</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
