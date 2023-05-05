import React from 'react'
import LeftSection from '../../faculty/LeftSection'
import LowerLeft from '../../faculty/LowerLeft'
import LowerRight from '../../faculty/LowerRight'
import RightSection from '../../faculty/RightSection'

const Photogrammetry = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  m-4 md:m-6 lg:m-8 rounded-md gap-2 md:gap-4 lg:gap-6'>
    <LeftSection heading={heading} content={content} />
    <RightSection images={images} />
    <LowerLeft Modata={Modata} headData={headData} />
    <LowerRight data={data} />
  </div>  )
}

export default Photogrammetry