import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function () {
    const [viewData,setViewData] = useState([])
    useEffect(()=>{
        const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/course/calender";
        axios.get(url).then((res)=>{
            console.log(res)
            setViewData(res.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>

<tbody>
    <tr>
        <th>S.No</th>
        <th>Course Name</th>
        <th>Course Id</th>
        <th>Course No.</th>
        <th>Course Code</th>
        <th>Course Officer</th>
        <th>Course Faculty</th>
        <th>Course Mode</th>
        <th>Course Type</th>
        <th>Eligiblity</th>
        <th>Course Duration</th>
        <th>Course Fee</th>
        <th>Course Capacity</th>
        <th>Course Start Date</th>
        <th>Course Completion Date</th>
        <th>Description</th>
    </tr>
    {
        viewData.map((data,index)=>{
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.course_title}</td>
                    <td>{data.course_id}</td>
                    <td>{data.course_no}</td>
                    <td>{data.course_code}</td>
                    <td>{data.course_officer}</td>
                    <td>{data.faculty}</td>
                    <td>{data.course_mode}</td>
                    <td>{data.course_type}</td>
                    <td>{data.eligibility}</td>
                    <td>{data.course_duration}</td>
                    <td>{data.fee}</td>
                    <td>{data.course_capacity}</td>
                    <td>{data.start_date}</td>
                    <td>{data.completion_date}</td>
                    <td>{data.description}</td>
                </tr>
            )
        })
    }
</tbody>
    </div>
  )
}