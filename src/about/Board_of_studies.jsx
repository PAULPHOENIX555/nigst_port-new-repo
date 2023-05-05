import React from 'react'
import ImgCard from '../components/pageStructure/ImgCard'

const dataB = {
    title: 'Board Of Studies',
    members: [
      {
        name: 'P.V.Srinivas',
        designation: 'Addl SG,NIGST',
        position: 'Chairman',
        image: require('../assests/images stucture/sirinivas.png')
      },
      {
        name: 'Pankaj Mishra',
        designation: 'DSG(Tech)/ DSG Academics, NIGST',
        position: 'Member',
        image: require('../assests/images stucture/pankaj mishra.png')
      },
      {
        name: 'G.Varuna Kumar',
        designation: 'Head faculty of Geodesy',
        position: 'Member',
        image: require('../assests/images stucture/varuna.png')
      },
      {
        name: 'S.K.Sinha',
        designation: 'Head faculty of P & RS',
        position: 'Member',
        image: require('../assests/images stucture/sk sinha.png')
      },
      {
        name: 'S.K.Sinha',
        designation: 'Head faculty Cartogrophy Digital mapping & GIS',
        position: 'Member',
        image: require('../assests/images stucture/sk sinha.png')
      },
      {
        name: 'Pankaj Mishra',
        designation: 'Head faculty of Geo- ICT',
        position: 'Member',
        image: require('../assests/images stucture/pankaj mishra.png')
      },
      {
        name: 'S.K.Sinha',
        designation: 'DSG (Tech), SGO,SOI',
        position: 'Member',
        image: require('../assests/images stucture/sk sinha.png')
      },
      {
        name: 'Mr.Rajesh Mathur',
        designation: 'Advisor,ESRI India',
        position: 'Member',
        image: require('../assests/images stucture/rajesh mathur.png')
      },
      {
        name: 'Prof.Bharat Lohani',
        designation: 'Associate Professor',
        position: 'Member',
        image: require('../assests/images stucture/bharat lohani.png')
      },
      {
        name: 'Dr.Rama Chandra Prasad',
        designation: 'Associate Professor',
        position: 'Member',
        image: require('../assests/images stucture/rama chandra.png')
      },
      {
        name: 'Pankaj Mishra',
        designation: 'DSG(Tech), NIGST',
        position: 'Member Secretary',
        image: require('../assests/images stucture/pankaj mishra.png')
      },
      
    ]
  };
const Board_of_studies = () => {
  return (
    <div><ImgCard title={dataB.title} members={dataB.members} /></div>
  )
}

export default Board_of_studies