import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'
import { useState } from 'react'
import img1 from './soiproject/01.jpg';
import img2 from './soiproject/coastal.jpg';
import img3 from './soiproject/nhp.jpg';
import img4 from './soiproject/vertical-datum.jpg';
import img5 from './soiproject/web-gis.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';




function SCarousel() {

  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
  arrows: true,
  slidesToShow: 4,
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

  
  
   const hotelCards = [
    {
      imageSrc: img1,
      title: '',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'SVAMITA',
      features: [''],
    },
    {
      imageSrc: img2,
      title: '',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'Integrated Costal Hazard Zone Mapping',
      features: [''],
    },
    {
      imageSrc: img3,
      title: '',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'National Hydrology Project',
      features: [''],
    },
    {
      imageSrc: img4,
      title: '',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'Redefinition of Indian Vertical Application',
      features: [''],
    },
    {
      imageSrc: img5,
      title: '',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'Web Gis based Governance Application',
      features: [''],
    },
  ];

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
      {hotelCards.map((card, index) => (
        <div key={index} className="p-4 bg-white shadow-md h-full w flex flex-col slider">
          <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
          <img alt={card.title} src={card.imageSrc} className="w-full object-cover mb-4 rounded-lg" />
          <p className="text-gray-700 mb-4 flex-grow">{card.description}</p>
          <div className="bg-[#1050a2] hover:bg-[#ffcb00] text-white font-bold w-full  py-2 px-4 rounded-sm inline-block mb-4 flex justify-center items-center">{card.pricingText}</div>

          
          
        </div>
      ))}
    </Slider>
  </div>
  

  

  )
}
export default SCarousel;