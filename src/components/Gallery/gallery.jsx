import React, { useState, useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {ImPlay3} from 'react-icons/im'
import {IoIosPause} from 'react-icons/io'
import {AiFillForward} from 'react-icons/ai'
import {AiFillBackward} from 'react-icons/ai'

const images = [
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0001.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0041.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0045.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0085.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0092.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0098.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0100.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0106.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0108.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0114.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0122.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0128.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0142.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0151.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0153.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0157.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0158.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0159.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0163.png'),
  },
  {

    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0166.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0171.png'),
  },
  {
    
    category: 'Science Day',
    imageSrc: require('./NIGST Gallery/Science Day/DSC_0176.png'),
  },
  {
    
    category: 'Minister Visit Day',
    imageSrc: require('./NIGST Gallery/Minister visit/1.jpeg'),
  },
  {
    
    category: 'Minister Visit Day',
    imageSrc: require('./NIGST Gallery/Minister visit/10.jpeg'),
  },
  {
    
    category: 'NIGST AP Govt. Emp. Training',
    imageSrc: require('./NIGST Gallery/NIGST AP Govt. Emp. Training/Snapshot_1426.png'),
  },
  {
    
    category: 'NIGST Forest Officer Training',
    imageSrc: require('./NIGST Gallery/NIGST Forest Officer Training/Snapshot_1421.png'),
  },
  {
    
    category: 'NIGST Republic Day 2023',
    imageSrc: require('./NIGST Gallery/NIGST Republic Day 2023/Snapshot_1435.png'),
  },
  {
    
    category: 'NIGST Special Course',
    imageSrc: require('./NIGST Gallery/NIGST Special Course/Snapshot_1450.png'),
  },
  
];

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [slideInterval, setSlideInterval] = useState(3000); 

  const categories = [ ...new Set(images.map((image) => image.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const filteredImages =
    selectedCategory === ''
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const handleStart = () => {
    setAutoplay(true);
  };

  const handlePause = () => {
    setAutoplay(false);
  };

  const handleSpeedUp = () => {
    setSlideInterval((prevInterval) => Math.max(prevInterval - 500, 0)); 
    setAutoplay(true); 
  };
  
  const handleSlowDown = () => {
    setSlideInterval((prevInterval) => prevInterval + 500); 
    setAutoplay(true);
  };


  const handleCarouselChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
  <div className='col-span-1'></div>
    <div className="col-span-1 lg:col-span-7 relative">
      <Carousel
        showArrows={true}
        showThumbs={false}
        dynamicHeight={false}
        infiniteLoop={true}
        autoPlay={autoplay}
        interval={slideInterval}
        selectedItem={currentSlide}
        onChange={handleCarouselChange}
        ref={carouselRef}
        className="m-auto p-8 "
        emulateTouch={true}
      >
        {filteredImages.map((image, index) => (
          <div key={image.imageSrc} onClick={() => handleImageClick(image.imageSrc)}>
            <img src={image.imageSrc} alt="Gallery" className="h-[50vh] lg:h-[70vh] rounded-md object-cover "  loading="lazy" /> {/* Adjust height here */}
          </div>
        ))}
      </Carousel>
      <div className="absolute top-7 right-7 lg:top-5 lg:right-9 p-2">
        <div className="flex justify-center lg:mt-3">
          <button
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handleStart}
          >
            <ImPlay3 />
          </button>
          <button
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handlePause}
          >
            <IoIosPause />
          </button>
          <button
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handleSlowDown}
          >
            <AiFillBackward />
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handleSpeedUp}
          >
            <AiFillForward />
          </button>
        </div>
      </div>
    </div>
   
    <div className="col-span-4 mt-1 lg:mt-4">
      <div className="flex flex-col lg:pt-8 px-2 lg:px-5">
        {categories.map((category) => {
          const categoryImages = images.filter((image) => image.category === category);
          const firstImage = categoryImages.length > 0 ? categoryImages[0] : null;
  
          return (
            <div key={category} className="flex items-center mb-2 ">
              {firstImage && (
                <img
                  src={firstImage.imageSrc}
                  alt="Thumbnail"
                  className="w-25 h-20 rounded-md mr-2" onClick={() => handleCategoryClick(category)}
                />
              )}
              <button
                className={`border rounded-md px-4 py-2 focus:outline-none ${
                  selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  
    {selectedImage && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="max-w-2xl mx-auto">
          <img src={selectedImage} alt={selectedImage} className="w-full h-auto"  loading="lazy"/>
          <button
            className="absolute top-0 right-0 m-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default ImageGallery;
