import React, { useEffect, useState } from 'react'
import Inputs from '../components/Inputs';
import Button from '../components/Buttons/Button';
import axios from 'axios';

export default function Signup() {
  const [input,setInput]=useState({
    fname:"",
    lname:"",
    mname:"",
    phone:"",
    email:"",
    password:"",
    dob:"",
    cpassword:""
  })
  const [gender,setGender] = useState();
  const [org,setOrg] = useState();
  const [orgView,setOrgView] = useState([])


useEffect(()=>{
  const urlView = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/admin/organizationfilter?type=${""}&category=${""}`;
  axios.get(urlView).then((res)=>{
    setOrgView(res.data)
    console.log(res.data)
  }).catch((error)=>{
    console.log(error)
  })
},[])

function handleInputs(e){
  const {name,value} = e.target;
  setInput((prevInput)=>({
    ...prevInput,[name]:value
  }))
}

  function handleSignUp(){
    // fname,mname,lname,dob,phone,gender,email password,organization
  const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/secure/signup";
  const otpUrl = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/sms/so";
    const data={
      fname:`${input.fname}`,
      mname:`${input.mname}`,
      lname:`${input.lname}`,
      dob:`${input.dob}`,
      phone:`${input.phone}`,
      gender:`${gender}`,
      email:`${input.email}`,
      password:`${input.password}`,
      organization:`${org}` 
    }
    const dataEmail={
      email:`${input.email}`
    }
    axios.post(otpUrl,dataEmail).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error);
    })
    axios.post(url,data).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(console.log(error))
    })
  }

  return (
    <div className='flex justify-center py-20 '>
      <div className="department-creation-wrapper rounded-md mx-auto my-auto md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h3 className="text-center mb-6">Sign Up</h3>
        <div className="flex flex-wrap mb-2">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <Inputs type={"text"} placeholder={"First Name"} name={"fname"} fun={handleInputs}/>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <Inputs type={"text"} placeholder={"Middle Name"} name={"mname"} fun={handleInputs}/>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <Inputs type={"text"} placeholder={"Last name"} name={"lname"} fun={handleInputs}/>
          </div>
        </div>
        <div className="flex flex-wrap mb-2">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <Inputs type={"date"} name={"dob"} fun={handleInputs}/>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <select className="w-full border rounded px-3 py-2" onChange={(e)=>setGender(e.target.value)}>
              <option>Select Gender</option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"other"}>Other</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <select className="w-full border rounded px-3 py-" onChange={(e)=>setOrg(e.target.value)}>
              <option>Select Organization</option>
              {
                orgView.map((data,index)=>{
                  return <option value={data.organization} key={index}>{data.organization}</option>
                })
              }
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <Inputs type={"tel"} placeholder={"Enter Phone"} name={"phone"} fun={handleInputs}/>
          </div>
        </div>

        <div className="w-full px-2 mb-2 ">
          <Inputs type={"email"} placeholder={"Enter email"} name={"email"} fun={handleInputs}/>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-2">
            <Inputs type={"password"} placeholder={"Enter Password"} name={"password"} fun={handleInputs}/>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-2">
            <Inputs type={"password"} placeholder={"Confirm Password"} name={"cpassword"} fun={handleInputs}/>
          </div>
        </div>
        <Button value={"Submit"} className="w-3/4" fun={handleSignUp}/>
      </div>
    </div>
  )
}

