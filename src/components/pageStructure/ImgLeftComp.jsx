/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const ImgLeftComp = ({ heading, text, images }) => {
  return (
    <div className=''>



      <h1 className='text-center font-bold p-12 text-[24px]'>{heading}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className='flex justify-center items-center'>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center">
            {images.map((image, index) => (
              <div className={`${(images.length % 2 === 1 && index === images.length - 1) ? 'sm:col-span-2' : 'sm:col-span-1'}`} key={index}>
                <img src={image.path} alt="image" className={`block w-full h-auto rounded-md object-cover ${(images.length === 1 || (images.length % 2 === 1 && index === images.length - 1)) ? 'aspect-w-4 aspect-h-3 sm:aspect-none' : 'aspect-w-4 aspect-h-3'}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 md:p-4">
          <div className="rounded-lg overflow-hidden bg-[#f5eeee76] shadow-sm h-full">
            <div className=" p-6 md:p-28 h-full flex flex-col">
              {text.map((detail, index) => (
                <p className="text-gray-800 text-justify" key={index}>{detail}</p>
              ))}
            </div>
          </div>
        </div>









      </div>
    </div>

  )
}

export default ImgLeftComp