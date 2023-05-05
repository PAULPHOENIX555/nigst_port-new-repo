import React from 'react';
import HostelComp from './HostelComp';
import SportsComp from './SportsComp';
import CampusComp from './CampusComp';
import DetilnImg from '../components/pageStructure/DetilnImg';
import ImgLeftComp from '../components/pageStructure/ImgLeftComp';

const wholeData={
  campus:{
    heading:'NIGST CAMPUS',
    data:[
      'NIGST campus is a state-of-the-art training facility located near Uppal junction, Hyderabad. The campus is conveniently located just 5 km away from Secunderabad junction railway station and 35 km away from Rajiv Gandhi International Airport Hyderabad.',
      'It boasts modern classrooms and labs that are fully equipped for both online and offline training, ensuring that trainees receive a world-class learning experience. The library is well-stocked with a vast collection of historical manuals for surveying and the latest textbooks on surveying and mapping related topics.',
      'Additionally, the campus offers affordable hostel and mess facilities for trainees and a guest house for senior government officials and guest faculty.',
      'NIGST campus also has excellent sports facilities, including cricket, volleyball, badminton, and table tennis. These facilities provide trainees with the opportunity to stay physically fit while developing their teamwork and collaboration skills.',
      'The campus is surrounded by natural beauty, with picturesque views and an abundance of wildlife, including deer and peacocks. This creates a serene and peaceful environment that promotes learning and relaxation.',
      'In summary, NIGST campus is a top-tier training facility that provides trainees with an exceptional learning experience. Its world-class facilities, extensive resources, and natural beauty make it a great place to learn, grow, and develop new skills.'
       
    ],
    images:[
      { path: require('../assests/NIGST Campus/Snapshot_1424.png') },

      { path: require('../assests/NIGST Campus/Snapshot_1434.png') },


        { path: require('../assests/NIGST Campus/Snapshot_1422.png') },
        { path: require('../assests/NIGST Campus/Snapshot_1443.png') },

      
       
      
    ]
  },
  sports:{
    heading:'SPORTS FACILITY',
    data:[
      'NIGST campus is a state-of-the-art training facility located near Uppal junction, Hyderabad. The campus is conveniently located just 5 km away from Secunderabad junction railway station and 35 km away from Rajiv Gandhi International Airport Hyderabad.',
      'It boasts modern classrooms and labs that are fully equipped for both online and offline training, ensuring that trainees receive a world-class learning experience. The library is well-stocked with a vast collection of historical manuals for surveying and the latest textbooks on surveying and mapping related topics.',
      'Additionally, the campus offers affordable hostel and mess facilities for trainees and a guest house for senior government officials and guest faculty.',
      'NIGST campus also has excellent sports facilities, including cricket, volleyball, badminton, and table tennis. These facilities provide trainees with the opportunity to stay physically fit while developing their teamwork and collaboration skills.',
      'The campus is surrounded by natural beauty, with picturesque views and an abundance of wildlife, including deer and peacocks. This creates a serene and peaceful environment that promotes learning and relaxation.',
      'Additionally, the campus offers affordable hostel and mess facilities for trainees and a guest house for senior government officials and guest faculty.',
     'In summary, NIGST campus is a top-tier training facility that provides trainees with an exceptional learning experience. Its world-class facilities, extensive resources, and natural beauty make it a great place to learn, grow, and develop new skills.'
    ],
    images:[
     
        { path: require('../assests/Sports/Snapshot_1425.png') },
        { path: require('../assests/Sports/Snapshot_1426.png') },
        { path: require('../assests/Sports/Snapshot_1427.png') },
        { path: require('../assests/Sports/Snapshot_1428.png') },

      
    ]
  },
  hostel:{
    heading:'NIGST HOSTEL',
    data:[
      'NIGST campus is a state-of-the-art training facility located near Uppal junction, Hyderabad. The campus is conveniently located just 5 km away from Secunderabad junction railway station and 35 km away from Rajiv Gandhi International Airport Hyderabad.',
      'It boasts modern classrooms and labs that are fully equipped for both online and offline training, ensuring that trainees receive a world-class learning experience. The library is well-stocked with a vast collection of historical manuals for surveying and the latest textbooks on surveying and mapping related topics.',
      'Additionally, the campus offers affordable hostel and mess facilities for trainees and a guest house for senior government officials and guest faculty.',
      'NIGST campus also has excellent sports facilities, including cricket, volleyball, badminton, and table tennis. These facilities provide trainees with the opportunity to stay physically fit while developing their teamwork and collaboration skills.',
      'The campus is surrounded by natural beauty, with picturesque views and an abundance of wildlife, including deer and peacocks. This creates a serene and peaceful environment that promotes learning and relaxation.',
      'Additionally, the campus offers affordable hostel and mess facilities for trainees and a guest house for senior government officials and guest faculty.',
     'In summary, NIGST campus is a top-tier training facility that provides trainees with an exceptional learning experience. Its world-class facilities, extensive resources, and natural beauty make it a great place to learn, grow, and develop new skills.'
    ],
    images:[
     
      { path: require('../assests/Hostels/Snapshot_1444.png') },
      { path: require('../assests/Hostels/Snapshot_1445.png') },
      { path: require('../assests/Hostels/Snapshot_1447.png') },
      { path: require('../assests/Hostels/Snapshot_1454.png') },

    
  ]
  }
}


const NigstCampus = () => {
  return (

<div className='m-2 md:m-4 p-2 md:p-6'>
{/* <CampusComp wholeData={wholeData} />
 <SportsComp wholeData={wholeData} />
 <HostelComp wholeData={wholeData} /> */}
 <DetilnImg heading={wholeData.campus.heading} text={wholeData.campus.data} images={wholeData.campus.images} />
 <ImgLeftComp heading={wholeData.sports.heading} text={wholeData.sports.data} images={wholeData.sports.images} />
 <DetilnImg heading={wholeData.hostel.heading} text={wholeData.hostel.data} images={wholeData.hostel.images}/>
</div>


  );
};

export default NigstCampus;
