import React, { useState } from 'react';
import './gallery.css';
import'./Images/backgroundImage.jpg';
import { IconName } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? 3 : prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 3 ? 0 : prevIndex + 1);
  };

  return (
    <div className="content-container">
      <div id="carousel">
        <i className="fa fa-angle-left leftImage" aria-hidden="true" onClick={handlePrevClick}></i>
        <i className="faAngleRight" aria-hidden="true" onClick={handleNextClick}></i>
        <div id="imagessss">
          <img src={require("./Images/backgroundImage.jpg")} alt=" 1" style={{ display: currentIndex === 0 ? 'block' : 'none' }} />
          <img src={require("./Images/Banner 3.jpg")} alt="Image 2" style={{ display: currentIndex === 1 ? 'block' : 'none' }} />
          <img src={require("./Images/backgroundImage.jpg")} alt="Image 3" style={{ display: currentIndex === 2 ? 'block' : 'none' }} />
          <img src={require("./Images/backgroundImage.jpg")} alt="Image 4" style={{ display: currentIndex === 3 ? 'block' : 'none' }} />
        </div>
        <div className="btn-container">
          <button className="speed-control-stop"><i className="fa fa-stop-circle"></i></button>
          <button className="speed-control-start"><i className="fa fa-play-circle"></i></button>
          <button className="speed-control-slow">0.5X</button>
          <button className="speed-control-medium">1X</button>
          <button className="speed-control-fast">2X</button>
        </div>
      </div>
      <div className="grid-wrapper">
        <div className="album">
          <img src="https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGVwZW5kZW5jZSUyMGRheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" data-attribute = "independence" />
          <div className="album-detail">
            <h2>Independence Day</h2> 
            <h1>03/03/2023</h1>
          </div>
        </div>
        <div className="album">
          <img src="https://plus.unsplash.com/premium_photo-1674992166124-94ebd434fb0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRpd2FsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" data-attribute = "diwali" />
          <div className="album-detail">
            <h2>Diwali</h2> 
            <h1>03/03/2023</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
