import React from 'react'
import cactus from '../assets/cactus_img.jpg'
const BlogCard = () => {
  return (
    <div className='w-[368px] h-[400px] p-[16px] flex-col rounded-lg bg-white border-0'>
      <img src={cactus} alt="topic Image" className='rounded-lg mb-[16px]'/>
      <div className='bg-violet-100 text-violet-700 w-1/4 rounded-full text-center  font-bold mb-[16px]'>
        design
      </div>
      <div className='font-bold text-2xl mb-[6px]'>
      Embracing Minimalism
      </div>
      <div className='text-black text-opacity-50 mb-[20px]'>
        <p>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
      </div>
      <div className='mb-[20px] text-black text-opacity-50'>
      Annie Spratt
      </div>
    </div>
  )
}

export default BlogCard
