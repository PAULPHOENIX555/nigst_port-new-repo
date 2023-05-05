import React from 'react'

const RightSection = ({images}) => {
  return (
 
  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-5 grid-auto-flow dense grid-rows-[300px]'>
  {images.map((image, index) => (
    <div key={index} className='h-full overflow-hidden rounded-lg'>
      <img src={image.path} alt={`img${index}`} className='h-full w-full object-cover' />
    </div>
  ))}
</div>

  )
}

export default RightSection