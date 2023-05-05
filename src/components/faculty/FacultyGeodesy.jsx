import React from 'react'
import LeftSection from './LeftSection'
import LowerLeft from './LowerLeft';
import LowerRight from './LowerRight';
import RightSection from './RightSection'
import imageHead from '../../assests/geodesy/G. Varun Kumar, Head Faculty.JPG'
import DetilnImg from '../pageStructure/DetilnImg';


const headData = {
  name: 'G. Varun Kumar',
  designation: 'Deputy Surveyor General',
  position: 'Head Of Faculty',
  image: imageHead
}

const data = [
  {
    name: 'K.V. Ramana Murthy',
    designation: 'Superintending Surveyor',
    position: 'Faculty'
  },
  {
    name: 'Ch.V.S.S. Prasad',
    designation: 'Superintending',
    position: 'Faculty'
  },
  {
    name: 'M.Rakesh',
    designation: 'Officer Surveyor',
    position: 'Faculty'
  },
  {
    name: 'Samir-Ud-Din-Khan',
    designation: 'Surveyor(Adhoc)',
    position: 'Instructor'
  }
];

const Modata = {
  title: 'Biography',
  data: [
    {
      heading: 'Info',
      details: 'Initially worked as a Management Trainee (Technical) in SAIL thereafter worked in A.P. Irrigation Department from 1992 to 1999. Joined as Deputy Superintending Surveyor in Survey of India in 1999 consequent upon selection through Engineering Services Examination. Completed Two-year rigorous training of Surveying Engineer course at S.T.I. Completed one year course in Advanced Geodesy at Survey Training Institute, Hyderabad in 2003-04. Promoted as Superintending Surveyor in 2004. Worked in all wings of Geodetic and Research Branch (G&RB) of Survey of India at Dehra Dun from 2004 to 2012. Actively involved in special projects like study of Verticality of Taj Mahal Minarets, Qutb Minar, Dam Deformation studies, Tunnel Alignment works etc. Personally headed a survey team immediately after Great Sumatra Earthquake for studying its effect on Andaman-Nicobar Islands and the survey team has established High Precision levelling line along the Andaman Trunk Road, Connected the islands with the main land through GPS and several tidal observations were carried out across the islands to establish vertical control. Actively involved in the modernization of Tide gauge network within Survey of India and INCOIS. Actively participated in the tidal component of Hazard Line mapping all along the East & West Coast of India as a part of World Bank funded ICZM (Integrated Coastal Zone Management) Project. In 2012, posted as Geodesy faculty member in IIS&M (Indian Institute of Surveying & Mapping), Hyderabad. Promoted as Director in Survey of India on 16.7.2017 and working in the same rank since then initially at Madhya Pradesh Geospatial Data Center (MPGDC), Jabalpur and Later at Odisha GDC, Bhubaneswar. Promoted as Director in Survey of India on 16.7.2017 and working in the same rank since then initially at Madhya Pradesh Geospatial Data Center (MPGDC), Jabalpur and Later at Odisha GDC, Bhubaneswar. Selected as head faculty of Geodesy in National Institute of Geoinformatics Science and Technology in May 2021.'
    },
    {
      heading: 'Education',
      details: 'Completed Bachelor of Engineering in Civil Engineering from Andhra University, Visakhapatnam from 1985-1989 and M. Tech. in Civil Engineering from I.I.T., Kharagpur in 1989-1991.'
    },
    {
      heading: 'Trainings attended:',
      details: '1.	Attended Foundation course for Scientists and Technologists at IIPA, New Delhi.'
    },
    {
      heading: '',
      details: '2.	Attended four week training (05-05-2008 to 30-05-2008) at NTC, Adelaide, Australia under UNESCO/IOC fellowship in Tsunami Warning System.'
    },
    {
      heading: '',
      details: '3.	Attended three weeks course on “3D-Geoinformation from imagery” at ITC, Netherlands, (26.6.2017 -14.7.2017) under NHP.'
    },
    {
      heading: 'Others:',
      details: ''
    },
    {
      heading: '',
      details: '1.	Visiting faculty at IIRS (Indian Institute of Remote Sensing), Dehra Dun.'
    },
    {
      heading: '',
      details: ' 2.	Active member of land subsidence studies at Coal Mine areas surrounding Dhanbad by In-SAR imageries conducted by IIRS.'
    },
    {
      heading: '',
      details: ' 3.	Member of high powered committee to evaluate the seismological studies conducted for various water resources projects across India, constituted by CWC(Central water Commission).'
      
    },
    {
      heading: '',
      details: '4.	Member of PAC (Program Advisory Committee) for Earth quake precursor studies Constituted by Ministry of Earth Sciences, Govt. of India.'
      
    },
    {
      heading: '',
      details: ' 5.	Member, BoS, JNTU for revision of syllabus for Geoinformatics.'
      
    },
    {
      heading: '',
      details: '6.	Member, TEC (Technical Evaluation Committee) for procurement of GNSS, Tide Gauges etc. for INCOIS, Hyderabad.'
      
    },
    
  ]
}

const facultyPage={
  images:[
    { path: require('../../assests/geodesy/Snapshot_1420.png') },
    { path: require('../../assests/geodesy/Snapshot_1421.png') },
    { path: require('../../assests/geodesy/Image No. 7.jpg') },
        { path: require('../../assests/geodesy/Image No. 5.jpg') },

    
  ],
  
  heading:'Faculty Geodesy',
  content:['Welcome to the Geodesy Faculty, where we are dedicated to providing comprehensive training to government, private and individual entities involved in geodetic survey work. Our primary mission is to equip trainee officers and staff with the knowledge and skills required to conduct geodetic survey for horizontal and vertical control work using GNSS, CORS, GPR, High Precision Levelling, Field Astronomy and other related technologies.Our courses cover theoretical concepts of geodetic surveying and are complemented with practical and lab exercises to provide a comprehensive understanding of the subject. We offer various training programs ranging from one week to one year, depending on the course. Additionally, we conduct tailor-made courses to cater specific needs of our clients.At our faculty, participants receive personalized attention and guidance from experienced trainers and ensure that they get a thorough understanding of the subject. Our faculty is committed to providing the highest quality education in the field of Geodesy. We invite you to join us today to take the first step towards a successful career in the geospatial domain.']
}

const FacultyGeodesy = () => {
  return (
<div className='m-2 md:m-4 p-2 md:p-6'>
    <DetilnImg heading={facultyPage.heading} text={facultyPage.content} images={facultyPage.images} />

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  m-4 md:m-6 lg:m-8 rounded-md gap-2 md:gap-4 lg:gap-6'>
      {/* <LeftSection heading={heading} content={content} />
      <RightSection images={images} /> */}
      <LowerLeft Modata={Modata} headData={headData} />
      <LowerRight data={data} />
    </div>
    </div>
  )
}

export default FacultyGeodesy