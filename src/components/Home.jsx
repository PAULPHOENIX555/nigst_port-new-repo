import axios from 'axios'
import React, { useEffect, useState } from 'react'
import About from '../about/About'
import Carousel from '../carousel/Carousel'
import banner1 from '../assests/X0qP81f7lg3YqNFI.jpeg'
import banner2 from '../assests/g20 Banner.jpg'
// import { HashScroll } from "react-hash-scroll";
import SCarousel from '../components/SOI project/soiprojects';

function mankibat() {
  window.open = ('https://www.mygov.in/group-issue/inviting-ideas-celebrate-100th-episode-mann-ki-baat/?target=inapp&type=group_issue&nid=336471','_blank');
}

const Banner = [banner1, banner2]

const Home = () => {
  const [images, setImages] = useState([])
  const [banner,setBanner] = useState([]);
  useEffect(() => {
    async function fetchBannerImages() {
      const response = await axios.get('/api/banner_images');
      setImages(response.data);
    }
    fetchBannerImages();
    viewBannerImage();
  }, [])

function viewBannerImage(){
  const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/viewweb/view_banner/";
  axios.get(url).then((res)=>{
    setBanner(res.data.banners)
  }).catch((error)=>{
    console.log(error)
  })
}
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  fade: false,
  speed: 500,
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

  return (
    <>
      <div className=''>
        <Carousel />
        <div className='flex flex-col md:flex-row lg:flex-row xl:row 2xl:flex-row ' >
          {banner.map((image, index) => (
            <a href={image.url}  className=' w-full md:w-[50%] object-cover  ' target='_blank'><img  src={image.signedUrl} alt={image.alt} className="h-full"/></a>
          ))} 
        </div>
      </div>
      {/* <HashScroll hash="#hash-section-1"> */}
      <About />
      {/* </HashScroll> */}
      <SCarousel />
    </>
  )
}

export default Home