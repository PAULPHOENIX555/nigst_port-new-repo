import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiChevronRight } from "react-icons/hi"
import { AiOutlineSearch, AiOutlineLogin } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdOutlineAnnouncement } from 'react-icons/md'
import Searchbar from './Searchbar';
import { FaTimes } from 'react-icons/fa';
import './announcement.css'
import searchData from '../components/searchdata.json'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const [ispanelopen, setIspanelopen] = useState(false)
  const showSidePanel = () => {
    setIspanelopen(!ispanelopen)
  }
  const [ispanellopen, setIspanellopen] = useState(true)
  const hideSidePanel = () => {
    setIspanellopen(!ispanellopen)
  }
  const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);
  const [isGovernanceHovered, setIsGovernanceHovered] = useState(false)
  const handleGovernanceToggle = () => {
    setIsGovernanceOpen(!isGovernanceOpen);
  };

  const handleGovernanceHover = () => {
    setIsGovernanceHovered(true);
  };
  const handleGovernanceHoverEnd = () => {
    setIsGovernanceHovered(false);
  };
  const [isfacultyOpen, setIsfacultyOpen] = useState(false)
  const [isFacultyHovered, setIsFacultyHovered] = useState(false);

  const handleFacultyHover = () => {
    setIsFacultyHovered(true);
  };
  const handleFacultyHoverEnd = () => {
    setIsFacultyHovered(false);
  };
  const handleFacultyToggle = () => {
    setIsfacultyOpen(!isfacultyOpen)
  }

  const [isaboutOpen, setIsaboutOpen] = useState(false)

  const handleAboutOpen = () => {
    setIsaboutOpen(!isaboutOpen);
  };
  const [istrainingOpen, setIstrainingOpen] = useState(false)
  const handletrainingToggle = () => {
    setIstrainingOpen(!istrainingOpen)
  }
  const location = useLocation()
  useEffect(() => {
    setIsOpen(false);
    setIsGovernanceOpen(false)
    setIsfacultyOpen(false)
    setIsaboutOpen(false)
    setIstrainingOpen(false)
  }, [location]);

  // const Activenavbarr = () => {
  //   const location = useLocation();
  
  //   const activenavbarStyle = {
  //     '/': {
  //       Color: 'red',
  //     },
  //   };

  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const handleAnnouncementClick = () => {
    setShowAnnouncement(!showAnnouncement);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const announcements = [
    {
      date: 'Aug 22, 2022',
      text: 'Call for Proposal: Announcement of Opportunity (AO) for Capacity Building in Space Based Disaster Management Support'
    },
    {
      date: 'Sep 22, 2022',
      text: 'Call for Proposal: Announcement of Opportunity (AO) for Capacity Building in Space Based Disaster Management Support'
    },
    {
      date: 'Sep 23, 2022',
      text: 'Call for Proposal: Announcement of Opportunity (AO) for Capacity Building in Space Based Disaster Management Support'
    },
  ];
  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? announcements.length - 1 : activeIndex - 1);
  };
  const handleNextClick = () => {
    setActiveIndex(activeIndex === announcements.length - 1 ? 0 : activeIndex + 1);
  };


  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);




  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex, announcements.length]);


  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const sidePanelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidePanelRef.current && !sidePanelRef.current.contains(event.target)) {
        setIsSidePanelOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  }


  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#1050A2] p-2  w-full cursor-pointer">
      <div className="block lg:hidden relative">
        <button className="flex items-center px-3 py-2  rounded text-white hover:text-yellow-300 hover:border-white" >
          <GiHamburgerMenu onClick={toggle} />
        </button>
      </div>

      <div className='md:hidden lg:hidden flex items-center'>
        <Searchbar data={searchData} />
        <div className="flex items-center ml-2">
          <Link to='/login' className='flex items-center justify-center'>
            <BsFillPersonFill size='1.5em' color='white' />
          </Link>
          <div className="ml-2" onClick={handleAnnouncementClick} >

            <MdOutlineAnnouncement size='1.5em' color='white' />
          </div>
        </div>
      </div>


      <div className={`${isOpen ? "block" : "hidden"}  w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow relative md:flex lg:flex ">
          <button className="hidden lg:block mr-4 lg:block px-3 py-2 text-white" onClick={toggleSidePanel}>
            <GiHamburgerMenu size='1.7em' />
          </button>
          <ul ref={sidePanelRef} className={`bg-[#1050A2] py-0 ml-0 absolute top-full md:-ml-4 lg:-ml-4  mt-1 z-50
             side-panel ${isSidePanelOpen ? 'block' : 'hidden'}`} style={{ overflowY: "auto" }}  >
            <div className='w-40  flex flex-col h-screen'>
              <li>
                <Link to="/tenders" className="block px-4 py-2 text-white md:border-b-[1px] hover:font-semibold" onClick={toggleSidePanel} >Tenders</Link>
              </li>

              <li>
                <Link to="/rti" className="block px-4 py-2 text-white md:border-b-[1px] hover:font-semibold" onClick={toggleSidePanel} >RTI</Link>
              </li>
              <li>
                <Link to="https://www.surveyofindia.gov.in/pages/annual-reports" target='blank' onClick={toggleSidePanel} className="block px-4 py-2 text-white md:border-b-[1px] hover:font-semibold">SOI Annual Reports</Link>
              </li>
              <li>
                <Link to="./components/rajbhasha/rajbhasha" className="block px-4 py-2 text-white md:border-b-[1px] hover:font-semibold" onClick={toggleSidePanel} >Raj Bhasha</Link>
              </li>
              <li>
                <Link to="/components/geospatial" className="block px-4 py-2 text-white md:border-b-[1px] hover:font-semibold" onClick={toggleSidePanel}>Geo Spatial Policies</Link>
              </li>
              <li>
                <Link to="/components/publicgrievances/Publicgrievance" className="block px-4 py-2 text-white md:border-b-[1px] hover:font-semibold" onClick={toggleSidePanel} >Public grievances Office</Link>
              </li>
            </div>
          </ul>

          <Link exact to="/"   className="block mt-4 md:py-2 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Home
          </Link>

          <div className="group block mt-4 md:py-2 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            <span className="group-hover:text-yellow-300" onClick={handleAboutOpen}>About NIGST
              <HiChevronRight className={`inline-block h-5 w-5 ml-1 md:hidden  ${!isaboutOpen ? "transform rotate-90" : ""} `} />            </span>
            {

            }
            <div className={`absolute ${isaboutOpen ? "group-hover:hidden" : "group-hover:block"} z-10 hidden group-hover:block bg-[#1050A2] py-2`}  >
              <Link to="/about/introduction" className="block px-4 py-2 text-white hover:text-yellow-300">
                Introduction
              </Link>

              <div className="relative flex flex-col "
                onClick={handleGovernanceToggle}
                onMouseEnter={handleGovernanceHover}
                onMouseLeave={handleGovernanceHoverEnd}
              >
                <div
                  className="flex items-center text-white hover:text-yellow-300 mr-4 text-base cursor-pointer"

                >
                  <div className='flex flex-row items-center '>
                    <span className="block px-4 py-2">Governance Structure</span>
                    <HiChevronRight
                      className={`inline-block h-5 w-5 ml-1 ${isGovernanceOpen ? "transform rotate-90" : ""} `}
                    />
                  </div>

                </div>

                <ul
                  className={`absolute bg-[#1050A2] py-2 top-9 md:top-0 md:left-full ${isGovernanceOpen || isGovernanceHovered ? "block order-last" : "hidden"
                    } w-full  border-white`}
                  onMouseEnter={handleGovernanceHover}
                  onMouseLeave={handleGovernanceHoverEnd}


                >
                  <li className="block px-4 py-2 md:border-b-[0.5px] text-white hover:text-yellow-300"><Link to='/about/governance/board_of_governance' onClick={handleAboutOpen}>Board Of Governance</Link></li>
                  <li className="block px-4 py-2 md:border-b-[0.5px] text-white hover:text-yellow-300"><Link to='/about/governance/board_of_evaluation' onClick={handleAboutOpen}>Board Of Evaluation</Link></li>
                  <li className="block px-4 py-2 text-white hover:text-yellow-300"><Link to='/about/governance/board_of_studies' onClick={handleAboutOpen} >Board Of Studies</Link></li>
                </ul>
              </div>

              <Link to="/about/nigst_campus" className="block px-4 py-2 text-white hover:text-yellow-300">NIGST Campus</Link>
              <Link to="/location" className="block px-4 py-2 text-white hover:text-yellow-300">Location</Link>
            </div>
          </div>




          <div className="group block mt-4 md:py-2 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            <span className="group-hover:text-yellow-300" onClick={handletrainingToggle}>Training
              <HiChevronRight className={`inline-block h-5 w-5 ml-1 md:hidden  ${!istrainingOpen ? "transform rotate-90" : ""} `} />
            </span>
            <div className={`absolute ${istrainingOpen ? "group-hover:hidden" : "group-hover:block"} z-10 hidden group-hover:block bg-[#1050A2] py-2`}>



              <div
                onClick={handleFacultyToggle}
                onMouseEnter={handleFacultyHover}
                onMouseLeave={handleFacultyHoverEnd}
                className="relative"
              >
                <div className="flex items-center w-full text-white hover:text-yellow-300 mr-4 text-base cursor-pointer" onClick={handleFacultyHoverEnd}
                >
                  <span className="block px-4 py-2">Faculty</span>
                  <HiChevronRight
                    className={`inline-block h-5 w-5 ml-1 ${isfacultyOpen ? "transform rotate-90" : ""}`}
                  />
                </div>
                <div
                  className={`absolute bg-[#1050A2] w-52 md:w-72  md:top-0 md:-left-[78%] ${isfacultyOpen || isFacultyHovered ? "block" : "hidden"
                    }`}
                  onMouseEnter={handleFacultyHover}
                  onMouseLeave={handleFacultyHoverEnd}
                >
                  <ul className="bg-[#1050A2] w-full flex flex-col justify-center py-0  ml-0 md:relative md:left-full lg:absolute lg:left-full">
                    <li className='inline-block md:border-b-[0.5px] px-4 py-2 text-white hover:text-yellow-300'>
                      <Link to="/faculty/geodesy" onClick={handletrainingToggle}>
                        Faculty of Geodesy
                      </Link>
                    </li>
                    <li className='inline-block md:border-b-[0.5px] px-4 py-2 text-white hover:text-yellow-300'>
                      <Link to="/faculty/photogrammetry" onClick={handletrainingToggle}>
                        Faculty of P & RS
                      </Link>
                    </li>
                    <li className='inline-block md:border-b-[0.5px] px-4 py-2 text-white hover:text-yellow-300'>
                      <Link to="/faculty/cartography" onClick={handletrainingToggle}>
                        Faculty of Carto, DM & GIS
                      </Link>
                    </li>
                    <li className='inline-block md:border-b-[0.5px] px-4 py-2 text-white hover:text-yellow-300'>
                      <Link to="/faculty/topographical" onClick={handletrainingToggle}>
                        Faculty of TS & LIS
                      </Link>
                    </li>
                    <li className='inline-block md:border-b-[0.5px] px-4 py-2 text-white hover:text-yellow-300'>
                      <Link to="/faculty/geo_ict" onClick={handletrainingToggle}>
                        Faculty of GEO-ICT
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>



              <Link to="/Courses" className="block px-4 py-2 text-white hover:text-yellow-300">Courses</Link>
              <Link to="/login" className="block px-4 py-2 text-white hover:text-yellow-300">Course Enrollment</Link>
              <Link to="/feesandpayment" className="block px-4 py-2 text-white hover:text-yellow-300">Fee and Payment</Link>
            </div>
          </div>
          <Link to="/registration" className="block mt-4 md:py-2 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Training Registration
          </Link>
          <Link to="/components/SOI project/soiprojects" className="block mt-4 md:py-2 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            SOI Projects
          </Link>
          <Link to="/components/SiteMap/sitemap" className="block md:py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Site Map
          </Link>
          <Link to="/gallery" className="block md:py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Gallery
          </Link>
          <Link to="/Contactus" className="block md:py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Contact Us
          </Link>
          <Link to="/components/FAQ/faq" className="block md:py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            FAQ
          </Link>
          {showButton && (
            <button className="block md:py-2 ml-0 mt-3 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4  text-base  float-right absolute top-0 right-0"
              onClick={handleAnnouncementClick}>Announcements</button>)}
          {showAnnouncement && (
            <div>
              <div className="announcement-container" >
                <div id="ann-close-icon">
                  <button onClick={handleAnnouncementClick} > <FaTimes size={20} /></button>
                </div>
                <Link to="/Tables/Announcementtable">
                  <h3 className='hover:text-[#ffcb00] text-lg py-1 text-white'>Announcement</h3>
                </Link>
                <div className="Acarousel-container">
                  <div className="Acarousel-wrapper">
                    {announcements.reduce((accumulator, announcement, index) => {
                      if (index % 2 === 0) {
                        accumulator.push(
                          <div key={index} className={`Acarousel-card ${activeIndex === index ? 'active' : ''}`}>
                            <h4>Posted on: {announcement.date}</h4>
                            <p><span>Call for Proposal:</span> {announcement.text}</p>
                            {announcements[index + 1] && (
                              <>
                                <h4>Posted on: {announcements[index + 1].date}</h4>
                                <p><span>Call for Proposal:</span> {announcements[index + 1].text}</p>
                              </>
                            )}
                          </div>
                        );
                      }
                      return accumulator;
                    }, [])}
                  </div>
                  <div className="Acarousel-indicators">
                    {announcements.map((_, index) => (
                      <div
                        key={index}
                        className={`Acarousel-indicator ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                      ></div>
                    ))}
                  </div>
                  <button className="prev-btn" onClick={handlePrevClick}>❮</button>
                  <button className="next-btn" onClick={handleNextClick}>❯</button>
                </div>
              </div>
            </div>
          )}

        </div>
        <ul className={`block md:hidden bg-[#1050A2] py-0 ml-0   
             
            `}>
          <div className='  flex flex-col'>
            <li>
              <Link to="/tenders" className="block py-2 text-white  hover:font-semibold" >Tenders</Link>
            </li>

            <li>
              <Link to="/rti" className="block  py-2 text-white  hover:font-semibold">RTI</Link>
            </li>
            <li>
              <Link to="https://www.surveyofindia.gov.in/pages/annual-reports" target='blank' className="block  py-2 text-white  hover:font-semibold">SOI Annual Reports</Link>
            </li>
            <li>
              <Link to="./components/rajbhasha/rajbhasha" className="block  py-2 text-white  hover:font-semibold">Raj Bhasha</Link>
            </li>
            <li>
              <Link to="/components/geospatial" className="block py-2 text-white  hover:font-semibold">Geo Spatial Policies</Link>
            </li>
            <li>
              <Link to="/publicgrievances" className="block  py-2 text-white  hover:font-semibold">Public grievances Office</Link>
            </li>
          </div>
        </ul>

      </div>

    </nav>
  )
}



// function DropdownMenu() {
//   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
//   const [timeoutId, setTimeoutId] = useState(null);

//   function handleMouseEnter() {
//     setIsSubmenuOpen(true);
//     clearTimeout(timeoutId);
//   }

//   function handleMouseLeave() {
//     const newTimeoutId = setTimeout(() => setIsSubmenuOpen(false), 500);
//     setTimeoutId(newTimeoutId);
//   }

//   return (
//     <div className="relative">
//       <button
//         className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         Dropdown
//       </button>
//       {isSubmenuOpen && (
//         <div
//           className="absolute z-10 bg-gray-800 text-white py-2 mt-2 w-72 rounded-md shadow-lg"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Option 1</a>
//           <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Option 2</a>
//           <div className="relative">
//             <button
//               className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               Submenu
//             </button>
//             {isSubmenuOpen && (
//               <div
//                 className="absolute z-10 left-full top-0 bg-gray-800 text-white w-full rounded-md shadow-lg"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <a href="#" className="inline-block px-4 py-2 text-sm hover:bg-gray-700">Submenu Option 1aaaaaaaaaaaaaa</a>
//                 <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Submenu Option 2aaaaaaaaaaaaaaa</a>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



export default Navbar
