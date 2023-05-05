import React from 'react'
const ImgCard = ({ title, members }) => {
  return (
<div className=''>
  <h1 className='text-center font-bold text-2xl md:text-4xl my-5 md:my-8'>{title}</h1>
  <div className='container mx-auto  px-2'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {members.map((member, index) => (
        <div key={index} className='bg-gray-100 p-4 rounded-md text-center'>
          <img src={member.image} alt='' className='mx-auto mb-4 rounded-full' />
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <h2 className='text-lg font-medium'>Name:</h2>
              <span className='text-gray-700'>{member.name}</span>
            </div>
            <div className='flex gap-2'>
              <h2 className='text-lg font-medium'>Designation:</h2>
              <span className='text-gray-700 text-left'>{member.designation}</span>
            </div>
            <div className='flex gap-2'>
              <h2 className='text-lg font-medium'>Position:</h2>
              <span className='text-gray-700'>{member.position}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



  )
}

export default ImgCard