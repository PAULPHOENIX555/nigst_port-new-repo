import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const Fixed = () => {
  return (
    <div className='sticky top-0 left-0 right-0 z-10 '>
        <Header/>
        <Navbar/>
    </div>
  )
}

export default Fixed