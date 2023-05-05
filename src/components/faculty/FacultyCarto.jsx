import React from 'react'
import DetilnImg from '../pageStructure/DetilnImg';
import LowerLeft from './LowerLeft';
import LowerRight from './LowerRight';
import imageHead from '../../assests/photogrammetry/S K Sinha Head Faculty - C,DM&GIS.JPG'

const headData = {
    name: 'S K Sinha',
    designation: 'Deputy Surveyor General',
    position: 'Head Of Faculty',
    image: imageHead
  }
  
  const data = [
    {
      name: 'Yogachander P. A.',
      designation: 'Superintending Surveyor',
      position: 'Faculty'
    },{
      name: 'N. N. Rama Prasad',
      designation: 'Superintending Surveyor (ADHOC)',
      position: 'Faculty'
    },
    {
      name: 'B C Sahoo',
      designation: 'Officer Surveyor',
      position: 'Faculty'
    },
    {
      name: 'Maheshwar Singh',
      designation: 'Officer Surveyor',
      position: 'Faculty'
    },
    {
      name: 'K G Sundara Rao',
      designation: 'Officer Surveyor',
      position: 'Faculty'
    },
    {
        name: 'A. Ramesh',
        designation: 'Surveyor',
        position: 'Instructor'
      },
      {
        name: 'Anand Kumar Sahu',
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
      { path: require('../../assests/catoDM_GIS/DSC_0052.JPG') },
      { path: require('../../assests/catoDM_GIS/DSC_0199.JPG') },
  
      { path: require('../../assests/catoDM_GIS/DSC_0403.JPG') },
      { path: require('../../assests/catoDM_GIS/DSC_0405.JPG') },
      
    ],
    
    heading:'Faculty of Cartography, Digital Mapping & Geographic Information System',
    content:['The faculty offers fundamental and progressive level of training in the domain of Cartography, Digital Mapping, and Geographic Information Systems.','The trainees are imparted with the core concepts in the theoretical sessions followed by the best-in-class live lab demonstrations.',' Participants are provided In-depth instruction and a hands-on exercise using the latest software/s.The training programmes aim at inculcating and exposing the trainees with the industrial best practices and software/s thereby unleashing the full potential of the technological advancements.','Both online as well as offline courses are undertaken to cater to the wide variety of participants from Departmental, private and other governmental agencies.','The courses in GIS are designed to simulate the real world scenario and to provide solutions to the real world problems.','The faculty is equipped with well-trained faculty members with over all working experiences both in the conventional and modern technologies the spheres of Digital mapping and GIS.']
  }
const FacultyCarto = () => {
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

export default FacultyCarto