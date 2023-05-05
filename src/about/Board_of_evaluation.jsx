import React from 'react'
import ImgCard from '../components/pageStructure/ImgCard';


const dataB = {
    title: 'Board Of Evaluation',
    members: [
      {
        name: 'P.V.Srinivas',
        designation: 'Addl SG,NIGST',
        position: 'Chairman',
        image: require('../assests/images stucture/sirinivas.png')
      },
      {
        name: 'G.Varuna Kumar',
        designation: 'Head faculty of TS & LI',
        position: 'Member',
        image: require('../assests/images stucture/varuna.png')
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
        designation: 'Head faculty of Geo- IC',
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
        name: 'Salil Geol',
        designation: 'Assistant Professor',
        position: 'Member',
        image: require('../assests/images stucture/salil.png')
      },
      {
        name: 'Pankaj Mishra',
        designation: 'DSG(Tech), NIGST',
        position: 'Member',
        image: require('../assests/images stucture/pankaj mishra.png')
      },
      {
        name: 'Kamalkar Karlapalem',
        designation: 'Professor',
        position: 'Member',
        image: require('../assests/images stucture/kamalkar.png')
      }
     
    ]
  };
  
const Board_of_evaluation = () => {
  return (
    <div><ImgCard title={dataB.title} members={dataB.members} /></div>
  )
}

export default Board_of_evaluation