import React from 'react'
import ImgCard from '../components/pageStructure/ImgCard'

const dataB = {
  title: 'Board Of Governance',
  members: [
    {
      name: 'Shri Sunil Kumar',
      designation: 'Surveyor General of IndiaT',
      position: 'Chairman',
      image: require('../assests/images stucture/sunil.png')
    },
    {
      name: 'P.V.Srinivas',
      designation: 'Addl SG,NIGST',
      position: 'Chairman',
      image: require('../assests/images stucture/sirinivas.png')
    },
    {
      name: 'Shri. P.V. Rajasekhar',
      designation: '(Current Duty)Addl.SG, Shillong,North Eartern Zone, Meghalaya',
      position: 'Chairman',
      image: require('../assests/images stucture/rajeshekhar.png')
    },
    {
      name: 'Dr.U.N. Mishra',
      designation: '(Current Duty)Addl.SG, Specialized Zone, Dehradun',
      position: 'Member',
      image: require('../assests/images stucture/UN mishra.png')
    },
    {
      name: 'Shri R.K.Nigam',
      designation: 'Addl SG, Western Zone, Jaipu',
      position: 'Member',
      image: require('../assests/images stucture/rk nigam.png')
    },
    {
      name: 'Col Amardeep Singh',
      designation: 'Addl SG,Chandigarh',
      position: 'Member',
      image: require('../assests/images stucture/col.png')
    },
    {
      name: 'Shri. P.V. Rajasekhar',
      designation: '(Current Duty)Addl.SG, Northern Zone, Kolkata,West Bengal',
      position: 'Member',
      image: require('../assests/images stucture/rajeshekhar.png')
    },
    {
      name: 'P.V.Srinivas',
      designation: '(Additional Charge) Addl.S.G, Southern Zone, Bangalore',
      position: 'Member',
      image: require('../assests/images stucture/sirinivas.png')
    },
    {
      name: 'Shri R.K.Nigam',
      designation: '(Additional Charge) Addl SG, Central Zone,  Jabalpur, MP',
      position: 'Member',
      image: require('../assests/images stucture/rk nigam.png')
    },
    {
      name: 'Brig. B Sareen Chander',
      designation: '(Additional Charge) Addl SG, Printing Zone Hyderabad',
      position: 'Member',
      image: require('../assests/images stucture/brij.png')
    },
    {
      name: 'Onkar Dikshit',
      designation: 'Professor',
      position: 'Member',
      image: require('../assests/images stucture/onkar.png')
    },
    {
      name: 'K.S.Rajan',
      designation: 'Professor',
      position: 'Member',
      image: require('../assests/images stucture/ks rajan.png')
    },
    {
      name: 'Pankaj Mishra',
      designation: 'DSG (Tech.), NIGST',
      position: 'Member Secretary',
      image: require('../assests/images stucture/pankaj mishra.png')
    },
  ]
};



const Board_of_governance = () => {
  return (
    <div><ImgCard title={dataB.title} members={dataB.members} /></div>
  )
}

export default Board_of_governance