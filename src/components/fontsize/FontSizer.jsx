import React, { useEffect, useState } from 'react'
import {MdTextIncrease,MdTextDecrease} from 'react-icons/md'
import {BiFont} from 'react-icons/bi'

const FontSizer = () => {
    const [fontSize, setFontSize] = useState(16);

    useEffect(() => {
      document.body.style.fontSize = `${fontSize}px`;
    }, [fontSize]);
  
    const handleIncreaseFontSize=()=> {
      setFontSize(prevFontSize => prevFontSize + 1);
    }
  
    const handleDecreaseFontSize=()=> {
      setFontSize(prevFontSize => prevFontSize - 1);
    }
  
    const handleResetFontSize=()=> {
      setFontSize(16);
    }
  return (
    <div className=" mt-0 flex flex-wrap bg-[#262c31] w-full items-center  justify-end space-x-4  font-sans h-7 ">
    <span className='text-white'>Skip To Main Content</span>
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2"
      onClick={handleIncreaseFontSize}
    >
     <MdTextIncrease/>
    </button>
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
      onClick={handleResetFontSize}
    >
      <BiFont/>
    </button>
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2"
      onClick={handleDecreaseFontSize}
    >
      <MdTextDecrease/>
    </button>
   
  </div>
  )
}

export default FontSizer