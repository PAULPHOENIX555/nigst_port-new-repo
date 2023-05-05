import React from 'react';

const CampusComp = ({ wholeData }) => {
  return (
    <div className=''>
      <h1 className='text-center font-bold p-12 text-[24px]'>
        {wholeData.campus.heading}
      </h1>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 p-2 md:p-4 gap-4'>
          <div className='rounded-lg overflow-hidden shadow-lg bg-white'>
            <div className='p-6 md:p-28'>
              {wholeData.campus.data.map((detail, index) => (
                <p className='text-gray-800 text-justify' key={index}>
                  {detail}
                </p>
              ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center md:gap-4 lg:gap-5'>
              {wholeData.campus.images.map((image, index) => (
                <div
                  className={`rounded-lg overflow-hidden shadow-lg bg-white ${
                    wholeData.campus.images.length % 2 === 1 &&
                    index === wholeData.campus.images.length - 1
                      ? 'col-span-2'
                      : ''
                  }`}
                  key={index}
                >
                  <div className='flex h-full items-center'>
                    <img
                      src={image.path}
                      alt='image'
                      className='w-full h-full object-cover float-left mr-4 mb-4 md:mr-8 md:mb-8'
                    />
                    <p className='text-gray-800 text-justify'>
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusComp;
