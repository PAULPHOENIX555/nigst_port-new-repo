import React from 'react'
import Inputs from '../components/Inputs';
import Button from '../components/Buttons/Button';

export default function Signup() {
  return (
    <div className='flex justify-center py-20 '>
      <div className="department-creation-wrapper rounded-md mx-auto my-auto md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h3 className="text-center mb-6">Sign Up</h3>
        <div className="flex flex-wrap mb-2">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <Inputs type={"text"} placeholder={"First Name"} />
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <Inputs type={"text"} placeholder={"Middle Name"} />
          </div>
          <div className="w-full md:w-1/3 px-2">
            <Inputs type={"text"} placeholder={"Last name"} />
          </div>
        </div>
        <div className="flex flex-wrap mb-2">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <Inputs type={"date"} />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <select className="w-full border rounded px-3 py-2">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <select className="w-full border rounded px-3 py-">
              <option>Select Faculty</option>
              <option>Survey of India</option>
              <option>THCPL</option>
              <option>NHCPL</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <Inputs type={"tel"} placeholder={"Enter Phone"} />
          </div>
        </div>

        <div className="w-full px-2 mb-2 ">
          <Inputs type={"email"} placeholder={"Enter email"} />
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-2">
            <Inputs type={"password"} placeholder={"Enter Password"} />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-2">
            <Inputs type={"password"} placeholder={"Confirm Password"} />
          </div>
        </div>
        <Button value={"Submit"} className="w-3/4" />
      </div>
    </div>
  )
}

