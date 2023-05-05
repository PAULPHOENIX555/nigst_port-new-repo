import React from 'react'
import LeftSection from './LeftSection'
import LowerLeft from './LowerLeft';
import LowerRight from './LowerRight';
import RightSection from './RightSection'
import imageHead from '../../assests/photogrammetry/S K Sinha Head Faculty - C,DM&GIS.JPG'
import DetilnImg from '../pageStructure/DetilnImg';


const headData = {
  name: 'S K Sinha',
  designation: 'Deputy Surveyor General',
  position: 'Head Of Faculty',
  image: imageHead
}

const data = [
  {
    name: 'R K DASH',
    designation: 'Superintending Surveyor',
    position: 'Faculty'
  },
  {
    name: 'A K Rath',
    designation: 'Superintending Surveyor (Adhoc)',
    position: 'Faculty'
  },
  {
    name: 'L V PRASAD',
    designation: 'Officer Surveyor',
    position: 'Faculty'
  },
  {
    name: 'P R K PRASAD',
    designation: 'Officer Surveyor',
    position: 'Faculty'
  },
  {
    name: 'Ch.Anjaneyulu',
    designation: 'Surveyor',
    position: 'Instructor'
  },
  {
    name: 'P. Ravi Kiran',
    designation: 'Surveyor',
    position: 'Instructor'
  }
];

const Modata = {
  title: 'Biography',
  data: [
    {
      heading: 'Info',
      details: 'Completed Bachelor of Engineering in Civil Engineering from Indian institute of technology (BHU) and M. Tech. in Jawaharlal Nehru technological University, Hyderabad. Joined as Deputy Superintending Surveyor in Survey of India consequent upon selection through Engineering Services Examination. Completed Two-year rigorous training of Surveying Engineer course at S.T.I.'
    },
    {
      heading: 'Education',
      details: ' B.tech in civil Engineering at Indian institute of technology ( BHU), M.tech in Jawaharlal Nehru technological University, Hyderabad'
    },
    {
      heading: 'Area of interest:',
      details: 'Digital Photogrammetry, Drone Photogrammetry, LiDAR Survey, Image Processing. Digital Cartography & GIS'
    },
    {
      heading: 'Experience in Geospatial Science & Technology:',
      details: 'Actively participated in many projects during the career in Survey of India. However some of the remarkable projects '
    },
    {
      heading: '',
      details: '1) Ground based Topographical Surveys in North Eastern States, Rajasthan & Gujarat'
    },
    {
      heading: '',
      details: '2) Corridor Survey with L-Section & X-Section Surveys for Sabarmati Link Project'
    },
    {
      heading: '',
      details: '3) 3D-GIS Project for Delhi including 3D Textured Modelling /Property GIS/Utility GIS'
    },
    {
      heading: '',
      details: '4) High resolution/ accuracy survey of Coastal region for Integrated Coastal Zone Management Project'
    },
    {
      heading: '',
      details: '5) Planning for High resolution/accuracy Orthoimagery and DEM by LiDAR survey in National Hydrology Project as Project Director NHP during inception stage'
    },
    {
      heading: '',
      details: '6) Surveys of International Boundaries with neighbouring countries as Director, International Boundary Directorate'
    }, {
      heading: '',
      details: '7) Modernizing the curriculum of Photogrammetry & Remote Sensing as Head Faculty of P&RS faculty'
    },
    
  ]
}

const facultyPage={
  images:[
    { path: require('../../assests/photogrammetry/1.jpeg') },
    { path: require('../../assests/photogrammetry/10.jpeg') },
    { path: require('../../assests/photogrammetry/17.jpeg') },
    { path: require('../../assests/photogrammetry/18.jpeg') }
  ],
  
  heading:'Faculty of Photogrammetry & Remote Sensing',
  content:['The faculty offers fundamental and advanced level of training in the domain of Photogrammetry and Remote Sensing. The theoretical sessions and practical demonstrations inculcate a thorough understanding of fundamental concepts and processes amongst the trainees.  Participants are provided detailed operating instructions and sufficient hands-on practice on latest software’s during the practical exercises. Both online as well as offline courses are offered to cater to the in-house training requirements of the Organization and also to meet the custom requirements of various government and private agencies. The courses on Digital Photogrammetry, Image Processing, Drone Survey / Drone Data processing and LiDAR Data Processing etc.  are designed to make the trainees ready   for production environment in industry and prepare them for making meaningful contributions in real world  projects. The faculty is equipped with state-of-the-art facilities in class-rooms and laboratories. The trainings are imparted by quality subject experts having rich experience in the spheres of Photogrammetry and Remote Sensing.']
}

const FacultyPhotogrammetry = () => {
  return (
<div className='m-2 md:m-4 p-2 md:p-6'>
    <DetilnImg heading={facultyPage.heading} text={facultyPage.content} images={facultyPage.images} />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  m-4 md:m-6 lg:m-8 rounded-md gap-2 md:gap-4 lg:gap-6'>
    
      <LowerLeft Modata={Modata} headData={headData} />
      <LowerRight data={data} />
    </div>
    </div>
  )
}

export default FacultyPhotogrammetry