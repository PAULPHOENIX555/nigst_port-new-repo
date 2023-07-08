import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useEffect } from 'react';
import axios from 'axios';




function SCarousel() {

  const [sliderRef, setSliderRef] = useState(null);
  const [hotelCards,setHotelCards] = useState([]);

  const sliderSettings = {
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  fade: false,
  speed: 1000,
  autoplay: true,
  initialSlide: 2,
  lazyLoad: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

  useEffect(()=>{
    const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/viewweb/web_project";
    axios.get(url).then((res)=>{
      setHotelCards(res.data.data);
      console.log(hotelCards)
    }).catch((error)=>{
      console.log(error);
    })
  },[]);  
  
 

  return (
    <div className='content p-[25px] md:p-[30] m-auto xl:p-8 w-full'>
      <h2 className='font-bold text-lg text-center'>SOI PROJECTS</h2>
    <div className="mx-3 flex justify-between">
      <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-full p-2" onClick={sliderRef?.slickPrev}>
        <FaArrowLeft />
      </button>
      <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-full p-2" onClick={sliderRef?.slickNext}>
        <FaArrowRight />
      </button>
    </div>
    <Slider className="mt-4 mx-0 grid gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 " ref={setSliderRef} {...sliderSettings}>
      {
        hotelCards.map((card,index)=>{
          return (
            <div key={index} className="p-4 bg-white shadow-md h-full w flex  slider">
            {/* <h2 className="text-2xl font-bold mb-2">{card.name}</h2> */}
            <img alt={card.name} src={card.Purl} className="w-full object-cover mb-4 rounded-lg h-24" />
            <p className="text-gray-700 mb-4 flex-grow">{card.p_description}</p>
            <div className="bg-[#1050a2] hover:bg-[#ffcb00] text-white font-bold w-full  py-2 px-4 rounded-sm inline-block mb-4 flex justify-center items-center"><a href={card.url} target="_blank">{card.name}</a></div> 
          </div>
          )
        })
      }
    </Slider>
  </div>
  

  

  )
}
export default SCarousel;