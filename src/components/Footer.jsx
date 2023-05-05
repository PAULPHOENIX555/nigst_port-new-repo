import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {HiLocationMarker} from 'react-icons/hi'
import {GrMail,GrTwitter} from 'react-icons/gr'
import {FaYoutube,FaPhoneAlt,FaFacebookSquare,FaLinkedin} from 'react-icons/fa'
import axios from 'axios';

const contactus={
  address:['Additional Surveyor General,Survey of India, Uppal, Hyderabad 500039, Telangana, INDIA'],
  phone:[
    '+91-40-27201181','+91-40-27201185','+91-40-27201186'
  ],
  mailLink:'mailto:iism.soi@gov.in',
  mail:'iism.soi@gov.in',
  ytLink:'https://www.youtube.com/channel/UCntYNtrSf6eXL3O4yWVBt0w'
}

const quicklinks=[
  { name: "Tender", url: "/tenders" },
  { name: "Sitemap", url: "#" },
  { name: "Grievances", url: "/components/publicgrievances/Publicgrievance" },
  { name: "Citizen Charter", url: "/citizen" },
  { name: "FAQ", url: "#" }

]

const importantLinks=[
  { name: "National Portal of India", url: "https://www.india.gov.in/" },
  { name: "Department of Science and Technology", url: "https://dst.gov.in/" },
  { name: "SOI Online Maps Portal", url: "https://onlinemaps.surveyofindia.gov.in/" },
  { name: "NRSC", url: "https://www.nrsc.gov.in//" },
  { name: "NIC Bharat Maps", url: "https://bharatmaps.gov.in/" },
  { name: "IIRS", url: "https://www.iirs.gov.in/" },
  { name: "UNGGIM Portal", url: "https://ggim.un.org/" },
  { name: "UNGGIM-AP Portal", url: "https://www.un-ggim-ap.org/" },
  { name: "DigitalSky-Airspace Map", url: "https://digitalsky.dgca.gov.in/airspace-map/#/app" }



]




const Footer = () => {

//implement after having api

//   const [contactus, setContactus] = useState(null);
// const [quicklinks, setQuicklinks] = useState(null);
// const [importantLinks, setImportantLinks] = useState(null);

// useEffect(() => {
//   axios.get('/api/contactus')
//     .then(response => {
//       setContactus(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }, []);

//   useEffect(() => {
//     axios.get('/api/quicklinks')
//     .then(response => {
//       setQuicklinks(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });

//     }, []);

//     useEffect(() => {
//       axios.get('/api/importantLinks')
//     .then(response => {
//       setImportantLinks(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//       }, []);

const [visitor, setVisitor] = useState('')

useEffect(() => {
  const interval = setInterval(() => {
    axios.get('https://nigst.onrender.com/viscount')
      .then(response => {
        const newCount = response.data;
        if (newCount !== visitor) {
          setVisitor(newCount);
        }
      })
      .catch(error => console.log(error));
  }, 5000);

  return () => clearInterval(interval);
}, [visitor]);


  return (
    <div className='mt-0'>
    <footer className="bg-[#262C31] text-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 pl-4 md:pl-16 pt-20 pb-20">
  
          <div className="flex flex-col font-sans md:ml-[40px]  mb-8 md:mb-0">
            <h3 className="text-[#ffcb00] text-[20px] mb-10 font-bold ">Contact Us</h3>
            <div className="flex  items-center mb-2 ">
              <HiLocationMarker color='black' size="1.5em" className='rounded-full w-auto h-auto p-2  bg-[#ffcb00]'/> 
  {contactus.address.map((address, index) => (
    <p className="text-[15px] w-[70%] ml-3 " key={index}>
      {address}
    </p>
  ))}
             
            </div>
            <div className="flex items-center mb-2">
              <FaPhoneAlt color='black' size="1.5em" className='rounded-full w-auto h-auto p-2  bg-[#ffcb00]' />
              <span>
              {contactus.phone.map((phone,index)=>(
                <p className="text-[15px]  ml-3 " key={index}>
      {phone}
    </p>
              ))}
              </span>
            </div>


            <div className="flex items-center mb-2">
              <GrMail color='black' size="1.5em" className='rounded-full w-auto h-auto p-2  bg-[#ffcb00]'/>
              <Link to={contactus.mailLink} className="text-[17px] px-5">{contactus.mail}</Link>
            </div>
            <div className='flex flex-wrap'>
              <Link to={contactus.ytLink} target="_blank">
                <FaYoutube color='red' size="2.0em" className='p-5 pt-3.5 w-auto h-auto'/>
              </Link>
              <Link to='https://www.facebook.com/' target="_blank">
                <FaFacebookSquare color='#4267B2'  size="1.5em" className='p-5 w-auto h-auto'/>
              </Link>
              <Link to='https://twitter.com/' target="_blank">
                <GrTwitter color='#1DA1F2'  size="1.5em" className='p-5 w-auto h-auto'/>
              </Link>
              <Link to='https://in.linkedin.com/' target="_blank">
                <FaLinkedin color='#0A66C2'  size="1.5em" className='p-5 w-auto h-auto'/>
              </Link>
              
            </div>
          </div>
  
          <div className="flex flex-col  md:ml-[100px]  ">
            <h3 className="text-lg text-[#ffcb00] text-[20px] font-bold  mb-10">Quick Links</h3>
            <div className="flex flex-col   mb-2">
            {quicklinks.map((links,index)=>(
              <Link to={links.url} key={index} target="_blank" className="mr-2 mb-2 text-[17px]">{links.name}</Link>
            ))}
              
            </div>
            <h3 className="text-lg text-[#ffcb00] text-[20px] font-bold mt-10 mb-4">Visitors Count</h3>
               <span>{visitor.total}</span>
          </div>
          
        <div className="flex flex-col md:ml-10   ">
          <h3 className="text-[20px] text-[#ffcb00]  mb-10 font-bold">Important Links</h3>
          <div className="flex flex-col">

{importantLinks.map((impLinks,index)=>(
  <Link to={impLinks.url} target="_blank" key={index} className="text-[16px] text-[#ffffff] hover:text-[#ffcb00] mb-2">
          {impLinks.name}
        </Link>
))}
      </div>
    </div>
  </div>
</div>
</footer>
</div>



  )
}

export default Footer
