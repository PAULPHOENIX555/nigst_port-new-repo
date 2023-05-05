import React from 'react'
import {BiCopyright} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Copyright = () => {
  return (
    <div className='flex flex-col md:grid grid-cols-3 bg-[#1050A2] p-1 text-white'>
    <div className='flex flex-col text-[12px]'>
      <span className='flex flex-row'>
        Copyright  
        <BiCopyright/>
        2023 All Rights reserved.
      </span>
      <span className='mt-2'>
        This is the official website of NIGST and all contents in the website are the property of NIGST.
      </span>
    </div>
    <div className='pl-0 md:pl-4 mb-4 md:mb-0 mt-4 md:mt-0 md:flex md:justify-center md:items-center text-[12px]'>
      <Link to="/Policies/Privacypolicy" className='mr-2 md:mr-4'>
        Privacy Policy
      </Link>
      <span >|</span>
      <Link to="/websitepolicy" className='ml-2 md:ml-3 mr-2 md:mr-4'>
        Website Policies
      </Link>
      <span >|</span>
      <Link to="/Hyperlinkpolicy" className='ml-2 md:ml-3 mr-2 md:mr-4'>
        Hyperlinking Policies
      </Link>
      <span >|</span>
      <Link to="/Copyrightpolicy" className='ml-2 md:ml-3'>
        Copyright Policies
      </Link>
    </div>
    <div className='flex  md:justify-end  md:items-center text-[12px]'>
      <Link to="https://ks-tech.in/" target="_blank" >
         Designed and Developed By- KRITASUTRA
      </Link>
    </div>
  </div>
  
  )
}

export default Copyright
