import React, { useState } from 'react'
import Input from '../components/Inputs'
import Button from '../components/Buttons/Button'
export default function NewUserVerification() {
    let [verificationFilterValue , setVerificationFilterValue] = useState();
    function handleFilter(){
        console.log(verificationFilterValue)
    }
  return (
    <div className='user-verification w-full'>
      <div className='filter-wrapper'>
        <div>
       <span>By Name</span> <Input type={"text"} placeholder={"Search by Name"}/>
        </div>
        <div>
       <span>By Name</span> <Input type={"text"} placeholder={"Search by Organization"}/>
        </div>
       <select onChange={(e)=>setVerificationFilterValue(e.target.value)}>
        <option>Select by Verification Status</option>
        <option value={"all"}>All Student</option>
        <option value={"verified"}>All verified Student</option>
        <option value={"non-verified"}>All non-verified Student</option>
       </select>
       <div>
       <span>From Date</span> <Input type={"date"}/>
       </div>
       <div>
       <span>To Date</span> <Input type={"date"}/>
       </div>
       <Button value={"Apply"} fun={handleFilter}/>
      </div>   
      <div className='user-details-wrapper'>
        <table>
            <tr>
                <th>S.Id</th>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Student Phone</th>
                <th>Student Organization</th>
                <th>Student Gender</th>
                <th>Mobile Verification</th>
                <th>Email Verification</th>
                <th>NIGST Verification</th>
            </tr>
            <tr>
                <td>101</td>
                <td>Shabab</td>
                <td>alishabab62@gmail.com</td>
                <td>6396042652</td>
                <td>Survey Of India</td>
                <td>Male</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Shivani</td>
                <td>shakyashivani81@gmail.com</td>
                <td>6396042652</td>
                <td>Survey Of India</td>
                <td>Female</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
            </tr>
        </table>
        </div>   
    </div>
  )
}
