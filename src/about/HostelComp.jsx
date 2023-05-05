import React from 'react'

const HostelComp = ({wholeData}) => {
  return (
    <div className=''>
    <h1 className='text-center font-bold p-12 text-[24px]'>{wholeData.hostel.heading}</h1>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="p-2 md:p-4">
          <div className="rounded-lg overflow-hidden shadow-lg bg-white h-full">
            <div className=" p-6 md:p-28 h-full flex flex-col">
              {wholeData.hostel.data.map((detail,index)=>(
                <p className="text-gray-800 text-justify" key={index}>{detail}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 p-2 md:p-4 md:grid-cols-2 gap-4 justify-center md:gap-4 lg:gap-5 grid-auto-flow dense grid-rows-[400px]'>
          {wholeData.hostel.images.map((image, index) => (
            <div className={`rounded-lg overflow-hidden shadow-lg h-[400px] bg-white ${wholeData.hostel.images.length % 2 === 1 && index === wholeData.hostel.images.length - 1 ? 'col-span-2' : ''}`} key={index}>
              <div className="flex h-full items-center">
                <img src={image.path} alt="image" className="w-full h-full object-cover"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default HostelComp