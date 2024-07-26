import React from 'react'


function Hero() {
  return (
    <div id='hero-section'>
      <div className='text-white font-serif' id='hero-wrap'>
        {/* <img className='w-full h-96 bg-cover object-cover' src="/src/assets/slider.jpg" alt="" /> */}
        <h1 className='text-5xl font-bold'>Wel-Come in Dev Teams!!</h1>
        <p className='text-xl pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, sit! </p> 
        <p className='text-xl pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <form className='relative' id='btn'>
        <input  type="text" name='search'  placeholder='Eg:Developer' className='w-[600px] p-4 mt-10 rounded-3xl text-black' />
        <button className='w-28 bg-yellow-600 p-2 rounded-xl absolute left-[480px] mt-12 '>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Hero
